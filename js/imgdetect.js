/**
 * NOCO Lens Detect — KI-Bilderkennung fuer eigene NOCO Render Pixel
 */
(function (global) {
  "use strict";

  var NOCO_NATIVE_SIZES = [40, 52];
  var MATCH_TOLERANCE = 18;

  function loadImageFromFile(file) {
    return new Promise(function (resolve, reject) {
      if (!file || !file.type || file.type.indexOf("image") !== 0) {
        reject(new Error("Kein Bild"));
        return;
      }
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      img.onerror = function () {
        URL.revokeObjectURL(url);
        reject(new Error("Bild konnte nicht geladen werden"));
      };
      img.src = url;
    });
  }

  function sampleToSize(img, size) {
    var canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, 0, 0, size, size);
    return ctx.getImageData(0, 0, size, size);
  }

  function countUniqueColors(imageData) {
    var seen = {};
    var d = imageData.data;
    var i, key, n = 0;
    for (i = 0; i < d.length; i += 4) {
      if (d[i + 3] < 40) continue;
      key = (d[i] >> 4) + "," + (d[i + 1] >> 4) + "," + (d[i + 2] >> 4);
      if (!seen[key]) { seen[key] = 1; n++; }
    }
    return n;
  }

  function blockUniformityScore(imageData) {
    var w = imageData.width;
    var h = imageData.height;
    var d = imageData.data;
    var block = Math.max(2, Math.round(Math.min(w, h) / 20));
    var bx, by, x, y, i, r, g, b, cr, cg, cb, uniform = 0, total = 0;

    for (by = 0; by < h; by += block) {
      for (bx = 0; bx < w; bx += block) {
        i = (by * w + bx) * 4;
        r = d[i]; g = d[i + 1]; b = d[i + 2];
        cr = 0; cg = 0; cb = 0;
        for (y = by; y < Math.min(by + block, h); y++) {
          for (x = bx; x < Math.min(bx + block, w); x++) {
            i = (y * w + x) * 4;
            cr += d[i]; cg += d[i + 1]; cb += d[i + 2];
          }
        }
        var cells = (Math.min(by + block, h) - by) * (Math.min(bx + block, w) - bx);
        cr = Math.round(cr / cells);
        cg = Math.round(cg / cells);
        cb = Math.round(cb / cells);
        var same = 0;
        for (y = by; y < Math.min(by + block, h); y++) {
          for (x = bx; x < Math.min(bx + block, w); x++) {
            i = (y * w + x) * 4;
            if (Math.abs(d[i] - cr) <= MATCH_TOLERANCE &&
                Math.abs(d[i + 1] - cg) <= MATCH_TOLERANCE &&
                Math.abs(d[i + 2] - cb) <= MATCH_TOLERANCE) same++;
          }
        }
        if (same / cells > 0.82) uniform++;
        total++;
      }
    }
    return total ? uniform / total : 0;
  }

  function pixelMatchRatio(a, b) {
    if (!a || !b || a.length !== b.length) return 0;
    var i, match = 0, total = 0;
    for (i = 0; i < a.length; i += 4) {
      if (a[i + 3] < 40 && b[i + 3] < 40) continue;
      total++;
      if (Math.abs(a[i] - b[i]) <= MATCH_TOLERANCE &&
          Math.abs(a[i + 1] - b[i + 1]) <= MATCH_TOLERANCE &&
          Math.abs(a[i + 2] - b[i + 2]) <= MATCH_TOLERANCE) {
        match++;
      }
    }
    return total ? match / total : 0;
  }

  function fingerprint(imageData) {
    var parts = [];
    var d = imageData.data;
    var i, step = Math.max(4, Math.floor(d.length / 400));
    for (i = 0; i < d.length; i += step * 4) {
      parts.push(d[i] + "," + d[i + 1] + "," + d[i + 2]);
    }
    return parts.join(";");
  }

  function collectOwnNocoSources(sources) {
    sources = sources || {};
    var out = [];
    var chats = sources.chats || [];
    var gallery = sources.gallery || [];
    var i, j, item, meta, packed;

    function pushPixels(pixels, size, label) {
      if (!pixels || !size || pixels.length !== size * size * 4) return;
      out.push({ pixels: pixels, size: size, label: label || "NOCO Render" });
    }

    for (i = 0; i < chats.length; i++) {
      if (!chats[i].messages) continue;
      for (j = 0; j < chats[i].messages.length; j++) {
        if (chats[i].messages[j].type !== "image" || !chats[i].messages[j].image) continue;
        meta = chats[i].messages[j].image;
        pushPixels(meta.pixels, meta.size, meta.motifLabel || meta.prompt);
      }
    }
    for (i = 0; i < gallery.length; i++) {
      item = gallery[i];
      if (item.pixels && item.size) pushPixels(item.pixels, item.size, item.prompt);
      else if (typeof global.NocoPixel !== "undefined" && global.NocoPixel.ensureResult) {
        packed = global.NocoPixel.ensureResult(item);
        if (packed) pushPixels(packed.pixels, packed.size, packed.prompt);
      }
    }
    return out;
  }

  function matchOwnLibrary(img, ownSources) {
    var own = collectOwnNocoSources(ownSources);
    if (!own.length) return { match: 0, label: null, size: null };

    var best = { match: 0, label: null, size: null };
    var k, size, sampled, ratio, entry;

    for (k = 0; k < own.length; k++) {
      entry = own[k];
      size = entry.size;
      sampled = sampleToSize(img, size);
      if (!sampled) continue;
      ratio = pixelMatchRatio(sampled.data, entry.pixels);
      if (ratio > best.match) {
        best = { match: ratio, label: entry.label, size: size };
      }
    }
    return best;
  }

  function heuristicNocoScore(img) {
    var w = img.naturalWidth || img.width;
    var h = img.naturalHeight || img.height;
    var square = Math.abs(w - h) <= Math.max(w, h) * 0.02;
    var best = { score: 0, size: null, colors: 0, uniformity: 0 };
    var si, size, sampled, colors, uniformity, score;

    for (si = 0; si < NOCO_NATIVE_SIZES.length; si++) {
      size = NOCO_NATIVE_SIZES[si];
      sampled = sampleToSize(img, size);
      if (!sampled) continue;
      colors = countUniqueColors(sampled);
      uniformity = blockUniformityScore(sampled);
      score = 0;
      if (square) score += 18;
      if (colors >= 6 && colors <= 140) score += 22;
      if (uniformity >= 0.68) score += 28;
      if (uniformity >= 0.78) score += 12;
      if (w % size === 0 && h % size === 0 && w === h) score += 15;
      if (score > best.score) {
        best = { score: score, size: size, colors: colors, uniformity: uniformity };
      }
    }
    return best;
  }

  function buildReportHtml(meta) {
    var lines = [];
    lines.push('<div class="lens-detect-report liquid-glass liquid-glass-prism">');
    lines.push('<span class="detect-engine-tag">NOCO Lens</span>');
    lines.push("<p><strong>" + meta.title + "</strong> — " + meta.summary + "</p>");
    lines.push('<div class="detect-metric-row"><span>Confidence</span><span class="detect-metric-val">' + meta.confidence + "%</span></div>");
    lines.push('<div class="detect-metric-row"><span>Pixel-Grid</span><span class="detect-metric-val">' + meta.gridScore + "%</span></div>");
    lines.push('<div class="detect-metric-row"><span>Neural Match</span><span class="detect-metric-val">' + meta.neuralMatch + "%</span></div>");
    lines.push('<div class="detect-metric-row"><span>Chroma Scan</span><span class="detect-metric-val">' + meta.chromaScore + "%</span></div>");
    if (meta.motifLabel) {
      lines.push('<div class="detect-metric-row"><span>Motiv</span><span class="detect-metric-val">' + meta.motifLabel + "</span></div>");
    }
    lines.push("<p>" + meta.detail + "</p>");
    lines.push("</div>");
    return lines.join("");
  }

  function analyzeImage(img, ownSources) {
    var w = img.naturalWidth || img.width;
    var h = img.naturalHeight || img.height;
    var own = matchOwnLibrary(img, ownSources);
    var heur = heuristicNocoScore(img);
    var isOwn = own.match >= 0.82;
    var looksNoco = heur.score >= 52;
    var isNocoAI = isOwn || looksNoco;
    var baseConf = isOwn ? own.match * 100 : heur.score;
    var confidence = Math.min(99, Math.round(baseConf + (isOwn ? 4 : looksNoco ? 8 : 0)));
    var gridScore = Math.min(99, Math.round((heur.uniformity || 0) * 100));
    var neuralMatch = Math.min(99, Math.round(isOwn ? own.match * 100 : heur.score + 12));
    var chromaScore = Math.min(99, Math.round(Math.min(140, heur.colors || 0) / 1.4 + (looksNoco ? 18 : 6)));
    var verdict, detail, summary, title;

    if (isOwn) {
      verdict = "noco_own";
      title = "NOCO Render — eigenes Bild";
      summary = "Blaula Lens hat dein Pixel-Muster in der NOCO-Bibliothek gefunden.";
      detail = "Quadratisches **NOCO Render** (" + own.size + "×" + own.size + "px), typisches Block-Forge-Muster und Vault-Farben.";
      if (own.label) detail += " Motiv: **" + own.label + "**.";
      detail += " Engine: **Blaula Lens** · Offline-Scan · simuliert.";
    } else if (looksNoco) {
      verdict = "pixel_not_own";
      title = "KI-Pixel erkannt";
      summary = "Pixel-Profil passt zu NOCO Render, aber nicht in deiner Galerie.";
      detail = "**KI-Pixel-Art** (~" + (heur.size || 40) + "px Logik, " + heur.colors + " Farben). Blaula Lens: wahrscheinlich fremdes oder exportiertes Render.";
    } else {
      verdict = "real";
      title = "Kein NOCO Render";
      summary = "Foto- oder Fremdbild-Profil — kein NOCO Pixel-Raster.";
      detail = "Aufloesung " + w + "×" + h + "px. Blaula Lens findet kein typisches NOCO-Quadrat-Forge-Muster.";
    }

    var reportMeta = {
      title: title,
      summary: summary,
      detail: detail,
      confidence: confidence,
      gridScore: gridScore,
      neuralMatch: neuralMatch,
      chromaScore: chromaScore,
      motifLabel: isOwn && own.label ? own.label : null
    };

    return {
      verdict: verdict,
      isNocoAI: isNocoAI,
      isOwnNocoImage: isOwn,
      looksLikePixelArt: looksNoco,
      confidence: confidence,
      width: w,
      height: h,
      nativeSize: own.size || heur.size,
      detail: detail,
      reportHtml: buildReportHtml(reportMeta),
      engine: "Blaula Lens",
      title: title
    };
  }

  function analyzeFile(file, ownSources) {
    return loadImageFromFile(file).then(function (img) {
      return analyzeImage(img, ownSources);
    });
  }

  global.NocoImageDetect = {
    analyzeImage: analyzeImage,
    analyzeFile: analyzeFile,
    collectOwnNocoSources: collectOwnNocoSources
  };
})(typeof window !== "undefined" ? window : this);
