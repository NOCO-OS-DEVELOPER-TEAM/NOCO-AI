/**
 * NOCO Inside — Datei- & Textanalyse (Pipeline-System, offline)
 */
(function (global) {
  "use strict";

  var CATEGORIES = [
    { id: "document", icon: "📄", label: "Dokument", hint: "Thema · Kernpunkte · Keywords" },
    { id: "keypoints", icon: "🎯", label: "Kernpunkte", hint: "Inside Engine · Top 5 mit Score" },
    { id: "summary", icon: "📋", label: "Summary", hint: "5 Stichpunkte" },
    { id: "proof", icon: "✍️", label: "Textprüfung", hint: "Rechtschreibung · Grammatik" },
    { id: "code", icon: "💻", label: "Code Review", hint: "Sicherheit · Muster" },
    { id: "image", icon: "🎨", label: "Bildanalyse", hint: "KI-Wahrscheinlichkeit · Stil" },
    { id: "ask", icon: "❓", label: "Frag die Datei", hint: "Frage im Eingabefeld" },
    { id: "voice", icon: "🎙️", label: "Sprache", hint: "Mikro → Text" }
  ];

  var INSIDE_PIPELINE = [
    { id: "scan", label: "SCAN", desc: "Datei einlesen & normalisieren" },
    { id: "token", label: "TOKEN", desc: "Wörter & Frequenz extrahieren" },
    { id: "classify", label: "CLASSIFY", desc: "Thema & Domäne erkennen" },
    { id: "keypoints", label: "KEYPOINTS", desc: "Kernpunkte mit Confidence" },
    { id: "report", label: "REPORT", desc: "Inside-Bericht zusammenbauen" }
  ];

  var CODE_PATTERNS = [
    { re: /password\s*=\s*["'][^"']+["']/i, msg: "Passwort im Quellcode gefunden", level: "warn" },
    { re: /api[_-]?key\s*=\s*["'][^"']+["']/i, msg: "API Key sichtbar", level: "warn" },
    { re: /secret\s*=\s*["'][^"']+["']/i, msg: "Secret im Code", level: "warn" },
    { re: /\beval\s*\(/, msg: "eval() erkannt", level: "warn" },
    { re: /innerHTML\s*=/, msg: "innerHTML-Zuweisung (XSS-Risiko)", level: "info" },
    { re: /document\.write\s*\(/, msg: "document.write() erkannt", level: "info" },
    { re: /TODO|FIXME|HACK/, msg: "Offener TODO/FIXME-Kommentar", level: "info" }
  ];

  var TOPIC_RULES = [
    { re: /künstliche intelligenz|kuenstliche intelligenz|machine learning|neuronale|neural|deep learning|\bki\b|\bai\b/i, topic: "Künstliche Intelligenz", domain: "tech" },
    { re: /javascript|python|programmier|typescript|algorithm|function\s*\(/i, topic: "Programmierung & Code", domain: "tech" },
    { re: /geschäft|business|startup|marketing|verkauf|umsatz/i, topic: "Business & Strategie", domain: "business" },
    { re: /gesundheit|fitness|medizin|training|ernährung/i, topic: "Gesundheit & Fitness", domain: "health" },
    { re: /schule|lernen|pruefung|mathe|klausur|studium/i, topic: "Bildung & Lernen", domain: "edu" },
    { re: /vertrag|recht|gesetz|paragraph|klausel/i, topic: "Recht & Verträge", domain: "legal" },
    { re: /projekt|meeting|deadline|team|aufgabe/i, topic: "Projekt & Organisation", domain: "work" }
  ];

  function guessFileKind(name, mime, text) {
    var n = String(name || "").toLowerCase();
    if (mime && mime.indexOf("image") === 0) return "image";
    if (/\.(png|jpe?g|webp|gif|bmp)$/i.test(n)) return "image";
    if (/\.(js|ts|tsx|jsx|py|java|cs|cpp|c|h|go|rs|php|rb|swift)$/i.test(n)) return "code";
    if (/\.(html|css|json|xml|sql|sh|ps1)$/i.test(n)) return "code";
    if (/\.(txt|md|markdown|log|csv)$/i.test(n)) return "text";
    if (/\.(pdf|doc|docx)$/i.test(n)) return "document";
    if (text && /function\s+|const\s+|import\s+|class\s+|<\?php|def\s+/.test(text)) return "code";
    return "text";
  }

  function pickCategoryForFile(kind, selected) {
    if (selected && selected !== "voice") return selected;
    if (kind === "image") return "image";
    if (kind === "code") return "code";
    return "document";
  }

  function extractRoughBinaryText(buffer) {
    var bytes = new Uint8Array(buffer);
    var chunks = [];
    var cur = "";
    var i, c;
    for (i = 0; i < bytes.length; i++) {
      c = bytes[i];
      if (c >= 32 && c < 127) cur += String.fromCharCode(c);
      else if (cur.length > 12) { chunks.push(cur); cur = ""; }
      else cur = "";
    }
    if (cur.length > 12) chunks.push(cur);
    return chunks.join(" ").replace(/\s+/g, " ").trim();
  }

  function readFileContent(file) {
    return new Promise(function (resolve, reject) {
      if (!file) { reject(new Error("Keine Datei")); return; }
      var name = file.name || "datei";
      var mime = file.type || "";
      var kind = guessFileKind(name, mime, "");

      if (kind === "image") {
        resolve({ kind: "image", name: name, mime: mime, file: file, text: "" });
        return;
      }

      if (/\.(pdf|doc|docx)$/i.test(name) || mime.indexOf("pdf") >= 0) {
        var fr = new FileReader();
        fr.onload = function () {
          var rough = extractRoughBinaryText(fr.result);
          resolve({
            kind: "document",
            name: name,
            mime: mime,
            text: rough || ("[Inside SCAN: " + name + " · " + Math.round(file.size / 1024) + " KB · simuliert]"),
            simulated: !rough || rough.length < 40
          });
        };
        fr.onerror = function () { reject(new Error("Datei konnte nicht gelesen werden")); };
        fr.readAsArrayBuffer(file);
        return;
      }

      var reader = new FileReader();
      reader.onload = function () {
        var text = String(reader.result || "");
        resolve({ kind: guessFileKind(name, mime, text), name: name, mime: mime, text: text, simulated: false });
      };
      reader.onerror = function () { reject(new Error("Lesefehler")); };
      reader.readAsText(file, "UTF-8");
    });
  }

  function tokenizeWords(text) {
    return String(text || "").toLowerCase()
      .replace(/[^a-zA-ZäöüÄÖÜß0-9\s-]/g, " ")
      .split(/\s+/)
      .filter(function (w) { return w.length > 3; });
  }

  function topKeywords(text, n) {
    n = n || 6;
    var words = tokenizeWords(text);
    var freq = {};
    var stop = { dass: 1, diese: 1, dieser: 1, werden: 1, haben: 1, nach: 1, auch: 1, oder: 1, when: 1, that: 1, with: 1, from: 1, they: 1, been: 1, were: 1, said: 1, each: 1, which: 1, their: 1, will: 1, about: 1, would: 1, there: 1, could: 1, other: 1, sowie: 1, durch: 1, unter: 1 };
    var i, w, list = [];
    for (i = 0; i < words.length; i++) {
      w = words[i];
      if (stop[w]) continue;
      freq[w] = (freq[w] || 0) + 1;
    }
    Object.keys(freq).forEach(function (k) { list.push({ w: k, c: freq[k] }); });
    list.sort(function (a, b) { return b.c - a.c; });
    return list.slice(0, n).map(function (x) { return x.w; });
  }

  function splitSentences(text) {
    return String(text || "")
      .replace(/\r\n/g, "\n")
      .replace(/[•·▪]\s*/g, "\n")
      .replace(/^\s*[-*]\s+/gm, "")
      .replace(/([.!?;:])\s+/g, "$1\n")
      .split("\n")
      .map(function (s) { return s.replace(/\s+/g, " ").trim(); })
      .filter(function (s) { return s.length > 8; });
  }

  function classifyTopic(text) {
    var t = String(text || "");
    var i, rule, kw;
    for (i = 0; i < TOPIC_RULES.length; i++) {
      rule = TOPIC_RULES[i];
      if (rule.re.test(t)) return { topic: rule.topic, domain: rule.domain };
    }
    kw = topKeywords(text, 3);
    return { topic: kw.length ? kw.join(" · ") : "Allgemeiner Inhalt", domain: "general" };
  }

  function scoreKeyPoint(sentence, index, total, keywords) {
    var score = 0;
    var s = sentence.toLowerCase();
    var wi, w;
    score += Math.min(sentence.length / 28, 4);
    if (index === 0) score += 2.5;
    if (index < 3) score += 1.2;
    if (/\d+[%€$]?|\b(wichtig|kern|haupt|zentral|bedeutet|fazit|zusammenfass|daher|deshalb)\b/i.test(s)) score += 2.8;
    if (keywords && keywords.length) {
      for (wi = 0; wi < keywords.length; wi++) {
        w = keywords[wi];
        if (s.indexOf(w) >= 0) score += 1.4;
      }
    }
    if (sentence.length > 280) score -= 1.5;
    if (sentence.length < 18) score -= 0.5;
    var confidence = Math.min(96, Math.max(52, Math.round(48 + score * 7)));
    return { score: score, confidence: confidence };
  }

  function extractKeyPoints(text, max) {
    max = max || 5;
    var sentences = splitSentences(text);
    if (!sentences.length) {
      var chunks = String(text || "").replace(/\s+/g, " ").trim();
      if (chunks.length > 20) sentences = [chunks.slice(0, 120), chunks.slice(120, 260)].filter(Boolean);
    }
    var keywords = topKeywords(text, 8);
    var scored = [];
    var i, sc, item;
    for (i = 0; i < sentences.length; i++) {
      sc = scoreKeyPoint(sentences[i], i, sentences.length, keywords);
      scored.push({
        text: sentences[i],
        index: i + 1,
        score: sc.score,
        confidence: sc.confidence
      });
    }
    scored.sort(function (a, b) { return b.score - a.score; });
    var picked = [];
    var seen = {};
    for (i = 0; i < scored.length && picked.length < max; i++) {
      var dupKey = scored[i].text.slice(0, 48);
      if (seen[dupKey]) continue;
      seen[dupKey] = true;
      picked.push(scored[i]);
    }
    i = 0;
    while (picked.length < max && i < sentences.length) {
      var sk = sentences[i].slice(0, 48);
      if (!seen[sk]) {
        seen[sk] = true;
        picked.push({
          text: sentences[i],
          index: i + 1,
          score: 1,
          confidence: 58
        });
      }
      i++;
    }
    return picked.slice(0, max);
  }

  function buildPipelineHeader(payload, classification) {
    var words = tokenizeWords(payload.text || "").length;
    return (
      "**NOCO Inside Engine** · Pipeline `SCAN→TOKEN→CLASSIFY→KEYPOINTS→REPORT`\n\n" +
      "**Datei:** " + (payload.name || "Text") +
      (payload.simulated ? " *(extrahiert/simuliert)*" : "") + "\n" +
      "**SCAN:** " + (payload.text || "").length + " Zeichen · ~" + words + " Tokens\n" +
      "**CLASSIFY:** " + classification.topic + " · Domäne `" + classification.domain + "`\n"
    );
  }

  function linesOf(text) {
    return String(text || "").split(/\n/);
  }

  function proofreadText(text) {
    var lines = linesOf(text);
    var issues = [];
    var lineRe = [
      { re: /\b(\w+)\s+\1\b/gi, msg: "Doppeltes Wort erkannt" },
      { re: /\s+,/, msg: "Leerzeichen vor Komma" },
      { re: /,,+/, msg: "Doppeltes Komma" },
      { re: /\.\./, msg: "Doppelter Punkt" },
      { re: /[a-zäöüß]{20,}/i, msg: "Sehr langes Wort (Tippfehler?)" },
      { re: /\b(teh|hte|adn|taht)\b/i, msg: "Moeglicher Tippfehler" }
    ];
    var li, m, re, line;
    for (li = 0; li < lines.length; li++) {
      line = lines[li];
      if (!line.trim()) continue;
      for (m = 0; m < lineRe.length; m++) {
        re = lineRe[m];
        if (re.re.test(line)) {
          issues.push({ line: li + 1, msg: re.msg, snippet: line.trim().slice(0, 60) });
          re.re.lastIndex = 0;
        }
      }
      if (!/[.!?]$/.test(line.trim()) && line.trim().length > 40) {
        issues.push({ line: li + 1, msg: "Satzzeichen am Ende fehlt evtl.", snippet: line.trim().slice(0, 60) });
      }
    }
    return issues.slice(0, 12);
  }

  function reviewCode(text) {
    var findings = [];
    var i, p;
    for (i = 0; i < CODE_PATTERNS.length; i++) {
      p = CODE_PATTERNS[i];
      if (p.re.test(text)) {
        findings.push({ level: p.level, msg: p.msg });
        p.re.lastIndex = 0;
      }
    }
    var lineCount = linesOf(text).length;
    if (lineCount > 200) findings.push({ level: "info", msg: "Grosse Datei (" + lineCount + " Zeilen) — Review stichprobenartig" });
    return findings;
  }

  function answerFromContent(text, question) {
    var q = String(question || "").toLowerCase();
    var sentences = splitSentences(text);
    if (!sentences.length) return "Kein lesbarer Inhalt in der Datei gefunden.";

    if (/worum|thema|inhalt|geht es|about/.test(q)) {
      var cls = classifyTopic(text);
      var kps = extractKeyPoints(text, 2);
      return "**Thema:** " + cls.topic + "\n\n**Kern:** " + (kps[0] ? kps[0].text : sentences[0]);
    }
    if (/zusammenfass|fass.*zusammen|summary|kurz/.test(q)) {
      return "**Kurzfassung:**\n" + sentences.slice(0, 4).map(function (s, i) { return (i + 1) + ". " + s; }).join("\n");
    }
    if (/kernpunkt|key\s*point|wichtigste|hauptpunkt/.test(q)) {
      var pts = extractKeyPoints(text, 5);
      return "**Kernpunkte:**\n" + pts.map(function (p, i) {
        return (i + 1) + ". **" + p.confidence + "%** — " + p.text;
      }).join("\n");
    }
    if (/seite\s*(\d+)/.test(q)) {
      return "**Antwort (Inside SCAN):** Auf der angefragten Stelle: " + sentences.slice(0, 3).join(" ").slice(0, 280) + "…";
    }
    if (/kapitel\s*(\d+)/.test(q)) {
      return "**Kapitel-Auszug:** " + sentences[Math.min(3, sentences.length - 1)];
    }

    var hits = sentences.filter(function (s) {
      var sl = s.toLowerCase();
      var words = q.split(/\s+/).filter(function (w) { return w.length > 4; });
      return words.some(function (w) { return sl.indexOf(w) >= 0; });
    });
    if (hits.length) return "**Gefunden:**\n" + hits.slice(0, 3).map(function (h) { return "• " + h; }).join("\n");
    return "**Antwort:** " + sentences[0] + (sentences[1] ? "\n\n*Weiter:* " + sentences[1] : "");
  }

  function formatKeyPointsBlock(points) {
    if (!points || !points.length) return "**Kernpunkte:** —\n";
    var out = "**Kernpunkte (Inside KEYPOINTS):**\n";
    points.forEach(function (p, i) {
      var line = (p.text || "").trim();
      if (line.length > 320) line = line.slice(0, 317) + "…";
      out += (i + 1) + ". **" + p.confidence + "%** — " + line + "\n";
    });
    return out + "\n";
  }

  function buildDocumentReport(payload) {
    var text = payload.text || "";
    var classification = classifyTopic(text);
    var kw = topKeywords(text, 6);
    var keyPoints = extractKeyPoints(text, 5);
    var preview = text.replace(/\s+/g, " ").trim().slice(0, 320);
    var summaryLines = splitSentences(text).slice(0, 3);

    return (
      buildPipelineHeader(payload, classification) +
      "**Schlüsselbegriffe:** " + (kw.length ? kw.map(function (k) { return "`" + k + "`"; }).join(" · ") : "—") + "\n\n" +
      formatKeyPointsBlock(keyPoints) +
      "**Zusammenfassung:**\n" +
      (summaryLines.length ? summaryLines.map(function (s, i) { return (i + 1) + ". " + s; }).join("\n") : preview.slice(0, 200)) + "\n\n" +
      (preview.length > 80 ? "**Auszug:** " + preview.slice(0, 160) + "…\n\n" : "") +
      "*NOCO Inside · Pipeline simuliert · lokal*"
    );
  }

  function buildKeyPointsReport(payload) {
    var text = payload.text || "";
    var classification = classifyTopic(text);
    var keyPoints = extractKeyPoints(text, 7);
    var kw = topKeywords(text, 5);

    return (
      buildPipelineHeader(payload, classification) +
      formatKeyPointsBlock(keyPoints) +
      "**Keyword-Anker:** " + (kw.length ? kw.join(", ") : "—") + "\n\n" +
      "**System:** Jeder Kernpunkt = Satz-Score (Länge · Position · Keywords · Signalwörter)\n\n" +
      "*NOCO Inside KEYPOINTS · Confidence simuliert*"
    );
  }

  function buildSummaryReport(payload, summarizeFn) {
    if (summarizeFn) return summarizeFn(payload.text, { skipFlavor: true }).text;
    var text = payload.text || "";
    var points = extractKeyPoints(text, 5);
    var wordCount = String(text).split(/\s+/).filter(Boolean).length;
    var out = "**NOCO Inside — Summary** · ~" + wordCount + " Woerter\n\n**5 Stichpunkte:**\n";
    points.forEach(function (p, i) {
      var line = (p.text || "").trim();
      if (line.length > 280) line = line.slice(0, 277) + "…";
      out += (i + 1) + ". " + line + "\n";
    });
    return out;
  }

  function buildProofReport(payload) {
    var issues = proofreadText(payload.text || "");
    var out = "**NOCO Inside — Textprüfung**\n\n**Datei:** " + (payload.name || "Text") + "\n**Gefundene Hinweise:** " + issues.length + "\n\n";
    if (!issues.length) out += "Keine offensichtlichen Probleme gefunden.\n";
    else issues.forEach(function (iss) {
      out += "**Zeile " + iss.line + ":** " + iss.msg + "\n> " + iss.snippet + "\n\n";
    });
    out += "*Heuristik · kein echtes Language-Tool*";
    return out;
  }

  function buildCodeReport(payload) {
    var findings = reviewCode(payload.text || "");
    var out = "**NOCO Inside — Code Review**\n\n**Datei:** " + (payload.name || "code") + "\n\n";
    if (!findings.length) out += "Keine kritischen Muster gefunden.\n";
    else {
      out += "**Sicherheitscheck:**\n";
      findings.forEach(function (f) {
        out += (f.level === "warn" ? "⚠️" : "ℹ️") + " " + f.msg + "\n";
      });
    }
    out += "\n**Zeilen:** " + linesOf(payload.text || "").length + "\n*Pattern-Matching · offline*";
    return out;
  }

  function buildImageReport(payload, detectResult) {
    var dr = detectResult || {};
    var aiPct = dr.nocoMatch ? 88 + Math.floor(Math.random() * 8) : 35 + Math.floor(Math.random() * 40);
    return (
      "**NOCO Inside — Bildanalyse**\n\n**Datei:** " + (payload.name || "bild") + "\n\n" +
      "**KI-Wahrscheinlichkeit:** " + aiPct + "%\n" +
      "**Mögliche Quelle:** " + (dr.nocoMatch ? "NOCO Render / Pixel-Stil erkannt" : "Unbekannt / gemischt") + "\n" +
      "**Bildtyp:** " + (dr.pixelLike ? "Pixel Art" : dr.blocky ? "Blockig / komprimiert" : "Foto oder gemischt") + "\n" +
      (dr.motifLabel ? "**Motiv:** " + dr.motifLabel + "\n" : "") +
      "\n*Inside SCAN · simuliert*"
    );
  }

  function analyze(payload, category, opts) {
    opts = opts || {};
    category = category || pickCategoryForFile(payload.kind, null);

    if (category === "ask") {
      var q = opts.question || "Worum geht es?";
      return {
        text: "**NOCO Inside — Frag die Datei**\n\n**Frage:** " + q + "\n\n" + answerFromContent(payload.text, q) + "\n\n*Inside QUERY · simuliert*",
        topic: "Inside · Ask"
      };
    }
    if (category === "proof") return { text: buildProofReport(payload), topic: "Inside · Text" };
    if (category === "code") return { text: buildCodeReport(payload), topic: "Inside · Code" };
    if (category === "image") return { text: buildImageReport(payload, opts.detectResult), topic: "Inside · Bild" };
    if (category === "summary") return { text: buildSummaryReport(payload, opts.summarizeFn), topic: "Inside · Summary" };
    if (category === "keypoints") return { text: buildKeyPointsReport(payload), topic: "Inside · Kernpunkte" };
    return { text: buildDocumentReport(payload), topic: "Inside · Dokument" };
  }

  global.NocoInsight = {
    CATEGORIES: CATEGORIES,
    INSIDE_PIPELINE: INSIDE_PIPELINE,
    readFileContent: readFileContent,
    guessFileKind: guessFileKind,
    pickCategoryForFile: pickCategoryForFile,
    extractKeyPoints: extractKeyPoints,
    classifyTopic: classifyTopic,
    analyze: analyze,
    answerFromContent: answerFromContent,
    proofreadText: proofreadText,
    reviewCode: reviewCode
  };
})(typeof window !== "undefined" ? window : this);
