/**
 * NOCO AI — Main Application v2.6
 */
(function () {
  "use strict";

  var CHATS_KEY = "noco-ai-chats-v2";
  var SETTINGS_KEY = "noco-ai-settings-v1";
  var FEEDBACK_KEY = "noco-ai-feedback-v1";
  var QUOTA_KEY = "noco-ai-quota-v1";
  var EXCLUSIVE_KEY = "noco-ai-exclusive-v1";
  var TOS_KEY = "noco-ai-tos-v1";
  var SAVED_KEY = "noco-ai-saved-v1";
  var IMAGE_QUOTA_KEY = "noco-ai-image-quota-v1";
  var PIXEL_GALLERY_KEY = "noco-ai-pixel-gallery-v1";
  var PIXEL_STATS_KEY = "noco-ai-pixel-stats-v1";
  var GUIDE_KEY = "noco-ai-guide-seen-v1";
  var FEATURE_BANNER_KEY = "noco-ai-feature-banner-v36";

  var bootScreen = document.getElementById("bootScreen");
  var bootStatus = document.getElementById("bootStatus");
  var appShell = document.getElementById("appShell");
  var chatMessages = document.getElementById("chatMessages");
  var welcomeBlock = document.getElementById("welcomeBlock");
  var chatForm = document.getElementById("chatForm");
  var chatInput = document.getElementById("chatInput");
  var sendBtn = document.getElementById("sendBtn");
  var typingIndicator = document.getElementById("typingIndicator");
  var settingsBtn = document.getElementById("settingsBtn");
  var settingsDialog = document.getElementById("settingsDialog");
  var closeSettings = document.getElementById("closeSettings");
  var animToggle = document.getElementById("animToggle");
  var speedSelect = document.getElementById("speedSelect");
  var typewriterToggle = document.getElementById("typewriterToggle");
  var glassSelect = document.getElementById("glassSelect");
  var compactToggle = document.getElementById("compactToggle");
  var soundToggle = document.getElementById("soundToggle");
  var exportChatsBtn = document.getElementById("exportChatsBtn");
  var clearAllChatsBtn = document.getElementById("clearAllChatsBtn");
  var clockDisplay = document.getElementById("clockDisplay");
  var latencyVal = document.getElementById("latencyVal");
  var msgCount = document.getElementById("msgCount");
  var chatTitle = document.getElementById("chatTitle");
  var chatList = document.getElementById("chatList");
  var promptChips = document.getElementById("promptChips");
  var liquidCanvas = document.getElementById("liquidCanvas");
  var toast = document.getElementById("toast");
  var newChatBtn = document.getElementById("newChatBtn");
  var sidebarNewChat = document.getElementById("sidebarNewChat");
  var navPills = document.querySelectorAll(".nav-pill[data-view]");
  var viewPanels = document.querySelectorAll(".view-panel");
  var exclusiveCard = document.getElementById("exclusiveCard");
  var exclusiveTopBtn = document.getElementById("exclusiveTopBtn");
  var exclusiveBadge = document.getElementById("exclusiveBadge");
  var modelLabel = document.getElementById("modelLabel");
  var quotaLabel = document.getElementById("quotaLabel");
  var modelStatus = document.getElementById("modelStatus");
  var aiBadge = document.getElementById("aiBadge");
  var exclusiveDialog = document.getElementById("exclusiveDialog");
  var closeExclusive = document.getElementById("closeExclusive");
  var termDialog = document.getElementById("termDialog");
  var closeTerm = document.getElementById("closeTerm");
  var termDialogTitle = document.getElementById("termDialogTitle");
  var termDialogContent = document.getElementById("termDialogContent");
  var termAskBtn = document.getElementById("termAskBtn");
  var briefDialog = document.getElementById("briefDialog");
  var closeBrief = document.getElementById("closeBrief");
  var briefDialogTitle = document.getElementById("briefDialogTitle");
  var briefDialogSub = document.getElementById("briefDialogSub");
  var briefDialogBody = document.getElementById("briefDialogBody");
  var briefDialogFooter = document.getElementById("briefDialogFooter");
  var feedbackFloat = document.getElementById("feedbackFloat");
  var tosDialog = document.getElementById("tosDialog");
  var tosMoreBtn = document.getElementById("tosMoreBtn");
  var tosFullBlock = document.getElementById("tosFullBlock");
  var tosFullText = document.getElementById("tosFullText");
  var tosAcceptBtn = document.getElementById("tosAcceptBtn");
  var settingsTosMore = document.getElementById("settingsTosMore");
  var settingsTosFull = document.getElementById("settingsTosFull");
  var settingsTosText = document.getElementById("settingsTosText");
  var tosAcceptedNote = document.getElementById("tosAcceptedNote");
  var chatSearch = document.getElementById("chatSearch");
  var renameChatBtn = document.getElementById("renameChatBtn");
  var commandPalette = document.getElementById("commandPalette");
  var savedList = document.getElementById("savedList");
  var topicCount = document.getElementById("topicCount");
  var systemStats = document.getElementById("systemStats");
  var systemCmdList = document.getElementById("systemCmdList");
  var systemTopicGrid = document.getElementById("systemTopicGrid");
  var importChatsBtn = document.getElementById("importChatsBtn");
  var importChatsFile = document.getElementById("importChatsFile");
  var pixelDialog = document.getElementById("pixelDialog");
  var closePixel = document.getElementById("closePixel");
  var pixelCanvas = document.getElementById("pixelCanvas");
  var pixelPrompt = document.getElementById("pixelPrompt");
  var pixelStyle = document.getElementById("pixelStyle");
  var pixelRandomBtn = document.getElementById("pixelRandomBtn");
  var pixelGenerateBtn = document.getElementById("pixelGenerateBtn");
  var pixelCopyBtn = document.getElementById("pixelCopyBtn");
  var pixelSaveBtn = document.getElementById("pixelSaveBtn");
  var pixelToChatBtn = document.getElementById("pixelToChatBtn");
  var pixelMeta = document.getElementById("pixelMeta");
  var pixelProgress = document.getElementById("pixelProgress");
  var pixelProgressBar = document.getElementById("pixelProgressBar");
  var pixelProgressText = document.getElementById("pixelProgressText");
  var settingsExclusiveHint = document.getElementById("settingsExclusiveHint");
  var inputExclusiveGate = document.getElementById("inputExclusiveGate");
  var inputExclusiveBtn = document.getElementById("inputExclusiveBtn");
  var pixelExamples = document.getElementById("pixelExamples");
  var pixelResultInfo = document.getElementById("pixelResultInfo");
  var pixelInfoMotif = document.getElementById("pixelInfoMotif");
  var pixelInfoDetail = document.getElementById("pixelInfoDetail");
  var pixelPalette = document.getElementById("pixelPalette");
  var pixelRegenerateBtn = document.getElementById("pixelRegenerateBtn");
  var pixelReplayBtn = document.getElementById("pixelReplayBtn");
  var pixelShuffleStyleBtn = document.getElementById("pixelShuffleStyleBtn");
  var pixelFullscreenBtn = document.getElementById("pixelFullscreenBtn");
  var pixelCopySeedBtn = document.getElementById("pixelCopySeedBtn");
  var pixelUpscaleBtn = document.getElementById("pixelUpscaleBtn");
  var pixelGallery = document.getElementById("pixelGallery");
  var pixelFullscreen = document.getElementById("pixelFullscreen");
  var pixelFullscreenCanvas = document.getElementById("pixelFullscreenCanvas");
  var pixelFullscreenClose = document.getElementById("pixelFullscreenClose");
  var pixelStylePills = document.getElementById("pixelStylePills");
  var pixelMotifGrid = document.getElementById("pixelMotifGrid");
  var pixelMotifFilters = document.getElementById("pixelMotifFilters");
  var selectedMotifCategory = "alle";
  var pixelPreviewPlaceholder = document.getElementById("pixelPreviewPlaceholder");
  var pixelPreviewWrap = document.getElementById("pixelPreviewWrap");
  var exclusiveUnlockBanner = document.getElementById("exclusiveUnlockBanner");
  var exclusiveHeroSub = document.getElementById("exclusiveHeroSub");
  var exclusivePerkPills = document.getElementById("exclusivePerkPills");
  var exStatPixels = document.getElementById("exStatPixels");
  var exStatMsgs = document.getElementById("exStatMsgs");
  var exStatMotifs = document.getElementById("exStatMotifs");
  var exclusiveFeatures = document.getElementById("exclusiveFeatures");
  var planBadge = document.getElementById("planBadge");
  var planModelText = document.getElementById("planModelText");
  var planQuotaText = document.getElementById("planQuotaText");
  var planStatusLine = document.getElementById("planStatusLine");
  var inputHintPlan = document.getElementById("inputHintPlan");
  var inputGateText = document.getElementById("inputGateText");
  var settingsPlanBadge = document.getElementById("settingsPlanBadge");
  var settingsPlanModel = document.getElementById("settingsPlanModel");
  var settingsPlanDetail = document.getElementById("settingsPlanDetail");
  var settingsPlanUpgrade = document.getElementById("settingsPlanUpgrade");
  var discoverDialog = document.getElementById("discoverDialog");
  var closeDiscover = document.getElementById("closeDiscover");
  var discoverHint = document.getElementById("discoverHint");
  var discoverHintBtn = document.getElementById("discoverHintBtn");
  var discoverHintClose = document.getElementById("discoverHintClose");
  var nocoFeatureBanner = document.getElementById("nocoFeatureBanner");
  var nfbClose = document.getElementById("nfbClose");
  var planDiscoverBtn = document.getElementById("planDiscoverBtn");
  var planSpeedBadge = document.getElementById("planSpeedBadge");
  var discoverStartBtn = document.getElementById("discoverStartBtn");
  var typingLabel = document.getElementById("typingLabel");
  var exclusiveSpeedActive = document.getElementById("exclusiveSpeedActive");
  var exclusiveSpeedHero = document.getElementById("exclusiveSpeedHero");
  var speedBarFree = document.getElementById("speedBarFree");
  var speedBarExclusive = document.getElementById("speedBarExclusive");
  var exStatSpeed = document.getElementById("exStatSpeed");
  var inputHintDiscover = document.getElementById("inputHintDiscover");
  var sparkFilterTabs = document.getElementById("sparkFilterTabs");
  var sparkSearch = document.getElementById("sparkSearch");
  var sidebarHubBtn = document.getElementById("sidebarHubBtn");
  var hubOpenDialogBtn = document.getElementById("hubOpenDialogBtn");
  var hubSparkTabs = document.getElementById("hubSparkTabs");
  var hubSparkList = document.getElementById("hubSparkList");
  var hubActionStrip = document.getElementById("hubActionStrip");
  var hubActionsGrid = document.getElementById("hubActionsGrid");
  var featureTip = document.getElementById("featureTip");
  var featureTipText = document.getElementById("featureTipText");
  var featureTipIcon = document.getElementById("featureTipIcon");
  var featureTipAction = document.getElementById("featureTipAction");
  var quickActions = document.getElementById("quickActions");
  var writeAssist = document.getElementById("writeAssist");
  var writeAssistList = document.getElementById("writeAssistList");
  var writeAssistLabel = document.getElementById("writeAssistLabel");
  var nocoGlowPrism = document.getElementById("nocoGlowPrism");
  var glowPrismCategory = document.getElementById("glowPrismCategory");
  var glowPrismIntent = document.getElementById("glowPrismIntent");
  var glowPrismMeter = document.getElementById("glowPrismMeter");
  var glowPrismChips = document.getElementById("glowPrismChips");
  var quickWrite = document.getElementById("quickWrite");
  var chatImageBtn = document.getElementById("chatImageBtn");
  var inputGlass = document.getElementById("inputGlass");
  var inputSuggestions = document.getElementById("inputSuggestions");
  var inputSuggestionsRow = document.getElementById("inputSuggestionsRow");
  var inputSuggestionsRefresh = document.getElementById("inputSuggestionsRefresh");
  var welcomeChips = document.getElementById("welcomeChips");

  var chats = [];
  var writeAssistIndex = -1;
  var writeAssistItems = [];
  var imageModeActive = false;
  var inputSuggestionsTimer = null;
  var glowPrismTimer = null;
  var INPUT_SUGGESTION_COUNT = 3;
  var savedAnswers = loadSaved();
  var lastPixelResult = null;
  var isGeneratingPixel = false;
  var activeChatId = null;
  var isTyping = false;
  var isRenderingChatImage = false;
  var settings = loadSettings();
  var animFrameId = null;
  var openFeedbackIndex = null;
  var pendingTermQuery = null;

  var speedMap = { fast: 280, normal: 580 };
  var exclusiveSpeedMap = { fast: 55, normal: 140 };
  var EXCLUSIVE_SPEED_MS = "~90";
  var FREE_SPEED_MS = "~500";

  var THUMB_UP_SVG = '<svg class="noco-thumb noco-thumb-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>';
  var THUMB_DOWN_SVG = '<svg class="noco-thumb noco-thumb-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/></svg>';

  var sparkFilterId = "recommended";
  var sparkSearchQuery = "";
  var hubSparkFilterId = "recommended";
  var featureTipIndex = 0;

  var RECOMMENDED_SPARKS = [
    "Was kann ich dich fragen?",
    "Was sind die NOCO Modell-Namen?",
    "Was ist NOCO Echo?",
    "Was ist NOCO Render?",
    "Was ist kuenstliche Intelligenz?",
    "Was ist ChatGPT?",
    "Wie funktioniert das Internet?",
    "Was ist Demokratie?",
    "Was ist Blockchain?",
    "Tipps fuer gesunden Schlaf",
    "Was ist Genetik?",
    "Was sind Menschenrechte?"
  ];

  var FEATURE_TIPS = [
    { icon: "◇", text: "Neu: <strong>3600 Motive</strong> in NOCO Render — z.B. *Mach ein Bild von Katze*", action: "render" },
    { icon: "◎", text: "Tipp: <strong>Hub</strong> zeigt alle Funktionen auf einen Blick.", action: "hub" },
    { icon: "🧠", text: "Tipp: <strong>NOCO Echo</strong> merkt sich deinen Chat — frag *Was habe ich geschrieben?*", action: "echo" },
    { icon: "✦", text: "Tipp: <strong>NOCO Glow</strong> erkennt Intent live beim Tippen.", action: "glow" },
    { icon: "▦", text: "Tipp: <strong>NOCO Render</strong> — Rainbow-Shards & Status unten im Chat.", action: "render" },
    { icon: "⚡", text: "Tipp: <strong>NOCO Rush</strong> — Exclusive antwortet spuerbar schneller (~90 ms)", action: "exclusive" }
  ];

  var bootSteps = [
    "NOCO AI v4.0 startet…",
    "Rainbow Sheen wird geladen…",
    "3600 Render-Motive laden…",
    "NOCO Vault · Echo · Glow bereit…",
    "Rainbow-Shards initialisieren…",
    "Willkommen."
  ];

  var SLASH_COMMANDS = [
    { cmd: "/help", desc: "Alle Befehle anzeigen" },
    { cmd: "/new", desc: "Neuen Chat starten" },
    { cmd: "/clear", desc: "Aktuellen Chat leeren" },
    { cmd: "/model", desc: "Plan & Modell" },
    { cmd: "/summary", desc: "Chat-Zusammenfassung" },
    { cmd: "/pixel", desc: "Bild im Chat erstellen" },
    { cmd: "/detect", desc: "KI-Bild erkennen (Datei)" },
    { cmd: "/search", desc: "Im Chat suchen (z.B. /search NOCO)" },
    { cmd: "/topics", desc: "System-Ansicht oeffnen" },
    { cmd: "/saved", desc: "Gespeicherte Antworten anzeigen" },
    { cmd: "/random", desc: "Zufalls-Frage aus NOCO Sparks" },
    { cmd: "/hub", desc: "NOCO Hub oeffnen" }
  ];

  /* ── Utils ── */

  function uid() {
    return "id-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7);
  }

  function getActiveChat() {
    for (var i = 0; i < chats.length; i++) {
      if (chats[i].id === activeChatId) return chats[i];
    }
    return null;
  }

  function getMessages() {
    var chat = getActiveChat();
    return chat ? chat.messages : [];
  }

  function showToast(text, opts) {
    opts = opts || {};
    if (!toast) return;
    if (opts.rainbow) {
      toast.classList.add("toast-rainbow");
      toast.innerHTML = text;
    } else {
      toast.classList.remove("toast-rainbow");
      toast.textContent = text;
    }
    toast.hidden = false;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    var dur = opts.duration || (opts.rainbow ? 3000 : 2200);
    showToast._t = setTimeout(function () {
      toast.classList.remove("show");
      setTimeout(function () { toast.hidden = true; }, 350);
    }, dur);
  }

  function playRainbowBurst(anchorEl, opts) {
    if (typeof NocoBootFX === "undefined") return;
    opts = opts || {};
    var rect = anchorEl && anchorEl.getBoundingClientRect ? anchorEl.getBoundingClientRect() : null;
    NocoBootFX.playShardBurst({
      x: rect ? rect.left + rect.width / 2 : window.innerWidth * 0.5,
      y: rect ? rect.top + rect.height / 2 : window.innerHeight * 0.38,
      count: opts.count || 64,
      duration: opts.duration || 2800
    }, opts.onDone);
  }

  function getTodayKey() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  function loadQuota() {
    try {
      var raw = localStorage.getItem(QUOTA_KEY);
      var data = raw ? JSON.parse(raw) : { date: getTodayKey(), used: 0 };
      if (data.date !== getTodayKey()) {
        data = { date: getTodayKey(), used: 0 };
        saveQuota(data);
      }
      return data;
    } catch (e) {
      return { date: getTodayKey(), used: 0 };
    }
  }

  function saveQuota(data) {
    try { localStorage.setItem(QUOTA_KEY, JSON.stringify(data)); } catch (e) { /* */ }
    updateModelUI();
  }

  function loadExclusive() {
    try {
      var raw = localStorage.getItem(EXCLUSIVE_KEY);
      return raw ? JSON.parse(raw) : { active: false };
    } catch (e) {
      return { active: false };
    }
  }

  function saveExclusive(data) {
    try { localStorage.setItem(EXCLUSIVE_KEY, JSON.stringify(data)); } catch (e) { /* */ }
    updateModelUI();
  }

  function isExclusiveActive() {
    var ex = loadExclusive();
    if (!ex.active) return false;
    if (ex.until && Date.now() > ex.until) {
      saveExclusive({ active: false });
      return false;
    }
    return true;
  }

  function getBrand() {
    if (typeof NocoBrain !== "undefined" && NocoBrain.getBrand) return NocoBrain.getBrand();
    return {
      models: {
        flux:  { name: "NOCO Flux",  tagline: "Rush · Unbegrenzt · Vault+" },
        prism: { name: "NOCO Prism", tagline: "Voll-Vault · 520+ Themen" },
        spark: { name: "NOCO Spark", tagline: "Kompakt · Kurz" }
      },
      plans: {
        free:      { name: "NOCO Access Free", short: "Access Free" },
        exclusive: { name: "NOCO Exclusive",   short: "Exclusive" }
      },
      features: {
        rush: { name: "NOCO Rush", desc: "Priority ~90 ms" }
      }
    };
  }

  function getModelTier() {
    var brand = getBrand();
    var m = brand.models;
    if (isExclusiveActive()) {
      return { id: "flux", name: m.flux.name, tagline: m.flux.tagline, unlimited: true, exclusive: true };
    }
    var used = loadQuota().used;
    if (used < 10) {
      return { id: "prism", name: m.prism.name, tagline: m.prism.tagline, limited: true, remaining: 10 - used };
    }
    return { id: "spark", name: m.spark.name, tagline: m.spark.tagline };
  }

  function loadImageQuota() {
    try {
      var raw = localStorage.getItem(IMAGE_QUOTA_KEY);
      var data = raw ? JSON.parse(raw) : { date: getTodayKey(), used: 0 };
      if (data.date !== getTodayKey()) {
        data = { date: getTodayKey(), used: 0 };
        saveImageQuota(data);
      }
      return data;
    } catch (e) {
      return { date: getTodayKey(), used: 0 };
    }
  }

  function saveImageQuota(data) {
    try { localStorage.setItem(IMAGE_QUOTA_KEY, JSON.stringify(data)); } catch (e) { /* */ }
    updatePixelMeta();
  }

  function canGenerateImage() {
    return isExclusiveActive();
  }

  function isChatImageRendering() {
    return isRenderingChatImage || !!activeChatImageAnimCancel;
  }

  function setChatRenderLock(on) {
    document.body.classList.toggle("is-chat-render-locked", !!on);
    var strip = document.getElementById("renderLockStrip");
    if (strip) strip.hidden = !on;
    if (chatInput) chatInput.disabled = !!on;
    if (sendBtn) sendBtn.disabled = !!on || !(chatInput && chatInput.value.trim());
  }

  function buildMessageAvatar(role, isImage) {
    var avatar = document.createElement("div");
    avatar.setAttribute("aria-hidden", "true");
    if (isImage) {
      avatar.className = "message-avatar message-avatar-render message-avatar-ai";
      avatar.innerHTML =
        '<span class="avatar-rainbow-glow" aria-hidden="true"></span>' +
        '<span class="avatar-logo-core" aria-hidden="true"><span class="avatar-logo-sq render-avatar-core"></span></span>';
      return avatar;
    }
    if (role === "ai") {
      avatar.className = "message-avatar message-avatar-ai";
      avatar.innerHTML =
        '<span class="avatar-rainbow-glow" aria-hidden="true"></span>' +
        '<span class="avatar-logo-core" aria-hidden="true"><span class="avatar-logo-sq"></span></span>';
      return avatar;
    }
    avatar.className = "message-avatar";
    avatar.textContent = role === "system" ? "i" : "Du";
    return avatar;
  }

  function canGenerateImageInChat() {
    return canGenerateImage() && !isChatImageRendering();
  }

  function getDetectSources() {
    return {
      chats: chats || [],
      gallery: loadPixelGallery ? loadPixelGallery() : []
    };
  }

  function closeAllDialogs(except) {
    var list = [exclusiveDialog, settingsDialog, discoverDialog, termDialog, pixelDialog, briefDialog, tosDialog];
    list.forEach(function (d) {
      if (d && d !== except && d.open) d.close();
    });
  }

  function showCenteredDialog(dialog) {
    if (!dialog) return;
    closeAllDialogs(dialog);
    dialog.showModal();
    dialog.style.removeProperty("top");
    dialog.style.removeProperty("left");
    dialog.style.removeProperty("transform");
  }

  function setupDialogDismiss() {
    var dialogs = [exclusiveDialog, settingsDialog, discoverDialog, termDialog, pixelDialog, briefDialog];
    dialogs.forEach(function (d) {
      if (!d) return;
      d.addEventListener("cancel", function (e) {
        e.preventDefault();
        d.close();
      });
    });
    if (tosDialog) {
      tosDialog.addEventListener("cancel", function (e) { e.preventDefault(); });
    }
  }

  function easeOutBarVisual(p) {
    return 1 - Math.pow(1 - Math.min(1, Math.max(0, p)), 2.5);
  }

  function setImageMode(on) {
    imageModeActive = !!on;
    document.body.classList.toggle("is-image-render-mode", imageModeActive);
    if (chatImageBtn) {
      chatImageBtn.classList.toggle("is-active", imageModeActive);
      chatImageBtn.setAttribute("aria-pressed", imageModeActive ? "true" : "false");
    }
    if (inputGlass) inputGlass.classList.toggle("is-image-mode", imageModeActive);
    updateChatPlaceholder();
    if (chatInput && !chatInput.value.trim()) renderInputSuggestions();
  }

  function updateChatPlaceholder() {
    if (!chatInput || chatInput.disabled) return;
    if (imageModeActive) {
      chatInput.placeholder = "Motiv — z.B. Katze, Drache, Sonne";
      return;
    }
    var left = Math.max(0, 20 - loadQuota().used);
    chatInput.placeholder = isExclusiveActive() ? "Nachricht…" : ("Nachricht… · " + left + "/20");
  }

  function pickInputSuggestions(count, imageBias) {
    count = count || INPUT_SUGGESTION_COUNT;
    imageBias = imageBias !== false && imageModeActive;
    var picks = [];
    var seen = {};

    function add(label, prompt, opts) {
      opts = opts || {};
      if (!label || !prompt || seen[prompt]) return;
      seen[prompt] = true;
      picks.push({
        label: label,
        prompt: prompt,
        fill: opts.fill || "",
        send: !!opts.send,
        image: !!opts.image
      });
    }

    if (typeof NocoPixel !== "undefined" && NocoPixel.getRandomPresets) {
      var presetCount = imageBias ? count : Math.min(2, count);
      NocoPixel.getRandomPresets(presetCount).forEach(function (p) {
        var subject = p.label || p.key;
        add(
          (p.emoji ? p.emoji + " " : "▦ ") + subject,
          NocoPixel.formatImagePrompt ? NocoPixel.formatImagePrompt(subject) : ("Mach ein Bild von " + subject),
          { image: true, send: true }
        );
      });
    }
    if (typeof NocoBrain !== "undefined" && NocoBrain.getRandomWriteStarters) {
      NocoBrain.getRandomWriteStarters(count).forEach(function (s) {
        if (picks.length >= count) return;
        if (imageBias && !/bild|render/i.test(s.text)) return;
        var label = s.text.replace(/…/g, "").trim();
        if (label.length > 20) label = label.slice(0, 18) + "…";
        add(label, s.text, { fill: s.text.indexOf("…") !== -1 ? s.text : "" });
      });
    }
    return picks.slice(0, count);
  }

  function hideInputSuggestions() {
    if (inputSuggestions) inputSuggestions.hidden = true;
    if (inputSuggestionsRow) inputSuggestionsRow.innerHTML = "";
  }

  function applyInputSuggestion(item) {
    if (!chatInput || !item) return;
    hideWriteAssist();
    if (item.send) {
      if (item.image) {
        if (!canGenerateImage()) {
          showToast("Bilder nur mit NOCO Exclusive / Flux.");
          openExclusiveDialog();
          return;
        }
        if (!canSendMessage()) {
          showToast("Tageslimit erreicht — Exclusive oder morgen 0:00");
          openExclusiveDialog();
          return;
        }
        var display = item.label.replace(/^(\S+\s+)/, "").trim();
        handleImageChatRequest(item.prompt, { displayText: display || item.label });
        hideInputSuggestions();
        setImageMode(false);
        return;
      }
      sendMessage(item.prompt);
      hideInputSuggestions();
      return;
    }
    if (item.image) setImageMode(true);
    chatInput.value = item.fill || item.prompt;
    chatInput.focus();
    autoResizeInput();
    hideInputSuggestions();
  }

  function renderInputSuggestions() {
    if (!inputSuggestions || !inputSuggestionsRow || !chatInput) return;
    if (chatInput.value.trim() || isTyping || chatInput.disabled) {
      hideInputSuggestions();
      return;
    }
    var items = pickInputSuggestions(INPUT_SUGGESTION_COUNT, imageModeActive);
    inputSuggestionsRow.innerHTML = "";
    items.forEach(function (item) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "input-suggestion-chip" + (item.image ? " is-image" : "");
      btn.setAttribute("role", "listitem");
      btn.textContent = item.label;
      btn.addEventListener("mousedown", function (e) {
        e.preventDefault();
        applyInputSuggestion(item);
      });
      inputSuggestionsRow.appendChild(btn);
    });
    inputSuggestions.hidden = !items.length;
  }

  function renderWelcomeChips() {
    var container = welcomeChips || (welcomeBlock && welcomeBlock.querySelector(".welcome-chips"));
    if (!container) return;
    var chips = pickInputSuggestions(INPUT_SUGGESTION_COUNT, false);
    container.innerHTML = "";
    chips.forEach(function (c) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "welcome-chip";
      btn.setAttribute("data-prompt", c.prompt);
      if (c.fill) btn.setAttribute("data-fill", c.fill);
      if (c.send) btn.setAttribute("data-send", "1");
      if (c.image) btn.setAttribute("data-image", "1");
      btn.textContent = c.label;
      container.appendChild(btn);
    });
  }

  function focusChatImagePrompt() {
    switchView("chat");
    if (!chatInput) return;
    if (isChatImageRendering()) {
      showToast("Bild wird noch gerendert — gleich wieder moeglich.");
      return;
    }
    if (!canGenerateImage()) {
      showToast("Bilder nur mit NOCO Exclusive / Flux.");
      openExclusiveDialog();
      return;
    }
    setImageMode(true);
    chatInput.value = "";
    chatInput.focus();
    autoResizeInput();
  }

  var LENS_PHASES = [
    { p: 0, text: "NOCO Lens scannt Pixel…" },
    { p: 0.26, text: "Raster & Farben werden gelesen…" },
    { p: 0.48, text: "NOCO Render Signatur…" },
    { p: 0.68, text: "Blaula Lens gleicht ab…" },
    { p: 0.84, text: "Fast fertig — Ergebnis formt sich…" }
  ];

  function easeOutLensVisual(p) {
    return 1 - Math.pow(1 - Math.min(1, Math.max(0, p)), 3.6);
  }

  function setLensHudMode(on) {
    document.body.classList.toggle("is-lens-active", !!on);
    if (typingIndicator) typingIndicator.classList.toggle("is-lens-mode", !!on);
    var bar = document.getElementById("typingLensBar");
    var fill = document.getElementById("typingLensFill");
    if (bar) bar.hidden = !on;
    if (!on && fill) fill.style.width = "0%";
  }

  function getLensPhaseText(p) {
    var i;
    var text = LENS_PHASES[0].text;
    for (i = LENS_PHASES.length - 1; i >= 0; i--) {
      if (p >= LENS_PHASES[i].p) {
        text = LENS_PHASES[i].text;
        break;
      }
    }
    return text;
  }

  function triggerImageDetectPicker() {
    var input = document.getElementById("imageDetectInput");
    if (input) input.click();
  }

  function handleImageDetectFile(file) {
    if (!file || typeof NocoImageDetect === "undefined") return;
    if (isTyping) {
      showToast("Bitte warten — NOCO arbeitet noch…");
      return;
    }
    switchView("chat");
    appendMessage("user", "KI-Bild erkennen: " + (file.name || "Bild"));
    setTyping(true);
    setLensHudMode(true);

    var lensMinMs = 3400;
    var lensStart = performance.now();
    var lensResult = null;
    var lensError = false;
    var lensAnimId = null;

    NocoImageDetect.analyzeFile(file, getDetectSources()).then(function (result) {
      lensResult = result;
    }).catch(function () {
      lensError = true;
    });

    function finishLensDetect() {
      if (lensAnimId) cancelAnimationFrame(lensAnimId);
      setLensHudMode(false);
      setTyping(false);
      if (typingLabel) typingLabel.textContent = "NOCO AI denkt…";
      if (lensResult) {
        var report = lensResult.reportHtml || lensResult.detail;
        appendMessage("ai", report, { animate: true, related: [] });
        updateModelUI();
        showToast(
          "<strong>" + escapeHtml(lensResult.engine || "Blaula Lens") + "</strong> — " + lensResult.confidence + "%",
          { rainbow: true, duration: 3000 }
        );
      } else {
        showToast("Bild konnte nicht analysiert werden");
      }
    }

    function lensTick(now) {
      var elapsed = now - lensStart;
      var raw = Math.min(1, elapsed / lensMinMs);
      var p = easeOutLensVisual(raw);
      var fill = document.getElementById("typingLensFill");
      if (fill) fill.style.width = (p * 100).toFixed(1) + "%";
      if (typingLabel) typingLabel.textContent = getLensPhaseText(p);

      var ready = lensResult || lensError;
      var canFinish = ready && p >= 0.9 && elapsed >= 2200;
      if (canFinish || (ready && elapsed >= lensMinMs)) {
        finishLensDetect();
        return;
      }
      lensAnimId = requestAnimationFrame(lensTick);
    }

    lensAnimId = requestAnimationFrame(lensTick);
  }

  function incrementImageQuota() {
    if (isExclusiveActive()) return;
    var q = loadImageQuota();
    q.used++;
    saveImageQuota(q);
  }

  function getPixelSize() { return isExclusiveActive() ? 52 : 40; }
  function getPixelDuration() { return isExclusiveActive() ? 35000 : 60000; }

  function getRenderPhaseStart(durationMs) {
    durationMs = durationMs || getPixelDuration();
    if (typeof NocoPixel !== "undefined" && NocoPixel.getRenderPhaseStart) {
      return NocoPixel.getRenderPhaseStart(durationMs);
    }
    return (durationMs - 15000) / durationMs;
  }

  function getRenderPhaseRaw(p, durationMs) {
    durationMs = durationMs || getPixelDuration();
    var start = getRenderPhaseStart(durationMs);
    if (p < start) return -1;
    return (p - start) / (1 - start);
  }

  function drawChatImageCrisp(result, canvas, scale) {
    if (!canvas || !result || typeof NocoPixel === "undefined") return;
    NocoPixel.drawToCanvas(result, canvas, scale, { crisp: true });
    canvas.setAttribute("data-render-locked", "1");
  }

  function finalizeChatImageDisplay(canvas, result, scale, frame, progressEl) {
    if (!frame) {
      drawChatImageCrisp(result, canvas, scale);
      if (progressEl) progressEl.textContent = "";
      return;
    }
    var wrap = frame.closest(".chat-image-wrap");
    if (wrap) {
      wrap.classList.remove("is-render-active");
      wrap.style.removeProperty("--render-progress");
      wrap.classList.add("is-render-burst");
    }
    frame.classList.add("is-burst", "is-rainbow-reveal");
    document.body.classList.add("is-image-finish-flash");
    window.setTimeout(function () {
      document.body.classList.remove("is-image-finish-flash");
    }, 1500);
    window.setTimeout(function () {
      canvas.style.width = "";
      canvas.style.height = "";
      drawChatImageCrisp(result, canvas, scale);
      frame.classList.remove("is-rendering", "is-burst");
      frame.classList.add("is-sharp");
      window.setTimeout(function () {
        frame.classList.remove("is-rainbow-reveal");
      }, 1500);
      if (wrap) {
        wrap.classList.remove("is-render-burst");
        wrap.classList.add("is-render-highlight");
      }
      var status = wrap && wrap.querySelector(".chat-render-status-below");
      if (status) {
        status.classList.add("is-done");
        var txt = status.querySelector(".render-status-text");
        if (txt) txt.textContent = "Bild fertig — Liquid Glass";
      }
      if (progressEl) progressEl.textContent = "";
    }, 1380);
  }

  function getChatImageScale(size) {
    return size <= 40 ? 9 : 7;
  }

  function getRenderInterruptInfo(p, interrupt, durationMs) {
    if (interrupt && interrupt.text) return interrupt;
    var phaseRaw = getRenderPhaseRaw(p, durationMs);
    if (phaseRaw < 0) return { index: 0, text: "", total: 10, step: 0 };
    if (typeof NocoPixel !== "undefined" && NocoPixel.getRenderInterrupt) {
      return NocoPixel.getRenderInterrupt(phaseRaw);
    }
    return { index: 0, text: "NOCO Render…", total: 10, step: 1 };
  }

  function getPixelPhaseLabel(phase, interrupt) {
    if (interrupt && interrupt.text) return interrupt.text;
    return "NOCO Render…";
  }

  function buildChatRenderStatus(wrap) {
    if (!wrap || wrap.querySelector(".chat-render-status-below")) return;
    var status = document.createElement("div");
    status.className = "chat-render-status-below liquid-glass liquid-glass-prism";
    status.setAttribute("aria-live", "polite");
    status.innerHTML =
      '<p class="render-status-text"></p>' +
      '<span class="render-status-step"></span>' +
      '<div class="render-status-bar"><span class="render-status-bar-fill"></span></div>';
    var frame = wrap.querySelector(".chat-image-frame");
    if (frame && frame.nextSibling) wrap.insertBefore(status, frame.nextSibling);
    else wrap.appendChild(status);
  }

  function updateChatRenderHud(frame, p, phase, interrupt) {
    if (!frame || !interrupt || !interrupt.text) return;
    var wrap = frame.closest(".chat-image-wrap");
    if (!wrap) return;
    var status = wrap.querySelector(".chat-render-status-below");
    var duration = getPixelDuration();
    var barFill = status && status.querySelector(".render-status-bar-fill");
    var heroText = status && status.querySelector(".render-status-text");
    var heroStep = status && status.querySelector(".render-status-step");
    var progress = frame.querySelector(".chat-image-progress");
    var barP = easeOutBarVisual(p);
    var pct = Math.round(barP * 100);
    var info = interrupt;
    var lastIdx = wrap.getAttribute("data-hud-step");

    if (barFill) barFill.style.width = (barP * 100).toFixed(1) + "%";
    if (progress) progress.textContent = pct + "%";
    if (wrap) {
      wrap.classList.add("is-render-active");
      wrap.style.setProperty("--render-progress", String(Math.min(1, barP)));
      scrollImageRenderIntoView(wrap);
    }

    if (lastIdx !== String(info.index)) {
      wrap.setAttribute("data-hud-step", String(info.index));
      if (heroText) {
        heroText.textContent = info.text;
        heroText.classList.toggle("is-finishing", info.step >= info.total);
        heroText.style.animation = "none";
        void heroText.offsetWidth;
        heroText.style.animation = "";
      }
      if (heroStep) {
        var sPad = info.step < 10 ? "0" : "";
        var tPad = info.total < 10 ? "0" : "";
        heroStep.textContent = "Schritt " + sPad + info.step + " / " + tPad + info.total;
      }
    }
    updatePixelInterruptPanel(p, info, false, duration);
  }

  function updatePixelInterruptPanel(fullP, interrupt, silent, durationMs) {
    var panel = document.getElementById("pixelInterruptPanel");
    if (silent || !interrupt || !interrupt.text) {
      if (panel) panel.hidden = true;
      return;
    }
    durationMs = durationMs || getPixelDuration();
    var info = interrupt;
    var stepEl = document.getElementById("pixelInterruptStep");
    var textEl = document.getElementById("pixelInterruptText");
    var phaseEl = document.getElementById("pixelGenPhase");
    if (panel) panel.hidden = false;
    if (stepEl) {
      var sPad = info.step < 10 ? "0" : "";
      var tPad = info.total < 10 ? "0" : "";
      stepEl.textContent = sPad + info.step + " / " + (tPad || "") + info.total;
    }
    if (textEl) textEl.textContent = info.text;
    if (phaseEl) {
      phaseEl.hidden = false;
      phaseEl.textContent = info.text;
    }
    if (pixelProgressText) {
      pixelProgressText.textContent = Math.round(fullP * 100) + "% · " + info.text;
    }
  }

  function hidePixelInterruptPanel() {
    var panel = document.getElementById("pixelInterruptPanel");
    if (panel) panel.hidden = true;
    var phaseEl = document.getElementById("pixelGenPhase");
    if (phaseEl) phaseEl.hidden = true;
  }

  var selectedMotifIndex = null;
  var activeChatImageAnimCancel = null;

  function getMotifCountLabel() {
    if (typeof NocoPixel !== "undefined" && NocoPixel.getMotifCount) {
      return String(NocoPixel.getMotifCount());
    }
    return "3600";
  }

  function getStyleCountLabel() {
    if (typeof NocoPixel !== "undefined" && NocoPixel.getStyleCount) {
      return String(NocoPixel.getStyleCount());
    }
    return "6";
  }

  function canSendMessage() {
    if (isExclusiveActive()) return true;
    return loadQuota().used < 20;
  }

  function getChatHistoryForBrain() {
    return getMessages().map(function (m) {
      return { role: m.role, text: m.text, type: m.type || null, time: m.time };
    });
  }

  function incrementQuota() {
    if (isExclusiveActive()) return;
    var q = loadQuota();
    q.used++;
    saveQuota(q);
  }

  function updateModelUI() {
    var tier = getModelTier();
    var exclusive = isExclusiveActive();
    var quota = loadQuota();

    if (modelLabel) modelLabel.textContent = tier.name;
    if (modelStatus) modelStatus.textContent = tier.name.replace("NOCO ", "");

    if (exclusiveBadge) {
      exclusiveBadge.textContent = exclusive ? "EXCLUSIVE" : "FREE";
      exclusiveBadge.classList.toggle("is-exclusive", exclusive);
    }
    if (exclusiveCard) exclusiveCard.classList.toggle("active-exclusive", exclusive);
    if (exclusiveTopBtn) exclusiveTopBtn.classList.toggle("is-active", exclusive);
    document.body.classList.toggle("exclusive-active", exclusive);

    if (quotaLabel) {
      if (exclusive) {
        quotaLabel.textContent = "Exclusive · " + tier.name + " · Rush";
      } else {
        var left = Math.max(0, 20 - quota.used);
        var prismLeft = Math.max(0, 10 - quota.used);
        quotaLabel.textContent = "Access Free · " + left + "/20 · " + prismLeft + "x Prism";
      }
    }
    updatePlanBar(tier, exclusive, quota);
    updateSettingsPlan(tier, exclusive, quota);
    updatePixelMeta();
    updateInputGate();
    updateExclusiveSidebar();
  }

  function updatePlanBar(tier, exclusive, quota) {
    exclusive = exclusive !== undefined ? exclusive : isExclusiveActive();
    tier = tier || getModelTier();
    quota = quota || loadQuota();
    var left = Math.max(0, 20 - quota.used);

    var plans = getBrand().plans;
    if (planBadge) {
      planBadge.textContent = exclusive ? plans.exclusive.short : plans.free.short;
      planBadge.classList.toggle("is-exclusive", exclusive);
    }
    if (planModelText) {
      planModelText.textContent = "Modell: " + tier.name;
    }
    if (planQuotaText) {
      if (exclusive) {
        planQuotaText.textContent = "Unbegrenzt · Rush " + EXCLUSIVE_SPEED_MS + " ms";
      } else {
        planQuotaText.textContent = left + "/20 · " + tier.name;
      }
    }
    if (planStatusLine) {
      if (exclusive) {
        planStatusLine.innerHTML = "<strong>Flux</strong> · Rush " + EXCLUSIVE_SPEED_MS + " ms · ∞";
      } else {
        planStatusLine.innerHTML = "<strong>" + tier.name.replace("NOCO ", "") + "</strong> · " + left + "/20";
      }
    }
    if (planSpeedBadge) {
      planSpeedBadge.hidden = true;
    }
    if (inputHintPlan) {
      inputHintPlan.textContent = exclusive
        ? plans.exclusive.short + " · " + tier.name
        : plans.free.short + " · " + tier.name + " · " + left + "/20";
    }
    if (aiBadge) {
      aiBadge.textContent = exclusive
        ? plans.exclusive.short + " · " + tier.name
        : plans.free.short + " · " + tier.name;
    }
  }

  function updateSettingsPlan(tier, exclusive, quota) {
    exclusive = exclusive !== undefined ? exclusive : isExclusiveActive();
    tier = tier || getModelTier();
    quota = quota || loadQuota();
    var left = Math.max(0, 20 - quota.used);

    var plans = getBrand().plans;
    if (settingsPlanBadge) {
      settingsPlanBadge.textContent = exclusive ? plans.exclusive.short : plans.free.short;
      settingsPlanBadge.classList.toggle("is-exclusive", exclusive);
    }
    if (settingsPlanModel) {
      settingsPlanModel.textContent = "Modell: " + tier.name;
    }
    if (settingsPlanDetail) {
      if (exclusive) {
        settingsPlanDetail.textContent = "NOCO Flux · NOCO Rush · NOCO Lens · NOCO Render";
      } else if (tier.id === "prism" && tier.remaining !== undefined) {
        settingsPlanDetail.textContent = left + "/20 heute · " + tier.remaining + "x NOCO Prism · dann Spark · Reset 0:00";
      } else {
        settingsPlanDetail.textContent = left + "/20 heute · NOCO Spark aktiv · Exclusive = Flux + Rush";
      }
    }
    if (settingsExclusiveHint) {
      settingsExclusiveHint.textContent = exclusive
        ? "Exclusive aktiv: " + tier.name + " · NOCO Rush · unbegrenzt"
        : "Du nutzt Access Free (" + tier.name + "). Exclusive = Flux, Rush, Lens, Render.";
    }
  }

  function updateExclusiveSidebar() {
    var ex = isExclusiveActive();
    if (exclusivePerkPills) exclusivePerkPills.hidden = !ex;
    if (exclusiveUnlockBanner) exclusiveUnlockBanner.hidden = ex;
    if (exclusiveSpeedActive) exclusiveSpeedActive.hidden = !ex;
    if (exclusiveSpeedHero) exclusiveSpeedHero.hidden = ex;
    document.body.classList.toggle("exclusive-active", ex);
  }

  function animateExclusiveSpeedBars() {
    if (!speedBarFree || !speedBarExclusive) return;
    speedBarFree.style.width = "0%";
    speedBarExclusive.style.width = "0%";
    requestAnimationFrame(function () {
      setTimeout(function () {
        speedBarFree.style.width = "78%";
        speedBarExclusive.style.width = "16%";
      }, 80);
    });
  }

  function isGuideSeen() {
    try { return !!localStorage.getItem(GUIDE_KEY); } catch (e) { return true; }
  }

  function markGuideSeen() {
    try { localStorage.setItem(GUIDE_KEY, String(Date.now())); } catch (e) { /* */ }
    if (discoverHint) discoverHint.hidden = true;
  }

  function openDiscoverDialog(tab) {
    if (!discoverDialog) return;
    showCenteredDialog(discoverDialog);
    switchHubTab(tab || "overview");
  }

  function closeDiscoverDialog() {
    if (discoverDialog) discoverDialog.close();
  }

  function switchHubTab(tabId) {
    document.querySelectorAll(".hub-tab").forEach(function (t) {
      var active = t.getAttribute("data-hub-tab") === tabId;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });
    document.querySelectorAll(".hub-panel").forEach(function (p) {
      var active = p.getAttribute("data-hub-panel") === tabId;
      p.classList.toggle("active", active);
      p.hidden = !active;
    });
    if (tabId === "sparks") {
      renderHubSparkTabs();
      renderHubSparkList(hubSparkFilterId);
    }
  }

  function getRandomSpark() {
    if (typeof NocoBrain === "undefined" || !NocoBrain.getPromptGroups) {
      return RECOMMENDED_SPARKS[Math.floor(Math.random() * RECOMMENDED_SPARKS.length)];
    }
    var pool = [];
    NocoBrain.getPromptGroups().forEach(function (g) {
      g.items.forEach(function (item) { pool.push(item); });
    });
    if (!pool.length) return RECOMMENDED_SPARKS[0];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function fireSparkPrompt(prompt) {
    if (!prompt) return;
    switchView("chat");
    if (!canSendMessage()) {
      showToast("Tageslimit erreicht — Exclusive oder morgen 0:00");
      openExclusiveDialog();
      return;
    }
    sendMessage(prompt);
  }

  function fireRandomSpark() {
    fireSparkPrompt(getRandomSpark());
  }

  function handleQuickAction(qa) {
    if (!qa) return;
    if (qa === "hub") {
      openDiscoverDialog("overview");
      return;
    }
    if (qa === "brief") {
      closeDiscoverDialog();
      switchView("chat");
      if (chatInput) {
        chatInput.value = "Briefe mir ";
        chatInput.focus();
        var len = chatInput.value.length;
        chatInput.setSelectionRange(len, len);
        autoResizeInput();
        showToast("NOCO Brief — Thema eingeben, z.B. Klimawandel oder Python vs JavaScript");
      }
      return;
    }
    if (qa === "glow") {
      closeDiscoverDialog();
      switchView("chat");
      if (chatInput) {
        chatInput.focus();
        if (chatInput.value.trim().length >= 2) renderGlowPrism();
        else showToast("NOCO Glow — tippe eine Frage, ab 2 Zeichen");
      }
      return;
    }
    if (qa === "echo") {
      closeDiscoverDialog();
      if (typeof NocoBrain !== "undefined" && NocoBrain.summarizeChatHistory) {
        switchView("chat");
        if (!canSendMessage()) {
          showToast("Tageslimit erreicht");
          openExclusiveDialog();
          return;
        }
        var sum = NocoBrain.summarizeChatHistory(getChatHistoryForBrain(), "Chat zusammenfassung", { modelTier: getModelTier().id });
        appendMessage("ai", sum.text, { animate: true, related: [] });
        incrementQuota();
        updateModelUI();
      } else {
        fireSparkPrompt("Was habe ich geschrieben?");
      }
      return;
    }
    if (qa === "render") {
      closeDiscoverDialog();
      focusChatImagePrompt();
      return;
    }
    if (qa === "detect") {
      closeDiscoverDialog();
      triggerImageDetectPicker();
      return;
    }
    if (qa === "random") {
      closeDiscoverDialog();
      fireRandomSpark();
      return;
    }
    if (qa === "model") {
      closeDiscoverDialog();
      switchView("chat");
      handleSlashCommand("/model");
      return;
    }
    if (qa === "sparks") {
      openDiscoverDialog("sparks");
      return;
    }
    if (qa === "saved") {
      closeDiscoverDialog();
      switchView("chat");
      handleSlashCommand("/saved");
      return;
    }
    if (qa === "exclusive") {
      closeDiscoverDialog();
      openExclusiveDialog();
      return;
    }
  }

  function bindQuickActionContainer(container) {
    if (!container) return;
    container.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-qa]");
      if (!btn || !container.contains(btn)) return;
      handleQuickAction(btn.getAttribute("data-qa"));
    });
  }

  function showFeatureTip(index) {
    if (!FEATURE_TIPS.length || !featureTipText) return;
    var tip = FEATURE_TIPS[index % FEATURE_TIPS.length];
    if (featureTipIcon) featureTipIcon.textContent = tip.icon;
    featureTipText.innerHTML = tip.text;
    if (featureTipAction) featureTipAction.setAttribute("data-qa", tip.action);
  }

  function rotateFeatureTip() {
    featureTipIndex = (featureTipIndex + 1) % FEATURE_TIPS.length;
    showFeatureTip(featureTipIndex);
  }

  function initSidebarCollapsible() {
    document.querySelectorAll(".sidebar-collapse-head").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var section = btn.closest(".sidebar-collapsible");
        if (!section) return;
        var collapsed = section.classList.toggle("is-collapsed");
        btn.setAttribute("aria-expanded", collapsed ? "false" : "true");
        if (!collapsed && section.getAttribute("data-collapse") === "sparks") {
          renderPromptChips();
        }
      });
    });
  }

  function maybeShowDiscoverHint() {
    if (isGuideSeen() || !discoverHint) return;
    discoverHint.hidden = false;
  }

  function maybeShowFeatureBanner() {
    if (!nocoFeatureBanner) return;
    try {
      if (localStorage.getItem(FEATURE_BANNER_KEY)) return;
    } catch (e) { return; }
    nocoFeatureBanner.hidden = false;
  }

  function dismissFeatureBanner() {
    if (nocoFeatureBanner) nocoFeatureBanner.hidden = true;
    try { localStorage.setItem(FEATURE_BANNER_KEY, String(Date.now())); } catch (e) { /* */ }
  }

  function handleDiscoverAction(action) {
    if (action === "detect") {
      triggerImageDetectPicker();
      return;
    }
    if (action === "exclusive") {
      openExclusiveDialog();
      return;
    }
    if (action === "slash-help") {
      if (chatInput) {
        chatInput.value = "/help ";
        chatInput.focus();
        autoResizeInput();
        if (sendBtn) sendBtn.disabled = false;
      }
      return;
    }
  }

  function loadPixelStats() {
    try {
      return JSON.parse(localStorage.getItem(PIXEL_STATS_KEY) || '{"pixels":0,"msgs":0}');
    } catch (e) {
      return { pixels: 0, msgs: 0 };
    }
  }

  function savePixelStats(data) {
    try { localStorage.setItem(PIXEL_STATS_KEY, JSON.stringify(data)); } catch (e) { /* */ }
    updateExclusiveStats();
  }

  function incrementPixelStats() {
    var s = loadPixelStats();
    s.pixels = (s.pixels || 0) + 1;
    savePixelStats(s);
  }

  function incrementMsgStats() {
    var s = loadPixelStats();
    s.msgs = (s.msgs || 0) + 1;
    savePixelStats(s);
  }

  function updateExclusiveStats() {
    var s = loadPixelStats();
    var totalMsgs = 0;
    chats.forEach(function (c) {
      (c.messages || []).forEach(function (m) {
        if (m.role === "ai" && m.type !== "image") totalMsgs++;
      });
    });
    if (exStatPixels) exStatPixels.textContent = String(s.pixels || 0);
    if (exStatMsgs) exStatMsgs.textContent = String(Math.max(s.msgs || 0, totalMsgs));
    if (exStatMotifs && typeof NocoPixel !== "undefined") {
      exStatMotifs.textContent = String(NocoPixel.getMotifCount ? NocoPixel.getMotifCount() : 2350);
    }
    if (exStatSpeed) exStatSpeed.textContent = EXCLUSIVE_SPEED_MS;
    if (exclusiveHeroSub && isExclusiveActive()) {
      exclusiveHeroSub.textContent = "Flux · " + (s.pixels || 0) + " Pixel";
    } else if (exclusiveHeroSub) {
      exclusiveHeroSub.textContent = "Flux · Unbegrenzt";
    }
  }

  function filterExclusiveFeatures(tab) {
    if (!exclusiveFeatures) return;
    exclusiveFeatures.querySelectorAll(".exclusive-feature").forEach(function (li) {
      var cats = (li.getAttribute("data-ex-cat") || "").split(" ");
      if (tab === "all" || cats.indexOf(tab) !== -1) {
        li.classList.remove("is-filtered-out");
      } else {
        li.classList.add("is-filtered-out");
      }
    });
  }

  function updateInputGate() {
    var ex = isExclusiveActive();
    var canChat = canSendMessage();
    var tier = getModelTier();
    var left = Math.max(0, 20 - loadQuota().used);

    document.body.classList.toggle("chat-locked", !canChat);
    if (chatInput) {
      chatInput.disabled = !canChat;
      if (!canChat) {
        chatInput.placeholder = "Tageslimit 20/20 — Exclusive oder Reset um 0:00";
        hideInputSuggestions();
      } else {
        updateChatPlaceholder();
      }
    }
    if (inputExclusiveGate) {
      inputExclusiveGate.hidden = canChat;
      if (inputGateText && !canChat) {
        inputGateText.innerHTML = "Tageslimit <strong>20/20</strong> erreicht — <strong>NOCO Exclusive</strong> fuer unbegrenzt";
      }
    }
    if (sendBtn) sendBtn.disabled = !canChat || isTyping || !(chatInput && chatInput.value.trim());
  }

  function updatePixelMeta() {
    if (!pixelMeta) return;
    var ex = isExclusiveActive();
    var motifs = getMotifCountLabel();
    var styles = getStyleCountLabel();
    var size = getPixelSize();
    if (ex) {
      pixelMeta.textContent = size + "x" + size + " Pro · " + styles + " Styles · Sheen · " + motifs + " Motive";
    } else {
      pixelMeta.textContent = "Exclusive noetig · " + motifs + " Motive · " + styles + " Styles · Sheen";
    }
    var dialogSub = document.getElementById("pixelDialogSub");
    if (dialogSub) {
      dialogSub.textContent = ex
        ? "Optional — " + styles + " Styles · Epic Sheen"
        : "Optional — Bilder gehoeren in den Chat";
    }
    if (settingsExclusiveHint) {
      settingsExclusiveHint.textContent = ex
        ? "Exclusive aktiv: Flux, Rush, Lens & NOCO Render"
        : "Exclusive: Flux, Rush, Lens & NOCO Render (" + motifs + " Motive)";
    }
    if (pixelGenerateBtn) pixelGenerateBtn.disabled = !ex && !isGeneratingPixel;
    if (pixelRandomBtn) pixelRandomBtn.disabled = !ex;
    var exNote = document.getElementById("pixelExclusiveNote");
    if (exNote) {
      exNote.innerHTML = ex
        ? "<strong>Exclusive aktiv</strong> — Bilder &amp; Flux bereit."
        : "Bilder nur mit <strong>NOCO Exclusive / Flux</strong> — besser im Chat mit ▦.";
    }
  }

  function renderAiHtml(text) {
    return NocoBrain.parseMarkdown(text, { linkify: true, locked: false });
  }

  function loadSaved() {
    try {
      var raw = localStorage.getItem(SAVED_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function persistSaved() {
    try { localStorage.setItem(SAVED_KEY, JSON.stringify(savedAnswers)); } catch (e) { /* */ }
    renderSavedList();
  }

  function isMessageSaved(msgId) {
    for (var i = 0; i < savedAnswers.length; i++) {
      if (savedAnswers[i].msgId === msgId) return true;
    }
    return false;
  }

  function renderSavedList() {
    if (!savedList) return;
    savedList.innerHTML = "";
    if (!savedAnswers.length) {
      savedList.innerHTML = '<li class="saved-empty">Noch keine Antworten gespeichert</li>';
      return;
    }
    savedAnswers.slice(0, 12).forEach(function (item) {
      var li = document.createElement("li");
      li.className = "saved-list-item";
      li.setAttribute("data-msg-id", item.msgId);
      li.innerHTML =
        '<div class="saved-list-text">' + escapeHtml(item.text.slice(0, 80)) + (item.text.length > 80 ? "…" : "") + '</div>' +
        '<div class="saved-list-meta">' + escapeHtml(item.topic || "Gespeichert") + '</div>';
      savedList.appendChild(li);
    });
  }

  function appendSystemMessage(text) {
    var chat = getActiveChat();
    if (!chat) return;
    var msg = {
      id: uid(),
      role: "system",
      text: text,
      time: Date.now()
    };
    chat.messages.push(msg);
    saveChats();
    hideWelcome();
    chatMessages.appendChild(createMessageEl(msg, chat.messages.length - 1).el);
    scrollToBottom();
  }

  function updateTopicCount() {
    if (topicCount && typeof NocoBrain !== "undefined" && NocoBrain.getKnowledgeCount) {
      topicCount.textContent = String(NocoBrain.getKnowledgeCount());
    }
  }

  function renderSystemPanel() {
    if (!systemStats || typeof NocoBrain === "undefined") return;
    var stats = NocoBrain.getSystemStats ? NocoBrain.getSystemStats() : {};
    systemStats.innerHTML =
      '<div class="stat-cell"><span class="stat-val">' + (stats.topics || "—") + '</span><span class="stat-label">Themen</span></div>' +
      '<div class="stat-cell"><span class="stat-val">' + (stats.quickPrompts || "—") + '</span><span class="stat-label">Schnellfragen</span></div>' +
      '<div class="stat-cell"><span class="stat-val">' + (stats.terms || "—") + '</span><span class="stat-label">Keywords</span></div>' +
      '<div class="stat-cell"><span class="stat-val">v' + (stats.version || "2") + '</span><span class="stat-label">Bank</span></div>';

    if (systemCmdList) {
      systemCmdList.innerHTML = "";
      SLASH_COMMANDS.forEach(function (c) {
        var li = document.createElement("li");
        li.innerHTML = "<code>" + c.cmd + "</code> — " + escapeHtml(c.desc);
        systemCmdList.appendChild(li);
      });
    }

    if (systemTopicGrid && NocoBrain.getPromptGroups) {
      systemTopicGrid.innerHTML = "";
      NocoBrain.getPromptGroups().forEach(function (group) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "system-topic-chip";
        btn.textContent = group.icon + " " + group.title + " (" + group.items.length + ")";
        btn.addEventListener("click", function () {
          switchView("chat");
          if (group.items[0]) sendMessage(group.items[0]);
        });
        systemTopicGrid.appendChild(btn);
      });
    }
  }

  var TOS_FULL_HTML =
    "<h4>1. Was ist NOCO AI?</h4>" +
    "<p>NOCO AI ist eine eigenstaendige Chat-Webseite im NOCO-Universum. Technisch eine <strong>simulierte Wissens-KI</strong>: Antworten kommen aus einer lokalen Regel-Engine, nicht von einem Cloud-Sprachmodell wie ChatGPT.</p>" +
    "<h4>2. Online-Nutzung</h4>" +
    "<p>Die Webseite kann online geoeffnet werden (z.B. als HTML-Datei oder ueber Hosting). Nach dem ersten Laden funktioniert der Chat auch <strong>offline</strong> — es werden keine Nachrichten an externe Server gesendet.</p>" +
    "<h4>3. Simulierte Features</h4>" +
    "<p><strong>NOCO Exclusive</strong>, <strong>NOCO Pay</strong>, Modell-Stufen (v1.0 / v1.5 / v2.0) und Nachrichten-Limits sind bewusst <strong>simuliert</strong>. Es wird kein echtes Geld abgebucht. Testphasen und Abos dienen dem Premium-Feeling im NOCO-Universum.</p>" +
    "<h4>4. Daten & Privatsphäre</h4>" +
    "<p>Chats, Einstellungen, Feedback und Exclusive-Status werden in <strong>localStorage</strong> auf deinem Geraet gespeichert. Kein Tracking, kein Konto, kein Upload — ausser du exportierst Chats selbst.</p>" +
    "<h4>5. Inhalte & Haftung</h4>" +
    "<p>Antworten dienen Information und Unterhaltung rund um NOCO OS. Keine Garantie auf Vollstaendigkeit oder Richtigkeit. Die Webseite wird ohne Gewaehr bereitgestellt.</p>" +
    "<h4>6. Aenderungen</h4>" +
    "<p>NOCO AI kann sich weiterentwickeln (Design, Features, Bedingungen). Die aktuelle Version findest du in den Einstellungen unter Nutzungsbedingungen.</p>";

  function isTosAccepted() {
    try {
      var raw = localStorage.getItem(TOS_KEY);
      return raw ? JSON.parse(raw).accepted === true : false;
    } catch (e) {
      return false;
    }
  }

  function acceptTos() {
    try {
      localStorage.setItem(TOS_KEY, JSON.stringify({ accepted: true, at: Date.now() }));
    } catch (e) { /* */ }
    updateTosUI();
  }

  function updateTosUI() {
    var accepted = isTosAccepted();
    if (tosAcceptedNote) tosAcceptedNote.hidden = !accepted;
  }

  function fillTosText(el) {
    if (el) el.innerHTML = TOS_FULL_HTML;
  }

  function toggleTosMore(btn, block) {
    if (!btn || !block) return;
    var open = btn.getAttribute("aria-expanded") === "true";
    open = !open;
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.querySelector("span").textContent = open ? "Weniger anzeigen" : "Mehr anzeigen";
    block.hidden = false;
    block.classList.toggle("is-open", open);
  }

  function openSettings() {
    updateSettingsPlan();
    showCenteredDialog(settingsDialog);
  }

  function handleSettingsClick() {
    if (!isTosAccepted()) {
      if (tosDialog) tosDialog.showModal();
      return;
    }
    openSettings();
  }

  /* ── Boot ── */

  function setBootProgress(step, total) {
    var bar = bootScreen && bootScreen.querySelector(".boot-progress-bar");
    if (!bar || !total) return;
    var p = easeOutBarVisual((step + 1) / total);
    bar.style.width = (p * 100).toFixed(1) + "%";
  }

  function triggerBootHandoff() {
    if (!bootScreen || bootScreen.classList.contains("is-handoff")) return;
    bootScreen.classList.add("is-handoff");
    document.body.classList.add("boot-handoff-active");
    if (appShell) {
      appShell.classList.add("is-boot-handoff", "ready");
    }
    if (welcomeBlock) welcomeBlock.classList.add("is-boot-enter");
    var flash = document.createElement("div");
    flash.className = "boot-handoff-flash";
    flash.setAttribute("aria-hidden", "true");
    document.body.appendChild(flash);
    window.setTimeout(function () {
      if (flash.parentNode) flash.parentNode.removeChild(flash);
    }, 1700);
  }

  function finishBootSequence(logoWrap) {
    if (bootScreen) {
      bootScreen.classList.add("hidden");
      bootScreen.classList.remove("is-booting", "is-exiting", "is-handoff");
    }
    if (logoWrap) logoWrap.classList.remove("is-lit", "is-shatter");
    document.body.classList.remove("boot-handoff-active");
    if (appShell) {
      appShell.classList.add("ready");
      appShell.classList.remove("is-boot-handoff");
    }
    if (discoverHint) discoverHint.hidden = true;
    closeAllDialogs();
    maybeShowFeatureBanner();
    window.setTimeout(function () {
      if (welcomeBlock) welcomeBlock.classList.remove("is-boot-enter");
    }, 1600);
  }

  function boot() {
    if (!bootScreen) {
      if (appShell) appShell.classList.add("ready");
      maybeShowFeatureBanner();
      return;
    }
    var logoWrap = bootScreen.querySelector(".boot-logo");
    var dots = bootScreen.querySelectorAll(".boot-dot");
    var step = 0;
    var totalSteps = bootSteps.length;
    bootScreen.classList.add("is-booting");
    bootScreen.classList.remove("hidden", "is-handoff", "is-exiting");
    if (appShell) {
      appShell.classList.remove("ready", "is-boot-handoff");
    }
    document.body.classList.remove("boot-handoff-active");
    setBootProgress(-1, totalSteps);

    window.setTimeout(function () {
      if (logoWrap) logoWrap.classList.add("is-lit");
    }, 480);

    var interval = setInterval(function () {
      if (step < totalSteps) {
        if (bootStatus) bootStatus.textContent = bootSteps[step];
        setBootProgress(step, totalSteps);
        if (dots[step]) {
          dots[step].classList.add("done");
          dots[step].classList.remove("active");
        }
        if (dots[step + 1]) dots[step + 1].classList.add("active");
        step++;
      } else {
        clearInterval(interval);
        if (bootStatus) bootStatus.textContent = "Willkommen im Chat…";
        setBootProgress(totalSteps - 1, totalSteps);
        bootScreen.classList.add("is-exiting");
        if (logoWrap) logoWrap.classList.add("is-shatter");
        var mark = bootScreen.querySelector(".logo-mark-boot");
        var rect = mark ? mark.getBoundingClientRect() : null;
        if (typeof NocoBootFX !== "undefined") {
          NocoBootFX.playShardBurst({
            x: rect ? rect.left + rect.width / 2 : window.innerWidth * 0.5,
            y: rect ? rect.top + rect.height / 2 : window.innerHeight * 0.42,
            count: 96,
            duration: 5800,
            handoffAt: 0.4,
            onHandoff: triggerBootHandoff
          }, function () {
            finishBootSequence(logoWrap);
          });
        } else {
          triggerBootHandoff();
          window.setTimeout(function () {
            finishBootSequence(logoWrap);
          }, 900);
        }
      }
    }, 520);
  }

  /* ── Settings ── */

  function loadSettings() {
    try {
      var raw = localStorage.getItem(SETTINGS_KEY);
      return raw ? JSON.parse(raw) : {
        animations: true, speed: "normal", typewriter: true,
        glass: "high", compact: false, sound: true
      };
    } catch (e) {
      return { animations: true, speed: "normal", typewriter: true, glass: "high", compact: false, sound: true };
    }
  }

  function saveSettings() {
    try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch (e) { /* */ }
  }

  function applySettings() {
    document.body.classList.toggle("no-animations", !settings.animations);
    document.body.classList.toggle("compact-messages", !!settings.compact);
    document.body.classList.add("glass-enhanced");
    document.body.classList.remove("glass-high", "glass-low");
    if (settings.glass === "high") document.body.classList.add("glass-high");
    if (settings.glass === "low") document.body.classList.add("glass-low");

    if (animToggle) animToggle.checked = settings.animations;
    if (settings.speed === "slow") settings.speed = "normal";
    if (speedSelect) speedSelect.value = settings.speed;
    if (typewriterToggle) typewriterToggle.checked = settings.typewriter;
    if (glassSelect) glassSelect.value = settings.glass || "normal";
    if (compactToggle) compactToggle.checked = !!settings.compact;
    if (soundToggle) soundToggle.checked = settings.sound !== false;

    if (!settings.animations && animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    } else if (settings.animations && !animFrameId) {
      initLiquidCanvas();
    }
  }

  /* ── Chats Storage ── */

  function loadChats() {
    try {
      var raw = localStorage.getItem(CHATS_KEY);
      if (raw) {
        var data = JSON.parse(raw);
        chats = data.chats || [];
        activeChatId = data.activeChatId || null;
      }
    } catch (e) {
      chats = [];
      activeChatId = null;
    }
    if (chats.length === 0) createChat(false);
    if (!activeChatId || !getActiveChat()) activeChatId = chats[0].id;
    renderChatList();
    renderAllMessages();
    updateMsgCount();
  }

  function saveChats() {
    try {
      localStorage.setItem(CHATS_KEY, JSON.stringify({ chats: chats, activeChatId: activeChatId }));
    } catch (e) { /* */ }
    renderChatList();
    updateMsgCount();
  }

  function createChat(switchTo, silent) {
    var chat = {
      id: uid(),
      title: "Neuer Chat",
      messages: [],
      created: Date.now(),
      updated: Date.now()
    };
    chats.unshift(chat);
    if (switchTo !== false) {
      activeChatId = chat.id;
      resetWelcome();
    }
    saveChats();
    if (switchTo !== false) {
      switchView("chat");
      if (!silent) showToast("Neuer Chat erstellt");
    }
    return chat;
  }

  function deleteChat(id) {
    chats = chats.filter(function (c) { return c.id !== id; });
    if (chats.length === 0) {
      createChat(false);
      showToast("Letzter Chat geloescht — neuer Chat erstellt");
    } else {
      if (activeChatId === id) activeChatId = chats[0].id;
      showToast("Chat geloescht");
    }
    saveChats();
    renderAllMessages();
  }

  function renderChatList() {
    if (!chatList) return;
    chatList.innerHTML = "";
    chats.forEach(function (chat) {
      var li = document.createElement("li");
      li.className = "chat-list-item" + (chat.id === activeChatId ? " active" : "");
      li.setAttribute("data-chat-id", chat.id);
      li.innerHTML =
        '<span class="chat-list-icon">💬</span>' +
        '<span class="chat-list-title">' + escapeHtml(chat.title) + '</span>' +
        '<button type="button" class="chat-list-delete" aria-label="Chat löschen" data-delete="' + chat.id + '">×</button>';
      chatList.appendChild(li);
    });
    var active = getActiveChat();
    if (chatTitle && active) chatTitle.textContent = active.title;
  }

  function updateChatTitle(text) {
    var chat = getActiveChat();
    if (!chat) return;
    var title = text.length > 28 ? text.slice(0, 28) + "…" : text;
    if (chat.title === "Neuer Chat" || chat.messages.length <= 2) {
      chat.title = title;
      chat.updated = Date.now();
      saveChats();
    }
  }

  function updateMsgCount() {
    if (msgCount) msgCount.textContent = String(getMessages().length);
  }

  /* ── Views ── */

  var navMoreMenuHome = null;
  var chatToolsMenuHome = null;

  function positionOverlayMenu(anchor, menu) {
    if (!anchor || !menu) return;
    var rect = anchor.getBoundingClientRect();
    var menuW = Math.max(rect.width, 210);
    var top = Math.round(rect.bottom + 6);
    var left = Math.round(rect.right - menuW);
    if (left < 8) left = 8;
    if (left + menuW > window.innerWidth - 8) left = Math.max(8, window.innerWidth - menuW - 8);
    menu.style.position = "fixed";
    menu.style.top = top + "px";
    menu.style.left = left + "px";
    menu.style.right = "auto";
    menu.style.bottom = "auto";
    menu.style.zIndex = "10100";
    menu.style.minWidth = menuW + "px";
  }

  function portalNavMoreMenu(menu, open) {
    var wrap = document.getElementById("navMoreWrap");
    if (!menu) return;
    if (open) {
      if (!navMoreMenuHome) navMoreMenuHome = wrap;
      if (menu.parentNode !== document.body) document.body.appendChild(menu);
      menu.classList.add("is-portaled", "is-open");
    } else {
      menu.classList.remove("is-portaled", "is-open");
      if (navMoreMenuHome && menu.parentNode === document.body) navMoreMenuHome.appendChild(menu);
    }
  }

  function portalChatToolsMenu(menu, open) {
    var wrap = document.querySelector(".chat-header-tools");
    if (!menu) return;
    if (open) {
      if (!chatToolsMenuHome) chatToolsMenuHome = wrap;
      if (menu.parentNode !== document.body) document.body.appendChild(menu);
      menu.classList.add("is-portaled", "is-open");
    } else {
      menu.classList.remove("is-portaled", "is-open");
      if (chatToolsMenuHome && menu.parentNode === document.body) chatToolsMenuHome.appendChild(menu);
    }
  }

  function setNavMoreExpanded(open) {
    var navMoreBtn = document.getElementById("navMoreBtn");
    var navMoreBtnMobile = document.getElementById("navMoreBtnMobile");
    if (navMoreBtn) navMoreBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (navMoreBtnMobile) navMoreBtnMobile.setAttribute("aria-expanded", open ? "true" : "false");
    if (navMoreBtn) navMoreBtn.classList.toggle("active", open);
    if (navMoreBtnMobile) navMoreBtnMobile.classList.toggle("active", open);
  }

  function toggleNavMoreMenu(anchor) {
    var navMoreMenu = document.getElementById("navMoreMenu");
    var navMoreBtn = document.getElementById("navMoreBtn");
    var navMoreBtnMobile = document.getElementById("navMoreBtnMobile");
    if (!navMoreMenu) return;
    anchor = anchor || navMoreBtn || navMoreBtnMobile;
    if (!navMoreMenu.hidden) {
      closeOverlayMenus();
      return;
    }
    closeOverlayMenus();
    navMoreMenu.hidden = false;
    portalNavMoreMenu(navMoreMenu, true);
    positionOverlayMenu(anchor, navMoreMenu);
    setNavMoreExpanded(true);
  }

  function closeOverlayMenus(opts) {
    opts = opts || {};
    var navMoreMenu = document.getElementById("navMoreMenu");
    var chatToolsMenu = document.getElementById("chatToolsMenu");
    var chatToolsBtn = document.getElementById("chatToolsBtn");
    if (navMoreMenu) {
      navMoreMenu.hidden = true;
      portalNavMoreMenu(navMoreMenu, false);
      navMoreMenu.style.position = "";
      navMoreMenu.style.top = "";
      navMoreMenu.style.left = "";
      navMoreMenu.style.right = "";
      navMoreMenu.style.bottom = "";
      navMoreMenu.style.minWidth = "";
      navMoreMenu.style.zIndex = "";
    }
    setNavMoreExpanded(false);
    if (chatToolsMenu) {
      chatToolsMenu.hidden = true;
      portalChatToolsMenu(chatToolsMenu, false);
      chatToolsMenu.style.position = "";
      chatToolsMenu.style.top = "";
      chatToolsMenu.style.left = "";
      chatToolsMenu.style.right = "";
      chatToolsMenu.style.zIndex = "";
      chatToolsMenu.style.minWidth = "";
    }
    if (chatToolsBtn) chatToolsBtn.setAttribute("aria-expanded", "false");
  }

  function switchView(view) {
    closeOverlayMenus();
    navPills.forEach(function (pill) {
      pill.classList.toggle("active", pill.getAttribute("data-view") === view);
    });
    var navMoreBtn = document.getElementById("navMoreBtn");
    if (navMoreBtn) navMoreBtn.classList.toggle("active", view === "system" || view === "about");
    viewPanels.forEach(function (panel) {
      var isActive = panel.getAttribute("data-view") === view;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
    if (view === "system") renderSystemPanel();
  }

  navPills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      var view = pill.getAttribute("data-view");
      if (view === "features") {
        switchView("chat");
        openDiscoverDialog("overview");
        return;
      }
      switchView(view);
    });
  });

  function resetEntireApp() {
    if (!confirm("Wirklich ALLES loeschen? Wie ein neuer Account — Chats, Limits, Exclusive, Galerie, Einstellungen.")) return;
    if (!confirm("Letzte Chance: Alle lokalen NOCO-Daten werden unwiderruflich geloescht.")) return;
    var keys = [];
    var i, k;
    for (i = 0; i < localStorage.length; i++) {
      k = localStorage.key(i);
      if (k && k.indexOf("noco-ai-") === 0) keys.push(k);
    }
    keys.forEach(function (key) { localStorage.removeItem(key); });
    location.reload();
  }

  /* ── Messages ── */

  function formatTime(date) {
    return date.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
  }

  function hideWelcome() {
    if (welcomeBlock && welcomeBlock.parentNode) {
      welcomeBlock.remove();
      welcomeBlock = null;
    }
  }

  function resetWelcome() {
    chatMessages.querySelectorAll(".message").forEach(function (m) { m.remove(); });
    if (!welcomeBlock) {
      var wb = document.createElement("div");
      wb.className = "welcome-block welcome-block-compact";
      wb.id = "welcomeBlock";
      wb.innerHTML = getWelcomeHtml();
      chatMessages.appendChild(wb);
      welcomeBlock = wb;
      welcomeChips = document.getElementById("welcomeChips");
    }
    renderWelcomeChips();
    if (latencyVal) latencyVal.textContent = "—";
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function getWelcomeHtml() {
    return (
      '<div class="welcome-render-mark" aria-hidden="true">' +
        '<span class="welcome-mark-glow"></span>' +
        '<span class="welcome-mark-core">◆</span>' +
      '</div>' +
      '<h2 class="welcome-title welcome-title-rainbow">NOCO AI</h2>' +
      '<p class="welcome-text" id="welcomeText">Frag etwas — oder starte <strong>NOCO Render</strong> mit <em>3600 Motiven</em> (◇ Bild).</p>' +
      '<p class="welcome-sub">Liquid Glass · Rainbow Shards · Epic Sheen</p>' +
      '<div class="welcome-chips welcome-chips-compact" id="welcomeChips"></div>'
    );
  }

  function isLatestAiMessage(msgIndex) {
    var messages = getMessages();
    var i;
    for (i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === "ai" && messages[i].type !== "image") return i === msgIndex;
    }
    return false;
  }

  function clearPreviousRelated() {
    var chat = getActiveChat();
    if (!chat || !chat.messages) return;
    chat.messages.forEach(function (m) {
      if (m.role === "ai") m.related = null;
    });
    if (chatMessages) {
      chatMessages.querySelectorAll(".related-chips").forEach(function (el) {
        el.remove();
      });
    }
  }

  function buildActions(msg, msgIndex) {
    if (msg.role !== "ai") return null;

    var actions = document.createElement("div");
    actions.className = "msg-actions";

    var copyBtn = document.createElement("button");
    copyBtn.className = "msg-action msg-action-copy";
    copyBtn.type = "button";
    copyBtn.title = "Kopieren";
    copyBtn.setAttribute("data-action", "copy");
    copyBtn.setAttribute("data-index", msgIndex);
    copyBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';

    var regenBtn = document.createElement("button");
    regenBtn.className = "msg-action msg-action-regen";
    regenBtn.type = "button";
    regenBtn.title = "Neu generieren";
    regenBtn.setAttribute("data-action", "regenerate");
    regenBtn.setAttribute("data-index", msgIndex);
    regenBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 4v6h6M23 20v-6h-6"/><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15"/></svg>';

    var simplifyBtn = document.createElement("button");
    simplifyBtn.className = "msg-action msg-action-simplify";
    simplifyBtn.type = "button";
    simplifyBtn.title = "Einfacher erklaeren";
    simplifyBtn.setAttribute("data-action", "simplify");
    simplifyBtn.setAttribute("data-index", msgIndex);
    simplifyBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19h16M6 16l6-12 6 12"/></svg>';

    var starBtn = document.createElement("button");
    starBtn.className = "msg-action msg-action-save" + (isMessageSaved(msg.id) ? " saved" : "");
    starBtn.type = "button";
    starBtn.title = "Antwort speichern";
    starBtn.setAttribute("data-action", "save");
    starBtn.setAttribute("data-index", msgIndex);
    starBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>';

    var fbBtn = document.createElement("button");
    fbBtn.className = "msg-action msg-action-feedback" + (msg.feedback ? " active" : "");
    fbBtn.type = "button";
    fbBtn.title = "Feedback";
    fbBtn.setAttribute("data-action", "feedback");
    fbBtn.setAttribute("data-index", msgIndex);
    fbBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>';

    actions.appendChild(copyBtn);
    actions.appendChild(regenBtn);
    actions.appendChild(simplifyBtn);
    actions.appendChild(starBtn);
    actions.appendChild(fbBtn);
    return actions;
  }

  function createMessageEl(msg, msgIndex, contentHtml, renderPending) {
    var el = document.createElement("div");
    el.className = "message " + msg.role + (msg.type === "image" ? " image" : "");
    el.setAttribute("role", "article");
    el.setAttribute("data-msg-index", msgIndex);

    var avatar = buildMessageAvatar(msg.role, msg.type === "image");

    var body = document.createElement("div");
    body.className = "message-body";

    var bubble = document.createElement("div");
    bubble.className = "message-bubble";

    if (msg.type === "image" && msg.image && typeof NocoPixel !== "undefined") {
      var imgResult = renderPending ? null : resolveChatImage(msg);
      var wrap = document.createElement("div");
      wrap.className = "chat-image-wrap";
      var frame = document.createElement("div");
      frame.className = "chat-image-frame";
      var canvas = document.createElement("canvas");
      canvas.className = "chat-image-canvas";
      canvas.setAttribute("data-msg-id", msg.id);
      if (imgResult) {
        drawChatImageCrisp(imgResult, canvas, getChatImageScale(imgResult.size));
        frame.classList.add("is-sharp");
        wrap.classList.add("is-render-highlight");
      } else if (renderPending) {
        frame.classList.add("is-rendering");
        wrap.classList.add("is-render-active");
      }
      var progress = document.createElement("span");
      progress.className = "chat-image-progress";
      progress.textContent = "";
      frame.appendChild(canvas);
      frame.appendChild(progress);
      wrap.appendChild(frame);
      if (renderPending) buildChatRenderStatus(wrap);
      var imgBadge = document.createElement("span");
      imgBadge.className = "chat-image-badge";
      imgBadge.textContent = imgResult && imgResult.motifLabel ? imgResult.motifLabel : (msg.image.motifLabel || "Motiv");
      wrap.appendChild(imgBadge);
      var meta = document.createElement("p");
      meta.className = "chat-image-meta";
      var sz = imgResult ? imgResult.size : msg.image.size;
      meta.textContent = sz + "×" + sz + " · " + (msg.image.styleName || "Standard") + " · NOCO Render";
      wrap.appendChild(meta);
      var actRow = document.createElement("div");
      actRow.className = "chat-image-actions-glass liquid-glass liquid-glass-prism";
      var copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "chat-img-action-glass chat-img-copy";
      copyBtn.setAttribute("data-msg-id", msg.id);
      copyBtn.innerHTML = '<span class="cia-icon">⧉</span><span>Kopieren</span>';
      var saveBtn = document.createElement("button");
      saveBtn.type = "button";
      saveBtn.className = "chat-img-action-glass chat-img-save";
      saveBtn.setAttribute("data-msg-id", msg.id);
      saveBtn.innerHTML = '<span class="cia-icon">↓</span><span>Speichern</span>';
      var studioBtn = document.createElement("button");
      studioBtn.type = "button";
      studioBtn.className = "chat-img-action-glass chat-img-studio";
      studioBtn.setAttribute("data-msg-id", msg.id);
      studioBtn.innerHTML = '<span class="cia-icon">◇</span><span>Studio</span>';
      actRow.appendChild(copyBtn);
      actRow.appendChild(saveBtn);
      actRow.appendChild(studioBtn);
      wrap.appendChild(actRow);
      bubble.classList.add("message-bubble-image");
      bubble.appendChild(wrap);
    } else {
      var html = contentHtml;
      if (!html) {
        if (msg.role === "ai") html = renderAiHtml(msg.text);
        else if (msg.role === "system") html = renderAiHtml(msg.text);
        else html = escapeHtml(msg.text).replace(/\n/g, "<br>");
      }
      bubble.innerHTML = html;
      if (msg.role === "ai" && msg.topic) {
        var prismBadge = document.createElement("span");
        prismBadge.className = "message-prism-badge";
        prismBadge.textContent = msg.topic;
        bubble.insertBefore(prismBadge, bubble.firstChild);
      }
      if (msg.role === "ai" && msg.brief) {
        bubble.classList.add("message-bubble-brief");
        var briefBtn = document.createElement("button");
        briefBtn.type = "button";
        briefBtn.className = "message-brief-btn";
        briefBtn.setAttribute("data-msg-index", msgIndex);
        briefBtn.innerHTML = '<span aria-hidden="true">◎</span> Brief oeffnen';
        bubble.appendChild(briefBtn);
      }
    }

    var time = document.createElement("span");
    time.className = "message-time";
    var timeText = formatTime(new Date(msg.time));
    if (msg.variant > 0) timeText += ' <span class="variant-badge">#' + (msg.variant + 1) + '</span>';
    time.innerHTML = timeText;
    bubble.appendChild(time);

    body.appendChild(bubble);

    var actions = msg.type === "image" ? null : buildActions(msg, msgIndex);
    if (actions) body.appendChild(actions);

    if (contentHtml !== "" && msg.role === "ai" && msg.related && msg.related.length && isLatestAiMessage(msgIndex)) {
      var rel = document.createElement("div");
      rel.className = "related-chips";
      rel.setAttribute("aria-label", "Weitere Fragen");
      msg.related.slice(0, 2).forEach(function (q) {
        var chip = document.createElement("button");
        chip.type = "button";
        chip.className = "related-chip";
        chip.setAttribute("data-prompt", q);
        chip.textContent = q.length > 40 ? q.slice(0, 40) + "…" : q;
        rel.appendChild(chip);
      });
      body.appendChild(rel);
    }

    el.appendChild(avatar);
    el.appendChild(body);
    return { el: el, bubble: bubble };
  }

  function renderAllMessages() {
    var messages = getMessages();
    chatMessages.querySelectorAll(".message").forEach(function (m) { m.remove(); });
    if (messages.length === 0) {
      resetWelcome();
      return;
    }
    hideWelcome();
    messages.forEach(function (msg, i) {
      chatMessages.appendChild(createMessageEl(msg, i).el);
    });
    scrollToBottom();
    updateMsgCount();
  }

  function appendMessage(role, text, opts) {
    opts = opts || {};
    hideWelcome();
    var chat = getActiveChat();
    if (!chat) return Promise.resolve();

    var msg = {
      id: uid(),
      role: role,
      text: text,
      time: Date.now(),
      feedback: null,
      variant: opts.variant || 0,
      topic: opts.topic || null,
      related: opts.related || null,
      brief: opts.brief || null
    };
    chat.messages.push(msg);
    chat.updated = Date.now();
    if (role === "user") updateChatTitle(text);
    saveChats();

    var idx = chat.messages.length - 1;

    if (role === "ai" && settings.typewriter && opts.animate) {
      return appendWithTypewriter(msg, idx);
    }

    chatMessages.appendChild(createMessageEl(msg, idx).el);
    scrollToBottom();
    return Promise.resolve();
  }

  function appendWithTypewriter(msg, idx) {
    var plain = msg.text;
    var result = createMessageEl(msg, idx, "");
    var bubble = result.bubble;
    bubble.classList.add("message-writing");
    chatMessages.appendChild(result.el);
    scrollToBottom(true);

    return new Promise(function (resolve) {
      var tokens = plain.match(/\S+|\s+/g) || [plain];
      var ti = 0;
      var built = "";
      var baseSpeed = settings.speed === "fast" ? 22 : settings.speed === "slow" ? 52 : 34;
      function tick() {
        if (ti < tokens.length) {
          built += tokens[ti++];
          bubble.innerHTML = escapeHtml(built).replace(/\n/g, "<br>") + '<span class="write-caret" aria-hidden="true"></span>';
          scrollToBottom(true);
          var delay = /^\s+$/.test(tokens[ti - 1]) ? baseSpeed * 0.35 : baseSpeed;
          setTimeout(tick, delay);
        } else {
          bubble.classList.remove("message-writing");
          bubble.innerHTML = renderAiHtml(plain);
          if (msg.topic) {
            var prismBadge = document.createElement("span");
            prismBadge.className = "message-prism-badge";
            prismBadge.textContent = msg.topic;
            bubble.insertBefore(prismBadge, bubble.firstChild);
          }
          if (msg.brief) {
            bubble.classList.add("message-bubble-brief");
            var briefBtn = document.createElement("button");
            briefBtn.type = "button";
            briefBtn.className = "message-brief-btn";
            briefBtn.setAttribute("data-msg-index", idx);
            briefBtn.innerHTML = '<span aria-hidden="true">◎</span> Brief oeffnen';
            bubble.appendChild(briefBtn);
          }
          var time = document.createElement("span");
          time.className = "message-time";
          time.innerHTML = formatTime(new Date(msg.time));
          bubble.appendChild(time);
          if (msg.related && msg.related.length && isLatestAiMessage(idx)) {
            var body = result.el.querySelector(".message-body");
            body.querySelectorAll(".related-chips").forEach(function (r) { r.remove(); });
            var rel = document.createElement("div");
            rel.className = "related-chips";
            msg.related.slice(0, 2).forEach(function (q) {
              var chip = document.createElement("button");
              chip.type = "button";
              chip.className = "related-chip";
              chip.setAttribute("data-prompt", q);
              chip.textContent = q.length > 40 ? q.slice(0, 40) + "…" : q;
              rel.appendChild(chip);
            });
            body.appendChild(rel);
          }
          scrollToBottom(true);
          resolve();
        }
      }
      tick();
    });
  }

  function scrollToBottom(urgent) {
    if (!chatMessages) return;
    function doScroll() {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    requestAnimationFrame(function () {
      doScroll();
      requestAnimationFrame(doScroll);
    });
    if (urgent) {
      setTimeout(doScroll, 60);
      setTimeout(doScroll, 180);
      setTimeout(doScroll, 420);
    }
  }

  function scrollImageRenderIntoView(wrap) {
    if (!wrap || !chatMessages) return;
    requestAnimationFrame(function () {
      var wrapRect = wrap.getBoundingClientRect();
      var chatRect = chatMessages.getBoundingClientRect();
      var viewH = chatMessages.clientHeight;
      var relativeTop = wrapRect.top - chatRect.top + chatMessages.scrollTop;
      var ideal = relativeTop - Math.max(48, (viewH - wrapRect.height) * 0.42);
      chatMessages.scrollTop = Math.max(0, ideal);
    });
  }

  /* ── Send / Regenerate ── */

  function setTyping(on) {
    isTyping = on;
    typingIndicator.hidden = !on;
    sendBtn.disabled = on || !chatInput.value.trim();
    if (typingLabel) {
      if (on && isExclusiveActive()) {
        typingLabel.textContent = "NOCO AI denkt… (Rush " + EXCLUSIVE_SPEED_MS + " ms)";
        typingLabel.classList.add("is-priority");
      } else if (on) {
        typingLabel.textContent = "NOCO AI denkt…";
        typingLabel.classList.remove("is-priority");
      } else {
        typingLabel.textContent = "NOCO AI denkt…";
        typingLabel.classList.remove("is-priority");
      }
    }
    if (on) scrollToBottom();
  }

  function getDelay() {
    var ex = isExclusiveActive();
    var map = ex ? exclusiveSpeedMap : speedMap;
    var base = map[settings.speed] || map.normal;
    if (settings.speed === "slow") return ex ? 320 : 950;
    return base;
  }

  function getDelayJitter() {
    return isExclusiveActive() ? Math.random() * 50 : Math.random() * 200;
  }

  function findUserPromptBefore(aiIndex) {
    var messages = getMessages();
    for (var i = aiIndex - 1; i >= 0; i--) {
      if (messages[i].role === "user") return { text: messages[i].text, index: i };
    }
    return null;
  }

  function detectStyleFromText(text) {
    var n = String(text).toLowerCase();
    if (/\bneon\b/.test(n)) return "neon";
    if (/grell|vivid|bunt/.test(n)) return "vivid";
    if (/pastell/.test(n)) return "pastel";
    if (/dunkel|dark|nacht/.test(n)) return "dark";
    if (/noco.?glass|noco.?stil/.test(n)) return "noco";
    return typeof NocoPixel !== "undefined" && NocoPixel.getDefaultStyleId
      ? NocoPixel.getDefaultStyleId() : "standard";
  }

  function setPixelStyle(styleId) {
    if (pixelStyle) pixelStyle.value = styleId;
    if (pixelStylePills) {
      pixelStylePills.querySelectorAll(".pixel-style-pill").forEach(function (pill) {
        pill.classList.toggle("active", pill.getAttribute("data-style") === styleId);
      });
    }
  }

  function getRandomPixelPrompt() {
    if (typeof NocoPixel !== "undefined" && NocoPixel.getRandomExample) {
      return NocoPixel.getRandomExample();
    }
    return "Erstelle ein Bild von NOCO Logo im Neon-Stil";
  }

  function exportPixelPng(result, scale) {
    var tmp = document.createElement("canvas");
    NocoPixel.drawToCanvas(result, tmp, scale || 12);
    return tmp;
  }

  function downloadCanvasPng(canvas, name) {
    canvas.toBlob(function (blob) {
      if (!blob) return;
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = name || "noco-pixel.png";
      a.click();
      URL.revokeObjectURL(a.href);
    }, "image/png");
  }

  function copyPixelResult(result) {
    if (!result || typeof NocoPixel === "undefined") return;
    var canvas = exportPixelPng(result, 20);
    canvas.toBlob(function (blob) {
      if (!blob) {
        showToast("Kopieren fehlgeschlagen");
        return;
      }
      if (navigator.clipboard && window.ClipboardItem) {
        navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]).then(function () {
          showToast("Bild in Zwischenablage kopiert");
        }).catch(function () {
          downloadCanvasPng(canvas, "noco-pixel-kopie.png");
          showToast("Clipboard blockiert — Bild heruntergeladen");
        });
      } else {
        downloadCanvasPng(canvas, "noco-pixel-kopie.png");
        showToast("Als PNG heruntergeladen (Kopieren nicht verfuegbar)");
      }
    }, "image/png");
  }

  function savePixelResult(result, name) {
    if (!result) return;
    var canvas = exportPixelPng(result, 20);
    canvas.toBlob(function (blob) {
      if (!blob) return;
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = name || ("noco-pixel-" + new Date().toISOString().slice(0, 10) + ".png");
      a.click();
      URL.revokeObjectURL(a.href);
      showToast("Pixel-Bild gespeichert");
    }, "image/png");
  }

  function getMessageById(msgId) {
    var messages = getMessages();
    var i;
    for (i = 0; i < messages.length; i++) {
      if (messages[i].id === msgId) return messages[i];
    }
    return null;
  }

  function resolveChatImage(msg) {
    if (!msg || !msg.image || typeof NocoPixel === "undefined") return null;
    return NocoPixel.ensureResult ? NocoPixel.ensureResult(msg.image) : msg.image;
  }

  function copyChatImage(msgId) {
    var msg = getMessageById(msgId);
    var result = resolveChatImage(msg);
    if (!result) { showToast("Bild nicht gefunden"); return; }
    copyPixelResult(result);
  }

  function saveChatImage(msgId) {
    var msg = getMessageById(msgId);
    var result = resolveChatImage(msg);
    if (!result) return;
    savePixelResult(result, "noco-chat-pixel.png");
  }

  function updatePixelEditorPanel(motif) {
    var label = document.getElementById("pixelEditorMotif");
    var sub = document.getElementById("pixelEditorSub");
    if (!label) return;
    if (!motif) {
      label.textContent = "Kein Motiv gewaehlt — Kachel anklicken";
      if (sub) sub.textContent = "Prompt bestimmt Motiv (z.B. Sonne = sun pattern)";
      return;
    }
    var name = typeof NocoPixel.getMotifLabel === "function" ? NocoPixel.getMotifLabel(motif) : "Motiv";
    label.textContent = (motif.emoji || "✦") + " " + name;
    if (sub) sub.textContent = "Pattern: " + (motif.pattern || "—") + " · Hue " + (motif.hue != null ? motif.hue : "—");
  }

  function setSelectedMotif(index, promptOptional) {
    selectedMotifIndex = index;
    if (pixelMotifGrid) {
      pixelMotifGrid.querySelectorAll(".pixel-motif-chip").forEach(function (chip) {
        var idx = chip.getAttribute("data-motif-index");
        chip.classList.toggle("selected", idx != null && parseInt(idx, 10) === index);
      });
    }
    if (typeof NocoPixel !== "undefined" && NocoPixel.getMotifByIndex) {
      updatePixelEditorPanel(NocoPixel.getMotifByIndex(index));
    }
    if (pixelPrompt && promptOptional) pixelPrompt.value = promptOptional;
  }

  function runPixelGeneration(prompt, opts, canvas, onDone) {
    if (typeof NocoPixel === "undefined" || !canvas) return null;
    opts = opts || {};
    var size = getPixelSize();
    var style = opts.style || detectStyleFromText(prompt);
    var result = NocoPixel.generate(prompt, {
      size: size,
      style: style,
      random: !!opts.random,
      seed: opts.seed,
      allowFallback: opts.allowFallback !== false,
      motifIndex: opts.random ? null : (opts.motifIndex != null ? opts.motifIndex : null)
    });
    if (!result) {
      if (pixelProgress) pixelProgress.hidden = true;
      var phaseElFail = document.getElementById("pixelGenPhase");
      if (phaseElFail) phaseElFail.hidden = true;
      var previewWrapFail = pixelPreviewWrap || (pixelCanvas ? pixelCanvas.closest(".pixel-preview-wrap") : null);
      if (previewWrapFail) previewWrapFail.classList.remove("is-generating");
      if (onDone) onDone(null);
      return null;
    }
    var duration = getPixelDuration();
    var scale = size <= 40 ? 10 : 7;

    if (opts.useProgress && pixelProgress) pixelProgress.hidden = false;
    updatePixelInterruptPanel(0, null, true, duration);
    if (pixelPreviewPlaceholder) pixelPreviewPlaceholder.hidden = true;
    if (pixelCanvas) pixelCanvas.hidden = false;
    var previewWrap = pixelPreviewWrap || (pixelCanvas ? pixelCanvas.closest(".pixel-preview-wrap") : null);
    if (previewWrap) previewWrap.classList.add("is-generating");
    if (pixelCopyBtn) pixelCopyBtn.disabled = true;
    if (pixelSaveBtn) pixelSaveBtn.disabled = true;
    if (pixelToChatBtn) pixelToChatBtn.disabled = true;

    NocoPixel.animateFill(canvas, result, scale, duration, function (p, phase, interrupt) {
      if (pixelProgressBar) pixelProgressBar.style.width = Math.round(p * 100) + "%";
      updatePixelInterruptPanel(p, interrupt, false, duration);
    }, function () {
      NocoPixel.drawToCanvas(result, canvas, scale);
      if (pixelProgress) pixelProgress.hidden = true;
      hidePixelInterruptPanel();
      if (previewWrap) previewWrap.classList.remove("is-generating");
      lastPixelResult = result;
      if (pixelCopyBtn) pixelCopyBtn.disabled = false;
      if (pixelSaveBtn) pixelSaveBtn.disabled = false;
      if (pixelToChatBtn) pixelToChatBtn.disabled = false;
      onPixelGenerationComplete(result, false, opts);
      if (onDone) onDone(result);
    }, { mode: "studio" });
    return result;
  }

  function getPixelZoomScale() {
    return 10;
  }

  function redrawPixelCanvas(result, animate, skipGallery) {
    if (!result || !pixelCanvas || typeof NocoPixel === "undefined") return;
    var scale = getPixelZoomScale();
    if (animate) {
      NocoPixel.animateFill(pixelCanvas, result, scale, getPixelDuration(), null, function () {
        onPixelGenerationComplete(result, !!skipGallery, { syncSelection: true });
      }, { mode: "studio" });
    } else {
      NocoPixel.drawToCanvas(result, pixelCanvas, scale);
      onPixelGenerationComplete(result, true, { syncSelection: true });
    }
  }

  function onPixelGenerationComplete(result, skipGallery, opts) {
    opts = opts || {};
    lastPixelResult = result;
    if (result && result.motifIndex != null && opts.syncSelection) {
      selectedMotifIndex = result.motifIndex;
      if (pixelMotifGrid) {
        pixelMotifGrid.querySelectorAll(".pixel-motif-chip").forEach(function (chip) {
          var idx = chip.getAttribute("data-motif-index");
          chip.classList.toggle("selected", idx != null && parseInt(idx, 10) === result.motifIndex);
        });
      }
      if (typeof NocoPixel.getMotifByIndex === "function") {
        updatePixelEditorPanel(NocoPixel.getMotifByIndex(result.motifIndex));
      }
    }
    if (!skipGallery) {
      incrementPixelStats();
      saveToPixelGallery(result);
    }
    updatePixelResultPanel(result);
    renderPixelPalette(result);
    enablePixelTools(true);
  }

  function updatePixelResultPanel(result) {
    if (!result) return;
    var label = typeof NocoPixel.getMotifLabel === "function"
      ? NocoPixel.getMotifLabel(result.motif) : "Motiv";
    if (pixelInfoMotif) pixelInfoMotif.textContent = label;
    if (pixelInfoDetail) {
      var q = result.quality ? result.quality + " · " : "";
      pixelInfoDetail.textContent = q + result.size + "x" + result.size + " · " + result.styleName + " · Seed " + result.seed;
    }
    if (pixelResultInfo) pixelResultInfo.hidden = false;
  }

  function renderPixelPalette(result) {
    if (!pixelPalette || typeof NocoPixel.extractPalette !== "function") return;
    var colors = NocoPixel.extractPalette(result, 6);
    if (!colors.length) { pixelPalette.hidden = true; return; }
    pixelPalette.innerHTML = "";
    colors.forEach(function (hex) {
      var sw = document.createElement("span");
      sw.className = "pixel-swatch";
      sw.style.background = hex;
      sw.title = hex;
      pixelPalette.appendChild(sw);
    });
    pixelPalette.hidden = false;
  }

  function enablePixelTools(on) {
    var dis = !on;
    if (pixelCopyBtn) pixelCopyBtn.disabled = dis;
    if (pixelSaveBtn) pixelSaveBtn.disabled = dis;
    if (pixelToChatBtn) pixelToChatBtn.disabled = dis;
    if (pixelUpscaleBtn) pixelUpscaleBtn.disabled = dis;
    if (pixelRegenerateBtn) pixelRegenerateBtn.disabled = dis;
    if (pixelReplayBtn) pixelReplayBtn.disabled = dis;
    if (pixelFullscreenBtn) pixelFullscreenBtn.disabled = dis;
    if (pixelCopySeedBtn) pixelCopySeedBtn.disabled = dis;
  }

  function loadPixelGallery() {
    try {
      return JSON.parse(localStorage.getItem(PIXEL_GALLERY_KEY) || "[]");
    } catch (e) {
      return [];
    }
  }

  function saveToPixelGallery(result) {
    if (!result) return;
    var gallery = loadPixelGallery();
    gallery.unshift({
      pixels: result.pixels,
      size: result.size,
      style: result.style,
      styleName: result.styleName,
      seed: result.seed,
      prompt: result.prompt,
      motif: result.motif,
      time: Date.now()
    });
    gallery = gallery.slice(0, 48);
    try { localStorage.setItem(PIXEL_GALLERY_KEY, JSON.stringify(gallery)); } catch (e) { /* */ }
    renderPixelGallery();
  }

  function renderPixelGallery() {
    if (!pixelGallery || typeof NocoPixel === "undefined") return;
    var gallery = loadPixelGallery();
    if (!gallery.length) {
      pixelGallery.innerHTML = '<p class="pixel-gallery-empty">Noch keine Bilder — generiere dein erstes Pixel!</p>';
      return;
    }
    pixelGallery.innerHTML = "";
    gallery.forEach(function (item, idx) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pixel-gallery-item";
      btn.setAttribute("data-gallery-idx", idx);
      btn.title = item.prompt || "Pixel #" + (idx + 1);
      var c = document.createElement("canvas");
      NocoPixel.drawToCanvas(item, c, 4);
      btn.appendChild(c);
      pixelGallery.appendChild(btn);
    });
  }

  function loadGalleryItem(index) {
    var gallery = loadPixelGallery();
    var item = gallery[index];
    if (!item) return;
    lastPixelResult = NocoPixel.ensureResult ? NocoPixel.ensureResult(item) : item;
    if (pixelPrompt && item.prompt) pixelPrompt.value = item.prompt;
    if (item.style) setPixelStyle(item.style);
    if (pixelPreviewPlaceholder) pixelPreviewPlaceholder.hidden = true;
    if (pixelCanvas) pixelCanvas.hidden = false;
    redrawPixelCanvas(item, false);
    showToast("Galerie-Bild geladen");
  }

  function startPixelStudioGenerate(isRandom, extraOpts) {
    extraOpts = extraOpts || {};
    if (isGeneratingPixel || typeof NocoPixel === "undefined") return;
    if (!canGenerateImage()) {
      showToast("Bilder nur mit NOCO Exclusive / Flux.");
      openExclusiveDialog();
      return;
    }
    var prompt = isRandom ? getRandomPixelPrompt() : (pixelPrompt ? pixelPrompt.value.trim() : "");
    if (!prompt) {
      showToast("Prompt eingeben oder Zufaellig waehlen");
      return;
    }
    if (pixelPrompt) pixelPrompt.value = prompt;
    isGeneratingPixel = true;
    if (pixelGenerateBtn) pixelGenerateBtn.disabled = true;
    var style = extraOpts.style || (pixelStyle ? pixelStyle.value : "noco");
    if (pixelStyle && extraOpts.style) pixelStyle.value = extraOpts.style;
    runPixelGeneration(prompt, {
      style: style,
      random: isRandom,
      seed: extraOpts.seed,
      useScan: true,
      useProgress: true,
      syncSelection: true,
      allowFallback: isRandom,
      motifIndex: extraOpts.motifIndex != null ? extraOpts.motifIndex : null
    }, pixelCanvas, function (result) {
      isGeneratingPixel = false;
      if (pixelGenerateBtn) pixelGenerateBtn.disabled = false;
      if (!result) {
        var subj = NocoPixel.extractSubject ? NocoPixel.extractSubject(prompt) : prompt;
        showToast("Motiv nicht erkannt — probier z.B. Katze, Haus, Sonne");
        if (NocoPixel.buildUnsupportedMessage) {
          showToast(NocoPixel.buildUnsupportedMessage(subj).split("\n")[0].replace(/\*\*/g, ""));
        }
        return;
      }
      incrementImageQuota();
      showToast(
        "<strong>Pixel fertig</strong> — " + escapeHtml(result.motifLabel || "Motiv") + " · <em>3600 Motive</em>",
        { rainbow: true, duration: 3000 }
      );
    });
  }

  function openPixelDialog(prefillPrompt) {
    focusChatImagePrompt();
    if (prefillPrompt && chatInput) {
      setImageMode(true);
      chatInput.value = prefillPrompt;
      autoResizeInput();
      chatInput.focus();
    }
  }

  function openPixelStudio(prefillPrompt) {
    if (!pixelDialog) return;
    updatePixelMeta();
    renderPixelGallery();
    updateExclusiveStats();
    if (prefillPrompt && pixelPrompt) pixelPrompt.value = prefillPrompt;
    showCenteredDialog(pixelDialog);
  }

  function openPixelDialogFromChat() {
    focusChatImagePrompt();
  }

  function openPixelFullscreen() {
    if (!lastPixelResult || !pixelFullscreen || !pixelFullscreenCanvas) return;
    NocoPixel.drawToCanvas(lastPixelResult, pixelFullscreenCanvas, 24);
    pixelFullscreen.hidden = false;
  }

  function closePixelFullscreen() {
    if (pixelFullscreen) pixelFullscreen.hidden = true;
  }

  function appendImageMessage(promptText, opts) {
    opts = opts || {};
    return new Promise(function (resolve) {
      if (typeof NocoPixel === "undefined") { resolve(); return; }
      if (isChatImageRendering()) {
        showToast("Bild wird noch gerendert — gleich wieder moeglich.");
        resolve();
        return;
      }
      hideWelcome();
      var chat = getActiveChat();
      if (!chat) { resolve(); return; }

      isRenderingChatImage = true;
      setChatRenderLock(true);
      var result = opts.result;
      if (!result) {
        var resolved = NocoPixel.resolveMotif ? NocoPixel.resolveMotif(promptText) : null;
        if (resolved && !resolved.supported) {
          isRenderingChatImage = false;
          setChatRenderLock(false);
          appendMessage("ai", resolved.message || (NocoPixel.buildUnsupportedMessage
            ? NocoPixel.buildUnsupportedMessage(resolved.subject)
            : "Dieses Motiv kenne ich noch nicht — probier ein einfaches Wort wie Katze oder Haus."));
          resolve();
          return;
        }
        var style = opts.style || detectStyleFromText(promptText);
        result = NocoPixel.generate(promptText, {
          size: getPixelSize(),
          style: style,
          random: !!opts.random,
          allowFallback: false,
          motifIndex: null,
          uniqueId: Date.now()
        });
        if (!result) {
          isRenderingChatImage = false;
          setChatRenderLock(false);
          var subj = resolved && resolved.subject
            ? resolved.subject
            : (NocoPixel.extractSubject ? NocoPixel.extractSubject(promptText) : promptText);
          appendMessage("ai", NocoPixel.buildUnsupportedMessage
            ? NocoPixel.buildUnsupportedMessage(subj)
            : "Dieses Motiv kann NOCO Render gerade nicht erstellen.");
          resolve();
          return;
        }
      }

      var packed = NocoPixel.packImageMeta ? NocoPixel.packImageMeta(result) : {
        pixels: result.pixels,
        size: result.size,
        style: result.style,
        styleName: result.styleName,
        seed: result.seed,
        prompt: result.prompt,
        motifIndex: result.motifIndex,
        motifLabel: result.motifLabel
      };

      var msg = {
        id: uid(),
        role: "ai",
        type: "image",
        text: (packed.motifLabel || "Motiv") + " · " + result.styleName,
        image: packed,
        time: Date.now()
      };
      chat.messages.push(msg);
      chat.updated = Date.now();
      saveChats();

      var idx = chat.messages.length - 1;
      var built = createMessageEl(msg, idx, "", true);
      chatMessages.appendChild(built.el);
      setTyping(false);
      var renderWrapEarly = built.el.querySelector(".chat-image-wrap");
      scrollImageRenderIntoView(renderWrapEarly);
      scrollToBottom(true);

      var canvas = built.el.querySelector(".chat-image-canvas");
      var scale = getChatImageScale(result.size);
      if (canvas && !opts.skipAnimate) {
        if (activeChatImageAnimCancel) activeChatImageAnimCancel();
        var ctx = canvas.getContext("2d");
        if (ctx) {
          canvas.width = result.size * scale;
          canvas.height = result.size * scale;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        var progressEl = built.el.querySelector(".chat-image-progress");
        var chatFrame = built.el.querySelector(".chat-image-frame");
        if (chatFrame) {
          chatFrame.classList.remove("is-sharp");
          chatFrame.classList.add("is-rendering");
          var imgWrap = chatFrame.closest(".chat-image-wrap");
          if (imgWrap) {
            buildChatRenderStatus(imgWrap);
            imgWrap.removeAttribute("data-hud-step");
            var statusEl = imgWrap.querySelector(".chat-render-status-below");
            if (statusEl) {
              statusEl.classList.remove("is-done");
              var stTxt = statusEl.querySelector(".render-status-text");
              var stStep = statusEl.querySelector(".render-status-step");
              var stBar = statusEl.querySelector(".render-status-bar-fill");
              if (stTxt) stTxt.textContent = "Auftrag empfangen";
              if (stStep) stStep.textContent = "Schritt 01 / 10";
              if (stBar) stBar.style.width = "0%";
            }
          }
        }
        var revealMs = getPixelDuration();
        var renderDone = false;
        function finishChatImageRender() {
          if (renderDone) return;
          renderDone = true;
          clearTimeout(failsafe);
          finalizeChatImageDisplay(canvas, result, scale, chatFrame, progressEl);
          activeChatImageAnimCancel = null;
          isRenderingChatImage = false;
          setChatRenderLock(false);
          if (!opts.skipQuota) incrementImageQuota();
          resolve();
        }
        var failsafe = setTimeout(finishChatImageRender, revealMs + 3200);
        try {
          activeChatImageAnimCancel = NocoPixel.animateFill(canvas, result, scale, revealMs, function (p, phase, interrupt) {
            updateChatRenderHud(chatFrame, p, phase, interrupt);
            scrollToBottom(true);
          }, finishChatImageRender, { mode: "chat" });
        } catch (animErr) {
          finishChatImageRender();
        }
      } else {
        if (canvas) finalizeChatImageDisplay(canvas, result, scale, built.el.querySelector(".chat-image-frame"), built.el.querySelector(".chat-image-progress"));
        isRenderingChatImage = false;
        setChatRenderLock(false);
        if (!opts.skipQuota) incrementImageQuota();
        resolve();
      }
    });
  }

  function handleImageChatRequest(text, opts) {
    opts = opts || {};
    if (!canSendMessage()) {
      showToast("Tageslimit erreicht — Exclusive oder morgen 0:00");
      openExclusiveDialog();
      return;
    }
    if (!canGenerateImage()) {
      showToast("NOCO Render nur mit NOCO Exclusive / Flux.");
      openExclusiveDialog();
      return;
    }
    if (isChatImageRendering()) {
      showToast("Bild wird noch gerendert — gleich wieder moeglich.");
      return;
    }
    switchView("chat");
    if (!opts.skipUserAppend) appendMessage("user", opts.displayText || text);
    chatInput.value = "";
    chatInput.style.height = "auto";
    sendBtn.disabled = true;
    setTyping(true);
    if (typingLabel) typingLabel.textContent = isExclusiveActive() ? "NOCO Render zeichnet…" : "NOCO Render startet…";
    appendImageMessage(text, { skipUserAppend: true }).then(function () {
      if (typingLabel) typingLabel.textContent = "NOCO AI denkt…";
      incrementQuota();
      updateModelUI();
      if (latencyVal) latencyVal.textContent = getPixelDuration() + " ms";
      var subjLabel = NocoPixel.extractSubject ? NocoPixel.extractSubject(text) : text;
      showToast(
        "<strong>Bild fertig</strong> — " + escapeHtml(subjLabel || "Motiv") + " · <em>3600 Motive</em>",
        { rainbow: true, duration: 3200 }
      );
    });
  }

  function renderPixelMotifGrid(category) {
    if (!pixelMotifGrid || typeof NocoPixel === "undefined") return;
    category = category || selectedMotifCategory || "alle";
    selectedMotifCategory = category;
    pixelMotifGrid.innerHTML = "";
    var motifs = NocoPixel.getMotifsByCategory
      ? NocoPixel.getMotifsByCategory(category, 56)
      : (NocoPixel.getFeaturedMotifs ? NocoPixel.getFeaturedMotifs(56) : []);
    motifs.forEach(function (m) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "pixel-motif-chip";
      chip.setAttribute("data-prompt", m.prompt);
      chip.setAttribute("data-motif-index", String(m.index != null ? m.index : 0));
      chip.title = m.prompt;
      chip.innerHTML = '<span class="pm-emoji">' + m.emoji + "</span><span>" + escapeHtml(m.label) + "</span>";
      if (selectedMotifIndex != null && m.index === selectedMotifIndex) chip.classList.add("selected");
      pixelMotifGrid.appendChild(chip);
    });
  }

  function renderSimplePresets() {
    var grid = document.getElementById("pixelPresetsGrid");
    if (!grid || typeof NocoPixel === "undefined" || !NocoPixel.getSimplePresets) return;
    if (grid._rendered) return;
    grid.innerHTML = "";
    var presets = NocoPixel.getSimplePresets();
    var i = 0;
    function renderBatch() {
      var end = Math.min(i + 12, presets.length);
      for (; i < end; i++) {
        var preset = presets[i];
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "pixel-preset-item";
        btn.setAttribute("data-preset-key", preset.key);
        btn.title = preset.label;
        var canvas = document.createElement("canvas");
        canvas.width = 32;
        canvas.height = 32;
        if (NocoPixel.generateSimplePreset) {
          var result = NocoPixel.generateSimplePreset(preset, 32);
          if (result) NocoPixel.drawToCanvas(result, canvas, 1);
        }
        btn.appendChild(canvas);
        var label = document.createElement("span");
        label.textContent = preset.label;
        btn.appendChild(label);
        grid.appendChild(btn);
      }
      if (i < presets.length) {
        requestAnimationFrame(renderBatch);
      } else {
        grid._rendered = true;
      }
    }
    if (!grid._bound) {
      grid._bound = true;
      grid.addEventListener("click", function (e) {
        var item = e.target.closest(".pixel-preset-item");
        if (!item) return;
        var key = item.getAttribute("data-preset-key");
        var prompt = "Erstelle ein Bild von " + key;
        if (pixelPrompt) pixelPrompt.value = prompt;
        if (NocoPixel.resolveMotif) {
          var resolvedPreset = NocoPixel.resolveMotif(prompt);
          if (resolvedPreset && resolvedPreset.supported && resolvedPreset.motif) {
            setSelectedMotif(resolvedPreset.motif.index, prompt);
          }
        } else if (NocoPixel.matchMotif) {
          var motif = NocoPixel.matchMotif(prompt);
          if (motif) setSelectedMotif(motif.index, prompt);
        }
        setPixelStyle(NocoPixel.getDefaultStyleId ? NocoPixel.getDefaultStyleId() : "standard");
        if (canGenerateImage()) {
          startPixelStudioGenerate(false, {
            style: NocoPixel.getDefaultStyleId ? NocoPixel.getDefaultStyleId() : "standard",
            motifIndex: null
          });
        } else {
          showToast("NOCO Render nur mit Exclusive — Prompt ist gesetzt");
          openExclusiveDialog();
        }
      });
    }
    requestAnimationFrame(renderBatch);
  }

  function renderPixelMotifFilters() {
    if (!pixelMotifFilters || typeof NocoPixel === "undefined" || !NocoPixel.getMotifCategories) return;
    pixelMotifFilters.innerHTML = "";
    NocoPixel.getMotifCategories().forEach(function (cat) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pixel-motif-filter" + (cat.id === selectedMotifCategory ? " active" : "");
      btn.setAttribute("data-motif-cat", cat.id);
      btn.setAttribute("role", "tab");
      btn.innerHTML = "<span>" + cat.emoji + "</span> " + escapeHtml(cat.label);
      pixelMotifFilters.appendChild(btn);
    });
    if (!pixelMotifFilters._bound) {
      pixelMotifFilters._bound = true;
      pixelMotifFilters.addEventListener("click", function (e) {
        var tab = e.target.closest(".pixel-motif-filter");
        if (!tab) return;
        var cat = tab.getAttribute("data-motif-cat") || "alle";
        pixelMotifFilters.querySelectorAll(".pixel-motif-filter").forEach(function (t) {
          t.classList.toggle("active", t === tab);
        });
        renderPixelMotifGrid(cat);
      });
    }
    if (pixelMotifGrid && !pixelMotifGrid._bound) {
      pixelMotifGrid._bound = true;
      pixelMotifGrid.addEventListener("click", function (e) {
        var chip = e.target.closest(".pixel-motif-chip");
        if (!chip) return;
        var p = chip.getAttribute("data-prompt");
        var mIdx = parseInt(chip.getAttribute("data-motif-index"), 10);
        setSelectedMotif(mIdx, p);
        if (pixelPrompt) pixelPrompt.value = p;
      });
    }
  }

  function initPixelStudio() {
    if (!pixelStyle || typeof NocoPixel === "undefined") return;
    pixelStyle.innerHTML = "";
    if (pixelStylePills) pixelStylePills.innerHTML = "";
    NocoPixel.getStyles().forEach(function (s) {
      var opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = s.name;
      pixelStyle.appendChild(opt);
      if (pixelStylePills) {
        var pill = document.createElement("button");
        pill.type = "button";
        pill.className = "pixel-style-pill" + (s.id === (NocoPixel.getDefaultStyleId ? NocoPixel.getDefaultStyleId() : "standard") ? " active" : "");
        pill.setAttribute("data-style", s.id);
        pill.setAttribute("role", "option");
        pill.innerHTML = "<span>" + (s.emoji || "🎨") + "</span> " + escapeHtml(s.name);
        pixelStylePills.appendChild(pill);
      }
    });
    if (pixelStylePills) {
      pixelStylePills.addEventListener("click", function (e) {
        var pill = e.target.closest(".pixel-style-pill");
        if (!pill) return;
        setPixelStyle(pill.getAttribute("data-style"));
      });
    }
    if (NocoPixel.getDefaultStyleId) setPixelStyle(NocoPixel.getDefaultStyleId());
    updatePixelMeta();
  }

  function getPreviousAnswers(userIndex, beforeIndex) {
    var messages = getMessages();
    var prev = [];
    for (var i = userIndex + 1; i < beforeIndex; i++) {
      if (messages[i] && messages[i].role === "ai") prev.push(messages[i].text);
    }
    return prev;
  }

  function respondTo(text, opts) {
    opts = opts || {};
    setTyping(true);
    var start = performance.now();
    var tier = getModelTier();
    setTimeout(function () {
      var result = NocoBrain.think(text, {
        variant: opts.variant || 0,
        regenerate: !!opts.regenerate,
        previousAnswers: opts.previousAnswers || [],
        modelTier: tier.id,
        chatHistory: getChatHistoryForBrain()
      });
      setTyping(false);
      incrementQuota();
      clearPreviousRelated();
      var related = NocoBrain.getRelatedQuestions ? NocoBrain.getRelatedQuestions(text, result.topic) : [];
      appendMessage("ai", result.text, {
        animate: true,
        variant: opts.variant || 0,
        topic: result.topic,
        related: related.slice(0, 2),
        brief: result.brief || null
      }).then(function () {
        if (result.brief) openBriefDialog(result.brief);
        if (latencyVal) latencyVal.textContent = Math.round(performance.now() - start) + " ms";
        incrementMsgStats();
        updateModelUI();
      });
    }, getDelay() + getDelayJitter());
  }

  function handleSlashCommand(text) {
    var parts = text.split(/\s+/);
    var cmd = parts[0].toLowerCase();
    var arg = parts.slice(1).join(" ");

    if (cmd === "/help") {
      appendSystemMessage(NocoBrain.getSlashHelp ? NocoBrain.getSlashHelp() : "Befehle: /help /new /clear /model");
      return true;
    }
    if (cmd === "/new") { createChat(true); return true; }
    if (cmd === "/clear") { clearCurrentChat(); return true; }
    if (cmd === "/model") {
      var tier = getModelTier();
      var q = loadQuota();
      var left = Math.max(0, 20 - q.used);
      if (isExclusiveActive()) {
        appendSystemMessage(
          "**Plan:** NOCO Exclusive\n**Modell:** " + tier.name + "\n**Rush:** ~90 ms · **Nachrichten:** Unbegrenzt"
        );
      } else {
        appendSystemMessage(
          "**Plan:** NOCO Access Free\n**Modell:** " + tier.name +
          "\n**Heute:** " + left + "/20 · Prism bis Msg 10, dann Spark\n**Exclusive:** Flux + Rush + Lens + Render"
        );
      }
      return true;
    }
    if (cmd === "/summary") {
      if (!canSendMessage()) {
        showToast("Tageslimit erreicht");
        openExclusiveDialog();
        return true;
      }
      if (typeof NocoBrain.summarizeChatHistory === "function") {
        var sum = NocoBrain.summarizeChatHistory(getChatHistoryForBrain(), "Chat zusammenfassung", { modelTier: getModelTier().id });
        appendMessage("ai", sum.text, { animate: true, related: [] });
        incrementQuota();
        updateModelUI();
      }
      return true;
    }
    if (cmd === "/search") {
      if (!arg) { showToast("Nutze: /search Wort"); return true; }
      searchInChat(arg);
      return true;
    }
    if (cmd === "/topics") { switchView("system"); renderSystemPanel(); return true; }
    if (cmd === "/pixel" || cmd === "/bild") {
      focusChatImagePrompt();
      return true;
    }
    if (cmd === "/detect" || cmd === "/erkennen") {
      triggerImageDetectPicker();
      return true;
    }
    if (cmd === "/saved") {
      if (!savedAnswers.length) {
        appendSystemMessage("Noch keine gespeicherten Antworten. Klick den **Stern** bei einer AI-Antwort.");
      } else {
        var list = savedAnswers.slice(0, 5).map(function (s, i) {
          return (i + 1) + ". " + s.text.slice(0, 60) + (s.text.length > 60 ? "…" : "");
        }).join("\n");
        appendSystemMessage("**Gespeichert (" + savedAnswers.length + "):**\n" + list);
      }
      return true;
    }
    if (cmd === "/random") {
      fireRandomSpark();
      return true;
    }
    if (cmd === "/hub") {
      openDiscoverDialog("overview");
      return true;
    }
    if (cmd === "/brief") {
      if (!arg) {
        if (chatInput) {
          chatInput.value = "/brief ";
          chatInput.focus();
          autoResizeInput();
          showToast("NOCO Brief — Thema angeben, z.B. /brief Klimawandel");
        }
        return true;
      }
      if (!canSendMessage()) {
        showToast("Tageslimit erreicht");
        openExclusiveDialog();
        return true;
      }
      if (typeof NocoBrain.buildIntelBrief === "function") {
        appendMessage("user", text, {});
        if (chatInput) { chatInput.value = ""; autoResizeInput(); }
        setTyping(true);
        var briefStart = performance.now();
        setTimeout(function () {
          var briefResult = NocoBrain.buildIntelBrief(arg, { modelTier: getModelTier().id });
          setTyping(false);
          incrementQuota();
          var briefRelated = NocoBrain.getRelatedQuestions ? NocoBrain.getRelatedQuestions(arg, briefResult.topic) : [];
          appendMessage("ai", briefResult.text, {
            animate: true,
            topic: briefResult.topic,
            related: briefRelated.slice(0, 2),
            brief: briefResult.brief || null
          }).then(function () {
            if (briefResult.brief) openBriefDialog(briefResult.brief);
            if (latencyVal) latencyVal.textContent = Math.round(performance.now() - briefStart) + " ms";
            incrementMsgStats();
            updateModelUI();
          });
        }, getDelay() + getDelayJitter());
      }
      return true;
    }
    return false;
  }

  function renderBriefDialogBody(brief) {
    if (!briefDialogBody || !brief) return;
    var html = "";
    if (brief.mode === "compare" && brief.compare) {
      html += '<div class="brief-compare-grid">';
      ["left", "right"].forEach(function (side) {
        var data = brief.compare[side];
        if (!data) return;
        html += '<article class="brief-compare-col liquid-glass">';
        html += '<span class="brief-col-cat">' + escapeHtml(data.category) + "</span>";
        html += "<h3>" + escapeHtml(data.name) + "</h3>";
        html += '<p class="brief-col-tldr">' + escapeHtml(data.tldr) + ".</p>";
        if (data.bullets && data.bullets.length) {
          html += '<ul class="brief-col-list">';
          data.bullets.forEach(function (b) {
            html += "<li>" + escapeHtml(b) + "</li>";
          });
          html += "</ul>";
        }
        html += "</article>";
      });
      html += "</div>";
    } else {
      html += '<div class="brief-tldr liquid-glass liquid-glass-prism">';
      html += '<span class="brief-tldr-label">TL;DR</span>';
      html += "<p>" + escapeHtml(brief.tldr) + ".</p>";
      html += "</div>";
      if (brief.bullets && brief.bullets.length) {
        html += '<section class="brief-section"><h3>Kernpunkte</h3><ul class="brief-list">';
        brief.bullets.forEach(function (b) {
          html += "<li>" + escapeHtml(b) + "</li>";
        });
        html += "</ul></section>";
      }
      if (brief.related && brief.related.length) {
        html += '<section class="brief-section"><h3>Verwandte Bereiche</h3><div class="brief-related-row">';
        brief.related.forEach(function (r) {
          html += '<button type="button" class="brief-related-chip" data-prompt="' + escapeHtml(r.query) + '">' + escapeHtml(r.label) + "</button>";
        });
        html += "</div></section>";
      }
    }
    if (brief.nextSteps && brief.nextSteps.length) {
      html += '<section class="brief-section"><h3>Als Naechstes</h3><div class="brief-next-row">';
      brief.nextSteps.forEach(function (q) {
        html += '<button type="button" class="brief-next-chip" data-prompt="' + escapeHtml(q) + '">' + escapeHtml(q.length > 44 ? q.slice(0, 42) + "…" : q) + "</button>";
      });
      html += "</div></section>";
    }
    briefDialogBody.innerHTML = html;
  }

  function renderBriefDialogFooter(brief) {
    if (!briefDialogFooter || !brief) return;
    briefDialogFooter.innerHTML = "";
    var askBtn = document.createElement("button");
    askBtn.type = "button";
    askBtn.className = "brief-ask-btn iridescent-btn";
    askBtn.innerHTML = '<span class="btn-shimmer"></span>Ausfuehrlich fragen';
    askBtn.addEventListener("click", function () {
      if (briefDialog) briefDialog.close();
      var q = brief.mode === "compare" && brief.compare
        ? "Was ist der Unterschied zwischen " + brief.compare.left.name + " und " + brief.compare.right.name + "?"
        : (brief.nextSteps && brief.nextSteps[0]) || ("Was ist " + brief.title + "?");
      sendMessage(q);
    });
    briefDialogFooter.appendChild(askBtn);
  }

  function openBriefDialog(brief) {
    if (!briefDialog || !brief) return;
    if (briefDialogTitle) briefDialogTitle.textContent = brief.title || "NOCO Brief";
    if (briefDialogSub) {
      briefDialogSub.textContent = brief.mode === "compare"
        ? "Vergleich · " + (brief.category || "Vault")
        : "Recherche · " + (brief.category || "Vault");
    }
    renderBriefDialogBody(brief);
    renderBriefDialogFooter(brief);
    showCenteredDialog(briefDialog);
  }

  function clearCurrentChat() {
    var chat = getActiveChat();
    if (!chat) return;
    chat.messages = [];
    saveChats();
    renderAllMessages();
    showToast("Chat geleert");
  }

  function searchInChat(term) {
    term = (term || "").trim().toLowerCase();
    chatMessages.querySelectorAll(".message").forEach(function (el) { el.classList.remove("search-hit"); });
    if (!term) return;
    var messages = getMessages();
    var hits = 0;
    var firstHit = -1;
    messages.forEach(function (msg, i) {
      if (msg.text.toLowerCase().indexOf(term) === -1) return;
      hits++;
      if (firstHit === -1) firstHit = i;
      var el = chatMessages.querySelector('[data-msg-index="' + i + '"]');
      if (el) el.classList.add("search-hit");
    });

    if (hits === 0) {
      showToast('Kein Treffer fuer "' + term + '"');
    } else {
      showToast(hits + " Treffer — erste markiert");
      if (firstHit >= 0) {
        var target = chatMessages.querySelector('[data-msg-index="' + firstHit + '"]');
        if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }

  function toggleSaveMessage(index) {
    var messages = getMessages();
    var msg = messages[index];
    if (!msg || msg.role !== "ai") return;
    var existing = -1;
    for (var i = 0; i < savedAnswers.length; i++) {
      if (savedAnswers[i].msgId === msg.id) { existing = i; break; }
    }
    if (existing >= 0) {
      savedAnswers.splice(existing, 1);
      showToast("Aus Gespeichert entfernt");
    } else {
      savedAnswers.unshift({
        msgId: msg.id,
        chatId: activeChatId,
        text: msg.text,
        topic: msg.topic || "AI",
        time: Date.now()
      });
      savedAnswers = savedAnswers.slice(0, 50);
      showToast("Antwort gespeichert");
    }
    persistSaved();
    renderAllMessages();
  }

  function simplifyMessage(aiIndex) {
    if (isTyping) return;
    if (!canSendMessage()) {
      showToast("Tageslimit erreicht");
      openExclusiveDialog();
      return;
    }
    var messages = getMessages();
    var aiMsg = messages[aiIndex];
    if (!aiMsg || aiMsg.role !== "ai") return;
    var prompt = findUserPromptBefore(aiIndex);
    appendMessage("user", "Einfacher erklaeren: " + (prompt ? prompt.text : aiMsg.text.slice(0, 40)));
    setTyping(true);
    setTimeout(function () {
      var result = NocoBrain.think("", {
        simplify: true,
        sourceText: aiMsg.text,
        skipFlavor: true
      });
      setTyping(false);
      incrementQuota();
      appendMessage("ai", result.text, { animate: true, topic: "Einfach", related: [] });
      showToast("Vereinfachte Erklaerung");
    }, getDelay() * 0.5);
  }

  function renameCurrentChat() {
    closeOverlayMenus();
    var chat = getActiveChat();
    if (!chat) return;
    var name = prompt("Chat umbenennen:", chat.title);
    if (!name || !name.trim()) return;
    chat.title = name.trim().slice(0, 40);
    chat.updated = Date.now();
    saveChats();
    renderChatList();
    showToast("Chat umbenannt");
  }

  function hideWriteAssist() {
    writeAssistIndex = -1;
    writeAssistItems = [];
    if (writeAssist) writeAssist.hidden = true;
    if (writeAssistList) writeAssistList.innerHTML = "";
  }

  function hideGlowPrism() {
    if (glowPrismTimer) clearTimeout(glowPrismTimer);
    if (nocoGlowPrism) nocoGlowPrism.hidden = true;
    if (glowPrismChips) glowPrismChips.innerHTML = "";
  }

  function renderGlowPrism() {
    if (!nocoGlowPrism || !chatInput || typeof NocoBrain === "undefined" || !NocoBrain.getGlowPrism) return;
    var val = chatInput.value;
    if (val.charAt(0) === "/" || !val.trim() || val.trim().length < 2) {
      hideGlowPrism();
      return;
    }
    if (glowPrismTimer) clearTimeout(glowPrismTimer);
    glowPrismTimer = setTimeout(function () {
      var data = NocoBrain.getGlowPrism(val);
      if (!data) {
        hideGlowPrism();
        return;
      }
      if (glowPrismCategory) {
        glowPrismCategory.textContent = data.category;
        glowPrismCategory.setAttribute("data-cat", data.category);
      }
      if (glowPrismIntent) glowPrismIntent.textContent = data.intent;
      if (glowPrismMeter) {
        glowPrismMeter.style.setProperty("--glow-fill", Math.min(100, data.confidence) + "%");
      }
      if (glowPrismChips) {
        glowPrismChips.innerHTML = "";
        (data.related || []).slice(0, 2).forEach(function (q) {
          var chip = document.createElement("button");
          chip.type = "button";
          chip.className = "glow-prism-chip";
          chip.setAttribute("data-prompt", q);
          chip.textContent = q.length > 42 ? q.slice(0, 40) + "…" : q;
          chip.addEventListener("mousedown", function (e) {
            e.preventDefault();
            sendMessage(q);
          });
          glowPrismChips.appendChild(chip);
        });
      }
      nocoGlowPrism.hidden = false;
    }, 110);
  }

  function applyWriteSuggestion(text) {
    if (!chatInput) return;
    chatInput.value = text;
    hideWriteAssist();
    autoResizeInput();
    chatInput.focus();
  }

  function renderWriteAssist() {
    if (!writeAssist || !writeAssistList || !chatInput || typeof NocoBrain === "undefined") return;
    var val = chatInput.value;
    if (val.charAt(0) === "/" || !val.trim() || val.trim().length < 2) {
      hideWriteAssist();
      return;
    }
    var suggestions = NocoBrain.getWriteSuggestions ? NocoBrain.getWriteSuggestions(val, 3) : [];
    if (!suggestions.length) {
      hideWriteAssist();
      return;
    }
    writeAssistItems = suggestions;
    writeAssistIndex = -1;
    writeAssistList.innerHTML = "";
    suggestions.forEach(function (s, idx) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "write-assist-item";
      btn.setAttribute("data-idx", idx);
      btn.setAttribute("role", "option");
      btn.innerHTML = "<span>" + escapeHtml(s.text) + "</span>";
      btn.addEventListener("mousedown", function (e) {
        e.preventDefault();
        applyWriteSuggestion(s.text);
      });
      writeAssistList.appendChild(btn);
    });
    writeAssist.hidden = false;
  }

  function highlightWriteAssist(delta) {
    if (!writeAssistList || !writeAssistItems.length) return;
    var items = writeAssistList.querySelectorAll(".write-assist-item");
    if (!items.length) return;
    writeAssistIndex = (writeAssistIndex + delta + items.length) % items.length;
    items.forEach(function (el, i) {
      el.classList.toggle("active", i === writeAssistIndex);
    });
    items[writeAssistIndex].scrollIntoView({ block: "nearest" });
  }

  function acceptWriteAssistSelection() {
    if (writeAssistIndex >= 0 && writeAssistItems[writeAssistIndex]) {
      applyWriteSuggestion(writeAssistItems[writeAssistIndex].text);
      return true;
    }
    return false;
  }

  function resolveQueryText(text) {
    if (typeof NocoBrain.prepareUserMessage !== "function") return text;
    return NocoBrain.prepareUserMessage(text);
  }

  function sendMessage(text, opts) {
    opts = opts || {};
    text = (text || "").trim();
    if (!text || isTyping) return;
    if (isChatImageRendering()) {
      showToast("NOCO Render laeuft — bitte warten bis das Bild fertig ist.");
      return;
    }
    hideWriteAssist();
    hideGlowPrism();

    if (text.charAt(0) === "/") {
      if (handleSlashCommand(text)) {
        chatInput.value = "";
        if (commandPalette) commandPalette.hidden = true;
        autoResizeInput();
        return;
      }
    }

    if (imageModeActive && text.charAt(0) !== "/") {
      if (!canSendMessage()) {
        showToast("Tageslimit 20/20 — Exclusive fuer unbegrenzt oder ab 0:00 neu.");
        openExclusiveDialog();
        return;
      }
      if (!canGenerateImage()) {
        showToast("NOCO Render nur mit NOCO Exclusive / Flux.");
        openExclusiveDialog();
        return;
      }
      var imgQuery = typeof NocoPixel !== "undefined" && NocoPixel.formatImagePrompt
        ? NocoPixel.formatImagePrompt(text)
        : ("Mach ein Bild von " + text);
      handleImageChatRequest(imgQuery, Object.assign({}, opts, { displayText: text }));
      setImageMode(false);
      return;
    }

    if (typeof NocoPixel !== "undefined" && NocoPixel.isImageRequest(text)) {
      handleImageChatRequest(text, Object.assign({}, opts, { displayText: text }));
      return;
    }

    var queryText = resolveQueryText(text);
    if (queryText !== text && text.split(/\s+/).filter(Boolean).length <= 4 &&
        !(typeof NocoPixel !== "undefined" && NocoPixel.isImageRequest(queryText))) {
      showToast("Verstanden: " + (queryText.length > 48 ? queryText.slice(0, 48) + "…" : queryText));
    }

    if (typeof NocoPixel !== "undefined" && NocoPixel.isImageRequest(queryText)) {
      handleImageChatRequest(queryText, Object.assign({}, opts, { displayText: text }));
      return;
    }

    if (!canSendMessage()) {
      showToast("Tageslimit 20/20 — Exclusive fuer unbegrenzt oder ab 0:00 neu.");
      openExclusiveDialog();
      return;
    }
    switchView("chat");
    if (!opts.skipUserAppend) appendMessage("user", text);
    chatInput.value = "";
    chatInput.style.height = "auto";
    sendBtn.disabled = true;
    respondTo(queryText, opts);
  }

  function regenerateMessage(aiIndex) {
    if (isTyping) return;
    if (!canSendMessage()) {
      showToast("Tageslimit erreicht");
      openExclusiveDialog();
      return;
    }
    var prompt = findUserPromptBefore(aiIndex);
    if (!prompt) return;

    var messages = getMessages();
    var aiMsg = messages[aiIndex];
    var previousAnswers = getPreviousAnswers(prompt.index, aiIndex);
    if (previousAnswers.indexOf(aiMsg.text) === -1) previousAnswers.push(aiMsg.text);
    var nextVariant = (aiMsg.variant || 0) + 1;

    appendMessage("user", prompt.text);
    respondTo(prompt.text, {
      variant: nextVariant,
      regenerate: true,
      previousAnswers: previousAnswers
    });
    showToast("Frage + Alternative #" + (nextVariant + 1) + " unten…");
  }

  function copyMessage(index) {
    var messages = getMessages();
    var msg = messages[index];
    if (!msg) return;
    var text = msg.text;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showToast("Nachricht kopiert");
      }).catch(function () { fallbackCopy(text); });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); showToast("Nachricht kopiert"); } catch (e) { showToast("Kopieren fehlgeschlagen"); }
    document.body.removeChild(ta);
  }

  function setFeedback(index, type) {
    var messages = getMessages();
    if (!messages[index]) return;
    messages[index].feedback = type;
    saveChats();

    try {
      var fb = JSON.parse(localStorage.getItem(FEEDBACK_KEY) || "[]");
      fb.push({ msgId: messages[index].id, type: type, time: Date.now() });
      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(fb.slice(-200)));
    } catch (e) { /* */ }

    renderAllMessages();
    showToast(type === "up" ? "Danke! Positives NOCO-Feedback gespeichert." : "Feedback notiert — danke fuer die Ehrlichkeit!");
    closeFeedbackFloat();
  }

  function closeFeedbackFloat() {
    if (feedbackFloat) feedbackFloat.hidden = true;
    openFeedbackIndex = null;
  }

  function openFeedbackFloat(btn, msgIndex) {
    if (!feedbackFloat) return;
    var messages = getMessages();
    var msg = messages[msgIndex];
    if (!msg) return;

    if (openFeedbackIndex === msgIndex && !feedbackFloat.hidden) {
      closeFeedbackFloat();
      return;
    }

    feedbackFloat.innerHTML =
      '<button type="button" class="feedback-btn' + (msg.feedback === "up" ? " selected-up" : "") + '" data-fb="up" data-index="' + msgIndex + '" aria-label="Daumen hoch">' + THUMB_UP_SVG + '</button>' +
      '<button type="button" class="feedback-btn' + (msg.feedback === "down" ? " selected-down" : "") + '" data-fb="down" data-index="' + msgIndex + '" aria-label="Daumen runter">' + THUMB_DOWN_SVG + '</button>' +
      '<span class="feedback-hint">NOCO Feedback</span>';

    feedbackFloat.hidden = false;
    openFeedbackIndex = msgIndex;

    var rect = btn.getBoundingClientRect();
    var floatH = feedbackFloat.offsetHeight || 44;
    var floatW = feedbackFloat.offsetWidth || 180;
    var top = rect.top - floatH - 8;
    var left = rect.left;
    if (top < 8) top = rect.bottom + 8;
    if (left + floatW > window.innerWidth - 8) left = window.innerWidth - floatW - 8;
    feedbackFloat.style.top = top + "px";
    feedbackFloat.style.left = Math.max(8, left) + "px";
  }

  function showTermDialog(term) {
    if (!termDialog || typeof NocoBrain.getTermInfo !== "function") return;
    var info = NocoBrain.getTermInfo(term);
    if (!info) {
      showToast("Kein Eintrag fuer \"" + term + "\"");
      return;
    }
    pendingTermQuery = "Was ist " + term + "?";
    if (termDialogTitle) termDialogTitle.textContent = term;
    if (termDialogContent) termDialogContent.innerHTML = renderAiHtml(info);
    showCenteredDialog(termDialog);
  }

  function activateExclusivePlan(planType) {
    var ex = { active: true, plan: planType, since: Date.now() };
    if (planType === "trial") {
      ex.until = Date.now() + 86400000;
      ex.label = "Testphase 1 Tag";
    } else {
      var months = parseInt(planType, 10) || 1;
      ex.until = Date.now() + months * 30 * 86400000;
      ex.label = months + " Monat(e)";
    }
    saveExclusive(ex);
    if (exclusiveDialog && exclusiveDialog.open) {
      exclusiveDialog.classList.add("is-purchasing");
      exclusiveDialog.classList.remove("is-closing");
      window.setTimeout(function () {
        exclusiveDialog.classList.remove("is-purchasing", "is-closing");
        exclusiveDialog.close();
      }, 420);
    }
    playRainbowBurst(exclusiveTopBtn || exclusiveCard, { count: 56, duration: 2800 });
    document.body.classList.add("exclusive-activated");
    setTimeout(function () { document.body.classList.remove("exclusive-activated"); }, 1400);
    showToast(
      "<strong>NOCO Exclusive aktiv</strong> — Flux + Rush ~90 ms · " + escapeHtml(ex.label),
      { rainbow: true, duration: 3400 }
    );
    updateModelUI();
    updateExclusiveStats();
  }

  /* ── Message Actions Delegation ── */

  chatMessages.addEventListener("click", function (e) {
    var termBtn = e.target.closest(".term-link");
    if (termBtn) {
      e.preventDefault();
      e.stopPropagation();
      showTermDialog(termBtn.getAttribute("data-term"));
      return;
    }

    var imgCopy = e.target.closest(".chat-img-copy");
    if (imgCopy) {
      copyChatImage(imgCopy.getAttribute("data-msg-id") || imgCopy.getAttribute("data-msg-index"));
      return;
    }
    var imgSave = e.target.closest(".chat-img-save");
    if (imgSave) {
      saveChatImage(imgSave.getAttribute("data-msg-id") || imgSave.getAttribute("data-msg-index"));
      return;
    }
    var imgStudio = e.target.closest(".chat-img-studio");
    if (imgStudio) {
      var studioMsg = getMessageById(imgStudio.getAttribute("data-msg-id"));
      if (studioMsg && studioMsg.image) {
        var studioResult = resolveChatImage(studioMsg);
        if (studioResult) {
          lastPixelResult = studioResult;
          if (pixelPrompt && studioResult.prompt) pixelPrompt.value = studioResult.prompt;
        }
      }
      openPixelStudio(studioResult && studioResult.prompt ? studioResult.prompt : "");
      return;
    }

    var briefBtn = e.target.closest(".message-brief-btn");
    if (briefBtn) {
      var bIdx = parseInt(briefBtn.getAttribute("data-msg-index"), 10);
      var bMsgs = getMessages();
      if (bMsgs[bIdx] && bMsgs[bIdx].brief) openBriefDialog(bMsgs[bIdx].brief);
      return;
    }

    var chip = e.target.closest("[data-prompt]");
    if (chip) {
      if (chip.classList.contains("welcome-chip")) return;
      if (!canSendMessage()) {
        showToast("Tageslimit erreicht — Exclusive oder morgen 0:00");
        openExclusiveDialog();
        return;
      }
      var prompt = chip.getAttribute("data-prompt");
      if (prompt) sendMessage(prompt);
      return;
    }

    var action = e.target.closest("[data-action]");
    if (action) {
      var idx = parseInt(action.getAttribute("data-index"), 10);
      var act = action.getAttribute("data-action");
      if (act === "copy") copyMessage(idx);
      else if (act === "regenerate") regenerateMessage(idx);
      else if (act === "simplify") simplifyMessage(idx);
      else if (act === "save") toggleSaveMessage(idx);
      else if (act === "feedback") openFeedbackFloat(action, idx);
      return;
    }
  });

  if (feedbackFloat) {
    feedbackFloat.addEventListener("click", function (e) {
      var fb = e.target.closest("[data-fb]");
      if (fb) {
        e.stopPropagation();
        setFeedback(parseInt(fb.getAttribute("data-index"), 10), fb.getAttribute("data-fb"));
      }
    });
  }

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".msg-action[data-action='feedback']") && !e.target.closest(".feedback-float")) {
      closeFeedbackFloat();
    }
  });

  window.addEventListener("scroll", closeFeedbackFloat, true);
  if (chatMessages) chatMessages.addEventListener("scroll", closeFeedbackFloat);

  function openExclusiveDialog() {
    if (exclusiveDialog) exclusiveDialog.classList.remove("is-closing");
    updateExclusiveStats();
    updateExclusiveSidebar();
    animateExclusiveSpeedBars();
    showCenteredDialog(exclusiveDialog);
  }

  function closeExclusiveDialog(opts) {
    opts = opts || {};
    if (!exclusiveDialog || !exclusiveDialog.open) return;
    if (!opts.skipBurst) {
      var burstAnchor = closeExclusive || exclusiveTopBtn;
      playRainbowBurst(burstAnchor, { count: 40, duration: 2400 });
    }
    exclusiveDialog.classList.add("is-closing");
    exclusiveDialog.classList.remove("is-purchasing");
    window.setTimeout(function () {
      exclusiveDialog.classList.remove("is-closing");
      exclusiveDialog.close();
    }, 380);
  }

  if (exclusiveCard) exclusiveCard.addEventListener("click", openExclusiveDialog);
  if (exclusiveTopBtn) exclusiveTopBtn.addEventListener("click", openExclusiveDialog);
  var navImageBtn = document.getElementById("navImageBtn");
  var navDetectBtn = document.getElementById("navDetectBtn");
  var chatAttachBtn = document.getElementById("chatAttachBtn");
  var imageDetectInput = document.getElementById("imageDetectInput");
  if (navImageBtn) navImageBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeOverlayMenus();
    focusChatImagePrompt();
  });
  if (navDetectBtn) navDetectBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeOverlayMenus();
    triggerImageDetectPicker();
  });
  if (chatImageBtn) {
    chatImageBtn.addEventListener("click", function () {
      if (imageModeActive) {
        setImageMode(false);
        chatInput.focus();
        return;
      }
      focusChatImagePrompt();
    });
  }
  if (inputSuggestionsRefresh) {
    inputSuggestionsRefresh.addEventListener("click", function () {
      renderInputSuggestions();
      renderWelcomeChips();
    });
  }
  if (chatAttachBtn) chatAttachBtn.addEventListener("click", triggerImageDetectPicker);
  if (imageDetectInput) {
    imageDetectInput.addEventListener("change", function () {
      var file = imageDetectInput.files && imageDetectInput.files[0];
      imageDetectInput.value = "";
      if (file) handleImageDetectFile(file);
    });
  }
  if (inputExclusiveBtn) inputExclusiveBtn.addEventListener("click", openExclusiveDialog);
  if (pixelExamples) {
    pixelExamples.addEventListener("click", function (e) {
      var chip = e.target.closest("[data-prompt]");
      if (!chip || !pixelPrompt) return;
      pixelPrompt.value = chip.getAttribute("data-prompt");
      if (isExclusiveActive()) startPixelStudioGenerate(false);
      else showToast("Exclusive noetig fuer Pixel-Generierung");
    });
  }
  if (closePixel && pixelDialog) {
    closePixel.addEventListener("click", function () { pixelDialog.close(); });
    pixelDialog.addEventListener("click", function (e) { if (e.target === pixelDialog) pixelDialog.close(); });
  }
  var pixelEditorClear = document.getElementById("pixelEditorClear");
  if (pixelEditorClear) {
    pixelEditorClear.addEventListener("click", function () {
      selectedMotifIndex = null;
      if (pixelMotifGrid) {
        pixelMotifGrid.querySelectorAll(".pixel-motif-chip").forEach(function (c) { c.classList.remove("selected"); });
      }
      updatePixelEditorPanel(null);
      showToast("Motiv-Auswahl geloescht — Prompt steuert Motiv");
    });
  }
  if (pixelRandomBtn) pixelRandomBtn.addEventListener("click", function () {
    selectedMotifIndex = null;
    startPixelStudioGenerate(true);
  });
  if (pixelGenerateBtn) pixelGenerateBtn.addEventListener("click", function () { startPixelStudioGenerate(false); });
  if (pixelRegenerateBtn) {
    pixelRegenerateBtn.addEventListener("click", function () {
      if (!pixelPrompt || !pixelPrompt.value.trim()) return;
      startPixelStudioGenerate(false, { seed: (lastPixelResult ? lastPixelResult.seed + 17 : Date.now()) });
    });
  }
  if (pixelReplayBtn) {
    pixelReplayBtn.addEventListener("click", function () {
      if (!lastPixelResult) return;
      redrawPixelCanvas(lastPixelResult, true, true);
      showToast("Blur-Reveal Replay");
    });
  }
  if (pixelShuffleStyleBtn) {
    pixelShuffleStyleBtn.addEventListener("click", function () {
      if (!isExclusiveActive()) { openExclusiveDialog(); return; }
      var style = typeof NocoPixel.getRandomStyleId === "function" ? NocoPixel.getRandomStyleId() : "noco";
      setPixelStyle(style);
      if (!pixelPrompt || !pixelPrompt.value.trim()) {
        if (pixelPrompt) pixelPrompt.value = getRandomPixelPrompt();
      }
      startPixelStudioGenerate(false, { style: style });
    });
  }
  if (pixelFullscreenBtn) pixelFullscreenBtn.addEventListener("click", openPixelFullscreen);
  if (pixelFullscreenClose) pixelFullscreenClose.addEventListener("click", closePixelFullscreen);
  if (pixelFullscreen) {
    pixelFullscreen.addEventListener("click", function (e) {
      if (e.target === pixelFullscreen) closePixelFullscreen();
    });
  }
  if (pixelCopySeedBtn) {
    pixelCopySeedBtn.addEventListener("click", function () {
      if (!lastPixelResult) return;
      var seedStr = String(lastPixelResult.seed);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(seedStr).then(function () { showToast("Seed kopiert: " + seedStr); });
      } else {
        fallbackCopy(seedStr);
      }
    });
  }
  if (pixelUpscaleBtn) {
    pixelUpscaleBtn.addEventListener("click", function () {
      if (!lastPixelResult) return;
      var canvas = exportPixelPng(lastPixelResult, 32);
      canvas.toBlob(function (blob) {
        if (!blob) return;
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "noco-pixel-hd-" + new Date().toISOString().slice(0, 10) + ".png";
        a.click();
        URL.revokeObjectURL(a.href);
        showToast("HD Export (32x Zoom)");
      }, "image/png");
    });
  }
  if (pixelGallery) {
    pixelGallery.addEventListener("click", function (e) {
      var item = e.target.closest("[data-gallery-idx]");
      if (!item) return;
      loadGalleryItem(parseInt(item.getAttribute("data-gallery-idx"), 10));
    });
  }
  document.querySelectorAll(".ex-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      document.querySelectorAll(".ex-tab").forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      filterExclusiveFeatures(tab.getAttribute("data-ex-tab"));
    });
  });
  if (pixelCopyBtn) pixelCopyBtn.addEventListener("click", function () { copyPixelResult(lastPixelResult); });
  if (pixelSaveBtn) pixelSaveBtn.addEventListener("click", function () { savePixelResult(lastPixelResult); });
  if (pixelToChatBtn) {
    pixelToChatBtn.addEventListener("click", function () {
      if (!lastPixelResult) return;
      switchView("chat");
      if (isChatImageRendering()) {
        showToast("Bild wird noch gerendert — gleich wieder moeglich.");
        return;
      }
      var prompt = pixelPrompt ? pixelPrompt.value.trim() : lastPixelResult.prompt;
      appendMessage("user", prompt || "Pixel-Bild generieren");
      appendImageMessage(prompt || lastPixelResult.prompt, {
        skipAnimate: true,
        skipQuota: true,
        result: lastPixelResult
      }).then(function () {
        if (pixelDialog) pixelDialog.close();
        showToast("Pixel-Bild im Chat");
      });
    });
  }
  if (closeExclusive && exclusiveDialog) {
    closeExclusive.addEventListener("click", function (e) {
      e.preventDefault();
      closeExclusiveDialog();
    });
    exclusiveDialog.addEventListener("click", function (e) {
      if (e.target === exclusiveDialog) closeExclusiveDialog();
    });
  }
  document.querySelectorAll(".exclusive-plan").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var plan = btn.getAttribute("data-plan");
      var label = btn.querySelector(".plan-name");
      var name = label ? label.textContent : plan;
      if (confirm("NOCO Exclusive starten: " + name + "?\n\nAlles simuliert — kein echtes Geld.")) {
        activateExclusivePlan(plan);
      }
    });
  });

  if (closeBrief && briefDialog) {
    closeBrief.addEventListener("click", function () { briefDialog.close(); });
    briefDialog.addEventListener("click", function (e) {
      if (e.target === briefDialog) briefDialog.close();
      var chip = e.target.closest(".brief-related-chip, .brief-next-chip");
      if (chip) {
        var q = chip.getAttribute("data-prompt");
        if (q) {
          briefDialog.close();
          sendMessage(q);
        }
      }
    });
  }

  if (closeTerm && termDialog) {
    closeTerm.addEventListener("click", function () { termDialog.close(); });
    termDialog.addEventListener("click", function (e) { if (e.target === termDialog) termDialog.close(); });
  }
  if (termAskBtn) {
    termAskBtn.addEventListener("click", function () {
      var q = pendingTermQuery;
      if (termDialog) termDialog.close();
      switchView("chat");
      if (q) {
        window.requestAnimationFrame(function () {
          sendMessage(q);
          scrollToBottom();
        });
      }
    });
  }

  /* ── Input ── */

  function autoResizeInput() {
    chatInput.style.height = "auto";
    chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + "px";
    sendBtn.disabled = !canSendMessage() || isTyping || !chatInput.value.trim();
    if (commandPalette) {
      commandPalette.hidden = chatInput.value.trim().charAt(0) !== "/";
    }
    if (!chatInput.value.trim()) {
      renderInputSuggestions();
    } else {
      hideInputSuggestions();
    }
    renderWriteAssist();
    renderGlowPrism();
  }

  chatInput.addEventListener("input", autoResizeInput);
  function setInputFocusState(on) {
    document.body.classList.toggle("input-focused", on);
    if (inputGlass) inputGlass.classList.toggle("is-focused", on);
  }

  chatInput.addEventListener("focus", function () {
    setInputFocusState(true);
    if (!chatInput.value.trim()) renderInputSuggestions();
  });
  chatInput.addEventListener("blur", function () {
    setInputFocusState(false);
    setTimeout(function () {
      hideWriteAssist();
      hideGlowPrism();
    }, 180);
  });
  chatInput.addEventListener("keydown", function (e) {
    if (writeAssist && !writeAssist.hidden && writeAssistItems.length) {
      if (e.key === "ArrowDown") { e.preventDefault(); highlightWriteAssist(1); return; }
      if (e.key === "ArrowUp") { e.preventDefault(); highlightWriteAssist(-1); return; }
      if (e.key === "Tab" && !e.shiftKey) {
        if (acceptWriteAssistSelection()) { e.preventDefault(); return; }
      }
      if (e.key === "Escape") { hideWriteAssist(); return; }
    }
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(chatInput.value); }
  });

  if (quickWrite) {
    quickWrite.addEventListener("click", function (e) {
      var btn = e.target.closest(".quick-write-btn");
      if (!btn || !chatInput) return;
      var prompt = btn.getAttribute("data-prompt");
      var insert = btn.getAttribute("data-insert");
      if (prompt && prompt.indexOf("?") !== -1 && prompt.indexOf("…") === -1) {
        sendMessage(prompt);
        return;
      }
      if (prompt || insert) {
        chatInput.value = prompt || insert || "";
        chatInput.focus();
        autoResizeInput();
        var len = chatInput.value.length;
        chatInput.setSelectionRange(len, len);
      }
    });
  }
  chatForm.addEventListener("submit", function (e) { e.preventDefault(); sendMessage(chatInput.value); });

  if (promptChips) promptChips.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    if (!canSendMessage()) {
      showToast("Tageslimit erreicht — Exclusive oder morgen 0:00");
      openExclusiveDialog();
      return;
    }
    sendMessage(chip.getAttribute("data-prompt"));
  });

  document.addEventListener("click", function (e) {
    var dCard = e.target.closest(".discover-card");
    if (dCard) {
      var dAction = dCard.getAttribute("data-action");
      if (dAction) {
        handleDiscoverAction(dAction);
        return;
      }
      var dPrompt = dCard.getAttribute("data-prompt");
      if (dPrompt) {
        if (!canSendMessage()) {
          showToast("Tageslimit erreicht — Exclusive oder morgen 0:00");
          openExclusiveDialog();
          return;
        }
        sendMessage(dPrompt);
      }
      return;
    }
    var wChip = e.target.closest(".welcome-chip");
    if (!wChip) return;
    var wPrompt = wChip.getAttribute("data-prompt");
    if (wChip.getAttribute("data-send") === "1") {
      if (wChip.getAttribute("data-image") === "1") {
        if (!canGenerateImage()) {
          showToast("Bilder nur mit NOCO Exclusive / Flux.");
          openExclusiveDialog();
          return;
        }
      }
      if (!canSendMessage()) {
        showToast("Tageslimit erreicht — Exclusive oder morgen 0:00");
        openExclusiveDialog();
        return;
      }
      sendMessage(wPrompt);
      return;
    }
    var wFill = wChip.getAttribute("data-fill");
    if (wFill) {
      switchView("chat");
      chatInput.value = wFill;
      chatInput.focus();
      autoResizeInput();
      return;
    }
    if (!canSendMessage()) {
      showToast("Tageslimit erreicht — Exclusive oder morgen 0:00");
      openExclusiveDialog();
      return;
    }
    sendMessage(wPrompt);
  });

  if (planDiscoverBtn) planDiscoverBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    closeOverlayMenus();
    openDiscoverDialog();
  });
  var chatToolsImageBtn = document.getElementById("chatToolsImageBtn");
  if (chatToolsImageBtn) {
    chatToolsImageBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      closeOverlayMenus();
      focusChatImagePrompt();
    });
  }
  var openPixelStudioBtn = document.getElementById("openPixelStudioBtn");
  if (openPixelStudioBtn) {
    openPixelStudioBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      closeOverlayMenus();
      openPixelStudio();
    });
  }
  var pixelGoChatBtn = document.getElementById("pixelGoChatBtn");
  if (pixelGoChatBtn) {
    pixelGoChatBtn.addEventListener("click", function () {
      if (pixelDialog) pixelDialog.close();
      focusChatImagePrompt();
    });
  }
  if (discoverHintBtn) discoverHintBtn.addEventListener("click", openDiscoverDialog);
  if (discoverHintClose) discoverHintClose.addEventListener("click", markGuideSeen);
  if (nfbClose) nfbClose.addEventListener("click", dismissFeatureBanner);
  if (closeDiscover && discoverDialog) {
    closeDiscover.addEventListener("click", function () {
      markGuideSeen();
      closeDiscoverDialog();
    });
    discoverDialog.addEventListener("click", function (e) {
      if (e.target === discoverDialog) {
        markGuideSeen();
        closeDiscoverDialog();
      }
    });
  }
  if (discoverStartBtn) {
    discoverStartBtn.addEventListener("click", function () {
      markGuideSeen();
      closeDiscoverDialog();
      fireRandomSpark();
    });
  }

  document.querySelectorAll(".hub-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      switchHubTab(tab.getAttribute("data-hub-tab"));
    });
  });

  bindQuickActionContainer(quickActions);
  bindQuickActionContainer(hubActionStrip);
  bindQuickActionContainer(hubActionsGrid);

  var navMoreBtn = document.getElementById("navMoreBtn");
  var navMoreBtnMobile = document.getElementById("navMoreBtnMobile");
  var navMoreMenu = document.getElementById("navMoreMenu");
  function bindNavMoreToggle(btn) {
    if (!btn || !navMoreMenu) return;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleNavMoreMenu(btn);
    });
  }
  bindNavMoreToggle(navMoreBtn);
  bindNavMoreToggle(navMoreBtnMobile);
  if (navMoreMenu) {
    navMoreMenu.addEventListener("click", function (e) {
      var item = e.target.closest(".nav-more-item");
      if (!item) return;
      e.stopPropagation();
      var view = item.getAttribute("data-view");
      var action = item.getAttribute("data-action");
      var itemId = item.id;
      if (view) switchView(view);
      else if (action === "open-settings") handleSettingsClick();
      else if (itemId === "navImageBtn") focusChatImagePrompt();
      else if (itemId === "navDetectBtn") triggerImageDetectPicker();
      closeOverlayMenus();
    });
  }

  var chatToolsBtn = document.getElementById("chatToolsBtn");
  var chatToolsMenu = document.getElementById("chatToolsMenu");
  if (chatToolsBtn && chatToolsMenu) {
    chatToolsBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = chatToolsMenu.hidden;
      closeOverlayMenus();
      if (open) {
        chatToolsMenu.hidden = false;
        portalChatToolsMenu(chatToolsMenu, true);
        positionOverlayMenu(chatToolsBtn, chatToolsMenu);
        chatToolsBtn.setAttribute("aria-expanded", "true");
      }
    });
  }

  document.querySelectorAll(".chat-tools-item").forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      closeOverlayMenus();
    });
  });

  window.addEventListener("resize", function () { closeOverlayMenus(); });

  document.addEventListener("click", function (e) {
    if (e.target.closest("#navMoreWrap") || e.target.closest("#navMoreMenu") ||
        e.target.closest("#navMoreBtnMobile") || e.target.closest("#chatToolsMenu") ||
        e.target.closest("#chatToolsBtn")) return;
    closeOverlayMenus();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeOverlayMenus();
  });

  var shortcutsBar = document.querySelector(".input-shortcuts-clean");
  if (shortcutsBar) {
    shortcutsBar.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-shortcut]");
      if (!btn || !shortcutsBar.contains(btn)) return;
      if (isChatImageRendering()) {
        showToast("NOCO Render laeuft — bitte warten…");
        return;
      }
      var sc = btn.getAttribute("data-shortcut");
      if (sc === "hub") openDiscoverDialog("overview");
      else if (sc === "brief") handleQuickAction("brief");
      else if (sc === "glow") handleQuickAction("glow");
      else if (sc === "echo") handleQuickAction("echo");
      else if (sc === "image") focusChatImagePrompt();
      else if (sc === "detect") triggerImageDetectPicker();
      else if (sc === "new" && newChatBtn) newChatBtn.click();
      else if (sc === "help") {
        if (chatInput) {
          chatInput.value = "/help";
          chatInput.focus();
          autoResizeInput();
        }
      }
    });
  }

  if (sidebarHubBtn) {
    sidebarHubBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      openDiscoverDialog("overview");
    });
  }
  var sparksMoreBtn = document.getElementById("sparksMoreBtn");
  if (sparksMoreBtn) {
    sparksMoreBtn.addEventListener("click", function () {
      openDiscoverDialog("sparks");
    });
  }
  if (hubOpenDialogBtn) hubOpenDialogBtn.addEventListener("click", function () { openDiscoverDialog("overview"); });

  if (featureTipAction) {
    featureTipAction.addEventListener("click", function () {
      handleQuickAction(featureTipAction.getAttribute("data-qa"));
    });
  }

  if (sparkFilterTabs) {
    sparkFilterTabs.addEventListener("click", function (e) {
      var tab = e.target.closest(".spark-filter-tab");
      if (!tab) return;
      sparkFilterId = tab.getAttribute("data-filter");
      sparkFilterTabs.querySelectorAll(".spark-filter-tab").forEach(function (t) {
        t.classList.toggle("active", t === tab);
      });
      renderPromptChips();
    });
  }

  if (sparkSearch) {
    sparkSearch.addEventListener("input", function () {
      sparkSearchQuery = sparkSearch.value;
      renderPromptChips();
    });
  }

  if (hubSparkTabs) {
    hubSparkTabs.addEventListener("click", function (e) {
      var tab = e.target.closest(".spark-filter-tab");
      if (!tab) return;
      hubSparkFilterId = tab.getAttribute("data-filter");
      hubSparkTabs.querySelectorAll(".spark-filter-tab").forEach(function (t) {
        t.classList.toggle("active", t === tab);
      });
      renderHubSparkList(hubSparkFilterId);
    });
  }

  if (hubSparkList) {
    hubSparkList.addEventListener("click", function (e) {
      var chip = e.target.closest(".hub-spark-chip");
      if (!chip) return;
      markGuideSeen();
      closeDiscoverDialog();
      fireSparkPrompt(chip.getAttribute("data-prompt"));
    });
  }
  var discoverGrid = document.getElementById("discoverGrid");
  if (discoverGrid) {
    discoverGrid.addEventListener("click", function (e) {
      var tile = e.target.closest(".discover-tile");
      if (!tile) return;
      var action = tile.getAttribute("data-action");
      markGuideSeen();
      closeDiscoverDialog();
      if (action) {
        handleDiscoverAction(action);
        return;
      }
      var qa = tile.getAttribute("data-qa");
      if (qa) {
        handleQuickAction(qa);
        return;
      }
      var prompt = tile.getAttribute("data-prompt");
      if (!prompt) return;
      if (prompt.charAt(0) === "/") {
        if (handleSlashCommand(prompt)) return;
      }
      if (!canSendMessage()) {
        showToast("Tageslimit erreicht — Exclusive oder morgen 0:00");
        openExclusiveDialog();
        return;
      }
      sendMessage(prompt);
    });
  }

  if (settingsPlanUpgrade) {
    settingsPlanUpgrade.addEventListener("click", function () {
      if (settingsDialog) settingsDialog.close();
      openExclusiveDialog();
    });
  }

  /* ── Chat List ── */

  if (chatList) chatList.addEventListener("click", function (e) {
    var del = e.target.closest("[data-delete]");
    if (del) { e.stopPropagation(); deleteChat(del.getAttribute("data-delete")); return; }
    var item = e.target.closest("[data-chat-id]");
    if (item) {
      activeChatId = item.getAttribute("data-chat-id");
      saveChats();
      renderAllMessages();
      switchView("chat");
    }
  });

  function handleNewChat() { createChat(true); }

  if (newChatBtn) newChatBtn.addEventListener("click", handleNewChat);
  if (sidebarNewChat) sidebarNewChat.addEventListener("click", handleNewChat);

  /* ── Settings ── */

  settingsBtn.addEventListener("click", handleSettingsClick);
  closeSettings.addEventListener("click", function () { settingsDialog.close(); });
  settingsDialog.addEventListener("click", function (e) { if (e.target === settingsDialog) settingsDialog.close(); });

  fillTosText(tosFullText);
  fillTosText(settingsTosText);
  updateTosUI();

  if (tosMoreBtn) {
    tosMoreBtn.addEventListener("click", function () {
      toggleTosMore(tosMoreBtn, tosFullBlock);
    });
  }
  if (settingsTosMore) {
    settingsTosMore.addEventListener("click", function () {
      toggleTosMore(settingsTosMore, settingsTosFull);
    });
  }
  if (tosAcceptBtn) {
    tosAcceptBtn.addEventListener("click", function () {
      acceptTos();
      if (tosDialog) tosDialog.close();
      openSettings();
      showToast("Nutzungsbedingungen akzeptiert");
    });
  }
  if (tosDialog) {
    tosDialog.addEventListener("cancel", function (e) { e.preventDefault(); });
    tosDialog.addEventListener("click", function (e) {
      if (e.target === tosDialog && isTosAccepted()) tosDialog.close();
    });
  }

  animToggle.addEventListener("change", function () { settings.animations = animToggle.checked; saveSettings(); applySettings(); });
  speedSelect.addEventListener("change", function () { settings.speed = speedSelect.value; saveSettings(); });
  if (typewriterToggle) typewriterToggle.addEventListener("change", function () { settings.typewriter = typewriterToggle.checked; saveSettings(); });
  if (glassSelect) glassSelect.addEventListener("change", function () { settings.glass = glassSelect.value; saveSettings(); applySettings(); });
  if (compactToggle) compactToggle.addEventListener("change", function () { settings.compact = compactToggle.checked; saveSettings(); applySettings(); });
  if (soundToggle) soundToggle.addEventListener("change", function () { settings.sound = soundToggle.checked; saveSettings(); });

  if (chatSearch) {
    chatSearch.addEventListener("input", function () {
      searchInChat(chatSearch.value);
    });
  }
  if (renameChatBtn) renameChatBtn.addEventListener("click", renameCurrentChat);
  if (savedList) {
    savedList.addEventListener("click", function (e) {
      var item = e.target.closest("[data-msg-id]");
      if (!item) return;
      var id = item.getAttribute("data-msg-id");
      for (var i = 0; i < savedAnswers.length; i++) {
        if (savedAnswers[i].msgId === id) {
          sendMessage(savedAnswers[i].text);
          return;
        }
      }
    });
  }
  if (commandPalette) {
    commandPalette.addEventListener("click", function (e) {
      var chip = e.target.closest("[data-cmd]");
      if (!chip) return;
      chatInput.value = chip.getAttribute("data-cmd") + " ";
      chatInput.focus();
      autoResizeInput();
    });
  }
  if (importChatsBtn && importChatsFile) {
    importChatsBtn.addEventListener("click", function () { importChatsFile.click(); });
    importChatsFile.addEventListener("change", function () {
      var file = importChatsFile.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var data = JSON.parse(reader.result);
          if (data.chats && data.chats.length) {
            chats = data.chats.concat(chats);
            activeChatId = chats[0].id;
            saveChats();
            renderAllMessages();
            showToast(data.chats.length + " Chat(s) importiert");
          } else {
            showToast("Ungueltige Chat-Datei");
          }
        } catch (err) {
          showToast("Import fehlgeschlagen");
        }
        importChatsFile.value = "";
      };
      reader.readAsText(file);
    });
  }

  if (exportChatsBtn) exportChatsBtn.addEventListener("click", function () {
    var blob = new Blob([JSON.stringify({ chats: chats, exported: Date.now() }, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "noco-ai-chats-" + new Date().toISOString().slice(0, 10) + ".json";
    a.click();
    URL.revokeObjectURL(a.href);
    showToast("Chats exportiert");
  });

  if (clearAllChatsBtn) clearAllChatsBtn.addEventListener("click", function () {
    if (!confirm("Alle Chats wirklich löschen?")) return;
    chats = [];
    activeChatId = null;
    localStorage.removeItem(CHATS_KEY);
    createChat(true);
    showToast("Alle Chats gelöscht");
  });

  var resetAppBtn = document.getElementById("resetAppBtn");
  if (resetAppBtn) resetAppBtn.addEventListener("click", resetEntireApp);

  /* ── Clock ── */

  function updateClock() {
    if (!clockDisplay) return;
    clockDisplay.textContent = new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  }
  setInterval(updateClock, 1000);
  updateClock();

  /* ── Liquid Canvas ── */

  function initLiquidCanvas() {
    if (!liquidCanvas || !settings.animations) return;
    var ctx = liquidCanvas.getContext("2d");
    if (!ctx) return;
    var blobs = [];
    var hues = [250, 265, 285, 310, 195, 220, 275, 330];

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      liquidCanvas.width = window.innerWidth * dpr;
      liquidCanvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createBlob(i) {
      var w = window.innerWidth;
      var h = window.innerHeight;
      var spread = Math.max(w, h) * 0.55;
      return {
        x: w * (0.15 + (i % 2) * 0.55) + (Math.random() - 0.5) * spread * 0.25,
        y: h * (0.12 + Math.floor(i / 2) * 0.42) + (Math.random() - 0.5) * spread * 0.2,
        r: spread * (0.42 + Math.random() * 0.28),
        dx: (Math.random() - 0.5) * 0.22,
        dy: (Math.random() - 0.5) * 0.22,
        hue: hues[i % hues.length],
        phase: Math.random() * Math.PI * 2
      };
    }

    resize();
    for (var i = 0; i < 7; i++) blobs.push(createBlob(i));

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    });

    function draw(time) {
      if (!settings.animations) return;
      var w = window.innerWidth;
      var h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (var j = 0; j < blobs.length; j++) {
        var b = blobs[j];
        b.x += b.dx; b.y += b.dy;
        b.r += Math.sin(time * 0.0011 + b.phase) * 0.55;
        if (b.x < -b.r * 1.2) b.x = w + b.r * 0.8;
        if (b.x > w + b.r * 1.2) b.x = -b.r * 0.8;
        if (b.y < -b.r * 1.2) b.y = h + b.r * 0.8;
        if (b.y > h + b.r * 1.2) b.y = -b.r * 0.8;
        var grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, "hsla(" + b.hue + ", 82%, 68%, 0.34)");
        grad.addColorStop(0.22, "hsla(" + b.hue + ", 76%, 60%, 0.2)");
        grad.addColorStop(0.48, "hsla(" + b.hue + ", 70%, 54%, 0.1)");
        grad.addColorStop(0.72, "hsla(" + b.hue + ", 64%, 50%, 0.035)");
        grad.addColorStop(1, "hsla(" + b.hue + ", 58%, 44%, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }
      animFrameId = requestAnimationFrame(draw);
    }

    if (animFrameId) cancelAnimationFrame(animFrameId);
    animFrameId = requestAnimationFrame(draw);
  }

  /* ── Prompt Chips (from brain) ── */

  function renderSparkFilterTabs() {
    if (!sparkFilterTabs || typeof NocoBrain === "undefined" || !NocoBrain.getPromptGroups) return;
    var groups = NocoBrain.getPromptGroups();
    sparkFilterTabs.innerHTML = "";
    function addTab(id, label) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "spark-filter-tab" + (sparkFilterId === id ? " active" : "");
      btn.setAttribute("data-filter", id);
      btn.setAttribute("role", "tab");
      btn.textContent = label;
      sparkFilterTabs.appendChild(btn);
    }
    addTab("recommended", "Empfohlen");
    groups.forEach(function (g) { addTab(g.title, g.title); });
  }

  function renderHubSparkTabs() {
    if (!hubSparkTabs || typeof NocoBrain === "undefined" || !NocoBrain.getPromptGroups) return;
    var groups = NocoBrain.getPromptGroups();
    hubSparkTabs.innerHTML = "";
    function addTab(id, label) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "spark-filter-tab" + (hubSparkFilterId === id ? " active" : "");
      btn.setAttribute("data-filter", id);
      btn.textContent = label;
      hubSparkTabs.appendChild(btn);
    }
    addTab("recommended", "Empfohlen");
    groups.forEach(function (g) { addTab(g.title, g.title); });
  }

  function collectSparksForFilter(filterId) {
    var items = [];
    if (filterId === "recommended") {
      RECOMMENDED_SPARKS.forEach(function (item) {
        items.push({ item: item, icon: "✦" });
      });
      return items;
    }
    if (typeof NocoBrain === "undefined" || !NocoBrain.getPromptGroups) return items;
    NocoBrain.getPromptGroups().forEach(function (group) {
      if (filterId !== group.title) return;
      group.items.forEach(function (item) {
        items.push({ item: item, icon: group.icon });
      });
    });
    return items;
  }

  function renderHubSparkList(filterId) {
    if (!hubSparkList) return;
    hubSparkList.innerHTML = "";
    var sparks = collectSparksForFilter(filterId);
    sparks.forEach(function (s) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "hub-spark-chip";
      btn.setAttribute("data-prompt", s.item);
      btn.innerHTML = '<span class="chip-icon">' + s.icon + "</span>" + escapeHtml(s.item);
      hubSparkList.appendChild(btn);
    });
    if (!hubSparkList.children.length) {
      var empty = document.createElement("p");
      empty.className = "spark-empty";
      empty.textContent = "Keine Sparks in dieser Kategorie";
      hubSparkList.appendChild(empty);
    }
  }

  var SPARKS_SIDEBAR_LIMIT = 8;

  function collectSparkPool() {
    var pool = [];
    if (typeof NocoBrain !== "undefined" && NocoBrain.getPromptGroups) {
      NocoBrain.getPromptGroups().forEach(function (group) {
        group.items.forEach(function (item) {
          pool.push({ item: item, icon: group.icon });
        });
      });
    }
    RECOMMENDED_SPARKS.forEach(function (item) {
      pool.push({ item: item, icon: "✦" });
    });
    return pool;
  }

  function pickRandomSparks(limit) {
    var pool = collectSparkPool();
    var shuffled = pool.slice();
    var i, j, tmp;
    for (i = shuffled.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = tmp;
    }
    return shuffled.slice(0, limit);
  }

  function renderPromptChips() {
    if (!promptChips || typeof NocoBrain === "undefined" || !NocoBrain.getPromptGroups) return;
    var groups = NocoBrain.getPromptGroups();
    var query = (sparkSearchQuery || "").toLowerCase().trim();
    promptChips.innerHTML = "";
    var count = 0;
    var useRandom = !query && sparkFilterId === "recommended";

    function addChip(item, icon) {
      if (query && item.toLowerCase().indexOf(query) === -1) return;
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.setAttribute("data-prompt", item);
      var label = item.length > 42 ? item.slice(0, 40) + "…" : item;
      btn.innerHTML = '<span class="chip-icon">' + icon + "</span>" + escapeHtml(label);
      btn.title = item;
      promptChips.appendChild(btn);
      count++;
    }

    if (useRandom) {
      pickRandomSparks(SPARKS_SIDEBAR_LIMIT).forEach(function (s) {
        addChip(s.item, s.icon);
      });
    } else if (sparkFilterId === "recommended") {
      RECOMMENDED_SPARKS.forEach(function (item) { addChip(item, "✦"); });
    } else {
      groups.forEach(function (group) {
        if (sparkFilterId !== group.title) return;
        group.items.forEach(function (item) {
          if (count >= SPARKS_SIDEBAR_LIMIT && !query) return;
          addChip(item, group.icon);
        });
      });
    }

    if (!count) {
      var empty = document.createElement("p");
      empty.className = "spark-empty";
      empty.textContent = query ? "Keine Treffer — Suche anpassen" : "Keine Sparks";
      promptChips.appendChild(empty);
    }
  }

  /* ── Init ── */

  var NOCO_BUILD = "4.1.2";

  function initApp() {
    document.documentElement.setAttribute("data-noco-build", NOCO_BUILD);
    if (typeof NocoBootFX === "undefined") {
      console.warn("NOCO: boot-fx.js fehlt — Boot-Shard-Animation deaktiviert. Datei mit hochladen.");
    }
    if (typeof NocoBrain === "undefined") {
      if (bootStatus) bootStatus.textContent = "Fehler: brain.js konnte nicht geladen werden.";
      showToast("brain.js Fehler — bitte Seite neu laden");
      return;
    }
    renderSparkFilterTabs();
    renderPromptChips();
    initSidebarCollapsible();
    if (discoverHint) discoverHint.hidden = true;
    initPixelStudio();
    renderPixelGallery();
    applySettings();
    loadChats();
    updateModelUI();
    updateExclusiveStats();
    updateTopicCount();
    updateTosUI();
    renderSavedList();
    renderSystemPanel();
    setupDialogDismiss();
    if (welcomeBlock) welcomeBlock.innerHTML = getWelcomeHtml();
    renderWelcomeChips();
    renderInputSuggestions();
    if (inputSuggestionsTimer) clearInterval(inputSuggestionsTimer);
    inputSuggestionsTimer = setInterval(function () {
      if (!chatInput || chatInput.value.trim() || document.hidden) return;
      var panel = document.getElementById("chatPanel");
      if (panel && panel.hidden) return;
      renderInputSuggestions();
      if (welcomeBlock && welcomeBlock.parentNode) renderWelcomeChips();
    }, 14000);
    boot();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
