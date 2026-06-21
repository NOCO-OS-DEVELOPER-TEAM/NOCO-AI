/**
 * NOCO Agent Mode — Live Execution Flow (action blocks + micro-updates)
 */
(function (global) {
  "use strict";

  var TOTAL_MS = 60000;
  var MIN_TICKS_BEFORE_OUTPUT = 12;

  function extractGoal(input) {
    var t = String(input || "").trim();
    t = t.replace(/^(erstell|mach|bau|generier|plan(e)?)\s*(mir\s*)?(ein(en)?\s*)?/i, "");
    return t.slice(0, 120) || "dein Ziel";
  }

  function detectStyle(input) {
    var t = String(input || "").toLowerCase();
    if (/gaming|fps|shooter|esport/i.test(t)) return "Gaming · FPS / Neon";
    if (/minimal|clean|modern/i.test(t)) return "Minimal · Clean";
    if (/retro|pixel|8bit/i.test(t)) return "Retro · Pixel";
    if (/fitness|sport|workout/i.test(t)) return "Athletic · Energetic";
    if (/mathe|lern|schule/i.test(t)) return "Academic · Focus";
    return "Modern · Balanced";
  }

  var AGENT_PRESETS = [
    { id: "startup", taskId: "project", icon: "🚀", title: "Startup", prompt: "Plane ein Startup-Konzept mit MVP und 4-Wochen-Roadmap fuer eine innovative App" },
    { id: "youtube", taskId: "content", icon: "📺", title: "YouTube", prompt: "Erstelle einen YouTube-Kanal-Plan mit Content-Strategie und Upload-Rhythmus fuer Gaming" },
    { id: "fitness", taskId: "fitness", icon: "💪", title: "Fitness", prompt: "Erstelle einen 8-Wochen Trainingsplan fuer Muskelaufbau fuer Anfaenger" },
    { id: "learning", taskId: "learning", icon: "📚", title: "Lernplan", prompt: "Plane einen 5-Wochen Lernplan fuer Mathe-Pruefung mit taeglichen Uebungen" },
    { id: "marketing", taskId: "marketing", icon: "📣", title: "Marketing", prompt: "Erstelle eine Marketing-Kampagne mit Kanalen, Timeline und Budget fuer ein neues Produkt" },
    { id: "travel", taskId: "travel", icon: "✈️", title: "Reise", prompt: "Plane eine 7-Tage-Reise mit Tagesplan, Budget und Packliste fuer Europa" },
    { id: "meal", taskId: "meal", icon: "🍽️", title: "Meal-Prep", prompt: "Erstelle einen Wochenplan fuer gesunde Meal-Prep mit Einkaufsliste" },
    { id: "resume", taskId: "resume", icon: "📄", title: "Bewerbung", prompt: "Erstelle einen Bewerbungsplan mit Lebenslauf-Struktur und Interview-Vorbereitung fuer IT-Beruf" },
    { id: "social", taskId: "social", icon: "📱", title: "Social", prompt: "Plane eine 30-Tage Social-Media-Strategie mit Posts und Reichweiten-Tipps fuer Instagram" },
    { id: "home", taskId: "home", icon: "🏠", title: "Einrichtung", prompt: "Erstelle einen Einrichtungs- und Renovierungsplan fuer ein modernes Wohnzimmer" }
  ];

  function matchTask(input) {
    var text = String(input || "");
    if (/fitness|trainingsplan|workout|sport\s*plan|abnehmen|muskel|trainier/i.test(text)) return TASKS.fitness;
    if (/lernplan|lern\s*plan|mathe|pruefung|lernen|klausur|schule|uni|studium/i.test(text)) return TASKS.learning;
    if (/youtube|kanal|content|video\s*plan|upload/i.test(text)) return TASKS.content;
    if (/marketing|kampagne|werbung|ads|branding/i.test(text)) return TASKS.marketing;
    if (/reise|urlaub|trip|flug|packliste/i.test(text)) return TASKS.travel;
    if (/meal|ernaehrung|essen|kochen|rezept|einkauf/i.test(text)) return TASKS.meal;
    if (/bewerbung|lebenslauf|cv|interview|karriere/i.test(text)) return TASKS.resume;
    if (/social\s*media|instagram|tiktok|reichweite|follower/i.test(text)) return TASKS.social;
    if (/einrichtung|wohnung|renovier|moebel|interior/i.test(text)) return TASKS.home;
    if (/logo|branding|poster|kanal|gaming|app|startup|projekt|business|unternehmen|website|saas/i.test(text)) return TASKS.project;
    if (/plan(e|en)?|roadmap|zeitplan|strategie|konzept|aufbau/i.test(text)) return TASKS.plan;
    if (/idee|brainstorm|kreativ|konzipier|erfind|vision/i.test(text)) return TASKS.idea;
    if (/bau(e|en)?|entwickl|programmier|implementier|erstell(e|en)?|mach(e|en)?|design(e|en)?|codier/i.test(text)) return TASKS.build;
    return TASKS.general;
  }

  function blocksForGeneral(goal, input) {
    var style = detectStyle(input);
    return [
      {
        id: "analyze",
        icon: "🧠",
        title: "Analyse Block",
        workPhase: "analyze",
        ticks: [
          { text: "Agent gestartet" },
          { text: "Auftrag verstanden: " + goal },
          { text: "Intent erkannt (Plan · Idee · Build · …)" },
          { text: "Kontext & Stil: " + style }
        ],
        tools: [{ name: "Memory", action: "Chat-Kontext geladen" }]
      },
      {
        id: "create",
        icon: "⚙️",
        title: "Synthesis Block",
        workPhase: "create",
        ticks: [
          { text: "Deliverable-Struktur aufgebaut" },
          { text: "Mehrphasen-Plan generiert" },
          { text: "Vault als Zusatzquelle durchsucht" },
          { text: "Sektionen priorisiert & gefuellt" }
        ],
        tools: [
          { name: "Synthesis-Engine", action: "Struktur + Inhalt" },
          { name: "Vault", action: "520+ Themen" }
        ]
      },
      {
        id: "optimize",
        icon: "🔍",
        title: "Optimization Block",
        workPhase: "optimize",
        ticks: [
          { text: "Vollstaendigkeit geprueft" },
          { text: "Naechste Schritte geschaerft" },
          { text: "Pro-Qualitaet validiert" }
        ],
        tools: [{ name: "Optimizer", action: "Deliverable geschaerft" }]
      },
      {
        id: "finalize",
        icon: "🏁",
        title: "Finalize Block",
        workPhase: "finalize",
        ticks: [
          { text: "Finales Deliverable zusammengestellt" },
          { text: "Streaming-Output startet" }
        ],
        tools: [{ name: "Output-Engine", action: "Grosse Antwort" }]
      }
    ];
  }

  var TASKS = {
    general: {
      id: "general",
      icon: "⚡",
      title: "NOCO Agent",
      subtitle: "Allgemein · Synthese · Liefert",
      match: /.*/,
      useBrain: true,
      build: function () { return null; }
    },
    plan: {
      id: "plan",
      icon: "📋",
      title: "Plan-Agent",
      match: /plan|roadmap|zeitplan|strategie|konzept/i,
      useBrain: true,
      build: function () { return null; }
    },
    idea: {
      id: "idea",
      icon: "💡",
      title: "Ideen-Agent",
      match: /idee|brainstorm|kreativ|konzipier/i,
      useBrain: true,
      build: function () { return null; }
    },
    build: {
      id: "build",
      icon: "🔧",
      title: "Build-Agent",
      match: /bau|entwickl|programmier|erstell|mach|design/i,
      useBrain: true,
      build: function () { return null; }
    },
    fitness: {
      id: "fitness",
      icon: "💪",
      title: "Fitness-Plan Agent",
      match: /fitness|trainingsplan|workout|sport\s*plan|abnehmen|muskel/i,
      useBrain: true,
      build: function () { return null; }
    },
    learning: {
      id: "learning",
      icon: "📚",
      title: "Lernplan Agent",
      match: /lernplan|lern\s*plan|mathe|pruefung|lernen|klausur|schule/i,
      useBrain: true,
      build: function () { return null; }
    },
    project: {
      id: "project",
      icon: "🚀",
      title: "Projekt-Agent",
      match: /app|startup|projekt|idee|logo|kanal|business|unternehmen|poster|branding/i,
      useBrain: true,
      build: function () { return null; }
    },
    marketing: {
      id: "marketing",
      icon: "📣",
      title: "Marketing-Agent",
      match: /marketing|kampagne|werbung/i,
      useBrain: true,
      build: function () { return null; }
    },
    content: {
      id: "content",
      icon: "📺",
      title: "Content-Agent",
      match: /youtube|kanal|content/i,
      useBrain: true,
      build: function () { return null; }
    },
    travel: {
      id: "travel",
      icon: "✈️",
      title: "Reise-Agent",
      match: /reise|urlaub|trip/i,
      useBrain: true,
      build: function () { return null; }
    },
    meal: {
      id: "meal",
      icon: "🍽️",
      title: "Meal-Prep Agent",
      match: /meal|ernaehrung|essen|kochen/i,
      useBrain: true,
      build: function () { return null; }
    },
    resume: {
      id: "resume",
      icon: "📄",
      title: "Karriere-Agent",
      match: /bewerbung|lebenslauf|cv|interview/i,
      useBrain: true,
      build: function () { return null; }
    },
    social: {
      id: "social",
      icon: "📱",
      title: "Social-Agent",
      match: /social|instagram|tiktok/i,
      useBrain: true,
      build: function () { return null; }
    },
    home: {
      id: "home",
      icon: "🏠",
      title: "Home-Agent",
      match: /einrichtung|wohnung|renovier|moebel/i,
      useBrain: true,
      build: function () { return null; }
    }
  };

  function blocksForLogo(goal, input) {
    var style = detectStyle(input);
    return [
      {
        id: "analyze",
        icon: "🧠",
        title: "Analyse Block",
        workPhase: "analyze",
        ticks: [
          { text: "Agent gestartet" },
          { text: "Ziel erkannt: " + goal },
          { text: "Stil erkannt: " + style },
          { text: "Einschraenkungen geprueft (Format, Lesbarkeit)" }
        ],
        tools: [{ name: "Memory", action: "Chat-Kontext geladen" }]
      },
      {
        id: "create",
        icon: "🎨",
        title: "Creation Block",
        workPhase: "create",
        ticks: [
          { text: "Logo-Konzepte skizziert" },
          { text: "3 Varianten erstellt (A · B · C)" },
          { text: "Neon-Akzente & Typografie abgestimmt" }
        ],
        tools: [{ name: "Bildgenerator", action: "NOCO Render vorbereitet" }]
      },
      {
        id: "optimize",
        icon: "🔍",
        title: "Optimization Block",
        workPhase: "optimize",
        ticks: [
          { text: "Bestes Design ausgewaehlt (Variante B)" },
          { text: "Farben optimiert — Kontrast + Lesbarkeit" },
          { text: "Fehler reduziert · Kanten geschaerft" }
        ],
        tools: [{ name: "Optimizer", action: "Visuelles Ranking" }]
      },
      {
        id: "finalize",
        icon: "🏁",
        title: "Finalize Block",
        workPhase: "finalize",
        ticks: [
          { text: "Finales Ergebnis zusammengestellt" },
          { text: "Branding-Notizen dokumentiert" }
        ],
        tools: [{ name: "Output-Engine", action: "Ergebnis wird gestreamt" }]
      }
    ];
  }

  function blocksForFitness(goal, input) {
    return [
      {
        id: "analyze",
        icon: "🧠",
        title: "Analyse Block",
        workPhase: "analyze",
        ticks: [
          { text: "Agent gestartet" },
          { text: "Ziel erkannt: " + goal },
          { text: "Level geschaetzt: Einsteiger–Fortgeschritten" },
          { text: "Verfuegbare Zeit: 3–4 Einheiten/Woche" }
        ],
        tools: [{ name: "Memory", action: "Profil-Vorlage geladen" }]
      },
      {
        id: "create",
        icon: "📋",
        title: "Plan Block",
        workPhase: "create",
        ticks: [
          { text: "Wochenstruktur erstellt (8 Wochen)" },
          { text: "Push/Pull/Legs Split definiert" },
          { text: "Cardio & Erholung eingeplant" }
        ],
        tools: [{ name: "Wissensbasis", action: "Trainings-Prinzipien" }]
      },
      {
        id: "optimize",
        icon: "🔍",
        title: "Optimization Block",
        workPhase: "optimize",
        ticks: [
          { text: "Belastung ausbalanciert" },
          { text: "Progression +10 % ab Woche 5" },
          { text: "Self-Check: realistisch & sicher" }
        ],
        tools: [{ name: "Optimizer", action: "Plan validiert" }]
      },
      {
        id: "finalize",
        icon: "🏁",
        title: "Finalize Block",
        workPhase: "finalize",
        ticks: [
          { text: "Tagesplaene finalisiert" },
          { text: "Ernaehrungs-Hinweise angehaengt" }
        ],
        tools: [{ name: "Output-Engine", action: "Plan wird gestreamt" }]
      }
    ];
  }

  function blocksForLearning(goal, input) {
    return [
      {
        id: "analyze",
        icon: "🧠",
        title: "Analyse Block",
        workPhase: "analyze",
        ticks: [
          { text: "Agent gestartet" },
          { text: "Lernziel: " + goal },
          { text: "Zeitrahmen: 5 Wochen geschaetzt" },
          { text: "Schwerpunkte priorisiert" }
        ],
        tools: [{ name: "Memory", action: "Lernprofil geladen" }]
      },
      {
        id: "create",
        icon: "📚",
        title: "Lernplan Block",
        workPhase: "create",
        ticks: [
          { text: "Module: Grundlagen → Vertiefung → Pruefung" },
          { text: "Pomodoro-Raster erstellt" },
          { text: "Uebungsbloecke pro Tag definiert" }
        ],
        tools: [{ name: "Wissensbasis", action: "Lernmethoden" }]
      },
      {
        id: "optimize",
        icon: "🔍",
        title: "Optimization Block",
        workPhase: "optimize",
        ticks: [
          { text: "Schwachstellen-Fokus gesetzt" },
          { text: "Pausen & Erholung eingeplant" },
          { text: "Self-Check: 60–90 Min/Tag machbar" }
        ],
        tools: [{ name: "Optimizer", action: "Plan validiert" }]
      },
      {
        id: "finalize",
        icon: "🏁",
        title: "Finalize Block",
        workPhase: "finalize",
        ticks: [
          { text: "Wochenplan finalisiert" },
          { text: "Pruefungsphase vorbereitet" }
        ],
        tools: [{ name: "Output-Engine", action: "Lernplan wird gestreamt" }]
      }
    ];
  }

  function blocksForProject(goal, input) {
    if (shouldRenderImage(input, TASKS.project)) {
      return blocksForLogo(goal, input);
    }
    return [
      {
        id: "analyze",
        icon: "🧠",
        title: "Analyse Block",
        workPhase: "analyze",
        ticks: [
          { text: "Agent gestartet" },
          { text: "Vision: " + goal },
          { text: "Zielgruppe & Problem skizziert" },
          { text: "Markt-Kontext eingelesen" }
        ],
        tools: [{ name: "Memory", action: "Projekt-Kontext" }]
      },
      {
        id: "create",
        icon: "🚀",
        title: "Creation Block",
        workPhase: "create",
        ticks: [
          { text: "MVP mit 3 Kernfeatures definiert" },
          { text: "Roadmap (4 Wochen) erstellt" },
          { text: "Must-have vs. Nice-to-have sortiert" }
        ],
        tools: [{ name: "Wissensbasis", action: "Startup-Framework" }]
      },
      {
        id: "optimize",
        icon: "🔍",
        title: "Optimization Block",
        workPhase: "optimize",
        ticks: [
          { text: "Scope auf MVP reduziert" },
          { text: "Risiken & Abhaengigkeiten geprueft" },
          { text: "Self-Check: in 4 Wochen machbar" }
        ],
        tools: [{ name: "Optimizer", action: "Scope validiert" }]
      },
      {
        id: "finalize",
        icon: "🏁",
        title: "Finalize Block",
        workPhase: "finalize",
        ticks: [
          { text: "Projektplan dokumentiert" },
          { text: "Naechste Schritte priorisiert" }
        ],
        tools: [{ name: "Output-Engine", action: "Plan wird gestreamt" }]
      }
    ];
  }

  function getBlocks(task, input, goal) {
    if (task.id === "fitness") return blocksForFitness(goal, input);
    if (task.id === "learning") return blocksForLearning(goal, input);
    if (task.id === "project") return blocksForProject(goal, input);
    if (task.id === "plan" || task.id === "idea" || task.id === "build") return blocksForGeneral(goal, input);
    return blocksForGeneral(goal, input);
  }

  function flattenEvents(blocks) {
    var events = [];
    var bi, ti, block, tick;
    for (bi = 0; bi < blocks.length; bi++) {
      block = blocks[bi];
      events.push({
        type: "block_start",
        block: block,
        blockIndex: bi,
        blockTotal: blocks.length
      });
      if (block.tools) {
        block.tools.forEach(function (tool) {
          events.push({
            type: "tool",
            block: block,
            blockIndex: bi,
            tool: tool
          });
        });
      }
      for (ti = 0; ti < block.ticks.length; ti++) {
        tick = block.ticks[ti];
        events.push({
          type: "tick",
          block: block,
          blockIndex: bi,
          tickIndex: ti,
          tickTotal: block.ticks.length,
          text: tick.text
        });
      }
      events.push({
        type: "block_done",
        block: block,
        blockIndex: bi,
        blockTotal: blocks.length
      });
    }
    return events;
  }

  function listTasks() {
    var out = [];
    Object.keys(TASKS).forEach(function (k) {
      if (k !== "general") out.push(TASKS[k]);
    });
    return out;
  }

  function shouldRenderImage(input, task) {
    var t = String(input || "").toLowerCase();
    if (!/logo|branding|poster|cover|thumbnail|kanal|banner|icon|emblem/i.test(t)) return false;
    return !task || task.id === "project" || /logo|branding|poster|kanal/i.test(t);
  }

  function buildImagePrompt(goal, input) {
    var g = extractGoal(input || goal);
    if (/logo/i.test(input || goal)) return "Mach ein modernes minimalistisches Logo fuer " + g;
    if (/poster/i.test(input || goal)) return "Mach ein Poster Design fuer " + g;
    if (/kanal|gaming/i.test(input || goal)) return "Mach ein Gaming Kanal Logo fuer " + g;
    return "Mach ein Branding Bild fuer " + g;
  }

  function buildFullPlan(task, goal, blocks) {
    var lines = ["**Agent-Ausfuehrungsplan**", "", "**Ziel:** " + goal, ""];
    blocks.forEach(function (b, i) {
      lines.push("**" + (i + 1) + ". " + b.icon + " " + b.title + "**");
      b.ticks.forEach(function (t) { lines.push("→ " + t.text); });
      if (b.tools) {
        b.tools.forEach(function (tl) { lines.push("🧰 " + tl.name + ": " + tl.action); });
      }
      lines.push("");
    });
    return lines.join("\n");
  }

  function runTask(input, callbacks) {
    callbacks = callbacks || {};
    var task = matchTask(input);
    var goal = extractGoal(input);
    var blocks = getBlocks(task, input, goal);
    var events = flattenEvents(blocks);
    var tickCount = events.filter(function (e) { return e.type === "tick"; }).length;
    if (tickCount < MIN_TICKS_BEFORE_OUTPUT) {
      /* safety — should never happen with current blocks */
    }
    var totalMs = callbacks.totalMs || TOTAL_MS;
    var delayMs = Math.max(2200, Math.floor(totalMs / Math.max(events.length, 1)));
    var eventIdx = 0;
    var timers = [];
    var controller = {
      cancelled: false,
      skipToEnd: false,
      fullPlan: "",
      stop: function () {
        controller.cancelled = true;
        timers.forEach(function (id) { clearTimeout(id); });
        timers = [];
      },
      skip: function () {
        controller.skipToEnd = true;
        timers.forEach(function (id) { clearTimeout(id); });
        timers = [];
        runNext();
      }
    };

    function emit(ev, progress) {
      if (callbacks.onEvent) {
        callbacks.onEvent({
          event: ev,
          progress: progress,
          task: task,
          goal: goal,
          blocks: blocks,
          fullPlan: buildFullPlan(task, goal, blocks)
        });
      }
    }

    function finish() {
      var useBrain = !!(task.useBrain);
      var finalText = useBrain ? null : (task.build ? task.build(goal) : null);
      var imagePrompt = shouldRenderImage(input, task) ? buildImagePrompt(goal, input) : null;
      if (callbacks.onDone) {
        callbacks.onDone({
          task: task,
          text: finalText,
          useBrain: useBrain,
          input: input,
          goal: goal,
          imagePrompt: imagePrompt,
          blocks: blocks,
          fullPlan: buildFullPlan(task, goal, blocks)
        });
      }
    }

    function runNext() {
      if (controller.cancelled) {
        if (callbacks.onCancel) callbacks.onCancel({ task: task, goal: goal });
        return;
      }
      if (controller.skipToEnd) {
        while (eventIdx < events.length) {
          emit(events[eventIdx], 0.95);
          eventIdx++;
        }
        finish();
        return;
      }
      if (eventIdx >= events.length) {
        finish();
        return;
      }
      var ev = events[eventIdx];
      var progress = (eventIdx + 1) / events.length;
      emit(ev, progress);
      eventIdx++;
      timers.push(setTimeout(runNext, delayMs));
    }

    var plan = buildFullPlan(task, goal, blocks);
    controller.fullPlan = plan;
    if (callbacks.onStart) {
      callbacks.onStart(task, goal, blocks, plan);
    }
    timers.push(setTimeout(runNext, 600));
    return controller;
  }

  global.NocoAgent = {
    listTasks: listTasks,
    listPresets: function () { return AGENT_PRESETS.slice(); },
    getPresets: function () { return AGENT_PRESETS.slice(); },
    matchTask: matchTask,
    runTask: runTask,
    getTask: function (id) { return TASKS[id] || null; },
    shouldRenderImage: shouldRenderImage,
    buildImagePrompt: buildImagePrompt,
    buildFullPlan: buildFullPlan,
    TOTAL_MS: TOTAL_MS,
    MIN_TICKS: MIN_TICKS_BEFORE_OUTPUT
  };
})(typeof window !== "undefined" ? window : this);
