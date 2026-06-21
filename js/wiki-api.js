/**
 * NOCO Wiki-API 1.1 — Live-Abruf von Wikipedia-Kurztexten (Abstracts)
 * Nutzt die oeffentliche de.wikipedia.org API.
 * Lizenz der Inhalte: CC BY-SA (Wikipedia)
 */
(function (global) {
  "use strict";

  var WIKI_API_VERSION = "1.1";
  var WIKI_API = "https://de.wikipedia.org/w/api.php";
  var WIKI_REST = "https://de.wikipedia.org/api/rest_v1/page/summary/";
  var CACHE = {};
  var CACHE_ORDER = [];
  var CACHE_MAX = 100;

  function cacheGet(key) {
    return CACHE[key] || null;
  }

  function cacheSet(key, val) {
    if (CACHE[key]) return;
    CACHE[key] = val;
    CACHE_ORDER.push(key);
    if (CACHE_ORDER.length > CACHE_MAX) {
      delete CACHE[CACHE_ORDER.shift()];
    }
  }

  function stripWikiQuery(text) {
    var s = String(text || "").trim();
    if (!s) return "";
    if (typeof NocoBrain !== "undefined") {
      if (NocoBrain.extractNexusWikiQuery) {
        var nx = NocoBrain.extractNexusWikiQuery(s);
        if (nx) return nx;
      }
      if (NocoBrain.extractWikiQuery) {
        var eq = NocoBrain.extractWikiQuery(s);
        if (eq) return eq;
      }
      if (NocoBrain.prepareUserMessage) s = NocoBrain.prepareUserMessage(s);
    }
    s = s.replace(/^(was ist (ein |eine |der |die |das )?|was sind |was bedeutet |was heisst |was heißt |erklaer mir |erklär mir |erzaehl mir |erzähl mir |define |tell me about )/i, "");
    s = s.replace(/[?!.…]+$/g, "").trim();
    return s || String(text || "").trim();
  }

  function normWiki(s) {
    return String(s || "").toLowerCase()
      .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
      .replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  }

  function queryWords(query) {
    var q = normWiki(query);
    var parts = q.split(/\s+/).filter(function (w) { return w.length >= 2; });
    return parts.length ? parts : (q ? [q] : []);
  }

  function scoreWikiTitle(title, query) {
    var t = normWiki(title);
    var q = normWiki(query);
    var words = queryWords(query);
    var score = 0;
    var i, w, matched;

    if (!t || !q) return -100;
    if (t === q) score += 120;
    if (t.indexOf(q) === 0) score += 90;
    if (t.indexOf(" " + q + " ") !== -1 || t.indexOf(q + " ") === 0) score += 70;

    matched = 0;
    for (i = 0; i < words.length; i++) {
      w = words[i];
      if (w.length < 2) continue;
      if (t === w) { score += 55; matched++; continue; }
      if (t.indexOf(w) === 0 || t.indexOf(" " + w) !== -1) { score += 28; matched++; continue; }
      if (t.indexOf(w) !== -1) { score += 12; matched++; }
    }

    if (matched === 0) score -= 80;
    if (words.length === 1 && matched === 0) score -= 60;

    if (words.length <= 2 && /\(film\)|\(fernseh|fernsehserie|musikalbum|\(lied\)|\(single\)|\(ep\)|\(song\)/i.test(title)) {
      score -= 65;
    }
    if (words.length === 1 && /\(film\)|\(fernseh|fernsehserie\)/i.test(title)) score -= 40;

    return score;
  }

  function rankTitles(titles, query) {
    return titles.slice().sort(function (a, b) {
      return scoreWikiTitle(b, query) - scoreWikiTitle(a, query);
    });
  }

  function searchTitles(query) {
    var url = WIKI_API + "?action=query&list=search&srsearch=" + encodeURIComponent(query) +
      "&srlimit=8&srinfo=&format=json&origin=*";
    return fetch(url).then(function (res) {
      if (!res.ok) throw new Error("wiki_http");
      return res.json();
    }).then(function (data) {
      var items = (data.query && data.query.search) || [];
      var titles = items.map(function (item) { return item.title; });
      return rankTitles(titles, query);
    });
  }

  function fetchSummary(title) {
    var cacheKey = title.toLowerCase();
    var cached = cacheGet(cacheKey);
    if (cached) return Promise.resolve(cached);

    var slug = encodeURIComponent(title.replace(/ /g, "_"));
    return fetch(WIKI_REST + slug).then(function (res) {
      if (res.status === 404) throw new Error("notfound");
      if (!res.ok) throw new Error("wiki_http");
      return res.json();
    }).then(function (data) {
      if (!data || !data.extract) throw new Error("noextract");
      if (data.type === "disambiguation") throw new Error("disambiguation");
      var pageUrl = data.content_urls && data.content_urls.desktop && data.content_urls.desktop.page;
      var result = {
        title: data.title || title,
        extract: String(data.extract).trim(),
        url: pageUrl || ("https://de.wikipedia.org/wiki/" + slug),
        source: "wikipedia",
        lang: "de"
      };
      cacheSet(cacheKey, result);
      return result;
    });
  }

  function tryTitles(titles, query, idx) {
    if (!titles || idx >= titles.length) return Promise.reject(new Error("noresult"));
    if (scoreWikiTitle(titles[idx], query) < -20 && idx > 0) {
      return Promise.reject(new Error("noresult"));
    }
    return fetchSummary(titles[idx]).catch(function (err) {
      if (err.message === "disambiguation" || err.message === "notfound" || err.message === "noextract") {
        return tryTitles(titles, query, idx + 1);
      }
      throw err;
    });
  }

  function fetchAbstract(query) {
    var q = stripWikiQuery(query);
    if (!q || q.length < 2) return Promise.reject(new Error("empty"));
    if (typeof NocoBrain !== "undefined" && NocoBrain.isValidWikiQuery && !NocoBrain.isValidWikiQuery(q)) {
      return Promise.reject(new Error("invalid"));
    }
    var cached = cacheGet(q.toLowerCase());
    if (cached) return Promise.resolve(cached);

    function searchThenFetch() {
      return searchTitles(q).then(function (titles) {
        if (!titles.length) return Promise.reject(new Error("nosearch"));
        if (scoreWikiTitle(titles[0], q) < -15) return Promise.reject(new Error("noresult"));
        return tryTitles(titles, q, 0);
      });
    }

    if (/^[A-Za-zÄÖÜäöüß0-9][A-Za-zÄÖÜäöüß0-9\s\-().]{0,48}$/.test(q) && q.split(/\s+/).length <= 4) {
      return fetchSummary(q).catch(function () {
        return searchThenFetch();
      });
    }
    return searchThenFetch();
  }

  function peekCache(query) {
    var q = stripWikiQuery(query);
    if (!q) return false;
    return !!cacheGet(q.toLowerCase());
  }

  function trimExtract(text, maxSentences) {
    maxSentences = maxSentences || 3;
    var s = String(text || "").trim();
    if (!s) return s;
    var parts = s.match(/[^.!?]+[.!?]+/g);
    if (!parts || parts.length <= maxSentences) return s;
    var out = "";
    var i;
    for (i = 0; i < maxSentences && i < parts.length; i++) out += parts[i].trim() + " ";
    return out.trim();
  }

  function formatAnswer(data, opts) {
    opts = opts || {};
    var extract = opts.fullExtract ? data.extract : trimExtract(data.extract, opts.maxSentences || 3);
    return {
      main: extract,
      title: data.title || "",
      url: data.url || "",
      query: opts.query || "",
      route: opts.route || "wiki",
      apiVersion: WIKI_API_VERSION
    };
  }

  function formatAnswerText(block) {
    if (!block) return "";
    if (typeof block === "string") return block;
    return String(block.main || "");
  }

  function isOnline() {
    return typeof navigator === "undefined" || navigator.onLine !== false;
  }

  global.NocoWiki = {
    VERSION: WIKI_API_VERSION,
    fetchAbstract: fetchAbstract,
    formatAnswer: formatAnswer,
    formatAnswerText: formatAnswerText,
    stripWikiQuery: stripWikiQuery,
    scoreWikiTitle: scoreWikiTitle,
    peekCache: peekCache,
    isOnline: isOnline,
    clearCache: function () { CACHE = {}; CACHE_ORDER = []; }
  };
})(typeof window !== "undefined" ? window : this);
