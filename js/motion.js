/**
 * NOCO Motion — 4s · 20 FPS · 8 Keyframes · 3 Pixel-Morphs dazwischen
 */
(function (global) {
  "use strict";

  var MOTION_STYLE = "standard";
  var MOTION_SIZE = 36;
  var KEYFRAME_COUNT = 8;
  var TWEEN_STEPS = 3;
  var PLAYBACK_FPS = 20;
  var FPS = PLAYBACK_FPS;
  var MAX_DURATION = 4;
  var MAX_FRAMES = MAX_DURATION * PLAYBACK_FPS;
  var CLIP_FRAME_COUNT = KEYFRAME_COUNT + (KEYFRAME_COUNT - 1) * TWEEN_STEPS;
  var KEYFRAMES_PER_SEC = KEYFRAME_COUNT / MAX_DURATION;
  var GEN_MS_NORMAL = 98000;
  var GEN_MS_PRO = 36000;
  var BG_COLOR = [12, 16, 28, 255];

  function buildKeyframeIndices(count, totalFrames) {
    var indices = [];
    var i;
    for (i = 0; i < count; i++) {
      indices.push(Math.round(i * (totalFrames - 1) / Math.max(1, count - 1)));
    }
    return indices;
  }

  var KEYFRAME_INDICES = buildKeyframeIndices(KEYFRAME_COUNT, MAX_FRAMES);

  var PIPELINE = [
    { id: "parse", label: "Prompt verstehen", weight: 0.08 },
    { id: "map", label: "Motiv & Animation wählen", weight: 0.12 },
    { id: "frameBase", label: "Hauptmotiv rendern", weight: 0.14 },
    { id: "frameProp", label: "Szene & Requisiten", weight: 0.12 },
    { id: "keyframes", label: "8 Keyframes bauen", weight: 0.36 },
    { id: "interp", label: "Flüssige Pose-Interpolation", weight: 0.12 },
    { id: "loop", label: "Loop glätten", weight: 0.06 }
  ];

  var FRUIT_PATTERNS = {
    apple: 1, pear: 1, cherry: 1, orange: 1, lemon: 1, grape: 1, strawberry: 1,
    pineapple: 1, mango: 1, banana: 1, food: 1, pumpkin: 1, mushroom: 1
  };

  var WALK_PATTERNS = {
    smiley: 1, cat: 1, dog: 1, penguin: 1, owl: 1, robot: 1, ghost: 1, skull: 1,
    pirate: 1, dragon: 1, gamepad: 1, crown: 1
  };

  var DRIVE_PATTERNS = { car: 1, train: 1, bike: 1, ship: 1, plane: 1 };
  var FLY_PATTERNS = { bird: 1, butterfly: 1, rocket: 1, ufo: 1, comet: 1, balloon: 1 };
  var FLOW_PATTERNS = { waves: 1, water: 1, cloud: 1, rain: 1, storm: 1, waterfall: 1, aurora: 1 };
  var PULSE_PATTERNS = { sun: 1, moon: 1, stars: 1, heart: 1, atom: 1, crystal: 1, diamond: 1 };
  var BLOOM_PATTERNS = { tree: 1, flower: 1, grass: 1, mushroom: 1, island: 1 };
  var BOUNCE_PATTERNS = { ball: 1 };
  var FOOTBALL_SKIP_BOUNCE = /fussball|football|soccer|basketball|tennis|volleyball|handball/;
  var FALL_PATTERNS = { snow: 1, leaf: 1, comet: 1, meteor: 1 };

  var PATTERN_MOTION = {
    house: "houseSmoke", home: "houseSmoke", cottage: "houseSmoke", gingerhouse: "houseSmoke",
    castle: "houseSmoke", tower: "houseSmoke", skyline: "houseSmoke", bridge: "houseSmoke",
    church: "houseSmoke", factory: "factorySmoke", windmill: "windmillSpin",
    lighthouse: "lighthouseBeam", train: "trainChug", car: "driveLR", bike: "driveLR",
    ship: "swimFish", plane: "flyLR", rocket: "rocketUp", comet: "rocketUp", ufo: "flyLR",
    balloon: "flyLR", bird: "flyLR", butterfly: "flyLR", eagle: "flyLR", swan: "flyLR",
    parrot: "flyLR", dove: "flyLR", fish: "swimFish", dolphin: "swimFish", whale: "swimFish",
    shark: "swimFish", submarine: "swimFish", bee: "beeBuzz", cat: "walkLR", dog: "walkLR",
    penguin: "walkLR", owl: "walkLR", robot: "walkLR", ghost: "walkLR", dragon: "walkLR",
    smiley: "walkLR", skull: "walkLR", pirate: "walkLR", gamepad: "walkLR", crown: "walkLR",
    wolf: "walkLR", fox: "walkLR", lion: "walkLR", tiger: "walkLR", elephant: "walkLR",
    panda: "walkLR", koala: "walkLR", turtle: "walkLR", sloth: "walkLR", flamingo: "walkLR",
    reindeer: "walkLR", ball: "bounceBall", apple: "fallFromTree", pear: "fallFromTree",
    cherry: "fallFromTree", orange: "fallFromTree", lemon: "fallFromTree", grape: "fallFromTree",
    strawberry: "fallFromTree", pineapple: "fallFromTree", mango: "fallFromTree", banana: "fallFromTree",
    watermelon: "fallFromTree", pumpkin: "fallFromTree", mushroom: "fallFromTree", food: "foodBob",
    pizza: "foodBob", burger: "foodBob", sushi: "foodBob", taco: "foodBob", donut: "foodBob",
    cake: "foodBob", icecream: "foodBob", ramen: "foodBob", cup: "steamRise", honey: "steamRise",
    potion: "steamRise", music: "musicPlay", mic: "musicPlay", clock: "clockTick",
    flag: "flagWave", sun: "pulseGlow", moon: "pulseGlow", stars: "pulseGlow", heart: "pulseGlow",
    atom: "orbitSpin", crystal: "pulseGlow", diamond: "pulseGlow", gem: "pulseGlow",
    tree: "bloomGrow", flower: "bloomGrow", grass: "bloomGrow", tulip: "bloomGrow",
    sunflower: "bloomGrow", bonsai: "bloomGrow", garden: "bloomGrow", island: "bloomGrow",
    palm: "sway", waves: "waveFlow", water: "waveFlow", waterfall: "waveFlow", cloud: "rainPour",
    rain: "rainPour", storm: "lightningFlash", tornado: "lightningFlash", lightning: "lightningFlash",
    snow: "snowDrift", snowman: "snowDrift", glacier: "snowDrift", flame: "flickerFlame",
    volcano: "flickerFlame", phoenix: "flickerFlame", planet: "orbitSpin", helix: "orbitSpin",
    aurora: "waveFlow", nebula: "pulseGlow", blackhole: "orbitSpin", satellite: "orbitSpin",
    spacestation: "orbitSpin", rover: "driveLR", laptop: "screenPulse", phone: "screenPulse",
    camera: "screenPulse", stream: "screenPulse", wifi: "screenPulse", christmas: "christmasTwinkle",
    surf: "surfRide", skate: "driveLR", yoga: "breathe", karate: "kickFootball",
    compass: "sway", map: "sway", mountain: "sway", canyon: "sway", cactus: "sway",
    jungle: "sway", fog: "rainPour", eclipse: "pulseGlow", sunset: "pulseGlow",
    graffiti: "sway", minimal: "breathe", mandala: "orbitSpin", wizard: "musicPlay",
    fairy: "flyLR", unicorn: "walkLR", ninja: "walkLR", knight: "walkLR", vampire: "walkLR",
    yinyang: "orbitSpin", coral: "swimFish", spider: "beeBuzz", ladybug: "beeBuzz",
    brush: "musicPlay", palette: "musicPlay", pencil: "sway", trophy: "pulseGlow",
    medal: "pulseGlow", treasure: "pulseGlow", dice: "bounceBall", maze: "sway",
    checker: "sway", glitch: "screenPulse", anvil: "flickerFlame", crystalball: "pulseGlow",
    popart: "pulseGlow", tattoo: "sway", pyramide: "sway", pyramid: "sway", cave: "sway",
    sword: "sway",     gift: "foodBob", church: "houseSmoke",
    pear: "fallFromTree", orange: "fallFromTree", lemon: "fallFromTree", grape: "fallFromTree",
    strawberry: "fallFromTree", pineapple: "fallFromTree", mango: "fallFromTree", banana: "fallFromTree",
    bike: "driveLR", leaf: "snowDrift", meteor: "rocketUp", rainbow: "pulseGlow",
    frog: "walkLR", horse: "walkLR", cow: "walkLR", pig: "walkLR", rabbit: "walkLR", mouse: "walkLR",
    helicopter: "flyLR", drone: "flyLR", giraffe: "walkLR", zebra: "walkLR", croc: "walkLR",
    polar: "walkLR", llama: "walkLR", kangaroo: "walkLR", dinosaur: "walkLR", schlange: "walkLR",
    popart: "pulseGlow", tattoo: "sway", honeycomb: "beeBuzz", fireworks: "pulseGlow",
    confetti: "christmasTwinkle", camping: "breathe", tent: "breathe", solar: "pulseGlow",
    windfarm: "windmillSpin", superhero: "walkLR", spider: "beeBuzz", mars: "orbitSpin",
    cyberpunk: "screenPulse", neon: "screenPulse", table: "breathe", chair: "breathe", bed: "breathe",
    rose: "bloomGrow", gingerhouse: "houseSmoke", cottage: "houseSmoke", home: "houseSmoke",
    water: "waveFlow", grass: "bloomGrow", food: "foodBob", cup: "steamRise", mic: "musicPlay",
    phone: "screenPulse", camera: "screenPulse", stream: "screenPulse", wifi: "screenPulse",
    laptop: "screenPulse", pencil: "sway", brush: "musicPlay", palette: "musicPlay",
    anvil: "flickerFlame", crystalball: "pulseGlow", potion: "steamRise", ramen: "foodBob",
    honey: "steamRise", sushi: "foodBob", taco: "foodBob", donut: "foodBob", cake: "foodBob",
    icecream: "foodBob", burger: "foodBob", pizza: "foodBob", cherry: "fallFromTree",
    tulip: "bloomGrow", sunflower: "bloomGrow", bonsai: "bloomGrow", garden: "bloomGrow",
    coral: "swimFish", submarine: "swimFish", shark: "swimFish", dolphin: "swimFish",
    whale: "swimFish", eagle: "flyLR", swan: "flyLR", parrot: "flyLR", dove: "flyLR",
    flamingo: "walkLR", sloth: "walkLR", reindeer: "walkLR", ninja: "walkLR", knight: "walkLR",
    vampire: "walkLR", fairy: "flyLR", wizard: "musicPlay", unicorn: "walkLR",
    spacestation: "orbitSpin", rover: "driveLR", satellite: "orbitSpin", nebula: "pulseGlow",
    blackhole: "orbitSpin", aurora: "waveFlow", glacier: "snowDrift", snowman: "snowDrift",
    jungle: "sway", cactus: "sway", palm: "sway", island: "sway", canyon: "sway",
    mountain: "sway", fog: "rainPour", eclipse: "pulseGlow", sunset: "pulseGlow",
    compass: "sway", map: "sway", maze: "sway", dice: "bounceBall", medal: "pulseGlow",
    trophy: "pulseGlow", treasure: "pulseGlow", gem: "pulseGlow", diamond: "pulseGlow",
    helix: "orbitSpin", comet: "rocketUp", planet: "orbitSpin", atom: "orbitSpin",
    phoenix: "flickerFlame", volcano: "flickerFlame", flame: "flickerFlame",
    lightning: "lightningFlash", storm: "lightningFlash", tornado: "lightningFlash",
    cloud: "rainPour", rain: "rainPour", snow: "snowDrift", waves: "waveFlow",
    waterfall: "waveFlow", tree: "bloomGrow", flower: "bloomGrow", mushroom: "bloomGrow",
    stars: "pulseGlow", moon: "pulseGlow", sun: "pulseGlow", heart: "pulseGlow",
    crystal: "pulseGlow", checker: "breathe", glitch: "screenPulse", minimal: "breathe",
    mandala: "orbitSpin", graffiti: "sway", yoga: "breathe", karate: "kickFootball",
    skate: "driveLR", surf: "surfRide", windmill: "windmillSpin", factory: "factorySmoke",
    lighthouse: "lighthouseBeam", bridge: "houseSmoke", tower: "houseSmoke", castle: "houseSmoke",
    house: "houseSmoke", train: "trainChug", car: "driveLR", plane: "flyLR", ship: "swimFish",
    rocket: "rocketUp", ufo: "flyLR", bird: "flyLR", butterfly: "flyLR", fish: "swimFish",
    bee: "beeBuzz", cat: "walkLR", dog: "walkLR", penguin: "walkLR", owl: "walkLR",
    robot: "walkLR", ghost: "walkLR", dragon: "walkLR", smiley: "walkLR", skull: "walkLR",
    pirate: "walkLR", gamepad: "walkLR", crown: "walkLR", wolf: "walkLR", fox: "walkLR",
    lion: "walkLR", tiger: "walkLR", elephant: "walkLR", panda: "walkLR", koala: "walkLR",
    turtle: "walkLR", ball: "bounceBall", apple: "fallFromTree", pumpkin: "fallFromTree",
    food: "foodBob", music: "musicPlay", clock: "clockTick", flag: "flagWave",
    christmas: "christmasTwinkle", ladybug: "beeBuzz", spider: "beeBuzz", yinyang: "orbitSpin",
    cave: "sway", sword: "sway", pyramid: "sway", popart: "pulseGlow"
  };

  var PROFILE_SCENE = {
    fallFromTree: "tree",
    kickFootball: "grass",
    dribbleBasketball: "grass",
    serveBall: "grass",
    trainChug: "street",
    driveLR: "street",
    swimFish: "water",
    flyLR: "sky",
    rocketUp: "sky",
    surfRide: "water",
    waveFlow: "sea",
    rainPour: "sky",
    snowDrift: "sky",
    floatUp: "sky",
    beeBuzz: "sky",
    orbitSpin: "sky"
  };

  var SCENE_BG_CACHE = {};
  var SCENE_BG_SEEDS = {
    sky: 41001,
    street: 41002,
    grass: 41003,
    ground: 41003,
    water: 41004,
    sea: 41005,
    tree: 41006
  };

  var SCENE_PROMPTS = {
    sky: "himmel wolken blau horizont",
    street: "strasse asphalt stadt boden",
    grass: "wiese gras gruen fussballfeld",
    ground: "wiese gras gruen",
    water: "wasser unterwasser blau",
    sea: "meer welle ozean",
    tree: "wald baum gras"
  };

  var PATTERN_FAMILY_RULES = [
    { re: /apple|pear|cherry|orange|lemon|grape|strawberry|pineapple|mango|banana|watermelon|pumpkin|fruit|obst/, id: "fallFromTree" },
    { re: /fish|dolphin|whale|shark|submarine|coral|aquarium|wal|hai/, id: "swimFish" },
    { re: /bird|eagle|swan|parrot|dove|vogel|flug|owl|penguin|pinguin/, id: "flyLR" },
    { re: /bee|biene|ladybug|spider|spinne|insect|libelle/, id: "beeBuzz" },
    { re: /cat|dog|lion|tiger|wolf|fox|elephant|panda|koala|unicorn|dragon|robot|sloth|giraffe|zebra|horse|cow|pig|rabbit|mouse|frog|croc|turtle|flamingo|reindeer|ninja|knight|vampire|pirate|skull|ghost|smiley|mensch|person|human|walk/, id: "walkLR" },
    { re: /car|train|zug|bike|ship|plane|rocket|ufo|drive|rover|skate/, id: "driveLR" },
    { re: /ball|fussball|football|soccer|tennis|basketball/, id: "bounceBall" },
    { re: /house|home|castle|tower|bridge|skyline|factory|church|cottage/, id: "houseSmoke" },
    { re: /sun|moon|star|heart|crystal|diamond|gem|medal|trophy|treasure|pulse|glow/, id: "pulseGlow" },
    { re: /tree|flower|grass|bloom|garden|bonsai|tulip|sunflower|mushroom|island|palm/, id: "bloomGrow" },
    { re: /wave|water|ocean|meer|surf|splash/, id: "waveFlow" },
    { re: /rain|cloud|fog|storm|tornado/, id: "rainPour" },
    { re: /snow|winter|glacier|snowman|ice/, id: "snowDrift" },
    { re: /lightning|blitz|gewitter/, id: "lightningFlash" },
    { re: /flame|fire|volcano|phoenix|flicker/, id: "flickerFlame" },
    { re: /planet|atom|orbit|helix|nebula|blackhole|satellite|space|comet|meteor|aurora/, id: "orbitSpin" },
    { re: /laptop|phone|camera|screen|stream|wifi|glitch|cyber|neon|computer/, id: "screenPulse" },
    { re: /music|note|gitarre|mic|podcast/, id: "musicPlay" },
    { re: /food|pizza|burger|sushi|taco|donut|cake|icecream|ramen|cup|coffee|tea|honig|potion/, id: "foodBob" },
    { re: /clock|uhr|tick/, id: "clockTick" },
    { re: /flag|banner/, id: "flagWave" },
    { re: /windmill|wind/, id: "windmillSpin" },
    { re: /lighthouse|beam/, id: "lighthouseBeam" },
    { re: /christmas|twinkle|sparkle/, id: "christmasTwinkle" }
  ];

  function assignProfileByPatternFamily(pat) {
    var i, rule, id;
    pat = (pat || "").toLowerCase();
    for (i = 0; i < PATTERN_FAMILY_RULES.length; i++) {
      rule = PATTERN_FAMILY_RULES[i];
      if (rule.re.test(pat) && MOTION_PROFILES[rule.id]) return MOTION_PROFILES[rule.id];
    }
    return MOTION_PROFILES.breathe;
  }

  function profileByPattern(pat) {
    if (!pat) return null;
    var id = PATTERN_MOTION[pat.toLowerCase()];
    if (id && MOTION_PROFILES[id]) return MOTION_PROFILES[id];
    return assignProfileByPatternFamily(pat);
  }

  function getVariantCount(profileId) {
    return MULTI_VARIANT_PROFILES[profileId] || 4;
  }

  function getSceneBackground(sceneType) {
    if (!sceneType) return null;
    var key = sceneType.toLowerCase();
    if (SCENE_BG_CACHE[key]) return SCENE_BG_CACHE[key];
    if (typeof NocoPixel === "undefined") return null;
    var prompt = SCENE_PROMPTS[key] || SCENE_PROMPTS[key === "ground" ? "grass" : key] || key;
    var result = NocoPixel.generate(prompt, {
      size: MOTION_SIZE,
      style: MOTION_STYLE,
      allowFallback: true,
      uniqueId: SCENE_BG_SEEDS[key] || 41999
    });
    if (result && result.pixels) {
      SCENE_BG_CACHE[key] = new Uint8ClampedArray(result.pixels);
      return SCENE_BG_CACHE[key];
    }
    return null;
  }

  function resolveScenePixels(profile) {
    if (!profile) return null;
    var sceneType = PROFILE_SCENE[profile.id] || profile.prop || null;
    if (!sceneType) return null;
    if (sceneType === "ground") sceneType = "grass";
    return getSceneBackground(sceneType);
  }

  function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
  }

  function easeInOutSine(t) {
    return 0.5 - Math.cos(Math.PI * clamp(t, 0, 1)) * 0.5;
  }

  function easeInOutCubic(t) {
    t = clamp(t, 0, 1);
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function smoothStep(t) {
    t = clamp(t, 0, 1);
    return t * t * (3 - 2 * t);
  }

  function poseNum(v, fallback) {
    return v == null || isNaN(v) ? (fallback || 0) : v;
  }

  var MULTI_VARIANT_PROFILES = {
    walkLR: 4, driveLR: 4, flyLR: 4, bounceBall: 4, kickFootball: 4,
    dribbleBasketball: 4, serveBall: 4, trainChug: 4, swimFish: 4, beeBuzz: 4,
    rocketUp: 4, orbitSpin: 4, flickerFlame: 4, sway: 4, breathe: 4, pulseGlow: 4,
    waveFlow: 4, bloomGrow: 4, fallFromTree: 4, floatUp: 4, surfRide: 4, foodBob: 4,
    flagWave: 4, musicPlay: 4, windmillSpin: 4, houseSmoke: 4, factorySmoke: 4,
    steamRise: 4, rainPour: 4, snowDrift: 4, lightningFlash: 4, screenPulse: 4,
    lighthouseBeam: 4, christmasTwinkle: 4, clockTick: 4, kickFootball: 4
  };

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function cleanMotionPrompt(text) {
    if (typeof NocoPixel !== "undefined" && NocoPixel.extractSubject) {
      return NocoPixel.extractSubject(text) || String(text || "").trim();
    }
    return String(text || "")
      .replace(/\b(video|film|animation|clip|bewegung|motion|erstelle|create|mach)\b/gi, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function motifHasPersonKeys(motif) {
    if (!motif || !motif.keys) return false;
    var i;
    for (i = 0; i < motif.keys.length; i++) {
      if (/mensch|person|human|mann|frau|kind|junge|maedchen|boy|girl/.test(motif.keys[i])) return true;
    }
    return false;
  }

  function createProfile(id, label, getPose, opts) {
    opts = opts || {};
    return {
      id: id,
      label: label,
      prop: opts.prop || null,
      getPose: getPose
    };
  }

  var MOTION_PROFILES = {
    fallFromTree: createProfile("fallFromTree", "Fällt vom Baum", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var fall = easeInOutSine(t);
      return {
        ox: Math.round(lerp(-1, 2, fall)),
        oy: Math.round(lerp(-7, 5, fall)),
        tint: lerp(0.04, -0.06, fall),
        scaleX: lerp(0.96, 1.04, fall),
        scaleY: lerp(1.02, 0.94, fall),
        useProp: true,
        overlay: t > 0.2 && t < 0.85 ? "wind" : null,
        overlayPhase: t,
        overlayIntensity: 0.25
      };
    }, { prop: "tree" }),

    walkLR: createProfile("walkLR", "Geht auf der Stelle", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var step = Math.sin(t * Math.PI * 4);
      return {
        ox: 0,
        oy: 0,
        flipH: t > 0.48,
        tint: step * 0.02,
        scaleX: lerp(0.97, 1.03, Math.abs(step) * 0.5 + 0.5),
        scaleY: lerp(1.03, 0.95, Math.abs(step)),
        useProp: false
      };
    }),

    driveLR: createProfile("driveLR", "Rollt mit Boden", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      return {
        ox: 0,
        oy: 0,
        tint: Math.sin(t * Math.PI * 2) * 0.03,
        flipH: t > 0.5,
        scrollBand: { y0: 20, y1: 36, dx: Math.round(t * 14) },
        useProp: false
      };
    }),

    flyLR: createProfile("flyLR", "Flügelschlag", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var wing = Math.sin(t * Math.PI * 4);
      return {
        ox: 0,
        oy: 0,
        flipH: t > 0.5,
        tint: Math.sin(t * Math.PI) * 0.05,
        scaleX: lerp(0.95, 1.06, easeInOutSine((wing + 1) * 0.5)),
        scaleY: lerp(1.05, 0.92, easeInOutSine((wing + 1) * 0.5)),
        overlay: "wind",
        overlayPhase: t * 0.6,
        overlayIntensity: 0.3,
        useProp: false
      };
    }),

    floatUp: createProfile("floatUp", "Schwebt leicht", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var bob = Math.sin(t * Math.PI * 2);
      return {
        ox: 0,
        oy: 0,
        tint: bob * 0.07,
        scale: lerp(0.97, 1.04, easeInOutSine((bob + 1) * 0.5)),
        useProp: false
      };
    }),

    pulseGlow: createProfile("pulseGlow", "Pulsierendes Leuchten", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var p = Math.sin(t * Math.PI * 2);
      return {
        ox: 0,
        oy: 0,
        tint: p * 0.18,
        scale: lerp(0.94, 1.08, easeInOutSine((p + 1) * 0.5)),
        useProp: false
      };
    }),

    waveFlow: createProfile("waveFlow", "Fließende Wellen", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      return {
        ox: 0,
        oy: 0,
        tint: Math.sin(t * Math.PI * 2) * 0.05,
        scrollBand: { y0: 14, y1: 36, dx: Math.round(t * 10), dy: Math.round(Math.sin(t * Math.PI * 2)) },
        overlay: "splash",
        overlayPhase: t,
        overlayIntensity: 0.55,
        useProp: false
      };
    }),

    bloomGrow: createProfile("bloomGrow", "Wächst & blüht", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      return {
        ox: 0,
        oy: 0,
        tint: lerp(-0.02, 0.12, t),
        scale: lerp(0.9, 1.1, easeInOutSine(t)),
        overlay: "sparkle",
        overlayPhase: t,
        overlayIntensity: lerp(0.3, 0.85, t),
        useProp: false
      };
    }),

    bounceBall: createProfile("bounceBall", "Hüpft auf der Stelle", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var bounce = Math.abs(Math.sin(t * Math.PI * 2));
      return {
        ox: 0,
        oy: 0,
        tint: bounce * 0.05,
        scaleX: lerp(1.1, 0.9, bounce),
        scaleY: lerp(0.88, 1.14, bounce),
        useProp: false
      };
    }),

    kickFootball: createProfile("kickFootball", "Wird geschossen", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var kick = easeInOutCubic(t);
      return {
        ox: Math.round(lerp(-6, 6, kick)),
        oy: Math.round(Math.sin(t * Math.PI) * -4),
        tint: kick * 0.04,
        scaleX: lerp(1.04, 0.92, Math.abs(Math.sin(t * Math.PI))),
        scaleY: lerp(0.94, 1.06, Math.abs(Math.sin(t * Math.PI))),
        useProp: true,
        overlay: "grassKick",
        overlayPhase: t,
        overlayIntensity: 0.85 + Math.sin(t * Math.PI) * 0.2
      };
    }, { prop: "ground" }),

    dribbleBasketball: createProfile("dribbleBasketball", "Dribbelt", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var bounce = Math.abs(Math.sin(t * Math.PI * 3));
      return {
        ox: Math.round(Math.sin(t * Math.PI * 2) * 2),
        oy: Math.round(lerp(3, -4, bounce)),
        tint: bounce * 0.05,
        scaleX: lerp(1.06, 0.92, bounce),
        scaleY: lerp(0.9, 1.1, bounce),
        useProp: true
      };
    }, { prop: "ground" }),

    serveBall: createProfile("serveBall", "Fliegt übers Netz", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var arc = Math.sin(t * Math.PI);
      return {
        ox: Math.round(lerp(-5, 5, easeInOutSine(t))),
        oy: Math.round(arc * -5),
        scaleX: lerp(1, 0.94, Math.abs(arc)),
        scaleY: lerp(1, 1.06, Math.abs(arc)),
        overlay: "wind",
        overlayPhase: t,
        overlayIntensity: 0.35,
        useProp: false
      };
    }),

    houseSmoke: createProfile("houseSmoke", "Rauch aus dem Schornstein", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      return {
        ox: 0,
        oy: 0,
        tint: Math.sin(t * Math.PI * 4) * 0.04,
        useProp: false,
        overlay: "smoke",
        overlayPhase: t,
        overlayIntensity: lerp(0.65, 1.1, easeInOutSine(t)),
        overlayPattern: "house"
      };
    }),

    factorySmoke: createProfile("factorySmoke", "Fabrik-Rauch", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      return {
        ox: 0,
        oy: 0,
        tint: Math.sin(t * Math.PI * 2) * 0.03,
        useProp: false,
        overlay: "smoke",
        overlayPhase: t,
        overlayIntensity: lerp(0.75, 1.2, t),
        overlayVariant: "factory"
      };
    }),

    trainChug: createProfile("trainChug", "Zug mit Rauch", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      return {
        ox: 0,
        oy: 0,
        flipH: t > 0.5,
        scrollBand: { y0: 22, y1: 36, dx: Math.round(t * 16) },
        useProp: true,
        overlay: "smoke",
        overlayPhase: (t + 0.35) % 1,
        overlayIntensity: 0.8,
        overlayVariant: "train"
      };
    }, { prop: "ground" }),

    steamRise: createProfile("steamRise", "Dampf steigt auf", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      return {
        ox: 0,
        oy: 0,
        tint: lerp(0, 0.04, t),
        useProp: false,
        overlay: "steam",
        overlayPhase: t,
        overlayIntensity: lerp(0.55, 1, t)
      };
    }),

    musicPlay: createProfile("musicPlay", "Musik spielt", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var beat = Math.sin(t * Math.PI * 4);
      return {
        ox: 0,
        oy: 0,
        tint: beat * 0.09,
        scale: lerp(0.96, 1.05, easeInOutSine((beat + 1) * 0.5)),
        overlay: "notes",
        overlayPhase: t
      };
    }),

    clockTick: createProfile("clockTick", "Uhr tickt", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      return {
        ox: 0,
        oy: 0,
        useProp: false,
        overlay: "tick",
        overlayPhase: t
      };
    }),

    flagWave: createProfile("flagWave", "Flagge weht", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var wave = Math.sin(t * Math.PI * 3);
      return {
        ox: 0,
        oy: 0,
        tint: wave * 0.04,
        scaleX: lerp(0.97, 1.04, easeInOutSine((wave + 1) * 0.5)),
        scaleY: lerp(1.02, 0.97, easeInOutSine((wave + 1) * 0.5)),
        useProp: false
      };
    }),

    rainPour: createProfile("rainPour", "Regen fällt", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      return {
        ox: 0,
        oy: 0,
        tint: -0.04,
        overlay: "rain",
        overlayPhase: t
      };
    }),

    snowDrift: createProfile("snowDrift", "Schnee treibt", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      return {
        ox: 0,
        oy: 0,
        tint: lerp(0, 0.06, t),
        overlay: "snow",
        overlayPhase: t
      };
    }),

    lightningFlash: createProfile("lightningFlash", "Blitz & Donner", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var flash = Math.pow(Math.max(0, Math.sin(t * Math.PI * 5)), 3);
      return {
        ox: 0,
        oy: 0,
        tint: flash * 0.38,
        scale: lerp(1, 1.03, flash),
        overlay: flash > 0.35 ? "lightning" : null,
        overlayPhase: t
      };
    }),

    swimFish: createProfile("swimFish", "Schwimmt im Wasser", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var tail = Math.sin(t * Math.PI * 4);
      return {
        ox: 0,
        oy: 0,
        flipH: t > 0.5,
        tint: Math.sin(t * Math.PI * 2) * 0.04,
        scaleX: lerp(0.96, 1.05, easeInOutSine((tail + 1) * 0.5)),
        scaleY: lerp(1.02, 0.96, easeInOutSine((tail + 1) * 0.5)),
        scrollBand: { y0: 16, y1: 36, dx: Math.round(t * 8) },
        overlay: "bubbles",
        overlayPhase: t
      };
    }),

    beeBuzz: createProfile("beeBuzz", "Summt & flattert", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var buzz = Math.sin(t * Math.PI * 6);
      return {
        ox: 0,
        oy: 0,
        flipH: buzz > 0,
        scaleX: lerp(0.97, 1.04, easeInOutSine((buzz + 1) * 0.5)),
        scaleY: lerp(1.03, 0.95, easeInOutSine((buzz + 1) * 0.5)),
        overlay: "wind",
        overlayPhase: t,
        overlayIntensity: 0.22
      };
    }),

    screenPulse: createProfile("screenPulse", "Bildschirm leuchtet", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var pulse = Math.sin(t * Math.PI * 2);
      return {
        ox: 0,
        oy: 0,
        tint: pulse * 0.15,
        scale: lerp(0.97, 1.03, easeInOutSine((pulse + 1) * 0.5)),
        overlay: "screenGlow",
        overlayPhase: t
      };
    }),

    lighthouseBeam: createProfile("lighthouseBeam", "Leuchtfeuer dreht sich", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      return {
        ox: 0,
        oy: 0,
        tint: Math.sin(t * Math.PI * 2) * 0.1,
        overlay: "beam",
        overlayPhase: t
      };
    }),

    christmasTwinkle: createProfile("christmasTwinkle", "Lichter blinken", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var tw = Math.sin(t * Math.PI * 4);
      return {
        ox: 0,
        oy: 0,
        tint: tw * 0.14,
        scale: lerp(0.98, 1.04, easeInOutSine((tw + 1) * 0.5)),
        overlay: "sparkle",
        overlayPhase: t
      };
    }),

    foodBob: createProfile("foodBob", "Dampft & glüht", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var bob = Math.sin(t * Math.PI * 2);
      return {
        ox: 0,
        oy: 0,
        tint: bob * 0.04,
        scale: lerp(0.97, 1.04, easeInOutSine((bob + 1) * 0.5)),
        overlay: "steam",
        overlayPhase: (t * 0.7) % 1,
        overlayIntensity: 0.5
      };
    }),

    windmillSpin: createProfile("windmillSpin", "Flügel drehen", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      return {
        ox: 0,
        oy: 0,
        overlay: "wind",
        overlayPhase: t
      };
    }),

    surfRide: createProfile("surfRide", "Reitet die Welle", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var wave = Math.sin(t * Math.PI * 2);
      return {
        ox: 0,
        oy: 0,
        flipH: t > 0.5,
        tint: Math.sin(t * Math.PI) * 0.04,
        scaleX: lerp(0.96, 1.04, easeInOutSine((wave + 1) * 0.5)),
        scaleY: lerp(1.03, 0.95, easeInOutSine((wave + 1) * 0.5)),
        scrollBand: { y0: 18, y1: 36, dx: Math.round(t * 9) },
        overlay: "splash",
        overlayPhase: t
      };
    }),

    rocketUp: createProfile("rocketUp", "Startet mit Flamme", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      return {
        ox: 0,
        oy: 0,
        tint: lerp(0.02, 0.14, t),
        scaleX: lerp(1, 0.94, t),
        scaleY: lerp(1, 1.08, t),
        overlay: "sparkle",
        overlayPhase: (1 - t),
        overlayIntensity: lerp(0.4, 1.1, t)
      };
    }),

    orbitSpin: createProfile("orbitSpin", "Kreist & leuchtet", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      return {
        ox: 0,
        oy: 0,
        tint: Math.sin(t * Math.PI * 2) * 0.08,
        overlay: "beam",
        overlayPhase: t,
        overlayIntensity: 0.55
      };
    }),

    flickerFlame: createProfile("flickerFlame", "Flackert", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var flick = Math.sin(t * Math.PI * 5);
      return {
        ox: 0,
        oy: 0,
        tint: lerp(0.08, 0.2, (ki % 3) / 2),
        scaleX: lerp(0.94, 1.08, easeInOutSine((flick + 1) * 0.5)),
        scaleY: lerp(1.06, 0.9, easeInOutSine((flick + 1) * 0.5))
      };
    }),

    sway: createProfile("sway", "Sanftes Leuchten", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var s = Math.sin(t * Math.PI * 2);
      return {
        ox: 0,
        oy: 0,
        tint: s * 0.06,
        scale: lerp(0.96, 1.04, easeInOutSine((s + 1) * 0.5)),
        useProp: false
      };
    }),

    breathe: createProfile("breathe", "Atmet leicht", function (ki, total) {
      var t = ki / Math.max(1, total - 1);
      var b = Math.sin(t * Math.PI * 2);
      return {
        ox: 0,
        oy: 0,
        tint: b * 0.05,
        scale: lerp(0.94, 1.06, easeInOutSine((b + 1) * 0.5)),
        useProp: false
      };
    })
  };

  function motifText(motif) {
    if (!motif) return "";
    return ((motif.keys || []).join(" ") + " " + (motif.label || "") + " " + (motif.pattern || "")).toLowerCase();
  }

  function pickMotionProfile(motif) {
    if (!motif) return MOTION_PROFILES.sway;
    var pat = (motif.pattern || "").toLowerCase();
    var txt = motifText(motif);
    var label = (motif.label || (motif.keys && motif.keys[0]) || "").toLowerCase();
    var byPat = profileByPattern(pat);
    if (byPat) return byPat;

    if (/fussball|football|soccer/.test(txt)) return MOTION_PROFILES.kickFootball;
    if (/basketball/.test(txt)) return MOTION_PROFILES.dribbleBasketball;
    if (/tennis|volleyball|handball/.test(txt)) return MOTION_PROFILES.serveBall;

    if (/haus|house|home|wohnhaus|cottage|hütte|huette/.test(txt)) return MOTION_PROFILES.houseSmoke;
    if (/fabrik|factory|industrie|kraftwerk/.test(txt)) return MOTION_PROFILES.factorySmoke;
    if (/zug|train|bahn|lok|dampflok/.test(txt)) return MOTION_PROFILES.trainChug;
    if (/leuchtturm|lighthouse/.test(txt)) return MOTION_PROFILES.lighthouseBeam;
    if (/windmuehle|windmill/.test(txt)) return MOTION_PROFILES.windmillSpin;

    if (/kaffee|coffee|tee|tea|cup|tasse|ramen|suppe|potion|trank|honig/.test(txt)) return MOTION_PROFILES.steamRise;
    if (/pizza|burger|food|essen|kuchen|cake|sushi|taco|donut|eis|icecream|nudel/.test(txt)) return MOTION_PROFILES.foodBob;

    if (/musik|music|gitarre|guitar|note|podcast|mikrofon|mic|radio/.test(txt)) return MOTION_PROFILES.musicPlay;
    if (/uhr|clock|zeit/.test(txt)) return MOTION_PROFILES.clockTick;
    if (/flagge|flag|banner/.test(txt)) return MOTION_PROFILES.flagWave;

    if (/regen|rain|wolke|cloud/.test(txt) && !/regenbogen|rainbow/.test(txt)) return MOTION_PROFILES.rainPour;
    if (/schnee|snow|winter|gletscher|glacier/.test(txt)) return MOTION_PROFILES.snowDrift;
    if (/blitz|lightning|gewitter|storm|tornado/.test(txt)) return MOTION_PROFILES.lightningFlash;

    if (/fisch|fish|wal|whale|delfin|dolphin|hai|shark|u-boot|submarine/.test(txt)) return MOTION_PROFILES.swimFish;
    if (/biene|bee|libelle|dragonfly|fliege|wespe/.test(txt)) return MOTION_PROFILES.beeBuzz;

    if (/laptop|computer|pc|handy|phone|smartphone|tv|stream|bildschirm|monitor/.test(txt)) return MOTION_PROFILES.screenPulse;
    if (/weihnachten|christmas|christbaum|tannenbaum/.test(txt)) return MOTION_PROFILES.christmasTwinkle;
    if (/surf|skate|wellenreiten/.test(txt)) return MOTION_PROFILES.surfRide;

    if (FRUIT_PATTERNS[pat] || /apfel|birne|kirsche|orange|zitrone|obst|fruit|banane|mango|traube|wassermelone/.test(txt)) {
      return MOTION_PROFILES.fallFromTree;
    }
    if (motifHasPersonKeys(motif) || /mensch|person|human|mann|frau|kind|junge|maedchen/.test(txt)) {
      return MOTION_PROFILES.walkLR;
    }
    if (WALK_PATTERNS[pat] || /katze|hund|penguin|pinguin|drache|dragon|robot|geist|ghost/.test(txt)) {
      return MOTION_PROFILES.walkLR;
    }
    if (DRIVE_PATTERNS[pat]) return MOTION_PROFILES.driveLR;
    if (FLY_PATTERNS[pat]) return MOTION_PROFILES.flyLR;
    if (pat === "fish") return MOTION_PROFILES.swimFish;
    if (FLOW_PATTERNS[pat]) return MOTION_PROFILES.waveFlow;
    if (PULSE_PATTERNS[pat]) return MOTION_PROFILES.pulseGlow;
    if (BLOOM_PATTERNS[pat]) return MOTION_PROFILES.bloomGrow;
    if (BOUNCE_PATTERNS[pat] && !FOOTBALL_SKIP_BOUNCE.test(txt)) return MOTION_PROFILES.bounceBall;
    if (pat === "rocket" || pat === "comet") return MOTION_PROFILES.rocketUp;
    if (pat === "planet" || pat === "atom" || pat === "helix") return MOTION_PROFILES.orbitSpin;
    if (pat === "flame" || pat === "volcano" || pat === "phoenix") return MOTION_PROFILES.flickerFlame;
    if (pat === "castle" || pat === "skyline" || pat === "tower" || pat === "bridge") {
      return MOTION_PROFILES.houseSmoke;
    }
    if (FALL_PATTERNS[pat]) return MOTION_PROFILES.fallFromTree;

    var k;
    for (k in MOTION_PROFILES) {
      if (k !== "sway" && label.indexOf(k) >= 0) return MOTION_PROFILES[k];
    }
    return MOTION_PROFILES.sway;
  }

  function pickMotionType(motif) {
    return pickMotionProfile(motif).id;
  }

  function resolveMotionPrompt(prompt) {
    if (typeof NocoPixel === "undefined") {
      return { supported: false, message: "NOCO Render nicht geladen." };
    }
    var userRaw = String(prompt || "").trim();
    if (!userRaw) {
      return {
        supported: false,
        message: "**NOCO Motion**\n\nBeschreibe frei was du sehen willst — z.B. *Erstelle ein Video von einem Apfel*.\n\nNOCO mappt auf die **3600er Bilddatenbank**."
      };
    }
    var smart = NocoPixel.resolveMotifSmart
      ? NocoPixel.resolveMotifSmart(userRaw)
      : NocoPixel.resolveMotif(userRaw);
    if (!smart || !smart.supported || !smart.motif) {
      return smart || { supported: false, message: "Motiv konnte nicht gemappt werden." };
    }
    var profile = pickMotionProfile(smart.motif);
    return {
      supported: true,
      motif: smart.motif,
      label: smart.mappedLabel || smart.label,
      userAsked: smart.userAsked || cleanMotionPrompt(userRaw),
      mappedLabel: smart.mappedLabel || smart.label,
      mappingNote: smart.mappingNote || "",
      matchType: smart.matchType || "exact",
      matchPct: smart.matchPct || 100,
      needsConfirm: smart.needsConfirm,
      suggestPhrase: smart.suggestPhrase || "",
      alternateLabel: smart.alternateLabel || "",
      alternatePct: smart.alternatePct || 0,
      subject: smart.subject || cleanMotionPrompt(userRaw),
      motionType: profile.id,
      motionProfile: profile
    };
  }

  function shiftPixels(pixels, size, dx, dy, bg) {
    bg = bg || BG_COLOR;
    var out = new Uint8ClampedArray(pixels.length);
    var x, y, sx, sy, si, di;
    for (y = 0; y < size; y++) {
      for (x = 0; x < size; x++) {
        di = (y * size + x) * 4;
        sx = x - dx;
        sy = y - dy;
        if (sx < 0 || sy < 0 || sx >= size || sy >= size) {
          out[di] = bg[0];
          out[di + 1] = bg[1];
          out[di + 2] = bg[2];
          out[di + 3] = bg[3];
        } else {
          si = (sy * size + sx) * 4;
          out[di] = pixels[si];
          out[di + 1] = pixels[si + 1];
          out[di + 2] = pixels[si + 2];
          out[di + 3] = pixels[si + 3];
        }
      }
    }
    return out;
  }

  function tintPixels(pixels, amount) {
    var out = new Uint8ClampedArray(pixels.length);
    var i, a;
    amount = clamp(amount, -0.35, 0.35);
    for (i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] < 8) {
        out[i] = pixels[i];
        out[i + 1] = pixels[i + 1];
        out[i + 2] = pixels[i + 2];
        out[i + 3] = pixels[i + 3];
        continue;
      }
      a = 1 + amount;
      out[i] = clamp(Math.round(pixels[i] * a), 0, 255);
      out[i + 1] = clamp(Math.round(pixels[i + 1] * a), 0, 255);
      out[i + 2] = clamp(Math.round(pixels[i + 2] * a), 0, 255);
      out[i + 3] = pixels[i + 3];
    }
    return out;
  }

  function lerpPixels(a, b, t) {
    var out = new Uint8ClampedArray(a.length);
    var i;
    t = easeInOutCubic(t);
    for (i = 0; i < a.length; i += 4) {
      out[i] = Math.round(a[i] + (b[i] - a[i]) * t);
      out[i + 1] = Math.round(a[i + 1] + (b[i + 1] - a[i + 1]) * t);
      out[i + 2] = Math.round(a[i + 2] + (b[i + 2] - a[i + 2]) * t);
      out[i + 3] = Math.round(a[i + 3] + (b[i + 3] - a[i + 3]) * t);
    }
    return out;
  }

  function lerpPixelsLinear(a, b, t) {
    var out = new Uint8ClampedArray(a.length);
    var i;
    t = clamp(t, 0, 1);
    for (i = 0; i < a.length; i += 4) {
      out[i] = Math.round(a[i] + (b[i] - a[i]) * t);
      out[i + 1] = Math.round(a[i + 1] + (b[i + 1] - a[i + 1]) * t);
      out[i + 2] = Math.round(a[i + 2] + (b[i + 2] - a[i + 2]) * t);
      out[i + 3] = Math.round(a[i + 3] + (b[i + 3] - a[i + 3]) * t);
    }
    return out;
  }

  function toPixelBuffer(data) {
    if (!data) return null;
    return data instanceof Uint8ClampedArray ? data : new Uint8ClampedArray(data);
  }

  function shiftPixelsSmooth(pixels, size, fx, fy, bg) {
    bg = bg || BG_COLOR;
    var ix0 = Math.floor(fx);
    var iy0 = Math.floor(fy);
    var ix1 = Math.ceil(fx);
    var iy1 = Math.ceil(fy);
    var tx = fx - ix0;
    var ty = fy - iy0;
    if (tx < 0.001 && ty < 0.001) return shiftPixels(pixels, size, ix0, iy0, bg);
    var p00 = shiftPixels(pixels, size, ix0, iy0, bg);
    var p10 = shiftPixels(pixels, size, ix1, iy0, bg);
    var p01 = shiftPixels(pixels, size, ix0, iy1, bg);
    var p11 = shiftPixels(pixels, size, ix1, iy1, bg);
    var top = lerpPixels(p00, p10, tx);
    var bot = lerpPixels(p01, p11, tx);
    return lerpPixels(top, bot, ty);
  }

  function flipPixelsH(pixels, size) {
    var out = new Uint8ClampedArray(pixels.length);
    var x, y, si, di;
    for (y = 0; y < size; y++) {
      for (x = 0; x < size; x++) {
        si = (y * size + x) * 4;
        di = (y * size + (size - 1 - x)) * 4;
        out[di] = pixels[si];
        out[di + 1] = pixels[si + 1];
        out[di + 2] = pixels[si + 2];
        out[di + 3] = pixels[si + 3];
      }
    }
    return out;
  }

  function scalePixelsCenter(pixels, size, scale) {
    if (Math.abs(scale - 1) < 0.02) return new Uint8ClampedArray(pixels);
    var out = new Uint8ClampedArray(pixels.length);
    var cx = (size - 1) * 0.5;
    var cy = (size - 1) * 0.5;
    var x, y, sx, sy, si, di;
    for (y = 0; y < size; y++) {
      for (x = 0; x < size; x++) {
        di = (y * size + x) * 4;
        sx = Math.round(cx + (x - cx) / scale);
        sy = Math.round(cy + (y - cy) / scale);
        if (sx < 0 || sy < 0 || sx >= size || sy >= size) {
          out[di] = BG_COLOR[0];
          out[di + 1] = BG_COLOR[1];
          out[di + 2] = BG_COLOR[2];
          out[di + 3] = BG_COLOR[3];
        } else {
          si = (sy * size + sx) * 4;
          out[di] = pixels[si];
          out[di + 1] = pixels[si + 1];
          out[di + 2] = pixels[si + 2];
          out[di + 3] = pixels[si + 3];
        }
      }
    }
    return out;
  }

  function squashStretchCenter(pixels, size, scaleX, scaleY) {
    scaleX = scaleX || 1;
    scaleY = scaleY || 1;
    if (Math.abs(scaleX - 1) < 0.02 && Math.abs(scaleY - 1) < 0.02) return new Uint8ClampedArray(pixels);
    var out = new Uint8ClampedArray(pixels.length);
    var cx = (size - 1) * 0.5;
    var cy = (size - 1) * 0.5;
    var x, y, sx, sy, si, di;
    for (y = 0; y < size; y++) {
      for (x = 0; x < size; x++) {
        di = (y * size + x) * 4;
        sx = Math.round(cx + (x - cx) / scaleX);
        sy = Math.round(cy + (y - cy) / scaleY);
        if (sx < 0 || sy < 0 || sx >= size || sy >= size) {
          out[di] = BG_COLOR[0];
          out[di + 1] = BG_COLOR[1];
          out[di + 2] = BG_COLOR[2];
          out[di + 3] = BG_COLOR[3];
        } else {
          si = (sy * size + sx) * 4;
          out[di] = pixels[si];
          out[di + 1] = pixels[si + 1];
          out[di + 2] = pixels[si + 2];
          out[di + 3] = pixels[si + 3];
        }
      }
    }
    return out;
  }

  function scrollBandPixels(pixels, size, y0, y1, dx, dy) {
    dx = Math.round(dx || 0);
    dy = Math.round(dy || 0);
    var out = new Uint8ClampedArray(pixels);
    var y, x, sx, sy, si, di;
    y0 = Math.max(0, Math.min(size - 1, y0));
    y1 = Math.max(y0 + 1, Math.min(size, y1));
    for (y = y0; y < y1; y++) {
      for (x = 0; x < size; x++) {
        sx = ((x - dx) % size + size) % size;
        sy = y - dy;
        di = (y * size + x) * 4;
        if (sy < y0 || sy >= y1) continue;
        si = (sy * size + sx) * 4;
        out[di] = pixels[si];
        out[di + 1] = pixels[si + 1];
        out[di + 2] = pixels[si + 2];
        out[di + 3] = pixels[si + 3];
      }
    }
    return out;
  }

  function applyFrameScale(pixels, size, pose) {
    if (pose.scaleX != null || pose.scaleY != null) {
      return squashStretchCenter(
        pixels,
        size,
        pose.scaleX != null ? pose.scaleX : (pose.scale || 1),
        pose.scaleY != null ? pose.scaleY : (pose.scale || 1)
      );
    }
    if (pose.scale && Math.abs(pose.scale - 1) > 0.02) {
      return scalePixelsCenter(pixels, size, pose.scale);
    }
    return pixels;
  }

  function applyFullFrameFx(frame, size, pose) {
    if (pose.flipH) frame = flipPixelsH(frame, size);
    frame = applyFrameScale(frame, size, pose);
    if (pose.tint) frame = tintPixels(frame, pose.tint);
    if (pose.scrollBand) {
      frame = scrollBandPixels(
        frame,
        size,
        pose.scrollBand.y0,
        pose.scrollBand.y1,
        pose.scrollBand.dx,
        pose.scrollBand.dy
      );
    }
    if (pose.overlay) {
      frame = applyMotionOverlay(
        frame,
        size,
        pose.overlay,
        pose.overlayPhase,
        pose.overlayIntensity,
        pose.overlayVariant,
        pose.overlayPattern
      );
    }
    return frame;
  }

  function solidBg(size, color) {
    color = color || BG_COLOR;
    var out = new Uint8ClampedArray(size * size * 4);
    var i;
    for (i = 0; i < out.length; i += 4) {
      out[i] = color[0];
      out[i + 1] = color[1];
      out[i + 2] = color[2];
      out[i + 3] = color[3];
    }
    return out;
  }

  function extractSubjectLayer(pixels, size, bg) {
    bg = bg || BG_COLOR;
    var out = new Uint8ClampedArray(pixels.length);
    var i, isBg;
    for (i = 0; i < pixels.length; i += 4) {
      isBg = pixels[i + 3] < 12 ||
        (Math.abs(pixels[i] - bg[0]) < 6 &&
         Math.abs(pixels[i + 1] - bg[1]) < 6 &&
         Math.abs(pixels[i + 2] - bg[2]) < 6);
      if (isBg) {
        out[i + 3] = 0;
      } else {
        out[i] = pixels[i];
        out[i + 1] = pixels[i + 1];
        out[i + 2] = pixels[i + 2];
        out[i + 3] = pixels[i + 3];
      }
    }
    return out;
  }

  function compositeLayers(bg, fg, size, ox, oy) {
    var out = new Uint8ClampedArray(bg);
    var x, y, fx, fy, di, fi;
    for (y = 0; y < size; y++) {
      for (x = 0; x < size; x++) {
        fx = x - ox;
        fy = y - oy;
        if (fx < 0 || fy < 0 || fx >= size || fy >= size) continue;
        fi = (fy * size + fx) * 4;
        if (fg[fi + 3] > 24) {
          di = (y * size + x) * 4;
          out[di] = fg[fi];
          out[di + 1] = fg[fi + 1];
          out[di + 2] = fg[fi + 2];
          out[di + 3] = fg[fi + 3];
        }
      }
    }
    return out;
  }

  function blendPixel(buf, size, x, y, rgba) {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    var di = (y * size + x) * 4;
    var a = rgba[3] / 255;
    if (a <= 0.01) return;
    buf[di] = Math.round(buf[di] * (1 - a) + rgba[0] * a);
    buf[di + 1] = Math.round(buf[di + 1] * (1 - a) + rgba[1] * a);
    buf[di + 2] = Math.round(buf[di + 2] * (1 - a) + rgba[2] * a);
    buf[di + 3] = Math.max(buf[di + 3], Math.round(rgba[3]));
  }

  function drawDisk(buf, size, cx, cy, r, rgba) {
    var x, y;
    for (y = -r; y <= r; y++) {
      for (x = -r; x <= r; x++) {
        if (x * x + y * y <= r * r + 0.4) blendPixel(buf, size, cx + x, cy + y, rgba);
      }
    }
  }

  function drawLine(buf, size, x0, y0, x1, y1, rgba) {
    var dx = Math.abs(x1 - x0);
    var dy = Math.abs(y1 - y0);
    var sx = x0 < x1 ? 1 : -1;
    var sy = y0 < y1 ? 1 : -1;
    var err = dx - dy;
    var x = x0;
    var y = y0;
    var guard = 0;
    while (guard++ < size * 4) {
      blendPixel(buf, size, x, y, rgba);
      if (x === x1 && y === y1) break;
      var e2 = err * 2;
      if (e2 > -dy) { err -= dy; x += sx; }
      if (e2 < dx) { err += dx; y += sy; }
    }
  }

  function getChimneyAnchor(pattern, variant) {
    var p = (pattern || "").toLowerCase();
    if (variant === "factory" || p === "factory" || p === "skyline") {
      return { x: 0.55, y: 0.24 };
    }
    if (p === "castle" || p === "tower" || p === "church") {
      return { x: 0.5, y: 0.18 };
    }
    if (p === "house" || p === "home" || p === "cottage" || p === "gingerhouse") {
      return { x: 0.54, y: 0.2 };
    }
    return { x: 0.48, y: 0.26 };
  }

  function applyMotionOverlay(pixels, size, overlayType, phase, intensity, variant, pattern) {
    if (!overlayType) return pixels;
    var out = new Uint8ClampedArray(pixels);
    var i, p, px, py, alpha, puff, cx, cy, chimney;
    intensity = intensity == null ? 1 : intensity;
    phase = phase || 0;

    if (overlayType === "smoke") {
      chimney = getChimneyAnchor(pattern, variant);
      var chimneyX = size * chimney.x;
      var chimneyY = size * chimney.y;
      for (i = 0; i < 7; i++) {
        puff = (phase + i * 0.14) % 1;
        px = Math.round(chimneyX + Math.sin(puff * Math.PI * 2 + i * 1.7) * (2.5 + puff * 3));
        py = Math.round(chimneyY - puff * size * 0.42);
        alpha = Math.round(165 * (1 - puff * 0.82) * intensity);
        drawDisk(out, size, px, py, 1 + Math.round(puff * 2.5), [175, 180, 190, alpha]);
      }
      if (variant === "train") {
        drawDisk(out, size, Math.round(size * 0.22), Math.round(size * 0.55), 2, [160, 165, 175, Math.round(120 * intensity)]);
      }
    } else if (overlayType === "steam") {
      for (i = 0; i < 4; i++) {
        puff = (phase + i * 0.22) % 1;
        px = Math.round(size * 0.5 + Math.sin(puff * Math.PI * 2 + i) * 1.5);
        py = Math.round(size * 0.32 - puff * size * 0.3);
        alpha = Math.round(130 * (1 - puff) * intensity);
        drawDisk(out, size, px, py, 1 + Math.round((1 - puff) * 1.5), [235, 240, 248, alpha]);
      }
    } else if (overlayType === "rain") {
      for (i = 0; i < 22; i++) {
        p = (phase + i * 0.045) % 1;
        px = (i * 2 + Math.round(p * 6)) % size;
        py = Math.round(p * size);
        drawLine(out, size, px, py, px - 1, py + 3, [130, 165, 225, Math.round(185 * intensity)]);
      }
    } else if (overlayType === "snow") {
      for (i = 0; i < 16; i++) {
        p = (phase + i * 0.08) % 1;
        px = Math.round((i * 3 + Math.sin(p * Math.PI * 2 + i) * 2.5) % size);
        py = Math.round(p * size);
        drawDisk(out, size, px, py, 1, [245, 248, 255, Math.round(210 * intensity)]);
      }
    } else if (overlayType === "notes") {
      var noteColors = [[255, 180, 220, 220], [180, 220, 255, 220], [255, 230, 150, 220]];
      for (i = 0; i < 3; i++) {
        p = (phase + i * 0.33) % 1;
        px = Math.round(size * 0.62 + Math.sin(p * Math.PI * 2 + i) * 4);
        py = Math.round(size * 0.22 - p * size * 0.25);
        drawDisk(out, size, px, py, 1, noteColors[i % 3]);
      }
    } else if (overlayType === "tick") {
      cx = Math.round(size * 0.5);
      cy = Math.round(size * 0.5);
      var angle = phase * Math.PI * 2;
      drawLine(out, size, cx, cy, cx + Math.round(Math.sin(angle) * 5), cy - Math.round(Math.cos(angle) * 5), [255, 220, 80, 230]);
    } else if (overlayType === "bubbles") {
      for (i = 0; i < 4; i++) {
        p = (phase + i * 0.25) % 1;
        px = Math.round(size * 0.35 + i * 3);
        py = Math.round(size * 0.6 - p * size * 0.35);
        drawDisk(out, size, px, py, 1, [120, 200, 255, Math.round(140 * (1 - p))]);
      }
    } else if (overlayType === "beam") {
      cx = Math.round(size * 0.5);
      cy = Math.round(size * 0.42);
      var beamA = phase * Math.PI * 2;
      for (i = 0; i < 6; i++) {
        drawLine(out, size, cx, cy,
          cx + Math.round(Math.cos(beamA + i * 0.08) * 10),
          cy + Math.round(Math.sin(beamA + i * 0.08) * 10),
          [255, 250, 180, Math.round(90 - i * 12)]);
      }
    } else if (overlayType === "sparkle" || overlayType === "screenGlow") {
      for (i = 0; i < 6; i++) {
        p = (phase + i * 0.17) % 1;
        if (p > 0.55) continue;
        px = Math.round((size * 0.25 + i * 2.8) % (size - 2));
        py = Math.round(size * 0.2 + (i % 3) * 3);
        drawDisk(out, size, px, py, 1, overlayType === "screenGlow"
          ? [100, 200, 255, Math.round(180 * (1 - p))]
          : [[255, 80, 80, 200], [80, 255, 120, 200], [255, 220, 80, 200]][i % 3]);
      }
    } else if (overlayType === "lightning") {
      cx = Math.round(size * 0.5);
      drawLine(out, size, cx, 2, cx - 2, Math.round(size * 0.45), [255, 255, 220, 240]);
      drawLine(out, size, cx - 2, Math.round(size * 0.45), cx + 1, Math.round(size * 0.72), [255, 255, 200, 220]);
    } else if (overlayType === "splash") {
      for (i = 0; i < 4; i++) {
        p = (phase + i * 0.2) % 1;
        px = Math.round(size * 0.5 + (i - 2) * 2);
        py = Math.round(size * 0.72 - Math.sin(p * Math.PI) * 3);
        drawDisk(out, size, px, py, 1, [100, 190, 255, Math.round(150 * (1 - p))]);
      }
    } else if (overlayType === "wind") {
      cx = Math.round(size * 0.5);
      cy = Math.round(size * 0.28);
      for (i = 0; i < 3; i++) {
        var rot = phase * Math.PI * 2 + i * (Math.PI * 2 / 3);
        drawLine(out, size, cx, cy,
          cx + Math.round(Math.cos(rot) * 7),
          cy + Math.round(Math.sin(rot) * 7),
          [240, 245, 255, 200]);
      }
    } else if (overlayType === "grassKick") {
      py = Math.round(size * 0.78);
      for (i = 0; i < 5; i++) {
        px = Math.round(size * 0.2 + i * 3 + phase * 4);
        drawLine(out, size, px, py, px, py - 2, [70, 150, 70, 180]);
      }
    }

    return out;
  }

  function prepareSubjectLayer(basePixels, size, pose) {
    var layer = new Uint8ClampedArray(basePixels);
    if (pose.flipH) layer = flipPixelsH(layer, size);
    layer = applyFrameScale(layer, size, pose);
    if (pose.tint) layer = tintPixels(layer, pose.tint);
    return layer;
  }

  function buildKeyframeFromPose(basePixels, propPixels, size, pose) {
    if (pose.useProp && propPixels) {
      var canvas = new Uint8ClampedArray(propPixels);
      if (pose.scrollBand) {
        canvas = scrollBandPixels(canvas, size, pose.scrollBand.y0, pose.scrollBand.y1, pose.scrollBand.dx, pose.scrollBand.dy);
      }
      var subject = extractSubjectLayer(prepareSubjectLayer(basePixels, size, pose), size);
      var ox = clamp(pose.ox || 0, -7, 7);
      var oy = clamp(pose.oy || 0, -9, 9);
      var placed = shiftPixelsSmooth(subject, size, ox, oy);
      var frame = compositeLayers(canvas, placed, size, 0, 0);
      if (pose.overlay) {
        frame = applyMotionOverlay(frame, size, pose.overlay, pose.overlayPhase, pose.overlayIntensity, pose.overlayVariant, pose.overlayPattern);
      }
      return frame;
    }
    return applyFullFrameFx(new Uint8ClampedArray(basePixels), size, pose);
  }

  function buildKeyframe(basePixels, propPixels, size, profile, keyIndex, motifPattern) {
    var pose = profile.getPose(keyIndex, KEYFRAME_COUNT);
    if (motifPattern && pose.overlay) pose.overlayPattern = motifPattern;
    return buildKeyframeFromPose(basePixels, propPixels, size, pose);
  }

  function interpolatePose(profile, k0, k1, t) {
    var a = profile.getPose(k0, KEYFRAME_COUNT);
    var b = profile.getPose(k1, KEYFRAME_COUNT);
    t = easeInOutCubic(t);
    var bandA = a.scrollBand;
    var bandB = b.scrollBand;
    return {
      ox: lerp(poseNum(a.ox), poseNum(b.ox), t),
      oy: lerp(poseNum(a.oy), poseNum(b.oy), t),
      bob: 0,
      tint: lerp(poseNum(a.tint), poseNum(b.tint), t),
      scale: lerp(poseNum(a.scale, 1), poseNum(b.scale, 1), t),
      scaleX: a.scaleX != null || b.scaleX != null ? lerp(poseNum(a.scaleX, a.scale || 1), poseNum(b.scaleX, b.scale || 1), t) : null,
      scaleY: a.scaleY != null || b.scaleY != null ? lerp(poseNum(a.scaleY, a.scale || 1), poseNum(b.scaleY, b.scale || 1), t) : null,
      flipH: t < 0.5 ? !!a.flipH : !!b.flipH,
      useProp: !!(a.useProp || b.useProp),
      scrollBand: bandA || bandB ? {
        y0: (bandA || bandB).y0,
        y1: (bandA || bandB).y1,
        dx: lerp(poseNum(bandA && bandA.dx), poseNum(bandB && bandB.dx), t),
        dy: lerp(poseNum(bandA && bandA.dy), poseNum(bandB && bandB.dy), t)
      } : null,
      overlay: a.overlay || b.overlay,
      overlayPhase: lerp(poseNum(a.overlayPhase), poseNum(b.overlayPhase), t),
      overlayIntensity: lerp(poseNum(a.overlayIntensity, 1), poseNum(b.overlayIntensity, 1), t),
      overlayVariant: a.overlayVariant || b.overlayVariant,
      overlayPattern: a.overlayPattern || b.overlayPattern
    };
  }

  function pickVariantLayer(meta, ki, t) {
    var variants = meta.baseVariants;
    if (variants && variants.length > 1) {
      var idx = (ki + (t > 0.42 ? 1 : 0)) % variants.length;
      return toPixelBuffer(variants[idx]);
    }
    return toPixelBuffer(meta.basePixels);
  }

  function renderPoseFrame(meta, continuousFrame) {
    var profile = MOTION_PROFILES[meta.profileId];
    if (!profile || !meta.basePixels) return null;
    var size = meta.size || MOTION_SIZE;
    var seg = getKeyframeSegment(continuousFrame);
    var pose = interpolatePose(profile, seg.k0, seg.k1, seg.t);
    if (meta.motifPattern && pose.overlay) pose.overlayPattern = meta.motifPattern;
    var layer = pickVariantLayer(meta, seg.k0, seg.t);
    if (!layer) return null;
    var frame = buildKeyframeFromPose(layer, toPixelBuffer(meta.propPixels), size, pose);

    if (meta.motionBlur === true) {
      var trailT = Math.max(0, seg.t - 0.12);
      var poseTrail = interpolatePose(profile, seg.k0, seg.k1, trailT);
      var layerTrail = pickVariantLayer(meta, seg.k0, trailT);
      if (layerTrail) {
        var trail = buildKeyframeFromPose(layerTrail, toPixelBuffer(meta.propPixels), size, poseTrail);
        frame = lerpPixelsLinear(trail, frame, 0.82);
      }
    }
    return frame;
  }

  function renderKeyframeLerp(keyframes, continuousFrame) {
    var seg = getKeyframeSegment(continuousFrame);
    var a = toPixelBuffer(keyframes[seg.k0]);
    var b = toPixelBuffer(keyframes[seg.k1]);
    if (!a || !b) return a || b || null;
    return lerpPixelsLinear(a, b, easeInOutCubic(seg.t));
  }

  function renderClipFrame(clipFrames, frameIndex) {
    if (!clipFrames || !clipFrames.length) return null;
    var idx = Math.floor(frameIndex) % clipFrames.length;
    var next = (idx + 1) % clipFrames.length;
    var t = frameIndex - Math.floor(frameIndex);
    if (t < 0.001) return toPixelBuffer(clipFrames[idx]);
    var a = toPixelBuffer(clipFrames[idx]);
    var b = toPixelBuffer(clipFrames[next]);
    if (!a || !b) return a || b;
    return lerpPixelsLinear(a, b, easeInOutCubic(t));
  }

  function renderFrameFromMeta(meta, frameIndex) {
    var cf = typeof frameIndex === "number" ? frameIndex : 0;
    if (meta.clipFrames && meta.clipFrames.length >= 2) {
      var clipIdx = (cf / (meta.frameCount || MAX_FRAMES)) * meta.clipFrames.length;
      var clipPx = renderClipFrame(meta.clipFrames, clipIdx);
      if (clipPx) return clipPx;
    }
    if (meta.keyframes && meta.keyframes.length >= 2) {
      try {
        var liveKf = renderKeyframeLerp(meta.keyframes, cf);
        if (liveKf) return liveKf;
      } catch (eKf) { /* fallback below */ }
      var ki = Math.floor((cf / (meta.frameCount || MAX_FRAMES)) * meta.keyframes.length) % meta.keyframes.length;
      var fbKf = toPixelBuffer(meta.keyframes[ki]);
      if (fbKf) return fbKf;
    }
    if (meta.profileId && meta.basePixels && MOTION_PROFILES[meta.profileId]) {
      try {
        var livePose = renderPoseFrame(meta, cf);
        if (livePose) return livePose;
      } catch (e) { /* fallback below */ }
    }
    if (meta.pixels) {
      var phase = (frameIndex % (meta.frameCount || MAX_FRAMES)) / (meta.frameCount || MAX_FRAMES);
      return renderLegacyMotionFrame(new Uint8ClampedArray(meta.pixels), meta.size || MOTION_SIZE, meta.motionType || "sway", phase);
    }
    return null;
  }

  function generateBaseFrame(subject, motif, uniqueId) {
    return NocoPixel.generate(subject, {
      size: MOTION_SIZE,
      style: MOTION_STYLE,
      motifIndex: motif.index,
      allowFallback: true,
      uniqueId: uniqueId
    });
  }

  function generatePropFrame(propType, uniqueId) {
    var mapped = propType === "ground" ? "grass" : propType;
    var cached = getSceneBackground(mapped);
    if (cached) return { pixels: cached };
    var prompts = {
      tree: "wald baum",
      ground: "wiese gras fussballfeld",
      sky: "himmel wolke",
      grass: "wiese gras",
      street: "strasse asphalt",
      water: "wasser blau",
      sea: "meer welle"
    };
    return NocoPixel.generate(prompts[propType] || propType, {
      size: MOTION_SIZE,
      style: MOTION_STYLE,
      allowFallback: true,
      uniqueId: uniqueId || SCENE_BG_SEEDS[mapped] || 41999
    });
  }

  function bakeClipFrames(keyframes) {
    if (!keyframes || keyframes.length < 2) return keyframes ? keyframes.slice() : [];
    var out = [];
    var i, step, t, a, b, tween;
    for (i = 0; i < keyframes.length; i++) {
      out.push(keyframes[i]);
      if (i >= keyframes.length - 1) continue;
      a = toPixelBuffer(keyframes[i]);
      b = toPixelBuffer(keyframes[i + 1]);
      if (!a || !b) continue;
      for (step = 1; step <= TWEEN_STEPS; step++) {
        t = step / (TWEEN_STEPS + 1);
        tween = lerpPixelsLinear(a, b, easeInOutCubic(t));
        out.push(Array.from(tween));
      }
    }
    return out;
  }

  function buildAllKeyframes(basePixels, propPixels, profile, motif, subject) {
    var frames = [];
    var i, layer, alt, variants = null;
    var motifPattern = motif && motif.pattern ? motif.pattern : "";
    var variantCount = getVariantCount(profile ? profile.id : "breathe");
    var sceneBg = resolveScenePixels(profile);

    if (!propPixels && sceneBg) propPixels = sceneBg;
    else if (profile && profile.prop && !propPixels) {
      var propFrame = generatePropFrame(profile.prop, SCENE_BG_SEEDS[profile.prop] || Date.now() + 17);
      if (propFrame && propFrame.pixels) propPixels = propFrame.pixels instanceof Uint8ClampedArray
        ? propFrame.pixels
        : new Uint8ClampedArray(propFrame.pixels);
    }

    if (motif && subject && typeof NocoPixel !== "undefined") {
      variants = [basePixels];
      for (i = 1; i < variantCount; i++) {
        alt = generateBaseFrame(subject, motif, Date.now() + i * 9973 + (i % 3) * 313);
        if (alt && alt.pixels) variants.push(new Uint8ClampedArray(alt.pixels));
      }
    }

    for (i = 0; i < KEYFRAME_COUNT; i++) {
      layer = basePixels;
      if (variants && variants.length) {
        layer = variants[i % variants.length];
      }
      frames.push(Array.from(buildKeyframe(layer, propPixels, MOTION_SIZE, profile, i, motifPattern)));
    }

    return {
      frames: frames,
      clipFrames: bakeClipFrames(frames),
      basePixels: basePixels,
      propPixels: propPixels,
      profileId: profile ? profile.id : "sway",
      baseVariants: variants
    };
  }

  function getKeyframeSegment(frameIndex) {
    frameIndex = ((frameIndex % MAX_FRAMES) + MAX_FRAMES) % MAX_FRAMES;
    var i, start, end, pos, span;
    for (i = 0; i < KEYFRAME_INDICES.length; i++) {
      start = KEYFRAME_INDICES[i];
      end = KEYFRAME_INDICES[(i + 1) % KEYFRAME_INDICES.length];
      if (end <= start) end += MAX_FRAMES;
      pos = frameIndex >= start ? frameIndex : frameIndex + MAX_FRAMES;
      if (pos < end) {
        span = end - start;
        return {
          k0: i,
          k1: (i + 1) % KEYFRAME_COUNT,
          t: span <= 0 ? 0 : (pos - start) / span
        };
      }
    }
    return { k0: 0, k1: 1, t: 0 };
  }

  function renderLegacyMotionFrame(basePixels, size, motionType, phase) {
    var p = phase * Math.PI * 2;
    var tint = 0;
    var scale = 1;
    var scaleX = 1;
    var scaleY = 1;
    if (motionType === "drive") {
      tint = Math.sin(p) * 0.04;
    } else if (motionType === "float") {
      tint = Math.sin(p) * 0.08;
      scale = lerp(0.97, 1.04, easeInOutSine((Math.sin(p) + 1) * 0.5));
    } else if (motionType === "pulse") {
      tint = Math.sin(p) * 0.14;
      scale = lerp(0.94, 1.08, easeInOutSine((Math.sin(p) + 1) * 0.5));
    } else {
      tint = Math.sin(p) * 0.05;
      scaleX = lerp(0.97, 1.03, easeInOutSine((Math.sin(p) + 1) * 0.5));
      scaleY = lerp(1.02, 0.96, easeInOutSine((Math.cos(p) + 1) * 0.5));
    }
    var frame = applyFullFrameFx(new Uint8ClampedArray(basePixels), size, {
      tint: tint,
      scale: scale,
      scaleX: scaleX,
      scaleY: scaleY
    });
    return frame;
  }

  function packMotionMeta(data) {
    if (!data) return null;
    var baseVariants = null;
    if (data.baseVariants && data.baseVariants.length) {
      baseVariants = data.baseVariants.map(function (v) {
        return v instanceof Uint8ClampedArray ? Array.from(v) : v;
      });
    }
    return {
      keyframes: data.keyframes || null,
      clipFrames: data.clipFrames || (data.keyframes ? bakeClipFrames(data.keyframes) : null),
      clipFrameCount: data.clipFrames ? data.clipFrames.length : CLIP_FRAME_COUNT,
      tweenSteps: TWEEN_STEPS,
      keyframeIndices: KEYFRAME_INDICES.slice(),
      keyframeCount: KEYFRAME_COUNT,
      basePixels: data.basePixels ? (data.basePixels instanceof Uint8ClampedArray ? Array.from(data.basePixels) : data.basePixels) : null,
      propPixels: data.propPixels ? (data.propPixels instanceof Uint8ClampedArray ? Array.from(data.propPixels) : data.propPixels) : null,
      profileId: data.profileId || data.motionType || "sway",
      motifPattern: data.motifPattern || "",
      baseVariants: baseVariants,
      motionBlur: data.motionBlur === true,
      pixels: data.keyframes && data.keyframes[0] ? data.keyframes[0] : (data.basePixels || data.pixels),
      size: data.size || MOTION_SIZE,
      fps: data.fps || FPS,
      frameCount: data.frameCount || MAX_FRAMES,
      duration: data.duration || MAX_DURATION,
      motionType: data.motionType,
      motionLabel: data.motionLabel || data.motionType,
      motifIndex: data.motifIndex,
      motifLabel: data.motifLabel,
      userAsked: data.userAsked,
      mappedLabel: data.mappedLabel,
      mappingNote: data.mappingNote,
      matchPct: data.matchPct,
      prompt: data.prompt
    };
  }

  function drawFramePixels(pixels, size, canvas, scale) {
    if (!canvas || !pixels) return;
    scale = scale || 8;
    var ctx = canvas.getContext("2d");
    if (!ctx) return;
    var img = ctx.createImageData(size, size);
    var i;
    for (i = 0; i < pixels.length; i++) img.data[i] = pixels[i];
    var tmp = document.createElement("canvas");
    tmp.width = size;
    tmp.height = size;
    tmp.getContext("2d").putImageData(img, 0, 0);
    canvas.width = size * scale;
    canvas.height = size * scale;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(tmp, 0, 0, canvas.width, canvas.height);
  }

  function drawFrameSmooth(meta, phase, canvas, scale) {
    if (!meta || !canvas) return;
    scale = scale || 10;
    var size = meta.size || MOTION_SIZE;
    var frameCount = meta.frameCount || MAX_FRAMES;
    var continuousFrame = phase * frameCount;
    var pixels = renderFrameFromMeta(meta, continuousFrame);
    if (!pixels) return;
    drawFramePixels(pixels, size, canvas, scale);
  }

  function generateSequence(prompt, opts, onProgress, onDone) {
    opts = opts || {};
    var resolved = resolveMotionPrompt(prompt);
    if (!resolved.supported) {
      if (onDone) onDone({ error: true, message: resolved.message });
      return function () {};
    }

    var proMode = !!opts.proMode;
    var totalMs = proMode ? GEN_MS_PRO : GEN_MS_NORMAL;
    var timers = [];
    var cancelled = false;
    var previewTimer = null;
    var basePixels = null;
    var propPixels = null;
    var keyframePack = null;
    var started = performance.now();
    var cum = 0;
    var pi, step;

    function emit(ev) {
      if (cancelled || !onProgress) return;
      onProgress(ev);
    }

    function cancelAll() {
      cancelled = true;
      timers.forEach(clearTimeout);
      if (previewTimer) clearInterval(previewTimer);
    }

    emit({ progress: 0.02, label: "NOCO Motion Engine startet…", stage: "parse", pipeline: PIPELINE });

    for (pi = 0; pi < PIPELINE.length; pi++) {
      step = PIPELINE[pi];
      cum += step.weight;
      timers.push(setTimeout(function (s, at) {
        return function () {
          emit({
            progress: at,
            label: s.label + "…",
            stage: s.id,
            pipeline: PIPELINE,
            resolved: resolved
          });

          if (s.id === "frameBase" && !basePixels) {
            var base = generateBaseFrame(resolved.subject, resolved.motif, Date.now());
            if (base && base.pixels) {
              basePixels = new Uint8ClampedArray(base.pixels);
              emit({ previewPixels: Array.from(basePixels), previewPhase: 0 });
            }
          }

          if (s.id === "frameProp" && !propPixels) {
            var scenePx = resolveScenePixels(resolved.motionProfile);
            if (scenePx) {
              propPixels = scenePx instanceof Uint8ClampedArray ? scenePx : new Uint8ClampedArray(scenePx);
            } else if (resolved.motionProfile.prop) {
              var prop = generatePropFrame(resolved.motionProfile.prop, Date.now() + 17);
              if (prop && prop.pixels) propPixels = new Uint8ClampedArray(prop.pixels);
            }
          }

          if (s.id === "keyframes" && basePixels && !keyframePack) {
            keyframePack = buildAllKeyframes(basePixels, propPixels, resolved.motionProfile, resolved.motif, resolved.subject);
            var kfi = 0;
            emit({
              previewPixels: keyframePack.frames[0],
              previewPhase: 0,
              keyframeIndex: 0,
              stage: "keyframes",
              label: "Keyframe 1/" + KEYFRAME_COUNT + "…"
            });
            previewTimer = setInterval(function () {
              if (cancelled || !keyframePack) return;
              kfi++;
              if (kfi >= keyframePack.frames.length) {
                clearInterval(previewTimer);
                previewTimer = null;
                emit({
                  stage: "keyframes",
                  keyframesReady: true,
                  keyframes: keyframePack.frames,
                  label: KEYFRAME_COUNT + " Keyframes fertig"
                });
                return;
              }
              emit({
                previewPixels: keyframePack.frames[kfi],
                previewPhase: kfi / keyframePack.frames.length,
                keyframeIndex: kfi,
                stage: "keyframes",
                label: "Keyframe " + (kfi + 1) + "/" + KEYFRAME_COUNT + "…"
              });
            }, proMode ? 180 : 320);
          }

          if (s.id === "interp" && keyframePack) {
            var blendT = 0;
            if (previewTimer) clearInterval(previewTimer);
            previewTimer = setInterval(function () {
              if (cancelled || !keyframePack) return;
              blendT = (blendT + 0.045) % 1;
              var cf = blendT * MAX_FRAMES;
              var blended = renderFrameFromMeta({
                keyframes: keyframePack.frames,
                clipFrames: keyframePack.clipFrames,
                profileId: keyframePack.profileId,
                basePixels: keyframePack.basePixels,
                propPixels: keyframePack.propPixels,
                baseVariants: keyframePack.baseVariants,
                motifPattern: resolved.motif.pattern || "",
                size: MOTION_SIZE,
                frameCount: MAX_FRAMES,
                motionBlur: false
              }, cf);
              emit({
                previewPixels: blended ? Array.from(blended) : keyframePack.frames[0],
                previewPhase: blendT,
                label: "Flüssige Interpolation…"
              });
            }, proMode ? 48 : 72);
          }
        };
      }(step, cum), Math.floor(totalMs * cum)));
    }

    timers.push(setTimeout(function () {
      if (cancelled) return;
      if (previewTimer) clearInterval(previewTimer);
      if (!basePixels) {
        var base2 = generateBaseFrame(resolved.subject, resolved.motif, Date.now());
        if (!base2 || !base2.pixels) {
          if (onDone) onDone({ error: true, message: "Frame konnte nicht erzeugt werden." });
          return;
        }
        basePixels = new Uint8ClampedArray(base2.pixels);
      }
      if (!keyframePack) {
        if (!propPixels) {
          var scenePx2 = resolveScenePixels(resolved.motionProfile);
          if (scenePx2) {
            propPixels = scenePx2 instanceof Uint8ClampedArray ? scenePx2 : new Uint8ClampedArray(scenePx2);
          } else if (resolved.motionProfile.prop) {
            var prop2 = generatePropFrame(resolved.motionProfile.prop, Date.now() + 31);
            if (prop2 && prop2.pixels) propPixels = new Uint8ClampedArray(prop2.pixels);
          }
        }
        keyframePack = buildAllKeyframes(basePixels, propPixels, resolved.motionProfile, resolved.motif, resolved.subject);
      }
      emit({ progress: 1, label: "Fertig", stage: "done" });
      if (onDone) {
        onDone({
          error: false,
          meta: packMotionMeta({
            keyframes: keyframePack.frames,
            clipFrames: keyframePack.clipFrames,
            basePixels: keyframePack.basePixels,
            propPixels: keyframePack.propPixels,
            profileId: keyframePack.profileId,
            baseVariants: keyframePack.baseVariants,
            motionBlur: false,
            size: MOTION_SIZE,
            fps: FPS,
            frameCount: MAX_FRAMES,
            duration: MAX_DURATION,
            motionType: resolved.motionProfile.id,
            motionLabel: resolved.motionProfile.label,
            motifIndex: resolved.motif.index,
            motifPattern: resolved.motif.pattern || "",
            motifLabel: resolved.mappedLabel,
            userAsked: resolved.userAsked,
            mappedLabel: resolved.mappedLabel,
            mappingNote: resolved.mappingNote,
            matchPct: resolved.matchPct,
            prompt: resolved.subject
          }),
          motifLabel: resolved.mappedLabel,
          userAsked: resolved.userAsked,
          mappingNote: resolved.mappingNote,
          motionType: resolved.motionProfile.id,
          elapsed: Math.round(performance.now() - started)
        });
      }
    }, totalMs));

    return cancelAll;
  }

  function drawFrameToCanvas(meta, frameIndex, canvas, scale) {
    if (!meta || !canvas) return;
    var pixels = renderFrameFromMeta(meta, frameIndex);
    if (pixels) drawFramePixels(pixels, meta.size || MOTION_SIZE, canvas, scale);
  }

  function exportKeyframeCanvas(meta, keyIndex, scale) {
    var canvas = document.createElement("canvas");
    var size = meta.size || MOTION_SIZE;
    scale = scale || 8;
    var pixels = null;
    if (meta.keyframes && meta.keyframes[keyIndex]) {
      pixels = toPixelBuffer(meta.keyframes[keyIndex]);
    }
    if (!pixels) {
      pixels = renderFrameFromMeta(meta, KEYFRAME_INDICES[keyIndex] || keyIndex);
    }
    if (pixels) drawFramePixels(pixels, size, canvas, scale);
    return canvas;
  }

  function exportMotionSpriteSheet(meta, scale) {
    var frames = meta.clipFrames && meta.clipFrames.length ? meta.clipFrames : meta.keyframes;
    var count = frames ? frames.length : (meta.keyframeCount || KEYFRAME_COUNT);
    var size = meta.size || MOTION_SIZE;
    scale = scale || 6;
    var canvas = document.createElement("canvas");
    var i, tmp, cell;
    canvas.width = size * scale * count;
    canvas.height = size * scale;
    var ctx = canvas.getContext("2d");
    if (!ctx) return canvas;
    ctx.imageSmoothingEnabled = false;
    for (i = 0; i < count; i++) {
      tmp = document.createElement("canvas");
      var px = frames[i] ? toPixelBuffer(frames[i]) : renderFrameFromMeta(meta, i);
      if (px) drawFramePixels(px, size, tmp, scale);
      ctx.drawImage(tmp, i * size * scale, 0);
    }
    return canvas;
  }

  function recordMotionWebm(meta, scale, onDone) {
    scale = scale || 10;
    var size = meta.size || MOTION_SIZE;
    var canvas = document.createElement("canvas");
    canvas.width = size * scale;
    canvas.height = size * scale;
    var mime = "video/webm";
    if (typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported) {
      if (MediaRecorder.isTypeSupported("video/webm;codecs=vp9")) {
        mime = "video/webm;codecs=vp9";
      } else if (MediaRecorder.isTypeSupported("video/webm;codecs=vp8")) {
        mime = "video/webm;codecs=vp8";
      }
    }
    if (typeof MediaRecorder === "undefined" || !canvas.captureStream) {
      if (onDone) onDone(null, "no-recorder");
      return;
    }
    var stream = canvas.captureStream(meta.fps || PLAYBACK_FPS);
    var recorder;
    try {
      recorder = new MediaRecorder(stream, { mimeType: mime });
    } catch (err) {
      if (onDone) onDone(null, "recorder-fail");
      return;
    }
    var chunks = [];
    recorder.ondataavailable = function (e) {
      if (e.data && e.data.size) chunks.push(e.data);
    };
    recorder.onstop = function () {
      if (!chunks.length) {
        if (onDone) onDone(null, "empty");
        return;
      }
      if (onDone) onDone(new Blob(chunks, { type: "video/webm" }), null);
    };
    recorder.start(100);
    var durationMs = (meta.duration || MAX_DURATION) * 1000;
    var fps = meta.fps || PLAYBACK_FPS;
    var totalFrames = Math.max(1, Math.round(durationMs / 1000 * fps));
    var fi = 0;
    function drawNext() {
      if (fi >= totalFrames) {
        recorder.stop();
        return;
      }
      var phase = fi / totalFrames;
      var cf = phase * (meta.frameCount || MAX_FRAMES);
      drawFrameToCanvas(meta, cf, canvas, scale);
      fi++;
      setTimeout(drawNext, Math.floor(1000 / fps));
    }
    drawNext();
  }

  function startPlayback(meta, canvas, opts) {
    opts = opts || {};
    if (!meta || !canvas) return function () {};
    var scale = opts.scale || 10;
    var durationMs = (meta.duration || MAX_DURATION) * 1000;
    var rafId = null;
    var stopped = false;
    var t0 = performance.now();

    drawFrameToCanvas(meta, 0, canvas, scale);

    function frame(now) {
      if (stopped) return;
      var elapsed = (now - t0) % durationMs;
      var phase = elapsed / durationMs;
      try {
        drawFrameSmooth(meta, phase, canvas, scale);
      } catch (e) {
        drawFrameToCanvas(meta, 0, canvas, scale);
      }
      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);
    return function stop() {
      stopped = true;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }

  function formatMotionReport(meta) {
    if (!meta) return "";
    var mapLine = meta.mappingNote ? meta.mappingNote + "\n\n" : "";
    var motionName = meta.motionLabel || meta.motionType || "Animation";
    return (
      "**NOCO Motion** — " + (meta.mappedLabel || meta.motifLabel || "Motiv") + "\n\n" +
      mapLine +
      "**Dauer:** " + (meta.duration || MAX_DURATION) + "s · **" + (meta.fps || PLAYBACK_FPS) + " FPS** · **" +
        (meta.keyframeCount || KEYFRAME_COUNT) + " Keyframes** + **" + (meta.tweenSteps || TWEEN_STEPS) + " Pixel-Morphs** dazwischen\n" +
      "**Animation:** " + motionName + "\n" +
      "**Technik:** Feste Szene · wiederverwendbare Hintergründe · Pixel-Morph (kein Blur) · 60fps Playback\n\n" +
      "*Epic 4s-Video aus der 3600er Motiv-Bank — 8 Story-Keyframes + Pixel-Morph = dein Loop-Clip im Chat.*"
    );
  }

  global.NocoMotion = {
    FPS: FPS,
    PLAYBACK_FPS: PLAYBACK_FPS,
    TWEEN_STEPS: TWEEN_STEPS,
    CLIP_FRAME_COUNT: CLIP_FRAME_COUNT,
    MAX_DURATION: MAX_DURATION,
    MAX_FRAMES: MAX_FRAMES,
    KEYFRAME_COUNT: KEYFRAME_COUNT,
    KEYFRAME_INDICES: KEYFRAME_INDICES,
    PIPELINE: PIPELINE,
    MOTION_PROFILES: MOTION_PROFILES,
    cleanMotionPrompt: cleanMotionPrompt,
    resolveMotionPrompt: resolveMotionPrompt,
    pickMotionProfile: pickMotionProfile,
    generateSequence: generateSequence,
    packMotionMeta: packMotionMeta,
    bakeClipFrames: bakeClipFrames,
    getSceneBackground: getSceneBackground,
    drawFrameToCanvas: drawFrameToCanvas,
    drawFrameSmooth: drawFrameSmooth,
    drawFramePixels: drawFramePixels,
    exportKeyframeCanvas: exportKeyframeCanvas,
    exportMotionSpriteSheet: exportMotionSpriteSheet,
    recordMotionWebm: recordMotionWebm,
    startPlayback: startPlayback,
    renderFrameFromMeta: renderFrameFromMeta,
    formatMotionReport: formatMotionReport,
    getGenDuration: function (pro) { return pro ? GEN_MS_PRO : GEN_MS_NORMAL; }
  };
})(typeof window !== "undefined" ? window : this);
