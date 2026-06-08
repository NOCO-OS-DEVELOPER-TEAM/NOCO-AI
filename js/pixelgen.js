/**
 * NOCO Render Engine v5.3
 * 3600 Motive · einfache Begriffe · Epic Sheen
 */
(function (global) {
  "use strict";

  var STYLES = {
    standard: { sat: 0.72, light: 0.56, name: "Standard", emoji: "✦" },
    noco: { sat: 0.75, light: 0.58, name: "NOCO Glass", emoji: "◎" },
    vivid: { sat: 1.0, light: 0.55, name: "Grell", emoji: "🌈" },
    pastel: { sat: 0.45, light: 0.72, name: "Pastell", emoji: "🫧" },
    dark: { sat: 0.6, light: 0.28, name: "Dunkel", emoji: "🌑" },
    neon: { sat: 1.0, light: 0.62, name: "Neon", emoji: "💠" }
  };

  var DEFAULT_STYLE = "standard";

  var MOTIFS = [
    { keys: ["noco", "logo", "no co"], pattern: "diamond", hue: 168, emoji: "✦" },
    { keys: ["sonne", "sun", "solar"], pattern: "sun", hue: 45, emoji: "☀" },
    { keys: ["mond", "moon", "nacht"], pattern: "moon", hue: 220, emoji: "🌙" },
    { keys: ["stern", "star", "galaxie"], pattern: "stars", hue: 260, emoji: "⭐" },
    { keys: ["wald", "baum", "forest"], pattern: "tree", hue: 130, emoji: "🌲" },
    { keys: ["meer", "ocean", "welle", "wasser"], pattern: "waves", hue: 200, emoji: "🌊" },
    { keys: ["feuer", "fire", "flamme"], pattern: "flame", hue: 15, emoji: "🔥" },
    { keys: ["berg", "mountain", "gipfel"], pattern: "mountain", hue: 210, emoji: "⛰" },
    { keys: ["stadt", "city", "skyline"], pattern: "skyline", hue: 250, emoji: "🏙" },
    { keys: ["herz", "heart", "liebe"], pattern: "heart", hue: 340, emoji: "❤" },
    { keys: ["katze", "cat", "kitten"], pattern: "cat", hue: 30, emoji: "🐱" },
    { keys: ["hund", "dog", "puppy"], pattern: "dog", hue: 25, emoji: "🐕" },
    { keys: ["blume", "flower", "rose"], pattern: "flower", hue: 320, emoji: "🌸" },
    { keys: ["schnee", "snow", "winter"], pattern: "snow", hue: 200, emoji: "❄" },
    { keys: ["regenbogen", "rainbow"], pattern: "rainbow", hue: 0, emoji: "🌈" },
    { keys: ["pixel", "retro", "8bit"], pattern: "checker", hue: 280, emoji: "👾" },
    { keys: ["glitch", "cyber", "hacker"], pattern: "glitch", hue: 120, emoji: "⚡" },
    { keys: ["smiley", "happy", "glueck"], pattern: "smiley", hue: 55, emoji: "😊" },
    { keys: ["robot", "roboter", "ki"], pattern: "robot", hue: 190, emoji: "🤖" },
    { keys: ["rakete", "rocket", "space"], pattern: "rocket", hue: 0, emoji: "🚀" },
    { keys: ["auto", "car", "rennen"], pattern: "car", hue: 0, emoji: "🏎" },
    { keys: ["haus", "home", "gebaeude", "wohnhaus"], pattern: "house", hue: 30, emoji: "🏠" },
    { keys: ["mensch", "person", "human", "mann", "frau", "kind", "menschlich"], pattern: "smiley", hue: 40, emoji: "🧑" },
    { keys: ["fisch", "fish", "aquarium"], pattern: "fish", hue: 185, emoji: "🐟" },
    { keys: ["vogel", "bird", "flug"], pattern: "bird", hue: 210, emoji: "🐦" },
    { keys: ["schmetterling", "butterfly"], pattern: "butterfly", hue: 300, emoji: "🦋" },
    { keys: ["pilz", "mushroom"], pattern: "mushroom", hue: 350, emoji: "🍄" },
    { keys: ["kristall", "crystal", "diamant"], pattern: "crystal", hue: 270, emoji: "💎" },
    { keys: ["uhr", "clock", "zeit"], pattern: "clock", hue: 40, emoji: "🕐" },
    { keys: ["musik", "note", "music"], pattern: "music", hue: 290, emoji: "🎵" },
    { keys: ["game", "spiel", "controller"], pattern: "gamepad", hue: 260, emoji: "🎮" },
    { keys: ["drache", "dragon"], pattern: "dragon", hue: 10, emoji: "🐉" },
    { keys: ["burg", "castle", "schloss"], pattern: "castle", hue: 270, emoji: "🏰" },
    { keys: ["pizza", "essen", "food"], pattern: "food", hue: 25, emoji: "🍕" },
    { keys: ["kaffee", "coffee", "cafe"], pattern: "cup", hue: 28, emoji: "☕" },
    { keys: ["gitarre", "guitar"], pattern: "music", hue: 300, emoji: "🎸" },
    { keys: ["leuchtturm", "lighthouse"], pattern: "lighthouse", hue: 200, emoji: "🗼" },
    { keys: ["tornado", "sturm", "storm"], pattern: "storm", hue: 180, emoji: "🌪" },
    { keys: ["vulkan", "volcano", "lava"], pattern: "volcano", hue: 8, emoji: "🌋" },
    { keys: ["pinguin", "penguin"], pattern: "penguin", hue: 210, emoji: "🐧" },
    { keys: ["eule", "owl"], pattern: "owl", hue: 35, emoji: "🦉" },
    { keys: ["zug", "train", "bahn"], pattern: "train", hue: 0, emoji: "🚂" },
    { keys: ["flugzeug", "plane"], pattern: "plane", hue: 195, emoji: "✈" },
    { keys: ["boot", "ship", "schiff"], pattern: "ship", hue: 205, emoji: "⛵" },
    { keys: ["schwert", "sword"], pattern: "sword", hue: 220, emoji: "⚔" },
    { keys: ["krone", "crown", "koenig"], pattern: "crown", hue: 48, emoji: "👑" },
    { keys: ["geist", "ghost", "spuk"], pattern: "ghost", hue: 260, emoji: "👻" },
    { keys: ["kuerbis", "pumpkin", "halloween"], pattern: "pumpkin", hue: 28, emoji: "🎃" },
    { keys: ["fussball", "football", "soccer"], pattern: "ball", hue: 120, emoji: "⚽" },
    { keys: ["dna", "genetik", "molekuel"], pattern: "helix", hue: 290, emoji: "🧬" },
    { keys: ["atom", "physik", "partikel"], pattern: "atom", hue: 180, emoji: "⚛" },
    { keys: ["teleskop", "telescope"], pattern: "stars", hue: 240, emoji: "🔭" },
    { keys: ["schatz", "treasure", "gold"], pattern: "treasure", hue: 45, emoji: "💰" },
    { keys: ["pirat", "pirate"], pattern: "skull", hue: 30, emoji: "🏴" },
    { keys: ["alien", "ufo"], pattern: "ufo", hue: 110, emoji: "👽" },
    { keys: ["planet", "mars", "jupiter"], pattern: "planet", hue: 15, emoji: "🪐" },
    { keys: ["komet", "comet", "meteor"], pattern: "comet", hue: 40, emoji: "☄" },
    { keys: ["polarlicht", "aurora"], pattern: "aurora", hue: 140, emoji: "🌌" },
    { keys: ["wasserfall", "waterfall"], pattern: "waterfall", hue: 195, emoji: "💧" },
    { keys: ["insel", "island", "tropen"], pattern: "island", hue: 150, emoji: "🏝" },
    { keys: ["wal", "whale"], pattern: "whale", hue: 210, emoji: "🐋" },
    { keys: ["delfin", "dolphin"], pattern: "dolphin", hue: 200, emoji: "🐬" },
    { keys: ["elefant", "elephant"], pattern: "elephant", hue: 220, emoji: "🐘" },
    { keys: ["loewe", "lion"], pattern: "lion", hue: 35, emoji: "🦁" },
    { keys: ["tiger", "tiger"], pattern: "tiger", hue: 30, emoji: "🐯" },
    { keys: ["fuchs", "fox"], pattern: "fox", hue: 18, emoji: "🦊" },
    { keys: ["schildkroete", "turtle"], pattern: "turtle", hue: 130, emoji: "🐢" },
    { keys: ["biene", "bee"], pattern: "bee", hue: 55, emoji: "🐝" },
    { keys: ["kaktus", "cactus", "wueste"], pattern: "cactus", hue: 125, emoji: "🌵" },
    { keys: ["palme", "palm", "strand"], pattern: "palm", hue: 140, emoji: "🌴" },
    { keys: ["kirsche", "cherry"], pattern: "cherry", hue: 350, emoji: "🍒" },
    { keys: ["eis", "icecream", "sommer"], pattern: "icecream", hue: 320, emoji: "🍦" },
    { keys: ["kuchen", "cake", "geburtstag"], pattern: "cake", hue: 310, emoji: "🎂" },
    { keys: ["burger", "fast food"], pattern: "burger", hue: 25, emoji: "🍔" },
    { keys: ["sushi", "japan"], pattern: "sushi", hue: 0, emoji: "🍣" },
    { keys: ["stift", "pencil", "zeichnen"], pattern: "pencil", hue: 45, emoji: "✏" },
    { keys: ["kamera", "camera", "foto"], pattern: "camera", hue: 250, emoji: "📷" },
    { keys: ["laptop", "computer", "pc"], pattern: "laptop", hue: 220, emoji: "💻" },
    { keys: ["wlan", "wifi", "internet"], pattern: "wifi", hue: 200, emoji: "📶" },
    { keys: ["blitz", "lightning", "gewitter"], pattern: "lightning", hue: 55, emoji: "⚡" },
    { keys: ["nebel", "fog", "mystisch"], pattern: "fog", hue: 220, emoji: "🌫" },
    { keys: ["finsternis", "eclipse"], pattern: "eclipse", hue: 260, emoji: "🌑" },
    { keys: ["canyon", "schlucht"], pattern: "canyon", hue: 25, emoji: "🏜" },
    { keys: ["rubin", "ruby", "edelstein"], pattern: "gem", hue: 350, emoji: "♦" },
    { keys: ["medaille", "medal", "olympia"], pattern: "medal", hue: 48, emoji: "🏅" },
    { keys: ["pokal", "trophy", "sieger"], pattern: "trophy", hue: 42, emoji: "🏆" },
    { keys: ["flagge", "flag", "nation"], pattern: "flag", hue: 0, emoji: "🚩" },
    { keys: ["frieden", "peace", "taube"], pattern: "dove", hue: 200, emoji: "🕊" },
    { keys: ["labyrinth", "maze", "puzzle"], pattern: "maze", hue: 280, emoji: "🧩" },
    { keys: ["wuerfel", "dice", "zufall"], pattern: "dice", hue: 0, emoji: "🎲" },
    { keys: ["zauberer", "wizard", "magie"], pattern: "wizard", hue: 270, emoji: "🧙" },
    { keys: ["fee", "fairy", "elf"], pattern: "fairy", hue: 300, emoji: "🧚" },
    { keys: ["einhorn", "unicorn"], pattern: "unicorn", hue: 290, emoji: "🦄" },
    { keys: ["phoenix", "phoenix"], pattern: "phoenix", hue: 20, emoji: "🔥" },
    { keys: ["u-boot", "submarine", "tiefsee"], pattern: "submarine", hue: 210, emoji: "🛸" },
    { keys: ["satellit", "satellite", "orbit"], pattern: "satellite", hue: 190, emoji: "🛰" },
    { keys: ["nebelgalaxie", "nebula", "kosmos"], pattern: "nebula", hue: 280, emoji: "🌌" },
    { keys: ["loch", "black hole"], pattern: "blackhole", hue: 270, emoji: "🕳" },
    { keys: ["koralle", "coral", "riff"], pattern: "coral", hue: 330, emoji: "🪸" },
    { keys: ["spinne", "spider"], pattern: "spider", hue: 0, emoji: "🕷" },
    { keys: ["marienkaefer", "ladybug"], pattern: "ladybug", hue: 0, emoji: "🐞" },
    { keys: ["apfel", "apple"], pattern: "apple", hue: 0, emoji: "🍎" },
    { keys: ["wassermelone", "watermelon"], pattern: "watermelon", hue: 120, emoji: "🍉" },
    { keys: ["donut", "krapfen"], pattern: "donut", hue: 320, emoji: "🍩" },
    { keys: ["taco", "mexiko"], pattern: "taco", hue: 35, emoji: "🌮" },
    { keys: ["pinsel", "paintbrush", "kunst"], pattern: "brush", hue: 300, emoji: "🖌" },
    { keys: ["palette", "farben", "malen"], pattern: "palette", hue: 0, emoji: "🎨" },
    { keys: ["handy", "smartphone", "phone"], pattern: "phone", hue: 230, emoji: "📱" },
    { keys: ["wolke", "cloud", "himmel"], pattern: "cloud", hue: 210, emoji: "☁" },
    { keys: ["horizont", "sunset", "sonnenuntergang"], pattern: "sunset", hue: 20, emoji: "🌅" },
    { keys: ["hoehle", "cave", "dungeon"], pattern: "cave", hue: 30, emoji: "🕳" },
    { keys: ["schach", "chess"], pattern: "checker", hue: 0, emoji: "♟" },
    { keys: ["tennis", "sport"], pattern: "ball", hue: 120, emoji: "🎾" },
    { keys: ["basketball", "korb"], pattern: "ball", hue: 25, emoji: "🏀" },
    { keys: ["weihnachten", "christmas"], pattern: "christmas", hue: 130, emoji: "🎄" },
    { keys: ["kompass", "navigation", "reise"], pattern: "compass", hue: 30, emoji: "🧭" },
    { keys: ["karte", "map", "welt"], pattern: "map", hue: 160, emoji: "🗺" },
    { keys: ["ninja", "samurai", "japan"], pattern: "ninja", hue: 0, emoji: "🥷" },
    { keys: ["ritter", "knight"], pattern: "knight", hue: 220, emoji: "🛡" },
    { keys: ["vampir", "vampire"], pattern: "vampire", hue: 350, emoji: "🧛" },
    { keys: ["yinyang", "balance", "harmonie"], pattern: "yinyang", hue: 0, emoji: "☯" },
    { keys: ["panda", "bambus"], pattern: "panda", hue: 0, emoji: "🐼" },
    { keys: ["koala", "australien"], pattern: "koala", hue: 120, emoji: "🐨" },
    { keys: ["hai", "shark", "meer"], pattern: "shark", hue: 200, emoji: "🦈" },
    { keys: ["adler", "eagle"], pattern: "eagle", hue: 35, emoji: "🦅" },
    { keys: ["wolf", "wolf"], pattern: "wolf", hue: 220, emoji: "🐺" },
    { keys: ["flamingo", "rosa"], pattern: "flamingo", hue: 330, emoji: "🦩" },
    { keys: ["ramen", "nudeln", "asia"], pattern: "ramen", hue: 25, emoji: "🍜" },
    { keys: ["honig", "biene", "wabe"], pattern: "honey", hue: 45, emoji: "🍯" },
    { keys: ["tulpe", "tulip", "fruehling"], pattern: "tulip", hue: 340, emoji: "🌷" },
    { keys: ["sonnenblume", "sunflower"], pattern: "sunflower", hue: 48, emoji: "🌻" },
    { keys: ["bonsai", "zen", "japan garten"], pattern: "bonsai", hue: 130, emoji: "🪴" },
    { keys: ["pyramide", "pyramid", "aegypten"], pattern: "pyramid", hue: 38, emoji: "🔺" },
    { keys: ["eiffelturm", "paris", "frankreich"], pattern: "tower", hue: 220, emoji: "🗼" },
    { keys: ["windmuehle", "windmill", "holland"], pattern: "windmill", hue: 200, emoji: "🌬" },
    { keys: ["raumstation", "iss", "orbit station"], pattern: "spacestation", hue: 200, emoji: "🛸" },
    { keys: ["mars rover", "rover", "nasa"], pattern: "rover", hue: 15, emoji: "🚙" },
    { keys: ["graffiti", "street art", "spray"], pattern: "graffiti", hue: 300, emoji: "🎨" },
    { keys: ["minimal", "minimalist", "clean art"], pattern: "minimal", hue: 200, emoji: "◻" },
    { keys: ["mandala", "spirituell", "meditation"], pattern: "mandala", hue: 280, emoji: "🔮" },
    { keys: ["noco flux", "flux modell"], pattern: "diamond", hue: 175, emoji: "◆" },
    { keys: ["noco spark", "spark modell"], pattern: "stars", hue: 55, emoji: "⚡" },
    { keys: ["noco prism", "prism modell"], pattern: "crystal", hue: 260, emoji: "◇" },
    { keys: ["schwan", "swan", "see vogel"], pattern: "swan", hue: 200, emoji: "🦢" },
    { keys: ["faultier", "sloth"], pattern: "sloth", hue: 90, emoji: "🦥" },
    { keys: ["papagei", "parrot"], pattern: "parrot", hue: 120, emoji: "🦜" },
    { keys: ["krokodil", "crocodile"], pattern: "croc", hue: 130, emoji: "🐊" },
    { keys: ["gletscher", "glacier", "eis berg"], pattern: "glacier", hue: 195, emoji: "🧊" },
    { keys: ["regenwald", "jungle", "dschungel"], pattern: "jungle", hue: 140, emoji: "🌿" },
    { keys: ["streaming", "twitch", "live"], pattern: "stream", hue: 280, emoji: "📺" },
    { keys: ["esports", "turnier", "gaming cup"], pattern: "trophy", hue: 260, emoji: "🏆" },
    { keys: ["trank", "potion", "zauber trank"], pattern: "potion", hue: 290, emoji: "🧪" },
    { keys: ["amboss", "schmied", "forge"], pattern: "anvil", hue: 220, emoji: "⚒" },
    { keys: ["kristallkugel", "crystal ball"], pattern: "crystalball", hue: 270, emoji: "🔮" },
    { keys: ["pop art", "warhol", "comic pop"], pattern: "popart", hue: 0, emoji: "💥" },
    { keys: ["tattoo", "tribal", "ink art"], pattern: "tattoo", hue: 0, emoji: "🖤" },
    { keys: ["bruecke", "bridge", "golden gate"], pattern: "bridge", hue: 220, emoji: "🌉" },
    { keys: ["fabrik", "factory", "industrie"], pattern: "factory", hue: 30, emoji: "🏭" },
    { keys: ["podcast", "mikrofon", "radio"], pattern: "mic", hue: 280, emoji: "🎙" },
    { keys: ["skateboard", "skate", "street"], pattern: "skate", hue: 0, emoji: "🛹" },
    { keys: ["surfen", "surf", "welle sport"], pattern: "surf", hue: 195, emoji: "🏄" },
    { keys: ["yoga", "meditation pose"], pattern: "yoga", hue: 160, emoji: "🧘" },
    { keys: ["kampfsport", "karate", "dojo"], pattern: "karate", hue: 0, emoji: "🥋" },
    { keys: ["zaun", "garten", "blumen beet"], pattern: "garden", hue: 130, emoji: "🌻" },
    { keys: ["schneemann", "snowman"], pattern: "snowman", hue: 200, emoji: "⛄" },
    { keys: ["rentier", "reindeer", "santa"], pattern: "reindeer", hue: 30, emoji: "🦌" },
    { keys: ["nordlichter", "northern lights"], pattern: "aurora", hue: 150, emoji: "🌠" },
    { keys: ["meteorit", "asteroid", "impact"], pattern: "asteroid", hue: 25, emoji: "💥" },
    { keys: ["labor", "lab", "chemie"], pattern: "lab", hue: 180, emoji: "⚗" },
    { keys: ["bibliothek", "library", "buecher"], pattern: "library", hue: 35, emoji: "📚" },
    { keys: ["theater", "buehne", "drama"], pattern: "theater", hue: 350, emoji: "🎭" },
    { keys: ["kino", "film", "movie"], pattern: "cinema", hue: 0, emoji: "🎬" },
    { keys: ["raketenstart", "launch", "spacex"], pattern: "launch", hue: 200, emoji: "🚀" },
    { keys: ["mondlandung", "apollo", "astronaut"], pattern: "astronaut", hue: 210, emoji: "👨‍🚀" },
    { keys: ["quanten", "quantum", "qbit"], pattern: "quantum", hue: 290, emoji: "⚛" },
    { keys: ["blockchain", "bitcoin", "crypto coin"], pattern: "coin", hue: 45, emoji: "₿" },
    { keys: ["smart home", "smarthome", "iot"], pattern: "smarthome", hue: 200, emoji: "🏡" },
    { keys: ["drohne", "drone", "quadcopter"], pattern: "drone", hue: 220, emoji: "🛸" },
    { keys: ["vr", "virtual reality", "headset"], pattern: "vr", hue: 260, emoji: "🥽" },
    { keys: ["noco render", "pixel studio", "bild generier"], pattern: "diamond", hue: 168, emoji: "▦" },
    { keys: ["t-rex", "dinosaurier", "dino"], pattern: "dragon", hue: 95, emoji: "🦖" },
    { keys: ["jellyfish", "qualle", "tiefsee"], pattern: "jellyfish", hue: 280, emoji: "🪼" },
    { keys: ["axolotl", "axolotl salamander"], pattern: "axolotl", hue: 330, emoji: "🦎" },
    { keys: ["capybara", "wasserschwein"], pattern: "capybara", hue: 35, emoji: "🐹" },
    { keys: ["otter", "otter tier"], pattern: "otter", hue: 200, emoji: "🦦" },
    { keys: ["mermaid", "meerjungfrau"], pattern: "mermaid", hue: 320, emoji: "🧜" },
    { keys: ["peacock", "pfau"], pattern: "peacock", hue: 260, emoji: "🦚" },
    { keys: ["hedgehog", "igel"], pattern: "hedgehog", hue: 30, emoji: "🦔" },
    { keys: ["squirrel", "eichhoernchen"], pattern: "squirrel", hue: 25, emoji: "🐿" },
    { keys: ["hot air balloon", "ballon", "luftballon"], pattern: "balloon", hue: 340, emoji: "🎈" },
    { keys: ["iglu", "igloo", "eis hut"], pattern: "igloo", hue: 195, emoji: "🧊" },
    { keys: ["lagerfeuer", "campfire", "camp"], pattern: "campfire", hue: 20, emoji: "🔥" },
    { keys: ["laterne", "lantern", "licht"], pattern: "lantern", hue: 45, emoji: "🏮" },
    { keys: ["koi", "koi fish", "japan fisch"], pattern: "koi", hue: 10, emoji: "🐠" },
    { keys: ["lotus", "lotusblume"], pattern: "lotus", hue: 330, emoji: "🪷" },
    { keys: ["pagoda", "tempel asia"], pattern: "pagoda", hue: 350, emoji: "⛩" },
    { keys: ["torii", "torii gate"], pattern: "torii", hue: 0, emoji: "⛩" },
    { keys: ["bubble tea", "boba", "tee"], pattern: "bubbletea", hue: 300, emoji: "🧋" },
    { keys: ["croissant", "fruehstueck"], pattern: "croissant", hue: 38, emoji: "🥐" },
    { keys: ["avocado", "avocado toast"], pattern: "avocado", hue: 130, emoji: "🥑" },
    { keys: ["erdbeere", "strawberry"], pattern: "strawberry", hue: 350, emoji: "🍓" },
    { keys: ["ananas", "pineapple"], pattern: "pineapple", hue: 48, emoji: "🍍" },
    { keys: ["kokosnuss", "coconut"], pattern: "coconut", hue: 35, emoji: "🥥" },
    { keys: ["mango", "tropen frucht"], pattern: "mango", hue: 30, emoji: "🥭" },
    { keys: ["trauben", "grapes", "wein"], pattern: "grapes", hue: 280, emoji: "🍇" },
    { keys: ["zitrone", "lemon", "citrus"], pattern: "lemon", hue: 52, emoji: "🍋" },
    { keys: ["karotte", "carrot"], pattern: "carrot", hue: 28, emoji: "🥕" },
    { keys: ["mais", "corn", "cornfield"], pattern: "corn", hue: 48, emoji: "🌽" },
    { keys: ["bbq", "barbecue", "grill"], pattern: "bbq", hue: 15, emoji: "🍖" },
    { keys: ["spaceship", "raumschiff", "ufo ship"], pattern: "spaceship", hue: 220, emoji: "🛸" },
    { keys: ["space station", "raumstation gross"], pattern: "spacestation", hue: 200, emoji: "🛰" },
    { keys: ["teleskop galaxie", "deep space"], pattern: "nebula", hue: 270, emoji: "🌌" },
    { keys: ["cyberpunk", "cyber city", "neon stadt"], pattern: "cyberpunk", hue: 300, emoji: "🌃" },
    { keys: ["hologram", "holo", "projektion"], pattern: "hologram", hue: 180, emoji: "◇" },
    { keys: ["chip", "cpu", "prozessor"], pattern: "chip", hue: 210, emoji: "💾" },
    { keys: ["server", "datacenter", "rack"], pattern: "server", hue: 220, emoji: "🖥" },
    { keys: ["wifi tower", "antenne"], pattern: "tower", hue: 200, emoji: "📡" },
    { keys: ["solar", "solar panel", "photovoltaik"], pattern: "solar", hue: 45, emoji: "☀" },
    { keys: ["windrad", "wind turbine", "windkraft"], pattern: "windmill", hue: 200, emoji: "🌬" },
    { keys: ["sandburg", "sandcastle", "strand"], pattern: "sandcastle", hue: 42, emoji: "🏖" },
    { keys: ["oase", "oasis", "wueste wasser"], pattern: "oasis", hue: 160, emoji: "🏝" },
    { keys: ["korallenriff", "reef", "riff"], pattern: "coral", hue: 330, emoji: "🪸" },
    { keys: ["walzer", "dolphin jump"], pattern: "dolphin", hue: 200, emoji: "🐬" },
    { keys: ["narwal", "narwhal"], pattern: "narwhal", hue: 210, emoji: "🦄" },
    { keys: ["golem", "stein waechter"], pattern: "golem", hue: 220, emoji: "🗿" },
    { keys: ["zauberstab", "magic wand", "stab"], pattern: "wand", hue: 290, emoji: "🪄" },
    { keys: ["zauberhut", "wizard hat"], pattern: "wizard", hue: 270, emoji: "🎩" },
    { keys: ["runenstein", "rune", "nordisch"], pattern: "rune", hue: 200, emoji: "ᚠ" },
    { keys: ["totem", "totempfahl"], pattern: "totem", hue: 25, emoji: "🪵" },
    { keys: ["samurai maske", "oni", "demon mask"], pattern: "oni", hue: 0, emoji: "👹" },
    { keys: ["ritterburg", "medieval"], pattern: "castle", hue: 240, emoji: "🏰" },
    { keys: ["drachenei", "dragon egg"], pattern: "egg", hue: 280, emoji: "🥚" },
    { keys: ["schatzkarte", "treasure map"], pattern: "map", hue: 38, emoji: "🗺" },
    { keys: ["kompass rose", "compass star"], pattern: "compass", hue: 30, emoji: "🧭" },
    { keys: ["ski", "skifahren", "winter sport"], pattern: "ski", hue: 200, emoji: "⛷" },
    { keys: ["snowboard", "board sport"], pattern: "snowboard", hue: 220, emoji: "🏂" },
    { keys: ["skatepark", "halfpipe"], pattern: "skate", hue: 0, emoji: "🛹" },
    { keys: ["festival", "buehne licht"], pattern: "festival", hue: 300, emoji: "🎪" },
    { keys: ["feuerwerk", "fireworks", "silvester"], pattern: "fireworks", hue: 0, emoji: "🎆" },
    { keys: ["konfetti", "confetti", "party"], pattern: "confetti", hue: 320, emoji: "🎉" },
    { keys: ["diamant ring", "jewelry", "schmuck"], pattern: "gem", hue: 280, emoji: "💍" },
    { keys: ["parfum", "perfume", "flakon"], pattern: "perfume", hue: 300, emoji: "🧴" },
    { keys: ["regenschirm", "umbrella", "rain"], pattern: "umbrella", hue: 220, emoji: "☂" },
    { keys: ["blitzgewitter", "thunder storm"], pattern: "lightning", hue: 240, emoji: "⛈" },
    { keys: ["nebelwald", "mist forest"], pattern: "fog", hue: 160, emoji: "🌫" },
    { keys: ["herbst", "autumn", "laub"], pattern: "autumn", hue: 25, emoji: "🍂" },
    { keys: ["fruehling", "spring", "blueten"], pattern: "garden", hue: 320, emoji: "🌼" },
    { keys: ["noco prism", "prism logo"], pattern: "crystal", hue: 260, emoji: "◇" },
    { keys: ["noco spark logo", "spark bolt"], pattern: "lightning", hue: 55, emoji: "⚡" },
    { keys: ["erde", "earth", "planet erde"], pattern: "earth", hue: 130, emoji: "🌍" },
    { keys: ["wolke", "cloud", "wolken"], pattern: "cloud", hue: 210, emoji: "☁" },
    { keys: ["fernseher", "tv", "television"], pattern: "tv", hue: 220, emoji: "📺" },
    { keys: ["bett", "bed", "schlaf"], pattern: "bed", hue: 200, emoji: "🛏" },
    { keys: ["tisch", "table", "desk"], pattern: "table", hue: 30, emoji: "🪑" },
    { keys: ["stuhl", "chair", "sitz"], pattern: "chair", hue: 25, emoji: "💺" },
    { keys: ["tuer", "door", "tueren"], pattern: "door", hue: 35, emoji: "🚪" },
    { keys: ["fenster", "window"], pattern: "window", hue: 200, emoji: "🪟" },
    { keys: ["ball", "fussball", "soccer"], pattern: "ball", hue: 0, emoji: "⚽" },
    { keys: ["buch", "book", "lesen"], pattern: "book", hue: 38, emoji: "📖" },
    { keys: ["uhr", "clock", "watch"], pattern: "clock", hue: 45, emoji: "🕐" },
    { keys: ["lampe", "lamp", "licht"], pattern: "lamp", hue: 48, emoji: "💡" },
    { keys: ["sofa", "couch", "sessel"], pattern: "sofa", hue: 20, emoji: "🛋" },
    { keys: ["bus", "buss"], pattern: "bus", hue: 48, emoji: "🚌" },
    { keys: ["zug", "train", "bahn"], pattern: "train", hue: 0, emoji: "🚂" },
    { keys: ["flugzeug", "plane", "airplane"], pattern: "plane", hue: 210, emoji: "✈" },
    { keys: ["fahrrad", "bike", "bicycle", "rad"], pattern: "bicycle", hue: 120, emoji: "🚲" },
    { keys: ["schluessel", "key", "schlussel"], pattern: "key", hue: 45, emoji: "🔑" },
    { keys: ["tasse", "cup", "mug", "becher"], pattern: "cup", hue: 30, emoji: "☕" },
    { keys: ["teller", "plate", "teller essen"], pattern: "plate", hue: 0, emoji: "🍽" },
    { keys: ["loeffel", "spoon", "loffel"], pattern: "spoon", hue: 200, emoji: "🥄" },
    { keys: ["gabel", "fork"], pattern: "fork", hue: 200, emoji: "🍴" },
    { keys: ["kuehlschrank", "fridge", "kuehlschrank kueche"], pattern: "fridge", hue: 200, emoji: "🧊" },
    { keys: ["mikrowelle", "microwave"], pattern: "microwave", hue: 220, emoji: "📻" },
    { keys: ["ofen", "oven", "herd"], pattern: "oven", hue: 15, emoji: "🔥" },
    { keys: ["spiegel", "mirror"], pattern: "mirror", hue: 200, emoji: "🪞" },
    { keys: ["toilette", "wc", "toilet"], pattern: "toilet", hue: 200, emoji: "🚽" },
    { keys: ["dusche", "shower", "bad"], pattern: "shower", hue: 200, emoji: "🚿" },
    { keys: ["schuh", "shoe", "sneaker"], pattern: "shoe", hue: 0, emoji: "👟" },
    { keys: ["hut", "hat", "cap"], pattern: "hat", hue: 220, emoji: "🎩" },
    { keys: ["hemd", "shirt", "tshirt"], pattern: "shirt", hue: 210, emoji: "👕" },
    { keys: ["hose", "pants", "jeans"], pattern: "pants", hue: 220, emoji: "👖" },
    { keys: ["regen", "rain", "regentropfen"], pattern: "rain", hue: 220, emoji: "🌧" },
    { keys: ["zaun", "fence"], pattern: "fence", hue: 30, emoji: "🚧" },
    { keys: ["strasse", "road", "street"], pattern: "road", hue: 40, emoji: "🛣" },
    { keys: ["ampel", "traffic", "trafficlight"], pattern: "traffic", hue: 0, emoji: "🚦" },
    { keys: ["stift", "pen", "bleistift"], pattern: "pen", hue: 45, emoji: "✏" },
    { keys: ["kopfhoerer", "headphones", "kopfhorer"], pattern: "headphones", hue: 260, emoji: "🎧" },
    { keys: ["regenschirm", "umbrella", "schirm"], pattern: "umbrella", hue: 220, emoji: "☂" },
    { keys: ["hund", "dog", "welpe"], pattern: "dog", hue: 28, emoji: "🐶" },
    { keys: ["blume", "flower", "rose"], pattern: "flower", hue: 330, emoji: "🌸" },
    { keys: ["baum", "tree"], pattern: "tree", hue: 130, emoji: "🌳" },
    { keys: ["baer", "bear"], pattern: "bear", hue: 25, emoji: "🐻" },
    { keys: ["pferd", "horse"], pattern: "horse", hue: 30, emoji: "🐴" },
    { keys: ["kuh", "cow"], pattern: "cow", hue: 120, emoji: "🐄" },
    { keys: ["schwein", "pig"], pattern: "pig", hue: 330, emoji: "🐷" },
    { keys: ["hase", "rabbit"], pattern: "rabbit", hue: 35, emoji: "🐰" },
    { keys: ["frosch", "frog"], pattern: "frog", hue: 130, emoji: "🐸" },
    { keys: ["banane", "banana"], pattern: "banana", hue: 48, emoji: "🍌" },
    { keys: ["orange", "apelsin"], pattern: "orange", hue: 28, emoji: "🍊" },
    { keys: ["birne", "pear"], pattern: "pear", hue: 90, emoji: "🍐" },
    { keys: ["wolkenkratzer", "skyscraper", "hochhaus"], pattern: "skyscraper", hue: 230, emoji: "🏢" },
    { keys: ["ente", "duck"], pattern: "duck", hue: 200, emoji: "🦆" },
    { keys: ["schaf", "sheep"], pattern: "sheep", hue: 200, emoji: "🐑" },
    { keys: ["maus", "mouse", "maeuschen"], pattern: "mouse", hue: 220, emoji: "🐭" },
    { keys: ["huhn", "chicken", "henne"], pattern: "chicken", hue: 40, emoji: "🐔" },
    { keys: ["ziege", "goat"], pattern: "goat", hue: 35, emoji: "🐐" },
    { keys: ["eichhoernchen", "squirrel nut"], pattern: "squirrel", hue: 25, emoji: "🐿" },
    { keys: ["hamster", "hamster tier"], pattern: "mouse", hue: 30, emoji: "🐹" },
    { keys: ["papagei einfach", "papagei bunt"], pattern: "parrot", hue: 120, emoji: "🦜" },
    { keys: ["tomate", "tomato"], pattern: "apple", hue: 0, emoji: "🍅" },
    { keys: ["brokkoli", "broccoli"], pattern: "tree", hue: 130, emoji: "🥦" },
    { keys: ["ei", "egg food"], pattern: "egg", hue: 48, emoji: "🥚" },
    { keys: ["wurst", "sausage"], pattern: "food", hue: 15, emoji: "🌭" },
    { keys: ["reis", "rice"], pattern: "bowl", hue: 45, emoji: "🍚" },
    { keys: ["suppe", "soup"], pattern: "bowl", hue: 28, emoji: "🍲" },
    { keys: ["keks", "cookie"], pattern: "donut", hue: 32, emoji: "🍪" },
    { keys: ["schokolade", "chocolate"], pattern: "food", hue: 25, emoji: "🍫" },
    { keys: ["flasche", "bottle"], pattern: "bottle", hue: 200, emoji: "🍾" },
    { keys: ["glas wasser", "wasserglas"], pattern: "cup", hue: 200, emoji: "🥛" },
    { keys: ["park", "park bank"], pattern: "garden", hue: 130, emoji: "🌳" },
    { keys: ["see", "lake"], pattern: "waves", hue: 200, emoji: "🏞" },
    { keys: ["strand", "beach"], pattern: "island", hue: 42, emoji: "🏖" },
    { keys: ["taxi", "cab"], pattern: "car", hue: 48, emoji: "🚕" },
    { keys: ["krankenwagen", "ambulance"], pattern: "bus", hue: 0, emoji: "🚑" },
    { keys: ["feuerwehr", "firetruck"], pattern: "bus", hue: 0, emoji: "🚒" },
    { keys: ["polizei", "police car"], pattern: "car", hue: 220, emoji: "🚓" },
    { keys: ["rakete einfach", "rakete klein"], pattern: "rocket", hue: 0, emoji: "🚀" },
    { keys: ["schlange", "snake"], pattern: "helix", hue: 120, emoji: "🐍" },
    { keys: ["brot", "bread"], pattern: "croissant", hue: 38, emoji: "🍞" },
    { keys: ["hammer", "hammer tool"], pattern: "hammer", hue: 30, emoji: "🔨" },
    { keys: ["schere", "scissors"], pattern: "scissors", hue: 200, emoji: "✂" },
    { keys: ["rose", "rose flower"], pattern: "flower", hue: 350, emoji: "🌹" },
    { keys: ["geschenk", "gift", "present"], pattern: "gift", hue: 0, emoji: "🎁" },
    { keys: ["kirche", "church"], pattern: "church", hue: 220, emoji: "⛪" },
    { keys: ["wolke klein", "wolken himmel"], pattern: "cloud", hue: 205, emoji: "☁" },
    { keys: ["kissen", "pillow"], pattern: "bed", hue: 280, emoji: "🛏" },
    { keys: ["waschmaschine", "washer"], pattern: "fridge", hue: 210, emoji: "🧺" },
    { keys: ["staubsauger", "vacuum"], pattern: "robot", hue: 200, emoji: "🤖" },
    { keys: ["blumentopf", "topf pflanze"], pattern: "flower", hue: 130, emoji: "🪴" },
    { keys: ["gras", "grass", "rasen"], pattern: "garden", hue: 125, emoji: "🌿" },
    { keys: ["teich", "pond"], pattern: "waves", hue: 195, emoji: "💧" },
    { keys: ["vogelhaus", "birdhouse"], pattern: "house", hue: 35, emoji: "🏠" },
    { keys: ["briefkasten", "mailbox"], pattern: "door", hue: 0, emoji: "📬" },
    { keys: ["muelleimer", "trash"], pattern: "cylinder", hue: 220, emoji: "🗑" },
    { keys: ["kerze", "candle"], pattern: "lamp", hue: 40, emoji: "🕯" },
    { keys: ["wecker", "alarm clock"], pattern: "clock", hue: 0, emoji: "⏰" },
    { keys: ["lineal", "ruler"], pattern: "pen", hue: 45, emoji: "📏" },
    { keys: ["giraffe", "giraffe tier"], pattern: "giraffe", hue: 48, emoji: "🦒" },
    { keys: ["zebra", "zebra streifen"], pattern: "zebra", hue: 0, emoji: "🦓" },
    { keys: ["kamel", "camel", "wueste kamel"], pattern: "camel", hue: 38, emoji: "🐫" },
    { keys: ["lama", "llama"], pattern: "llama", hue: 35, emoji: "🦙" },
    { keys: ["kaenguru", "kangaroo"], pattern: "kangaroo", hue: 28, emoji: "🦘" },
    { keys: ["nashorn", "rhino", "rhinoceros"], pattern: "rhino", hue: 220, emoji: "🦏" },
    { keys: ["nilpferd", "hippo", "hippopotamus"], pattern: "hippo", hue: 330, emoji: "🦛" },
    { keys: ["chamäleon", "chamaeleon", "chameleon"], pattern: "chameleon", hue: 130, emoji: "🦎" },
    { keys: ["leguan", "iguana"], pattern: "lizard", hue: 125, emoji: "🦎" },
    { keys: ["aligator", "alligator", "krokodil gross"], pattern: "croc", hue: 135, emoji: "🐊" },
    { keys: ["waschbaer", "raccoon"], pattern: "raccoon", hue: 220, emoji: "🦝" },
    { keys: ["biber", "beaver"], pattern: "beaver", hue: 25, emoji: "🦫" },
    { keys: ["dachs", "badger"], pattern: "badger", hue: 30, emoji: "🦡" },
    { keys: ["igel winter", "hedgehog cute"], pattern: "hedgehog", hue: 32, emoji: "🦔" },
    { keys: ["kolibri", "hummingbird"], pattern: "hummingbird", hue: 320, emoji: "🐦" },
    { keys: ["pelikan", "pelican"], pattern: "pelican", hue: 210, emoji: "🦢" },
    { keys: ["storch", "stork"], pattern: "stork", hue: 200, emoji: "🦩" },
    { keys: ["schwalbe", "swallow bird"], pattern: "bird", hue: 220, emoji: "🐦" },
    { keys: ["libelle", "dragonfly"], pattern: "dragonfly", hue: 180, emoji: "🪰" },
    { keys: ["schnecke", "snail"], pattern: "snail", hue: 130, emoji: "🐌" },
    { keys: ["ameise", "ant insect"], pattern: "ant", hue: 0, emoji: "🐜" },
    { keys: ["mantis", "gottesanbeterin"], pattern: "mantis", hue: 125, emoji: "🦗" },
    { keys: ["heuschrecke", "grasshopper"], pattern: "grasshopper", hue: 120, emoji: "🦗" },
    { keys: ["pfirsich", "peach"], pattern: "peach", hue: 18, emoji: "🍑" },
    { keys: ["pflaume", "plum"], pattern: "plum", hue: 280, emoji: "🍑" },
    { keys: ["blaubeere", "blueberry"], pattern: "berry", hue: 250, emoji: "🫐" },
    { keys: ["himbeere", "raspberry"], pattern: "berry", hue: 350, emoji: "🍓" },
    { keys: ["melone", "melon"], pattern: "melon", hue: 120, emoji: "🍈" },
    { keys: ["gurke", "cucumber"], pattern: "cucumber", hue: 130, emoji: "🥒" },
    { keys: ["salat", "lettuce", "kopfsalat"], pattern: "lettuce", hue: 125, emoji: "🥬" },
    { keys: ["spinat", "spinach"], pattern: "lettuce", hue: 135, emoji: "🥬" },
    { keys: ["zwiebel", "onion"], pattern: "onion", hue: 280, emoji: "🧅" },
    { keys: ["knoblauch", "garlic"], pattern: "garlic", hue: 0, emoji: "🧄" },
    { keys: ["paprika", "pepper vegetable"], pattern: "pepper", hue: 0, emoji: "🫑" },
    { keys: ["chili", "chilli"], pattern: "chili", hue: 0, emoji: "🌶" },
    { keys: ["champignon", "mushroom food"], pattern: "mushroom", hue: 30, emoji: "🍄" },
    { keys: ["nudeln", "pasta", "spaghetti"], pattern: "pasta", hue: 42, emoji: "🍝" },
    { keys: ["lasagne", "lasagna"], pattern: "lasagna", hue: 28, emoji: "🍝" },
    { keys: ["pfannkuchen", "pancake"], pattern: "pancake", hue: 38, emoji: "🥞" },
    { keys: ["waffel", "waffle"], pattern: "waffle", hue: 32, emoji: "🧇" },
    { keys: ["honig toast", "toast"], pattern: "toast", hue: 38, emoji: "🍞" },
    { keys: ["popcorn", "kino snack"], pattern: "popcorn", hue: 48, emoji: "🍿" },
    { keys: ["eisbecher", "sundae", "eis dessert"], pattern: "sundae", hue: 300, emoji: "🍨" },
    { keys: ["helicopter", "hubschrauber", "chopper"], pattern: "helicopter", hue: 200, emoji: "🚁" },
    { keys: ["motorrad", "motorcycle", "bike motor"], pattern: "motorcycle", hue: 0, emoji: "🏍" },
    { keys: ["lastwagen", "truck", "lkw"], pattern: "truck", hue: 220, emoji: "🚚" },
    { keys: ["traktor", "tractor", "bauernhof"], pattern: "tractor", hue: 120, emoji: "🚜" },
    { keys: ["u-bahn", "subway", "metro"], pattern: "subway", hue: 220, emoji: "🚇" },
    { keys: ["tram", "strassenbahn"], pattern: "tram", hue: 48, emoji: "🚊" },
    { keys: ["segelboot", "sailboat"], pattern: "sailboat", hue: 200, emoji: "⛵" },
    { keys: ["jacht", "yacht"], pattern: "yacht", hue: 210, emoji: "🛥" },
    { keys: ["kanu", "canoe", "kajak"], pattern: "canoe", hue: 25, emoji: "🛶" },
    { keys: ["geyser", "geysir", "heiße quelle"], pattern: "geyser", hue: 195, emoji: "♨" },
    { keys: ["golf", "golfball"], pattern: "golf", hue: 130, emoji: "⛳" },
    { keys: ["boxen", "boxing", "boxhandschuh"], pattern: "boxing", hue: 0, emoji: "🥊" },
    { keys: ["schwimmen", "swimming"], pattern: "swim", hue: 200, emoji: "🏊" },
    { keys: ["klettern", "climbing"], pattern: "climb", hue: 220, emoji: "🧗" },
    { keys: ["klavier", "piano"], pattern: "piano", hue: 0, emoji: "🎹" },
    { keys: ["geige", "violin"], pattern: "violin", hue: 30, emoji: "🎻" },
    { keys: ["trompete", "trumpet"], pattern: "trumpet", hue: 48, emoji: "🎺" },
    { keys: ["trommel", "drums", "schlagzeug"], pattern: "drums", hue: 0, emoji: "🥁" },
    { keys: ["mikrofon studio", "singer mic"], pattern: "mic", hue: 280, emoji: "🎤" },
    { keys: ["oper", "opera house"], pattern: "theater", hue: 350, emoji: "🎭" },
    { keys: ["circus", "zirkus"], pattern: "circus", hue: 0, emoji: "🎪" },
    { keys: ["karussell", "carousel"], pattern: "carousel", hue: 300, emoji: "🎠" },
    { keys: ["riesenrad", "ferris wheel"], pattern: "ferris", hue: 0, emoji: "🎡" },
    { keys: ["achterbahn", "roller coaster"], pattern: "coaster", hue: 0, emoji: "🎢" },
    { keys: ["schloss disney", "maerchenschloss"], pattern: "castle", hue: 290, emoji: "🏰" },
    { keys: ["statue of liberty", "freiheitsstatue"], pattern: "statue", hue: 200, emoji: "🗽" },
    { keys: ["big ben", "uhrturm london"], pattern: "tower", hue: 220, emoji: "🕰" },
    { keys: ["kolosseum", "colosseum"], pattern: "colosseum", hue: 28, emoji: "🏛" },
    { keys: ["parthenon", "antike tempel"], pattern: "temple", hue: 38, emoji: "🏛" },
    { keys: ["moschee", "mosque"], pattern: "mosque", hue: 48, emoji: "🕌" },
    { keys: ["synagoge", "synagogue"], pattern: "synagogue", hue: 220, emoji: "🕍" },
    { keys: ["buddha", "buddha statue"], pattern: "buddha", hue: 48, emoji: "🧘" },
    { keys: ["gehirn", "brain organ"], pattern: "brain", hue: 330, emoji: "🧠" },
    { keys: ["lunge", "lungs"], pattern: "lungs", hue: 350, emoji: "🫁" },
    { keys: ["herz organ", "heart organ"], pattern: "heartorgan", hue: 0, emoji: "❤" },
    { keys: ["skelett", "skeleton"], pattern: "skeleton", hue: 0, emoji: "💀" },
    { keys: ["zahn", "tooth", "zaehne"], pattern: "tooth", hue: 0, emoji: "🦷" },
    { keys: ["auge", "eye", "augen"], pattern: "eye", hue: 200, emoji: "👁" },
    { keys: ["hand", "hands"], pattern: "hand", hue: 28, emoji: "✋" },
    { keys: ["fuss", "foot", "fuesse"], pattern: "foot", hue: 28, emoji: "🦶" },
    { keys: ["regenbogenfisch", "clownfish", "nemo"], pattern: "clownfish", hue: 15, emoji: "🐠" },
    { keys: ["seestern", "starfish"], pattern: "starfish", hue: 350, emoji: "⭐" },
    { keys: ["krabbe", "crab"], pattern: "crab", hue: 0, emoji: "🦀" },
    { keys: ["hummer", "lobster"], pattern: "lobster", hue: 0, emoji: "🦞" },
    { keys: ["tintenfisch", "octopus"], pattern: "octopus", hue: 280, emoji: "🐙" },
    { keys: ["seepferdchen", "seahorse"], pattern: "seahorse", hue: 200, emoji: "🐚" },
    { keys: ["muschel", "shell", "muschel strand"], pattern: "shell", hue: 330, emoji: "🐚" },
    { keys: ["leuchtkäfer", "firefly"], pattern: "firefly", hue: 55, emoji: "✨" },
    { keys: ["schneeleopard", "snow leopard"], pattern: "snowleopard", hue: 200, emoji: "🐆" },
    { keys: ["gepard", "cheetah"], pattern: "cheetah", hue: 38, emoji: "🐆" },
    { keys: ["jaguar", "jaguar cat"], pattern: "jaguar", hue: 30, emoji: "🐆" },
    { keys: ["panther", "black panther"], pattern: "panther", hue: 270, emoji: "🐈" },
    { keys: ["rentier nord", "caribou"], pattern: "reindeer", hue: 28, emoji: "🦌" },
    { keys: ["elch", "moose", "elch tier"], pattern: "moose", hue: 30, emoji: "🫎" },
    { keys: ["büffel", "buffalo"], pattern: "buffalo", hue: 25, emoji: "🐃" },
    { keys: ["stier", "bull"], pattern: "bull", hue: 0, emoji: "🐂" },
    { keys: ["hahn", "rooster"], pattern: "rooster", hue: 15, emoji: "🐓" },
    { keys: ["truthahn", "turkey bird"], pattern: "turkey", hue: 25, emoji: "🦃" },
    { keys: ["pinguin baby", "pinguin cute"], pattern: "penguin", hue: 210, emoji: "🐧" },
    { keys: ["eisbär", "polar bear", "eisbaer"], pattern: "polarbear", hue: 200, emoji: "🐻‍❄" },
    { keys: ["mondfahrzeug", "moon rover"], pattern: "rover", hue: 220, emoji: "🚙" },
    { keys: ["milchstrasse", "milky way"], pattern: "nebula", hue: 270, emoji: "🌌" },
    { keys: ["sternschnuppe", "shooting star"], pattern: "shootingstar", hue: 48, emoji: "🌠" },
    { keys: ["teleskop stern", "sternenhimmel"], pattern: "stars", hue: 250, emoji: "✨" },
    { keys: ["bluetooth", "bluetooth icon"], pattern: "bluetooth", hue: 220, emoji: "📶" },
    { keys: ["akku", "battery"], pattern: "battery", hue: 120, emoji: "🔋" },
    { keys: ["stecker", "plug", "kabel"], pattern: "plug", hue: 220, emoji: "🔌" },
    { keys: ["maus computer", "computer mouse"], pattern: "mousepc", hue: 220, emoji: "🖱" },
    { keys: ["tastatur", "keyboard"], pattern: "keyboard", hue: 220, emoji: "⌨" },
    { keys: ["monitor", "bildschirm"], pattern: "monitor", hue: 210, emoji: "🖥" },
    { keys: ["drucker", "printer"], pattern: "printer", hue: 200, emoji: "🖨" },
    { keys: ["kamera foto", "dslr"], pattern: "camera", hue: 240, emoji: "📷" },
    { keys: ["videokamera", "camcorder"], pattern: "camcorder", hue: 220, emoji: "📹" },
    { keys: ["gameboy", "handheld console"], pattern: "gamepad", hue: 280, emoji: "🎮" },
    { keys: ["joystick", "arcade"], pattern: "joystick", hue: 0, emoji: "🕹" },
    { keys: ["rubiks cube", "zauberwuerfel"], pattern: "cube", hue: 0, emoji: "🧩" },
    { keys: ["lego", "baustein"], pattern: "brick", hue: 0, emoji: "🧱" },
    { keys: ["teddy", "teddybaer", "teddy bear"], pattern: "teddy", hue: 28, emoji: "🧸" },
    { keys: ["puppe", "doll"], pattern: "doll", hue: 330, emoji: "🪆" },
    { keys: ["ballon hund", "balloon dog"], pattern: "balloondog", hue: 0, emoji: "🎈" },
    { keys: ["zauberer hut", "magician"], pattern: "wizard", hue: 270, emoji: "🎩" },
    { keys: ["clown", "clown gesicht"], pattern: "clown", hue: 0, emoji: "🤡" },
    { keys: ["roboter arm", "robot arm"], pattern: "robotarm", hue: 200, emoji: "🦾" },
    { keys: ["satellitenschüssel", "sat dish"], pattern: "satdish", hue: 200, emoji: "📡" },
    { keys: ["radar", "radar dish"], pattern: "radar", hue: 200, emoji: "📡" },
    { keys: ["windpark", "wind farm"], pattern: "windfarm", hue: 200, emoji: "🌬" },
    { keys: ["atomkraft", "nuclear plant"], pattern: "nuclear", hue: 200, emoji: "☢" },
    { keys: ["recycling", "recycle"], pattern: "recycle", hue: 130, emoji: "♻" },
    { keys: ["erde planet", "world globe"], pattern: "earth", hue: 140, emoji: "🌍" },
    { keys: ["karte spiel", "playing card"], pattern: "card", hue: 0, emoji: "🃏" },
    { keys: ["poker", "poker chip"], pattern: "chip", hue: 0, emoji: "🎰" },
    { keys: ["schachkoenig", "chess king"], pattern: "checker", hue: 0, emoji: "♔" },
    { keys: ["domino", "domino stein"], pattern: "domino", hue: 0, emoji: "🁢" },
    { keys: ["puzzle", "puzzle piece"], pattern: "maze", hue: 280, emoji: "🧩" },
    { keys: ["origami", "papier falten"], pattern: "origami", hue: 0, emoji: "📄" },
    { keys: ["origami kranich", "paper crane"], pattern: "crane", hue: 0, emoji: "🕊" },
    { keys: ["keramik", "vase", "toepfer"], pattern: "vase", hue: 300, emoji: "🏺" },
    { keys: ["perlenkette", "pearl necklace"], pattern: "pearl", hue: 0, emoji: "📿" },
    { keys: ["krone könig", "king crown"], pattern: "crown", hue: 48, emoji: "👑" },
    { keys: ["schatztruhe", "treasure chest"], pattern: "treasure", hue: 38, emoji: "💰" },
    { keys: ["anker", "anchor", "schiff anker"], pattern: "anchor", hue: 220, emoji: "⚓" },
    { keys: ["kompass navigation", "compass nav"], pattern: "compass", hue: 30, emoji: "🧭" },
    { keys: ["fackel", "torch"], pattern: "torch", hue: 20, emoji: "🔥" },
    { keys: ["fackellauf", "olympic torch"], pattern: "olympictorch", hue: 15, emoji: "🔥" },
    { keys: ["medizin kreuz", "first aid"], pattern: "medical", hue: 0, emoji: "➕" },
    { keys: ["stethoskop", "stethoscope"], pattern: "stethoscope", hue: 220, emoji: "🩺" },
    { keys: ["spritze", "syringe"], pattern: "syringe", hue: 200, emoji: "💉" },
    { keys: ["pille", "pill", "medizin tablette"], pattern: "pill", hue: 0, emoji: "💊" },
    { keys: ["kruecke", "crutch"], pattern: "crutch", hue: 200, emoji: "🩼" },
    { keys: ["rollstuhl", "wheelchair"], pattern: "wheelchair", hue: 220, emoji: "♿" },
    { keys: ["brille", "glasses", "brillen"], pattern: "glasses", hue: 220, emoji: "👓" },
    { keys: ["sonnenbrille", "sunglasses"], pattern: "sunglasses", hue: 0, emoji: "🕶" },
    { keys: ["rucksack", "backpack"], pattern: "backpack", hue: 220, emoji: "🎒" },
    { keys: ["koffer", "suitcase", "reisekoffer"], pattern: "suitcase", hue: 220, emoji: "🧳" },
    { keys: ["pass", "reisepass"], pattern: "passport", hue: 220, emoji: "🛂" },
    { keys: ["ticket", "eintrittskarte"], pattern: "ticket", hue: 0, emoji: "🎫" },
    { keys: ["brief", "letter", "post"], pattern: "letter", hue: 0, emoji: "✉" },
    { keys: ["paket", "package", "paket lieferung"], pattern: "package", hue: 28, emoji: "📦" },
    { keys: ["lieferwagen", "delivery van"], pattern: "van", hue: 48, emoji: "🚐" },
    { keys: ["postbote", "mail carrier"], pattern: "mail", hue: 220, emoji: "📬" },
    { keys: ["feuerloescher", "fire extinguisher"], pattern: "extinguisher", hue: 0, emoji: "🧯" },
    { keys: ["warnschild", "warning sign"], pattern: "warning", hue: 48, emoji: "⚠" },
    { keys: ["baustelle", "construction"], pattern: "construction", hue: 48, emoji: "🚧" },
    { keys: ["kran", "crane building"], pattern: "crane", hue: 48, emoji: "🏗" },
    { keys: ["ziegel", "brick wall"], pattern: "brick", hue: 15, emoji: "🧱" },
    { keys: ["treppe", "stairs", "stufen"], pattern: "stairs", hue: 30, emoji: "🪜" },
    { keys: ["aufzug", "elevator", "lift"], pattern: "elevator", hue: 220, emoji: "🛗" },
    { keys: ["rolltreppe", "escalator"], pattern: "escalator", hue: 220, emoji: "🛗" },
    { keys: ["bank park", "park bench"], pattern: "bench", hue: 30, emoji: "🪑" },
    { keys: ["brunnen", "fountain"], pattern: "fountain", hue: 200, emoji: "⛲" },
    { keys: ["denkmal", "monument"], pattern: "monument", hue: 220, emoji: "🗿" },
    { keys: ["weltkugel", "globe stand"], pattern: "globe", hue: 200, emoji: "🌐" },
    { keys: ["feder", "feather pen"], pattern: "feather", hue: 200, emoji: "🪶" },
    { keys: ["tinte", "ink bottle"], pattern: "ink", hue: 270, emoji: "🖋" },
    { keys: ["notizbuch", "notebook"], pattern: "notebook", hue: 48, emoji: "📓" },
    { keys: ["kalender", "calendar"], pattern: "calendar", hue: 0, emoji: "📅" },
    { keys: ["uhr wand", "wall clock"], pattern: "clock", hue: 40, emoji: "🕐" },
    { keys: ["sanduhr", "hourglass"], pattern: "hourglass", hue: 38, emoji: "⏳" },
    { keys: ["wecker digital", "alarm digital"], pattern: "clock", hue: 0, emoji: "⏰" },
    { keys: ["fussball", "soccer ball", "fussball spiel"], pattern: "ball", hue: 120, emoji: "⚽" },
    { keys: ["basketball", "korbball"], pattern: "ball", hue: 25, emoji: "🏀" },
    { keys: ["tennis", "tennisball"], pattern: "ball", hue: 120, emoji: "🎾" },
    { keys: ["volleyball", "volley"], pattern: "ball", hue: 0, emoji: "🏐" },
    { keys: ["baseball", "baseball schlaeger"], pattern: "ball", hue: 0, emoji: "⚾" },
    { keys: ["hockey", "eishockey"], pattern: "hockey", hue: 200, emoji: "🏒" },
    { keys: ["skateboard", "skaten"], pattern: "skate", hue: 0, emoji: "🛹" },
    { keys: ["surfen", "surfboard", "surfer"], pattern: "surf", hue: 200, emoji: "🏄" },
    { keys: ["ski", "skifahren", "snowboard"], pattern: "ski", hue: 200, emoji: "⛷" },
    { keys: ["zelt", "camping zelt"], pattern: "tent", hue: 120, emoji: "⛺" },
    { keys: ["feuerstelle", "lagerfeuer", "campfire"], pattern: "flame", hue: 20, emoji: "🔥" },
    { keys: ["picknick", "picnic"], pattern: "food", hue: 120, emoji: "🧺" },
    { keys: ["angeln", "fishing rod", "angel"], pattern: "fish", hue: 200, emoji: "🎣" },
    { keys: ["trophäe", "trophy", "pokal"], pattern: "trophy", hue: 48, emoji: "🏆" },
    { keys: ["medaille", "medal olympia"], pattern: "medal", hue: 48, emoji: "🏅" },
    { keys: ["superheld", "superhero", "cape hero"], pattern: "hero", hue: 0, emoji: "🦸" },
    { keys: ["batman", "fledermaus held"], pattern: "bat", hue: 270, emoji: "🦇" },
    { keys: ["spiderman", "spider hero"], pattern: "spider", hue: 0, emoji: "🕷" },
    { keys: ["einhorn", "unicorn pony"], pattern: "unicorn", hue: 300, emoji: "🦄" },
    { keys: ["fee", "fairy", "elfe"], pattern: "fairy", hue: 280, emoji: "🧚" },
    { keys: ["drache baby", "dragon cute"], pattern: "dragon", hue: 120, emoji: "🐲" },
    { keys: ["ninja", "samurai"], pattern: "ninja", hue: 270, emoji: "🥷" },
    { keys: ["piratenschiff", "pirate ship"], pattern: "ship", hue: 30, emoji: "🏴‍☠" },
    { keys: ["schneemann", "snowman winter"], pattern: "snowman", hue: 200, emoji: "⛄" },
    { keys: ["weihnachtsbaum", "christmas tree"], pattern: "tree", hue: 130, emoji: "🎄" },
    { keys: ["geschenk", "gift box", "paket geschenk"], pattern: "gift", hue: 0, emoji: "🎁" },
    { keys: ["osterei", "easter egg"], pattern: "egg", hue: 300, emoji: "🥚" },
    { keys: ["herzballon", "heart balloon"], pattern: "heart", hue: 340, emoji: "🎈" },
    { keys: ["luftballon", "balloon"], pattern: "balloon", hue: 0, emoji: "🎈" },
    { keys: ["confetti", "konfetti party"], pattern: "confetti", hue: 0, emoji: "🎊" },
    { keys: ["disco", "dance party"], pattern: "disco", hue: 280, emoji: "🪩" },
    { keys: ["dj", "turntable"], pattern: "dj", hue: 280, emoji: "🎧" },
    { keys: ["vinyl", "schallplatte"], pattern: "vinyl", hue: 0, emoji: "💿" },
    { keys: ["radio", "radio geraet"], pattern: "radio", hue: 220, emoji: "📻" },
    { keys: ["fernseher", "tv", "television"], pattern: "tv", hue: 220, emoji: "📺" },
    { keys: ["smartphone", "handy", "iphone"], pattern: "phone", hue: 220, emoji: "📱" },
    { keys: ["tablet", "ipad"], pattern: "tablet", hue: 220, emoji: "📱" },
    { keys: ["drohne", "drone", "quadcopter"], pattern: "drone", hue: 200, emoji: "🛸" },
    { keys: ["roboter hund", "robot dog"], pattern: "robot", hue: 200, emoji: "🤖" },
    { keys: ["cyberpunk", "neon stadt"], pattern: "cyberpunk", hue: 280, emoji: "🌃" },
    { keys: ["matrix", "digital rain"], pattern: "matrix", hue: 120, emoji: "💚" },
    { keys: ["hologramm", "hologram"], pattern: "hologram", hue: 180, emoji: "✨" },
    { keys: ["chip", "microchip", "prozessor"], pattern: "chip", hue: 220, emoji: "💾" },
    { keys: ["server", "server rack"], pattern: "server", hue: 220, emoji: "🖥" },
    { keys: ["cloud tech", "cloud computing"], pattern: "cloud", hue: 200, emoji: "☁" },
    { keys: ["feuerwehr", "fire truck"], pattern: "truck", hue: 0, emoji: "🚒" },
    { keys: ["polizei", "police car"], pattern: "car", hue: 220, emoji: "🚓" },
    { keys: ["ambulanz", "ambulance"], pattern: "van", hue: 0, emoji: "🚑" },
    { keys: ["taxi", "cab"], pattern: "car", hue: 48, emoji: "🚕" },
    { keys: ["bus", "reisebus"], pattern: "bus", hue: 48, emoji: "🚌" },
    { keys: ["fahrrad", "bike", "rad"], pattern: "bike", hue: 0, emoji: "🚲" },
    { keys: ["roller", "scooter"], pattern: "scooter", hue: 0, emoji: "🛴" },
    { keys: ["raketenstart", "rocket launch"], pattern: "rocket", hue: 0, emoji: "🚀" },
    { keys: ["mondbasis", "moon base"], pattern: "moon", hue: 220, emoji: "🌙" },
    { keys: ["mars rover", "marsfahrzeug"], pattern: "rover", hue: 15, emoji: "🚙" },
    { keys: ["satellit", "satellite orbit"], pattern: "satellite", hue: 200, emoji: "🛰" },
    { keys: ["weltraumstation", "space station"], pattern: "station", hue: 220, emoji: "🛸" },
    { keys: ["nebel galaxie", "nebula space"], pattern: "nebula", hue: 280, emoji: "🌌" },
    { keys: ["kometenschweif", "comet tail"], pattern: "comet", hue: 48, emoji: "☄" },
    { keys: ["sonnenaufgang", "sunrise"], pattern: "sun", hue: 25, emoji: "🌅" },
    { keys: ["sonnenuntergang", "sunset"], pattern: "sun", hue: 15, emoji: "🌇" },
    { keys: ["wüste", "desert", "wueste"], pattern: "desert", hue: 38, emoji: "🏜" },
    { keys: ["dschungel", "jungle"], pattern: "jungle", hue: 130, emoji: "🌴" },
    { keys: ["savanne", "savanna"], pattern: "savanna", hue: 48, emoji: "🦁" },
    { keys: ["koralle", "coral reef"], pattern: "coral", hue: 350, emoji: "🪸" },
    { keys: ["qualle", "jellyfish"], pattern: "jellyfish", hue: 280, emoji: "🪼" },
    { keys: ["rochen", "stingray"], pattern: "ray", hue: 220, emoji: "🐟" },
    { keys: ["seehund", "seal"], pattern: "seal", hue: 220, emoji: "🦭" },
    { keys: ["otter", "otter tier"], pattern: "otter", hue: 30, emoji: "🦦" },
    { keys: ["biber", "beaver"], pattern: "beaver", hue: 25, emoji: "🦫" },
    { keys: ["igel", "hedgehog"], pattern: "hedgehog", hue: 30, emoji: "🦔" },
    { keys: ["maultier", "mule"], pattern: "donkey", hue: 30, emoji: "🫏" },
    { keys: ["esel", "donkey"], pattern: "donkey", hue: 30, emoji: "🫏" },
    { keys: ["ziege", "goat"], pattern: "goat", hue: 30, emoji: "🐐" },
    { keys: ["schwein", "pig", "schweinchen"], pattern: "pig", hue: 330, emoji: "🐷" },
    { keys: ["kuh", "cow", "rind"], pattern: "cow", hue: 30, emoji: "🐄" },
    { keys: ["huhn", "chicken", "henne"], pattern: "chicken", hue: 15, emoji: "🐔" },
    { keys: ["schwan", "swan"], pattern: "swan", hue: 0, emoji: "🦢" },
    { keys: ["papagei", "parrot"], pattern: "parrot", hue: 0, emoji: "🦜" },
    { keys: ["flamingo", "flamingo pink"], pattern: "flamingo", hue: 330, emoji: "🦩" },
    { keys: ["pelikan", "pelican"], pattern: "pelican", hue: 220, emoji: "🦤" },
    { keys: ["storch", "stork"], pattern: "stork", hue: 0, emoji: "🦩" },
    { keys: ["adler", "eagle"], pattern: "eagle", hue: 30, emoji: "🦅" },
    { keys: ["falke", "falcon"], pattern: "falcon", hue: 30, emoji: "🦅" },
    { keys: ["krähe", "crow", "kraehe"], pattern: "crow", hue: 270, emoji: "🐦‍⬛" },
    { keys: ["taube", "dove", "friedenstaube"], pattern: "dove", hue: 0, emoji: "🕊" },
    { keys: ["hummel", "bumblebee"], pattern: "bee", hue: 48, emoji: "🐝" },
    { keys: ["libelle", "dragonfly"], pattern: "dragonfly", hue: 200, emoji: "🪰" },
    { keys: ["grille", "cricket insect"], pattern: "cricket", hue: 120, emoji: "🦗" },
    { keys: ["schnecke", "snail"], pattern: "snail", hue: 30, emoji: "🐌" },
    { keys: ["wurm", "worm"], pattern: "worm", hue: 350, emoji: "🪱" },
    { keys: ["ameise", "ant"], pattern: "ant", hue: 0, emoji: "🐜" },
    { keys: ["skorpion", "scorpion"], pattern: "scorpion", hue: 0, emoji: "🦂" },
    { keys: ["tarantel", "tarantula"], pattern: "spider", hue: 0, emoji: "🕷" },
    { keys: ["koala", "koala baer"], pattern: "koala", hue: 120, emoji: "🐨" },
    { keys: ["känguru", "kaenguru", "kangaroo"], pattern: "kangaroo", hue: 30, emoji: "🦘" },
    { keys: ["faultier", "sloth"], pattern: "sloth", hue: 30, emoji: "🦥" },
    { keys: ["lama", "llama"], pattern: "llama", hue: 30, emoji: "🦙" },
    { keys: ["alpaka", "alpaca"], pattern: "llama", hue: 0, emoji: "🦙" },
    { keys: ["panda", "giant panda"], pattern: "panda", hue: 0, emoji: "🐼" },
    { keys: ["waschbär", "waschbaer", "raccoon"], pattern: "raccoon", hue: 270, emoji: "🦝" },
    { keys: ["murmeltier", "marmot"], pattern: "marmot", hue: 30, emoji: "🦫" },
    { keys: ["giraffe", "giraffe lang"], pattern: "giraffe", hue: 48, emoji: "🦒" },
    { keys: ["zebra", "zebra streifen"], pattern: "zebra", hue: 0, emoji: "🦓" },
    { keys: ["nilpferd", "hippo"], pattern: "hippo", hue: 220, emoji: "🦛" },
    { keys: ["nashorn", "rhino"], pattern: "rhino", hue: 30, emoji: "🦏" },
    { keys: ["kamel", "camel"], pattern: "camel", hue: 38, emoji: "🐫" },
    { keys: ["dromedar", "dromedary"], pattern: "camel", hue: 38, emoji: "🐪" },
    { keys: ["dinosaurier", "dino", "t-rex", "trex"], pattern: "dino", hue: 120, emoji: "🦖" },
    { keys: ["feuerwerk", "fireworks", "silvester"], pattern: "fireworks", hue: 0, emoji: "🎆" },
    { keys: ["windrad", "wind turbine"], pattern: "windfarm", hue: 200, emoji: "🌬" },
    { keys: ["solar panel", "solarzelle"], pattern: "solar", hue: 220, emoji: "☀" },
    { keys: ["atomkraftwerk", "nuclear power"], pattern: "nuclear", hue: 200, emoji: "☢" },
    { keys: ["fabrik", "factory"], pattern: "factory", hue: 220, emoji: "🏭" },
    { keys: ["mühle", "windmill", "muehle"], pattern: "windmill", hue: 0, emoji: "🌾" },
    { keys: ["scheune", "barn"], pattern: "barn", hue: 25, emoji: "🏚" },
    { keys: ["bauernhof", "farm"], pattern: "farm", hue: 120, emoji: "🌾" },
    { keys: ["markt", "market"], pattern: "market", hue: 0, emoji: "🏪" },
    { keys: ["supermarkt", "grocery"], pattern: "shop", hue: 0, emoji: "🛒" },
    { keys: ["einkaufswagen", "shopping cart"], pattern: "cart", hue: 220, emoji: "🛒" },
    { keys: ["apotheke", "pharmacy"], pattern: "medical", hue: 0, emoji: "💊" },
    { keys: ["krankenhaus", "hospital"], pattern: "hospital", hue: 0, emoji: "🏥" },
    { keys: ["schule", "school building"], pattern: "school", hue: 48, emoji: "🏫" },
    { keys: ["bibliothek", "library"], pattern: "library", hue: 30, emoji: "📚" },
    { keys: ["universität", "university", "uni"], pattern: "school", hue: 220, emoji: "🎓" },
    { keys: ["stadion", "stadium"], pattern: "stadium", hue: 120, emoji: "🏟" },
    { keys: ["kino", "cinema"], pattern: "theater", hue: 350, emoji: "🎬" },
    { keys: ["theater", "theatre stage"], pattern: "theater", hue: 350, emoji: "🎭" },
    { keys: ["museum", "art museum"], pattern: "museum", hue: 220, emoji: "🏛" },
    { keys: ["aquarium", "fish tank"], pattern: "aquarium", hue: 200, emoji: "🐠" },
    { keys: ["zoo", "zoo gate"], pattern: "zoo", hue: 120, emoji: "🦁" },
    { keys: ["spielplatz", "playground"], pattern: "playground", hue: 0, emoji: "🛝" },
    { keys: ["rutsche", "slide playground"], pattern: "slide", hue: 0, emoji: "🛝" },
    { keys: ["schaukel", "swing"], pattern: "swing", hue: 120, emoji: "🪢" },
    { keys: ["sandkasten", "sandbox"], pattern: "sand", hue: 48, emoji: "🏖" },
    { keys: ["strand", "beach"], pattern: "beach", hue: 48, emoji: "🏖" },
    { keys: ["sonnenschirm", "beach umbrella"], pattern: "umbrella", hue: 0, emoji: "⛱" },
    { keys: ["cocktail", "drink beach"], pattern: "cocktail", hue: 300, emoji: "🍹" },
    { keys: ["wein", "wine glass"], pattern: "wine", hue: 350, emoji: "🍷" },
    { keys: ["bier", "beer"], pattern: "beer", hue: 48, emoji: "🍺" },
    { keys: ["champagner", "champagne"], pattern: "wine", hue: 48, emoji: "🥂" },
    { keys: ["smoothie", "shake"], pattern: "cup", hue: 300, emoji: "🥤" },
    { keys: ["donut", "doughnut"], pattern: "donut", hue: 330, emoji: "🍩" },
    { keys: ["croissant", "franzoesisch gebaeck"], pattern: "croissant", hue: 38, emoji: "🥐" },
    { keys: ["brezel", "pretzel"], pattern: "pretzel", hue: 28, emoji: "🥨" },
    { keys: ["bagel", "bagel brot"], pattern: "bagel", hue: 38, emoji: "🥯" },
    { keys: ["taco", "mexikanisch"], pattern: "taco", hue: 25, emoji: "🌮" },
    { keys: ["burrito", "wrap"], pattern: "burrito", hue: 28, emoji: "🌯" },
    { keys: ["ramen", "nudelsuppe"], pattern: "ramen", hue: 25, emoji: "🍜" },
    { keys: ["curry", "indisch essen"], pattern: "curry", hue: 25, emoji: "🍛" },
    { keys: ["paella", "spanisch reis"], pattern: "paella", hue: 25, emoji: "🥘" },
    { keys: ["suppe", "soup"], pattern: "soup", hue: 28, emoji: "🍲" },
    { keys: ["salat", "salad"], pattern: "salad", hue: 120, emoji: "🥗" },
    { keys: ["avocado", "avocado toast"], pattern: "avocado", hue: 120, emoji: "🥑" },
    { keys: ["kokosnuss", "coconut"], pattern: "coconut", hue: 0, emoji: "🥥" },
    { keys: ["ananas", "pineapple"], pattern: "pineapple", hue: 48, emoji: "🍍" },
    { keys: ["mango", "mango frucht"], pattern: "mango", hue: 25, emoji: "🥭" },
    { keys: ["pfirsich", "peach"], pattern: "peach", hue: 25, emoji: "🍑" },
    { keys: ["pflaume", "plum"], pattern: "plum", hue: 280, emoji: "🍑" },
    { keys: ["wassermelone", "watermelon"], pattern: "watermelon", hue: 120, emoji: "🍉" },
    { keys: ["melone", "melon"], pattern: "melon", hue: 120, emoji: "🍈" },
    { keys: ["blaubeere", "blueberry"], pattern: "berry", hue: 240, emoji: "🫐" },
    { keys: ["himbeere", "raspberry"], pattern: "berry", hue: 350, emoji: "🍓" },
    { keys: ["beere", "berry mix"], pattern: "berry", hue: 350, emoji: "🍓" },
    { keys: ["wolke", "cloud sky", "wolken"], pattern: "cloud", hue: 220, emoji: "☁" },
    { keys: ["regenschirm", "umbrella rain"], pattern: "umbrella", hue: 280, emoji: "☂" },
    { keys: ["schirm", "parasol"], pattern: "umbrella", hue: 0, emoji: "⛱" },
    { keys: ["blatt", "leaf herbst"], pattern: "leaf", hue: 30, emoji: "🍂" },
    { keys: ["tulpe", "tulip"], pattern: "flower", hue: 350, emoji: "🌷" },
    { keys: ["sonnenblume", "sunflower"], pattern: "sunflower", hue: 48, emoji: "🌻" },
    { keys: ["lotus", "lotusblume"], pattern: "lotus", hue: 320, emoji: "🪷" },
    { keys: ["kaktusbluete", "cactus flower"], pattern: "cactus", hue: 330, emoji: "🌵" },
    { keys: ["ritter", "knight armor"], pattern: "knight", hue: 220, emoji: "🛡" },
    { keys: ["lanze", "lance spear"], pattern: "spear", hue: 220, emoji: "🔱" },
    { keys: ["schild", "shield medieval"], pattern: "shield", hue: 220, emoji: "🛡" },
    { keys: ["vikingship", "wikingerschiff", "langschiff"], pattern: "ship", hue: 30, emoji: "⛵" },
    { keys: ["rune", "runenstein"], pattern: "rune", hue: 220, emoji: "ᚠ" },
    { keys: ["thor hammer", "mjolnir"], pattern: "hammer", hue: 220, emoji: "🔨" },
    { keys: ["fee staub", "fairy dust"], pattern: "fairy", hue: 300, emoji: "✨" },
    { keys: ["magier", "wizard magic"], pattern: "wizard", hue: 270, emoji: "🧙" },
    { keys: ["hexe", "witch"], pattern: "witch", hue: 280, emoji: "🧙‍♀" },
    { keys: ["vampir", "vampire"], pattern: "vampire", hue: 0, emoji: "🧛" },
    { keys: ["werwolf", "werewolf"], pattern: "wolf", hue: 30, emoji: "🐺" },
    { keys: ["zombie", "untoter"], pattern: "zombie", hue: 120, emoji: "🧟" },
    { keys: ["mumie", "mummy"], pattern: "mummy", hue: 38, emoji: "🧟" },
    { keys: ["pharao", "pharaoh"], pattern: "pharaoh", hue: 48, emoji: "👑" },
    { keys: ["pyramide", "pyramid"], pattern: "pyramid", hue: 38, emoji: "🔺" },
    { keys: ["sphinx", "sphinx aegypten"], pattern: "sphinx", hue: 38, emoji: "🗿" },
    { keys: ["sarcophag", "sarkophag"], pattern: "tomb", hue: 38, emoji: "⚰" },
    { keys: ["obelisk", "obelisk aegypten"], pattern: "obelisk", hue: 30, emoji: "🗼" },
    { keys: ["great wall", "chinesische mauer"], pattern: "wall", hue: 30, emoji: "🧱" },
    { keys: ["torii", "japan tor"], pattern: "torii", hue: 0, emoji: "⛩" },
    { keys: ["pagode", "pagoda"], pattern: "pagoda", hue: 0, emoji: "🏯" },
    { keys: ["samurai schwert", "katana"], pattern: "katana", hue: 220, emoji: "⚔" },
    { keys: ["origami kranich", "paper crane origami"], pattern: "crane", hue: 0, emoji: "🕊" },
    { keys: ["bonsai", "bonsai baum"], pattern: "bonsai", hue: 130, emoji: "🌳" },
    { keys: ["koi", "koi fisch"], pattern: "fish", hue: 0, emoji: "🐟" },
    { keys: ["panda rot", "red panda"], pattern: "panda", hue: 0, emoji: "🐼" },
    { keys: ["kapuzineraffe", "monkey"], pattern: "monkey", hue: 30, emoji: "🐒" },
    { keys: ["gorilla", "gorilla affe"], pattern: "gorilla", hue: 30, emoji: "🦍" },
    { keys: ["schimpanse", "chimpanzee"], pattern: "monkey", hue: 30, emoji: "🐵" },
    { keys: ["orang utan", "orangutan"], pattern: "monkey", hue: 25, emoji: "🦧" },
    { keys: ["lemur", "katta"], pattern: "lemur", hue: 280, emoji: "🐒" },
    { keys: ["streifenhörnchen", "squirrel"], pattern: "squirrel", hue: 30, emoji: "🐿" },
    { keys: ["maus tier", "mouse animal"], pattern: "mouse", hue: 220, emoji: "🐭" },
    { keys: ["ratte", "rat"], pattern: "mouse", hue: 220, emoji: "🐀" },
    { keys: ["hamster", "hamster tier"], pattern: "hamster", hue: 30, emoji: "🐹" },
    { keys: ["kaninchen", "rabbit bunny"], pattern: "rabbit", hue: 0, emoji: "🐰" },
    { keys: ["meerschweinchen", "guinea pig"], pattern: "guineapig", hue: 30, emoji: "🐹" },
    { keys: ["frettchen", "ferret"], pattern: "ferret", hue: 30, emoji: "🦡" },
    { keys: ["chinchilla", "chinchilla tier"], pattern: "chinchilla", hue: 0, emoji: "🐭" },
    { keys: ["goldhamster", "golden hamster"], pattern: "hamster", hue: 30, emoji: "🐹" },
    { keys: ["wellensittich", "budgie"], pattern: "bird", hue: 120, emoji: "🐦" },
    { keys: ["kanarienvogel", "canary"], pattern: "bird", hue: 48, emoji: "🐤" },
    { keys: ["pfau", "peacock"], pattern: "peacock", hue: 280, emoji: "🦚" },
    { keys: ["strauß", "ostrich", "straus"], pattern: "ostrich", hue: 30, emoji: "🦤" },
    { keys: ["emu", "emu bird"], pattern: "ostrich", hue: 30, emoji: "🦤" },
    { keys: ["krokodil", "crocodile"], pattern: "croc", hue: 130, emoji: "🐊" },
    { keys: ["alligator", "alligator usa"], pattern: "croc", hue: 130, emoji: "🐊" },
    { keys: ["leguan", "iguana"], pattern: "lizard", hue: 130, emoji: "🦎" },
    { keys: ["chamäleon", "chameleon", "chamaeleon"], pattern: "chameleon", hue: 130, emoji: "🦎" },
    { keys: ["gecko", "gecko eidechse"], pattern: "lizard", hue: 120, emoji: "🦎" },
    { keys: ["schlange", "snake"], pattern: "snake", hue: 130, emoji: "🐍" },
    { keys: ["python schlange", "python snake"], pattern: "snake", hue: 30, emoji: "🐍" },
    { keys: ["kobra", "cobra"], pattern: "snake", hue: 0, emoji: "🐍" },
    { keys: ["frosch", "frog"], pattern: "frog", hue: 130, emoji: "🐸" },
    { keys: ["kröte", "toad", "kroete"], pattern: "frog", hue: 130, emoji: "🐸" },
    { keys: ["salamander", "salamander amphib"], pattern: "salamander", hue: 0, emoji: "🦎" },
    { keys: ["axolotl", "axolotl tier"], pattern: "salamander", hue: 280, emoji: "🦎" },
    { keys: ["hai", "shark"], pattern: "shark", hue: 220, emoji: "🦈" },
    { keys: ["hammerhai", "hammerhead"], pattern: "shark", hue: 220, emoji: "🦈" },
    { keys: ["manta", "mantarochen"], pattern: "ray", hue: 220, emoji: "🐟" },
    { keys: ["piranha", "piranha fisch"], pattern: "fish", hue: 0, emoji: "🐟" },
    { keys: ["karpfen", "carp"], pattern: "fish", hue: 30, emoji: "🐟" },
    { keys: ["forelle", "trout"], pattern: "fish", hue: 30, emoji: "🐟" },
    { keys: ["lachs", "salmon"], pattern: "fish", hue: 0, emoji: "🐟" },
    { keys: ["auster", "oyster"], pattern: "shell", hue: 220, emoji: "🦪" },
    { keys: ["garnele", "shrimp"], pattern: "shrimp", hue: 0, emoji: "🦐" },
    { keys: ["saxophon", "saxophone"], pattern: "sax", hue: 48, emoji: "🎷" },
    { keys: ["akkordeon", "accordion"], pattern: "accordion", hue: 0, emoji: "🪗" },
    { keys: ["harfe", "harp"], pattern: "harp", hue: 300, emoji: "🎵" },
    { keys: ["flöte", "flute", "floete"], pattern: "flute", hue: 220, emoji: "🎵" },
    { keys: ["posaune", "trombone"], pattern: "trombone", hue: 48, emoji: "🎺" },
    { keys: ["oboe", "oboe instrument"], pattern: "oboe", hue: 30, emoji: "🎵" },
    { keys: ["cello", "cello instrument"], pattern: "cello", hue: 30, emoji: "🎻" },
    { keys: ["kontrabass", "double bass"], pattern: "bass", hue: 30, emoji: "🎻" },
    { keys: ["dj pult", "dj mixer"], pattern: "dj", hue: 280, emoji: "🎧" },
    { keys: ["lautsprecher", "speaker box"], pattern: "speaker", hue: 220, emoji: "🔊" },
    { keys: ["kopfhörer", "headphones", "kopfhoerer"], pattern: "headphones", hue: 220, emoji: "🎧" },
    { keys: ["eiffelturm", "eiffel tower"], pattern: "tower", hue: 220, emoji: "🗼" },
    { keys: ["leaning tower", "schiefer turm"], pattern: "tower", hue: 30, emoji: "🗼" },
    { keys: ["golden gate", "golden gate bridge"], pattern: "bridge", hue: 0, emoji: "🌉" },
    { keys: ["brücke", "bridge", "bruecke"], pattern: "bridge", hue: 220, emoji: "🌉" },
    { keys: ["tunnel", "road tunnel"], pattern: "tunnel", hue: 220, emoji: "🚇" },
    { keys: ["denkmal liberty", "freiheitsstatue nah"], pattern: "statue", hue: 200, emoji: "🗽" },
    { keys: ["kirche", "church"], pattern: "church", hue: 220, emoji: "⛪" },
    { keys: ["kathedrale", "cathedral"], pattern: "church", hue: 270, emoji: "⛪" },
    { keys: ["kapelle", "chapel"], pattern: "church", hue: 0, emoji: "⛪" },
    { keys: ["windmuehle", "windmill holland"], pattern: "windmill", hue: 0, emoji: "🌾" },
    { keys: ["leuchtturm sturm", "lighthouse storm"], pattern: "lighthouse", hue: 200, emoji: "🗼" },
    { keys: ["leuchtturm", "lighthouse classic"], pattern: "lighthouse", hue: 200, emoji: "🗼" },
    { keys: ["canyon", "grand canyon style"], pattern: "canyon", hue: 25, emoji: "🏜" },
    { keys: ["geyser old faithful", "geysir yellowstone"], pattern: "geyser", hue: 200, emoji: "♨" },
    { keys: ["bison", "buffalo usa"], pattern: "buffalo", hue: 30, emoji: "🦬" },
    { keys: ["elch nordamerika", "elk"], pattern: "moose", hue: 30, emoji: "🫎" },
    { keys: ["wisent", "european bison"], pattern: "buffalo", hue: 30, emoji: "🦬" },
    { keys: ["yak", "yak tier"], pattern: "buffalo", hue: 0, emoji: "🐂" },
    { keys: ["antilope", "antelope"], pattern: "antelope", hue: 30, emoji: "🦌" },
    { keys: ["gazelle", "gazelle afrika"], pattern: "antelope", hue: 30, emoji: "🦌" },
    { keys: ["gnu", "wildebeest"], pattern: "antelope", hue: 30, emoji: "🦬" },
    { keys: ["hyäne", "hyena", "hyaene"], pattern: "hyena", hue: 30, emoji: "🐺" },
    { keys: ["wombat", "wombat tier"], pattern: "wombat", hue: 30, emoji: "🐻" },
    { keys: ["tasmanischer teufel", "tasmanian devil"], pattern: "devil", hue: 0, emoji: "🦡" },
    { keys: ["schnabeltier", "platypus"], pattern: "platypus", hue: 220, emoji: "🦆" },
    { keys: ["emu australien", "emu australia"], pattern: "ostrich", hue: 30, emoji: "🦤" },
    { keys: ["kiwi vogel", "kiwi bird"], pattern: "kiwi", hue: 30, emoji: "🥝" },
    { keys: ["tukan", "toucan"], pattern: "toucan", hue: 0, emoji: "🦜" },
    { keys: ["kolibri", "hummingbird"], pattern: "hummingbird", hue: 300, emoji: "🐦" },
    { keys: ["eisvogel", "kingfisher"], pattern: "kingfisher", hue: 200, emoji: "🐦" },
    { keys: ["specht", "woodpecker"], pattern: "woodpecker", hue: 0, emoji: "🐦" },
    { keys: ["uhu", "eagle owl"], pattern: "owl", hue: 30, emoji: "🦉" },
    { keys: ["schneeeule", "snowy owl"], pattern: "owl", hue: 200, emoji: "🦉" },
    { keys: ["fledermaus", "bat animal"], pattern: "bat", hue: 270, emoji: "🦇" },
    { keys: ["flagge deutschland", "german flag"], pattern: "flag", hue: 0, emoji: "🇩🇪" },
    { keys: ["flagge", "flag banner"], pattern: "flag", hue: 0, emoji: "🏳" },
    { keys: ["wimpel", "pennant"], pattern: "flag", hue: 0, emoji: "🚩" },
    { keys: ["feuerwerk rakete", "firework rocket"], pattern: "fireworks", hue: 0, emoji: "🎆" },
    { keys: ["wunderkerze", "sparkler"], pattern: "sparkler", hue: 48, emoji: "✨" },
    { keys: ["laterne", "lantern"], pattern: "lantern", hue: 48, emoji: "🏮" },
    { keys: ["papierlaterne", "paper lantern"], pattern: "lantern", hue: 0, emoji: "🏮" },
    { keys: ["kerze", "candle"], pattern: "candle", hue: 38, emoji: "🕯" },
    { keys: ["kuchenkerze", "birthday candle"], pattern: "candle", hue: 0, emoji: "🕯" },
    { keys: ["schneeflocke gross", "snowflake big"], pattern: "snow", hue: 200, emoji: "❄" },
    { keys: ["eiskristall", "ice crystal"], pattern: "ice", hue: 200, emoji: "🧊" },
    { keys: ["hagel", "hail"], pattern: "hail", hue: 200, emoji: "🌨" },
    { keys: ["gewitter", "thunderstorm"], pattern: "storm", hue: 260, emoji: "⛈" },
    { keys: ["orkan", "hurricane symbol"], pattern: "hurricane", hue: 200, emoji: "🌀" },
    { keys: ["erdbeben", "earthquake"], pattern: "quake", hue: 30, emoji: "🌋" },
    { keys: ["flagge rennen", "racing flag"], pattern: "flag", hue: 0, emoji: "🏁" },
    { keys: ["rennwagen", "race car f1"], pattern: "car", hue: 0, emoji: "🏎" },
    { keys: ["formel1 auto", "formula one"], pattern: "car", hue: 0, emoji: "🏎" },
    { keys: ["rennrad", "racing bike"], pattern: "bike", hue: 0, emoji: "🚴" },
    { keys: ["trikot", "jersey sport"], pattern: "shirt", hue: 0, emoji: "👕" },
    { keys: ["schuh", "sneaker shoe"], pattern: "shoe", hue: 0, emoji: "👟" },
    { keys: ["stollen", "cleats"], pattern: "shoe", hue: 0, emoji: "👟" },
    { keys: ["helm sport", "sport helmet"], pattern: "helmet", hue: 0, emoji: "⛑" },
    { keys: ["bogen pfeil", "bow arrow"], pattern: "bow", hue: 30, emoji: "🏹" },
    { keys: ["pfeil", "arrow"], pattern: "arrow", hue: 0, emoji: "🏹" },
    { keys: ["zielscheibe", "target archery"], pattern: "target", hue: 0, emoji: "🎯" },
    { keys: ["dart", "dartpfeil"], pattern: "dart", hue: 0, emoji: "🎯" },
    { keys: ["bowling", "kegeln"], pattern: "bowling", hue: 0, emoji: "🎳" },
    { keys: ["kegel", "bowling pin"], pattern: "bowling", hue: 0, emoji: "🎳" },
    { keys: ["billard", "billiards"], pattern: "billiard", hue: 0, emoji: "🎱" },
    { keys: ["schachfigur", "chess piece"], pattern: "checker", hue: 0, emoji: "♟" },
    { keys: ["würfel", "dice", "wuerfel"], pattern: "dice", hue: 0, emoji: "🎲" },
    { keys: ["spielkarte", "playing card ace"], pattern: "card", hue: 0, emoji: "🃏" },
    { keys: ["joker", "joker card"], pattern: "joker", hue: 280, emoji: "🃏" },
    { keys: ["mahjong", "mahjong stein"], pattern: "mahjong", hue: 0, emoji: "🀄" },
    { keys: ["tarot", "tarot karte"], pattern: "card", hue: 280, emoji: "🃏" },
    { keys: ["barcode", "bar code"], pattern: "barcode", hue: 0, emoji: "📊" },
    { keys: ["qr-code", "qr code scan"], pattern: "qr", hue: 0, emoji: "📱" },
    { keys: ["nfc tag", "nfc chip"], pattern: "nfc", hue: 220, emoji: "📶" },
    { keys: ["smartwatch", "uhr smart"], pattern: "watch", hue: 220, emoji: "⌚" },
    { keys: ["fitness tracker", "fitness band"], pattern: "watch", hue: 0, emoji: "⌚" },
    { keys: ["router", "wlan router"], pattern: "router", hue: 220, emoji: "📡" },
    { keys: ["festplatte", "hard drive"], pattern: "hdd", hue: 220, emoji: "💾" },
    { keys: ["ssd", "solid state"], pattern: "ssd", hue: 220, emoji: "💾" },
    { keys: ["ram stick", "arbeitsspeicher"], pattern: "ram", hue: 220, emoji: "💾" },
    { keys: ["grafikkarte", "graphics card"], pattern: "gpu", hue: 280, emoji: "🖥" },
    { keys: ["mainboard", "motherboard"], pattern: "board", hue: 220, emoji: "💾" },
    { keys: ["webcam", "web camera"], pattern: "webcam", hue: 220, emoji: "📷" },
    { keys: ["mikrofon podcast", "podcast mic"], pattern: "mic", hue: 280, emoji: "🎤" },
    { keys: ["ringlicht", "ring light"], pattern: "light", hue: 0, emoji: "💡" },
    { keys: ["gluehbirne", "light bulb", "gluehbirne"], pattern: "bulb", hue: 48, emoji: "💡" },
    { keys: ["neon sign", "neonschild"], pattern: "neon", hue: 280, emoji: "💠" },
    { keys: ["laserschwert", "lightsaber"], pattern: "sword", hue: 180, emoji: "⚔" },
    { keys: ["raumschiff", "spaceship"], pattern: "spaceship", hue: 220, emoji: "🛸" },
    { keys: ["ufo fliegend", "flying saucer"], pattern: "ufo", hue: 120, emoji: "🛸" },
    { keys: ["mars", "planet mars rot"], pattern: "mars", hue: 8, emoji: "🪐" },
    { keys: ["saturn", "planet saturn ringe"], pattern: "saturn", hue: 38, emoji: "🪐" },
    { keys: ["jupiter", "planet jupiter"], pattern: "jupiter", hue: 25, emoji: "🪐" },
    { keys: ["neptun", "planet neptune"], pattern: "neptune", hue: 220, emoji: "🪐" },
    { keys: ["venus", "planet venus"], pattern: "venus", hue: 38, emoji: "🪐" },
    { keys: ["merkur", "planet mercury"], pattern: "mercury", hue: 30, emoji: "🪐" },
    { keys: ["pluto", "zwergplanet pluto"], pattern: "pluto", hue: 220, emoji: "🪐" },
    { keys: ["asteroidengürtel", "asteroid belt"], pattern: "asteroid", hue: 30, emoji: "☄" },
    { keys: ["milchstrassen", "milky way galaxy"], pattern: "galaxy", hue: 270, emoji: "🌌" },
    { keys: ["orion", "orion constellation"], pattern: "constellation", hue: 220, emoji: "✨" },
    { keys: ["sternschnuppe", "shooting star wish"], pattern: "shootingstar", hue: 48, emoji: "🌠" },
    { keys: ["horizont", "horizon sunset"], pattern: "horizon", hue: 25, emoji: "🌅" },
    { keys: ["feldweg", "country path"], pattern: "path", hue: 30, emoji: "🛤" },
    { keys: ["eisenbahn", "railway tracks"], pattern: "rail", hue: 220, emoji: "🛤" },
    { keys: ["bahnhof", "train station"], pattern: "station", hue: 220, emoji: "🚉" },
    { keys: ["ice zug", "ice train"], pattern: "train", hue: 0, emoji: "🚄" },
    { keys: ["dampflok", "steam locomotive"], pattern: "train", hue: 0, emoji: "🚂" },
    { keys: ["segelschiff", "sailing ship"], pattern: "sailboat", hue: 0, emoji: "⛵" },
    { keys: ["kreuzfahrtschiff", "cruise ship"], pattern: "ship", hue: 0, emoji: "🛳" },
    { keys: ["u-boot", "submarine", "u boot"], pattern: "submarine", hue: 220, emoji: "🚢" },
    { keys: ["flugzeugträger", "aircraft carrier"], pattern: "ship", hue: 220, emoji: "🛳" },
    { keys: ["heissluftballon", "hot air balloon"], pattern: "balloon", hue: 0, emoji: "🎈" },
    { keys: ["fallschirm", "parachute"], pattern: "parachute", hue: 0, emoji: "🪂" },
    { keys: ["gleitschirm", "paraglider"], pattern: "parachute", hue: 200, emoji: "🪂" },
    { keys: ["pikachu", "pokemon pikachu"], pattern: "pikachu", hue: 48, emoji: "⚡" },
    { keys: ["pokemon", "pocket monster"], pattern: "pokemon", hue: 48, emoji: "👾" },
    { keys: ["pokeball", "poke ball"], pattern: "ball", hue: 0, emoji: "🔴" },
    { keys: ["naruto", "ninja headband"], pattern: "ninja", hue: 0, emoji: "🥷" },
    { keys: ["samurai", "samurai warrior"], pattern: "samurai", hue: 0, emoji: "⚔" },
    { keys: ["geisha", "geisha japan"], pattern: "geisha", hue: 330, emoji: "👘" },
    { keys: ["kimono", "kimono dress"], pattern: "kimono", hue: 330, emoji: "👘" },
    { keys: ["sushi roll", "maki sushi"], pattern: "sushi", hue: 0, emoji: "🍣" },
    { keys: ["tempura", "tempura food"], pattern: "food", hue: 38, emoji: "🍤" },
    { keys: ["matcha", "matcha tea"], pattern: "cup", hue: 130, emoji: "🍵" },
    { keys: ["kirschbluete", "sakura", "cherry blossom"], pattern: "sakura", hue: 330, emoji: "🌸" },
    { keys: ["fuji", "mount fuji"], pattern: "mountain", hue: 0, emoji: "🗻" },
    { keys: ["shuriken", "ninja star"], pattern: "shuriken", hue: 220, emoji: "✴" },
    { keys: ["katana schwert", "katana sword"], pattern: "katana", hue: 220, emoji: "⚔" },
    { keys: ["mecha", "giant robot"], pattern: "mecha", hue: 220, emoji: "🤖" },
    { keys: ["totoro", "forest spirit"], pattern: "spirit", hue: 130, emoji: "🌲" },
    { keys: ["game controller ps", "playstation"], pattern: "gamepad", hue: 220, emoji: "🎮" },
    { keys: ["xbox", "xbox controller"], pattern: "gamepad", hue: 120, emoji: "🎮" },
    { keys: ["nintendo switch", "switch console"], pattern: "gamepad", hue: 0, emoji: "🎮" },
    { keys: ["minecraft block", "minecraft grass"], pattern: "brick", hue: 130, emoji: "🧱" },
    { keys: ["creeper", "minecraft creeper"], pattern: "creeper", hue: 130, emoji: "👾" },
    { keys: ["roblox", "roblox avatar"], pattern: "avatar", hue: 0, emoji: "🎮" },
    { keys: ["fortnite", "battle royale"], pattern: "gamepad", hue: 280, emoji: "🎮" },
    { keys: ["among us", "crewmate"], pattern: "crewmate", hue: 0, emoji: "👾" },
    { keys: ["star wars", "lightsaber star"], pattern: "sword", hue: 180, emoji: "⚔" },
    { keys: ["death star", "todesstern"], pattern: "planet", hue: 220, emoji: "🌑" },
    { keys: ["yoda", "jedi"], pattern: "jedi", hue: 130, emoji: "🧙" },
    { keys: ["darth vader", "sith"], pattern: "vader", hue: 270, emoji: "🖤" },
    { keys: ["millennium falcon", "falcon ship"], pattern: "spaceship", hue: 220, emoji: "🚀" },
    { keys: ["iron man", "ironman"], pattern: "hero", hue: 0, emoji: "🦸" },
    { keys: ["captain america", "captain shield"], pattern: "shield", hue: 0, emoji: "🛡" },
    { keys: ["hulk", "green hero"], pattern: "hero", hue: 120, emoji: "🦸" },
    { keys: ["thor hammer", "mjolnir thor"], pattern: "hammer", hue: 220, emoji: "🔨" },
    { keys: ["wonder woman", "wonderwoman"], pattern: "hero", hue: 0, emoji: "🦸" },
    { keys: ["joker villain", "joker card villain"], pattern: "joker", hue: 280, emoji: "🃏" },
    { keys: ["harley quinn", "harley"], pattern: "clown", hue: 0, emoji: "🤡" },
    { keys: ["gandalf", "wizard staff"], pattern: "wizard", hue: 220, emoji: "🧙" },
    { keys: ["hobbit", "hobbit hole"], pattern: "house", hue: 30, emoji: "🏠" },
    { keys: ["ring power", "golden ring"], pattern: "ring", hue: 48, emoji: "💍" },
    { keys: ["phoenix bird", "feuerphoenix"], pattern: "phoenix", hue: 15, emoji: "🔥" },
    { keys: ["pegasus", "flügelpferd", "fluegelpferd"], pattern: "pegasus", hue: 0, emoji: "🦄" },
    { keys: ["greif", "griffin"], pattern: "griffin", hue: 48, emoji: "🦅" },
    { keys: ["hydra", "mehrkopf schlange"], pattern: "hydra", hue: 130, emoji: "🐍" },
    { keys: ["kraken", "sea monster"], pattern: "kraken", hue: 280, emoji: "🐙" },
    { keys: ["yeti", "bigfoot"], pattern: "yeti", hue: 0, emoji: "🦍" },
    { keys: ["bigfoot", "sasquatch"], pattern: "yeti", hue: 30, emoji: "🦍" },
    { keys: ["lochness", "nessie"], pattern: "nessie", hue: 220, emoji: "🐲" },
    { keys: ["chupacabra", "chupakabra"], pattern: "monster", hue: 0, emoji: "👹" },
    { keys: ["kappa", "japan kappa"], pattern: "kappa", hue: 130, emoji: "🐢" },
    { keys: ["oni", "japan demon"], pattern: "oni", hue: 0, emoji: "👹" },
    { keys: ["kitsune", "fox spirit"], pattern: "kitsune", hue: 15, emoji: "🦊" },
    { keys: ["tanuki", "raccoon dog"], pattern: "tanuki", hue: 30, emoji: "🦝" },
    { keys: ["maneki neko", "lucky cat"], pattern: "luckycat", hue: 0, emoji: "🐱" },
    { keys: ["bonsai tree", "bonsai klein"], pattern: "bonsai", hue: 130, emoji: "🌳" },
    { keys: ["zen garten", "zen garden"], pattern: "zen", hue: 30, emoji: "🪨" },
    { keys: ["steinkreis", "stone circle"], pattern: "stones", hue: 220, emoji: "🪨" },
    { keys: ["machu picchu", "inka stadt"], pattern: "machu", hue: 30, emoji: "⛰" },
    { keys: ["taj mahal", "tajmahal"], pattern: "taj", hue: 0, emoji: "🕌" },
    { keys: ["stonehenge", "stone henge"], pattern: "stonehenge", hue: 220, emoji: "🪨" },
    { keys: ["petra jordan", "petra fels"], pattern: "petra", hue: 38, emoji: "🏛" },
    { keys: ["akropolis", "acropolis"], pattern: "acropolis", hue: 30, emoji: "🏛" },
    { keys: ["notre dame", "notredame"], pattern: "church", hue: 220, emoji: "⛪" },
    { keys: ["sagrada familia", "gaudi kirche"], pattern: "church", hue: 0, emoji: "⛪" },
    { keys: ["neuschwanstein", "maerchenschloss bayern"], pattern: "castle", hue: 280, emoji: "🏰" },
    { keys: ["brandenburger tor", "brandenburg gate"], pattern: "gate", hue: 220, emoji: "🏛" },
    { keys: ["reichstag", "reichstag berlin"], pattern: "dome", hue: 220, emoji: "🏛" },
    { keys: ["ferris wheel london", "london eye"], pattern: "ferris", hue: 220, emoji: "🎡" },
    { keys: ["tower bridge", "towerbridge"], pattern: "bridge", hue: 220, emoji: "🌉" },
    { keys: ["hollywood", "hollywood sign"], pattern: "sign", hue: 0, emoji: "🎬" },
    { keys: ["oscar statue", "oscar award"], pattern: "oscar", hue: 48, emoji: "🏆" },
    { keys: ["clapperboard", "film klappe"], pattern: "clapper", hue: 0, emoji: "🎬" },
    { keys: ["popcorn film", "popcorn cinema"], pattern: "popcorn", hue: 48, emoji: "🍿" },
    { keys: ["3d brille", "3d glasses"], pattern: "glasses", hue: 0, emoji: "🕶" },
    { keys: ["filmrolle", "film reel"], pattern: "reel", hue: 0, emoji: "🎞" },
    { keys: ["spotlight", "scheinwerfer"], pattern: "spotlight", hue: 48, emoji: "🔦" },
    { keys: ["mikrofon karaoke", "karaoke mic"], pattern: "mic", hue: 280, emoji: "🎤" },
    { keys: ["disco ball", "disco kugel"], pattern: "disco", hue: 280, emoji: "🪩" },
    { keys: ["party hat", "partyhut"], pattern: "partyhat", hue: 0, emoji: "🎉" },
    { keys: ["luftschlangen", "streamers party"], pattern: "streamer", hue: 0, emoji: "🎊" },
    { keys: ["geburtstagskuchen", "birthday cake big"], pattern: "cake", hue: 330, emoji: "🎂" },
    { keys: ["valentinsherz", "valentine heart"], pattern: "heart", hue: 340, emoji: "💝" },
    { keys: ["ostern hase", "easter bunny"], pattern: "rabbit", hue: 330, emoji: "🐰" },
    { keys: ["weihnachtsmann", "santa claus"], pattern: "santa", hue: 0, emoji: "🎅" },
    { keys: ["rentier santa", "reindeer santa"], pattern: "reindeer", hue: 30, emoji: "🦌" },
    { keys: ["schlitten", "sleigh"], pattern: "sleigh", hue: 0, emoji: "🛷" },
    { keys: ["adventskranz", "advent wreath"], pattern: "wreath", hue: 130, emoji: "🎄" },
    { keys: ["stern baum", "christmas star"], pattern: "star", hue: 48, emoji: "⭐" },
    { keys: ["stiefel", "boot shoe"], pattern: "boot", hue: 30, emoji: "👢" },
    { keys: ["handschuh", "glove"], pattern: "glove", hue: 0, emoji: "🧤" },
    { keys: ["schal", "scarf"], pattern: "scarf", hue: 0, emoji: "🧣" },
    { keys: ["muetze", "beanie hat", "muetze winter"], pattern: "beanie", hue: 220, emoji: "🧢" },
    { keys: ["regenmantel", "raincoat"], pattern: "coat", hue: 220, emoji: "🧥" },
    { keys: ["bikini", "swimsuit"], pattern: "swimwear", hue: 330, emoji: "👙" },
    { keys: ["taucherbrille", "diving mask"], pattern: "mask", hue: 200, emoji: "🤿" },
    { keys: ["schnorchel", "snorkel"], pattern: "snorkel", hue: 200, emoji: "🤿" },
    { keys: ["wetsuit", "neopren"], pattern: "wetsuit", hue: 220, emoji: "🤿" },
    { keys: ["surfboard lang", "longboard surf"], pattern: "surf", hue: 0, emoji: "🏄" },
    { keys: ["wakeboard", "wake board"], pattern: "surf", hue: 200, emoji: "🏄" },
    { keys: ["kajak paddel", "kayak paddle"], pattern: "canoe", hue: 0, emoji: "🛶" },
    { keys: ["paddel", "paddle"], pattern: "paddle", hue: 30, emoji: "🛶" },
    { keys: ["kanu sport", "canoe sport"], pattern: "canoe", hue: 25, emoji: "🛶" },
    { keys: ["eishockey", "hockey puck"], pattern: "hockey", hue: 200, emoji: "🏒" },
    { keys: ["curling", "curling stone"], pattern: "curling", hue: 220, emoji: "🥌" },
    { keys: ["bob", "bobsleigh"], pattern: "bobsled", hue: 0, emoji: "🛷" },
    { keys: ["rodeln", "sled"], pattern: "sled", hue: 0, emoji: "🛷" },
    { keys: ["eislauf", "ice skate"], pattern: "skate", hue: 200, emoji: "⛸" },
    { keys: ["schlittschuh", "figure skate"], pattern: "skate", hue: 200, emoji: "⛸" },
    { keys: ["snowboarder", "snowboard jump"], pattern: "ski", hue: 200, emoji: "🏂" },
    { keys: ["biathlon", "ski shoot"], pattern: "ski", hue: 0, emoji: "⛷" },
    { keys: ["langlauf", "cross country ski"], pattern: "ski", hue: 0, emoji: "⛷" },
    { keys: ["skispringen", "ski jump"], pattern: "skijump", hue: 0, emoji: "⛷" },
    { keys: ["klettern wand", "rock climbing"], pattern: "climb", hue: 220, emoji: "🧗" },
    { keys: ["bouldern", "boulder climb"], pattern: "climb", hue: 30, emoji: "🧗" },
    { keys: ["seil", "rope"], pattern: "rope", hue: 30, emoji: "🪢" },
    { keys: ["karabiner", "carabiner"], pattern: "carabiner", hue: 220, emoji: "🪢" },
    { keys: ["kompass hiking", "wanderkompass"], pattern: "compass", hue: 30, emoji: "🧭" },
    { keys: ["wanderstock", "hiking pole"], pattern: "pole", hue: 30, emoji: "🥾" },
    { keys: ["wanderschuhe", "hiking boots"], pattern: "boot", hue: 30, emoji: "🥾" },
    { keys: ["outdoor rucksack", "hiking backpack"], pattern: "backpack", hue: 220, emoji: "🎒" },
    { keys: ["isomatte", "sleeping pad"], pattern: "pad", hue: 120, emoji: "⛺" },
    { keys: ["schlafsack", "sleeping bag"], pattern: "sleepingbag", hue: 220, emoji: "⛺" },
    { keys: ["kopflampe", "headlamp"], pattern: "headlamp", hue: 48, emoji: "🔦" },
    { keys: ["taschenlampe", "flashlight"], pattern: "flashlight", hue: 48, emoji: "🔦" },
    { keys: ["feuerzeug", "lighter"], pattern: "lighter", hue: 0, emoji: "🔥" },
    { keys: ["streichholz", "match"], pattern: "match", hue: 0, emoji: "🔥" },
    { keys: ["grill", "bbq grill"], pattern: "grill", hue: 0, emoji: "🔥" },
    { keys: ["bbq", "barbecue"], pattern: "grill", hue: 0, emoji: "🍖" },
    { keys: ["steak", "beef steak"], pattern: "steak", hue: 0, emoji: "🥩" },
    { keys: ["wurst", "sausage", "bratwurst"], pattern: "sausage", hue: 0, emoji: "🌭" },
    { keys: ["schinken", "ham"], pattern: "ham", hue: 0, emoji: "🥓" },
    { keys: ["speck", "bacon"], pattern: "bacon", hue: 0, emoji: "🥓" },
    { keys: ["ei", "egg breakfast"], pattern: "egg", hue: 48, emoji: "🍳" },
    { keys: ["spiegelei", "fried egg"], pattern: "egg", hue: 48, emoji: "🍳" },
    { keys: ["ruehrei", "scrambled egg"], pattern: "egg", hue: 48, emoji: "🍳" },
    { keys: ["kaese", "cheese", "käse"], pattern: "cheese", hue: 48, emoji: "🧀" },
    { keys: ["butter", "butter block"], pattern: "butter", hue: 48, emoji: "🧈" },
    { keys: ["milch", "milk carton"], pattern: "milk", hue: 0, emoji: "🥛" },
    { keys: ["joghurt", "yogurt"], pattern: "yogurt", hue: 0, emoji: "🥛" },
    { keys: ["muesli", "cereal bowl"], pattern: "cereal", hue: 38, emoji: "🥣" },
    { keys: ["haferflocken", "oatmeal"], pattern: "cereal", hue: 38, emoji: "🥣" },
    { keys: ["honigglas", "honey jar"], pattern: "honey", hue: 48, emoji: "🍯" },
    { keys: ["marmelade", "jam jar"], pattern: "jam", hue: 0, emoji: "🫙" },
    { keys: ["erdnuess", "peanut", "erdnuss"], pattern: "peanut", hue: 30, emoji: "🥜" },
    { keys: ["cashew", "cashew nut"], pattern: "nut", hue: 30, emoji: "🥜" },
    { keys: ["mandel", "almond"], pattern: "almond", hue: 30, emoji: "🥜" },
    { keys: ["walnuss", "walnut"], pattern: "walnut", hue: 30, emoji: "🥜" },
    { keys: ["pistazie", "pistachio"], pattern: "pistachio", hue: 130, emoji: "🥜" },
    { keys: ["schokolade", "chocolate bar"], pattern: "chocolate", hue: 30, emoji: "🍫" },
    { keys: ["praline", "pralinen"], pattern: "chocolate", hue: 30, emoji: "🍫" },
    { keys: ["gummibaerchen", "gummy bear"], pattern: "gummy", hue: 0, emoji: "🍬" },
    { keys: ["lollipop", "lutscher"], pattern: "lollipop", hue: 0, emoji: "🍭" },
    { keys: ["bonbon", "candy"], pattern: "candy", hue: 330, emoji: "🍬" },
    { keys: ["kekse", "cookie", "keks"], pattern: "cookie", hue: 30, emoji: "🍪" },
    { keys: ["lebkuchen", "gingerbread"], pattern: "gingerbread", hue: 30, emoji: "🍪" },
    { keys: ["muffin", "cupcake muffin"], pattern: "muffin", hue: 330, emoji: "🧁" },
    { keys: ["cupcake", "cup cake"], pattern: "cupcake", hue: 330, emoji: "🧁" },
    { keys: ["torte", "layer cake"], pattern: "cake", hue: 330, emoji: "🎂" },
    { keys: ["pudding", "custard"], pattern: "pudding", hue: 48, emoji: "🍮" },
    { keys: ["waffeln", "waffles"], pattern: "waffle", hue: 38, emoji: "🧇" },
    { keys: ["crepe", "crepes"], pattern: "crepe", hue: 38, emoji: "🥞" },
    { keys: ["falafel", "falafel food"], pattern: "falafel", hue: 38, emoji: "🧆" },
    { keys: ["hummus", "hummus dip"], pattern: "hummus", hue: 38, emoji: "🧆" },
    { keys: ["shawarma", "doener", "döner"], pattern: "shawarma", hue: 30, emoji: "🥙" },
    { keys: ["gyros", "gyros food"], pattern: "gyros", hue: 30, emoji: "🥙" },
    { keys: ["samosa", "samosa food"], pattern: "samosa", hue: 38, emoji: "🥟" },
    { keys: ["dim sum", "dumpling"], pattern: "dumpling", hue: 0, emoji: "🥟" },
    { keys: ["fruehlingsrolle", "spring roll"], pattern: "roll", hue: 38, emoji: "🥟" },
    { keys: ["onigiri", "rice ball"], pattern: "onigiri", hue: 0, emoji: "🍙" },
    { keys: ["bento", "bento box"], pattern: "bento", hue: 0, emoji: "🍱" },
    { keys: ["wasabi", "wasabi green"], pattern: "wasabi", hue: 130, emoji: "🌿" },
    { keys: ["ingwer", "ginger root"], pattern: "ginger", hue: 30, emoji: "🫚" },
    { keys: ["knoblauch", "garlic"], pattern: "garlic", hue: 0, emoji: "🧄" },
    { keys: ["zwiebel", "onion"], pattern: "onion", hue: 280, emoji: "🧅" },
    { keys: ["kartoffel", "potato"], pattern: "potato", hue: 30, emoji: "🥔" },
    { keys: ["süsskartoffel", "sweet potato"], pattern: "potato", hue: 15, emoji: "🍠" },
    { keys: ["karotte", "carrot"], pattern: "carrot", hue: 15, emoji: "🥕" },
    { keys: ["brokkoli", "broccoli"], pattern: "broccoli", hue: 130, emoji: "🥦" },
    { keys: ["blumenkohl", "cauliflower"], pattern: "cauliflower", hue: 0, emoji: "🥦" },
    { keys: ["paprika gemuese", "bell pepper"], pattern: "pepper", hue: 0, emoji: "🫑" },
    { keys: ["gurke", "cucumber"], pattern: "cucumber", hue: 130, emoji: "🥒" },
    { keys: ["tomate", "tomato"], pattern: "tomato", hue: 0, emoji: "🍅" },
    { keys: ["aubergine", "eggplant"], pattern: "eggplant", hue: 280, emoji: "🍆" },
    { keys: ["zucchini", "zucchini squash"], pattern: "zucchini", hue: 130, emoji: "🥒" },
    { keys: ["kürbis", "pumpkin food", "kuerbis"], pattern: "pumpkin", hue: 28, emoji: "🎃" },
    { keys: ["mais", "corn cob"], pattern: "corn", hue: 48, emoji: "🌽" },
    { keys: ["erbsen", "peas"], pattern: "peas", hue: 130, emoji: "🫛" },
    { keys: ["bohnen", "beans"], pattern: "beans", hue: 130, emoji: "🫘" },
    { keys: ["linsen", "lentils"], pattern: "lentils", hue: 30, emoji: "🫘" },
    { keys: ["reis", "rice bowl"], pattern: "rice", hue: 0, emoji: "🍚" },
    { keys: ["brot", "bread loaf"], pattern: "bread", hue: 38, emoji: "🍞" },
    { keys: ["baguette", "french bread"], pattern: "baguette", hue: 38, emoji: "🥖" },
    { keys: ["croissant butter", "croissant food"], pattern: "croissant", hue: 38, emoji: "🥐" },
    { keys: ["triathlon", "triathlon sport"], pattern: "triathlon", hue: 0, emoji: "🏊" },
    { keys: ["ironman triathlon", "iron man triathlon"], pattern: "triathlon", hue: 0, emoji: "🏊" },
    { keys: ["schwimmkappe", "swim cap"], pattern: "swimcap", hue: 220, emoji: "🏊" },
    { keys: ["rennrad", "racing bike"], pattern: "bike", hue: 0, emoji: "🚴" },
    { keys: ["laufschuh", "running shoe"], pattern: "shoe", hue: 0, emoji: "👟" },
    { keys: ["marathon", "marathon lauf"], pattern: "run", hue: 0, emoji: "🏃" },
    { keys: ["goldmedaille", "gold medal"], pattern: "medal", hue: 48, emoji: "🥇" },
    { keys: ["arduino", "arduino board"], pattern: "arduino", hue: 0, emoji: "🔌" },
    { keys: ["raspberry pi", "raspberrypi"], pattern: "rpi", hue: 0, emoji: "💻" },
    { keys: ["breadboard", "steckbrett"], pattern: "board", hue: 220, emoji: "🔌" },
    { keys: ["loetkolben", "soldering iron"], pattern: "solder", hue: 0, emoji: "🔧" },
    { keys: ["typescript", "typescript code"], pattern: "code", hue: 220, emoji: "💻" },
    { keys: ["terminal", "command line"], pattern: "terminal", hue: 130, emoji: "⌨" },
    { keys: ["code bracket", "programmierung symbol"], pattern: "code", hue: 220, emoji: "💻" },
    { keys: ["tokamak", "kernfusion reactor"], pattern: "fusion", hue: 180, emoji: "⚛" },
    { keys: ["kernfusion", "fusion energy"], pattern: "fusion", hue: 180, emoji: "⚛" },
    { keys: ["cern", "teilchenbeschleuniger"], pattern: "particle", hue: 280, emoji: "⚛" },
    { keys: ["higgs", "higgs boson"], pattern: "particle", hue: 280, emoji: "⚛" },
    { keys: ["homeoffice", "home office desk"], pattern: "desk", hue: 30, emoji: "🏠" },
    { keys: ["videokonferenz", "video call zoom"], pattern: "videocall", hue: 220, emoji: "📹" },
    { keys: ["freelancer", "freiberufler laptop"], pattern: "laptop", hue: 220, emoji: "💼" },
    { keys: ["etf", "etf fonds"], pattern: "chart", hue: 130, emoji: "📈" },
    { keys: ["aktienchart", "stock chart"], pattern: "chart", hue: 130, emoji: "📈" },
    { keys: ["sparschwein", "piggy bank"], pattern: "piggy", hue: 330, emoji: "🐷" },
    { keys: ["mietvertrag", "rent contract"], pattern: "document", hue: 220, emoji: "📄" },
    { keys: ["wohnungsschluessel", "apartment key"], pattern: "key", hue: 48, emoji: "🔑" },
    { keys: ["grundgesetz", "verfassung buch"], pattern: "book", hue: 0, emoji: "📕" },
    { keys: ["nato", "nato emblem"], pattern: "shield", hue: 220, emoji: "🛡" },
    { keys: ["panzer", "tank military"], pattern: "tank", hue: 130, emoji: "🛡" },
    { keys: ["hitzewelle", "heat wave hot"], pattern: "heat", hue: 15, emoji: "🌡" },
    { keys: ["thermometer heiss", "hot thermometer"], pattern: "thermo", hue: 0, emoji: "🌡" },
    { keys: ["waldbrand", "forest fire smoke"], pattern: "wildfire", hue: 8, emoji: "🔥" },
    { keys: ["buschfeuer", "bush fire"], pattern: "wildfire", hue: 8, emoji: "🔥" },
    { keys: ["mikroplastik", "plastic ocean"], pattern: "plastic", hue: 220, emoji: "🌊" },
    { keys: ["minimalismus", "minimal room"], pattern: "minimal", hue: 0, emoji: "⬜" },
    { keys: ["campingbus", "van camper"], pattern: "van", hue: 220, emoji: "🚐" },
    { keys: ["van life", "wohnmobil klein"], pattern: "van", hue: 220, emoji: "🚐" },
    { keys: ["cybermobbing", "online bullying"], pattern: "warning", hue: 0, emoji: "⚠" },
    { keys: ["enkeltrick", "scam phone"], pattern: "warning", hue: 0, emoji: "⚠" },
    { keys: ["antibiotika", "antibiotics pills"], pattern: "pills", hue: 0, emoji: "💊" },
    { keys: ["placebo", "placebo pill"], pattern: "pills", hue: 220, emoji: "💊" },
    { keys: ["faktencheck", "fact check news"], pattern: "magnify", hue: 220, emoji: "🔍" },
    { keys: ["stoizismus", "stoic pillar"], pattern: "pillar", hue: 220, emoji: "🏛" },
    { keys: ["bauhaus", "bauhaus design"], pattern: "bauhaus", hue: 0, emoji: "🔲" },
    { keys: ["banksy", "banksy stencil"], pattern: "graffiti", hue: 280, emoji: "🎨" },
    { keys: ["weltuhr", "world clock"], pattern: "clock", hue: 220, emoji: "🕐" },
    { keys: ["zeitzone", "time zone utc"], pattern: "globe", hue: 200, emoji: "🌍" },
    { keys: ["prompt", "prompt engineering"], pattern: "text", hue: 280, emoji: "✍" },
    { keys: ["pilates", "pilates mat"], pattern: "yoga", hue: 160, emoji: "🧘" },
    { keys: ["tai chi", "taichi"], pattern: "yoga", hue: 160, emoji: "🧘" },
    { keys: ["deepfake", "deep fake face"], pattern: "mask", hue: 280, emoji: "🎭" },
    { keys: ["iss", "space station iss"], pattern: "station", hue: 220, emoji: "🛰" },
    { keys: ["mars rover", "curiosity rover"], pattern: "rover", hue: 8, emoji: "🤖" },
    { keys: ["astronaut helm", "astronaut suit"], pattern: "astronaut", hue: 220, emoji: "👨‍🚀" },
    { keys: ["e-bike", "ebike", "elektrofahrrad"], pattern: "bike", hue: 130, emoji: "🚲" },
    { keys: ["formel e", "formula e"], pattern: "car", hue: 130, emoji: "🏎" },
    { keys: ["meerkat", "erdmännchen"], pattern: "meerkat", hue: 30, emoji: "🦝" },
    { keys: ["puffin", "papageitaucher"], pattern: "puffin", hue: 220, emoji: "🐦" },
    { keys: ["octopus", "krake"], pattern: "octopus", hue: 280, emoji: "🐙" },
    { keys: ["seestern", "starfish"], pattern: "starfish", hue: 0, emoji: "⭐" },
    { keys: ["hummer", "lobster"], pattern: "lobster", hue: 0, emoji: "🦞" },
    { keys: ["krebs tier", "crab animal"], pattern: "crab", hue: 0, emoji: "🦀" },
    { keys: ["polizeiauto", "police car"], pattern: "police", hue: 220, emoji: "🚓" },
    { keys: ["gelbes taxi", "yellow taxi"], pattern: "taxi", hue: 48, emoji: "🚕" },
    { keys: ["straßenbahn", "tram streetcar"], pattern: "tram", hue: 0, emoji: "🚋" },
    { keys: ["metro u-bahn", "subway train"], pattern: "metro", hue: 220, emoji: "🚇" },
    { keys: ["zirkus", "circus tent"], pattern: "circus", hue: 0, emoji: "🎪" },
    { keys: ["mumie", "mummy"], pattern: "mummy", hue: 38, emoji: "🧟" },
    { keys: ["werwolf", "werewolf"], pattern: "werewolf", hue: 220, emoji: "🐺" },
    { keys: ["heisse schokolade", "hot chocolate"], pattern: "cup", hue: 30, emoji: "☕" },
    { keys: ["marshmallow", "marshmallows"], pattern: "marshmallow", hue: 0, emoji: "🍡" },
    { keys: ["reisepass", "passport"], pattern: "passport", hue: 0, emoji: "🛂" },
    { keys: ["koffer", "luggage suitcase"], pattern: "luggage", hue: 220, emoji: "🧳" },
    { keys: ["sonnenschirm strand", "beach umbrella"], pattern: "umbrella", hue: 0, emoji: "🏖" },
    { keys: ["starlink", "satellite dish"], pattern: "dish", hue: 220, emoji: "📡" },
    { keys: ["5g mast", "5g tower"], pattern: "tower", hue: 220, emoji: "📶" },
    { keys: ["server rack", "datacenter server"], pattern: "server", hue: 220, emoji: "🖥" },
    { keys: ["nft", "nft art"], pattern: "nft", hue: 280, emoji: "🖼" },
    { keys: ["phishing", "phishing hook"], pattern: "hook", hue: 0, emoji: "🪝" },
    { keys: ["passwort", "password lock"], pattern: "lock", hue: 220, emoji: "🔒" },
    { keys: ["traktor", "tractor farm"], pattern: "tractor", hue: 130, emoji: "🚜" },
    { keys: ["bagel", "bagel bread"], pattern: "bagel", hue: 38, emoji: "🥯" },
    { keys: ["brezel", "pretzel"], pattern: "pretzel", hue: 38, emoji: "🥨" },
    { keys: ["nachos", "nachos chips"], pattern: "nachos", hue: 38, emoji: "🌮" },
    { keys: ["curry", "curry sauce"], pattern: "curry", hue: 15, emoji: "🍛" },
    { keys: ["lasagne", "lasagna"], pattern: "pasta", hue: 15, emoji: "🍝" },
    { keys: ["spaghetti", "spaghetti pasta"], pattern: "pasta", hue: 15, emoji: "🍝" },
    { keys: ["gelato", "italian ice cream"], pattern: "icecream", hue: 330, emoji: "🍨" },
    { keys: ["tiramisu", "tiramisu dessert"], pattern: "dessert", hue: 30, emoji: "🍰" },
    { keys: ["bubble tea", "boba tea"], pattern: "bubbletea", hue: 330, emoji: "🧋" },
    { keys: ["acai bowl", "acai"], pattern: "bowl", hue: 280, emoji: "🥣" },
    { keys: ["salat bowl", "salad bowl"], pattern: "salad", hue: 130, emoji: "🥗" },
    { keys: ["wok", "wok pan"], pattern: "wok", hue: 0, emoji: "🍳" },
    { keys: ["pho", "pho soup"], pattern: "soup", hue: 30, emoji: "🍜" },
    { keys: ["pad thai", "padthai"], pattern: "noodles", hue: 38, emoji: "🍜" },
    { keys: ["naan", "naan bread"], pattern: "bread", hue: 38, emoji: "🫓" },
    { keys: ["paella", "paella pan"], pattern: "paella", hue: 15, emoji: "🥘" },
    { keys: ["gnocchi", "gnocchi pasta"], pattern: "pasta", hue: 38, emoji: "🍝" },
    { keys: ["pesto", "pesto sauce"], pattern: "sauce", hue: 130, emoji: "🌿" },
    { keys: ["marienkäfer", "ladybug"], pattern: "ladybug", hue: 0, emoji: "🐞" },
    { keys: ["gluehwuermchen", "firefly"], pattern: "firefly", hue: 48, emoji: "✨" },
    { keys: ["schnecke", "snail"], pattern: "snail", hue: 130, emoji: "🐌" },
    { keys: ["waschbaer", "raccoon"], pattern: "raccoon", hue: 220, emoji: "🦝" },
    { keys: ["stinktier", "skunk"], pattern: "skunk", hue: 220, emoji: "🦨" },
    { keys: ["tapir", "tapir animal"], pattern: "tapir", hue: 220, emoji: "🐗" },
    { keys: ["orangutan", "orang-utan"], pattern: "orangutan", hue: 15, emoji: "🦧" },
    { keys: ["schimpanse", "chimpanzee"], pattern: "chimp", hue: 30, emoji: "🦍" },
    { keys: ["toucan", "tukan"], pattern: "toucan", hue: 15, emoji: "🦜" },
    { keys: ["kakadu", "cockatoo"], pattern: "cockatoo", hue: 0, emoji: "🦜" },
    { keys: ["pelikan", "pelican"], pattern: "pelican", hue: 0, emoji: "🦢" },
    { keys: ["reiher", "heron bird"], pattern: "heron", hue: 220, emoji: "🦢" },
    { keys: ["eisvogel", "kingfisher"], pattern: "kingfisher", hue: 200, emoji: "🐦" },
    { keys: ["specht", "woodpecker"], pattern: "woodpecker", hue: 0, emoji: "🐦" },
    { keys: ["kraehe", "crow raven"], pattern: "crow", hue: 220, emoji: "🐦‍⬛" },
    { keys: ["taube", "pigeon dove"], pattern: "pigeon", hue: 220, emoji: "🕊" },
    { keys: ["spatz", "sparrow"], pattern: "sparrow", hue: 30, emoji: "🐦" },
    { keys: ["kanarienvogel", "canary bird"], pattern: "canary", hue: 48, emoji: "🐤" },
    { keys: ["wellensittich", "budgie"], pattern: "budgie", hue: 130, emoji: "🦜" },
    { keys: ["strauß", "ostrich"], pattern: "ostrich", hue: 30, emoji: "🦤" },
    { keys: ["moewe", "seagull"], pattern: "seagull", hue: 220, emoji: "🕊" },
    { keys: ["steinadler", "golden eagle"], pattern: "eagle", hue: 30, emoji: "🦅" },
    { keys: ["polarfuchs", "arctic fox"], pattern: "fox", hue: 220, emoji: "🦊" },
    { keys: ["walross", "walrus"], pattern: "walrus", hue: 220, emoji: "🦭" },
    { keys: ["seeotter", "sea otter"], pattern: "otter", hue: 30, emoji: "🦦" },
    { keys: ["regenwurm", "earthworm"], pattern: "worm", hue: 0, emoji: "🪱" },
    { keys: ["gottesanbeterin", "praying mantis"], pattern: "mantis", hue: 130, emoji: "🦗" },
    { keys: ["heuschrecke", "grasshopper"], pattern: "grasshopper", hue: 130, emoji: "🦗" },
    { keys: ["kreuzspinne", "cross spider"], pattern: "spider", hue: 220, emoji: "🕷" },
    { keys: ["uranus", "planet uranus"], pattern: "uranus", hue: 200, emoji: "🪐" },
    { keys: ["schwarzes loch", "blackhole space"], pattern: "blackhole", hue: 270, emoji: "🕳" },
    { keys: ["james webb", "jwst telescope"], pattern: "telescope", hue: 220, emoji: "🔭" },
    { keys: ["apollo", "apollo moon mission"], pattern: "moonflag", hue: 220, emoji: "🚀" },
    { keys: ["kampfjet", "fighter jet"], pattern: "jet", hue: 220, emoji: "✈" },
    { keys: ["oase", "desert oasis"], pattern: "oasis", hue: 130, emoji: "🌴" },
    { keys: ["sandsturm", "sandstorm"], pattern: "sandstorm", hue: 38, emoji: "🌪" },
    { keys: ["stalaktit", "cave stalactite"], pattern: "cave", hue: 220, emoji: "🪨" },
    { keys: ["geysir", "geyser"], pattern: "geyser", hue: 200, emoji: "💧" },
    { keys: ["lawine", "avalanche"], pattern: "avalanche", hue: 200, emoji: "🏔" },
    { keys: ["eisberg", "iceberg"], pattern: "iceberg", hue: 200, emoji: "🧊" },
    { keys: ["muschel", "seashell"], pattern: "shell", hue: 330, emoji: "🐚" },
    { keys: ["anker", "ship anchor"], pattern: "anchor", hue: 220, emoji: "⚓" },
    { keys: ["segelboot", "sailboat small"], pattern: "sailboat", hue: 0, emoji: "⛵" },
    { keys: ["jacht", "yacht luxury"], pattern: "yacht", hue: 220, emoji: "🛥" },
    { keys: ["windsurfen", "windsurfing"], pattern: "windsurf", hue: 200, emoji: "🏄" },
    { keys: ["kitesurf", "kitesurfing"], pattern: "kite", hue: 0, emoji: "🪁" },
    { keys: ["drachen steigen", "kite flying"], pattern: "kite", hue: 0, emoji: "🪁" },
    { keys: ["zauberhut", "magic hat"], pattern: "tophat", hue: 220, emoji: "🎩" },
    { keys: ["kristallkugel", "crystal ball"], pattern: "crystalball", hue: 280, emoji: "🔮" },
    { keys: ["spielautomat", "slot machine"], pattern: "slot", hue: 0, emoji: "🎰" },
    { keys: ["domino", "domino stein"], pattern: "domino", hue: 0, emoji: "🁫" },
    { keys: ["jenga", "jenga tower"], pattern: "jenga", hue: 30, emoji: "🧱" },
    { keys: ["monopoly", "monopoly game"], pattern: "board", hue: 0, emoji: "🎲" },
    { keys: ["uno", "uno karte"], pattern: "card", hue: 0, emoji: "🃏" },
    { keys: ["poker", "poker chips"], pattern: "poker", hue: 0, emoji: "🃏" },
    { keys: ["barbie", "barbie doll"], pattern: "doll", hue: 330, emoji: "👗" },
    { keys: ["rc auto", "rc car toy"], pattern: "toycar", hue: 0, emoji: "🚗" },
    { keys: ["modelleisenbahn", "model train"], pattern: "modeltrain", hue: 0, emoji: "🚂" },
    { keys: ["vr brille", "vr headset"], pattern: "vr", hue: 280, emoji: "🥽" },
    { keys: ["airpods", "earbuds"], pattern: "earbuds", hue: 220, emoji: "🎧" },
    { keys: ["usb stick", "usb drive"], pattern: "usb", hue: 220, emoji: "💾" },
    { keys: ["mechanische tastatur", "mechanical keyboard"], pattern: "keyboard", hue: 220, emoji: "⌨" },
    { keys: ["gaming maus", "gaming mouse"], pattern: "mouse", hue: 280, emoji: "🖱" },
    { keys: ["ultrawide monitor", "curved monitor"], pattern: "monitor", hue: 220, emoji: "🖥" },
    { keys: ["ethereum", "eth coin"], pattern: "coin", hue: 280, emoji: "💠" },
    { keys: ["wallet krypto", "crypto wallet"], pattern: "wallet", hue: 220, emoji: "👛" },
    { keys: ["firewall", "firewall shield"], pattern: "firewall", hue: 0, emoji: "🛡" },
    { keys: ["backup cloud", "cloud backup"], pattern: "cloud", hue: 200, emoji: "☁" },
    { keys: ["fingerprint", "fingerabdruck"], pattern: "fingerprint", hue: 220, emoji: "👆" },
    { keys: ["2fa", "authenticator app"], pattern: "auth", hue: 0, emoji: "🔐" },
    { keys: ["malware", "virus computer"], pattern: "virus", hue: 0, emoji: "🦠" },
    { keys: ["glasfaser", "fiber optic"], pattern: "fiber", hue: 280, emoji: "💡" },
    { keys: ["rust lang", "rust programming"], pattern: "gear", hue: 0, emoji: "⚙" },
    { keys: ["sql database", "datenbank sql"], pattern: "database", hue: 220, emoji: "🗄" },
    { keys: ["mongodb", "nosql database"], pattern: "leafdb", hue: 130, emoji: "🍃" },
    { keys: ["rest api", "api plug"], pattern: "plug", hue: 220, emoji: "🔌" },
    { keys: ["golang", "go gopher"], pattern: "gopher", hue: 0, emoji: "🐹" },
    { keys: ["kotlin android", "kotlin logo"], pattern: "android", hue: 280, emoji: "🤖" },
    { keys: ["swift ios", "swift bird lang"], pattern: "swiftbird", hue: 0, emoji: "🐦" },
    { keys: ["kubernetes", "k8s wheel"], pattern: "k8s", hue: 220, emoji: "☸" },
    { keys: ["hydroponik", "hydroponic farm"], pattern: "hydro", hue: 130, emoji: "🌱" },
    { keys: ["kompost", "compost bin"], pattern: "compost", hue: 30, emoji: "♻" },
    { keys: ["permakultur", "permaculture garden"], pattern: "garden", hue: 130, emoji: "🌿" },
    { keys: ["korallenbleiche", "bleached coral"], pattern: "bleachcoral", hue: 0, emoji: "🪸" },
    { keys: ["antarktis eis", "antarctica ice"], pattern: "antarctica", hue: 200, emoji: "🧊" },
    { keys: ["skandinavien", "nordic fjord"], pattern: "fjord", hue: 200, emoji: "🏔" },
    { keys: ["afrika savanne", "african savanna"], pattern: "savanna", hue: 38, emoji: "🦁" },
    { keys: ["amazonas", "amazon rainforest"], pattern: "amazon", hue: 130, emoji: "🌴" },
    { keys: ["outback", "australian outback"], pattern: "outback", hue: 30, emoji: "🏜" },
    { keys: ["berliner mauer", "berlin wall"], pattern: "wall", hue: 220, emoji: "🧱" },
    { keys: ["kalter krieg", "cold war split"], pattern: "split", hue: 220, emoji: "🌍" },
    { keys: ["fabrik dampf", "industrial factory"], pattern: "factory", hue: 220, emoji: "🏭" },
    { keys: ["franz revolution", "liberty cap"], pattern: "liberty", hue: 0, emoji: "🗽" },
    { keys: ["nanotech", "nanotechnology"], pattern: "nano", hue: 280, emoji: "🔬" },
    { keys: ["bionik flug", "biomimicry wing"], pattern: "bionics", hue: 200, emoji: "🪽" },
    { keys: ["graphen hex", "graphene sheet"], pattern: "hexgrid", hue: 220, emoji: "⬡" },
    { keys: ["crispr", "gene scissors"], pattern: "crispr", hue: 290, emoji: "✂" },
    { keys: ["elektroschrott", "e-waste pile"], pattern: "ewaste", hue: 220, emoji: "📱" },
    { keys: ["schweiz alpen", "swiss alps"], pattern: "alps", hue: 200, emoji: "🏔" },
    { keys: ["oesterreich wien", "austria vienna"], pattern: "vienna", hue: 0, emoji: "🎻" },
    { keys: ["windmuehle", "windmill dutch"], pattern: "windmill", hue: 0, emoji: "🌬" },
    { keys: ["tulpen", "tulip field"], pattern: "tulip", hue: 0, emoji: "🌷" },
    { keys: ["klompen", "wooden clogs"], pattern: "clogs", hue: 30, emoji: "👞" },
    { keys: ["big ben", "london clock"], pattern: "bigben", hue: 220, emoji: "🕰" },
    { keys: ["roter bus", "london bus"], pattern: "busred", hue: 0, emoji: "🚌" },
    { keys: ["telefonzelle", "phone booth uk"], pattern: "booth", hue: 0, emoji: "📞" },
    { keys: ["union jack", "uk flag"], pattern: "flaguk", hue: 0, emoji: "🇬🇧" },
    { keys: ["dudelsack", "bagpipes scotland"], pattern: "bagpipes", hue: 220, emoji: "🎵" },
    { keys: ["kilt", "scottish kilt"], pattern: "kilt", hue: 280, emoji: "👔" },
    { keys: ["kleeblatt", "shamrock ireland"], pattern: "shamrock", hue: 130, emoji: "☘" },
    { keys: ["sydney opera", "opera house"], pattern: "opera", hue: 0, emoji: "🏛" },
    { keys: ["boomerang", "australian boomerang"], pattern: "boomerang", hue: 30, emoji: "🪃" },
    { keys: ["didgeridoo", "aboriginal instrument"], pattern: "didgeridoo", hue: 30, emoji: "🎵" },
    { keys: ["uluru", "ayers rock"], pattern: "uluru", hue: 8, emoji: "🪨" },
    { keys: ["great wall", "chinese wall"], pattern: "greatwall", hue: 220, emoji: "🏯" },
    { keys: ["laterne rot", "chinese lantern"], pattern: "lanternred", hue: 0, emoji: "🏮" },
    { keys: ["diwali", "oil lamp diya"], pattern: "diya", hue: 48, emoji: "🪔" },
    { keys: ["holi", "color festival"], pattern: "holi", hue: 0, emoji: "🎨" },
    { keys: ["elefant indien", "indian elephant"], pattern: "elephant", hue: 220, emoji: "🐘" },
    { keys: ["rickshaw", "tuk tuk"], pattern: "rickshaw", hue: 48, emoji: "🛺" },
    { keys: ["sari", "indian dress"], pattern: "sari", hue: 330, emoji: "👗" },
    { keys: ["sphinx", "egypt sphinx"], pattern: "sphinx", hue: 38, emoji: "🗿" },
    { keys: ["pharao", "pharaoh mask"], pattern: "pharaoh", hue: 48, emoji: "👑" },
    { keys: ["ankh", "egypt ankh"], pattern: "ankh", hue: 48, emoji: "☥" },
    { keys: ["nil", "nile river"], pattern: "nileriver", hue: 200, emoji: "🌊" },
    { keys: ["sahara karawane", "camel caravan"], pattern: "caravan", hue: 38, emoji: "🐪" },
    { keys: ["burj khalifa", "dubai tower"], pattern: "skyscraper", hue: 220, emoji: "🏙" },
    { keys: ["moschee kuppel", "mosque dome"], pattern: "mosque", hue: 48, emoji: "🕌" },
    { keys: ["minarett", "minaret tower"], pattern: "minaret", hue: 48, emoji: "🕌" },
    { keys: ["hochzeit ringe", "wedding rings"], pattern: "rings", hue: 48, emoji: "💍" },
    { keys: ["blumenstrauss", "flower bouquet"], pattern: "bouquet", hue: 330, emoji: "💐" },
    { keys: ["abschlusskappe", "graduation cap"], pattern: "gradcap", hue: 220, emoji: "🎓" },
    { keys: ["diplom", "diploma scroll"], pattern: "diploma", hue: 38, emoji: "📜" },
    { keys: ["schulranzen", "school backpack"], pattern: "schoolbag", hue: 220, emoji: "🎒" },
    { keys: ["tafel kreide", "chalkboard"], pattern: "chalkboard", hue: 130, emoji: "📋" },
    { keys: ["buecherregal", "bookshelf"], pattern: "bookshelf", hue: 30, emoji: "📚" },
    { keys: ["vinyl", "vinyl record"], pattern: "vinyl", hue: 220, emoji: "💿" },
    { keys: ["kassette", "cassette tape"], pattern: "cassette", hue: 220, emoji: "📼" },
    { keys: ["boombox", "ghetto blaster"], pattern: "boombox", hue: 0, emoji: "📻" },
    { keys: ["turntable", "dj turntable"], pattern: "turntable", hue: 220, emoji: "🎛" },
    { keys: ["mischpult", "mixing console"], pattern: "mixer", hue: 220, emoji: "🎚" },
    { keys: ["schlagzeug", "drum kit"], pattern: "drums", hue: 0, emoji: "🥁" },
    { keys: ["trompete", "trumpet brass"], pattern: "trumpet", hue: 48, emoji: "🎺" },
    { keys: ["posaune", "trombone"], pattern: "trombone", hue: 48, emoji: "🎺" },
    { keys: ["floete", "flute instrument"], pattern: "flute", hue: 220, emoji: "🎶" },
    { keys: ["akkordeon", "accordion"], pattern: "accordion", hue: 0, emoji: "🪗" },
    { keys: ["mundharmonika", "harmonica"], pattern: "harmonica", hue: 0, emoji: "🎵" },
    { keys: ["banjo", "banjo string"], pattern: "banjo", hue: 30, emoji: "🪕" },
    { keys: ["ukulele", "ukulele small"], pattern: "ukulele", hue: 30, emoji: "🪕" },
    { keys: ["harfe", "harp strings"], pattern: "harp", hue: 280, emoji: "🎵" },
    { keys: ["ballett", "ballet dancer"], pattern: "ballet", hue: 330, emoji: "🩰" },
    { keys: ["breakdance", "bboy dance"], pattern: "breakdance", hue: 0, emoji: "🕺" },
    { keys: ["bmx", "bmx bike trick"], pattern: "bmx", hue: 0, emoji: "🚲" },
    { keys: ["parkour", "parkour jump"], pattern: "parkour", hue: 220, emoji: "🏃" },
    { keys: ["trampolin", "trampoline"], pattern: "trampoline", hue: 0, emoji: "🤸" },
    { keys: ["turnen ringe", "gymnastics rings"], pattern: "rings", hue: 220, emoji: "💍" },
    { keys: ["stabhochsprung", "pole vault"], pattern: "vault", hue: 0, emoji: "🏃" },
    { keys: ["speerwurf", "javelin throw"], pattern: "javelin", hue: 30, emoji: "🏹" },
    { keys: ["diskus", "discus throw"], pattern: "discus", hue: 220, emoji: "🥏" },
    { keys: ["wasserball", "water polo"], pattern: "waterpolo", hue: 200, emoji: "🤽" },
    { keys: ["springbrett", "diving board"], pattern: "diving", hue: 200, emoji: "🤿" },
    { keys: ["aquarium glas", "fish tank"], pattern: "aquarium", hue: 200, emoji: "🐠" },
    { keys: ["gewaechshaus", "greenhouse"], pattern: "greenhouse", hue: 130, emoji: "🏡" },
    { keys: ["gartenzwerg", "garden gnome"], pattern: "gnome", hue: 0, emoji: "🧙" },
    { keys: ["giesskanne", "watering can"], pattern: "watercan", hue: 130, emoji: "🪴" },
    { keys: ["rasenmaeher", "lawn mower"], pattern: "mower", hue: 130, emoji: "🌿" },
    { keys: ["schubkarre", "wheelbarrow"], pattern: "wheelbarrow", hue: 30, emoji: "🛒" },
    { keys: ["briefkasten", "mailbox"], pattern: "mailbox", hue: 0, emoji: "📬" },
    { keys: ["kaminfeuer", "cozy fireplace"], pattern: "fireplace", hue: 8, emoji: "🔥" },
    { keys: ["schaukelstuhl", "rocking chair"], pattern: "rocker", hue: 30, emoji: "🪑" },
    { keys: ["vogelkaefig", "bird cage"], pattern: "cage", hue: 48, emoji: "🐦" },
    { keys: ["heuballen", "hay bale"], pattern: "hay", hue: 48, emoji: "🌾" },
    { keys: ["vogelscheuche", "scarecrow"], pattern: "scarecrow", hue: 30, emoji: "🌾" },
    { keys: ["weinberg", "vineyard grapes"], pattern: "vineyard", hue: 280, emoji: "🍇" },
    { keys: ["apfelplantage", "apple orchard"], pattern: "orchard", hue: 0, emoji: "🍎" },
    { keys: ["kuerbisfeld", "pumpkin patch"], pattern: "patch", hue: 28, emoji: "🎃" },
    { keys: ["maislabyrinth", "corn maze"], pattern: "maze", hue: 48, emoji: "🌽" },
    { keys: ["angelrute", "fishing rod"], pattern: "fishing", hue: 220, emoji: "🎣" },
    { keys: ["picknick", "picnic basket"], pattern: "picnic", hue: 0, emoji: "🧺" },
    { keys: ["thermoskanne", "thermos flask"], pattern: "thermos", hue: 220, emoji: "🫖" },
    { keys: ["frisbee", "flying disc"], pattern: "frisbee", hue: 0, emoji: "🥏" },
    { keys: ["zuckerwatte", "cotton candy"], pattern: "cottoncandy", hue: 330, emoji: "🍬" },
    { keys: ["riesenrad", "ferris wheel big"], pattern: "ferris", hue: 0, emoji: "🎡" },
    { keys: ["karussell", "carousel merry"], pattern: "carousel", hue: 330, emoji: "🎠" },
    { keys: ["zirkuszelt", "circus tent big"], pattern: "circus", hue: 0, emoji: "🎪" },
    { keys: ["oktoberfest", "beer festival"], pattern: "oktoberfest", hue: 48, emoji: "🍺" },
    { keys: ["dirndl", "dirndl dress"], pattern: "dirndl", hue: 330, emoji: "👗" },
    { keys: ["lederhose", "lederhosen"], pattern: "lederhosen", hue: 30, emoji: "👖" },
    { keys: ["currywurst", "curry sausage"], pattern: "currywurst", hue: 0, emoji: "🌭" },
    { keys: ["schnitzel", "wiener schnitzel"], pattern: "schnitzel", hue: 38, emoji: "🍖" },
    { keys: ["sauerkraut", "sauerkraut bowl"], pattern: "kraut", hue: 48, emoji: "🥬" },
    { keys: ["spaetzle", "spaetzle noodles"], pattern: "spaetzle", hue: 38, emoji: "🍝" },
    { keys: ["schwarzwaelder", "black forest cake"], pattern: "blackforest", hue: 0, emoji: "🍰" },
    { keys: ["gluehwein", "mulled wine"], pattern: "mulled", hue: 0, emoji: "🍷" },
    { keys: ["adventskalender", "advent calendar"], pattern: "adventcal", hue: 0, emoji: "📅" },
    { keys: ["nussknacker", "nutcracker"], pattern: "nutcracker", hue: 0, emoji: "🎄" },
    { keys: ["lebkuchenhaus", "gingerbread house"], pattern: "gingerhouse", hue: 30, emoji: "🏠" },
    { keys: ["schneekugel", "snow globe"], pattern: "snowglobe", hue: 200, emoji: "🔮" },
    { keys: ["schneeballschlacht", "snowball fight"], pattern: "snowball", hue: 200, emoji: "❄" },
    { keys: ["blockhütte", "log cabin"], pattern: "logcabin", hue: 30, emoji: "🏡" },
    { keys: ["geschenkbox", "gift box ribbon"], pattern: "giftbox", hue: 0, emoji: "🎁" },
    { keys: ["mistelzweig", "mistletoe"], pattern: "mistletoe", hue: 130, emoji: "🌿" },
    { keys: ["engel fluegel", "angel wings"], pattern: "wings", hue: 0, emoji: "👼" },
    { keys: ["krippe", "nativity scene"], pattern: "nativity", hue: 38, emoji: "⭐" },
    { keys: ["moose", "elch kanada"], pattern: "moose", hue: 30, emoji: "🫎" },
    { keys: ["biber kanada", "canada beaver"], pattern: "beaver", hue: 30, emoji: "🦫" },
    { keys: ["ahornblatt", "maple leaf"], pattern: "maple", hue: 0, emoji: "🍁" },
    { keys: ["iglu", "igloo ice"], pattern: "igloo", hue: 200, emoji: "🏠" },
    { keys: ["totempfahl", "totem pole"], pattern: "totem", hue: 0, emoji: "🪵" },
    { keys: ["traumfaenger", "dreamcatcher"], pattern: "dreamcatcher", hue: 280, emoji: "🪶" },
    { keys: ["cowboyhut", "cowboy hat"], pattern: "cowboy", hue: 30, emoji: "🤠" },
    { keys: ["sheriff stern", "sheriff badge"], pattern: "sheriff", hue: 48, emoji: "⭐" },
    { keys: ["hufeisen", "horseshoe luck"], pattern: "horseshoe", hue: 220, emoji: "🐴" },
    { keys: ["flamenco", "flamenco dancer"], pattern: "flamenco", hue: 0, emoji: "💃" },
    { keys: ["castanets", "kastagnetten"], pattern: "castanets", hue: 30, emoji: "🎵" },
    { keys: ["himalaya", "himalaya mountains"], pattern: "himalaya", hue: 200, emoji: "🏔" },
    { keys: ["everest", "mount everest"], pattern: "everest", hue: 200, emoji: "🏔" },
    { keys: ["tibet tempel", "tibet temple"], pattern: "temple", hue: 0, emoji: "🛕" },
    { keys: ["koi teich", "koi pond"], pattern: "koipond", hue: 0, emoji: "🐟" },
    { keys: ["bonsai teich", "zen pond"], pattern: "zenpond", hue: 200, emoji: "🪷" },
    { keys: ["calligraphy", "kalligraphie"], pattern: "calligraphy", hue: 220, emoji: "✍" },
    { keys: ["origami", "origami crane"], pattern: "origami", hue: 0, emoji: "🦢" },
    { keys: ["teleskop stern", "stargazing"], pattern: "stargaze", hue: 220, emoji: "🔭" },
    { keys: ["mikroskop", "microscope lab"], pattern: "microscope", hue: 220, emoji: "🔬" },
    { keys: ["labor kolben", "lab flask"], pattern: "flask", hue: 130, emoji: "⚗" },
    { keys: ["periodensystem", "periodic table"], pattern: "periodic", hue: 280, emoji: "🧪" },
    { keys: ["newton apfel", "gravity apple"], pattern: "newton", hue: 0, emoji: "🍎" },
    { keys: ["tesla spule", "tesla coil"], pattern: "teslacoil", hue: 280, emoji: "⚡" },
    { keys: ["einstein", "einstein portrait"], pattern: "einstein", hue: 220, emoji: "🧑‍🔬" },
    { keys: ["galileo", "galilei telescope"], pattern: "galileo", hue: 220, emoji: "🔭" },
    { keys: ["darwin", "evolution finch"], pattern: "darwin", hue: 30, emoji: "🐦" },
    { keys: ["marie curie", "curie science"], pattern: "curie", hue: 280, emoji: "🧪" },
    { keys: ["hawking", "black hole scientist"], pattern: "hawking", hue: 270, emoji: "🕳" },
    { keys: ["loewenkopf", "lion head"], pattern: "lionhead", hue: 38, emoji: "🦁" },
    { keys: ["zebra kopf", "zebra head"], pattern: "zebrahead", hue: 0, emoji: "🦓" },
    { keys: ["giraffenkopf", "giraffe head"], pattern: "giraffehead", hue: 48, emoji: "🦒" },
    { keys: ["elefantenbaby", "baby elephant"], pattern: "babyelephant", hue: 220, emoji: "🐘" },
    { keys: ["faultier haengend", "hanging sloth"], pattern: "slothhang", hue: 30, emoji: "🦥" },
    { keys: ["roter panda", "red panda tree"], pattern: "redpanda", hue: 0, emoji: "🐼" },
    { keys: ["quokka", "quokka selfie"], pattern: "quokka", hue: 30, emoji: "🐹" },
    { keys: ["wombat", "wombat animal"], pattern: "wombat", hue: 30, emoji: "🐹" },
    { keys: ["platypus", "schnabeltier"], pattern: "platypus", hue: 220, emoji: "🦆" },
    { keys: ["kiwi vogel", "kiwi bird nz"], pattern: "kiwibird", hue: 30, emoji: "🥝" },
    { keys: ["albatros", "albatross bird"], pattern: "albatross", hue: 220, emoji: "🕊" },
    { keys: ["condor", "andean condor"], pattern: "condor", hue: 220, emoji: "🦅" },
    { keys: ["kolibri blume", "hummingbird flower"], pattern: "hummingbird", hue: 330, emoji: "🐦" },
    { keys: ["papagei bunt", "colorful parrot"], pattern: "parrot", hue: 0, emoji: "🦜" },
    { keys: ["ara", "macaw parrot"], pattern: "macaw", hue: 0, emoji: "🦜" },
    { keys: ["php logo", "php elephant"], pattern: "php", hue: 280, emoji: "🐘" },
    { keys: ["c++ logo", "cpp code"], pattern: "cpp", hue: 220, emoji: "💻" },
    { keys: ["csharp note", "c sharp music code"], pattern: "csharp", hue: 280, emoji: "🎵" },
    { keys: ["scrum board", "kanban board"], pattern: "kanban", hue: 130, emoji: "📋" },
    { keys: ["figma design", "figma ui"], pattern: "figma", hue: 280, emoji: "🎨" },
    { keys: ["tiktok app", "tiktok logo"], pattern: "tiktok", hue: 280, emoji: "🎵" },
    { keys: ["whatsapp chat", "whatsapp bubble"], pattern: "whatsapp", hue: 130, emoji: "💬" },
    { keys: ["discord logo", "discord chat"], pattern: "discord", hue: 280, emoji: "💬" },
    { keys: ["influencer camera", "content creator"], pattern: "creator", hue: 0, emoji: "📸" },
    { keys: ["kindle ebook", "ebook reader"], pattern: "ebook", hue: 220, emoji: "📖" },
    { keys: ["hoerbuch kopfhoerer", "audiobook headphones"], pattern: "audiobook", hue: 220, emoji: "🎧" },
    { keys: ["druckerpresse", "printing press gutenberg"], pattern: "press", hue: 30, emoji: "📰" },
    { keys: ["byzantin kuppel", "byzantine dome"], pattern: "byzantine", hue: 48, emoji: "⛪" },
    { keys: ["osmanischer palast", "ottoman palace"], pattern: "ottoman", hue: 48, emoji: "🕌" },
    { keys: ["chinese dragon dance", "drachentanz"], pattern: "dragondance", hue: 0, emoji: "🐉" },
    { keys: ["panda china", "giant panda bamboo"], pattern: "panda", hue: 0, emoji: "🐼" },
    { keys: ["usa flagge", "american flag"], pattern: "flagus", hue: 0, emoji: "🇺🇸" },
    { keys: ["kanada flagge", "canadian flag"], pattern: "flagca", hue: 0, emoji: "🇨🇦" },
    { keys: ["mexiko flagge", "mexican flag"], pattern: "flagmx", hue: 0, emoji: "🇲🇽" },
    { keys: ["sombrero", "mexican hat"], pattern: "sombrero", hue: 0, emoji: "👒" },
    { keys: ["mariachi", "mariachi band"], pattern: "mariachi", hue: 0, emoji: "🎺" },
    { keys: ["taco mexikanisch", "taco shell"], pattern: "taco", hue: 38, emoji: "🌮" },
    { keys: ["nasa rakete", "nasa rocket"], pattern: "nasa", hue: 220, emoji: "🚀" },
    { keys: ["esa logo", "esa space"], pattern: "esa", hue: 220, emoji: "🛰" },
    { keys: ["artemis rakete", "artemis moon rocket"], pattern: "artemis", hue: 220, emoji: "🚀" },
    { keys: ["lithium zelle", "battery cell lithium"], pattern: "batterycell", hue: 130, emoji: "🔋" },
    { keys: ["geothermie dampf", "geothermal steam"], pattern: "geothermal", hue: 200, emoji: "♨" },
    { keys: ["biogas tank", "biogas plant"], pattern: "biogas", hue: 130, emoji: "⛽" },
    { keys: ["carbon capture tower", "ccs plant"], pattern: "ccs", hue: 220, emoji: "🏭" },
    { keys: ["baum pflanzen", "tree planting"], pattern: "planting", hue: 130, emoji: "🌱" },
    { keys: ["smog stadt", "smog city"], pattern: "smog", hue: 220, emoji: "🌫" },
    { keys: ["saubere luft", "clean air leaf"], pattern: "cleanair", hue: 130, emoji: "🍃" },
    { keys: ["bienensterben", "bee decline"], pattern: "beedecline", hue: 48, emoji: "🐝" },
    { keys: ["regex symbol", "regex pattern"], pattern: "regex", hue: 280, emoji: "🔣" },
    { keys: ["lua script", "lua moon"], pattern: "lua", hue: 220, emoji: "🌙" },
    { keys: ["gezeiten turbine", "tidal turbine"], pattern: "tidal", hue: 200, emoji: "🌊" },
    { keys: ["elektrolyse wasserstoff", "electrolysis h2"], pattern: "electrolysis", hue: 200, emoji: "⚗" },
    { keys: ["eishockey", "ice hockey stick"], pattern: "hockey", hue: 200, emoji: "🏒" },
    { keys: ["cricket schlaeger", "cricket bat"], pattern: "cricket", hue: 30, emoji: "🏏" },
    { keys: ["rugby ball", "rugby sport"], pattern: "rugby", hue: 0, emoji: "🏉" },
    { keys: ["badminton", "badminton shuttle"], pattern: "badminton", hue: 0, emoji: "🏸" },
    { keys: ["tischtennis", "table tennis paddle"], pattern: "pingpong", hue: 0, emoji: "🏓" },
    { keys: ["golf ball", "golf sport"], pattern: "golf", hue: 130, emoji: "⛳" },
    { keys: ["minigolf", "mini golf hole"], pattern: "minigolf", hue: 130, emoji: "⛳" },
    { keys: ["schachuhr", "chess clock"], pattern: "chessclock", hue: 0, emoji: "⏱" },
    { keys: ["dame spiel", "checkers game"], pattern: "checkers", hue: 0, emoji: "⚫" },
    { keys: ["go steine", "go game stones"], pattern: "go", hue: 0, emoji: "⚫" },
    { keys: ["shogi brett", "shogi japan chess"], pattern: "shogi", hue: 0, emoji: "♟" },
    { keys: ["abakus", "abacus beads"], pattern: "abacus", hue: 30, emoji: "🧮" },
    { keys: ["taschenrechner", "calculator"], pattern: "calc", hue: 220, emoji: "🧮" },
    { keys: ["sanduhr", "hourglass time"], pattern: "hourglass", hue: 48, emoji: "⏳" },
    { keys: ["sonnenuhr", "sundial"], pattern: "sundial", hue: 48, emoji: "🕐" },
    { keys: ["pendeluhr", "pendulum clock"], pattern: "pendulum", hue: 30, emoji: "🕰" },
    { keys: ["wecker", "alarm clock"], pattern: "alarm", hue: 0, emoji: "⏰" },
    { keys: ["schreibmaschine", "typewriter"], pattern: "typewriter", hue: 30, emoji: "⌨" },
    { keys: ["fueller", "fountain pen"], pattern: "fountainpen", hue: 220, emoji: "🖊" },
    { keys: ["marker stift", "highlighter pen"], pattern: "marker", hue: 48, emoji: "🖍" },
    { keys: ["laserdrucker", "laser printer"], pattern: "printer", hue: 220, emoji: "🖨" },
    { keys: ["bueroklammer", "paperclip"], pattern: "paperclip", hue: 220, emoji: "📎" },
    { keys: ["hefter", "stapler office"], pattern: "stapler", hue: 220, emoji: "📎" },
    { keys: ["klebeband", "tape dispenser"], pattern: "tape", hue: 48, emoji: "📦" },
    { keys: ["aktentasche", "briefcase"], pattern: "briefcase", hue: 30, emoji: "💼" },
    { keys: ["krawatte", "necktie"], pattern: "tie", hue: 0, emoji: "👔" },
    { keys: ["smoking", "tuxedo suit"], pattern: "tuxedo", hue: 220, emoji: "🤵" },
    { keys: ["parfuem", "perfume bottle"], pattern: "perfume", hue: 330, emoji: "🧴" },
    { keys: ["lippenstift", "lipstick"], pattern: "lipstick", hue: 0, emoji: "💄" },
    { keys: ["nagellack", "nail polish"], pattern: "nailpolish", hue: 330, emoji: "💅" },
    { keys: ["badewanne", "bathtub"], pattern: "bathtub", hue: 200, emoji: "🛁" },
    { keys: ["dusche", "shower head"], pattern: "shower", hue: 200, emoji: "🚿" },
    { keys: ["seifenbubble", "soap bubbles"], pattern: "soapbubble", hue: 200, emoji: "🫧" },
    { keys: ["handtuch", "bath towel"], pattern: "towel", hue: 200, emoji: "🧺" },
    { keys: ["haartrockner", "hair dryer"], pattern: "hairdryer", hue: 0, emoji: "💨" },
    { keys: ["ampel", "traffic light"], pattern: "trafficlight", hue: 0, emoji: "🚦" },
    { keys: ["stoppschild", "stop sign"], pattern: "stopsign", hue: 0, emoji: "🛑" },
    { keys: ["zebrastreifen", "crosswalk"], pattern: "crosswalk", hue: 0, emoji: "🚸" },
    { keys: ["kreisverkehr", "roundabout"], pattern: "roundabout", hue: 130, emoji: "🔄" },
    { keys: ["tankstelle", "gas station"], pattern: "gasstation", hue: 0, emoji: "⛽" },
    { keys: ["ladestation", "ev charging station"], pattern: "evcharge", hue: 130, emoji: "🔌" },
    { keys: ["reifen", "car tire"], pattern: "tire", hue: 220, emoji: "🛞" },
    { keys: ["bagger", "excavator"], pattern: "excavator", hue: 48, emoji: "🚜" },
    { keys: ["kran bau", "construction crane"], pattern: "cranec", hue: 48, emoji: "🏗" },
    { keys: ["betonmischer", "cement mixer truck"], pattern: "cementmixer", hue: 220, emoji: "🚚" },
    { keys: ["warnkegel", "traffic cone"], pattern: "cone", hue: 0, emoji: "🔺" },
    { keys: ["farbeimer", "paint bucket"], pattern: "paintbucket", hue: 0, emoji: "🪣" },
    { keys: ["farbroller", "paint roller"], pattern: "paintroller", hue: 0, emoji: "🖌" },
    { keys: ["werkzeugkasten", "toolbox"], pattern: "toolbox", hue: 0, emoji: "🧰" },
    { keys: ["hammer werkzeug", "hammer tool"], pattern: "hammer", hue: 30, emoji: "🔨" },
    { keys: ["schraubenzieher", "screwdriver"], pattern: "screwdriver", hue: 0, emoji: "🪛" },
    { keys: ["bohrmaschine", "power drill"], pattern: "drill", hue: 220, emoji: "🔧" },
    { keys: ["massband", "measuring tape"], pattern: "measuringtape", hue: 48, emoji: "📏" },
    { keys: ["bauhelm", "hard hat"], pattern: "hardhat", hue: 48, emoji: "⛑" },
    { keys: ["bauplan", "blueprint"], pattern: "blueprint", hue: 220, emoji: "📐" },
    { keys: ["umzugswagen", "moving truck"], pattern: "movingtruck", hue: 0, emoji: "🚚" },
    { keys: ["kartons", "cardboard boxes"], pattern: "boxes", hue: 30, emoji: "📦" },
    { keys: ["luftpolsterfolie", "bubble wrap"], pattern: "bubblewrap", hue: 200, emoji: "🫧" },
    { keys: ["seidenstrasse", "silk road camel"], pattern: "silkroad", hue: 38, emoji: "🐪" },
    { keys: ["azteken pyramide", "aztec pyramid"], pattern: "aztec", hue: 30, emoji: "🛕" },
    { keys: ["maya tempel", "maya temple"], pattern: "maya", hue: 30, emoji: "🛕" },
    { keys: ["piñata", "pinata party"], pattern: "pinata", hue: 0, emoji: "🎉" },
    { keys: ["cinco de mayo", "mexican fiesta"], pattern: "fiesta", hue: 0, emoji: "🎊" },
    { keys: ["hockey puck", "hockey puck ice"], pattern: "puck", hue: 220, emoji: "🏒" },
    { keys: ["maple syrup", "ahornsirup"], pattern: "syrup", hue: 30, emoji: "🍁" },
    { keys: ["silicon valley", "tech campus"], pattern: "techcampus", hue: 220, emoji: "🏢" },
    { keys: ["hollywood stern", "walk of fame star"], pattern: "hollywoodstar", hue: 48, emoji: "⭐" },
    { keys: ["route 66", "highway road"], pattern: "highway", hue: 220, emoji: "🛣" },
    { keys: ["gelber school bus", "school bus usa"], pattern: "schoolbus", hue: 48, emoji: "🚌" },
    { keys: ["feuerwehrleiter", "fire ladder"], pattern: "ladder", hue: 0, emoji: "🪜" },
    { keys: ["polizei helm", "police helmet"], pattern: "policehelm", hue: 220, emoji: "👮" },
    { keys: ["rettungsboot", "lifeboat rescue"], pattern: "lifeboat", hue: 0, emoji: "🚤" },
    { keys: ["rettungsring", "life buoy"], pattern: "lifebuoy", hue: 0, emoji: "🛟" },
    { keys: ["feuerloescher", "fire extinguisher"], pattern: "extinguisher", hue: 0, emoji: "🧯" },
    { keys: ["rauchmelder", "smoke detector"], pattern: "detector", hue: 0, emoji: "🚨" },
    { keys: ["erste hilfe koffer", "first aid kit"], pattern: "firstaid", hue: 0, emoji: "🩹" },
    { keys: ["kruecke", "crutch medical"], pattern: "crutch", hue: 220, emoji: "🩼" },
    { keys: ["rollstuhl", "wheelchair"], pattern: "wheelchair", hue: 220, emoji: "♿" },
    { keys: ["hoergeraet", "hearing aid"], pattern: "hearingaid", hue: 220, emoji: "👂" },
    { keys: ["brille lesen", "reading glasses"], pattern: "readingglasses", hue: 220, emoji: "👓" },
    { keys: ["zahnspange", "dental braces"], pattern: "braces", hue: 0, emoji: "😬" },
    { keys: ["zahnbuerste", "toothbrush"], pattern: "toothbrush", hue: 200, emoji: "🪥" },
    { keys: ["zahnseide", "dental floss"], pattern: "floss", hue: 200, emoji: "🦷" },
    { keys: ["stethoskop", "stethoscope"], pattern: "stethoscope", hue: 220, emoji: "🩺" },
    { keys: ["spritze impfung", "syringe vaccine"], pattern: "syringe", hue: 200, emoji: "💉" },
    { keys: ["pflaster", "band aid"], pattern: "bandaid", hue: 0, emoji: "🩹" },
    { keys: ["krankenhaus kreuz", "hospital cross"], pattern: "hospital", hue: 0, emoji: "🏥" },
    { keys: ["apotheke", "pharmacy"], pattern: "pharmacy", hue: 0, emoji: "💊" },
    { keys: ["labor mikroskop", "lab microscope"], pattern: "labscope", hue: 220, emoji: "🔬" },
    { keys: ["petrischale", "petri dish"], pattern: "petri", hue: 200, emoji: "🧫" },
    { keys: ["testtube", "reagenzglas"], pattern: "testtube", hue: 130, emoji: "🧪" },
    { keys: ["molekuelmodell", "molecule model"], pattern: "molecule", hue: 280, emoji: "⚛" },
    { keys: ["magnet stab", "bar magnet"], pattern: "magnet", hue: 0, emoji: "🧲" },
    { keys: ["prisma licht", "light prism"], pattern: "prism", hue: 0, emoji: "🌈" },
    { keys: ["newton cradle", "newtons cradle"], pattern: "newtoncradle", hue: 220, emoji: "⚙" },
    { keys: ["perpetuum mobile", "perpetual motion"], pattern: "perpetual", hue: 220, emoji: "⚙" },
    { keys: ["windspiel", "wind chime"], pattern: "windchime", hue: 200, emoji: "🎐" },
    { keys: ["vogelhaus", "birdhouse"], pattern: "birdhouse", hue: 30, emoji: "🏠" },
    { keys: ["insektenhotel", "bug hotel"], pattern: "bughotel", hue: 30, emoji: "🐛" },
    { keys: ["regentonne", "rain barrel"], pattern: "rainbarrel", hue: 200, emoji: "🛢" },
    { keys: ["solar garten", "garden solar lamp"], pattern: "solarlamp", hue: 48, emoji: "💡" },
    { keys: ["windrad klein", "small wind turbine"], pattern: "smallwind", hue: 200, emoji: "🌬" },
    { keys: ["wärmepumpe", "heat pump"], pattern: "heatpump", hue: 200, emoji: "♨" },
    { keys: ["vue logo", "vue.js"], pattern: "vue", hue: 130, emoji: "💚" },
    { keys: ["angular logo", "angular shield"], pattern: "angular", hue: 0, emoji: "🅰" },
    { keys: ["flutter logo", "flutter bird"], pattern: "flutter", hue: 200, emoji: "🐦" },
    { keys: ["tailwind logo", "tailwind css"], pattern: "tailwind", hue: 200, emoji: "💨" },
    { keys: ["graphql logo", "graphql nodes"], pattern: "graphql", hue: 280, emoji: "◈" },
    { keys: ["oauth lock", "jwt token"], pattern: "jwt", hue: 220, emoji: "🔐" },
    { keys: ["aws cloud", "amazon aws"], pattern: "aws", hue: 30, emoji: "☁" },
    { keys: ["azure cloud", "microsoft azure"], pattern: "azure", hue: 220, emoji: "☁" },
    { keys: ["terraform logo", "terraform blocks"], pattern: "terraform", hue: 280, emoji: "🧱" },
    { keys: ["ci cd pipeline", "github actions"], pattern: "pipeline", hue: 220, emoji: "⚙" },
    { keys: ["serverless lambda", "lambda icon"], pattern: "lambda", hue: 30, emoji: "λ" },
    { keys: ["microservices boxes", "micro service"], pattern: "microsvc", hue: 220, emoji: "📦" },
    { keys: ["saas cloud app", "saas software"], pattern: "saas", hue: 200, emoji: "☁" },
    { keys: ["websocket live", "websocket arrow"], pattern: "websocket", hue: 130, emoji: "🔁" },
    { keys: ["vite logo", "vite lightning"], pattern: "vite", hue: 280, emoji: "⚡" },
    { keys: ["npm logo", "npm package"], pattern: "npm", hue: 0, emoji: "📦" },
    { keys: ["seo magnify", "seo ranking"], pattern: "seo", hue: 220, emoji: "🔍" },
    { keys: ["wordpress w", "wordpress cms"], pattern: "wordpress", hue: 220, emoji: "📝" },
    { keys: ["copywriting pen", "marketing copy"], pattern: "copywrite", hue: 220, emoji: "✍" },
    { keys: ["insulin pen", "diabetes insulin"], pattern: "insulin", hue: 200, emoji: "💉" },
    { keys: ["blutzucker messgeraet", "glucose meter"], pattern: "glucose", hue: 0, emoji: "📊" },
    { keys: ["allergie pollen", "hay fever"], pattern: "pollen", hue: 48, emoji: "🤧" },
    { keys: ["glutenfrei brot", "gluten free"], pattern: "glutenfree", hue: 38, emoji: "🍞" },
    { keys: ["physiotherapie band", "physio exercise"], pattern: "physio", hue: 200, emoji: "🩹" },
    { keys: ["long covid fatigue", "post covid"], pattern: "longcovid", hue: 220, emoji: "😴" },
    { keys: ["kita spielzeug", "kindergarten blocks"], pattern: "kita", hue: 0, emoji: "🧸" },
    { keys: ["elternzeit baby", "parental leave"], pattern: "parental", hue: 330, emoji: "👶" },
    { keys: ["bundesrat saal", "bundesrat chamber"], pattern: "bundesrat", hue: 220, emoji: "🏛" },
    { keys: ["verfassungsgericht", "bverfg karlsruhe"], pattern: "bverfg", hue: 0, emoji: "⚖" },
    { keys: ["demografie pyramide", "population pyramid"], pattern: "demography", hue: 220, emoji: "📊" },
    { keys: ["migration handshake", "integration people"], pattern: "integration", hue: 200, emoji: "🤝" },
    { keys: ["bundestag kuppel", "reichstag dome"], pattern: "reichstag", hue: 220, emoji: "🏛" },
    { keys: ["landtag gebaeude", "state parliament"], pattern: "landtag", hue: 220, emoji: "🏛" },
    { keys: ["wahlurne", "ballot box"], pattern: "ballot", hue: 220, emoji: "🗳" },
    { keys: ["stimmzettel", "voting paper"], pattern: "ballotpaper", hue: 0, emoji: "📄" },
    { keys: ["demonstration plakat", "protest sign"], pattern: "protest", hue: 0, emoji: "✊" },
    { keys: ["friedenstaube", "peace dove"], pattern: "peacedove", hue: 0, emoji: "🕊" },
    { keys: ["uno flagge", "un flag"], pattern: "unflag", hue: 220, emoji: "🇺🇳" },
    { keys: ["rotes kreuz", "red cross"], pattern: "redcross", hue: 0, emoji: "➕" },
    { keys: ["who emblem", "who health"], pattern: "who", hue: 220, emoji: "🏥" },
    { keys: ["impfpass", "vaccine passport"], pattern: "vaxpass", hue: 200, emoji: "📘" },
    { keys: ["maske medizin", "surgical mask"], pattern: "surgmask", hue: 200, emoji: "😷" },
    { keys: ["desinfektion", "hand sanitizer"], pattern: "sanitizer", hue: 200, emoji: "🧴" },
    { keys: ["krankenhaus bett", "hospital bed"], pattern: "hospitalbed", hue: 200, emoji: "🛏" },
    { keys: ["rollator", "walker frame"], pattern: "walker", hue: 220, emoji: "🦽" },
    { keys: ["pflegeheim", "nursing home"], pattern: "nursing", hue: 200, emoji: "🏠" },
    { keys: ["zahnarzt stuhl", "dental chair"], pattern: "dental", hue: 200, emoji: "🦷" },
    { keys: ["zahnspange metall", "braces teeth"], pattern: "bracesmetal", hue: 220, emoji: "😬" },
    { keys: ["roentgen bild", "xray scan"], pattern: "xray", hue: 200, emoji: "🩻" },
    { keys: ["mrt scan", "mri machine"], pattern: "mri", hue: 220, emoji: "🧲" },
    { keys: ["ultraschall", "ultrasound"], pattern: "ultrasound", hue: 200, emoji: "📡" },
    { keys: ["herz ekg", "ecg heart"], pattern: "ecg", hue: 0, emoji: "💓" },
    { keys: ["lungen symbol", "lungs health"], pattern: "lungs", hue: 0, emoji: "🫁" },
    { keys: ["gehirn medizin", "brain medical"], pattern: "brainmed", hue: 280, emoji: "🧠" },
    { keys: ["knochen bruch", "broken bone"], pattern: "brokenbone", hue: 0, emoji: "🦴" },
    { keys: ["gips verband", "cast arm"], pattern: "cast", hue: 0, emoji: "🩹" },
    { keys: ["blutgruppe", "blood type"], pattern: "bloodtype", hue: 0, emoji: "🩸" },
    { keys: ["spende herz", "organ donation"], pattern: "organdon", hue: 0, emoji: "❤" },
    { keys: ["apotheker mortar", "pharmacy mortar"], pattern: "mortar", hue: 0, emoji: "⚗" },
    { keys: ["kräutertee", "herbal tea"], pattern: "herbaltea", hue: 130, emoji: "🍵" },
    { keys: ["ingwer shot", "ginger shot"], pattern: "gingershot", hue: 30, emoji: "🫚" },
    { keys: ["smoothie gruen", "green smoothie"], pattern: "greensmoothie", hue: 130, emoji: "🥤" },
    { keys: ["protein shake", "protein drink"], pattern: "proteinshake", hue: 30, emoji: "🥤" },
    { keys: ["vegan bowl", "vegan food bowl"], pattern: "veganbowl", hue: 130, emoji: "🥗" },
    { keys: ["tofu block", "tofu food"], pattern: "tofu", hue: 0, emoji: "🧈" },
    { keys: ["tempeh", "tempeh soy"], pattern: "tempeh", hue: 30, emoji: "🫘" },
    { keys: ["seitan", "seitan meat"], pattern: "seitan", hue: 38, emoji: "🥩" },
    { keys: ["plant milk", "hafermilch"], pattern: "plantmilk", hue: 38, emoji: "🥛" },
    { keys: ["chia samen", "chia seeds"], pattern: "chia", hue: 220, emoji: "🌱" },
    { keys: ["quinoa bowl", "quinoa grain"], pattern: "quinoa", hue: 38, emoji: "🥣" },
    { keys: ["avocado toast", "avocado bread"], pattern: "avotoast", hue: 130, emoji: "🥑" },
    { keys: ["poke bowl fish", "poke hawaii"], pattern: "pokebowl", hue: 0, emoji: "🥙" },
    { keys: ["ceviche", "ceviche fish"], pattern: "ceviche", hue: 200, emoji: "🐟" },
    { keys: ["empanada", "empanada food"], pattern: "empanada", hue: 38, emoji: "🥟" },
    { keys: ["arepa", "arepa venezuela"], pattern: "arepa", hue: 38, emoji: "🫓" },
    { keys: ["feijoada", "feijoada brazil"], pattern: "feijoada", hue: 0, emoji: "🍲" },
    { keys: ["mate tee", "yerba mate"], pattern: "mate", hue: 130, emoji: "🧉" },
    { keys: ["dulce de leche", "caramel spread"], pattern: "dulce", hue: 30, emoji: "🍯" },
    { keys: ["churros", "churros sugar"], pattern: "churros", hue: 38, emoji: "🍩" },
    { keys: ["paella spanien", "paella seafood"], pattern: "paellapan", hue: 15, emoji: "🥘" },
    { keys: ["gazpacho", "gazpacho soup"], pattern: "gazpacho", hue: 0, emoji: "🍅" },
    { keys: ["tapas", "tapas plates"], pattern: "tapas", hue: 15, emoji: "🍢" },
    { keys: ["feta kaese", "feta cheese"], pattern: "feta", hue: 0, emoji: "🧀" },
    { keys: ["olivenoel", "olive oil"], pattern: "oliveoil", hue: 130, emoji: "🫒" },
    { keys: ["tzatziki", "tzatziki dip"], pattern: "tzatziki", hue: 200, emoji: "🥒" },
    { keys: ["souvlaki", "souvlaki greek"], pattern: "souvlaki", hue: 30, emoji: "🍢" },
    { keys: ["moussaka", "moussaka greek"], pattern: "moussaka", hue: 30, emoji: "🍆" },
    { keys: ["baklava", "baklava dessert"], pattern: "baklava", hue: 38, emoji: "🍯" },
    { keys: ["falafel wrap", "falafel pita"], pattern: "falafelwrap", hue: 38, emoji: "🥙" },
    { keys: ["shawarma spit", "doner spit"], pattern: "shawarmaspit", hue: 30, emoji: "🥙" },
    { keys: ["moroccan tagine", "tagine pot"], pattern: "tagine", hue: 15, emoji: "🍲" },
    { keys: ["couscous marokko", "couscous bowl"], pattern: "couscousbowl", hue: 38, emoji: "🥘" },
    { keys: ["harissa", "harissa sauce"], pattern: "harissa", hue: 0, emoji: "🌶" },
    { keys: ["mint tea morocco", "moroccan tea"], pattern: "minttea", hue: 130, emoji: "🍵" },
    { keys: ["rug kilim", "oriental rug"], pattern: "kilim", hue: 0, emoji: "🧶" },
    { keys: ["hookah shisha", "shisha pipe"], pattern: "shisha", hue: 220, emoji: "💨" },
    { keys: ["belly dance", "oriental dance"], pattern: "bellydance", hue: 330, emoji: "💃" },
    { keys: ["oud instrument", "oud lute"], pattern: "oud", hue: 30, emoji: "🎵" },
    { keys: ["sitar", "sitar india"], pattern: "sitar", hue: 30, emoji: "🎵" },
    { keys: ["tabla", "tabla drums"], pattern: "tabla", hue: 30, emoji: "🥁" },
    { keys: ["bollywood", "bollywood dance"], pattern: "bollywood", hue: 0, emoji: "🎬" },
    { keys: ["henna hand", "mehndi henna"], pattern: "henna", hue: 0, emoji: "🤚" },
    { keys: ["rangoli", "rangoli pattern"], pattern: "rangoli", hue: 0, emoji: "🎨" },
    { keys: ["mandala color", "mandala art"], pattern: "mandala", hue: 280, emoji: "🕉" },
    { keys: ["zen stein", "zen rock garden"], pattern: "zenrock", hue: 220, emoji: "🪨" },
    { keys: ["torii gate", "torii japan"], pattern: "torii", hue: 0, emoji: "⛩" },
    { keys: ["pagode tempel", "pagoda temple"], pattern: "pagoda", hue: 0, emoji: "🏯" },
    { keys: ["koi fische", "koi carp"], pattern: "koifish", hue: 0, emoji: "🐟" },
    { keys: ["sumo ring", "sumo wrestler"], pattern: "sumo", hue: 0, emoji: "🤼" },
    { keys: ["kabuki maske", "kabuki mask"], pattern: "kabuki", hue: 0, emoji: "🎭" },
    { keys: ["ninja stern", "ninja weapon"], pattern: "ninjastar", hue: 220, emoji: "✴" },
    { keys: ["samurai helm", "samurai helmet"], pattern: "samhelm", hue: 0, emoji: "⛑" },
    { keys: ["bonsai kleinbaum", "bonsai small"], pattern: "bonsais", hue: 130, emoji: "🌳" },
    { keys: ["sushi set", "sushi platter"], pattern: "sushiset", hue: 0, emoji: "🍣" },
    { keys: ["ramen schale", "ramen bowl big"], pattern: "ramenbowl", hue: 30, emoji: "🍜" },
    { keys: ["mochi", "mochi dessert"], pattern: "mochi", hue: 0, emoji: "🍡" },
    { keys: ["dorayaki", "dorayaki pancake"], pattern: "dorayaki", hue: 38, emoji: "🥞" },
    { keys: ["taiyaki", "taiyaki fish cake"], pattern: "taiyaki", hue: 38, emoji: "🐟" },
    { keys: ["bubble tea shop", "boba shop"], pattern: "bobashop", hue: 330, emoji: "🧋" },
    { keys: ["night market", "asia night market"], pattern: "nightmarket", hue: 0, emoji: "🏮" },
    { keys: ["sky lantern", "kongming lantern"], pattern: "skylantern", hue: 48, emoji: "🏮" },
    { keys: ["dragon boat", "drachenboot"], pattern: "dragonboat", hue: 0, emoji: "🐉" },
    { keys: ["lion dance", "loewentanz"], pattern: "lionedance", hue: 0, emoji: "🦁" },
    { keys: ["fan chinese", "chinese fan"], pattern: "chinesefan", hue: 0, emoji: "🪭" },
    { keys: ["calligraphy brush", "pinsel kalligraphie"], pattern: "callibrush", hue: 220, emoji: "🖌" },
    { keys: ["ink stone", "tuschstein"], pattern: "inkstone", hue: 220, emoji: "🪨" },
    { keys: ["seal stamp", "siegel stempel"], pattern: "sealstamp", hue: 0, emoji: "🔴" },
    { keys: ["jade statue", "jade figur"], pattern: "jadestatue", hue: 130, emoji: "🗿" },
    { keys: ["silk scroll", "seidenrolle"], pattern: "silkscroll", hue: 0, emoji: "📜" },
    { keys: ["tea ceremony", "teezeremonie"], pattern: "teaceremony", hue: 130, emoji: "🍵" },
    { keys: ["incense stick", "raeucherstaebchen"], pattern: "incense", hue: 30, emoji: "🪔" },
    { keys: ["prayer beads", "gebetskette"], pattern: "prayerbeads", hue: 30, emoji: "📿" },
    { keys: ["candle church", "kerze kirche"], pattern: "churchcandle", hue: 48, emoji: "🕯" },
    { keys: ["stained glass", "bleiglas fenster"], pattern: "stainedglass", hue: 280, emoji: "🪟" },
    { keys: ["organ pipes", "orgel pfeifen"], pattern: "organ", hue: 220, emoji: "🎹" },
    { keys: ["choir book", "chornoten"], pattern: "choirbook", hue: 0, emoji: "📖" },
    { keys: ["bell tower", "glockenturm"], pattern: "belltower", hue: 220, emoji: "🔔" },
    { keys: ["monastery", "kloster berg"], pattern: "monastery", hue: 220, emoji: "⛪" },
    { keys: ["pilgrim staff", "pilgerstab"], pattern: "pilgrim", hue: 30, emoji: "🥾" },
    { keys: ["shell camino", "jakobsmuschel"], pattern: "camino", hue: 0, emoji: "🐚" },
    { keys: ["rosary", "rosenkranz"], pattern: "rosary", hue: 0, emoji: "📿" },
    { keys: ["menorah", "menora kerze"], pattern: "menorah", hue: 48, emoji: "🕎" },
    { keys: ["star david", "davidstern"], pattern: "starofdavid", hue: 220, emoji: "✡" },
    { keys: ["kippa", "jarmulke"], pattern: "kippa", hue: 220, emoji: "🎩" },
    { keys: ["torah scroll", "torarolle"], pattern: "torah", hue: 0, emoji: "📜" },
    { keys: ["crescent moon star", "halbmond stern"], pattern: "crescentstar", hue: 48, emoji: "☪" },
    { keys: ["prayer mat", "gebetsteppich"], pattern: "prayermat", hue: 0, emoji: "🕌" },
    { keys: ["ihram", "pilger weiss"], pattern: "ihram", hue: 0, emoji: "👘" },
    { keys: ["kaaba", "kaaba mekka"], pattern: "kaaba", hue: 220, emoji: "🕋" },
    { keys: ["lotus temple", "lotustempel"], pattern: "lotustemple", hue: 330, emoji: "🪷" },
    { keys: ["om symbol", "aum zeichen"], pattern: "om", hue: 280, emoji: "🕉" },
    { keys: ["buddha statue", "buddha figur"], pattern: "buddha", hue: 48, emoji: "🧘" },
    { keys: ["prayer wheel", "gebetsmuehle"], pattern: "prayerwheel", hue: 0, emoji: "☸" },
    { keys: ["stupa", "buddhist stupa"], pattern: "stupa", hue: 0, emoji: "🛕" },
    { keys: ["singing bowl", "klangschale"], pattern: "singingbowl", hue: 48, emoji: "🔔" },
    { keys: ["yoga mat roll", "yogamatte"], pattern: "yogamat", hue: 160, emoji: "🧘" },
    { keys: ["meditation cushion", "meditationskissen"], pattern: "medcushion", hue: 280, emoji: "🧘" },
    { keys: ["incense holder", "raeucherkegel"], pattern: "incenseholder", hue: 30, emoji: "🪔" },
    { keys: ["chakra symbol", "chakra kreis"], pattern: "chakra", hue: 280, emoji: "🔮" },
    { keys: ["tarot spread", "tarot legung"], pattern: "tarotspread", hue: 280, emoji: "🃏" },
    { keys: ["crystal healing", "heilstein"], pattern: "healcrystal", hue: 280, emoji: "💎" },
    { keys: ["astrology chart", "sternkarte"], pattern: "astrochart", hue: 220, emoji: "♈" },
    { keys: ["zodiac aries", "widder sternzeichen"], pattern: "zodiac", hue: 0, emoji: "♈" },
    { keys: ["horoscope scroll", "horoskop"], pattern: "horoscope", hue: 280, emoji: "📜" },
    { keys: ["full moon ritual", "vollmond ritual"], pattern: "moonritual", hue: 220, emoji: "🌕" },
    { keys: ["witch hat", "hexenhut"], pattern: "witchhat", hue: 280, emoji: "🧙" },
    { keys: ["cauldron", "hexenkessel"], pattern: "cauldron", hue: 220, emoji: "🫕" },
    { keys: ["potion bottle", "trank flasche"], pattern: "potion", hue: 280, emoji: "🧪" },
    { keys: ["spell book", "zauberbuch"], pattern: "spellbook", hue: 280, emoji: "📖" },
    { keys: ["wand magic", "zauberstab holz"], pattern: "magicwand", hue: 280, emoji: "🪄" },
    { keys: ["fairy dust", "feenstaub"], pattern: "fairydust", hue: 280, emoji: "✨" },
    { keys: ["unicorn rainbow", "einhorn regenbogen"], pattern: "unicornrain", hue: 330, emoji: "🦄" },
    { keys: ["dragon egg", "drachenei"], pattern: "dragonegg", hue: 0, emoji: "🥚" },
    { keys: ["knight shield crest", "ritterschild wappen"], pattern: "knightshield", hue: 220, emoji: "🛡" },
    { keys: ["castle gate", "burgtor"], pattern: "castlegate", hue: 220, emoji: "🏰" },
    { keys: ["drawbridge", "ziehbruecke"], pattern: "drawbridge", hue: 30, emoji: "🌉" },
    { keys: ["moat water", "burggraben wasser"], pattern: "moat", hue: 200, emoji: "💧" },
    { keys: ["catapult", "katapult mittelalter"], pattern: "catapult", hue: 30, emoji: "🏹" },
    { keys: ["trebuchet", "blide schleuder"], pattern: "trebuchet", hue: 30, emoji: "🏹" },
    { keys: ["siege tower", "belagerungsturm"], pattern: "siegetower", hue: 30, emoji: "🏰" },
    { keys: ["chain mail", "kettenhemd"], pattern: "chainmail", hue: 220, emoji: "🛡" },
    { keys: ["plate armor", "plattenruestung"], pattern: "platearmor", hue: 220, emoji: "🛡" },
    { keys: ["jousting lance", "turnierlanze"], pattern: "joust", hue: 0, emoji: "🏇" },
    { keys: ["heraldic lion", "wappen loewe"], pattern: "heraldic", hue: 38, emoji: "🦁" },
    { keys: ["royal scepter", "zepter koenig"], pattern: "scepter", hue: 48, emoji: "👑" },
    { keys: ["throne gold", "goldener thron"], pattern: "throne", hue: 48, emoji: "👑" },
    { keys: ["royal decree", "koenigliches edikt"], pattern: "decree", hue: 38, emoji: "📜" },
    { keys: ["wax seal", "wachssiegel"], pattern: "waxseal", hue: 0, emoji: "🔴" },
    { keys: ["scroll map treasure", "schatzkarte"], pattern: "treasuremap", hue: 38, emoji: "🗺" },
    { keys: ["compass rose map", "kompasrose"], pattern: "compassrose", hue: 0, emoji: "🧭" },
    { keys: ["pirate flag", "piratenflagge"], pattern: "pirateflag", hue: 220, emoji: "🏴" },
    { keys: ["treasure chest open", "schatztruhe offen"], pattern: "treasureopen", hue: 48, emoji: "💰" },
    { keys: ["gold doubloon", "goldmuenze"], pattern: "doubloon", hue: 48, emoji: "🪙" },
    { keys: ["ship wheel", "schiffsrad"], pattern: "shipwheel", hue: 30, emoji: "☸" },
    { keys: ["fishing net boat", "fischnetz boot"], pattern: "fishnet", hue: 200, emoji: "🎣" },
    { keys: ["lighthouse beam", "leuchtturm strahl"], pattern: "lighthousebeam", hue: 48, emoji: "🗼" },
    { keys: ["harbor cranes", "hafen kraene"], pattern: "harborcrane", hue: 220, emoji: "🏗" },
    { keys: ["container ship", "containerschiff"], pattern: "containership", hue: 220, emoji: "🚢" },
    { keys: ["cargo plane", "frachtflugzeug"], pattern: "cargoplane", hue: 220, emoji: "✈" },
    { keys: ["delivery drone", "lieferdrohne"], pattern: "deliverydrone", hue: 220, emoji: "🚁" },
    { keys: ["warehouse boxes", "lager kartons"], pattern: "warehouse", hue: 30, emoji: "📦" },
    { keys: ["forklift", "gabelstapler"], pattern: "forklift", hue: 48, emoji: "🚜" },
    { keys: ["pallet jack", "hubwagen"], pattern: "palletjack", hue: 220, emoji: "🛒" },
    { keys: ["barcode scanner", "barcodescanner"], pattern: "barcodescan", hue: 220, emoji: "📱" },
    { keys: ["cash register", "kasse laden"], pattern: "cashregister", hue: 0, emoji: "🧾" },
    { keys: ["shopping cart", "einkaufswagen"], pattern: "shopcart", hue: 220, emoji: "🛒" },
    { keys: ["sale tag", "sonderangebot"], pattern: "saletag", hue: 0, emoji: "🏷" },
    { keys: ["gift card", "gutschein karte"], pattern: "giftcard", hue: 0, emoji: "💳" },
    { keys: ["loyalty card", "bonuskarte"], pattern: "loyaltycard", hue: 220, emoji: "💳" },
    { keys: ["receipt long", "kassenbon lang"], pattern: "receipt", hue: 0, emoji: "🧾" },
    { keys: ["coin purse", "geldboerse muenzen"], pattern: "coinpurse", hue: 48, emoji: "👛" },
    { keys: ["bank vault", "tresor bank"], pattern: "bankvault", hue: 220, emoji: "🏦" },
    { keys: ["atm machine", "geldautomat"], pattern: "atm", hue: 220, emoji: "🏧" },
    { keys: ["stock ticker", "boersenanzeige"], pattern: "ticker", hue: 130, emoji: "📈" },
    { keys: ["gold bar stack", "goldbarren stapel"], pattern: "goldbars", hue: 48, emoji: "🪙" },
    { keys: ["diamond ring box", "diamantring schachtel"], pattern: "diamondring", hue: 280, emoji: "💍" },
    { keys: ["linux", "ubuntu", "penguin linux"], pattern: "penguin", hue: 220, emoji: "🐧" },
    { keys: ["windows", "windows logo", "microsoft window"], pattern: "window", hue: 210, emoji: "🪟" },
    { keys: ["macos", "apple mac", "mac logo"], pattern: "apple", hue: 0, emoji: "🍎" },
    { keys: ["blender", "3d blender", "blender logo"], pattern: "cube", hue: 25, emoji: "🧊" },
    { keys: ["starlink", "satellite dish starlink"], pattern: "satellite", hue: 220, emoji: "📡" },
    { keys: ["5g tower", "5g mast", "cell tower"], pattern: "tower", hue: 220, emoji: "📶" },
    { keys: ["etf chart", "stock chart", "aktien chart"], pattern: "chart", hue: 130, emoji: "📈" },
    { keys: ["inflation", "money inflation"], pattern: "coin", hue: 0, emoji: "💸" },
    { keys: ["tornado funnel", "tornado storm funnel"], pattern: "storm", hue: 220, emoji: "🌪" },
    { keys: ["earthquake crack", "erdbeben riss"], pattern: "quake", hue: 30, emoji: "🫨" },
    { keys: ["ozone layer", "ozonloch"], pattern: "shield", hue: 200, emoji: "🛡" },
    { keys: ["nuclear plant", "atomkraftwerk"], pattern: "radiation", hue: 130, emoji: "☢" },
    { keys: ["paralympics", "para sport", "wheelchair sport"], pattern: "wheelchair", hue: 220, emoji: "♿" },
    { keys: ["speedrun", "speedrun timer"], pattern: "clock", hue: 280, emoji: "⏱" },
    { keys: ["meme", "meme face", "internet meme"], pattern: "smile", hue: 45, emoji: "😂" },
    { keys: ["streaming", "netflix screen", "play button stream"], pattern: "play", hue: 0, emoji: "📺" },
    { keys: ["camera photo", "fotografie kamera"], pattern: "camera", hue: 220, emoji: "📷" },
    { keys: ["immunsystem", "immune shield", "antibody"], pattern: "shield", hue: 130, emoji: "🛡" },
    { keys: ["schengen", "eu passport", "passport stamp"], pattern: "passport", hue: 220, emoji: "🛂" },
    { keys: ["journalism", "newspaper press"], pattern: "paper", hue: 0, emoji: "📰" },
    { keys: ["whistleblower", "whistle blow"], pattern: "megaphone", hue: 220, emoji: "📢" },
    { keys: ["laravel", "php elephant"], pattern: "elephant", hue: 0, emoji: "🐘" },
    { keys: ["svelte", "svelte logo"], pattern: "flame", hue: 0, emoji: "🔥" },
    { keys: ["spring boot", "spring leaf java"], pattern: "leaf", hue: 130, emoji: "🍃" },
    { keys: ["rag ai", "retrieval document"], pattern: "book", hue: 220, emoji: "📚" },
    { keys: ["zero trust", "security shield lock"], pattern: "lock", hue: 220, emoji: "🔐" },
    { keys: ["einstein", "e=mc2 formula"], pattern: "atom", hue: 220, emoji: "🧪" },
    { keys: ["pflege", "nurse care", "pflegekraft"], pattern: "cross", hue: 200, emoji: "🩺" },
    { keys: ["bafoeg", "student money", "studienfinanzierung"], pattern: "graduation", hue: 130, emoji: "🎓" },
    { keys: ["montessori", "montessori blocks"], pattern: "blocks", hue: 45, emoji: "🧱" },
    { keys: ["accessibility", "wheelchair ramp", "barrierefreiheit"], pattern: "wheelchair", hue: 220, emoji: "♿" },
    { keys: ["biodiversity", "artensterben butterfly"], pattern: "butterfly", hue: 45, emoji: "🦋" },
    { keys: ["who logo", "world health"], pattern: "cross", hue: 200, emoji: "🏥" },
    { keys: ["uno flag", "united nations"], pattern: "globe", hue: 220, emoji: "🇺🇳" },
    { keys: ["next.js", "nextjs logo"], pattern: "letter", hue: 0, emoji: "▲" },
    { keys: ["nuxt", "nuxt logo"], pattern: "letter", hue: 130, emoji: "◆" },
    { keys: ["prisma", "prisma orm"], pattern: "diamond", hue: 280, emoji: "◇" },
    { keys: ["supabase", "supabase logo"], pattern: "bolt", hue: 130, emoji: "⚡" },
    { keys: ["firebase", "firebase flame"], pattern: "flame", hue: 25, emoji: "🔥" },
    { keys: ["redis", "redis logo"], pattern: "stack", hue: 0, emoji: "📚" },
    { keys: ["kafka", "apache kafka"], pattern: "stream", hue: 0, emoji: "📨" },
    { keys: ["ransomware", "lock encrypt"], pattern: "lock", hue: 0, emoji: "🔒" },
    { keys: ["web3", "web3 cube"], pattern: "cube", hue: 280, emoji: "🌐" },
    { keys: ["nft art", "nft token"], pattern: "hexagon", hue: 280, emoji: "🖼" },
    { keys: ["metaverse", "vr world"], pattern: "vr", hue: 280, emoji: "🕶" },
    { keys: ["ev charger", "ladestation auto"], pattern: "bolt", hue: 130, emoji: "🔌" },
    { keys: ["heat pump", "waermepumpe"], pattern: "fan", hue: 200, emoji: "♨" },
    { keys: ["copilot", "github copilot"], pattern: "robot", hue: 220, emoji: "🤖" },
    { keys: ["midjourney", "ai art gen"], pattern: "paint", hue: 280, emoji: "🎨" },
    { keys: ["pomodoro timer", "tomato timer"], pattern: "tomato", hue: 0, emoji: "🍅" },
    { keys: ["mindmap", "mind map nodes"], pattern: "tree", hue: 130, emoji: "🧠" },
    { keys: ["fair trade", "fairtrade coffee"], pattern: "cup", hue: 30, emoji: "☕" },
    { keys: ["hyperloop", "vacuum train"], pattern: "train", hue: 220, emoji: "🚄" },
    { keys: ["urban garden", "balkon garten"], pattern: "flower", hue: 130, emoji: "🌱" },
    { keys: ["bee hive", "imkerei bienen"], pattern: "bee", hue: 45, emoji: "🐝" },
    { keys: ["migraine", "migraene kopf"], pattern: "head", hue: 280, emoji: "🤕" },
    { keys: ["vitamin d", "sun vitamin"], pattern: "sun", hue: 45, emoji: "☀" },
    { keys: ["mrna vaccine", "mrna impfstoff"], pattern: "syringe", hue: 200, emoji: "💉" },
    { keys: ["epigenetics", "epigenetik dna"], pattern: "dna", hue: 280, emoji: "🧬" },
    { keys: ["stem cell", "stammzelle"], pattern: "cell", hue: 200, emoji: "🔬" },
    { keys: ["telemedicine", "telemedizin video"], pattern: "video", hue: 220, emoji: "📹" },
    { keys: ["adhd brain", "adhs gehirn"], pattern: "brain", hue: 280, emoji: "🧠" },
    { keys: ["cookie consent", "cookie banner"], pattern: "cookie", hue: 30, emoji: "🍪" },
    { keys: ["eu ai act", "ki gesetz"], pattern: "scale", hue: 220, emoji: "⚖" },
    { keys: ["creative commons", "cc license"], pattern: "cc", hue: 0, emoji: "©" },
    { keys: ["circular economy", "kreislauf pfeil"], pattern: "recycle", hue: 130, emoji: "♻" },
    { keys: ["right repair", "reparatur schraube"], pattern: "wrench", hue: 220, emoji: "🔧" },
    { keys: ["light pollution", "lichtverschmutzung"], pattern: "city", hue: 45, emoji: "🌃" },
    { keys: ["journaling", "tagebuch buch"], pattern: "book", hue: 30, emoji: "📔" },
    { keys: ["public speaking", "rhetorik mikro"], pattern: "mic", hue: 220, emoji: "🎤" },
    { keys: ["openai", "chatgpt logo", "open ai"], pattern: "robot", hue: 160, emoji: "🤖" },
    { keys: ["claude", "anthropic ai"], pattern: "book", hue: 30, emoji: "📘" },
    { keys: ["gemini", "google gemini"], pattern: "stars", hue: 220, emoji: "♊" },
    { keys: ["llama", "meta llama"], pattern: "llama", hue: 38, emoji: "🦙" },
    { keys: ["mistral", "mistral ai"], pattern: "wind", hue: 200, emoji: "💨" },
    { keys: ["stable diffusion", "sd xl art"], pattern: "paint", hue: 280, emoji: "🎨" },
    { keys: ["embedding vector", "semantic vector"], pattern: "helix", hue: 280, emoji: "📊" },
    { keys: ["vector database", "pinecone db"], pattern: "stack", hue: 130, emoji: "🗄" },
    { keys: ["fine tuning", "lora training"], pattern: "gear", hue: 220, emoji: "⚙" },
    { keys: ["context window", "token limit"], pattern: "scroll", hue: 45, emoji: "📜" },
    { keys: ["semiconductor", "silicon chip"], pattern: "chip", hue: 220, emoji: "💾" },
    { keys: ["chip shortage", "chip crisis"], pattern: "warning", hue: 0, emoji: "⚠" },
    { keys: ["buddhism basics", "buddha lotus"], pattern: "lotus", hue: 330, emoji: "🪷" },
    { keys: ["hindu om", "hindu temple"], pattern: "om", hue: 280, emoji: "🕉" },
    { keys: ["islam crescent", "mosque dome"], pattern: "crescentstar", hue: 48, emoji: "☪" },
    { keys: ["christian cross", "church cross"], pattern: "cross", hue: 220, emoji: "✝" },
    { keys: ["judaism star", "synagogue star"], pattern: "starofdavid", hue: 220, emoji: "✡" },
    { keys: ["tai chi", "taiji movement"], pattern: "yin", hue: 200, emoji: "☯" },
    { keys: ["erasmus", "erasmus flag eu"], pattern: "globe", hue: 220, emoji: "🇪🇺" },
    { keys: ["duolingo", "language owl"], pattern: "owl", hue: 130, emoji: "🦉" },
    { keys: ["buergergeld", "citizen money"], pattern: "coin", hue: 48, emoji: "💶" },
    { keys: ["wohngeld", "housing benefit"], pattern: "house", hue: 30, emoji: "🏠" },
    { keys: ["compound interest", "zinseszins chart"], pattern: "chart", hue: 130, emoji: "📈" },
    { keys: ["defi", "liquidity pool"], pattern: "hexagon", hue: 280, emoji: "⬡" },
    { keys: ["shopify", "ecommerce bag"], pattern: "shopcart", hue: 130, emoji: "🛍" },
    { keys: ["dropshipping", "parcel ship"], pattern: "package", hue: 30, emoji: "📦" },
    { keys: ["esg leaf", "green investing"], pattern: "leaf", hue: 130, emoji: "🌿" },
    { keys: ["digital carbon", "co2 cloud"], pattern: "cloud", hue: 200, emoji: "☁" },
    { keys: ["passive income", "dividend coin"], pattern: "doubloon", hue: 48, emoji: "🪙" },
    { keys: ["pension retire", "altersvorsorge"], pattern: "clock", hue: 40, emoji: "🕰" },
    { keys: ["rent cap", "mietpreisbremse"], pattern: "scale", hue: 220, emoji: "⚖" },
    { keys: ["solid state battery", "festkoerper akku"], pattern: "bolt", hue: 200, emoji: "🔋" },
    { keys: ["perovskite solar", "perowskit panel"], pattern: "sun", hue: 45, emoji: "☀" },
    { keys: ["vertical farm tower", "vertical farming"], pattern: "tower", hue: 130, emoji: "🌱" },
    { keys: ["rewilding forest", "wild nature"], pattern: "tree", hue: 130, emoji: "🌳" },
    { keys: ["mycelium net", "fungi packaging"], pattern: "mushroom", hue: 30, emoji: "🍄" },
    { keys: ["neuromorphic chip", "brain chip"], pattern: "brain", hue: 280, emoji: "🧠" },
    { keys: ["post quantum lock", "pqc crypto"], pattern: "lock", hue: 220, emoji: "🔐" },
    { keys: ["social engineering", "phishing hook"], pattern: "fish", hue: 200, emoji: "🎣" },
    { keys: ["osint search", "open intelligence"], pattern: "search", hue: 220, emoji: "🔍" },
    { keys: ["zettelkasten", "slip box notes"], pattern: "cards", hue: 45, emoji: "🗂" },
    { keys: ["notion page", "notion app"], pattern: "page", hue: 0, emoji: "📄" },
    { keys: ["obsidian crystal", "obsidian vault"], pattern: "crystal", hue: 280, emoji: "🖤" },
    { keys: ["gtd inbox", "getting things done"], pattern: "inbox", hue: 220, emoji: "📥" },
    { keys: ["eisenhower matrix", "priority grid"], pattern: "grid", hue: 0, emoji: "▦" },
    { keys: ["latex document", "overleaf paper"], pattern: "paper", hue: 0, emoji: "📃" },
    { keys: ["plagiarism warning", "plagiat"], pattern: "warning", hue: 0, emoji: "🚫" },
    { keys: ["apa citation", "reference list"], pattern: "book", hue: 220, emoji: "📚" }
  ];

  var MOTIF_COUNT = 3600;

  var MOTIF_EXTRA_NAMES = [
    "Adler", "Albatros", "Amsel", "Antilope", "Apfelsine", "Asteroid", "Aurora", "Bambus", "Basilikum", "Bergsee",
    "Bernstein", "Birkenwald", "Blitzsee", "Blumenwiese", "Bonsai-Baum", "Brombeere", "Burggraben", "Camping", "Canyon", "Cappuccino",
    "Cello", "Citrone", "Cocktail", "Comet", "Coral", "Corgi", "Couscous", "Creme", "Dalmatiner", "Dattel",
    "Delfin-Sprung", "Diamant", "Dino-Ei", "Dohle", "Dorf", "Drachenboot", "Düne", "Efeu", "Eiche", "Eisberg",
    "Eiskristall", "Elfenbein", "Elster", "Eukalyptus", "Falke", "Farn", "Feld", "Fichte", "Fischernetz", "Fjord",
    "Flamingo-See", "Flieder", "Flohmarkt", "Fluss", "Fohlen", "Forsythie", "Fuchs-Spur", "Gans", "Garn", "Ginkgo",
    "Gletschersee", "Goldfisch", "Granit", "Grapefruit", "Grizzly", "Grotte", "Grünkohl", "Gänseblümchen", "Hafen", "Hagel",
    "Hai-Riff", "Hammock", "Harfe", "Haselnuss", "Hazel", "Heide", "Heu", "Hibiskus", "Hochzeit", "Holzhaus",
    "Honigbiene", "Hufeisen", "Hummel", "Hyazinthe", "Inselhütte", "Iris", "Jade", "Jasmin", "Juwel", "Kaktusblüte",
    "Kamin", "Kanu-Fahrt", "Kapelle", "Karamell", "Karfunkel", "Kastanie", "Kater", "Kiesel", "Kiefer", "Kieselstrand",
    "Kirschblüte", "Kiwi", "Klee", "Klippe", "Knospe", "Kobold", "Kolibri-Blume", "Kometenschweif", "Kornfeld", "Krabbenküste",
    "Kristallhöhle", "Krokus", "Küste", "Lavendel", "Leuchtturm-Nacht", "Lichtung", "Lilie", "Linde", "Luchs", "Lupine",
    "Maisfeld", "Mandarine", "Mangrove", "Marmor", "Marslandschaft", "Matsch", "Meadow", "Meteorregen", "Mistel", "Mohnblume",
    "Mondsichel", "Moor", "Muschelstrand", "Nebelmeer", "Nektarine", "Nuss", "Ocker", "Olive", "Opal", "Orchidee",
    "Ozean", "Palmenstrand", "Pampas", "Papagei-Baum", "Passion", "Pastinake", "Pfauenfeder", "Pilgerweg", "Pinienwald", "Polarlicht-See",
    "Portwein", "Quarz", "Quell", "Rapsfeld", "Rauch", "Rebhuhn", "Reh", "Riff", "Ringelblume", "Robbe",
    "Roggensaat", "Rose-Garten", "Rotkehlchen", "Rubinrot", "Rübe", "Safran", "Salbei", "Salzwiese", "Sanddüne", "Saphir",
    "Sardine", "Sattel", "Savanne", "Schilf", "Schneeflocke", "Schneehase", "Schneekugel", "Seerose", "Seetang", "Silberfisch",
    "Smaragd", "Sonnentau", "Spiegelung", "Spirale", "Steinbock", "Steppe", "Sturmwolke", "Sumpf", "Tanne", "Tautropfen",
    "Teerose", "Terrasse", "Thymian", "Titan", "Topas", "Torf", "Tornado-Wolke", "Traube", "Tulpenfeld", "Turmalin",
    "Ufer", "Ulme", "Urwald", "Veilchen", "Vulkanasche", "Wacholder", "Waldlicht", "Waldweg", "Wanderweg", "Wasserlilie",
    "Weide", "Weinberg", "Welle", "Wiesenblume", "Wildblume", "Wolfspfote", "Wolkenmeer", "Wüstenrose", "Yucca", "Zeder",
    "Zinnia",     "Zypressen", "Zwergplanet",
    "Abendrot", "Ahornblatt", "Ahornwald", "Akazie", "Algenwald", "Alpenrose", "Altstadt", "Amethyst", "Anemonen", "Anglerfisch",
    "Apfelbaum", "Apfelkuchen", "Arktis", "Aster", "Asternblume", "Atlantik", "Aurora-See", "Bachlauf", "Backstein", "Bambushain",
    "Basalt", "Bergbach", "Bergdorf", "Berggipfel", "Bergkette", "Bergpfad", "Bergsee-Spiegel", "Bernsteinstrand", "Birke", "Blattwerk",
    "Blitzregen", "Blumenbeet", "Blumenkohl", "Blütenmeer", "Bootshafen", "Brombeerstrauch", "Brunnenplatz", "Buchenwald", "Buntspecht", "Buschfeuer",
    "Campingplatz", "Canyonwand", "Chili-Feld", "Chrysantheme", "Citrusbaum", "Cliff-Kante", "Coral Bay", "Cottage", "Dachgarten", "Dämmerung",
    "Dattelpalme", "Delta", "Diamantstaub", "Distel", "Donnerwolke", "Dorfplatz", "Drachenfels", "Dünengras", "Efeuwand", "Eichenhain",
    "Eisbruch", "Eisvogel", "Eiszapfen", "Elchwald", "Erdbeerfeld", "Erikablüte", "Erlenbach", "Eschenbaum", "Espenwald", "Falkennest",
    "Farnwald", "Feldweg", "Feueropal", "Fichtenwald", "Fischteich", "Fjordufer", "Flachsblume", "Flammenbaum", "Fliederbusch", "Flussdelta",
    "Flussufer", "Fog Valley", "Forsythienheck", "Fossilien", "Fuchsloch", "Gänsefüßchen", "Gartenzaun", "Gewitterfront", "Ginkgo-Baum", "Gletscherzunge",
    "Goldregen", "Granitfels", "Grasland", "Grasmeer", "Grotteneingang", "Grüner See", "Gänseblumenwiese", "Hafenkran", "Hainbuche", "Halde",
    "Hangwiese", "Haselstrauch", "Heidekraut", "Herbstlaub", "Herbstwald", "Hibiskusblüte", "Hochmoor", "Holunder", "Honigwabe", "Hortensie",
    "Hügel", "Inselbucht", "Irisgarten", "Jadegrün", "Jasminblüte", "Kaktusfeld", "Kalkfels", "Kaminfeuer", "Kastanienallee", "Kiefernhain",
    "Kiesweg", "Kirschallee", "Kleeblatt", "Klipppfad", "Knospenzeit", "Korallenbucht", "Kornblume", "Kreidefels", "Kristallsee", "Krokuswiese",
    "Küstenweg", "Lavendelfeld", "Leuchtpilz", "Lichtstrahl", "Lilienfeld", "Lindenallee", "Luchsberg", "Lupinenfeld", "Maisacker", "Mandarinenbaum",
    "Mangrovenwald", "Marmorbruch", "Marskrater", "Meadow Mist", "Meteorit", "Mistelfarn", "Mohnfeld", "Mondlicht", "Moorlandschaft", "Morgennebel",
    "Muschelbank", "Nebelwald", "Nektarinenbaum", "Nussbaum", "Ockerfels", "Olivenhain", "Opalhöhle", "Orchideental", "Ozeanbucht", "Palmenhain",
    "Pampasgras", "Paprikafeld", "Passionsfrucht", "Pfauenwald", "Pilgerkapelle", "Pinienhügel", "Polarlicht-Bucht", "Quarzstrand", "Quellbach", "Rapsmeer",
    "Rauchschwaden", "Rehkitz", "Riffgarten", "Ringelblumenfeld", "Robbenbucht", "Roggendach", "Rosenbogen", "Rotbuche", "Rubinsee", "Rübenfeld",
    "Safranfeld", "Salbeigarten", "Salzwüste", "Sandstrand", "Saphirsee", "Sardinenbucht", "Savannenhügel", "Schilfgürtel", "Schneefeld", "Schneekuppe",
    "Seerosenteich", "Seetangwald", "Silbersee", "Smaragdhöhle", "Sonnenblumenfeld", "Spiegelsee", "Spiralfarn", "Steinbruch", "Steppenhimmel", "Sturmwolke",
    "Sumpfwald", "Tannenhain", "Tautropfenblatt", "Teichrose", "Terrassenfeld", "Thymianhang", "Titanfels", "Topasgrotte", "Torfmoos", "Tornado-Horizont",
    "Traubenhang", "Tulpenmeer", "Turmalinhöhle", "Uferstein", "Ulmenallee", "Urwaldpfad", "Veilchengarten", "Vulkankegel", "Wacholderheide", "Waldsee",
    "Waldsteg", "Wanderhütte", "Wasserfall-Spray", "Weidenhang", "Weinlaube", "Wellenkamm", "Wiesenduft", "Wildrosenbusch", "Wolfsfelsen", "Wolkenwand",
    "Wüstenpfad",     "Yucca-Feld", "Zedernhain", "Zinnienbeet", "Zypressenallee",
    "Abenddämmerung", "Ahornsirup", "Akazienhain", "Alpenrose-Feld", "Altstadt-Gasse", "Amethyst-Höhle",
    "Anime-Skyline", "Apfelkuchen-Duft", "Arktis-Eis", "Asteroidenfeld", "Atlantik-Küste", "Aurora-Tanz",
    "Bachufer", "Backstein-Allee", "Bambuswald", "Basaltsäule", "Bergbach-Spray", "Bergdorf-Abend",
    "Bernstein-Strand", "Birkenallee", "Blitz-Regen", "Blumenkorb", "Blütenregen", "Bootsanleger",
    "Brombeer-Hecke", "Brunnenplatz-Abend", "Buchenhain", "Buntspecht-Baum", "Buschfeuer-Horizont", "Camping-Abend",
    "Canyon-Schlucht", "Chili-Feld-Rot", "Chrysanthemen-Beet", "Citrus-Hain", "Cliff-Sonnenuntergang", "Coral-Lagune",
    "Cottage-Garten", "Dachgarten-Stadt", "Dämmerungsnebel", "Dattel-Oase", "Delta-Fluss", "Diamant-Glanz",
    "Distel-Feld", "Donner-Echo", "Dorf-Kirche", "Drachenfels-Silhouette", "Dünen-Schatten", "Efeu-Mauer",
    "Eichen-Allee", "Eisbruch-Blau", "Eisvogel-Flug", "Eiszapfen-Reihe", "Elch-Tal", "Erdbeer-Pflücken",
    "Erikablüten-Hang", "Erlen-Ufer", "Eschen-Wald", "Espen-Gold", "Falken-Kreis", "Farn-Teppich",
    "Feldweg-Abend", "Feueropal-Glanz", "Fichten-Duft", "Fischteich-Spiegel", "Fjord-Morgen", "Flachs-Blau",
    "Flammen-Baum", "Flieder-Duft", "Flussdelta-Grün", "Flussufer-Nebel", "Fog-Valley", "Forsythien-Gelb",
    "Fossilien-Fund", "Fuchs-Spur-Schnee", "Gänseblümchen-Teppich", "Gartenzaun-Ranken", "Gewitter-Linie", "Ginkgo-Herbst",
    "Gletscher-Zunge", "Goldregen-Gelb", "Granit-Kante", "Grasland-Wind", "Grasmeer-Weite", "Grotten-Licht",
    "Grüner-See-Türkis", "Hafenkran-Silhouette", "Hainbuche-Hain", "Halde-Grün", "Hangwiese-Blumen", "Hasel-Strauch",
    "Heidekraut-Lila", "Herbstlaub-Gold", "Herbstwald-Nebel", "Hibiskus-Pink", "Hochmoor-Duft", "Holunder-Weiß",
    "Honigwabe-Gold", "Hortensie-Blau", "Hügel-Panorama", "Inselbucht-Türkis", "Iris-Garten", "Jade-Grün",
    "Jasmin-Duft", "Kaktusfeld-Sonne", "Kalkfels-Weiß", "Kaminfeuer-Wärme", "Kastanien-Herbst", "Kiefernhain-Duft",
    "Kiesweg-Strand", "Kirschallee-Pink", "Kleeblatt-Grün", "Klipppfad-Meer", "Knospen-Frühling", "Korallen-Bucht",
    "Kornblume-Blau", "Kreidefels-Küste", "Kristallsee-Klar", "Krokuswiese-Lila", "Küstenweg-Salz", "Lavendelfeld-Duft",
    "Leuchtpilz-Nacht", "Lichtstrahl-Wald", "Lilienfeld-Weiß", "Lindenallee-Schatten", "Luchsberg-Fels", "Lupinenfeld-Blau",
    "Maisacker-Gold", "Mandarinen-Hain", "Mangroven-Dämmerung", "Marmorbruch-Grau", "Marskrater-Rot", "Meadow-Mist",
    "Meteorit-Fund", "Mistelfarn-Grün", "Mohnfeld-Rot", "Mondlicht-See", "Moorlandschaft-Nebel", "Morgennebel-Tal",
    "Muschelbank-Strand", "Nebelwald-Grün", "Nektarinen-Sommer", "Nussbaum-Herbst", "Ockerfels-Wüste", "Olivenhain-Silber",
    "Opalhöhle-Glanz", "Orchideental-Feucht", "Ozeanbucht-Blau", "Palmenhain-Schatten", "Pampasgras-Wind", "Paprikafeld-Rot",
    "Passionsfrucht-Gelb", "Pfauenwald-Grün", "Pilgerkapelle-Berg", "Pinienhügel-Duft", "Polarlicht-Bucht-Grün", "Quarzstrand-Weiß",
    "Quellbach-Klar", "Rapsmeer-Gelb", "Rauchschwaden-Abend", "Rehkitz-Wiese", "Riffgarten-Bunt", "Ringelblumen-Gold",
    "Robbenbucht-Kühl", "Roggendach-Braun", "Rosenbogen-Pink", "Rotbuche-Herbst", "Rubinsee-Rot", "Rübenfeld-Lila",
    "Safranfeld-Gold", "Salbeigarten-Grün", "Salzwüste-Weiß", "Sandstrand-Warm", "Saphirsee-Blau", "Sardinenbucht-Türkis",
    "Savannenhügel-Gold", "Schilfgürtel-Grün", "Schneefeld-Weiß", "Schneekuppe-Glanz", "Seerosenteich-Pink", "Seetangwald-Grün",
    "Silbersee-Spiegel", "Smaragdhöhle-Grün", "Sonnenblumenfeld-Gold", "Spiegelsee-Ruhig", "Spiralfarn-Grün", "Steinbruch-Grau",
    "Steppenhimmel-Weit", "Sturmwolke-Dunkel", "Sumpfwald-Grün", "Tannenhain-Duft", "Tautropfenblatt-Glanz", "Teichrose-Pink",
    "Terrassenfeld-Grün", "Thymianhang-Duft", "Titanfels-Grau", "Topasgrotte-Blau", "Torfmoos-Grün", "Tornado-Horizont-Grau",
    "Traubenhang-Lila", "Tulpenmeer-Bunt", "Turmalinhöhle-Bunt", "Uferstein-Nass", "Ulmenallee-Schatten", "Urwaldpfad-Grün",
    "Veilchengarten-Lila", "Vulkankegel-Rot", "Wacholderheide-Grün", "Waldsee-Spiegel", "Waldsteg-Holz", "Wanderhütte-Berg",
    "Wasserfall-Spray-Weiß", "Weidenhang-Grün", "Weinlaube-Schatten", "Wellenkamm-Blau", "Wiesenduft-Sommer", "Wildrosenbusch-Pink",
    "Wolfsfelsen-Grau", "Wolkenwand-Weiß", "Wüstenpfad-Gold", "Yucca-Feld-Grün", "Zedernhain-Duft", "Zinnienbeet-Bunt",
    "Zypressenallee-Grün",
    "Triathlon-Küste", "Arduino-Board", "Tokamak-Ring", "CERN-Tunnel", "Homeoffice-Licht",
    "ETF-Chart", "Sparschwein-Gold", "Van-Life-Abend", "Bauhaus-Form", "Banksy-Wand",
    "Mars-Rover-Staub", "ISS-Orbit", "Bubble-Tea-Pink", "Paella-Pfanne", "NFT-Pixel",
    "Phishing-Haken", "5G-Mast-Silhouette", "Starlink-Schüssel", "Polarfuchs-Schnee",
    "Walross-Küste", "Oase-Palmen", "Geysir-Dampf", "Eisberg-Blau", "Kristallkugel-Nacht",
    "Zauberhut-Glanz", "Kitesurf-Wind", "Jacht-Meer", "Domino-Kette", "VR-Brille-Neon",
    "Ethereum-Glanz", "Firewall-Blau", "Glasfaser-Licht", "Waldbrand-Horizont",
    "Mikroplastik-Meer", "Minimalismus-Raum", "Stoizismus-Säule", "Faktencheck-Lupe",
    "Deepfake-Maske", "Tai-Chi-Nebel", "Pilates-Matte", "Weltuhr-Zeit", "Prompt-KI",
    "Kampfjet-Silhouette", "Apollo-Mond", "James-Webb-Stern", "Schwarzes-Loch-Rand",
    "Uranus-Blau", "Kreuzspinne-Netz", "Marienkäfer-Punkt", "Glühwürmchen-Nacht",
    "Waschbär-Mond", "Tapir-Dschungel", "Tukan-Regen", "Pelikan-Sonnenuntergang",
    "Steinadler-Fels", "Möwe-Strand", "Strauß-Savanne", "Hummer-Rot", "Seestern-Koralle",
    "Krake-Tief", "Puffin-Klippe", "Erdmännchen-Wüste", "Formel-E-Grün", "E-Bike-Stadt",
    "Goldmedaille-Glanz", "Marathon-Ziel", "Schwimmkappe-Blau", "Rennrad-Berg",
    "Brezel-Salz", "Bagel-Frisch", "Nachos-Käse", "Curry-Duft", "Lasagne-Schicht",
    "Gelato-Sommer", "Tiramisu-Kakao", "Pho-Dampf", "Pad-Thai-Bunt", "Naan-Ofen",
    "Gnocchi-Butter", "Pesto-Grün", "Salat-Bowl", "Acai-Lila", "Wok-Feuer",
    "Heiße-Schokolade", "Marshmallow-Lagerfeuer", "Reisepass-Abenteuer", "Koffer-Flughafen",
    "Sonnenschirm-Strand", "Server-Rack-Blau", "Passwort-Schloss", "Traktor-Feld",
    "Panzer-Silhouette", "NATO-Schild", "Grundgesetz-Buch", "Mietvertrag-Schlüssel",
    "Cybermobbing-Warnung", "Enkeltrick-Telefon", "Antibiotika-Pack", "Placebo-Studie",
    "Hitzewelle-Rot", "Buschfeuer-Rauch", "Zirkus-Zelt", "Mumie-Sand", "Werwolf-Mond",
    "Polizeiauto-Blau", "Gelbes-Taxi", "Straßenbahn-Stadt", "Metro-Tunnel",
    "Kampfjet-Abend", "Segelboot-Wind", "Anker-Hafen", "Muschel-Strand", "Lawinen-Weiß",
    "Stalaktit-Höhle", "Sandsturm-Gold", "Oase-Spiegel", "Windsurf-Spray", "Jacht-Luxus",
    "Spielautomat-Neon", "Jenga-Turm", "Monopoly-Straße", "UNO-Karte", "Poker-Chips",
    "Barbie-Pink", "RC-Auto-Rennen", "Modelleisenbahn", "AirPods-Weiß", "USB-Stick",
    "Gaming-Maus-RGB", "Ultrawide-Monitor", "Crypto-Wallet", "Backup-Cloud",
    "Fingerprint-Scan", "2FA-Code", "Malware-Warnung", "Glasfaser-Kabel",
    "Rust-Gear", "SQL-Tabelle", "MongoDB-Blatt", "API-Stecker", "Go-Gopher",
    "Kotlin-Android", "Swift-Vogel", "K8s-Rad", "Hydroponik-Grün", "Kompost-Humus",
    "Permakultur-Kreis", "Korallenbleiche-Weiß", "Antarktis-Sturm", "Fjord-Spiegel",
    "Savannen-Sonnenaufgang", "Amazonas-Nebel", "Outback-Hitze", "Mauer-Graffiti",
    "Fabrik-Dampf", "Liberty-Cap", "Nano-Hex", "Bionik-Flügel", "Graphen-Gitter",
    "CRISPR-Schnitt", "E-Waste-Berg", "Schweiz-Gipfel", "Wien-Oper", "Windmühlen-Feld",
    "Tulpen-Orange", "Big-Ben-Nebel", "London-Bus-Rot", "Shamrock-Grün", "Opera-Harbour",
    "Boomerang-Flug", "Uluru-Sonnenuntergang", "Great-Wall-Morgen", "Diwali-Licht",
    "Holi-Pulver", "Sphinx-Sand", "Pharao-Gold", "Nil-Sonnenaufgang", "Burj-Nacht",
    "Hochzeit-Ringe", "Abschluss-Feier", "Vinyl-Knistern", "Boombox-Retro", "DJ-Pult",
    "Trompeten-Glanz", "Ballett-Spitze", "BMX-Sprung", "Parkour-Dach", "Trampolin-Luft",
    "Wasserball-Splash", "Aquarium-Blau", "Gartenzwerg-Rot", "Kamin-Abend", "Heuballen-Feld",
    "Weinberg-Herbst", "Picknick-Wiese", "Zuckerwatte-Pink", "Karussell-Lichter",
    "Oktoberfest-Bier", "Schnitzel-Gold", "Schwarzwälder-Kirsch", "Glühwein-Duft",
    "Schneekugel-Stadt", "Blockhütte-Rauch", "Geschenk-Schleife", "Mistel-Kuss",
    "Elch-Wald", "Ahorn-Herbst", "Iglu-Polar", "Totem-Küste", "Cowboy-Sonnenuntergang",
    "Flamenco-Rot", "Himalaya-Gipfel", "Everest-Wolke", "Koi-Teich", "Origami-Kranich",
    "Newton-Apfel", "Tesla-Blitz", "Einstein-Formel", "Quokka-Lächeln", "Schnabeltier-Teich",
    "Kolibri-Grün", "Ara-Blau", "Condor-Weite", "Wombat-Tag", "Platypus-Schatten",
    "PHP-Elefant", "Figma-Canvas", "TikTok-Note", "Discord-Violet", "Kindle-Nacht",
    "Gutenberg-Presse", "Byzantin-Gold", "Ottoman-Blau", "Mariachi-Rot", "NASA-Start",
    "Artemis-Mond", "Lithium-Zelle", "Geothermie-Dampf", "Biogas-Grün", "CCS-Turm",
    "Smog-Grau", "Bienen-Honig", "Regex-Muster", "Gezeiten-Rad", "Eishockey-Eis",
    "Cricket-Grün", "Golf-Fairway", "Schachuhr-Tick", "Abakus-Klick", "Typewriter-Ding",
    "Ampel-Rot", "EV-Laden", "Bagger-Gelb", "Bauplan-Blau", "Azteken-Stufen",
    "Piñata-Bunt", "Hollywood-Stern", "Route-66-Sonne", "Rettungsring-Orange",
    "Stethoskop-Weiß", "Petrischale-Grün", "Prisma-Funkeln", "Vogelhaus-Holz",
    "Wärmepumpe-Blau", "Seidenstraße-Staub", "Sombrero-Fiesta", "Panda-Bambus",
    "Vue-Grün", "Angular-Schild", "Flutter-Cyan", "GraphQL-Knoten", "AWS-Orange",
    "Terraform-Block", "Serverless-Lambda", "Vite-Blitz", "SEO-Ranking", "WordPress-W",
    "Insulin-Pen", "Kita-Bunte", "Bundesrat-Saal", "Demografie-Pyramide", "Integration-Handshake",
    "Wahlurne-Rot", "Friedenstaube-Weiß", "MRT-Scan", "Vegan-Bowl", "Baklava-Honig",
    "Torii-Rot", "Sumo-Ring", "Mochi-Pink", "Mandala-Gold", "Buddha-Gold",
    "Zauberbuch-Lila", "Ritterschild-Wappen", "Schatzkarte-Braun", "Containerschiff-Blau",
    "Gabelstapler-Gelb", "Goldbarren-Glanz", "Diamantring-Box",
    "Linux-Penguin", "Ubuntu-Orange", "Windows-Blau", "MacOS-Silber", "Blender-Orange",
    "Starlink-Schüssel-Nacht", "5G-Mast-Silhouette", "NFC-Tap", "Bluetooth-Blau",
    "ETF-Grün", "Inflation-Chart", "Leitzins-Pfeil", "Aktien-Candle", "Mindestlohn-Scale",
    "Gewerkschaft-Faust", "BAföG-Brief", "Duales-Studium", "Montessori-Rosa",
    "Waldorf-Kunst", "Barrierefrei-Rampe", "WCAG-Badge", "Blender-Viewport",
    "DaVinci-Timeline", "Premiere-Schnitt", "Fotografie-Blende", "Streaming-Play",
    "Netflix-Rot", "Spotify-Grün", "Meme-Doge", "Meme-Pepe", "Satire-Maske",
    "Journalismus-Mikro", "Pressefreiheit-Taube", "Whistleblower-Mund",
    "Erdbeben-Riss", "Tornado-Trichter", "Blitz-Einschlag", "Gewitter-Wolke",
    "Artensterben-Schmetterling", "Ozon-Schicht", "Atomkraft-Kühl", "Schengen-Pass",
    "UNO-Globus", "WHO-Kreuz", "Paralympics-Fackel", "Speedrun-Gold",
    "Laravel-Elefant", "Svelte-Flamme", "Spring-Blatt", "Deno-Dino", "Bun-Brot",
    "React-Native-Blau", "RAG-Dokument", "Halluzination-Wolke", "Prompt-Schild",
    "ZeroTrust-Schloss", "Einstein-Formel", "Relativität-Uhr", "Immun-Zelle",
    "Antibiotika-Pille", "Organspende-Herz", "Pflege-Smile", "LongCOVID-Maske",
    "Sakura-Regen", "Torii-Sonnenaufgang", "Viking-Schild", "Samurai-Katana",
    "Pharaoh-Sarg", "Azteken-Kalender", "Inka-Terrasse", "Maori-Tattoo",
    "Safari-Jeep", "Kilimandscharo", "Nil-Krokodil", "Serengeti-Sonne",
    "Himalaya-Prayer", "Ganges-Morgen", "Bali-Tempel", "Bangkok-Tempel",
    "Seoul-Neon", "Taipeh-101", "Hongkong-Hafen", "Singapur-Marina",
    "Dubai-Skyline", "Istanbul-Moschee", "Athen-Akropolis", "Rom-Kolosseum",
    "Barcelona-Sagrada", "Amsterdam-Kanal", "Prag-Brücke", "Wien-Kaffee",
    "Berlin-Bär", "Hamburg-Hafen", "München-Oktoberfest", "Köln-Dom",
    "Schwarzwald-Nebel", "Alpen-Gipfel", "Rhein-Schloss", "Neuschwanstein-Nebel",
    "Leipzig-Buchmesse", "Dresden-Frauenkirche", "Rostock-Hafen", "Usedom-Strand",
    "Rügen-Kreide", "Bodensee-Segel", "Harz-Brocken", "Lüneburg-Heide",
    "Mosel-Wein", "Frankfurt-Skyline", "Stuttgart-Auto", "Hannover-Messe",
    "Bremen-Roland", "Lübeck-Holstentor", "Weimar-Goethe", "Heidelberg-Alt",
    "Freiburg-Sonnen", "Konstanz-See", "Passau-Donau", "Regensburg-Stein",
    "Nürnberg-Lebkuchen", "Augsburg-Fuggerei", "Tübingen-Alt", "Heidelberg-Brücke",
    "E-Bus-Grün", "Tram-Bern", "Fahrradweg", "E-Scooter-Stadt", "CarSharing-Auto",
    "Heatpump-Haus", "SolarDach", "Windpark-Meer", "Wasserstoff-Tank", "Biogas-Anlage",
    "Kompost-Haufen", "Regentonne", "Bienenhotel", "Insektenhotel", "Hochbeet-Gemüse",
    "Tomaten-Topf", "Kräutergarten", "Apfelbaum-Obst", "Kirsch-Ernte", "Weinlese-Herbst",
    "Bauernmarkt-Korb", "Brot-Ofen", "Käse-Keller", "Schokolade-Kakao", "Honig-Glas",
    "Marmelade-Glas", "Picknick-Korb", "Grill-Sommer", "Feuerstelle-Abend", "Zelt-Sterne",
    "Wanderstiefel-Pfad", "Klettergurt-Fels", "Kajak-Fluss", "SUP-See", "Ski-Abfahrt",
    "Snowboard-Sprung", "Eishockey-Puck", "Curling-Stein", "Biathlon-Schnee",
    "Formel1-Rot", "MotoGP-Kurve", "Rallye-Staub", "Tour-de-France", "Marathon-Ziel",
    "Triathlon-Wechsel", "Schwimmbrille-Blau", "Rennrad-Ziel", "Boxring-Licht",
    "Judo-Matte", "Fechten-Maske", "Bogenschießen-Ziel", "Golf-Birdie", "Cricket-Schlag",
    "Rugby-Tackle", "American-Football", "Cheerleader-Pom", "E-Sport-Arena",
    "LAN-Party", "Retro-Konsole", "Arcade-Joystick", "VR-Arena", "Racing-Sim",
    "Flight-Sim", "Train-Sim", "City-Builder", "Survival-Craft", "Open-World-Map",
    "Boss-Fight", "Loot-Chest", "Health-Potion", "Mana-Orb", "Sword-Legend",
    "Shield-Hero", "Bow-Elf", "Staff-Mage", "Dagger-Rogue", "Hammer-Dwarf",
    "Dragon-Egg", "Phoenix-Asche", "Griffin-Himmel", "Kraken-Tiefsee", "Hydra-Sumpf",
    "Golem-Stein", "Goblin-Höhle", "Orc-Festung", "Elf-Wald", "Dwarf-Mine",
    "Space-Marine", "Alien-Xenomorph", "UFO-Beam", "Robot-Mech", "Cyborg-Eye",
    "Hologram-Blue", "Laser-Grid", "Force-Field", "Warp-Gate", "Space-Station-Ring",
    "Moon-Base", "Mars-Flag", "Asteroid-Mine", "Comet-Tail", "Nebula-Purple",
    "Pulsar-Spin", "Quasar-Beam", "Supernova-Burst", "Wormhole-Ring", "Time-Machine",
    "Steampunk-Zahnrad", "Dieselpunk-Tank", "Cyberdeck-Neon", "Synthwave-Sonne",
    "Vaporwave-Palme", "Glitch-Art", "Pixel-Heart", "8bit-Mario", "16bit-Sword",
    "Gameboy-Grün", "NES-Cartridge", "SNES-Controller", "PlayStation-Symbol",
    "Xbox-Green", "Switch-Joycon", "Steam-Deck", "Twitch-Purple", "YouTube-Red",
    "TikTok-Note", "Instagram-Gradient", "LinkedIn-Blue", "Reddit-Orange", "Pinterest-Red",
    "Snapchat-Ghost", "Mastodon-Elefant", "Threads-Logo", "Bluesky-Cloud", "Masthead-News",
    "Podcast-Mic", "Radio-Tower", "Vinyl-Spin", "Cassette-Retro", "CD-Shimmer",
    "Cinema-Reel", "Oscar-Gold", "Clapperboard", "Director-Chair", "Green-Screen",
    "Studio-Light", "Boom-Mic", "Script-Page", "Storyboard-Sketch", "Animation-Frame",
    "Clay-Sculpt", "Oil-Paint", "Watercolor-Splash", "Charcoal-Sketch", "Graffiti-Spray",
    "Stencil-Art", "Mural-Wall", "Sculpture-Marble", "Pottery-Wheel", "Weaving-Loom",
    "Knitting-Yarn", "Embroidery-Hoop", "Calligraphy-Ink", "Origami-Crane", "Paper-Cut",
    "Lantern-Festival", "Firefly-Jar", "Candle-Drip", "Incense-Smoke", "Prayer-Beads",
    "Meditation-Bell", "Yoga-Pose", "Pilates-Ring", "Kettlebell-Gym", "Dumbbell-Iron",
    "Treadmill-Run", "Rowing-Machine", "Pullup-Bar", "Bench-Press", "Protein-Shake",
    "Meal-Prep", "Vegan-Salad", "Keto-Avocado", "Intermittent-Clock", "Calorie-Track",
    "Sleep-Tracker", "Heart-Rate", "Blood-Pressure", "Thermometer-Fieber", "Stethoscope-Red",
    "Xray-Bone", "MRI-Scan", "Pill-Bottle", "Syringe-Blue", "Bandage-White",
    "Wheelchair-Sport", "Guide-Dog", "Braille-Book", "Sign-Language", "Hearing-Aid",
    "Cochlear-Implant", "Prosthetic-Leg", "Crutches-Walk", "Hospital-Bed", "Ambulance-Siren",
    "Fire-Truck", "Police-Badge", "Court-Gavel", "Scale-Justice", "Prison-Bars",
    "Vote-Ballot", "Campaign-Button", "Parliament-Dome", "Flag-Wave", "Anthem-Note",
    "Peace-Dove", "Protest-Sign", "Recycle-Green", "Compost-Bin", "Solar-Panel-Roof",
    "Wind-Turbine-Sea", "Hydro-Dam", "Geothermal-Plant", "EV-Charger", "Bike-Lane",
    "Pedestrian-Cross", "Traffic-Light", "Roundabout", "Parking-Garage", "Toll-Booth",
    "Passport-Stamp", "Suitcase-Roll", "Airport-Gate", "Train-Platform", "Bus-Stop",
    "Ferry-Boat", "Cable-Car", "Funicular-Hill", "Subway-Map", "Ticket-QR",
    "Wallet-Card", "Piggy-Bank", "Safe-Vault", "Invoice-Stack", "Tax-Form",
    "Calculator-Desk", "Whiteboard-Marker", "Sticky-Note", "Paperclip-Stack", "Stapler-Red",
    "Hole-Punch", "Binder-Ring", "Folder-Tab", "Envelope-Mail", "Package-Track",
    "Barcode-Scan", "RFID-Tag", "NFC-Pay", "Crypto-Coin", "NFT-Art",
    "Smartwatch-Face", "Fitness-Band", "Earbuds-Case", "Powerbank-Charge", "USB-C-Plug",
    "HDMI-Cable", "Router-Blink", "Modem-Light", "Server-Blade", "Cloud-Upload",
    "Database-Stack", "Firewall-Wall", "VPN-Tunnel", "Bug-Bounty", "Code-Review",
    "Git-Branch", "Merge-Conflict", "CI-Pipeline", "Docker-Whale", "K8s-Helm",
    "Terraform-Plan", "Lambda-Function", "API-Gateway", "GraphQL-Node", "WebSocket-Live",
    "Redis-Cache", "Elastic-Search", "Kafka-Stream", "RabbitMQ-Queue", "S3-Bucket",
    "CDN-Edge", "Load-Balancer", "Microservice-Mesh", "Monolith-Block", "Legacy-Code",
    "Refactor-Clean", "Unit-Test-Green", "E2E-Browser", "Lighthouse-Score", "SEO-Rank",
    "Analytics-Chart", "Heatmap-Click", "AB-Test-Split", "Funnel-Convert", "CRM-Pipeline",
    "Newsletter-Mail", "Landing-Page", "Hero-Section", "CTA-Button", "Modal-Popup",
    "Toast-Notify", "Skeleton-Load", "Dark-Mode-Toggle", "Glass-Card", "Gradient-Mesh",
    "NextJS-Black", "Nuxt-Green", "Prisma-Violet", "Supabase-Teal", "Firebase-Orange",
    "Redis-Red", "Kafka-Stream", "Elastic-Magnify", "Ransomware-Lock", "Malware-Bug",
    "Web3-Chain", "NFT-Gallery", "Metaverse-Portal", "EV-Charger-Green", "HeatPump-Blue",
    "Copilot-Pair", "Midjourney-Dream", "Pomodoro-Red", "Mindmap-Nodes", "Cornell-Notes",
    "FairTrade-Cup", "Hyperloop-Tube", "Urban-Garden-Herb", "Beehive-Gold", "Migraine-Pulse",
    "VitaminD-Sun", "mRNA-Helix", "Epigenetic-Spiral", "StemCell-Glow", "Telemed-Call",
    "ADHD-Focus", "Cookie-Consent", "EU-AI-Act", "Creative-Commons", "Copyright-Seal",
    "Circular-Arrow", "Repair-Wrench", "LightPollution-Sky", "Journaling-Pen", "Rhetoric-Mic",
    "Autonomous-Car", "Lidar-Scan", "Battery-Pack", "SolarRoof-Home", "WindTurbine-Field",
    "Hydrogen-Station", "Geothermal-Plant", "Carbon-Credit", "GreenBond-Chart", "ESG-Leaf",
    "Microgrid-Solar", "SmartMeter-Digital", "Insulation-Wall", "Passive-House", "HeatRecovery",
    "RainGarden", "Compost-Worm", "Pollinator-Meadow", "Vertical-Farm", "Aquaponics-Tank",
    "Mycelium-Net", "Biochar-Soil", "Rewilding-Forest", "Mangrove-Restore", "Coral-Plant",
    "Ocean-Cleanup", "Plastic-Free", "ZeroWaste-Shop", "Refill-Station", "BikeShare-Dock",
    "Scooter-City", "Tram-Green", "Metro-Map", "Hyperloop-Capsule", "Maglev-Train",
    "Drone-Delivery", "Flying-Taxi", "Rocket-Landing", "Moon-Base-Alpha", "Mars-Habitat",
    "Space-Suit", "Telescope-JWST", "Observatory-Dome", "Planetarium-Star", "Comet-Tail-Blue",
    "Aurora-Green", "MilkyWay-Band", "BlackHole-Ring", "Pulsar-Beam", "Supernova-Red",
    "Exoplanet-Transit", "Satellite-Constellation", "GPS-Orbit", "Radar-Dish", "Sonar-Ping",
    "Submarine-Periscope", "Aircraft-Carrier", "Destroyer-Wave", "Tank-Tread", "Helicopter-Rotor",
    "Parachute-Drop", "Skydive-Free", "HotAir-Basket", "Glider-Soar", "Sailboat-Wind",
    "Kayak-River", "Canoe-Lake", "Raft-Rapids", "Surfboard-Barrel", "Wakeboard-Spray",
    "Kitesurf-Jump", "Snowboard-Powder", "Alpine-Ski", "Biathlon-Range", "Curling-Sweep",
    "Bobsled-Ice", "Luge-Track", "Skeleton-Slide", "IceHockey-Stick", "FigureSkate-Spin",
    "SpeedSkate-Low", "Climbing-Wall", "Bouldering-Grip", "Parkour-Vault", "SkatePark-Ramp",
    "BMX-Air", "Motocross-Dirt", "RallyCar-Mud", "NASCAR-Oval", "IndyCar-Wing",
    "FormulaE-Silence", "LeMans-Night", "PitStop-Tire", "Checkered-Flag", "Podium-Spray",
    "Medal-Ceremony", "Olympic-Torch", "Stadium-Crowd", "Marathon-Wall", "Triathlon-Finish",
    "Ironman-Hawaii", "UltraTrail-Mountain", "Parkrun-Community", "Yoga-Sunrise", "Pilates-Core",
    "Crossfit-Bar", "Weightlift-Snatch", "Boxing-Glove", "MMA-Octagon", "Fencing-Lunge",
    "Archery-Bullseye", "Shooting-Target", "Equestrian-Jump", "Polo-Mallet", "Cricket-Wicket",
    "Rugby-Scrum", "Handball-Goal", "WaterPolo-Splash", "Diving-Platform", "Synchron-Swim",
    "Rowing-Crew", "Canoe-Sprint", "Sailing-Regatta", "Windsurf-Speed", "Kiteboard-Twist",
    "Chess-Opening", "Go-Stone", "Mahjong-Tile", "Poker-Royal", "Bridge-Card",
    "Monopoly-Hotel", "Risk-Map", "Catan-Hex", "Dungeons-Dragon", "Magic-Card",
    "Warhammer-Mini", "LEGO-Brick", "Rubiks-Cube", "Jenga-Tower", "Domino-Line",
    "Pinball-Flip", "Arcade-Cabinet", "Retro-CRT", "Gameboy-Pixel", "NES-Cartridge",
    "SNES-World", "PlayStation-Orb", "Xbox-Green", "Switch-Dock", "Steam-Deck",
    "VR-Headset", "AR-Glasses", "Haptic-Glove", "Motion-Capture", "Green-Screen-Actor",
    "Film-Reel", "Clapper-Slate", "Director-Cut", "Oscar-Stage", "Cannes-Palm",
    "Broadway-Lights", "Opera-House", "Ballet-Tutu", "Jazz-Sax", "Rock-Guitar",
    "EDM-Festival", "DJ-Turntable", "Vinyl-Spin", "Cassette-Retro", "CD-Rainbow",
    "Podcast-Wave", "Radio-Tower", "News-Anchor", "Press-Camera", "Paparazzi-Flash",
    "Red-Carpet", "Paparazzi-Wall", "Fashion-Runway", "Haute-Couture", "Streetwear-Hype",
    "Sneaker-Drop", "Watch-Luxury", "Handbag-Icon", "Perfume-Bottle", "Skincare-Serum",
    "Barber-Pole", "Tattoo-Needle", "Piercing-Stud", "Nail-Art", "Makeup-Palette",
    "Barista-Latte", "Espresso-Crema", "ColdBrew-Ice", "Matcha-Whisk", "BubbleTea-Pearl",
    "Ramen-Bowl", "Sushi-Plate", "Taco-Stand", "Curry-Spice", "Pho-Steam",
    "Croissant-Butter", "Baguette-Fresh", "Pretzel-Salt", "Waffle-Syrup", "Crepe-Nutella",
    "Gelato-Scoop", "Tiramisu-Layer", "Macaron-Color", "Cheesecake-Slice", "Donut-Glaze",
    "Cupcake-Frost", "Brownie-Fudge", "Cookie-Chip", "Cinnamon-Roll", "Churro-Sugar",
    "FoodTruck-Neon", "Farmers-Market", "Vineyard-Row", "Brewery-Hops", "Distillery-Barrel",
    "Wine-Cellar", "Champagne-Pop", "Cocktail-Shaker", "Whiskey-Ice", "Tequila-Lime",
    "Sake-Cup", "Soju-Bottle", "Absinthe-Green", "Espresso-Martini", "Mojito-Mint",
    "Hotel-Lobby", "Resort-Pool", "Spa-Stone", "Sauna-Steam", "Yoga-Retreat",
    "Camping-Van", "RV-Sunset", "Tent-Stars", "Hammock-Beach", "Bonfire-Beach",
    "Lighthouse-Storm", "Harbor-Fog", "Fishing-Boat", "Submarine-Deep", "Cruise-Ship",
    "Airport-Terminal", "Passport-Stamp", "Suitcase-Roll", "Backpack-Trail", "Map-Compass",
    "Binocular-Safari", "Camera-Safari", "Drone-Aerial", "GoPro-Action", "Selfie-Stick",
    "Landmark-Eiffel", "Landmark-BigBen", "Landmark-Colosseum", "Landmark-Taj", "Landmark-Christ",
    "Landmark-Opera", "Landmark-Pyramid", "Landmark-Wall", "Landmark-Forbidden", "Landmark-Angkor",
    "Temple-Kyoto", "Pagoda-China", "Mosque-Blue", "Church-Stained", "Synagogue-Star",
    "Monastery-Hill", "Castle-Ruin", "Fortress-Stone", "Drawbridge-Moat", "Knight-Tournament",
    "Viking-Longship", "Samurai-Temple", "Geisha-Fan", "Kabuki-Mask", "Dragon-Dance",
    "Lion-Dance", "Holi-Color", "Diwali-Lamp", "Ramadan-Moon", "Christmas-Market",
    "Easter-Egg", "Halloween-Pumpkin", "Thanksgiving-Turkey", "NewYear-Firework", "Carnival-Mask",
    "Oktoberfest-Tent", "DayDead-Skull", "MardiGras-Beads", "CherryBlossom-Japan", "Autumn-Foliage",
    "Winter-Solstice", "Spring-Equinox", "Summer-Solstice", "Harvest-Moon", "Blue-Moon",
    "Solar-Eclipse", "Lunar-Eclipse", "Meteor-Shower", "Northern-Lights", "Southern-Lights",
    "Sandstorm-Desert", "Blizzard-White", "Hail-Storm", "Fog-Harbor", "Rainbow-Valley",
    "Waterfall-Mist", "Geyser-Steam", "HotSpring-Blue", "Cave-Crystal", "Canyon-Red",
    "Fjord-Mirror", "Glacier-Blue", "Volcano-Lava", "Geyser-Old", "Rainforest-Canopy",
    "Savanna-Sunset", "Tundra-Arctic", "Wetland-Reed", "Mangrove-Root", "Kelp-Forest",
    "Coral-Spawning", "DeepSea-Angler", "Octopus-Camouflage", "Jellyfish-Glow", "Seahorse-Float",
    "Starfish-Tide", "Crab-Sand", "Lobster-Trap", "Oyster-Pearl", "Sushi-Fish",
    "Whale-Breach", "Dolphin-Pod", "Shark-Fin", "Seal-Rock", "Penguin-Colony",
    "PolarBear-Ice", "Walrus-Tusk", "Moose-Forest", "Bear-Salmon", "Wolf-Pack",
    "Fox-Snow", "Deer-Meadow", "Owl-Night", "Eagle-Soar", "Hawk-Dive",
    "Parrot-Rainbow", "Flamingo-Pond", "Peacock-Fan", "Swan-Lake", "Duck-Pond",
    "Chicken-Coop", "Rooster-Dawn", "Turkey-Farm", "Pig-Mud", "Sheep-Pasture",
    "Goat-Mountain", "Horse-Gallop", "Donkey-Field", "Camel-Desert", "Llama-Andes",
    "Alpaca-Fluff", "Kangaroo-Pouch", "Koala-Eucalyptus", "Platypus-Stream", "Wombat-Burrow",
    "Tasmanian-Devil", "Quokka-Smile", "Capybara-River", "Sloth-Hang", "Anteater-Nose",
    "Armadillo-Armor", "Porcupine-Spike", "Hedgehog-Curl", "Rabbit-Burrow", "Squirrel-Oak",
    "Beaver-Dam", "Otter-River", "Raccoon-Night", "Skunk-Stripe", "Bat-Cave",
    "Butterfly-Garden", "Moth-Lamp", "Dragonfly-Pond", "Firefly-Field", "Ladybug-Leaf",
    "Beetle-Shine", "Ant-Hill", "Spider-Web", "Scorpion-Desert", "Snail-Trail",
    "Frog-Pond", "Toad-Garden", "Salamander-Moss", "Turtle-Sun", "Crocodile-River",
    "Snake-Coil", "Lizard-Rock",     "Chameleon-Color", "Gecko-Wall", "Iguana-Tree",
    "OpenAI-Green", "Claude-Orange", "Gemini-Blue", "Llama-Purple", "Mistral-Wind",
    "SD-Palette", "Embedding-Grid", "VectorDB-Stack", "FineTune-Gear", "Token-Scroll",
    "Chip-Silicon", "ChipCrisis-Warn", "Buddha-Lotus", "Hindu-Om", "Islam-Crescent",
    "Cross-Gold", "StarDavid-Blue", "TaiChi-Yin", "Erasmus-EU", "Duolingo-Owl",
    "Buergergeld-Euro", "Wohngeld-Home", "Zinseszins-Growth", "DeFi-Pool", "Shopify-Bag",
    "Dropship-Box", "ESG-Leaf", "CO2-Cloud", "Passive-Coin", "Pension-Clock",
    "Mietbremse-Scale", "SolidBattery-Blue", "Perovskite-Sun", "VerticalFarm-Tower",
    "Rewild-Forest", "Mycelium-Net", "Neuro-Chip", "PQC-Lock", "SocialEng-Hook",
    "OSINT-Lens", "Zettel-Stack", "Notion-Page", "Obsidian-Gem", "GTD-Inbox",
    "Eisenhower-Grid", "LaTeX-Paper", "Plagiat-Stop", "APA-Books",
    "Sakura-Temple", "Zen-Garden", "Torii-Gate", "Pagoda-Gold", "Bonsai-Mini",
    "Sushi-Roll", "Ramen-Steam", "Kimchi-Jar", "Bibimbap-Bowl", "HotPot-Bubble",
    "DimSum-Steamer", "Fortune-Cookie", "Chopstick-Pair", "TeaHouse-Bamboo",
    "CherryBlossom-Pink", "Maple-Red", "Bamboo-Grove", "Lotus-Pond", "Koi-Gold",
    "Zen-Rock", "Meditation-Bell", "Incense-Smoke", "Prayer-Flag", "Mandala-Round",
    "Alpine-Cabin", "Fjord-Blue", "Nordic-Aurora", "Sauna-Steam", "Hygge-Candle",
    "Viking-Ship", "Runestone-Gray", "Tulip-Field", "Windmill-Dutch", "Canal-Amsterdam",
    "Gondola-Venice", "Colosseum-Rome", "Acropolis-Athens", "Sagrada-Spire", "Louvre-Glass",
    "Brandenburg-Gate", "Reichstag-Dome", "Atomium-Brussels", "Sagrada-Light", "Gaudi-Tile",
    "Flamenco-Red", "Castanet-Gold", "Guitar-Spain", "Paella-Pan", "Tapas-Plate",
    "Crepe-Paris", "Baguette-Fresh", "Cheese-Wheel", "Wine-Cork", "Champagne-Pop",
    "Espresso-Shot", "Gelato-Scoop", "Pasta-Pot", "Risotto-Gold", "Tiramisu-Layer",
    "Schnitzel-Crisp", "Pretzel-Salt", "Sauerkraut-Jar", "Bratwurst-Grill", "Lebkuchen-Spice",
    "Stollen-Fruit", "Glühwein-Mug", "Fondue-Pot", "Raclette-Melt", "Chocolate-Swiss",
    "Fondant-Cake", "Macaron-Pastel", "Eclair-Choco", "Profiterole-Cream", "Souffle-Rise",
    "Croissant-Butter", "Pain-Au-Choc", "Quiche-Lorraine", "Ratatouille-Color", "Bouillabaisse-Sea",
    "Fish-Chips", "Full-English", "Tea-Scone", "Pudding-UK", "Shepherd-Pie",
    "Haggis-Scot", "Whisky-Barrel", "Guinness-Pint", "Clover-Green", "Harp-Gold",
    "Viking-Horn", "Aurora-Ice", "Geyser-Burst", "Gullfoss-Fall", "BlueLagoon-Steam",
    "Reykjavik-Harbor", "Puffin-Cliff", "Moose-Canada", "Maple-Syrup", "Poutine-Cheese",
    "Hockey-Puck", "Loon-Lake", "Totem-Wood", "Dreamcatcher-Web", "Tipi-Tent",
    "Cactus-Desert", "Route66-Sign", "GrandCanyon-Red", "Monument-Valley", "Niagara-Mist",
    "Yellowstone-Geysir", "Bison-Plain", "Eagle-Soar-US", "Liberty-Torch", "Capitol-Dome",
    "WhiteHouse-Col", "Hollywood-Hills", "GoldenGate-Red", "Alamo-Stone", "SpaceNeedle",
    "Bean-Chicago", "MardiGras-Beads", "Jazz-NewOrleans", "BBQ-Texas", "Cajun-Spice",
    "Taco-Truck", "Burrito-Wrap", "Guacamole-Green", "Salsa-Red", "Tequila-Lime",
    "Coffee-Colombia", "Cacao-Bean", "Amazon-River", "Machu-Steps", "Llama-Andes",
    "Tango-Red", "Mate-Gourd", "Steak-Grill", "Empanada-Gold", "Carnival-Rio",
    "Samba-Feather", "Capoeira-Kick", "Amazon-Canopy", "Iguazu-Fall", "Patagonia-Ice",
    "Penguin-Antarctic", "Orca-Wave", "Kangaroo-Outback", "Koala-Eucalyptus", "Sydney-Opera",
    "GreatBarrier-Reef", "Uluru-Red", "Didgeridoo-Brown", "Maori-Tattoo", "Haka-Stance",
    "BoraBora-Lagoon", "Hula-Dance", "Ukulele-Strum", "Pineapple-Gold", "Volcano-Hawaii",
    "CherryBlossom-Tokyo", "Shinkansen-Speed", "Sushi-Chef", "Ramen-Shop", "Arcade-Tokyo",
    "Neon-Alley", "Capsule-Hotel", "Onsen-Steam", "MtFuji-Snow", "Zen-Temple",
    "Hanbok-Color", "KPop-Mic", "Bibimbap-Color", "DMZ-Fence", "Seoul-Tower",
    "Dragon-Dance", "GreatWall-Mist", "Terracotta-Army", "Panda-Bamboo", "Silk-Road",
    "Diwali-Lamp", "Holi-Powder", "Yoga-India", "Spice-Market", "Rickshaw-Ride",
    "TukTuk-Bangkok", "Floating-Market", "Temple-Angkor", "Bali-Rice", "Komodo-Dragon",
    "Orangutan-Jungle", "Petronas-Twin", "Satay-Grill", "Laksa-Bowl", "Durian-Spike",
    "Pho-Bowl", "AoDai-Silk", "Halong-Bay", "Angkor-Sunrise", "Bagan-Temple",
    "Inle-Lake", "Shwedagon-Gold", "Tea-Plantation", "Elephant-Safari", "TajMahal-White",
    "Ganges-Morning", "Spice-India", "Camel-Rajasthan", "Sari-Color", "Bollywood-Reel",
    "Dubai-Burj", "Desert-Safari", "Falcon-UAE", "Oud-Perfume", "Mosque-Blue",
    "Pyramid-Giza", "Nile-Boat", "Papyrus-Scroll", "Camel-Caravan", "Sphinx-Sand",
    "Morocco-Medina", "Tagine-Pot", "Atlas-Mountain", "Sahara-Dune", "Oasis-Palm",
    "Kilimanjaro-Peak", "Serengeti-Sun", "Baobab-Tree", "Masai-Red", "Victoria-Falls",
    "CapeTown-Table", "Penguin-Beach", "Wine-Stellen", "Kruger-Safari", "Zebra-Stripe",
    "Giraffe-Tall", "Hippo-River", "Cheetah-Speed", "Hyena-Laugh", "Meerkat-Stand",
    "Flamingo-Lake", "Pelican-Dive", "Stork-Nest", "Pelican-Bill", "Crane-Dance",
    "Swan-Grace", "Peacock-Fan", "Toucan-Beak", "Hummingbird-Hover", "Owl-Wisdom",
    "Falcon-Dive", "Condor-Wide", "Albatross-Glide", "Puffin-Color", "Penguin-Waddle",
    "Seal-Clap", "Walrus-Tusk", "Narwhal-Horn", "Beluga-White", "Manatee-Gentle",
    "Jellyfish-Glow", "Octopus-Ink", "Squid-Jet", "Nautilus-Spiral", "Coral-Garden",
    "Anemone-Wave", "Clownfish-Orange", "Seahorse-Curl", "Starfish-Five", "Shell-Spiral",
    "Pearl-Oyster", "Lobster-Red", "Crab-Walk", "Shrimp-Pink", "Sushi-Salmon",
    "Tuna-Steak", "Sardine-School", "Anchovy-Salt", "Caviar-Black", "Oyster-Shuck",
    "Mussel-Blue", "Scallop-Shell", "Abalone-Rainbow", "Urchin-Spike", "Kelp-Forest",
    "Seaweed-Green", "Tide-Pool", "Lighthouse-Storm", "Pier-Sunset", "Boardwalk-Wood",
    "Lifeguard-Tower", "Surfboard-Wax", "BeachBall-Color", "Sandcastle-Tower", "Seashell-Pink",
    "Driftwood-Gray", "Message-Bottle", "Anchor-Rust", "Compass-North", "Sextant-Brass",
    "Captain-Hat", "Sail-Rigging", "Mast-Wood", "Porthole-Round", "Submarine-Yellow",
    "Periscope-Up", "Torpedo-Sleek", "Aircraft-Carrier", "Battleship-Gray", "Cruise-Deck",
    "Ferry-White", "Yacht-Luxury", "Kayak-Orange", "Canoe-Wood", "Paddleboard-Blue",
    "Rowboat-Lake", "Gondola-Venice2", "Houseboat-Canal", "Icebreaker-Red", "Tugboat-Strong",
    "Fishing-Trawler", "Lobster-Trap", "Net-Cast", "Buoy-Red", "Harbor-Fog2",
    "Crane-Port", "Container-Blue", "Forklift-Yellow", "Pallet-Stack", "Warehouse-Aisle",
    "Barcode-Beep", "QR-Scan", "NFC-Tap2", "Wallet-Leather", "Coin-Stack",
    "Bank-Vault2", "ATM-Green", "Stock-Ticker2", "Bond-Certificate", "Crypto-Wallet2",
    "NFT-Gallery2", "DAO-Vote", "Smart-Contract", "Blockchain-Link", "Mining-Rig",
    "Hash-Rate", "Wallet-Seed", "Cold-Storage", "Hot-Wallet", "Exchange-Chart",
    "Bull-Market", "Bear-Market", "Candle-Green", "Candle-Red", "Volume-Bar",
    "IPO-Bell", "Merger-Handshake", "Startup-Pitch", "Unicorn-Horn", "Accelerator-Rocket",
    "Incubator-Light", "Coworking-Desk", "Whiteboard-Idea", "Sticky-Wall", "Kanban-Board",
    "Scrum-Sprint", "Retro-Postit", "Standup-Circle", "Demo-Day", "Hackathon-Code",
    "Bug-Ticket", "Feature-Flag", "A-B-Test", "Funnel-Chart", "Heatmap-Click2",
    "SEO-Rank2", "PPC-Click", "Newsletter-Open", "CRM-Pipeline2", "Chatbot-Bubble",
    "Voicebot-Wave", "RPA-Robot", "OCR-Scan", "PDF-Stack", "E-Sign-Pen",
    "Invoice-Paid", "Receipt-Scan", "Tax-Return", "Payroll-Check", "Timesheet-Clock",
    "PTO-Beach", "Sick-Note", "Onboarding-Badge", "Offboarding-Box", "Mentor-Handshake",
    "Intern-Laptop", "Apprentice-Tool", "Master-Craft", "Workshop-Bench", "Lathe-Spin",
    "CNC-Mill", "3D-Printer2", "Laser-Cut", "CNC-Router", "Solder-Iron",
    "Breadboard-Wire", "Oscilloscope-Wave", "Multimeter-Read", "Battery-Cell2", "Solar-Cell2",
    "Wind-Blade", "Hydro-Turbine", "Nuclear-Cool", "Coal-Plant", "Oil-Rig",
    "Pipeline-Steel", "Tanker-Ship", "Refinery-Tower", "Gas-Flame", "EV-Plug2",
    "Charging-Station2", "Battery-Swap", "Hydrogen-Tank2", "Fuel-Cell", "Grid-Smart",
    "Meter-Digital", "Insulation-Wool", "HeatPump-Fan", "Radiator-White", "Thermostat-Round",
    "SmartLock-Blue", "Doorbell-Cam", "Robot-Vacuum", "SmartBulb-RGB", "Speaker-Assistant",
    "Mesh-Wifi", "Router-Antenna", "Fiber-Optic", "Satellite-Dish2", "Drone-Cam",
    "Gimbal-Steady", "Tripod-Legs", "Lens-Prime", "Flash-Studio", "Reflector-Silver",
    "GreenScreen-Fold", "Softbox-Light", "Teleprompter-Glass", "Mixer-Slider", "Podcast-Boom",
    "Radio-Wave", "TV-Tower", "Newspaper-Press2", "Typewriter-Keys", "Printing-Press2",
    "Book-Spine", "Library-Shelf", "Bookmark-Ribbon", "Highlighter-Yellow", "Pencil-Sharpen",
    "Eraser-Pink", "Ruler-Line", "Protractor-Angle", "Compass-Draw", "Globe-Spin",
    "Map-Pin", "GPS-Dot", "Route-Line", "Traffic-Jam", "Parking-P", "Toll-Gate2",
    "Border-Checkpoint", "Customs-Stamp", "Visa-Page", "Embassy-Flag", "Diplomat-Tie",
    "Treaty-Sign", "Peace-Dove2", "Protest-Megaphone", "Vote-Hand", "Ballot-Box2",
    "Coalition-Handshake", "Summit-Table", "Gavel-Court", "Jury-Box", "Witness-Stand",
    "Handcuff-Silver", "Badge-Police", "Siren-Blue", "Fire-Helmet", "Ambulance-Cross",
    "Stretcher-Red", "IV-Drip", "ECG-Line", "Pulse-Ox", "Ventilator-Green",
    "Surgery-Light", "Scalpel-Steel", "Microscope-Lab", "Petri-Dish", "DNA-Helix2",
    "RNA-Strand", "Virus-Spike", "Vaccine-Vial", "Mask-Blue", "Gloves-Latex",
    "Sanitizer-Pump", "Quarantine-Tape", "Contact-Trace", "R-Value-Chart", "Herd-Shield",
    "Antibody-Y", "TCell-Attack", "BCell-Blue", "Cytokine-Storm", "Placebo-Pill2",
    "Clinical-Trial", "Double-Blind", "PeerReview-Stamp", "Preprint-Server", "Citation-Count",
    "HIndex-Star", "Grant-Money", "Lab-Coat", "Field-Notebook", "Rock-Hammer",
    "Fossil-Bone", "Dino-Skull", "Amber-Bug", "Meteorite-Black", "Telescope-Radio",
    "Observatory-White", "Planetarium-Dome", "Rocket-Launch2", "Satellite-Solar", "Space-Walk",
    "Moon-Boot", "Mars-Rover2", "Terraform-Green", "Space-Elevator", "Solar-Sail",
    "Ion-Engine", "Warp-Bubble", "Alien-Signal", "SETI-Dish", "UFO-Lights2",
    "Area51-Fence", "Roswell-Crash", "Conspiracy-Board", "TinFoil-Hat", "Matrix-Code2",
    "Hacker-Hoodie", "Keylogger-USB", "Ransom-Lock2", "Firewall-Brick", "VPN-Shield2",
    "Captcha-Box", "2FA-Phone", "Biometric-Eye", "Passkey-Key", "Breach-Alert",
    "Leak-Database", "DarkWeb-Onion", "Tor-Browser", "Bitcoin-Orange", "Ethereum-Purple",
    "Stablecoin-Dollar", "Memecoin-Doge", "Airdrop-Parachute", "Staking-Reward", "Yield-Farm",
    "Liquidity-Mining", "Bridge-Chain", "Layer2-Rollup", "Gas-Fee", "MEV-Bot",
    "Oracle-Data", "Governance-Vote", "Timelock-Vault", "Multisig-Wallet", "Hardware-Ledger"
  ];

  function seededRandom(seed) {
    var s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    return function () {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  function hashStr(str) {
    var h = 0;
    var i;
    for (i = 0; i < str.length; i++) {
      h = (h << 5) - h + str.charCodeAt(i);
      h |= 0;
    }
    return Math.abs(h);
  }

  function normalize(t) {
    return String(t).toLowerCase()
      .replace(/[ä]/g, "ae").replace(/[ö]/g, "oe").replace(/[ü]/g, "ue").replace(/[ß]/g, "ss");
  }

  function hslToRgb(h, s, l) {
    h = ((h % 360) + 360) % 360;
    s = Math.max(0, Math.min(1, s));
    l = Math.max(0, Math.min(1, l));
    var c = (1 - Math.abs(2 * l - 1)) * s;
    var x = c * (1 - Math.abs((h / 60) % 2 - 1));
    var m = l - c / 2;
    var r = 0, g = 0, b = 0;
    if (h < 60) { r = c; g = x; }
    else if (h < 120) { r = x; g = c; }
    else if (h < 180) { g = c; b = x; }
    else if (h < 240) { g = x; b = c; }
    else if (h < 300) { r = x; b = c; }
    else { r = c; b = x; }
    return [
      Math.round((r + m) * 255),
      Math.round((g + m) * 255),
      Math.round((b + m) * 255)
    ];
  }

  function styleColor(hue, styleKey, rng, boost) {
    var st = STYLES[styleKey] || STYLES.standard;
    var h = hue + (rng() - 0.5) * 22;
    if (styleKey === "standard") h = hue + (rng() - 0.5) * 14;
    if (styleKey === "noco") h = 155 + rng() * 110;
    if (styleKey === "neon") return hslToRgb(h, 1, 0.42 + rng() * 0.38);
    if (styleKey === "dark") return hslToRgb(h, st.sat * 0.9, 0.22 + rng() * 0.22 + (boost || 0) * 0.06);
    return hslToRgb(h, st.sat * (0.78 + rng() * 0.28), st.light + (boost || 0) * 0.12);
  }

  function lerpColor(a, b, t) {
    return [
      Math.round(a[0] + (b[0] - a[0]) * t),
      Math.round(a[1] + (b[1] - a[1]) * t),
      Math.round(a[2] + (b[2] - a[2]) * t)
    ];
  }

  function clamp255(n) { return Math.max(0, Math.min(255, Math.round(n))); }

  function detHash(x, y, seed, salt) {
    var h = hashStr(String(seed) + ":" + salt + ":" + x + "," + y);
    return (h % 10000) / 10000;
  }

  function buildPalette(hue, styleKey, seed) {
    var pal = [];
    var rng = seededRandom(seed + 991);
    var i;
    for (i = 0; i < 10; i++) {
      pal.push(styleColor(hue + i * 18 + (rng() - 0.5) * 10, styleKey, rng, (i - 5) * 0.04));
    }
    return pal;
  }

  function dist(x, y, cx, cy) {
    return Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
  }

  function inRect(nx, ny, l, r, t, b) {
    return nx >= l && nx <= r && ny >= t && ny <= b;
  }

  function getShapeMask(pattern, nx, ny, seed) {
    var det = function (salt) { return detHash(Math.floor(nx * 100), Math.floor(ny * 100), seed, salt); };
    var d = Math.sqrt(nx * nx + ny * ny);
    var ax = Math.abs(nx);
    var ay = Math.abs(ny);
    var angle = Math.atan2(ny, nx);
    var wave = Math.sin(nx * 8 + ny * 5);

    switch (pattern) {
      case "sun":
        if (d < 0.12) return 1;
        if (d < 0.2) return 0.95;
        if (d > 0.2 && d < 0.5 && Math.abs(Math.sin(angle * 4)) > 0.55) return 0.88;
        if (d < 0.48) return 0.4;
        return 0;
      case "moon":
        if (d < 0.32 && nx > -0.08) return 0.9;
        if (d < 0.38 && nx < -0.05) return 0.15;
        return 0;
      case "heart":
        if (Math.pow(nx, 2) + Math.pow(ny - 0.08 - Math.sqrt(Math.abs(nx)), 2) < 0.32) return 0.95;
        return 0;
      case "robot":
        if (inRect(nx, ny, -0.3, 0.3, -0.52, -0.08)) return 0.95;
        if (inRect(nx, ny, -0.36, 0.36, -0.08, 0.42)) return 0.85;
        if (inRect(nx, ny, -0.22, -0.06, -0.38, -0.22) || inRect(nx, ny, 0.06, 0.22, -0.38, -0.22)) return 1;
        if (ny < -0.54 && ax < 0.06) return 0.7;
        return 0;
      case "rocket":
        if (ny < -0.1 && ax < 0.14 * (0.55 - ny)) return 0.9;
        if (ny >= -0.1 && ny < 0.35 && ax < 0.12) return 0.85;
        if (ny >= 0.35 && ny < 0.55 && ax < 0.22 - (ny - 0.35)) return 0.5;
        return 0;
      case "cat":
      case "dog":
      case "fox":
        if (d < 0.28) return 0.9;
        if (pattern === "cat" && ny < -0.18 && ax < 0.2 && (nx < -0.05 || nx > 0.05)) return 0.8;
        if (d < 0.38 && ny > 0.05) return 0.55;
        if (inRect(nx, ny, -0.12, -0.02, -0.08, 0.02) || inRect(nx, ny, 0.02, 0.12, -0.08, 0.02)) return 1;
        return 0;
      case "flower":
      case "tulip":
      case "sunflower":
        if (d < 0.12) return 0.95;
        if (d < 0.38 && Math.abs(Math.sin(angle * (pattern === "sunflower" ? 10 : 5))) > 0.2) return 0.8;
        if (ny > 0.2 && ax < 0.06) return 0.6;
        return 0;
      case "tree":
      case "bonsai":
      case "christmas":
        if (ny > 0.15 && ax < 0.07) return 0.7;
        if (ny < 0.15 && ny > -0.45 && ax < 0.35 - ny * 0.5) return 0.85;
        if (pattern === "christmas" && ny < -0.2 && ax < 0.12) return 0.95;
        return 0;
      case "mountain":
      case "canyon":
        if (ny > 0.25 - Math.abs(nx) * 0.55) return 0.8;
        if (ny > 0.45) return 0.55;
        return 0;
      case "waves":
      case "surf":
        if (Math.sin(nx * 5 + 1.2) * 0.18 + 0.08 > ny && ny > -0.35) return 0.75;
        return 0;
      case "flame":
      case "phoenix":
      case "volcano":
        if (ny < 0.15 && ax < (0.35 - ny) * 0.45) return 0.95;
        if (ny < 0.45 && ax < (0.5 - ny) * 0.35) return 0.7;
        if (ny >= 0.45) return 0.45;
        return 0;
      case "skull":
      case "ghost":
        if (d < 0.32) return pattern === "ghost" ? 0.75 : 0.9;
        if (pattern === "skull" && inRect(nx, ny, -0.18, 0.18, 0.05, 0.22)) return 0.85;
        return 0;
      case "ufo":
      case "alien":
        if (pattern === "ufo" && ny > -0.05 && ny < 0.12 && ax < 0.42) return 0.9;
        if (pattern === "ufo" && ny >= 0.12 && ny < 0.22 && ax < 0.18) return 0.5;
        if (pattern === "alien" && d < 0.35) return 0.9;
        if (pattern === "alien" && d < 0.45 && ny > 0.1) return 0.4;
        return 0;
      case "planet":
        if (d < 0.35) return 0.9;
        if (d < 0.42 && Math.sin(angle * 3 + 1) > 0) return 0.55;
        return 0;
      case "dragon":
        if (inRect(nx, ny, -0.45, 0.1, -0.15, 0.2)) return 0.85;
        if (nx > 0.05 && nx < 0.42 && ny > -0.2 && ny < 0.15) return 0.9;
        if (ny < -0.15 && nx > 0.25 && ax < 0.2) return 0.75;
        return 0;
      case "castle":
      case "tower":
        if (ny > 0.35 && ax < 0.42) return 0.7;
        if (ny < 0.35 && inRect(nx, ny, -0.38, 0.38, -0.45, 0.35)) return 0.85;
        if (ax > 0.28 && ax < 0.38 && ny < 0.0) return 0.95;
        return 0;
      case "fish":
      case "dolphin":
      case "whale":
      case "shark":
        if (inRect(nx, ny, -0.35, 0.35, -0.12, 0.12)) return 0.85;
        if (nx > 0.28 && nx < 0.48 && Math.abs(ny) < 0.18 - (nx - 0.28)) return 0.7;
        if (nx < -0.32 && Math.abs(ny) < 0.18) return 0.55;
        return 0;
      case "bird":
      case "eagle":
      case "swan":
        if (d < 0.18) return 0.9;
        if (Math.abs(ny + 0.05) < 0.12 - ax * 0.25 && ax < 0.45) return 0.75;
        return 0;
      case "butterfly":
        if (d < 0.1) return 0.95;
        if (ax > 0.08 && ax < 0.42 && Math.abs(ny) < 0.28 - ax * 0.35) return 0.8;
        return 0;
      case "house":
        if (ny > 0.05 && inRect(nx, ny, -0.32, 0.32, 0.05, 0.42)) return 0.85;
        if (ny <= 0.05 && ny > -0.35 && ax < 0.38 - ny * 0.5) return 0.9;
        return 0;
      case "car":
        if (inRect(nx, ny, -0.42, 0.42, 0.0, 0.22)) return 0.85;
        if (inRect(nx, ny, -0.28, 0.28, -0.18, 0.02)) return 0.75;
        return 0;
      case "crystal":
      case "gem":
      case "diamond":
        if (ax + ay * 0.8 < 0.42) return 0.9;
        return 0;
      case "mushroom":
        if (d < 0.28 && ny < 0.05) return 0.9;
        if (ax < 0.1 && ny >= 0.05 && ny < 0.42) return 0.7;
        return 0;
      case "smiley":
        if (d < 0.38) return 0.9;
        return 0;
      case "music":
        if (inRect(nx, ny, 0.05, 0.18, -0.42, 0.35)) return 0.85;
        if (d < 0.14 && nx > 0.1 && ny < -0.15) return 0.95;
        return 0;
      case "gamepad":
        if (inRect(nx, ny, -0.42, 0.42, -0.12, 0.18)) return 0.85;
        if ((d < 0.12 && nx < -0.12) || (d < 0.12 && nx > 0.12)) return 0.7;
        return 0;
      case "helix":
      case "dna":
        if (Math.sin(nx * 6 + ny * 2) > 0.25 && ax < 0.18) return 0.85;
        if (Math.sin(nx * 6 + ny * 2 + Math.PI) > 0.25 && ax < 0.18) return 0.85;
        return 0;
      case "atom":
        if (d < 0.1) return 1;
        if (Math.abs(Math.sin(angle * 2) * nx * 2.2) + ny * 0.5 < 0.12) return 0.8;
        if (Math.abs(Math.cos(angle * 2) * nx * 2.2) + ny * 0.5 < 0.12) return 0.8;
        return 0;
      case "mandala":
        if (d < 0.12) return 0.95;
        if (d < 0.42 && Math.abs(Math.sin(angle * 8)) > 0.35) return 0.75;
        if (d < 0.55 && Math.abs(Math.cos(angle * 5)) > 0.4) return 0.55;
        return 0;
      case "aurora":
        if (ny < -0.1 && Math.sin(nx * 4 + det("aur") * 0.5) > -0.1) return 0.8;
        return 0;
      case "rainbow":
        if (ny > -0.05 && ny < 0.35 && d > 0.25 && d < 0.48) return 0.85;
        return 0;
      case "skyline":
        if (ny > 0.42 - (Math.sin(nx * 7) * 0.08 + Math.floor(det("sky") * 3) * 0.05)) return 0.85;
        return 0;
      case "checker":
      case "maze":
      case "dice":
        return ((Math.floor((nx + 1) * 4) + Math.floor((ny + 1) * 4)) % 2 === 0) ? 0.75 : 0;
      case "glitch":
      case "graffiti":
        if (Math.floor(det("gl") * 6) === 0) return 0.95;
        if (inRect(nx, ny, -0.4, 0.4, -0.25, 0.25)) return 0.65;
        return 0;
      case "stars":
      case "nebula":
        if (det("st1") > 0.93) return 1;
        if (d < 0.08 && det("st2") > 0.7) return 0.85;
        return 0;
      case "snow":
      case "snowman":
        if (pattern === "snowman" && d < 0.22 && ny > 0) return 0.9;
        if (pattern === "snowman" && d < 0.14 && ny < -0.05) return 0.9;
        if (det("sn") > 0.96) return 0.9;
        return 0;
      case "minimal":
        if (d < 0.25) return 0.85;
        return 0;
      case "jellyfish":
        if (d < 0.22 && ny < 0.05) return 0.9;
        if (ny > 0.05 && ax < 0.08 + (ny - 0.05) * 0.35) return 0.65;
        return 0;
      case "balloon":
        if (d < 0.22 && ny < -0.05) return 0.92;
        if (ny >= -0.05 && ny < 0.42 && ax < 0.04) return 0.55;
        return 0;
      case "spaceship":
        if (inRect(nx, ny, -0.38, 0.38, -0.05, 0.18)) return 0.9;
        if (ny < -0.05 && ax < 0.12) return 0.75;
        if (ny > 0.18 && ny < 0.32 && ax < 0.28 - (ny - 0.18)) return 0.55;
        return 0;
      case "spacestation":
        if (inRect(nx, ny, -0.42, 0.42, -0.08, 0.12)) return 0.88;
        if (ax > 0.32 && ax < 0.42 && Math.abs(ny) < 0.35) return 0.7;
        return 0;
      case "cyberpunk":
        if (ny > 0.38 - Math.abs(nx) * 0.15) return 0.85;
        if (det("cy") > 0.88 && ny > -0.2) return 0.95;
        return 0;
      case "hologram":
        if (d < 0.38 && Math.abs(Math.sin(angle * 6 + det("ho") * 2)) > 0.25) return 0.8;
        return 0;
      case "chip":
        if (inRect(nx, ny, -0.32, 0.32, -0.32, 0.32)) return 0.9;
        if (inRect(nx, ny, -0.38, 0.38, -0.38, 0.38) && !inRect(nx, ny, -0.28, 0.28, -0.28, 0.28)) return 0.55;
        return 0;
      case "server":
        if (inRect(nx, ny, -0.35, 0.35, -0.42, 0.42)) return 0.85;
        if (Math.abs(ny + 0.15) < 0.04 && ax < 0.35) return 0.95;
        return 0;
      case "solar":
        if (inRect(nx, ny, -0.38, 0.38, -0.12, 0.12)) return 0.88;
        if (d < 0.08) return 0.95;
        return 0;
      case "windmill":
        if (d < 0.08) return 0.9;
        if (Math.abs(Math.sin(angle * 3)) * d < 0.38) return 0.75;
        if (ny > 0.12 && ax < 0.05) return 0.65;
        return 0;
      case "sandcastle":
        if (ny > 0.2 && ax < 0.35 - ny * 0.2) return 0.8;
        if (ny > 0.42) return 0.55;
        return 0;
      case "oasis":
        if (d < 0.18 && ny > 0.05) return 0.85;
        if (ny < -0.05 && Math.abs(nx) < 0.35 - ny * 0.3) return 0.7;
        return 0;
      case "coral":
        if (d < 0.15) return 0.9;
        if (d < 0.42 && Math.sin(angle * 7) > 0.1) return 0.75;
        return 0;
      case "narwhal":
        if (inRect(nx, ny, -0.35, 0.35, -0.1, 0.1)) return 0.85;
        if (nx > 0.2 && nx < 0.48 && Math.abs(ny + 0.35) < 0.06) return 0.9;
        return 0;
      case "peacock":
        if (d < 0.12) return 0.9;
        if (d < 0.42 && ny < 0.1 && Math.abs(Math.sin(angle * 6)) > 0.2) return 0.8;
        if (ny > 0.15 && ax < 0.08) return 0.6;
        return 0;
      case "mermaid":
        if (inRect(nx, ny, -0.22, 0.22, -0.35, 0.05)) return 0.88;
        if (ny > 0.05 && ax < 0.28 - ny * 0.35) return 0.75;
        return 0;
      case "igloo":
        if (ny > -0.05 && d < 0.38 && ny < 0.35) return 0.85;
        if (inRect(nx, ny, -0.12, 0.12, 0.35, 0.42)) return 0.6;
        return 0;
      case "campfire":
        if (ny < 0.2 && ax < (0.3 - ny) * 0.5) return 0.95;
        if (ny < 0.45 && ax < (0.45 - ny) * 0.4) return 0.65;
        return 0;
      case "lantern":
        if (inRect(nx, ny, -0.14, 0.14, -0.25, 0.15)) return 0.9;
        if (ny < -0.25 && ax < 0.04) return 0.55;
        if (ny > 0.15 && ax < 0.04) return 0.5;
        return 0;
      case "koi":
        if (inRect(nx, ny, -0.32, 0.32, -0.1, 0.1)) return 0.88;
        if (nx > 0.25 && nx < 0.45 && Math.abs(ny) < 0.14) return 0.7;
        return 0;
      case "lotus":
        if (d < 0.1) return 0.95;
        if (d < 0.35 && Math.abs(Math.sin(angle * 5)) > 0.15) return 0.8;
        return 0;
      case "pagoda":
      case "torii":
        if (ny > 0.3 && ax < 0.35) return 0.65;
        if (inRect(nx, ny, -0.35, 0.35, -0.42, 0.3)) return 0.85;
        if (pattern === "torii" && ny < -0.15 && ax < 0.42) return 0.9;
        return 0;
      case "bubbletea":
        if (d < 0.28 && ny < 0.1) return 0.88;
        if (inRect(nx, ny, -0.1, 0.1, 0.1, 0.42)) return 0.7;
        if (det("bb") > 0.9 && d < 0.35) return 0.85;
        return 0;
      case "croissant":
        if (Math.pow(nx + 0.1, 2) + Math.pow(ny, 2) < 0.28 && nx > -0.35) return 0.88;
        return 0;
      case "avocado":
        if (d < 0.28 && ny > -0.05) return 0.88;
        if (d < 0.12) return 0.95;
        return 0;
      case "strawberry":
        if (d < 0.3 && ny < 0.15) return 0.9;
        if (ny < -0.2 && ax < 0.15) return 0.75;
        return 0;
      case "pineapple":
        if (d < 0.28) return 0.88;
        if (ny < -0.22 && ax < 0.2) return 0.8;
        return 0;
      case "coconut":
        if (d < 0.28) return 0.9;
        if (d < 0.35 && det("co") > 0.85) return 0.7;
        return 0;
      case "mango":
        if (Math.pow(nx - 0.05, 2) + Math.pow(ny + 0.05, 2) < 0.32) return 0.88;
        return 0;
      case "grapes":
        if (d < 0.12) return 0.9;
        if (d < 0.22 && det("gr") > 0.4) return 0.85;
        if (d < 0.32 && det("gr2") > 0.35) return 0.8;
        return 0;
      case "lemon":
        if (d < 0.3 && nx > -0.1) return 0.88;
        return 0;
      case "carrot":
        if (inRect(nx, ny, -0.1, 0.1, -0.42, 0.35)) return 0.85;
        if (ny < -0.35 && ax < 0.18 - (ny + 0.35)) return 0.7;
        return 0;
      case "corn":
        if (inRect(nx, ny, -0.12, 0.12, -0.42, 0.35)) return 0.85;
        if (ny < -0.35 && ax < 0.2) return 0.65;
        return 0;
      case "bbq":
        if (inRect(nx, ny, -0.35, 0.35, -0.08, 0.12)) return 0.85;
        if (ny < -0.08 && ax < 0.25) return 0.7;
        return 0;
      case "golem":
      case "oni":
        if (d < 0.35) return 0.9;
        if (inRect(nx, ny, -0.2, 0.2, 0.05, 0.25)) return 0.8;
        return 0;
      case "wand":
        if (inRect(nx, ny, -0.06, 0.06, -0.42, 0.42)) return 0.85;
        if (d < 0.12 && nx > 0.05 && ny < -0.1) return 0.95;
        return 0;
      case "wizard":
        if (inRect(nx, ny, -0.28, 0.28, -0.15, 0.35)) return 0.85;
        if (ny < -0.15 && ax < 0.35 - Math.abs(nx) * 0.5) return 0.9;
        return 0;
      case "rune":
        if (inRect(nx, ny, -0.28, 0.28, -0.35, 0.35)) return 0.85;
        if (Math.abs(Math.sin(nx * 8) * 0.15 - ny) < 0.06) return 0.95;
        return 0;
      case "totem":
        if (inRect(nx, ny, -0.12, 0.12, -0.42, 0.42)) return 0.85;
        if (Math.abs(ny + 0.1) < 0.06 && ax < 0.2) return 0.9;
        return 0;
      case "egg":
        if (Math.pow(nx, 2) + Math.pow(ny + 0.05, 2) < 0.28) return 0.9;
        return 0;
      case "map":
        if (inRect(nx, ny, -0.42, 0.42, -0.32, 0.32)) return 0.75;
        if (det("mp") > 0.9) return 0.9;
        return 0;
      case "compass":
        if (d < 0.12) return 0.95;
        if (d < 0.38 && Math.abs(Math.sin(angle * 4)) > 0.4) return 0.8;
        return 0;
      case "ski":
      case "snowboard":
        if (Math.abs(ny + nx * 0.3) < 0.08 && ax < 0.42) return 0.85;
        if (ny > 0.15 && ax < 0.08) return 0.6;
        return 0;
      case "skate":
        if (Math.abs(ny - 0.05) < 0.1 && ax < 0.4) return 0.85;
        if (d < 0.1 && nx > 0.15) return 0.7;
        return 0;
      case "festival":
        if (ny > 0.25 && ax < 0.42) return 0.7;
        if (ny < 0.25 && det("fe") > 0.88) return 0.95;
        return 0;
      case "fireworks":
        if (det("fw") > 0.92) return 1;
        if (d < 0.08 && det("fw2") > 0.65) return 0.85;
        if (d < 0.35 && Math.abs(Math.sin(angle * 5)) > 0.5) return 0.55;
        return 0;
      case "confetti":
        if (det("cf") > 0.9) return 0.95;
        if (inRect(nx, ny, -0.35, 0.35, -0.3, 0.3)) return 0.45;
        return 0;
      case "perfume":
        if (inRect(nx, ny, -0.12, 0.12, -0.35, 0.15)) return 0.88;
        if (ny < -0.35 && ax < 0.08) return 0.55;
        return 0;
      case "umbrella":
        if (ny < -0.05 && d < 0.38 && d > 0.08) return 0.88;
        if (inRect(nx, ny, -0.04, 0.04, -0.05, 0.42)) return 0.65;
        return 0;
      case "lightning":
        if (Math.abs(nx * 1.2 - ny * 0.8) < 0.08 && ny > -0.35 && ny < 0.35) return 0.95;
        if (Math.abs(nx * 0.8 + ny * 1.1) < 0.06 && ny > -0.2) return 0.85;
        return 0;
      case "fog":
        if (Math.sin(nx * 3 + det("fg") * 2) > 0.1 && ny > -0.2) return 0.7;
        return 0;
      case "autumn":
        if (det("au") > 0.9 && d < 0.2) return 0.9;
        if (ny > 0.1 && ax < 0.08) return 0.65;
        return 0;
      case "garden":
        if (d < 0.12) return 0.9;
        if (d < 0.35 && Math.abs(Math.sin(angle * 5)) > 0.2) return 0.75;
        if (ny > 0.2 && ax < 0.06) return 0.55;
        return 0;
      case "axolotl":
      case "capybara":
      case "otter":
      case "hedgehog":
      case "squirrel":
        if (d < 0.3) return 0.9;
        if (d < 0.4 && ny > 0.05) return 0.55;
        if (inRect(nx, ny, -0.1, 0.1, -0.05, 0.05)) return 1;
        return 0;
      case "earth":
        if (d < 0.38) return 0.9;
        if (d < 0.42 && Math.sin(angle * 4 + 1) > 0) return 0.55;
        return 0;
      case "cloud":
        if (d < 0.18 && ny < 0.05) return 0.88;
        if (d < 0.32 && ny < 0.12) return 0.75;
        return 0;
      case "tv":
        if (inRect(nx, ny, -0.38, 0.38, -0.28, 0.22)) return 0.88;
        if (inRect(nx, ny, -0.32, 0.32, -0.22, 0.16)) return 0.95;
        if (ny > 0.22 && ny < 0.32 && ax < 0.08) return 0.6;
        return 0;
      case "bed":
        if (inRect(nx, ny, -0.42, 0.42, -0.08, 0.28)) return 0.85;
        if (inRect(nx, ny, -0.42, -0.18, -0.08, 0.12)) return 0.9;
        return 0;
      case "table":
        if (inRect(nx, ny, -0.38, 0.38, -0.05, 0.08)) return 0.88;
        if (ny > 0.08 && ax < 0.06) return 0.65;
        return 0;
      case "chair":
        if (inRect(nx, ny, -0.28, 0.28, -0.05, 0.32)) return 0.85;
        if (inRect(nx, ny, -0.32, 0.32, 0.32, 0.42)) return 0.7;
        return 0;
      case "door":
        if (inRect(nx, ny, -0.22, 0.22, -0.42, 0.42)) return 0.88;
        if (d < 0.08 && nx > 0.05 && ny > -0.05) return 0.95;
        return 0;
      case "window":
        if (inRect(nx, ny, -0.32, 0.32, -0.32, 0.32)) return 0.85;
        if (Math.abs(nx) < 0.04 || Math.abs(ny) < 0.04) return 0.95;
        return 0;
      case "ball":
        if (d < 0.32) return 0.9;
        if (d < 0.35 && det("bl") > 0.5) return 0.7;
        return 0;
      case "book":
        if (inRect(nx, ny, -0.28, 0.28, -0.35, 0.35)) return 0.88;
        if (Math.abs(nx) < 0.04) return 0.95;
        return 0;
      case "clock":
        if (d < 0.32) return 0.9;
        if (Math.abs(ny + nx * 0.3) < 0.04 && d < 0.28) return 0.95;
        return 0;
      case "lamp":
        if (d < 0.22 && ny < 0.05) return 0.9;
        if (inRect(nx, ny, -0.05, 0.05, 0.05, 0.42)) return 0.65;
        return 0;
      case "sofa":
        if (inRect(nx, ny, -0.42, 0.42, -0.05, 0.28)) return 0.85;
        if (inRect(nx, ny, -0.42, -0.32, -0.22, 0.05)) return 0.8;
        if (inRect(nx, ny, 0.32, 0.42, -0.22, 0.05)) return 0.8;
        return 0;
      case "bus":
        if (inRect(nx, ny, -0.42, 0.42, -0.12, 0.22)) return 0.88;
        if (inRect(nx, ny, -0.28, -0.08, 0.0, 0.12)) return 0.7;
        if (inRect(nx, ny, 0.08, 0.28, 0.0, 0.12)) return 0.7;
        return 0;
      case "train":
        if (inRect(nx, ny, -0.42, 0.42, -0.08, 0.18)) return 0.88;
        if (ny > 0.18 && ax < 0.35) return 0.55;
        return 0;
      case "plane":
        if (inRect(nx, ny, -0.12, 0.12, -0.35, 0.05)) return 0.88;
        if (Math.abs(ny) < 0.12 && ax < 0.42) return 0.8;
        return 0;
      case "bicycle":
        if (d < 0.18 && (nx < -0.05 || nx > 0.2)) return 0.85;
        if (d < 0.18 && nx > -0.2 && nx < 0.05) return 0.85;
        if (Math.abs(ny + 0.05) < 0.06 && ax < 0.35) return 0.75;
        return 0;
      case "key":
        if (inRect(nx, ny, -0.08, 0.08, -0.35, 0.15)) return 0.85;
        if (d < 0.12 && ny < -0.1) return 0.9;
        return 0;
      case "cup":
        if (d < 0.22 && ny < 0.1) return 0.88;
        if (inRect(nx, ny, -0.12, 0.12, 0.1, 0.38)) return 0.7;
        return 0;
      case "plate":
        if (d < 0.32 && d > 0.12) return 0.88;
        if (d < 0.12) return 0.75;
        return 0;
      case "spoon":
        if (inRect(nx, ny, -0.06, 0.06, -0.42, 0.35)) return 0.85;
        if (d < 0.14 && ny < -0.2) return 0.9;
        return 0;
      case "fork":
        if (inRect(nx, ny, -0.05, 0.05, -0.42, 0.35)) return 0.85;
        if (ny < -0.2 && ax < 0.12) return 0.9;
        return 0;
      case "fridge":
        if (inRect(nx, ny, -0.28, 0.28, -0.42, 0.42)) return 0.88;
        if (Math.abs(ny + 0.05) < 0.04) return 0.95;
        return 0;
      case "microwave":
        if (inRect(nx, ny, -0.35, 0.35, -0.18, 0.18)) return 0.88;
        if (inRect(nx, ny, -0.28, 0.28, -0.12, 0.12)) return 0.95;
        return 0;
      case "oven":
        if (inRect(nx, ny, -0.32, 0.32, -0.35, 0.35)) return 0.85;
        if (inRect(nx, ny, -0.22, 0.22, -0.22, 0.05)) return 0.95;
        return 0;
      case "mirror":
        if (inRect(nx, ny, -0.28, 0.28, -0.35, 0.35)) return 0.88;
        if (d < 0.2) return 0.95;
        return 0;
      case "toilet":
        if (inRect(nx, ny, -0.22, 0.22, -0.35, 0.15)) return 0.85;
        if (d < 0.2 && ny > 0.1) return 0.8;
        return 0;
      case "shower":
        if (inRect(nx, ny, -0.08, 0.08, -0.42, 0.42)) return 0.7;
        if (ny < -0.1 && det("sh") > 0.85) return 0.9;
        return 0;
      case "shoe":
        if (Math.pow(nx + 0.05, 2) + Math.pow(ny, 2) < 0.3) return 0.88;
        return 0;
      case "hat":
        if (d < 0.28 && ny < 0.05) return 0.88;
        if (ny < -0.15 && ax < 0.35) return 0.75;
        return 0;
      case "shirt":
        if (inRect(nx, ny, -0.32, 0.32, -0.25, 0.35)) return 0.85;
        if (ny < -0.25 && ax < 0.22 - Math.abs(nx) * 0.5) return 0.8;
        return 0;
      case "pants":
        if (inRect(nx, ny, -0.28, 0.28, -0.15, 0.42)) return 0.85;
        if (Math.abs(nx) > 0.08 && ny > 0.15) return 0.7;
        return 0;
      case "rain":
        if (det("rn") > 0.9) return 0.95;
        if (ny > -0.1 && Math.sin(nx * 8) > 0.2) return 0.55;
        return 0;
      case "fence":
        if (Math.abs(ny + 0.1) < 0.06 && ax < 0.42) return 0.85;
        if (ax > 0.3 && ax < 0.38 && ny < 0.2) return 0.7;
        return 0;
      case "road":
        if (ny > 0.15 && ax < 0.42) return 0.75;
        if (Math.abs(ny - 0.05) < 0.06 && ax < 0.42) return 0.9;
        return 0;
      case "traffic":
        if (inRect(nx, ny, -0.1, 0.1, -0.42, 0.42)) return 0.85;
        if (d < 0.1 && ny > 0.15) return 0.95;
        if (d < 0.1 && ny < -0.15) return 0.95;
        return 0;
      case "pen":
        if (inRect(nx, ny, -0.05, 0.05, -0.42, 0.35)) return 0.85;
        if (d < 0.1 && ny < -0.25) return 0.95;
        return 0;
      case "headphones":
        if (d < 0.32 && d > 0.18 && ny < 0.05) return 0.85;
        if (inRect(nx, ny, -0.08, 0.08, -0.05, 0.15)) return 0.8;
        return 0;
      case "hammer":
        if (inRect(nx, ny, -0.08, 0.08, -0.42, 0.15)) return 0.85;
        if (d < 0.18 && ny < -0.1) return 0.9;
        return 0;
      case "scissors":
        if (Math.abs(nx - ny * 0.5) < 0.08 && ny > -0.2) return 0.85;
        if (Math.abs(nx + ny * 0.5) < 0.08 && ny > -0.2) return 0.85;
        return 0;
      case "gift":
        if (inRect(nx, ny, -0.32, 0.32, -0.28, 0.28)) return 0.88;
        if (Math.abs(nx) < 0.04 || Math.abs(ny) < 0.04) return 0.95;
        return 0;
      case "church":
        if (inRect(nx, ny, -0.28, 0.28, -0.15, 0.42)) return 0.85;
        if (ny < -0.15 && ax < 0.18) return 0.9;
        return 0;
      case "lighthouse":
        if (inRect(nx, ny, -0.1, 0.1, -0.42, 0.42)) return 0.7;
        if (d < 0.15 && ny < -0.1) return 0.9;
        return 0;
      case "ship":
        if (inRect(nx, ny, -0.35, 0.35, 0.0, 0.22)) return 0.85;
        if (ny < 0.0 && inRect(nx, ny, -0.08, 0.08, -0.35, -0.05)) return 0.75;
        return 0;
      case "phone":
      case "laptop":
      case "camera":
        if (inRect(nx, ny, -0.32, 0.32, -0.28, 0.28)) return 0.88;
        if (pattern === "laptop" && inRect(nx, ny, -0.35, 0.35, 0.0, 0.12)) return 0.75;
        if (d < 0.12) return 0.95;
        return 0;
      case "apple":
        if (Math.pow(nx + 0.05, 2) + Math.pow(ny + 0.08, 2) < 0.32) return 0.9;
        if (ny < -0.15 && ax < 0.12) return 0.75;
        return 0;
      case "banana":
        if (Math.pow(nx * 0.75 + 0.08, 2) + Math.pow(ny * 1.25, 2) < 0.34 && nx > -0.2) return 0.88;
        return 0;
      case "orange":
        if (d < 0.3) return 0.9;
        if (d < 0.35 && det("or") > 0.45) return 0.75;
        return 0;
      case "pear":
        if (Math.pow(nx - 0.06, 2) + Math.pow(ny + 0.1, 2) < 0.3) return 0.88;
        return 0;
      case "horse":
        if (inRect(nx, ny, -0.35, 0.15, -0.12, 0.22)) return 0.88;
        if (inRect(nx, ny, -0.12, 0.32, -0.35, 0.05)) return 0.85;
        if (ny < -0.22 && nx > 0.08 && ax < 0.22) return 0.78;
        if (inRect(nx, ny, 0.18, 0.38, 0.05, 0.32)) return 0.7;
        return 0;
      case "skyscraper":
        if (ny > 0.42) return 0.55;
        if (ny > 0.12 && ax < 0.06 + det("sc") * 0.05) return 0.92;
        if (ny > -0.42 && ax < 0.1 + det("sc2") * 0.03) return 0.85;
        return 0;
      case "bear":
        if (d < 0.32) return 0.9;
        if (ny < -0.12 && (nx < -0.16 || nx > 0.16) && ax < 0.28) return 0.8;
        if (inRect(nx, ny, -0.1, 0.1, -0.05, 0.08)) return 1;
        return 0;
      case "cow":
        if (d < 0.3) return 0.88;
        if (d < 0.38 && ny > 0.08) return 0.55;
        if (det("cw") > 0.82 && d < 0.35) return 0.72;
        return 0;
      case "pig":
        if (d < 0.28) return 0.9;
        if (inRect(nx, ny, -0.18, -0.02, -0.02, 0.08) || inRect(nx, ny, 0.02, 0.18, -0.02, 0.08)) return 1;
        if (ny > 0.05 && d < 0.35) return 0.65;
        return 0;
      case "rabbit":
        if (d < 0.25) return 0.88;
        if (ny < -0.14 && ax < 0.12 && (nx < -0.04 || nx > 0.04)) return 0.85;
        if (d < 0.35 && ny > 0.05) return 0.55;
        return 0;
      case "frog":
        if (d < 0.28) return 0.88;
        if (inRect(nx, ny, -0.22, 0.22, -0.05, 0.12)) return 0.75;
        if (inRect(nx, ny, -0.22, -0.05, 0.02, 0.12) || inRect(nx, ny, 0.05, 0.22, 0.02, 0.12)) return 0.95;
        return 0;
      case "sheep":
        if (d < 0.3) return 0.9;
        if (d < 0.38 && det("shp") > 0.38) return 0.8;
        if (ny > 0.15 && ax < 0.08) return 0.6;
        return 0;
      case "duck":
        if (inRect(nx, ny, -0.28, 0.32, -0.08, 0.15)) return 0.88;
        if (d < 0.18 && nx > 0.1) return 0.9;
        if (ny > 0.1 && ax < 0.25) return 0.65;
        return 0;
      case "mouse":
        if (d < 0.2) return 0.9;
        if (d < 0.28 && (nx > 0.06 || nx < -0.06)) return 0.82;
        if (inRect(nx, ny, -0.08, 0.08, 0.05, 0.35)) return 0.7;
        return 0;
      case "chicken":
        if (d < 0.22) return 0.9;
        if (ny < -0.1 && ax < 0.08) return 0.85;
        if (ny > 0.05 && ax < 0.18) return 0.7;
        return 0;
      case "goat":
        if (inRect(nx, ny, -0.28, 0.28, -0.15, 0.22)) return 0.85;
        if (ny < -0.12 && ax < 0.2 && (nx < -0.05 || nx > 0.05)) return 0.8;
        if (ny > 0.1 && ax < 0.08) return 0.65;
        return 0;
      case "bowl":
        if (d < 0.22 && ny < 0.05) return 0.88;
        if (d < 0.32 && d > 0.12 && ny < 0.12) return 0.85;
        if (ny > 0.12 && ax < 0.28) return 0.55;
        return 0;
      case "bottle":
        if (inRect(nx, ny, -0.1, 0.1, -0.35, 0.15)) return 0.88;
        if (ny < -0.35 && ax < 0.06) return 0.7;
        if (d < 0.12 && ny > -0.1) return 0.9;
        return 0;
      default:
        if (d < 0.3) return 0.85;
        if (d < 0.45) return 0.45;
        return 0;
    }
  }

  function paintBackground(x, y, size, palette, styleKey, motif, seed) {
    var t = y / (size - 1);
    var cx = size / 2;
    var cy = size / 2;
    var nx = (x - cx) / (size / 2);
    var top = palette[8];
    var bot = palette[9];
    var base = lerpColor(top, bot, Math.pow(t, 0.85));
    if (motif && (motif.pattern === "sun" || motif.pattern === "sunset")) {
      base = lerpColor(palette[9], palette[7], Math.pow(t, 0.75));
      if (t < 0.55) base = lerpColor(palette[8], palette[6], t * 1.4);
    }
    if (motif && motif.pattern === "moon") {
      base = lerpColor(palette[9], palette[7], t);
    }
    var vig = 1 - Math.pow(dist(x, y, cx, cy) / (size * 0.72), 2) * 0.22;
    if (styleKey === "cosmic" || styleKey === "aurora") {
      base = lerpColor(palette[7], palette[5], t * 0.7 + detHash(x, y, seed, "bg") * 0.04);
    }
    if (styleKey === "vapor") {
      base = lerpColor(palette[6], palette[4], (Math.sin(nx * 2) + 1) * 0.5);
    }
    return [clamp255(base[0] * vig), clamp255(base[1] * vig), clamp255(base[2] * vig)];
  }

  function paintPixel(x, y, size, motif, palette, seed, styleKey) {
    var cx = size / 2;
    var cy = size / 2;
    var nx = (x - cx) / (size / 2);
    var ny = (y - cy) / (size / 2);
    var bg = paintBackground(x, y, size, palette, styleKey, motif, seed);
    var mask = getShapeMask(motif.pattern, nx, ny, seed);
    if (mask <= 0) {
      if (styleKey === "ink" && Math.abs(Math.sin(nx * 9 + ny * 7)) > 0.82) {
        return lerpColor(bg, palette[2], 0.25);
      }
      return bg;
    }
    var idx = 1 + Math.floor(mask * 5.8);
    var col = palette[Math.min(idx, 6)];
    var hi = palette[0];
    var sh = palette[7];
    var detail = detHash(x, y, seed, "px");
    if (mask > 0.88 && detail > 0.78) col = lerpColor(col, hi, 0.42);
    else if (mask > 0.7 && (x + y + seed) % 4 === 0) col = lerpColor(col, hi, 0.22);
    if (mask < 0.55) col = lerpColor(col, sh, 0.28);
    if (mask > 0.5 && mask < 0.75 && (x ^ y) % 3 === 0) col = lerpColor(col, palette[3], 0.12);
    var blend = 0.58 + mask * 0.38;
    if (styleKey === "standard" && mask > 0.35) {
      col = lerpColor(col, hi, 0.06 + detail * 0.08);
      blend += 0.04;
    }
    if (styleKey === "neon" && mask > 0.4) {
      col = lerpColor(col, palette[0], 0.1);
    }
    if (styleKey === "pastel" && mask > 0.3) {
      col = lerpColor(col, hi, 0.12);
    }
    return lerpColor(bg, col, Math.min(0.98, blend));
  }

  function applyOutline(pixels, size) {
    var copy = pixels.slice();
    var x, y, i, lum, n, ni, nl, edge;
    for (y = 1; y < size - 1; y++) {
      for (x = 1; x < size - 1; x++) {
        i = (y * size + x) * 4;
        lum = copy[i] + copy[i + 1] + copy[i + 2];
        if (lum < 80) continue;
        edge = 0;
        n = [((y - 1) * size + x) * 4, ((y + 1) * size + x) * 4, (y * size + (x - 1)) * 4, (y * size + (x + 1)) * 4];
        for (ni = 0; ni < n.length; ni++) {
          nl = copy[n[ni]] + copy[n[ni] + 1] + copy[n[ni] + 2];
          if (Math.abs(lum - nl) > 100) edge++;
        }
        if (edge >= 2) {
          pixels[i] = clamp255(copy[i] * 0.72);
          pixels[i + 1] = clamp255(copy[i + 1] * 0.72);
          pixels[i + 2] = clamp255(copy[i + 2] * 0.72);
        }
      }
    }
  }

  function applyEdgeEnhance(pixels, size) {
    var copy = pixels.slice();
    var x, y, i, i2, i3, i4, lum, lum2, edge;
    for (y = 1; y < size - 1; y++) {
      for (x = 1; x < size - 1; x++) {
        i = (y * size + x) * 4;
        lum = copy[i] + copy[i + 1] + copy[i + 2];
        i2 = ((y - 1) * size + x) * 4;
        i3 = ((y + 1) * size + x) * 4;
        i4 = (y * size + (x - 1)) * 4;
        edge = Math.abs(lum - (copy[i2] + copy[i2 + 1] + copy[i2 + 2]))
          + Math.abs(lum - (copy[i3] + copy[i3 + 1] + copy[i3 + 2]))
          + Math.abs(lum - (copy[i4] + copy[i4 + 1] + copy[i4 + 2]));
        if (edge > 120) {
          pixels[i] = clamp255(copy[i] * 1.08);
          pixels[i + 1] = clamp255(copy[i + 1] * 1.08);
          pixels[i + 2] = clamp255(copy[i + 2] * 1.08);
        }
      }
    }
  }

  function applyDither(pixels, size, palette) {
    var x, y, i, old, newC, err, q, nc;
    for (y = 0; y < size; y++) {
      for (x = 0; x < size; x++) {
        i = (y * size + x) * 4;
        old = [pixels[i], pixels[i + 1], pixels[i + 2]];
        newC = palette[0];
        q = 99999;
        palette.forEach(function (p) {
          var d = Math.abs(p[0] - old[0]) + Math.abs(p[1] - old[1]) + Math.abs(p[2] - old[2]);
          if (d < q) { q = d; newC = p; }
        });
        err = [old[0] - newC[0], old[1] - newC[1], old[2] - newC[2]];
        pixels[i] = newC[0];
        pixels[i + 1] = newC[1];
        pixels[i + 2] = newC[2];
        if (x + 1 < size) {
          nc = (y * size + x + 1) * 4;
          pixels[nc] = clamp255(pixels[nc] + err[0] * 0.44);
          pixels[nc + 1] = clamp255(pixels[nc + 1] + err[1] * 0.44);
          pixels[nc + 2] = clamp255(pixels[nc + 2] + err[2] * 0.44);
        }
        if (y + 1 < size) {
          nc = ((y + 1) * size + x) * 4;
          pixels[nc] = clamp255(pixels[nc] + err[0] * 0.31);
          pixels[nc + 1] = clamp255(pixels[nc + 1] + err[1] * 0.31);
          pixels[nc + 2] = clamp255(pixels[nc + 2] + err[2] * 0.31);
        }
      }
    }
  }

  function buildMotifList() {
    var list = [];
    var i, j, base;
    for (i = 0; i < MOTIFS.length; i++) {
      list.push({
        index: i,
        keys: MOTIFS[i].keys,
        pattern: MOTIFS[i].pattern,
        hue: MOTIFS[i].hue,
        emoji: MOTIFS[i].emoji || "✦",
        label: MOTIFS[i].keys[0]
      });
    }
    for (j = list.length; j < MOTIF_COUNT; j++) {
      base = list[j % MOTIFS.length];
      var extraIdx = j - MOTIFS.length;
      var extraName = MOTIF_EXTRA_NAMES[extraIdx % MOTIF_EXTRA_NAMES.length] || ("Motiv #" + (j + 1));
      var extraKey = normalize(extraName);
      list.push({
        index: j,
        keys: [extraKey, extraName.toLowerCase(), "motiv" + j, "bild" + j, "art" + j],
        pattern: base.pattern,
        hue: (base.hue + j * 11) % 360,
        emoji: base.emoji,
        label: extraName
      });
    }
    return list;
  }

  var ALL_MOTIFS = buildMotifList();

  var MOTIF_ALIASES = [
    ["pferdchen", "pferd"], ["hündchen", "hund"], ["hundchen", "hund"], ["welpe", "hund"],
    ["kätzchen", "katze"], ["katzchen", "katze"], ["kitten", "katze"], ["kitty", "katze"],
    ["vogel", "bird"], ["fischchen", "fisch"], ["auto", "car"], ["wagen", "car"],
    ["flugzeug", "plane"], ["flieger", "plane"], ["zug", "train"], ["bahn", "train"],
    ["eis", "icecream"], ["sommer eis", "icecream"], ["schokolade eis", "icecream"],
    ["baum", "tree"], ["bäume", "tree"], ["baeume", "tree"], ["blumen", "flower"],
    ["rose rot", "rose"], ["sonnenblume gelb", "sunflower"], ["sternenhimmel", "stars"],
    ["nacht mond", "moon"], ["vollmond", "moon"], ["meer wellen", "waves"],
    ["berg schnee", "mountain"], ["vulkan feuer", "vulkan"], ["drache feuer", "drache"],
    ["einhorn pink", "unicorn"], ["fee flügel", "fairy"], ["zauberer hut", "wizard"],
    ["roboter ki", "robot"], ["ki robot", "robot"], ["computer laptop", "laptop"],
    ["handy smartphone", "phone"], ["smartphone", "phone"], ["tisch", "table"],
    ["stuhl sitz", "chair"], ["bett schlaf", "bed"], ["tasse kaffee", "cup"],
    ["kaffee tasse", "coffee"], ["pizza essen", "pizza"], ["burger essen", "burger"],
    ["apfelsine", "orange"], ["zitrus", "lemon"], ["zitrone gelb", "lemon"],
    ["erdbeere rot", "strawberry"], ["kirsche rot", "cherry"], ["wassermelone gruen", "watermelon"],
    ["giraffe lang", "giraffe"], ["zebra streifen", "zebra"], ["eisbär weiss", "polar bear"],
    ["eisbaer", "polar bear"], ["pinguin antarktis", "penguin"], ["hai ozean", "shark"],
    ["wal ozean", "whale"], ["delfin spring", "dolphin"], ["schmetterling bunt", "butterfly"],
    ["biene honig", "bee"], ["spinne netz", "spider"], ["frosch gruen", "frog"],
    ["schlange lang", "schlange"], ["pferd reiten", "horse"], ["kuh bauernhof", "cow"],
    ["schwein rosa", "pig"], ["hase oster", "rabbit"], ["maus klein", "mouse"],
    ["hubschrauber flug", "helicopter"], ["rakete weltraum", "rocket"], ["planet mars", "mars"],
    ["mond erde", "moon"], ["sonne tag", "sun"], ["regenbogen bunt", "rainbow"],
    ["schloss burg", "castle"], ["turm hoch", "tower"], ["brücke", "bridge"], ["bruecke", "bridge"],
    ["stadt nacht", "cyberpunk"], ["neon stadt", "cyberpunk"], ["pixel art", "pixel"],
    ["noco logo", "noco"], ["noco render", "noco render"],     ["flux diamond", "noco flux"],
    ["fussball", "soccer ball"], ["soccer", "fussball"], ["einhorn", "unicorn pony"],
    ["superheld", "superhero batman"], ["batman", "superhero bat"], ["spiderman", "spider hero"],
    ["drohne", "drone quadcopter"], ["windrad", "windfarm wind turbine"], ["solar", "solar panel"],
    ["zelt", "camping tent"], ["skateboard", "skate"], ["surfen", "surf surfboard"],
    ["koala", "koala baer"], ["känguru", "kangaroo"], ["kaenguru", "kangaroo"],
    ["faultier", "sloth"], ["lama", "llama alpaka"], ["alpaka", "llama"],
    ["dino", "dinosaurier t-rex"], ["trex", "dinosaurier t-rex"], ["t-rex", "dinosaurier"],
    ["feuerwerk", "fireworks silvester"], ["konfetti", "confetti party"],
    ["smartphone", "phone handy"], ["handy", "phone smartphone"], ["drohne flug", "drone"],
    ["panda", "giant panda bambus"], ["flamingo", "flamingo pink"], ["papagei", "parrot"],
    ["adler", "eagle falcon"], ["schwan", "swan"], ["pinguin", "penguin antarktis"],
    ["nilpferd", "hippo"], ["nashorn", "rhino"], ["kamel", "camel dromedar"],
    ["ameise", "ant insekt"], ["biene", "bee hummel"], ["libelle", "dragonfly"],
    ["skorpion", "scorpion"], ["spinne", "spider tarantel"], ["tarantel", "spider"],
    ["strand", "beach sand"], ["cocktail", "drink beach"], ["donut", "doughnut"],
    ["ramen", "nudelsuppe"], ["taco", "mexikanisch burrito"], ["avocado", "avocado toast"],
    ["wassermelone", "watermelon melone"], ["smoothie", "shake cup"], ["wein", "wine glass"],
    ["bier", "beer"], ["stadion", "stadium fussball"], ["trophäe", "trophy pokal"],
    ["krankenhaus", "hospital medical"], ["schule", "school building"], ["fabrik", "factory"],
    ["bauernhof", "farm barn scheune"], ["cyberpunk", "neon stadt matrix"], ["matrix", "digital rain cyber"],
    ["rakete", "rocket launch weltraum"], ["satellit", "satellite orbit"], ["mond", "moon mond basis"],
    ["sonnenaufgang", "sunrise sun"], ["sonnenuntergang", "sunset sun"], ["dschungel", "jungle"],
    ["wüste", "desert wueste"], ["koralle", "coral reef"], ["qualle", "jellyfish"],
    ["seehund", "seal robbe"], ["otter", "otter tier"], ["biber", "beaver"],
    ["igel", "hedgehog"], ["ziege", "goat"], ["schwein", "pig schweinchen"],
    ["kuh", "cow rind"], ["huhn", "chicken henne"], ["esel", "donkey maultier"],
    ["giraffe lang", "giraffe"], ["zebra streifen", "zebra"], ["kolosseum", "colosseum roemisch"],
    ["ritter", "knight armor shield"], ["wikinger", "vikingship langschiff"], ["pyramide", "pyramid sphinx"],
    ["hamster", "hamster tier golden"], ["kaninchen", "rabbit bunny"], ["gorilla", "gorilla affe"],
    ["saxophon", "saxophone jazz"], ["eiffelturm", "eiffel tower paris"], ["schneemann", "snowman winter"],
    ["weihnachtsbaum", "christmas tree"], ["wolke", "cloud sky wolken"], ["ritterburg", "castle knight"],
    ["vampir", "vampire"], ["hexe", "witch wizard"], ["zombie", "zombie untoter"], ["pyramide", "pharaoh"],
    ["mars planet", "mars"], ["saturn ringe", "saturn"], ["pluto", "zwergplanet pluto"],
    ["laserschwert", "lightsaber sword"], ["formel1", "formel 1 rennwagen"], ["schach", "schachfigur chess"],
    ["handball", "handball sport"], ["basketball", "basketball korb"], ["volleyball", "volleyball netz"],
    ["flamingo", "flamingo pink"], ["pfau", "peacock"], ["kolibri", "hummingbird"], ["hai", "shark"],
    ["krokodil", "crocodile alligator"], ["schlange", "snake kobra"], ["frosch", "frog kroete"],
    ["laterne", "lantern papierlaterne"], ["feuerwerk", "fireworks wunderkerze"], ["qr code", "qr-code"],
    ["grafikkarte", "gpu graphics card"], ["eisenbahn", "ice zug dampflok"], ["u-boot", "submarine"],
    ["heissluftballon", "hot air balloon"], ["fallschirm", "parachute gleitschirm"],
    ["pikachu", "pokemon pikachu"], ["pokemon", "pikachu pokeball"],
    ["naruto", "ninja shuriken"], ["samurai", "katana samurai"],
    ["sakura", "kirschbluete cherry blossom"], ["fuji", "mount fuji mountain"],
    ["minecraft", "minecraft block creeper"], ["fortnite", "gamepad battle"],
    ["star wars", "lightsaber death star"], ["iron man", "ironman hero"],
    ["captain america", "shield hero"], ["thor", "mjolnir hammer"],
    ["gandalf", "wizard staff"], ["phoenix", "phoenix bird fire"],
    ["pegasus", "fluegelpferd unicorn"], ["yeti", "bigfoot sasquatch"],
    ["machu picchu", "machu inka"], ["stonehenge", "steinkreis"],
    ["taj mahal", "tajmahal"], ["neuschwanstein", "maerchenschloss castle"],
    ["santa", "weihnachtsmann santa claus"], ["ostern", "easter bunny ostern hase"],
    ["schneemann", "snowman winter"], ["eislauf", "ice skate schlittschuh"],
    ["snowboard", "snowboarder ski"], ["bbq", "grill barbecue steak"],
    ["doener", "shawarma döner gyros"], ["sushi", "maki sushi roll"],
    ["matcha", "matcha tea japan"], ["bonsai", "bonsai tree zen"],
    ["maneki neko", "lucky cat japan"], ["kitsune", "fox spirit"],
    ["triathlon", "schwimmkappe rennrad marathon"], ["ironman", "triathlon marathon"],
    ["arduino", "raspberry pi breadboard"], ["raspberry pi", "arduino maker"],
    ["typescript", "code terminal programmierung"], ["kernfusion", "tokamak fusion"],
    ["cern", "higgs teilchen"], ["homeoffice", "videokonferenz desk"],
    ["freelancer", "laptop homeoffice"], ["etf", "aktienchart sparschwein"],
    ["mietrecht", "mietvertrag wohnungsschluessel"], ["grundgesetz", "verfassung buch"],
    ["nato", "panzer militär"], ["hitzewelle", "thermometer heiss"],
    ["waldbrand", "buschfeuer wildfire"], ["mikroplastik", "plastic ocean"],
    ["minimalismus", "minimal room"], ["van life", "campingbus van"],
    ["cybermobbing", "warning online"], ["enkeltrick", "scam betrug"],
    ["antibiotika", "pills medizin"], ["placebo", "pills studie"],
    ["faktencheck", "fact check lupe"], ["stoizismus", "pillar philosophie"],
    ["bauhaus", "bauhaus design geometrie"], ["banksy", "graffiti street art"],
    ["zeitzone", "weltuhr utc"], ["prompt", "prompt engineering ki"],
    ["pilates", "yoga matte"], ["tai chi", "yoga meditation"],
    ["deepfake", "mask fake"], ["iss", "space station"],
    ["mars rover", "curiosity rover"], ["e-bike", "ebike fahrrad"],
    ["formel e", "formula e rennwagen"], ["goldmedaille", "medal olympia"],
    ["bubble tea", "boba tea"], ["döner", "shawarma gyros doener"],
    ["kaese", "cheese käse"], ["saturn", "planet saturn ringe"],
    ["weihnachtsmann", "santa claus"], ["pikachu", "pokemon"],
    ["octopus", "krake"], ["lobster", "hummer"], ["crab", "krebs tier"],
    ["polizei", "police car"], ["taxi", "gelbes taxi"],
    ["nft", "nft art pixel"], ["phishing", "hook scam"],
    ["passwort", "password lock"], ["ethereum", "eth crypto"],
    ["vr", "vr brille headset"], ["airpods", "earbuds kopfhoerer"],
    ["bagel", "brezel pretzel"], ["curry", "pad thai pho"],
    ["lasagne", "spaghetti pasta"], ["gelato", "tiramisu dessert"],
    ["meerkat", "erdmaennchen"], ["puffin", "papageitaucher"],
    ["walross", "walrus"], ["polarfuchs", "arctic fox"],
    ["ladybug", "marienkaefer"], ["firefly", "gluehwuermchen"],
    ["raccoon", "waschbaer"], ["ostrich", "strauß"],
    ["woodpecker", "specht"], ["kingfisher", "eisvogel"],
    ["james webb", "telescope weltraum"], ["apollo", "moon mission"],
    ["fighter jet", "kampfjet"], ["iceberg", "eisberg"],
    ["oasis", "oase palmen"], ["sandstorm", "sandsturm"],
    ["crystal ball", "kristallkugel"], ["slot machine", "spielautomat"],
    ["barbie", "doll puppe"], ["rc car", "rc auto spielzeug"],
    ["rust", "rust lang programmierung"], ["sql", "datenbank mysql"],
    ["mongodb", "nosql database"], ["api", "rest api schnittstelle"],
    ["golang", "go programmierung"], ["kotlin", "android app"],
    ["swift", "ios apple"], ["kubernetes", "k8s docker"],
    ["hydroponik", "hydroponic urban farming"], ["kompost", "compost biomuell"],
    ["permakultur", "permaculture garden"], ["korallenbleiche", "bleached coral"],
    ["antarktis", "antarctica eis pinguin"], ["skandinavien", "fjord nordic"],
    ["afrika", "savanna loewe"], ["amazonas", "amazon rainforest dschungel"],
    ["outback", "australien kontinent"], ["mauerfall", "berliner mauer"],
    ["kalter krieg", "cold war"], ["industrialisierung", "fabrik dampf"],
    ["franzoesische revolution", "liberty cap"], ["nanotechnologie", "nanotech"],
    ["bionik", "biomimicry flugzeug"], ["graphen", "graphene hex"],
    ["crispr", "gene scissors gen"], ["elektroschrott", "e-waste"],
    ["schweiz", "swiss alpen"], ["oesterreich", "wien oesterreich"],
    ["windmuehle", "windmill dutch"], ["tulpen", "tulip netherlands"],
    ["big ben", "london clock"], ["boomerang", "australian outback"],
    ["sydney", "opera house australia"], ["didgeridoo", "aboriginal"],
    ["uluru", "ayers rock"], ["great wall", "china mauer"],
    ["diwali", "diya lamp"], ["holi", "color festival"],
    ["sphinx", "pharaoh egypt"], ["burj khalifa", "dubai tower"],
    ["graduation", "abschlusskappe diplom"], ["boombox", "ghetto blaster"],
    ["vinyl", "record schallplatte"], ["oktoberfest", "bier festival"],
    ["schnitzel", "wiener schnitzel"], ["gluehwein", "mulled wine"],
    ["schneekugel", "snow globe"], ["moose", "elch kanada"],
    ["maple leaf", "ahornblatt"], ["iglu", "igloo"],
    ["cowboy", "cowboyhut sheriff"], ["flamenco", "spanien tanz"],
    ["everest", "himalaya berg"], ["origami", "papier kranich"],
    ["einstein", "physiker portrait"], ["quokka", "australien tier"],
    ["schnabeltier", "platypus"], ["kolibri", "hummingbird"],
    ["1850", "noco render motive"], ["2100", "noco render motive"], ["2350", "noco render motive"], ["2750", "noco render motive"],
    ["vue", "vuejs framework"], ["angular", "google angular"],
    ["flutter", "dart app"], ["tailwind", "tailwindcss"],
    ["graphql", "graph ql api"], ["oauth", "jwt auth"],
    ["aws", "amazon cloud"], ["azure", "microsoft cloud"],
    ["terraform", "iac devops"], ["ci cd", "github actions jenkins"],
    ["serverless", "lambda aws"], ["microservices", "micro service"],
    ["saas", "cloud software"], ["websocket", "realtime"],
    ["vite", "bundler build"], ["npm", "package manager"],
    ["seo", "suchmaschine"], ["wordpress", "cms"],
    ["copywriting", "marketing text"], ["diabetes", "insulin blutzucker"],
    ["allergie", "heuschnupfen pollen"], ["gluten", "zoeliakie glutenfrei"],
    ["physiotherapie", "physio rehab"], ["long covid", "post covid"],
    ["elternzeit", "mutterschutz"], ["kita", "kindergarten"],
    ["bundesrat", "laenderkammer"], ["verfassungsgericht", "bverfg karlsruhe"],
    ["demografie", "alterung bevoelkerung"], ["migration", "integration einwanderung"],
    ["bundestag", "reichstag"], ["wahlurne", "stimmzettel"],
    ["vegan", "tofu tempeh"], ["baklava", "oriental dessert"],
    ["torii", "japan tor"], ["sumo", "japan ring"],
    ["mochi", "japan dessert"], ["mandala", "meditation art"],
    ["buddha", "buddha statue"], ["ritter", "knight shield"],
    ["schatzkarte", "treasure map"], ["gabelstapler", "forklift lager"],
    ["php", "php elephant web"], ["figma", "ui design prototyping"],
    ["tiktok", "short video reels"], ["whatsapp", "messenger chat"],
    ["discord", "community server"], ["influencer", "creator camera"],
    ["ebook", "kindle hoerbuch"], ["gutenberg", "printing press buchdruck"],
    ["byzanz", "byzantine dome"], ["ottoman", "osmanisches reich"],
    ["mariachi", "mexiko musik"], ["nasa", "nasa rocket space"],
    ["artemis", "moon mission"], ["lithium", "battery akku"],
    ["geothermie", "geothermal steam"], ["biogas", "biomasse"],
    ["carbon capture", "ccs co2"], ["aufforstung", "tree planting"],
    ["smog", "luftqualitaet feinstaub"], ["bienensterben", "bee decline"],
    ["regex", "pattern matching"], ["lua", "roblox script"],
    ["gezeiten", "tidal turbine"], ["elektrolyse", "wasserstoff h2"],
    ["cricket", "cricket bat"], ["rugby", "rugby ball"],
    ["badminton", "shuttlecock"], ["golf", "golf ball"],
    ["typewriter", "schreibmaschine"], ["traffic light", "ampel"],
    ["excavator", "bagger bau"], ["blueprint", "bauplan"],
    ["sombrero", "mexiko hat"], ["panda", "china baer"],
    ["freiheitsstatue", "statue of liberty"], ["baseball", "baseball schlaeger"],
    ["pinata", "piñata fiesta"], ["hollywood", "film stern"],
    ["2750", "noco render motive"], ["3200", "noco render motive"], ["linux", "ubuntu penguin"],
    ["windows", "microsoft window logo"], ["macos", "apple mac"],
    ["blender", "3d modellierung"], ["starlink", "satellite dish"],
    ["5g", "cell tower mast"], ["inflation", "geld chart"],
    ["etf", "aktien chart stock"], ["tornado", "storm funnel"],
    ["erdbeben", "earthquake quake"], ["ozon", "ozone shield"],
    ["atomkraft", "nuclear radiation"], ["paralympics", "wheelchair sport"],
    ["speedrun", "timer speedrun gaming"], ["meme", "internet meme face"],
    ["streaming", "netflix play stream"], ["fotografie", "camera photo"],
    ["immunsystem", "immune shield"], ["schengen", "passport eu"],
    ["journalismus", "newspaper press"], ["whistleblower", "megaphone"],
    ["laravel", "php elephant"], ["svelte", "svelte flame"],
    ["spring boot", "spring leaf java"], ["rag", "retrieval book document"],
    ["zero trust", "security lock shield"], ["einstein", "atom formula e=mc2"],
    ["pflege", "nurse cross medical"], ["bafoeg", "student graduation"],
    ["montessori", "blocks kindergarten"], ["barrierefreiheit", "wheelchair accessibility"],
    ["artensterben", "biodiversity butterfly"], ["uno", "united nations globe"],
    ["who", "world health cross"], ["relativitaet", "einstein atom"],
    ["leitzins", "ezb chart"], ["gewerkschaft", "strike fist"],
    ["mindestlohn", "money scale"],     ["speedrunning", "speedrun timer"],
    ["3200", "noco render motive"], ["nextjs", "next.js react"],
    ["nuxt", "nuxt.js vue"], ["prisma", "orm database"],
    ["supabase", "postgres backend"], ["firebase", "firestore google"],
    ["redis", "cache memory"], ["kafka", "event stream"],
    ["ransomware", "lock encrypt malware"], ["web3", "blockchain nft"],
    ["metaverse", "vr world portal"], ["copilot", "github ai code"],
    ["midjourney", "ai art generator"], ["waermepumpe", "heat pump"],
    ["pomodoro", "tomato timer"], ["mindmap", "mind map tree"],
    ["fairtrade", "fair trade coffee"], ["hyperloop", "vacuum train"],
    ["urban gardening", "balkon garten"], ["imkerei", "bee hive"],
    ["vitamin d", "sun vitamin"], ["mrna", "vaccine syringe"],
    ["epigenetik", "dna spiral"], ["telemedizin", "video call doctor"],
    ["adhs", "brain focus"], ["cookie banner", "cookie consent"],
    ["eu ai act", "scale law"], ["kreislaufwirtschaft", "recycle circular"],
    ["lichtverschmutzung", "light pollution city"], ["journaling", "diary book"],
    ["rhetorik", "microphone speech"],     ["ev charger", "ladestation elektro"],
    ["3600", "noco render motive"], ["3450", "noco render motive"],
    ["openai", "chatgpt logo"], ["claude", "anthropic ai"],
    ["gemini", "google gemini bard"], ["llama", "meta llama model"],
    ["mistral", "mistral ai mixtral"], ["stable diffusion", "sd xl automatic1111"],
    ["embedding", "vector semantic"], ["pinecone", "vector database weaviate"],
    ["fine tuning", "lora train llm"], ["context window", "token limit"],
    ["semiconductor", "silicon chip halbleiter"], ["chip shortage", "chip krise"],
    ["buddhism", "buddha lotus"], ["hindu", "hinduismus om"],
    ["islam", "mosque crescent"], ["christian", "church cross"],
    ["judaism", "star david synagogue"], ["tai chi", "taiji qigong"],
    ["erasmus", "eu exchange student"], ["duolingo", "language owl learn"],
    ["buergergeld", "citizen benefit"], ["wohngeld", "housing subsidy"],
    ["compound interest", "zinseszins chart"], ["defi", "liquidity pool crypto"],
    ["shopify", "ecommerce bag store"], ["dropshipping", "parcel delivery box"],
    ["esg", "green investing leaf"], ["carbon footprint", "co2 cloud digital"],
    ["passive income", "dividend coin"], ["pension", "retire altersvorsorge"],
    ["mietpreisbremse", "rent cap scale"], ["solid state", "festkoerper battery"],
    ["perovskite", "perowskit solar panel"], ["vertical farm", "vertical farming tower"],
    ["rewilding", "wild forest nature"], ["mycelium", "fungi packaging net"],
    ["neuromorphic", "brain inspired chip"], ["post quantum", "pqc crypto lock"],
    ["social engineering", "phishing hook fish"], ["osint", "open intelligence search"],
    ["zettelkasten", "slip box notes"], ["notion", "notion page workspace"],
    ["obsidian", "obsidian vault crystal"], ["gtd", "getting things done inbox"],
    ["eisenhower", "priority matrix grid"], ["latex", "overleaf document"],
    ["plagiarism", "plagiat warning"], ["apa", "citation reference apa"],
    ["mensch", "person human smiley"], ["person", "mensch human"],
    ["mann", "mensch person"], ["frau", "mensch person"], ["kind", "mensch person"],
    ["human", "mensch person"], ["gebaeude", "haus house"], ["wohnhaus", "haus home"]
  ];

  function applyMotifAliases(text) {
    var out = normalize(text);
    var i;
    for (i = 0; i < MOTIF_ALIASES.length; i++) {
      if (out.indexOf(MOTIF_ALIASES[i][0]) !== -1) out += " " + MOTIF_ALIASES[i][1];
    }
    return out;
  }

  var MIN_MOTIF_MATCH_SCORE = 52;

  function extractSubject(prompt) {
    var n = normalize(prompt);
    n = n.replace(/^(mach|erstelle|generiere|generier|male|zeichne|render|pixel|zeig|noco render|kannst du|koenntest du|bitte|ich will|ich moechte)( mir)?( bitte)?( ein)?( (pixel)?bild)?( (von|vom|der|die|das|eine|einen|einem))?\s*/g, "");
    n = n.replace(/^(ein|eine|einen)\s+(bild|pixel|motiv)\s+(von|vom)\s*/g, "");
    n = n.replace(/^(bild|pixel)\s+(von|vom)\s*/g, "");
    n = n.replace(/\s+(im|in|mit|style|stil|modus)\s+.+$/g, "");
    n = n.replace(/\s+bei\s+nacht$/g, " nacht");
    n = n.replace(/\s+als\s+.+$/g, "");
    return n.trim();
  }

  function isGeneratedMotifKey(key) {
    return /^motiv\d+$/.test(key) || /^bild\d+$/.test(key) || /^art\d+$/.test(key);
  }

  function splitWords(text) {
    return String(text || "").split(/\s+/).filter(Boolean);
  }

  function scoreMotifKey(search, subject, key) {
    var words, wi, compoundPenalty;
    if (!key || isGeneratedMotifKey(key)) return 0;

    if (subject && subject === key) return 230;
    if (search === key) return 210;

    if (subject) {
      words = splitWords(subject);
      for (wi = 0; wi < words.length; wi++) {
        if (words[wi] === key) return 195 + Math.min(key.length, 20);
      }
    }

    words = splitWords(search);
    for (wi = 0; wi < words.length; wi++) {
      if (words[wi] === key) return 180 + Math.min(key.length, 20);
    }

    if (key.length >= 4) {
      if (subject && subject.indexOf(key) !== -1) {
        compoundPenalty = key.length > subject.length + 2 && subject.length >= 3 && key.indexOf(subject) !== -1;
        return compoundPenalty ? 44 + subject.length : 64 + key.length;
      }
      if (search.indexOf(key) !== -1) return 60 + key.length;
      if (subject && key.indexOf(subject) !== -1 && subject.length >= 4) return 56 + subject.length;
      if (key.indexOf(search) !== -1 && search.length >= 4) return 54 + search.length;
    }
    return 0;
  }

  function buildUnsupportedMessage(subject) {
    var s = String(subject || "").trim();
    var hint = s ? "**" + s + "**" : "dieses Motiv";
    return "**NOCO Render** kann " + hint + " gerade nicht sicher zuordnen.\n\n" +
      "Probier ein **einfaches Wort** aus der Bibliothek — z.B. *Katze*, *Haus*, *Sonne*, *Drache*, *Pizza*.\n" +
      "Frag: *Welche einfachen Bilder gehen?* fuer eine Uebersicht.\n\n" +
      "*(Kein Bild erzeugt — kein Quota fuer Render verbraucht.)*";
  }

  function matchMotifDetailed(prompt, opts) {
    opts = opts || {};
    var norm = applyMotifAliases(normalize(prompt));
    var subject = applyMotifAliases(extractSubject(prompt));
    var search = subject || norm;
    var best = { score: 0, motif: null, subject: subject, search: search };
    var i, k, key, sc, labelKey;

    for (i = 0; i < ALL_MOTIFS.length; i++) {
      for (k = 0; k < ALL_MOTIFS[i].keys.length; k++) {
        key = normalize(ALL_MOTIFS[i].keys[k]);
        sc = scoreMotifKey(search, subject, key);
        if (sc > best.score) best = { score: sc, motif: ALL_MOTIFS[i], subject: subject, search: search };
      }
      if (ALL_MOTIFS[i].label) {
        labelKey = normalize(ALL_MOTIFS[i].label);
        sc = scoreMotifKey(search, subject, labelKey);
        if (sc > best.score) best = { score: sc, motif: ALL_MOTIFS[i], subject: subject, search: search };
      }
    }

    if (best.score < MIN_MOTIF_MATCH_SCORE) {
      if (opts.allowFallback !== false && (subject || search)) {
        best.motif = ALL_MOTIFS[hashStr(search || norm) % MOTIF_COUNT];
        best.score = MIN_MOTIF_MATCH_SCORE;
        best.fallback = true;
      } else {
        best.motif = null;
        best.supported = false;
        best.message = buildUnsupportedMessage(subject || search);
        return best;
      }
    }

    best.supported = true;
    best.fallback = !!best.fallback;
    best.label = getMotifLabel(best.motif);
    return best;
  }

  function matchMotif(prompt) {
    var result = matchMotifDetailed(prompt, { allowFallback: true });
    return result.motif || ALL_MOTIFS[0];
  }

  function resolveMotif(prompt) {
    return matchMotifDetailed(prompt, { allowFallback: false });
  }

  function getMotifByIndex(index) {
    if (index == null || index < 0) return null;
    return ALL_MOTIFS[index] || null;
  }

  function isImageRequest(text) {
    var n = normalize(text);
    return /bild|generier|erstell.*bild|pixel|zeichne|male\s|zeig.*bild|\/image|\/bild|\/pixel|foto gener|noco render|mach.*bild|bild von|bild vom|bild einer|bild ein|render.*bild|pixel.*von|motiv.*von|ich will.*bild|ich moechte.*bild|kannst du.*bild/.test(n);
  }

  function generate(prompt, opts) {
    opts = opts || {};
    var size = opts.size || 36;
    var styleKey = opts.style || DEFAULT_STYLE;
    var motif;
    var resolved;
    if (opts.random) {
      motif = ALL_MOTIFS[Math.floor(Math.random() * MOTIF_COUNT)];
    } else if (opts.motifIndex != null && ALL_MOTIFS[opts.motifIndex]) {
      motif = ALL_MOTIFS[opts.motifIndex];
    } else {
      resolved = matchMotifDetailed(prompt || "", { allowFallback: opts.allowFallback !== false });
      if (!resolved.motif) return null;
      motif = resolved.motif;
    }
    var seedBase = normalize(prompt || "") + "|" + styleKey + "|" + motif.index;
    var seed = opts.seed != null ? opts.seed : hashStr(seedBase);
    var palette = buildPalette(motif.hue, styleKey, seed);
    var pixels = [];
    var y, x, rgb;

    for (y = 0; y < size; y++) {
      for (x = 0; x < size; x++) {
        rgb = paintPixel(x, y, size, motif, palette, seed, styleKey);
        pixels.push(rgb[0], rgb[1], rgb[2], 255);
      }
    }

    if (styleKey === "mono" || styleKey === "ink") {
      applyDither(pixels, size, palette.slice(0, 6));
    } else {
      applyEdgeEnhance(pixels, size);
      if (size >= 40) applyOutline(pixels, size);
    }

    return {
      pixels: pixels,
      size: size,
      width: size,
      height: size,
      motif: motif,
      style: styleKey,
      styleName: (STYLES[styleKey] || STYLES.standard).name,
      seed: seed,
      prompt: prompt || "Motiv",
      quality: size >= 52 ? "Pro" : (size >= 40 ? "Plus" : "Standard"),
      motifIndex: motif.index,
      motifLabel: getMotifLabel(motif)
    };
  }

  function packImageMeta(result) {
    if (!result) return null;
    return {
      pixels: result.pixels,
      size: result.size,
      style: result.style,
      styleName: result.styleName,
      seed: result.seed,
      prompt: result.prompt,
      motifIndex: result.motifIndex != null ? result.motifIndex : (result.motif && result.motif.index),
      motifLabel: result.motifLabel || getMotifLabel(result.motif)
    };
  }

  function ensureResult(meta) {
    if (!meta) return null;
    var expected = (meta.size || 36) * (meta.size || 36) * 4;
    if (meta.pixels && meta.pixels.length === expected) {
      return {
        pixels: meta.pixels,
        size: meta.size,
        style: meta.style,
        styleName: meta.styleName,
        seed: meta.seed,
        prompt: meta.prompt,
        motif: getMotifByIndex(meta.motifIndex),
        motifIndex: meta.motifIndex,
        motifLabel: meta.motifLabel
      };
    }
    return generate(meta.prompt || "Motiv", {
      size: meta.size || 36,
      style: meta.style || "noco",
      seed: meta.seed,
      motifIndex: meta.motifIndex
    });
  }

  function drawToCanvas(result, canvas, scale, opts) {
    opts = opts || {};
    scale = scale || 12;
    var size = result.size;
    canvas.width = size * scale;
    canvas.height = size * scale;
    var ctx = canvas.getContext("2d");
    if (!ctx) return;
    var img = ctx.createImageData(size, size);
    var i;
    for (i = 0; i < result.pixels.length; i++) {
      img.data[i] = result.pixels[i];
    }
    var tmp = document.createElement("canvas");
    tmp.width = size;
    tmp.height = size;
    tmp.getContext("2d").putImageData(img, 0, 0);
    ctx.imageSmoothingEnabled = false;
    ctx.filter = "none";
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!opts.crisp) {
      ctx.fillStyle = "rgba(4, 8, 16, 0.98)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.shadowColor = "rgba(96, 165, 250, 0.45)";
      ctx.shadowBlur = scale * 0.35;
    } else {
      ctx.fillStyle = "rgba(6, 10, 18, 0.98)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 0;
    }
    ctx.drawImage(tmp, 0, 0, size * scale, size * scale);
    ctx.shadowBlur = 0;
    ctx.filter = "none";
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function easeOutExpo(t) {
    return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function renderSharpCanvas(result, scale) {
    var sharp = document.createElement("canvas");
    drawToCanvas(result, sharp, scale);
    return sharp;
  }

  var RENDER_INTERRUPTS = [
    "Auftrag empfangen",
    "Warteschlange synchronisiert",
    "Idee wird verarbeitet",
    "Motiv-Schema validiert",
    "Prism-Pipeline aktiv",
    "Sheen-Matrix geladen",
    "Pixel-Forge kompiliert",
    "Farbprofil abgeglichen",
    "Qualitaetssperre gesetzt",
    "Ausgabe finalisiert"
  ];

  function getRenderInterrupt(raw) {
    var total = RENDER_INTERRUPTS.length;
    var idx = Math.min(total - 1, Math.floor(Math.max(0, raw) * total));
    return {
      index: idx,
      text: RENDER_INTERRUPTS[idx],
      total: total,
      step: idx + 1
    };
  }

  function drawGlassPlate(ctx, cw, ch, raw) {
    var cx = cw / 2;
    var cy = ch / 2;
    var r = Math.max(cw, ch) * 0.72;
    var grd = ctx.createRadialGradient(cx, cy, r * 0.1, cx, cy, r);
    grd.addColorStop(0, "rgba(14, 18, 34, 0.92)");
    grd.addColorStop(0.55, "rgba(8, 12, 26, 0.96)");
    grd.addColorStop(1, "rgba(4, 6, 14, 0.99)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, cw, ch);

    ctx.save();
    ctx.strokeStyle = "rgba(255, 255, 255, " + (0.04 + raw * 0.06) + ")";
    ctx.lineWidth = 1;
    ctx.strokeRect(8.5, 8.5, cw - 17, ch - 17);
    ctx.restore();
  }

  function drawPrismEdge(ctx, cw, ch, raw) {
    var y = ch * easeOutCubic(Math.min(1, raw * 1.05));
    var grd = ctx.createLinearGradient(0, y - 10, 0, y + 10);
    grd.addColorStop(0, "rgba(129, 140, 248, 0)");
    grd.addColorStop(0.5, "rgba(167, 139, 250, " + (0.18 + raw * 0.22) + ")");
    grd.addColorStop(1, "rgba(94, 234, 212, 0)");
    ctx.save();
    ctx.fillStyle = grd;
    ctx.fillRect(0, y - 12, cw, 24);
    ctx.restore();
  }

  function drawBlockForge(ctx, img, ox, oy, w, h, p, seed) {
    var cols = 10, rows = 10, total = cols * rows;
    var revealed = Math.floor(easeOutCubic(Math.min(1, p * 1.08)) * total);
    var order = [], i, bi, bx, by, ci, ri, sw, sh, idx, rank;
    for (i = 0; i < total; i++) order.push(i);
    order.sort(function (a, b) {
      return detHash(a, seed, b, "blk") - detHash(b, seed, a, "blk");
    });
    sw = w / cols;
    sh = h / rows;
    for (bi = 0; bi < revealed; bi++) {
      idx = order[bi];
      ci = idx % cols;
      ri = Math.floor(idx / cols);
      rank = bi / total;
      ctx.save();
      ctx.globalAlpha = 0.55 + rank * 0.45;
      ctx.drawImage(img, ci * (img.width / cols), ri * (img.height / rows), img.width / cols, img.height / rows,
        ox + ci * sw, oy + ri * sh, sw, sh);
      ctx.restore();
    }
  }

  function animateFill(canvas, result, scale, durationMs, onProgress, onDone) {
    scale = scale || 12;
    var size = result.size;
    var ctx = canvas.getContext("2d");
    if (!ctx) { if (onDone) onDone(); return; }

    canvas.width = size * scale;
    canvas.height = size * scale;
    var sharpCanvas = renderSharpCanvas(result, scale);
    var start = performance.now();
    var maxBlur = 14;
    var animId = null;
    var seed = result.seed || 0;
    var lastInterruptIdx = -1;

    function frame(now) {
      var raw = Math.min(1, (now - start) / durationMs);
      var p = easeOutCubic(raw);
      var blur = maxBlur * Math.pow(1 - p, 1.35);
      var zoom = 1.03 - p * 0.03;
      var w = canvas.width * zoom;
      var h = canvas.height * zoom;
      var ox = (canvas.width - w) / 2;
      var oy = (canvas.height - h) / 2;
      var interrupt = getRenderInterrupt(raw);
      var revealP = easeOutExpo(Math.min(1, Math.max(0, (raw - 0.12) / 0.88)));

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGlassPlate(ctx, canvas.width, canvas.height, raw);

      if (revealP > 0.08) {
        drawBlockForge(ctx, sharpCanvas, ox, oy, w, h, revealP, seed);
      }

      ctx.save();
      ctx.filter = blur > 0.35 ? "blur(" + blur + "px) saturate(1.05)" : "none";
      ctx.globalAlpha = 0.22 + p * 0.78;
      ctx.drawImage(sharpCanvas, ox, oy, w, h);
      ctx.restore();

      if (p > 0.55) {
        ctx.save();
        ctx.filter = "none";
        ctx.globalAlpha = Math.min(1, (p - 0.55) / 0.45);
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height * easeOutCubic(p));
        ctx.clip();
        ctx.drawImage(sharpCanvas, 0, 0);
        ctx.restore();
      }

      if (raw > 0.08 && raw < 0.95) drawPrismEdge(ctx, canvas.width, canvas.height, raw);

      if (interrupt.index !== lastInterruptIdx) lastInterruptIdx = interrupt.index;
      if (onProgress) onProgress(p, "render", interrupt);
      if (raw < 1) {
        animId = requestAnimationFrame(frame);
      } else {
        ctx.filter = "none";
        ctx.globalAlpha = 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(sharpCanvas, 0, 0);
        canvas.setAttribute("data-render-locked", "1");
        if (onDone) onDone();
      }
    }

    canvas.removeAttribute("data-render-locked");
    animId = requestAnimationFrame(frame);
    return function cancel() {
      if (animId) cancelAnimationFrame(animId);
    };
  }

  function getStyles() {
    var out = [];
    Object.keys(STYLES).forEach(function (k) {
      out.push({ id: k, name: STYLES[k].name, emoji: STYLES[k].emoji || "🎨" });
    });
    return out;
  }

  var EXAMPLE_PROMPTS = [
    "Erstelle ein Bild von NOCO Logo im Neon-Stil",
    "Male eine Sonne im Grell-Stil",
    "Generiere Pixel Art Wald bei Nacht",
    "Zeichne ein Herz im Pastell-Stil",
    "Cyber Glitch Stadt Neon",
    "Retro Pixel Katze Pastell",
    "NOCO Glass Diamant",
    "Polarlicht ueber Bergen Aurora",
    "Einhorn im Regenbogen-Stil",
    "Vulkan mit Lava Grell",
    "Unterwasser Wal im Dunkel-Modus",
    "Zauberer mit Sternen Neon",
    "Pizza im Pastell-Stil",
    "Rakete im Weltraum NOCO Glass",
    "Phoenix Flamme Grell",
    "Labyrinth Puzzle Dunkel",
    "Smartphone Glitch Cyber",
    "Sonnenuntergang Horizont Pastell",
    "Schachbrett Retro Pixel",
    "DNA Molekuel Neon",
    "Panda im Bambus Tinte",
    "Mandala Meditation Aurora",
    "Vaporwave Palme Sunset",
    "Drache im Kosmisch-Stil",
    "Mars Rover auf Planet",
    "Graffiti Street Art Neon",
    "Schwan auf See Pastell",
    "VR Headset Cyber",
    "Blockchain Gold Muenze",
    "NOCO Flux Logo Crystal",
    "Jellyfish Tiefsee Hologram",
    "Axolotl im Pastell-Stil",
    "Capybara am Fluss Retro",
    "Hot Air Ballon im Aurora-Stil",
    "Bubble Tea Neon Cyber",
    "Koi Fisch im Tinte-Modus",
    "Feuerwerk Silvester Grell",
    "Cyberpunk Stadt bei Nacht",
    "Raumschiff im Kosmisch-Stil",
    "Solar Panel im Minimal-Stil",
    "Korallenriff Unterwasser Dunkel",
    "Pfau im Regenbogen-Stil",
    "Zauberstab Fantasy Neon",
    "Erdbeere im Pastell-Stil",
    "Ananas Tropen Vaporwave",
    "Schneebrett Winter Aurora",
    "Oni Maske Japan Neon",
    "NOCO Prism Logo Crystal",
    "Lotus Meditation Aurora",
    "Oase in der Wueste Sunset",
    "Mach ein Bild von Banane",
    "Mach ein Bild von Apfel",
    "Mach ein Bild von Hund",
    "Mach ein Bild von Katze",
    "Mach ein Bild von Pferd",
    "Mach ein Bild von Wolkenkratzer",
    "Mach ein Bild von Orange Pastell",
    "Mach ein Bild von Ente am See",
    "Mach ein Bild von Schaf auf Wiese",
    "Mach ein Bild von Triathlon",
    "Mach ein Bild von Campingbus",
    "Mach ein Bild von Bubble Tea",
    "Mach ein Bild von Bauhaus",
    "Mach ein Bild von Mars Rover",
    "Mach ein Bild von Goldmedaille",
    "Mach ein Bild von Van Life",
    "Mach ein Bild von Windmühle",
    "Mach ein Bild von Boomerang",
    "Mach ein Bild von Graduation Cap",
    "Mach ein Bild von Sydney Opera House",
    "Mach ein Bild von Kompost",
    "Mach ein Bild von Schnitzel",
    "Mach ein Bild von Quokka",
    "Mach ein Bild von Mariachi",
    "Mach ein Bild von Freiheitsstatue",
    "Mach ein Bild von NASA Rakete",
    "Mach ein Bild von Panda",
    "Mach ein Bild von Typewriter",
    "Mach ein Bild von TikTok",
    "Mach ein Bild von Golf Ball",
    "Mach ein Bild von Vue Logo",
    "Mach ein Bild von Kita",
    "Mach ein Bild von Buddha",
    "Mach ein Bild von Mochi",
    "Mach ein Bild von Schatzkarte",
    "Mach ein Bild von Vegan Bowl"
  ];

  function getExamplePrompts() { return EXAMPLE_PROMPTS.slice(); }
  function getRandomExample() { return EXAMPLE_PROMPTS[Math.floor(Math.random() * EXAMPLE_PROMPTS.length)]; }

  var SIMPLE_PRESETS = [
    { label: "Katze", key: "katze", emoji: "🐱" },
    { label: "Hund", key: "hund", emoji: "🐶" },
    { label: "Sonne", key: "sonne", emoji: "☀" },
    { label: "Mond", key: "mond", emoji: "🌙" },
    { label: "Erde", key: "erde", emoji: "🌍" },
    { label: "Baum", key: "baum", emoji: "🌳" },
    { label: "Blume", key: "blume", emoji: "🌸" },
    { label: "Wolke", key: "wolke", emoji: "☁" },
    { label: "Regen", key: "regen", emoji: "🌧" },
    { label: "Schnee", key: "schnee", emoji: "❄" },
    { label: "Herz", key: "herz", emoji: "❤" },
    { label: "Stern", key: "stern", emoji: "⭐" },
    { label: "Berg", key: "berg", emoji: "⛰" },
    { label: "Meer", key: "meer", emoji: "🌊" },
    { label: "Feuer", key: "feuer", emoji: "🔥" },
    { label: "Haus", key: "haus", emoji: "🏠" },
    { label: "Auto", key: "auto", emoji: "🚗" },
    { label: "Bus", key: "bus", emoji: "🚌" },
    { label: "Zug", key: "zug", emoji: "🚂" },
    { label: "Flugzeug", key: "flugzeug", emoji: "✈" },
    { label: "Fahrrad", key: "fahrrad", emoji: "🚲" },
    { label: "Rakete", key: "rakete", emoji: "🚀" },
    { label: "Roboter", key: "robot", emoji: "🤖" },
    { label: "Vogel", key: "vogel", emoji: "🐦" },
    { label: "Fisch", key: "fisch", emoji: "🐟" },
    { label: "Baer", key: "baer", emoji: "🐻" },
    { label: "Loewe", key: "loewe", emoji: "🦁" },
    { label: "Fuchs", key: "fuchs", emoji: "🦊" },
    { label: "Panda", key: "panda", emoji: "🐼" },
    { label: "Pinguin", key: "pinguin", emoji: "🐧" },
    { label: "Biene", key: "biene", emoji: "🐝" },
    { label: "Schmetterling", key: "schmetterling", emoji: "🦋" },
    { label: "Wal", key: "wal", emoji: "🐋" },
    { label: "Delfin", key: "delfin", emoji: "🐬" },
    { label: "Hai", key: "hai", emoji: "🦈" },
    { label: "Eule", key: "eule", emoji: "🦉" },
    { label: "Pferd", key: "pferd", emoji: "🐴" },
    { label: "Kuh", key: "kuh", emoji: "🐄" },
    { label: "Schwein", key: "schwein", emoji: "🐷" },
    { label: "Hase", key: "hase", emoji: "🐰" },
    { label: "Frosch", key: "frosch", emoji: "🐸" },
    { label: "Schlange", key: "schlange", emoji: "🐍" },
    { label: "Pizza", key: "pizza", emoji: "🍕" },
    { label: "Apfel", key: "apfel", emoji: "🍎" },
    { label: "Banane", key: "banane", emoji: "🍌" },
    { label: "Orange", key: "orange", emoji: "🍊" },
    { label: "Birne", key: "birne", emoji: "🍐" },
    { label: "Wolkenkratzer", key: "wolkenkratzer", emoji: "🏢" },
    { label: "Ente", key: "ente", emoji: "🦆" },
    { label: "Schaf", key: "schaf", emoji: "🐑" },
    { label: "Maus", key: "maus", emoji: "🐭" },
    { label: "Huhn", key: "huhn", emoji: "🐔" },
    { label: "Kuchen", key: "kuchen", emoji: "🎂" },
    { label: "Kaffee", key: "kaffee", emoji: "☕" },
    { label: "Burger", key: "burger", emoji: "🍔" },
    { label: "Eis", key: "eis", emoji: "🍦" },
    { label: "Brot", key: "brot", emoji: "🍞" },
    { label: "Tisch", key: "tisch", emoji: "🪑" },
    { label: "Stuhl", key: "stuhl", emoji: "💺" },
    { label: "Bett", key: "bett", emoji: "🛏" },
    { label: "Sofa", key: "sofa", emoji: "🛋" },
    { label: "Lampe", key: "lampe", emoji: "💡" },
    { label: "Fernseher", key: "fernseher", emoji: "📺" },
    { label: "Uhr", key: "uhr", emoji: "🕐" },
    { label: "Buch", key: "buch", emoji: "📖" },
    { label: "Stift", key: "stift", emoji: "✏" },
    { label: "Telefon", key: "handy", emoji: "📱" },
    { label: "Laptop", key: "laptop", emoji: "💻" },
    { label: "Tasse", key: "tasse", emoji: "☕" },
    { label: "Teller", key: "teller", emoji: "🍽" },
    { label: "Loeffel", key: "loeffel", emoji: "🥄" },
    { label: "Gabel", key: "gabel", emoji: "🍴" },
    { label: "Schluessel", key: "schluessel", emoji: "🔑" },
    { label: "Tuer", key: "tuer", emoji: "🚪" },
    { label: "Fenster", key: "fenster", emoji: "🪟" },
    { label: "Spiegel", key: "spiegel", emoji: "🪞" },
    { label: "Dusche", key: "dusche", emoji: "🚿" },
    { label: "Toilette", key: "toilette", emoji: "🚽" },
    { label: "Kuehlschrank", key: "kuehlschrank", emoji: "🧊" },
    { label: "Mikrowelle", key: "mikrowelle", emoji: "📻" },
    { label: "Ofen", key: "ofen", emoji: "🔥" },
    { label: "Ball", key: "ball", emoji: "⚽" },
    { label: "Schuh", key: "schuh", emoji: "👟" },
    { label: "Hut", key: "hut", emoji: "🎩" },
    { label: "Hemd", key: "hemd", emoji: "👕" },
    { label: "Hose", key: "hose", emoji: "👖" },
    { label: "Regenschirm", key: "regenschirm", emoji: "☂" },
    { label: "Kopfhoerer", key: "kopfhoerer", emoji: "🎧" },
    { label: "Schere", key: "schere", emoji: "✂" },
    { label: "Hammer", key: "hammer", emoji: "🔨" },
    { label: "Zaun", key: "zaun", emoji: "🚧" },
    { label: "Strasse", key: "strasse", emoji: "🛣" },
    { label: "Ampel", key: "ampel", emoji: "🚦" },
    { label: "Wald", key: "wald", emoji: "🌲" },
    { label: "Rose", key: "rose", emoji: "🌹" },
    { label: "Tulpe", key: "tulpe", emoji: "🌷" },
    { label: "Kaktus", key: "kaktus", emoji: "🌵" },
    { label: "Pilz", key: "pilz", emoji: "🍄" },
    { label: "Regenbogen", key: "regenbogen", emoji: "🌈" },
    { label: "Vulkan", key: "vulkan", emoji: "🌋" },
    { label: "Schloss", key: "schloss", emoji: "🏰" },
    { label: "Kirche", key: "kirche", emoji: "⛪" },
    { label: "Bruecke", key: "bruecke", emoji: "🌉" },
    { label: "Leuchtturm", key: "leuchtturm", emoji: "🗼" },
    { label: "Boot", key: "boot", emoji: "⛵" },
    { label: "Schiff", key: "schiff", emoji: "🚢" },
    { label: "UFO", key: "ufo", emoji: "🛸" },
    { label: "Planet", key: "planet", emoji: "🪐" },
    { label: "Drache", key: "drache", emoji: "🐉" },
    { label: "Einhorn", key: "einhorn", emoji: "🦄" },
    { label: "Geist", key: "geist", emoji: "👻" },
    { label: "Smiley", key: "smiley", emoji: "😊" },
    { label: "Musik", key: "musik", emoji: "🎵" },
    { label: "Gitarre", key: "gitarre", emoji: "🎸" },
    { label: "Kamera", key: "kamera", emoji: "📷" },
    { label: "Geschenk", key: "geschenk", emoji: "🎁" }
  ];

  function getSimplePresets() { return SIMPLE_PRESETS.slice(); }

  function shuffleList(list) {
    var arr = list.slice();
    var i, j, tmp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  function getRandomPresets(count) {
    count = count || 3;
    return shuffleList(SIMPLE_PRESETS).slice(0, count);
  }

  function formatImagePrompt(subject) {
    subject = String(subject || "").trim();
    if (!subject) return "Mach ein Bild von Motiv";
    if (isImageRequest(subject)) return subject;
    return "Mach ein Bild von " + subject;
  }

  function generateSimplePreset(preset, size) {
    if (!preset) return null;
    var prompt = "Erstelle ein Bild von " + preset.key;
    return generate(prompt, { size: size || 32, style: DEFAULT_STYLE });
  }

  function getMotifLabel(motif) {
    if (!motif) return "Motiv";
    if (motif.label) return motif.label;
    if (motif.keys && motif.keys[0]) return motif.keys[0];
    return "Motiv #" + ((motif.index || 0) + 1);
  }

  function getMotifCategory(motif) {
    if (!motif) return "alle";
    var p = motif.pattern || "";
    var k = (motif.keys && motif.keys[0]) || "";
    if (/noco|logo|flux|prism|spark/.test(k)) return "noco";
    if (/fish|cat|dog|fox|lion|tiger|panda|bee|whale|dolphin|shark|owl|penguin|dragon|axolotl|capybara|otter|hedgehog|squirrel|peacock|narwhal|koi|jellyfish|mermaid|bird|eagle|swan|alien|robot|horse|bear|cow|pig|rabbit|frog|sheep|duck|mouse|chicken|goat|parrot/.test(p)) return "tiere";
    if (/rocket|ufo|planet|spaceship|spacestation|chip|server|cyber|glitch|vr|blockchain|atom|dna|helix|solar|tower|wifi|hologram|satellite|skyscraper|skyline/.test(p)) return "tech";
    if (/pizza|croissant|avocado|strawberry|pineapple|bubbletea|bbq|corn|mango|grapes|lemon|carrot|coffee|ramen|cake|burger|coconut|apple|banana|orange|pear|donut|bowl|bottle|food|egg/.test(p)) return "food";
    if (/castle|wizard|wand|phoenix|unicorn|oni|golem|rune|totem|mermaid|mandala|festival|egg|skull|ghost/.test(p)) return "fantasy";
    if (/sun|moon|tree|mountain|wave|flower|aurora|snow|ocean|forest|coral|oasis|autumn|garden|fog|lightning|volcano|beach|desert/.test(p)) return "natur";
    return "alle";
  }

  function getMotifCategories() {
    return [
      { id: "alle", label: "Alle", emoji: "✦" },
      { id: "noco", label: "NOCO", emoji: "◇" },
      { id: "natur", label: "Natur", emoji: "🌿" },
      { id: "tiere", label: "Tiere", emoji: "🐾" },
      { id: "tech", label: "Tech", emoji: "⚡" },
      { id: "food", label: "Food", emoji: "🍕" },
      { id: "fantasy", label: "Fantasy", emoji: "🐉" }
    ];
  }

  function motifToBrowseItem(motif) {
    return {
      index: motif.index,
      label: motif.label,
      emoji: motif.emoji,
      category: getMotifCategory(motif),
      prompt: "Erstelle ein Bild von " + motif.label
    };
  }

  function getMotifsByCategory(category, limit) {
    limit = limit || 56;
    var out = [];
    var i, cat;
    for (i = 0; i < ALL_MOTIFS.length && out.length < limit; i++) {
      cat = getMotifCategory(ALL_MOTIFS[i]);
      if (!category || category === "alle" || cat === category) {
        out.push(motifToBrowseItem(ALL_MOTIFS[i]));
      }
    }
    return out;
  }

  function getFeaturedMotifs(count) {
    count = count || 48;
    var priority = [
      "sonne", "noco", "drache", "katze", "herz", "mond", "wald", "rakete", "pizza", "einhorn",
      "jellyfish", "axolotl", "capybara", "bubble tea", "feuerwerk", "cyberpunk", "koi",
      "lotus", "pfau", "erdbeere", "ananas", "raumschiff", "zauberstab", "oni maske"
    ];
    var out = [];
    var seen = {};
    var i, m, k, key;

    function pushMotif(motif) {
      if (!motif || seen[motif.index]) return;
      seen[motif.index] = true;
      out.push(motifToBrowseItem(motif));
    }

    for (i = 0; i < priority.length && out.length < count; i++) {
      for (k = 0; k < ALL_MOTIFS.length; k++) {
        key = ALL_MOTIFS[k].keys && ALL_MOTIFS[k].keys[0];
        if (key === priority[i]) { pushMotif(ALL_MOTIFS[k]); break; }
      }
    }
    for (i = 0; i < MOTIFS.length && out.length < count; i++) {
      pushMotif(ALL_MOTIFS[i]);
    }
    return out;
  }

  function rgbToHex(r, g, b) {
    function h(n) {
      var s = Math.max(0, Math.min(255, Math.round(n))).toString(16);
      return s.length < 2 ? "0" + s : s;
    }
    return "#" + h(r) + h(g) + h(b);
  }

  function extractPalette(result, count) {
    count = count || 8;
    if (!result || !result.pixels) return [];
    var buckets = {};
    var i, r, g, b, key, sorted, out;
    for (i = 0; i < result.pixels.length; i += 12) {
      r = result.pixels[i];
      g = result.pixels[i + 1];
      b = result.pixels[i + 2];
      key = (r >> 4) + "," + (g >> 4) + "," + (b >> 4);
      if (!buckets[key]) buckets[key] = { r: 0, g: 0, b: 0, n: 0 };
      buckets[key].r += r;
      buckets[key].g += g;
      buckets[key].b += b;
      buckets[key].n++;
    }
    sorted = Object.keys(buckets).map(function (k) {
      var bucket = buckets[k];
      return {
        r: Math.round(bucket.r / bucket.n),
        g: Math.round(bucket.g / bucket.n),
        b: Math.round(bucket.b / bucket.n),
        n: bucket.n
      };
    }).sort(function (a, b) { return b.n - a.n; });
    out = [];
    for (i = 0; i < sorted.length && out.length < count; i++) {
      out.push(rgbToHex(sorted[i].r, sorted[i].g, sorted[i].b));
    }
    return out;
  }

  function getRandomStyleId() {
    var keys = Object.keys(STYLES);
    return keys[Math.floor(Math.random() * keys.length)];
  }

  function getDefaultStyleId() { return DEFAULT_STYLE; }

  global.NocoPixel = {
    generate: generate,
    drawToCanvas: drawToCanvas,
    animateFill: animateFill,
    getRenderInterrupt: getRenderInterrupt,
    getRenderInterrupts: function () { return RENDER_INTERRUPTS.slice(); },
    isImageRequest: isImageRequest,
    matchMotif: matchMotif,
    resolveMotif: resolveMotif,
    buildUnsupportedMessage: buildUnsupportedMessage,
    getStyles: getStyles,
    getExamplePrompts: getExamplePrompts,
    getRandomExample: getRandomExample,
    getMotifLabel: getMotifLabel,
    getFeaturedMotifs: getFeaturedMotifs,
    getMotifCategories: getMotifCategories,
    getMotifsByCategory: getMotifsByCategory,
    getMotifCategory: getMotifCategory,
    extractPalette: extractPalette,
    getRandomStyleId: getRandomStyleId,
    getDefaultStyleId: getDefaultStyleId,
    getSimplePresets: getSimplePresets,
    getRandomPresets: getRandomPresets,
    formatImagePrompt: formatImagePrompt,
    generateSimplePreset: generateSimplePreset,
    getMotifCount: function () { return MOTIF_COUNT; },
    getStyleCount: function () { return Object.keys(STYLES).length; },
    getMotifByIndex: getMotifByIndex,
    extractSubject: extractSubject,
    packImageMeta: packImageMeta,
    ensureResult: ensureResult
  };
})(typeof window !== "undefined" ? window : this);
