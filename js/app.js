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
  var PAY_KEY = "noco-ai-pay-v1";
  var TOS_KEY = "noco-ai-tos-v1";
  var SAVED_KEY = "noco-ai-saved-v1";
  var IMAGE_QUOTA_KEY = "noco-ai-image-quota-v1";
  var PIXEL_GALLERY_KEY = "noco-ai-pixel-gallery-v1";
  var PIXEL_STATS_KEY = "noco-ai-pixel-stats-v1";
  var GUIDE_KEY = "noco-ai-guide-seen-v1";
  var WIKI_QUOTA_KEY = "noco-ai-wiki-quota-v1";
  var PRO_QUOTA_KEY = "noco-ai-pro-quota-v1";
  var NEXUS_QUOTA_KEY = "noco-ai-nexus-quota-v1";
  var MOTION_QUOTA_KEY = "noco-ai-motion-quota-v1";
  var FEATURE_DISMISS_KEY = "noco-ai-feature-never-v1";
  var WIKI_LEGAL_KEY = "noco-ai-wiki-legal-v1";

  var PLAN_LIMITS = {
    free: {
      messages: 30,
      pro: 1,
      images: 3,
      wiki: 5,
      nexus: 1,
      videos: 1
    },
    exclusive: {
      messages: Infinity,
      pro: 10,
      images: 30,
      wiki: 100,
      nexus: Infinity,
      videos: 10
    }
  };

  var WIKI_FREE_DAILY = PLAN_LIMITS.free.wiki;
  var FREE_RENDER_DAILY = PLAN_LIMITS.free.images;
  var FREE_MSG_DAILY = PLAN_LIMITS.free.messages;

  var KNOWLEDGE_SOURCE_LABELS = {
    noco: "NOCO-Wissen",
    wiki: "Wiki-API 1.1",
    auto: "NOCO Nexus-Auto"
  };

  var KNOWLEDGE_SOURCE_HINTS = {
    noco: "Offline · Vault",
    wiki: "Online · Wikipedia",
    auto: "Vault + Wiki · Nexus-Auto"
  };

  var NEXUS_ROUTE_LABELS = {
    followup: "Follow-up",
    definitional: "Definition",
    encyclopedic: "Wikipedia",
    "wiki-topic": "Wikipedia",
    "fallback-wiki": "Wikipedia",
    "vault-weak-wiki": "Wikipedia",
    "nexus-wiki-score": "Wikipedia",
    "nexus-wiki-default": "Wikipedia",
    "nexus-wiki-fallback": "Wikipedia",
    "vault-practical": "Vault",
    "vault-off": "Wikipedia"
  };

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
  var exclusiveCard = null;
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
  var nocoFeatureDialog = document.getElementById("nocoFeatureDialog");
  var usageDialog = document.getElementById("usageDialog");
  var usageBtn = document.getElementById("usageBtn");
  var closeUsage = document.getElementById("closeUsage");
  var usageResetBtn = document.getElementById("usageResetBtn");
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
  var sparksCountLabel = document.getElementById("sparksCountLabel");
  var sparkCategoryHead = document.getElementById("sparkCategoryHead");
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
  var chatImageBtn = document.getElementById("nocoCreateBtn") || document.getElementById("chatImageBtn");
  var inputGlass = document.getElementById("inputGlass");
  var inputSuggestions = document.getElementById("inputSuggestions");
  var inputSuggestionsRow = document.getElementById("inputSuggestionsRow");
  var inputSuggestionsRefresh = document.getElementById("inputSuggestionsRefresh");
  var welcomeChips = document.getElementById("welcomeChips");

  var chats = [];
  var writeAssistIndex = -1;
  var writeAssistItems = [];
  var imageModeActive = false;
  var agentModeActive = false;
  var summaryModeActive = false;
  var insightModeActive = false;
  var motionModeActive = false;
  var isRenderingMotion = false;
  var motionPlaybackStops = [];
  var insightCategory = "document";
  var insightPayload = null;
  var proModeSelected = false;
  var agentRunning = false;
  var chatAgentBtn = document.getElementById("nocoAgentBtn") || document.getElementById("chatAgentBtn");
  var chatInsightBtn = document.getElementById("nocoInsideBtn") || document.getElementById("chatInsightBtn");
  var nocoMotionBtn = document.getElementById("nocoMotionBtn");
  var motionPanel = document.getElementById("motionPanel");
  var motionProgressWrap = document.getElementById("motionProgressWrap");
  var motionProgressFill = document.getElementById("motionProgressFill");
  var motionProgressLabel = document.getElementById("motionProgressLabel");
  var motionChips = document.getElementById("motionChips");
  var motionTheatre = document.getElementById("motionTheatre");
  var motionPreviewCanvas = document.getElementById("motionPreviewCanvas");
  var motionPipeline = document.getElementById("motionPipeline");
  var motionPreviewScan = document.getElementById("motionPreviewScan");
  var motionTimelineBlock = document.getElementById("motionTimelineBlock");
  var motionKeyframeRow = document.getElementById("motionKeyframeRow");
  var motionExportActions = document.getElementById("motionExportActions");
  var motionTheatreCopy = document.getElementById("motionTheatreCopy");
  var motionTheatreSave = document.getElementById("motionTheatreSave");
  var motionCancelFn = null;
  var lastMotionExportMeta = null;
  var motionGenStartedAt = 0;
  var motionGenTotalMs = 98000;
  var motionProgressRaf = null;
  var activeMotionMsgId = null;
  var activeMotionMsgEl = null;
  var chatFlow = null;
  var agentDialog = document.getElementById("agentDialog");
  var closeAgent = document.getElementById("closeAgent");
  var agentPrompt = document.getElementById("agentPrompt");
  var agentRunBtn = document.getElementById("agentRunBtn");
  var agentTaskGrid = document.getElementById("agentTaskGrid");
  var agentConsole = document.getElementById("agentConsole");
  var agentSteps = document.getElementById("agentSteps");
  var agentInterim = document.getElementById("agentInterim");
  var agentProgressFill = document.getElementById("agentProgressFill");
  var agentConsoleTitle = document.getElementById("agentConsoleTitle");
  var agentLiveRoot = null;
  var agentSession = null;
  var agentWorkStrip = document.getElementById("agentWorkStrip");
  var agentLastResult = "";
  var agentLastFullPlan = "";
  var proModeBtn = document.getElementById("proModeBtn");
  var knowledgeSourceSwitch = document.getElementById("knowledgeSourceSwitch");
  var knowledgeSourceMobile = document.getElementById("knowledgeSourceMobile");
  var fusionSwitchBtn = document.getElementById("fusionSwitchBtn");
  var fusionSwitchBtnMobile = document.getElementById("fusionSwitchBtnMobile");
  var nocoFusionToggle = document.getElementById("nocoFusionToggle");
  var nocoFusionToggleMobile = document.getElementById("nocoFusionToggleMobile");
  var vaultPowerBtn = document.getElementById("vaultPowerBtn");
  var vaultPowerBtnMobile = document.getElementById("vaultPowerBtnMobile");
  var vaultEnabledToggle = document.getElementById("vaultEnabledToggle");
  var suggestionsMessagesToggle = document.getElementById("suggestionsMessagesToggle");
  var suggestionsInputToggle = document.getElementById("suggestionsInputToggle");
  var suggestionsAllToggle = document.getElementById("suggestionsAllToggle");
  var suggestionsWelcomeToggle = document.getElementById("suggestionsWelcomeToggle");
  var suggestionsSparksToggle = document.getElementById("suggestionsSparksToggle");
  var settingsSuggestionSubs = document.getElementById("settingsSuggestionSubs");
  var composeMoreFold = document.getElementById("composeMoreFold");
  var cleanModeToggle = document.getElementById("cleanModeToggle");
  var featureGlowToggle = document.getElementById("featureGlowToggle");
  var featureEchoToggle = document.getElementById("featureEchoToggle");
  var featureMotionToggle = document.getElementById("featureMotionToggle");
  var featureAgentToggle = document.getElementById("featureAgentToggle");
  var featureInsideToggle = document.getElementById("featureInsideToggle");
  var featureBriefToggle = document.getElementById("featureBriefToggle");
  var featureSummaryToggle = document.getElementById("featureSummaryToggle");
  var featureLensToggle = document.getElementById("featureLensToggle");
  var settingsQuotaResetBtn = document.getElementById("settingsQuotaResetBtn");
  var wikiLegalDialog = document.getElementById("wikiLegalDialog");
  var wikiLegalAcceptBtn = document.getElementById("wikiLegalAcceptBtn");
  var wikiLegalCancelBtn = document.getElementById("wikiLegalCancelBtn");
  var closeWikiLegal = document.getElementById("closeWikiLegal");
  var wikiLegalPending = null;
  var exclusiveCheckoutDialog = document.getElementById("exclusiveCheckoutDialog");
  var exclusiveManagePanel = document.getElementById("exclusiveManagePanel");
  var exclusiveSubscribeBlock = document.getElementById("exclusiveSubscribeBlock");
  var exclusiveManagePlan = document.getElementById("exclusiveManagePlan");
  var exclusiveManageUntil = document.getElementById("exclusiveManageUntil");
  var exclusiveManagePay = document.getElementById("exclusiveManagePay");
  var exclusiveManageTx = document.getElementById("exclusiveManageTx");
  var exclusiveManageChangeBtn = document.getElementById("exclusiveManageChangeBtn");
  var exclusiveManageCancelBtn = document.getElementById("exclusiveManageCancelBtn");
  var exCheckoutAgree = document.getElementById("exCheckoutAgree");
  var exCheckoutPayBtn = document.getElementById("exCheckoutPayBtn");
  var exPayBalance = document.getElementById("exPayBalance");
  var exCheckoutProcessLabel = document.getElementById("exCheckoutProcessLabel");
  var exCheckoutProcessBar = document.getElementById("exCheckoutProcessBar");
  var checkoutState = { plan: "trial", payMethod: "wallet", reason: "" };
  var inputModelHint = document.getElementById("inputModelHint");
  var insightFileBtn = document.getElementById("insightFileBtn");
  var insightFileInput = document.getElementById("insightFileInput");
  var insightCategories = document.getElementById("insightCategories");
  var insightFileBadge = document.getElementById("insightFileBadge");
  var insightVoiceBtn = document.getElementById("insightVoiceBtn");
  var insightHint = document.getElementById("insightHint");
  var insightSpeechRec = null;
  var inputSuggestionsTimer = null;
  var glowPrismTimer = null;
  var INPUT_SUGGESTION_COUNT = 6;
  var savedAnswers = loadSaved();
  var lastPixelResult = null;
  var isGeneratingPixel = false;
  var activeChatId = null;
  var isTyping = false;
  var chatListRefreshTimer = null;
  var scrollBottomPending = false;
  var liquidPausedForBusy = false;
  var isRenderingChatImage = false;
  var settings = loadSettings();
  var animFrameId = null;
  var openFeedbackIndex = null;
  var pendingTermQuery = null;

  var speedMap = { fast: 280, normal: 580 };
  var exclusiveSpeedMap = { fast: 45, normal: 95 };
  var proSpeedMap = { fast: 18, normal: 38 };
  var EXCLUSIVE_SPEED_MS = "~90";
  var PRO_SPEED_MS = "~25";
  var FREE_SPEED_MS = "~500";

  var THUMB_UP_SVG = '<svg class="noco-thumb noco-thumb-up" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>';
  var THUMB_DOWN_SVG = '<svg class="noco-thumb noco-thumb-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/></svg>';

  var sparkFilterId = "recommended";
  var sparkSearchQuery = "";
  var sparksShuffleSeed = 0;
  var hubSparkFilterId = "recommended";
  var featureTipIndex = 0;

  var RECOMMENDED_SPARKS = [
    "Was kann ich dich fragen?",
    "Was ist neu in NOCO?",
    "Was sind die NOCO Modell-Namen?",
    "Was ist NOCO Agent?",
    "Was ist NOCO Motion?",
    "Was ist NOCO Render?",
    "Was ist kuenstliche Intelligenz?",
    "Was ist ein Hund?",
    "Was ist Mathe?",
    "Was ist die Sonne?",
    "Was ist ChatGPT?",
    "Wie funktioniert das Internet?",
    "Was ist Demokratie?",
    "Was ist Blockchain?",
    "Tipps fuer gesunden Schlaf",
    "Was ist Genetik?",
    "Was sind Menschenrechte?",
    "Was ist ein Computer?",
    "Was ist Fussball?",
    "Was ist Familie?"
  ];

  var FEATURE_TIPS = [
    { icon: "◇", text: "Neu: <strong>3600 Motive</strong> in NOCO Render — z.B. *Mach ein Bild von Katze*", action: "render" },
    { icon: "◎", text: "Tipp: <strong>Hub</strong> zeigt alle Funktionen auf einen Blick.", action: "hub" },
    { icon: "🧠", text: "Tipp: <strong>NOCO Echo</strong> merkt sich deinen Chat — frag *Was habe ich geschrieben?*", action: "echo" },
    { icon: "✦", text: "Tipp: <strong>NOCO Glow</strong> erkennt Intent live beim Tippen.", action: "glow" },
    { icon: "▦", text: "Tipp: <strong>NOCO Render</strong> — Rainbow-Shards & Status unten im Chat.", action: "render" },
    { icon: "⚡", text: "Tipp: <strong>NOCO Rush</strong> — Exclusive antwortet spuerbar schneller (~90 ms)", action: "exclusive" }
  ];

  var EXCLUSIVE_PLANS = {
    trial: { name: "Testphase", detail: "1 Tag gratis testen", price: 0, priceLabel: "0,00 €", days: 1 },
    "1": { name: "1 Monat", detail: "Monatsabo NOCO Flux", price: 12, priceLabel: "12,00 €", months: 1 },
    "12": { name: "12 Monate", detail: "Jahresabo · spare vs. Monat", price: 99, priceLabel: "99,00 €", months: 12 },
    "90": { name: "90 Monate", detail: "Max-Abo · NOCO OS Power-User", price: 599, priceLabel: "599,00 €", months: 90 }
  };

  var bootSteps = [
    "NOCO AI v4.7 startet…",
    "Rainbow Sheen wird geladen…",
    "3600 Render-Motive laden…",
    "NOCO Motion · Build Suite bereit…",
    "Rainbow-Shards initialisieren…",
    "Willkommen."
  ];

  var SLASH_COMMANDS = [
    { cmd: "/help", desc: "Alle Befehle anzeigen" },
    { cmd: "/new", desc: "Neuen Chat starten" },
    { cmd: "/clear", desc: "Aktuellen Chat leeren" },
    { cmd: "/model", desc: "Plan & Modell" },
    { cmd: "/summary", desc: "Chat-Zusammenfassung" },
    { cmd: "/inside", desc: "NOCO Inside — Datei & Textanalyse" },
    { cmd: "/motion", desc: "NOCO Motion — 4s Video aus 3600 Motiven" },
    { cmd: "/agent", desc: "NOCO Agent aktivieren" },
    { cmd: "/pixel", desc: "Bild im Chat erstellen" },
    { cmd: "/detect", desc: "KI-Bild erkennen (Datei)" },
    { cmd: "/search", desc: "Im Chat suchen (z.B. /search NOCO)" },
    { cmd: "/topics", desc: "System-Ansicht oeffnen" },
    { cmd: "/saved", desc: "Gespeicherte Antworten anzeigen" },
    { cmd: "/random", desc: "Zufalls-Frage aus NOCO Sparks" },
    { cmd: "/wiki", desc: "Wissensquelle Wiki-API 1.0 aktivieren" },
    { cmd: "/vault", desc: "Wissensquelle NOCO-Wissen aktivieren" },
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

  function loadDailyQuota(key) {
    try {
      var raw = localStorage.getItem(key);
      var data = raw ? JSON.parse(raw) : { date: getTodayKey(), used: 0 };
      if (data.date !== getTodayKey()) {
        data = { date: getTodayKey(), used: 0 };
        try { localStorage.setItem(key, JSON.stringify(data)); } catch (e2) { /* */ }
      }
      return data;
    } catch (e) {
      return { date: getTodayKey(), used: 0 };
    }
  }

  function saveDailyQuota(key, data) {
    try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) { /* */ }
  }

  function getPlanLimits() {
    return isExclusiveActive() ? PLAN_LIMITS.exclusive : PLAN_LIMITS.free;
  }

  function quotaLeft(used, limit) {
    if (limit === Infinity || limit == null) return Infinity;
    return Math.max(0, limit - used);
  }

  function loadQuota() {
    return loadDailyQuota(QUOTA_KEY);
  }

  function saveQuota(data) {
    saveDailyQuota(QUOTA_KEY, data);
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
      applyKnowledgeSource("noco");
      return false;
    }
    return true;
  }

  function canUseAutomation() {
    if (isExclusiveActive()) return true;
    return loadNexusQuota().used < PLAN_LIMITS.free.nexus;
  }

  function loadNexusQuota() { return loadDailyQuota(NEXUS_QUOTA_KEY); }
  function saveNexusQuota(data) { saveDailyQuota(NEXUS_QUOTA_KEY, data); updateModelUI(); }
  function incrementNexusQuota() {
    if (isExclusiveActive()) return;
    var q = loadNexusQuota();
    q.used++;
    saveNexusQuota(q);
  }
  function getNexusQuotaLeft() {
    if (isExclusiveActive()) return Infinity;
    return quotaLeft(loadNexusQuota().used, PLAN_LIMITS.free.nexus);
  }

  function loadProQuota() { return loadDailyQuota(PRO_QUOTA_KEY); }
  function saveProQuota(data) { saveDailyQuota(PRO_QUOTA_KEY, data); updateModelUI(); }
  function incrementProQuota() {
    var q = loadProQuota();
    q.used++;
    saveProQuota(q);
  }
  function getProQuotaLeft() {
    return quotaLeft(loadProQuota().used, getPlanLimits().pro);
  }
  function canUseProToday() {
    var limit = getPlanLimits().pro;
    if (limit === Infinity) return true;
    return loadProQuota().used < limit;
  }

  function loadMotionQuota() { return loadDailyQuota(MOTION_QUOTA_KEY); }
  function saveMotionQuota(data) { saveDailyQuota(MOTION_QUOTA_KEY, data); updateModelUI(); }
  function incrementMotionQuota() {
    var q = loadMotionQuota();
    q.used++;
    saveMotionQuota(q);
  }
  function getMotionQuotaLeft() {
    return quotaLeft(loadMotionQuota().used, getPlanLimits().videos);
  }
  function canGenerateMotion() {
    var limit = getPlanLimits().videos;
    if (limit === Infinity) return true;
    return loadMotionQuota().used < limit;
  }

  function resetAllDailyQuotas() {
    var fresh = { date: getTodayKey(), used: 0 };
    saveQuota(fresh);
    saveWikiQuota(fresh);
    saveImageQuota(fresh);
    saveProQuota(fresh);
    saveNexusQuota(fresh);
    saveMotionQuota(fresh);
    updateUsageDialog();
    showToast("Tageslimits zurueckgesetzt");
  }

  function canUseWikiApi() {
    return typeof NocoWiki !== "undefined";
  }

  function loadWikiQuota() {
    return loadDailyQuota(WIKI_QUOTA_KEY);
  }

  function saveWikiQuota(data) {
    saveDailyQuota(WIKI_QUOTA_KEY, data);
    updateInputModeHint();
    updateModelUI();
  }

  function getWikiQuotaLeft() {
    var limit = getPlanLimits().wiki;
    if (limit === Infinity) return Infinity;
    return quotaLeft(loadWikiQuota().used, limit);
  }

  function canUseWikiToday() {
    var limit = getPlanLimits().wiki;
    if (limit === Infinity) return true;
    return loadWikiQuota().used < limit;
  }

  function incrementWikiQuota() {
    var q = loadWikiQuota();
    q.used++;
    saveWikiQuota(q);
  }

  function getWikiFetchDelay(cached) {
    return getNexusWikiFetchDelay(!!cached);
  }

  function getNexusWikiFetchDelay(cached) {
    if (cached) return isProSelected() ? 8 : (isExclusiveActive() ? 12 : 18);
    if (isProSelected()) return 28;
    if (isExclusiveActive()) return 36 + Math.random() * 24;
    return 55 + Math.random() * 45;
  }

  function getNexusVaultDelay() {
    if (isProSelected()) return 26 + Math.random() * 14;
    if (isExclusiveActive()) return 38 + Math.random() * 28;
    return Math.min(200, speedMap[settings.speed] || speedMap.normal) + Math.random() * 60;
  }

  function getNexusWikiAltQueries(query, text) {
    var alts = [];
    var seen = {};
    var q = String(query || "").trim();
    function push(v) {
      v = String(v || "").trim();
      if (!v || v === q || seen[v]) return;
      seen[v] = true;
      alts.push(v);
    }
    if (!q || typeof NocoBrain === "undefined") return alts;
    if (NocoBrain.cleanWikiTopic) push(NocoBrain.cleanWikiTopic(q));
    if (q.charAt(0).toUpperCase() + q.slice(1) !== q) push(q.charAt(0).toUpperCase() + q.slice(1));
    if (NocoBrain.extractWikiQuery && text) push(NocoBrain.extractWikiQuery(text));
    if (NocoBrain.extractNexusWikiQuery && text) push(NocoBrain.extractNexusWikiQuery(text));
    return alts.slice(0, 3);
  }

  function getNexusWikiLabel(routeInfo, wikiQuery) {
    var q = String(wikiQuery || "").trim();
    var tag = NEXUS_ROUTE_LABELS[routeInfo && routeInfo.reason] || "Wikipedia";
    if (q && tag !== "Follow-up") return "Nexus-Auto · " + tag + " · „" + q + "“…";
    if (tag === "Follow-up") return "Nexus-Auto · Follow-up · Wikipedia…";
    return "Nexus-Auto · " + tag + "…";
  }

  function isCreativeOrToolPayload(text) {
    if (!text) return false;
    if (imageModeActive || motionModeActive || agentModeActive || insightModeActive || summaryModeActive) return true;
    if (typeof NocoPixel !== "undefined") {
      if (NocoPixel.isMotionRequest && NocoPixel.isMotionRequest(text)) return true;
      if (NocoPixel.isImageRequest && NocoPixel.isImageRequest(text)) return true;
    }
    return false;
  }

  function loadPayWallet() {
    try {
      var raw = localStorage.getItem(PAY_KEY);
      var data = raw ? JSON.parse(raw) : null;
      if (!data) data = { balance: 50, cardLast4: "4242", cardName: "NOCO Nutzer", history: [] };
      return data;
    } catch (e) {
      return { balance: 50, cardLast4: "4242", cardName: "NOCO Nutzer", history: [] };
    }
  }

  function savePayWallet(data) {
    try { localStorage.setItem(PAY_KEY, JSON.stringify(data)); } catch (e) { /* */ }
    updatePayWalletUI();
  }

  function updatePayWalletUI() {
    var w = loadPayWallet();
    if (exPayBalance) exPayBalance.textContent = w.balance.toFixed(2).replace(".", ",") + " €";
  }

  function formatExclusiveUntil(ts) {
    if (!ts) return "—";
    var d = new Date(ts);
    return d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }) +
      " · " + d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
  }

  function getExclusivePlanMeta(planType) {
    return EXCLUSIVE_PLANS[planType] || EXCLUSIVE_PLANS.trial;
  }

  function setCheckoutPanel(panelId) {
    document.querySelectorAll(".ex-checkout-panel").forEach(function (p) {
      var on = p.getAttribute("data-ex-panel") === panelId;
      p.classList.toggle("is-active", on);
      p.hidden = !on;
    });
    document.querySelectorAll(".ex-checkout-step").forEach(function (s) {
      var step = s.getAttribute("data-ex-step");
      var on = (panelId === "plan" && step === "plan") ||
        (panelId === "payment" && step === "payment") ||
        ((panelId === "confirm" || panelId === "processing" || panelId === "success") && step === "confirm");
      s.classList.toggle("is-active", on);
      s.classList.toggle("is-done", (panelId === "payment" && step === "plan") ||
        ((panelId === "confirm" || panelId === "processing" || panelId === "success") && (step === "plan" || step === "payment")));
    });
  }

  function fillCheckoutPlanUI(planType) {
    var meta = getExclusivePlanMeta(planType);
    var elName = document.getElementById("exCheckoutPlanName");
    var elDetail = document.getElementById("exCheckoutPlanDetail");
    var elPrice = document.getElementById("exCheckoutPlanPrice");
    var elSumPlan = document.getElementById("exSummaryPlan");
    var elSumTotal = document.getElementById("exSummaryTotal");
    if (elName) elName.textContent = meta.name;
    if (elDetail) elDetail.textContent = meta.detail;
    if (elPrice) elPrice.textContent = meta.priceLabel;
    if (elSumPlan) elSumPlan.textContent = meta.name + " · " + meta.detail;
    if (elSumTotal) elSumTotal.textContent = meta.priceLabel;
  }

  function updateCheckoutSummaryPay() {
    var el = document.getElementById("exSummaryPay");
    if (!el) return;
    if (checkoutState.payMethod === "wallet") {
      el.textContent = "NOCO Pay Wallet";
    } else {
      el.textContent = "NOCO Card •••• " + (loadPayWallet().cardLast4 || "4242");
    }
  }

  function openExclusiveCheckout(planType, opts) {
    opts = opts || {};
    checkoutState.plan = planType || "trial";
    checkoutState.payMethod = "wallet";
    checkoutState.reason = opts.reason || "";
    fillCheckoutPlanUI(checkoutState.plan);
    updateCheckoutSummaryPay();
    updatePayWalletUI();
    if (exCheckoutAgree) exCheckoutAgree.checked = false;
    if (exCheckoutPayBtn) exCheckoutPayBtn.disabled = true;
    var cardForm = document.getElementById("exPayCardForm");
    if (cardForm) cardForm.hidden = true;
    document.querySelectorAll(".ex-pay-method").forEach(function (m) {
      m.classList.toggle("is-active", m.getAttribute("data-pay-method") === "wallet");
    });
    var sub = document.getElementById("exCheckoutSub");
    if (sub) {
      sub.textContent = opts.reason === "wiki"
        ? "Wiki-API 1.0 braucht NOCO Exclusive"
        : "Exclusive Abonnement · NOCO OS";
    }
    setCheckoutPanel("plan");
    if (exclusiveDialog && exclusiveDialog.open) closeExclusiveDialog({ instant: true });
    showCenteredDialog(exclusiveCheckoutDialog);
  }

  function closeExclusiveCheckoutDialog() {
    if (!exclusiveCheckoutDialog) return;
    if (typeof exclusiveCheckoutDialog.close === "function") exclusiveCheckoutDialog.close();
    else exclusiveCheckoutDialog.removeAttribute("open");
  }

  function runCheckoutProcessing(onDone) {
    setCheckoutPanel("processing");
    var steps = [
      { label: "Verbindung zu NOCO Pay…", pct: 22 },
      { label: "Zahlung wird autorisiert (simuliert)…", pct: 55 },
      { label: "NOCO Exclusive wird aktiviert…", pct: 82 },
      { label: "Flux · Rush · Wiki-API freischalten…", pct: 100 }
    ];
    var i = 0;
    function tick() {
      if (i >= steps.length) {
        if (onDone) onDone();
        return;
      }
      if (exCheckoutProcessLabel) exCheckoutProcessLabel.textContent = steps[i].label;
      if (exCheckoutProcessBar) exCheckoutProcessBar.style.width = steps[i].pct + "%";
      i++;
      setTimeout(tick, i === 1 ? 700 : 850);
    }
    if (exCheckoutProcessBar) exCheckoutProcessBar.style.width = "0%";
    tick();
  }

  function completeExclusiveCheckout() {
    var planType = checkoutState.plan;
    var meta = getExclusivePlanMeta(planType);
    var wallet = loadPayWallet();
    var txId = "NOCO-" + Date.now().toString(36).toUpperCase();
    var payLabel = checkoutState.payMethod === "wallet" ? "NOCO Pay Wallet" : "NOCO Card •••• " + wallet.cardLast4;

    if (meta.price > 0) {
      if (checkoutState.payMethod === "wallet" && wallet.balance < meta.price) {
        showToast("NOCO Pay Guthaben zu niedrig — Testphase waehlen oder aufladen (simuliert)");
        setCheckoutPanel("payment");
        return;
      }
      if (checkoutState.payMethod === "wallet") wallet.balance = Math.round((wallet.balance - meta.price) * 100) / 100;
    }

    wallet.history = wallet.history || [];
    wallet.history.push({
      id: txId,
      plan: planType,
      amount: meta.price,
      method: checkoutState.payMethod,
      at: Date.now()
    });
    wallet.history = wallet.history.slice(-30);
    savePayWallet(wallet);

    var ex = {
      active: true,
      plan: planType,
      since: Date.now(),
      label: meta.name,
      pricePaid: meta.price,
      paymentMethod: checkoutState.payMethod,
      paymentLabel: payLabel,
      transactionId: txId
    };
    if (planType === "trial") {
      ex.until = Date.now() + 86400000;
      ex.label = "Testphase 1 Tag";
    } else {
      var months = parseInt(planType, 10) || 1;
      ex.until = Date.now() + months * 30 * 86400000;
      ex.label = meta.name;
    }
    saveExclusive(ex);

    runCheckoutProcessing(function () {
      var successText = document.getElementById("exCheckoutSuccessText");
      var successTx = document.getElementById("exCheckoutSuccessTx");
      if (successText) {
        successText.textContent = "NOCO Flux · Rush · Render · Motion · Wiki-API 1.0 sind freigeschaltet.";
      }
      if (successTx) successTx.textContent = "Transaktion: " + txId + " · " + payLabel;
      setCheckoutPanel("success");
      playRainbowBurst(exclusiveTopBtn, { count: 56, duration: 2800 });
      document.body.classList.add("exclusive-activated");
      setTimeout(function () { document.body.classList.remove("exclusive-activated"); }, 1400);
      updateModelUI();
      updateExclusiveStats();
      updateExclusiveSidebar();
    });
  }

  function cancelExclusiveSubscription() {
    if (!isExclusiveActive()) return;
    var ex = loadExclusive();
    if (!window.confirm(
      "NOCO Exclusive wirklich beenden?\n\n" +
      "Flux · Rush · Render · Motion · Wiki-API werden gesperrt.\n" +
      "Simuliert — kein echtes Geld wird zurueckerstattet."
    )) return;
    saveExclusive({ active: false, cancelledAt: Date.now(), previousPlan: ex.plan });
    applyKnowledgeSource("noco");
    showToast("Exclusive beendet — NOCO Access Free aktiv");
    updateModelUI();
    updateExclusiveStats();
    updateExclusiveSidebar();
  }

  function updateExclusiveManagePanel() {
    var ex = loadExclusive();
    var active = isExclusiveActive();
    if (exclusiveManagePanel) exclusiveManagePanel.hidden = !active;
    if (exclusiveSubscribeBlock) exclusiveSubscribeBlock.hidden = active;
    if (!active) return;
    if (exclusiveManagePlan) exclusiveManagePlan.textContent = ex.label || ex.plan || "Exclusive";
    if (exclusiveManageUntil) exclusiveManageUntil.textContent = formatExclusiveUntil(ex.until);
    if (exclusiveManagePay) exclusiveManagePay.textContent = ex.paymentLabel || "NOCO Pay";
    if (exclusiveManageTx) exclusiveManageTx.textContent = ex.transactionId || "—";
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
        free:      { name: "NOCO Free",      short: "NOCO Free" },
        exclusive: { name: "NOCO Exclusive", short: "Exclusive" }
      },
      features: {
        rush: { name: "NOCO Rush", desc: "Priority ~90 ms" }
      }
    };
  }

  function isProSelected() {
    return proModeSelected && canUseProToday();
  }

  function consumeProForSend() {
    var was = isProSelected();
    if (was) incrementProQuota();
    if (proModeSelected) {
      proModeSelected = false;
      updateModelUI();
    }
    return was;
  }

  function getEffectiveModelTier() {
    if (isProSelected()) {
      var brand = getBrand();
      return {
        id: "pro",
        name: brand.models.pro ? brand.models.pro.name : "NOCO AI Pro 1.0",
        tagline: brand.models.pro ? brand.models.pro.tagline : "Ultra Rush",
        unlimited: true,
        exclusive: true,
        pro: true
      };
    }
    return getModelTier();
  }

  function getModelTier() {
    var brand = getBrand();
    var m = brand.models;
    if (isExclusiveActive()) {
      return { id: "flux", name: m.flux.name, tagline: m.flux.tagline, unlimited: true, exclusive: true };
    }
    var used = loadQuota().used;
    if (used < Math.ceil(FREE_MSG_DAILY / 2)) {
      return { id: "prism", name: m.prism.name, tagline: m.prism.tagline, limited: true, remaining: Math.ceil(FREE_MSG_DAILY / 2) - used };
    }
    return { id: "spark", name: m.spark.name, tagline: m.spark.tagline };
  }

  function loadImageQuota() {
    return loadDailyQuota(IMAGE_QUOTA_KEY);
  }

  function saveImageQuota(data) {
    saveDailyQuota(IMAGE_QUOTA_KEY, data);
    updatePixelMeta();
    updateModelUI();
  }

  function getImageQuotaLeft() {
    var limit = getPlanLimits().images;
    if (limit === Infinity) return Infinity;
    return quotaLeft(loadImageQuota().used, limit);
  }

  function canGenerateImage() {
    var limit = getPlanLimits().images;
    if (limit === Infinity) return true;
    return loadImageQuota().used < limit;
  }

  function isChatImageRendering() {
    return isRenderingChatImage || isRenderingMotion || !!activeChatImageAnimCancel;
  }

  function setChatRenderLock(on) {
    document.body.classList.toggle("is-chat-render-locked", !!on);
    var strip = document.getElementById("renderLockStrip");
    if (strip) {
      strip.hidden = !on;
      var stripText = strip.querySelector(".render-lock-text");
      if (stripText) {
        stripText.textContent = isRenderingMotion
          ? "NOCO Motion synthetisiert dein Video — bitte warten…"
          : "NOCO Render laeuft — bitte warten…";
      }
    }
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
    var list = [
      exclusiveDialog, exclusiveCheckoutDialog, settingsDialog, discoverDialog,
      termDialog, pixelDialog, briefDialog, tosDialog, wikiLegalDialog
    ];
    list.forEach(function (d) {
      if (!d || d === except) return;
      try {
        if (d.open) d.close();
        else d.removeAttribute("open");
      } catch (e) {
        d.removeAttribute("open");
      }
    });
  }

  function dismissStuckOverlays() {
    if (bootScreen) {
      bootScreen.classList.add("hidden", "is-handoff");
      bootScreen.classList.remove("is-booting", "is-exiting", "is-stuck-recovery", "is-boot-error");
      bootScreen.setAttribute("aria-hidden", "true");
    }
    document.body.classList.add("noco-ui-ready");
    document.body.classList.remove("noco-booting", "boot-handoff-active");
    if (appShell) {
      appShell.classList.add("ready");
      appShell.classList.remove("is-boot-handoff");
    }
    document.querySelectorAll("dialog[open]").forEach(function (d) {
      try {
        if (d.open) d.close();
        else d.removeAttribute("open");
      } catch (e) {
        d.removeAttribute("open");
      }
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
    var dialogs = [
      exclusiveDialog, exclusiveCheckoutDialog, settingsDialog, discoverDialog,
      termDialog, pixelDialog, briefDialog, wikiLegalDialog, nocoFeatureDialog, usageDialog
    ];
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

  function buildChatActionChips(actions) {
    if (!actions || !actions.length) return null;
    var row = document.createElement("div");
    row.className = "chat-action-chips";
    row.setAttribute("role", "toolbar");
    actions.forEach(function (a) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chat-action-chip" + (a.primary ? " is-primary" : "") + (a.muted ? " is-muted" : "");
      btn.setAttribute("data-chat-action", a.id);
      if (a.payload != null) btn.setAttribute("data-chat-payload", typeof a.payload === "string" ? a.payload : JSON.stringify(a.payload));
      btn.textContent = a.label;
      row.appendChild(btn);
    });
    return row;
  }

  function askInChat(text, actions, opts) {
    opts = opts || {};
    appendMessage("ai", text, { chatActions: actions, topic: opts.topic || "NOCO" });
    if (chatInput) {
      chatInput.focus();
      updateChatPlaceholder();
    }
  }

  function clearChatFlow() {
    chatFlow = null;
    if (chatInput) updateChatPlaceholder();
  }

  function motifNeedsClarify(resolved) {
    if (!resolved || !resolved.supported) return false;
    if (resolved.needsConfirm === false) return false;
    if (resolved.matchType === "exact" && (resolved.matchPct || 0) >= 95) return false;
    return true;
  }

  function motionNeedsClarify(resolved) {
    return motifNeedsClarify(resolved);
  }

  function imageNeedsClarify(resolved) {
    return motifNeedsClarify(resolved);
  }

  function buildMotifConfirmActions(resolved, mode) {
    var mapped = (resolved && (resolved.mappedLabel || resolved.label)) || "Motiv";
    var actions = [
      {
        id: mode === "video" ? "motion-yes" : "image-yes",
        label: mode === "video" ? "✓ Ja, Video starten" : "Ja, Bild starten",
        primary: true
      }
    ];
    if (resolved && resolved.alternateLabel) {
      actions.push({
        id: mode === "video" ? "motion-alt" : "image-alt",
        label: "Alternativ: " + resolved.alternateLabel,
        payload: resolved.alternateLabel
      });
    }
    actions.push({
      id: mode === "video" ? "motion-no" : "image-no",
      label: "✗ Anderes Motiv",
      muted: true
    });
    return actions;
  }

  function buildMotifConfirmText(resolved, mode) {
    if (typeof NocoPixel !== "undefined" && NocoPixel.buildMotifClarifyMessage) {
      return NocoPixel.buildMotifClarifyMessage(resolved, mode);
    }
    var mapped = resolved.mappedLabel || resolved.label || "Motiv";
    var pct = resolved.matchPct || 0;
    return "Du wolltest **" + (resolved.userAsked || "") + "** — ich nutze **" + mapped + "** (" + pct + "% Ähnlichkeit).\n\n**Passt das?**";
  }

  function attachChatActionsToBody(body, msg) {
    if (!body || !msg || !msg.chatActions || !msg.chatActions.length) return;
    var chips = buildChatActionChips(msg.chatActions);
    if (chips) body.appendChild(chips);
  }

  function handleChatAction(actionId, payloadStr) {
    var payload = null;
    if (payloadStr) {
      try { payload = JSON.parse(payloadStr); } catch (e) { payload = payloadStr; }
    }

    if (actionId === "motion-yes" && chatFlow && chatFlow.kind === "motion-confirm") {
      var f = chatFlow;
      clearChatFlow();
      handleMotionRequest(f.text, {
        displayText: f.displayText,
        usedPro: f.opts && f.opts.usedPro,
        skipClarify: true,
        confirmed: true
      });
      return;
    }
    if (actionId === "motion-alt" && chatFlow && chatFlow.kind === "motion-confirm") {
      var altText = payload || (chatFlow.resolved && chatFlow.resolved.alternateLabel);
      if (altText) {
        clearChatFlow();
        handleMotionRequest("Erstelle ein Video von " + altText, { skipClarify: true, confirmed: true });
      }
      return;
    }
    if (actionId === "motion-no" && chatFlow && chatFlow.kind === "motion-confirm") {
      clearChatFlow();
      chatFlow = { kind: "motion-retry" };
      askInChat(
        "**Welches Motiv genau?**\n\nSchreib es unten — z.B. *Katze*, *Apfel*, *Drache* …",
        [
          { id: "fill-motion", label: "🎞 Motion-Modus", primary: true },
          { id: "hub-create", label: "◇ Stattdessen Bild" }
        ],
        { topic: "Motion" }
      );
      setMotionMode(true);
      return;
    }
    if (actionId === "image-yes" && chatFlow && chatFlow.kind === "image-confirm") {
      var fi = chatFlow;
      clearChatFlow();
      handleImageChatRequest(fi.text, { displayText: fi.displayText, skipClarify: true, confirmed: true });
      return;
    }
    if (actionId === "image-alt" && chatFlow && chatFlow.kind === "image-confirm") {
      var altImg = payload || (chatFlow.resolved && chatFlow.resolved.alternateLabel);
      if (altImg) {
        clearChatFlow();
        handleImageChatRequest(altImg, { skipClarify: true, confirmed: true });
      }
      return;
    }
    if (actionId === "image-no" && chatFlow && chatFlow.kind === "image-confirm") {
      clearChatFlow();
      chatFlow = { kind: "image-retry" };
      askInChat(
        "**Welches Motiv soll das Bild zeigen?**\n\nEinfach unten eingeben.",
        [{ id: "mode-create", label: "◇ Bild-Modus", primary: true }],
        { topic: "Create" }
      );
      setImageMode(true);
      return;
    }
    if (actionId === "mode-motion") { setMotionMode(true); askInChat("**Motion aktiv** — Was soll animiert werden?", [{ id: "fill-motion", label: "Beispiel: Video von Katze", payload: "Erstelle ein Video von einer Katze" }]); return; }
    if (actionId === "mode-create" || actionId === "hub-create") { setImageMode(true); setMotionMode(false); askInChat("**Bild-Modus** — Welches Motiv?", [{ id: "hub-img", label: "Katze", payload: "Katze" }, { id: "hub-img", label: "Apfel", payload: "Apfel" }]); return; }
    if (actionId === "mode-inside") { setInsightMode(true); askInChat("**Inside aktiv** — Text einfügen oder **📂 Datei** links.", [{ id: "inside-paste", label: "Text einfügen (unten)" }]); return; }
    if (actionId === "mode-agent") { setAgentMode(true); askInChat("**Agent aktiv** — Beschreibe deinen Auftrag unten.", []); return; }
    if (actionId === "hub-img" && payload) { setImageMode(true); chatInput.value = "Mach ein Bild von " + payload; autoResizeInput(); sendBtn.disabled = false; chatInput.focus(); return; }
    if (actionId === "fill-motion" && payload) {
      setMotionMode(true);
      if (typeof payload === "string") {
        handleMotionRequest(payload, { displayText: payload, skipClarify: true, confirmed: true });
      }
      return;
    }
    if (actionId === "inside-paste") { setInsightMode(true); if (chatInput) chatInput.focus(); return; }
    if (actionId === "hub-random") { fireRandomSpark(); return; }
    if (actionId === "inside-file-hint") { setInsightMode(true); triggerInsightFilePicker(); return; }
  }

  function openHubInChat() {
    switchView("chat");
    closeAllDialogs();
    closeOverlayMenus();
    askInChat(
      "**NOCO Hub** — alles direkt im Chat.\n\nWähle oder schreib unten:",
      [
        { id: "mode-create", label: "◇ Bild erstellen", primary: true },
        { id: "mode-motion", label: "🎞 Motion" },
        { id: "mode-inside", label: "🔬 Inside" },
        { id: "mode-agent", label: "⚡ Agent" },
        { id: "hub-random", label: "✦ Zufalls-Frage", muted: true }
      ],
      { topic: "Hub" }
    );
  }

  function setInsightMode(on) {
    insightModeActive = !!on;
    if (on) {
      setImageMode(false);
      setAgentMode(false);
      setSummaryMode(false);
      setMotionMode(false);
    } else {
      insightPayload = null;
      if (insightFileBadge) insightFileBadge.hidden = true;
    }
    document.body.classList.toggle("is-insight-mode", insightModeActive);
    if (chatInsightBtn) {
      chatInsightBtn.classList.toggle("is-active", insightModeActive);
      chatInsightBtn.setAttribute("aria-pressed", insightModeActive ? "true" : "false");
    }
    var insightSc = document.querySelector("[data-shortcut='inside']") || document.querySelector("[data-shortcut='insight']");
    if (insightSc) insightSc.classList.toggle("is-active", insightModeActive);
    if (insightModeActive) renderInsightCategories();
    updateChatPlaceholder();
    updateInputModeHint();
  }

  function setInsightCategory(id) {
    insightCategory = id || "document";
    if (insightCategories) {
      insightCategories.querySelectorAll(".insight-cat-btn").forEach(function (btn) {
        btn.classList.toggle("is-active", btn.getAttribute("data-insight-cat") === insightCategory);
      });
    }
    if (insightHint && typeof NocoInsight !== "undefined") {
      var cat = NocoInsight.CATEGORIES.filter(function (c) { return c.id === insightCategory; })[0];
      if (cat) insightHint.textContent = cat.hint + " · Pro 1.0 fuer Rush";
    }
    updateChatPlaceholder();
  }

  function renderInsightCategories() {
    if (!insightCategories || typeof NocoInsight === "undefined") return;
    insightCategories.innerHTML = "";
    NocoInsight.CATEGORIES.forEach(function (cat) {
      if (cat.id === "voice") return;
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "insight-cat-btn" + (cat.id === insightCategory ? " is-active" : "");
      btn.setAttribute("data-insight-cat", cat.id);
      btn.textContent = cat.icon + " " + cat.label;
      btn.title = cat.hint;
      insightCategories.appendChild(btn);
    });
  }

  function updateInsightFileBadge(name) {
    if (!insightFileBadge) return;
    if (name) {
      insightFileBadge.textContent = "📂 " + name;
      insightFileBadge.hidden = false;
    } else {
      insightFileBadge.hidden = true;
    }
  }

  function deliverInsightResult(text, topic, userLabel, usedPro) {
    if (userLabel) appendMessage("user", userLabel);
    document.body.classList.add("is-inside-analyzing");
    setTyping(true);
    var delay = usedPro ? 35 : getDelay() * 0.5;
    setTimeout(function () {
      document.body.classList.remove("is-inside-analyzing");
      setTyping(false);
      incrementQuota();
      appendMessage("ai", text, { animate: true, topic: topic || "NOCO Inside", related: [], insightRun: true });
      showToast("NOCO Inside fertig", { rainbow: true, duration: 2600 });
      updateModelUI();
      scrollToBottom(true);
    }, delay + getDelayJitter());
  }

  function runInsightAnalysis(payload, category, question) {
    if (typeof NocoInsight === "undefined") return;
    var usedPro = consumeProForSend();
    category = category || insightCategory;
    var opts = {
      question: question || (chatInput && chatInput.value.trim()) || "Worum geht es?",
      summarizeFn: NocoBrain.summarizeText ? function (t, o) { return NocoBrain.summarizeText(t, Object.assign({ proMode: usedPro }, o || {})); } : null
    };

    if (payload.kind === "image" && payload.file && typeof NocoImageDetect !== "undefined") {
      setTyping(true);
      NocoImageDetect.analyzeFile(payload.file, getDetectSources()).then(function (dr) {
        opts.detectResult = {
          nocoMatch: dr.isNocoAI || dr.looksLikePixelArt,
          pixelLike: dr.looksLikePixelArt,
          blocky: dr.looksLikePixelArt,
          motifLabel: dr.motifLabel
        };
        var result = NocoInsight.analyze(payload, "image", opts);
        deliverInsightResult(result.text, result.topic, "Insight · Bild: " + payload.name, usedPro);
      }).catch(function () {
        var result = NocoInsight.analyze(payload, "image", opts);
        deliverInsightResult(result.text, result.topic, "Insight · Bild: " + payload.name, usedPro);
      });
      return;
    }

    if (category === "ask" && !question && chatInput && !chatInput.value.trim()) {
      showToast("Frag die Datei — stelle eine Frage im Eingabefeld");
      if (chatInput) chatInput.focus();
      return;
    }

    var result = NocoInsight.analyze(payload, category, opts);
    var label = "Insight · " + (payload.name || "Text");
    if (category === "ask" && opts.question) label = "Insight · Frage: " + opts.question;
    deliverInsightResult(result.text, result.topic, label, usedPro);
  }

  function handleInsightFile(file) {
    if (!file || typeof NocoInsight === "undefined") return;
    if (!canSendMessage()) {
      showToast("Tageslimit erreicht");
      openExclusiveDialog();
      return;
    }
    if (!insightModeActive) setInsightMode(true);
    switchView("chat");
    setTyping(true);
    NocoInsight.readFileContent(file).then(function (payload) {
      insightPayload = payload;
      updateInsightFileBadge(payload.name);
      var cat = NocoInsight.pickCategoryForFile(payload.kind, insightCategory);
      setInsightCategory(cat);
      setTyping(false);
      showToast("Insight analysiert: " + payload.name);
      runInsightAnalysis(payload, cat);
    }).catch(function (err) {
      setTyping(false);
      showToast(err.message || "Datei konnte nicht gelesen werden");
    });
  }

  function triggerInsightFilePicker() {
    if (insightFileInput) insightFileInput.click();
    else if (insightFileBtn) insightFileBtn.click();
  }

  function toggleInsightVoice() {
    if (!insightModeActive) setInsightMode(true);
    var SR = global.SpeechRecognition || global.webkitSpeechRecognition;
    if (!SR) {
      showToast("Sprache nicht unterstuetzt in diesem Browser");
      return;
    }
    if (insightSpeechRec) {
      insightSpeechRec.stop();
      insightSpeechRec = null;
      if (insightVoiceBtn) insightVoiceBtn.classList.remove("is-recording");
      return;
    }
    var rec = new SR();
    rec.lang = "de-DE";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    insightSpeechRec = rec;
    if (insightVoiceBtn) insightVoiceBtn.classList.add("is-recording");
    showToast("Sprich jetzt…");
    rec.onresult = function (ev) {
      var text = ev.results[0][0].transcript;
      if (chatInput) {
        chatInput.value = text;
        autoResizeInput();
        sendBtn.disabled = !text.trim();
      }
      if (insightVoiceBtn) insightVoiceBtn.classList.remove("is-recording");
      insightSpeechRec = null;
      showToast("Sprache erkannt — Enter zum Analysieren");
      if (insightPayload) {
        runInsightAnalysis(insightPayload, insightCategory === "voice" ? "ask" : insightCategory, text);
      } else if (text.length > 20) {
        var payload = { kind: "text", name: "Spracheingabe", text: text };
        insightPayload = payload;
        runInsightAnalysis(payload, insightCategory);
      }
    };
    rec.onerror = function () {
      if (insightVoiceBtn) insightVoiceBtn.classList.remove("is-recording");
      insightSpeechRec = null;
      showToast("Spracherkennung fehlgeschlagen");
    };
    rec.onend = function () {
      if (insightVoiceBtn) insightVoiceBtn.classList.remove("is-recording");
      insightSpeechRec = null;
    };
    rec.start();
  }

  function setMotionMode(on) {
    motionModeActive = !!on;
    if (on) {
      setImageMode(false);
      setAgentMode(false);
      setSummaryMode(false);
      setInsightMode(false);
    } else {
      resetMotionTheatre();
    }
    document.body.classList.toggle("is-motion-mode", motionModeActive);
    if (nocoMotionBtn) {
      nocoMotionBtn.classList.toggle("is-active", motionModeActive);
      nocoMotionBtn.setAttribute("aria-pressed", motionModeActive ? "true" : "false");
    }
    var motionSc = document.querySelector("[data-shortcut='motion']");
    if (motionSc) motionSc.classList.toggle("is-active", motionModeActive);
    updateChatPlaceholder();
    updateInputModeHint();
  }

  function stopMotionProgressClock() {
    if (motionProgressRaf) {
      cancelAnimationFrame(motionProgressRaf);
      motionProgressRaf = null;
    }
  }

  function applyMotionProgressBar(p) {
    var pct = Math.round(Math.min(1, Math.max(0, p)) * 100);
    if (motionProgressWrap) motionProgressWrap.hidden = false;
    if (motionProgressFill) motionProgressFill.style.width = pct + "%";
    if (motionTheatre) motionTheatre.style.setProperty("--motion-live-progress", String(Math.min(1, p)));
  }

  function startMotionProgressClock(totalMs) {
    stopMotionProgressClock();
    motionGenStartedAt = performance.now();
    motionGenTotalMs = totalMs || 98000;
    applyMotionProgressBar(0.01);
    function tick() {
      if (!isRenderingMotion) return;
      var elapsed = performance.now() - motionGenStartedAt;
      var p = Math.min(0.985, elapsed / motionGenTotalMs);
      applyMotionProgressBar(p);
      motionProgressRaf = requestAnimationFrame(tick);
    }
    motionProgressRaf = requestAnimationFrame(tick);
  }

  function hideMotionProgress() {
    stopMotionProgressClock();
    if (motionProgressWrap) motionProgressWrap.hidden = true;
    if (motionProgressLabel) motionProgressLabel.hidden = true;
    if (motionProgressFill) motionProgressFill.style.width = "0%";
    if (motionTheatre) motionTheatre.style.setProperty("--motion-live-progress", "0");
    document.body.classList.remove("is-motion-generating");
    if (motionPreviewScan) motionPreviewScan.hidden = false;
  }

  function clearMotionPreview() {
    if (motionPreviewCanvas) {
      var ctx = motionPreviewCanvas.getContext("2d");
      if (ctx) ctx.clearRect(0, 0, motionPreviewCanvas.width, motionPreviewCanvas.height);
    }
  }

  function clearMotionKeyframeRow() {
    if (!motionKeyframeRow || typeof NocoMotion === "undefined") return;
    var count = NocoMotion.KEYFRAME_COUNT || 8;
    var i, slot, canvas, ctx;
    for (i = 0; i < count; i++) {
      slot = motionKeyframeRow.children[i];
      if (!slot) continue;
      slot.classList.remove("is-filled");
      canvas = slot.querySelector(".motion-kf-canvas");
      if (canvas) {
        ctx = canvas.getContext("2d");
        if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }

  function resetMotionTheatre() {
    hideMotionProgress();
    clearMotionPreview();
    clearMotionKeyframeRow();
    if (motionTheatre) {
      motionTheatre.hidden = true;
      motionTheatre.classList.remove("is-active", "is-keyframe-pulse");
    }
    if (motionPipeline) motionPipeline.hidden = false;
    if (motionTimelineBlock) motionTimelineBlock.hidden = true;
    if (motionExportActions) motionExportActions.hidden = true;
    renderMotionPipeline(null);
    lastMotionExportMeta = null;
    if (motionCancelFn) { motionCancelFn(); motionCancelFn = null; }
  }

  function finishMotionGenerationUI() {
    stopMotionProgressClock();
    resetMotionTheatre();
    if (motionModeActive) setMotionMode(false);
    else document.body.classList.remove("is-motion-generating");
    if (sendBtn) sendBtn.disabled = isTyping || !canSendMessage() || !(chatInput && chatInput.value.trim());
    updateChatPlaceholder();
  }

  function initMotionKeyframeRow() {
    if (!motionKeyframeRow || typeof NocoMotion === "undefined") return;
    var count = NocoMotion.KEYFRAME_COUNT || 8;
    motionKeyframeRow.innerHTML = "";
    var i;
    for (i = 0; i < count; i++) {
      var slot = document.createElement("div");
      slot.className = "motion-kf-slot";
      slot.setAttribute("role", "listitem");
      var canvas = document.createElement("canvas");
      canvas.className = "motion-kf-canvas";
      canvas.width = 36;
      canvas.height = 36;
      canvas.setAttribute("aria-label", "Keyframe " + (i + 1));
      var label = document.createElement("span");
      label.className = "motion-kf-label";
      label.textContent = String(i + 1);
      slot.appendChild(canvas);
      slot.appendChild(label);
      motionKeyframeRow.appendChild(slot);
    }
  }

  function paintMotionKeyframeThumb(index, pixels) {
    if (!motionKeyframeRow || typeof NocoMotion === "undefined") return;
    var slot = motionKeyframeRow.children[index];
    if (!slot) return;
    var canvas = slot.querySelector(".motion-kf-canvas");
    if (canvas && pixels && NocoMotion.drawFramePixels) {
      NocoMotion.drawFramePixels(pixels, 36, canvas, 4);
      slot.classList.add("is-filled");
    }
  }

  function fillMotionKeyframeRowFromMeta(meta) {
    if (!meta || !motionKeyframeRow || typeof NocoMotion === "undefined") return;
    var count = meta.keyframeCount || NocoMotion.KEYFRAME_COUNT || 8;
    var i;
    for (i = 0; i < count; i++) {
      if (meta.keyframes && meta.keyframes[i]) {
        paintMotionKeyframeThumb(i, meta.keyframes[i]);
      } else if (NocoMotion.exportKeyframeCanvas) {
        var thumb = NocoMotion.exportKeyframeCanvas(meta, i, 4);
        var slot = motionKeyframeRow.children[i];
        if (slot && thumb) {
          var canvas = slot.querySelector(".motion-kf-canvas");
          var ctx = canvas && canvas.getContext("2d");
          if (ctx) {
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(thumb, 0, 0);
            slot.classList.add("is-filled");
          }
        }
      }
    }
  }

  function buildChatMotionKeyframeRow(meta) {
    var row = document.createElement("div");
    row.className = "motion-keyframe-row chat-motion-keyframes";
    row.setAttribute("role", "list");
    row.setAttribute("aria-label", "Keyframe-Vorschau");
    if (!meta || typeof NocoMotion === "undefined") return row;
    var count = meta.keyframeCount || NocoMotion.KEYFRAME_COUNT || 8;
    var i;
    for (i = 0; i < count; i++) {
      var slot = document.createElement("div");
      slot.className = "motion-kf-slot is-filled";
      slot.setAttribute("role", "listitem");
      var canvas = document.createElement("canvas");
      canvas.className = "motion-kf-canvas";
      canvas.width = 36;
      canvas.height = 36;
      var label = document.createElement("span");
      label.className = "motion-kf-label";
      label.textContent = String(i + 1);
      if (NocoMotion.exportKeyframeCanvas) {
        var thumb = NocoMotion.exportKeyframeCanvas(meta, i, 4);
        var ctx = canvas.getContext("2d");
        if (ctx && thumb) {
          ctx.imageSmoothingEnabled = false;
          ctx.drawImage(thumb, 0, 0);
        }
      }
      slot.appendChild(canvas);
      slot.appendChild(label);
      row.appendChild(slot);
    }
    return row;
  }

  function motionExportFilename(meta, ext) {
    var base = (meta && (meta.motifLabel || meta.mappedLabel)) ? String(meta.motifLabel || meta.mappedLabel) : "noco-motion";
    base = base.toLowerCase().replace(/[^a-z0-9äöüß]+/gi, "-").replace(/^-+|-+$/g, "") || "noco-motion";
    return base + ext;
  }

  function copyMotionMeta(meta) {
    if (!meta || typeof NocoMotion === "undefined" || !NocoMotion.exportMotionSpriteSheet) return;
    var canvas = NocoMotion.exportMotionSpriteSheet(meta, 6);
    canvas.toBlob(function (blob) {
      if (!blob) {
        showToast("Kopieren fehlgeschlagen");
        return;
      }
      if (navigator.clipboard && window.ClipboardItem) {
        navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]).then(function () {
          showToast("Sprite-Sheet kopiert (" + (meta.clipFrameCount || ((meta.keyframeCount || 8) + 7 * 3)) + " Frames)");
        }).catch(function () {
          downloadCanvasPng(canvas, motionExportFilename(meta, "-sprites.png"));
          showToast("Clipboard blockiert — PNG heruntergeladen");
        });
      } else {
        downloadCanvasPng(canvas, motionExportFilename(meta, "-sprites.png"));
        showToast("Als PNG heruntergeladen");
      }
    }, "image/png");
  }

  function saveMotionMeta(meta) {
    if (!meta || typeof NocoMotion === "undefined") return;
    if (NocoMotion.recordMotionWebm) {
      showToast("Video wird encodiert…");
      NocoMotion.recordMotionWebm(meta, 10, function (blob, err) {
        if (blob) {
          var a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = motionExportFilename(meta, ".webm");
          a.click();
          URL.revokeObjectURL(a.href);
          showToast("Motion-Video gespeichert");
          return;
        }
        if (NocoMotion.exportMotionSpriteSheet) {
          downloadCanvasPng(NocoMotion.exportMotionSpriteSheet(meta, 8), motionExportFilename(meta, "-sprites.png"));
          showToast(err === "no-recorder" ? "WebM nicht verfügbar — Sprite-Sheet gespeichert" : "Als Sprite-Sheet gespeichert");
        }
      });
      return;
    }
    if (NocoMotion.exportMotionSpriteSheet) {
      downloadCanvasPng(NocoMotion.exportMotionSpriteSheet(meta, 8), motionExportFilename(meta, "-sprites.png"));
      showToast("Sprite-Sheet gespeichert");
    }
  }

  function copyChatMotion(msgId) {
    var msg = getMessageById(msgId);
    if (!msg || !msg.motion) { showToast("Motion nicht gefunden"); return; }
    copyMotionMeta(msg.motion);
  }

  function saveChatMotion(msgId) {
    var msg = getMessageById(msgId);
    if (!msg || !msg.motion) return;
    saveMotionMeta(msg.motion);
  }

  function renderMotionPipeline(activeStage) {
    if (!motionPipeline || typeof NocoMotion === "undefined") return;
    if (!activeStage) {
      motionPipeline.querySelectorAll(".motion-pipe-step").forEach(function (el) {
        el.classList.remove("is-active", "is-done");
      });
      return;
    }
    if (!motionPipeline._built) {
      motionPipeline.innerHTML = "";
      NocoMotion.PIPELINE.forEach(function (step) {
        var el = document.createElement("div");
        el.className = "motion-pipe-step";
        el.setAttribute("data-pipe", step.id);
        el.innerHTML = '<span class="motion-pipe-dot"></span><span>' + step.label + "</span>";
        motionPipeline.appendChild(el);
      });
      motionPipeline._built = true;
    }
    motionPipeline.querySelectorAll(".motion-pipe-step").forEach(function (el) {
      var id = el.getAttribute("data-pipe");
      el.classList.remove("is-active", "is-done");
      if (id === activeStage) el.classList.add("is-active");
      else {
        var pipeOrder = ["parse", "map", "frameBase", "frameProp", "keyframes", "interp", "loop", "done"];
        var activeIdx = pipeOrder.indexOf(activeStage);
        if (activeIdx < 0) activeIdx = pipeOrder.length;
        if (pipeOrder.indexOf(id) < activeIdx) el.classList.add("is-done");
      }
    });
  }

  function showMotionTheatre(on) {
    if (!motionTheatre) return;
    motionTheatre.hidden = !on;
    if (on) {
      motionTheatre.classList.add("is-active");
      document.body.classList.add("is-motion-generating");
      if (motionPipeline) motionPipeline.hidden = false;
      if (motionTimelineBlock) motionTimelineBlock.hidden = false;
      if (motionExportActions) motionExportActions.hidden = true;
      if (motionPreviewScan) motionPreviewScan.hidden = false;
      initMotionKeyframeRow();
      clearMotionPreview();
      renderMotionPipeline("parse");
    }
  }

  function updateMotionProgress(progress, label, extra) {
    extra = extra || {};
    if (motionProgressWrap) motionProgressWrap.hidden = false;
    if (progress >= 1 || (extra && extra.stage === "done")) {
      applyMotionProgressBar(1);
    }
    if (motionProgressLabel) {
      motionProgressLabel.hidden = !label;
      motionProgressLabel.textContent = label || "";
    }
    if (extra.stage) renderMotionPipeline(extra.stage);
    if (extra.previewPixels && motionPreviewCanvas && typeof NocoMotion !== "undefined" && NocoMotion.drawFramePixels) {
      NocoMotion.drawFramePixels(extra.previewPixels, 36, motionPreviewCanvas, 4);
    }
    if (extra.resolved && extra.resolved.mappingNote && motionProgressLabel && extra.stage === "map") {
      motionProgressLabel.textContent = extra.resolved.userAsked + " → " + extra.resolved.mappedLabel;
    }
    if (extra.stage === "keyframes" && motionTimelineBlock) {
      motionTimelineBlock.hidden = false;
      if (typeof extra.keyframeIndex === "number" && extra.previewPixels) {
        paintMotionKeyframeThumb(extra.keyframeIndex, extra.previewPixels);
      }
      if (extra.keyframesReady && extra.keyframes) {
        var ki;
        for (ki = 0; ki < extra.keyframes.length; ki++) {
          paintMotionKeyframeThumb(ki, extra.keyframes[ki]);
        }
      }
    }
    if (extra.previewPixels && motionPreviewCanvas) {
      motionPreviewCanvas.classList.add("is-frame-flash");
      window.setTimeout(function () {
        if (motionPreviewCanvas) motionPreviewCanvas.classList.remove("is-frame-flash");
      }, 180);
    }
    var chatBarP = progress;
    if (motionGenStartedAt && motionGenTotalMs > 0) {
      chatBarP = Math.min(0.985, (performance.now() - motionGenStartedAt) / motionGenTotalMs);
      if (progress >= 1 || extra.stage === "done") chatBarP = 1;
    }
    updateActiveMotionChat(chatBarP, label, extra);
  }

  function handleMotionRequest(text, opts) {
    opts = opts || {};
    switchView("chat");
    if (typeof NocoMotion === "undefined") {
      showToast("NOCO Motion nicht geladen");
      return;
    }
    if (isRenderingMotion || isChatImageRendering()) {
      showToast("Render laeuft — bitte warten");
      return;
    }
    if (!canSendMessage()) {
      showToast("Tageslimit erreicht — schreib **exclusive** im Chat");
      return;
    }
    if (!canGenerateMotion()) {
      showToast("Video-Limit heute erreicht — morgen 0:00 oder Exclusive.");
      return;
    }

    var preview = NocoMotion.resolveMotionPrompt(text);
    if (!preview.supported) {
      chatFlow = { kind: "motion-retry" };
      askInChat(
        preview.message || "**Was soll animiert werden?**",
        [{ id: "fill-motion", label: "Beispiel: Video von Katze", payload: "Erstelle ein Video von einer Katze", primary: true }],
        { topic: "Motion" }
      );
      setMotionMode(true);
      return;
    }

    if (!opts.skipClarify && !opts.confirmed && motionNeedsClarify(preview)) {
      chatFlow = {
        kind: "motion-confirm",
        text: text,
        displayText: opts.displayText,
        resolved: preview,
        opts: { usedPro: opts.usedPro }
      };
      if (!opts.skipUserAppend) appendMessage("user", opts.displayText || text);
      askInChat(
        buildMotifConfirmText(preview, "video"),
        buildMotifConfirmActions(preview, "video"),
        { topic: "Motion" }
      );
      return;
    }

    runMotionGeneration(text, opts);
  }

  function runMotionGeneration(text, opts) {
    opts = opts || {};
    if (typeof NocoMotion === "undefined") {
      showToast("NOCO Motion nicht geladen");
      return;
    }
    if (isRenderingMotion || isChatImageRendering()) {
      showToast("Render laeuft — bitte warten");
      return;
    }
    if (!canSendMessage()) {
      showToast("Tageslimit erreicht — schreib **exclusive** im Chat");
      return;
    }
    if (!canGenerateMotion()) {
      showToast("Video-Limit heute erreicht — morgen 0:00 oder Exclusive.");
      return;
    }
    var usedPro = opts.usedPro !== undefined ? opts.usedPro : consumeProForSend();
    switchView("chat");
    if (!opts.skipUserAppend) appendMessage("user", opts.displayText || ("Motion: " + text));
    appendPendingMotionMessage(text);
    chatInput.value = "";
    chatInput.style.height = "auto";
    sendBtn.disabled = true;
    setTyping(true);
    if (typingLabel) typingLabel.textContent = usedPro ? "NOCO Pro Motion…" : "NOCO Motion synthetisiert…";
    isRenderingMotion = true;
    setChatRenderLock(true);
    var motionDurationMs = typeof NocoMotion.getGenDuration === "function"
      ? NocoMotion.getGenDuration(usedPro)
      : (usedPro ? 36000 : 98000);
    showMotionTheatre(true);
    startMotionProgressClock(motionDurationMs);
    updateMotionProgress(0.02, "NOCO Motion Engine startet…", { stage: "parse" });

    motionCancelFn = NocoMotion.generateSequence(text, { proMode: usedPro }, function (ev) {
      updateMotionProgress(ev.progress, ev.label, {
        stage: ev.stage,
        previewPixels: ev.previewPixels,
        resolved: ev.resolved,
        keyframeIndex: ev.keyframeIndex,
        keyframesReady: ev.keyframesReady,
        keyframes: ev.keyframes
      });
    }, function (result) {
      setTyping(false);
      isRenderingMotion = false;
      setChatRenderLock(false);
      motionCancelFn = null;
      if (typingLabel) typingLabel.textContent = "NOCO AI denkt…";
      if (result.error) {
        finishMotionGenerationUI();
        if (activeMotionMsgId) {
          var failEl = activeMotionMsgEl || getMessageElById(activeMotionMsgId);
          if (failEl) failEl.remove();
          var failChat = getActiveChat();
          if (failChat) {
            failChat.messages = failChat.messages.filter(function (m) { return m.id !== activeMotionMsgId; });
            saveChats();
          }
          activeMotionMsgId = null;
          activeMotionMsgEl = null;
        }
        appendMessage("ai", result.message || "Motion fehlgeschlagen.");
        return;
      }
      applyMotionProgressBar(1);
      finalizeMotionChatMessage(result.meta, result);
      finishMotionGenerationUI();
      incrementQuota();
      incrementMotionQuota();
      updateModelUI();
      var toastExtra = result.mappingNote
        ? " · " + result.userAsked + " → " + result.motifLabel
        : "";
      showToast(
        "<strong>🎬 Video fertig</strong> — " + escapeHtml(result.motifLabel || text) + toastExtra + " · 4s Epic Loop im Chat",
        { rainbow: true, duration: 4200 }
      );
    });
  }

  function getMessageElById(msgId) {
    var byId = findMessageElById(msgId);
    if (byId) return byId;
    if (!msgId || !chatMessages) return null;
    var el = chatMessages.querySelector('.chat-motion-canvas[data-msg-id="' + msgId + '"]');
    if (el) return el.closest(".message");
    el = chatMessages.querySelector('.chat-motion-copy[data-msg-id="' + msgId + '"]');
    if (el) return el.closest(".message");
    el = chatMessages.querySelector('.chat-image-canvas[data-msg-id="' + msgId + '"]');
    if (el) return el.closest(".message");
    return null;
  }

  function buildChatMotionRenderStatus(wrap) {
    if (!wrap || wrap.querySelector(".chat-motion-render-status")) return;
    var status = document.createElement("div");
    status.className = "chat-motion-render-status liquid-glass liquid-glass-prism";
    status.setAttribute("aria-live", "polite");
    status.innerHTML =
      '<p class="chat-motion-render-text">NOCO Motion synthetisiert…</p>' +
      '<span class="chat-motion-render-step">Keyframe 0/8</span>' +
      '<div class="chat-motion-render-bar"><span class="chat-motion-render-fill"></span></div>';
    wrap.appendChild(status);
  }

  function updateActiveMotionChat(progress, label, extra) {
    extra = extra || {};
    var el = activeMotionMsgEl;
    if (!el && activeMotionMsgId) el = getMessageElById(activeMotionMsgId);
    if (!el) return;
    activeMotionMsgEl = el;
    var wrap = el.querySelector(".chat-motion-wrap");
    var frame = el.querySelector(".chat-motion-frame");
    var canvas = el.querySelector(".chat-motion-canvas");
    var status = el.querySelector(".chat-motion-render-status");
    var fill = status && status.querySelector(".chat-motion-render-fill");
    var stepEl = status && status.querySelector(".chat-motion-render-step");
    var textEl = status && status.querySelector(".chat-motion-render-text");
    var pct = Math.round((progress || 0) * 100);

    if (wrap) {
      wrap.classList.add("is-motion-rendering");
      wrap.style.setProperty("--motion-progress", String(Math.min(1, progress || 0)));
    }
    if (frame) frame.classList.add("is-rendering");
    if (fill) fill.style.width = pct + "%";
    if (textEl && label) textEl.textContent = label;
    if (stepEl) {
      if (extra.stage === "keyframes" && typeof extra.keyframeIndex === "number") {
        stepEl.textContent = "Keyframe " + (extra.keyframeIndex + 1) + "/8";
      } else if (extra.stage) {
        stepEl.textContent = extra.stage;
      }
    }
    if (extra.previewPixels && canvas && typeof NocoMotion !== "undefined" && NocoMotion.drawFramePixels) {
      NocoMotion.drawFramePixels(extra.previewPixels, 36, canvas, 10);
    }
    if (extra.stage === "keyframes" && typeof extra.keyframeIndex === "number" && extra.previewPixels) {
      var row = el.querySelector(".chat-motion-keyframes");
      if (row) paintMotionKeyframeThumbOnRow(row, extra.keyframeIndex, extra.previewPixels);
    }
    if (extra.keyframesReady && extra.keyframes) {
      var rowReady = el.querySelector(".chat-motion-keyframes");
      if (rowReady) {
        var ki;
        for (ki = 0; ki < extra.keyframes.length; ki++) {
          paintMotionKeyframeThumbOnRow(rowReady, ki, extra.keyframes[ki]);
        }
      }
    }
    if (motionTheatre) motionTheatre.classList.toggle("is-keyframe-pulse", extra.stage === "keyframes");
    scrollToBottom(false);
  }

  function paintMotionKeyframeThumbOnRow(row, index, pixels) {
    if (!row || typeof NocoMotion === "undefined") return;
    var slot = row.children[index];
    if (!slot) return;
    var canvas = slot.querySelector(".motion-kf-canvas");
    if (canvas && pixels && NocoMotion.drawFramePixels) {
      NocoMotion.drawFramePixels(pixels, 36, canvas, 4);
      slot.classList.add("is-filled");
    }
  }

  function appendPendingMotionMessage(promptText) {
    hideWelcome();
    var chat = getActiveChat();
    if (!chat) return null;
    var msg = {
      id: uid(),
      role: "ai",
      text: "NOCO Motion synthetisiert dein Video…",
      time: Date.now(),
      feedback: null,
      type: "motion",
      motion: null,
      motionPending: true,
      topic: "NOCO Motion",
      motionRun: true
    };
    chat.messages.push(msg);
    chat.updated = Date.now();
    saveChats();
    activeMotionMsgId = msg.id;
    var idx = chat.messages.length - 1;
    var built = upsertMessageEl(msg, idx, { renderPending: true, urgent: true });
    activeMotionMsgEl = built ? built.el : null;
    ensureChatDomSynced();
    return msg.id;
  }

  function finalizeMotionChatMessage(meta, result) {
    var chat = getActiveChat();
    if (!chat || !meta) {
      appendMotionMessage(meta, result);
      return;
    }
    var msg = activeMotionMsgId ? getMessageById(activeMotionMsgId) : null;
    var report = typeof NocoMotion !== "undefined" && NocoMotion.formatMotionReport
      ? NocoMotion.formatMotionReport(meta)
      : "NOCO Motion";

    if (!msg) {
      appendMotionMessage(meta, result);
      activeMotionMsgId = null;
      activeMotionMsgEl = null;
      return;
    }

    msg.motionPending = false;
    msg.motion = meta;
    msg.text = report;
    chat.updated = Date.now();
    saveChats();

    var idx = chat.messages.indexOf(msg);
    var built = upsertMessageEl(msg, idx >= 0 ? idx : chat.messages.length - 1, { urgent: true });
    var fresh = built ? built.el : null;
    if (!fresh) {
      ensureChatDomSynced();
      activeMotionMsgId = null;
      activeMotionMsgEl = null;
      return;
    }
    activeMotionMsgEl = fresh;
    fresh.classList.add("is-motion-finish");
    document.body.classList.add("is-motion-finish-flash");
    window.setTimeout(function () {
      document.body.classList.remove("is-motion-finish-flash");
      fresh.classList.remove("is-motion-finish");
    }, 1600);

    var mCanvas = fresh.querySelector(".chat-motion-canvas");
    if (mCanvas && typeof NocoMotion !== "undefined" && NocoMotion.startPlayback) {
      window.setTimeout(function () {
        if (mCanvas._motionStop) try { mCanvas._motionStop(); } catch (e) { /* ignore */ }
        var stop = NocoMotion.startPlayback(meta, mCanvas, { scale: 10 });
        mCanvas._motionStop = stop;
        motionPlaybackStops.push(stop);
      }, 80);
    }
    scrollToBottom(true);
    ensureChatDomSynced();
    activeMotionMsgId = null;
    activeMotionMsgEl = null;
  }

  function appendMotionMessage(meta, result) {
    hideWelcome();
    var chat = getActiveChat();
    if (!chat || !meta) return;
    var report = typeof NocoMotion !== "undefined" && NocoMotion.formatMotionReport
      ? NocoMotion.formatMotionReport(meta)
      : "NOCO Motion";
    var msg = {
      id: uid(),
      role: "ai",
      text: report,
      time: Date.now(),
      feedback: null,
      type: "motion",
      motion: meta,
      topic: "NOCO Motion",
      motionRun: true
    };
    chat.messages.push(msg);
    chat.updated = Date.now();
    saveChats();
    var idx = chat.messages.length - 1;
    upsertMessageEl(msg, idx, { urgent: true });
    ensureChatDomSynced();
  }

  function setAgentMode(on) {
    agentModeActive = !!on;
    if (on) {
      setImageMode(false);
      setSummaryMode(false);
      setInsightMode(false);
      setMotionMode(false);
    }
    document.body.classList.toggle("is-agent-mode", agentModeActive);
    if (chatAgentBtn) {
      chatAgentBtn.classList.toggle("is-active", agentModeActive);
      chatAgentBtn.setAttribute("aria-pressed", agentModeActive ? "true" : "false");
    }
    var agentPresetStrip = document.getElementById("agentPresetStrip");
    if (agentPresetStrip) agentPresetStrip.hidden = !agentModeActive;
    renderAgentPresets();
    updateChatPlaceholder();
    updateInputModeHint();
  }

  function renderAgentPresets() {
    var scroll = document.getElementById("agentPresetScroll");
    if (!scroll || typeof NocoAgent === "undefined" || !NocoAgent.getPresets) return;
    scroll.innerHTML = "";
    if (!agentModeActive) return;
    NocoAgent.getPresets().forEach(function (preset) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "agent-preset-chip";
      btn.setAttribute("role", "listitem");
      btn.setAttribute("data-agent-preset", preset.id);
      btn.title = preset.prompt;
      btn.innerHTML = '<span class="agent-preset-icon">' + preset.icon + '</span><span class="agent-preset-label">' + escapeHtml(preset.title) + '</span>';
      btn.addEventListener("click", function () {
        if (!canSendMessage()) {
          showToast("Tageslimit erreicht");
          openExclusiveDialog();
          return;
        }
        setAgentMode(true);
        runAgentJob(preset.prompt);
      });
      scroll.appendChild(btn);
    });
  }

  function setSummaryMode(on) {
    summaryModeActive = !!on;
    if (on) {
      setImageMode(false);
      setAgentMode(false);
      setInsightMode(false);
      setMotionMode(false);
    }
    document.body.classList.toggle("is-summary-mode", summaryModeActive);
    var summaryBtn = document.querySelector("[data-shortcut='summary']");
    if (summaryBtn) summaryBtn.classList.toggle("is-active", summaryModeActive);
    updateChatPlaceholder();
    updateInputModeHint();
  }

  function setImageMode(on) {
    imageModeActive = !!on;
    if (on) {
      setAgentMode(false);
      setSummaryMode(false);
      setInsightMode(false);
      setMotionMode(false);
    }
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
    if (motionModeActive) {
      chatInput.placeholder = "🎬 Epic Video — z.B. Erstelle ein Video von einer Katze im Regen…";
      return;
    }
    if (insightModeActive) {
      if (insightCategory === "ask" && insightPayload) {
        chatInput.placeholder = "Frag die Datei — z.B. Worum geht es?";
      } else {
        chatInput.placeholder = "NOCO Inside — Text einfügen oder Frage stellen…";
      }
      return;
    }
    if (summaryModeActive) {
      chatInput.placeholder = "Summary — langen Text einfuegen (5 Stichpunkte)…";
      return;
    }
    if (agentModeActive) {
      chatInput.placeholder = "Agent aktiv — frag alles, z.B. Gaming Logo, Lernplan, Idee…";
      return;
    }
    if (imageModeActive) {
      chatInput.placeholder = "NOCO Build Create — Motiv z.B. Katze, Drache, Sonne";
      return;
    }
    var left = Math.max(0, FREE_MSG_DAILY - loadQuota().used);
    chatInput.placeholder = isExclusiveActive() ? "Nachricht…" : ("Nachricht… · " + left + "/" + FREE_MSG_DAILY);
  }

  function updateInputModeHint() {
    if (!inputModelHint) return;
    var tier = getEffectiveModelTier();
    var parts = ["Modell: " + tier.name];
    var ks = getKnowledgeSource();
    parts.push(KNOWLEDGE_SOURCE_LABELS[ks] || "NOCO-Wissen");
    if (ks === "noco") parts.push("nur Vault");
    else if (ks === "wiki") parts.push("nur Wiki");
    else if (ks === "auto") parts.push("Nexus-Auto");
    if (!isVaultEnabled()) parts.push("Vault aus");
    if (!isExclusiveActive() && (ks === "wiki" || ks === "auto")) {
      parts.push("Wiki " + getWikiQuotaLeft() + "/" + WIKI_FREE_DAILY);
    }
    if (agentModeActive) parts.push("Agent");
    if (motionModeActive) parts.push("Video");
    if (insightModeActive) parts.push("Inside");
    if (summaryModeActive) parts.push("Summary");
    if (imageModeActive) parts.push("Bild");
    if (isProSelected()) parts.push("Pro Rush");
    inputModelHint.textContent = parts.join(" · ");
  }

  function updateProModeUI() {
    if (!proModeBtn) return;
    var canPro = canUseProToday();
    proModeBtn.classList.toggle("is-active", isProSelected());
    proModeBtn.classList.toggle("is-locked", !canPro);
    proModeBtn.setAttribute("aria-pressed", isProSelected() ? "true" : "false");
    proModeBtn.title = canPro
      ? (isExclusiveActive()
        ? "NOCO AI Pro 1.0 — " + getProQuotaLeft() + " Pro heute"
        : "NOCO Pro — " + getProQuotaLeft() + "/Tag · fuer diese Nachricht")
      : "Pro-Limit heute — Reset um 0:00";
    document.body.classList.toggle("is-pro-armed", isProSelected());
    updateInputModeHint();
  }

  function toggleProMode() {
    if (!canUseProToday()) {
      showToast("Pro-Limit heute erreicht — Reset 0:00");
      return;
    }
    proModeSelected = !proModeSelected;
    updateModelUI();
    showToast(proModeSelected ? "Pro fuer naechste Eingabe aktiv" : "Pro deaktiviert");
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
    if (!isSuggestionsOn("input")) {
      hideInputSuggestions();
      return;
    }
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
    if (!isSuggestionsOn("welcome")) {
      container.innerHTML = "";
      return;
    }
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

  function activateImageModeInChat() {
    switchView("chat");
    closeAllDialogs();
    if (isChatImageRendering()) {
      showToast("Bild wird noch gerendert — gleich wieder moeglich.");
      return;
    }
    if (!canGenerateImage()) {
      askInChat(
        "**Render-Limit heute erreicht.** Exclusive = unbegrenzt Bild & Video:",
        [{ id: "mode-agent", label: "Weiter chatten", primary: true }],
        { topic: "Create" }
      );
      return;
    }
    setImageMode(true);
    askInChat(
      "**Bild-Modus** — Was soll gezeichnet werden?\n\nFrei formulieren oder waehlen:",
      [
        { id: "hub-img", label: "Katze", payload: "Katze" },
        { id: "hub-img", label: "Apfel", payload: "Apfel" },
        { id: "hub-img", label: "Drache", payload: "Drache" },
        { id: "mode-motion", label: "Stattdessen Motion", muted: true }
      ],
      { topic: "Create" }
    );
    if (chatInput) chatInput.focus();
  }

  function activateMotionModeInChat() {
    switchView("chat");
    closeAllDialogs();
    setMotionMode(true);
    askInChat(
      "**NOCO Motion** — Was soll animiert werden?\n\nZ.B. *Video von einer Katze*",
      [
        { id: "fill-motion", label: "Beispiel: Katze", payload: "Erstelle ein Video von einer Katze", primary: true },
        { id: "hub-create", label: "Stattdessen Bild", muted: true }
      ],
      { topic: "Motion" }
    );
    if (chatInput) chatInput.focus();
  }

  function activateInsideModeInChat() {
    switchView("chat");
    closeAllDialogs();
    setInsightMode(true);
    askInChat(
      "**NOCO Inside** — Text einfuegen oder Datei laden.\n\nWas soll analysiert werden?",
      [
        { id: "inside-file-hint", label: "Datei waehlen", primary: true },
        { id: "inside-paste", label: "Text unten einfuegen" }
      ],
      { topic: "Inside" }
    );
    if (chatInput) chatInput.focus();
  }

  function focusChatImagePrompt() {
    activateImageModeInChat();
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
    var q = loadImageQuota();
    q.used++;
    saveImageQuota(q);
  }

  function getPixelSize() { return isExclusiveActive() ? 52 : 40; }
  function getPixelDuration() {
    if (isProSelected()) return 4500;
    return isExclusiveActive() ? 35000 : 60000;
  }

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
    return loadQuota().used < FREE_MSG_DAILY;
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
    var tier = getEffectiveModelTier();
    var exclusive = isExclusiveActive();
    var quota = loadQuota();
    var displayName = tier.name;

    if (modelLabel) modelLabel.textContent = displayName;
    if (modelStatus) modelStatus.textContent = displayName.replace("NOCO ", "").replace("NOCO AI ", "");

    if (exclusiveBadge) {
      exclusiveBadge.textContent = exclusive ? "EXCLUSIVE" : "FREE";
      exclusiveBadge.classList.toggle("is-exclusive", exclusive);
    }
    if (exclusiveTopBtn) exclusiveTopBtn.classList.toggle("is-active", exclusive);
    document.body.classList.toggle("exclusive-active", exclusive);

    if (quotaLabel) {
      if (exclusive) {
        quotaLabel.textContent = isProSelected()
          ? "Exclusive · " + displayName + " · Pro Rush"
          : "Exclusive · " + displayName + " · Rush";
      } else {
        var left = Math.max(0, FREE_MSG_DAILY - quota.used);
        var wikiLeft = getWikiQuotaLeft();
        quotaLabel.textContent = "NOCO Free · " + left + "/" + FREE_MSG_DAILY + " · Wiki " + wikiLeft + "/" + WIKI_FREE_DAILY;
      }
    }
    updatePlanBar(tier, exclusive, quota);
    updateSettingsPlan(tier, exclusive, quota);
    updatePixelMeta();
    updateInputGate();
    updateExclusiveSidebar();
    updateProModeUI();
    updateInputModeHint();
    updateUsageDialog();
  }

  function usageMeterPct(used, limit) {
    if (limit === Infinity) return used > 0 ? 12 : 4;
    if (!limit) return 0;
    return Math.min(100, Math.round((used / limit) * 100));
  }

  function usageMeterLabel(used, limit) {
    if (limit === Infinity) return used + " genutzt · unbegrenzt";
    var left = Math.max(0, limit - used);
    return used + " / " + limit + " · " + left + " frei";
  }

  function paintUsageRow(rowId, used, limit, note) {
    var row = document.getElementById(rowId);
    if (!row) return;
    var fill = row.querySelector(".usage-meter-fill");
    var val = row.querySelector(".usage-meter-val");
    var noteEl = row.querySelector(".usage-meter-note");
    var infinite = limit === Infinity;
    row.classList.toggle("is-infinite", infinite);
    row.classList.toggle("is-full", !infinite && used >= limit);
    if (fill) fill.style.width = usageMeterPct(used, limit) + "%";
    if (val) val.textContent = usageMeterLabel(used, limit);
    if (noteEl && note) noteEl.textContent = note;
  }

  function updateUsageDialog() {
    var exclusive = isExclusiveActive();
    var limits = getPlanLimits();
    var badge = document.getElementById("usagePlanBadge");
    var title = document.getElementById("usagePlanTitle");
    var sub = document.getElementById("usagePlanSub");
    var resetNote = document.getElementById("usageResetNote");

    if (badge) {
      badge.textContent = exclusive ? "NOCO Exclusive" : "NOCO Free";
      badge.classList.toggle("is-exclusive", exclusive);
    }
    if (title) title.textContent = exclusive ? "Exclusive — erweiterte Limits" : "NOCO Free — Tageskontingente";
    if (sub) {
      sub.textContent = exclusive
        ? "Nachrichten, Vault & Nexus-Auto unbegrenzt · Pro, Bilder, Wiki & Videos mit Tagesbalken · Reset 0:00"
        : "Limits resetten taeglich 0:00 · Nexus-Auto 1× · Pro 1× · Video Standard-Qualitaet";
    }
    if (resetNote) resetNote.textContent = "Stand: " + getTodayKey() + " · automatischer Reset um Mitternacht";

    paintUsageRow("usageRowMessages", loadQuota().used, limits.messages,
      exclusive ? "Chat-Nachrichten unbegrenzt" : "Normale Chat-Antworten");
    paintUsageRow("usageRowPro", loadProQuota().used, limits.pro,
      exclusive ? "NOCO Pro 1.0 Rush" : "1 Pro-Nachricht mit Rush-Speed");
    paintUsageRow("usageRowImages", loadImageQuota().used, limits.images, "NOCO Render · Bilder im Chat");
    paintUsageRow("usageRowWiki", loadWikiQuota().used, limits.wiki,
      exclusive ? "Wiki-API 1.1 · de.wikipedia.org" : "Wikipedia live");
    paintUsageRow("usageRowNexus", loadNexusQuota().used, limits.nexus,
      exclusive ? "Vault + Wiki ultra-intelligent" : "1× Nexus-Auto / Tag");
    paintUsageRow("usageRowVideos", loadMotionQuota().used, limits.videos,
      exclusive ? "NOCO Motion · Epic Video" : "1× Video · Standard-Qualitaet");

    var featList = document.getElementById("usageFeatureList");
    if (featList) {
      featList.innerHTML = exclusive
        ? "<li><strong>∞</strong> Nachrichten, Vault, Nexus-Auto, Rush</li><li><strong>" + limits.pro + "</strong> NOCO Pro / Tag</li><li><strong>" + limits.images + "</strong> Bilder / Tag</li><li><strong>" + limits.wiki + "</strong> Wikipedia / Tag</li><li><strong>" + limits.videos + "</strong> Videos / Tag</li>"
        : "<li><strong>" + limits.messages + "</strong> Nachrichten / Tag</li><li><strong>" + limits.pro + "</strong> NOCO Pro / Tag</li><li><strong>" + limits.images + "</strong> Bilder / Tag</li><li><strong>" + limits.wiki + "</strong> Wikipedia / Tag</li><li><strong>" + limits.nexus + "</strong> Nexus-Auto / Tag</li><li><strong>" + limits.videos + "</strong> Video (Standard) / Tag</li><li>Vault offline · kostenlos</li>";
    }
    if (usageBtn) {
      var msgLeft = exclusive ? "∞" : Math.max(0, FREE_MSG_DAILY - loadQuota().used);
      usageBtn.setAttribute("title", "Nutzung · " + (exclusive ? "Exclusive" : msgLeft + "/" + FREE_MSG_DAILY + " Msg"));
    }
  }

  function openUsageDialog() {
    updateUsageDialog();
    if (!usageDialog) return;
    showCenteredDialog(usageDialog);
  }

  function isFeatureEnabled(id) {
    if (settings.cleanMode) {
      return id === "image" || id === "hub" || id === "motion" || id === "agent";
    }
    var map = {
      glow: "featureGlow", echo: "featureEcho", motion: "featureMotion", agent: "featureAgent",
      inside: "featureInside", brief: "featureBrief", summary: "featureSummary",
      detect: "featureLens", lens: "featureLens"
    };
    var sk = map[id];
    if (sk && settings[sk] === false) return false;
    return true;
  }

  function applyFeatureVisibility() {
    document.body.classList.toggle("clean-mode", !!settings.cleanMode);
    document.body.classList.toggle("feature-off-glow", settings.featureGlow === false || !!settings.cleanMode);
    document.body.classList.toggle("feature-off-echo", settings.featureEcho === false || !!settings.cleanMode);
    document.body.classList.toggle("feature-off-motion", settings.featureMotion === false);
    document.body.classList.toggle("feature-off-agent", settings.featureAgent === false);
    document.body.classList.toggle("feature-off-inside", settings.featureInside === false || !!settings.cleanMode);
    document.body.classList.toggle("feature-off-brief", settings.featureBrief === false || !!settings.cleanMode);
    document.body.classList.toggle("feature-off-summary", settings.featureSummary === false || !!settings.cleanMode);
    document.body.classList.toggle("feature-off-lens", settings.featureLens === false || !!settings.cleanMode);
    if (!isFeatureEnabled("glow")) { hideGlowPrism(); hideWriteAssist(); }
  }

  function updatePlanBar(tier, exclusive, quota) {
    exclusive = exclusive !== undefined ? exclusive : isExclusiveActive();
    tier = tier || getEffectiveModelTier();
    quota = quota || loadQuota();
    var left = Math.max(0, FREE_MSG_DAILY - quota.used);

    var plans = getBrand().plans;
    if (planBadge) {
      planBadge.textContent = exclusive ? plans.exclusive.short : plans.free.short;
      planBadge.classList.toggle("is-exclusive", exclusive);
    }
    if (planModelText) {
      planModelText.textContent = "Modell: " + tier.name;
      planModelText.hidden = false;
    }
    if (planQuotaText) {
      if (exclusive) {
        planQuotaText.textContent = "Pro " + getProQuotaLeft() + " · Bilder " + getImageQuotaLeft() + "/" + PLAN_LIMITS.exclusive.images + " · Wiki " + getWikiQuotaLeft() + "/" + PLAN_LIMITS.exclusive.wiki;
      } else {
        planQuotaText.textContent = left + "/" + FREE_MSG_DAILY + " · Wiki " + getWikiQuotaLeft() + "/" + WIKI_FREE_DAILY;
      }
    }
    if (planStatusLine) {
      if (exclusive) {
        planStatusLine.innerHTML = isProSelected()
          ? "<strong>Exclusive</strong> · Pro 1.0 · Ultra Rush"
          : "<strong>Exclusive</strong> · Flux · Rush " + EXCLUSIVE_SPEED_MS + " ms · ∞";
      } else {
        planStatusLine.innerHTML = "<strong>NOCO Free</strong> · " + left + "/" + FREE_MSG_DAILY + " · Wiki " + getWikiQuotaLeft() + "/" + WIKI_FREE_DAILY;
      }
    }
    if (planSpeedBadge) {
      planSpeedBadge.hidden = true;
    }
    if (inputHintPlan) {
      inputHintPlan.textContent = exclusive
        ? plans.exclusive.short + " · " + tier.name
        : plans.free.short + " · " + tier.name + " · " + left + "/" + FREE_MSG_DAILY;
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
    var left = Math.max(0, FREE_MSG_DAILY - quota.used);

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
        settingsPlanDetail.textContent = left + "/" + FREE_MSG_DAILY + " heute · " + tier.remaining + "x NOCO Prism · dann Spark · Reset 0:00";
      } else {
        settingsPlanDetail.textContent = left + "/" + FREE_MSG_DAILY + " heute · NOCO Spark aktiv · Exclusive = Flux + Rush";
      }
    }
    if (settingsExclusiveHint) {
      settingsExclusiveHint.textContent = exclusive
        ? "Exclusive aktiv: " + tier.name + " · Rush · Wiki " + PLAN_LIMITS.exclusive.wiki + "/Tag · Nexus-Auto ∞"
        : "NOCO Free — " + FREE_MSG_DAILY + " Msg · " + PLAN_LIMITS.free.images + " Bilder · " + WIKI_FREE_DAILY + " Wiki · 1 Nexus-Auto/Tag.";
    }
  }

  function updateExclusiveSidebar() {
    var ex = isExclusiveActive();
    if (exclusivePerkPills) exclusivePerkPills.hidden = !ex;
    if (exclusiveUnlockBanner) exclusiveUnlockBanner.hidden = ex;
    if (exclusiveSpeedActive) exclusiveSpeedActive.hidden = !ex;
    if (exclusiveSpeedHero) exclusiveSpeedHero.hidden = ex;
    if (exclusiveDialog) exclusiveDialog.classList.toggle("is-exclusive-user", ex);
    document.body.classList.toggle("exclusive-active", ex);
    updateExclusiveManagePanel();
    updatePayWalletUI();
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
      btn.addEventListener("click", function (e) {
        if (e.target.closest(".sidebar-mini-btn-inline")) return;
        var section = btn.closest(".sidebar-collapsible");
        if (!section) return;
        var collapsed = section.classList.toggle("is-collapsed");
        btn.setAttribute("aria-expanded", collapsed ? "false" : "true");
        if (!collapsed && section.getAttribute("data-collapse") === "sparks") {
          renderPromptChips();
        }
      });
    });
    if (sidebarHubBtn) {
      sidebarHubBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        openHubInChat();
      });
    }
  }

  function initComposeToolbar() {
    var shell = document.querySelector(".input-compose-shell");
    if (!shell) return;
    shell.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-shortcut]");
      if (!btn || !shell.contains(btn)) return;
      if (isChatImageRendering()) {
        showToast("NOCO Render laeuft — bitte warten…");
        return;
      }
      var sc = btn.getAttribute("data-shortcut");
      var featureKey = sc === "inside" || sc === "insight" ? "inside" : (sc === "detect" ? "lens" : sc);
      if (sc !== "hub" && sc !== "new" && sc !== "help" && !isFeatureEnabled(featureKey)) {
        showToast("In Einstellungen deaktiviert — oder Clean Mode aktiv");
        return;
      }
      if (sc === "hub") openHubInChat();
      else if (sc === "brief") handleQuickAction("brief");
      else if (sc === "glow") handleQuickAction("glow");
      else if (sc === "echo") handleQuickAction("echo");
      else if (sc === "image") focusChatImagePrompt();
      else if (sc === "detect") triggerImageDetectPicker();
      else if (sc === "summary") {
        setAgentMode(false);
        setImageMode(false);
        setInsightMode(false);
        setMotionMode(false);
        setSummaryMode(!summaryModeActive);
        if (summaryModeActive && chatInput) {
          chatInput.focus();
          showToast("Summary Mode — langen Text einfuegen");
        }
      }
      else if (sc === "inside" || sc === "insight") {
        setAgentMode(false);
        setImageMode(false);
        setSummaryMode(false);
        setMotionMode(false);
        if (insightModeActive) {
          setInsightMode(false);
          if (chatInput) chatInput.focus();
        } else {
          activateInsideModeInChat();
        }
      }
      else if (sc === "motion") {
        setAgentMode(false);
        setImageMode(false);
        setSummaryMode(false);
        setInsightMode(false);
        if (motionModeActive) {
          setMotionMode(false);
          if (chatInput) chatInput.focus();
        } else {
          activateMotionModeInChat();
        }
      }
      else if (sc === "agent") {
        setImageMode(false);
        setSummaryMode(false);
        setInsightMode(false);
        setMotionMode(false);
        setAgentMode(!agentModeActive);
        if (agentModeActive && chatInput) {
          chatInput.focus();
          showToast("Agent aktiv — frag alles");
        }
      }
      else if (sc === "new" && newChatBtn) newChatBtn.click();
      else if (sc === "help") {
        sendMessage("Was kann ich dich fragen?");
      }
    });
  }

  function maybeShowDiscoverHint() {
    if (isGuideSeen() || !discoverHint) return;
    discoverHint.hidden = false;
  }

  function maybeShowFeatureBanner() {
    try {
      if (localStorage.getItem(FEATURE_DISMISS_KEY) === "1") return;
    } catch (e) { /* */ }
    if (nocoFeatureDialog) {
      window.setTimeout(function () {
        showCenteredDialog(nocoFeatureDialog);
      }, 280);
      return;
    }
    if (nocoFeatureBanner) nocoFeatureBanner.hidden = false;
  }

  function dismissFeatureBanner() {
    var never = document.getElementById("nfdNeverAgain");
    if (never && never.checked) {
      try { localStorage.setItem(FEATURE_DISMISS_KEY, "1"); } catch (e) { /* */ }
    }
    if (nocoFeatureDialog && nocoFeatureDialog.open) nocoFeatureDialog.close();
    if (nocoFeatureBanner) nocoFeatureBanner.hidden = true;
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
        chatInput.placeholder = "Tageslimit " + FREE_MSG_DAILY + "/" + FREE_MSG_DAILY + " — Exclusive oder Reset um 0:00";
        hideInputSuggestions();
      } else {
        updateChatPlaceholder();
      }
    }
    if (inputExclusiveGate) {
      inputExclusiveGate.hidden = canChat;
      if (inputGateText && !canChat) {
        inputGateText.innerHTML = "Tageslimit <strong>" + FREE_MSG_DAILY + "/" + FREE_MSG_DAILY + "</strong> erreicht — <strong>NOCO Exclusive</strong> oder Nutzung pruefen";
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
    upsertMessageEl(msg, chat.messages.length - 1);
    ensureChatDomSynced();
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

  var bootFinished = false;
  var bootFailsafeTimer = null;
  var bootStepInterval = null;
  var bootShardCancel = null;

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

  function ensureAppVisible() {
    bootFinished = true;
    window.__nocoBootDone = true;
    if (typeof window.__nocoUnlockApp === "function") {
      window.__nocoUnlockApp();
    }
    if (bootFailsafeTimer) {
      clearTimeout(bootFailsafeTimer);
      bootFailsafeTimer = null;
    }
    if (bootStepInterval) {
      clearInterval(bootStepInterval);
      bootStepInterval = null;
    }
    if (bootShardCancel) {
      bootShardCancel();
      bootShardCancel = null;
    }
    dismissStuckOverlays();
    closeAllDialogs();
  }

  function finishBootSequence(logoWrap) {
    if (bootFinished && appShell && appShell.classList.contains("ready")) return;
    bootFinished = true;
    window.__nocoBootDone = true;
    if (bootFailsafeTimer) {
      clearTimeout(bootFailsafeTimer);
      bootFailsafeTimer = null;
    }
    if (bootStepInterval) {
      clearInterval(bootStepInterval);
      bootStepInterval = null;
    }
    if (bootShardCancel) {
      bootShardCancel();
      bootShardCancel = null;
    }
    if (bootScreen) {
      bootScreen.classList.add("hidden");
      bootScreen.classList.remove("is-booting", "is-exiting", "is-handoff", "is-stuck-recovery");
      bootScreen.setAttribute("aria-hidden", "true");
    }
    if (logoWrap) logoWrap.classList.remove("is-lit", "is-shatter");
    ensureAppVisible();
    if (discoverHint) discoverHint.hidden = true;
    closeAllDialogs();
    maybeShowFeatureBanner();
    window.setTimeout(function () {
      if (welcomeBlock) welcomeBlock.classList.remove("is-boot-enter");
    }, 1600);
  }

  function forceBootComplete(logoWrap) {
    if (!bootScreen) {
      ensureAppVisible();
      return;
    }
    if (bootFinished && appShell && appShell.classList.contains("ready")) return;
    if (typeof window.__nocoForceBoot === "function") {
      window.__nocoForceBoot();
      bootFinished = true;
      ensureAppVisible();
      return;
    }
    triggerBootHandoff();
    finishBootSequence(logoWrap);
  }

  function boot() {
    if (window.__nocoBootDone || bootFinished) {
      ensureAppVisible();
      return;
    }
    if (typeof window.__nocoForceBoot === "function") {
      return;
    }
    if (!bootScreen) {
      if (appShell) appShell.classList.add("ready");
      maybeShowFeatureBanner();
      return;
    }
    bootFinished = false;
    var logoWrap = bootScreen.querySelector(".boot-logo");
    var dots = bootScreen.querySelectorAll(".boot-dot");
    var step = 0;
    var totalSteps = bootSteps.length;
    var fastBoot = !settings.animations || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    var stepMs = fastBoot ? 220 : 520;
    var shardDuration = fastBoot ? 1400 : 5800;
    var shardCount = fastBoot ? 36 : 96;

    bootScreen.classList.add("is-booting");
    bootScreen.classList.remove("hidden", "is-handoff", "is-exiting", "is-boot-error");
    document.body.classList.toggle("is-booting-fast", fastBoot);
    if (appShell) {
      appShell.classList.remove("ready", "is-boot-handoff");
    }
    document.body.classList.remove("boot-handoff-active");
    setBootProgress(-1, totalSteps);

    if (!bootScreen._skipBound) {
      bootScreen._skipBound = true;
      bootScreen.addEventListener("click", function () {
        forceBootComplete(logoWrap);
      });
      document.addEventListener("keydown", function (e) {
        if (bootFinished) return;
        if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
          e.preventDefault();
          forceBootComplete(logoWrap);
        }
      });
    }

    bootFailsafeTimer = setTimeout(function () {
      forceBootComplete(logoWrap);
    }, fastBoot ? 3200 : 6500);

    window.setTimeout(function () {
      if (logoWrap) logoWrap.classList.add("is-lit");
    }, fastBoot ? 120 : 480);

    bootStepInterval = setInterval(function () {
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
        clearInterval(bootStepInterval);
        bootStepInterval = null;
        if (bootStatus) bootStatus.textContent = "Willkommen im Chat…";
        setBootProgress(totalSteps - 1, totalSteps);
        bootScreen.classList.add("is-exiting");
        if (logoWrap) logoWrap.classList.add("is-shatter");
        var mark = bootScreen.querySelector(".logo-mark-boot");
        var rect = mark ? mark.getBoundingClientRect() : null;
        if (fastBoot) {
          triggerBootHandoff();
          window.setTimeout(function () {
            finishBootSequence(logoWrap);
          }, 380);
        } else if (typeof NocoBootFX !== "undefined") {
          bootShardCancel = NocoBootFX.playShardBurst({
            x: rect ? rect.left + rect.width / 2 : window.innerWidth * 0.5,
            y: rect ? rect.top + rect.height / 2 : window.innerHeight * 0.42,
            count: shardCount,
            duration: shardDuration,
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
    }, stepMs);
  }

  window.addEventListener("pageshow", function (ev) {
    if (bootFinished || !bootScreen || bootScreen.classList.contains("hidden")) return;
    if (ev.persisted || bootScreen.classList.contains("is-booting")) {
      var lw = bootScreen.querySelector(".boot-logo");
      if (bootStatus) bootStatus.textContent = "Willkommen — Einstieg…";
      bootScreen.classList.add("is-stuck-recovery");
      forceBootComplete(lw);
    }
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden || bootFinished || !bootScreen || bootScreen.classList.contains("hidden")) return;
    window.setTimeout(function () {
      if (!bootFinished && bootScreen && !bootScreen.classList.contains("hidden")) {
        forceBootComplete(bootScreen.querySelector(".boot-logo"));
      }
    }, 1200);
  });

  /* ── Settings ── */

  function isSuggestionsOn(kind) {
    if (settings.suggestionsAll === false) return false;
    if (kind === "messages") return settings.suggestionsMessages !== false;
    if (kind === "input") return settings.suggestionsInput !== false;
    if (kind === "welcome") return settings.suggestionsWelcome !== false;
    if (kind === "sparks") return settings.suggestionsSparks !== false;
    return true;
  }

  function loadSettings() {
    try {
      var raw = localStorage.getItem(SETTINGS_KEY);
      return raw ? JSON.parse(raw) : {
        animations: true, speed: "normal", typewriter: true,
        glass: "high", compact: false, sound: true, knowledgeSource: "noco",
        vaultEnabled: true, suggestionsAll: true, suggestionsMessages: true,
        suggestionsInput: true, suggestionsWelcome: true, suggestionsSparks: true,
        cleanMode: false, featureGlow: true, featureEcho: true, featureMotion: true,
        featureAgent: true, featureInside: true, featureBrief: true, featureSummary: true, featureLens: true
      };
    } catch (e) {
      return {
        animations: true, speed: "normal", typewriter: true, glass: "high", compact: false, sound: true,
        knowledgeSource: "noco", vaultEnabled: true, suggestionsAll: true, suggestionsMessages: true,
        suggestionsInput: true, suggestionsWelcome: true, suggestionsSparks: true,
        cleanMode: false, featureGlow: true, featureEcho: true, featureMotion: true,
        featureAgent: true, featureInside: true, featureBrief: true, featureSummary: true, featureLens: true
      };
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
    if (vaultEnabledToggle) vaultEnabledToggle.checked = settings.vaultEnabled !== false;
    if (suggestionsAllToggle) suggestionsAllToggle.checked = settings.suggestionsAll !== false;
    if (suggestionsMessagesToggle) suggestionsMessagesToggle.checked = settings.suggestionsMessages !== false;
    if (suggestionsInputToggle) suggestionsInputToggle.checked = settings.suggestionsInput !== false;
    if (suggestionsWelcomeToggle) suggestionsWelcomeToggle.checked = settings.suggestionsWelcome !== false;
    if (suggestionsSparksToggle) suggestionsSparksToggle.checked = settings.suggestionsSparks !== false;
    if (settingsSuggestionSubs) {
      settingsSuggestionSubs.classList.toggle("is-disabled", settings.suggestionsAll === false);
    }
    if (cleanModeToggle) cleanModeToggle.checked = !!settings.cleanMode;
    if (featureGlowToggle) featureGlowToggle.checked = settings.featureGlow !== false;
    if (featureEchoToggle) featureEchoToggle.checked = settings.featureEcho !== false;
    if (featureMotionToggle) featureMotionToggle.checked = settings.featureMotion !== false;
    if (featureAgentToggle) featureAgentToggle.checked = settings.featureAgent !== false;
    if (featureInsideToggle) featureInsideToggle.checked = settings.featureInside !== false;
    if (featureBriefToggle) featureBriefToggle.checked = settings.featureBrief !== false;
    if (featureSummaryToggle) featureSummaryToggle.checked = settings.featureSummary !== false;
    if (featureLensToggle) featureLensToggle.checked = settings.featureLens !== false;

    document.body.classList.toggle("vault-disabled", settings.vaultEnabled === false);
    document.body.classList.toggle("no-suggestions-all", settings.suggestionsAll === false);
    document.body.classList.toggle("no-msg-suggestions", !isSuggestionsOn("messages"));
    document.body.classList.toggle("no-input-suggestions", !isSuggestionsOn("input"));
    document.body.classList.toggle("no-welcome-suggestions", !isSuggestionsOn("welcome"));
    document.body.classList.toggle("no-spark-suggestions", !isSuggestionsOn("sparks"));
    updateVaultPowerUI();
    applyFeatureVisibility();

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
      }
    } catch (e) {
      chats = [];
    }
    createChat(true, true);
    renderChatList();
    renderAllMessages();
    updateMsgCount();
  }

  function saveChats(immediate) {
    try {
      localStorage.setItem(CHATS_KEY, JSON.stringify({ chats: chats, activeChatId: activeChatId }));
    } catch (e) { /* */ }
    scheduleChatListRefresh(!!immediate);
  }

  function scheduleChatListRefresh(immediate) {
    clearTimeout(chatListRefreshTimer);
    if (immediate) {
      renderChatList();
      updateMsgCount();
      return;
    }
    chatListRefreshTimer = setTimeout(function () {
      renderChatList();
      updateMsgCount();
    }, 350);
  }

  function patchChatListTitle(chat) {
    if (!chat) return;
    if (chatTitle) chatTitle.textContent = chat.title;
    if (!chatList) return;
    var li = chatList.querySelector('.chat-list-item[data-chat-id="' + chat.id + '"] .chat-list-title');
    if (li) li.textContent = chat.title;
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
    saveChats(true);
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
    saveChats(true);
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
      try {
        localStorage.setItem(CHATS_KEY, JSON.stringify({ chats: chats, activeChatId: activeChatId }));
      } catch (e) { /* */ }
      patchChatListTitle(chat);
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

  function escapeAttr(str) {
    return String(str || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  }

  function buildWikiAnswerHtml(wiki) {
    if (!wiki) return "";
    var main = escapeHtml(wiki.main || "").replace(/\n/g, "<br>");
    var title = escapeHtml(wiki.title || "Wikipedia");
    var query = escapeHtml(wiki.query || "—");
    var url = escapeAttr(wiki.url || "https://de.wikipedia.org");
    var ver = escapeHtml(wiki.apiVersion || "1.1");
    var routeLabel = wiki.route === "followup" ? "Nexus-Auto · Follow-up"
      : wiki.route === "encyclopedic" || wiki.route === "wiki-topic" || wiki.route === "fallback-wiki" ? "Nexus-Auto · Wikipedia"
      : "Wiki-API " + ver;

    return (
      '<div class="wiki-answer">' +
        '<div class="wiki-answer-main">' + main + "</div>" +
        '<details class="wiki-source-fold">' +
          '<summary class="wiki-source-summary">' +
            '<span class="wiki-source-icon" aria-hidden="true">🌐</span>' +
            '<span class="wiki-source-summary-text">Quelle · Wikipedia · Wiki-API ' + ver + "</span>" +
          "</summary>" +
          '<div class="wiki-source-body">' +
            '<p class="wiki-source-flow">' +
              '<span class="wiki-flow-step">NOCO formuliert</span> ' +
              '<span class="wiki-flow-query">«' + query + "»</span> " +
              '<span class="wiki-flow-arrow">→</span> ' +
              '<span class="wiki-flow-step">Wikipedia antwortet</span>' +
            "</p>" +
            '<p class="wiki-source-article"><strong>' + title + "</strong></p>" +
            '<a class="wiki-source-link" href="' + url + '" target="_blank" rel="noopener noreferrer">Originalartikel auf Wikipedia öffnen</a>' +
            '<p class="wiki-source-route">' + routeLabel + " · Externe Quelle — nicht von NOCO AI</p>" +
            '<p class="wiki-source-legal">CC BY-SA 4.0 · Wikimedia Foundation &amp; Autor:innen. Kein offizieller Wikipedia-Dienst.</p>' +
          "</div>" +
        "</details>" +
      "</div>"
    );
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

  function findMessageElById(msgId) {
    if (!msgId || !chatMessages) return null;
    return chatMessages.querySelector('.message[data-msg-id="' + msgId + '"]');
  }

  function upsertMessageEl(msg, msgIndex, opts) {
    opts = opts || {};
    hideWelcome();
    if (!chatMessages || !msg) return null;
    var built = createMessageEl(msg, msgIndex, opts.contentHtml || "", !!opts.renderPending);
    var el = built.el;
    var existing = findMessageElById(msg.id);
    if (existing && existing.parentNode) {
      existing.replaceWith(el);
    } else {
      chatMessages.appendChild(el);
    }
    if (opts.scroll !== false) scrollToBottom(!!opts.urgent);
    return built;
  }

  function ensureChatDomSynced() {
    var messages = getMessages();
    if (!chatMessages || !messages.length) return;
    var i, el;
    for (i = 0; i < messages.length; i++) {
      el = findMessageElById(messages[i].id);
      if (!el || !el.isConnected) {
        renderAllMessages();
        return;
      }
    }
  }

  function createMessageEl(msg, msgIndex, contentHtml, renderPending) {
    var el = document.createElement("div");
    el.className = "message " + msg.role + (msg.type === "image" ? " image" : "") + (msg.type === "motion" ? " motion-msg" : "") + (msg.agentRun ? " agent-run" : "") + (msg.insightRun ? " insight-run" : "");
    el.setAttribute("role", "article");
    el.setAttribute("data-msg-index", msgIndex);
    if (msg.id) el.setAttribute("data-msg-id", msg.id);

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
    } else if (msg.type === "motion" && typeof NocoMotion !== "undefined") {
      var motionBadge = document.createElement("span");
      motionBadge.className = "motion-badge";
      motionBadge.textContent = (msg.motionPending || renderPending) ? "🎞️ NOCO Motion · Render…" : "🎞️ NOCO Motion";
      bubble.appendChild(motionBadge);
      var mWrap = document.createElement("div");
      mWrap.className = "chat-motion-wrap" + ((msg.motionPending || renderPending) ? " is-motion-rendering" : "");
      var mFrame = document.createElement("div");
      mFrame.className = "chat-motion-frame" + ((msg.motionPending || renderPending) ? " is-rendering" : "");
      var mCanvas = document.createElement("canvas");
      mCanvas.className = "chat-motion-canvas";
      mCanvas.setAttribute("data-msg-id", msg.id);
      mCanvas.width = 360;
      mCanvas.height = 360;
      if (msg.motionPending || renderPending) {
        var mScan = document.createElement("div");
        mScan.className = "chat-motion-scan";
        mScan.setAttribute("aria-hidden", "true");
        mFrame.appendChild(mCanvas);
        mFrame.appendChild(mScan);
      } else {
        mFrame.appendChild(mCanvas);
      }
      mWrap.appendChild(mFrame);
      if (msg.motion && !msg.motionPending && !renderPending) {
        var mMeta = document.createElement("p");
        mMeta.className = "chat-motion-meta";
        mMeta.textContent = (msg.motion.motifLabel || "Motiv") + " · " + (msg.motion.duration || 4) + "s · " + (msg.motion.fps || 20) + " FPS · " + (msg.motion.keyframeCount || 8) + " Keyframes";
        mWrap.appendChild(mMeta);
        mWrap.appendChild(buildChatMotionKeyframeRow(msg.motion));
        var mActRow = document.createElement("div");
        mActRow.className = "chat-motion-actions liquid-glass liquid-glass-prism";
        var mCopyBtn = document.createElement("button");
        mCopyBtn.type = "button";
        mCopyBtn.className = "chat-motion-action chat-motion-copy";
        mCopyBtn.setAttribute("data-msg-id", msg.id);
        mCopyBtn.innerHTML = '<span class="cia-icon">⧉</span><span>Kopieren</span>';
        var mSaveBtn = document.createElement("button");
        mSaveBtn.type = "button";
        mSaveBtn.className = "chat-motion-action chat-motion-save";
        mSaveBtn.setAttribute("data-msg-id", msg.id);
        mSaveBtn.innerHTML = '<span class="cia-icon">↓</span><span>Speichern</span>';
        mActRow.appendChild(mCopyBtn);
        mActRow.appendChild(mSaveBtn);
        mWrap.appendChild(mActRow);
      } else {
        var mKfRow = document.createElement("div");
        mKfRow.className = "motion-keyframe-row chat-motion-keyframes";
        mKfRow.setAttribute("role", "list");
        var kfi, kfSlot, kfCanvas, kfLabel;
        for (kfi = 0; kfi < (NocoMotion.KEYFRAME_COUNT || 8); kfi++) {
          kfSlot = document.createElement("div");
          kfSlot.className = "motion-kf-slot";
          kfCanvas = document.createElement("canvas");
          kfCanvas.className = "motion-kf-canvas";
          kfCanvas.width = 36;
          kfCanvas.height = 36;
          kfLabel = document.createElement("span");
          kfLabel.className = "motion-kf-label";
          kfLabel.textContent = String(kfi + 1);
          kfSlot.appendChild(kfCanvas);
          kfSlot.appendChild(kfLabel);
          mKfRow.appendChild(kfSlot);
        }
        mWrap.appendChild(mKfRow);
        buildChatMotionRenderStatus(mWrap);
      }
      var mText = document.createElement("div");
      mText.className = "chat-motion-report";
      if (msg.motionPending || renderPending) {
        mText.innerHTML = "<p><strong>🎬 Epic Video wird synthetisiert…</strong> 8 Keyframes · Pixel-Morph · Loop-Engine</p>";
      } else {
        mText.innerHTML = renderAiHtml(msg.text || "");
      }
      mWrap.appendChild(mText);
      bubble.appendChild(mWrap);
      if (msg.motion && !msg.motionPending && !renderPending && typeof NocoMotion.drawFrameToCanvas === "function") {
        NocoMotion.drawFrameToCanvas(msg.motion, 0, mCanvas, 10);
        window.setTimeout(function () {
          if (mCanvas._motionStop) {
            try { mCanvas._motionStop(); } catch (e) { /* ignore */ }
          }
          if (typeof NocoMotion.startPlayback === "function") {
            var stop = NocoMotion.startPlayback(msg.motion, mCanvas, { scale: 10 });
            mCanvas._motionStop = stop;
            motionPlaybackStops.push(stop);
          }
        }, 60);
      }
    } else if (msg.role === "ai" && msg.wikiSource) {
      bubble.classList.add("message-bubble-wiki");
      bubble.innerHTML = buildWikiAnswerHtml(msg.wikiSource);
      if (msg.topic) {
        var wikiTopicBadge = document.createElement("span");
        wikiTopicBadge.className = "message-wiki-badge";
        wikiTopicBadge.textContent = msg.topic;
        bubble.insertBefore(wikiTopicBadge, bubble.firstChild);
      }
    } else {
      var html = contentHtml;
      if (!html) {
        if (msg.role === "ai") html = renderAiHtml(msg.text);
        else if (msg.role === "system") html = renderAiHtml(msg.text);
        else html = escapeHtml(msg.text).replace(/\n/g, "<br>");
      }
      bubble.innerHTML = html;
      if (msg.role === "ai" && msg.agentRun) {
        var agentBadgeEl = document.createElement("span");
        agentBadgeEl.className = "agent-badge";
        agentBadgeEl.textContent = "NOCO Agent";
        bubble.insertBefore(agentBadgeEl, bubble.firstChild);
      }
      if (msg.role === "ai" && msg.insightRun) {
        var insightBadgeEl = document.createElement("span");
        insightBadgeEl.className = "insight-badge";
        insightBadgeEl.textContent = "🔬 NOCO Inside";
        bubble.insertBefore(insightBadgeEl, bubble.firstChild);
      }
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

    if (msg.chatActions && msg.chatActions.length) {
      bubble.classList.add("message-bubble-has-actions");
      attachChatActionsToBody(body, msg);
    }

    var actions = msg.type === "image" ? null : buildActions(msg, msgIndex);
    if (actions) body.appendChild(actions);

    if (contentHtml !== "" && msg.role === "ai" && msg.related && msg.related.length && isLatestAiMessage(msgIndex) && isSuggestionsOn("messages")) {
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
    activeMotionMsgId = null;
    activeMotionMsgEl = null;
    motionPlaybackStops.forEach(function (stop) {
      if (typeof stop === "function") {
        try { stop(); } catch (e) { /* ignore */ }
      }
    });
    motionPlaybackStops = [];
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
      chatActions: opts.chatActions || null,
      brief: opts.brief || null,
      agentRun: opts.agentRun || false,
      insightRun: opts.insightRun || false,
      wikiSource: opts.wikiSource || null
    };
    chat.messages.push(msg);
    chat.updated = Date.now();
    if (role === "user") updateChatTitle(text);
    saveChats();

    var idx = chat.messages.length - 1;

    if (role === "ai" && settings.typewriter && opts.animate && !opts.wikiSource) {
      return appendWithTypewriter(msg, idx);
    }

    upsertMessageEl(msg, idx, { urgent: true });
    ensureChatDomSynced();
    return Promise.resolve();
  }

  function appendWithTypewriter(msg, idx) {
    var plain = msg.text;
    var mounted = upsertMessageEl(msg, idx);
    if (!mounted) return Promise.resolve();
    var bubble = mounted.bubble;
    var msgEl = mounted.el;
    bubble.classList.add("message-writing");
    scrollToBottom(true);

    return new Promise(function (resolve) {
      var tokens = plain.match(/\S+|\s+/g) || [plain];
      var ti = 0;
      var built = "";
      var baseSpeed = getTypewriterSpeed();
      function tick() {
        if (ti < tokens.length) {
          built += tokens[ti++];
          bubble.innerHTML = escapeHtml(built).replace(/\n/g, "<br>") + '<span class="write-caret" aria-hidden="true"></span>';
          if (ti % 3 === 0) scrollToBottom(false);
          var delay = /^\s+$/.test(tokens[ti - 1]) ? baseSpeed * 0.35 : baseSpeed;
          setTimeout(tick, delay);
        } else {
          bubble.classList.remove("message-writing");
          bubble.innerHTML = renderAiHtml(plain);
      if (msg.agentRun) {
        var agentBadge = document.createElement("span");
        agentBadge.className = "agent-badge";
        agentBadge.textContent = "NOCO Agent";
        bubble.insertBefore(agentBadge, bubble.firstChild);
      }
      if (msg.insightRun) {
        var insightBadge = document.createElement("span");
        insightBadge.className = "insight-badge";
        insightBadge.textContent = "🔬 NOCO Inside";
        bubble.insertBefore(insightBadge, bubble.firstChild);
      }
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
          if (msg.related && msg.related.length && isLatestAiMessage(idx) && isSuggestionsOn("messages")) {
            var body = msgEl.querySelector(".message-body");
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
          if (msg.chatActions && msg.chatActions.length) {
            var twBody = msgEl.querySelector(".message-body");
            bubble.classList.add("message-bubble-has-actions");
            attachChatActionsToBody(twBody, msg);
          }
          scrollToBottom(true);
          ensureChatDomSynced();
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
      if (!isTyping) updateChatScrollRoll();
    }
    if (urgent) {
      doScroll();
      requestAnimationFrame(doScroll);
      return;
    }
    if (scrollBottomPending) return;
    scrollBottomPending = true;
    requestAnimationFrame(function () {
      scrollBottomPending = false;
      doScroll();
    });
  }

  function updateChatScrollRoll() {
    if (!chatMessages || isTyping) return;
    var st = chatMessages.scrollTop;
    var max = chatMessages.scrollHeight - chatMessages.clientHeight;
    chatMessages.classList.toggle("is-scrolled", st > 10);
    chatMessages.classList.toggle("is-at-bottom", st >= max - 20);
    var fadeH = 80;
    var containerRect = chatMessages.getBoundingClientRect();
    var msgs = chatMessages.querySelectorAll(".message");
    var i, el, rect, dist, t, roll, op, scale;
    for (i = 0; i < msgs.length; i++) {
      el = msgs[i];
      rect = el.getBoundingClientRect();
      dist = rect.top - containerRect.top;
      if (dist < fadeH && dist > -rect.height * 0.4) {
        t = Math.max(0, Math.min(1, dist / fadeH));
        roll = (1 - t) * 14;
        op = 0.2 + t * 0.8;
        scale = 0.92 + t * 0.08;
        el.style.setProperty("--msg-roll", roll + "deg");
        el.style.setProperty("--msg-op", String(op));
        el.style.setProperty("--msg-scale", String(scale));
        el.classList.add("msg-scroll-fade");
      } else {
        el.classList.remove("msg-scroll-fade");
        el.style.removeProperty("--msg-roll");
        el.style.removeProperty("--msg-op");
        el.style.removeProperty("--msg-scale");
      }
    }
  }

  function initChatScrollRoll() {
    if (!chatMessages) return;
    var raf = 0;
    chatMessages.addEventListener("scroll", function () {
      if (!raf) {
        raf = requestAnimationFrame(function () {
          raf = 0;
          updateChatScrollRoll();
        });
      }
    }, { passive: true });
    updateChatScrollRoll();
  }

  function scrollImageRenderIntoView(wrap) {
    if (!wrap || !chatMessages) return;
    wrap.classList.add("is-render-anchor");
    requestAnimationFrame(function () {
      var chatRect = chatMessages.getBoundingClientRect();
      var wrapRect = wrap.getBoundingClientRect();
      var relativeTop = wrapRect.top - chatRect.top + chatMessages.scrollTop;
      var anchorTop = 72;
      chatMessages.scrollTop = Math.max(0, relativeTop - anchorTop);
    });
  }

  /* ── Send / Regenerate ── */

  var WIKI_PHASES = [
    { p: 0, text: "Nexus-Auto routet…" },
    { p: 0.18, text: "Wiki-API · Suchbegriff wird formuliert…" },
    { p: 0.38, text: "Wikipedia wird durchsucht…" },
    { p: 0.58, text: "Treffer werden bewertet…" },
    { p: 0.78, text: "Abstract wird geladen…" },
    { p: 0.9, text: "Antwort wird zusammengestellt…" }
  ];

  var wikiHudTimer = null;

  function setWikiHudMode(on, label) {
    document.body.classList.toggle("is-wiki-fetch", !!on);
    document.body.classList.toggle("is-wiki-fetch-lite", !!on);
    if (typingIndicator) typingIndicator.classList.toggle("is-wiki-mode", !!on);
    if (on) pauseLiquidCanvasForBusy();
    var bar = document.getElementById("typingWikiBar");
    var fill = document.getElementById("typingWikiFill");
    if (bar) bar.hidden = !on;
    if (!on) {
      if (fill) fill.style.width = "0%";
      if (wikiHudTimer) { clearInterval(wikiHudTimer); wikiHudTimer = null; }
      document.body.classList.remove("is-wiki-fetch-lite");
      resumeLiquidCanvasIfNeeded();
      return;
    }
    if (wikiHudTimer) clearInterval(wikiHudTimer);
    var start = performance.now();
    var duration = isExclusiveActive() || isProSelected() ? 520 : 720;
    var tick = 40;
    wikiHudTimer = setInterval(function () {
      if (!isTyping) return;
      var elapsed = performance.now() - start;
      var p = Math.min(0.95, elapsed / duration);
      var phaseText = WIKI_PHASES[0].text;
      var i;
      for (i = WIKI_PHASES.length - 1; i >= 0; i--) {
        if (p >= WIKI_PHASES[i].p) { phaseText = WIKI_PHASES[i].text; break; }
      }
      if (typingLabel && (label || phaseText)) {
        typingLabel.textContent = label || phaseText;
        typingLabel.classList.add("is-priority");
      }
      if (fill) fill.style.width = Math.round(p * 100) + "%";
    }, tick);
  }

  function pauseLiquidCanvasForBusy() {
    liquidPausedForBusy = true;
  }

  function resumeLiquidCanvasIfNeeded() {
    liquidPausedForBusy = false;
  }

  function setTyping(on, customLabel) {
    isTyping = on;
    typingIndicator.hidden = !on;
    sendBtn.disabled = on || !chatInput.value.trim();
    document.body.classList.toggle("is-chat-busy", on);
    document.body.classList.toggle("is-nexus-busy", on && getKnowledgeSource() === "auto");
    if (on) pauseLiquidCanvasForBusy();
    else {
      resumeLiquidCanvasIfNeeded();
      scheduleChatListRefresh(true);
    }
    if (!on) setWikiHudMode(false);
    if (typingLabel) {
      if (on && customLabel) {
        typingLabel.textContent = customLabel;
        typingLabel.classList.add("is-priority");
        typingLabel.classList.remove("is-pro");
      } else if (on && isProSelected()) {
        typingLabel.textContent = "NOCO AI Pro 1.0…";
        typingLabel.classList.add("is-priority", "is-pro");
      } else if (on && isExclusiveActive()) {
        typingLabel.textContent = "NOCO AI denkt… (Rush " + EXCLUSIVE_SPEED_MS + " ms)";
        typingLabel.classList.add("is-priority");
        typingLabel.classList.remove("is-pro");
      } else if (on) {
        typingLabel.textContent = "NOCO AI denkt…";
        typingLabel.classList.remove("is-priority", "is-pro");
      } else {
        typingLabel.textContent = "NOCO AI denkt…";
        typingLabel.classList.remove("is-priority", "is-pro");
      }
    }
    if (on) scrollToBottom();
  }

  function getDelay() {
    if (isProSelected()) {
      var pmap = proSpeedMap;
      return pmap[settings.speed] || pmap.normal;
    }
    var ex = isExclusiveActive();
    var map = ex ? exclusiveSpeedMap : speedMap;
    var base = map[settings.speed] || map.normal;
    if (settings.speed === "slow") return ex ? 320 : 950;
    return base;
  }

  function getDelayJitter() {
    if (isProSelected()) return Math.random() * 12;
    return isExclusiveActive() ? Math.random() * 50 : Math.random() * 200;
  }

  function getTypewriterSpeed() {
    if (isProSelected()) return 8;
    if (settings.speed === "fast") return 22;
    if (settings.speed === "slow") return 52;
    return isExclusiveActive() ? 28 : 34;
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
        var smart = NocoPixel.resolveMotifSmart
          ? NocoPixel.resolveMotifSmart(promptText, { uniqueId: Date.now() })
          : null;
        if (!smart || !smart.supported) {
          isRenderingChatImage = false;
          setChatRenderLock(false);
          appendMessage("ai", (smart && smart.message) || (NocoPixel.buildUnsupportedMessage
            ? NocoPixel.buildUnsupportedMessage(NocoPixel.extractSubject ? NocoPixel.extractSubject(promptText) : promptText)
            : "Motiv konnte nicht erstellt werden."));
          resolve();
          return;
        }
        var style = opts.style || detectStyleFromText(promptText);
        result = NocoPixel.generate(promptText, {
          size: getPixelSize(),
          style: style,
          random: !!opts.random,
          motifIndex: smart.motif.index,
          allowFallback: true,
          uniqueId: Date.now()
        });
        if (!result) {
          isRenderingChatImage = false;
          setChatRenderLock(false);
          appendMessage("ai", NocoPixel.buildUnsupportedMessage
            ? NocoPixel.buildUnsupportedMessage(smart.userAsked || promptText)
            : "Dieses Motiv kann NOCO Render gerade nicht erstellen.");
          resolve();
          return;
        }
        if (smart.mappingNote) {
          result._mappingNote = smart.mappingNote;
          result._userAsked = smart.userAsked;
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
      var resolveInfo = {
        motifLabel: result.motifLabel,
        mappingNote: result._mappingNote || "",
        userAsked: result._userAsked || ""
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
      var built = upsertMessageEl(msg, idx, { renderPending: true, urgent: true });
      if (!built) {
        isRenderingChatImage = false;
        setChatRenderLock(false);
        resolve();
        return;
      }
      setTyping(false);
      var renderWrapEarly = built.el.querySelector(".chat-image-wrap");
      scrollImageRenderIntoView(renderWrapEarly);
      scrollToBottom(true);

      var canvas = built.el.querySelector(".chat-image-canvas");
      var scale = getChatImageScale(result.size);
      var usedProImg = !!opts.usedPro;
      if (canvas && usedProImg && typeof NocoPixel !== "undefined") {
        NocoPixel.drawToCanvas(result, canvas, scale);
        finalizeChatImageDisplay(canvas, result, scale, built.el.querySelector(".chat-image-frame"), built.el.querySelector(".chat-image-progress"));
        isRenderingChatImage = false;
        setChatRenderLock(false);
        if (!opts.skipQuota) incrementImageQuota();
        ensureChatDomSynced();
        resolve(resolveInfo);
        return;
      }
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
        var revealMs = usedProImg ? 900 : getPixelDuration();
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
          ensureChatDomSynced();
          resolve(resolveInfo);
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
        ensureChatDomSynced();
        resolve(resolveInfo);
      }
    });
  }

  function handleImageChatRequest(text, opts) {
    opts = opts || {};
    switchView("chat");
    if (typeof NocoPixel === "undefined") {
      showToast("NOCO Render nicht geladen");
      return;
    }
    if (isChatImageRendering()) {
      showToast("Bild wird noch gerendert — gleich wieder moeglich.");
      return;
    }
    if (!canSendMessage()) {
      showToast("Tageslimit erreicht — schreib **exclusive** im Chat");
      return;
    }
    if (!canGenerateImage()) {
      showToast("Render-Limit heute — Exclusive fuer unbegrenzt.");
      openExclusiveDialog();
      return;
    }

    var smart = NocoPixel.resolveMotifSmart
      ? NocoPixel.resolveMotifSmart(text, { uniqueId: Date.now() })
      : null;
    if (!smart || !smart.supported) {
      chatFlow = { kind: "image-retry" };
      askInChat(
        (smart && smart.message) || "**Welches Motiv soll das Bild zeigen?**\n\nEinfach unten eingeben.",
        [{ id: "mode-create", label: "Bild-Modus", primary: true }],
        { topic: "Create" }
      );
      setImageMode(true);
      return;
    }

    if (!opts.skipClarify && !opts.confirmed && imageNeedsClarify(smart)) {
      chatFlow = {
        kind: "image-confirm",
        text: text,
        displayText: opts.displayText,
        resolved: smart,
        opts: { usedPro: opts.usedPro }
      };
      if (!opts.skipUserAppend) appendMessage("user", opts.displayText || text);
      askInChat(
        buildMotifConfirmText(smart, "bild"),
        buildMotifConfirmActions(smart, "bild"),
        { topic: "Create" }
      );
      return;
    }

    runImageChatGeneration(text, opts);
  }

  function runImageChatGeneration(text, opts) {
    opts = opts || {};
    var usedPro = opts.usedPro !== undefined ? opts.usedPro : consumeProForSend();
    switchView("chat");
    if (!opts.skipUserAppend) appendMessage("user", opts.displayText || text);
    chatInput.value = "";
    chatInput.style.height = "auto";
    sendBtn.disabled = true;
    setTyping(true);
    if (typingLabel) typingLabel.textContent = usedPro ? "NOCO Pro Render…" : (isExclusiveActive() ? "NOCO Render zeichnet…" : "NOCO Render startet…");
    appendImageMessage(text, { skipUserAppend: true, usedPro: usedPro }).then(function (info) {
      setTyping(false);
      if (typingLabel) typingLabel.textContent = "NOCO AI denkt…";
      incrementQuota();
      updateModelUI();
      if (latencyVal) latencyVal.textContent = getPixelDuration() + " ms";
      var subjLabel = NocoPixel.extractSubject ? NocoPixel.extractSubject(text) : text;
      var mapHint = info && info.mappingNote
        ? " · " + escapeHtml(info.userAsked || subjLabel) + " → " + escapeHtml(info.motifLabel || "")
        : "";
      showToast(
        "<strong>Bild fertig</strong> — " + escapeHtml((info && info.motifLabel) || subjLabel || "Motiv") + mapHint + " · <em>3600 Motive</em>",
        { rainbow: true, duration: 3400 }
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

  function isVaultEnabled() {
    return settings.vaultEnabled !== false;
  }

  function toggleVaultEnabled(forceOn) {
    var next = typeof forceOn === "boolean" ? forceOn : !isVaultEnabled();
    settings.vaultEnabled = next;
    saveSettings();
    applySettings();
    if (!next && getKnowledgeSource() === "noco") {
      showToast("Vault aus — wähle Wiki oder Nexus-Auto.", { duration: 3200 });
    } else {
      showToast(next ? "NOCO Vault aktiv." : "NOCO Vault deaktiviert.", { duration: 2400 });
    }
  }

  function updateVaultPowerUI() {
    var on = isVaultEnabled();
    var btns = [vaultPowerBtn, vaultPowerBtnMobile];
    var i;
    for (i = 0; i < btns.length; i++) {
      if (!btns[i]) continue;
      btns[i].classList.toggle("is-on", on);
      btns[i].setAttribute("aria-pressed", on ? "true" : "false");
    }
    if (knowledgeSourceSwitch) knowledgeSourceSwitch.classList.toggle("vault-off", !on);
    if (knowledgeSourceMobile) knowledgeSourceMobile.classList.toggle("vault-off", !on);
  }

  function resolveWikiQueryStrict(text) {
    var wq = "";
    if (NocoBrain.extractNexusWikiQuery) wq = NocoBrain.extractNexusWikiQuery(text);
    if (!wq && NocoBrain.extractWikiQuery) wq = NocoBrain.extractWikiQuery(text);
    if (wq) return wq;
    if (NocoBrain.cleanWikiTopic && NocoBrain.prepareUserMessage) {
      wq = NocoBrain.cleanWikiTopic(NocoBrain.prepareUserMessage(text));
      if (wq && NocoBrain.isValidWikiQuery && NocoBrain.isValidWikiQuery(wq)) return wq;
    }
    wq = String(text || "").trim().replace(/[?!.…]+$/g, "").trim();
    if (wq.length > 80) wq = wq.slice(0, 80);
    return wq;
  }

  function finishKnowledgeError(message, opts, start, topic) {
    setTyping(false);
    setWikiHudMode(false);
    incrementQuota();
    clearPreviousRelated();
    appendMessage("ai", message, {
      animate: true,
      topic: topic || "System",
      related: []
    }).then(function () {
      if (latencyVal && start) latencyVal.textContent = Math.round(performance.now() - start) + " ms";
      incrementMsgStats();
      requestAnimationFrame(function () { updateModelUI(); });
    });
  }

  function getKnowledgeSource() {
    var ks = settings.knowledgeSource;
    if (ks === "wiki" || ks === "auto") return ks;
    return "noco";
  }

  function needsExclusiveKnowledgeSource(src) {
    return src === "auto";
  }

  function loadWikiLegalAccepted() {
    try { return !!localStorage.getItem(WIKI_LEGAL_KEY); } catch (e) { return false; }
  }

  function saveWikiLegalAccepted() {
    try { localStorage.setItem(WIKI_LEGAL_KEY, String(Date.now())); } catch (e) { /* */ }
  }

  function openWikiLegalDialog(onAccept) {
    wikiLegalPending = onAccept || null;
    if (!wikiLegalDialog) {
      if (wikiLegalPending) wikiLegalPending();
      wikiLegalPending = null;
      return;
    }
    if (typeof wikiLegalDialog.showModal === "function") wikiLegalDialog.showModal();
    else wikiLegalDialog.setAttribute("open", "");
  }

  function closeWikiLegalDialog() {
    wikiLegalPending = null;
    if (!wikiLegalDialog) return;
    if (typeof wikiLegalDialog.close === "function") wikiLegalDialog.close();
    else wikiLegalDialog.removeAttribute("open");
  }

  function acceptWikiLegalDialog() {
    saveWikiLegalAccepted();
    var cb = wikiLegalPending;
    wikiLegalPending = null;
    closeWikiLegalDialog();
    if (cb) cb();
  }

  function requestWikiMode(onAccept, src) {
    src = src || "wiki";
    if (src === "auto" && !canUseAutomation()) {
      if (!isExclusiveActive()) {
        showToast("Nexus-Auto Limit heute (" + PLAN_LIMITS.free.nexus + "/Tag) — Nutzung pruefen oder Exclusive", { duration: 3800 });
      } else {
        openExclusiveCheckout("trial", { reason: "fusion" });
      }
      return;
    }
    if (!canUseWikiApi() || !NocoWiki.isOnline()) {
      showToast("Wiki-API braucht Internet.", { duration: 3200 });
      return;
    }
    if (!isExclusiveActive() && !canUseWikiToday()) {
      showToast("Wiki-Limit heute erreicht (" + WIKI_FREE_DAILY + "/" + WIKI_FREE_DAILY + ") — NOCO-Wissen oder Exclusive.", { duration: 3600 });
      return;
    }
    if (loadWikiLegalAccepted()) {
      if (onAccept) onAccept();
      return;
    }
    openWikiLegalDialog(onAccept);
  }

  function applyKnowledgeSource(src) {
    settings.knowledgeSource = src === "wiki" ? "wiki" : (src === "auto" ? "auto" : "noco");
    saveSettings();
    updateKnowledgeSourceUI();
    updateInputModeHint();
    document.body.classList.toggle("wiki-source-active", settings.knowledgeSource === "wiki");
    document.body.classList.toggle("fusion-source-active", settings.knowledgeSource === "auto");
  }

  function setKnowledgeSource(src, opts) {
    opts = opts || {};
    if (src === "wiki" || src === "auto") {
      requestWikiMode(function () {
        applyKnowledgeSource(src);
        if (src === "auto") {
          showToast("Nexus-Auto aktiv — " + (isExclusiveActive() ? "unbegrenzt" : "1×/Tag Free"), { duration: 3400 });
        } else if (isExclusiveActive()) {
          showToast("Wiki-Modus — nur Wikipedia (kein Vault)", { duration: 3000 });
        } else {
          showToast("Wiki-Modus — nur Wikipedia · " + WIKI_FREE_DAILY + "/Tag", { duration: 3400 });
        }
      }, src);
      return;
    }
    applyKnowledgeSource("noco");
    showToast("Offline-Wissen — nur Vault", { duration: 2800 });
  }

  function updateKnowledgeSourceUI() {
    var ks = getKnowledgeSource();
    var groups = [knowledgeSourceSwitch, knowledgeSourceMobile];
    var g, pills, i, pillKs, on, locked;
    for (g = 0; g < groups.length; g++) {
      if (!groups[g]) continue;
      pills = groups[g].querySelectorAll(".ks-pill");
      for (i = 0; i < pills.length; i++) {
        pillKs = pills[i].getAttribute("data-ks");
        on = pillKs === ks;
        locked = pillKs === "auto" && !canUseAutomation();
        pills[i].classList.toggle("is-active", on);
        pills[i].classList.toggle("is-locked", locked);
        pills[i].setAttribute("aria-pressed", on ? "true" : "false");
      }
    }
    if (knowledgeSourceSwitch) knowledgeSourceSwitch.classList.toggle("is-fusion-routing", ks === "auto");
    if (knowledgeSourceMobile) knowledgeSourceMobile.classList.toggle("is-fusion-routing", ks === "auto");
    if (!canUseAutomation() && ks === "auto") applyKnowledgeSource("noco");
  }

  function bindKnowledgeSourceSwitch(el) {
    if (!el) return;
    el.addEventListener("click", function (e) {
      var pill = e.target.closest(".ks-pill");
      if (!pill) return;
      var ks = pill.getAttribute("data-ks");
      if (!ks || ks === getKnowledgeSource()) return;
      if (ks === "auto" && !canUseAutomation()) {
        if (!isExclusiveActive()) {
          showToast("Nexus-Auto Limit heute — 1×/Tag", { duration: 3400 });
          openUsageDialog();
        } else {
          openExclusiveCheckout("trial", { reason: "fusion" });
        }
        return;
      }
      setKnowledgeSource(ks === "noco" ? "noco" : ks);
    });
  }

  function shouldSkipWikiForQuery(text, routeInfo) {
    if (!text || typeof NocoBrain === "undefined") return true;
    if (isCreativeOrToolPayload(text)) return true;
    if (NocoBrain.isSmalltalkFast && NocoBrain.isSmalltalkFast(text)) return true;
    if (!NocoBrain.isSmalltalkFast && NocoBrain.isSmalltalkQuery && NocoBrain.isSmalltalkQuery(text)) return true;
    if (NocoBrain.isNocoBrandedQuery && NocoBrain.isNocoBrandedQuery(text)) return true;
    if (NocoBrain.isCapabilitiesQuery && NocoBrain.isCapabilitiesQuery(text)) return true;
    if (NocoBrain.isBriefQuery && NocoBrain.isBriefQuery(text)) return true;
    if (NocoBrain.isChatRecallQuery && NocoBrain.isChatRecallQuery(text)) return true;
    if (routeInfo && routeInfo.route === "wiki" && routeInfo.wikiQuery) return false;
    if (NocoBrain.extractWikiQuery) {
      var wq = NocoBrain.extractWikiQuery(text);
      if (!wq) return true;
    }
    return false;
  }

  function thinkVault(text, brainOpts) {
    return NocoBrain.think(text, brainOpts);
  }

  function fetchWikiResult(wikiQuery, originalText, routeInfo) {
    var q = String(wikiQuery || originalText || "").trim();
    if (!q) return Promise.reject(new Error("empty"));
    return NocoWiki.fetchAbstract(q).then(function (data) {
      var block = NocoWiki.formatAnswer(data, {
        query: q,
        route: routeInfo && routeInfo.reason ? routeInfo.reason : "wiki"
      });
      return {
        text: NocoWiki.formatAnswerText ? NocoWiki.formatAnswerText(block) : block.main,
        wikiSource: block,
        confidence: 88,
        topic: "Wikipedia · " + data.title,
        variants: 1,
        wikiQuery: q
      };
    });
  }

  function finishAiResponse(text, result, opts, start) {
    opts = opts || {};
    setTyping(false);
    incrementQuota();
    clearPreviousRelated();
    var related = (isSuggestionsOn("messages") && NocoBrain.getRelatedQuestions)
      ? NocoBrain.getRelatedQuestions(text, result.topic) : [];
    appendMessage("ai", result.text, {
      animate: true,
      variant: opts.variant || 0,
      topic: result.topic,
      related: related.slice(0, 2),
      brief: result.brief || null,
      wikiSource: result.wikiSource || null
    }).then(function () {
      if (result.brief) openBriefDialog(result.brief);
      if (latencyVal) latencyVal.textContent = Math.round(performance.now() - start) + " ms";
      incrementMsgStats();
      requestAnimationFrame(function () { updateModelUI(); });
    });
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
    var usedPro = consumeProForSend();
    setTyping(true);
    var start = performance.now();
    var tier = getEffectiveModelTier();
    if (usedPro) tier = getBrand().models.pro
      ? { id: "pro", name: getBrand().models.pro.name, tagline: getBrand().models.pro.tagline }
      : tier;

    var brainOpts = {
      variant: opts.variant || 0,
      regenerate: !!opts.regenerate,
      previousAnswers: opts.previousAnswers || [],
      modelTier: tier.id,
      proMode: usedPro,
      chatHistory: getChatHistoryForBrain()
    };

    var ks = getKnowledgeSource();
    var hasWiki = typeof NocoWiki !== "undefined" && NocoWiki.fetchAbstract;
    var routeInfo = null;
    var nexusMode = ks === "auto";
    var vaultDelay = nexusMode ? getNexusVaultDelay() : (getDelay() + getDelayJitter());
    if (nexusMode && isExclusiveActive()) vaultDelay = Math.min(vaultDelay, isProSelected() ? 30 : 52);
    var wikiQuery = resolveWikiQueryStrict(text);
    var wikiLabel = "Wiki-API 1.1 · Wikipedia wird abgerufen…";
    var routeOpts = { chatHistory: brainOpts.chatHistory, vaultDisabled: !isVaultEnabled() };

    function finishVault() {
      if (!isVaultEnabled()) {
        finishKnowledgeError(
          "**NOCO Vault ist deaktiviert.** Aktiviere Vault (▣) oder wähle **Wiki** / **Nexus-Auto**.",
          opts, start, "NOCO-Wissen"
        );
        return;
      }
      setWikiHudMode(false);
      setTimeout(function () {
        finishAiResponse(text, thinkVault(text, brainOpts), opts, start);
      }, vaultDelay);
    }

    function tryWikiStrict(label, strictMode, presetQuery, altIdx) {
      if (presetQuery && String(presetQuery).trim()) {
        wikiQuery = String(presetQuery).trim();
      } else {
        wikiQuery = resolveWikiQueryStrict(text);
      }
      if (!wikiQuery || !String(wikiQuery).trim()) {
        if (strictMode) {
          finishKnowledgeError(
            "**Wiki-Modus:** Kein Suchbegriff erkannt. Formuliere z. B. *Was ist Einstein?* oder *Berlin*.",
            opts, start, "Wiki-API 1.1"
          );
        } else if (nexusMode && routeInfo && NocoBrain.isNexusVaultRoute && NocoBrain.isNexusVaultRoute(routeInfo)) {
          finishVault();
        } else if (nexusMode) {
          finishKnowledgeError(
            "**Nexus-Auto:** Kein Wikipedia-Suchbegriff erkannt. Formuliere z. B. *Was ist Einstein?*",
            opts, start, "Nexus-Auto"
          );
        } else {
          finishVault();
        }
        return;
      }
      if (!hasWiki || !NocoWiki.isOnline()) {
        if (strictMode) {
          finishKnowledgeError(
            "**Wiki-Modus:** Keine Verbindung zu Wikipedia. Internet prüfen — es wird **nicht** auf NOCO Vault zurückgegriffen.",
            opts, start, "Wiki-API 1.1"
          );
        } else if (nexusMode && routeInfo && routeInfo.route === "wiki") {
          finishKnowledgeError(
            "**Nexus-Auto:** Wikipedia offline — **kein** Vault-Fallback bei Wiki-Route.",
            opts, start, "Nexus-Auto"
          );
        } else {
          showToast("Wiki offline — NOCO-Wissen wird genutzt.", { duration: 2800 });
          finishVault();
        }
        return;
      }
      if (!canUseWikiToday()) {
        if (strictMode) {
          finishKnowledgeError(
            "**Wiki-Limit heute erreicht** (" + getPlanLimits().wiki + "/" + getPlanLimits().wiki + "). Morgen 0:00 oder **Exclusive** — **kein** Vault-Fallback im Wiki-Modus.",
            opts, start, "Wiki-API 1.1"
          );
        } else if (nexusMode && routeInfo && routeInfo.route === "wiki") {
          finishKnowledgeError(
            "**Nexus-Auto:** Wiki-Limit heute erreicht — Vault-Fallback nur bei Vault-Route.",
            opts, start, "Nexus-Auto"
          );
        } else {
          showToast("Wiki-Limit heute — NOCO-Wissen antwortet.", { duration: 3200 });
          finishVault();
        }
        return;
      }
      var wikiCached = NocoWiki.peekCache && NocoWiki.peekCache(wikiQuery);
      var wikiDelay = getNexusWikiFetchDelay(wikiCached);
      setTyping(true, label || wikiLabel);
      setWikiHudMode(true, label || wikiLabel);
      fetchWikiResult(wikiQuery, text, routeInfo).then(function (wikiResult) {
        setWikiHudMode(false);
        incrementWikiQuota();
        setTimeout(function () {
          finishAiResponse(text, wikiResult, opts, start);
        }, wikiDelay);
      }).catch(function () {
        setWikiHudMode(false);
        if (!strictMode && nexusMode) {
          var alts = getNexusWikiAltQueries(wikiQuery, text);
          var nextIdx = altIdx || 0;
          if (nextIdx < alts.length) {
            tryWikiStrict(label, false, alts[nextIdx], nextIdx + 1);
            return;
          }
          if (routeInfo && routeInfo.route === "wiki") {
            finishKnowledgeError(
              "**Nexus-Auto:** Kein Wikipedia-Treffer für „" + wikiQuery + "“. Kürzeren Begriff versuchen — **ohne** schwachen Vault-Fallback.",
              opts, start, "Nexus-Auto"
            );
            return;
          }
        }
        if (strictMode) {
          finishKnowledgeError(
            "**Wiki-Modus:** Kein Wikipedia-Treffer für „" + wikiQuery + "“. Versuche einen kürzeren Begriff — **ohne** Vault-Fallback.",
            opts, start, "Wiki-API 1.1"
          );
        } else if (nexusMode && routeInfo && NocoBrain.isNexusVaultRoute && NocoBrain.isNexusVaultRoute(routeInfo)) {
          finishVault();
        } else if (nexusMode) {
          finishKnowledgeError(
            "**Nexus-Auto:** Wikipedia ohne Treffer für „" + wikiQuery + "“.",
            opts, start, "Nexus-Auto"
          );
        } else {
          showToast("Wikipedia ohne Treffer — NOCO Vault antwortet.", { duration: 2800 });
          finishVault();
        }
      });
    }

    if (ks === "noco") {
      finishVault();
      return;
    }

    if (ks === "wiki") {
      wikiLabel = "Wiki-API 1.1 · „" + wikiQuery + "“…";
      tryWikiStrict(wikiLabel, true);
      return;
    }

    if (ks === "auto" && NocoBrain.resolveKnowledgeRoute) {
      if (!isExclusiveActive()) {
        if (loadNexusQuota().used >= PLAN_LIMITS.free.nexus) {
          finishKnowledgeError(
            "**Nexus-Auto Limit heute erreicht** (" + PLAN_LIMITS.free.nexus + "/" + PLAN_LIMITS.free.nexus + "). Morgen 0:00 oder **NOCO Exclusive**.",
            opts, start, "Nexus-Auto"
          );
          return;
        }
        incrementNexusQuota();
      }
      routeInfo = NocoBrain.resolveKnowledgeRoute(text, routeOpts);
      if (isCreativeOrToolPayload(text)) {
        finishVault();
        return;
      }
      if (routeInfo.route === "wiki") {
        wikiQuery = routeInfo.wikiQuery || resolveWikiQueryStrict(text);
        if (wikiQuery) {
          wikiLabel = getNexusWikiLabel(routeInfo, wikiQuery);
          tryWikiStrict(wikiLabel, false, wikiQuery);
          return;
        }
      }
      if (NocoBrain.isNexusVaultRoute && NocoBrain.isNexusVaultRoute(routeInfo)) {
        finishVault();
        return;
      }
      wikiQuery = resolveWikiQueryStrict(text);
      if (wikiQuery) {
        wikiLabel = getNexusWikiLabel(routeInfo, wikiQuery);
        tryWikiStrict(wikiLabel, false, wikiQuery);
        return;
      }
      if (routeInfo.confidence >= 70 && routeInfo.route === "vault") {
        finishVault();
        return;
      }
      finishKnowledgeError(
        "**Nexus-Auto:** Konnte die Frage nicht sicher zuordnen. Formuliere z. B. *Was ist Photosynthese?* oder frage nach **NOCO**.",
        opts, start, "Nexus-Auto"
      );
      return;
    }

    finishVault();
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
      var tier = getEffectiveModelTier();
      var q = loadQuota();
      var left = Math.max(0, 20 - q.used);
      if (isExclusiveActive()) {
        appendSystemMessage(
          "**Plan:** NOCO Exclusive\n**Modell:** " + tier.name +
          (isProSelected() ? "\n**Pro 1.0:** Ultra Rush " + PRO_SPEED_MS + " ms" : "\n**Rush:** ~90 ms") +
          "\n**Nachrichten:** Unbegrenzt\n\n*Pro 1.0: unten rechts vor jeder Eingabe aktivieren*"
        );
      } else {
        appendSystemMessage(
          "**Plan:** NOCO Access Free\n**Modell:** " + tier.name +
          "\n**Heute:** " + left + "/" + FREE_MSG_DAILY + " · Prism bis Msg " + Math.ceil(FREE_MSG_DAILY / 2) + ", dann Spark\n**Exclusive:** Flux + Rush + Lens + Render"
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
    if (cmd === "/agent") {
      setImageMode(false);
      setSummaryMode(false);
      setInsightMode(false);
      setAgentMode(true);
      if (arg) {
        runAgentJob(arg);
      } else if (chatInput) {
        chatInput.focus();
        showToast("Agent aktiv — beschreibe deinen Auftrag unten");
      }
      return true;
    }
    if (cmd === "/inside" || cmd === "/insight") {
      setImageMode(false);
      setSummaryMode(false);
      setAgentMode(false);
      setMotionMode(false);
      setInsightMode(true);
      if (chatInput) {
        chatInput.focus();
        showToast("NOCO Inside — Datei links oder Text einfügen");
      }
      return true;
    }
    if (cmd === "/motion") {
      setImageMode(false);
      setSummaryMode(false);
      setAgentMode(false);
      setInsightMode(false);
      setMotionMode(true);
      if (arg) {
        handleMotionRequest(arg);
      } else if (chatInput) {
        chatInput.focus();
        showToast("NOCO Motion — Motiv-Begriff eingeben");
      }
      return true;
    }
    if (cmd === "/summary") {
      setAgentMode(false);
      setImageMode(false);
      setSummaryMode(true);
      if (chatInput) {
        chatInput.focus();
        showToast("Summary Mode — langen Text einfuegen");
      }
      return true;
    }
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
    if (cmd === "/wiki") {
      if (!canUseWikiApi()) {
        openExclusiveCheckout("trial", { reason: "wiki" });
        return true;
      }
      setKnowledgeSource("wiki");
      return true;
    }
    if (cmd === "/vault") {
      setKnowledgeSource("noco");
      appendSystemMessage(
        "**Wissensquelle:** **NOCO-Wissen** (Standard)\n\n" +
        "Lokale **NOCO Vault** — fuer NOCO OS, Alltag, Schule & Features.\n" +
        "Empfohlen & offline verfuegbar.\n\n" +
        "*Wiki-API 1.0 nur bei Bedarf oben umschalten (Internet + Wikipedia-Lizenz).*"
      );
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
      if (brief.related && brief.related.length && isSuggestionsOn("messages")) {
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

  function getLastAiMessageIndex() {
    var messages = getMessages();
    var i;
    for (i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === "ai" && messages[i].type !== "image") return i;
    }
    return -1;
  }

  function handleAnswerAdjust(mode, sourceIndex) {
    if (isTyping || agentRunning || !mode) return;
    if (!canSendMessage()) {
      showToast("Tageslimit erreicht");
      openExclusiveDialog();
      return;
    }
    var messages = getMessages();
    var idx = sourceIndex >= 0 ? sourceIndex : getLastAiMessageIndex();
    var aiMsg = messages[idx];
    if (!aiMsg || aiMsg.role !== "ai" || aiMsg.type === "image") {
      showToast("Keine Antwort zum Anpassen");
      return;
    }
    if (!NocoBrain.adjustAnswerText) {
      showToast("Anpassen nicht verfuegbar");
      return;
    }
    var labels = { longer: "Bitte laenger", shorter: "Bitte kuerzer", ontopic: "Mehr zum Thema" };
    var topics = { longer: "Ausfuehrlich", shorter: "Kurz", ontopic: "Fokus" };
    appendMessage("user", labels[mode] || "Anpassen");
    setTyping(true);
    setTimeout(function () {
      var adjusted = NocoBrain.adjustAnswerText(aiMsg.text, mode);
      setTyping(false);
      incrementQuota();
      appendMessage("ai", adjusted, { animate: true, topic: topics[mode] || "Angepasst", related: [] });
      var toasts = { longer: "Ausfuehrlichere Version", shorter: "3 Kernpunkte", ontopic: "Fokus aufs Thema" };
      showToast(toasts[mode] || "Angepasst");
    }, getDelay() * 0.45);
  }

  function resetAgentConsole() {
    if (agentSteps) agentSteps.innerHTML = "";
    if (agentInterim) agentInterim.innerHTML = "";
    if (agentProgressFill) agentProgressFill.style.width = "0%";
    if (agentConsole) agentConsole.hidden = true;
    if (agentConsoleTitle) agentConsoleTitle.textContent = "Agent arbeitet…";
  }

  function renderAgentSteps(blocks) {
    if (!agentSteps) return;
    agentSteps.innerHTML = "";
    (blocks || []).forEach(function (block, i) {
      var li = document.createElement("li");
      li.className = "agent-step";
      li.setAttribute("data-step", i);
      li.innerHTML = '<span class="agent-step-dot"></span><span>' + escapeHtml(block.title || block.id) + "</span>";
      agentSteps.appendChild(li);
    });
  }

  function setAgentStepActive(index) {
    if (!agentSteps) return;
    agentSteps.querySelectorAll(".agent-step").forEach(function (el, i) {
      el.classList.toggle("is-active", i === index);
      el.classList.toggle("is-done", i < index);
    });
  }

  function showAgentWorkStrip(phase) {
    if (!agentWorkStrip) return;
    agentWorkStrip.hidden = false;
    var order = { analyze: 0, create: 1, optimize: 2, finalize: 3 };
    var phaseOrder = order[phase] != null ? order[phase] : -1;
    agentWorkStrip.querySelectorAll(".aws-phase").forEach(function (el) {
      var p = el.getAttribute("data-aws-phase");
      var po = order[p] != null ? order[p] : 99;
      el.classList.toggle("is-active", p === phase);
      el.classList.toggle("is-done", po < phaseOrder);
    });
  }

  function hideAgentWorkStrip() {
    if (agentWorkStrip) agentWorkStrip.hidden = true;
  }

  function removeAgentLivePanel() {
    if (agentLiveRoot && agentLiveRoot.parentNode) agentLiveRoot.parentNode.removeChild(agentLiveRoot);
    agentLiveRoot = null;
    document.body.classList.remove("is-agent-running");
    hideAgentWorkStrip();
  }

  function scrollAgentLiveIntoView(el) {
    if (!el || !chatMessages) return;
    requestAnimationFrame(function () {
      var chatRect = chatMessages.getBoundingClientRect();
      var elRect = el.getBoundingClientRect();
      var elCenter = elRect.top - chatRect.top + chatMessages.scrollTop + elRect.height * 0.5;
      chatMessages.scrollTop = Math.max(0, elCenter - chatRect.height * 0.42);
    });
  }

  function createAgentLivePanel(task, goal, blocks) {
    removeAgentLivePanel();
    hideWelcome();
    var wrap = document.createElement("div");
    wrap.className = "message system agent-live-msg";
    var body = document.createElement("div");
    body.className = "message-body";
    var card = document.createElement("div");
    card.className = "agent-chat-live";
    card.innerHTML =
      '<div class="agent-chat-live-glow" aria-hidden="true"></div>' +
      '<div class="agent-scan-line" aria-hidden="true"></div>' +
      '<header class="agent-chat-live-head">' +
        '<span class="agent-chat-live-icon">' + (task.icon || "⚡") + "</span>" +
        "<div><strong class=\"agent-chat-live-title\">NOCO Agent</strong>" +
        '<span class="agent-chat-live-sub">' + escapeHtml(task.title) + "</span></div>" +
        '<span class="agent-chat-live-pct" data-agent-pct>0%</span>' +
      "</header>" +
      '<div class="agent-live-controls">' +
        '<button type="button" class="agent-ctrl-btn agent-ctrl-stop" data-agent-stop title="Agent stoppen">⛔ Stop</button>' +
        '<button type="button" class="agent-ctrl-btn" data-agent-skip title="Zu Ergebnis springen">⚡ Skip</button>' +
        '<button type="button" class="agent-ctrl-btn" data-agent-plan title="Vollen Plan zeigen">🧠 Plan</button>' +
        '<button type="button" class="agent-ctrl-btn" data-agent-simplify hidden title="Ergebnis vereinfachen">📉 Simplify</button>' +
      "</div>" +
      '<p class="agent-live-status is-pulse" data-agent-status>🧠 Agent gestartet…</p>' +
      '<div class="agent-block-feed" data-agent-feed></div>' +
      '<div class="agent-tool-feed" data-agent-tools></div>' +
      '<div class="agent-chat-live-bar"><span data-agent-bar></span></div>' +
      '<p class="agent-chat-live-footer" data-agent-footer hidden>Nexus-Auto-Routing abgeschlossen</p>';
    body.appendChild(card);
    wrap.appendChild(body);
    chatMessages.appendChild(wrap);
    agentLiveRoot = wrap;

    card.querySelector("[data-agent-stop]").addEventListener("click", stopAgentJob);
    card.querySelector("[data-agent-skip]").addEventListener("click", skipAgentJob);
    card.querySelector("[data-agent-plan]").addEventListener("click", showAgentFullPlan);
    card.querySelector("[data-agent-simplify]").addEventListener("click", simplifyAgentResult);

    document.body.classList.add("is-agent-running");
    showAgentWorkStrip("analyze");
    scrollAgentLiveIntoView(wrap);
    return card;
  }

  function getAgentLiveCard() {
    return agentLiveRoot ? agentLiveRoot.querySelector(".agent-chat-live") : null;
  }

  function ensureAgentBlockEl(card, block) {
    var feed = card.querySelector("[data-agent-feed]");
    var id = "block-" + block.id;
    var existing = feed.querySelector('[data-block-id="' + block.id + '"]');
    if (existing) return existing;
    var el = document.createElement("div");
    el.className = "agent-action-block is-entering";
    el.setAttribute("data-block-id", block.id);
    el.innerHTML =
      '<header class="aab-head">' +
        '<span class="aab-icon">' + block.icon + "</span>" +
        '<span class="aab-title">' + escapeHtml(block.title) + "</span>" +
        '<span class="aab-step" data-aab-step></span>' +
      "</header>" +
      '<ul class="aab-ticks"></ul>';
    feed.appendChild(el);
    requestAnimationFrame(function () { el.classList.remove("is-entering"); });
    scrollAgentLiveIntoView(agentLiveRoot);
    return el;
  }

  function appendAgentTool(card, tool) {
    var feed = card.querySelector("[data-agent-tools]");
    if (!feed) return;
    var pill = document.createElement("div");
    pill.className = "agent-tool-pill is-entering";
    pill.innerHTML = '<span class="atp-icon">🧰</span><span class="atp-name">Tool: ' + escapeHtml(tool.name) + "</span>" +
      '<span class="atp-action">' + escapeHtml(tool.action) + "</span>";
    feed.appendChild(pill);
    requestAnimationFrame(function () { pill.classList.remove("is-entering"); });
    if (feed.children.length > 4) feed.removeChild(feed.firstChild);
  }

  function handleAgentEvent(info) {
    var card = getAgentLiveCard();
    if (!card) return;
    var ev = info.event;
    var block = ev.block;
    var progress = Math.round((info.progress || 0) * 100);
    var pct = card.querySelector("[data-agent-pct]");
    var bar = card.querySelector("[data-agent-bar]");
    var status = card.querySelector("[data-agent-status]");

    if (pct) pct.textContent = progress + "%";
    if (bar) bar.style.width = progress + "%";
    if (agentProgressFill) agentProgressFill.style.width = progress + "%";

    if (ev.type === "block_start" && block) {
      showAgentWorkStrip(block.workPhase || "analyze");
      setAgentStepActive(ev.blockIndex);
      var blockEl = ensureAgentBlockEl(card, block);
      var stepLbl = blockEl.querySelector("[data-aab-step]");
      if (stepLbl) stepLbl.textContent = "Schritt " + (ev.blockIndex + 1) + "/" + ev.blockTotal;
      if (status) status.textContent = block.icon + " " + block.title + "…";
      if (typingLabel) typingLabel.textContent = block.title + "…";
    }

    if (ev.type === "tool" && ev.tool) {
      appendAgentTool(card, ev.tool);
      if (status) status.textContent = "🧰 Tool: " + ev.tool.name + " — " + ev.tool.action;
      if (typingLabel) typingLabel.textContent = "Tool: " + ev.tool.name;
    }

    if (ev.type === "tick" && block) {
      var blockEl = ensureAgentBlockEl(card, block);
      var ul = blockEl.querySelector(".aab-ticks");
      var li = document.createElement("li");
      li.className = "aab-tick is-entering";
      li.textContent = "→ " + ev.text;
      ul.appendChild(li);
      requestAnimationFrame(function () { li.classList.remove("is-entering"); });
      if (status) status.textContent = "→ " + ev.text;
      if (typingLabel) typingLabel.textContent = ev.text;
      scrollAgentLiveIntoView(agentLiveRoot);
    }

    if (ev.type === "block_done" && block) {
      var doneEl = card.querySelector('[data-block-id="' + block.id + '"]');
      if (doneEl) doneEl.classList.add("is-done");
    }
  }

  function finishAgentLivePanel() {
    var card = getAgentLiveCard();
    if (!card) return;
    card.classList.add("is-done");
    var pct = card.querySelector("[data-agent-pct]");
    var bar = card.querySelector("[data-agent-bar]");
    var footer = card.querySelector("[data-agent-footer]");
    var status = card.querySelector("[data-agent-status]");
    var simplifyBtn = card.querySelector("[data-agent-simplify]");
    if (pct) pct.textContent = "100%";
    if (bar) bar.style.width = "100%";
    if (status) {
      status.textContent = "🏁 Finales Ergebnis wird gestreamt…";
      status.classList.remove("is-pulse");
    }
    if (footer) footer.hidden = false;
    if (simplifyBtn) simplifyBtn.hidden = false;
    showAgentWorkStrip("finalize");
    card.querySelectorAll(".agent-action-block").forEach(function (el) { el.classList.add("is-done"); });
  }

  function stopAgentJob() {
    if (!agentRunning) return;
    if (agentSession && !agentSession.cancelled) {
      agentSession.stop();
      return;
    }
  }

  function finalizeAgentCancel() {
    agentRunning = false;
    agentSession = null;
    setTyping(false);
    if (agentRunBtn) agentRunBtn.disabled = false;
    var card = getAgentLiveCard();
    if (card) {
      card.classList.add("is-stopped");
      var status = card.querySelector("[data-agent-status]");
      if (status) status.textContent = "⛔ Agent gestoppt";
    }
    hideAgentWorkStrip();
    document.body.classList.remove("is-agent-running");
    showToast("Agent gestoppt");
  }

  function skipAgentJob() {
    if (!agentRunning || !agentSession) return;
    agentSession.skip();
    showToast("Springe zum Ergebnis…");
  }

  function showAgentFullPlan() {
    var plan = (agentSession && agentSession.fullPlan) || agentLastFullPlan;
    if (!plan) {
      showToast("Kein Plan verfuegbar");
      return;
    }
    appendSystemMessage(plan);
    scrollToBottom(true);
  }

  function simplifyAgentResult() {
    if (!agentLastResult || !NocoBrain.adjustAnswerText) return;
    var shortText = NocoBrain.adjustAnswerText(agentLastResult, "shorter");
    appendMessage("ai", shortText, { animate: true, topic: "Kurz", related: [], agentRun: true });
    showToast("Vereinfachte Version");
  }

  function streamAgentFinalText(text, opts) {
    opts = opts || {};
    var streamDelay = opts.pro ? 110 : 480;
    return new Promise(function (resolve) {
      hideWelcome();
      var chat = getActiveChat();
      if (!chat) { resolve(); return; }

      var msg = {
        id: uid(),
        role: "ai",
        text: "",
        time: Date.now(),
        feedback: null,
        agentRun: true
      };
      chat.messages.push(msg);
      chat.updated = Date.now();
      saveChats();
      var idx = chat.messages.length - 1;
      var built = upsertMessageEl(msg, idx);
      if (!built) { resolve(); return; }
      var bubble = built.el.querySelector(".message-bubble");
      setTyping(true);
      if (typingLabel) typingLabel.textContent = "Ergebnis wird gestreamt…";

      var parts = String(text || "").split(/\n\n+/).filter(function (p) { return p.trim(); });
      var pi = 0;
      var builtText = "";

      function pushPart() {
        if (pi >= parts.length) {
          msg.text = text;
          saveChats();
          bubble.classList.remove("message-writing");
          bubble.innerHTML = renderAiHtml(text);
          var badge = document.createElement("span");
          badge.className = "agent-badge";
          badge.textContent = "NOCO Agent";
          bubble.insertBefore(badge, bubble.firstChild);
          setTyping(false);
          if (typingLabel) typingLabel.textContent = "NOCO AI denkt…";
          scrollToBottom(true);
          ensureChatDomSynced();
          resolve();
          return;
        }
        builtText += (pi > 0 ? "\n\n" : "") + parts[pi];
        bubble.classList.add("message-writing");
        bubble.innerHTML = renderAiHtml(builtText) + '<span class="write-caret" aria-hidden="true"></span>';
        pi++;
        scrollToBottom(true);
        setTimeout(pushPart, streamDelay);
      }
      setTimeout(pushPart, opts.pro ? 80 : 320);
    });
  }

  function runAgentJob(promptText, opts) {
    opts = opts || {};
    if (typeof NocoAgent === "undefined" || agentRunning) return;
    promptText = (promptText || "").trim();
    if (!promptText) {
      showToast("Beschreibe deinen Agent-Auftrag");
      return;
    }
    if (!canSendMessage()) {
      showToast("Tageslimit erreicht");
      openExclusiveDialog();
      return;
    }
    if (isChatImageRendering()) {
      showToast("NOCO Render laeuft — bitte warten");
      return;
    }

    var usedPro = consumeProForSend();
    agentRunning = true;
    agentLastResult = "";
    var liveCard = null;
    switchView("chat");
    if (!opts.skipUserAppend) appendMessage("user", "Agent: " + promptText);

    agentSession = NocoAgent.runTask(promptText, {
      totalMs: usedPro ? 10000 : (NocoAgent.TOTAL_MS || 60000),
      onStart: function (task, goal, blocks, fullPlan) {
        agentLastFullPlan = fullPlan || "";
        if (agentSession) agentSession.fullPlan = fullPlan;
        renderAgentSteps(blocks);
        setTyping(true);
        if (typingLabel) typingLabel.textContent = usedPro ? "NOCO Agent Pro…" : "NOCO Agent gestartet…";
        showToast(usedPro ? "Agent Pro — Ultra Rush" : "Agent arbeitet — Live Execution", { duration: 2800 });
        liveCard = createAgentLivePanel(task, goal, blocks);
      },
      onEvent: function (info) {
        handleAgentEvent(info);
      },
      onCancel: function () {
        finalizeAgentCancel();
      },
      onDone: function (result) {
        var finalText = result.text;
        if (result.useBrain && typeof NocoBrain !== "undefined") {
          var brainFn = NocoBrain.composeAgentDeliverable || NocoBrain.think;
          var brain = brainFn(promptText, {
            modelTier: usedPro ? "pro" : "flux",
            agentMode: true,
            proMode: usedPro,
            chatHistory: getChatHistoryForBrain(),
            goal: result.goal,
            agentTaskType: result.task.id
          });
          finalText = brain.text;
        }
        agentLastResult = finalText;
        agentLastFullPlan = result.fullPlan || agentLastFullPlan;
        setAgentStepActive((result.blocks || []).length);
        finishAgentLivePanel();
        incrementQuota();
        streamAgentFinalText(finalText, { topic: "NOCO Agent", pro: usedPro }).then(function () {
          agentRunning = false;
          agentSession = null;
          showToast("Agent fertig — " + result.task.title, { rainbow: true, duration: 3200 });

          if (result.imagePrompt && canGenerateImage()) {
            setTimeout(function () {
              var card = getAgentLiveCard();
              var status = card && card.querySelector("[data-agent-status]");
              if (status) status.textContent = "🎨 Tool: Bildgenerator — Logo wird gerendert…";
              appendAgentTool(card, { name: "Bildgenerator", action: "Logo-Render gestartet" });
              handleImageChatRequest(result.imagePrompt, {
                skipUserAppend: true,
                displayText: "Agent-Bild: " + (result.goal || "Motiv"),
                usedPro: false
              });
            }, usedPro ? 300 : 900);
          } else if (result.imagePrompt && !canGenerateImage()) {
            appendSystemMessage("*Tipp:* Fuer Logo/Bild-Render brauchst du **NOCO Exclusive**.");
          }
          setTimeout(hideAgentWorkStrip, 2400);
        });
      }
    });
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
    if (!isFeatureEnabled("glow") || !isSuggestionsOn("input")) {
      hideGlowPrism();
      return;
    }
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
      if (glowPrismChips) glowPrismChips.innerHTML = "";
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
    if (!isSuggestionsOn("input")) {
      hideWriteAssist();
      return;
    }
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

    if (NocoBrain.detectAnswerAdjust && !agentModeActive && text.charAt(0) !== "/") {
      var adjustMode = NocoBrain.detectAnswerAdjust(text);
      if (adjustMode && getLastAiMessageIndex() >= 0) {
        chatInput.value = "";
        autoResizeInput();
        handleAnswerAdjust(adjustMode);
        return;
      }
    }

    if (imageModeActive && text.charAt(0) !== "/") {
      if (!canSendMessage()) {
        showToast("Tageslimit " + FREE_MSG_DAILY + "/" + FREE_MSG_DAILY + " — Exclusive oder Reset 0:00.");
        openExclusiveDialog();
        return;
      }
      if (!canGenerateImage()) {
        showToast("Render-Limit heute — Exclusive fuer unbegrenzt.");
        openExclusiveDialog();
        return;
      }
      var imgQueryEarly = typeof NocoPixel !== "undefined" && NocoPixel.formatImagePrompt
        ? NocoPixel.formatImagePrompt(text)
        : ("Mach ein Bild von " + text);
      handleImageChatRequest(imgQueryEarly, Object.assign({}, opts, { displayText: text }));
      return;
    }

    if (motionModeActive && text.charAt(0) !== "/") {
      handleMotionRequest(text, { displayText: text });
      return;
    }

    if (text.charAt(0) !== "/" && typeof NocoPixel !== "undefined") {
      if (NocoPixel.isMotionRequest && NocoPixel.isMotionRequest(text)) {
        handleMotionRequest(text, { displayText: text });
        return;
      }
      if (NocoPixel.isImageRequest && NocoPixel.isImageRequest(text)) {
        handleImageChatRequest(text, Object.assign({}, opts, { displayText: text }));
        return;
      }
    }

    if (agentModeActive && text.charAt(0) !== "/") {
      if (!canSendMessage()) {
        showToast("Tageslimit erreicht");
        openExclusiveDialog();
        return;
      }
      runAgentJob(text, { skipUserAppend: false });
      chatInput.value = "";
      chatInput.style.height = "auto";
      sendBtn.disabled = true;
      return;
    }

    if (summaryModeActive && text.charAt(0) !== "/") {
      if (!canSendMessage()) {
        showToast("Tageslimit erreicht");
        openExclusiveDialog();
        return;
      }
      var usedProSum = consumeProForSend();
      switchView("chat");
      appendMessage("user", "Summary: " + (text.length > 80 ? text.slice(0, 80) + "…" : text));
      chatInput.value = "";
      chatInput.style.height = "auto";
      sendBtn.disabled = true;
      setTyping(true);
      setTimeout(function () {
        var sumResult = NocoBrain.summarizeText
          ? NocoBrain.summarizeText(text, { modelTier: usedProSum ? "pro" : getModelTier().id, proMode: usedProSum })
          : { text: text.slice(0, 200), topic: "Summary" };
        setTyping(false);
        incrementQuota();
        appendMessage("ai", sumResult.text, { animate: true, topic: "Summary", related: [] });
        showToast("Summary fertig — 5 Stichpunkte");
        setSummaryMode(false);
      }, (usedProSum ? 40 : getDelay()) + getDelayJitter());
      return;
    }

    if (insightModeActive && text.charAt(0) !== "/") {
      if (typeof NocoInsight === "undefined") {
        showToast("NOCO Insight nicht geladen");
        return;
      }
      if (!canSendMessage()) {
        showToast("Tageslimit erreicht");
        openExclusiveDialog();
        return;
      }
      switchView("chat");
      chatInput.value = "";
      chatInput.style.height = "auto";
      sendBtn.disabled = true;

      if (insightCategory === "ask") {
        if (insightPayload) {
          runInsightAnalysis(insightPayload, "ask", text);
        } else {
          var askKind = NocoInsight.guessFileKind("eingabe.txt", "", text);
          insightPayload = { kind: askKind, name: "Eingabe", text: text };
          updateInsightFileBadge("Eingabe");
          runInsightAnalysis(insightPayload, askKind === "code" ? "code" : "document");
        }
        return;
      }

      if (insightCategory === "image" && !insightPayload) {
        sendBtn.disabled = false;
        chatFlow = { kind: "inside-needs-file" };
        askInChat(
          "**Bildanalyse braucht eine Datei.**\n\nLade ein Bild hoch oder analysiere Text stattdessen:",
          [
            { id: "inside-file-hint", label: "Bild waehlen", primary: true },
            { id: "inside-paste", label: "Text einfuegen" }
          ],
          { topic: "Inside" }
        );
        return;
      }

      var pasteKind = NocoInsight.guessFileKind("eingabe.txt", "", text);
      var pastePayload = { kind: pasteKind, name: "Eingabe", text: text };
      insightPayload = pastePayload;
      updateInsightFileBadge("Eingabe");
      runInsightAnalysis(pastePayload, insightCategory);
      return;
    }

    if (typeof NocoPixel !== "undefined" && NocoPixel.isMotionRequest && NocoPixel.isMotionRequest(text)) {
      handleMotionRequest(text, { displayText: text });
      return;
    }

    if (typeof NocoPixel !== "undefined" && NocoPixel.isImageRequest(text)) {
      handleImageChatRequest(text, Object.assign({}, opts, { displayText: text }));
      return;
    }

    var queryText = resolveQueryText(text);
    if (queryText !== text && text.split(/\s+/).filter(Boolean).length <= 4 &&
        !(typeof NocoPixel !== "undefined" && NocoPixel.isImageRequest && NocoPixel.isImageRequest(queryText)) &&
        !(typeof NocoPixel !== "undefined" && NocoPixel.isMotionRequest && NocoPixel.isMotionRequest(queryText))) {
      showToast("Verstanden: " + (queryText.length > 48 ? queryText.slice(0, 48) + "…" : queryText));
    }

    if (typeof NocoPixel !== "undefined" && NocoPixel.isMotionRequest && NocoPixel.isMotionRequest(queryText)) {
      handleMotionRequest(queryText, { displayText: text });
      return;
    }

    if (typeof NocoPixel !== "undefined" && NocoPixel.isImageRequest(queryText)) {
      handleImageChatRequest(queryText, Object.assign({}, opts, { displayText: text }));
      return;
    }

    if (!canSendMessage()) {
      showToast("Tageslimit " + FREE_MSG_DAILY + "/" + FREE_MSG_DAILY + " — Nutzung pruefen oder Exclusive.");
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
    openExclusiveCheckout(planType);
  }

  /* ── Message Actions Delegation ── */

  if (chatMessages) chatMessages.addEventListener("click", function (e) {
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
    var motionCopy = e.target.closest(".chat-motion-copy");
    if (motionCopy) {
      copyChatMotion(motionCopy.getAttribute("data-msg-id"));
      return;
    }
    var motionSave = e.target.closest(".chat-motion-save");
    if (motionSave) {
      saveChatMotion(motionSave.getAttribute("data-msg-id"));
      return;
    }
    var chatActionBtn = e.target.closest("[data-chat-action]");
    if (chatActionBtn) {
      e.preventDefault();
      e.stopPropagation();
      handleChatAction(
        chatActionBtn.getAttribute("data-chat-action"),
        chatActionBtn.getAttribute("data-chat-payload")
      );
      return;
    }

    var imgStudio = e.target.closest(".chat-img-studio");
    if (imgStudio) {
      var studioMsg = getMessageById(imgStudio.getAttribute("data-msg-id"));
      if (studioMsg && studioMsg.image) {
        var studioResult = resolveChatImage(studioMsg);
        if (studioResult && studioResult.prompt) {
          setImageMode(true);
          chatInput.value = studioResult.prompt;
          autoResizeInput();
          sendBtn.disabled = !chatInput.value.trim();
          chatInput.focus();
          showToast("Prompt im Chat — Enter zum Neuzeichnen");
        }
      }
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
    if (opts.instant) {
      exclusiveDialog.classList.remove("is-closing", "is-purchasing");
      exclusiveDialog.close();
      return;
    }
    exclusiveDialog.classList.add("is-closing");
    exclusiveDialog.classList.remove("is-purchasing");
    window.setTimeout(function () {
      exclusiveDialog.classList.remove("is-closing");
      exclusiveDialog.close();
    }, 320);
  }

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
  if (chatAgentBtn) {
    chatAgentBtn.addEventListener("click", function () {
      if (isChatImageRendering()) {
        showToast("NOCO Render laeuft — bitte warten");
        return;
      }
      setImageMode(false);
      setSummaryMode(false);
      setInsightMode(false);
      setMotionMode(false);
      setAgentMode(!agentModeActive);
      if (agentModeActive) {
        showToast("Agent aktiv — frag alles im Eingabefeld");
        if (chatInput) chatInput.focus();
      }
    });
  }

  if (chatInsightBtn) {
    chatInsightBtn.addEventListener("click", function () {
      if (isChatImageRendering()) {
        showToast("NOCO Render laeuft — bitte warten");
        return;
      }
      setMotionMode(false);
      if (insightModeActive) {
        setInsightMode(false);
        if (chatInput) chatInput.focus();
      } else {
        activateInsideModeInChat();
      }
    });
  }

  if (nocoMotionBtn) {
    nocoMotionBtn.addEventListener("click", function () {
      if (isChatImageRendering()) {
        showToast("Render laeuft — bitte warten");
        return;
      }
      if (motionModeActive) {
        setMotionMode(false);
        if (chatInput) chatInput.focus();
      } else {
        activateMotionModeInChat();
      }
    });
  }

  if (motionChips) {
    motionChips.addEventListener("click", function (e) {
      var chip = e.target.closest("[data-motion-fill]");
      if (!chip) return;
      if (!motionModeActive) setMotionMode(true);
      var fill = chip.getAttribute("data-motion-fill");
      var prompt = "Erstelle ein Video von " + fill;
      handleMotionRequest(prompt, { displayText: prompt, skipClarify: true, confirmed: true });
    });
  }

  if (motionTheatreCopy) {
    motionTheatreCopy.addEventListener("click", function () {
      if (lastMotionExportMeta) copyMotionMeta(lastMotionExportMeta);
      else showToast("Noch kein Motion-Render");
    });
  }
  if (motionTheatreSave) {
    motionTheatreSave.addEventListener("click", function () {
      if (lastMotionExportMeta) saveMotionMeta(lastMotionExportMeta);
      else showToast("Noch kein Motion-Render");
    });
  }

  if (insightFileBtn) {
    insightFileBtn.addEventListener("click", function () {
      if (!insightModeActive) setInsightMode(true);
      triggerInsightFilePicker();
    });
  }

  if (insightFileInput) {
    insightFileInput.addEventListener("change", function () {
      var file = insightFileInput.files && insightFileInput.files[0];
      insightFileInput.value = "";
      if (file) handleInsightFile(file);
    });
  }

  if (insightCategories) {
    insightCategories.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-insight-cat]");
      if (!btn) return;
      var cat = btn.getAttribute("data-insight-cat");
      setInsightCategory(cat);
      if (!insightPayload) return;
      if (cat === "ask") {
        if (chatInput) {
          chatInput.focus();
          showToast("Stelle eine Frage zum geladenen Inhalt");
        }
        return;
      }
      if (!canSendMessage()) {
        showToast("Tageslimit erreicht");
        return;
      }
      runInsightAnalysis(insightPayload, cat);
    });
  }

  if (insightVoiceBtn) {
    insightVoiceBtn.addEventListener("click", toggleInsightVoice);
  }

  if (proModeBtn) {
    proModeBtn.addEventListener("click", function () {
      toggleProMode();
    });
  }

  if (knowledgeSourceSwitch) bindKnowledgeSourceSwitch(knowledgeSourceSwitch);
  if (knowledgeSourceMobile) bindKnowledgeSourceSwitch(knowledgeSourceMobile);

  if (wikiLegalAcceptBtn) wikiLegalAcceptBtn.addEventListener("click", acceptWikiLegalDialog);
  if (wikiLegalCancelBtn) {
    wikiLegalCancelBtn.addEventListener("click", function () {
      applyKnowledgeSource("noco");
      closeWikiLegalDialog();
    });
  }
  if (closeWikiLegal) closeWikiLegal.addEventListener("click", closeWikiLegalDialog);

  if (chatImageBtn) {
    chatImageBtn.addEventListener("click", function () {
      setAgentMode(false);
      setSummaryMode(false);
      setInsightMode(false);
      setMotionMode(false);
      if (imageModeActive) {
        setImageMode(false);
        if (chatInput) chatInput.focus();
        return;
      }
      activateImageModeInChat();
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
      activateExclusivePlan(plan);
    });
  });

  var closeExclusiveCheckout = document.getElementById("closeExclusiveCheckout");
  if (closeExclusiveCheckout) closeExclusiveCheckout.addEventListener("click", closeExclusiveCheckoutDialog);
  if (exclusiveCheckoutDialog) {
    exclusiveCheckoutDialog.addEventListener("click", function (e) {
      if (e.target === exclusiveCheckoutDialog) closeExclusiveCheckoutDialog();
    });
  }
  var exCheckoutToPayment = document.getElementById("exCheckoutToPayment");
  if (exCheckoutToPayment) exCheckoutToPayment.addEventListener("click", function () { setCheckoutPanel("payment"); });
  var exCheckoutBackPayment = document.getElementById("exCheckoutBackPayment");
  if (exCheckoutBackPayment) exCheckoutBackPayment.addEventListener("click", function () { setCheckoutPanel("plan"); });
  var exCheckoutToConfirm = document.getElementById("exCheckoutToConfirm");
  if (exCheckoutToConfirm) exCheckoutToConfirm.addEventListener("click", function () {
    updateCheckoutSummaryPay();
    setCheckoutPanel("confirm");
  });
  var exCheckoutBackConfirm = document.getElementById("exCheckoutBackConfirm");
  if (exCheckoutBackConfirm) exCheckoutBackConfirm.addEventListener("click", function () { setCheckoutPanel("payment"); });
  if (exCheckoutAgree) {
    exCheckoutAgree.addEventListener("change", function () {
      if (exCheckoutPayBtn) exCheckoutPayBtn.disabled = !exCheckoutAgree.checked;
    });
  }
  if (exCheckoutPayBtn) exCheckoutPayBtn.addEventListener("click", completeExclusiveCheckout);
  var exCheckoutDoneBtn = document.getElementById("exCheckoutDoneBtn");
  if (exCheckoutDoneBtn) {
    exCheckoutDoneBtn.addEventListener("click", function () {
      closeExclusiveCheckoutDialog();
      if (checkoutState.reason === "wiki" && canUseWikiApi()) {
        setKnowledgeSource("wiki");
      }
      showToast("<strong>Willkommen bei NOCO Exclusive</strong>", { rainbow: true, duration: 3000 });
    });
  }
  document.querySelectorAll(".ex-pay-method").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var method = btn.getAttribute("data-pay-method");
      checkoutState.payMethod = method;
      document.querySelectorAll(".ex-pay-method").forEach(function (m) {
        m.classList.toggle("is-active", m.getAttribute("data-pay-method") === method);
      });
      var cardForm = document.getElementById("exPayCardForm");
      if (cardForm) cardForm.hidden = method !== "card";
      updateCheckoutSummaryPay();
    });
  });
  if (exclusiveManageChangeBtn) {
    exclusiveManageChangeBtn.addEventListener("click", function () {
      if (exclusiveSubscribeBlock) exclusiveSubscribeBlock.hidden = false;
      if (exclusiveManagePanel) exclusiveManagePanel.hidden = true;
    });
  }
  if (exclusiveManageCancelBtn) exclusiveManageCancelBtn.addEventListener("click", cancelExclusiveSubscription);

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
    if (!chatInput) return;
    chatInput.style.height = "auto";
    chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + "px";
    if (sendBtn) sendBtn.disabled = !canSendMessage() || isTyping || !chatInput.value.trim();
    if (commandPalette) {
      commandPalette.hidden = chatInput.value.trim().charAt(0) !== "/";
    }
    hideInputSuggestions();
    renderGlowPrism();
  }

  if (chatInput) {
    chatInput.addEventListener("input", autoResizeInput);
    chatInput.addEventListener("focus", function () {
      setInputFocusState(true);
      hideInputSuggestions();
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
  }
  function setInputFocusState(on) {
    document.body.classList.toggle("input-focused", on);
    if (inputGlass) inputGlass.classList.toggle("is-focused", on);
  }

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
  if (chatForm && chatInput) {
    chatForm.addEventListener("submit", function (e) { e.preventDefault(); sendMessage(chatInput.value); });
  }

  if (promptChips) promptChips.addEventListener("click", function (e) {
    var chip = e.target.closest(".spark-list-item, .chip");
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
    openHubInChat();
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
      activateImageModeInChat();
    });
  }
  var pixelGoChatBtn = document.getElementById("pixelGoChatBtn");
  if (pixelGoChatBtn) {
    pixelGoChatBtn.addEventListener("click", function () {
      if (pixelDialog) pixelDialog.close();
      focusChatImagePrompt();
    });
  }
  if (discoverHintBtn) discoverHintBtn.addEventListener("click", openHubInChat);
  if (discoverHintClose) discoverHintClose.addEventListener("click", markGuideSeen);
  if (nfbClose) nfbClose.addEventListener("click", dismissFeatureBanner);
  var nfdClose = document.getElementById("nfdClose");
  if (nfdClose) nfdClose.addEventListener("click", dismissFeatureBanner);
  var nfdCtaBtn = document.getElementById("nfdCtaBtn");
  if (nfdCtaBtn) nfdCtaBtn.addEventListener("click", dismissFeatureBanner);
  if (nocoFeatureDialog) {
    nocoFeatureDialog.addEventListener("cancel", function (e) { e.preventDefault(); });
    nocoFeatureDialog.addEventListener("click", function (e) {
      if (e.target === nocoFeatureDialog) e.preventDefault();
    });
  }
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

  var sparksMoreBtn = document.getElementById("sparksMoreBtn");
  if (sparksMoreBtn) {
    sparksMoreBtn.addEventListener("click", function () {
      openDiscoverDialog("sparks");
    });
  }
  if (hubOpenDialogBtn) hubOpenDialogBtn.addEventListener("click", openHubInChat);

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
  var sparksRefreshBtn = document.getElementById("sparksRefreshBtn");
  if (sparksRefreshBtn) {
    sparksRefreshBtn.addEventListener("click", function () {
      sparksShuffleSeed += 1;
      renderPromptChips();
      showToast("Neue Sparks-Auswahl", { duration: 1800 });
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

  if (settingsBtn) settingsBtn.addEventListener("click", handleSettingsClick);
  if (closeSettings && settingsDialog) {
    closeSettings.addEventListener("click", function () { settingsDialog.close(); });
    settingsDialog.addEventListener("click", function (e) { if (e.target === settingsDialog) settingsDialog.close(); });
  }

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
  if (vaultEnabledToggle) vaultEnabledToggle.addEventListener("change", function () {
    settings.vaultEnabled = vaultEnabledToggle.checked;
    saveSettings();
    applySettings();
  });
  if (suggestionsMessagesToggle) suggestionsMessagesToggle.addEventListener("change", function () {
    settings.suggestionsMessages = suggestionsMessagesToggle.checked;
    saveSettings();
    applySettings();
    if (!isSuggestionsOn("messages")) clearPreviousRelated();
    renderWelcomeChips();
    renderInputSuggestions();
  });
  if (suggestionsInputToggle) suggestionsInputToggle.addEventListener("change", function () {
    settings.suggestionsInput = suggestionsInputToggle.checked;
    saveSettings();
    applySettings();
    if (!isSuggestionsOn("input")) { hideWriteAssist(); hideGlowPrism(); hideInputSuggestions(); }
    else { renderInputSuggestions(); }
  });
  if (suggestionsWelcomeToggle) suggestionsWelcomeToggle.addEventListener("change", function () {
    settings.suggestionsWelcome = suggestionsWelcomeToggle.checked;
    saveSettings();
    applySettings();
    renderWelcomeChips();
  });
  if (suggestionsSparksToggle) suggestionsSparksToggle.addEventListener("change", function () {
    settings.suggestionsSparks = suggestionsSparksToggle.checked;
    saveSettings();
    applySettings();
    renderPromptChips();
  });
  if (suggestionsAllToggle) suggestionsAllToggle.addEventListener("change", function () {
    settings.suggestionsAll = suggestionsAllToggle.checked;
    saveSettings();
    applySettings();
    if (!isSuggestionsOn("messages")) clearPreviousRelated();
    if (!isSuggestionsOn("input")) { hideWriteAssist(); hideGlowPrism(); hideInputSuggestions(); }
    renderWelcomeChips();
    renderInputSuggestions();
    renderPromptChips();
  });
  function bindFeatureToggle(el, key) {
    if (!el) return;
    el.addEventListener("change", function () {
      settings[key] = el.checked;
      saveSettings();
      applySettings();
    });
  }
  bindFeatureToggle(cleanModeToggle, "cleanMode");
  bindFeatureToggle(featureGlowToggle, "featureGlow");
  bindFeatureToggle(featureEchoToggle, "featureEcho");
  bindFeatureToggle(featureMotionToggle, "featureMotion");
  bindFeatureToggle(featureAgentToggle, "featureAgent");
  bindFeatureToggle(featureInsideToggle, "featureInside");
  bindFeatureToggle(featureBriefToggle, "featureBrief");
  bindFeatureToggle(featureSummaryToggle, "featureSummary");
  bindFeatureToggle(featureLensToggle, "featureLens");
  if (settingsQuotaResetBtn) settingsQuotaResetBtn.addEventListener("click", resetAllDailyQuotas);
  var settingsOpenUsageBtn = document.getElementById("settingsOpenUsageBtn");
  if (settingsOpenUsageBtn) settingsOpenUsageBtn.addEventListener("click", function () {
    if (settingsDialog) settingsDialog.close();
    openUsageDialog();
  });
  if (usageBtn) usageBtn.addEventListener("click", openUsageDialog);
  if (closeUsage && usageDialog) closeUsage.addEventListener("click", function () { usageDialog.close(); });
  if (usageResetBtn) usageResetBtn.addEventListener("click", resetAllDailyQuotas);
  var usageUpgradeBtn = document.getElementById("usageUpgradeBtn");
  if (usageUpgradeBtn) usageUpgradeBtn.addEventListener("click", function () {
    if (usageDialog) usageDialog.close();
    openExclusiveDialog();
  });
  function bindVaultPowerBtn(btn) {
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleVaultEnabled();
    });
  }
  bindVaultPowerBtn(vaultPowerBtn);
  bindVaultPowerBtn(vaultPowerBtnMobile);

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
    var blobCount = isExclusiveActive() ? 6 : 4;
    for (var i = 0; i < blobCount; i++) blobs.push(createBlob(i));

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    });

    function draw(time) {
      if (!settings.animations || isTyping || liquidPausedForBusy) {
        animFrameId = requestAnimationFrame(draw);
        return;
      }
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
    addTab("recommended", "Empfohlen · " + RECOMMENDED_SPARKS.length);
    groups.forEach(function (g) {
      addTab(g.title, g.title + " · " + g.items.length);
    });
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

  var SPARKS_SIDEBAR_LIMIT = 12;

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

  function getRecommendedSidebarSparks() {
    if (!sparksShuffleSeed) {
      return RECOMMENDED_SPARKS.map(function (item) {
        return { item: item, icon: "✦" };
      });
    }
    return pickRandomSparks(SPARKS_SIDEBAR_LIMIT);
  }

  function updateSparksMeta(count, filterLabel) {
    if (sparksCountLabel) {
      sparksCountLabel.textContent = count + " Spark" + (count === 1 ? "" : "s") + " · " + filterLabel;
    }
  }

  function renderPromptChips() {
    if (!promptChips || typeof NocoBrain === "undefined" || !NocoBrain.getPromptGroups) return;
    if (!isSuggestionsOn("sparks")) {
      promptChips.innerHTML = "";
      if (sparksCountLabel) sparksCountLabel.textContent = "Sparks deaktiviert — Einstellungen";
      return;
    }
    var groups = NocoBrain.getPromptGroups();
    var query = (sparkSearchQuery || "").toLowerCase().trim();
    promptChips.innerHTML = "";
    var count = 0;
    var filterLabel = "Empfohlen";
    var activeGroup = null;

    if (sparkCategoryHead) {
      sparkCategoryHead.hidden = true;
      sparkCategoryHead.textContent = "";
    }

    function addListItem(item, icon, category) {
      if (query && item.toLowerCase().indexOf(query) === -1) return;
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "spark-list-item";
      btn.setAttribute("data-prompt", item);
      btn.title = item;
      btn.innerHTML =
        '<span class="spark-list-icon" aria-hidden="true">' + icon + "</span>" +
        '<span class="spark-list-text">' + escapeHtml(item) + "</span>" +
        (category ? '<span class="spark-list-cat">' + escapeHtml(category) + "</span>" : "");
      promptChips.appendChild(btn);
      count++;
    }

    if (sparkFilterId === "recommended") {
      if (!query) {
        getRecommendedSidebarSparks().forEach(function (s) {
          addListItem(s.item, s.icon, "");
        });
      } else {
        collectSparkPool().forEach(function (s) {
          if (count >= 24) return;
          addListItem(s.item, s.icon, "");
        });
      }
    } else {
      groups.forEach(function (group) {
        if (sparkFilterId !== group.title) return;
        activeGroup = group;
        filterLabel = group.title;
        if (sparkCategoryHead) {
          sparkCategoryHead.hidden = false;
          sparkCategoryHead.innerHTML = '<span class="spark-cat-icon">' + group.icon + "</span> " + escapeHtml(group.title);
        }
        group.items.forEach(function (item) {
          addListItem(item, group.icon, "");
        });
      });
    }

    if (!count) {
      var empty = document.createElement("p");
      empty.className = "spark-empty";
      empty.textContent = query ? "Keine Treffer — Suche anpassen" : "Keine Sparks in dieser Kategorie";
      promptChips.appendChild(empty);
    }

    updateSparksMeta(count, filterLabel);
  }

  /* ── Feature Hover Tips ── */

  function initFeatureTooltips() {
    var hints = typeof NocoBrain !== "undefined" && NocoBrain.getFeatureHints
      ? NocoBrain.getFeatureHints()
      : {};
    var map = [
      { sel: "#nocoAgentBtn", key: "agent" },
      { sel: "#nocoCreateBtn", key: "create" },
      { sel: "#nocoInsideBtn", key: "inside" },
      { sel: "#nocoMotionBtn", key: "motion" },
      { sel: "#insightFileBtn", key: "file" },
      { sel: "[data-shortcut='hub']", key: "hub" },
      { sel: "[data-shortcut='image']", key: "image" },
      { sel: "[data-shortcut='summary']", key: "summary" },
      { sel: "[data-shortcut='brief']", key: "brief" },
      { sel: "[data-shortcut='glow']", key: "glow" },
      { sel: "[data-shortcut='echo']", key: "echo" },
      { sel: "[data-shortcut='detect']", key: "lens" },
      { sel: "[data-shortcut='motion']", key: "motion" },
      { sel: "[data-shortcut='inside']", key: "inside" },
      { sel: "[data-shortcut='insight']", key: "inside" },
      { sel: "[data-shortcut='agent']", key: "agent" },
      { sel: "[data-shortcut='help']", key: "help" },
      { sel: "[data-shortcut='new']", key: "new" }
    ];
    map.forEach(function (entry) {
      var tip = hints[entry.key] || (hints.brand && hints.brand[entry.key]) || "";
      if (!tip) return;
      document.querySelectorAll(entry.sel).forEach(function (el) {
        el.setAttribute("data-feature-tip", tip);
        el.setAttribute("title", tip);
        el.setAttribute("aria-description", tip);
      });
    });
  }

  /* ── Init ── */

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src;
      s.charset = "UTF-8";
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error("load failed: " + src)); };
      document.head.appendChild(s);
    });
  }

  function loadBrainModule() {
    if (typeof NocoBrain !== "undefined") return Promise.resolve();
    return loadScript("js/brain.js?v=" + NOCO_BUILD);
  }

  var NOCO_BUILD = "5.2.44";

  function initAppCore() {
    if (!settings.knowledgeSource) settings.knowledgeSource = "noco";
    if (settings.vaultEnabled === undefined) settings.vaultEnabled = true;
    if (settings.suggestionsAll === undefined) settings.suggestionsAll = true;
    if (settings.suggestionsMessages === undefined) settings.suggestionsMessages = true;
    if (settings.suggestionsInput === undefined) settings.suggestionsInput = true;
    if (settings.suggestionsWelcome === undefined) settings.suggestionsWelcome = true;
    if (settings.suggestionsSparks === undefined) settings.suggestionsSparks = true;
    if (settings.cleanMode === undefined) settings.cleanMode = false;
    if (settings.featureGlow === undefined) settings.featureGlow = true;
    if (settings.featureEcho === undefined) settings.featureEcho = true;
    if (settings.featureMotion === undefined) settings.featureMotion = true;
    if (settings.featureAgent === undefined) settings.featureAgent = true;
    if (settings.featureInside === undefined) settings.featureInside = true;
    if (settings.featureBrief === undefined) settings.featureBrief = true;
    if (settings.featureSummary === undefined) settings.featureSummary = true;
    if (settings.featureLens === undefined) settings.featureLens = true;
    if (!canUseAutomation() && settings.knowledgeSource === "auto") {
      settings.knowledgeSource = "noco";
      saveSettings();
    }
    document.body.classList.toggle("wiki-source-active", settings.knowledgeSource === "wiki");
    document.body.classList.toggle("fusion-source-active", settings.knowledgeSource === "auto");
    updateKnowledgeSourceUI();
    updatePayWalletUI();
    try {
      renderSparkFilterTabs();
      renderPromptChips();
      renderAgentPresets();
      initChatScrollRoll();
      initSidebarCollapsible();
      initComposeToolbar();
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
      initFeatureTooltips();
      if (inputSuggestionsTimer) clearInterval(inputSuggestionsTimer);
      inputSuggestionsTimer = setInterval(function () {
        if (!chatInput || chatInput.value.trim() || document.hidden) return;
        var panel = document.getElementById("chatPanel");
        if (panel && panel.hidden) return;
        renderInputSuggestions();
        if (welcomeBlock && welcomeBlock.parentNode) renderWelcomeChips();
      }, 14000);
    } catch (err) {
      console.error("NOCO initAppCore:", err);
      if (bootStatus && !bootFinished) bootStatus.textContent = "Start wird abgeschlossen…";
      forceBootComplete(bootScreen && bootScreen.querySelector(".boot-logo"));
      showToast("Init-Fehler — App laeuft eingeschraenkt");
    }
  }

  function initApp() {
    document.documentElement.setAttribute("data-noco-build", NOCO_BUILD);
    ensureAppVisible();
    if (typeof window.__nocoUnlockApp === "function") {
      window.addEventListener("load", function () {
        ensureAppVisible();
      });
    }
    if (typeof NocoBootFX === "undefined") {
      console.warn("NOCO: boot-fx.js fehlt — Boot-Shard-Animation deaktiviert.");
    }
    if (window.__nocoBootDone) {
      ensureAppVisible();
    } else if (typeof window.__nocoForceBoot === "function") {
      window.setTimeout(ensureAppVisible, 1200);
    } else {
      boot();
    }
    setTimeout(ensureAppVisible, 2500);
    setTimeout(ensureAppVisible, 5000);

    loadBrainModule().then(function () {
      if (typeof NocoBrain === "undefined") {
        if (bootStatus) bootStatus.textContent = "Eingeschraenkter Modus — Start in Kuerze…";
        if (bootScreen) bootScreen.classList.add("is-boot-error");
        settings.animations = false;
        ensureAppVisible();
        showToast("brain.js fehlt — bitte Hard-Reload (?v=" + NOCO_BUILD + ")");
        return;
      }
      setTimeout(initAppCore, 0);
    }).catch(function (err) {
      console.error("NOCO brain load:", err);
      ensureAppVisible();
      showToast("brain.js konnte nicht geladen werden");
    }).then(function () {
      ensureAppVisible();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
