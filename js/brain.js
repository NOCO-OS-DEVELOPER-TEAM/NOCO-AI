/**
 * NOCO AI Brain v3.4 — Wissensbank Engine
 * Erweitert: NOCO OS + allgemeines Wissen (Wissenschaft, Tech, Alltag)
 * WICHTIG: Nur gerade Anfuehrungszeichen in Strings — keine typografischen " "
 */
(function (global) {
  "use strict";

  /* NOCO Style — offizielle Modell- & Funktionsnamen */
  var NOCO_BRAND = {
    models: {
      pro:   { name: "NOCO AI Pro 1.0", tagline: "Ultra Rush · Smartest · Exclusive only" },
      flux:  { name: "NOCO Flux",  tagline: "Rush-Engine · Unbegrenzt · Immer Prism+" },
      prism: { name: "NOCO Prism", tagline: "Voll-Vault · 520+ Themen" },
      spark: { name: "NOCO Spark", tagline: "Kompakt-Antworten · Schnell & kurz" }
    },
    features: {
      vault:  { name: "NOCO Vault",  desc: "Lokale Wissens-Engine (520+ Themen)" },
      echo:   { name: "NOCO Echo",   desc: "Chat-Verlauf & Zusammenfassung" },
      summary:{ name: "NOCO Summary", desc: "Fasst lange Texte in 5 klare Stichpunkte zusammen" },
      insight: { name: "NOCO Inside", desc: "Analysiert Dateien & Texte — Dokument, Code, Kernpunkte, Bild" },
      motion: { name: "NOCO Motion", desc: "4s Epic Video · 8 Keyframes · Live-Pose-Interpolation · 3600 Motive" },
      buildCreate: { name: "NOCO Create", desc: "Zeichnet Pixel-Bilder im Chat aus der 3600er Motiv-Bank" },
      agent:  { name: "NOCO Agent",  desc: "Fuehrt komplexe Auftraege automatisiert mit Live-Aktionsplan aus" },
      render: { name: "NOCO Render", desc: "Offline-Pixel-Engine — Bilder direkt im Chat generieren" },
      lensDetect: { name: "NOCO Lens", desc: "Erkennt KI-Bilder & NOCO-Pixel-Signaturen per Upload" },
      lens:   { name: "NOCO Lens",   desc: "Blaue Begriffe antippen fuer Vault-Erklaerungen" },
      rush:   { name: "NOCO Rush",   desc: "Priority-Antworten ~90 ms (Exclusive)" },
      access: { name: "NOCO Access", desc: "Zeigt Plan, Modell & Tageslimit live" },
      sparks: { name: "NOCO Sparks", desc: "Zufalls-Fragen aus 520+ Vault-Themen" },
      sheen:  { name: "NOCO Sheen",  desc: "Blur-Reveal beim Bild-Render — wird scharf" },
      brief:  { name: "NOCO Brief",  desc: "Strukturiertes Recherche-Briefing zu jedem Thema" },
      wiki:   { name: "Wiki-API 1.1", desc: "Live-Wikipedia-Kurztexte (Abstracts) von de.wikipedia.org" },
      automation: { name: "Nexus-Auto", desc: "Pill oben — intelligente Wahl zwischen Offline-Wissen und Wikipedia" },
      glow:   { name: "NOCO Glow",   desc: "Live-Vorschau waehrend du tippst — Intent & Related-Chips" },
      hub:    { name: "NOCO Hub",    desc: "Zentrale — Bild, Motion, Inside, Agent per Chat-Buttons" },
      create: { name: "NOCO Create", desc: "Bild-Modus — frei formulieren oder Motiv waehlen" },
      file:   { name: "Datei",       desc: "Laedt Text, Code oder Bild fuer NOCO Inside hoch" }
    },
    plans: {
      free:      { name: "NOCO Free",      short: "NOCO Free" },
      exclusive: { name: "NOCO Exclusive", short: "Exclusive" }
    }
  };

  var KNOWLEDGE = [
    {
      keys: ["noco ai", "was ist noco ai", "wer bist du", "was bist du", "bist du echt", "echte ki", "fake ki", "simuliert", "llm"],
      answers: [
        "Ich bin **NOCO AI** — dein Chat-Assistent im NOCO-Universum. Technisch eine **simulierte Wissens-KI**: Keywords werden erkannt, Antworten kommen aus einer lokalen Datenbank. Kein ChatGPT, kein Server.",
        "**Ehrlich:** Keine Cloud-KI. Ich bin eine regelbasierte Engine mit **NOCO OS**-Wissen — Workspace, PWA, Keycard, Forge, Exclusive. Fuer NOCO-Fragen bin ich richtig gut!",
        "Stell mich mir vor wie einen **NOCO-Experten im Glas-Look**: schnelle Antworten, Smalltalk, Multi-Chat, Kopieren und Neu-Generieren. Simuliert, aber transparent.",
        "**NOCO AI** — **NOCO Vault** (520+ Themen), **NOCO Echo**, **NOCO Render**, **NOCO Access**. Modelle: **Flux** · **Prism** · **Spark**. Lokal & offline.",
        "**Fake AI, echtes NOCO-Feeling.** Vault-Wissen + NOCO OS. Exclusive: **NOCO Lens** (blaue Begriffe) & **NOCO Rush** (~90 ms)."
      ]
    },
    {
      keys: ["noco os", "was ist noco", "noco system", "betriebssystem", "noco universum"],
      answers: [
        "**NOCO OS** ist ein browserbasiertes Betriebssystem-Konzept in HTML. Desktop, Apps, Fenster, Taskleiste, Sicherheit, App Store, Widgets — alles im **Liquid Glass**-Look.",
        "Zwei Welten: **Workspace** (Desktop/HTML fuer PC) und **Mobile PWA** (iPhone ueber GitHub Pages). Gemeinsam: Keycards, Design, NOCO-Feeling.",
        "Ablauf: **FirstLight** einrichten → Apps in **NOCO Forge** → **NOCO Security** → fake bezahlen mit **NOCO Pay** → Premium via **NOCO Exclusive** (12 Euro/Monat simuliert).",
        "NOCO OS ist eine **Simulation** — kein echtes Windows/iOS. Aber: Fake-Viren, Keycard-Backups, Updates 1.2 bis 1.5, Premium-Features.",
        "Frag nach: **Nexus, Focus, Explorer, Widgets, DevForge, ShieldGate** — Workspace und Mobile kann ich vergleichen."
      ]
    },
    {
      keys: ["workspace", "desktop version", "html version", "pc version"],
      answers: [
        "**NOCO OS Workspace** = Desktop-Version. Fenster-System, Taskleiste, Systemleiste, Bearbeitungsmodus, grosse HTML-Datei.",
        "Enthaelt: **NOCO Nexus**, **NOCO Focus**, **NOCO Forge**, **NOCO Core**, **NOCO Security**, **NOCO Explorer**, **NOCO Exclusive**, **Widgets**.",
        "Typisch: FirstLight → Desktop → Apps → **Keycard** exportieren → auf anderem PC importieren.",
        "Maus & Tastatur, Fenster mit unterer Barriere, Apps an Taskleiste anheften, Ordner auf dem Desktop.",
        "**Version 1.5** = Liquid Glass Update — transparenter, weicher, futuristischer."
      ]
    },
    {
      keys: ["mobile", "pwa", "iphone", "handy", "github pages"],
      answers: [
        "**NOCO OS Mobile** = PWA fuer iPhone (iPhone 13 Pro optimiert). GitHub Pages, dann in Safari: Zum Home-Bildschirm — wie eine App ohne App Store.",
        "Struktur: Lockscreen → **Homescreen** (Widgets, Uhrzeit) → **Desktop** (Apps) → Fullscreen mit Swipe-Gesten.",
        "Installation: GitHub hochladen → Pages aktivieren → Link auf iPhone → Teilen → Home-Bildschirm. Cache-Problem? URL mit ?v=20 anhaengen.",
        "Mobile hat **NOCO Hub**, **NOCO Sync**, Code/Passkey, Bearbeitungsmodus, **Keycard-Import** vom Workspace.",
        "Swipes: horizontal Homescreen/Desktop, aus Apps links=zurueck, rechts=Desktop (wenn entsperrt)."
      ]
    },
    {
      keys: ["workspace vs", "unterschied", "desktop und mobile", "pwa und workspace"],
      answers: [
        "**Workspace:** PC, Maus, Fenster, Nexus, Focus.\n**Mobile PWA:** iPhone, Touch, Swipe, Hub, Fullscreen.\n**Gemeinsam:** Keycard, Liquid Glass, Forge, Security, Exclusive.",
        "Workspace = macOS/Windows-Feeling. Mobile = iOS-Feeling. **Keycard** verbindet beide.",
        "Sync-Weg: Keycard auf Workspace exportieren → auf Mobile importieren → weiterarbeiten → zurueck exportieren.",
        "Workspace: NOCO Focus + Fenster-Tools. Mobile: Swipe-Navigation + Passkey. Widgets nur dauerhaft via Keycard.",
        "Tabelle:\n| | Workspace | Mobile |\n| Geraet | PC | iPhone |\n| Menue | Nexus | Hub |\n| Apps | Fenster | Fullscreen |"
      ]
    },
    {
      keys: ["keycard", "noco keycard", "backup", "snapshot"],
      answers: [
        "**NOCO Keycard** = exportierbares Backup (Snapshot). Speichert: Benutzername, Code, Apps, Notizen, Themes, Widgets, Desktop, Exclusive-Status, NOCO Pay.",
        "**Wichtig:** Keycards aktualisieren sich NICHT automatisch. Neue Aenderungen? Neue Keycard exportieren.",
        "Keycard = Login + Backup + Sync zwischen Workspace und Mobile.",
        "Ohne Keycard ueberleben Widgets/Layout oft keinen Reload. Mit Keycard: alles wiederherstellbar.",
        "Verwalten in **NOCO Security** und **ShieldGate**. Mobile: **NOCO Sync** App."
      ]
    },
    {
      keys: ["firstlight", "einrichtung", "setup", "benutzername"],
      answers: [
        "**FirstLight** = Ersteinrichtung (wie iPhone-Setup). Benutzername, Code, Sicherheit, Apps, Exclusive, NOCO Pay, Keycard.",
        "Liquid Glass Design, Progress-Dots, Abschlussbildschirm. Ohne Keycard: FirstLight startet. Mit Keycard: direkt zum gespeicherten Zustand.",
        "Code aktiv → muss wieder eingegeben werden. Kein Code → Login ohne Code. Keycard = Snapshot, nicht live.",
        "Exclusive (12 Euro fake) und NOCO Pay werden in FirstLight vorgestellt.",
        "Mehrfach ueberarbeitet: weicher, indirekte Farben, fluessige Uebergaenge."
      ]
    },
    {
      keys: ["forge", "app store", "noco forge", "apps installieren"],
      answers: [
        "**NOCO Forge** = App Store. Suchen, Kategorien, installieren, deinstallieren, Exclusive-Apps. **Keine App ohne Forge.**",
        "Apps: Quick Music, Notizen, Casino, Theme, Shadow Arena, NOCO Pay, Cloud, Explorer, Minispiele.",
        "Forge: sauberes Layout bei 100% Zoom, dezente Exclusive-Badges, keine doppelten Buttons.",
        "Exclusive-Apps gesperrt bis **NOCO Exclusive** aktiv — dann Unlock-Animation.",
        "Kategorien: Spiele, Design, Produktivitaet, Exclusive, System."
      ]
    },
    {
      keys: ["security", "noco security", "virenscan", "fake virus", "shieldgate", "virus"],
      answers: [
        "**NOCO Security** = Sicherheitszentrale. Code, Keycard, Virenscan, **Deep Scan** (Exclusive), NOCO Pay, Warnungen.",
        "**Fake-Virus** = Simulation im NOCO OS. **Schadet dem echten PC NICHT!** Popups, Apps verstecken, Pay angreifen.",
        "Ausloeser: gefaehrliche Downloads im **NOCO Explorer**. Entfernung: Virenscan oder Deep Scan.",
        "**ShieldGate:** Code, Keycard, NOCO Link (unsicher — Warnung!). Hard Reset mit Wartezeit.",
        "Mobile Security: Passkey, App-Schutz, Installationsschutz — touchoptimiert."
      ]
    },
    {
      keys: ["nexus", "noco nexus", "kontrollzentrum"],
      answers: [
        "**NOCO Nexus** = Schnellmenue Workspace (oben rechts). Standard-Apps, Fenster-Tools, Vollbild, Hard Reset, Exclusive-Shortcut.",
        "Einheitliches Nexus fuer alle Versionen — keine Duplikate mehr.",
        "Nexus vs **NOCO Hub**: Nexus=Desktop, Hub=Mobile, kompakt & touchoptimiert.",
        "Nexus-Kacheln: Liquid Glass, dezente Glows, abgerundete Ecken.",
        "Schnellzugriff ohne Desktop zu verlassen."
      ]
    },
    {
      keys: ["focus", "noco focus", "fokus", "fokusmodus"],
      answers: [
        "**NOCO Focus** = Fokusmodi: Produktivitaet, Gaming, Ruhig, Exclusive-Fokus. Nur **ein Modus** gleichzeitig.",
        "Kann: Spiele sperren, Effekte reduzieren, Taskleiste ausblenden, Theme aendern, Live-Hintergrund aus.",
        "Exclusive-Fokus = Premium, nur mit NOCO Exclusive.",
        "Temporaere Aenderung — kein dauerhafter Einstellungswechsel.",
        "Aktivierung: Nexus oder Einstellungen."
      ]
    },
    {
      keys: ["exclusive", "noco exclusive", "premium", "abo", "12 euro"],
      answers: [
        "**NOCO Exclusive** = Premium fuer **12 Fake-Euro/Monat** via NOCO Pay. Kein echtes Geld!",
        "Vorteile: Developer Updates, OS 1.4/1.5, Premium-Themes, Exclusive Apps, Deep Scan, NOCO Cloud, exklusive Widgets.",
        "Design: leuchtende Badges, Premium-Glas, Unlock-Animation, Feature-Karussell, gruene Checkmarks FREE vs EXCLUSIVE.",
        "Wenn aktiv: Werbehinweise verschwinden. Early Access Banner in Apps.",
        "NOCO AI Feedback-Daumen nutzen dasselbe Mint-Gruen wie Exclusive-Highlights."
      ]
    },
    {
      keys: ["exclusive modell", "noco exclusive model", "nachrichten pro tag", "wie viele nachrichten", "kostenlos", "free tier", "v1.0", "latest model", "modell tier", "testphase", "probezeit"],
      answers: [
        "**NOCO Access Free:** 20 Nachrichten/Tag · Msg 1-10 = **NOCO Prism** · danach **NOCO Spark**.",
        "**NOCO Exclusive:** **NOCO Flux** + **NOCO Rush** (~90 ms), **NOCO Lens**, **NOCO Render** (3600 Motive).",
        "**NOCO Access**-Leiste ueber dem Chat zeigt Plan & Modell live.",
        "**NOCO Render** + **Epic Sheen**: Spiral-Reveal, Galerie 48, 50 Beispiel-Prompts.",
        "Testphase oder Fake-Abo — Sidebar Exclusive-Karte. Kein echtes Geld."
      ]
    },
    {
      keys: ["pixel studio", "bild generieren", "pixel art", "noco pixel", "bild erstellen", "zeichne", "male ein bild", "pixel bild"],
      answers: [
        "**NOCO Render** — Bilder **im Chat**: *Mach ein Bild von …* oder **▦**. **1 Bild zur Zeit** — danach das naechste.",
        "3600 Motive, **Standard-Modus** (6 Styles), Epic Sheen. **Nur Exclusive** zum Generieren.",
        "52x52 Pro / 40x40 Free — quadratisches Pixel mit NOCO Sheen-Animation.",
        "Neues Bild? `/new` fuer neuen Chat. Erkennen: **+** oder **Erkennen** fuer KI-Bild-Check.",
        "Motive: Katze, Sonne, Drache, Pizza… — mehr Motive als Styles."
      ]
    },
    {
      keys: ["noco pay", "zahlung", "fake geld", "guthaben"],
      answers: [
        "**NOCO Pay** = Fake-Zahlungen. Simulierte Euro, Guthaben, Transaktionen, App-Kaeufe, Exclusive-Abo.",
        "Kein echtes Geld! Alles nur in der NOCO-Simulation.",
        "Kann von Fake-Virus betroffen sein — in Security einsehbar.",
        "FirstLight: Zahlungsmethode vorbereiten. Security: Transaktionsuebersicht.",
        "12 Euro/Monat Exclusive — komplett simuliert, premium feeling."
      ]
    },
    {
      keys: ["explorer", "noco web", "browser", "download"],
      answers: [
        "**NOCO Explorer** = Browser in NOCO OS. Startseite **NOCO Web** mit Fake-Artikeln und Downloads.",
        "Kein echtes Internet — simuliertes Web mit Szenarien (Shadow Arena, Fake-Virus).",
        "Explorer warnt vor unsicheren Downloads.",
        "Fuehlt sich wie Suchmaschine an, nicht wie normale App.",
        "Auch auf Mobile: NOCO Web, touchoptimiert."
      ]
    },
    {
      keys: ["update", "version", "1.5", "1.4", "1.3", "1.2"],
      answers: [
        "Versionen: **1.2** Standard, **1.3** Stable, **1.4** Beta, **1.5** Developer + Liquid Glass. (1.1 entfernt)",
        "**1.5** = grosses Design-Update. Glasiger, weicher, futuristischer — auch Basis fuer NOCO AI.",
        "Update-System: Changelog, Stable/Beta/Developer, Exclusive-Anforderung.",
        "Was ist neu: in Einstellungen, Versionen 1.2–1.5 aufklappbar.",
        "DevForge: Beta/Developer per Code freischaltbar."
      ]
    },
    {
      keys: ["liquid glass", "glass", "design", "glassmorphism"],
      answers: [
        "**Liquid Glass** = Design-Sprache: blur(), indirekte Farben (Teal, Violet, Pink, Mint), Noise, Sheen, weiche Schatten.",
        "In NOCO AI: Top-Bar, Sidebar, Bubbles, Settings (zentriert), Feedback-Menue, Iridescent-Buttons.",
        "Regeln: ruhige Animationen, keine grelle Ueberlagerung, Premium wie Exclusive.",
        "1.5 macht alles fluessiger — Licht durch Glas, animierte Raender, Canvas-Blobs.",
        "Einstellungen: Glas-Intensitaet Niedrig/Normal/Hoch."
      ]
    },
    {
      keys: ["widget", "widgets"],
      answers: [
        "Widgets = interaktive Elemente auf Desktop/Homescreen. Uhrzeit, Notizen, Musik, Security, Pay, Fokus.",
        "Raster-platzierbar, groessenveraenderbar. Teilweise Exclusive-only.",
        "Nur dauerhaft via **Keycard** — nicht auto nach Reload.",
        "Mobile: Mobile Status, Heute NOCO, Shortcuts — scrollbar.",
        "Bearbeitungsmodus: verschieben, hinzufuegen, entfernen."
      ]
    },
    {
      keys: ["hub", "noco hub"],
      answers: [
        "**NOCO Hub** = mobiles Schnellmenue. Kleines Glas-Menue: Schnelleinstellungen, Fokus, Theme, Apps, Sync.",
        "Tippe ausserhalb → schliesst sich. Touchoptimiert.",
        "Pendant zu Nexus — kompakter fuer iPhone.",
        "Erreichbar: Helligkeit, Fokus, App-Shortcuts, Security.",
        "Hub + Homescreen + Desktop = Mobile-Navigation."
      ]
    },
    {
      keys: ["sync", "noco sync"],
      answers: [
        "**NOCO Sync** = Keycard-Sync Workspace ↔ Mobile. Export → Import → weiter → zurueck.",
        "Sync-App auf Mobile: Keycard als Datei, Workspace-Keycards erkennen.",
        "Live-Sync braucht Backend (Firebase etc.). GitHub Pages ist statisch.",
        "Zukunft: QR-Login, Mobile als Freigabegeraet.",
        "Manuell aber sicher — du entscheidest wann gesichert wird."
      ]
    },
    {
      keys: ["privat", "privacy", "datenschutz", "privatsphaere", "privatsphäre", "daten", "speicher", "lokal", "tracking", "sicherheit daten"],
      answers: [
        "**Datenschutz NOCO AI:** Alles lokal im Browser (localStorage). Kein Server, kein Tracking, keine API. Chats gehoeren nur dir.",
        "Gespeichert: Chats, Einstellungen, Feedback — nur auf deinem Geraet. Export/Loeschung jederzeit in Einstellungen.",
        "Simulierte KI sendet **nichts** nach aussen. Kein OpenAI, keine Telemetrie.",
        "NOCO OS: localStorage + Keycard-Export. Keycard = bewusster Speicherpunkt, keine heimliche Auto-Sync.",
        "Wer Privatsphaere will: NOCO AI ist ideal — 100% clientseitig, offline nach erstem Laden.",
        "Wer sieht meine Chats? **Niemand** — ausser du auf deinem Geraet. Kein Konto, kein Login, kein Cloud-Upload."
      ]
    },
    {
      keys: ["vorschlag", "vorschlaege", "was soll ich", "was kann ich fragen", "beispiel", "ideen"],
      answers: [
        "**NOCO:** OS · Keycard · Forge · Security · Exclusive\n**NOCO Vault:** KI · Internet · Programmierung · Klima · Physik\n**Locker:** Witze · Smalltalk · NOCO Echo",
        "**520+ Vault-Themen.** Links: **NOCO Sparks** — 17 Kategorien, 400+ Schnellfragen.",
        "Konkrete Fragen = tiefere Antworten. 'Was ist DNA?' oder 'Was macht NOCO Security?'",
        "Neu generieren = andere Formulierung zum selben Thema.",
        "Exclusive-Nutzer: volle Antworten ohne Modell-Kuerzung."
      ]
    },
    {
      keys: ["faehigkeit", "fähigkeit", "kannst du", "was kann", "funktion", "features", "hilfe", "help"],
      answers: [
        "**NOCO Stack:**\n• **Echo** · **Render** · **Access** · **Vault** · **Rush** · **Lens**\n• **Modelle:** Flux (Exclusive) · Prism (Free 1-10) · Spark (Free 11+)\n• **NOCO OS** — Workspace, Keycard, Forge, Security…",
        "**Bedienung:** Frage tippen · NOCO Sparks · NOCO Lens (Exclusive) · Neu generieren",
        "Regelbasiert, nicht ChatGPT — **NOCO Vault** mit tiefem Wissen. Ehrlich kommuniziert.",
        "**NOCO Prism/Flux** = volle Antworten. **NOCO Spark** = kompakt — Flux hilft.",
        "Doku: NOCO_AI_Info.txt · brain.js = NOCO Vault Quellcode"
      ]
    },
    {
      keys: ["hallo", "hi", "hey", "moin", "servus", "hello", "guten morgen", "guten abend", "na"],
      answers: [
        "Hey! Schoen dass du da bist. Frag mich ueber NOCO OS oder klick eine Schnellfrage!",
        "Hallo! Bereit fuer NOCO-Technik oder lockeren Smalltalk.",
        "Moin! Willkommen im Liquid-Glass-Look. Was moechtest du wissen?",
        "Servus! Dein NOCO-Experte im Browser — schnell und privat.",
        "Hi! NOCO AI here — Workspace, PWA, Keycards, or just chat.",
        "Guten Tag! Keycard, Exclusive, Security — womit starten wir?",
        "Na! Alles klar? Ich bin online und warte auf deine Frage."
      ]
    },
    {
      keys: ["wie geht", "wie gehts", "wie laeuft", "alles fit", "was geht"],
      answers: [
        "Digital excellent — null Server-Latenz, 100% Liquid Glass! Und dir?",
        "Laeuft stabil im Browser. Keine Cloud, nur Glas und NOCO-Wissen.",
        "Alles fit! Was beschaeftigt dich — NOCO OS, Datenschutz oder Smalltalk?",
        "Bestens! Probier: 'Was ist NOCO Exclusive?' oder 'Erzaehl einen Witz'.",
        "Mir gehts gut — die Orbs schweben, die Engine ist geladen. Du?"
      ]
    },
    {
      keys: ["langweilig", "langeweile", "smalltalk", "quatschen", "was machst"],
      answers: [
        "Langweilig? Challenge: 'Was passiert bei einem Fake-Virus?' oder 'Was kostet Exclusive?'",
        "Smalltalk-Modus! NOCO OS, dein Tag, Lieblings-Feature — alles ok.",
        "Ich warte auf Action. Witze, NOCO Pay, Keycard-Sync — pick one!",
        "Quatschen geht! Ich bin simuliert, aber gespraechig. Was interessiert dich?",
        "Dann klick 'Erzaehl einen Witz' in der Sidebar — ich hab ein paar."
      ]
    },
    {
      keys: ["witz", "witzig", "lustig", "haha", "lol", "erzaehl einen witz", "erzähl einen witz", "lachen"],
      answers: [
        "Warum hat NOCO OS keinen echten Virenschutz? Weil der Virus auch nur fake ist und sich selbst nicht ernst nimmt.",
        "NOCO Pay: 12 Euro weg — Gefuehl: Premium. Realitaet: komplett simuliert. Bestes Fake-Abo ever.",
        "Keycard-Witz: Sie ist wie ein Foto deines Zimmers. Umgeraeumt? Neues Foto. NOCO nennt das Backup.",
        "FirstLight fragt Benutzername, NOCO AI antwortet sofort. Zwei Onboardings, ein Universum.",
        "Liquid Glass ist so durchsichtig, selbst meine Witze haben Blur-Effekt.",
        "Fake-Virus vs echter PC: Der Fake-Virus hat bessere Popups. Der PC hat keine.",
        "NOCO Explorer: Ein Browser der kein Internet hat. Wie 1995, aber cooler."
      ]
    },
    {
      keys: ["danke", "thanks", "super", "cool", "nice", "perfekt", "genial"],
      answers: [
        "Gerne! Frag weiter — NOCO-Universum ist gross.",
        "Freut mich! Feedback-Daumen helfen uns (Mint-Gruen = Exclusive-Style).",
        "Danke! Ich hab noch viele Antwortvarianten.",
        "Cool! Probier Neu-Generieren fuer andere Winkel.",
        "Perfekt — genau wofuer ich da bin!"
      ]
    },
    {
      keys: ["lieblings", "favorit", "bestes feature"],
      answers: [
        "Lieblings-Feature: **Liquid Glass 1.5** — verbindet NOCO OS und NOCO AI visuell.",
        "Die **Keycard** — elegant: Snapshot, Sync, Backup in einem.",
        "**NOCO Exclusive** Design — 12 Fake-Euro, aber die Animationen sind top.",
        "Der **Fake-Virus** — kreativ und harmlos.",
        "**Multi-Chat** hier in NOCO AI — parallel verschiedene Themen."
      ]
    },
    {
      keys: ["einstellungen", "settings", "shieldgate", "devforge"],
      answers: [
        "NOCO OS Einstellungen: NOCO Deck, ShieldGate, SessionVault, EtherLab, DevForge, Exclusive, Was ist neu, Themes, Speicher, Apps.",
        "NOCO AI Einstellungen (Zahnrad): Animationen, Glas-Intensitaet, Schreib-Effekt, Speed, Export, Loeschen.",
        "ShieldGate: Code, Keycard, NOCO Link. DevForge: Beta per Code.",
        "Mobile: gleiche Bereiche, touchoptimiert, scrollbar.",
        "DevForge standardmaessig aus — Developer-Features geschuetzt."
      ]
    },
    {
      keys: ["wer sieht", "wer kann meine", "meine chats", "ausspioniert", "gelesen"],
      answers: [
        "**Niemand.** Chats liegen nur in deinem Browser-localStorage. Kein Server liest mit.",
        "Kein Konto, kein Login, kein Upload. Selbst wir (NOCO AI) haben keinen Cloud-Zugriff.",
        "Wer das Geraet nutzt, sieht die Chats — wie bei Notizen auf dem PC. Sonst niemand.",
        "Export nur wenn DU auf Export klickst. Loeschen jederzeit moeglich.",
        "Simulierte KI = auch keine Daten an OpenAI oder aehnliches."
      ]
    },
    {
      keys: ["automation modus", "automation mode", "noco automation", "noco fusion", "noco nexus", "nexus modus", "fusion modus", "automatik modus", "auto modus wissen", "wie funktioniert automation", "wie funktioniert fusion", "wie funktioniert nexus"],
      answers: [
        "**Nexus-Auto** (oben: dritte Pill) ist der Automation-Modus: NOCO analysiert jede Frage und leitet **fast alles** an **Wiki-API 1.1** (Wikipedia) weiter.",
        "**Nur bei klarem Vault-Fall** → **NOCO-Wissen**: Smalltalk, **NOCO OS / Exclusive**, Bilder/Render, Faehigkeiten, Brief, Chat-Rueckfragen. Keine schwachen Vault-Zufallstreffer mehr.",
        "**Fakten, Woerter, Listen** (*Hund, Katze, Maus*) → Wikipedia. NOCO sucht **Hund**, **Einstein** usw., nicht den ganzen Satz. Mehrdeutig (*Maus*) → Begriffsklaerung.",
        "**Follow-ups** und Wiki-Kontext → Wikipedia. Exclusive noetig.",
        "Manuell: **Offline** = Vault. **Wiki** = immer Wikipedia. **Nexus-Auto** = intelligent gemischt (empfohlen).",
        "NOCO formuliert Wiki-Suchen um: *Was ist ein Haus?* wird zu **Haus** — keine Zufallstreffer wie Songtitel bei *hey*."
      ]
    },
    {
      keys: ["wiki api", "wiki-api", "wikipedia modus", "wissensquelle", "noco wissen vs wiki"],
      answers: [
        "**Wissensquellen** (oben in der Leiste):\n• **Offline** — lokale Vault, offline, NOCO OS + Alltag\n• **Wiki** — Live de.wikipedia.org\n• **Nexus-Auto** — intelligente Auto-Wahl",
        "Wiki-API liefert Wikipedia-Kurztexte mit CC BY-SA Hinweis. NOCO-Wissen ist besser fuer NOCO OS, Smalltalk und Vault-Themen.",
        "Automation: *Was ist ein Hund?* → Wiki sucht **Hund**, nicht den ganzen Satz. Kein *Hey Jude* bei *hey* — das bleibt Smalltalk im Vault.",
        "Erstes Mal Wiki/Automation: Rechtshinweis bestaetigen. Internet noetig fuer Wikipedia.",
        "Exclusive = Flux + Rush + Wiki + Automation + Render."
      ]
    },
    {
      keys: ["wissensbank", "wissens datenbank", "knowledge base", "datenbank wissen", "wie funktioniert dein wissen"],
      answers: [
        "**NOCO Vault** = strukturierte lokale Wissens-Engine in NOCO AI. Themen mit Keywords + Antwortvarianten. Matching findet die passendste Antwort.",
        "Zwei Welten in einer Bank:\n**NOCO:** OS, Keycard, Forge, Exclusive...\n**Allgemein:** KI, Internet, Wissenschaft, Programmierung, Klima, Geschichte u.v.m.",
        "Kein neuronales Netz — aber **tiefes Wissen** zu vielen Themen. Je konkreter die Frage, desto besser die Antwort. Probier **Neu generieren** fuer andere Formulierungen.",
        "Wissensbank laeuft **100% im Browser**. Kein Server, keine Cloud. Alles in brain.js — erweiterbar, transparent, offline.",
        "**v2.0 Update:** Deutlich mehr Themen, besseres Matching, laengere Erklaerungen. Exclusive-Nutzer bekommen volle Antworten ohne Kuerzung."
      ]
    },
    {
      keys: ["was ist ki", "kuenstliche intelligenz", "künstliche intelligenz", "machine learning", "neuronales netz", "deep learning"],
      answers: [
        "**Kuenstliche Intelligenz (KI)** = Computer-Systeme die Aufgaben loesen, die normalerweise menschliche Intelligenz brauchen: Sprache verstehen, Bilder erkennen, Entscheidungen treffen.",
        "**Machine Learning:** Programme lernen aus Daten statt nur feste Regeln. Beispiel: Spam-Filter lernt aus Millionen E-Mails.",
        "**Deep Learning** nutzt kuenstliche Neuronale Netze mit vielen Schichten — Basis von ChatGPT, Bild-KI, Spracherkennung.",
        "**NOCO AI ist KEINE echte KI** im ML-Sinne — sondern eine **regelbasierte Wissensbank**. Echte KI braucht Server und grosse Modelle.",
        "Ethische Fragen: Bias in Daten, Datenschutz, Deepfakes, Arbeitsmarkt. KI ist Werkzeug — Nutzung entscheidet ueber Nutzen und Risiko."
      ]
    },
    {
      keys: ["internet", "wie funktioniert internet", "world wide web", "www", "webseite"],
      answers: [
        "Das **Internet** = weltweites Netzwerk aus Milliarden verbundener Geraete. Daten reisen als kleine Pakete ueber Router und Kabel/Funk.",
        "**Web (WWW)** darauf: Webseiten mit **HTML**, erreichbar ueber **URLs**. Browser (Chrome, Firefox) holen Seiten von **Servern** per HTTP/HTTPS.",
        "**DNS** = Telefonbuch des Internets: google.com → IP-Adresse. **HTTPS** verschluesselt die Verbindung (Schloss-Symbol).",
        "NOCO AI braucht Internet nur zum **ersten Laden** der Dateien. Danach: Wissensbank lokal, keine Chat-API.",
        "Internet ≠ NOCO Explorer: Der Explorer in NOCO OS ist **simuliert** ohne echtes Netz."
      ]
    },
    {
      keys: ["computer", "was ist ein pc", "rechner", "cpu", "prozessor", "ram", "festplatte"],
      answers: [
        "Ein **Computer** verarbeitet Daten mit **CPU** (rechnet), **RAM** (kurzfristiger Arbeitsspeicher) und **Speicher** (SSD/HDD — dauerhaft).",
        "Ablauf: Eingabe → Verarbeitung → Ausgabe. Alles basiert auf **Binär** (0 und 1). Betriebssystem (Windows, macOS, Linux) verwaltet Hardware und Programme.",
        "**NOCO OS** simuliert ein OS im Browser — kein echter Kernel, aber aehnliches Feeling mit Fenstern und Apps.",
        "Leistung haengt ab von: CPU-Taktrate, Kernen, RAM-Menge, SSD-Geschwindigkeit, Kuehlung.",
        "Tipp: Regelmaessige Updates und Backups (wie NOCO **Keycard**) schuetzen deine Daten."
      ]
    },
    {
      keys: ["programmierung", "programmieren", "coding", "code lernen", "software"],
      answers: [
        "**Programmieren** = Anweisungen in einer Programmiersprache schreiben, die der Computer ausfuehrt. Logik, Struktur, Probleme zerlegen.",
        "Beliebte Sprachen:\n• **Python** — einfach, KI & Daten\n• **JavaScript** — Web (NOCO AI nutzt JS!)\n• **HTML/CSS** — Struktur & Design",
        "NOCO AI besteht aus **HTML + CSS + JavaScript**. brain.js = Wissensbank, app.js = UI, main.css = Liquid Glass.",
        "Lernweg: kleine Projekte → lesen → debuggen → GitHub. Fehler sind normal — jeder Entwickler kennt das.",
        "Gute Programmierer denken in **Algorithmen**: klare Schritte zur Loesung. Wie eine Wissensbank Keywords matcht!"
      ]
    },
    {
      keys: ["html", "css", "javascript", "web entwicklung", "frontend"],
      answers: [
        "**HTML** = Struktur (Ueberschriften, Buttons, Text). **CSS** = Design (Farben, Blur, Layout). **JavaScript** = Verhalten (Klicks, Chat, Speicher).",
        "Zusammen = **Frontend** im Browser. NOCO AI und NOCO OS sind reine Web-Technologie — keine Installation noetig.",
        "**Liquid Glass** in NOCO AI = CSS: backdrop-filter, Gradienten, Animationen, Glassmorphism.",
        "JavaScript kann **localStorage** nutzen — so speichert NOCO AI Chats lokal ohne Server.",
        "Moderne Web-Apps: responsive Design, PWAs (wie NOCO Mobile), Accessibility."
      ]
    },
    {
      keys: ["sonne", "solar system", "sonnensystem", "planet", "planeten", "mond"],
      answers: [
        "Unser **Sonnensystem**: Die **Sonne** (Stern) + 8 Planeten. Innen: Merkur, Venus, Erde, Mars. Aussen: Jupiter, Saturn, Uranus, Neptun.",
        "Die Sonne = Fusionsreaktor aus Wasserstoff. Licht braucht ~8 Minuten zur Erde. Schwerkraft haelt Planeten in Bahnen.",
        "Die **Erde** ist die einzige bekannte Welt mit fluessigem Wasser an der Oberflaeche — Grund fuer Leben.",
        "Der **Mond** stabilisiert Erdachse und verursacht Gezeiten. Kein eigener Licht — reflektiert Sonnenlicht.",
        "Jupiter schuetzt die Erde teilweise: seine Schwerkraft lenkt Asteroiden ab."
      ]
    },
    {
      keys: ["erde", "planet erde", "atmosphaere", "ozon", "kontinente"],
      answers: [
        "Die **Erde** (~4,5 Mrd. Jahre alt) hat Kern, Mantel, Kruste. **Atmosphaere** aus Stickstoff (78%) und Sauerstoff (21%) — schuetzt vor Strahlung.",
        "**Ozon-Schicht** filtert UV-Licht. **Magnetfeld** schuetzt vor Sonnenwind.",
        "7 Kontinente, 71% Wasseroberflaeche, Leben in Ozeanen, Waeldern, Wuesten, Polarregionen.",
        "Erdalterung durch Fossilien und Radiometrie. Kontinentalplatten bewegen sich (Plattentektonik) — Erdbeben, Vulkane.",
        "Die Erde ist ein **System**: Luft, Wasser, Boden, Leben beeinflussen sich gegenseitig (Kreislaeufe)."
      ]
    },
    {
      keys: ["wasser", "warum wasser wichtig", "ozean", "meer", "hydrologie"],
      answers: [
        "**Wasser (H2O)** = Grundlage allen bekannten Lebens. Loesungsmittel fuer chemische Reaktionen im Koerper und in der Natur.",
        "Der **Wasserkreislauf**: Verdunstung → Wolken → Regen → Fluesse → Meer. Sauberes Trinkwasser ist weltweit kostbar.",
        "Ozeane speichern Waerme und beeinflussen Klima. Sie produzieren viel Sauerstoff ueber Plankton (Phytoplankton).",
        "Mensch: ~60% Wasser. Dehydrierung beeintraechtigt Konzentration — trink regelmaessig!",
        "Verschmutzung (Plastik, Mikroplastik) bedroht Oekosysteme. Jeder kann helfen: Muell reduzieren, Gewaesser schuetzen."
      ]
    },
    {
      keys: ["klima", "klimawandel", "treibhaus", "co2", "global warming", "erderwaermung"],
      answers: [
        "**Klima** = langfristiges Wetter-Muster. **Klimawandel** = menschengemachte Erwaermung durch **Treibhausgase** (v.a. CO2 aus Fossilbrennstoffen).",
        "Folgen: Gletscherschmelze, Meeresspiegel steigt, Extremwetter haeufiger, Oekosysteme unter Stress.",
        "Loesungen: Erneuerbare Energie (Solar, Wind), Effizienz, Mobilitaetswende, Waelder schuetzen, Politik & Technik zusammen.",
        "Jeder kann etwas tun: Energie sparen, oeffentliche Verkehrsmittel, bewusst konsumieren, informiert waehlen.",
        "Wissenschaft ist sich einig: Klimawandel ist real und handlungsbeduerftig. Fruehes Handeln ist guenstiger als spaetes."
      ]
    },
    {
      keys: ["energie", "strom", "solar", "windkraft", "erneuerbar", "akku"],
      answers: [
        "**Energie** kann nicht vernichtet werden — nur umgewandelt. Strom oft aus Kohle, Gas, Kern, Solar, Wind, Wasser.",
        "**Erneuerbare Energie** nutzt Sonne, Wind, Wasser — fast unbegrenzt, weniger CO2. Herausforderung: Speicherung (Akkus, Pumpspeicher).",
        "**Solarzellen** wandeln Licht in Strom. **Windraeder** nutzen kinetische Energie der Luft.",
        "Energiesparen = oft der schnellste Weg: LED, Standby vermeiden, gut daemmen.",
        "Zukunft: Smart Grids, Wasserstoff, bessere Batterien fuer E-Autos und Netzstabilitaet."
      ]
    },
    {
      keys: ["physik", "schwerkraft", "gravitation", "geschwindigkeit", "energie erhaltung"],
      answers: [
        "**Physik** erforscht Materie, Energie, Raum und Zeit. Grundlegend: Naturgesetze gelten ueberall im Universum.",
        "**Schwerkraft**: Massen ziehen sich an. Newton: je groesser die Masse, desto staerker die Kraft. Einstein: Masse kruemmt Raum-Zeit.",
        "**Energieerhaltung**: Energie geht nicht verloren — nur Form wechselt (z.B. Bewegung → Waerme).",
        "Geschwindigkeit = Weg pro Zeit. Licht ist die hoechste Geschwindigkeit (~300.000 km/s) — nichts ist schneller.",
        "Physik erklaert: warum der Himmel blau ist (Streung), warum Eis schwimmt (Dichte), wie Smartphones funktionieren (Elektronik)."
      ]
    },
    {
      keys: ["chemie", "periodensystem", "elemente", "molekuel", "reaktion"],
      answers: [
        "**Chemie** = Wissenschaft der Stoffe und ihrer Reaktionen. Alles besteht aus **Atomen** — 118 Elemente im Periodensystem.",
        "Bekannte Elemente: **H** Wasserstoff, **O** Sauerstoff, **C** Kohlenstoff (Basis des Lebens), **Fe** Eisen.",
        "**Molekuele** = Atome verbunden (H2O = Wasser, CO2 = Kohlendioxid). Reaktionen bauen oder spalten Bindungen.",
        "Sauerstoff + Brennstoff → Energie + CO2 (Verbrennung). In deinem Koerper: kontrollierte Verbrennung von Nahrung.",
        "Chemie ueberall: Kochen, Seife, Medikamente, Batterien, Materialien fuer Technik."
      ]
    },
    {
      keys: ["biologie", "zelle", "dna", "evolution", "oekosystem", "leben"],
      answers: [
        "**Biologie** = Lehre vom Leben. Kleinste Einheit: die **Zelle**. Pflanzen, Tiere, Pilze, Bakterien — alle zellbasiert.",
        "**DNA** speichert genetische Information (Erbsubstanz). Gene → Proteine → Merkmale. Evolution durch Mutation + Selektion.",
        "**Oekosystem**: Lebewesen + Umwelt im Gleichgewicht. Artenvielfalt = Stabilitaet. Aussterben stoert Ketten.",
        "Photosynthese: Pflanzen wandeln Licht + CO2 in Zucker + O2 — Grundlage fast aller Nahrungsketten.",
        "Mensch gehoert zur Natur — nicht darueber. Nachhaltigkeit schuetzt auch unsere Lebensgrundlage."
      ]
    },
    {
      keys: ["universum", "big bang", "galaxie", "stern", "lichtjahr", "weltraum"],
      answers: [
        "Das **Universum** ~13,8 Mrd. Jahre alt — begann mit dem **Urknall (Big Bang)**: Expansion von Raum, Zeit, Energie.",
        "**Galaxien** = Sternenstaedte (Milchstrasse ~100-400 Mrd. Sterne). Sterne entstehen aus Gaswolken, sterben in Supernovae.",
        "**Lichtjahr** = Strecke Licht in einem Jahr (~9,5 Billionen km). Entfernungen im Kosmos sind enorm.",
        "Schwarze Loecher: so starke Gravitation, dass nicht mal Licht entkommt. Neutronensterne, Quasare — extreme Objekte.",
        "Weltraumforschung: Teleskope (Hubble, James Webb), Satelliten, Mars-Rover. Wissen waechst jedes Jahr."
      ]
    },
    {
      keys: ["geschichte", "antike", "mittelalter", "industrielle revolution", "weltkrieg"],
      answers: [
        "**Geschichte** erklaert die Gegenwart durch die Vergangenheit. Quellen: Texte, Archaelogie, Muendliches, DNA.",
        "**Antike:** Griechenland (Demokratie, Philosophie), Rom (Recht, Infrastruktur). **Mittelalter:** Feudalismus, Handel, Kirchenmacht.",
        "**Industrielle Revolution** (~1750+): Dampfmaschine, Fabriken, Urbanisierung — veraenderte Arbeit und Gesellschaft fundamental.",
        "20. Jahrhundert: zwei Weltkriege, Kalter Krieg, Dekolonisierung, Internet-Zeitalter. Technik beschleunigte Veraenderung.",
        "Geschichte lehrt: Konflikte, Fortschritt, Fehler. Demokratie und Menschenrechte sind historische Errungenschaften — kein Selbstlaeufer."
      ]
    },
    {
      keys: ["deutschland", "bundesrepublik", "berlin", "eu", "europa"],
      answers: [
        "**Deutschland** (Bundesrepublik): 16 Bundeslaender, Hauptstadt **Berlin**. ~84 Mio. Einwohner. Demokratie, Sozialstaat, Marktwirtschaft.",
        "Mitglied der **EU** — gemeinsamer Binnenmarkt, Euro in vielen Laendern, Zusammenarbeit in Politik und Wirtschaft.",
        "Bekannt fuer: Ingenieurskunst, Kultur (Musik, Literatur), Forschung, Mittelstand. Geschichte: Teilung bis 1990, Wiedervereinigung.",
        "Grundgesetz garantiert Grundrechte: Meinungsfreiheit, Pressefreiheit, Gleichheit vor dem Gesetz.",
        "Europa = Kontinent mit vielfaeltigen Sprachen und Kulturen — Kooperation statt Isolation ist die moderne Idee."
      ]
    },
    {
      keys: ["mathe", "mathematik", "rechnen", "prozent", "algebra", "geometrie"],
      answers: [
        "**Mathematik** = Sprache der Logik. Zahlen, Formen, Muster. Basis fuer Physik, Informatik, Wirtschaft, Alltag.",
        "**Prozent** = Anteil von 100. 20% von 50 = 10. Rabatte, Statistiken, Wahrscheinlichkeit — ueberall.",
        "**Algebra**: Gleichungen mit Unbekannten (x). **Geometrie**: Formen, Flaechen, Winkel, Pythagoras.",
        "Wahrscheinlichkeit: Wie wahrscheinlich ist ein Ereignis? Wichtig fuer Wetter, Medizin, Versicherungen, Spiele.",
        "Mathe lernen: Ueben, Fehler verstehen, mit echten Beispielen. Geduld — Verstaendnis wichtiger als Auswendiglernen."
      ]
    },
    {
      keys: ["lernen", "lern tipps", "konzentration", "pruefung", "schule", "studium"],
      answers: [
        "**Effektiv lernen:**\n1. Kurze Sessions (Pomodoro: 25 Min)\n2. Aktiv abfragen statt nur lesen\n3. Zusammenfassen in eigenen Worten\n4. Pausen & Schlaf nicht vergessen",
        "**Konzentration:** Handy weg, eine Aufgabe, klares Ziel. Musik ohne Text oft ok. NOCO Focus-Modus in NOCO OS = aehnliche Idee!",
        "Vor Pruefungen: frueh starten, Altklausuren, Luecken erkennen. Stress senkt Gedaechtnisleistung.",
        "Fehler sind Lernchancen. Wer fragt, lernt schneller — auch NOCO AI fragen zaehlt als Wiederholung.",
        "Lebenslanges Lernen: Beruf, Technik, Sprachen — Neugier ist der beste Motor."
      ]
    },
    {
      keys: ["gesundheit", "gesund leben", "ernaehrung", "vitamine", "bewegung"],
      answers: [
        "**Gesund leben** = Balance: Bewegung, Ernaehrung, Schlaf, soziale Kontakte, mentale Gesundheit.",
        "Ernaehrung: viel Gemuese, Vollkorn, Proteine, Wasser. Zucker & Fett in Massen. Kein Wundermittel — Muster zaehlen.",
        "**Bewegung:** WHO empfiehlt ~150 Min moderate Aktivitaet/Woche. Gehen, Radfahren, Sport — Herz & Gehirn profitieren.",
        "Vitamine & Mineralstoffe aus echter Nahrung meist besser als Ueberdosierung von Pillen ohne Mangel.",
        "Bei ernsten Beschwerden: Arzt aufsuchen. NOCO AI ersetzt keine medizinische Beratung!"
      ]
    },
    {
      keys: ["schlaf", "muede", "insomnie", "schlafen"],
      answers: [
        "**Schlaf** = Wiederherstellung fuer Gehirn und Koerper. Erwachsene: meist 7-9 Stunden. Phasen: leicht, tief, REM (Traeume).",
        "Schlechter Schlaf → schlechtere Konzentration, Stimmung, Immunsystem. Chronischer Schlafmangel ist riskant.",
        "Tipps: feste Zeiten, dunkler kuehler Raum, Bildschirme 1h vorher reduzieren, Koffein am Nachmittag meiden.",
        "Traeume verarbeiten Erlebnisse. Alptraeume koennen bei Stress haeufiger sein.",
        "Guter Schlaf = kostenlose Superkraft fuer Lernen und Kreativitaet."
      ]
    },
    {
      keys: ["psychologie", "gehirn", "gedaechtnis", "emotion", "stress"],
      answers: [
        "**Psychologie** erforscht Verhalten, Gedanken, Gefuehle. Das **Gehirn** hat ~86 Mrd. Neuronen — vernetzt durch Synapsen.",
        "**Gedaechtnis:** Kurzzeit (Sekunden-Minuten) + Langzeit. Wiederholung und Bedeutung helfen beim Behalten.",
        "**Emotionen** sind Signale: Angst schuetzt, Freude belohnt, Trauer verarbeitet Verlust. Alle normal.",
        "**Stress:** Kurz motiviert, chronisch schaedlich. Gegenmittel: Pausen, Sport, Gesprache, Struktur, Natur.",
        "Mentale Gesundheit ist so wichtig wie koerperliche. Hilfe suchen ist Staerke, nicht Schwaeche."
      ]
    },
    {
      keys: ["passwort", "sicherheit online", "cyber", "hacker", "phishing"],
      answers: [
        "**Online-Sicherheit:** Starke einzigartige **Passwoerter**, **2-Faktor-Auth** wo moeglich, Updates installieren, Vorsicht bei Links.",
        "**Phishing** = gefaehrliche E-Mails/Seiten die Passwoerter stehlen. Pruefe Absender, klicke nicht blind.",
        "NOCO Security in NOCO OS simuliert das Thema — Fake-Virus, Virenscan. Im echten Leben: Antivirus + gesunder Menschenverstand.",
        "Oeffentliches WLAN: keine sensiblen Logins ohne VPN. Browser-Schloss = HTTPS aktiv.",
        "Backup wichtig — in NOCO OS per **Keycard**, im echten Leben: externe Festplatte oder Cloud (verschluesselt)."
      ]
    },
    {
      keys: ["smartphone", "handy", "android", "ios", "app"],
      answers: [
        "**Smartphones** = kleine Computer mit Touchscreen, Kamera, GPS, Sensoren. **iOS** (Apple) vs **Android** (viele Hersteller).",
        "**Apps** = Programme fuer mobile Aufgaben. NOCO OS Mobile als **PWA** = Web-App auf dem Home-Bildschirm.",
        "Akkulaufzeit, Updates, Datenschutz-Einstellungen pruefen. Apps nur aus vertrauenswuerdigen Quellen.",
        "Smartphones verbinden uns — aber Bildschirmzeit bewusst steuern (Digital Wellbeing, Focus-Modi).",
        "NOCO Mobile PWA: GitHub Pages → Safari → Zum Home-Bildschirm. Wie native App, ohne App Store."
      ]
    },
    {
      keys: ["roboter", "robotik", "automatisierung", "zukunft technik"],
      answers: [
        "**Robotik** = Maschinen die Aufgaben autonom oder ferngesteuert ausfuehren. Sensoren + Software + Aktoren (Motoren).",
        "Einsatz: Industrie, Medizin, Logistik, Mars-Rover, Haushalt (Staubsauger-Roboter).",
        "**Automatisierung** veraendert Jobs: repetitive Arbeit oft maschinell, kreative/soziale Skills wichtiger.",
        "Ethisch: Wer haftet bei Fehlern? Datenschutz bei Ueberwachungsrobotern? KI + Robotik verstaerken sich.",
        "Zukunft: Assistenz im Alltag, Pflege, gefaehrliche Umgebungen — Mensch bleibt Verantwortlicher."
      ]
    },
    {
      keys: ["musik", "instrument", "hoeren", "komponieren"],
      answers: [
        "**Musik** = Toene in Zeit: Melodie, Rhythmus, Harmonie. Wissenschaftlich: Frequenz in Hertz (440 Hz = Kammerton A).",
        "Hoeren trainiert Gehirn: Sprache, Emotion, Motorik (beim Musizieren). Lernen eines Instruments foerdert Geduld und Koordination.",
        "Genres: Klassik, Pop, Jazz, Elektronik, Weltmusik — kultureller Ausdruck und Identitaet.",
        "Digitale Musik: DAWs, Streaming, Synthesizer. NOCO OS hat Quick Music als App-Konzept.",
        "Musik verbindet Menschen — Konzerte, Chöre, oder einfach Playlist zum Arbeiten."
      ]
    },
    {
      keys: ["kunst", "malerei", "kreativ", "design", "aesthetik"],
      answers: [
        "**Kunst** drueckt Ideen und Gefuehle aus — Malerei, Skulptur, Fotografie, Digital Art, Design.",
        "**Design** (auch NOCO **Liquid Glass**) verbindet Funktion und Aesthetik: lesbar, nutzbar, schoen.",
        "Kreativitaet trainierbar: skizzieren, experimentieren, Inspiration sammeln, regelmaessig ueben.",
        "Kunstgeschichte: von Hoehlenmalerei ueber Renaissance bis moderne Kunst — Spiegel der Gesellschaft.",
        "Jeder kann kreativ sein — nicht nur Profis. NOCO OS Theme-App spielt damit."
      ]
    },
    {
      keys: ["sprache", "deutsch", "englisch", "uebersetzen", "kommunikation"],
      answers: [
        "**Sprache** = System aus Woertern, Grammatik, Bedeutung. Menschen haben ~7000 Sprachen weltweit.",
        "**Deutsch:** 3 Geschlechter, Faelle, zusammengesetzte Woerter. **Englisch:** Weltsprache fuer Tech & Business.",
        "Sprachen lernen: hoeren, sprechen, lesen, schreiben — Immersion hilft (Filme, Buecher, Gespraeche).",
        "Gute Kommunikation: klar, hoeflich, zuhoeren. In Chats (wie NOCO AI): konkrete Fragen = bessere Antworten.",
        "Sprache formt Denken — neue Sprache oeffnet neue Perspektiven."
      ]
    },
    {
      keys: ["geld", "wirtschaft", "inflation", "sparen", "budget"],
      answers: [
        "**Geld** = Tauschmittel, Wertaufbewahrung, Recheneinheit. Heute meist digital (Konto) + Bargeld.",
        "**Inflation** = allgemeiner Preisanstieg — gleiches Geld kauft weniger. Zinsen, Investitionen, Sparen bewusst planen.",
        "**Budget:** Einnahmen − Ausgaben tracken. Notgroschen (3-6 Monatskosten) = Sicherheit.",
        "**NOCO Pay** simuliert Geld — 12 Fake-Euro fuer Exclusive. Echtes Finanzwissen trotzdem nuetzlich!",
        "Wirtschaft = Produktion, Handel, Arbeit. Global vernetzt — lokale Entscheidungen haben globale Effekte."
      ]
    },
    {
      keys: ["demokratie", "politik", "wahl", "recht", "gesellschaft"],
      answers: [
        "**Demokratie** = Herrschaft des Volkes. Wahlen, freie Presse, Gewaltenteilung (Legislative, Exekutive, Judikative).",
        "Buerger stimmen mit, waehlen Vertreter, engagieren sich in Vereinen und Debatten.",
        "**Rechtsstaat:** Gesetze gelten fuer alle. Grundrechte schuetzen Minderheiten und Meinungsfreiheit.",
        "Politik gestaltet Bildung, Klima, Sicherheit, Wirtschaft — informiert waehlen ist wichtig.",
        "Gesellschaft = Menschen in Beziehungen, Regeln, Kultur. Respekt und Dialog halten sie zusammen."
      ]
    },
    {
      keys: ["zeit", "uhr", "kalender", "jahr", "relativitaet"],
      answers: [
        "**Zeit** misst Veraenderung. Sekunde (SI-Einheit), Minute, Stunde, Tag, Jahr. Uhren synchronisieren Gesellschaft.",
        "**Kalender** ordnen Tage: gregorianisch (365/366 Tage), Monate, Wochen. Schaltjahre korrigieren Erdumlauf.",
        "Einsteins **Relativitaet:** Zeit laeuft nicht ueberall gleich — bei hoher Geschwindigkeit oder starker Gravitation langsamer.",
        "Zeitzonen: Erde in 24 Sektoren — NOCO AI zeigt Uhrzeit in der Fusszeile.",
        "Zeit ist kostbar — planen (Kalender, To-Do) reduziert Stress."
      ]
    },
    {
      keys: ["buch", "lesen", "literatur", "autor", "bibliothek"],
      answers: [
        "**Lesen** trainiert Sprache, Fantasie, Wissen, Empathie. Buecher sammeln Erfahrungen vieler Menschen.",
        "Genres: Sachbuch, Roman, Fantasy, Biografie, Krimi. Sachbuecher fuer Fakten, Romane fuer Emotion und Tiefe.",
        "**Bibliotheken** = freier Zugang zu Wissen (wie NOCO **Wissensbank** — nur digital & lokal).",
        "Digitale Buecher (E-Books) und Hoerbuecher erweitern Zugang. Papier hat seinen eigenen Charme.",
        "Tipp: 20 Minuten taeglich lesen — nach einem Jahr dutzende Buecher."
      ]
    },
    {
      keys: ["sport", "fussball", "training", "olympia", "fitness"],
      answers: [
        "**Sport** foerdert Gesundheit, Teamgeist, Disziplin. Ausdauer, Kraft, Flexibilitaet — verschiedene Ziele.",
        "Fussball = beliebteste Sportart weltweit. Regeln, Taktik, Fair Play (Olympische Idee).",
        "Training: Aufwaermen, Technik, Regeneration. Uebertraining vermeiden — Muskeln wachsen in Pausen.",
        "Bewegung setzt **Endorphine** frei — natuerliche gute Stimmung.",
        "Sport verbindet: lokal im Verein, global bei grossen Events. Jeder kann anfangen — Spaziergang zaehlt!"
      ]
    },
    {
      keys: ["tier", "tiere", "hund", "katze", "natur", "wald"],
      answers: [
        "**Tiere** besitzen Nervensysteme, reagieren auf Umwelt. Saeugetiere, Voegel, Reptilien, Insekten, Fische — enorme Vielfalt.",
        "Haustiere (Hund, Katze) = soziale Partner. Hunde lernen Befehle, Katzen sind eigenstaendiger.",
        "**Wald** = Oekosystem: Baeume speichern CO2, bieten Lebensraum, filtern Wasser, kuehlen die Luft.",
        "Artenschutz wichtig — Ausrottung einer Art reißt Luecken in Nahrungsketten.",
        "Respekt vor Tieren und Natur: nicht stoeren, Muell mitnehmen, Lebensraeume schuetzen."
      ]
    },
    {
      keys: ["cloud", "noco cloud", "speicher cloud"],
      answers: [
        "**NOCO Cloud** = simulierter Cloud-Speicher in NOCO OS — Premium-Feature mit **NOCO Exclusive**.",
        "Echte Cloud (Google Drive, iCloud) = Daten auf fremden Servern. Vorteil: Sync. Nachteil: Abhaengigkeit & Datenschutz.",
        "NOCO AI speichert **nichts in der Cloud** — alles localStorage. Ehrlich und privat.",
        "Keycard in NOCO OS = manuelles Backup statt Auto-Cloud — du kontrollierst den Zeitpunkt.",
        "Cloud vs lokal: Bequemlichkeit vs Kontrolle. NOCO bevorzugt lokale + bewusste Keycard."
      ]
    },
    {
      keys: ["shadow arena", "casino", "minispiel", "spiel"],
      answers: [
        "**Shadow Arena** = Spiel-App in NOCO OS (Forge). Teil des Unterhaltungs-Universums.",
        "**Casino** = simuliertes Gluecksspiel in NOCO — kein echtes Geld, nur NOCO Pay Fake-Chips.",
        "Minispiele in Forge: kurze Spiele fuer Pausen. Gaming-Modus in **NOCO Focus** kann Spiele sperren.",
        "Spiele in NOCO OS = HTML/JS — keine Installation wie bei Steam.",
        "Balance: Spielen zum Spass, nicht zum Problem. Focus-Modus hilft bei Produktivitaet."
      ]
    },
    {
      keys: ["mathematik", "math", "rechnen", "zahl", "prozent", "bruch"],
      answers: [
        "**Mathematik** beschreibt Muster mit Zahlen, Formen und Logik. Grundrechenarten: Plus, Minus, Mal, Geteilt.",
        "**Prozent** = Anteil von 100. 25% von 80 = 0,25 x 80 = 20.",
        "**Brueche:** 1/2 = ein Halb. Gleichnamig machen vor Addieren.",
        "Geometrie: Flaeche Rechteck = Laenge x Breite. Kreisflaeche ungefaehr 3,14 x r².",
        "Mathe hilft bei Alltag, Technik und Wissenschaft — Uebung macht Routine."
      ]
    },
    {
      keys: ["kunst", "art", "malerei", "museum", "kreativ"],
      answers: [
        "**Kunst** drueckt Ideen aus — Malerei, Skulptur, Musik, Film, Pixel Art wie in NOCO Pixel Studio.",
        "Stile: Realismus, Abstrakt, Impressionismus, Street Art, Digital Art.",
        "Farbenlehre: Primaerfarben, Komplementaerfarben, Kontrast erzeugt Spannung.",
        "Kunst ist subjektiv — was dich bewegt, ist gueltig.",
        "NOCO AI Pixel Studio = kreative Kunst offline, 3600 Motive & 6 Styles."
      ]
    },
    {
      keys: ["film", "kino", "movie", "serie", "netflix"],
      answers: [
        "**Film** erzaehlt Geschichten mit Bild + Ton. Kamera, Schnitt, Musik, Schauspiel.",
        "Genres: Action, Drama, Komoedie, Sci-Fi, Dokumentation.",
        "Streaming (Netflix & Co.) = Filme ueber Internet — anders als Kino oder DVD.",
        "Drehbuch = Plan der Story. Regisseur fuehrt die Vision.",
        "Gute Filme transportieren Emotionen — wie gute Antworten Information."
      ]
    },
    {
      keys: ["buch", "lesen", "literatur", "roman", "autor"],
      answers: [
        "**Literatur** = geschriebene Kunst. Romane, Gedichte, Sachbuecher.",
        "Lesen trainiert Sprache, Fantasie und Konzentration.",
        "Klassiker: von Goethe bis moderne Fantasy — je nach Geschmack.",
        "Bibliotheken & E-Books machen Wissen zugaenglich.",
        "NOCO AI Wissensbank = kompaktes Lesen in Chat-Form."
      ]
    },
    {
      keys: ["reise", "travel", "urlaub", "flug", "hotel"],
      answers: [
        "**Reisen** oeffnet Horizonte — neue Kulturen, Essen, Sprachen, Landschaften.",
        "Planung: Budget, Transport, Unterkunft, Dokumente (Pass/ID).",
        "Nachhaltig reisen: weniger Flug, oeffentliche Verkehrsmittel, lokale Wirtschaft.",
        "Reisefotos = Erinnerungen — NOCO Pixel kann Reise-Motive (Insel, Kompass, Palme).",
        "Sicherheit: Kopien wichtiger Dokumente, Notfallnummern."
      ]
    },
    {
      keys: ["wetter", "weather", "regen", "temperatur", "vorhersage"],
      answers: [
        "**Wetter** = kurzfristiger Zustand der Atmosphaere: Temperatur, Wind, Niederschlag.",
        "**Klima** = langfristiges Muster ueber Jahrzehnte — nicht dasselbe wie Wetter.",
        "Wolken, Luftdruck und Feuchtigkeit steuern Regen & Sonne.",
        "Wettervorhersage nutzt Satelliten & Modelle — nie 100% exakt.",
        "Bei Sturm: sicher bleiben, Warnungen beachten."
      ]
    },
    {
      keys: ["tier", "animals", "natur", "wildlife", "zoo"],
      answers: [
        "**Tiere** leben in Oekosystemen — jede Art hat eine Rolle.",
        "Saeugetiere, Voegel, Reptilien, Insekten, Fische — enorme Vielfalt.",
        "Artenschutz wichtig: Lebensraeume erhalten, nicht ueberjagen.",
        "NOCO Pixel Studio: Katze, Hund, Wal, Loewe, Biene & 1200+ weitere Motive.",
        "Haustiere = Verantwortung: Futter, Tierarzt, Zeit."
      ]
    },
    {
      keys: ["arbeit", "job", "karriere", "beruf", "bewerbung"],
      answers: [
        "**Karriere** = dein beruflicher Weg. Skills, Erfahrung, Netzwerk.",
        "Bewerbung: Lebenslauf, Anschreiben, Vorbereitung auf Gespraeche.",
        "Soft Skills: Kommunikation, Teamwork, Zuverlaessigkeit.",
        "Tech-Jobs: Programmieren, Design, KI — frage NOCO AI zu Programmierung.",
        "Work-Life-Balance: Produktivitaet ohne Burnout."
      ]
    },
    {
      keys: ["musik genre", "hip hop", "rock", "pop", "klassik musik"],
      answers: [
        "**Musik** verbindet Rhythmus, Melodie, Harmonie. Genre = Stilrichtung.",
        "Pop = breit & eingängig. Rock = Gitarren & Energie. Klassik = Orchester & Komposition.",
        "Hip-Hop: Beat + Rap. Electronic: Synthesizer & Produktion.",
        "Hoeren trainiert Gehoer — auch fuer Sprachen hilfreich.",
        "NOCO Pixel: Gitarre, Musik-Note, Neon-Style Motive."
      ]
    },
    {
      keys: ["philosophie", "ethik", "moral", "sinn des lebens", "denken"],
      answers: [
        "**Philosophie** fragt nach Sinn, Wissen, Gut & Boese — seit Jahrtausenden.",
        "Ethik = Was ist moralisch richtig? Utilitarismus, Pflichtethik, Tugendethik.",
        "Sokrates, Platon, Aristoteles — Grundlagen des Abendlandes.",
        "Kritisches Denken: Quellen pruefen, Argumente verstehen.",
        "Keine finale Antwort auf alles — Reflexion ist der Gewinn."
      ]
    },
    {
      keys: ["noco ai pixel", "blur animation", "bild animation", "pixel blur"],
      answers: [
        "**Blur-Reveal:** Das Pixel-Bild ist sofort fertig — aber zuerst unscharf. Der Blur weicht langsam, das Bild wird scharf.",
        "Exclusive: ~6.5 Sekunden Sheen, 48x48 Pro Pixel. Free kann Pixel-Dialog sehen, generieren nur mit Exclusive.",
        "3600 Motive: Katze, Apfel, Banane, Wolkenkratzer, Drache, Pizza, DNA & viele mehr.",
        "Beispiel-Chips im Pixel-Dialog — ein Klick startet Generierung.",
        "Komplett offline — prozedurale Farben, kein Server."
      ]
    },
    {
      keys: ["was habe ich geschrieben", "was sagte ich", "chat zusammenfassung", "chat verlauf", "meine nachrichten", "was stand im chat", "erinnerst du dich"],
      answers: [
        "Frag mich direkt: **Was habe ich geschrieben?** oder **Fasse den Chat zusammen** — ich liste deine Nachrichten aus **diesem Chat** auf.",
        "Ich kann deinen **Chat-Verlauf** lokal zusammenfassen — nur Nachrichten in der aktuellen Unterhaltung, nichts vom Server.",
        "Beispiele: *Was habe ich gesagt?* · *Chat-Zusammenfassung* · *Was haben wir besprochen?*",
        "Fuer AI-Antworten mit: *Fasse alles zusammen inkl. Antworten*.",
        "Slash-Befehl: `/summary` — gleiche Funktion."
      ]
    },
    {
      keys: ["free plan", "gratis plan", "welches modell", "welchen plan", "was bin ich", "mein plan"],
      answers: [
        "**NOCO Access Free:** 20/Tag · **NOCO Prism** (Msg 1-10) · dann **NOCO Spark**. **NOCO Access**-Leiste im Chat.",
        "**NOCO Exclusive:** **NOCO Flux** + Rush + Lens + Render. Badge: EXCLUSIVE.",
        "Einstellungen zeigen **Aktueller Plan** + Modell-Name klar an.",
        "Du siehst immer: Plan (Free/Exclusive), Modell-Version und verbleibende Nachrichten.",
        "Testphase Exclusive: 1 Tag gratis — Sidebar-Karte."
      ]
    },
    {
      keys: ["archaeologie", "archaeology", "antike", "pyramide", "roemer"],
      answers: [
        "**Archaeologie** erforscht Vergangenheit durch Funde: Ruinen, Werkzeuge, Schrift.",
        "Aegypten: Pyramiden, Pharaonen. Rom: Imperium, Strassen, Aquaedukte.",
        "Ausgrabungen schichtweise — tiefer = oft aelter.",
        "Ergaenzt Geschichte um konkrete Objekte und Alltag.",
        "Frag auch: Was ist Geschichte? Was ist Demokratie?"
      ]
    },
    {
      keys: ["okologie", "oekologie", "umwelt", "nachhaltigkeit", "recycling"],
      answers: [
        "**Oekologie** = Wissenschaft von Lebensgemeinschaften und Kreislaeufen.",
        "**Nachhaltigkeit:** Ressourcen so nutzen, dass Zukunft moeglich bleibt.",
        "Recycling, erneuerbare Energie, weniger Plastik — konkrete Schritte.",
        "Klimawandel haengt mit CO2 und Lebensstil zusammen.",
        "Jeder kleine Schritt zaehlt — informiert handeln."
      ]
    },
    {
      keys: ["astronomie", "teleskop", "planet", "sternenhimmel", "mondlandung"],
      answers: [
        "**Astronomie** beobachtet Himmel: Sterne, Planeten, Galaxien.",
        "Teleskope sammeln Licht — Hubble, James Webb erweitern Wissen.",
        "Mondlandung 1969 (Apollo 11) — Meilenstein der Raumfahrt.",
        "Mars-Forschung heute mit Rovern und Satelliten.",
        "NOCO Pixel: Planet, Komet, Satellit als Motive."
      ]
    },
    {
      keys: ["psychologie", "gefuehl", "emotion", "angst", "stress"],
      answers: [
        "**Psychologie** erforscht Verhalten, Denken, Gefuehle.",
        "Stress: Pausen, Schlaf, Bewegung, Gespraeche helfen.",
        "Angst ist normal — bei Dauerbelastung professionelle Hilfe ok.",
        "Emotionale Intelligenz = Gefuehle erkennen und steuern.",
        "Kein Ersatz fuer Therapie — bei Krisen echte Hilfe suchen."
      ]
    },
    {
      keys: ["wirtschaft", "economy", "inflation", "geld system", "boerse"],
      answers: [
        "**Wirtschaft** = Produktion, Handel, Verteilung von Guetern.",
        "**Inflation:** Geld verliert Kaufkraft — Preise steigen.",
        "Angebot & Nachfrage bestimmen viele Preise.",
        "Boerse = Handel mit Aktien — Risiko und Chance.",
        "NOCO Pay = simuliertes Geld, kein echtes Finanzsystem."
      ]
    },
    {
      keys: ["noco ai plan", "free vs exclusive", "plan unterschied"],
      answers: [
        "**Access Free:** 20/Tag · Prism (1-10) · Spark (11+) · Render nur mit Flux.",
        "**Exclusive:** Flux · Rush · Lens · Render unbegrenzt.",
        "Plan-Leiste im Chat + Einstellungen zeigen deinen Status.",
        "Chat-Zusammenfassung: *Was habe ich geschrieben?*",
        "Alles simuliert — kein echtes Abo-Geld."
      ]
    },
    {
      keys: ["pixel studio pro", "pixel funktionen", "blur reveal", "pixel galerie", "was kann pixel", "pixel studio erklaert", "wie funktioniert pixel", "pixel pro", "noco render", "was ist noco render", "pixel studio"],
      answers: [
        "**NOCO Render** — Offline-Pixel im **Chat**. **3600 Motive**, 6 Styles, **NOCO Sheen**, einfache Woerter.",
        "Hauptweg: *Mach ein Bild von …* — erscheint als Chat-Nachricht. **Nur 1 Bild zur Zeit** — nach dem Render geht das naechste.",
        "**NOCO Sheen:** startet unscharf, wird scharf (Epic Spiral-Reveal). Kopieren & Speichern in der Nachricht.",
        "**NOCO Lens Detect:** eigene NOCO-Bilder erkennen — **+** Button oder `/detect`.",
        "Exclusive zum Generieren. `/pixel` oeffnet Bild-Prompt im Chat."
      ]
    },
    {
      keys: ["chat gedaechtnis", "chat memory", "chat funktion", "was habe ich", "zusammenfassung feature", "erinnerst du dich chat", "wie funktioniert chat gedaechtnis", "wie funktioniert das gedaechtnis", "chat recall", "noco echo", "was ist noco echo"],
      answers: [
        "**NOCO Echo** — Chat-Recall & Zusammenfassung. Ich lese **diesen Chat** aus localStorage. Kein Server, kein Cloud-LLM.",
        "**So gehts:** Schreib *Was habe ich geschrieben?* · *Fasse den Chat zusammen* · *Was haben wir besprochen?* — oder `/summary` im Chat.",
        "**Antwort enthält:** Nummerierte Liste deiner Nachrichten + Kurz-Zusammenfassung der Hauptthemen. Mit *inkl. Antworten* auch NOCO-AI-Texte.",
        "**Warum cool:** Du vergisst nie was du gefragt hast. Perfekt bei langen Chats, Lern-Sessions oder wenn du Themen wiederfinden willst.",
        "**Ehrlich:** Kein echtes KI-Gedaechtnis — nur deine gespeicherten Nachrichten. Aber schnell, privat und immer verfuegbar."
      ]
    },
    {
      keys: ["lohnt sich exclusive", "exclusive worth", "warum exclusive", "exclusive vorteile detail", "soll ich exclusive"],
      answers: [
        "**Exclusive lohnt sich wenn du:** **NOCO Flux** + **NOCO Rush** willst, **NOCO Render** & **NOCO Lens** nutzt.",
        "**Access Free ist gut fuer:** 20/Tag, **NOCO Prism**/**Spark**, **NOCO Echo**, **NOCO Vault** testen.",
        "**Testphase 1 Tag gratis** — kein echtes Geld.",
        "Exclusive = **NOCO Rush** (~90 ms) statt ~500 ms · **NOCO Flux** immer · Render + Lens.",
        "**NOCO Access**-Leiste + Einstellungen zeigen Flux/Prism/Spark live."
      ]
    },
    {
      keys: ["neue funktionen", "neu in noco", "was ist neu", "features v2", "grosse features", "flagship", "coolste funktion", "beste feature"],
      answers: [
        "**NOCO Flagship-Stack:**\n1. **NOCO Motion** — 4s Epic Video · 8 Keyframes · Pixel-Morph-Loop\n2. **NOCO Create / Render** — Bilder im Chat · 3600 Motive\n3. **NOCO Inside** — Datei-Analyse, Kernpunkte, Code Review\n4. **NOCO Agent** — automatisierte Mehrschritt-Auftraege\n5. **NOCO Summary** — 5 Stichpunkte aus langen Texten\n6. **NOCO Echo** — Chat-Verlauf & Zusammenfassung",
        "**Shortcuts:** Hub · Bild · Summary · Brief · Glow · Lens · Motion · Inside · Agent — jeweils mit Hover-Tipp im Chat.",
        "Frag z. B.: *Wie erstelle ich ein Bild?* · *Wie erstelle ich ein Video?* · *Was ist NOCO Motion?*",
        "Alles **offline** nach dem ersten Laden — kein Server, kein Tracking."
      ]
    },
    {
      keys: ["noco motion", "was ist motion", "was ist noco motion", "locomotion", "localotion", "pseudo video", "video erstellen", "wie erstelle ich ein video", "wie erstelle ich video", "mach mir ein video", "mach ein video", "video von", "film erstellen", "animation erstellen", "wie funktioniert motion"],
      answers: [
        "**NOCO Motion** = **Epic 4s-Video** aus der **3600er Motiv-Bank**. **20 FPS Playback** — **8 echte Keyframes** + **Pixel-Morph** zwischen jedem Frame = flüssiger Loop im Chat.",
        "**So gehts:** Schreib *Erstelle ein Video von einem Apfel* · *Mach mir ein Video von einer Katze* — oder **Motion**-Button / `/motion [Motiv]`. NOCO mappt freie Woerter auf die naechste Motiv-Bank.",
        "**Animationen sind kontextuell:** Apfel faellt vom Baum · Mensch geht links→rechts · Auto faehrt durchs Bild · Vogel fliegt — je nach Motiv-Typ.",
        "**Exclusive/Flux** noetig wie bei Bildern. Pro-Modus = schnellerer Render. Ergebnis erscheint als Loop im Chat.",
        "Beispiele: *Video von einem Drachen* · *Animiere einen Apfel* · *Motion: Birne*"
      ]
    },
    {
      keys: ["noco agent", "was ist agent", "was ist noco agent", "wie funktioniert agent", "agent modus", "agent auftrag"],
      answers: [
        "**NOCO Agent** fuehrt **komplexe Auftraege automatisiert** aus — mit Live-Aktionsplan, Fortschritt und Ergebnis im Chat.",
        "**So gehts:** **Agent**-Button aktivieren oder `/agent [Auftrag]` — z. B. *Erstelle einen 4-Wochen Lernplan fuer Spanisch*.",
        "Der Agent zeigt **Aktionsbloecke** (Plan → Recherche → Struktur → Ergebnis), Stop/Skip/Plan-Buttons.",
        "Ideal fuer: Lernplaene, Fitness-Routinen, Projektstrukturen, Recherche-Aufgaben.",
        "Unterschied zu normalem Chat: Agent arbeitet **mehrstufig** mit sichtbarem Fortschritt."
      ]
    },
    {
      keys: ["noco inside", "was ist inside", "was ist noco inside", "insight", "inside analyse", "datei analyse", "was ist datei", "kernpunkte", "inside kernpunkte"],
      answers: [
        "**NOCO Inside** analysiert **Texte & Dateien** lokal — Pipeline: `SCAN→TOKEN→CLASSIFY→KEYPOINTS→REPORT`.",
        "**Kategorien:** Dokument · **Kernpunkte** (Top-Saetze mit Confidence %) · Summary · Textpruefung · Code Review · Bildanalyse · Frag die Datei.",
        "**Datei-Button (📂):** TXT, MD, PDF, Code, Bilder hochladen — oder Text direkt einfuegen.",
        "**Kernpunkte:** Wichtigste Saetze mit Score — nicht abgehackt, vollstaendige Saetze.",
        "Shortcut **Inside** oder `/inside` — Inside-Modus aktivieren."
      ]
    },
    {
      keys: ["noco create", "was ist create", "bild erstellen", "wie erstelle ich ein bild", "wie erstelle ich bild", "mach mir ein bild", "stell mir ein bild", "zeichne mir", "noco render erklaert", "was ist pixel", "was ist noco render", "pixel studio", "bild generieren wie"],
      answers: [
        "**NOCO Create** (= **NOCO Render**) zeichnet **Pixel-Bilder im Chat** aus **3600 Motiven** — offline, 6 Styles, NOCO Sheen.",
        "**So gehts:** *Mach ein Bild von einer Katze* · *Stell mir ein Bild von einem Apfel dar* — oder **Create**-Button / Shortcut **Bild** / `/pixel`.",
        "NOCO mappt freie Formulierungen (z. B. *Apfel* → naechstes Motiv in der Bank). Bei unsicherem Match fragt NOCO im Chat nach.",
        "**Exclusive/Flux** fuer Render. **1 Bild zur Zeit** — Sheen-Blur wird scharf. Kopieren & Speichern in der Nachricht.",
        "Unterschied zu Motion: **Create** = einzelnes Bild · **Motion** = 4s animierter Clip."
      ]
    },
    {
      keys: ["noco summary", "was ist summary", "summary modus", "zusammenfassung text", "text zusammenfassen", "5 stichpunkte"],
      answers: [
        "**NOCO Summary** fasst **lange Texte in 5 klare Stichpunkte** — vollstaendige Saetze, nichts Abgehacktes.",
        "**So gehts:** **Summary**-Shortcut aktivieren → langen Text einfuegen → Enter. Oder Inside-Kategorie Summary.",
        "Erkennt Aufbau (Fliesstext, Listen, Bullets) und waehlt die wichtigsten Saetze per Score.",
        "Unterschied zu **NOCO Echo**: Summary = beliebiger Text · Echo = Chat-Verlauf dieses Chats.",
        "Shortcut **Summary** in der Leiste unter dem Eingabefeld."
      ]
    },
    {
      keys: ["noco hub", "was ist hub", "noco hub erklaert"],
      answers: [
        "**NOCO Hub** = zentrale Uebersicht **direkt im Chat** — Buttons fuer Create, Motion, Inside, Agent.",
        "Shortcut **Hub** oder Sidebar-Button ◎ — kein externes Menue, alles per Chat-Buttons & Texteingabe.",
        "Ideal wenn du nicht weisst, womit du starten sollst."
      ]
    },
    {
      keys: ["wie nutze ich noco", "was kann ich alles", "hilfe features", "feature uebersicht", "alle funktionen"],
      answers: [
        "**NOCO AI Feature-Guide:**\n• **Agent** — komplexe Auftraege automatisiert\n• **Create** — Pixel-Bilder im Chat\n• **Inside** — Datei/Text-Analyse & Kernpunkte\n• **Motion** — 4s Epic Video mit Keyframe-Animation\n• **Summary** — 5 Stichpunkte\n• **Brief** — Recherche-Briefing\n• **Glow** — Live-Intent beim Tippen\n• **Lens** — KI-Bild erkennen\n• **Echo** — Chat zusammenfassen",
        "**Bild:** *Mach ein Bild von …* · **Video:** *Erstelle ein Video von …* · **Analyse:** Inside + Datei · **Agent:** Auftrag beschreiben",
        "Hover ueber Shortcuts & Build-Buttons fuer Kurz-Tipps. `/help` fuer alle Befehle."
      ]
    },
    {
      keys: ["philosophie", "was ist philosophie", "sinn des lebens", "ethik moral", "moral ethik", "stoizismus leben"],
      answers: [
        "**Philosophie** fragt nach Sinn, Wissen, Ethik und dem guten Leben — von Platon bis heute.",
        "**Ethik:** Was ist richtig? Utilitarismus (groesster Nutzen) vs. Deontologie (Pflichten) vs. Tugendethik.",
        "**Sinn des Lebens** ist persoenlich — viele finden ihn in Beziehungen, Wachstum, Beitrag oder Neugier.",
        "Frag auch: *Was ist Psychologie?* · *Was ist Achtsamkeit?* · *Was ist Stoizismus?*"
      ]
    },
    {
      keys: ["liebe", "beziehung", "partnerschaft", "freundschaft", "was ist liebe", "was ist freundschaft"],
      answers: [
        "**Liebe & Beziehungen** = Vertrauen, Naehe, Kommunikation und gegenseitiger Respekt.",
        "Gesunde Partnerschaft: ehrlich reden, Grenzen respektieren, gemeinsame Zeit und Eigenstaendigkeit.",
        "**Freundschaft** braucht Regelmaessigkeit, Zuhoeren und Ehrlichkeit — Qualitaet vor Quantitaet.",
        "Konflikte sind normal — wichtig ist, wie man sie konstruktiv loest."
      ]
    },
    {
      keys: ["arbeit", "karriere", "beruf", "bewerbung", "job", "was ist karriere", "arbeit welt"],
      answers: [
        "**Arbeit & Karriere** — Skills, Netzwerk, Erfahrung und Passung zwischen Mensch und Rolle.",
        "**Bewerbung:** Lebenslauf klar, Anschreiben spezifisch, Recherche ueber Firma, authentisch bleiben.",
        "Soft Skills (Kommunikation, Teamwork) sind oft so wichtig wie Hard Skills.",
        "Frag auch: *Was ist Homeoffice?* · *Was ist Burnout?* · *Zeitmanagement*"
      ]
    },
    {
      keys: ["studium", "uni", "universitaet", "schule bildung", "abi abitur", "was ist studium"],
      answers: [
        "**Studium** = vertieftes Lernen an Hochschule — Forschung, Fachwissen, Selbstorganisation.",
        "**Abitur** oeffnet Wege zu Uni/FH — Fachabi, Ausbildung und Quereinstieg sind auch valide.",
        "Lerntipps: Vorlesungen skippen nicht, Zusammenfassungen, Lerngruppen, Pausen einplanen.",
        "Frag auch: *Tipps zum Lernen* · *Was ist Erasmus?* · *Was ist Informatik?*"
      ]
    },
    {
      keys: ["universum", "astronomie", "galaxie", "schwarzes loch", "big bang", "was ist universum"],
      answers: [
        "**Universum** — alles was existiert: Galaxien, Sterne, Planeten, Dunkle Materie/Energie.",
        "**Big Bang** ~13,8 Mrd. Jahre her — Expansion, Kosmische Hintergrundstrahlung als Beleg.",
        "**Schwarze Loecher** = so starke Gravitation, dass nicht mal Licht entkommt.",
        "Frag auch: *Was ist die ISS?* · *Was ist ein Exoplanet?* · *Was ist Relativitaet?*"
      ]
    },
    {
      keys: ["ernaehrung", "essen gesund", "diaet", "vegan vegetarisch", "was isst man gesund", "nutrition"],
      answers: [
        "**Ernaehrung:** Vielfalt, Gemuese, Vollkorn, Proteine, wenig Zucker — kein Wundermittel noetig.",
        "**Vegan/Vegetarisch:** pflanzlich moeglich mit B12, Eisen, Protein bewusst planen.",
        "Trinken nicht vergessen — Wasser ist Basis. Portionen & Rhythmus helfen.",
        "NOCO AI ersetzt keine Ernaehrungsberatung bei Krankheiten."
      ]
    },
    {
      keys: ["reisen", "urlaub", "backpacking", "was ist reisen", "fernweh", "tourismus"],
      answers: [
        "**Reisen** erweitert Horizont — Kulturen, Sprachen, Perspektiven.",
        "Planung: Budget, Dokumente, Versicherung, lokale Regeln respektieren.",
        "**Nachhaltig reisen:** laengere Aufenthalte, oeffentliche Verkehrsmittel, weniger Flug.",
        "Frag auch: *Was ist Van Life?* · Laender & Geographie in der Vault."
      ]
    },
    {
      keys: ["geld", "finanzen", "sparen", "investieren", "was ist geld", "budget haushalt"],
      answers: [
        "**Geld & Finanzen** — Einnahmen, Ausgaben, Sparen, optional Investieren.",
        "Basics: Notgroschen (3–6 Monatskosten), Schulden vermeiden, Budget fuehren.",
        "**Investieren** = langfristig, diversifiziert, Risiko verstehen — kein Alltags-Tipp.",
        "Frag auch: *Was ist Inflation?* · *Was ist Blockchain?* · *Was ist Buergergeld?*"
      ]
    },
    {
      keys: ["glueck", "glück", "zufriedenheit", "was ist glueck", "wohlbefinden"],
      answers: [
        "**Glueck** ist oft Mischung aus Zufriedenheit, Sinn, Beziehungen und kleinen Momenten.",
        "Forschung: Dankbarkeit, Sozialkontakte, Bewegung und Schlaf foerdern Wohlbefinden.",
        "Vergleich mit anderen frisst Glueck — eigene Fortschritte zaehlen.",
        "Frag auch: *Psychologie* · *Achtsamkeit* · *Stress*"
      ]
    },
    {
      keys: ["angst", "depression", "mental health", "psyche", "was ist depression", "was hilft bei angst"],
      answers: [
        "**Angst** ist normaler Schutz — wird problematisch wenn sie Alltag blockiert.",
        "**Depression** = anhaltende Niedergeschlagenheit, Energielosigkeit — ernst nehmen, Hilfe suchen.",
        "Hilft oft: Gespraech (Therapie), Bewegung, Struktur, soziale Kontakte — kein Ersatz fuer Behandlung.",
        "**Wichtig:** Bei akuter Krise Telefonseelsorge **0800 111 0 111** (DE). NOCO AI ersetzt keine Therapie."
      ]
    },
    {
      keys: ["kunst", "literatur", "kultur", "museum", "was ist kunst", "was ist literatur"],
      answers: [
        "**Kunst** drueckt Ideen, Emotionen, Kultur aus — Malerei, Musik, Film, Literatur, Tanz.",
        "**Literatur** erzaehlt, bildet, provoziert — von Antike bis Gegenwartsliteratur.",
        "Kunst verstehen: Kontext (Epoche, Kuenstler, Gesellschaft) hilft enorm.",
        "Frag auch: *Was ist Film?* · *Klassische Musik* · *Street Art*"
      ]
    },
    {
      keys: ["wetter", "wettervorhersage", "klima wetter", "regen sonne", "was ist wetter"],
      answers: [
        "**Wetter** = kurzfristig (Stunden/Tage): Temperatur, Wind, Niederschlag, Wolken.",
        "**Klima** = langfristiges Muster (Jahrzehnte) — nicht mit einzelnem Schneetag verwechseln.",
        "Wetter entsteht durch Luftdruck, Feuchtigkeit, Jetstream und lokale Geographie.",
        "Frag auch: *Klimawandel* · *Erneuerbare Energie* · *Jahreszeiten*"
      ]
    },
    {
      keys: ["allgemeine frage", "irgendein thema", "beliebiges thema", "frag mich was", "ueber alles", "alltag fragen"],
      answers: [
        "Ich beantworte **allgemeine Fragen** aus der **NOCO Vault** — 800+ Themen: Wissenschaft, Tech, Geschichte, Gesundheit, Alltag, NOCO Features.",
        "**So fragst du am besten:** *Was ist …?* · *Erklaer mir …* · *Ich hab ne Frage zu …* · *Tipps zum Lernen* — oder nur *KI*, *Schlaf*, *Politik*.",
        "**Auch locker:** *Hey, was ist Yoga?* · *Wieso ist Schlaf wichtig?* · *Kannst du mir was über Blockchain sagen?*",
        "Unklar? **Hilfe** · *Was kann ich dich fragen?* · **NOCO Sparks** links."
      ]
    },
    {
      keys: ["erklaer mir", "erklaere mir", "kannst du erklaeren", "ich verstehe nicht", "was meinst du mit"],
      answers: [
        "Klar — schreib einfach **das Thema** oder **die Frage**. Ich formuliere es intern um und suche in der Vault.",
        "Beispiele: *Erklaer mir Quantenphysik* · *Was ist Demokratie?* · *Wie funktioniert das Internet?*",
        "Kurze Stichworte reichen: *Genetik*, *Blockchain*, *Schlaf*, *NOCO Motion*.",
        "Zu NOCO-Funktionen: *Wie erstelle ich ein Bild?* · *Was ist Agent?*"
      ]
    },
    {
      keys: ["zeitmanagement", "produktivitaet", "zeit einteilen", "to do", "todo liste", "prioritaeten", "was ist zeitmanagement"],
      answers: [
        "**Zeitmanagement** = Aufgaben sinnvoll planen — wichtig vor dringend.",
        "Methoden: **Pomodoro** (25 Min Fokus), **Eisenhower-Matrix** (wichtig/dringend), To-do-Listen.",
        "Tipp: Große Aufgaben in kleine Schritte teilen — weniger Ueberforderung.",
        "Frag auch: *Prokrastination* · *Lernen* · *Burnout* · *Pomodoro*"
      ]
    },
    {
      keys: ["fitness", "training", "muskelaufbau", "krafttraining", "joggen", "laufen sport", "was ist fitness"],
      answers: [
        "**Fitness** = regelmaessige Bewegung fuer Kraft, Ausdauer, Gesundheit.",
        "Basics: 150 Min moderate Bewegung/Woche (WHO-Empfehlung), Kraft 2x/Woche.",
        "Muskelaufbau: Progressive Belastung + Protein + Schlaf.",
        "Anfaenger: langsam steigern — Verletzungen vermeiden. NOCO AI ersetzt keinen Trainer."
      ]
    },
    {
      keys: ["yoga", "meditation", "achtsamkeit", "entspannung", "mindfulness", "was ist yoga"],
      answers: [
        "**Yoga** verbindet Koerperhaltungen, Atmung, Entspannung — Ursprung Indien.",
        "**Meditation/Achtsamkeit** = Aufmerksamkeit trainieren, Gedanken beobachten ohne zu bewerten.",
        "Hilft vielen bei Stress — 5–10 Min taeglich reichen zum Start.",
        "Frag auch: *Psychologie* · *Schlaf* · *Burnout* · *Stoizismus*"
      ]
    },
    {
      keys: ["auto", "verkehr", "fuehrerschein", "fahrzeug", "benzin diesel", "was ist e auto", "e-auto"],
      answers: [
        "**Auto & Verkehr** — Mobilitaet, Sicherheit, Regeln, Technik.",
        "**E-Auto:** Elektromotor, Akku, weniger lokale Emissionen — Ladeinfrastruktur beachten.",
        "Sicher fahren: Abstand, Geschwindigkeit, kein Handy am Steuer.",
        "Frag auch: *E-Mobilitaet* · *Klimawandel* · *Verkehr*"
      ]
    },
    {
      keys: ["politik deutschland", "bundestag", "wahl", "demokratie deutschland", "regierung", "kanzler", "was ist politik"],
      answers: [
        "**Politik in Deutschland** — Demokratie, Wahlen, Parteien, Bundestag, Grundgesetz.",
        "**Bundestag** = Parlament, Gesetze, Kontrolle der Regierung.",
        "Wahlen: alle 4 Jahre Bundestag — jede Stimme zaehlt.",
        "Frag auch: *Demokratie* · *EU* · *Grundgesetz* · *Fake News*"
      ]
    },
    {
      keys: ["religion", "glaube", "christentum", "islam", "judentum", "buddhismus", "was ist religion"],
      answers: [
        "**Religion** = Glaube, Rituale, Gemeinschaft, Sinnfragen — weltweit Milliarden Anhaenger.",
        "Grosse Religionen: Christentum, Islam, Hinduismus, Buddhismus, Judentum.",
        "Respektvoller Umgang: Fragen stellen, zuhören, nicht verallgemeinern.",
        "Frag auch: *Philosophie* · *Ethik* · *Kultur*"
      ]
    },
    {
      keys: ["haustier", "haustiere", "tier halten", "hund katze tier", "was ist haustier"],
      answers: [
        "**Haustiere** (Hund, Katze, Vogel …) bringen Freude — brauchen Zeit, Geld, Verantwortung.",
        "Vor dem Kauf: Kosten, Allergien, Wohnung (Mietvertrag), Auslauf/Pflege planen.",
        "Tierschutz: Adoptieren statt Massenzucht wo moeglich.",
        "Frag auch: *Hund* · *Katze* · *Tierschutz*"
      ]
    },
    {
      keys: ["wohnen", "miete", "wohnung", "eigenheim", "haus kaufen", "was ist miete"],
      answers: [
        "**Wohnen** — Miete, Nebenkosten, Vertrag, Nachbarschaft, Lage.",
        "**Miete:** Kaltmiete + Nebenkosten (Strom, Heizung oft extra). Kaution ueblich.",
        "Eigenheim vs. Miete: Flexibilitaet vs. Eigentum — persoenliche Entscheidung.",
        "Frag auch: *Geld* · *Finanzen* · *Mietpreisbremse*"
      ]
    },
    {
      keys: ["erkaeltung", "grippaler infekt", "husten", "schnupfen", "fieber erkaltung", "was hilft erkaeltung"],
      answers: [
        "**Erkaeltung** = Virus, oft Hals, Nase, Husten — meist harmlos, 7–10 Tage.",
        "Hilft: Ruhe, viel trinken, feuchte Luft, Schmerzmittel bei Bedarf.",
        "Zum Arzt wenn: hohes Fieber, Atemnot, laenger als 2 Wochen.",
        "NOCO AI ersetzt keine medizinische Beratung."
      ]
    },
    {
      keys: ["nachhaltigkeit alltag", "umwelt alltag", "muelltrennung", "plastik vermeiden", "oeko tipps", "was kann ich fuer umwelt tun"],
      answers: [
        "**Nachhaltigkeit im Alltag** — kleine Schritte summieren sich.",
        "Tipps: Muelltrennung, weniger Plastik, OPNV/Fahrrad, lokal kaufen, Reparieren statt Wegwerfen.",
        "Energie sparen: LED, Stand-by aus, kuerzer duschen.",
        "Frag auch: *Klimawandel* · *Recycling* · *E-Mobilitaet*"
      ]
    },
    {
      keys: ["mode", "fashion", "kleidung", "stil tipps", "was anziehen", "was ist mode"],
      answers: [
        "**Mode** = Kleidung, Stil, Trends, Selbstausdruck.",
        "Basics: Passform wichtiger als Trend, Qualitaet vor Menge, Second-Hand nachhaltig.",
        "Capsule Wardrobe = wenige Kombi-Teile — weniger Stress.",
        "Frag auch: *Nachhaltigkeit* · *Kunst*"
      ]
    },
    {
      keys: ["natur", "wald natur", "outdoor", "camping", "was ist natur"],
      answers: [
        "**Natur** — Waelder, Berge, Meere, Tiere, Oekosysteme.",
        "**Outdoor:** Wandern, Camping — Wetter checken, Muell mitnehmen, Respekt vor Wildtieren.",
        "Natur entlastet den Kopf — **Shinrin-yoku** (Wald baden) aus Japan.",
        "Frag auch: *Wandern* · *Klimawandel* · *Tiere*"
      ]
    },
    {
      keys: ["kochen", "rezepte", "kueche", "kochen lernen", "was koche ich", "tipps kochen"],
      answers: [
        "**Kochen** — Zutaten, Technik, Geschmack, Sicherheit (durchgaren, Hygiene).",
        "Anfaenger: einfache Rezepte (Nudeln, Eier, Gemuese), wenige Zutaten, Mise en place.",
        "Spices & Basics: Salz, Pfeffer, Oel, Knoblauch — vielseitig.",
        "Frag auch: *Ernaehrung* · *Food* · *Pizza* · *Vegan*"
      ]
    },
    {
      keys: ["hobby", "freizeit", "was kann man machen", "langweilig was tun", "zeitvertreib"],
      answers: [
        "**Hobbies** geben Struktur und Freude — Sport, Musik, Lesen, Gaming, Handwerk, Natur.",
        "Bei Langeweile: kurz rausgehen, 15 Min lesen, etwas Neues ausprobieren.",
        "Gute Hobbies: etwas Lernen + etwas Entspannung mischen.",
        "Frag auch: *Gaming* · *Musik* · *Wandern* · *Zeichnen*"
      ]
    },
    {
      keys: ["eltern", "kinder", "erziehung", "familie", "was ist erziehung", "eltern sein"],
      answers: [
        "**Eltern & Kinder** — Liebe, Grenzen, Vorbild, Geduld.",
        "Erziehung: klar kommunizieren, Konsequenzen, Zuneigung — kein Perfektionismus.",
        "Konflikte mit Kindern: ruhig bleiben, Namen nennen, kurz erklaeren warum.",
        "Frag auch: *Psychologie* · *Schule* · *Lernen*"
      ]
    },
    {
      keys: ["streaming", "netflix", "youtube", "spotify", "was ist streaming", "serien schauen"],
      answers: [
        "**Streaming** = Video/Musik ueber Internet — Netflix, YouTube, Spotify, Twitch.",
        "YouTube: Tutorials, News, Unterhaltung. Spotify: Musik & Podcasts.",
        "Tipp: Bildschirmzeit im Blick — Pausen, Offline-Zeit einplanen.",
        "Frag auch: *Podcast* · *Gaming* · *TikTok*"
      ]
    },
    {
      keys: ["konflikt", "streit", "argument", "wie loese ich konflikt", "kommunikation konflikt"],
      answers: [
        "**Konflikte** sind normal — entscheidend ist der Umgang.",
        "Hilft: Zuhoeren, Ich-Botschaften (*Ich fuehle…* statt *Du immer…*), Pause wenn es eskaliert.",
        "Nicht im Affekt entscheiden — oft hilft: spaeter nochmal reden.",
        "Frag auch: *Psychologie* · *Freundschaft* · *Verhandlung*"
      ]
    },
    {
      keys: ["traum", "traeume", "traeumen", "albtraum", "was bedeuten traume", "schlaftraum"],
      answers: [
        "**Traeume** entstehen im REM-Schlaf — Verarbeitung, Emotionen, Erinnerungen.",
        "Wissenschaft: kein festes Traumwoerterbuch — persoenliche Symbole variieren.",
        "Albtraeume: oft Stress — Schlafhygiene, Entspannung vor dem Schlafen.",
        "Frag auch: *Schlaf* · *Psychologie*"
      ]
    },
    {
      keys: ["handy tipps", "smartphone tipps", "handy nutzen", "akku sparen", "was kann mein handy"],
      answers: [
        "**Handy-Tipps:** Updates installieren, starke PIN/Face-ID, Backup aktivieren.",
        "Akku: Helligkeit runter, Hintergrund-Apps begrenzen, WLAN statt Mobile wenn moeglich.",
        "Sicherheit: keine unbekannten Links, Apps nur aus offiziellen Stores.",
        "Frag auch: *Cybersecurity* · *Apps* · *WLAN*"
      ]
    },
    {
      keys: ["einkaufen", "supermarkt", "budget einkauf", "sparen einkaufen", "was einkaufen"],
      answers: [
        "**Einkaufen & Budget** — Liste schreiben, nicht hungrig einkaufen, Angebote vergleichen.",
        "Sparen: Eigenmarken, Saisonprodukte, Mengen bewusst waehlen.",
        "Nachhaltig: weniger Verpackung, regional wenn moeglich.",
        "Frag auch: *Finanzen* · *Ernaehrung* · *Nachhaltigkeit*"
      ]
    },
    {
      keys: ["sommer", "sommer freizeit", "urlaub sommer", "hitze sommer", "was macht man im sommer"],
      answers: [
        "**Sommer** — Sonne, Hitze, Ferien, Outdoor.",
        "Ideen: Schwimmen, Grillen, Festivals, Radfahren, Reisen — Sonnenschutz nicht vergessen.",
        "Bei Hitze: viel trinken, Mittagssonne meiden, leichte Kleidung.",
        "Frag auch: *Reisen* · *Strand* · *Eis*"
      ]
    },
    {
      keys: ["geschichte", "history", "mittelalter", "antike welt", "industrialisierung"],
      answers: [
        "**Geschichte** erzaehlt Vergangenheit: Kulturen, Kriege, Erfindungen, Ideen.",
        "Antike: Griechenland, Rom. Mittelalter: Burgen, Handel, Kirche.",
        "Industrialisierung: Dampfmaschine, Fabriken, Urbanisierung.",
        "Geschichte hilft die Gegenwart zu verstehen.",
        "Frag auch: Archaeologie, Demokratie, Deutschland."
      ]
    },
    {
      keys: ["gesundheit", "health", "immunsystem", "vitamin", "krankheit"],
      answers: [
        "**Gesundheit** = koerperliches und mentales Wohlbefinden.",
        "Basics: Schlaf, Bewegung, Wasser, ausgewogene Ernaehrung.",
        "Immunsystem schuetzt vor Krankheitserregern.",
        "Bei ernsten Symptomen Arzt aufsuchen — NOCO AI ersetzt keine Medizin.",
        "Frag auch: Psychologie, Schlaf, Ernaehrung."
      ]
    },
    {
      keys: ["sprache", "language", "englisch lernen", "deutsch", "uebersetzen"],
      answers: [
        "**Sprachen** verbinden Menschen. Deutsch, Englisch, Franzoesisch & tausende mehr.",
        "Lernen: Woerter, Grammatik, hoeren, sprechen, lesen — taeglich ueben.",
        "Apps & Buecher helfen — Konsistenz ist der Schluessel.",
        "NOCO AI antwortet auf Deutsch, versteht viele Formulierungen.",
        "Frag: Tipps zum Lernen."
      ]
    },
    {
      keys: ["noco modelle", "modell namen", "noco prism", "noco flux", "noco spark", "was ist prism", "was ist flux", "was ist spark", "unterschied prism spark", "noco funktionen namen", "noco namen"],
      answers: [
        "**NOCO Modell-Linie** (simuliert, im Liquid-Glass-Look):\n• **NOCO Flux** — Exclusive only. Rush-Engine, unbegrenzt, immer volle Antworten.\n• **NOCO Prism** — Free Msg 1-10. Voll-Wissensbank, 520+ Themen.\n• **NOCO Spark** — Free ab Msg 11. Kompakt, kurz — Exclusive bringt Flux/Prism zurueck.",
        "**So wechseln die Modelle:** Access Free startet mit **Prism** → nach 10 Antworten **Spark**. **NOCO Exclusive** = dauerhaft **Flux** + Rush ~90 ms.",
        "Frag *Was ist NOCO Echo?* oder *Was ist NOCO Render?* fuer Funktionsnamen.",
        "Alles transparent in der **NOCO Access**-Leiste ueber dem Chat.",
        "Kein echtes LLM — aber klare Namen wie im NOCO OS (Forge, Nexus, Keycard)."
      ]
    },
    {
      keys: ["noco echo", "was ist noco echo", "noco recall", "echo feature"],
      answers: [
        "**NOCO Echo** = Chat-Verlauf & Recall. Frag *Was habe ich geschrieben?* — ich liste deine Nachrichten und fasse Themen zusammen.",
        "Auch per `/summary`. Lokal in localStorage — kein Server, kein Cloud-Gedaechtnis.",
        "Echo ist **fuer alle** (Access Free & Exclusive). Exclusive bringt zusaetzlich Flux + Rush.",
        "Beispiele: *Fasse den Chat zusammen* · *Was haben wir besprochen?*",
        "Ehrlich: gespeicherte Nachrichten, kein echtes KI-Gedaechtnis — aber sofort & privat."
      ]
    },
    {
      keys: ["noco glow", "was ist noco glow", "glow prism", "live intent", "intent prism", "glow feature"],
      answers: [
        "**NOCO Glow** = Live-Intent-Prism unter dem Eingabefeld. Ab 2 Zeichen siehst du Kategorie, Vault-Vorschau und 2 Related-Chips.",
        "Glow nutzt die **NOCO Vault**-Engine lokal — kein Server, kein echtes LLM. Shortcut: **✦ Glow** in der Leiste.",
        "Kategorie-Badge erscheint auch auf AI-Antworten (z. B. Wissenschaft, Tech & KI, NOCO OS).",
        "Tippe z. B. *Quanten* oder *Klima* — Glow zeigt sofort, wohin die Antwort geht.",
        "Passt zum Liquid-Glass-Design: Prism-Sheen, Confidence-Meter & klickbare Chips."
      ]
    },
    {
      keys: ["noco brief", "was ist noco brief", "intel brief", "brief feature", "kurzueberblick feature", "recherche brief"],
      answers: [
        "**NOCO Brief** = strukturiertes Recherche-Briefing aus der Vault. TL;DR, Kernpunkte, verwandte Themen & naechste Fragen — in einem Prism-Panel.",
        "Start: `/brief Thema` · *Briefe mir Klimawandel* · Shortcut **◎ Brief** · Vergleich: *Python vs JavaScript*.",
        "Brief durchsucht **mehrere Vault-Eintraege** und fasst sie zusammen — ideal vor einer Deep-Dive-Frage oder zum Lernen.",
        "Vergleichsmodus erkennt *vs*, *versus*, *Unterschied zwischen X und Y* — zwei Themen nebeneinander.",
        "Lokal & offline. Kein echtes LLM — aber deutlich nuetzlicher als eine einzelne Kurzantwort."
      ]
    },
    {
      keys: ["noco render", "was ist noco render", "noco pixel render", "render studio"],
      answers: [
        "**NOCO Render** = Offline-Pixel im Chat. **3600 Motive**, 6 Styles, **NOCO Sheen**, einfache Woerter wie *Katze*, *Apfel*, *Wolkenkratzer*.",
        "**NOCO Sheen** = die Blur-Reveal-Animation — Bild fertig, wird scharf in ~6.5 Sekunden.",
        "Exclusive only fuer Generierung. Free kann Render ansehen. Chat: *Erstelle ein Bild von…* oder `/pixel`.",
        "Einfach tippen: *Mach ein Bild von Banane* — ein Wort reicht oft. **1 Bild zur Zeit**.",
        "Passt zum NOCO OS — wie **Forge** fuer Apps, **Render** fuer Bilder."
      ]
    },
    {
      keys: ["einfache bilder", "einfache motive", "welche woerter fuer bilder", "bild woerter", "render begriffe", "pixel begriffe", "was kann ich malen"],
      answers: [
        "**Einfache Begriffe** funktionieren am besten — ein Wort, klar, deutsch oder englisch:",
        "**Tiere:** Katze, Hund, Pferd, Kuh, Schwein, Hase, Frosch, Ente, Schaf, Maus, Baer, Loewe, Pinguin…",
        "**Obst & Essen:** Apfel, Banane, Orange, Birne, Pizza, Burger, Kuchen, Brot, Kaffee, Erdbeere…",
        "**Gebaeude & Stadt:** Haus, Wolkenkratzer, Skyline, Schloss, Bruecke, Kirche, Fabrik…",
        "Im Chat: **▦** druecken oder *Mach ein Bild von …* — Exclusive zum Generieren."
      ]
    },
    {
      keys: ["apfel", "apple", "obst apfel", "was ist ein apfel"],
      answers: [
        "**Apfel** = rundes Obst, oft rot oder gruen. Reich an Vitaminen, weltweit beliebt.",
        "In **NOCO Render**: *Mach ein Bild von Apfel* — erkennt *apfel* und *apple*.",
        "Sorten: Boskoop, Gala, Granny Smith. Sprichwort: *An apple a day…*",
        "Apfelbaum blüht im Fruehjahr — Frucht im Herbst.",
        "Frag auch: Banane, Orange, Ernaehrung."
      ]
    },
    {
      keys: ["banane", "banana", "was ist eine banane"],
      answers: [
        "**Banane** = gelbe, gebogene Tropenfrucht. Kalium, Energie, Snack Nr. 1.",
        "**NOCO Render:** *Mach ein Bild von Banane* — Motiv **banana** mit gelbem Hue.",
        "Waechst an Bananenstauden (kein Baum im klassischen Sinn).",
        "Bananenreifung: gruen → gelb → braune Punkte = suesser.",
        "Passt zu: Obst, Tropen, gesunde Ernaehrung."
      ]
    },
    {
      keys: ["hund", "dog", "welpe", "was ist ein hund"],
      answers: [
        "**Hund** = domestizierter Wolf, *best friend* der Menschheit. Treue, Spiele, Training.",
        "**NOCO Render:** *Mach ein Bild von Hund* — Motiv **dog** mit Ohren & Schnauze.",
        "Rassen: Dackel, Labrador, Schaeferhund, Chihuahua — unzaehlig viele.",
        "Hunde riechen & hoeren besser als Menschen. Sozial, brauchen Auslauf.",
        "Verwandt in Render: Katze, Pferd, Wolf, Fuchs."
      ]
    },
    {
      keys: ["katze", "cat", "kitten", "was ist eine katze"],
      answers: [
        "**Katze** = beliebtes Haustier, jaeht instinktiv, schläft viel, unabhaengig.",
        "**NOCO Render:** *Mach ein Bild von Katze* — eines der meistgenutzten Motive.",
        "Stubentiger vs Freigaenger. Schnurren = oft Zufriedenheit.",
        "Katzen haben tolle Nachtsicht und flexible Wirbelsaeule.",
        "Auch: Hund, Maus, Loewe, Tiger im Render."
      ]
    },
    {
      keys: ["pferd", "horse", "pony", "was ist ein pferd"],
      answers: [
        "**Pferd** = grosses Huftier, Reiten, Landwirtschaft, Sport (Springen, Dressur).",
        "**NOCO Render:** *Mach ein Bild von Pferd* — eigenes **horse**-Muster (nicht mehr Katzen-Form).",
        "Pferde sind Herdentiere, sehr sozial. Einhorn-Mythos spielt auf Pferde an.",
        "Fohlen = junges Pferd. Hufe brauchen Pflege.",
        "Render: Kuh, Schaf, Ziege, Esel."
      ]
    },
    {
      keys: ["wolkenkratzer", "skyscraper", "hochhaus", "was ist ein wolkenkratzer"],
      answers: [
        "**Wolkenkratzer** = sehr hohes Gebaeude in Grossstaedten. Stahl, Glas, Aufzuege.",
        "Beispiele: Burj Khalifa, Empire State Building, One World Trade Center.",
        "**NOCO Render:** *Mach ein Bild von Wolkenkratzer* — hohes **skyscraper**-Muster.",
        "Auch: *Stadt*, *Skyline*, *Hochhaus* — aehnliche Motive.",
        "Stadtbilder: Architektur, Urbanisierung, New York, Dubai."
      ]
    },
    {
      keys: ["orange frucht", "apelsin", "was ist eine orange"],
      answers: [
        "**Orange** = runde Zitrusfrucht, Vitamin C, suess-sauer, orange Farbe.",
        "**NOCO Render:** *Mach ein Bild von Orange* — rundes Frucht-Motiv.",
        "Verwandt: Zitrone, Mandarine, Grapefruit.",
        "Orangenbaume in warmen Klimazonen.",
        "Nicht verwechseln mit der Farbe Orange — beides geht im Render."
      ]
    },
    {
      keys: ["ente", "duck", "was ist eine ente"],
      answers: [
        "**Ente** = Wasservogel, Schwimmen, Schnabel, oft auf Teichen.",
        "**NOCO Render:** *Mach ein Bild von Ente* — **duck**-Silhouette.",
        "Enten haben wasserabweisende Federn. Laut: Quaken.",
        "Bekannt: Gummiente, Donald Duck, Enten im Park.",
        "Auch: Vogel, Schwan, Huhn im Render."
      ]
    },
    {
      keys: ["schaf", "sheep", "was ist ein schaf"],
      answers: [
        "**Schaf** = Nutztier fuer Wolle & Fleisch. Herdentiere, friedlich.",
        "**NOCO Render:** *Mach ein Bild von Schaf* — fluffiges **sheep**-Motiv.",
        "Laemmer = junge Schafe. Schaf zaehlen = Einschlaf-Hilfe.",
        "Wolle → Textilien. Schaefer & Hund als Klassiker.",
        "Verwandt: Kuh, Ziege, Pferd."
      ]
    },
    {
      keys: ["haustiere", "welche tiere", "tiere liste", "farmtiere", "nutztiere"],
      answers: [
        "**Haustiere:** Hund, Katze, Hamster, Goldfisch, Kaninchen, Vogel.",
        "**Farmtiere:** Kuh, Schwein, Schaf, Ziege, Pferd, Huhn, Ente.",
        "**Wildtiere (Render):** Fuchs, Wolf, Loewe, Tiger, Baer, Wal, Adler.",
        "Alle als **einfache Woerter** im Chat: *Mach ein Bild von …*",
        "Tiere brauchen artgerechte Haltung — NOCO erklaert, ersetzt keinen Tierarzt."
      ]
    },
    {
      keys: ["obst", "gemuese", "obst und gemuese", "welches obst", "gesund essen"],
      answers: [
        "**Obst:** Apfel, Banane, Orange, Birne, Erdbeere, Traube, Mango, Kirsche, Zitrone.",
        "**Gemuese:** Karotte, Brokkoli, Tomate, Mais, Salat, Paprika, Gurke.",
        "5 am Tag = Empfehlung fuer Vitamine & Ballaststoffe.",
        "**NOCO Render:** fast jedes Obst als ein Wort — *Mach ein Bild von Apfel*.",
        "Frag: Ernaehrung, Gesundheit, Banane, Apfel."
      ]
    },
    {
      keys: ["gebaeude", "gebaeude arten", "haus wolkenkratzer", "architektur einfach"],
      answers: [
        "**Gebaeude** schuetzen Menschen: **Haus**, Wohnung, Schule, Kirche, Fabrik.",
        "**Wolkenkratzer** = extrem hoch, Bueros, Glasfassaden.",
        "**Bruecke** verbindet Ufer. **Schloss** = historisch, Burgen.",
        "Render: *Wolkenkratzer*, *Haus*, *Schloss*, *Bruecke*, *Stadt*.",
        "Architektur = Kunst + Technik des Bauens."
      ]
    },
    {
      keys: ["noco vault", "was ist noco vault", "noco mindbank", "vault engine", "was ist eine wissensbank", "wissensbank", "wissens bank"],
      answers: [
        "**NOCO Vault** = die lokale Wissens-Engine hinter NOCO AI. 520+ Themen, Keyword-Matching, offline.",
        "Technisch in brain.js — NOCO OS Wissen + Wissenschaft, Tech, Alltag.",
        "**NOCO Prism** nutzt Vault voll. **NOCO Spark** kuerzt Antworten. **NOCO Flux** = Vault ohne Limit.",
        "Frag *Was kann ich dich fragen?* fuer alle Vault-Themen.",
        "Vault = ehrliche Wissensbank, kein ChatGPT."
      ]
    },
    {
      keys: ["noco lens", "was ist noco lens", "noco glimpse", "blaue begriffe noco"],
      answers: [
        "**NOCO Lens** = klickbare blaue Begriffe in Antworten. Ein Klick — Kurz-Erklaerung zu NOCO Pay, Security, KI & Co.",
        "Nur mit **NOCO Exclusive** (Flux). Free sieht Woerter, Lens ist gesperrt.",
        "Wie eine Lupe durch Liquid Glass — Begriffe leuchten, du verstehst sofort.",
        "Exclusive-Dialog oder Flux aktivieren fuer Lens.",
        "Frag nach einem Begriff direkt, wenn Lens gesperrt ist."
      ]
    },
    {
      keys: ["ki bild erkennen", "bild erkennen", "noco lens detect", "ist das ki", "echtes bild", "pixel erkennen", "bild von ki"],
      answers: [
        "**NOCO Lens Detect** — prueft ob ein Bild **dein eigenes NOCO Render** ist (Pixel, Groesse 40/52, Quadrat).",
        "**+** unten links oder **Erkennen** oben — Bild hochladen. Vergleich mit deinen Chat-Bildern & Galerie.",
        "Eigenes NOCO Render: hohe Pixel-Uebereinstimmung. Fremdes Pixel: *nicht deins*. Fotos: *kein NOCO Render*.",
        "Slash: `/detect` oder `/erkennen`. Funktioniert offline — keine Cloud.",
        "Tipp: Erst **Mach ein Bild von …** im Chat, dann exportieren & erneut hochladen zum Testen."
      ]
    },
    {
      keys: ["noco rush", "was ist noco rush", "rush engine", "priority speed noco"],
      answers: [
        "**NOCO Rush** = Priority-Antwort-Engine. Exclusive only — ~90 ms statt ~500 ms bei Access Free.",
        "Immer aktiv mit **NOCO Flux**. Plan-Leiste zeigt Rush-Badge wenn Exclusive an.",
        "Spuerbar beim Tippen: weniger Wartezeit, Label *NOCO AI denkt… (Rush ~90 ms)*.",
        "Rush + Flux + Render + Lens = das Exclusive-Paket.",
        "Testphase 1 Tag gratis — alles simuliert, kein echtes Geld."
      ]
    },
    {
      keys: ["noco sheen", "was ist noco sheen", "sheen animation", "blur reveal noco"],
      answers: [
        "**NOCO Sheen** = die Blur-Reveal-Animation in **NOCO Render**. Bild ist sofort fertig, startet unscharf, wird in 8s scharf.",
        "Replay-Button startet Sheen nochmal — wie Licht durch Liquid Glass.",
        "Exclusive + **NOCO Render**. Free kann Render ansehen, Sheen-Generierung nur mit Flux.",
        "Passt zum NOCO Design: weich, futuristisch, offline.",
        "Frag auch: *Was ist NOCO Render?*"
      ]
    },
    {
      keys: ["noco access", "was ist noco access", "access leiste", "plan leiste noco"],
      answers: [
        "**NOCO Access** = die Plan-Leiste ueber dem Chat. Zeigt live: Access Free oder Exclusive, aktuelles Modell (Prism/Spark/Flux), Kontingent.",
        "Einstellungen haben die gleiche Info in der Plan-Karte.",
        "Klick **Was geht hier?** fuer die Discover-Uebersicht aller Funktionen.",
        "Slash `/model` — gleiche Infos im Chat.",
        "Transparent: du siehst immer was du nutzt."
      ]
    },
    {
      keys: ["noco sparks", "was ist noco sparks", "schnellfragen noco", "prompt chips"],
      answers: [
        "**NOCO Sparks** = die Schnellfragen in der Sidebar. Kategorien: NOCO Namen, Vault, Wissenschaft, Render, NOCO OS…",
        "Ein Klick sendet die Frage direkt in den Chat — ideal wenn du nicht weisst was du fragen sollst.",
        "Sparks aktualisieren sich mit der Vault — neue Themen = neue Chips.",
        "Kombiniere Sparks mit **NOCO Echo**: erst chatten, dann *Was habe ich geschrieben?*",
        "Exclusive-Tipp: Sparks + **NOCO Flux** = immer volle Antworten."
      ]
    },
    {
      keys: ["multi chat", "mehrere chats", "neuer chat", "chat wechseln", "chat liste"],
      answers: [
        "**Multi-Chat** in NOCO AI: mehrere Gespraeche parallel in der Sidebar.",
        "Neuer Chat: Plus-Button oben oder `/new`. Jeder Chat hat eigenen Verlauf in localStorage.",
        "Wechseln: Klick auf Chat in der Liste. Umbenennen, Suchen, Loeschen moeglich.",
        "Import/Export: alle Chats als JSON sichern — Einstellungen.",
        "NOCO Echo fasst nur den **aktuellen** Chat zusammen."
      ]
    },
    {
      keys: ["neu generieren", "regenerate", "andere antwort", "nochmal antworten"],
      answers: [
        "**Neu generieren** = andere Antwortvariante zum selben Thema. Klick auf das Wiederhol-Symbol bei AI-Nachrichten.",
        "Jedes Vault-Thema hat mehrere Antworten — andere Formulierung, gleicher Inhalt.",
        "Mit **NOCO Flux** unbegrenzt regenerieren. **NOCO Spark** kann Antworten kuerzen.",
        "Perfekt wenn dir die Formulierung nicht gefaellt — nicht die Frage aendern.",
        "Tipp: 2-3x regenerieren zeigt oft die tiefste Variante."
      ]
    },
    {
      keys: ["chatgpt", "openai", "gpt", "vergleich chatgpt", "besser als chatgpt"],
      answers: [
        "**ChatGPT** = echte Cloud-KI (LLM) von OpenAI. Braucht Internet, Server, Konto.",
        "**NOCO AI** = lokale **NOCO Vault** — regelbasiert, offline, privat, NOCO OS-Fokus.",
        "ChatGPT kann freier antworten; NOCO AI ist ehrlich begrenzt aber transparent und ohne Tracking.",
        "Fuer NOCO OS, Keycard, Exclusive: NOCO AI ist spezialisiert. Fuer offene Kreativitaet: echte LLMs.",
        "Beide haben ihren Platz — NOCO AI = NOCO-Universum + Vault-Wissen im Glas-Look."
      ]
    },
    {
      keys: ["blockchain", "bitcoin", "krypto", "kryptowaehrung", "nft"],
      answers: [
        "**Blockchain** = verteiltes digitales Kassenbuch. Bloecke verkettet, schwer faelschbar.",
        "**Bitcoin** = erste grosse Kryptowaehrung — dezentral, kein Zentralbank noetig.",
        "**NFT** = digitaler Eigentumsnachweis auf Blockchain — Kunst, Sammlerstuecke (umstritten).",
        "Risiken: Volatilitaet, Betrug, Energieverbrauch (Mining). NOCO Pay = **simuliert**, kein echtes Krypto.",
        "Technik interessant: Smart Contracts, DeFi — aber Vorsicht mit Geld."
      ]
    },
    {
      keys: ["vr", "virtual reality", "virtuelle realitaet", "ar", "augmented reality", "metaverse"],
      answers: [
        "**VR** (Virtual Reality) = komplett virtuelle Welt per Headset. Gaming, Training, Architektur.",
        "**AR** (Augmented Reality) = digitale Objekte in echter Welt (Handy-Kamera, HoloLens).",
        "**Metaverse** = Vision permanenter 3D-Online-Welten — sozial, Arbeit, Handel (noch in Entwicklung).",
        "NOCO OS ist 2D/HTML — kein VR, aber futuristisches UI-Feeling durch Liquid Glass.",
        "Zukunft: VR/AR koennten Lernen und Remote-Arbeit veraendern."
      ]
    },
    {
      keys: ["open source", "opensource", "linux", "github", "freie software"],
      answers: [
        "**Open Source** = Quellcode oeffentlich — jeder kann lesen, aendern, verbessern.",
        "**Linux** = freies OS — Server, Android-Basis, Entwickler-Liebling.",
        "**GitHub** = Plattform fuer Code — auch NOCO OS Mobile nutzt GitHub Pages.",
        "Vorteile: Transparenz, Community, keine Vendor-Lock-in. NOCO AI laeuft lokal — Code in brain.js sichtbar.",
        "Lizenzmodelle: MIT, GPL, Apache — regeln Nutzung."
      ]
    },
    {
      keys: ["wlan", "wifi", "router", "netzwerk", "ip adresse", "lan"],
      answers: [
        "**WLAN/WiFi** = drahtloses lokales Netz. Router verbindet Geraete mit Internet.",
        "**IP-Adresse** = Adresse im Netz (z.B. 192.168.1.1 lokal). **DNS** uebersetzt Namen.",
        "**LAN** = lokales Netz zu Hause. **Firewall** filtert unerwuenschten Traffic.",
        "Sicherheit: WPA3-Verschluesselung, Router-Passwort aendern, Gast-WLAN fuer Besucher.",
        "NOCO AI braucht Netz nur einmal zum Laden — danach offline."
      ]
    },
    {
      keys: ["datenbank", "sql", "speicher daten", "database"],
      answers: [
        "**Datenbank** = strukturierte Datenspeicherung. Tabellen, Zeilen, Spalten — oder NoSQL (Dokumente).",
        "**SQL** = Sprache fuer relationale DBs (SELECT, INSERT, UPDATE). MySQL, PostgreSQL, SQLite.",
        "NOCO **Vault** ist wie eine in-memory Wissens-Datenbank in JavaScript — keine SQL.",
        "Chats in NOCO AI: localStorage (JSON) — einfache clientseitige Datenbank.",
        "Grosse Apps nutzen Server-DBs; NOCO bewusst lokal & simpel."
      ]
    },
    {
      keys: ["impfung", "vaccine", "immunisierung", "impfen", "pandemie"],
      answers: [
        "**Impfung** trainiert das Immunsystem gegen Krankheitserreger — ohne volle Erkrankung.",
        "Wirkt individuell und oft auch gesellschaftlich (Herdimmunitaet).",
        "COVID-19 zeigte: Impfstoff-Entwicklung kann sehr schnell sein (mRNA-Technologie).",
        "Impfungen sind eine der groessten medizinischen Erfolgsgeschichten (Masern, Polio).",
        "Medizinische Entscheidungen: mit Arzt/Behoerde — NOCO AI ersetzt keine Beratung."
      ]
    },
    {
      keys: ["genetik", "gen", "vererbung", "crispr", "gentechnik"],
      answers: [
        "**Genetik** = Lehre von Vererbung. Gene auf DNA → Proteine → Merkmale (Augenfarbe, Krankheitsrisiko).",
        "**CRISPR** = Gen-Schere — DNA gezielt bearbeiten. Hoffnung: Therapien. Ethik: Designer-Babys?",
        "Vererbung: dominant/rezessiv, X-chromosomal. Familienanamnese wichtig fuer Aerzte.",
        "Gentechnik in Landwirtschaft: hoehere Ertraege, Debatte ueber Umwelt & Labeling.",
        "DNA ist universeller Code des Lebens — Biologie + Ethik eng verbunden."
      ]
    },
    {
      keys: ["medizin", "arzt", "krankenhaus", "diagnose", "therapie"],
      answers: [
        "**Medizin** = Wissenschaft und Praxis der Heilung. Praevention, Diagnose, Therapie, Rehabilitation.",
        "Aerzte nutzen Anamnese, Untersuchung, Labor, Bildgebung (Roentgen, MRT).",
        "Krankenhaus = akute Versorgung. Hausarzt = erste Anlaufstelle.",
        "Evidence-based: Behandlungen mit Studien belegt — nicht nur Meinung.",
        "Bei Beschwerden: echten Arzt aufsuchen. NOCO Vault = Bildung, kein Ersatz."
      ]
    },
    {
      keys: ["koerper", "anatomie", "organe", "herz", "lunge", "muskel"],
      answers: [
        "Der **menschliche Koerper**: Skelett (Stuetze), Muskeln (Bewegung), Organe (Funktionen).",
        "**Herz** pumpt Blut. **Lunge** tauscht O2/CO2. **Gehirn** steuert alles.",
        "Verdauung: Mund → Magen → Darm → Naehrstoffe ins Blut.",
        "Haut = groesstes Organ — Schutz, Temperatur, Sinnesorgan.",
        "Bewegung und Schlaf halten Koerper fit — siehe auch Gesundheit & Sport."
      ]
    },
    {
      keys: ["pflanze", "pflanzen", "botanik", "baum", "fotosynthese", "wurzel"],
      answers: [
        "**Pflanzen** = Lebewesen mit Photosynthese. Wurzeln, Stamm, Blaetter, Blueten.",
        "**Photosynthese:** Licht + CO2 + Wasser → Zucker + O2. Grundlage fast aller Nahrungsketten.",
        "Baeume speichern Kohlenstoff, kuehlen Staedte, bieten Lebensraum.",
        "Regenwald = enorme Biodiversitaet — Schutz ist Klimaschutz.",
        "Zimmerpflanzen: Luft, Wohlbefinden, Verantwortung (giessen, Licht)."
      ]
    },
    {
      keys: ["vulkan", "erdbeben", "geologie", "tektonik", "mineral"],
      answers: [
        "**Geologie** = Wissenschaft der Erde. Gesteine, Mineralien, Erdgeschichte.",
        "**Plattentektonik:** Kontinentalplatten bewegen sich — Erdbeben an Grenzen, Vulkane wo Platten tauchen.",
        "**Vulkan:** Magma erreicht Oberflaeche. Pompeji (79 n.Chr.) beruehmtes Beispiel.",
        "Erdbeben messen Seismographen (Richter-Skala). Tsunamis folgen manchmal.",
        "Mineralien: Quarz, Feldspat, Diamant (Kohlenstoff unter Druck)."
      ]
    },
    {
      keys: ["licht", "optik", "farbe", "spektrum", "regenbogen"],
      answers: [
        "**Licht** = elektromagnetische Welle. Sichtbares Spektrum: Rot bis Violett (Regenbogen).",
        "Farben entstehen durch unterschiedliche Wellenlaengen. Objekte absorbieren/reflektieren Licht.",
        "Prisma zerlegt weisses Licht — Newtons Experiment.",
        "Warum Himmel blau? **Rayleigh-Streuung** — kurze Wellenlaengen werden mehr gestreut.",
        "Optik in Technik: Linsen (Kamera), Laser, Faseroptik (Internet-Kabel)."
      ]
    },
    {
      keys: ["quanten", "quantenphysik", "quantencomputer", "superposition"],
      answers: [
        "**Quantenphysik** = Physik kleinster Teilchen. Atome verhalten sich nicht wie Alltags-Objekte.",
        "**Superposition:** Quantenzustand kann mehrere Moeglichkeiten gleichzeitig sein (bis Messung).",
        "**Quantencomputer** nutzen Qubits — potenziell enorme Rechenpower fuer bestimmte Probleme (Krypto, Medizin).",
        "Beruehmt: Heisenberg Unschaerfe, Doppelspalt-Experiment, Verschraenkung.",
        "Noch in Forschung — aber Grundlage moderner Elektronik (Transistoren, Laser)."
      ]
    },
    {
      keys: ["fake news", "desinformation", "medien", "journalismus", "pressefreiheit"],
      answers: [
        "**Fake News** = bewusst falsche Information als Nachricht getarnt. Verbreitung oft ueber Social Media.",
        "Gegenmittel: Quellen pruefen, mehrere Medien, Datum checken, Skepsis bei Emotion-Clickbait.",
        "**Journalismus** = Recherche, Fakten, Einordnung. Pressefreiheit = Grundpfeiler der Demokratie.",
        "Oeffentlich-Rechtliche (ARD, ZDF) vs private Medien — verschiedene Modelle.",
        "NOCO Explorer zeigt simulierte Fake-Artikel — echte Welt braucht echte Medienkompetenz."
      ]
    },
    {
      keys: ["menschenrechte", "menschenwuerde", "grundrechte", "un menschenrechte"],
      answers: [
        "**Menschenrechte** = Rechte die jedem Menschen zustehen — unabhaengig von Herkunft, Religion, Geschlecht.",
        "UN-Menschenrechtserklaerung 1948: Wuerde, Freiheit, Gleichheit, Leben, Meinungsfreiheit.",
        "**Grundgesetz** Art. 1: Menschenwuerde unantastbar.",
        "Menschenrechte schuetzen Minderheiten, verbieten Folter, garantieren faires Verfahren.",
        "Aktivismus & Bildung halten Rechte lebendig — Demokratie braucht wache Buerger."
      ]
    },
    {
      keys: ["diversitaet", "inklusion", "toleranz", "respekt", "vorurteil"],
      answers: [
        "**Diversitaet** = Vielfalt in Herkunft, Geschlecht, Alter, Faehigkeiten, Meinungen.",
        "**Inklusion** = alle werden mit einbezogen — Barrierefreiheit, Chancengleichheit.",
        "Vorurteile entstehen oft aus Unwissenheit — Begegnung und Bildung helfen.",
        "Respekt heisst: Grenzen achten, zuhoeren, nicht diskriminieren.",
        "Starke Gesellschaften nutzen Vielfalt als Staerke — nicht als Spaltung."
      ]
    },
    {
      keys: ["nachhaltigkeit", "umweltschutz", "muell", "plastik", "zero waste"],
      answers: [
        "**Nachhaltigkeit** = heute so leben, dass Zukunft moeglich bleibt (3 Saeulen: Oekologie, Oekonomie, Soziales).",
        "**Umweltschutz:** Muell reduzieren, recyceln, Energie sparen, oeffentliche Verkehrsmittel.",
        "**Plastik:** Mikroplastik in Meeren — Mehrweg statt Einweg wo moeglich.",
        "**Zero Waste:** Abfall vermeiden vor Entsorgung. Kompost, Reparieren, Tauschen.",
        "Kleine Schritte summieren sich — informiert handeln (siehe auch Oekologie, Klima)."
      ]
    },
    {
      keys: ["fahrrad", "radfahren", "mobilitaet", "verkehr", "oepnv"],
      answers: [
        "**Fahrrad** = gesund, guenstig, klimafreundlich. Infrastruktur (Radwege) macht es sicherer.",
        "**OePNV** (Bus, Bahn, Tram) = weniger CO2 pro Person als Solo-Auto.",
        "**E-Mobilitaet:** E-Autos, E-Bikes — Akkus & Ladeinfrastruktur wachsen.",
        "Verkehrswende: weniger Stau, saubere Luft, lebenswerte Staedte.",
        "Zu Fuss oder Rad fuer kurze Wege — Bewegung inklusive."
      ]
    },
    {
      keys: ["achtsamkeit", "meditation", "mindfulness", "entspannung", "yoga"],
      answers: [
        "**Achtsamkeit** = bewusst im Moment sein — ohne zu bewerten. Reduziert Stress.",
        "**Meditation:** Atem beobachten, Gedanken kommen & gehen lassen. 5-10 Min taeglich reichen oft.",
        "**Yoga** verbindet Bewegung, Atem, Entspannung — Koerper und Kopf.",
        "Nicht esoterisch Pflicht — wissenschaftlich Studien zu Stressreduktion.",
        "NOCO Focus-Modus = digitale Achtsamkeit — weniger Ablenkung beim Arbeiten."
      ]
    },
    {
      keys: ["freundschaft", "beziehung", "konflikt", "streit", "kommunikation"],
      answers: [
        "**Freundschaft** = Vertrauen, gemeinsame Zeit, Unterstuetzung. Qualitaet wichtiger als Quantitaet.",
        "**Konflikte** normal — wichtig: Ich-Botschaften, zuhoeren, Pause wenn noetig.",
        "Kommunikation: klar sagen was du brauchst, Grenzen respektieren.",
        "Online vs offline: echte Begegnungen staerken Bindungen — Chats ergaenzen.",
        "Bei Mobbing oder Gewalt: Hilfe holen — Erwachsene, Beratungsstellen."
      ]
    },
    {
      keys: ["kochen", "rezept", "essen", "kueche", "vegetarisch", "vegan"],
      answers: [
        "**Kochen** = Kreativitaet + Chemie. Grundlagen: schneiden, braten, wuerzen, timing.",
        "Ausgewogene Ernaehrung: Gemuese, Proteine, Kohlenhydrate, Fette — nicht extrem noetig.",
        "**Vegetarisch/Vegan:** pflanzlich, oft klimafreundlicher. B12 bei vegan beachten.",
        "Hygiene: Haende waschen, Fleisch durchgaren, Reste kuehl lagern.",
        "Gemeinsam kochen = sozial & lecker."
      ]
    },
    {
      keys: ["hobby", "freizeit", "basteln", "gaming", "sammeln"],
      answers: [
        "**Hobbys** erholen, foerdern Skills, machen Spass: Sport, Musik, Gaming, Basteln, Lesen.",
        "**Gaming:** Geschicklichkeit, Strategie, Story — Balance mit Bildschirmzeit (NOCO Focus!).",
        "Kreativ-Hobbys: Zeichnen, Pixel Art (**NOCO Render**), Fotografie.",
        "Sammeln (Muenzen, Karten) lehrt Geduld & Geschichte.",
        "Freizeit bewusst planen — nicht nur Scrollen."
      ]
    },
    {
      keys: ["renaissance", "mittelalter", "aufklaerung", "reformation"],
      answers: [
        "**Mittelalter** (~500-1500): Burgen, Handel, Kirche, Städte wachsen. Feudalgesellschaft.",
        "**Renaissance** (~14.-16. Jh.): Kunst (Da Vinci, Michelangelo), Humanismus, Wissenschaft.",
        "**Reformation** (1517): Luther — Kirchenspaltung, Buchdruck verbreitet Ideen.",
        "**Aufklaerung** (18. Jh.): Vernunft, Rechte, Wissenschaft — Basis moderner Demokratie.",
        "Geschichte = Ketten von Ideen und Ereignissen — erklaert heutige Welt."
      ]
    },
    {
      keys: ["frauenrechte", "gleichstellung", "feminismus", "gender"],
      answers: [
        "**Gleichstellung** = gleiche Rechte und Chancen unabhaengig vom Geschlecht.",
        "Frauenrechte: Wahlrecht (in DE 1918), Bildung, Arbeit, Schutz vor Gewalt.",
        "**Feminismus** fordert strukturelle Gleichheit — nicht ueber einen Kamm scheren.",
        "**Gender** = soziale Rollen — Diskussion um Identitaet, Sprache, Repraesentation.",
        "Respektvoller Dialog wichtig — Rechte fuer alle Menschen."
      ]
    },
    {
      keys: ["devforge", "etherlab", "noco deck", "sessionvault"],
      answers: [
        "**DevForge** in NOCO OS Einstellungen: Beta/Developer-Features per Code freischalten.",
        "**EtherLab:** experimentelle Netzwerk-/System-Tools im NOCO OS Setting-Bereich.",
        "**NOCO Deck** = Einstellungs-Uebersicht. **SessionVault** = Sitzungs-Verwaltung.",
        "Developer-Modus = Early Access Feeling wie bei echten OS-Betas.",
        "Nur in NOCO OS Workspace — nicht in NOCO AI, aber gleiches Universum."
      ]
    },
    {
      keys: ["noco feedback", "daumen", "thumbs", "bewertung antwort", "feedback system"],
      answers: [
        "**NOCO Feedback** = Daumen hoch/runter bei AI-Antworten. Eigene Mint-Gruen / Soft-Rot Icons im Liquid-Glass-Look.",
        "Feedback wird lokal gespeichert — kein Server. Hilft dir, gute Antworten zu markieren.",
        "Fixiertes Float-Menue — kein Scroll-Bug mehr (v2.x Fix).",
        "Kombiniere mit **Neu generieren** wenn Antwort nicht passt.",
        "Exclusive-Style: Mint-Gruen wie Premium-Badges."
      ]
    },
    {
      keys: ["export chat", "import chat", "chats sichern", "backup chat"],
      answers: [
        "**Chat-Export** in Einstellungen: alle Chats als JSON-Datei speichern.",
        "**Import:** JSON zurueckladen — Chats werden angehaengt.",
        "Alles lokal — du kontrollierst Backups (wie NOCO **Keycard** im OS).",
        "**Alle loeschen** mit Bestaetigung — danach neuer Chat.",
        "Tipp: regelmaessig exportieren vor Geraetewechsel."
      ]
    },
    {
      keys: ["noco theme", "theme app", "design app", "farben noco"],
      answers: [
        "**Theme-App** in NOCO Forge: Farben, Hintergruende, Liquid-Glass-Look anpassen.",
        "Exclusive-Themes nur mit **NOCO Exclusive** — Unlock-Animation.",
        "Liquid Glass 1.5 = Standard-Design-Sprache — Teal, Violet, Blur.",
        "NOCO AI Einstellungen: Glas-Intensitaet (Niedrig/Normal/Hoch).",
        "Design ist Teil des NOCO-Feelings — OS und AI visuell verbunden."
      ]
    },
    {
      keys: ["mathematik", "mathe", "rechnen", "algebra", "geometrie", "prozent"],
      answers: [
        "**Mathematik** = Wissenschaft von Zahlen, Formen, Mustern und logischem Denken.",
        "**Algebra:** Gleichungen mit Unbekannten (x). z.B. 2x + 3 = 7 → x = 2.",
        "**Geometrie:** Formen, Winkel, Flaeche, Volumen — Dreieck, Kreis, Kugel.",
        "**Prozent:** Anteil von 100. 20% von 50 = 10. Rabatte & Statistik nutzen das.",
        "Mathe trainiert strukturiertes Denken — auch in Programmierung & Physik wichtig."
      ]
    },
    {
      keys: ["geographie", "kontinente", "laender", "erdteile", "karte erde"],
      answers: [
        "**Geographie** = Erdkunde: Laender, Kontinente, Klima, Bevoelkerung, Ressourcen.",
        "**7 Kontinente:** Afrika, Antarktika, Asien, Australien/Ozeanien, Europa, Nordamerika, Suedamerika.",
        "**Deutschland** liegt in Europa — Bundeslaender, Hauptstadt Berlin.",
        "Karten lesen: Massstab, Hoehenlinien, Legende — Orientierung in der Welt.",
        "Klima & Vegetation haengen von Breitengrad, Meeresnaehe und Hoehe ab."
      ]
    },
    {
      keys: ["dinosaurier", "dino", "jura", "t-rex", "urzeit"],
      answers: [
        "**Dinosaurier** = ausgestorbene Reptilien, dominierten die Erde ~230-66 Mio. Jahre.",
        "Bekannt: **T-Rex**, Triceratops, Brachiosaurus, Velociraptor, Stegosaurus.",
        "**Jura/Kreide:** Zeitalter mit riesigen Pflanzenfressern und Raubtieren.",
        "Aussterben vermutlich durch Asteroid + Vulkanismus (~66 Mio. Jahre).",
        "NOCO Render: *Mach ein Bild von Dinosaurier* oder *T-Rex*."
      ]
    },
    {
      keys: ["photosynthese", "chlorophyll", "pflanze atmet", "blatt gruen"],
      answers: [
        "**Photosynthese** = Pflanzen wandeln Licht + CO2 + Wasser in Zucker und Sauerstoff.",
        "**Chlorophyll** (gruen) faengt Licht ein — in Chloroplasten der Zellen.",
        "Ohne Photosynthese kein Sauerstoff, keine Nahrungsketten — Basis des Lebens.",
        "Tag: Pflanzen produzieren O2. Nacht: leichte Atmung, weniger Produktion.",
        "Waelder & Algen sind wichtige CO2-Speicher — Klimaschutz relevant."
      ]
    },
    {
      keys: ["evolution", "darwin", "natuerliche selektion", "arten entstehen"],
      answers: [
        "**Evolution** = Arten veraendern sich ueber Generationen durch Variation & Selektion.",
        "**Charles Darwin** (1859): Natuerliche Selektion — vorteilhafte Merkmale bleiben.",
        "Mutation + Umwelt = Anpassung. z.B. Darwin-Finken auf Galapagos.",
        "Menschen & Affen teilen gemeinsame Vorfahren — nicht „Affen wurden Menschen“.",
        "Evolution erklaert Vielfalt des Lebens — wissenschaftlich breit bestaetigt."
      ]
    },
    {
      keys: ["elektrizitaet", "strom", "spannung", "batterie", "energie strom"],
      answers: [
        "**Elektrizitaet** = Bewegung elektrischer Ladung. Strom fliesst von Plus nach Minus (Konvention).",
        "**Spannung (Volt)** = Druck. **Stromstaerke (Ampere)** = Menge. **Widerstand (Ohm)** = Bremse.",
        "**Batterien** speichern chemische Energie → elektrisch. Akkus wiederaufladbar.",
        "Sicherheit: nie offene Kabel anfassen, Steckdosen schuetzen, Kurzschluss vermeiden.",
        "Erneuerbare Stromquellen: Solar, Wind, Wasser — fossile Brennstoffe begrenzt."
      ]
    },
    {
      keys: ["magnetismus", "magnet", "kompass", "erdmagnetfeld"],
      answers: [
        "**Magnetismus** = Kraft zwischen magnetischen Materialien (Eisen, Nickel, Kobalt).",
        "**Magnet:** Nord- & Suedpol — gleiche Pole stossen ab, ungleiche ziehen an.",
        "**Kompass** nutzt Erdmagnetfeld — zeigt ungefaehr Norden.",
        "Elektromagneten: Strom durch Spule erzeugt Magnetfeld — Motoren, Lautsprecher.",
        "MRI in Medizin nutzt starke Magnetfelder fuer Koerperbilder."
      ]
    },
    {
      keys: ["python", "python programmierung", "programmiersprache python"],
      answers: [
        "**Python** = beliebte Programmiersprache — lesbar, vielseitig, Einsteigerfreundlich.",
        "Einsatz: Web, Daten, KI, Automatisierung, Spiele, Scripting.",
        "Grundlagen: Variablen, if/else, Schleifen, Funktionen, Listen.",
        "print(\"Hallo\") — erste Zeile. Indentation (Einruecken) ist in Python Pflicht!",
        "Open Source — kostenlos. Kombiniert gut mit NOCO-Thema Programmierung."
      ]
    },
    {
      keys: ["html css", "webseite bauen", "frontend", "html lernen"],
      answers: [
        "**HTML** = Struktur einer Webseite (Ueberschriften, Text, Bilder, Links).",
        "**CSS** = Design (Farben, Layout, Schrift, Abstaende, Animationen).",
        "**JavaScript** = Interaktion (Klicks, Formulare, dynamische Inhalte).",
        "NOCO OS & NOCO AI sind HTML/CSS/JS — alles im Browser.",
        "Start: einfache .html Datei + style.css — Browser oeffnen und testen."
      ]
    },
    {
      keys: ["fotografie", "foto tipps", "kamera einstellungen", "belichtung"],
      answers: [
        "**Fotografie** = Licht einfangen. Drei Basics: **Belichtung**, **Schaerfe**, **Komposition**.",
        "**Belichtungsdreieck:** ISO (Empfindlichkeit), Blende (Tiefe), Verschluss (Bewegung).",
        "Regel der Drittel: Motiv nicht immer mittig — dynamischer.",
        "Licht ist alles: Goldene Stunde (Sonnenauf/untergang) = weiches Licht.",
        "Smartphone-Fotos: Linse sauber, HDR bei Kontrast, nicht zoomen wenn unscharf."
      ]
    },
    {
      keys: ["schwarzes loch", "black hole", "event horizon", "gravitation extrem"],
      answers: [
        "**Schwarzes Loch** = Region mit so starker Gravitation, dass nicht mal Licht entkommt.",
        "**Ereignishorizont** = Grenze — dahinter keine Rueckkehr.",
        "Entstehen wenn sehr massereiche Sterne kollabieren oder durch Verschmelzung.",
        "Erstes Bild (Event Horizon Telescope, 2019) — M87*-Galaxie.",
        "Keine Science-Fiction-Portale — aber spannend fuer Astronomie & Physik."
      ]
    },
    {
      keys: ["ozean", "meeresbiologie", "tiefsee", "korallenriff", "plankton"],
      answers: [
        "**Ozeane** bedecken ~71% der Erde — regulieren Klima, speichern CO2, liefern Sauerstoff.",
        "**Plankton** = Basis der Meeresnahrungkette + viel Photosynthese im Meer.",
        "**Korallenriffe** = artenreiche Oekosysteme — bedroht durch Erwaermung & Versauerung.",
        "**Tiefsee:** Dunkel, hoher Druck — eigenwillige Lebewesen (Anglerfisch, Riesenkalmar).",
        "Meeresschutz: weniger Plastik, nachhaltiger Fischfang, Schutzgebiete."
      ]
    },
    {
      keys: ["weltraum", "iss", "raumfahrt", "nasa", "esa", "mond mission"],
      answers: [
        "**Raumfahrt** = Erkundung mit Raketen, Satelliten, Raumstationen, Sonden.",
        "**ISS** = Internationale Raumstation — Astronauten in Erdumlaufbahn.",
        "Meilensteine: Apollo 11 (Mond 1969), Hubble, Mars-Rover, SpaceX Falcon.",
        "Satelliten: Wetter, GPS, Kommunikation, Erdbeobachtung.",
        "Zukunft: Mondbasis, Mars-Missionen, kommerzielle Raumfluege."
      ]
    },
    {
      keys: ["giraffe", "zebra", "elefant afrika", "safari tiere"],
      answers: [
        "**Giraffe** = hoechstes Landtier — langer Hals, Afrika, Blaetter in Baumkronen.",
        "**Zebra** = Pferdeverwandte mit Streifen — Tarnung & Sozialverhalten.",
        "**Elefant** = groesstes Landtier — Herden, Intelligenz, Rüssel.",
        "Savanne & Nationalparks in Afrika — bedroht durch Lebensraumverlust & Wilderei.",
        "NOCO Render: *Mach ein Bild von Giraffe*, *Zebra* oder *Elefant*."
      ]
    },
    {
      keys: ["helicopter", "hubschrauber", "motorrad", "fahrzeug typen"],
      answers: [
        "**Hubschrauber** = Drehfluegler — senkrecht starten, Rotor liefert Auftrieb.",
        "**Motorrad** = zweiradrig, wendig — Schutzkleidung & Fuehrerschein wichtig.",
        "Fahrzeuge: Auto, Bus, Zug, Flugzeug, Schiff — je nach Transportbedarf.",
        "Elektroautos & OePNV reduzieren Emissionen im Staedteverkehr.",
        "Render: *Hubschrauber*, *Motorrad*, *Zug*, *Flugzeug* im Chat."
      ]
    },
    {
      keys: ["welche bilder", "welche motive", "was kann ich rendern", "bilder liste", "render motive", "einfache bilder"],
      answers: [
        "**NOCO Render** kennt **3600 Motive** — einfache Woerter im Chat: *Mach ein Bild von …*",
        "**Tiere:** Katze, Hund, Pferd, Giraffe, Zebra, Koala, Panda, Pinguin, Wal, Drache, Einhorn, Flamingo …",
        "**Obst/Essen:** Apfel, Banane, Pizza, Sushi, Burger, Donut, Avocado, Ramen, Kaffee …",
        "**Natur:** Sonne, Mond, Berg, Meer, Vulkan, Strand, Dschungel, Koralle, Regenbogen …",
        "**Tech/Sport:** Roboter, Rakete, Drohne, Laptop, Fussball, Stadion, Windrad, Cyberpunk …",
        "**Fantasy/Reise:** Ritter, Pyramide, Eiffelturm, Wikinger-Schiff, Vampir, Laterne …",
        "**Neu:** Vue, AWS, Flutter, Kita, Bundesrat, Insulin, WebSocket, Terraform …",
        "Tipp: kurz & klar — *Mach ein Bild von Koala* oder *Zeichne mir ein Bild von Ritter*."
      ]
    },
    {
      keys: ["koala", "känguru", "lama tier", "exotische tiere"],
      answers: [
        "**Koala** = Beuteltier aus Australien — lebt von Eukalyptus, schlaeft viel.",
        "**Känguru** = Springbeutler — trägt Junges im Beutel.",
        "**Lama** = Anden-Tier — Wolle, Lasttiere, freundlich (nicht mit Alpaka verwechseln).",
        "Exotische Tiere brauchen spezielle Lebensraeume — Artenschutz wichtig.",
        "Render: *Koala*, *Känguru*, *Lama*, *Panda*, *Faultier* funktionieren."
      ]
    },
    {
      keys: ["feuerwerk", "silvester", "party", "konfetti"],
      answers: [
        "**Feuerwerk** = kontrollierte Explosionen mit Farbstoffen — Silvester & Feste.",
        "Sicherheit: nur erlaubte Ware, Abstand, Kinder beaufsichtigen, Tiere schuetzen.",
        "Umwelt: Feinstaub & Laerm — Alternativen: Drohnen-Shows, Laser.",
        "Render: *Mach ein Bild von Feuerwerk* oder *Konfetti*.",
        "Konfetti & Party = Feststimmung — Render-Motive verfuegbar."
      ]
    },
    {
      keys: ["musik instrumente", "klavier", "gitarre lernen", "orchester"],
      answers: [
        "**Musikinstrumente:** Streich (Geige), Blas (Trompete), Tasten (Klavier), Schlag (Trommel).",
        "**Klavier** = Tasten + Haemmer auf Saiten — Basis fuer Musiktheorie.",
        "**Gitarre** = Saiten zupfen/streichen — Pop, Rock, Klassik.",
        "Üben: kurz aber regelmaessig. Metronom fuer Rhythmus.",
        "Render: *Gitarre*, *Klavier*, *Trompete*, *Trommel* als Motive."
      ]
    },
    {
      keys: ["zeitreise", "zeit paradox", "vergangenheit zukunft", "philosophie zeit"],
      answers: [
        "**Zeit** in Physik: vierte Dimension — relativ zu Geschwindigkeit & Gravitation (Relativitaet).",
        "**Zeitreise** in Fiktion beliebt — wissenschaftlich ungeloest, paradox (Großvater-Paradox).",
        "Philosophisch: Vergangenheit nicht aenderbar, Zukunft offen — Gegenwart handeln.",
        "Zeitzonen: Erde in 24 Sektoren — UTC als Referenz.",
        "Spannend in Filmen & Spielen — NOCO Vault erklaert Konzepte, keine echte Zeitreise."
      ]
    },
    {
      keys: ["logik", "denken", "kritisches denken", "argumentation"],
      answers: [
        "**Logik** = korrektes Schlussfolgern. Praemisse → Schlussfolgerung.",
        "**Kritisches Denken:** Quellen pruefen, Bias erkennen, Gegenargumente suchen.",
        "Denkfehler: Strohmann, falsche Dichotomie, Ad-hominem Angriff.",
        "Mathe & Programmierung trainieren logisches Denken.",
        "Bei News & Social Media: Wer sagt das? Welche Evidenz? NOCO Lens hilft bei Begriffen."
      ]
    },
    {
      keys: ["barrierefreiheit", "inklusion digital", "screenreader", "barrierefrei"],
      answers: [
        "**Barrierefreiheit** = Produkte fuer alle nutzbar — auch mit Behinderung oder Einschraenkung.",
        "Digital: Alt-Texte fuer Bilder, Tastatur-Navigation, Kontrast, Untertitel.",
        "**Screenreader** lesen UI vor — wichtig fuer blinde Nutzer.",
        "Gesetze (z.B. BITV in DE) fordern zunehmend Barrierefreiheit im Web.",
        "Gute UX hilft allen — klare Sprache, grosse Klickflaechen, Lesbarkeit."
      ]
    },
    {
      keys: ["nutzungsbedingungen", "terms of service", "tos", "agb", "bedingungen"],
      answers: [
        "**Nutzungsbedingungen** in NOCO AI: Beim ersten Oeffnen der Einstellungen — Kurzfassung + **Mehr anzeigen** fuer vollen Text.",
        "Inhalt: simulierte KI, lokale Daten, fake Exclusive/Pay, keine Haftung, kein echtes Geld.",
        "Akzeptanz wird in localStorage gespeichert. Jederzeit unter Einstellungen → Nutzungsbedingungen nachlesbar.",
        "Transparenz statt blindem Haken — du siehst was du akzeptierst.",
        "NOCO AI = Unterhaltung & NOCO-Wissen, kein medizinischer/rechtlicher Ersatz."
      ]
    },
    {
      keys: ["fussball", "football", "soccer", "wm", "bundesliga", "tor schiessen"],
      answers: [
        "**Fussball** = weltweit beliebtester Teamsport. 11 vs 11, Tor schiessen, Regeln (Abseits, Fouls).",
        "**WM** alle 4 Jahre (FIFA). **Bundesliga** = deutsche Spitzenliga.",
        "Skills: Passspiel, Dribbling, Ausdauer, Teamwork — Training & Fair Play.",
        "Beruehmte Turniere: Champions League, EM, WM. Legenden: Pelé, Messi, Ronaldo.",
        "NOCO Render: *Mach ein Bild von Fussball* — Ball-Motiv."
      ]
    },
    {
      keys: ["sport", "training", "fitness", "workout", "ausdauer"],
      answers: [
        "**Sport** staerkt Herz, Muskeln, Koordination und mentale Gesundheit.",
        "Grundlagen: Aufwaermen, Technik, Regeneration, ausreichend Schlaf & Wasser.",
        "Home-Workout: Liegestuetze, Kniebeugen, Planks — kein Gym noetig.",
        "Uebertraining vermeiden — Pausen sind Teil des Fortschritts.",
        "Kombiniere mit Ernaehrung & Schlaf fuer beste Ergebnisse."
      ]
    },
    {
      keys: ["periodensystem", "chemische elemente", "periodic table", "elemente liste"],
      answers: [
        "**Periodensystem** ordnet alle chemischen Elemente nach Ordnungszahl & Eigenschaften.",
        "Wichtige Elemente: **H** Wasserstoff, **O** Sauerstoff, **C** Kohlenstoff, **Fe** Eisen, **Au** Gold.",
        "Perioden = Zeilen (Schalen), Gruppen = Spalten (aehnliche Eigenschaften).",
        "Edelgase (rechts) reagieren kaum. Alkalimetalle (links) sehr reaktiv.",
        "Chemie erklaert Materie — von Wasser (H2O) bis Medikamenten."
      ]
    },
    {
      keys: ["maschinelles lernen", "machine learning", "deep learning", "neuronales netz", "ml ki"],
      answers: [
        "**Machine Learning** = Programme lernen aus Daten statt nur feste Regeln.",
        "**Deep Learning** nutzt kuenstliche Neuronennetze — Bilder, Sprache, Text.",
        "Training braucht viele Beispiele + Rechenpower (GPU). Overfitting = zu sehr auf Trainingsdaten.",
        "**NOCO AI** ist **kein** ML — regelbasierte Vault. Echte KI (ChatGPT) nutzt ML.",
        "Ethisch wichtig: Bias in Daten, Datenschutz, Transparenz."
      ]
    },
    {
      keys: ["cybersecurity", "hacker", "passwort sicher", "phishing", "malware"],
      answers: [
        "**Cybersecurity** schuetzt Systeme vor Angriffen: Viren, Phishing, Ransomware.",
        "**Phishing** = gefaelschte Mails/Seiten die Passwoerter stehlen. Immer URL pruefen!",
        "Starke Passwoerter + **2FA** (Zwei-Faktor). Passwort-Manager helfen.",
        "Updates installieren, keine unbekannten Anhaenge oeffnen, Backup machen.",
        "NOCO Security im OS = Simulation — echte Welt braucht echte Vorsicht."
      ]
    },
    {
      keys: ["smartphone", "handy", "android", "ios", "apps"],
      answers: [
        "**Smartphone** = Computer in der Tasche. Telefon, Kamera, Apps, Internet.",
        "**Android** (Google) vs **iOS** (Apple) — verschiedene Oekosysteme.",
        "Apps aus offiziellen Stores laden. Berechtigungen kritisch pruefen.",
        "Bildschirmzeit bewusst nutzen — NOCO Focus als Vorbild fuer Fokus.",
        "Sicherheit: PIN/Face-ID, Find-my-Phone, keine oeffentlichen WLANs fuer Banking."
      ]
    },
    {
      keys: ["social media", "instagram", "tiktok", "youtube", "influencer"],
      answers: [
        "**Social Media** verbindet Menschen — aber auch Algorithmen, Filterblasen, Druck.",
        "Plattformen: Instagram (Bilder), TikTok (Kurzvideo), YouTube (Video), X (Text).",
        "**Influencer** = Reichweite & Werbung — kritisch hinterfragen was Werbung ist.",
        "Tipps: Privatsphaere-Einstellungen, keine persoenlichen Daten an Fremde, Pausen.",
        "Fake News & Cybermobbing — melden, blockieren, Erwachsene einbeziehen."
      ]
    },
    {
      keys: ["algorithmus", "algorithmen", "sortieren", "suchalgorithmus"],
      answers: [
        "**Algorithmus** = Schritt-fuer-Schritt-Anleitung zur Loesung eines Problems.",
        "Beispiele: Navigation (kuerzester Weg), Google-Suche, Empfehlungen bei Netflix.",
        "Informatik: Sortieren, Suchen, Graphen — Effizienz zaehlt (Big O).",
        "NOCO Vault nutzt Keyword-Matching — ein einfacher Such-Algorithmus.",
        "Gute Algorithmen sind klar, korrekt und moeglichst schnell."
      ]
    },
    {
      keys: ["javascript", "js programmierung", "nodejs", "web entwicklung"],
      answers: [
        "**JavaScript** = Sprache des Webs — laeuft im Browser (und mit Node.js auf Servern).",
        "DOM-Manipulation: Buttons, Formulare, Animationen. NOCO AI = HTML + CSS + JS.",
        "Grundlagen: let/const, Funktionen, Arrays, Objekte, fetch fuer APIs.",
        "Frameworks: React, Vue, Svelte — bauen auf JS auf.",
        "Zusammen mit HTML/CSS die Basis fast jeder modernen Web-App."
      ]
    },
    {
      keys: ["3d druck", "3d printing", "drucker filament", "maker"],
      answers: [
        "**3D-Druck** baut Objekte Schicht fuer Schicht — oft aus Kunststoff-Filament.",
        "Anwendungen: Prototypen, Ersatzteile, Medizin, Architekturmodelle, Hobby.",
        "STL-Datei → Slicer-Software → Drucker. Lernkurve: Temperatur, Stuetzen, Qualitaet.",
        "**Maker-Kultur:** Open Hardware, Tinker, Reparieren statt Wegwerfen.",
        "Zukunft: Metall-3D-Druck, Bioprinting — noch in Entwicklung."
      ]
    },
    {
      keys: ["drohne", "drone", "quadcopter", "luftbild"],
      answers: [
        "**Drohne** = ferngesteuertes Fluggeraet — Fotos, Lieferung, Inspektion, Hobby.",
        "Regeln in DE: Drohnenfuehrerschein ab Gewicht, Flughoehen, Abstand zu Menschen.",
        "Technik: 4 Rotoren, GPS, Stabilisierung, Akkulaufzeit begrenzt.",
        "Ethisch: Privatsphaere, Laerm, Sicherheit — verantwortungsvoll fliegen.",
        "NOCO Render: *Mach ein Bild von Drohne* moeglich."
      ]
    },
    {
      keys: ["solar", "solarenergie", "photovoltaik", "solarzelle", "sonnenenergie"],
      answers: [
        "**Solarenergie** wandelt Sonnenlicht in Strom (Photovoltaik) oder Waerme.",
        "Vorteile: erneuerbar, lokal, wenig CO2 im Betrieb. Nacht/Wolken = Speicher noetig.",
        "Dachanlagen, Solarfelder, Balkonkraftwerke — wachsen stark.",
        "Kombination mit Wind & Speichern = stabiles Oekosystem-Stromnetz.",
        "Frag auch: Erneuerbare Energie, Klimawandel."
      ]
    },
    {
      keys: ["windkraft", "windrad", "windenergie", "windpark"],
      answers: [
        "**Windenergie** nutzt Luftbewegung — Windraeder erzeugen Strom.",
        "Onshore (Land) vs Offshore (Meer). Deutschland ist Wind-Vorreiter in Europa.",
        "Vorteile: CO2-arm. Debatte: Landschaft, Tiere (Voegel), Laerm — Planung wichtig.",
        "Speicher & Netzausbau noetig fuer konstante Versorgung.",
        "NOCO Render: *Windrad* / *Windpark* als Motive."
      ]
    },
    {
      keys: ["insekten", "insekt", "biene bestaeubung", "schmetterling leben", "ameise"],
      answers: [
        "**Insekten** = groesste Tiergruppe — Fluegel, 6 Beine, oft kurzer Lebenszyklus.",
        "**Bienen** bestaeuben Pflanzen — essentiell fuer Ernte & Oekosystem.",
        "**Schmetterlinge:** Metamorphose (Raupe → Puppe → Falter).",
        "**Ameisen:** Staaten, Arbeitsteilung, enorme Biomasse.",
        "Insektensterben bedroht — weniger Pestizide, mehr Blumenwiesen."
      ]
    },
    {
      keys: ["garten", "gaertnern", "pflanzen pflegen", "gemuese anbau", "kompost"],
      answers: [
        "**Garten** = Natur vor der Haustuer. Blumen, Gemuese, Kraeuter, Bienenfreundlich.",
        "Basics: Boden, Licht, giessen (nicht zu viel!), Jahreszeiten beachten.",
        "**Kompost** verwertet Kuechenreste → fruchtbarer Boden.",
        "Hochbeet, Balkon-Tomaten — auch ohne grossen Garten moeglich.",
        "Geduld lohnt — Pflanzen wachsen in ihrer Zeit."
      ]
    },
    {
      keys: ["einhorn", "unicorn", "mythen", "fantasy", "maerchen"],
      answers: [
        "**Einhorn** = mythisches Pferd mit Horn — Symbol fuer Reinheit & Magie.",
        "Fantasy: Harry Potter, My Little Pony, Spiele — beliebtes Motiv.",
        "**Maerchen** lehren Moral in fantastischen Geschichten (Grimm, Andersen).",
        "NOCO Render: *Mach ein Bild von Einhorn* — pinkes Pony-Motiv.",
        "Fantasy inspiriert Kreativitaet — Render, Kunst, Schreiben."
      ]
    },
    {
      keys: ["superheld", "superman", "batman", "spiderman", "marvel", "comic"],
      answers: [
        "**Superhelden** = Comic-Figuren mit besonderen Kraeften & Moralcode.",
        "Marvel: Spider-Man, Iron Man, Avengers. DC: Batman, Superman, Wonder Woman.",
        "Comics → Filme → globale Popkultur. Themen: Verantwortung, Identitaet, Gut vs Boese.",
        "Cosplay & Fan-Art — Kreativitaet der Community.",
        "Render-Ideen: *Held*, *Maske*, *Cape* — einfache Woerter probieren."
      ]
    },
    {
      keys: ["minecraft", "gaming", "videospiel", "spiele konsole", "nintendo"],
      answers: [
        "**Videospiele** = interaktive Unterhaltung — PC, Konsole, Handy.",
        "**Minecraft** = Sandbox-Bauwelt aus Bloecken — Kreativitaet & Survival.",
        "Nintendo (Switch), PlayStation, Xbox — verschiedene Exklusiv-Titel.",
        "Gaming kann sozial, strategisch, entspannend sein — Balance mit Real Life.",
        "NOCO OS hat Minispiele in Forge — aehnliches Hobby-Feeling."
      ]
    },
    {
      keys: ["zeitmanagement", "produktivitaet", "todo liste", "fokus arbeit", "pomodoro"],
      answers: [
        "**Zeitmanagement** = wichtige Dinge zuerst. Kalender, To-do-Listen, Prioritaeten.",
        "**Pomodoro:** 25 Min Fokus, 5 Min Pause — gegen Ablenkung.",
        "Grosse Aufgaben in kleine Schritte teilen. Eine Sache gleichzeitig.",
        "NOCO Focus im OS = Gaming/Produktivitaet sperren — gutes Vorbild.",
        "Perfektionismus bremsen — *gut genug* und weiter."
      ]
    },
    {
      keys: ["burnout", "stress arbeit", "ueberlastung", "erschöpfung", "erschoepfung"],
      answers: [
        "**Burnout** = tiefe Erschoepfung durch dauernden Stress — koerperlich & mental.",
        "Warnsignale: Muedigkeit, Zynismus, Leistungsabfall, Schlafprobleme.",
        "Gegenmittel: Grenzen setzen, Pausen, Hilfe holen, Hobbys, Bewegung.",
        "Arbeitgeber & Aerzte koennen unterstuetzen — kein Schamthema.",
        "NOCO AI informiert — bei akuter Krise: Telefonseelsorge **0800 111 0 111**."
      ]
    },
    {
      keys: ["relativitaet", "einstein", "e=mc2", "raumzeit", "lichtgeschwindigkeit"],
      answers: [
        "**Albert Einstein** revolutionierte Physik: Relativitaetstheorie.",
        "**E=mc²:** Masse und Energie sind verwandt — Kernenergie, Sterne.",
        "**Spezielle Relativitaet:** Lichtgeschwindigkeit konstant, Zeit laeuft relativ.",
        "**Allgemeine Relativitaet:** Gravitation = gekruemmte Raumzeit (schwarze Loecher!).",
        "GPS-Satelliten muessen Relativitaet beruecksichtigen — Alltagstechnik!"
      ]
    },
    {
      keys: ["antike griechenland", "griechen", "sparta", "athen", "olympia"],
      answers: [
        "**Antikes Griechenland** = Wiege der Demokratie, Philosophie, Olympischen Spiele.",
        "**Athen:** Demokratie, Philosophie (Platon, Aristoteles). **Sparta:** Militaerstaat.",
        "Mythen: Zeus, Hera, Odysseus — prägten Kunst & Literatur.",
        "Olympia: Sport & Goetterehre — Ursprung moderner Olympiade.",
        "Architektur: Tempel mit Saeulen (Parthenon-Vorbild)."
      ]
    },
    {
      keys: ["roemisches reich", "roemer", "caesar", "kolosseum roemisch"],
      answers: [
        "**Roemisches Reich** dominierte Europa/Nordafrika ueber Jahrhunderte.",
        "**Caesar** — Politiker & Feldherr. Imperium unter Augustus.",
        "Errungenschaften: Strassen, Recht, Aquaedukte, Latein.",
        "**Kolosseum** in Rom — Arena & Symbol der Macht.",
        "NOCO Render: *Kolosseum*, *Tempel*, *Römer* als Motive."
      ]
    },
    {
      keys: ["deutschland bundeslaender", "bundesland", "hauptstaedte deutschland", "16 laender"],
      answers: [
        "**Deutschland** hat **16 Bundeslaender** — jedes mit eigener Regierung.",
        "Groesste: Bayern, Niedersachsen. Kleinstes: Bremen (Stadtstaat).",
        "**Berlin** = Bundeshauptstadt. Andere: Hamburg, Muenchen, Koeln, Frankfurt…",
        "Foederalismus: Bund + Laender teilen Aufgaben (Schule oft Landessache).",
        "Frag auch: Geographie, EU, Geschichte."
      ]
    },
    {
      keys: ["europa union", "eu laender", "euro waehrung", "schengen", "bruessel"],
      answers: [
        "**EU** = politische & wirtschaftliche Union europaeischer Staaten.",
        "**Euro** = gemeinsame Waehrung in vielen Laendern (nicht alle EU-Staaten).",
        "**Schengen:** Grenzenlose Reise zwischen vielen Mitgliedern.",
        "Ziele: Frieden, Handel, Standards, Foerderprogramme.",
        "Deutschland = zentrales Mitglied — Bruessel = Sitz wichtiger Institutionen."
      ]
    },
    {
      keys: ["muelltrennung", "recycling deutschland", "gelber sack", "biomuell", "wertstoff"],
      answers: [
        "**Muelltrennung** in DE: Restmuell, Papier, Gelber Sack (Verpackung), Bio, Glas (Farben).",
        "Recycling spart Rohstoffe & Energie — aber nur wenn richtig sortiert.",
        "Bio = Kompost. Elektroschrott & Batterien = Sammelstellen.",
        "Mehrweg > Einweg. Pfandflaschen zurueckgeben.",
        "Weniger Muell entstehen (Nachhaltigkeit) ist noch besser als trennen."
      ]
    },
    {
      keys: ["zeichnen lernen", "skizze", "malen tipps", "perspektive zeichnen"],
      answers: [
        "**Zeichnen** trainierbar — Beobachtung wichtiger als „Talent“.",
        "Basics: Formen (Kreis, Wuerfel), Schatten, Perspektive (Fluchtpunkt).",
        "Taeglich 10 Min skizzieren — Proportionen verbessern sich.",
        "Referenzbilder nutzen. Anatomie bei Figuren hilft.",
        "Digital: Tablet + Stift. Oder **NOCO Render** fuer Pixel-Kunst."
      ]
    },
    {
      keys: ["podcast", "hoerbuch", "audiobook", "hoeren lernen"],
      answers: [
        "**Podcasts** = Audio-Sendungen on demand — News, Comedy, Wissenschaft, Story.",
        "**Hoerbuecher** = gelesene Buecher — ideal beim Pendeln, Sport, Einschlafen.",
        "Lern-Podcasts: Sprachen, Geschichte, Tech. Kritisch Quellen pruefen.",
        "Vorteil: Augen frei, Multitasking. Nachteil: weniger Tiefe als Lesen.",
        "Kombiniere mit Lesen fuer bestes Wissen."
      ]
    },
    {
      keys: ["wandern", "bergsteigen", "trekking", "outdoor", "camping"],
      answers: [
        "**Wandern** = Natur erleben zu Fuss. Schuhe, Wasser, Karte, Wetter checken.",
        "**Bergsteigen** braucht Erfahrung, Ausruestung, Wetterkenntnis — Sicherheit first.",
        "**Camping:** Zelt, Feuerregeln, Leave-no-trace (Muell mitnehmen).",
        "Deutschland: Alpen, Schwarzwald, Harz — markierte Wege nutzen.",
        "Render: *Berg*, *Zelt*, *Kompass*, *Wanderweg*."
      ]
    },
    {
      keys: ["wikinger", "viking", "nordmann", "langschiff"],
      answers: [
        "**Wikinger** = skandinavische Seefahrer & Krieger (~800-1100 n.Chr.). Handel, Siedlungen, Mythen (Odin, Thor).",
        "Langschiffe = schnelle Boote. Funde in Haithabu, Oslo, York.",
        "Heute: Kultur, Museen, Serien — aber echte Geschichte war komplexer als nur Raueber.",
        "Verwandt: Mittelalter, Nordsee, Schiffe.",
        "Render: *Schiff*, *Schwert*, *Kompass*, *Drache*."
      ]
    },
    {
      keys: ["schach", "chess", "schachspiel", "schach figuren"],
      answers: [
        "**Schach** = strategisches Brettspiel. Ziel: gegnerischen Koenig matt setzen.",
        "Figuren: Bauer, Turm, Laeufer, Springer, Dame, Koenig — jede bewegt sich anders.",
        "Trainiert Vorausdenken, Geduld, Mustererkennung — auch KI-Meilenstein (Deep Blue).",
        "Eröffnung, Mittelspiel, Endspiel — Phasen mit eigenen Strategien.",
        "Render: *Schachkoenig*, *Puzzle*, *Strategie*."
      ]
    },
    {
      keys: ["olympische spiele", "olympia", "olympics", "olympiade"],
      answers: [
        "**Olympische Spiele** = groesstes internationales Sportevent — Sommer & Winter alle 4 Jahre.",
        "Ursprung: Antikes Griechenland. Heute: viele Sportarten, Laenderwettbewerb, Fair Play.",
        "Symbole: Fuenf Ringe, Fackel, Olympia-Eide. Paralympics = inklusiver Sport.",
        "Beruehmte Momente: Jesse Owens, Usain Bolt, deutsche Erfolge im Rudern & Skisport.",
        "Render: *Fackel*, *Medaille*, *Stadion*, *Fussball*."
      ]
    },
    {
      keys: ["erste hilfe", "notfall", "reanimation", "wunden versorgen"],
      answers: [
        "**Erste Hilfe** = Sofortmassnahmen bis professionelle Hilfe kommt.",
        "Wichtig: Eigenschutz, 112 rufen, Lage einschaetzen, stabile Seitenlage bei Bewusstlosigkeit.",
        "**Herzdruckmassage:** 30x druecken, 2x beatmen (wenn geschult) — AED wenn vorhanden.",
        "Bei Blutung: Druckverband. Bei Verbrennung: kuehlen, nicht einfetten.",
        "Kurs beim DRK/Johanniter lohnt sich — NOCO AI ersetzt keine Ausbildung."
      ]
    },
    {
      keys: ["notruf", "112", "feuerwehr ruf", "polizei notruf"],
      answers: [
        "**112** = europaeischer Notruf (Feuerwehr, Rettungsdienst). Polizei in DE oft **110**.",
        "Ruhig bleiben: **Wo?** Was? Wie viele Verletzte? Warten auf Rueckfragen.",
        "Nur bei echten Notfaellen — Fehlalarme binden Ressourcen.",
        "Erste Hilfe bis Hilfe kommt kann Leben retten.",
        "Kinder frueh lernen: 112 waehlen & Adresse kennen."
      ]
    },
    {
      keys: ["wolken", "wolkenarten", "bewoelkung", "wetter wolken"],
      answers: [
        "**Wolken** = sichtbare Wassertraeufchen/Eiskristalle in der Luft.",
        "Arten: **Cumulus** (Schoenwetter), **Stratus** (grau, flach), **Cumulonimbus** (Gewitter).",
        "Wolkenbildung: Aufstieg feuchter Luft, Kondensation, Wind formt sie.",
        "Piloten & Meteorologen lesen Wolken fuer Wetterprognosen.",
        "Render: *Wolke*, *Gewitter*, *Regenbogen*, *Nebel*."
      ]
    },
    {
      keys: ["mondphasen", "vollmond", "neumond", "mondzyklus"],
      answers: [
        "**Mondphasen** wechseln in ~29,5 Tagen: Neumond → zunehmend → Vollmond → abnehmend.",
        "**Vollmond** = komplette erleuchtete Scheibe. **Neumond** = kaum sichtbar.",
        "Gezeiten (Ebbe/Flut) werden stark vom Mond beeinflusst.",
        "Kalender & Kulturen nutzten Mondzyklen seit Jahrtausenden.",
        "Render: *Mond*, *Nacht*, *Stern*, *Meer*."
      ]
    },
    {
      keys: ["sternbild", "sternbilder", "orion", "grosser wagen"],
      answers: [
        "**Sternbilder** = Muster aus Sternen am Nachthimmel — 88 offiziell definiert.",
        "Bekannt: **Orion**, **Grosser Wagen**, **Skorpion**, **Kassiopeia**.",
        "Hilfen bei Orientierung (Polarstern nahe Grosser Wagen im Norden).",
        "Mythologie: Griechen & Roemer benannten Figuren nach Legenden.",
        "Render: *Stern*, *Mond*, *Teleskop*, *Galaxie*."
      ]
    },
    {
      keys: ["esports", "e-sport", "gaming wettkampf", "twitch stream"],
      answers: [
        "**E-Sports** = professioneller Wettkampf in Videospielen — Teams, Turniere, Preisgelder.",
        "Beliebt: League of Legends, Counter-Strike, FIFA, Fortnite, Valorant.",
        "**Streaming** (Twitch, YouTube): Zuschauen, lernen, Community.",
        "Skills: Reflexe, Strategie, Teamplay — aber Balance mit Schlaf & Schule/Job.",
        "Render: *Controller*, *Gamepad*, *Roboter*, *Neon*."
      ]
    },
    {
      keys: ["rhetorik", "praesentation", "vortrag halten", "reden tipps"],
      answers: [
        "**Rhetorik** = Kunst der Ueberzeugung & klaren Rede.",
        "Struktur: Einleitung → Hauptpunkte → Schluss. Weniger Folien, mehr Botschaft.",
        "Blickkontakt, Pausen, laut & deutlich. Ueben vor Spiegel oder Freunden.",
        "Nervositaet normal — Atem beruhigen, Wasser trinken.",
        "Frag auch: Kommunikation, Konflikte, Smalltalk."
      ]
    },
    {
      keys: ["bundestag", "politik deutschland", "wahl", "demokratie wahl"],
      answers: [
        "**Bundestag** = deutsches Parlament — Abgeordnete werden gewaehlt (alle 4 Jahre).",
        "Demokratie: Waehlen, debattieren, Mehrheiten bilden, Regierung kontrollieren.",
        "Wichtig: informieren (mehrere Quellen), waehlen ab 18, respektvoll diskutieren.",
        "Opposition & Presse = wichtige Kontrolle der Macht.",
        "Frag: Demokratie, Menschenrechte, EU."
      ]
    },
    {
      keys: ["studium", "ausbildung", "uni", "berufswahl", "duales studium"],
      answers: [
        "**Ausbildung** = praxisnah mit IHK-Abschluss. **Studium** = akademisch (Bachelor/Master).",
        "**Duales Studium** = Uni + Firma abwechselnd — Theorie & Praxis.",
        "Berufswahl: Interessen, Staerken, Zukunftsfelder (Tech, Pflege, Handwerk, Kreativ).",
        "Bewerbung, Praktikum, Netzwerk — frueh starten.",
        "Frag: Karriere, Bewerbung, Programmierung."
      ]
    },
    {
      keys: ["waermepumpe", "energie sparen", "heizung", "daemmung", "strom sparen"],
      answers: [
        "**Waermepumpe** nutzt Umweltwaerme zum Heizen — effizient mit Strom aus erneuerbaren Quellen.",
        "**Daemmung** reduziert Heizkosten. **LED** spart Strom. Geraete nicht Stand-by.",
        "Heizung runter, Fenster zu, kurz lueften statt Kipplueftung dauerhaft.",
        "Energiekosten & Klima haengen zusammen — jeder Haushalt kann etwas tun.",
        "Frag: Nachhaltigkeit, Solarenergie, Windkraft."
      ]
    },
    {
      keys: ["ritter", "mittelalter ritter", "burg ritter", "turnier"],
      answers: [
        "**Ritter** = schwer gepanzerte Reiter im Mittelalter — Adel, Eide, Turniere.",
        "Burgen schuetzten Herrscher & Handelswege. Ritterromane = spaetere Idealisierung.",
        "Waffen: Schwert, Lanze, Schild. Ruestung aus Stahl — sehr schwer!",
        "Heute: Museen, Mittelaltermaerkte, Burgen als Ausflugsziele.",
        "Render: *Ritter*, *Schloss*, *Schwert*, *Pferd*, *Drache*."
      ]
    },
    {
      keys: ["mozart", "beethoven", "bach", "klassische musik", "komponist"],
      answers: [
        "**Klassische Musik** = Orchestrierung, Komposition, Epochen (Barock, Klassik, Romantik).",
        "**Mozart** (Wien), **Beethoven** (9. Sinfonie), **Bach** (Barock) — Ikonen.",
        "Instrumente: Klavier, Geige, Orchester. Noten lesen = eigene Sprache.",
        "Hoeren foerdert Konzentration & Emotion — von Oper bis Sinfonie.",
        "Render: *Klavier*, *Geige*, *Trompete*, *Oper*."
      ]
    },
    {
      keys: ["jazz", "blues", "soul musik", "improvisation musik"],
      answers: [
        "**Jazz** = Improvisation, Swing, Blues-Roots — USA, 20. Jh.",
        "**Blues** = emotionale Grundform mit 12-Takt-Schema. **Soul** = Gospel + Pop.",
        "Instrumente: Saxophon, Trompete, Kontrabass, Schlagzeug.",
        "Live-Jazz = Spontaneitaet — jedes Konzert einzigartig.",
        "Render: *Saxophon*, *Trompete*, *Gitarre*, *Mikrofon*."
      ]
    },
    {
      keys: ["k-pop", "kpop", "koreanische musik", "j-pop"],
      answers: [
        "**K-Pop** = koreanische Popmusik — Choreografie, MVs, globale Fandoms.",
        "Gruppen: BTS, Blackpink & viele mehr. Trainee-System, hohe Produktion.",
        "**J-Pop** = japanische Popkultur — Anime-Soundtracks, Idol-Gruppen.",
        "Kulturexport: Sprache, Mode, Dance-Challenges auf Social Media.",
        "Render: *Mikrofon*, *Disco*, *Neon*, *Smartphone*."
      ]
    },
    {
      keys: ["nationalpark", "naturpark", "yellowstone", "serengeti", "welterbe"],
      answers: [
        "**Nationalparks** schuetzen einzigartige Natur — wandern nur auf Wegen, Wildtiere nicht fuettern.",
        "Beispiele: **Yellowstone** (USA), **Serengeti** (Afrika), **Jasmund** (DE).",
        "**UNESCO-Welterbe** = Kultur & Natur von Weltbedeutung — Schutz & Bildung.",
        "Besucher foerdern Naturschutz durch Eintritt & Regeln befolgen.",
        "Render: *Berg*, *Wald*, *Geyser*, *Elefant*."
      ]
    },
    {
      keys: ["grand canyon", "niagara", "wunder der natur", "canyon"],
      answers: [
        "**Grand Canyon** (USA) = riesige Felsschlucht durch Erosion — Colorado River.",
        "**Niagarafaelle** = gewaltige Wasserfaelle an US/Kanada-Grenze.",
        "Erosion formt Landschaft ueber Millionen Jahre — Geologie live erleben.",
        "Schutz & Tourismus muessen Balance finden.",
        "Render: *Canyon*, *Wasserfall*, *Berg*, *Fluss*."
      ]
    },
    {
      keys: ["venedig", "paris", "london", "new york", "stadt reise"],
      answers: [
        "**Venedig** = Kanalstadt Italien — Gondeln, Piazza San Marco.",
        "**Paris** = Eiffelturm, Louvre. **London** = Big Ben, Thames.",
        "**New York** = Skyline, Central Park — Weltstadt pur.",
        "Reisen: Kultur, Sprache, Essen — offen bleiben, Respekt zeigen.",
        "Render: *Wolkenkratzer*, *Turm*, *Bruecke*, *Schiff*, *Stadt*."
      ]
    },
    {
      keys: ["imkerei", "honig biene", "bienenstock", "bestaeubung"],
      answers: [
        "**Imkerei** = Bienen halten fuer Honig & Bestaeubung.",
        "Ein Volk: Koenigin, Arbeiterinnen, Drohnen. Honig = eingedickter Nektar.",
        "Bienen wichtig fuer Obst & Gemuese — ohne sie weniger Ernte.",
        "Schutz: Blumenwiesen, weniger Pestizide.",
        "Render: *Biene*, *Blume*, *Wiese*."
      ]
    },
    {
      keys: ["aquarium", "terrarium", "reptilien", "hamster", "haustier pflege"],
      answers: [
        "**Aquarium** = Fische & Wasserpflege (Filter, Temperatur, Nitrat).",
        "**Terrarium** = Reptilien/Amphibien mit Waerme & Feuchtigkeit.",
        "**Hamster/Kaninchen:** artgerechtes Gehege, Bewegung, saubere Einstreu.",
        "Haustiere = Zeit + Geld + Verantwortung — nicht impulsiv kaufen.",
        "Render: *Fisch*, *Schildkroete*, *Hamster*, *Vogel*."
      ]
    },
    {
      keys: ["jahreszeiten", "fruehling", "sommer", "herbst", "winter jahreszeit"],
      answers: [
        "**Jahreszeiten** durch Erdachse & Umlauf um die Sonne.",
        "**Fruehling:** Blueten. **Sommer:** lange Tage. **Herbst:** Ernte. **Winter:** Schnee.",
        "Aequinoktien & Sonnenwenden markieren astronomische Wechsel.",
        "Klima beeinflusst Laenge & Intensitaet der Jahreszeiten.",
        "Render: *Blume*, *Schnee*, *Sonne*, *Regenschirm*."
      ]
    },
    {
      keys: ["tsunami", "hurrikan", "orkan", "naturkatastrophe", "erdbeben warnung"],
      answers: [
        "**Tsunami** = Riesenwelle nach Unterwasserbeben — Kuesten sofort evakuieren.",
        "**Hurrikan/Taifun** = tropischer Wirbelsturm mit Starkregen & Wind.",
        "Warnsysteme (Sirenen, Apps) ernst nehmen. Notfallkoffer sinnvoll.",
        "Hilfsorganisationen (UNO, Rotes Kreuz) leisten Katastrophenhilfe.",
        "Render: *Welle*, *Tornado*, *Vulkan*, *Sturm*."
      ]
    },
    {
      keys: ["cpu", "gpu", "prozessor", "grafikkarte", "computer teile"],
      answers: [
        "**CPU** = Zentrale Recheneinheit — Gehirn des PCs.",
        "**GPU** = Grafikkarte — Bilder, Gaming, KI-Training.",
        "Weitere Teile: **RAM**, **SSD**, Mainboard.",
        "Smartphones haben dieselben Bausteine — nur kleiner.",
        "Render: *Laptop*, *Monitor*, *Chip*, *Roboter*."
      ]
    },
    {
      keys: ["email", "e-mail", "spam mail", "phishing mail"],
      answers: [
        "**E-Mail** = digitale Post — weltweit, schnell, aber auch Spam & Phishing.",
        "Spam filtern, unbekannte Anhaenge nicht oeffnen, Absender pruefen.",
        "Phishing-Mail: Druck + falsche Links — Bank-Passwoerter nie per Mail.",
        "2FA & starke Passwoerter schuetzen Konten.",
        "Frag: Cybersecurity, Internet, Datenschutz."
      ]
    },
    {
      keys: ["qr code", "barcode", "nfc", "zahlung handy"],
      answers: [
        "**QR-Code** = quadratischer Barcode — schnell Links oeffnen (Handy-Kamera).",
        "**NFC** = Nahfeld-Kommunikation — kontaktlos zahlen, Tickets.",
        "Vorsicht: QR von unbekannten Quellen kann Phishing-Seiten oeffnen.",
        "Bezahl-Apps: praktisch, aber Geraet schuetzen (PIN, Updates).",
        "Render: *Smartphone*, *Chip*, *WLAN*."
      ]
    },
    {
      keys: ["formel 1", "f1", "rennwagen", "motorsport"],
      answers: [
        "**Formel 1** = hoechste Motorsport-Klasse — schnelle Monoposti, globale Strecken.",
        "Teams: Ferrari, Mercedes, Red Bull & mehr. Technik: Aerodynamik, Hybrid-Motoren.",
        "Sicherheit: Halo, Helme, Streckenregeln.",
        "Motorsport foerdert Ingenieurskunst.",
        "Render: *Auto*, *Rennwagen*, *Motorrad*, *Flagge*."
      ]
    },
    {
      keys: ["handball", "basketball", "volleyball", "teamsport"],
      answers: [
        "**Handball** = schnelles Teamsport mit Wurf auf Tor — beliebt in DE.",
        "**Basketball** = Korbwuerfe, NBA weltbekannt. **Volleyball** = Netz & Sprung.",
        "Gemeinsam: Teamwork, Training, Fair Play, Regeln.",
        "Sport verbindet — Vereine sind sozialer Treffpunkt.",
        "Render: *Handball*, *Basketball*, *Volleyball*, *Stadion*."
      ]
    },
    {
      keys: ["uno organisation", "vereinte nationen", "rotes kreuz", "ngos"],
      answers: [
        "**UNO** = Vereinte Nationen — Frieden, Menschenrechte, Hilfe weltweit.",
        "**Rotes Kreuz** = humanitaere Hilfe bei Katastrophen & Krieg.",
        "**NGOs** = Nichtregierungsorganisationen (WWF, Amnesty, Aertze ohne Grenzen).",
        "Ehrenamt & Spenden unterstuetzen globale Solidaritaet.",
        "Frag: Menschenrechte, Nachhaltigkeit, Demokratie."
      ]
    },
    {
      keys: ["kreatives schreiben", "geschichte schreiben", "roman idee", "fantasy schreiben"],
      answers: [
        "**Kreatives Schreiben** = Geschichten erfinden — Figuren, Konflikt, Welt, Stil.",
        "Start: kurze Szene, Dialog, oder Was waere wenn. Taeglich ein paar Saetze.",
        "Fantasy/Sci-Fi braucht Regeln fuer die Welt — Konsistenz macht glaubwuerdig.",
        "Ueberarbeiten ist Pflicht — erster Entwurf nie der letzte.",
        "Render inspiriert: *Drache*, *Schloss*, *Held*, *Roboter*."
      ]
    },
    {
      keys: ["anime", "manga", "japan animation", "studio ghibli"],
      answers: [
        "**Anime** = japanische Animation — von Kinder-Serien bis epischen Filmen.",
        "**Manga** = japanische Comics — oft Vorlage fuer Anime.",
        "Studio Ghibli weltberuehmt. Stile: Shonen, Shojo, Seinen.",
        "Render: *Drache*, *Katana*, *Pagode*, *Koi*."
      ]
    },
    {
      keys: ["pokemon", "pikachu", "pocket monsters"],
      answers: [
        "**Pokemon** = fiktive Kreaturen — fangen, trainieren, kaempfen.",
        "**Pikachu** = gelbes Maskottchen. Spiele & Karten weltweit populaer.",
        "Render: *Hamster*, *Blitz*, *Drache*."
      ]
    },
    {
      keys: ["wasserkreislauf", "trinkwasser", "grundwasser"],
      answers: [
        "**Wasserkreislauf:** Verdunstung → Wolken → Regen → Fluesse → Meer.",
        "Trinkwasser lebenswichtig — sparsam nutzen, sauber halten.",
        "Frag: Oekologie, Ozean, Nachhaltigkeit."
      ]
    },
    {
      keys: ["wasserstoff", "h2 energie", "brennstoffzelle"],
      answers: [
        "**Wasserstoff** = Energietraeger — gruener H2 aus Oekostrom.",
        "Brennstoffzellen fuer LKW, Zuege, Industrie.",
        "Render: *Windrad*, *Solar*, *Atom*."
      ]
    },
    {
      keys: ["rudern", "schwimmen sport", "marathon", "leichtathletik"],
      answers: [
        "**Rudern, Schwimmen, Marathon** = Ausdauer-Sportarten.",
        "Leichtathletik: Laufen, Springen, Werfen.",
        "Render: *Schwimmen*, *Stadion*, *Medaille*."
      ]
    },
    {
      keys: ["judo", "karate", "kampfsport", "selbstverteidigung"],
      answers: [
        "**Kampfsport** = Disziplin & Respekt — Judo, Karate, Taekwondo.",
        "Selbstverteidigung: deeskalieren zuerst.",
        "Render: *Boxen*, *Trophäe*."
      ]
    },
    {
      keys: ["prokrastination", "aufschieben", "motivation lernen"],
      answers: [
        "**Prokrastination** = Aufschieben — oft Angst oder Ueberforderung.",
        "Kleine Schritte, Pomodoro, Handy weg.",
        "Frag: Zeitmanagement, Lernen."
      ]
    },
    {
      keys: ["abi", "abitur", "pruefungsvorbereitung"],
      answers: [
        "**Abitur** = hoechster Schulabschluss in DE.",
        "Plan, Wiederholung, Pausen, Schlaf — Pruefungsangst ist normal.",
        "Frag: Lernen, Studium."
      ]
    },
    {
      keys: ["dsgvo", "gdpr", "personenbezogene daten"],
      answers: [
        "**DSGVO** schuetzt persoenliche Daten in der EU.",
        "Rechte: Auskunft, Loeschung. NOCO AI = lokal, kein Server-Tracking.",
        "Frag: Datenschutz, Cybersecurity."
      ]
    },
    {
      keys: ["vpn", "tor browser", "anonym surfen"],
      answers: [
        "**VPN** verschluesselt Verbindung — gut in oeffentlichen WLANs.",
        "**Tor** = stark anonymisierend, langsamer.",
        "Frag: Cybersecurity, Internet."
      ]
    },
    {
      keys: ["git", "github", "version control"],
      answers: [
        "**Git** = Versionskontrolle — Commits, Branches, Merge.",
        "**GitHub** = Collaboration-Plattform. NOCO Mobile nutzt GitHub Pages.",
        "Frag: Open Source, Programmierung."
      ]
    },
    {
      keys: ["docker", "kubernetes", "devops"],
      answers: [
        "**Docker** = Container fuer Apps. **Kubernetes** orchestriert sie.",
        "**DevOps** = schnelle, stabile Software-Releases.",
        "Zukunfts-IT fuer Entwickler."
      ]
    },
    {
      keys: ["ux design", "ui design", "usability"],
      answers: [
        "**UX** = Nutzererlebnis. **UI** = visuelles Design.",
        "NOCO AI Liquid Glass = UX-Fokus.",
        "Frag: Barrierefreiheit, Programmierung."
      ]
    },
    {
      keys: ["halloween", "karneval", "oktoberfest", "weihnachten feier"],
      answers: [
        "**Halloween:** Kostueme & Kuerbis. **Karneval:** Umzuege.",
        "**Oktoberfest** Muenchen. **Weihnachten:** Advent & Familie.",
        "Render: *Kuerbis*, *Weihnachtsbaum*, *Geschenk*."
      ]
    },
    {
      keys: ["islam", "christentum", "judentum", "religion welt"],
      answers: [
        "Grosse **Religionen** geben Sinn & Ethik — Respekt ist Pflicht.",
        "DE: Glaubensfreiheit fuer alle.",
        "Frag: Diversitaet, Philosophie."
      ]
    },
    {
      keys: ["wissenschaftliche methode", "hypothese", "peer review"],
      answers: [
        "Beobachtung → Hypothese → Experiment → Theorie.",
        "**Peer Review** prueft Studien vor Veroeffentlichung.",
        "Frag: Physik, Fake News."
      ]
    },
    {
      keys: ["marie curie", "isaac newton", "stephen hawking", "wissenschaftler"],
      answers: [
        "**Curie** — Radioaktivitaet. **Newton** — Gravitation.",
        "**Hawking** — Schwarze Loecher. Wissenschaft = Neugier & Geduld.",
        "Frag: Einstein, Physik."
      ]
    },
    {
      keys: ["exoplanet", "fermi paradox", "seti", "leben im all"],
      answers: [
        "**Exoplaneten** um andere Sterne — tausende bekannt.",
        "**Fermi-Paradox:** Wo sind die Aliens?",
        "Render: *Alien*, *UFO*, *Planet*."
      ]
    },
    {
      keys: ["machu picchu", "stonehenge", "taj mahal", "petra", "weltwunder"],
      answers: [
        "**Machu Picchu**, **Stonehenge**, **Taj Mahal**, **Petra** — UNESCO-Welterbe.",
        "Geschichte in Stein — Reisen mit Respekt.",
        "Render: *Pyramide*, *Tempel*, *Burg*."
      ]
    },
    {
      keys: ["rhein", "donau", "amazonas", "grosse fluesse"],
      answers: [
        "**Rhein** & **Donau** in Europa. **Amazonas** groesstes Stromgebiet.",
        "Fluesse = Leben & Transport — sauber halten!",
        "Render: *Fluss*, *Schiff*, *Bruecke*."
      ]
    },
    {
      keys: ["alpen", "schwarzwald", "ostsee", "nordsee"],
      answers: [
        "**Alpen**, **Schwarzwald**, **Ostsee**, **Nordsee** — DE-Naturhighlights.",
        "Wandern, Strand, Nationalparks.",
        "Render: *Berg*, *Wald*, *Strand*."
      ]
    },
    {
      keys: ["smart home", "alexa", "iot", "haus automatisierung"],
      answers: [
        "**Smart Home** = Licht, Heizung, Tueren vernetzt.",
        "Sicherheit: starke Passwoerter, Updates.",
        "Render: *Smartphone*, *WLAN*, *Gluehbirne*."
      ]
    },
    {
      keys: ["balkonkraftwerk", "e auto", "elektromobilitaet"],
      answers: [
        "**E-Auto** & **Balkonkraftwerk** — Klima & Technik.",
        "Ladeinfrastruktur waechst.",
        "Frag: Solarenergie, Verkehr."
      ]
    },
    {
      keys: ["adhs", "legasthenie", "dyskalkulie", "inklusion schule"],
      answers: [
        "**ADHS**, **Legasthenie**, **Dyskalkulie** — Foerderung moeglich.",
        "**Inklusion** = alle lernen gemeinsam.",
        "Bei Verdacht: Schule & Beratung."
      ]
    },
    {
      keys: ["zahnpflege", "zahnarzt", "karies"],
      answers: [
        "2x putzen, Zahnseide, Kontrolle — **Karies** vermeidbar.",
        "Gesunde Zaehne = Wohlbefinden."
      ]
    },
    {
      keys: ["vegan", "veganismus", "pflanzliche ernaehrung"],
      answers: [
        "**Vegan** = rein pflanzlich. **Vegetarisch** ohne Fleisch.",
        "B12 & Naehrstoffe planen.",
        "Frag: Ernaehrung, Nachhaltigkeit."
      ]
    },
    {
      keys: ["meme", "viral", "internet kultur"],
      answers: [
        "**Memes** & **virale** Inhalte — Internet-Humor.",
        "Keine Hetze oder Mobbing-Memes.",
        "Frag: Social Media, Fake News."
      ]
    },
    {
      keys: ["nobelpreis", "auszeichnung wissenschaft"],
      answers: [
        "**Nobelpreis** — hoechste Auszeichnung in Wissenschaft & Frieden.",
        "Seit 1901 — bahnbrechende Forschung."
      ]
    },
    {
      keys: ["tokio", "japan kultur", "teezeremonie"],
      answers: [
        "**Tokio** = Megacity Japan. Sushi, Tempel, Praezision.",
        "Render: *Sushi*, *Pagode*, *Zug*."
      ]
    },
    {
      keys: ["typescript", "typescript lernen", "ts programmierung"],
      answers: [
        "**TypeScript** = JavaScript mit Typen — weniger Bugs, bessere IDE-Hilfe.",
        "Beliebt mit React, Angular, Node. `.ts` Dateien werden zu JS kompiliert.",
        "Grundlagen: `let name: string`, Interfaces, Typen fuer Funktionen.",
        "Frag: JavaScript, Programmierung, Open Source."
      ]
    },
    {
      keys: ["raspberry pi", "arduino", "maker", "basteln elektronik"],
      answers: [
        "**Arduino** = Mikrocontroller-Board — Sensoren, LEDs, Roboter basteln.",
        "**Raspberry Pi** = Mini-PC — Projekte, Server, Retro-Gaming.",
        "Maker-Kultur: Tinkern, Lernen, Reparieren. 3D-Druck + Elektronik kombinierbar.",
        "Render: *Roboter*, *Chip*, *Gluehbirne*."
      ]
    },
    {
      keys: ["prompt engineering", "prompts ki", "ki prompts schreiben"],
      answers: [
        "**Prompt Engineering** = gute Anweisungen fuer echte KI (ChatGPT & Co.).",
        "Klar, spezifisch, Beispiele, Rolle definieren. Iterieren statt einmal fragen.",
        "**NOCO AI** braucht das nicht — Vault-Keywords reichen. Aber Konzept ist nuetzlich fuer Cloud-KI.",
        "Deepfakes & Missbrauch kritisch mitdenken."
      ]
    },
    {
      keys: ["deepfake", "deep fake", "ki bild fake", "manipulation video"],
      answers: [
        "**Deepfake** = KI-generierte Fake-Gesichter/Stimmen in Videos.",
        "Gefahr: Desinformation, Betrug, Mobbing. Pruefe Quellen, vergleiche mehrere Medien.",
        "**NOCO Lens Detect** erkennt eigene NOCO-Pixel — nicht Deepfakes von echten Personen.",
        "Frag: Fake News, Cybersecurity, Medienkompetenz."
      ]
    },
    {
      keys: ["kernfusion", "fusionsreaktor", "iter", "fusion energie"],
      answers: [
        "**Kernfusion** = Sonnen-Prinzip auf Erde — leichte Atomkerne verschmelzen, enorme Energie.",
        "**ITER** = grosses internationales Fusions-Experiment.",
        "Noch nicht am Netz — aber Hoffnung auf saubere Basisenergie.",
        "Frag: Physik, Wasserstoff, Erneuerbare Energie."
      ]
    },
    {
      keys: ["cern", "teilchenbeschleuniger", "hadron collider", "higgs teilchen"],
      answers: [
        "**CERN** (Genf) = groesstes Physik-Labor. **LHC** = Teilchenbeschleuniger.",
        "Forscher prallen Protonen — entdecken Higgs-Boson (2012).",
        "Reine Grundlagenforschung — kein Alltags-Gadget, aber Wissen fuer morgen.",
        "Render: *Atom*, *Teleskop*, *Galaxie*."
      ]
    },
    {
      keys: ["dunkle materie", "dunkle energie", "neutronenstern", "pulsar"],
      answers: [
        "**Dunkle Materie** = unsichtbare Masse — haelt Galaxien zusammen (noch unbekannt was es ist).",
        "**Dunkle Energie** = beschleunigt Expansion des Universums.",
        "**Neutronenstern/Pulsar** = extrem dichte Sternreste — senden Radiopulse.",
        "Kosmologie = eine der groessten offenen Fragen der Physik."
      ]
    },
    {
      keys: ["triathlon", "ironman", "duathlon", "ausdauersport"],
      answers: [
        "**Triathlon** = Schwimmen + Rad + Laufen in einer Disziplin.",
        "**Ironman** = lange Distanz (3,8 km / 180 km / 42 km) — ultimative Ausdauer.",
        "Training: Periodisierung, Ernaehrung, Regeneration.",
        "Render: *Schwimmen*, *Fahrrad*, *Medaille*."
      ]
    },
    {
      keys: ["pilates", "tai chi", "qigong", "entspannung bewegung"],
      answers: [
        "**Pilates** = Core-Stabilitaet, kontrollierte Bewegungen.",
        "**Tai Chi / Qigong** = langsame Flows — Balance, Atem, Stressabbau.",
        "Sanft aber wirkungsvoll — fuer viele Altersgruppen.",
        "Frag: Achtsamkeit, Sport, Yoga."
      ]
    },
    {
      keys: ["homeoffice", "remote work", "fernarbeit", "hybrid arbeit"],
      answers: [
        "**Homeoffice/Remote** = Arbeiten von zu Hause oder remote.",
        "Vorteile: Flexibilitaet. Risiken: Grenzen, Einsamkeit, Ablenkung.",
        "Tipps: fester Arbeitsplatz, Pausen, Video-Call-Etikette.",
        "NOCO Focus = gutes Vorbild fuer Fokus-Zeiten."
      ]
    },
    {
      keys: ["freelancer", "selbststaendig", "freiberufler", "gruender"],
      answers: [
        "**Freelancer** = selbststaendig pro Projekt — Design, Code, Text, Beratung.",
        "Skills + Portfolio + Netzwerk. Steuern & Versicherung selbst klaeren.",
        "**Gruender** bauen Firmen — Risiko & Chance.",
        "Frag: Karriere, UX Design, Programmierung."
      ]
    },
    {
      keys: ["etf", "aktien", "investieren", "sparen anlegen"],
      answers: [
        "**Sparen** = Sicherheit (Tagesgeld). **Investieren** = langfristig Vermoegen (Aktien, ETFs).",
        "**ETF** = gebündelte Aktien — breite Streuung, oft guenstig.",
        "Risiko: Kursschwankungen. Nie mehr riskieren als du verlieren kannst.",
        "NOCO Pay = simuliert — echtes Geld braucht echte Beratung."
      ]
    },
    {
      keys: ["mietrecht", "mietvertrag", "wohnung mieten", "mieter rechte"],
      answers: [
        "**Mietvertrag** = bindet Mieter & Vermieter — Laufzeit, Kosten, Kuendigung.",
        "Mieterrechte in DE: Mietminderung bei Maengeln, Kaution max. 3 Monatsmieten.",
        "Schriftlich lesen vor Unterschrift. Nebenkostenabrechnung pruefen.",
        "Bei Streit: Mieterverein, Anwalt — NOCO AI ersetzt keine Rechtsberatung."
      ]
    },
    {
      keys: ["grundgesetz", "verfassung deutschland", "artikel 1", "rechtsstaat"],
      answers: [
        "**Grundgesetz** = deutsche Verfassung seit 1949.",
        "**Artikel 1:** Menschenwuerde unantastbar.",
        "**Rechtsstaat:** Gesetze gelten fuer alle, Gerichte sind unabhaengig.",
        "Frag: Demokratie, Menschenrechte, Bundestag."
      ]
    },
    {
      keys: ["nato", "verteidigungsbuendnis", "bundeswehr"],
      answers: [
        "**NATO** = militaerisches Buendnis (u.a. USA, DE, UK) — kollektive Verteidigung.",
        "**Bundeswehr** = deutsche Streitkraefte — Verteidigung, Auslandseinsaetze, Katastrophenhilfe.",
        "Frieden & Diplomatie bleiben Ziel — Militaer = letzte Option.",
        "Frag: UNO, Geschichte, Politik."
      ]
    },
    {
      keys: ["hitze", "hitzewelle", "duerre", "klimaanpassung"],
      answers: [
        "**Hitzewelle** = lange extreme Hitze — Gesundheitsrisiko, Waldbrandgefahr.",
        "**Duerre** = Wassermangel — Ernteausfaelle, Oekosystem-Stress.",
        "**Klimaanpassung:** Gruen in Staedten, Schatten, Wasser sparen, frueh warnen.",
        "Frag: Klimawandel, Nachhaltigkeit, Gesundheit."
      ]
    },
    {
      keys: ["waldbrand", "buschfeuer", "feuer waldschutz"],
      answers: [
        "**Waldbrand** = unkontrolliertes Feuer — Wind, Trockenheit, Mensch oft Ausloeser.",
        "Praevention: keine Glasflaschen im Wald, Grill nur erlaubt, Feuer schnell melden.",
        "Klimaerwaermung erhoeht Risiko in vielen Regionen.",
        "Render: *Feuer*, *Wald*, *Flamme*, *Vulkan*."
      ]
    },
    {
      keys: ["mikroplastik", "plastik meer", "fast fashion", "textil muell"],
      answers: [
        "**Mikroplastik** = winzige Kunststoffteilchen — in Meer, Trinkwasser, Koerper.",
        "**Fast Fashion** = billige Kleidung, kurze Lebensdauer — Ressourcen & Muell.",
        "Gegenmittel: weniger kaufen, Second Hand, Naturfasern, waschen mit Filter.",
        "Frag: Nachhaltigkeit, Ozean, Recycling."
      ]
    },
    {
      keys: ["minimalismus", "weniger besitzen", "declutter", "aufraeumen"],
      answers: [
        "**Minimalismus** = bewusst weniger besitzen — Fokus auf Wichtiges.",
        "Declutter: Raum fuer Kopf & Zeit. Nicht Entbehrung, sondern Klarheit.",
        "Digital: Apps loeschen, Ordner sortieren, Benachrichtigungen reduzieren.",
        "Frag: Zeitmanagement, Nachhaltigkeit."
      ]
    },
    {
      keys: ["van life", "campingbus", "backpacking", "hostel reise"],
      answers: [
        "**Van Life** = Wohnen/Reisen im Camper — Freiheit, aber Planung noetig.",
        "**Backpacking** = Reisen mit Rucksack, Hostels, Budget.",
        "Respekt vor Natur & Locals. Leave-no-trace.",
        "Render: *Zelt*, *Van*, *Berg*, *Kompass*."
      ]
    },
    {
      keys: ["pubertaet", "teenager", "hormone", "wachstum jugend"],
      answers: [
        "**Pubertaet** = koerperliche & mentale Reifung — Hormone, Wachstum, Stimmungsschwankungen.",
        "Normal: unsicher fuehlen, Freunde wichtig, Identitaet finden.",
        "Offen reden mit Vertrauenspersonen. Bei starken Problemen Hilfe holen.",
        "Frag: Psychologie, Gesundheit, Kommunikation."
      ]
    },
    {
      keys: ["cybermobbing", "mobbing online", "haten", "toxisch internet"],
      answers: [
        "**Cybermobbing** = Mobbing online — Nachrichten, Fotos, Ausgrenzung.",
        "Hilfe: screenshotten, melden, blockieren, Erwachsene/ Schule einbeziehen.",
        "Nicht zurueckhaten — das eskaliert. Du bist nicht allein.",
        "Frag: Social Media, Diversitaet, Psychologie."
      ]
    },
    {
      keys: ["enkeltrick", "betrug senioren", "phishing anruf", "scam"],
      answers: [
        "**Enkeltrick:** Anrufer tun Sohn/Enkel — brauchen sofort Geld. **Immer skeptisch!**",
        "Nie Geld/PIN am Telefon. Zurueckrufen ueber bekannte Nummer.",
        "**Phishing** auch per Mail/SMS. Banken fragen nie nach Passwoertern.",
        "Frag: Cybersecurity, 112 Notfall bei Gefahr."
      ]
    },
    {
      keys: ["antibiotika", "antibiotika resistenz", "erkältung", "grippe unterschied"],
      answers: [
        "**Antibiotika** wirken nur gegen **Bakterien** — nicht gegen Viren (Erkaeltung/Grippe).",
        "**Resistenz:** zu oft/unnoetig → Bakterien unempfindlich — grosse Gefahr.",
        "**Erkaeltung** = meist harmlos, Ruhe & Fluessigkeit. **Grippe** oft heftiger.",
        "Arzt entscheidet — nicht selbst Antibiotika nehmen."
      ]
    },
    {
      keys: ["placebo", "nocebo", "doppelblind", "studie medizin"],
      answers: [
        "**Placebo** = Scheinbehandlung mit echtem Effekt durch Erwartung.",
        "**Nocebo** = negative Erwartung verschlechtert Symptome.",
        "**Doppelblindstudie** = Goldstandard — Patient & Arzt wissen nicht wer Placebo bekommt.",
        "Wissenschaft braucht solide Studien — nicht nur Einzelfaelle."
      ]
    },
    {
      keys: ["faktencheck", "fakt check", "quellen pruefen", "medienkompetenz"],
      answers: [
        "**Faktencheck** = Behauptungen gegen Belege pruefen — vor Teilen!",
        "Checkliste: Wer sagt das? Quelle? Datum? Andere Medien gleich?",
        "Tools: Correctiv, dpa-Faktencheck, Snopes (EN).",
        "Frag: Fake News, Journalismus, Demokratie."
      ]
    },
    {
      keys: ["stoizismus", "stoiker", "epiktet", "marcus aurelius"],
      answers: [
        "**Stoizismus** = antike Philosophie — Kontrolle innerlich, Gelassenheit aeusserlich.",
        "Fokus auf das, was du beeinflussen kannst. Akzeptanz bei Unveraenderlichem.",
        "Marcus Aurelius, Epiktet, Seneca — bis heute relevant.",
        "Frag: Philosophie, Psychologie, Achtsamkeit."
      ]
    },
    {
      keys: ["bauhaus", "design geschichte", "typografie", "schrift design"],
      answers: [
        "**Bauhaus** (1919–1933) = Design-Schule — Form folgt Funktion, klare Geometrie.",
        "**Typografie** = Kunst der Schrift — Lesbarkeit, Hierarchie, Stimmung.",
        "Beeinflusst Architektur, UI, NOCO Liquid Glass (klar & modern).",
        "Render: *Haus*, *Wolkenkratzer*, *Neon*."
      ]
    },
    {
      keys: ["street art", "graffiti", "banksy", "urban art"],
      answers: [
        "**Street Art** = Kunst im oeffentlichen Raum — Murals, Stencil, Graffiti.",
        "Zwischen Kunst & Recht (Eigentum). Manche Werke weltberuehmt (z.B. Banksy).",
        "Urban Culture & soziale Botschaften.",
        "Render: *Spray*, *Neon*, *Stadt*, *Wand*."
      ]
    },
    {
      keys: ["zeitzonen", "utc", "sommerzeit", "weltuhr"],
      answers: [
        "**Zeitzonen** = Erde in 24 Sektoren — UTC als Referenz (Greenwich).",
        "**Sommerzeit** = Uhr eine Stunde vor — Energie sparen (umstritten).",
        "Deutschland: MEZ/MESZ. Bei Reisen: Jetlag moeglich.",
        "Render: *Uhr*, *Globus*, *Flugzeug*."
      ]
    },
    {
      keys: ["rust", "rust programmierung", "rust lang", "systems programming"],
      answers: [
        "**Rust** = moderne Programmiersprache — schnell wie C/C++, sicher gegen Speicherfehler.",
        "Beliebt fuer Systeme, WebAssembly, Embedded, Spiele-Engines.",
        "Vergleich: Python einfacher · Rust performanter & typsicher.",
        "Frag: JavaScript, TypeScript, Python, Git."
      ]
    },
    {
      keys: ["sql", "datenbank sql", "mysql", "postgresql", "relationale datenbank"],
      answers: [
        "**SQL** = Sprache fuer relationale Datenbanken — Tabellen, Abfragen, JOINs.",
        "Beispiele: MySQL, PostgreSQL, SQLite. SELECT, INSERT, UPDATE, DELETE.",
        "Wichtig fuer Apps, Shops, Statistik — Daten strukturiert speichern.",
        "Frag: MongoDB, API, Algorithmus, Cybersecurity."
      ]
    },
    {
      keys: ["mongodb", "nosql", "document database", "firebase daten"],
      answers: [
        "**NoSQL** = Datenbanken ohne festes Tabellen-Schema — flexibel, skalierbar.",
        "**MongoDB** speichert JSON-aehnliche Dokumente — gut fuer Apps & schnelle Prototypen.",
        "SQL = strukturiert & Abfragen · NoSQL = flexibel & horizontal skalieren.",
        "Frag: SQL, API, Cloud, JavaScript."
      ]
    },
    {
      keys: ["rest api", "api schnittstelle", "http api", "web api"],
      answers: [
        "**API** = Schnittstelle zwischen Programmen — z.B. Wetter-App holt Daten von Server.",
        "**REST** = Standard mit HTTP (GET, POST, PUT, DELETE) + URLs + JSON.",
        "Ohne APIs: keine Karten-Apps, keine Logins, kein Online-Shopping.",
        "Frag: JavaScript, Docker, Cybersecurity, Internet."
      ]
    },
    {
      keys: ["golang", "go programmierung", "google go"],
      answers: [
        "**Go (Golang)** = Google-Sprache — einfach, schnell, gut fuer Server & Cloud.",
        "Goroutines = leichtes Nebenlaeufigkeit. Beliebt bei DevOps & Microservices.",
        "Frag: Rust, Python, Docker, Kubernetes."
      ]
    },
    {
      keys: ["kotlin", "android entwicklung", "kotlin app"],
      answers: [
        "**Kotlin** = moderne Sprache fuer **Android-Apps** — offiziell von Google empfohlen.",
        "Kompakter als Java, null-sicher, interoperabel mit Java-Code.",
        "Frag: Swift, JavaScript, UX, Smartphone."
      ]
    },
    {
      keys: ["swift", "ios entwicklung", "swiftui", "apple programmierung"],
      answers: [
        "**Swift** = Apple-Sprache fuer **iPhone/iPad/Mac-Apps** — schnell & sicher.",
        "**SwiftUI** = modernes UI-Framework. Xcode = Entwicklungsumgebung.",
        "Frag: Kotlin, JavaScript, UX, Smartphone."
      ]
    },
    {
      keys: ["kubernetes", "k8s", "container orchestration", "kubectl"],
      answers: [
        "**Kubernetes (K8s)** = verwaltet viele **Docker-Container** in der Cloud — skaliert Apps automatisch.",
        "Pods, Services, Deployments — Standard in grossen Systemen.",
        "Frag: Docker, DevOps, Cloud, API."
      ]
    },
    {
      keys: ["hydroponik", "hydroponic", "urban farming", "pflanzen ohne erde"],
      answers: [
        "**Hydroponik** = Pflanzen ohne Erde — Wasser mit Naehrloesung, oft indoor.",
        "Vorteile: weniger Wasser, schnelleres Wachstum, Stadtgaerten moeglich.",
        "Frag: Permakultur, Nachhaltigkeit, Garten, Klimawandel."
      ]
    },
    {
      keys: ["permakultur", "permaculture", "nachhaltiger garten", "kreislauf garten"],
      answers: [
        "**Permakultur** = nachhaltiges Garten- & Landsystem — Natur als Vorbild, Kreislaeufe.",
        "Bodenpflege, Vielfalt, weniger Chemie. Langfristig selbsttragend.",
        "Render: *Baum*, *Blume*, *Gemuese*, *Kompost*."
      ]
    },
    {
      keys: ["kompost", "kompostieren", "biomuell kompost", "humus"],
      answers: [
        "**Kompost** = organische Reste zersetzen → fruchtbarer **Humus** fuer Garten.",
        "Bioabfall: Obstschalen, Kaffeesatz, Rasenschnitt (kein Fleisch in Kleinanlagen).",
        "Weniger Restmuell, besseres Klima durch Kreislauf.",
        "Frag: Muelltrennung, Permakultur, Nachhaltigkeit."
      ]
    },
    {
      keys: ["korallenbleiche", "korallen sterben", "bleaching", "riff sterben"],
      answers: [
        "**Korallenbleiche** = Korallen verlieren Algen-Partner bei Hitze/Stress — Riff wird weiss & stirbt oft.",
        "Ursachen: Erwaermung, Verschmutzung, Ueberfischung. Gefahr fuer Biodiversitaet.",
        "Frag: Ozean, Klimawandel, Mikroplastik, Nachhaltigkeit."
      ]
    },
    {
      keys: ["antarktis", "antarktika", "suedpol", "pinguin kontinent"],
      answers: [
        "**Antarktis** = eisiger Kontinent am Suedpol — kein dauerhaftes Wohnen, Forschungsstationen.",
        "Pinguine, Robben, Eisberge. Klimaschutz wichtig — Eisschild schmilzt.",
        "Render: *Pinguin*, *Eisberg*, *Wal*, *Schnee*."
      ]
    },
    {
      keys: ["skandinavien", "schweden norwegen daenemark", "nordic", "hygge"],
      answers: [
        "**Skandinavien** = Norwegen, Schweden, Daenemark (oft + Finnisland & Island).",
        "**Hygge** (daenisch) = Gemuetlichkeit. Design, Wohlfahrt, Natur verbunden.",
        "Render: *Fjord*, *Aurora*, *Wikinger-Schiff*, *Schnee*."
      ]
    },
    {
      keys: ["afrika kontinent", "afrika laender", "sahara afrika", "savanne afrika"],
      answers: [
        "**Afrika** = zweitgroesster Kontinent — Savannen, Sahara, Regenwald, 54 Staaten.",
        "Reiche Kulturen, Biodiversitaet, wachsende Tech-Szenen (z.B. Nairobi, Lagos).",
        "Render: *Loewe*, *Giraffe*, *Elefant*, *Sonne*."
      ]
    },
    {
      keys: ["suedamerika", "brasilien argentinien", "amazonas regenwald", "anden"],
      answers: [
        "**Suedamerika** — Amazonas, Anden, Patagonien. Brasilien, Argentinien, Chile …",
        "Biodiversitaet im Regenwald — Schutz wichtig fuer Klima & Arten.",
        "Render: *Dschungel*, *Berg*, *Papagei*, *Kaffee*."
      ]
    },
    {
      keys: ["australien kontinent", "outback", "great barrier reef", "down under"],
      answers: [
        "**Australien** = Kontinent & Staat — Outback, Great Barrier Reef, einzigartige Tiere.",
        "Koala, Känguru, Kookaburra. Indigene Kulturen seit Jahrtausenden.",
        "Render: *Koala*, *Känguru*, *Koralle*, *Surfen*."
      ]
    },
    {
      keys: ["mauerfall", "wiedervereinigung", "9 november 1989", "ddr brd"],
      answers: [
        "**Mauerfall** (9.11.1989) = Berliner Mauer oeffnet — Weg zur **deutschen Einheit** (3.10.1990).",
        "Symbol fuer Freiheit & Frieden in Europa. DDR + BRD wurden ein Staat.",
        "Frag: Geschichte, Kalter Krieg, Demokratie, Deutschland."
      ]
    },
    {
      keys: ["kalter krieg", "ost west konflikt", "iron curtain", "nato warschauer"],
      answers: [
        "**Kalter Krieg** (ca. 1947–1991) = Spannung USA/NATO vs. UdSSR/Warschauer Pakt — ohne direkten Weltkrieg.",
        "Mauer, Atomwaffen, Raumfahrt-Wettlauf. Endete mit Aufloesung der Sowjetunion.",
        "Frag: Mauerfall, Geschichte, NATO, Demokratie."
      ]
    },
    {
      keys: ["industrialisierung", "industrielle revolution", "dampfmaschine fabrik", "massenproduktion"],
      answers: [
        "**Industrialisierung** = Uebergang von Handwerk zu Fabriken & Maschinen (ab ~18. Jh.).",
        "Dampfmaschine, Eisenbahn, Staedte wachsen — Arbeit & Umwelt veraendert.",
        "Render: *Zug*, *Fabrik*, *Rauch*, *Stadt*."
      ]
    },
    {
      keys: ["franzoesische revolution", "franz revolution 1789", "bastille", "liberte egalite"],
      answers: [
        "**Franzoesische Revolution** (1789) — Sturz der Monarchie, Ideale: Freiheit, Gleichheit, Brüderlichkeit.",
        "Praegte Europa & Demokratie. Komplex: Gewalt & Reformen gleichzeitig.",
        "Frag: Aufklaerung, Napoleon, Demokratie, Geschichte."
      ]
    },
    {
      keys: ["nanotechnologie", "nanotech", "nanometer", "nano material"],
      answers: [
        "**Nanotechnologie** = Technik im Nanometer-Massstab (1 nm = Milliardstel Meter).",
        "Anwendungen: Medizin, Chips, neue Materialien, Oberflaechenbeschichtungen.",
        "Frag: Graphen, Physik, Chemie, Quantenphysik."
      ]
    },
    {
      keys: ["bionik", "biomimikry", "natur als vorbild", "technik aus natur"],
      answers: [
        "**Bionik** = Technik lernt von der Natur — z.B. Lotuseffekt, Vogelflug → Flugzeug.",
        "Nachhaltige Innovation durch Beobachtung von Pflanzen & Tieren.",
        "Render: *Vogel*, *Flugzeug*, *Fisch*, *Roboter*."
      ]
    },
    {
      keys: ["graphen", "graphene", "kohlenstoff nanoroehre", "2d material"],
      answers: [
        "**Graphen** = 1-Atom-dünne Kohlenstoff-Schicht — extrem leitfaehig & stabil.",
        "Forschung: Akkus, flexible Displays, Sensoren. Nobelpreis 2010.",
        "Frag: Nanotechnologie, Physik, Chemie, Batterie."
      ]
    },
    {
      keys: ["autismus", "autismus spektrum", "asperger", "neurodiversitaet"],
      answers: [
        "**Autismus-Spektrum** = unterschiedliche Wahrnehmung & Kommunikation — kein Krankheitsbild, sondern Vielfalt.",
        "**Neurodiversitaet** = verschiedene Gehirne sind normal. Respekt & Anpassung statt Stigmatisierung.",
        "Frag: Inklusion, Barrierefreiheit, Psychologie, ADHS."
      ]
    },
    {
      keys: ["depression", "depressive episode", "mentale gesundheit", "antidepressiva"],
      answers: [
        "**Depression** = anhaltende Niedergeschlagenheit, Energielosigkeit — ernsthafte Erkrankung, behandelbar.",
        "Hilfe: Arzt, Therapie, Gespraech (Telefonseelsorge 0800 111 0 111). Nicht allein bleiben.",
        "Frag: Burnout, Angst, Psychologie, Achtsamkeit."
      ]
    },
    {
      keys: ["angststoerung", "angst attack", "panikattacke", "phobie"],
      answers: [
        "**Angststoerung** = uebermaessige, laehmende Angst — Panik, Phobien, soziale Angst.",
        "Behandelbar durch Therapie & manchmal Medikamente. Atemuebungen koennen kurzfristig helfen.",
        "Frag: Depression, Psychologie, Achtsamkeit, Burnout."
      ]
    },
    {
      keys: ["elektroschrott", "e-waste", "elektronik muell", "alte handys entsorgen"],
      answers: [
        "**Elektroschrott** = alte Geraete (Handys, PCs, Kabel) — enthalten wertvolle & giftige Stoffe.",
        "Richtig: Wertstoffhof, Haendler-Ruecknahme. Nicht in Restmuell.",
        "Frag: Recycling, Muelltrennung, Nachhaltigkeit, Smartphone."
      ]
    },
    {
      keys: ["schweiz", "oesterreich", "nachbarlaender", "alpen schweiz"],
      answers: [
        "**Schweiz** = Berge, Neutralitaet, vier Landessprachen. **Oesterreich** = Alpen, Wien, Kultur & EU-Nachbar.",
        "Beide: starke Wirtschaft, Tourismus, Nah bei Deutschland.",
        "Render: *Berg*, *Schokolade*, *Zug*, *Schloss*."
      ]
    },
    {
      keys: ["crispr", "gen editing", "genscherere", "genom editieren"],
      answers: [
        "**CRISPR** = praezises **Gen-Editing** — DNA gezielt aendern. Hoffnung: Medizin, Pflanzenzucht.",
        "Ethisch heikel: Grenzen, Regulierung, Langzeitfolgen. Kein Spielzeug.",
        "Frag: Genetik, Biologie, Ethik, Medizin."
      ]
    },
    {
      keys: ["php", "php programmierung", "wordpress php", "laravel"],
      answers: [
        "**PHP** = Skriptsprache fuer Web — WordPress, Shops, viele Server-Backends.",
        "Laeuft auf Servern, liefert HTML. Oft mit MySQL/SQL kombiniert.",
        "Frag: SQL, JavaScript, HTML, API."
      ]
    },
    {
      keys: ["c++", "cpp programmierung", "cplusplus"],
      answers: [
        "**C++** = leistungsstarke Sprache — Spiele, Systeme, Embedded, Grafik-Engines.",
        "Schnell & kontrolliert, aber komplex. Basis vieler grosser Programme.",
        "Frag: Rust, C, Python, Spiele."
      ]
    },
    {
      keys: ["c#", "csharp", "dotnet", ".net"],
      answers: [
        "**C#** = Microsoft-Sprache fuer **.NET** — Windows-Apps, Spiele (Unity), Enterprise.",
        "Aehnlich Java-Syntax. Gut fuer Spieleentwicklung mit Unity.",
        "Frag: C++, JavaScript, Kotlin, Swift."
      ]
    },
    {
      keys: ["agile", "scrum", "sprint planning", "kanban"],
      answers: [
        "**Agile** = flexibles Projektmanagement — kurze Sprints, Feedback, Anpassung.",
        "**Scrum**: Product Owner, Sprints, Daily Standup. **Kanban**: Board mit Karten.",
        "Beliebt in Software-Teams. Frag: DevOps, UX, Freelancer."
      ]
    },
    {
      keys: ["figma", "ui design tool", "prototyping design", "canva design"],
      answers: [
        "**Figma** = kollaboratives **UI/UX-Design** im Browser — Mockups, Prototypen, Design-Systeme.",
        "Designer & Entwickler arbeiten zusammen. Alternative: Sketch, Adobe XD, Canva (einfacher).",
        "Frag: UX, HTML, CSS, App-Entwicklung."
      ]
    },
    {
      keys: ["tiktok", "short video", "reels", "shorts youtube"],
      answers: [
        "**TikTok/Reels/Shorts** = kurze Videos — Algorithmus, Trends, Creator-Oekonomie.",
        "Aufmerksamkeit in Sekunden. Kritisch denken: Quellen, Sucht, Datenschutz.",
        "Frag: Social Media, Influencer, Faktencheck."
      ]
    },
    {
      keys: ["whatsapp", "telegram", "signal messenger", "instant messaging"],
      answers: [
        "**Messenger** = WhatsApp, Telegram, Signal — Chat, Gruppen, Sprachnachrichten.",
        "**Signal** = besonders privacy-fokussiert. Ende-zu-Ende-Verschluesselung wichtig.",
        "Frag: Datenschutz, Cybersecurity, Social Media."
      ]
    },
    {
      keys: ["discord", "discord server", "community chat", "gaming chat"],
      answers: [
        "**Discord** = Community-Chat — Server, Channels, Voice, Gaming & Kreativ-Szenen.",
        "Moderation & Regeln wichtig. Oft fuer Teams, Klassen, Projekte.",
        "Frag: E-Sport, Social Media, Cybermobbing."
      ]
    },
    {
      keys: ["influencer", "content creator", "youtuber", "creator economy"],
      answers: [
        "**Influencer/Creator** = Reichweite ueber Social Media — Videos, Posts, Sponsoring.",
        "Kritisch: Werbung kennzeichnen, Authentizitaet, Algorithmus-Abhaengigkeit.",
        "Frag: TikTok, Faktencheck, Marketing, Podcast."
      ]
    },
    {
      keys: ["ebook", "hörbuch", "audiobook", "kindle", "digitales lesen"],
      answers: [
        "**E-Books** = digitale Buecher (Kindle & Co.). **Hoerbuecher** = gelesen fuer unterwegs.",
        "Vorteile: tragbar, anpassbare Schrift. Bibliotheken bieten oft Apps.",
        "Frag: Lesen, Buchdruck, Bibliothek, Podcast."
      ]
    },
    {
      keys: ["buchdruck", "gutenberg", "druckerpresse", "printing press"],
      answers: [
        "**Buchdruck** (Gutenberg ~1450) = Wissen massenhaft verbreitet — Bibel, Zeitungen, Wissenschaft.",
        "Revolution fuer Bildung & Demokratie. Vorher: handschriftliche Kopien.",
        "Frag: Renaissance, Aufklaerung, Geschichte."
      ]
    },
    {
      keys: ["byzantinisches reich", "byzanz", "konstantinopel", "ostroemisches reich"],
      answers: [
        "**Byzantinisches Reich** = Fortfuehrung des Roemischen Reichs im Osten — Konstantinopel (heute Istanbul).",
        "Jahrhunderte stabil, Kunst & Orthodoxe Kirche. Fiel 1453 an Osmanen.",
        "Frag: Geschichte, Osmanisches Reich, Renaissance."
      ]
    },
    {
      keys: ["osmanisches reich", "ottoman", "sultan", "istanbul osmanen"],
      answers: [
        "**Osmanisches Reich** (13.–20. Jh.) — heutige Tuerkei & grosses Reich um Mittelmeer.",
        "Sultan, Moscheen, Handel. Einfluss auf Europa & Nahen Osten.",
        "Frag: Byzantinisches Reich, Geschichte, Islam."
      ]
    },
    {
      keys: ["china geschichte", "chinesisches reich", "dynastie china", "seidenstrasse"],
      answers: [
        "**China** = jahrtausendealte Kultur — Dynastien, Seidenstrasse, Erfindungen (Papier, Kompass).",
        "Heute: Wirtschaftsmacht & Technologie. Geschichte komplex & vielfaeltig.",
        "Render: *Laterne*, *Drache*, *Grosse Mauer*, *Panda*."
      ]
    },
    {
      keys: ["usa geschichte", "vereinigte staaten", "amerikanische geschichte", "unabhaengigkeit usa"],
      answers: [
        "**USA** — Einwanderungsland, Unabhaengigkeit 1776, Buergerechtsbewegungen, globale Rolle.",
        "Demokratie, Innovation (Silicon Valley), aber auch Konflikte & Ungleichheit.",
        "Render: *Freiheitsstatue*, *Hollywood*, *Rakete*, *Stadt*."
      ]
    },
    {
      keys: ["kanada", "canada", "toronto vancouver", "kanadische kultur"],
      answers: [
        "**Kanada** = zweitgroesstes Land — Natur, Ahornblatt, zwei Amtssprachen (EN/FR).",
        "Bekannt: Seen, Waelder, freundliche Kultur, Eishockey.",
        "Render: *Elch*, *Ahornblatt*, *Eis*, *Bär*."
      ]
    },
    {
      keys: ["mexiko", "mexico", "azteken maya", "mexikanische kultur"],
      answers: [
        "**Mexiko** — reiche indigene Kultur (Maya, Azteken), heute lebendige Musik & Kueche.",
        "Tacos, Mariachi, Farbenfest. Wichtiger Partner & Nachbar der USA.",
        "Render: *Kaktus*, *Sombrero*, *Taco*, *Pyramide*."
      ]
    },
    {
      keys: ["nasa", "esa", "weltraumagentur", "space agency"],
      answers: [
        "**NASA** (USA) & **ESA** (Europa) = Raumfahrt — Satelliten, Mars, ISS, Teleskope.",
        "Artemis = Rueckkehr zum Mond. Internationale Zusammenarbeit.",
        "Render: *Rakete*, *ISS*, *Planet*, *Teleskop*."
      ]
    },
    {
      keys: ["artemis", "mondmission", "moon landing neu", "zurueck zum mond"],
      answers: [
        "**Artemis** = NASA-Programm — Menschen wieder auf den **Mond**, Basis fuer Mars-Vorbereitung.",
        "Nach Apollo (1969–1972) neue Generation. Europa beteiligt (ESA).",
        "Frag: NASA, Astronomie, Rakete, ISS."
      ]
    },
    {
      keys: ["lithium akku", "lithium ionen", "batterie elektroauto", "akkutechnologie"],
      answers: [
        "**Lithium-Ionen-Akkus** = Standard fuer Handys, E-Autos, Laptops — hohe Energiedichte.",
        "Recycling & Rohstoffe (Lithium, Kobalt) wichtig. Forschung: feste Batterien.",
        "Frag: E-Auto, Solarenergie, Elektroschrott, Nachhaltigkeit."
      ]
    },
    {
      keys: ["geothermie", "erdwaerme", "geothermal energy"],
      answers: [
        "**Geothermie** = Waerme aus der Erde — Heizung, Strom in vulkanischen Regionen.",
        "Konstant verfuegbar, wenig CO2. Deutschland begrenzt, Island stark.",
        "Frag: Erneuerbare Energie, Wasserstoff, Klimawandel."
      ]
    },
    {
      keys: ["biogas", "biomasse energie", "fermenter", "methan erneuerbar"],
      answers: [
        "**Biogas** = aus organischem Material (Guelle, Reste) — Strom & Waerme.",
        "Kreislaufgedanke in Landwirtschaft. Nicht alleinige Klimaloesung.",
        "Frag: Solarenergie, Windkraft, Kompost, Nachhaltigkeit."
      ]
    },
    {
      keys: ["carbon capture", "ccs", "co2 abscheidung", "co2 speicherung"],
      answers: [
        "**Carbon Capture (CCS)** = CO2 aus Abgasen fangen & speichern — Ergaenzung zum Klimaschutz.",
        "Teuer & energieintensiv. Debatte: Ablenkung vs. noetige Technik.",
        "Frag: Klimawandel, Wasserstoff, Erneuerbare."
      ]
    },
    {
      keys: ["aufforstung", "reforestation", "waldschutz", "baeume pflanzen"],
      answers: [
        "**Aufforstung** = Baeume neu pflanzen — CO2-Speicher, Biodiversitaet, Boden.",
        "Natuerliche Waelder schuetzen ist oft effektiver als nur neu pflanzen.",
        "Render: *Baum*, *Wald*, *Pflanze*, *Kompost*."
      ]
    },
    {
      keys: ["luftqualitaet", "feinstaub", "pm2.5", "smog", "stickoxyd"],
      answers: [
        "**Luftqualitaet** — **Feinstaub (PM2.5)** schadet Lunge & Herz. Quellen: Verkehr, Heizung, Industrie.",
        "**Umweltzonen** in Staedten. Fahrrad, OEPNV, Filter, weniger Verbrenner helfen.",
        "Frag: Klimawandel, E-Auto, Gesundheit, Hitzewelle."
      ]
    },
    {
      keys: ["bienensterben", "insektensterben", "bestaeuber krise", "pollinator decline"],
      answers: [
        "**Bienen- & Insektensterben** = weniger Bestaeuber — Gefahr fuer Obst, Gemuese, Oekosysteme.",
        "Ursachen: Pestizide, Monokultur, Klima. Jeder Garten hilft.",
        "Frag: Imkerei, Oekologie, Permakultur, Nachhaltigkeit."
      ]
    },
    {
      keys: ["regex", "regulaere ausdruecke", "pattern matching text"],
      answers: [
        "**Regex** = Muster in Text suchen/ersetzen — z.B. E-Mail-Format pruefen.",
        "In fast jeder Sprache. Kurz aber maechtig — gut fuer Dev & Daten.",
        "Frag: Python, JavaScript, SQL, Programmierung."
      ]
    },
    {
      keys: ["lua", "lua scripting", "roblox lua", "game scripting"],
      answers: [
        "**Lua** = leichte Skriptsprache — Spiele (Roblox, WoW-Addons), Embedded Config.",
        "Einfach lernen, schnell eingebunden. Oft mit C/C++ kombiniert.",
        "Frag: Minecraft, Programmierung, C++."
      ]
    },
    {
      keys: ["gezeitenenergie", "tidal power", "wellenenergie", "meeresenergie"],
      answers: [
        "**Gezeiten- & Wellenenergie** = Strom aus Meer — vorhersehbar, aber teuer & lokal begrenzt.",
        "Ergaenzung zu Wind/Solar. Forschung in Europa & UK.",
        "Frag: Offshore-Wind, Erneuerbare, Ozean."
      ]
    },
    {
      keys: ["elektrolyse", "wasser elektrolyse", "gruener wasserstoff"],
      answers: [
        "**Elektrolyse** = Wasser mit Strom spalten → **Wasserstoff**. Gruen wenn Strom erneuerbar.",
        "Schluessel fuer Industrie & Speicher. Noch teuer — Skalierung laeuft.",
        "Frag: Wasserstoff, Kernfusion, Klimawandel, Biogas."
      ]
    },
    {
      keys: ["vue", "vue.js", "vuejs", "vue framework"],
      answers: [
        "**Vue.js** = JavaScript-**Frontend-Framework** — UI-Komponenten, reaktiv, einsteigerfreundlich.",
        "Oft mit Vite/Nuxt. Alternative: React, Angular, Svelte.",
        "Frag: JavaScript, HTML, CSS, TypeScript."
      ]
    },
    {
      keys: ["angular", "angular framework", "google angular"],
      answers: [
        "**Angular** = Google-Framework fuer grosse Web-Apps — TypeScript, Struktur, Enterprise.",
        "Strenger als Vue, umfangreich. Gut fuer Teams & langlebige Projekte.",
        "Frag: TypeScript, Vue, JavaScript, UX."
      ]
    },
    {
      keys: ["flutter", "dart", "flutter app", "cross platform app"],
      answers: [
        "**Flutter** (Dart) = eine Codebasis fuer **Android & iOS** — schnelle UI, Google-Framework.",
        "Alternative: React Native, native Swift/Kotlin.",
        "Frag: Kotlin, Swift, UX, Smartphone."
      ]
    },
    {
      keys: ["tailwind", "tailwind css", "utility css", "css framework"],
      answers: [
        "**Tailwind CSS** = Utility-Klassen statt grosser CSS-Dateien — schnelles UI-Bauen.",
        "Sehr populaer mit React/Vue. Alternative: Bootstrap.",
        "Frag: HTML, CSS, Figma, UX."
      ]
    },
    {
      keys: ["graphql", "graph ql api", "query language api"],
      answers: [
        "**GraphQL** = flexible API-Abfragesprache — Client fragt genau die Felder ab, die er braucht.",
        "Alternative zu REST. Beliebt bei modernen Apps.",
        "Frag: REST API, JavaScript, Datenbank."
      ]
    },
    {
      keys: ["oauth", "jwt", "authentifizierung token", "login token"],
      answers: [
        "**OAuth** = sicheres Login ueber Drittanbieter (Google, GitHub). **JWT** = kompakter Token fuer Sessions.",
        "Wichtig fuer App-Sicherheit — nie Tokens oeffentlich teilen.",
        "Frag: Cybersecurity, API, Datenschutz."
      ]
    },
    {
      keys: ["aws", "amazon web services", "cloud aws"],
      answers: [
        "**AWS** = groesste **Cloud-Plattform** — Server, Speicher, KI, Datenbanken on-demand.",
        "Alternativen: Azure, Google Cloud. Pay-as-you-go Modell.",
        "Frag: Kubernetes, Docker, DevOps, SaaS."
      ]
    },
    {
      keys: ["azure", "microsoft azure", "cloud azure"],
      answers: [
        "**Microsoft Azure** = Cloud fuer Unternehmen — Windows, .NET, Office-Integration.",
        "Oft in Firmen mit Microsoft-Stack. Frag: AWS, C#, DevOps."
      ]
    },
    {
      keys: ["terraform", "infrastructure as code", "iac devops"],
      answers: [
        "**Terraform** = Infrastruktur als Code — Server & Cloud per Skript statt Klick-Konsole.",
        "Reproduzierbar, versionierbar. DevOps-Standard.",
        "Frag: AWS, Kubernetes, CI/CD, Docker."
      ]
    },
    {
      keys: ["ci cd", "continuous integration", "github actions", "jenkins pipeline"],
      answers: [
        "**CI/CD** = automatisch bauen, testen & deployen bei jedem Code-Update.",
        "GitHub Actions, Jenkins, GitLab CI — weniger menschliche Fehler.",
        "Frag: Git, Docker, DevOps, Agile."
      ]
    },
    {
      keys: ["serverless", "lambda function", "faas", "ohne server verwalten"],
      answers: [
        "**Serverless** = Code laeuft in der Cloud ohne eigenen Server zu pflegen — zahlen pro Aufruf.",
        "AWS Lambda ist bekannt. Gut fuer APIs & Events.",
        "Frag: AWS, API, Microservices."
      ]
    },
    {
      keys: ["microservices", "micro service architektur", "verteilte dienste"],
      answers: [
        "**Microservices** = App aus vielen kleinen Diensten statt einem Monolithen — unabhaengig skalierbar.",
        "Komplexer zu betreiben. Oft mit Docker/Kubernetes.",
        "Frag: API, Docker, Kubernetes, Go."
      ]
    },
    {
      keys: ["saas", "software as a service", "cloud software abo"],
      answers: [
        "**SaaS** = Software im Abo ueber Browser — z.B. Notion, Slack, Figma.",
        "Kein Install, Updates automatisch. Datenschutz pruefen.",
        "Frag: Cloud, Datenschutz, UX."
      ]
    },
    {
      keys: ["websocket", "realtime web", "live chat technik"],
      answers: [
        "**WebSockets** = dauerhafte Verbindung Browser ↔ Server — Chat, Spiele, Live-Daten.",
        "Anders als normales HTTP (Request/Response).",
        "Frag: JavaScript, API, Discord."
      ]
    },
    {
      keys: ["vite", "vite build", "frontend bundler"],
      answers: [
        "**Vite** = schneller Build-Tool fuer moderne Web-Apps — Dev-Server & Bundling.",
        "Standard bei Vue/React-Projekten. Alternative: Webpack.",
        "Frag: Vue, JavaScript, npm."
      ]
    },
    {
      keys: ["npm", "node package manager", "yarn pnpm"],
      answers: [
        "**npm** = Paketmanager fuer JavaScript — Bibliotheken installieren (`npm install`).",
        "Alternativen: yarn, pnpm. `package.json` listet Abhaengigkeiten.",
        "Frag: JavaScript, Node, Git."
      ]
    },
    {
      keys: ["seo", "suchmaschinenoptimierung", "google ranking", "keywords seo"],
      answers: [
        "**SEO** = Webseiten fuer Suchmaschinen optimieren — Inhalt, Struktur, Ladezeit, Links.",
        "Ehrliche Inhalte > Tricks. Langfristig nachhaltiger Traffic.",
        "Frag: HTML, Marketing, Copywriting."
      ]
    },
    {
      keys: ["wordpress cms", "content management", "cms website", "webseite pflegen"],
      answers: [
        "**CMS** = System zum Pflegen von Webseiten ohne Code — **WordPress** am verbreitetsten.",
        "Themes & Plugins. Sicherheit & Updates wichtig.",
        "Frag: PHP, HTML, SEO."
      ]
    },
    {
      keys: ["copywriting", "werbetext", "marketing text", "headline schreiben"],
      answers: [
        "**Copywriting** = ueberzeugende Texte fuer Werbung, Web, E-Mail — klar, zielgruppengerecht.",
        "Ehrlich bleiben — keine Irrefuehrung. Gut kombiniert mit UX & SEO.",
        "Frag: Marketing, Social Media, Figma."
      ]
    },
    {
      keys: ["diabetes", "blutzucker", "diabetes mellitus", "insulin"],
      answers: [
        "**Diabetes** = gestoerter **Blutzucker**-Stoffwechsel — Typ 1 (Insulin) & Typ 2 (Lebensstil/genetic).",
        "Behandlung: Ernaehrung, Bewegung, Medikamente. Regelmaessige Kontrolle.",
        "Frag: Ernaehrung, Medizin, Sport."
      ]
    },
    {
      keys: ["allergie", "heuschnupfen", "pollenallergie", "nahrungsmittelallergie"],
      answers: [
        "**Allergie** = Immunsystem reagiert ueber — Pollen (Heuschnupfen), Nuesse, Tierhaare …",
        "Symptome: Niesen, Jucken, Atemnot. Allergologe kann helfen.",
        "Frag: Medizin, Gesundheit, Insekten."
      ]
    },
    {
      keys: ["gluten", "zoeliakie", "celiac", "glutenfrei"],
      answers: [
        "**Zoeliakie** = Autoimmunreaktion auf **Gluten** (Weizen, Roggen, Gerste) — Darm beschaedigt.",
        "Strikt glutenfrei noetig. Nicht mit Mode-Diaet verwechseln.",
        "Frag: Ernaehrung, Medizin, Allergie."
      ]
    },
    {
      keys: ["physiotherapie", "ergotherapie", "rehabilitation bewegung"],
      answers: [
        "**Physiotherapie** = Bewegung & Training nach Verletzung/OP. **Ergotherapie** = Alltag wieder lernen.",
        "Wichtig fuer Genesung & Praevention. Rezept vom Arzt moeglich.",
        "Frag: Sport, Medizin, Erste Hilfe."
      ]
    },
    {
      keys: ["long covid", "post covid", "langzeitfolgen corona"],
      answers: [
        "**Long COVID** = Beschwerden Wochen/Monate nach COVID — Muedigkeit, Brain Fog, Atemnot.",
        "Noch Forschung. Geduld, aerztliche Begleitung, Pacing.",
        "Frag: Impfung, Medizin, Burnout."
      ]
    },
    {
      keys: ["elternzeit", "mutterschutz", "vaterschaftsurlaub", "elterngeld"],
      answers: [
        "**Elternzeit** & **Mutterschutz** = gesetzlicher Schutz fuer Eltern in DE — Zeit mit Kind, Kündigungsschutz.",
        "**Elterngeld** unterstuetzt Einkommen. Antraege frueh stellen.",
        "Frag: Kita, Gesellschaft, Deutschland."
      ]
    },
    {
      keys: ["kita", "kindergarten", "kinderbetreuung", "hort schule"],
      answers: [
        "**Kita** = fruehe Bildung & Betreuung (0–6). **Hort** nach der Schule.",
        "Recht auf Foerderung in DE. Qualitaet variiert — Wartelisten moeglich.",
        "Frag: Elternzeit, Schule, Psychologie."
      ]
    },
    {
      keys: ["bundesrat", "laenderkammer", "bundesrat deutschland"],
      answers: [
        "**Bundesrat** = Vertretung der **16 Bundeslaender** — mitwirken bei vielen Gesetzen.",
        "Zusammen mit Bundestag Gesetzgebung. Laender haben unterschiedliches Gewicht.",
        "Frag: Bundestag, Demokratie, Deutschland."
      ]
    },
    {
      keys: ["bundesverfassungsgericht", "verfassungsgericht", "karlsruhe gericht"],
      answers: [
        "**Bundesverfassungsgericht** (Karlsruhe) = Hueter des **Grundgesetzes** — prueft Gesetze & Streitigkeiten.",
        "Hoechstes Gericht fuer Verfassungsfragen in DE.",
        "Frag: Grundgesetz, Demokratie, Politik."
      ]
    },
    {
      keys: ["demografie", "bevoelkerungsentwicklung", "alterung gesellschaft", "geburtenrate"],
      answers: [
        "**Demografie** = Entwicklung der Bevoelkerung — Alterung, Geburten, Migration.",
        "DE altert — Folgen fuer Rente, Pflege, Arbeitsmarkt.",
        "Frag: Migration, Rente, Gesellschaft."
      ]
    },
    {
      keys: ["migration integration", "einwanderung deutschland", "integrationskurs", "zuwanderung"],
      answers: [
        "**Migration** = Menschen wechseln Land. **Integration** = Teilhabe, Sprache, Arbeit, Respekt.",
        "Deutschland ist Einwanderungsland. Debatte: Chancen & Herausforderungen.",
        "Frag: Demografie, Menschenrechte, Deutschland."
      ]
    },
    {
      keys: ["linux", "ubuntu", "debian linux", "betriebssystem linux"],
      answers: [
        "**Linux** = freies Unix-artiges OS — Server, Android-Basis, Entwickler-Liebling.",
        "Distributionen: **Ubuntu**, Debian, Fedora. Terminal, Paketmanager, Open Source.",
        "Frag: Open Source, Programmierung, Cybersecurity."
      ]
    },
    {
      keys: ["windows 11", "microsoft windows", "betriebssystem windows"],
      answers: [
        "**Windows** = meistverbreitetes Desktop-OS von Microsoft. **Windows 11** = moderner Look, Teams, Widgets.",
        "Gaming & Buero. Updates, Defender, Kompatibilitaet mit alter Software.",
        "Frag: Computer, Programmierung, Cybersecurity."
      ]
    },
    {
      keys: ["macos", "apple mac", "mac betriebssystem"],
      answers: [
        "**macOS** = Apple-Betriebssystem fuer Mac. Unix-Basis, starke Integration mit iPhone/iPad.",
        "Design, Video, Entwicklung beliebt. App Store, Time Machine, Spotlight.",
        "Frag: Smartphone, Programmierung, UX Design."
      ]
    },
    {
      keys: ["react native", "mobile app react", "react native app"],
      answers: [
        "**React Native** = Apps fuer iOS & Android mit **JavaScript/React** — ein Codebase, native UI-Komponenten.",
        "Meta/Facebook-Oekosystem. Alternative: Flutter. Frag: JavaScript, Flutter, Programmierung."
      ]
    },
    {
      keys: ["svelte", "sveltekit", "svelte framework"],
      answers: [
        "**Svelte** = UI-Framework — kompiliert zu effizientem JS, weniger Boilerplate als React.",
        "**SvelteKit** fuer Full-Stack-Apps. Beliebt fuer schnelle, leichte Web-Apps.",
        "Frag: JavaScript, Vue.js, Webentwicklung."
      ]
    },
    {
      keys: ["spring boot", "java spring", "spring framework"],
      answers: [
        "**Spring Boot** = Java-Framework fuer Backend & APIs — Enterprise-Standard, Microservices.",
        "Auto-Konfiguration, Security, Datenbank-Anbindung. Frag: Java, Microservices, REST API."
      ]
    },
    {
      keys: ["laravel", "php laravel", "laravel framework"],
      answers: [
        "**Laravel** = elegantes **PHP**-Framework — MVC, Eloquent ORM, Blade Templates, APIs.",
        "Beliebt fuer Web-Apps & Startups. Frag: PHP, WordPress, Programmierung."
      ]
    },
    {
      keys: ["deno", "bun runtime", "javascript runtime deno"],
      answers: [
        "**Deno** & **Bun** = moderne **JavaScript/TypeScript**-Runtimes — Alternative zu Node.js.",
        "Sicherer, schneller Build. Bun fokussiert Speed. Frag: npm, TypeScript, Node."
      ]
    },
    {
      keys: ["bluetooth", "nfc", "nahfeldfunk", "funktechnik kurzstrecke"],
      answers: [
        "**Bluetooth** = Kurzstrecken-Funk (Kopfhoerer, Maus). **NFC** = Nahfeld (zahlung, Karten).",
        "Beides im Alltag. Sicherheit: Pairing, keine sensiblen Daten ungeschuetzt teilen.",
        "Frag: Smartphone, WLAN, IoT."
      ]
    },
    {
      keys: ["5g", "6g", "mobilfunk netz", "lte 5g unterschied"],
      answers: [
        "**5G** = schnelles Mobilfunknetz — niedrige Latenz, mehr Geraete, IoT. **6G** in Forschung.",
        "Debatte: Ausbau, Energie, Reichweite. Frag: WLAN, Internet, Smartphone."
      ]
    },
    {
      keys: ["starlink", "satelliten internet", "elon musk starlink"],
      answers: [
        "**Starlink** = Satelliten-Internet (Low Earth Orbit) — Internet in entlegenen Regionen.",
        "Viele kleine Satelliten. Themen: Lichtverschmutzung, Kosten, Latenz. Frag: Internet, NASA, WLAN."
      ]
    },
    {
      keys: ["rag", "retrieval augmented generation", "ki wissen abruf"],
      answers: [
        "**RAG** = KI holt **externes Wissen** aus Datenbank/Docs bevor sie antwortet — weniger Halluzination.",
        "Echtes LLM-Konzept. **NOCO Vault** ist lokal aehnlich — Keyword-Matching statt Embeddings.",
        "Frag: ChatGPT, Prompt Engineering, NOCO Vault."
      ]
    },
    {
      keys: ["halluzination ki", "ki erfindet fakten", "llm hallucination"],
      answers: [
        "**Halluzination** = KI erfindet plausible aber **falsche** Fakten — grosses LLM-Risiko.",
        "**NOCO AI** ist ehrlich simuliert — Antworten aus fester Vault, kein echtes LLM.",
        "Tipp: Faktencheck, Quellen. Frag: Fake News, Faktencheck, ChatGPT."
      ]
    },
    {
      keys: ["prompt injection", "ki sicherheit prompt", "jailbreak ki"],
      answers: [
        "**Prompt Injection** = Manipulation von KI durch versteckte Anweisungen im Text — Sicherheitsrisiko.",
        "Wichtig bei Chatbots & APIs. **Zero Trust**, Input filtern. Frag: Cybersecurity, Prompt Engineering."
      ]
    },
    {
      keys: ["zero trust", "zero trust security", "never trust always verify"],
      answers: [
        "**Zero Trust** = Sicherheitsmodell: **nie blind vertrauen** — jeden Zugriff pruefen, auch intern.",
        "MFA, Least Privilege, Segmentierung. Modernes IT-Security-Konzept.",
        "Frag: Cybersecurity, VPN, Passwort."
      ]
    },
    {
      keys: ["relativitaetstheorie", "einstein relativitaet", "e mc2"],
      answers: [
        "**Relativitaetstheorie** (Einstein): **Speziell** = Zeit & Raum relativ bei hoher Geschwindigkeit. **Allgemein** = Gravitation kruemmt Raumzeit.",
        "E=mc² verbindet Masse & Energie. GPS nutzt Korrekturen! Frag: Physik, Quantenphysik, Licht."
      ]
    },
    {
      keys: ["immunsystem", "abwehr koerper", "immunitaet"],
      answers: [
        "**Immunsystem** = Koerperabwehr gegen Krankheitserreger — angeboren & erworben (Antikoerper).",
        "Impfungen trainieren Immunsystem. Frag: Impfung, Medizin, Allergie."
      ]
    },
    {
      keys: ["antibiotikaresistenz", "resistente bakterien", "mrsa"],
      answers: [
        "**Antibiotikaresistenz** = Bakterien ueberleben Antibiotika — globale Gesundheitsgefahr.",
        "Nur wenn noetig einnehmen, nicht abbrechen. Forschung an neuen Wirkstoffen.",
        "Frag: Medizin, Antibiotika, Gesundheit."
      ]
    },
    {
      keys: ["organspende", "spenderausweis", "organspende deutschland"],
      answers: [
        "**Organspende** rettet Leben — Herz, Niere, Leber etc. In DE: Entscheidung & Ausweis wichtig.",
        "Regeln & ethische Debatte. Aufklaerung durch Aerzte. Frag: Medizin, Ethik, Gesundheit."
      ]
    },
    {
      keys: ["pflegeberuf", "altenpflege", "krankenpflege ausbildung"],
      answers: [
        "**Pflege** = essenzieller Beruf — Kranken- & Altenpflege, hohe Belastung, Fachkraeftemangel.",
        "Ausbildung, Gehalt, Wertschaetzung in Debatte. Frag: Medizin, Burnout, Gesellschaft."
      ]
    },
    {
      keys: ["mindestlohn", "lohn untergrenze", "mindestlohn deutschland"],
      answers: [
        "**Mindestlohn** = gesetzliche Lohnuntergrenze — soll Armut trotz Arbeit verhindern.",
        "Wird regelmaessig angepasst. Debatte: Wirtschaft vs. Gerechtigkeit. Frag: Wirtschaft, Inflation, Arbeit."
      ]
    },
    {
      keys: ["gewerkschaft", "tarifvertrag", "streik recht"],
      answers: [
        "**Gewerkschaften** verhandeln **Tarifvertraege** — Lohn, Arbeitszeit, Streikrecht.",
        "Mitbestimmung in DE stark. Frag: Mindestlohn, Demokratie, Wirtschaft."
      ]
    },
    {
      keys: ["inflation", "teuerung", "geldentwertung", "inflationsrate"],
      answers: [
        "**Inflation** = allgemeiner Preisanstieg — Geld verliert Kaufkraft. Gemessen als Inflationsrate.",
        "Ursachen: Energie, Nachfrage, Geldpolitik. **Leitzins** als Gegenmittel. Frag: Wirtschaft, EZB, Geld."
      ]
    },
    {
      keys: ["leitzins", "ezb zins", "europaeische zentralbank"],
      answers: [
        "**Leitzins** = Zins der Zentralbank (**EZB** in Eurozone) — steuert Kreditkosten & Inflation.",
        "Hoch = bremsen, niedrig = foerdern. Frag: Inflation, Wirtschaft, Geld."
      ]
    },
    {
      keys: ["aktien", "boerse anfaenger", "etf fonds"],
      answers: [
        "**Aktien** = Unternehmensanteile an der **Boerse**. **ETF** = breit gestreuter guenstiger Fonds.",
        "Risiko: Kursschwankungen. Langfristig oft Diversifikation. Keine Anlageberatung — Grundlagen only.",
        "Frag: Wirtschaft, Inflation, Geld."
      ]
    },
    {
      keys: ["bafög", "bafoeg", "studienfinanzierung", "studentenkredit"],
      answers: [
        "**BAföG** = staatliche Studienfinanzierung in DE — Zuschuss + Darlehen, einkommensabhaengig.",
        "Alternativen: Job, Stipendium, Kredit. Frag: Abitur, Studium, Wirtschaft."
      ]
    },
    {
      keys: ["duales studium", "studium und ausbildung", "dual studieren"],
      answers: [
        "**Duales Studium** = Studium + Praxis im Unternehmen — verdienen lernen, starke Jobchancen.",
        "Beliebt in DE (Wirtschaft, IT, Ingenieur). Frag: Ausbildung, Programmierung, Bewerbung."
      ]
    },
    {
      keys: ["montessori", "montessori paedagogik", "waldorfschule", "waldorf paedagogik"],
      answers: [
        "**Montessori** = kindgerechtes selbststaendiges Lernen. **Waldorf** = kuenstlerisch-ganzheitlich (Steiner).",
        "Alternative Schulformen neben staatlichen. Frag: Kita, Schule, Lernen."
      ]
    },
    {
      keys: ["barrierefreiheit", "accessibility web", "inklusion digital"],
      answers: [
        "**Barrierefreiheit** = digitale Inhalte fuer alle nutzbar — Screenreader, Kontrast, Tastatur, Untertitel.",
        "Web: WCAG-Richtlinien. Gesetzlich relevant. Frag: UX Design, Inklusion, Diversitaet."
      ]
    },
    {
      keys: ["blender", "3d modellierung", "3d software blender"],
      answers: [
        "**Blender** = kostenlose **3D-Software** — Modellierung, Animation, Rendering. Open Source.",
        "Community riesig. Frag: 3D-Druck, Open Source, UX Design."
      ]
    },
    {
      keys: ["fotografie", "fotografie grundlagen", "kamera einstellungen"],
      answers: [
        "**Fotografie-Grundlagen:** Belichtungsdreieck (Blende, Verschluss, ISO), Komposition, Licht.",
        "Smartphone reicht oft. RAW fuer Profis. Frag: Kunst, Reisen, Smartphone."
      ]
    },
    {
      keys: ["videobearbeitung", "video schneiden", "premiere davinci"],
      answers: [
        "**Videobearbeitung** = Schneiden, Farbe, Ton — Tools: DaVinci Resolve (free), Premiere, CapCut.",
        "Story > Effekte. Frag: TikTok, Influencer, Fotografie."
      ]
    },
    {
      keys: ["streaming", "netflix spotify", "video streaming"],
      answers: [
        "**Streaming** = Medien uebers Internet — Netflix, Disney+, Spotify, YouTube.",
        "Abo-Modelle, Datenverbrauch, regionale Lizenzen. Frag: Internet, Musik, Social Media."
      ]
    },
    {
      keys: ["meme", "memes internet", "internetkultur"],
      answers: [
        "**Memes** = verbreitete Internet-Humor-Bilder/Texte — schnelle Kultur, manchmal politisch.",
        "Ironie & Referenzen. Frag: Social Media, Fake News, Satire."
      ]
    },
    {
      keys: ["satire", "politische satire", "karikatur"],
      answers: [
        "**Satire** = ueberspitzte Kritik mit Humor — Karikatur, Shows, Memes. Kunst der Meinungsfreiheit.",
        "Grenze zu Desinformation beachten. Frag: Fake News, Demokratie, Kunst."
      ]
    },
    {
      keys: ["pressefreiheit", "journalismus", "reporter ohne grenzen"],
      answers: [
        "**Pressefreiheit** = Journalisten duerfen recherchieren & berichten — Grundlage der Demokratie.",
        "**Journalismus**: Recherche, Quellen, Ethik. Frag: Fake News, Demokratie, Menschenrechte."
      ]
    },
    {
      keys: ["whistleblower", "hinweisgeber", "whistleblowing"],
      answers: [
        "**Whistleblower** melden Missstaende (Korruption, Umwelt) — oft rechtlich geschuetzt, riskant.",
        "Hinweisgeberschutz in DE. Frag: Journalismus, Cybersecurity, Ethik."
      ]
    },
    {
      keys: ["erdbeben", "seismologie", "erdbeben warnung"],
      answers: [
        "**Erdbeben** = tektonische Plattenbewegungen — Richter-Skala misst Staerke. Tsunami-Risiko an Kuesten.",
        "Fruehwarnsysteme, sichere Bauweise. Frag: Vulkan, Geographie, Tsunami."
      ]
    },
    {
      keys: ["tornado", "wirbelsturm usa", "sturm tornado"],
      answers: [
        "**Tornado** = extrem schneller Luftwirbel — typisch USA-Mittwesten. **Hurrikan** = tropischer Grosssturm.",
        "Frag: Wetter, Klimawandel, Geographie."
      ]
    },
    {
      keys: ["artensterben", "biodiversitaet", "ausgestorbene arten"],
      answers: [
        "**Artensterben** = Beschleunigung durch Habitatverlust, Klima, Jagd — **Biodiversitaet** sinkt.",
        "Oekosysteme instabiler. Schutz: Schutzgebiete, Nachhaltigkeit. Frag: Oekologie, Klimawandel, Regenwald."
      ]
    },
    {
      keys: ["ozonloch", "ozonschicht", "cfc ozon"],
      answers: [
        "**Ozonschicht** schuetzt vor UV — **Ozonloch** durch CFCs (Montreal-Protokoll half!).",
        "Erfolgsstory internationaler Umweltpolitik. Frag: Klimawandel, Chemie, Umweltschutz."
      ]
    },
    {
      keys: ["atomkraft", "kernkraft pro contra", "akw deutschland"],
      answers: [
        "**Atomkraft** = viel Energie, wenig CO2 — Risiken: Unfaelle, Endlager, Proliferation.",
        "DE Ausstieg weit fortgeschritten. Debatte global offen. Frag: Erneuerbare, Klimawandel, Physik."
      ]
    },
    {
      keys: ["schengen", "schengen raum", "grenzkontrolle eu"],
      answers: [
        "**Schengen-Raum** = viele EU-Staaten ohne feste Grenzkontrollen — freies Reisen.",
        "Ausnahmen bei Krisen moeglich. Frag: EU, Reisen, Migration."
      ]
    },
    {
      keys: ["uno", "vereinte nationen", "un sicherheitsrat"],
      answers: [
        "**UNO** = Vereinte Nationen — Frieden, Menschenrechte, Hilfe. **Sicherheitsrat** mit Vetomächten.",
        "Kritik: langsam, Machtungleichgewicht. Frag: WHO, NATO, Menschenrechte."
      ]
    },
    {
      keys: ["who", "weltgesundheitsorganisation", "who pandemie"],
      answers: [
        "**WHO** = Weltgesundheitsorganisation der UN — Koordination bei Pandemien, Impfstoff, Standards.",
        "Frag: Impfung, Long COVID, Medizin."
      ]
    },
    {
      keys: ["paralympics", "para sport", "behinderung sport"],
      answers: [
        "**Paralympics** = Spitzensport fuer Athletinnen mit Behinderung — Inklusion & Leistung.",
        "Klasseneinteilung nach Funktion. Frag: Olympia, Inklusion, Sport."
      ]
    },
    {
      keys: ["speedrunning", "speedrun gaming", "spiel schnell durchspielen"],
      answers: [
        "**Speedrunning** = Spiele so schnell wie moeglich durchspielen — Community, Glitches, Weltrekorde.",
        "Twitch/YouTube-Kultur. Frag: E-Sport, Gaming, Internetkultur."
      ]
    },
    {
      keys: ["next.js", "nextjs", "next js framework", "react next"],
      answers: [
        "**Next.js** = React-Framework fuer Full-Stack-Web — SSR, Routing, API-Routes, Vercel-Deployment.",
        "Beliebt fuer SEO-starke Apps. Frag: React, JavaScript, Vite."
      ]
    },
    {
      keys: ["nuxt", "nuxt.js", "vue nuxt"],
      answers: [
        "**Nuxt** = Vue-Framework wie Next.js fuer React — SSR, Datei-Routing, SEO.",
        "Frag: Vue.js, JavaScript, Webentwicklung."
      ]
    },
    {
      keys: ["prisma", "prisma orm", "datenbank prisma"],
      answers: [
        "**Prisma** = modernes **ORM** fuer TypeScript/Node — typsichere DB-Queries, Migrationen.",
        "PostgreSQL, MySQL, SQLite. Frag: SQL, TypeScript, Supabase."
      ]
    },
    {
      keys: ["supabase", "firebase alternative", "backend as a service"],
      answers: [
        "**Supabase** = Open-Source-**BaaS** — Postgres, Auth, Storage, Realtime. Alternative zu Firebase.",
        "Frag: Firebase, SQL, REST API."
      ]
    },
    {
      keys: ["firebase", "google firebase", "firestore"],
      answers: [
        "**Firebase** = Google-Backend fuer Apps — Auth, Firestore-DB, Hosting, Push.",
        "Schneller Start, Vendor-Lock-in moeglich. Frag: Supabase, JavaScript, Mobile."
      ]
    },
    {
      keys: ["redis", "cache redis", "in memory datenbank"],
      answers: [
        "**Redis** = ultraschneller **In-Memory-Cache** & Key-Value-Store — Sessions, Queues, Leaderboards.",
        "Frag: Datenbank, Microservices, Performance."
      ]
    },
    {
      keys: ["kafka", "apache kafka", "event streaming"],
      answers: [
        "**Apache Kafka** = Event-Streaming-Plattform — viele Systeme tauschen Nachrichten in Echtzeit.",
        "Big Data, Microservices. Frag: RabbitMQ, Microservices, Datenbank."
      ]
    },
    {
      keys: ["elasticsearch", "elastic search", "volltextsuche"],
      answers: [
        "**Elasticsearch** = Such- & Analyse-Engine — Volltextsuche, Logs (ELK-Stack).",
        "Frag: Datenbank, SEO, DevOps."
      ]
    },
    {
      keys: ["ransomware", "erpressungstrojaner", "malware verschlüsselung"],
      answers: [
        "**Ransomware** = Malware verschluesselt Daten & erpresst Loesegeld — Backups & Updates sind Schutz.",
        "Nie zahlen ohne Plan! Frag: Cybersecurity, Malware, Passwort."
      ]
    },
    {
      keys: ["malware", "virus trojaner", "schadsoftware"],
      answers: [
        "**Malware** = Schadsoftware: Viren, Trojaner, Spyware, Ransomware.",
        "Schutz: Updates, Antivirus, Vorsicht bei Links/Anhaengen. Frag: Phishing, Cybersecurity."
      ]
    },
    {
      keys: ["web3", "dezentralisiertes internet", "web 3.0"],
      answers: [
        "**Web3** = Vision dezentraler Apps via Blockchain — Wallets, NFTs, DAOs. Kritik: Spekulation, Skalierung.",
        "Frag: Blockchain, NFT, Bitcoin."
      ]
    },
    {
      keys: ["nft digital", "non fungible token erklaert", "nft kunst"],
      answers: [
        "**NFT** = einzigartiger digitaler Token auf Blockchain — Kunst, Collectibles. Hype & Kritik.",
        "Frag: Web3, Blockchain, Krypto."
      ]
    },
    {
      keys: ["metaverse", "virtuelle welten meta", "metaverse zukunft"],
      answers: [
        "**Metaverse** = persistente 3D-Online-Welten — VR, Avatare, Events. VR/AR + Gaming + Social.",
        "Frag: VR und AR, Gaming, Web3."
      ]
    },
    {
      keys: ["autonomes fahren", "selbstfahrendes auto", "autopilot auto"],
      answers: [
        "**Autonomes Fahren** = Auto faehrt teils/vollstaendig selbst — Sensoren, KI, Regulierung.",
        "Level 0–5. Ethik & Haftung offen. Frag: KI, E-Mobilitaet, Robotik."
      ]
    },
    {
      keys: ["e-mobilitaet", "elektroauto laden", "ev auto"],
      answers: [
        "**E-Mobilitaet** = Elektroautos + Ladeinfrastruktur — weniger lokale Emissionen, Batterie-Rohstoffe.",
        "Frag: Lithium, Klimawandel, Wasserstoff."
      ]
    },
    {
      keys: ["waermepumpe", "heizung waermepumpe", "heat pump"],
      answers: [
        "**Waermepumpe** = heizt effizient mit Umgebungswaerme — wichtig fuer Energiewende.",
        "Strom statt Gas/Oel. Frag: Solarenergie, Klimawandel, Geothermie."
      ]
    },
    {
      keys: ["kreislaufwirtschaft", "circular economy", "recycling wirtschaft"],
      answers: [
        "**Kreislaufwirtschaft** = Produkte wiederverwenden statt wegwerfen — Reparatur, Recycling, Design.",
        "Gegenteil: Linear-Wirtschaft. Frag: Nachhaltigkeit, Muelltrennung, Right to Repair."
      ]
    },
    {
      keys: ["right to repair", "reparaturrecht", "reparatur freiheit"],
      answers: [
        "**Right to Repair** = Recht auf Reparatur — Ersatzteile, Anleitungen, keine kuenstliche Obsoleszenz.",
        "EU bewegt sich dahin. Frag: Kreislaufwirtschaft, Nachhaltigkeit, E-Waste."
      ]
    },
    {
      keys: ["eu ki verordnung", "eu ai act", "ki gesetz europa"],
      answers: [
        "**EU AI Act** = EU-Regulierung fuer KI — Risikoklassen, Transparenz, Verbote bei Social Scoring.",
        "Weltweit beachtet. Frag: DSGVO, KI, Datenschutz."
      ]
    },
    {
      keys: ["creative commons", "cc lizenz", "urheberrecht lizenz"],
      answers: [
        "**Creative Commons** = flexible **Urheber-Lizenzen** — CC BY, NC, SA fuer freie Nutzung mit Regeln.",
        "Frag: Copyright, Open Source, Kunst."
      ]
    },
    {
      keys: ["urheberrecht", "copyright", "geistiges eigentum"],
      answers: [
        "**Urheberrecht** schuetzt Werke (Text, Bild, Musik, Code) — Nutzung braucht Erlaubnis/Lizenz.",
        "Ausnahmen: Zitat, Parodie. Frag: Creative Commons, NFT, Musik."
      ]
    },
    {
      keys: ["mrna impfstoff", "mrna technologie", "biontech impfstoff"],
      answers: [
        "**mRNA-Impfstoffe** lehren Zellen, Abwehr zu bauen — COVID-Durchbruch, schnell anpassbar.",
        "Frag: Impfung, Immunsystem, Medizin."
      ]
    },
    {
      keys: ["epigenetik", "epigenetik erklaert", "gene expression"],
      answers: [
        "**Epigenetik** = wie Gene an/aus geschaltet werden **ohne** DNA-Aenderung — Umwelt, Ernaehrung, Stress.",
        "Frag: Genetik, DNA, Medizin."
      ]
    },
    {
      keys: ["stammzellen", "stammzelltherapie", "embryonale stammzellen"],
      answers: [
        "**Stammzellen** koennen sich zu vielen Zelltypen entwickeln — Forschung & Therapie, ethische Debatte.",
        "Frag: Genetik, Medizin, CRISPR."
      ]
    },
    {
      keys: ["herdenimmunitaet", "herd immunity", "impfschutz gemeinschaft"],
      answers: [
        "**Herdenimmunitaet** = genug Geimpfte/Genesene schuetzen auch Ungeimpfte — schwierig bei hoher Ansteckung.",
        "Frag: Impfung, Immunsystem, Pandemie."
      ]
    },
    {
      keys: ["telemedizin", "online arzt", "videosprechstunde"],
      answers: [
        "**Telemedizin** = Arzt per Video/App — Diagnose, Rezepte, Follow-up. Praktisch, Grenzen bei Untersuchung.",
        "Frag: Digital Health, Medizin, Datenschutz."
      ]
    },
    {
      keys: ["adhs", "ads aufmerksamkeit", "hyperaktivitaet"],
      answers: [
        "**ADHS** = Aufmerksamkeitsdefizit/Hyperaktivitaet — nicht Faulheit, Neurodiversitaet. Diagnose & Strategien helfen.",
        "Frag: Autismus, Lernen, Psychologie."
      ]
    },
    {
      keys: ["migräne", "migrane kopfschmerz", "migraine"],
      answers: [
        "**Migräne** = starke Kopfschmerz-Attacken, oft mit Aura — Trigger, Medikamente, Ruhe.",
        "Frag: Medizin, Schlaf, Gesundheit."
      ]
    },
    {
      keys: ["vitamin d", "vitamin d mangel", "sonnenvitamin"],
      answers: [
        "**Vitamin D** = Sonne + Ernaehrung — wichtig fuer Knochen & Immunsystem. Mangel haeufig im Winter.",
        "Frag: Gesundheit, Ernaehrung, Medizin."
      ]
    },
    {
      keys: ["pomodoro", "pomodoro technik", "tomaten uhr lernen"],
      answers: [
        "**Pomodoro** = 25 Min fokussiert arbeiten, 5 Min Pause — gegen Prokrastination & Ueberforderung.",
        "Frag: Lernen, Prokrastination, Homeoffice."
      ]
    },
    {
      keys: ["mindmap", "mind mapping", "gedankenlandkarte"],
      answers: [
        "**Mindmap** = Ideen visuell verzweigen — Zentrum = Thema, Aeste = Unterpunkte. Gut zum Lernen & Planen.",
        "Frag: Lernen, Kreativitaet, Cornell-Notizen."
      ]
    },
    {
      keys: ["cornell notizen", "cornell methode", "notizen cornell"],
      answers: [
        "**Cornell-Methode** = Notizen in Spalten: Hauptteil, Stichworte, Zusammenfassung — besseres Behalten.",
        "Frag: Lernen, Mindmap, Schule."
      ]
    },
    {
      keys: ["wissenschaftliche methode", "hypothese experiment", "peer review"],
      answers: [
        "**Wissenschaftliche Methode:** Beobachtung → Hypothese → Experiment → Auswertung → **Peer Review**.",
        "Frag: Faktencheck, Physik, Forschung."
      ]
    },
    {
      keys: ["kritisches denken", "critical thinking", "logisch denken"],
      answers: [
        "**Kritisches Denken** = Quellen pruefen, Annahmen hinterfragen, logische Fehlschluesse erkennen.",
        "Frag: Fake News, Faktencheck, Philosophie."
      ]
    },
    {
      keys: ["verhandlung", "verhandeln lernen", "negotiation skills"],
      answers: [
        "**Verhandeln:** Ziele klar, Win-win suchen, aktiv zuhoeren, BATNA (Alternative) kennen.",
        "Frag: Bewerbung, Wirtschaft, Psychologie."
      ]
    },
    {
      keys: ["lichtverschmutzung", "light pollution", "nachthimmel"],
      answers: [
        "**Lichtverschmutzung** = kuenstliches Licht stoert Nacht, Insekten, Sterne — Daemmerungsschalter helfen.",
        "Frag: Astronomie, Oekologie, Nachhaltigkeit."
      ]
    },
    {
      keys: ["imkerei", "bienen haltung", "honig erzeugen"],
      answers: [
        "**Imkerei** = Bienen halten fuer Honig & Bestaeubung — wichtig fuer Oekosystem.",
        "Frag: Bienensterben, Nachhaltigkeit, Garten."
      ]
    },
    {
      keys: ["urban gardening", "stadtgarten", "balkon garten"],
      answers: [
        "**Urban Gardening** = Gemuese/Kraeuter in der Stadt — Balkon, Hochbeet, Gemeinschaftsgarten.",
        "Frag: Nachhaltigkeit, Permakultur, Ernaehrung."
      ]
    },
    {
      keys: ["github copilot", "ki code assistent", "copilot programmierung"],
      answers: [
        "**GitHub Copilot** = KI-Code-Vorschlaege im Editor — produktiv, aber Code pruefen & Lizenzen beachten.",
        "Frag: Prompt Engineering, Programmierung, Open Source."
      ]
    },
    {
      keys: ["midjourney", "ki bildgenerator", "dall-e stable diffusion"],
      answers: [
        "**KI-Bildgeneratoren** (Midjourney, DALL·E, SD) erzeugen Bilder aus Text — Kunst, Ethik, Urheberrecht.",
        "**NOCO Render** = offline Pixel-Alternative. Frag: NOCO Render, KI, Copyright."
      ]
    },
    {
      keys: ["alexa", "sprachassistent", "siri google assistant"],
      answers: [
        "**Sprachassistenten** (Alexa, Siri, Google) — Smart Home, aber Datenschutz & Mikrofon beachten.",
        "Frag: Smart Home, IoT, Datenschutz."
      ]
    },
    {
      keys: ["drohnen regeln", "drohne gesetz deutschland", "dronen fliegen"],
      answers: [
        "**Drohnen in DE:** Registrierung, Hoehenlimits, Abstand zu Menschen/Flughafen, Versicherung.",
        "EU-Regeln harmonisiert. Frag: Drohne Bild, Luftrecht, Hobby."
      ]
    },
    {
      keys: ["cookie banner", "cookies website", "cookie einwilligung"],
      answers: [
        "**Cookie-Banner** = Einwilligung fuer Tracking-Cookies (DSGVO/ePrivacy). Notwendige Cookies ok, Rest optional.",
        "Frag: DSGVO, Datenschutz, Webentwicklung."
      ]
    },
    {
      keys: ["fair trade", "fairer handel", "fairtrade kaffee"],
      answers: [
        "**Fair Trade** = bessere Preise & Bedingungen fuer Produzenten im Globalen Sueden — Siegel auf Kaffee, Kakao.",
        "Frag: Nachhaltigkeit, Wirtschaft, Ethik."
      ]
    },
    {
      keys: ["hyperloop", "vakuumbahn", "elon musk hyperloop"],
      answers: [
        "**Hyperloop** = Konzept schneller Transport in Rohren (Vakuum/Magnetschwebe) — noch experimentell.",
        "Frag: Bahn, Zukunft, E-Mobilitaet."
      ]
    },
    {
      keys: ["placebo effekt", "nocebo", "placebo studie"],
      answers: [
        "**Placebo** = Wirkung ohne aktiven Wirkstoff (Erwartung). **Nocebo** = negative Erwartung verstaerkt Beschwerden.",
        "Wichtig in Studien. Frag: Medizin, Psychologie, Antibiotika."
      ]
    },
    {
      keys: ["journaling", "tagebuch schreiben", "dankbarkeitstagebuch"],
      answers: [
        "**Journaling** = regelmaessig schreiben — Gedanken sortieren, Dankbarkeit, Stress abbauen.",
        "Frag: Achtsamkeit, Psychologie, Lernen."
      ]
    },
    {
      keys: ["oeffentliche rede", "praesentation tipps", "rhetorik"],
      answers: [
        "**Oeffentliche Rede:** Struktur (Einleitung–Hauptteil–Schluss), Blickkontakt, langsam, Storytelling.",
        "Ueben hilft! Frag: Verhandlung, Bewerbung, Smalltalk."
      ]
    },
    {
      keys: ["openai", "open ai", "chatgpt firma", "sam altman openai"],
      answers: [
        "**OpenAI** = KI-Firma hinter **ChatGPT**, GPT-4/5, DALL·E, Whisper. Cloud-APIs, Abos, starke Modelle — Daten & Kosten beachten.",
        "Vergleich: Anthropic Claude, Google Gemini, Meta Llama. **NOCO AI** = offline Vault, kein OpenAI."
      ]
    },
    {
      keys: ["anthropic", "claude ki", "claude ai", "anthropic claude"],
      answers: [
        "**Anthropic** entwickelt **Claude** — Konkurrent zu ChatGPT. Fokus auf Sicherheit, lange Kontexte, API fuer Apps.",
        "Frag: OpenAI, Prompt Engineering, KI-Ethik, RAG."
      ]
    },
    {
      keys: ["google gemini", "gemini ki", "bard google", "gemini modell"],
      answers: [
        "**Google Gemini** = multimodales KI-Modell (Text, Bild, Code). In Search, Workspace, Android integriert.",
        "Frag: OpenAI, Llama, KI im Alltag, Datenschutz."
      ]
    },
    {
      keys: ["meta llama", "llama modell", "llama 3", "llama open source"],
      answers: [
        "**Meta Llama** = Open-Weight-Sprachmodelle — lokal & in der Cloud nutzbar. Wichtig fuer Open-Source-KI.",
        "Frag: Mistral, Fine-Tuning, Open Source, RAG."
      ]
    },
    {
      keys: ["mistral ai", "mistral modell", "mixtral", "mistral open"],
      answers: [
        "**Mistral AI** (Frankreich) = effiziente Open-Modelle (Mistral, Mixtral). Schnell, EU-nah, beliebt bei Entwicklern.",
        "Frag: Llama, LLM, Programmierung, EU AI Act."
      ]
    },
    {
      keys: ["stable diffusion", "sd xl", "stable diffusion bild", "automatic1111"],
      answers: [
        "**Stable Diffusion** = Open-Source-Bild-KI. Lokal moeglich, Styles & LoRAs — Ethik, Urheberrecht, Deepfakes beachten.",
        "**NOCO Render** = offline Pixel-Alternative. Frag: Midjourney, KI-Bilder, Copyright."
      ]
    },
    {
      keys: ["embedding", "vektor embedding", "text embedding", "semantic search"],
      answers: [
        "**Embeddings** = Text als Zahlenvektor — aehnliche Bedeutung = aehnliche Vektoren. Basis fuer semantische Suche & **RAG**.",
        "Frag: Vektordatenbank, RAG, Maschinelles Lernen."
      ]
    },
    {
      keys: ["vektordatenbank", "vector database", "pinecone", "weaviate chroma"],
      answers: [
        "**Vektordatenbank** speichert Embeddings fuer schnelle Aehnlichkeitssuche — Herzstueck vieler RAG-Systeme.",
        "Beispiele: Pinecone, Weaviate, Chroma, pgvector. Frag: RAG, Elasticsearch."
      ]
    },
    {
      keys: ["fine tuning", "fine-tuning llm", "modell trainieren ki", "lora training"],
      answers: [
        "**Fine-Tuning** = vortrainiertes LLM auf eigene Daten anpassen (z. B. **LoRA**). Braucht Daten, GPU, Qualitaetskontrolle.",
        "Frag: Llama, Prompt Engineering, Halluzination."
      ]
    },
    {
      keys: ["context window", "kontextfenster", "token limit", "max tokens"],
      answers: [
        "**Kontextfenster** = wie viel Text ein Modell auf einmal „sieht“ (Tokens). Gross = laengere Docs, teurer/s langsamer.",
        "Frag: Prompt Engineering, RAG, Token."
      ]
    },
    {
      keys: ["halbleiter", "semiconductor", "chip industrie", "silizium chip"],
      answers: [
        "**Halbleiter** = Basis moderner Chips (CPU, GPU, Speicher). Lithografie, Foundries (TSMC, Intel, Samsung).",
        "Frag: Chip-Krise, GPU, KI-Hardware."
      ]
    },
    {
      keys: ["chip krise", "chip shortage", "halbleiter engpass", "tsmc"],
      answers: [
        "**Chip-Krise** = Engpaesse bei Halbleitern (Pandemie, Nachfrage, Geopolitik). Auto, Gaming, KI betroffen.",
        "Frag: Halbleiter, Lieferkette, Taiwan."
      ]
    },
    {
      keys: ["buddhismus", "buddha lehre", "vier edle wahrheiten", "nirvana buddhismus"],
      answers: [
        "**Buddhismus** = Leid verstehen, Achtsamkeit, **Vier Edle Wahrheiten**, Meditation. Viele Schulen (Theravada, Mahayana, Zen).",
        "Frag: Achtsamkeit, Meditation, Philosophie."
      ]
    },
    {
      keys: ["hinduismus", "hindu religion", "karma dharma", "veden hindu"],
      answers: [
        "**Hinduismus** = indische Religion mit Karma, Dharma, Wiedergeburt, vielen Gottheiten & heiligen Texten (Veden).",
        "Frag: Buddhismus, Philosophie, Indien."
      ]
    },
    {
      keys: ["islam grundlagen", "islam religion", "koran", "fuenf saeulen islam"],
      answers: [
        "**Islam** — Fuenf Saellen: Schahada, Gebet, Almosen, Fasten (Ramadan), Haddsch. Koran als heilige Schrift.",
        "Respektvoll lernen. Frag: Christentum, Judentum, Geschichte."
      ]
    },
    {
      keys: ["christentum grundlagen", "christliche religion", "bibel", "jesus christus"],
      answers: [
        "**Christentum** basiert auf Jesus Christus, Bibel (Alt + Neu). Katholiken, Protestanten, Orthodoxe u. a.",
        "Frag: Judentum, Islam, Philosophie, Geschichte."
      ]
    },
    {
      keys: ["judentum grundlagen", "juedische religion", "tora", "synagoge"],
      answers: [
        "**Judentum** — Tora, Sabbat, Feiertage (Passah, Jom Kippur). Eine der aeltesten monotheistischen Religionen.",
        "Frag: Christentum, Israel, Geschichte."
      ]
    },
    {
      keys: ["tai chi", "taiji", "qigong tai chi", "tai chi uebungen"],
      answers: [
        "**Tai Chi** = langsame Bewegungsform aus China — Balance, Atmung, Entspannung. Verwandt mit **Qigong**.",
        "Frag: Achtsamkeit, Sport, Pilates."
      ]
    },
    {
      keys: ["erasmus", "erasmus plus", "auslandssemester eu", "erasmus stipendium"],
      answers: [
        "**Erasmus+** = EU-Programm fuer Auslandsaufenthalte (Studium, Praktikum, Schule). Mobilitaet & Sprachen.",
        "Frag: Studium, Sprachen lernen, EU."
      ]
    },
    {
      keys: ["duolingo", "sprachen lernen app", "fremdsprache lernen", "englisch lernen tipps"],
      answers: [
        "**Sprachen lernen:** taeglich ueben, hoeren & sprechen, Apps wie **Duolingo** als Einstieg — echte Gespraeche wichtig!",
        "Frag: Lernen, Erasmus, Reisen."
      ]
    },
    {
      keys: ["buergergeld", "bürgergeld", "hartz 4 reform", "grundsicherung arbeit"],
      answers: [
        "**Bürgergeld** = deutsche Grundsicherung fuer Arbeitssuchende (Nachfolger Hartz IV). Anspruch, Pflichten, Jobcenter.",
        "Frag: Sozialstaat, Mindestlohn, Wirtschaft."
      ]
    },
    {
      keys: ["wohngeld", "mietzuschuss", "wohngeld antrag", "wohnkosten hilfe"],
      answers: [
        "**Wohngeld** = staatlicher Zuschuss zu Miete/Wohnkosten fuer einkommensschwache Haushalte — eigenstaendig vom Bürgergeld.",
        "Frag: Mietrecht, Mietpreisbremse, Wirtschaft."
      ]
    },
    {
      keys: ["zinseszins", "compound interest", "zinsen rechnen", "sparplan zins"],
      answers: [
        "**Zinseszins** = Zinsen auf Zinsen — laesst Vermoegen exponentiell wachsen (oder Schulden!). Frueh sparen lohnt.",
        "Frag: ETF, Inflation, Altersvorsorge."
      ]
    },
    {
      keys: ["defi", "decentralized finance", "defi krypto", "liquidity pool"],
      answers: [
        "**DeFi** = Finanzdienste auf Blockchains ohne klassische Bank — Risiko: Hacks, Volatilitaet, Regulierung.",
        "Frag: Blockchain, NFT, Web3."
      ]
    },
    {
      keys: ["shopify", "e-commerce shop", "online shop erstellen", "woocommerce"],
      answers: [
        "**E-Commerce:** **Shopify**, WooCommerce, Etsy — Shop, Zahlung, Versand. Marketing & Recht (Impressum, DSGVO) nicht vergessen.",
        "Frag: Dropshipping, Marketing, DSGVO."
      ]
    },
    {
      keys: ["dropshipping", "dropship", "ohne lager verkaufen", "print on demand"],
      answers: [
        "**Dropshipping** = verkaufen ohne eigenes Lager — Lieferant versendet direkt. Duenne Margen, Qualitaetsrisiko.",
        "Frag: E-Commerce, Marketing, Nachhaltigkeit."
      ]
    },
    {
      keys: ["esg investing", "esg fonds", "nachhaltig investieren", "green finance"],
      answers: [
        "**ESG-Investing** beruecksichtigt Umwelt, Soziales, Governance. Greenwashing pruefen — Siegel & Transparenz lesen.",
        "Frag: ETF, Nachhaltigkeit, Klimawandel."
      ]
    },
    {
      keys: ["digitaler co2 fussabdruck", "co2 internet", "streaming co2", "datenverbrauch umwelt"],
      answers: [
        "**Digitaler CO2-Fussabdruck** durch Server, Streaming, Geraete. Effizienz, erneuerbare Energie, weniger Bloat helfen.",
        "Frag: Nachhaltigkeit, Cloud, Energie."
      ]
    },
    {
      keys: ["passives einkommen", "passive income", "dividenden einkommen", "mieteinnahmen"],
      answers: [
        "**Passives Einkommen** z. B. Dividenden, Miete, Lizenzgebuehren — braucht Kapital/Zeit upfront, kein „schnell reich“.",
        "Frag: ETF, Unternehmertum, Steuern."
      ]
    },
    {
      keys: ["altersvorsorge", "rente deutschland", "riester rente", "betriebsrente"],
      answers: [
        "**Altersvorsorge:** Gesetzliche Rente + private/betriebliche Vorsorge. Frueh starten, Riester/Ruerup je nach Situation.",
        "Frag: ETF, Zinseszins, Bürgergeld."
      ]
    },
    {
      keys: ["mietpreisbremse", "mietendeckel", "miete begrenzen", "mietspiegel"],
      answers: [
        "**Mietpreisbremse** begrenzt Mieterhoehungen in angespannten Maerkten — Mietspiegel & Ausnahmen beachten.",
        "Frag: Mietrecht, Wohngeld, Wirtschaft."
      ]
    },
    {
      keys: ["solid state batterie", "festkoerper akku", "solid state battery", "nae chste generation akku"],
      answers: [
        "**Solid-State-Batterien** = Festelektrolyt statt Fluessigkeit — potenziell sicherer & dichter. Noch teuer, in Entwicklung.",
        "Frag: E-Mobilität, Lithium, Energie."
      ]
    },
    {
      keys: ["perowskit solar", "perovskite solarzelle", "tandem solarzelle", "solarzelle neu"],
      answers: [
        "**Perowskit-Solarzellen** = effiziente duenne Schichten, oft in Tandem mit Silizium — Forschung & Stabilitaet im Fokus.",
        "Frag: Solarenergie, Klimawandel, Halbleiter."
      ]
    },
    {
      keys: ["vertical farming", "vertikale landwirtschaft", "indoor farm", "hydroponik turm"],
      answers: [
        "**Vertical Farming** = Gemuese in Etagen mit LED & Hydroponik — wenig Fläche, hoher Energiebedarf.",
        "Frag: Hydroponik, Nachhaltigkeit, Urban Gardening."
      ]
    },
    {
      keys: ["rewilding", "wiederwildung", "naturnahe waelder", "wolves rewild"],
      answers: [
        "**Rewilding** = Natur sich selbst ueberlassen — Arten rueckfuehren, Oekosysteme staerken (z. B. Biber, Woelfe).",
        "Frag: Artensterben, Oekologie, Nationalparks."
      ]
    },
    {
      keys: ["mycelium material", "pilz myzel", "mycelium verpackung", "fungi material"],
      answers: [
        "**Mycelium** (Pilzgeflecht) als Verpackung & Baustoff — biologisch abbaubar, Forschung boomt.",
        "Frag: Nachhaltigkeit, Kreislaufwirtschaft, Biologie."
      ]
    },
    {
      keys: ["neuromorphic computing", "neuromorphe chips", "spiking neural network", "brain inspired chip"],
      answers: [
        "**Neuromorphic Computing** ahmt Gehirn-Architektur — energieeffiziente KI-Chips (Forschung).",
        "Frag: KI-Hardware, Quantencomputer, Gehirn."
      ]
    },
    {
      keys: ["post quantum kryptografie", "post-quantum crypto", "quantensichere verschluesselung", "pqc"],
      answers: [
        "**Post-Quantum-Kryptografie** schuetzt vor Quanten-Angriffen — NIST-Standards rollen aus.",
        "Frag: Quantencomputer, Cybersecurity, Verschluesselung."
      ]
    },
    {
      keys: ["social engineering", "sozialtechnik hacker", "phishing psychologie", "pretexting"],
      answers: [
        "**Social Engineering** = Menschen manipulieren statt Code knacken — Phishing, Vishing, Druck & Vertrauen missbrauchen.",
        "Frag: Cybersecurity, Phishing, Passwort."
      ]
    },
    {
      keys: ["osint", "open source intelligence", "osint recherche", "internet recherche sicherheit"],
      answers: [
        "**OSINT** = oeffentliche Quellen systematisch nutzen (Social, Karten, Archive) — fuer Journalismus & Sicherheit.",
        "Frag: Faktencheck, Cybersecurity, Journalismus."
      ]
    },
    {
      keys: ["zettelkasten", "zettel kasten methode", "slip box notes", "niklas luhmann zettel"],
      answers: [
        "**Zettelkasten** = vernetzte Notizen (eine Idee pro Zettel, Links) — Luhmann-Methode, Basis fuer **Second Brain**.",
        "Frag: Obsidian, Notion, Lernen."
      ]
    },
    {
      keys: ["notion", "notion app", "notion workspace", "notion notes"],
      answers: [
        "**Notion** = All-in-One Workspace (Notizen, DBs, Tasks). Flexibel — Export & Offline beachten.",
        "Frag: Obsidian, Zettelkasten, Produktivitaet."
      ]
    },
    {
      keys: ["obsidian", "obsidian notes", "obsidian markdown", "obsidian vault"],
      answers: [
        "**Obsidian** = Markdown-Notizen lokal mit Graph-Links — ideal fuer Zettelkasten & PKM, Plugins stark.",
        "Frag: Notion, Zettelkasten, GTD."
      ]
    },
    {
      keys: ["gtd", "getting things done", "david allen gtd", "inbox zero methode"],
      answers: [
        "**GTD (Getting Things Done):** Erfassen → Klaeren → Organisieren → Reflektieren → Tun. Inbox leer halten.",
        "Frag: Pomodoro, Eisenhower, Produktivitaet."
      ]
    },
    {
      keys: ["eisenhower matrix", "eisenhower prinzip", "dringend wichtig matrix", "prioritaeten matrix"],
      answers: [
        "**Eisenhower-Matrix:** Dringend/Wichtig in 4 Felder — Fokus auf „wichtig, nicht dringend“ (Planung, Lernen).",
        "Frag: GTD, Pomodoro, Zeitmanagement."
      ]
    },
    {
      keys: ["latex", "latex dokument", "wissenschaft latex", "overleaf"],
      answers: [
        "**LaTeX** = professionelles Textsatz-System fuer Formeln & Papers — Overleaf online, steile Lernkurve.",
        "Frag: Wissenschaftliche Methode, Programmierung, APA."
      ]
    },
    {
      keys: ["plagiat", "plagiarismus", "abschlussarbeit plagiat", "wissenschaftliches plagiat"],
      answers: [
        "**Plagiat** = fremde Arbeit ohne Quelle — akademisch & beruflich verboten. Zitieren, Parafrasieren, Tools pruefen.",
        "Frag: APA, Wissenschaftliche Methode, Urheberrecht."
      ]
    },
    {
      keys: ["apa zitierstil", "apa style", "zitieren apa", "literaturverzeichnis apa"],
      answers: [
        "**APA-Stil** = Zitierformat (Autor, Jahr) in Psychologie & Sozialwissenschaften — konsistent & vollstaendig.",
        "Frag: Plagiat, LaTeX, Wissenschaftliche Methode."
      ]
    },
    {
      keys: ["umzug", "wohnungswechsel", "umziehen tipps", "mietwohnung umzug"],
      answers: [
        "**Umzug** = planen, packen, Kündigung/Mietvertrag, Adressänderung, Strom/Internet ummelden.",
        "Checkliste: Kisten labeln, wichtige Dokumente separat, Übergabeprotokoll bei Auszug.",
        "Frag: Mietrecht, Wohnen, Nachhaltigkeit (Entrümpeln)."
      ]
    },
    {
      keys: ["scheidung", "trennung", "beziehung beenden", "ehe scheidung"],
      answers: [
        "**Scheidung/Trennung** = rechtlich & emotional belastend — Anwalt, Mediation, Kinder im Fokus.",
        "Trennung ≠ automatisch Scheidung; Unterhalt, Sorgerecht, Vermögen klären.",
        "Frag: Familie, Konflikt, Psychologie — bei Gewalt: Hilfsangebote nutzen."
      ]
    },
    {
      keys: ["heirat", "hochzeit", "standesamt", "ehe schliessen"],
      answers: [
        "**Heirat** = rechtliche Ehe vor dem Standesamt — Ehefähigkeitszeugnis, Termin, Zeugen.",
        "Kirchliche Trauung optional; Ehevertrag bei Vermögen/Unternehmen sinnvoll.",
        "Frag: Familie, Finanzen, Versicherung."
      ]
    },
    {
      keys: ["stromausfall", "blackout", "strom weg", "kein strom"],
      answers: [
        "**Stromausfall** = Sicherungen prüfen, Nachbarn fragen (Netz vs. Wohnung), Kerze statt offenes Feuer.",
        "Kühlschrank zu lassen, Handy sparsam, wichtige Nummern offline notieren.",
        "Frag: Smart Home, Nachhaltigkeit (Strom sparen)."
      ]
    },
    {
      keys: ["haushalt", "putzen", "reinigen wohnung", "ordnung haushalt"],
      answers: [
        "**Haushalt** = regelmäßige Routinen schlagen Marathon-Putz — 15-Min-Zonen, Checklisten.",
        "Weniger Zeug = weniger Aufwand; Mikrofasertücher, Essig+Wasser für viele Flächen.",
        "Frag: Nachhaltigkeit, Zeitmanagement, Wohnen."
      ]
    },
    {
      keys: ["versicherung", "haftpflicht", "versicherungen grundlagen", "was versichern"],
      answers: [
        "**Versicherungen (DE):** Haftpflicht fast Pflicht · Kfz bei Auto · Hausrat optional · BU bei Beruf.",
        "Nicht alles doppelt (Handy oft über Hausrat); jährlich vergleichen, nicht blind kündigen.",
        "Frag: Finanzen, Auto, Wohnen, Gesundheit."
      ]
    },
    {
      keys: ["flughafen", "fliegen tipps", "flug reise", "flugzeug reisen"],
      answers: [
        "**Fliegen:** Online einchecken, Flüssigkeiten 100 ml, Akkus im Handgepäck, Ausweis bereit.",
        "Jetlag: Licht & Schlaf an Zielzeit anpassen; Trinken, wenig Alkohol in der Kabine.",
        "Frag: Reisen, Urlaub, Versicherung (Reise)."
      ]
    },
    {
      keys: ["trinkgeld", "restaurant trinkgeld", "service trinkgeld", "wie viel trinkgeld"],
      answers: [
        "**Trinkgeld (DE):** Restaurant oft 5-10 % oder aufrunden; Lieferdienst 1-2 €; Friseur 5-10 %.",
        "Kein Rechtsanspruch — Kultur, nicht Pflicht; bar oder „Stimmt so“.",
        "Frag: Finanzen, Gastronomie, Reisen."
      ]
    },
    {
      keys: ["deutschland ticket", "deutschlandticket", "oepnv ticket", "monatskarte bahn"],
      answers: [
        "**Deutschland-Ticket** = bundesweites ÖPNV-Abo (ca. 49 €/Monat) — Bus, Bahn, Regionalverkehr.",
        "Nicht ICE/IC ohne Zuschlag; Jobticket oft günstiger über Arbeitgeber.",
        "Frag: Fahrrad, ÖPNV, Nachhaltigkeit."
      ]
    },
    {
      keys: ["tattoo", "piercing", "taetowierung", "tattoo pflege"],
      answers: [
        "**Tattoo/Piercing:** Studio mit Hygiene-Zertifikat, Einmalnadeln, Nachsorge (Feuchtigkeit, keine Sonne).",
        "Tattoo dauerhaft — Motiv & Stelle überlegen; Piercing: Metallallergie beachten.",
        "Frag: Gesundheit, Mode."
      ]
    },
    {
      keys: ["brille", "sehstaerke", "sehtest", "kontaktlinsen"],
      answers: [
        "**Sehhilfen:** Sehtest alle 1-2 Jahre · Brille vs. Kontaktlinsen (Komfort, Hygiene).",
        "Bildschirmarbeit: Blaulichtfilter optional — Pausen wichtiger (20-20-20-Regel).",
        "Frag: Gesundheit, Handy-Tipps."
      ]
    },
    {
      keys: ["grippe", "grippe erkaeltung", "influenza", "unterschied grippe erkaeltung"],
      answers: [
        "**Grippe vs. Erkältung:** Grippe = plötzlich, Fieber, Gliederschmerz, länger · Erkältung = langsamer, laufende Nase.",
        "Bei Risikogruppen Impfung sinnvoll; Ruhe, Flüssigkeit, Arzt bei Atemnot.",
        "Frag: Erkältung, Immunsystem, Impfung."
      ]
    },
    {
      keys: ["stalking", "belaestigung online", "cyberstalking", "verfolgung internet"],
      answers: [
        "**Stalking/Cyberstalking** = wiederholte Verfolgung — dokumentieren, blockieren, Anzeige erwägen.",
        "Keine Privatdetails posten; 2FA, neue Accounts nur mit Vorsicht.",
        "Frag: Cybermobbing, Datenschutz, Konflikt."
      ]
    },
    {
      keys: ["nachbarn", "nachbarschaft", "nachbar konflikt", "nachbarschaftshilfe"],
      answers: [
        "**Nachbarschaft:** Lärmzeiten beachten, kurz vorher Bescheid, gemeinsame Treppen pflegen.",
        "Konflikt: sachlich ansprechen, Schlichtung vor Eskalation; Hausordnung lesen.",
        "Frag: Konflikt, Wohnen, Mietrecht."
      ]
    },
    {
      keys: ["zeitumstellung", "sommerzeit winterzeit", "uhr umstellen", "dst daylight"],
      answers: [
        "**Zeitumstellung:** EU wechselt März (Sommerzeit) & Oktober (Winterzeit) — Uhren anpassen.",
        "Schlaf kann kurz leiden; Licht am Morgen hilft Umstellung.",
        "Frag: Zeitzonen, Schlaf, Wetter."
      ]
    },
    {
      keys: ["lohnsteuer", "steuerklasse", "lohnabrechnung", "netto brutto"],
      answers: [
        "**Lohnsteuer:** Brutto − Sozialabgaben − Steuer = Netto · Steuerklasse beeinflusst Abzug.",
        "Steuererklärung oft Erstattung; ELSTER online, Belege sammeln.",
        "Frag: Finanzen, Arbeit, Mindestlohn."
      ]
    },
    {
      keys: ["kita", "kindergarten", "kinderbetreuung", "hort betreuung"],
      answers: [
        "**Kinderbetreuung:** Kita ab ~1 Jahr, Hort nach Schule — Wartelisten früh anmelden.",
        "Qualität: Gruppengröße, Konzept, Nähe; Elternzeit & Elterngeld kombinierbar.",
        "Frag: Elternzeit, Familie, Bildung."
      ]
    },
    {
      keys: ["lotto", "gluecksspiel", "gluecksspielsucht", "casino spielbank"],
      answers: [
        "**Glücksspiel:** Hohes Verlustrisiko — nur Geld, das du verlieren kannst; Hausvorteil beim Casino.",
        "Lotto = extrem geringe Gewinnchance; Sucht: OASIS-Sperre, Beratung.",
        "Frag: Finanzen, Psychologie."
      ]
    },
    {
      keys: ["horoskop", "astrologie", "sternzeichen", "tierkreis"],
      answers: [
        "**Astrologie** = Sternzeichen & Geburtshoroskop — **keine Wissenschaft**, eher Unterhaltung.",
        "Barnum-Effekt: vage Texte wirken persönlich; für Entscheidungen nicht nutzen.",
        "Frag: Astronomie (echte Sterne), Psychologie."
      ]
    },
    {
      keys: ["impfpass", "impfausweis", "impfungen uebersicht", "digitaler impfpass"],
      answers: [
        "**Impfpass** = Dokumentation aller Impfungen — aufbewahren, digitaler Nachweis möglich.",
        "Auffrischungen (Tetanus, COVID je nach Empfehlung) im Blick; Reisen: Gelbfieber etc.",
        "Frag: Impfung, Immunsystem, Reisen."
      ]
    },
    {
      keys: ["strom sparen", "energie sparen haushalt", "stromkosten senken", "standby verbrauch"],
      answers: [
        "**Strom sparen:** Standby aus · LED · Kühlschrank nicht neben Herd · Wäsche kalt wenn möglich.",
        "Dynamische Tarife + Verbrauch messen; Wärmepumpe vs. Nachtspeicher langfristig.",
        "Frag: Nachhaltigkeit, Wärmepumpe, Finanzen."
      ]
    },
    {
      keys: ["wasser sparen", "wasserverbrauch senken", "trinkwasser sparen"],
      answers: [
        "**Wasser sparen:** Kurz duschen, Voll beladen (Spülmaschine/Wäsche), tropfende Hähne fixen.",
        "Regenwasser für Garten; Bewusstsein: Heißwasser kostet Energie + Wasser.",
        "Frag: Nachhaltigkeit, Garten, Haushalt."
      ]
    },
    {
      keys: ["hausaufgaben", "hausaufgaben tipps", "schulaufgaben", "lernen hausaufgaben"],
      answers: [
        "**Hausaufgaben:** Feste Zeit, Handy weg, große Aufgaben in Häppchen (Pomodoro).",
        "Verstehen vor Auswendiglernen; bei Blockade kurz Pause, dann Lehrer/Eltern fragen.",
        "Frag: Lernen, Schule, Zeitmanagement."
      ]
    },
    {
      keys: ["mietkaution", "kaution wohnung", "kautionsrueckzahlung", "mietkaution zurueck"],
      answers: [
        "**Mietkaution** = meist 3 Nettokaltmieten als Sicherheit — auf separates Konto, nicht auf Vermieter-Privatkonto.",
        "Rückzahlung nach Auszug + Abrechnung; Schäden abziehbar — Übergabeprotokoll mit Fotos!",
        "Frag: Mietrecht, Umzug, Wohnen."
      ]
    },
    {
      keys: ["nebenkosten", "nebenkostenabrechnung", "betriebskosten", "heizkosten abrechnung"],
      answers: [
        "**Nebenkosten** = Heizung, Wasser, Müll, Hausmeister etc. — jährliche Abrechnung mit Belegen.",
        "Nachzahlung oder Erstattung; Widerspruchsfrist beachten, Verbrauch prüfen.",
        "Frag: Mietrecht, Wohnen, Strom sparen."
      ]
    },
    {
      keys: ["schimmel", "schimmel wohnung", "schimmelpilz", "feuchtigkeit wohnung"],
      answers: [
        "**Schimmel** = Gesundheitsrisiko — Ursache: Feuchtigkeit (lüften, heizen, undicht).",
        "Kleine Flächen: reinigen & trocknen; großflächig: Vermieter/Profis, nicht nur überstreichen.",
        "Frag: Wohnen, Mietrecht, Gesundheit."
      ]
    },
    {
      keys: ["kuendigung arbeit", "arbeitsvertrag kuendigung", "job kuendigen", "kuendigungsfrist"],
      answers: [
        "**Kündigung Arbeit:** Schriftlich, Frist aus Vertrag/Tarif/§622 BGB — Probezeit oft 2 Wochen.",
        "Ordentlich vs. außerordentlich; Arbeitszeugnis, Resturlaub, Abfindung nur in Sonderfällen.",
        "Frag: Bewerbung, Arbeit, Gewerkschaft."
      ]
    },
    {
      keys: ["vorstellungsgespraech", "vorstellungsgespräch", "job interview", "bewerbungsgespraech"],
      answers: [
        "**Vorstellungsgespräch:** Recherchiere Firma, STAR-Methode für Beispiele, Fragen vorbereiten.",
        "Pünktlich, ehrlich, konkret — Gehaltswunsch realistisch, Probezeit klären.",
        "Frag: Bewerbung, Lebenslauf, Karriere."
      ]
    },
    {
      keys: ["lebenslauf", "cv", "bewerbung lebenslauf", "lebenslauf tipps"],
      answers: [
        "**Lebenslauf:** Klar strukturiert, 1-2 Seiten, Lücken erklären, keine Lügen.",
        "Chronologisch oder Skills-first; Foto in DE oft üblich; PDF, angepasst pro Stelle.",
        "Frag: Bewerbung, Vorstellungsgespräch, Karriere."
      ]
    },
    {
      keys: ["gehaltsverhandlung", "gehalt verhandeln", "lohn verhandeln", "gehaltswunsch"],
      answers: [
        "**Gehaltsverhandlung:** Marktwert recherchieren, eigene Leistung belegen, Range nennen.",
        "Nicht nur Geld: Urlaub, Homeoffice, Weiterbildung — schriftlich bestätigen lassen.",
        "Frag: Karriere, Arbeit, Finanzen."
      ]
    },
    {
      keys: ["homoeopathie", "homöopathie", "globuli", "alternative medizin homoeopathie"],
      answers: [
        "**Homöopathie** = Verdünnungsprinzip — **wissenschaftlich nicht belegt** für Wirksamkeit über Placebo.",
        "Schwere Erkrankungen nicht damit allein behandeln; offen mit Ärzten sprechen.",
        "Frag: Placebo, Medizin, Impfung."
      ]
    },
    {
      keys: ["intermittierendes fasten", "fasten 16 8", "intervallfasten", "fasten diaet"],
      answers: [
        "**Intervallfasten (16:8 etc.):** Essensfenster begrenzen — für manche hilfreich, nicht für alle.",
        "Nicht bei Essstörungen/Schwangerschaft; Qualität der Mahlzeiten zählt mehr als Timing.",
        "Frag: Ernährung, Gesundheit, Abnehmen."
      ]
    },
    {
      keys: ["keto", "ketogene diaet", "low carb keto", "ketose"],
      answers: [
        "**Keto** = sehr wenig Kohlenhydrate, viel Fett — Körper nutzt Ketone.",
        "Kurzfristig Gewicht möglich; langfristig schwer durchzuhalten — Arzt bei Vorerkrankungen.",
        "Frag: Ernährung, Veganismus, Diabetes."
      ]
    },
    {
      keys: ["sperrmuell", "sperrmüll", "entsorgung muell", "muellabfuhr"],
      answers: [
        "**Sperrmüll** = große Abholung über Gemeinde — Termin buchen, was erlaubt ist prüfen.",
        "Recyclinghof für Elektro (Elektroschrott), Sondermüll getrennt — illegaler Wildmüll = Bußgeld.",
        "Frag: Mülltrennung, Nachhaltigkeit, Elektroschrott."
      ]
    },
    {
      keys: ["geschenke", "geschenkideen", "was schenken", "geschenke tipps"],
      answers: [
        "**Geschenke:** Person & Budget beachten — Erlebnisse oft wertvoller als Zeug.",
        "Wunschliste fragen, personalisiert, nicht zu teuer; Gutscheine okay wenn passend.",
        "Frag: Weihnachten, Geburtstag, Nachhaltigkeit."
      ]
    },
    {
      keys: ["selbstvertrauen", "selbstbewusstsein", "mehr selbstvertrauen", "selbstsicherheit"],
      answers: [
        "**Selbstvertrauen** wächst durch kleine Erfolge, Übung, realistische Selbstgespräche.",
        "Vergleiche mit anderen reduzieren; Kompetenz aufbauen statt nur „positiv denken“.",
        "Frag: Psychologie, Motivation, Rhetorik."
      ]
    },
    {
      keys: ["motivation", "motiviert bleiben", "antrieb", "keine motivation"],
      answers: [
        "**Motivation:** Ziele klein schneiden, Routinen > Willenskraft, Umgebung gestalten.",
        "„Warum“ klar halten; Pausen & Schlaf; Perfektionismus bremsen oft Motivation.",
        "Frag: Prokrastination, Zeitmanagement, Lernen."
      ]
    },
    {
      keys: ["perfektionismus", "alles perfekt", "perfekt sein muessen", "hoher anspruch"],
      answers: [
        "**Perfektionismus** = hohe Standards, oft mit Angst vor Fehlern — blockiert Start & Freude.",
        "„Gut genug“ bewusst üben; Feedback nutzen statt endlos polieren.",
        "Frag: Prokrastination, Psychologie, Stress."
      ]
    },
    {
      keys: ["entscheidungen", "entscheidung treffen", "wahl treffen", "pro contra liste"],
      answers: [
        "**Entscheidungen:** Pro/Contra-Liste, reversibel vs. irreversibel unterscheiden.",
        "70%-Regel: genug Info, dann handeln; große Entscheidungen Zeit geben, nicht überstürzen.",
        "Frag: Kritisches Denken, Stoizismus, Psychologie."
      ]
    },
    {
      keys: ["hoeflichkeit", "höflichkeit", "umgangston", "respektvoll kommunizieren"],
      answers: [
        "**Höflichkeit:** Bitte/Danke, zuhören, nicht unterbrechen — Kultur & Kontext beachten.",
        "Kritik sachlich („Ich-Messages“); online: gleiche Regeln wie offline.",
        "Frag: Konflikt, Smalltalk, Kommunikation."
      ]
    },
    {
      keys: ["weihnachten", "weihnachten tradition", "weihnachtsfeier", "advent"],
      answers: [
        "**Weihnachten:** Christlicher Festkreis + familiäre Traditionen — Geschenke, Essen, Ruhe.",
        "Kommerziell stark; Alternativen: Zeit schenken, Spenden, weniger Konsum.",
        "Frag: Geschenke, Religion, Nachhaltigkeit."
      ]
    },
    {
      keys: ["silvester", "neujahr", "feuerwerk silvester", "silvester tipps"],
      answers: [
        "**Silvester:** Jahreswechsel, Feuerwerk (Regeln je Bundesland!), Nachbarschaft & Tiere beachten.",
        "Vorsätze realistisch halten; Alkohol moderat, sichere Heimweg-Planung.",
        "Frag: Feuerwerk, Geschenke, Motivation."
      ]
    },
    {
      keys: ["arbeitszeugnis", "zeugnis arbeit", "zwischenzeugnis", "qualifiziertes arbeitszeugnis"],
      answers: [
        "**Arbeitszeugnis:** Formulierungen codiert („stets zur Zufriedenheit“ = gut).",
        "Anspruch bei Austritt; Zwischenzeugnis bei längerer Anstellung möglich; Korrektur verlangen.",
        "Frag: Kündigung, Bewerbung, Arbeit."
      ]
    },
    {
      keys: ["handwerker", "handwerker finden", "renovierung", "reparatur wohnung"],
      answers: [
        "**Handwerker:** Mehrere Angebote, schriftlich, Teilzahlungen statt alles vorab.",
        "Referenzen, Meisterbetrieb, Versicherung; Mängel protokollieren.",
        "Frag: Wohnen, Schimmel, Nachhaltigkeit (Sanierung)."
      ]
    },
    {
      keys: ["parken", "parkverbot", "parkplatz", "halten verboten"],
      answers: [
        "**Parken:** Schilder & Markierung beachten — Halteverbot ≠ Parkverbot.",
        "Bewohnerparken, Parkscheibe, E-Auto-Ladeparkplätze; Bußgelder & Abschleppen teuer.",
        "Frag: Auto, Verkehr, Bußgeld."
      ]
    },
    {
      keys: ["mahnung", "inkasso", "rechnung nicht bezahlt", "schulden mahnbescheid"],
      answers: [
        "**Mahnung/Inkasso:** Fristen prüfen, nicht ignorieren — bei Berechtigung zahlen oder widersprechen.",
        "Inkasso-Gebühren prüfen; Verbraucherzentrale bei Unklarheit; Schuldenplan statt Kredit-Kette.",
        "Frag: Finanzen, Verbraucherrecht, Versicherung."
      ]
    },
    {
      keys: ["pfand", "pfandflasche", "pfand system", "mehrweg einweg"],
      answers: [
        "**Pfand (DE):** Einweg 0,25 € · Mehrweg oft 0,08–0,15 € — Flaschen/Dosen zurückgeben.",
        "Automaten in Supermärkten; Pfand gehört zum Preis — nicht wegwerfen.",
        "Frag: Nachhaltigkeit, Mülltrennung, Einkaufen."
      ]
    },
    {
      keys: ["mieterhoehung", "miete erhoehen", "mieterhoehung wohnung", "indexmiete"],
      answers: [
        "**Mieterhöhung:** Nur mit Begründung (Mietspiegel, Modernisierung, Indexmiete) — Fristen & Form beachten.",
        "Widerspruch möglich; Kappungsgrenze in vielen Städten; Mietverein/Verbraucherzentrale bei Unklarheit.",
        "Frag: Mietrecht, Nebenkosten, Wohnen."
      ]
    },
    {
      keys: ["meldebescheinigung", "anmeldung wohnsitz", "ummeldung", "buergeramt anmeldung"],
      answers: [
        "**Anmeldung:** Innerhalb 14 Tagen nach Einzug beim Bürgeramt — Wohnungsgeberbestätigung mitbringen.",
        "Meldebescheinigung für Bank, Kindergeld, Führerschein; Abmeldung beim Auszug.",
        "Frag: Umzug, Bürgeramt, Personalausweis."
      ]
    },
    {
      keys: ["personalausweis", "reisepass", "ausweis beantragen", "pass beantragen"],
      answers: [
        "**Ausweis/Reisepass:** Bürgeramt — biometrisches Foto, Gebühr, alten Ausweis mitbringen.",
        "Reisepass für Nicht-EU-Reisen; Gültigkeit prüfen (6 Monate Rest bei manchen Ländern).",
        "Frag: Visum, Reisen, Meldebescheinigung."
      ]
    },
    {
      keys: ["schufa", "bonitaet", "bonitaetsauskunft", "kredit ohne schufa"],
      answers: [
        "**SCHUFA** = Bonitätsauskunft in DE — Kredite, Verträge, Zahlungsverhalten.",
        "Kostenlose Selbstauskunft 1×/Jahr; Score ≠ Geheimformel — pünktlich zahlen hilft.",
        "Frag: Ratenkredit, Dispo, Finanzen."
      ]
    },
    {
      keys: ["dispo", "dispokredit", "ueberziehungskredit", "konto ueberziehen"],
      answers: [
        "**Dispo** = kurzer Überziehungskredit — **sehr hohe Zinsen**, nur kurzfristig nutzen.",
        "Limit verhandeln; Dispo durch günstigeren Ratenkredit ersetzen wenn länger nötig.",
        "Frag: SCHUFA, Finanzen, Mindestlohn."
      ]
    },
    {
      keys: ["ratenkredit", "kredit aufnehmen", "privatkredit", "kredit vergleich"],
      answers: [
        "**Ratenkredit:** Zinsen vergleichen (effektiver Jahreszins), Laufzeit & Rate realistisch.",
        "Kleine Druckstellen im Vertrag prüfen; Sondertilgung; nicht mehr leihen als nötig.",
        "Frag: SCHUFA, Dispo, Finanzen."
      ]
    },
    {
      keys: ["baufinanzierung", "hypothek", "immobilienkredit", "haus finanzieren"],
      answers: [
        "**Baufinanzierung:** Eigenkapital (oft 20 %+), Zinsbindung, Tilgung, Nebenkosten (Grunderwerbsteuer, Notar).",
        "Mehrere Angebote; Sondertilgung; Zins bei steigenden/fallenden Phasen absichern.",
        "Frag: Eigenheim, Mietkaution, Finanzen."
      ]
    },
    {
      keys: ["nachsendeauftrag", "post nachsenden", "post ummelden", "deutsche post nachsende"],
      answers: [
        "**Nachsendeauftrag:** Post leitet 6–24 Monate weiter — online/dritte Postfiliale beantragen.",
        "Nicht alle Absender (Pakete teils separat); Adresse überall parallel ummelden.",
        "Frag: Umzug, Meldebescheinigung."
      ]
    },
    {
      keys: ["batterie entsorgung", "akkus entsorgen", "batterien recycling", "sondermuell batterie"],
      answers: [
        "**Batterien/Akkus:** Nie in Hausmüll — Sammelboxen im Handel oder Recyclinghof.",
        "Lithium-Akkus brandgefährlich bei Beschädigung; Geräte-Akkus oft beim Händler.",
        "Frag: Elektroschrott, Mülltrennung, Nachhaltigkeit."
      ]
    },
    {
      keys: ["pflegegrad", "pflegeversicherung", "pflege grad 1", "pflegeantrag"],
      answers: [
        "**Pflegegrad 1–5** = MDK-Begutachtung — Entlastung, Pflegegeld, Sachleistungen.",
        "Antrag bei Pflegekasse; Beratung Pflegestützpunkt; Angehörigenpflege möglich.",
        "Frag: Pflegeberuf, Gesundheit, Rentenversicherung."
      ]
    },
    {
      keys: ["visum", "aufenthaltstitel", "einreise deutschland", "visum beantragen"],
      answers: [
        "**Visum/Aufenthaltstitel:** Je nach Staatsangehörigkeit & Zweck — Botschaft/Konsulat oder Ausländerbehörde.",
        "EU-Bürger: Freizügigkeit; Drittstaaten: Arbeit, Studium, Familie — Fristen & Dokumente.",
        "Frag: Reisepass, Integration, Studium."
      ]
    },
    {
      keys: ["fuehrungszeugnis", "fuehrungszeugnis beantragen", "polizeiliches fuehrungszeugnis", "erweitertes fuehrungszeugnis"],
      answers: [
        "**Führungszeugnis:** Bürgeramt/online — Standard vs. erweitert (für Kinder/Jugendliche Arbeit).",
        "Arbeitgeber darf nur bei sensiblen Jobs verlangen; Datenschutz beachten.",
        "Frag: Bewerbung, Bürgeramt."
      ]
    },
    {
      keys: ["buergeramt", "einwohnermeldeamt", "buergerbuero", "termin buergeramt"],
      answers: [
        "**Bürgeramt:** Anmeldung, Ausweis, Führungszeugnis, Geburtsurkunde — oft Termin nötig.",
        "Online-Termin buchen; Unterlagen mitbringen; Wartezeiten je nach Stadt.",
        "Frag: Meldebescheinigung, Personalausweis, Umzug."
      ]
    },
    {
      keys: ["minijob", "midijob", "geringfuegige beschaeftigung", "450 euro job"],
      answers: [
        "**Minijob:** Verdienstgrenze (ca. 556 €/Monat 2024) — pauschale Abgaben, oft Rentenversicherung.",
        "**Midijob (Gleitzone):** Höherer Verdienst, reduzierte Sozialabgaben — Steuer kann anfallen.",
        "Frag: Arbeit, Lohnsteuer, Bewerbung."
      ]
    },
    {
      keys: ["praktikum", "praktikum finden", "pflichtpraktikum", "volontariat"],
      answers: [
        "**Praktikum:** Lernen & Netzwerk — Pflichtpraktika oft unbezahlt, trotzdem Rechte (Arbeitszeitgesetz).",
        "Vertrag, Versicherung, Tätigkeitsbeschreibung; danach Referenz im Lebenslauf.",
        "Frag: Bewerbung, Studium, Karriere."
      ]
    },
    {
      keys: ["werkstudent", "werkstudentenjob", "student job", "nebenjob studium"],
      answers: [
        "**Werkstudent:** Bis 20 h/Woche in Vorlesungszeit — geringere Sozialabgaben, Steuerfreibetrag.",
        "Immatrikulationsbescheinigung vorlegen; nicht mit Minijob-Regeln verwechseln.",
        "Frag: Studium, Minijob, Finanzen."
      ]
    },
    {
      keys: ["winterreifen", "winterreifenpflicht", "sommerreifen winter", "reifen wechseln"],
      answers: [
        "**Winterreifen (DE):** Bei Glatteis/Schnee/Matsch Pflicht — M+S/3PMSF-Symbol.",
        "O bis O (Okt–Ostern) empfohlen; Profiltiefe min. 1,6 mm; Allwetterreifen möglich.",
        "Frag: Auto, Verkehr, Bußgeld."
      ]
    },
    {
      keys: ["bussgeld", "verkehrsbussgeld", "blitzer", "knöllchen"],
      answers: [
        "**Bußgeld:** Verkehrsverstöße, Parken, Handy am Steuer — Einspruch innerhalb Frist möglich.",
        "Punkte in Flensburg bei schweren Verstößen; Anhörungsbogen ernst nehmen.",
        "Frag: Parken, Winterreifen, Punkte Flensburg."
      ]
    },
    {
      keys: ["punkte flensburg", "fahreignungsregister", "punkte verkehr", "fahrverbot"],
      answers: [
        "**Punkte (Flensburg):** Verkehrsverstöße sammeln Punkte — ab 8 oft Entzug, MPU möglich.",
        "Tilgung nach Frist; Fahranfänger strenger; vorsorglich Fahrstil anpassen.",
        "Frag: Bußgeld, Auto, Führerschein."
      ]
    },
    {
      keys: ["schulzeugnis", "zeugnis schule", "noten zeugnis", "abschlusszeugnis"],
      answers: [
        "**Schulzeugnis:** Noten + Verhalten — für Wechsel, Ausbildung, Studium wichtig.",
        "Halbjahres-/Jahreszeugnis; Fehler prüfen lassen; Zeugnis der Klasse 10 = Abschluss.",
        "Frag: Abitur, Bewerbung, Praktikum."
      ]
    },
    {
      keys: ["mietschulden", "miete nicht bezahlt", "raeumungsklage", "mietrueckstand"],
      answers: [
        "**Mietschulden:** Sofort mit Vermieter sprechen — Ratenzahlung, Beratung (Mieterverein).",
        "Räumungsklage droht bei anhaltendem Rückstand; Wohngeld/Bürgergeld prüfen.",
        "Frag: Mietrecht, Wohngeld, Mahnung."
      ]
    },
    {
      keys: ["widerruf", "widerrufsrecht", "online kaufen widerruf", "14 tage widerruf"],
      answers: [
        "**Widerruf (Online):** 14 Tage ab Erhalt — ohne Begründung (Ausnahmen: personalisiert, verderblich).",
        "Schriftlich/E-Mail reicht; Rücksendekosten oft Käufer; Frist dokumentieren.",
        "Frag: Gewährleistung, Online-Shopping, Verbraucherrecht."
      ]
    },
    {
      keys: ["gewaehrleistung", "garantie", "reklamation", "mangel ware", "umtausch"],
      answers: [
        "**Gewährleistung:** 2 Jahre bei Neuware (DE) — Mängel melden, Nacherfüllung (Reparatur/Tausch).",
        "Garantie = freiwillig extra; Belege aufbewahren; Verbraucherzentrale bei Streit.",
        "Frag: Widerruf, Reklamation, Verbraucherzentrale."
      ]
    },
    {
      keys: ["paypal", "klarna", "lastschrift", "sepa lastschrift", "zahlungsmethoden online"],
      answers: [
        "**Zahlungsarten:** PayPal = Zwischenkonto · Klarna = oft Raten/Kauf auf Rechnung · Lastschrift = Kontoabbuchung.",
        "Käuferschutz prüfen; Rückbuchung bei Betrug schnell; keine PIN an Fremde.",
        "Frag: Online-Shopping, Phishing, Finanzen."
      ]
    },
    {
      keys: ["girokonto", "kontowechsel", "girokonto wechseln", "bankkonto eroeffnen"],
      answers: [
        "**Girokonto:** Gehalt, Lastschrift, Karte — Gebühren vergleichen (Studenten oft gratis).",
        "Kontowechselservice hilft Umzug; altes Konto erst nach Umstellung schließen.",
        "Frag: Dispo, SCHUFA, Finanzen."
      ]
    },
    {
      keys: ["sparkonto", "tagesgeld", "festgeld", "geld anlegen sicher"],
      answers: [
        "**Sparen:** Tagesgeld = flexibel, Zinsen variabel · Festgeld = gebunden, oft höherer Zins.",
        "Einlagensicherung bis 100.000 € pro Bank; Inflation schmälert realen Gewinn.",
        "Frag: Inflation, ETF, Finanzen."
      ]
    },
    {
      keys: ["urlaubsanspruch", "urlaubstage", "urlaub arbeit", "resturlaub"],
      answers: [
        "**Urlaub (DE):** Mind. 20 Tage bei 5-Tage-Woche (ab 6 Monate Beschäftigung) — oft mehr im Vertrag.",
        "Krankheit zählt nicht als Urlaub; Resturlaub bei Kündigung oft auszahlen/Planung.",
        "Frag: Kündigung, Krankmeldung, Arbeit."
      ]
    },
    {
      keys: ["krankmeldung", "krankschreibung", "au arbeitsunfaehigkeit", "krankmelden arbeit"],
      answers: [
        "**Krankmeldung:** Arbeitgeber sofort informieren — AU (eAU) ab Tag 1 digital, Papier optional.",
        "3 Tage oft ohne Attest (je Vertrag); länger = Arzt; Lohnfortzahlung 6 Wochen.",
        "Frag: Urlaub, Arbeit, Gesundheit."
      ]
    },
    {
      keys: ["kindergeld", "kindergeld antrag", "kindergeld hoehe", "familienkasse"],
      answers: [
        "**Kindergeld:** Für jedes Kind (Höhe je nach Alter) — Antrag Familienkasse, steuerlich prüfen.",
        "Kindergeld vs. Kinderfreibetrag im Steuerfall günstigeren wählen lassen.",
        "Frag: Elterngeld, Elternzeit, Finanzen."
      ]
    },
    {
      keys: ["schwangerschaft", "schwanger", "schwangerschaft tipps", "trimester"],
      answers: [
        "**Schwangerschaft:** Vorsorge beim Frauenarzt/Hebamme — Ernährung, Bewegung, keine Selbstmedikation.",
        "3 Trimester; Mutterschutz, Elternzeit & Elterngeld planen; Rauch/Alkohol meiden.",
        "Frag: Elternzeit, Stillen, Gesundheit."
      ]
    },
    {
      keys: ["sonnenbrand", "hitzschlag", "dehydrierung", "sonne schutz"],
      answers: [
        "**Sonne/Hitze:** SPF 30+, Schatten 11–15 Uhr, trinken — Sonnenbrand kühlen, nicht aufkratzen.",
        "Hitzschlag = Notfall (Verwirrung, hohe Temperatur) — 112; Dehydrierung: Kopfschmerz, dunkler Urin.",
        "Frag: Erste Hilfe, Sommer, Gesundheit."
      ]
    },
    {
      keys: ["zeckenbiss", "zecken", "fsme impfung", "borreliose zecken"],
      answers: [
        "**Zecken:** Nach Aufenthalt suchen — langsam entfernen (Zeckenkarte), nicht drehen/ölen.",
        "Rotes Wanderröte = Arzt (Borreliose); FSME-Impfung in Risikogebieten sinnvoll.",
        "Frag: Impfung, Natur, Gesundheit."
      ]
    },
    {
      keys: ["vertrag kuendigen", "stromvertrag kuendigen", "handyvertrag kuendigen", "gasvertrag kuendigen"],
      answers: [
        "**Vertrag kündigen:** Schriftlich, Frist beachten (oft 1–3 Monate) — Sonderkündigungsrecht bei Umzug/Preiserhöhung.",
        "Handy: Vertragsende oder Frist; Strom/Gas vergleichen (Wechsel lohnt); Bestätigung aufbewahren.",
        "Frag: Umzug, Finanzen, Widerruf."
      ]
    },
    {
      keys: ["online shopping", "online einkaufen", "amazon shopping", "bestellen internet tipps"],
      answers: [
        "**Online-Shopping:** Bewertungen & Impressum prüfen, sichere Zahlung, Widerrufsrecht nutzen.",
        "Zu guter Preis = Vorsicht; Originalverpackung bei Rückgabe; Phishing-Mails ignorieren.",
        "Frag: Widerruf, PayPal, Gewährleistung."
      ]
    },
    {
      keys: ["steuererklaerung", "steuererklärung", "elster steuer", "steuer zurueck"],
      answers: [
        "**Steuererklärung:** Oft Pflicht bei Nebenjob/Zweitjob — ELSTER kostenlos, Frist 31.7. (ggf. verlängert).",
        "Werbungskosten, Homeoffice-Pauschale, Sonderausgaben — Erstattung häufig bei Arbeitnehmern.",
        "Frag: Lohnsteuer, Finanzen, Minijob."
      ]
    },
    {
      keys: ["mietminderung", "miete senken maengel", "mietrecht maengel", "miete reduzieren"],
      answers: [
        "**Mietminderung:** Bei erheblichen Mängeln (Heizung, Schimmel) — Mängel dokumentieren, Vermieter setzen.",
        "Höhe angemessen; Miete nicht einfach kürzen ohne Grund; Mieterverein beraten.",
        "Frag: Mietrecht, Schimmel, Mietschulden."
      ]
    },
    {
      keys: ["verbraucherzentrale", "verbraucherschutz", "verbraucher beratung", "verbraucherrecht"],
      answers: [
        "**Verbraucherzentrale:** Beratung zu Verträgen, Reklamation, Abzocke — oft kostenlos/günstig.",
        "Musterbriefe online; gemeinsam mit Stiftung Warentest stark bei Kaufverträgen.",
        "Frag: Gewährleistung, Mahnung, Online-Shopping."
      ]
    },
    {
      keys: ["elterngeld", "elterngeld antrag", "elterngeld plus", "basiselterngeld"],
      answers: [
        "**Elterngeld:** Bis 14 Monate (Kombi Eltern) — Basiselterngeld ca. 65 % Netto (Min/Max-Grenzen).",
        "ElterngeldPlus für Teilzeit; Antrag nach Geburt, rückwirkend begrenzt.",
        "Frag: Elternzeit, Kindergeld, Familie."
      ]
    },
    {
      keys: ["stillen", "stillzeit", "babynahrung", "beikost"],
      answers: [
        "**Stillen:** WHO empfiehlt ~6 Monate — Hebamme/Stillberatung bei Schmerzen.",
        "Beikost ab ~5–7 Monate je Entwicklung; Allergene nicht pauschal meiden.",
        "Frag: Schwangerschaft, Kindergeld, Gesundheit."
      ]
    },
    {
      keys: ["rentenversicherung", "rente deutschland", "rentenpunkte", "gesetzliche rente"],
      answers: [
        "**Rentenversicherung:** Pflicht in Arbeit — Entgeltpunkte sammeln, Renteninfo ab 27.",
        "Frührente mit Abschlägen; private/berufliche Altersvorsorge zusätzlich sinnvoll.",
        "Frag: Altersvorsorge, Arbeit, Finanzen."
      ]
    },
    {
      keys: ["arbeitslosengeld", "alg1", "arbeitslos melden", "agentur fuer arbeit"],
      answers: [
        "**ALG I:** Nach Anwartschaft (mind. 12 Mon. versichert) — Meldung **sofort** bei Jobverlust.",
        "Höhe abhängig vom letzten Netto; Bewerbungen nachweisen; Nebenjob melden.",
        "Frag: Kündigung, Bürgergeld, Bewerbung."
      ]
    },
    {
      keys: ["gehaltserhoehung", "gehalt erhoehen", "lohnerhoehung", "mehr gehalt"],
      answers: [
        "**Gehaltserhöhung:** Leistung + Markt vergleichen — Gespräch vorbereiten, konkrete Beispiele.",
        "Nicht nur bei Kündigungsandrohung; Zwischenzeugnis, Weiterbildung als Argument.",
        "Frag: Gehaltsverhandlung, Arbeitszeugnis, Karriere."
      ]
    },
    {
      keys: ["second hand", "flohmarkt", "kleinanzeigen", "vinted", "gebraucht kaufen"],
      answers: [
        "**Second Hand:** Günstiger & nachhaltig — Kleinanzeigen, Vinted, Flohmärkte, Tauschbörsen.",
        "Bei Abholung sicher treffen; Zustand prüfen; Betrug: kein Vorkasse ohne Schutz.",
        "Frag: Nachhaltigkeit, Online-Shopping, Finanzen."
      ]
    },
    {
      keys: ["passwort manager", "passwortmanager", "passwoerter sicher", "1password bitwarden"],
      answers: [
        "**Passwort-Manager:** Ein Master-Passwort, alle Logins verschlüsselt — einzigartige Passwörter pro Seite.",
        "Bitwarden/1Password etc.; 2FA zusätzlich; niemals Passwörter wiederverwenden.",
        "Frag: Cybersecurity, Phishing, 2FA."
      ]
    },
    {
      keys: ["zwei faktor", "2fa", "zwei faktor authentifizierung", "mfa sicherheit"],
      answers: [
        "**2FA** = Passwort + zweiter Faktor (App-Code, SMS, Hardware-Key) — Account-Schutz massiv besser.",
        "Authenticator-App > SMS; Backup-Codes sicher aufbewahren.",
        "Frag: Passwort-Manager, Phishing, Datenschutz."
      ]
    },
    {
      keys: ["cloud speicher", "google drive", "dropbox", "icloud backup", "daten sichern cloud"],
      answers: [
        "**Cloud-Speicher:** Dateien online syncen — Google Drive, Dropbox, iCloud; AGB & Verschlüsselung lesen.",
        "Wichtiges zusätzlich lokal/extern sichern; sensible Daten ggf. verschlüsseln.",
        "Frag: Backup, Datenschutz, Passwort-Manager."
      ]
    },
    {
      keys: ["esim", "prepaid", "roaming", "sim karte", "handyvertrag prepaid"],
      answers: [
        "**SIM/eSIM:** Prepaid = flexibel ohne Vertrag · eSIM digital aktivieren · Roaming in EU oft inklusive.",
        "Vertrag vs. Prepaid vergleichen; Datenflat für Navigation; Auslandstarife prüfen.",
        "Frag: Vertrag kündigen, Handy-Tipps, Reisen."
      ]
    },
    {
      keys: ["glasfaser", "dsl", "internet zuhause", "internetanbieter wechseln"],
      answers: [
        "**Internet zuhause:** Glasfaser = schnell & stabil · DSL über Telefonleitung · Kabel via TV-Netz.",
        "Verfügbarkeit am Standort prüfen; Router/Mesh für große Wohnung; Mindestlaufzeit beachten.",
        "Frag: WLAN, Vertrag kündigen, Smart Home."
      ]
    },
    {
      keys: ["mesh wlan", "wlan zuhause", "wifi verstaerker", "router einrichten"],
      answers: [
        "**WLAN zuhause:** Router zentral, 5 GHz für Speed, 2,4 GHz für Reichweite — Mesh bei großen Wohnungen.",
        "WPA3/WPA2, eigenes Passwort; Firmware-Updates; Repeater nur als Notlösung.",
        "Frag: Glasfaser, Cybersecurity, Smart Home."
      ]
    },
    {
      keys: ["pc langsam", "computer langsam", "windows langsam", "laptop beschleunigen"],
      answers: [
        "**PC langsam:** Autostart aufräumen, Speicher frei (SSD!), Updates, Malware-Scan.",
        "RAM-Volllast prüfen; Browser-Tabs reduzieren; Neuinstallation nur als letzte Option.",
        "Frag: Malware, Windows, Cybersecurity."
      ]
    },
    {
      keys: ["notgroschen", "finanzielle reserve", "notfall geld", "ruecklage haushalt"],
      answers: [
        "**Notgroschen:** 3–6 Monatsausgaben auf Tagesgeldkonto — für Jobverlust, Auto, Reparaturen.",
        "Vor Investitionen aufbauen; nicht mit Dispo verwechseln; klein anfangen.",
        "Frag: Sparkonto, Finanzen, Budget."
      ]
    },
    {
      keys: ["haushaltsbudget", "budget planen", "geldplan haushalt", "finanzplan monat"],
      answers: [
        "**Haushaltsbudget:** Einnahmen − Fixkosten − Sparziel = verfügbar — App oder Tabelle.",
        "50/30/20-Regel als Start; Abos prüfen; realistisch tracken, nicht perfektionieren.",
        "Frag: Notgroschen, Finanzen, Sparen."
      ]
    },
    {
      keys: ["depot", "etf depot", "broker wählen", "aktien depot eroeffnen"],
      answers: [
        "**Depot/ETF:** Broker vergleichen (Gebühren, Sparplan) — breit gestreute ETFs für Langfrist.",
        "Nur Geld, das langfristig fehlen kann; Diversifikation; nicht auf Einzelaktien-Hype.",
        "Frag: ETF, Inflation, Finanzen."
      ]
    },
    {
      keys: ["nachhilfe", "nachhilfe finden", "tutor schueler", "lernhilfe schule"],
      answers: [
        "**Nachhilfe:** Fachlich passend, klare Ziele, regelmäßige Termine — Schule/Uni-Listen, Plattformen.",
        "Selbst erklären üben (Feynman); nicht nur Lösungen abschreiben.",
        "Frag: Lernen, Hausaufgaben, Prüfungsangst."
      ]
    },
    {
      keys: ["pruefungsangst", "prüfungsangst", "pruefungsstress", "angst vor pruefung"],
      answers: [
        "**Prüfungsangst:** Vorbereitung + Schlaf + Atemübungen — Blackout normal, nicht alles auf eine Karte.",
        "Probeklausuren, Lerngruppe; bei starker Angst Beratung/Stelle der Uni/Schule.",
        "Frag: Lernen, Prüfung, Psychologie."
      ]
    },
    {
      keys: ["einsamkeit", "einsam fuehlen", "allein sein", "soziale isolation"],
      answers: [
        "**Einsamkeit:** Häufig & behandelbar — kleine Schritte: Hobby-Gruppe, Nachbar, regelmäßiger Kontakt.",
        "Einsamkeit ≠ allein sein wollen; bei Depression Hilfe holen; Telefonseelsorge 0800 111 0 111.",
        "Frag: Freundschaft, Psychologie, Soziale Angst."
      ]
    },
    {
      keys: ["freunde finden", "neue freunde", "freundschaft knuepfen", "anfreunden erwachsene"],
      answers: [
        "**Freunde finden:** Gemeinsame Aktivitäten (Sport, Verein, Kurs) > Smalltalk — regelmäßigkeit zählt.",
        "Offen sein, zuhören, nicht sofort tiefe Erwartung; online auch OK, sicher treffen.",
        "Frag: Einsamkeit, Konflikt, Hobby."
      ]
    },
    {
      keys: ["soziale angst", "sozialphobie", "angst vor menschen", "scheu vor gruppen"],
      answers: [
        "**Soziale Angst:** Angst vor Bewertung in Situationen — häufig, behandelbar (Therapie, Übung).",
        "Kleine Expositionen; Atmung; nicht mit Introversion verwechseln.",
        "Frag: Angst, Psychologie, Selbstvertrauen."
      ]
    },
    {
      keys: ["hund erziehung", "hundetraining", "welpenerziehung", "hund kommandos"],
      answers: [
        "**Hundeerziehung:** Konsequenz + positive Verstärkung — kurze Sessions, Geduld.",
        "Sozialisierung früh; Hundeschule bei Problemen; Auslastung (Spaziergang, Kopfarbeit).",
        "Frag: Haustier, Hund, Verantwortung."
      ]
    },
    {
      keys: ["zimmerpflanzen", "pflanzen pflege", "zimmerpflanze giessen", "pflanzen tipps"],
      answers: [
        "**Zimmerpflanzen:** Weniger gießen oft besser — Lichtbedarf beachten, Drainage, Staunässe vermeiden.",
        "Finger-Test Erde; Staubsauger-Blätter; Umtopfen im Frühjahr.",
        "Frag: Garten, Nachhaltigkeit, Wohnen."
      ]
    },
    {
      keys: ["friseur", "haarschnitt tipps", "haare schneiden", "frisur wahl"],
      answers: [
        "**Friseur/Haare:** Referenzfoto mitbringen, Gesichtsform & Pflege beachten — Schnitt alle 4–8 Wochen.",
        "Selbst schneiden nur mit gutem Werkzeug; Pflegeprodukte nicht überladen.",
        "Frag: Mode, Selbstvertrauen."
      ]
    },
    {
      keys: ["phishing email", "betrug email", "spam erkennen", "gefälschte mail"],
      answers: [
        "**Phishing-Mail:** Absender prüfen, Links nicht klicken, Anhänge misstrauen — Bank fragt nie per Mail nach PIN.",
        "Direkt über offizielle Website/Nummer klären; melden & löschen.",
        "Frag: Cybersecurity, Passwort-Manager, 2FA."
      ]
    },
    {
      keys: ["rueckenschmerz", "rückenschmerz", "nackenschmerz", "ruecken schmerzen", "verspannung ruecken"],
      answers: [
        "**Rücken/Nacken:** Oft Bewegungsmangel + Stress — kurz bewegen, wärmen, nicht lange steif liegen.",
        "Rotes Flag: Taubheit, Unfall, Fieber → Arzt; ergonomischer Arbeitsplatz, Core-Training.",
        "Frag: Fitness, Stress, Ergonomie."
      ]
    },
    {
      keys: ["muskelkater", "dehnen", "aufwaermen", "sport verletzung vorbeugen"],
      answers: [
        "**Muskelkater:** Mikrorisse nach ungewohnter Belastung — leichte Bewegung, Wärme, Zeit.",
        "Aufwärmen vor Sport; Dehnen nach dem Training; kein „No pain no gain“ bei akuten Schmerzen.",
        "Frag: Fitness, Rückenschmerz, Erste Hilfe."
      ]
    },
    {
      keys: ["einschlafen", "einschlaf stoerung", "schlafstoerung", "insomnie tipps"],
      answers: [
        "**Einschlafen:** Feste Schlafzeit, Bildschirm weg, kühles dunkles Zimmer — kein Grübeln forcieren.",
        "Koffein nach 14 Uhr meiden; 20-Min-Regel: aufstehen wenn nicht müde.",
        "Frag: Schlaf, Stress, Kaffee."
      ]
    },
    {
      keys: ["schnarchen", "schlafapnoe", "apnoe schlaf", "schnarchgeraete"],
      answers: [
        "**Schnarchen/Apnoe:** Atemaussetzer = Risiko — Schlafmedizin abklären, nicht ignorieren.",
        "Gewicht, Alkohol, Rückenlage beeinflussen; Partner beobachten lassen.",
        "Frag: Schlaf, Gesundheit, Rauchen aufhören."
      ]
    },
    {
      keys: ["abnehmen", "gesund abnehmen", "gewicht reduzieren", "uebergewicht"],
      answers: [
        "**Abnehmen:** Kalorien-Defizit langsam — mehr Protein, Bewegung, Schlaf; Crash-Diäten scheitern.",
        "BMI nur grober Hinweis; Arzt bei starkem Übergewicht; Muskeln erhalten.",
        "Frag: Ernährung, Fitness, Keto."
      ]
    },
    {
      keys: ["bmi", "body mass index", "uebergewicht untergewicht", "normalgewicht"],
      answers: [
        "**BMI** = Gewicht (kg) / Größe² (m) — grober Richtwert, ignoriert Muskelmasse.",
        "18,5–24,9 oft „Normal“; allein nicht diagnostisch; Bauchumfang zusätzlich sinnvoll.",
        "Frag: Abnehmen, Ernährung, Gesundheit."
      ]
    },
    {
      keys: ["laktoseintoleranz", "laktose", "milch vertragen", "laktosefrei"],
      answers: [
        "**Laktoseintoleranz:** Milchzucker nicht verdaut — Blähungen, Bauchschmerz; Laktose reduzieren/testen.",
        "Hartkäse/Joghurt oft besser; lactase-Tabletten möglich; nicht mit Milchallergie verwechseln.",
        "Frag: Ernährung, Gluten, Allergie."
      ]
    },
    {
      keys: ["nussallergie", "erdnussallergie", "nuss allergie", "anaphylaxie nuss"],
      answers: [
        "**Nussallergie:** Kann schwer sein — Notfall-Set (Adrenalin) bei Risiko; Etiketten lesen.",
        "Kreuzkontamination in Küche/Restaurant; ärztliche Diagnose wichtig.",
        "Frag: Allergie, Erste Hilfe, Ernährung."
      ]
    },
    {
      keys: ["insektenstich", "bienenstich", "wespenstich", "stich behandeln"],
      answers: [
        "**Insektenstich:** Stachel raus (nicht kneifen), kühlen, beobachten — Atemnot/ Schwellung groß → 112.",
        "Allergie gegen Gift bekannt? Notfallplan; Mückenstiche jucken: kühlen, nicht kratzen.",
        "Frag: Allergie, Erste Hilfe, Zeckenbiss."
      ]
    },
    {
      keys: ["sonnencreme", "hautpflege", "uv schutz", "lichtschutzfaktor"],
      answers: [
        "**Sonnenschutz:** SPF 30+ großzügig auftragen, erneuern — UVA+UVB, auch im Schatten.",
        "Hautpflege: mild reinigen, Feuchtigkeit; Akne nicht ausdrücken.",
        "Frag: Sonnenbrand, Akne, Gesundheit."
      ]
    },
    {
      keys: ["akne", "pickel", "hautunreinheiten", "mitesser"],
      answers: [
        "**Akne:** Talg + Bakterien + Hormone — sanfte Reinigung, nicht kneten; Sonne/Stress beeinflussen.",
        "Bei starken Formen Dermatologe; keine Wundercremes ohne Rezept erhoffen.",
        "Frag: Hautpflege, Ernährung, Stress."
      ]
    },
    {
      keys: ["schlaganfall", "schlaganfall erkennen", "fast test schlaganfall", "stroke"],
      answers: [
        "**Schlaganfall (FAST):** Face hängt? Arm schwach? Speech slurred? → **sofort 112**, Zeit ist Gehirn.",
        "Keine Selbstmedikation; Ursachen: Bluthochdruck, Vorhofflimmern.",
        "Frag: Herzinfarkt, Erste Hilfe, Gesundheit."
      ]
    },
    {
      keys: ["herzinfarkt", "herzinfarkt erkennen", "brustschmerz notfall", "herzschmerz"],
      answers: [
        "**Herzinfarkt:** Brustdruck, Ausstrahlung Arm/Kiefer, Übelkeit, Kaltschweiß → **112**, nicht fahren lassen.",
        "Jede Minute zählt; Risikofaktoren: Rauchen, Blutdruck, Stress.",
        "Frag: Schlaganfall, Erste Hilfe, Fitness."
      ]
    },
    {
      keys: ["zahnspange", "kieferorthopaedie", "zaehne richten", "aligner"],
      answers: [
        "**Zahnspange/Aligner:** Kieferorthopädie korrigiert Stellung — Jahre, Hygiene wichtig.",
        "Kosten je nach Befund/Kasse; Retainer nach Behandlung tragen.",
        "Frag: Zahnpflege, Gesundheit."
      ]
    },
    {
      keys: ["bruxismus", "zaeheneknirschen", "knirschschiene", "nachts knirschen"],
      answers: [
        "**Zähneknirschen:** Stress + Schlaf — Knirschschiene vom Zahnarzt, Entspannung.",
        "Mahlflächen abgenutzt, Kopfschmerz morgens; nicht ignorieren.",
        "Frag: Schlaf, Stress, Zahnpflege."
      ]
    },
    {
      keys: ["trockene augen", "bildschirm augen", "digitale augenbelastung", "augentropfen"],
      answers: [
        "**Trockene Augen:** Bildschirmpausen (20-20-20), Blinzeln, Feuchtigkeit — Raum nicht zu trocken.",
        "Bei Dauerbeschwerden Augenarzt; Brille/Sehhilfe aktuell halten.",
        "Frag: Brille, Handy-Tipps, Ergonomie."
      ]
    },
    {
      keys: ["trinkwasser", "wasser trinken", "wie viel wasser", "dehydrierung trinken"],
      answers: [
        "**Trinken:** ~1,5–2 L/Tag je Aktivität/Wetter — Durstgefühl reicht meist.",
        "Urinfarbe hell = gut; zu viel auf einmal unnötig; Alkohol/Kaffee zusätzlich Wasser.",
        "Frag: Dehydrierung, Sommer, Ernährung."
      ]
    },
    {
      keys: ["kaffee", "koffein", "kaffee gesund", "koffein wirkung"],
      answers: [
        "**Kaffee/Koffein:** Wachmacher, blockiert Adenosin — Toleranz möglich, Entzug = Kopfschmerz.",
        "Nachmittags weniger für Schlaf; Schwangere/Blutdruck: Arzt fragen; nicht zu viel Energy.",
        "Frag: Schlaf, Einschlafen, Gesundheit."
      ]
    },
    {
      keys: ["alkohol", "alkohol gesundheit", "alkohol konsum", "wie viel alkohol"],
      answers: [
        "**Alkohol:** Ethanol — Leber, Schlaf, Risiko Krebs/Unfälle steigen mit Menge.",
        "Kein „gesundes“ Rauchen-Äquivalent; Grenzwerte niedrig halten; Sucht: Hilfe holen.",
        "Frag: Rauchen aufhören, Schlaf, Gesundheit."
      ]
    },
    {
      keys: ["rauchen aufhoeren", "rauchstopp", "nikotinentzug", "zigaretten aufhoeren"],
      answers: [
        "**Rauchen aufhören:** Nikotinabhängigkeit — Datum setzen, Unterstützung (Arzt, Hotline), Rückfälle normal.",
        "Pflaster/Kaugummi/Verhalten; Lunge erholt sich schrittweise; Gewichtszunahme möglich.",
        "Frag: Gesundheit, Stress, Sucht."
      ]
    },
    {
      keys: ["e-scooter", "escooter", "elektroroller", "e roller verkehr"],
      answers: [
        "**E-Scooter:** Erlaubt auf Radwegen/Straße je Zone — Helm empfohlen, Alkohol = wie Auto.",
        "Parken nicht auf Gehwegen blockierend; Versicherung & Kennzeichnung Pflicht.",
        "Frag: Fahrrad, Verkehr, Bußgeld."
      ]
    },
    {
      keys: ["fahrradhelm", "fahrrad sicherheit", "radfahren sicher", "fahrradlicht"],
      answers: [
        "**Fahrrad-Sicherheit:** Helm schützt · Licht vorne/hinten · Klingel · Blickkontakt im Verkehr.",
        "Handzeichen, nicht auf dem Gehweg rasen; Regeln wie Kraftfahrzeuge an Kreuzungen.",
        "Frag: E-Scooter, Verkehr, Fitness."
      ]
    },
    {
      keys: ["schwimmen lernen", "schwimmkurs", "schwimmen anfaenger", "wasser sicherheit"],
      answers: [
        "**Schwimmen lernen:** Kurs mit Aufsicht — Seepferdchen für Kinder; nie allein ohne Schwimmkenntnisse.",
        "Regeln: nicht nach Sprung springen, Strömung beachten, Kälte.",
        "Frag: Erste Hilfe, Sommer, Fitness."
      ]
    },
    {
      keys: ["zahnseide", "mundhygiene", "zaehne putzen", "zahnfleisch pflege"],
      answers: [
        "**Mundhygiene:** 2× täglich putzen, **Zahnseide**/Zwischenraumbürsten — Zahnfleisch nicht vergessen.",
        "Zahnarzt 2×/Jahr; Mundgeruch oft Zähne/Zunge; nicht zu hart scrubben.",
        "Frag: Zahnpflege, Zahnspange, Gesundheit."
      ]
    },
    {
      keys: ["ergonomie", "ergonomischer arbeitsplatz", "schreibtisch hoehe", "homeoffice ergonomie"],
      answers: [
        "**Ergonomie:** Monitor auf Augenhöhe, Arme 90°, Füße flach — Stuhl mit Lordosenstütze.",
        "Alle 30–60 Min. bewegen; Laptop erhöhen + externe Tastatur.",
        "Frag: Rückenschmerz, Homeoffice, Bildschirm-Augen."
      ]
    },
    {
      keys: ["laerm wohnung", "lärm nachbarn", "schallschutz", "laermschutz nacht"],
      answers: [
        "**Lärm:** Nachtruhe 22–6 Uhr (lokal variiert) — Gespräch zuerst, Hausverwaltung/Polizei bei Eskalation.",
        "Teppiche, Möbel entkoppeln, Kopfhörer; eigene Lautstärke checken.",
        "Frag: Nachbarschaft, Mietrecht, Konflikt."
      ]
    },
    {
      keys: ["tierarzt", "tierarzt kosten", "impfung hund", "impfung katze"],
      answers: [
        "**Tierarzt:** Jährliche Checks, Impfungen (Tollwut etc.) — Kosten einplanen, Tierversicherung optional.",
        "Notfall: erreichbarer Tier-Notdienst; Impfpass aufbewahren.",
        "Frag: Haustier, Hundeerziehung, Versicherung."
      ]
    },
    {
      keys: ["hundekot", "hundekotbeutel", "gassi gehen regeln", "hundepflichten"],
      answers: [
        "**Hundekot:** Auf öffentlichem Grund **immer** einsammeln & entsorgen — Leine wo vorgeschrieben.",
        "Beutel mitführen; Kot nicht in Biotonne; andere Hunde respektieren.",
        "Frag: Hundeerziehung, Nachhaltigkeit, Haustier."
      ]
    },
    {
      keys: ["wg suche", "wohngemeinschaft", "wg finden", "mitbewohner"],
      answers: [
        "**WG-Suche:** Probefrühstück, Putzplan & Kosten klären — schriftlicher Mietvertrag auch in WG.",
        "Gemeinsame Regeln (Lärm, Gäste, Küche); Kaution & Nebenkosten transparent.",
        "Frag: Wohnen, Mietrecht, Umzug."
      ]
    },
    {
      keys: ["wohnungsbesichtigung", "besichtigung wohnung", "wohnung angucken", "checkliste besichtigung"],
      answers: [
        "**Besichtigung:** Lage (Lärm, ÖPNV), Feuchtigkeit/Schimmel, Heizung testen — tagsüber schauen.",
        "Mietvertrag-Muster lesen, Nebenkosten, Kaution; Fotos für später.",
        "Frag: Mietrecht, Schimmel, Umzug."
      ]
    },
    {
      keys: ["ausbildungsplatz", "ausbildung finden", "azubi bewerbung", "lehrstelle"],
      answers: [
        "**Ausbildung:** Bewerbung wie Job — Praktika, Handwerk/Industrie/Kaufmännisch; IHK/Kammer Infos.",
        "Gehalt steigt oft jährlich; Vertrag prüfen; Übernahmechance.",
        "Frag: Bewerbung, Praktikum, Karriere."
      ]
    },
    {
      keys: ["betriebsrat", "betriebsvereinbarung", "mitbestimmung", "arbeitnehmervertretung"],
      answers: [
        "**Betriebsrat:** Gewählte Vertretung der Belegschaft — Mitbestimmung bei Sozial-/Personalfragen.",
        "Nicht ersetzt Gewerkschaft; vertrauliche Ansprechpartner intern.",
        "Frag: Gewerkschaft, Arbeit, Kündigung."
      ]
    },
    {
      keys: ["bewerbung email", "bewerbung per email", "anschreiben email", "betreff bewerbung"],
      answers: [
        "**Bewerbung per E-Mail:** Betreff klar (*Bewerbung als …*), PDF-Anhang, kurz höflich.",
        "Lebenslauf + Anschreiben eine PDF oder sauber benannt; Größe < 5 MB.",
        "Frag: Lebenslauf, Vorstellungsgespräch, Karriere."
      ]
    },
    {
      keys: ["online vorstellungsgespraech", "video interview", "teams bewerbung", "zoom bewerbung"],
      answers: [
        "**Online-Interview:** Kamera/Mikro testen, ruhiger Hintergrund, Licht von vorne.",
        "Pünktlich einwählen; Blick in Kamera; Notizen erlaubt, Handy stumm.",
        "Frag: Vorstellungsgespräch, Homeoffice, Bewerbung."
      ]
    },
    {
      keys: ["numerus clausus", "nc medizin", "nc psychologie", "zulassungsbeschraenkung"],
      answers: [
        "**NC** = Noten-basierte Zulassungsgrenze — schwankt je Semester/Hochschule.",
        "Warten, Ausland, Quereinstieg, Alternativen prüfen; dosv.de für Medizin etc.",
        "Frag: Studium, Abitur, Bewerbung."
      ]
    },
    {
      keys: ["semesterferien", "semesterferien planen", "vorlesungsfreie zeit", "uni ferien"],
      answers: [
        "**Semesterferien:** Praktikum, Reisen, Lernen für Prüfungen — nicht nur Pause.",
        "Rente/Semesterbeitrag trotzdem; Wohnung behalten oder untervermieten (Vermieter!).",
        "Frag: Studium, Praktikum, Reisen."
      ]
    },
    {
      keys: ["gehoerschutz", "gehörschutz", "lautstaerke konzert", "ohren schuetzen"],
      answers: [
        "**Gehörschutz:** >85 dB schädigt dauerhaft — Ohrstöpsel/ Kapselgehörschutz bei Konzert/Motor.",
        "Pausen einlegen; Kopfhörer nicht zu laut (60/60-Regel).",
        "Frag: Konzert, Gesundheit, Lärm."
      ]
    },
    {
      keys: ["bildschirmzeit", "bildschirmzeit kinder", "handy kinder", "medienerziehung"],
      answers: [
        "**Bildschirmzeit:** Altersgerechte Limits, gemeinsame Regeln — Schlaf & Bewegung zuerst.",
        "Inhalte mitreden, nicht nur Dauer; Vorbild sein; kindgerechte Apps.",
        "Frag: Erziehung, Schlaf, Cybermobbing."
      ]
    },
    {
      keys: ["mediation", "schlichtung", "konflikt mediation", "streit schlichten"],
      answers: [
        "**Mediation:** Neutraler Mediator hilft Lösung finden — freiwillig, vertraulich.",
        "Arbeit, Familie, Nachbarschaft; günstiger als Gericht; Vereinbarung schriftlich.",
        "Frag: Konflikt, Scheidung, Nachbarschaft."
      ]
    },
    {
      keys: ["heizen sparen", "heizkosten senken", "richtig heizen", "heizung einstellen"],
      answers: [
        "**Heizen sparen:** Nachtabsenkung, Türen zu, 20–22 °C Wohnen — Stoßlüften statt Kipp.",
        "Thermostate nicht verdecken; Wartung; Dämmung langfristig.",
        "Frag: Nebenkosten, Strom sparen, Wärmepumpe."
      ]
    },
    {
      keys: ["fahrschule", "fuehrerschein", "führerschein", "fahrstunden", "theoriepruefung"],
      answers: [
        "**Führerschein:** Theorie + Praxis in Fahrschule — Klasse B = Pkw, Kosten planen (mehrere tausend €).",
        "Probezeit 2 Jahre, 0,0 Promille; MPU bei Auffälligkeiten.",
        "Frag: Auto, Verkehr, Bußgeld."
      ]
    },
    {
      keys: ["gebrauchtwagen", "auto kaufen", "auto kauf tipps", "occasion pruefen"],
      answers: [
        "**Gebrauchtwagen:** HU/AU, Serviceheft, Unfallhistorie (z. B. Datenbank) — Probefahrt & unabhängige Prüfung.",
        "Vertrag schriftlich, Gewährleistung klären; nicht unter Druck unterschreiben.",
        "Frag: Kfz-Versicherung, TÜV, Finanzen."
      ]
    },
    {
      keys: ["tuev", "hauptuntersuchung", "hu au auto", "inspektion auto"],
      answers: [
        "**HU/AU (TÜV):** HU alle 2 Jahre (Neuwagen später) — sicherheitsrelevant; AU = Abgas.",
        "Mängel beheben vor Termin; Plakette am Kennzeichen.",
        "Frag: Gebrauchtwagen, Auto-Wartung."
      ]
    },
    {
      keys: ["auto wartung", "oelwechsel", "ölwechsel", "inspektion service auto"],
      answers: [
        "**Auto-Wartung:** Öl, Filter, Bremsen nach Hersteller-Intervall — Werkstatt oder selbst (Öl).",
        "Reifendruck monatlich; Flüssigkeiten checken; Rost früh behandeln.",
        "Frag: TÜV, Winterreifen, Gebrauchtwagen."
      ]
    },
    {
      keys: ["autounfall", "unfall auto was tun", "verkehrsunfall", "unfallstelle"],
      answers: [
        "**Autounfall:** Unfallstelle sichern (Warndreieck, Weste) — **112** bei Verletzten, Polizei bei Streit/Schaden.",
        "Fotos, Daten tauschen, Versicherung melden; nicht vorschnell Schuld eingestehen.",
        "Frag: Bußgeld, Kfz-Versicherung, Erste Hilfe."
      ]
    },
    {
      keys: ["kfz versicherung", "autoversicherung", "haftpflicht auto", "vollkasko teilkasko"],
      answers: [
        "**Kfz-Versicherung:** Haftpflicht Pflicht · Teilkasko (Diebstahl, Glas, Tier) · Vollkasko (+ eigene Schäden).",
        "SF-Klassen senken Prämie; jährlich vergleichen; Fahrer & Nutzung angeben.",
        "Frag: Versicherung, Autounfall, Gebrauchtwagen."
      ]
    },
    {
      keys: ["tanken sparen", "benzin sparen", "sprit sparen", "verbrauch senken auto"],
      answers: [
        "**Sprit sparen:** Vorausschauend fahren, Reifendruck, unnötiges Gewicht raus — App-Preisvergleich beim Tanken.",
        "Motor warmlaufen lassen: kurz; Spritmonitor im Auto nutzen.",
        "Frag: E-Auto, Carsharing, Finanzen."
      ]
    },
    {
      keys: ["carsharing", "carsharing app", "miles share now", "auto teilen"],
      answers: [
        "**Carsharing:** Auto per App mieten (Minuten/Stunden) — Parkplätze in Städten, Führerschein nötig.",
        "Schäden dokumentieren vor Fahrt; Zone & Tankregel lesen.",
        "Frag: E-Scooter, ÖPNV, Tanken sparen."
      ]
    },
    {
      keys: ["mitfahrgelegenheit", "blablacar", "fahrgemeinschaft", "mitfahren sparen"],
      answers: [
        "**Mitfahrgelegenheit:** Günstiger als Bahn/Flug auf Strecke — Bewertungen lesen, Treffpunkt öffentlich.",
        "Zahlung über Plattform; Sicherheit: jemandem Bescheid sagen.",
        "Frag: Reisen, Carsharing, Sicherheit online."
      ]
    },
    {
      keys: ["schneeketten", "schneeketten pflicht", "winter fahren berg", "glatteis fahren"],
      answers: [
        "**Schneeketten:** Bei Schnee/Eis in Bergen oft Pflicht — vor Anstieg montieren, max. Temp beachten.",
        "Langsam fahren, kein Vollgas; Winterreifen + Ketten kombinieren wo nötig.",
        "Frag: Winterreifen, Autounfall, Reisen."
      ]
    },
    {
      keys: ["bahn fahren", "zug fahren tipps", "deutsche bahn tipps", "bahn reisen"],
      answers: [
        "**Bahnfahrt:** Früh buchen spart · **Deutschland-Ticket** für Regional · Verspätung: Fahrgastrechte.",
        "Anschluss prüfen, Ausweis dabei; ICE Reservierung optional.",
        "Frag: Deutschland-Ticket, Flugverspätung, Reisen."
      ]
    },
    {
      keys: ["flugverspaetung", "flug annulliert", "fluggastrechte", "entschaedigung flug"],
      answers: [
        "**Flugverspätung:** EU-Rechte ab 3 h oft Essen/Kommunikation · Annullierung: Umleitung oder Erstattung.",
        "Schriftlich bei Airline, EU-Formular; Reiseversicherung prüfen.",
        "Frag: Reiseversicherung, Flughafen, Reisen."
      ]
    },
    {
      keys: ["reiseversicherung", "auslandskrankenversicherung", "reisekrankenversicherung", "annullierung versicherung"],
      answers: [
        "**Reiseversicherung:** Auslandskranken wichtig (Kosten hoch) · Annullierung optional · Gepäck.",
        "Kreditkarte manchmal Basis-Schutz — Bedingungen lesen.",
        "Frag: Flugverspätung, Reisepass, Gesundheit."
      ]
    },
    {
      keys: ["packliste", "packliste urlaub", "reise packen", "was einpacken reise"],
      answers: [
        "**Packliste:** Ausweis, Medikamente, Ladegerät, Adapter — weniger ist mehr, Wäscheplan.",
        "Handgepäck: Flüssigkeiten 100 ml; Wertsachen & Wechselkleidung dabei.",
        "Frag: Flughafen, Reiseversicherung, Reisen."
      ]
    },
    {
      keys: ["jetlag", "zeitverschiebung", "jet lag tipps", "umstellung zeitzone"],
      answers: [
        "**Jetlag:** Licht & Schlaf an Zielzeit anpassen — hin: früh hell, zurück: abends hell.",
        "Koffein sparsam, viel trinken; 1 Tag pro Stunde Zeitverschiebung grob.",
        "Frag: Zeitumstellung, Schlaf, Reisen."
      ]
    },
    {
      keys: ["geld ausland", "waehrung tauschen", "währung reise", "kreditkarte ausland"],
      answers: [
        "**Geld im Ausland:** Karte oft günstiger als Wechselstuben am Flughafen — Fremdwährungsgebühr prüfen.",
        "Bargeld-Notreserve; EC/Giro teils eingeschränkt; Reisekarte informieren.",
        "Frag: Reiseversicherung, Packliste, Finanzen."
      ]
    },
    {
      keys: ["kulturschock", "kultur schock reise", "fremde kultur ankommen", "culture shock"],
      answers: [
        "**Kulturschock:** Normale Phasen bei längerem Aufenthalt — Neugier, Geduld, lokale Regeln lernen.",
        "Nicht alles vergleichen; Kontakte vor Ort; Heimweh normal.",
        "Frag: Reisen, Sprachen lernen, Einsamkeit."
      ]
    },
    {
      keys: ["notfall ausland", "botschaft hilfe", "pass verloren ausland", "hilfe im ausland"],
      answers: [
        "**Notfall Ausland:** **Botschaft/Konsulat** bei Passverlust, Haft, schwerer Krise — Ausweiskopie vorher speichern.",
        "EU: E111/EHIC Kranken · Reiseversicherung-Hotline · Familie informieren.",
        "Frag: Reisepass, Reiseversicherung, Visum."
      ]
    },
    {
      keys: ["fussgaenger", "fussgaenger zone", "vorfahrt fussgaenger", "zebrastreifen"],
      answers: [
        "**Fußgänger:** Zebrastreifen = Vorfahrt wenn drauf · Handy weg · Kinder an der Hand.",
        "Fußgängerzone: Radfahren nur wenn erlaubt; Blickkontakt mit Autos.",
        "Frag: Fahrrad, Verkehr, Bußgeld."
      ]
    },
    {
      keys: ["hund anmelden", "hundesteuer", "hund registrieren", "hund melden gemeinde"],
      answers: [
        "**Hund anmelden:** In vielen Gemeinden meldepflichtig + **Hundesteuer** — Tierarzt, Chip, Haftpflicht oft Pflicht.",
        "Maulkorb/Leinenpflicht je nach Ort; Kot entsorgen.",
        "Frag: Hundeerziehung, Tierarzt, Haftpflicht."
      ]
    },
    {
      keys: ["katze haltung", "katze pflege", "katzenhaltung", "katze allein lassen"],
      answers: [
        "**Katzenhaltung:** Auslastung (Spiel, Kratzbaum), sauberes Klo, Tierarzt & Impfung.",
        "Nicht zu lange allein ohne Beschäftigung; Auslauf nur sicher (Balkonnetz).",
        "Frag: Haustier, Tierarzt, Hundeerziehung."
      ]
    },
    {
      keys: ["kaninchen", "meerschweinchen", "kleintier haltung", "hamster haltung"],
      answers: [
        "**Kleintiere:** Artgerechtes Gehege, Futter, Tierarzt — nicht zu klein, nicht in Zugluft.",
        "Kaninchen/Meerschweinchen oft paarweise; tägliche Pflege.",
        "Frag: Haustier, Tierarzt, Aquarium."
      ]
    },
    {
      keys: ["ebike", "e-bike", "pedelec", "fahrrad akku", "elektro fahrrad regeln"],
      answers: [
        "**E-Bike/Pedelec:** Pedelec bis 25 km/h + Tretunterstützung oft wie Fahrrad · S-Pedelec = Versicherungskennzeichen & Helm.",
        "Akku pflegen, nicht voll entladen; Diebstahlschutz wichtig.",
        "Frag: Fahrradhelm, Fahrrad Diebstahl, Verkehr."
      ]
    },
    {
      keys: ["fahrrad diebstahl", "fahrrad gestohlen", "fahrrad sichern", "fahrrad schloss"],
      answers: [
        "**Fahrrad-Diebstahl:** Qualitätsschloss + festen Anker · Rahmennummer notieren, Polizei + Versicherung.",
        "GPS-Tracker optional; nicht nur am Vorderrad.",
        "Frag: E-Bike, Bußgeld, Versicherung."
      ]
    },
    {
      keys: ["fahrrad reparatur", "fahrrad platten", "kette fahrrad", "fahrrad kaputt"],
      answers: [
        "**Fahrrad-Reparatur:** Platten: Ersatzschlauch/Kit · Kette ölen, Verschleiß checken.",
        "Werkstatt bei E-Bike-Motor/Akku; jährliche Inspektion sinnvoll.",
        "Frag: E-Bike, Fahrradhelm, Outdoor."
      ]
    },
    {
      keys: ["grillen balkon", "grillen nachbarn", "balkon grillen erlaubt", "grillparty laerm"],
      answers: [
        "**Grillen auf Balkon:** Mietvertrag/Hausordnung lesen — Rauch & Geruch können **Lärm-/Ruhestörung** sein.",
        "Nachbarn vorher informieren, Ruhezeiten einhalten, Elektrogrill oft unproblematischer.",
        "Frag: Lärmbelästigung, Nachbarn, Mietrecht."
      ]
    },
    {
      keys: ["laermbelaestigung", "laerm nachbarn", "musik zu laut", "ruhestoerung nachbarn"],
      answers: [
        "**Lärmbelästigung:** Ruhezeiten (meist 22–6 Uhr, Mittagsruhe) — zuerst freundlich reden, dokumentieren.",
        "Hausverwaltung, ggf. Ordnungsamt/Mediation; Mietminderung nur in schweren Fällen.",
        "Frag: Nachbarn, Mediation, Mietrecht."
      ]
    },
    {
      keys: ["eigenbedarf", "kuendigung eigenbedarf", "vermieter kuendigung wohnung", "mieter kuendigung wohnung"],
      answers: [
        "**Eigenbedarf-Kündigung:** Vermieter will selbst/für Angehörige einziehen — Fristen & Begründung prüfen.",
        "Mieter: Widerspruch/Anwalt bei Zweifel; Ausgleich/ Fristverlängerung verhandeln.",
        "Frag: Mietrecht, Mieterhöhung, Umzug."
      ]
    },
    {
      keys: ["mietnomade", "mieter zahlt nicht", "mietnomaden", "mietausfall"],
      answers: [
        "**Mietausfall:** Mahnung, Räumungsklage — Vorsorge: Schufa, Mietsicherheit, Kaution.",
        "„Mietnomade“ ist kein juristischer Begriff; Fristen & Verfahren einhalten.",
        "Frag: Mietschulden, Mietkaution, Mietrecht."
      ]
    },
    {
      keys: ["ordnungsamt", "ordnungsamt meldung", "ordnungswidrigkeit melden", "beschwerde ordnungsamt"],
      answers: [
        "**Ordnungsamt:** Meldung bei Lärm, Müll, Parkverstößen — sachlich, Ort/Zeit, ggf. Fotos.",
        "Nicht für alle Streitigkeiten zuständig; Polizei bei Gefahr.",
        "Frag: Lärmbelästigung, Bußgeld, Nachbarn."
      ]
    },
    {
      keys: ["rasen pflege", "unkraut garten", "rasenmaehen", "garten unkraut"],
      answers: [
        "**Rasen & Unkraut:** Regelmäßig mähen, nicht zu kurz — Unkraut jäten oder Mulch, wenig Herbizid.",
        "Boden lockern, düngen nach Bedarf; Trockenheit gießen.",
        "Frag: Garten, Kompost, Tomaten."
      ]
    },
    {
      keys: ["tomaten anbau", "tomaten pflanzen", "gemuese garten", "hochbeet"],
      answers: [
        "**Tomaten:** Warm, viel Licht — auspflanzen nach Eisheiligen, Stütze, regelmäßig gießen.",
        "Hochbeet/Balkon möglich; Blatt unten entfernen gegen Pilz.",
        "Frag: Garten, Balkongarten, Kompost."
      ]
    },
    {
      keys: ["balkongarten", "balkon bepflanzen", "kraeuter balkon", "balkon pflanzen tipps"],
      answers: [
        "**Balkongarten:** Kübel mit Drainage, passende Größe — Kräuter, Tomaten, Salat für Anfänger.",
        "Wind/Sonne beachten; nicht zu viel auf einmal gießen.",
        "Frag: Zimmerpflanzen, Tomaten, Urban Gardening."
      ]
    },
    {
      keys: ["motorrad fuehrerschein", "motorrad führerschein", "fuehrerschein klasse a", "motorrad fahren lernen"],
      answers: [
        "**Motorrad-Führerschein:** Klasse A/A2/A1 je nach Alter/Leistung — Theorie + Praxis, Schutzkleidung Pflicht.",
        "StVO & Sichtbarkeit; Anfänger: Sicherheitstraining.",
        "Frag: Fahrschule, Verkehr, Bußgeld."
      ]
    },
    {
      keys: ["babysitter", "babysitter finden", "kinderbetreuung abends", "aufsitzen kind"],
      answers: [
        "**Babysitter:** Empfehlungen, Kennenlernen, Notfallnummern — Erste-Hilfe-Kurs sinnvoll.",
        "Regeln & Schlafzeiten schriftlich; jüngere Kinder nie allein lange.",
        "Frag: Kita, Eltern, Erste Hilfe."
      ]
    },
    {
      keys: ["hausapotheke", "medikamente zuhause", "apotheke haushalt", "notfall haus"],
      answers: [
        "**Hausapotheke:** Pflaster, Fieberthermometer, Schmerzmittel (passend), Wunddesinfektion — Ablauf checken.",
        "Kinder gesichert lagern; bei Unsicherheit Apotheke/Arzt.",
        "Frag: Erste Hilfe, Erkältung, Reiseapotheke."
      ]
    },
    {
      keys: ["ware retournieren", "rueckgabe online", "rückgabe online shop", "retoure paket"],
      answers: [
        "**Online-Rückgabe:** 14 Tage Widerruf bei Fernabsatz — Rücksendung dokumentieren, Frist einhalten.",
        "Zustand wie erhalten; Geld zurück nach Erhalt; Ausnahmen (Hygiene) beachten.",
        "Frag: Widerrufsrecht, Gewährleistung, Verbraucherzentrale."
      ]
    },
    {
      keys: ["spam anrufe", "anruf spam", "werbeanrufe blockieren", "call center nervt"],
      answers: [
        "**Spam-Anrufe:** Nicht rangehen bei Unbekannten, Nummer blockieren — Liste „keine Werbung“ hilft begrenzt.",
        "Nie Daten am Telefon geben; Meldung bei Verbraucherzentrale/Bundesnetzagentur.",
        "Frag: Phishing, Datenschutz, Verbraucherzentrale."
      ]
    },
    {
      keys: ["passwort gehackt", "datenleck", "account gehackt", "was tun bei hack"],
      answers: [
        "**Account gehackt:** Sofort Passwort ändern (unique), 2FA aktivieren — andere Konten mit gleichem Passwort.",
        "Gerät scannen, Bank/Karte prüfen; Meldung an Anbieter.",
        "Frag: 2FA, Passwort-Manager, Phishing."
      ]
    },
    {
      keys: ["was ist ein auto", "wie funktioniert ein auto", "auto einfach", "was ist ein pkw"],
      answers: [
        "**Auto:** Fahrzeug mit Motor — treibt Raeder an, lenkt mit Lenkrad, bremst mit Bremsen.",
        "Kern: Motor → Getriebe → Raeder. Benzin/Strom/Elektro als Energie.",
        "Sicherheit: Gurt, Airbag, regelmaessige Wartung. Fuehrerschein noetig.",
        "Frag: Was ist ein Elektroauto? · Verkehr · Umwelt."
      ]
    },
    {
      keys: ["was ist ein computer", "was ist pc", "computer einfach", "was ist laptop"],
      answers: [
        "**Computer:** Elektronisches Geraet das Daten verarbeitet — CPU, RAM, Speicher, Ein-/Ausgabe.",
        "Software (Programme) + Hardware (Teile). Beispiele: Browser, Spiele, Text.",
        "Laptop = mobiler PC. Smartphone = kleiner Computer mit Touch.",
        "Frag: Was ist Programmierung? · Internet · KI."
      ]
    },
    {
      keys: ["was ist wifi", "wlan", "was ist wlan", "internet zuhause"],
      answers: [
        "**WLAN/WiFi:** Drahtloses Netzwerk zuhause — Router verbindet Internet mit Geraeten.",
        "Passwort schuetzt das Netz. 2.4 GHz = Reichweite, 5 GHz = schneller nah.",
        "Tipps: Router zentral, Updates, starkes Passwort.",
        "Frag: Wie funktioniert das Internet? · Cybersicherheit."
      ]
    },
    {
      keys: ["was ist email", "e-mail", "elektronische post"],
      answers: [
        "**E-Mail:** Digitale Nachricht ueber Internet — Adresse wie name@anbieter.de.",
        "Anhang fuer Dateien. Spam-Filter und Vorsicht bei Links.",
        "Geschaeftlich und privat wichtig — professionelle Adresse hilft.",
        "Frag: Phishing · Datenschutz · Internet."
      ]
    },
    {
      keys: ["was ist fussball", "fussball einfach", "was ist soccer"],
      answers: [
        "**Fussball:** Teams versuchen mit dem Fuss den Ball ins gegnerische Tor zu schiessen.",
        "11 Spieler pro Team · 2 Halbzeiten · nur Torwart darf in der eigenen Strafraum mit Haenden spielen.",
        "WM, Champions League, Bundesliga — groesster Sport weltweit.",
        "Frag: Was ist Sport? · Fair Play · Teamwork."
      ]
    },
    {
      keys: ["was ist schwimmen", "schwimmen lernen", "schwimmen einfach"],
      answers: [
        "**Schwimmen:** Fortbewegung im Wasser — Arme, Beine, Atmung koordinieren.",
        "Stile: Brust, Kraul, Ruecken, Schmetterling. Schwimmen trainiert den ganzen Koerper.",
        "Sicherheit: nie allein, Aufsicht bei Kindern, in flachem Wasser ueben.",
        "Frag: Gesundheit · Sport · Sicherheit im Wasser."
      ]
    },
    {
      keys: ["was ist hund", "was ist ein hund", "hunde einfach"],
      answers: [
        "**Hund:** Haus-Tier und bester Freund des Menschen — loyal, trainierbar, sozial.",
        "Braucht: Futter, Wasser, Bewegung, Tierarzt, Liebe. Rassen unterschiedlich gross.",
        "Erziehung mit Geduld. Hundehaltung = Verantwortung viele Jahre.",
        "Frag: Was ist ein Tier? · Haustiere · Tierschutz."
      ]
    },
    {
      keys: ["was ist katze", "was ist eine katze", "katzen einfach"],
      answers: [
        "**Katze:** Beliebtes Haustier — eigenstaendig, jagt Instinkt, putzt sich selbst.",
        "Braucht: Futter, Wasser, Kratzbaum, Ruheplatz, Tierarzt.",
        "Indoor sicherer als Freigang (Verkehr, Tiere).",
        "Frag: Haustiere · Tiere · Verantwortung."
      ]
    },
    {
      keys: ["was ist sonne", "die sonne einfach", "was macht die sonne"],
      answers: [
        "**Sonne:** Stern in der Mitte unseres Sonnensystems — liefert Licht und Waerme.",
        "Ohne Sonne kein Leben auf der Erde. Nicht direkt ansehen!",
        "Sonnenenergie = erneuerbare Energie. Tag/Nacht durch Erdrotation.",
        "Frag: Sonnensystem · Astronomie · Klimawandel."
      ]
    },
    {
      keys: ["was ist mond", "der mond einfach"],
      answers: [
        "**Mond:** Erdtrabant — reflektiert Sonnenlicht, verursacht Gezeiten.",
        "Phasen: Vollmond, Neumond usw. — ca. 29 Tage Zyklus.",
        "1969 erste Menschen auf dem Mond (Apollo 11).",
        "Frag: Sonnensystem · Astronomie · Raumfahrt."
      ]
    },
    {
      keys: ["was ist wetter", "wetter einfach", "was ist klima"],
      answers: [
        "**Wetter:** Zustand der Atmosphaere — Temperatur, Regen, Wind, Wolken (kurzfristig).",
        "**Klima** = Durchschnitt ueber viele Jahre. Wetter aendert sich taeglich.",
        "Wetterbericht hilft bei Planung. Regen, Sonne, Schnee, Gewitter.",
        "Frag: Klimawandel · Jahreszeiten · Meteorologie."
      ]
    },
    {
      keys: ["was ist sommer", "sommer einfach"],
      answers: [
        "**Sommer:** Warme Jahreszeit — laengere Tage, mehr Sonne, Ferienzeit.",
        "Auf Nordhalbkugel ca. Juni–August. Leicht leichte Kleidung, Sonnenschutz.",
        "Aktivitaeten: Schwimmen, Reisen, Eis essen.",
        "Frag: Jahreszeiten · Wetter · Ferien."
      ]
    },
    {
      keys: ["was ist winter", "winter einfach"],
      answers: [
        "**Winter:** Kalte Jahreszeit — kurze Tage, Schnee moeglich, Weihnachten.",
        "Warm anziehen, Heizung, Grippe-Vorsorge. Dezember–Februar (Nordhalbkugel).",
        "Sport: Ski, Schlittschuh. Gemuetlichkeit zuhause.",
        "Frag: Jahreszeiten · Schnee · Weihnachten."
      ]
    },
    {
      keys: ["was ist familie", "familie einfach"],
      answers: [
        "**Familie:** Menschen die zusammengehoeren — Eltern, Kinder, Geschwister, manchmal Grosseltern.",
        "Wichtig: Respekt, Kommunikation, Zeit miteinander.",
        "Familien sehen unterschiedlich aus — Patchwork, Alleinerziehend, gross oder klein.",
        "Frag: Freundschaft · Gesellschaft · Kinderrechte."
      ]
    },
    {
      keys: ["was ist freund", "freundschaft einfach", "was ist freundschaft"],
      answers: [
        "**Freundschaft:** Vertrauensvolle Beziehung — gemeinsame Zeit, Hilfe, Ehrlichkeit.",
        "Gute Freunde hoeren zu, respektieren Grenzen, feiern Erfolge.",
        "Qualitaet wichtiger als Quantitaet. Online + offline moeglich.",
        "Frag: Kommunikation · Mobbing · Soziales."
      ]
    },
    {
      keys: ["was ist stress", "stress einfach", "stress abbauen"],
      answers: [
        "**Stress:** Koerperliche/mentale Reaktion auf Druck — kurz OK, dauerhaft belastend.",
        "Abbauen: Pausen, Sport, Schlaf, Gespraech, Atemuebungen.",
        "Perfektionismus und Ueberlastung vermeiden. Hilfe holen ist stark.",
        "Frag: Meditation · Gesundheit · Schlaf."
      ]
    },
    {
      keys: ["was ist meditation", "meditation einfach"],
      answers: [
        "**Meditation:** Bewusste Ruhe — Fokus auf Atem, Koerper oder Gedanken beobachten.",
        "5–10 Min/Tag reichen zum Start. Reduziert Stress, verbessert Konzentration.",
        "Apps oder stille Ecke. Kein Muss — fuer viele hilfreich.",
        "Frag: Yoga · Stress · Achtsamkeit."
      ]
    },
    {
      keys: ["was ist obst", "obst einfach"],
      answers: [
        "**Obst:** Suesses Pflanzenteil — Vitamine, Ballaststoffe, Energie. Aepfel, Bananen, Beeren…",
        "2 Portionen Obst/Tag empfohlen. Frisch, gefroren oder als Smoothie.",
        "Wichtig fuer Immunsystem und Verdauung.",
        "Frag: Gesundheit · Ernaehrung · Gemuese."
      ]
    },
    {
      keys: ["was ist gemuese", "gemuese einfach"],
      answers: [
        "**Gemuese:** Essbare Pflanzenteile — Vitamine, Mineralien, wenig Kalorien.",
        "Brokkoli, Karotten, Salat, Tomaten… Bunt auf dem Teller = vielfaeltig.",
        "Gedünstet, roh oder im Ofen. 3 Portionen/Tag ideal.",
        "Frag: Gesundheit · Ernaehrung · Kochen."
      ]
    },
    {
      keys: ["was ist musik", "musik einfach"],
      answers: [
        "**Musik:** Toene in Rhythmus und Melodie — Gefuehle, Kultur, Kommunikation.",
        "Instrumente: Gitarre, Klavier, Drums… Genres: Pop, Rock, Klassik, Hip-Hop.",
        "Hoeren, machen, tanzen — gut fuer Stimmung und Gehirn.",
        "Frag: Kunst · Kultur · Instrumente."
      ]
    },
    {
      keys: ["was ist kunst", "kunst einfach"],
      answers: [
        "**Kunst:** Kreativer Ausdruck — Malerei, Skulptur, Fotografie, digitale Kunst.",
        "Schoenheit subjektiv. Museen, Street Art, eigene Projekte.",
        "NOCO Render = Pixel-Kunst im Chat.",
        "Frag: Musik · Design · Kreativitaet."
      ]
    },
    {
      keys: ["was ist europa", "europa einfach"],
      answers: [
        "**Europa:** Kontinent mit ca. 44 Laendern — Deutschland, Frankreich, Spanien, Italien…",
        "EU = politische Union vieler europaeischer Staaten. Euro in vielen Laendern.",
        "Geschichte, Kultur, Sprachen sehr vielfaeltig.",
        "Frag: Deutschland · Geographie · EU."
      ]
    },
    {
      keys: ["was ist deutschland", "deutschland einfach"],
      answers: [
        "**Deutschland:** Land in Mitteleuropa — ca. 84 Mio. Einwohner, Hauptstadt Berlin.",
        "Bundeslaender, Demokratie, starke Wirtschaft. Sprache: Deutsch.",
        "Bekannt: Autos, Fussball, Oktoberfest, Geschichte.",
        "Frag: Europa · Demokratie · Geschichte."
      ]
    },
    {
      keys: ["was ist frankreich", "frankreich einfach"],
      answers: [
        "**Frankreich:** Land in Westeuropa — Hauptstadt Paris, Sprache Franzoesisch.",
        "Eiffelturm, Baguette, Mode, Wein. EU-Mitglied.",
        "Nachbar von Deutschland — Rhein grenzt.",
        "Frag: Europa · Geographie · Sprachen."
      ]
    },
    {
      keys: ["was ist mathe", "mathematik einfach", "rechnen einfach"],
      answers: [
        "**Mathe:** Lehre von Zahlen, Formen und Logik — Plus, Minus, Mal, Geteilt.",
        "Alltag: Einkaufen, Kochen, Bauen. Schule: Algebra, Geometrie, Analysis.",
        "Uebung macht den Meister. Fehler sind normal.",
        "Frag: Tipps zum Lernen · Physik · Logik."
      ]
    },
    {
      keys: ["was ist englisch", "englische sprache", "warum englisch"],
      answers: [
        "**Englisch:** Weltweit verbreitete Sprache — Internet, Musik, Business, Reisen.",
        "In Schule Pflicht in DE. Einfache Saetze: Hello, Thank you, How are you?",
        "Filme mit Untertiteln helfen beim Lernen.",
        "Frag: Sprachen · Schule · Kommunikation."
      ]
    },
    {
      keys: ["was ist arbeit", "arbeit einfach", "beruf einfach"],
      answers: [
        "**Arbeit:** Taetigkeit gegen Lohn — Job, Ausbildung, Studium als Vorbereitung.",
        "Wichtig: Work-Life-Balance, faire Bezahlung, Sicherheit am Arbeitsplatz.",
        "Viele Berufe: Handwerk, IT, Medizin, Kuenstler…",
        "Frag: Bewerbung · Wirtschaft · Karriere."
      ]
    },
    {
      keys: ["was ist schule einfach", "schule fuer kinder", "warum schule"],
      answers: [
        "**Schule:** Ort zum Lernen — Lesen, Schreiben, Rechnen, Soziales, Sport.",
        "Grundschule → weiterfuehrende Schule. Lehrer helfen, Hausaufgaben ueben.",
        "Freunde finden, Regeln lernen, auf Zukunft vorbereiten.",
        "Frag: Lernen · Pruefung · Bildung."
      ]
    },
    {
      keys: ["was ist baum", "baeume einfach"],
      answers: [
        "**Baum:** Grosse Pflanze mit Stamm, Aesten, Blaettern — produziert Sauerstoff.",
        "Wichtig fuer Klima, Tiere, Holz. Wald = viele Baeume zusammen.",
        "Nicht jeden Baum faellen — Natur schuetzen.",
        "Frag: Oekologie · Pflanzen · Klimawandel."
      ]
    },
    {
      keys: ["was ist blume", "blumen einfach"],
      answers: [
        "**Blume:** Bluhende Pflanze — oft bunt, duftend, lockt Insekten zur Bestaeubung.",
        "Rosen, Tulpen, Sonnenblumen… Garten oder Wildblumen.",
        "Geschenk-Symbol. Manche essbar (z.B. im Salat — vorsichtig!).",
        "Frag: Pflanzen · Natur · Garten."
      ]
    },
    {
      keys: ["noco render motive", "3600 motive", "2100 motive", "1850 motive", "1600 motive", "1350 motive", "1100 motive", "900 motive", "pixel motive liste", "motiv anzahl"],
      answers: [
        "**NOCO Render v5.3:** **3600 Motive** — ~2900 benannte Begriffe + erweiterte Motiv-Bibliothek.",
        "Matching versteht Synonyme: *Hund*, *dog*, *welpe* · *Apfel*, *apple* · *Wolkenkratzer*, *skyscraper*.",
        "6 Styles: Standard, NOCO Glass, Grell, Pastell, Dunkel, Neon.",
        "Exclusive noetig zum Generieren — **1 Bild zur Zeit** im Chat.",
        "Frag: *Welche einfachen Bilder gehen?* fuer Uebersicht."
      ]
    }
  ];

  var FALLBACKS = [
    "Das Thema kenne ich so noch nicht genau — probier ein **Stichwort** (*KI*, *Schlaf*, *Philosophie*) oder *Was ist …?*",
    "Ich bin unsicher. **NOCO Vault** hat 900+ Themen — z.B. *Was ist Demokratie?* · *Was ist ein Hund?* · *Was ist Mathe?*",
    "**Freie Fragen gehen:** *Was bedeutet …?* · *Kannst du mir … erklaeren?* · nur *Blockchain* oder *Psychologie*.",
    "Fuer **Bilder:** *Mach ein Bild von Katze* · **Video:** *Erstelle ein Video von Apfel* · **Features:** *Was ist Agent?*",
    "Schreib **Hilfe** oder *Was kann ich dich fragen?* — oder nutze **NOCO Sparks** links fuer Themenvorschlaege.",
    "Formuliere es anders oder klick **Neu generieren**. Mit **NOCO Flux** (Exclusive) volle Vault-Antworten."
  ];

  var FALLBACK_EXTEND = [
    "\n\n**NOCO Vault:** Wissenschaft, Tech, Geschichte, NOCO OS.",
    "\n\n**Namen:** Flux · Prism · Spark · Echo · Render · Rush · Lens.",
    "\n\n**Tiefe:** NOCO Flux (Exclusive) = volle Vault-Antworten.",
    "\n\n**Neu:** NOCO Echo, Render, Access, Rush — alles mit NOCO-Namen."
  ];

  var PROMPT_GROUPS = [
    {
      title: "NOCO Namen",
      icon: "✦",
      items: [
        "Was sind die NOCO Modell-Namen?",
        "Was ist NOCO Echo?",
        "Was ist NOCO Render?",
        "Was ist NOCO Rush?",
        "Was ist NOCO Vault?",
        "Was ist NOCO Lens?",
        "Was ist NOCO Sheen?",
        "Was ist NOCO Sparks?",
        "Was ist NOCO Access?",
        "Was ist NOCO Brief?",
        "Was ist NOCO Glow?"
      ]
    },
    {
      title: "NOCO Vault",
      icon: "◎",
      items: [
        "Was ist NOCO Vault?",
        "Was ist kuenstliche Intelligenz?",
        "Was ist ChatGPT?",
        "Wie funktioniert das Internet?",
        "Was ist Programmierung?",
        "Was ist Python?",
        "Was ist HTML CSS?",
        "Was ist Open Source?",
        "Wie entsteht Klimawandel?",
        "Was ist das Sonnensystem?",
        "Wie funktioniert das Gehirn?",
        "Tipps zum Lernen",
        "Was ist Demokratie?",
        "Wie bleibe ich sicher online?",
        "Was ist Geschichte?",
        "Was ist Gesundheit?",
        "Was sind Fake News?"
      ]
    },
    {
      title: "Wissenschaft",
      icon: "⬡",
      items: [
        "Was ist Physik?",
        "Was ist Chemie?",
        "Was ist Biologie?",
        "Was ist Quantenphysik?",
        "Wie alt ist das Universum?",
        "Warum ist Wasser wichtig?",
        "Was ist erneuerbare Energie?",
        "Was ist Astronomie?",
        "Was ist Oekologie?",
        "Was ist Genetik?",
        "Was ist ein Vulkan?",
        "Wie funktioniert Licht?",
        "Was sind Pflanzen?",
        "Was ist Mathematik?",
        "Was ist Geographie?",
        "Was ist Evolution?",
        "Was ist Photosynthese?",
        "Was ist Maschinelles Lernen?",
        "Was ist Cybersecurity?",
        "Was ist das Periodensystem?",
        "Was ist Solarenergie?",
        "Was ist ein Schwarzes Loch?",
        "Was sind Wolken?",
        "Was sind Mondphasen?",
        "Was sind Sternbilder?",
        "Was ist ein Tsunami?",
        "Was ist Wasserstoff?",
        "Was ist ein Exoplanet?",
        "Was ist Kernfusion?",
        "Was ist CERN?",
        "Was ist TypeScript?",
        "Was ist CRISPR?",
        "Was ist Nanotechnologie?",
        "Was ist die Korallenbleiche?",
        "Was ist die Relativitaetstheorie?",
        "Was ist das Immunsystem?",
        "Was ist Antibiotikaresistenz?",
        "Was ist ein Erdbeben?",
        "Was ist Artensterben?",
        "Was ist das Ozonloch?",
        "Was ist Atomkraft?",
        "Was ist Epigenetik?",
        "Was ist Vitamin D?",
        "Was ist Lichtverschmutzung?",
        "Was ist Vertical Farming?",
        "Was ist Rewilding?",
        "Was ist eine Solid-State-Batterie?",
        "Was ist Perowskit-Solar?",
        "Was ist Neuromorphic Computing?"
      ]
    },
    {
      title: "Mensch & Medizin",
      icon: "⊕",
      items: [
        "Wie funktioniert der Koerper?",
        "Was ist eine Impfung?",
        "Tipps fuer gesunden Schlaf",
        "Was ist Psychologie?",
        "Was ist Achtsamkeit?",
        "Was ist Ernaehrung?",
        "Was ist Burnout?",
        "Was ist Sport?",
        "Was ist Depression?",
        "Was ist Autismus?",
        "Was ist eine Angststörung?",
        "Was ist Organspende?",
        "Was ist der Pflegeberuf?",
        "Was ist Long COVID?",
        "Was ist ADHS?",
        "Was ist Migräne?",
        "Was ist Telemedizin?",
        "Was ist ein mRNA-Impfstoff?"
      ]
    },
    {
      title: "Tech & Zukunft",
      icon: "◇",
      items: [
        "Was ist Blockchain?",
        "Was ist VR und AR?",
        "Was ist ein Quantencomputer?",
        "Wie funktioniert WLAN?",
        "Was ist eine Datenbank?",
        "Was sind Roboter?",
        "Was ist JavaScript?",
        "Was ist ein Algorithmus?",
        "Was ist ein Smartphone?",
        "Was ist Social Media?",
        "Was ist 3D-Druck?",
        "Was ist Git?",
        "Was ist Docker?",
        "Was ist UX Design?",
        "Was ist ein VPN?",
        "Was ist DSGVO?",
        "Was ist TypeScript?",
        "Was ist ein Deepfake?",
        "Was ist Prompt Engineering?",
        "Was ist Arduino?",
        "Was ist Rust?",
        "Was ist SQL?",
        "Was ist Kubernetes?",
        "Was ist eine REST API?",
        "Was ist Swift?",
        "Was ist Kotlin?",
        "Was ist PHP?",
        "Was ist Figma?",
        "Was ist Discord?",
        "Was ist TikTok?",
        "Was ist NASA?",
        "Was ist Vue.js?",
        "Was ist GraphQL?",
        "Was ist AWS?",
        "Was ist SEO?",
        "Was ist Linux?",
        "Was ist React Native?",
        "Was ist Svelte?",
        "Was ist Laravel?",
        "Was ist 5G?",
        "Was ist Starlink?",
        "Was ist RAG?",
        "Was ist Zero Trust?",
        "Was ist Prompt Injection?",
        "Was ist Blender?",
        "Was ist Barrierefreiheit?",
        "Was ist Next.js?",
        "Was ist Prisma?",
        "Was ist Supabase?",
        "Was ist Redis?",
        "Was ist Web3?",
        "Was ist Ransomware?",
        "Was ist GitHub Copilot?",
        "Was ist OpenAI?",
        "Was ist Stable Diffusion?",
        "Was ist eine Vektordatenbank?",
        "Was ist Fine-Tuning?",
        "Was ist Social Engineering?",
        "Was ist Post-Quantum-Kryptografie?"
      ]
    },
    {
      title: "Wirtschaft & Politik",
      icon: "◉",
      items: [
        "Was ist Inflation?",
        "Was ist der Leitzins?",
        "Was ist ein ETF?",
        "Was ist der Mindestlohn?",
        "Was ist eine Gewerkschaft?",
        "Was ist BAföG?",
        "Was ist das duale Studium?",
        "Was ist der Schengen-Raum?",
        "Was ist die UNO?",
        "Was ist Pressefreiheit?",
        "Was ist ein Whistleblower?",
        "Was ist die EU AI Act?",
        "Was ist Fair Trade?",
        "Was ist der Mindestlohn?",
        "Was ist Bürgergeld?",
        "Was ist Wohngeld?",
        "Was ist Zinseszins?",
        "Was ist DeFi?",
        "Was ist ESG-Investing?",
        "Was ist die Mietpreisbremse?",
        "Was ist Altersvorsorge?"
      ]
    },
    {
      title: "Lernen & Skills",
      icon: "◇",
      items: [
        "Was ist die Pomodoro-Technik?",
        "Was ist eine Mindmap?",
        "Was ist die Cornell-Methode?",
        "Was ist kritisches Denken?",
        "Was ist Journaling?",
        "Tipps fuer oeffentliche Rede",
        "Was ist Verhandeln?",
        "Was ist die wissenschaftliche Methode?",
        "Was ist der Zettelkasten?",
        "Was ist Notion?",
        "Was ist Obsidian?",
        "Was ist GTD?",
        "Was ist die Eisenhower-Matrix?",
        "Was ist LaTeX?",
        "Was ist Plagiat?"
      ]
    },
    {
      title: "KI-Anbieter & Tools",
      icon: "✦",
      items: [
        "Was ist OpenAI?",
        "Was ist Anthropic Claude?",
        "Was ist Google Gemini?",
        "Was ist Meta Llama?",
        "Was ist Mistral AI?",
        "Was ist Stable Diffusion?",
        "Was sind Embeddings?",
        "Was ist Fine-Tuning?",
        "Was ist ein Kontextfenster?",
        "Was ist Shopify?",
        "Was ist Dropshipping?"
      ]
    },
    {
      title: "Kultur & Religion",
      icon: "◎",
      items: [
        "Was ist Buddhismus?",
        "Was ist Hinduismus?",
        "Was sind die Grundlagen des Islam?",
        "Was ist Christentum?",
        "Was ist Judentum?",
        "Was ist Tai Chi?",
        "Was ist Erasmus?",
        "Tipps zum Sprachenlernen"
      ]
    },
    {
      title: "NOCO Exclusive",
      icon: "◆",
      items: [
        "Was ist NOCO Exclusive?",
        "Wie viele Nachrichten habe ich gratis?",
        "Was ist der Unterschied zwischen NOCO Spark und NOCO Prism?",
        "Wie starte ich die Testphase?",
        "Was bekomme ich mit Exclusive?",
        "Was ist NOCO Lens?"
      ]
    },
    {
      title: "NOCO Render",
      icon: "▦",
      items: [
        "Was ist NOCO Render?",
        "Mach ein Bild von Katze",
        "Mach ein Bild von Hund",
        "Mach ein Bild von Banane",
        "Mach ein Bild von Apfel",
        "Mach ein Bild von Pferd",
        "Mach ein Bild von Wolkenkratzer",
        "Mach ein Bild von Giraffe",
        "Mach ein Bild von Dinosaurier",
        "Mach ein Bild von Feuerwerk",
        "Mach ein Bild von Hubschrauber",
        "Mach ein Bild von Windrad",
        "Mach ein Bild von Drohne",
        "Welche einfachen Bilder gehen?",
        "Was ist NOCO Sheen?"
      ]
    },
    {
      title: "Bild-Motive",
      icon: "▦",
      items: [
        "Welche einfachen Bilder gehen?",
        "Mach ein Bild von Koala",
        "Mach ein Bild von Einhorn",
        "Mach ein Bild von Rakete",
        "Mach ein Bild von Pizza",
        "Mach ein Bild von Regenbogen",
        "Mach ein Bild von Fussball",
        "Mach ein Bild von Pinguin",
        "Mach ein Bild von Wal",
        "Mach ein Bild von Drache",
        "Mach ein Bild von Roboter",
        "Mach ein Bild von Schloss",
        "Mach ein Bild von Feuerwerk",
        "Mach ein Bild von Kolosseum",
        "Mach ein Bild von Strand",
        "Mach ein Bild von Basketball",
        "Mach ein Bild von Schneemann",
        "Mach ein Bild von Weihnachtsbaum",
        "Mach ein Bild von Saxophon",
        "Mach ein Bild von Hamster",
        "Mach ein Bild von Flamingo",
        "Mach ein Bild von Ritter",
        "Mach ein Bild von Pyramide",
        "Mach ein Bild von Laserschwert",
        "Mach ein Bild von Planet Mars",
        "Mach ein Bild von Pagode",
        "Mach ein Bild von Vulkan",
        "Mach ein Bild von Pikachu",
        "Mach ein Bild von Weihnachtsmann",
        "Mach ein Bild von Käse",
        "Mach ein Bild von Saturn",
        "Mach ein Bild von Eiffelturm",
        "Mach ein Bild von Döner",
        "Mach ein Bild von Koala",
        "Mach ein Bild von Windmühle",
        "Mach ein Bild von Boomerang",
        "Mach ein Bild von Kompost",
        "Mach ein Bild von Pinguin Antarktis",
        "Mach ein Bild von Graduation Cap",
        "Mach ein Bild von Freiheitsstatue",
        "Mach ein Bild von Mariachi",
        "Mach ein Bild von Baseball",
        "Mach ein Bild von NASA Rakete",
        "Mach ein Bild von Panda",
        "Mach ein Bild von Flutter Logo",
        "Mach ein Bild von AWS Cloud",
        "Mach ein Bild von Kita",
        "Mach ein Bild von Insulin",
        "Mach ein Bild von Bundesrat",
        "Mach ein Bild von Linux",
        "Mach ein Bild von Blender",
        "Mach ein Bild von Starlink",
        "Mach ein Bild von Tornado",
        "Mach ein Bild von ETF Chart",
        "Mach ein Bild von Paralympics",
        "Mach ein Bild von Speedrun",
        "Mach ein Bild von Meme",
        "Mach ein Bild von Erdbeben",
        "Mach ein Bild von Ozon",
        "Mach ein Bild von Streaming",
        "Mach ein Bild von Fotografie",
        "Mach ein Bild von Immunsystem",
        "Mach ein Bild von Schengen",
        "Mach ein Bild von Next.js",
        "Mach ein Bild von Redis",
        "Mach ein Bild von Wärmepumpe",
        "Mach ein Bild von Metaverse",
        "Mach ein Bild von Pomodoro",
        "Mach ein Bild von Mindmap",
        "Mach ein Bild von Copilot",
        "Mach ein Bild von NFT",
        "Mach ein Bild von Hyperloop",
        "Mach ein Bild von Urban Gardening",
        "Mach ein Bild von Fair Trade",
        "Mach ein Bild von OpenAI",
        "Mach ein Bild von Claude",
        "Mach ein Bild von Gemini",
        "Mach ein Bild von Llama",
        "Mach ein Bild von Stable Diffusion",
        "Mach ein Bild von Zettelkasten",
        "Mach ein Bild von Notion",
        "Mach ein Bild von Obsidian",
        "Mach ein Bild von Tai Chi",
        "Mach ein Bild von Erasmus",
        "Mach ein Bild von Shopify",
        "Mach ein Bild von Vertical Farm",
        "Mach ein Bild von Rewilding",
        "Mach ein Bild von Mycelium",
        "Mach ein Bild von Solid State Battery"
      ]
    },
    {
      title: "Lens Detect",
      icon: "◎",
      items: [
        "Wie funktioniert KI-Bild erkennen?",
        "Was ist NOCO Lens Detect?",
        "Ist das ein echtes Bild oder KI?",
        "Wie erkenne ich meine NOCO Bilder?"
      ]
    },
    {
      title: "NOCO OS",
      icon: "✦",
      items: [
        "Was ist NOCO OS?",
        "Workspace vs Mobile PWA",
        "Was ist die NOCO Keycard?",
        "Erklaere Liquid Glass 1.5",
        "Was macht NOCO Security?",
        "Was ist der Fake-Virus?",
        "Was ist NOCO Forge?",
        "Was ist NOCO Pay?",
        "NOCO Nexus vs NOCO Hub",
        "Was ist FirstLight?",
        "Was ist NOCO Explorer?",
        "Was ist DevForge?",
        "Was ist die Theme-App?"
      ]
    },
    {
      title: "Datenschutz",
      icon: "◉",
      items: [
        "Wie ist meine Privatsphaere geschuetzt?",
        "Wer sieht meine Chats?",
        "Werden meine Daten gespeichert?",
        "Bist du eine echte KI?",
        "Wird etwas an einen Server gesendet?"
      ]
    },
    {
      title: "Gesellschaft",
      icon: "◉",
      items: [
        "Was sind Menschenrechte?",
        "Was ist Diversitaet?",
        "Was ist Deutschland?",
        "Was ist die EU?",
        "Was ist die Renaissance?",
        "Was ist Gleichstellung?"
      ]
    },
    {
      title: "Kultur & Alltag",
      icon: "◇",
      items: [
        "Was ist Kunst?",
        "Was ist ein guter Film?",
        "Tipps zum Lesen",
        "Wie funktioniert Wetter?",
        "Was ist Philosophie?",
        "Tipps fuer Bewerbungen",
        "Was ist Musik?",
        "Was ist Reisen?",
        "Was ist Archaeologie?",
        "Was ist Wirtschaft?",
        "Was ist Nachhaltigkeit?",
        "Wie fahre ich oeffentlich?",
        "Was sind gute Hobbys?",
        "Wie loese ich Konflikte?",
        "Was ist Fussball?",
        "Was ist ein Einhorn?",
        "Was ist Wandern?",
        "Was ist Gaertnern?",
        "Was ist ein Podcast?",
        "Was ist Muelltrennung?",
        "Was ist Schach?",
        "Was sind Wikinger?",
        "Was ist E-Sport?",
        "Was ist Formel 1?",
        "Was ist K-Pop?",
        "Was ist Erste Hilfe?",
        "Was ist der Notruf 112?",
        "Was ist Venedig?",
        "Was ist kreatives Schreiben?",
        "Was ist Anime?",
        "Was ist Pokemon?",
        "Was ist DSGVO?",
        "Was ist Smart Home?",
        "Was ist Veganismus?",
        "Was ist Machu Picchu?",
        "Was ist Prokrastination?",
        "Was ist Triathlon?",
        "Was ist Homeoffice?",
        "Was ist Streaming?",
        "Was ist Fotografie?",
        "Was ist ein Meme?",
        "Was ist Speedrunning?",
        "Was ist die Paralympics?",
        "Briefe mir Klimawandel",
        "Briefe mir Python vs JavaScript",
        "Was ist E-Mobilität?",
        "Was ist eine Wärmepumpe?",
        "Was ist das Metaverse?",
        "Was ist Kreislaufwirtschaft?",
        "Was ist Urban Gardening?",
        "Was ist das Grundgesetz?",
        "Was ist Faktencheck?",
        "Was ist Stoizismus?",
        "Was ist Mikroplastik?",
        "Was ist Van Life?",
        "Was ist Hydroponik?",
        "Was ist Permakultur?",
        "Was ist der Mauerfall?",
        "Was ist der Kalte Krieg?",
        "Was ist Skandinavien?",
        "Was ist Elektroschrott?",
        "Was ist Kanada?",
        "Was ist Mexiko?",
        "Was ist Artemis?",
        "Was ist Biogas?",
        "Was ist ein Umzug?",
        "Was ist das Deutschland-Ticket?",
        "Was ist Trinkgeld?",
        "Was ist Stalking?",
        "Was ist Astrologie?",
        "Tipps fuer Hausaufgaben",
        "Was ist Zeitumstellung?",
        "Was ist Lohnsteuer?",
        "Was ist Mietkaution?",
        "Was ist Schimmel?",
        "Tipps zum Vorstellungsgespraech",
        "Was ist Keto?",
        "Was ist Selbstvertrauen?",
        "Was ist die SCHUFA?",
        "Was ist ein Minijob?",
        "Was ist Pflegegrad?",
        "Was ist ein Nachsendeauftrag?",
        "Was ist Kindergeld?",
        "Was ist eine Krankmeldung?",
        "Was ist Widerrufsrecht?",
        "Was ist ALG I?",
        "Was ist 2FA?",
        "Was ist ein Notgroschen?",
        "Tipps gegen Prüfungsangst",
        "Was ist Phishing?",
        "Was ist ein Herzinfarkt?",
        "Tipps zum Einschlafen",
        "Was ist Laktoseintoleranz?",
        "Was bringt Meditation?",
        "Was ist ein E-Scooter?",
        "Was ist der NC?",
        "Tipps fuer WG-Suche",
        "Was ist Luftqualität?",
        "Was ist Bienensterben?",
        "Was ist Diabetes?",
        "Was ist Long COVID?",
        "Was ist der Bundesrat?",
        "Was ist Kita?",
        "Was ist Demografie?",
        "Was ist ein Gebrauchtwagen-Kauf?",
        "Was tun bei Autounfall?",
        "Tipps fuers Tanken sparen",
        "Was sind Fluggastrechte?",
        "Was ist Jetlag?",
        "Darf man auf dem Balkon grillen?",
        "Was ist ein E-Bike?",
        "Was tun bei Lärmbelästigung?",
        "Was ist Eigenbedarf?",
        "Was ist eine Hausapotheke?"
      ]
    },
    {
      title: "NOCO Tools",
      icon: "/",
      items: [
        "Wie funktioniert Multi-Chat?",
        "Was ist Neu generieren?",
        "Was sind Slash-Befehle?",
        "Wie exportiere ich Chats?",
        "Was ist NOCO Feedback?"
      ]
    },
    {
      title: "Echo & Access",
      icon: "◎",
      items: [
        "Was habe ich geschrieben?",
        "Fasse den Chat zusammen",
        "Welchen Plan habe ich?",
        "Welches Modell nutze ich?",
        "Was ist NOCO Access?"
      ]
    },
    {
      title: "Smalltalk",
      icon: "♡",
      items: [
        "Hallo!",
        "Wie geht's?",
        "Erzaehl einen Witz",
        "Was ist dein Lieblings-Feature?",
        "Was kann ich dich fragen?"
      ]
    }
  ];

  var TERM_INFO = {
    "NOCO Pay": "**NOCO Pay** = simuliertes Zahlungssystem in NOCO OS. Fake-Euro, Guthaben, App-Kaeufe und Exclusive-Abo (12 Euro/Monat). Kein echtes Geld!",
    "NOCO Security": "**NOCO Security** = Sicherheitszentrale in NOCO OS. Code, Keycard, Virenscan, Deep Scan (Exclusive), NOCO Pay und Warnungen.",
    "NOCO Exclusive": "**NOCO Exclusive** = Premium-Abo (12 Fake-Euro/Monat). In NOCO AI: Latest-Modell, unbegrenzte Nachrichten, Testphase moeglich.",
    "NOCO Forge": "**NOCO Forge** = App Store in NOCO OS. Apps suchen, installieren, Exclusive-Apps freischalten.",
    "NOCO Keycard": "**NOCO Keycard** = exportierbares Backup/Snapshot. Login, Sync zwischen Workspace und Mobile.",
    "NOCO Nexus": "**NOCO Nexus** = Schnellmenue auf dem Workspace-Desktop (oben rechts).",
    "NOCO Focus": "**NOCO Focus** = Fokusmodi: Produktivitaet, Gaming, Ruhig, Exclusive-Fokus.",
    "NOCO Hub": "**NOCO Hub** = mobiles Schnellmenue auf der PWA — touchoptimiert.",
    "NOCO Sync": "**NOCO Sync** = Keycard-Synchronisation zwischen Workspace und Mobile.",
    "NOCO Explorer": "**NOCO Explorer** = simulierter Browser in NOCO OS mit NOCO Web und Downloads.",
    "NOCO OS": "**NOCO OS** = browserbasiertes Betriebssystem-Konzept in HTML. Workspace (PC) + Mobile PWA (iPhone).",
    "NOCO AI": "**NOCO AI** = diese Chat-Webseite. Simulierte Wissens-KI mit Liquid Glass Design — lokal im Browser.",
    "Liquid Glass": "**Liquid Glass** = Design-Sprache mit Blur, Sheen, Teal/Violet/Blue-Akzenten und weichen Schatten.",
    "FirstLight": "**FirstLight** = Ersteinrichtung in NOCO OS (Benutzername, Code, Apps, Keycard).",
    "Keycard": "**Keycard** = NOCO-Backup-Snapshot. Speichert Layout, Apps, Themes, Exclusive-Status.",
    "Workspace": "**Workspace** = Desktop-Version von NOCO OS fuer PC mit Fenstern und Taskleiste.",
    "Fake-Virus": "**Fake-Virus** = harmlose Simulation in NOCO OS. Schadet dem echten PC nicht!",
    "ShieldGate": "**ShieldGate** = Sicherheitsbereich in NOCO OS Einstellungen (Code, Keycard, Reset).",
    "PWA": "**PWA** = Progressive Web App. NOCO OS Mobile laeuft als PWA auf dem iPhone.",
    "AI": "**AI / KI** = Kuenstliche Intelligenz. Hier: **simulierte** regelbasierte Engine, kein Cloud-LLM.",
    "NOCO": "**NOCO** = das Universum aus NOCO OS, NOCO AI, NOCO Pay, NOCO Exclusive und mehr.",
    "Pay": "Kurz fuer **NOCO Pay** — Fake-Zahlungen im NOCO-Universum.",
    "Security": "Kurz fuer **NOCO Security** — Sicherheitszentrale mit Virenscan und Keycard.",
    "Exclusive": "Kurz fuer **NOCO Exclusive** — Premium mit Latest-Modell und unbegrenzten Nachrichten.",
    "Wissensbank": "**NOCO Vault** = lokale Wissens-Engine in NOCO AI. 520+ Themen: NOCO OS, Wissenschaft, Tech, Alltag.",
    "NOCO Vault": "**NOCO Vault** = Wissens-Engine hinter Prism, Spark & Flux. Keyword-Matching, offline, in brain.js.",
    "NOCO Prism": "**NOCO Prism** = Free-Modell (Msg 1-10). Volle Vault-Antworten, 520+ Themen.",
    "NOCO Spark": "**NOCO Spark** = Free-Modell ab Msg 11. Kompakte Antworten — Flux/Exclusive fuer volle Tiefe.",
    "NOCO Flux": "**NOCO Flux** = Exclusive-Modell. Unbegrenzt, volle Vault-Antworten, Rush-Speed, Lens & Render.",
    "NOCO Echo": "**NOCO Echo** = Chat-Verlauf & Zusammenfassung. *Was habe ich geschrieben?* oder `/summary`.",
    "NOCO Render": "**NOCO Render** = Pixel-Bilder im Chat. 3600 Motive, einfache Woerter — Exclusive zum Generieren.",
    "Anime": "**Anime** = japanische Animation. Render: *Pagode*, *Drache*, *Koi*.",
    "Pokemon": "**Pokemon** = fiktive Monster-Welt. Render: *Hamster*, *Blitz*.",
    "DSGVO": "**DSGVO** = EU-Datenschutz. NOCO AI speichert lokal.",
    "TypeScript": "**TypeScript** = typisiertes JavaScript fuer groessere Projekte.",
    "Deepfake": "**Deepfake** = KI-Fake-Videos. Kritisch pruefen — nicht NOCO Render.",
    "Triathlon": "**Triathlon** = Schwimmen, Rad, Lauf. Render: *Schwimmen*, *Medaille*.",
    "Rust": "**Rust** = sichere System-Programmiersprache. Frag: *TypeScript*, *Python*.",
    "SQL": "**SQL** = Datenbank-Abfragesprache. Tabellen & SELECT.",
    "Kubernetes": "**Kubernetes** = Container-Orchestrierung in der Cloud.",
    "CRISPR": "**CRISPR** = Gen-Editing-Werkzeug — Ethik wichtig.",
    "PHP": "**PHP** = Web-Skriptsprache. WordPress & viele Shops.",
    "Figma": "**Figma** = UI/UX-Design-Tool im Browser.",
    "NASA": "**NASA** = US-Raumfahrt. Frag: *Artemis*, *ISS*, *Mars*.",
    "Vue": "**Vue.js** = Frontend-Framework. Frag: *JavaScript*, *Vite*.",
    "AWS": "**AWS** = Amazon Cloud. Frag: *Docker*, *Kubernetes*.",
    "SEO": "**SEO** = Suchmaschinenoptimierung fuer Webseiten.",
    "Schach": "**Schach** = strategisches Brettspiel. Render: *Schachkoenig*.",
    "Wikinger": "**Wikinger** = skandinavische Seefahrer. Render: *Schiff*, *Schwert*.",
    "Formel 1": "**Formel 1** = Motorsport-Spitze. Render: *Auto*, *Rennwagen*.",
    "Giraffe": "**Giraffe** = hoechstes Landtier. NOCO Render: *Mach ein Bild von Giraffe*.",
    "Zebra": "**Zebra** = gestreiftes Afrika-Tier. Render-Motiv *zebra*.",
    "Dinosaurier": "**Dinosaurier** = Urzeit-Reptil. Render: *T-Rex* oder *Dinosaurier*.",
    "Python": "**Python** = Programmiersprache — einfach & maechtig.",
    "Mathematik": "**Mathematik** = Zahlen, Formen, Logik — Basis vieler Wissenschaften.",
    "NOCO Lens Detect": "**NOCO Lens Detect** = KI-Bild pruefen. + Button — erkennt eigene NOCO Pixel.",
    "NOCO Rush": "**NOCO Rush** = Priority-Antwort-Engine. ~90 ms mit Exclusive/Flux.",
    "NOCO Lens": "**NOCO Lens** = klickbare blaue Begriffe — Exclusive only.",
    "KI": "Kurz fuer **Kuenstliche Intelligenz** — Maschinen die lernen und Probleme loesen. NOCO AI ist regelbasiert, kein echtes LLM.",
    "Internet": "Weltweites Netzwerk aus Computern. Webseiten per Browser. NOCO AI braucht es nur zum ersten Laden.",
    "DNA": "**DNA** = Erbsubstanz in Zellen. Speichert genetische Bauanleitung fuer Lebewesen.",
    "CO2": "**CO2** (Kohlendioxid) = Treibhausgas. Verbrennung von Fossilbrennstoffen erhoeht den Anteil in der Atmosphaere.",
    "NOCO Sheen": "**NOCO Sheen** = Blur-Reveal-Animation bei NOCO Render — Bild wird scharf.",
    "NOCO Sparks": "**NOCO Sparks** = Schnellfragen nach Kategorie in der Sidebar und im Hub.",
    "NOCO Access": "**NOCO Access** = Plan-Leiste: Free/Exclusive, Modell, Kontingent.",
    "Blockchain": "**Blockchain** = verteiltes Register — Bitcoin & Krypto bauen darauf.",
    "ChatGPT": "**ChatGPT** = bekanntes Cloud-KI-Chatprodukt. NOCO AI ist offline & regelbasiert.",
    "Physik": "**Physik** = Naturwissenschaft von Materie, Energie, Kraeften und Raumzeit.",
    "Genetik": "**Genetik** = Wissenschaft von Vererbung, DNA und Genen.",
    "Vulkan": "**Vulkan** = Berg, der Magma, Asche und Gase ausstoesst.",
    "Quantenphysik": "**Quantenphysik** = Physik sehr kleiner Teilchen — Welle & Teilchen zugleich.",
    "Banane": "**Banane** = gelbe Tropenfrucht. NOCO Render: *Mach ein Bild von Banane*.",
    "Apfel": "**Apfel** = rundes Obst. NOCO Render erkennt *apfel* und *apple*.",
    "Wolkenkratzer": "**Wolkenkratzer** = sehr hohes Stadtgebaeude. Render: *Wolkenkratzer* oder *Skyscraper*.",
    "Pferd": "**Pferd** = Reittier & Nutztier. Render-Motiv mit eigenem Pferde-Silhouette-Muster.",
    "Hund": "**Hund** = Haustier & Begleiter. Eines der beliebtesten NOCO-Render-Motive.",
    "Katze": "**Katze** = beliebtes Haustier. *Mach ein Bild von Katze* im Chat.",
    "Ente": "**Ente** = Wasservogel. NOCO Render: *Mach ein Bild von Ente*.",
    "Schaf": "**Schaf** = Wolle & Herde. Einfaches Render-Motiv *schaf* / *sheep*.",
    "Fussball": "**Fussball** = Teamsport mit Ball. NOCO Render: *Mach ein Bild von Fussball*.",
    "Einhorn": "**Einhorn** = Fantasy-Pferd mit Horn. Render: *Mach ein Bild von Einhorn*.",
    "JavaScript": "**JavaScript** = Web-Programmiersprache. NOCO AI selbst nutzt JS.",
    "Cybersecurity": "**Cybersecurity** = Schutz vor Hacking, Phishing & Malware.",
    "Drohne": "**Drohne** = ferngesteuertes Fluggeraet. Render-Motiv *drohne*.",
    "Windrad": "**Windrad** = erzeugt Strom aus Wind. Render: *Windpark* / *Windrad*."
  };

  var TERM_KEYS = Object.keys(TERM_INFO).sort(function (a, b) { return b.length - a.length; });

  function normalize(text) {
    return String(text).toLowerCase()
      .replace(/[ä]/g, "ae").replace(/[ö]/g, "oe").replace(/[ü]/g, "ue").replace(/[ß]/g, "ss")
      .trim();
  }

  var GENERAL_TOPIC_SYNONYMS = {
    "handy": "smartphone",
    "mobiltelefon": "smartphone",
    "handyvertrag": "vertrag kuendigen",
    "strom": "strom sparen",
    "gas": "vertrag kuendigen",
    "krank": "krankmeldung",
    "krankschreibung": "krankmeldung",
    "au": "krankmeldung",
    "urlaub": "urlaubsanspruch",
    "rente": "rentenversicherung",
    "alg": "arbeitslosengeld",
    "alg1": "arbeitslosengeld",
    "alg2": "buergergeld",
    "amazon": "online shopping",
    "shoppen": "online shopping",
    "einkaufen online": "online shopping",
    "reklamation": "gewaehrleistung",
    "garantie": "gewaehrleistung",
    "konto": "girokonto",
    "bank": "girokonto",
    "sparen": "sparkonto",
    "steuer": "steuererklaerung",
    "elster": "steuererklaerung",
    "baby": "stillen",
    "schwanger": "schwangerschaft",
    "sonne": "sonnenbrand",
    "hitze": "sonnenbrand",
    "zeck": "zeckenbiss",
    "verbraucher": "verbraucherzentrale",
    "miete senken": "mietminderung",
    "gehaltswunsch": "gehaltserhoehung",
    "paypal": "paypal klarna",
    "klarna": "paypal klarna",
    "wifi": "mesh wlan",
    "wlan": "mesh wlan",
    "router": "mesh wlan",
    "glasfaser": "glasfaser dsl",
    "dsl": "glasfaser dsl",
    "internet": "glasfaser dsl",
    "sim": "esim prepaid",
    "prepaid": "esim prepaid",
    "roaming": "esim prepaid",
    "2fa": "zwei faktor",
    "mfa": "zwei faktor",
    "bitwarden": "passwort manager",
    "dropbox": "cloud speicher",
    "drive": "cloud speicher",
    "icloud": "cloud speicher",
    "flohmarkt": "second hand",
    "kleinanzeigen": "second hand",
    "vinted": "second hand",
    "etf": "depot etf",
    "broker": "depot etf",
    "budget": "haushaltsbudget",
    "notfall": "notgroschen",
    "einsam": "einsamkeit",
    "phishing": "phishing email",
    "spam": "phishing email",
    "pflanze": "zimmerpflanzen",
    "pflanzen": "zimmerpflanzen",
    "hund": "hund erziehung",
    "welpenerziehung": "hund erziehung",
    "frisur": "friseur",
    "haare": "friseur",
    "pc": "pc langsam",
    "laptop": "pc langsam",
    "computer": "pc langsam",
    "ruecken": "rueckenschmerz",
    "rücken": "rueckenschmerz",
    "nacken": "rueckenschmerz",
    "muskelkater": "muskelkater dehnen",
    "schnarchen": "schnarchen schlafapnoe",
    "apnoe": "schnarchen schlafapnoe",
    "abnehmen": "abnehmen gesund",
    "uebergewicht": "abnehmen gesund",
    "laktose": "laktoseintoleranz",
    "nussallergie": "nussallergie",
    "bienenstich": "insektenstich",
    "wespe": "insektenstich",
    "sonnencreme": "sonnencreme hautpflege",
    "pickel": "akne",
    "stroke": "schlaganfall",
    "herz": "herzinfarkt",
    "zahnspange": "zahnspange",
    "knirschen": "bruxismus",
    "augentropfen": "trockene augen",
    "wasser": "trinkwasser",
    "kaffee": "kaffee koffein",
    "koffein": "kaffee koffein",
    "alkohol": "alkohol gesundheit",
    "rauchen": "rauchen aufhoeren",
    "zigarette": "rauchen aufhoeren",
    "einschlafen": "einschlafen schlafstoerung",
    "insomnie": "einschlafen schlafstoerung",
    "escooter": "e-scooter",
    "roller": "e-scooter",
    "helm": "fahrradhelm",
    "fahrrad": "fahrradhelm",
    "schwimmen": "schwimmen lernen",
    "zahnseide": "zahnseide mundhygiene",
    "ergonomie": "ergonomie arbeitsplatz",
    "laerm": "laerm wohnung",
    "lärm": "laerm wohnung",
    "tierarzt": "tierarzt impfung",
    "gassi": "hundekot",
    "wg": "wg suche",
    "wohngemeinschaft": "wg suche",
    "besichtigung": "wohnungsbesichtigung",
    "ausbildung": "ausbildungsplatz",
    "azubi": "ausbildungsplatz",
    "lehrstelle": "ausbildungsplatz",
    "betriebsrat": "betriebsrat",
    "nc": "numerus clausus",
    "semesterferien": "semesterferien",
    "gehoerschutz": "gehoerschutz",
    "bildschirmzeit": "bildschirmzeit kinder",
    "mediation": "mediation schlichtung",
    "heizen": "heizen sparen",
    "fuehrerschein": "fahrschule",
    "führerschein": "fahrschule",
    "theoriepruefung": "fahrschule",
    "occasion": "gebrauchtwagen",
    "tüv": "tuev",
    "hu": "tuev",
    "hauptuntersuchung": "tuev",
    "ölwechsel": "auto wartung",
    "oelwechsel": "auto wartung",
    "unfall": "autounfall",
    "verkehrsunfall": "autounfall",
    "autoversicherung": "kfz versicherung",
    "vollkasko": "kfz versicherung",
    "sprit": "tanken sparen",
    "benzin": "tanken sparen",
    "diesel": "tanken sparen",
    "miles": "carsharing",
    "sharenow": "carsharing",
    "blablacar": "mitfahrgelegenheit",
    "mitfahren": "mitfahrgelegenheit",
    "jet lag": "jetlag",
    "zeitverschiebung": "jetlag",
    "packen": "packliste",
    "fluggastrechte": "flugverspaetung",
    "annullierung": "flugverspaetung",
    "auslandskranken": "reiseversicherung",
    "reisepass verloren": "notfall ausland",
    "botschaft": "notfall ausland",
    "zebrastreifen": "fussgaenger",
    "pedelec": "ebike",
    "e-bike": "ebike",
    "elektrofahrrad": "ebike",
    "fahrradklau": "fahrrad diebstahl",
    "grillparty": "grillen balkon",
    "grillen": "grillen balkon",
    "laerm": "laermbelaestigung",
    "lärm": "laermbelaestigung",
    "musik zu laut": "laermbelaestigung",
    "eigenbedarf": "eigenbedarf",
    "mietnomade": "mietnomade",
    "mieter zahlt nicht": "mietnomade",
    "unkraut": "rasen pflege",
    "rasen": "rasen pflege",
    "hochbeet": "tomaten anbau",
    "motorrad": "motorrad fuehrerschein",
    "babysitting": "babysitter",
    "retoure": "ware retournieren",
    "widerruf paket": "ware retournieren",
    "gehackt": "passwort gehackt",
    "hack": "passwort gehackt",
    "hundesteuer": "hund anmelden",
    "katze": "katze haltung",
    "kaninchen": "kaninchen",
    "meerschweinchen": "kaninchen"
  };

  function applyTopicSynonyms(text) {
    var t = normalize(String(text || "").trim());
    var keys = Object.keys(GENERAL_TOPIC_SYNONYMS);
    var i, k, parts;
    if (!t) return "";
    if (GENERAL_TOPIC_SYNONYMS[t]) return GENERAL_TOPIC_SYNONYMS[t];
    parts = t.split(/\s+/);
    for (i = 0; i < parts.length; i++) {
      if (GENERAL_TOPIC_SYNONYMS[parts[i]]) return GENERAL_TOPIC_SYNONYMS[parts[i]];
    }
    for (i = 0; i < keys.length; i++) {
      k = keys[i];
      if (k.indexOf(" ") === -1 && t.indexOf(k) !== -1) return GENERAL_TOPIC_SYNONYMS[k];
    }
    return t;
  }

  function normalizeGeneralQuestion(text) {
    var t = fixCommonTypos(String(text || "").trim());
    t = t.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, " ");
    t = t.replace(/\s+/g, " ");
    t = t.replace(/\b(aehm|aeh|ahem|naja|halt|eben|und zwar|folgendes|naemlich|nämlich|sozusagen|quasi|irgendwie|eigentlich mal|mal eben)\b/gi, " ");
    t = t.replace(/^(erklär mal|erklaer mal|guck mal|schau mal|sag mal)\s+/gi, "");
    t = t.replace(/^[,.:;\-–—]+\s*/g, "");
    t = t.replace(/\?{2,}/g, "?");
    t = t.replace(/\b(\w+)(?:\s+\1\b)+/gi, "$1");
    t = t.replace(/\s+(mal|schnell|bitte|eben|doch|oder)\s*$/gi, "");
    t = t.replace(/\s+/g, " ").trim();
    return t;
  }

  function stripQuestionNoise(text) {
    return normalize(text)
      .replace(/^(ey |yo |hm |na |lol |okay |ok |also |bitte |mal |kurz |einfach |schnell |nur |eben )+/g, "")
      .replace(/^(hey |hallo |hi |moin |servus |guten tag |guten morgen |guten abend )+/g, "")
      .replace(/^(kannst du mir |kannst du |kann ich |koenntest du |wuerdest du |magst du |sag mir |sag mal |erzaehl mir |erklaer mir |erklaere mir |ich wollte fragen |ich frag mich |ich will wissen |ich moechte wissen |ich wuerde gern wissen |ich wuerde gerne wissen )+/g, "")
      .replace(/^(was ist|was sind|was war|was waren|was bedeutet|was macht|was weiss|was weiß|wie funktioniert|wie geht|wie ist|erklare|erklaere|erklaer|beschreibe|definiere|tell me about|what is|what are|how does)\s+/g, "")
      .replace(/^(kannste mir |kannste |hast du ahnung von |hast du ahnung |ich wollt wissen |ich wollte wissen |waere cool wenn du |wäre cool wenn du |und zwar |folgendes |naemlich |nämlich )+/g, "")
      .replace(/^(kannst du mir erklaeren|kannst du erklaeren|ich moechte wissen|ich will wissen|sag mir was|nochmal|kurz gesagt|eigentlich)\s+/g, "")
      .replace(/^(ich checks nicht|ich check nicht|ich versteh nicht|ich verstehe nicht|keine ahnung|hab keine ahnung|weiss nicht|weiß nicht)\s+/g, "")
      .replace(/^(gibt es|gibts|brauch|brauche|haette gern|haette gerne|interessiert mich|thema)\s+/g, "")
      .replace(/^(hab ne frage|hab ne frage zu|habe ne frage|ne frage zu|frage zu|frage:)\s+/g, "")
      .replace(/^(ich brauch hilfe bei|ich brauche hilfe bei|brauche hilfe bei|ich brauch tipps fuer|ich brauche tipps fuer)\s+/g, "")
      .replace(/^(was mach ich|was mache ich|was tun|was muss ich tun) (bei|wenn|nach|beim|im|in der|in dem)\s+/g, "")
      .replace(/^(darf man|darf ich|ist das erlaubt|ist es erlaubt|was kostet|wie viel kostet|wie lange dauert)\s+/g, "")
      .replace(/\s+(bitte|danke|oder so|eigentlich|genau|nochmal)\s*$/g, "")
      .replace(/\?+$/, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function levenshtein(a, b) {
    var i, j, m = a.length, n = b.length, row, prev, cur;
    if (!m) return n;
    if (!n) return 0;
    row = [];
    for (j = 0; j <= n; j++) row[j] = j;
    for (i = 1; i <= m; i++) {
      prev = row[0];
      row[0] = i;
      for (j = 1; j <= n; j++) {
        cur = row[j];
        row[j] = Math.min(
          row[j] + 1,
          row[j - 1] + 1,
          prev + (a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1)
        );
        prev = cur;
      }
    }
    return row[n];
  }

  function fuzzyWordScore(a, b) {
    if (!a || !b) return 0;
    if (a === b) return 1;
    if (a.length >= 3 && b.length >= 3) {
      if (a.indexOf(b) === 0 || b.indexOf(a) === 0) return 0.88;
      if (a.indexOf(b) !== -1 || b.indexOf(a) !== -1) return 0.72;
    }
    var dist = levenshtein(a, b);
    var lim = a.length <= 4 ? 1 : (a.length <= 6 ? 2 : 3);
    if (dist <= lim) return 0.65 - dist * 0.12;
    return 0;
  }

  function fixCommonTypos(text) {
    var t = String(text);
    var fixes = [
      [/inteligenz|intellegenz|intiligenz/gi, "intelligenz"],
      [/kuenstliche|kunstliche|künstliche/gi, "kuenstliche"],
      [/programierung|programmierung/gi, "programmierung"],
      [/internet/gi, "internet"],
      [/intenet|interent|intenret/gi, "internet"],
      [/geschichte/gi, "geschichte"],
      [/geschihte|geschcihte/gi, "geschichte"],
      [/demokratie/gi, "demokratie"],
      [/demokraty|demokartie/gi, "demokratie"],
      [/blockchain|block chain/gi, "blockchain"],
      [/klimawandel/gi, "klimawandel"],
      [/klimawnadel|klimawandell/gi, "klimawandel"],
      [/generier/gi, "generier"],
      [/generiere|generiern/gi, "generieren"],
      [/zusammenfasung|zusammenfassung/gi, "zusammenfassung"],
      [/exclusive|exklusiv/gi, "exclusive"],
      [/noco ai|nocoai/gi, "noco ai"],
      [/chatgpt|chat gpt/gi, "chatgpt"],
      [/physik/gi, "physik"],
      [/physis|physiik/gi, "physik"],
      [/genetik/gi, "genetik"],
      [/genetikk|genetig/gi, "genetik"],
      [/erklaer/gi, "erklaer"],
      [/erklär/gi, "erklaer"],
      [/fussbal|fusball/gi, "fussball"],
      [/cybersecurity|cyber security/gi, "cybersecurity"],
      [/phising|phisihng/gi, "phishing"],
      [/javascript|java script/gi, "javascript"],
      [/maschinelles lernen|machinelearning/gi, "maschinelles lernen"],
      [/einhorn|unicorn/gi, "einhorn"],
      [/bundesland|bundesländer/gi, "bundeslaender"],
      [/wanderung|wandern/gi, "wandern"],
      [/solarenergie|solar energie/gi, "solarenergie"],
      [/windenergie|wind energie/gi, "windkraft"],
      [/socialmedia|social media/gi, "social media"],
      [/smartphone|smart phone/gi, "smartphone"],
      [/dinosaur|dinosauer/gi, "dinosaurier"],
      [/hubschrauber|helikopter/gi, "hubschrauber"],
      [/koala|koalla/gi, "koala"],
      [/wikinger|viking/gi, "wikinger"],
      [/schach|chess/gi, "schach"],
      [/olympia|olympics/gi, "olympische spiele"],
      [/esport|e-sport/gi, "esports"],
      [/kpop|k-pop/gi, "k-pop"],
      [/formel ?1|f1/gi, "formel 1"],
      [/handball/gi, "handball"],
      [/wikinger/gi, "wikinger"],
      [/venedig/gi, "venedig paris"],
      [/paris/gi, "paris london"],
      [/tsunami/gi, "tsunami hurrikan"],
      [/grafikkarte/gi, "gpu grafikkarte"],
      [/prozessor/gi, "cpu prozessor"],
      [/qr.?code/gi, "qr code"],
      [/bundestag/gi, "bundestag politik"],
      [/ritter/gi, "ritter mittelalter"],
      [/mozart/gi, "mozart klassische musik"],
      [/beethoven/gi, "beethoven klassik"],
      [/imkerei/gi, "imkerei honig biene"],
      [/aquarium/gi, "aquarium terrarium"],
      [/jahreszeit/gi, "jahreszeiten"],
      [/frühling|fruehling/gi, "fruehling jahreszeiten"],
      [/sternbild/gi, "sternbilder orion"],
      [/mondphase/gi, "mondphasen vollmond"],
      [/erste hilfe/gi, "erste hilfe notfall"],
      [/notruf/gi, "notruf 112"],
      [/anime|animé/gi, "anime manga"],
      [/pokemon|pokémon/gi, "pokemon pikachu"],
      [/pikachu/gi, "pokemon pikachu"],
      [/dsgvo|gdpr/gi, "dsgvo gdpr"],
      [/prokrastin/gi, "prokrastination"],
      [/abitur/gi, "abitur"],
      [/vegan/gi, "veganismus"],
      [/wasserstoff|h2/gi, "wasserstoff"],
      [/exoplanet/gi, "exoplanet aliens"],
      [/smart.?home/gi, "smart home iot"],
      [/machu.?picchu/gi, "machu picchu"],
      [/typescript|type script/gi, "typescript"],
      [/arduino/gi, "arduino"],
      [/deepfake|deep fake/gi, "deepfake"],
      [/kernfusion|kern fusion/gi, "kernfusion"],
      [/triathlon/gi, "triathlon"],
      [/homeoffice|home office/gi, "homeoffice"],
      [/van.?life/gi, "van life"],
      [/stoizismus|stoiker/gi, "stoizismus"],
      [/bauhaus/gi, "bauhaus"],
      [/graffiti|street art/gi, "street art graffiti"],
      [/faktencheck|fakten check/gi, "faktencheck"],
      [/enkeltrick|enkel trick/gi, "enkeltrick"],
      [/cybermobbing|cyber mobbing/gi, "cybermobbing"],
      [/mikroplastik|mikro plastik/gi, "mikroplastik"],
      [/prompt engineering|prompting/gi, "prompt engineering"],
      [/rust lang|rust program/gi, "rust"],
      [/my\s?sql|postgres|postgresql/gi, "sql datenbank"],
      [/mongo\s?db|no\s?sql/gi, "mongodb nosql"],
      [/rest\s?api|web\s?api/gi, "rest api"],
      [/golang|go lang/gi, "golang go"],
      [/k8s|kube/gi, "kubernetes"],
      [/hydropon/gi, "hydroponik"],
      [/permakultur|perma culture/gi, "permakultur"],
      [/korallen.?bleiche|bleaching/gi, "korallenbleiche"],
      [/antarktis|antarktika/gi, "antarktis"],
      [/skandinav|hygge/gi, "skandinavien"],
      [/suedamerika|südamerika/gi, "suedamerika"],
      [/mauerfall|wiedervereinigung/gi, "mauerfall wiedervereinigung"],
      [/kalter krieg|cold war/gi, "kalter krieg"],
      [/industrialisierung|industrial revolution/gi, "industrialisierung"],
      [/franzoesische revolution|franz revolution/gi, "franzoesische revolution"],
      [/nanotech|nano technologie/gi, "nanotechnologie"],
      [/bionik|biomimikry/gi, "bionik"],
      [/graphen|graphene/gi, "graphen"],
      [/autismus|asperger|neurodivers/gi, "autismus spektrum"],
      [/depression|depressiv/gi, "depression"],
      [/angststoerung|panikattacke|phobie/gi, "angststoerung"],
      [/e-?waste|elektroschrott/gi, "elektroschrott"],
      [/crispr|gen editing/gi, "crispr"],
      [/wordpress|laravel/gi, "php"], [/c\+\+|cplusplus/gi, "c++"],
      [/c#|csharp|\.net/gi, "c# dotnet"], [/scrum|kanban/gi, "agile scrum"],
      [/figma|canva/gi, "figma design"], [/tiktok|reels|youtube shorts/gi, "tiktok"],
      [/whatsapp|telegram/gi, "whatsapp messenger"], [/discord/gi, "discord"],
      [/influencer|youtuber|creator/gi, "influencer creator"],
      [/e-?book|kindle|hörbuch|hoerbuch/gi, "ebook hoerbuch"],
      [/gutenberg|druckerpresse/gi, "buchdruck gutenberg"],
      [/byzanz|byzantin/gi, "byzantinisches reich"],
      [/ottoman|osmanisch/gi, "osmanisches reich"],
      [/dynastie|seidenstrasse/gi, "china geschichte"],
      [/vereinigte staaten|amerika geschichte/gi, "usa geschichte"],
      [/canada|toronto/gi, "kanada"], [/mexico|azteken|maya/gi, "mexiko"],
      [/artemis|mondmission/gi, "artemis"], [/lithium|ionen.?akku/gi, "lithium akku"],
      [/geotherm|erdwaerme/gi, "geothermie"], [/biogas|biomasse/gi, "biogas"],
      [/carbon capture|ccs/gi, "carbon capture"], [/aufforstung|reforestation/gi, "aufforstung"],
      [/feinstaub|pm2\.?5|smog/gi, "luftqualitaet feinstaub"],
      [/bienensterben|insektensterben/gi, "bienensterben"],
      [/regul[aä]re ausdr[uü]cke|regex/gi, "regex"],
      [/roblox.*lua|lua script/gi, "lua"],
      [/gezeiten|tidal|wellenenergie/gi, "gezeitenenergie"],
      [/elektrolyse|grüner wasserstoff/gi, "elektrolyse"],
      [/vue\.?js|vuejs/gi, "vue"], [/angular/gi, "angular framework"],
      [/flutter|dart lang/gi, "flutter"], [/tailwind/gi, "tailwind css"],
      [/graphql|graph ql/gi, "graphql"], [/oauth|jwt/gi, "oauth jwt"],
      [/amazon web services|\baws\b/gi, "aws cloud"], [/azure/gi, "azure cloud"],
      [/terraform|\biac\b/gi, "terraform"], [/ci\/?cd|github actions|jenkins/gi, "ci cd"],
      [/serverless|lambda function/gi, "serverless"], [/microservices|micro services/gi, "microservices"],
      [/saas|software as a service/gi, "saas"], [/websocket|web socket/gi, "websocket"],
      [/\bvite\b/gi, "vite"], [/\bnpm\b|yarn|pnpm/gi, "npm"],
      [/\bseo\b|suchmaschinen/gi, "seo"], [/wordpress|\bcms\b/gi, "wordpress cms"],
      [/copywriting|werbetext/gi, "copywriting"], [/diabetes|blutzucker/gi, "diabetes"],
      [/heuschnupfen|pollenallergie/gi, "allergie"], [/zoeliakie|celiac|gluten/gi, "gluten"],
      [/physiotherapie|ergotherapie/gi, "physiotherapie"], [/long covid|post covid/gi, "long covid"],
      [/elternzeit|mutterschutz|elterngeld/gi, "elternzeit"], [/kita|kindergarten|hort/gi, "kita"],
      [/bundesrat/gi, "bundesrat"], [/verfassungsgericht|bverfg/gi, "bundesverfassungsgericht"],
      [/demografie|bevoelkerungs/gi, "demografie"],       [/integration|einwanderung|zuwanderung/gi, "migration integration"],
      [/linux|ubuntu|debian/gi, "linux ubuntu"],
      [/\bwindows\b|win11|win 11/gi, "windows 11"],
      [/mac\s?os|macos|apple mac/gi, "macos"],
      [/react\s?native/gi, "react native"],
      [/svelte\s?kit|\bsvelte\b/gi, "svelte"],
      [/spring\s?boot|\bspring\b/gi, "spring boot"],
      [/\blaravel\b/gi, "laravel php"],
      [/\bdeno\b|\bbun\b runtime/gi, "deno bun"],
      [/bluetooth|nfc|nahfeld/gi, "bluetooth nfc"],
      [/\b5g\b|\b6g\b|lte/gi, "5g mobilfunk"],
      [/starlink|satelliten.?internet/gi, "starlink"],
      [/\brag\b|retrieval augmented/gi, "rag ki"],
      [/halluzin|hallucinat/gi, "halluzination ki"],
      [/prompt injection|jailbreak/gi, "prompt injection"],
      [/zero trust/gi, "zero trust security"],
      [/relativitaet|relativität|e=mc/gi, "relativitaetstheorie"],
      [/immunsystem|abwehrkräfte/gi, "immunsystem"],
      [/antibiotika.?resist|mrsa/gi, "antibiotikaresistenz"],
      [/organspende|spenderausweis/gi, "organspende"],
      [/pflegeberuf|krankenpflege|altenpflege/gi, "pflegeberuf"],
      [/mindestlohn/gi, "mindestlohn"],
      [/gewerkschaft|tarifvertrag|streik/gi, "gewerkschaft"],
      [/inflation|teuerung|geldentwertung/gi, "inflation"],
      [/leitzins|\bezb\b|zentralbank/gi, "leitzins ezb"],
      [/aktien|börse|boerse|etf|fonds/gi, "aktien etf"],
      [/bafoeg|bafög|studienfinanz/gi, "bafoeg"],
      [/duales studium|dual studieren/gi, "duales studium"],
      [/montessori|waldorf/gi, "montessori waldorf"],
      [/barrierefreiheit|accessibility|wcag/gi, "barrierefreiheit"],
      [/\bblender\b|3d modell/gi, "blender 3d"],
      [/fotografie|foto grundlagen/gi, "fotografie"],
      [/video(schnitt|bearbeit)|premiere|davinci/gi, "videobearbeitung"],
      [/netflix|spotify|disney\+|streaming/gi, "streaming"],
      [/\bmeme?s?\b|internetkultur/gi, "meme internet"],
      [/satire|karikatur/gi, "satire"],
      [/pressefreiheit|journalismus/gi, "journalismus"],
      [/whistleblower|hinweisgeber/gi, "whistleblower"],
      [/erdbeben|seismolog/gi, "erdbeben"],
      [/tornado|wirbelsturm/gi, "tornado"],
      [/artensterben|biodiversität|biodiversitaet/gi, "artensterben"],
      [/ozonloch|ozonschicht/gi, "ozonloch"],
      [/atomkraft|kernkraft|\bakw\b/gi, "atomkraft"],
      [/schengen/gi, "schengen"],
      [/\buno\b|vereinte nationen/gi, "uno"],
      [/\bwho\b|weltgesundheit/gi, "who"],
      [/paralympics|para sport/gi, "paralympics"],
      [/speedrun|speedrunning/gi, "speedrunning"],
      [/next\.?js|nextjs/gi, "next.js"], [/nuxt\.?js|\bnuxt\b/gi, "nuxt"],
      [/\bprisma\b/gi, "prisma orm"], [/supabase/gi, "supabase"],
      [/firebase|firestore/gi, "firebase"], [/\bredis\b/gi, "redis cache"],
      [/\bkafka\b/gi, "kafka streaming"], [/elasticsearch|elastic search/gi, "elasticsearch"],
      [/ransomware|erpressungstrojaner/gi, "ransomware"],
      [/malware|trojaner|schadsoftware/gi, "malware"],
      [/web\s?3|web3/gi, "web3"], [/\bnft\b/gi, "nft digital"],
      [/metaverse/gi, "metaverse"], [/selbstfahrend|autonomes fahren|autopilot/gi, "autonomes fahren"],
      [/e-?mobilit|elektroauto|ev auto/gi, "e-mobilitaet"],
      [/wärmepumpe|waermepumpe|heat pump/gi, "waermepumpe"],
      [/kreislaufwirtschaft|circular economy/gi, "kreislaufwirtschaft"],
      [/right to repair|reparaturrecht/gi, "right to repair"],
      [/eu ai act|ki verordnung/gi, "eu ai act"],
      [/creative commons|\bcc by\b/gi, "creative commons"],
      [/urheberrecht|copyright/gi, "urheberrecht"],
      [/mrna|biontech impfstoff/gi, "mrna impfstoff"],
      [/epigenetik|epigenetics/gi, "epigenetik"],
      [/stammzell/gi, "stammzellen"],
      [/herdenimmunit|herd immunity/gi, "herdenimmunitaet"],
      [/telemedizin|videosprechstunde/gi, "telemedizin"],
      [/\badhs\b|ads aufmerksam/gi, "adhs"],
      [/migräne|migrane|migraine/gi, "migräne"],
      [/vitamin d|vitamind/gi, "vitamin d"],
      [/pomodoro|tomaten.?uhr/gi, "pomodoro"],
      [/mindmap|mind map|gedankenlandkarte/gi, "mindmap"],
      [/cornell notiz|cornell methode/gi, "cornell notizen"],
      [/peer review|wissenschaftliche methode/gi, "wissenschaftliche methode"],
      [/kritisches denken|critical thinking/gi, "kritisches denken"],
      [/verhandlung|negotiation/gi, "verhandlung"],
      [/lichtverschmutzung|light pollution/gi, "lichtverschmutzung"],
      [/imkerei|bienen haltung/gi, "imkerei"],
      [/urban gardening|stadtgarten|balkon garten/gi, "urban gardening"],
      [/copilot|github copilot/gi, "github copilot"],
      [/midjourney|dall-?e|stable diffusion/gi, "midjourney ki bild"],
      [/alexa|siri|sprachassistent/gi, "alexa sprachassistent"],
      [/drohnen.?regel|dronen fliegen/gi, "drohnen regeln"],
      [/cookie banner|cookie einwilligung/gi, "cookie banner"],
      [/fair trade|fairtrade/gi, "fair trade"],
      [/hyperloop/gi, "hyperloop"],
      [/journaling|tagebuch schreiben/gi, "journaling"],
      [/öffentliche rede|rhetorik|praesentation tipps/gi, "oeffentliche rede"],
      [/\bopenai\b|open ai/gi, "openai"],
      [/anthropic|claude\s?ai|\bclaude\b/gi, "anthropic claude"],
      [/google gemini|\bgemini\b ki|\bbard\b/gi, "google gemini"],
      [/meta llama|llama\s?3|\bllama\b modell/gi, "meta llama"],
      [/mistral ai|mixtral/gi, "mistral ai"],
      [/stable diffusion|sd\s?xl|automatic1111/gi, "stable diffusion"],
      [/embedding|vektor\s?embedding/gi, "embedding vektor"],
      [/vektordatenbank|vector database|pinecone|weaviate|chroma/gi, "vektordatenbank"],
      [/fine[- ]?tuning|lora training/gi, "fine tuning llm"],
      [/kontextfenster|context window|token limit/gi, "context window tokens"],
      [/halbleiter|semiconductor|silizium chip/gi, "halbleiter chip"],
      [/chip.?krise|chip shortage|halbleiter engpass/gi, "chip krise"],
      [/buddhismus|buddha lehre/gi, "buddhismus"],
      [/hinduismus|hindu religion/gi, "hinduismus"],
      [/islam grundlagen|fuenf saeulen islam/gi, "islam grundlagen"],
      [/christentum grundlagen|christliche religion/gi, "christentum grundlagen"],
      [/judentum grundlagen|juedische religion/gi, "judentum grundlagen"],
      [/tai\s?chi|taiji/gi, "tai chi"],
      [/erasmus\+?|auslandssemester/gi, "erasmus"],
      [/duolingo|sprachen lernen/gi, "duolingo sprachen lernen"],
      [/bürgergeld|buergergeld|hartz\s?4/gi, "buergergeld"],
      [/wohngeld|mietzuschuss/gi, "wohngeld"],
      [/zinseszins|compound interest/gi, "zinseszins"],
      [/\bdefi\b|decentralized finance/gi, "defi"],
      [/shopify|woocommerce|e-?commerce/gi, "shopify e-commerce"],
      [/dropshipping|dropship|print on demand/gi, "dropshipping"],
      [/esg.?invest|nachhaltig investieren/gi, "esg investing"],
      [/digitaler co2|streaming co2|datenverbrauch umwelt/gi, "digitaler co2 fussabdruck"],
      [/passives einkommen|passive income/gi, "passives einkommen"],
      [/altersvorsorge|riester|betriebsrente/gi, "altersvorsorge rente"],
      [/mietpreisbremse|mietendeckel/gi, "mietpreisbremse"],
      [/solid[- ]?state batter|festkoerper akku/gi, "solid state batterie"],
      [/perowskit|perovskite solar/gi, "perowskit solar"],
      [/vertical farming|vertikale landwirtschaft/gi, "vertical farming"],
      [/rewilding|wiederwildung/gi, "rewilding"],
      [/mycelium|pilz myzel/gi, "mycelium material"],
      [/neuromorphic|neuromorphe chips/gi, "neuromorphic computing"],
      [/post[- ]?quantum|quantensichere/gi, "post quantum kryptografie"],
      [/social engineering|sozialtechnik/gi, "social engineering"],
      [/\bosint\b|open source intelligence/gi, "osint"],
      [/zettelkasten|slip box/gi, "zettelkasten"],
      [/\bnotion\b/gi, "notion app"],
      [/\bobsidian\b/gi, "obsidian notes"],
      [/\bgtd\b|getting things done/gi, "gtd"],
      [/eisenhower matrix|eisenhower prinzip/gi, "eisenhower matrix"],
      [/\blatex\b|overleaf/gi, "latex dokument"],
      [/plagiat|plagiarismus/gi, "plagiat"],
      [/localotion|locomoshon|locomotion/gi, "noco motion"],
      [/philosofie|filosofie/gi, "philosophie"],
      [/psycologie|pschologie/gi, "psychologie"],
      [/apa zitier|apa style/gi, "apa zitierstil"],
      [/deutschland.?ticket|d.?ticket/gi, "deutschland ticket"],
      [/trinkgeld|servicegeld/gi, "trinkgeld"],
      [/stromausfall|blackout|kein strom/gi, "stromausfall"],
      [/horoskop|sternzeichen|tierkreis/gi, "horoskop astrologie"],
      [/astrologie/gi, "astrologie horoskop"],
      [/gluecksspiel|glücksspiel|spielsucht/gi, "gluecksspiel"],
      [/lotto|lotterie/gi, "lotto"],
      [/impfpass|impfausweis/gi, "impfpass"],
      [/hausaufgaben|schulaufgaben/gi, "hausaufgaben"],
      [/umzug|umziehen/gi, "umzug"],
      [/scheidung|trennung ehe/gi, "scheidung"],
      [/heirat|hochzeit standesamt/gi, "heirat"],
      [/stalking|cyberstalking/gi, "stalking"],
      [/zeitumstellung|sommerzeit winterzeit/gi, "zeitumstellung"],
      [/steuerklasse|lohnsteuer/gi, "lohnsteuer"],
      [/sehstaerke|sehtest|brille kontaktlinse/gi, "brille sehstaerke"],
      [/tattoo|taetowierung/gi, "tattoo"],
      [/piercing/gi, "piercing"],
      [/mietkaution|kaution miete/gi, "mietkaution"],
      [/nebenkosten|betriebskosten/gi, "nebenkosten"],
      [/schimmel|schimmelpilz/gi, "schimmel wohnung"],
      [/kuendigung arbeit|job kuendigen/gi, "kuendigung arbeit"],
      [/vorstellungsgespraech|vorstellungsgespräch|job interview/gi, "vorstellungsgespraech"],
      [/lebenslauf|curriculum vitae/gi, "lebenslauf"],
      [/gehaltsverhandlung|gehalt verhandeln/gi, "gehaltsverhandlung"],
      [/homoeopathie|homöopathie|globuli/gi, "homoeopathie"],
      [/intervallfasten|16.?8 fasten/gi, "intermittierendes fasten"],
      [/ketogene|keto diaet/gi, "keto"],
      [/sperrmuell|sperrmüll/gi, "sperrmuell"],
      [/geschenkideen|was schenken/gi, "geschenke"],
      [/selbstvertrauen|selbstbewusstsein/gi, "selbstvertrauen"],
      [/perfektionismus/gi, "perfektionismus"],
      [/arbeitszeugnis|zwischenzeugnis/gi, "arbeitszeugnis"],
      [/inkasso|mahnung/gi, "mahnung inkasso"],
      [/pfandflasche|pfand system/gi, "pfand"],
      [/mieterhoehung|miete erhoehen/gi, "mieterhoehung"],
      [/meldebescheinigung|wohnsitz anmeldung/gi, "meldebescheinigung"],
      [/personalausweis|reisepass/gi, "personalausweis reisepass"],
      [/\bschufa\b|bonitaet/gi, "schufa"],
      [/dispokredit|ueberziehungskredit/gi, "dispo"],
      [/ratenkredit|privatkredit/gi, "ratenkredit"],
      [/baufinanzierung|hypothek|immobilienkredit/gi, "baufinanzierung"],
      [/nachsendeauftrag/gi, "nachsendeauftrag"],
      [/pflegegrad|pflegeversicherung/gi, "pflegegrad"],
      [/aufenthaltstitel/gi, "visum aufenthaltstitel"],
      [/fuehrungszeugnis|führungszeugnis/gi, "fuehrungszeugnis"],
      [/buergeramt|einwohnermeldeamt/gi, "buergeramt"],
      [/minijob|geringfuegig|450 euro/gi, "minijob"],
      [/midijob|gleitzone/gi, "midijob"],
      [/werkstudent/gi, "werkstudent"],
      [/winterreifen|m\+s reifen/gi, "winterreifen"],
      [/verkehrsbussgeld|knöllchen/gi, "bussgeld"],
      [/punkte flensburg|fahreignungsregister/gi, "punkte flensburg"],
      [/schulzeugnis|abschlusszeugnis/gi, "schulzeugnis"],
      [/mietschulden|mietrueckstand/gi, "mietschulden"],
      [/kannste|könntest/gi, "kannst du"],
      [/widerrufsrecht|widerruf online/gi, "widerruf"],
      [/gewaehrleistung|reklamation/gi, "gewaehrleistung"],
      [/girokonto|kontowechsel/gi, "girokonto"],
      [/tagesgeld|festgeld/gi, "sparkonto"],
      [/krankmeldung|krankschreibung|arbeitsunfaehigkeit/gi, "krankmeldung"],
      [/kindergeld|familienkasse/gi, "kindergeld"],
      [/zeckenbiss|borreliose/gi, "zeckenbiss"],
      [/steuererklaerung|steuererklärung/gi, "steuererklaerung"],
      [/mietminderung/gi, "mietminderung"],
      [/verbraucherzentrale/gi, "verbraucherzentrale"],
      [/elterngeld plus|basiselterngeld/gi, "elterngeld"],
      [/arbeitslosengeld|\balg1\b/gi, "arbeitslosengeld"],
      [/gehaltserhoehung|lohnerhoehung/gi, "gehaltserhoehung"],
      [/passwort.?manager|bitwarden|1password/gi, "passwort manager"],
      [/\b2fa\b|zwei faktor|mfa/gi, "zwei faktor"],
      [/google drive|dropbox|icloud/gi, "cloud speicher"],
      [/\besim\b|prepaid|roaming/gi, "esim"],
      [/glasfaser|\bdsl\b/gi, "glasfaser dsl"],
      [/mesh.?wlan|wifi verstaerker/gi, "mesh wlan"],
      [/pc langsam|laptop langsam/gi, "pc langsam"],
      [/notgroschen|finanzielle reserve/gi, "notgroschen"],
      [/haushaltsbudget|geldplan/gi, "haushaltsbudget"],
      [/etf depot|broker/gi, "depot etf"],
      [/pruefungsangst|prüfungsangst/gi, "pruefungsangst"],
      [/einsamkeit|soziale isolation/gi, "einsamkeit"],
      [/soziale angst|sozialphobie/gi, "soziale angst"],
      [/hundeerziehung|welpenerziehung/gi, "hund erziehung"],
      [/zimmerpflanzen|pflanzen pflege/gi, "zimmerpflanzen"],
      [/kleinanzeigen|vinted|flohmarkt/gi, "second hand"],
      [/eli5|fuer anfaenger|für anfänger/gi, "was ist"],
      [/rueckenschmerz|rückenschmerz|nackenschmerz/gi, "rueckenschmerz"],
      [/schlafapnoe|schlafapnöe/gi, "schnarchen"],
      [/laktoseintoleranz/gi, "laktose"],
      [/bienenstich|wespenstich/gi, "insektenstich"],
      [/schlaganfall|stroke/gi, "schlaganfall"],
      [/herzinfarkt/gi, "herzinfarkt"],
      [/zaeheneknirschen|bruxismus/gi, "bruxismus"],
      [/rauchstopp|nikotinentzug/gi, "rauchen aufhoeren"],
      [/hab ne frage/gi, "was ist"],
      [/e-scooter|escooter|elektroroller/gi, "e-scooter"],
      [/fahrradhelm/gi, "fahrradhelm"],
      [/numerus clausus/gi, "numerus clausus nc"],
      [/wohngemeinschaft|\bwg\b/gi, "wg suche"],
      [/hundekotbeutel/gi, "hundekot"],
      [/gehoerschutz|gehörschutz/gi, "gehoerschutz"],
      [/bildschirmzeit/gi, "bildschirmzeit"],
      [/heizkosten|heizen sparen/gi, "heizen sparen"],
      [/führerschein|fuehrerscn|fuererschein/gi, "fuehrerschein"],
      [/gebrauchtwagen|gebraucht wagen/gi, "gebrauchtwagen"],
      [/flugverspaetung|flug verspaetung|flug annulliert/gi, "flugverspaetung"],
      [/blablacar|bla bla car/gi, "blablacar"],
      [/kulturschock|kultur schock/gi, "kulturschock"],
      [/jetlag|jet lag/gi, "jetlag"],
      [/tüv|tuv/gi, "tuev"],
      [/kfz versicherung|auto versicherung/gi, "kfz versicherung"],
      [/ebike|e-bike|e bike/gi, "ebike"],
      [/pedelec|pedelec/gi, "pedelec"],
      [/laermbelaestigung|lärm belästigung/gi, "laermbelaestigung"],
      [/mietnomade|miet nomade/gi, "mietnomade"],
      [/eigenbedarf|eigen bedarf/gi, "eigenbedarf"],
      [/hundesteuer|hund steuer/gi, "hundesteuer"]
    ];
    var i;
    for (i = 0; i < fixes.length; i++) {
      t = t.replace(fixes[i][0], fixes[i][1]);
    }
    return t;
  }

  var ONE_WORD_INTENTS = {
    "ki": "was ist kuenstliche intelligenz",
    "ai": "was ist kuenstliche intelligenz",
    "internet": "wie funktioniert das internet",
    "physik": "was ist physik",
    "chemie": "was ist chemie",
    "biologie": "was ist biologie",
    "geschichte": "was ist geschichte",
    "demokratie": "was ist demokratie",
    "bitcoin": "was ist blockchain",
    "krypto": "was ist blockchain",
    "blockchain": "was ist blockchain",
    "chatgpt": "was ist chatgpt",
    "genetik": "was ist genetik",
    "medizin": "was ist medizin",
    "schlaf": "tipps fuer gesunden schlaf",
    "lernen": "tipps zum lernen",
    "pixel": "was ist noco render",
    "bild": "was ist noco render",
    "render": "was ist noco render",
    "motion": "was ist noco motion",
    "video": "wie erstelle ich ein video",
    "locomotion": "was ist noco motion",
    "localotion": "was ist noco motion",
    "agent": "was ist noco agent",
    "inside": "was ist noco inside",
    "summary": "was ist noco summary",
    "brief": "was ist noco brief",
    "glow": "was ist noco glow",
    "create": "wie erstelle ich ein bild",
    "philosophie": "was ist philosophie",
    "psychologie": "was ist psychologie",
    "liebe": "was ist liebe beziehung",
    "freundschaft": "was ist freundschaft",
    "arbeit": "was ist arbeit karriere",
    "karriere": "was ist karriere bewerbung",
    "studium": "was ist studium uni",
    "uni": "was ist studium uni",
    "universum": "was ist universum astronomie",
    "astronomie": "was ist astronomie",
    "ernaehrung": "was ist ernaehrung gesund",
    "essen": "was ist ernaehrung",
    "reisen": "was ist reisen urlaub",
    "geld": "was ist geld finanzen",
    "finanzen": "was ist finanzen geld",
    "glueck": "was ist glueck zufriedenheit",
    "angst": "was ist angst psychologie",
    "depression": "was ist depression psychologie",
    "kunst": "was ist kunst kultur",
    "literatur": "was ist literatur",
    "wetter": "was ist wetter klima",
    "klima": "was ist klimawandel",
    "energie": "was ist erneuerbare energie",
    "oekologie": "was ist oekologie umwelt",
    "alltag": "allgemeine frage irgendein thema",
    "frage": "was kann ich dich fragen",
    "echo": "was ist noco echo",
    "vault": "was ist noco vault",
    "rush": "was ist noco rush",
    "lens": "was ist noco lens",
    "flux": "was ist noco flux",
    "prism": "was ist noco prism",
    "spark": "was ist noco spark",
    "plan": "welchen plan habe ich",
    "modell": "was sind die noco modell namen",
    "exclusive": "was ist noco exclusive",
    "datenschutz": "wie ist meine privatsphaere geschuetzt",
    "hilfe": "was kann ich dich fragen",
    "help": "was kann ich dich fragen",
    "hub": "was kann noco ai",
    "funktionen": "was kann noco ai",
    "themen": "was kann ich dich fragen",
    "yoga": "was ist yoga meditation",
    "meditation": "was ist meditation achtsamkeit",
    "achtsamkeit": "was ist achtsamkeit meditation",
    "fitness": "was ist fitness training",
    "training": "was ist fitness training",
    "auto": "was ist auto verkehr",
    "verkehr": "was ist auto verkehr",
    "politik": "was ist politik deutschland",
    "wahl": "was ist politik deutschland",
    "religion": "was ist religion glaube",
    "glaube": "was ist religion",
    "islam": "was ist islam",
    "christentum": "was ist christentum",
    "wohnen": "was ist wohnen miete",
    "miete": "was ist miete wohnung",
    "wohnung": "was ist wohnung miete",
    "haustier": "was ist haustier",
    "natur": "was ist natur outdoor",
    "outdoor": "was ist natur wandern",
    "camping": "was ist camping outdoor",
    "mode": "was ist mode fashion",
    "fashion": "was ist mode",
    "zeit": "was ist zeitmanagement",
    "produktivitaet": "was ist zeitmanagement produktivitaet",
    "erkaeltung": "was ist erkaeltung husten",
    "husten": "was ist erkaeltung husten",
    "nachhaltigkeit": "was ist nachhaltigkeit alltag",
    "umwelt": "was ist oekologie umwelt",
    "stoizismus": "was ist stoizismus leben",
    "vegan": "was ist veganismus",
    "vegetarisch": "was ist ernaehrung vegan",
    "kochen": "was ist kochen rezepte",
    "rezepte": "was ist kochen rezepte",
    "hobby": "was ist hobby freizeit",
    "freizeit": "was ist hobby freizeit",
    "langweilig": "was ist hobby freizeit",
    "eltern": "was ist eltern erziehung",
    "kinder": "was ist eltern kinder",
    "familie": "was ist familie eltern",
    "streaming": "was ist streaming netflix",
    "netflix": "was ist streaming netflix",
    "youtube": "was ist streaming youtube",
    "spotify": "was ist streaming spotify",
    "konflikt": "was ist konflikt streit",
    "streit": "was ist konflikt streit",
    "traum": "was ist traum schlaf",
    "traeume": "was ist traum schlafen",
    "albtraum": "was ist traum albtraum",
    "einkaufen": "was ist einkaufen budget",
    "supermarkt": "was ist einkaufen",
    "sommer": "was ist sommer freizeit",
    "winter": "was ist winter jahreszeiten",
    "herbst": "was ist jahreszeiten",
    "fruehling": "was ist jahreszeiten fruehling",
    "grillen": "was ist bbq grillen",
    "whatsapp": "was ist smartphone apps",
    "discord": "was ist gaming discord",
    "email": "was ist email internet",
    "mathe": "was ist mathematik",
    "geo": "was ist geographie",
    "dino": "was ist dinosaurier",
    "python": "was ist python",
    "musik": "was ist musik instrumente",
    "ozean": "was ist ozean",
    "giraffe": "was ist giraffe",
    "motive": "welche bilder kann ich rendern",
    "bilder": "welche bilder kann ich rendern",
    "fussball": "was ist fussball",
    "sport": "was ist sport training",
    "js": "was ist javascript",
    "javascript": "was ist javascript",
    "hacker": "was ist cybersecurity",
    "sicherheit": "wie bleibe ich sicher online",
    "handy": "was ist smartphone",
    "instagram": "was ist social media",
    "einhorn": "was ist einhorn",
    "minecraft": "was ist minecraft",
    "burnout": "was ist burnout",
    "einstein": "was ist relativitaet",
    "griechenland": "was ist antike griechenland",
    "rom": "was ist roemisches reich",
    "eu": "was ist europa union",
    "wandern": "was ist wandern outdoor",
    "garten": "was ist garten gaertnern",
    "insekten": "was ist insekten",
    "solar": "was ist solarenergie",
    "wind": "was ist windkraft",
    "drohne": "was ist drohne",
    "3d": "was ist 3d druck",
    "algorithmus": "was ist algorithmus",
    "podcast": "was ist podcast",
    "zeichnen": "was ist zeichnen lernen",
    "superheld": "was ist superheld marvel",
    "ml": "was ist maschinelles lernen",
    "phishing": "was ist cybersecurity",
    "schach": "was ist schach",
    "wikinger": "was ist wikinger",
    "olympia": "was ist olympische spiele",
    "112": "was ist notruf 112",
    "notruf": "was ist notruf 112",
    "wolken": "was ist wolken wetter",
    "mond": "was ist mondphasen",
    "stern": "was ist sternbilder",
    "esport": "was ist esports",
    "twitch": "was ist esports",
    "wahl": "was ist bundestag politik",
    "politik": "was ist bundestag politik",
    "uni": "was ist studium ausbildung",
    "ausbildung": "was ist studium ausbildung",
    "ritter": "was ist ritter mittelalter",
    "mozart": "was ist mozart klassische musik",
    "jazz": "was ist jazz blues",
    "kpop": "was ist k-pop",
    "venedig": "was ist venedig paris reise",
    "paris": "was ist venedig paris reise",
    "tsunami": "was ist tsunami hurrikan",
    "cpu": "was ist cpu gpu computer",
    "gpu": "was ist cpu gpu computer",
    "email": "was ist email spam",
    "qr": "was ist qr code",
    "f1": "was ist formel 1",
    "formel1": "was ist formel 1",
    "handball": "was ist handball basketball",
    "uno": "was ist uno organisation",
    "schreiben": "was ist kreatives schreiben",
    "imkerei": "was ist imkerei honig",
    "aquarium": "was ist aquarium terrarium",
    "jahreszeit": "was ist jahreszeiten",
    "fruehling": "was ist jahreszeiten",
    "herbst": "was ist jahreszeiten",
    "anime": "was ist anime manga",
    "manga": "was ist anime manga",
    "pokemon": "was ist pokemon pikachu",
    "pikachu": "was ist pokemon pikachu",
    "vpn": "was ist vpn tor browser",
    "git": "was ist git github",
    "docker": "was ist docker devops",
    "ux": "was ist ux design",
    "abi": "was ist abitur",
    "abitur": "was ist abitur",
    "dsgvo": "was ist dsgvo gdpr",
    "halloween": "was ist halloween karneval",
    "vegan": "was ist veganismus",
    "meme": "was ist meme viral",
    "tokio": "was ist tokio japan",
    "japan": "was ist tokio japan",
    "alpen": "was ist alpen schwarzwald",
    "rhein": "was ist rhein donau",
    "nobel": "was ist nobelpreis",
    "adhs": "was ist adhs legasthenie",
    "zahn": "was ist zahnpflege",
    "smart": "was ist smart home",
    "iot": "was ist smart home iot",
    "wasserstoff": "was ist wasserstoff energie",
    "exoplanet": "was ist exoplanet aliens",
    "alien": "was ist exoplanet aliens",
    "machu": "was ist machu picchu weltwunder",
    "karate": "was ist judo karate",
    "judo": "was ist judo karate",
    "prokrastination": "was ist prokrastination aufschieben",
    "typescript": "was ist typescript",
    "ts": "was ist typescript",
    "arduino": "was ist arduino raspberry pi",
    "raspberry": "was ist arduino raspberry pi",
    "deepfake": "was ist deepfake",
    "fusion": "was ist kernfusion",
    "cern": "was ist cern teilchenbeschleuniger",
    "triathlon": "was ist triathlon ironman",
    "pilates": "was ist pilates tai chi",
    "homeoffice": "was ist homeoffice remote work",
    "remote": "was ist homeoffice remote work",
    "freelancer": "was ist freelancer selbststaendig",
    "etf": "was ist etf aktien investieren",
    "aktien": "was ist etf aktien investieren",
    "miete": "was ist mietrecht mietvertrag",
    "gg": "was ist grundgesetz verfassung",
    "nato": "was ist nato",
    "hitze": "was ist hitzewelle duerre",
    "waldbrand": "was ist waldbrand",
    "plastik": "was ist mikroplastik fast fashion",
    "minimalismus": "was ist minimalismus",
    "vanlife": "was ist van life campingbus",
    "mobbing": "was ist cybermobbing",
    "enkeltrick": "was ist enkeltrick betrug",
    "antibiotika": "was ist antibiotika resistenz",
    "placebo": "was ist placebo nocebo",
    "faktencheck": "was ist faktencheck quellen",
    "stoizismus": "was ist stoizismus",
    "bauhaus": "was ist bauhaus typografie",
    "graffiti": "was ist street art graffiti",
    "utc": "was ist zeitzonen utc",
    "sommerzeit": "was ist zeitzonen sommerzeit",
    "prompt": "was ist prompt engineering",
    "rust": "was ist rust programmierung",
    "sql": "was ist sql datenbank",
    "mongodb": "was ist mongodb nosql",
    "api": "was ist rest api schnittstelle",
    "golang": "was ist go programmierung",
    "go": "was ist go programmierung",
    "kotlin": "was ist kotlin android",
    "swift": "was ist swift ios",
    "kubernetes": "was ist kubernetes k8s",
    "k8s": "was ist kubernetes k8s",
    "hydroponik": "was ist hydroponik urban farming",
    "permakultur": "was ist permakultur",
    "kompost": "was ist kompost biomuell",
    "korallen": "was ist korallenbleiche",
    "antarktis": "was ist antarktis suedpol",
    "skandinavien": "was ist skandinavien hygge",
    "afrika": "was ist afrika kontinent",
    "suedamerika": "was ist suedamerika amazonas",
    "australien": "was ist australien kontinent",
    "mauerfall": "was ist mauerfall wiedervereinigung",
    "kalterkrieg": "was ist kalter krieg",
    "industrialisierung": "was ist industrialisierung",
    "franzrevolution": "was ist franzoesische revolution",
    "nano": "was ist nanotechnologie",
    "bionik": "was ist bionik biomimikry",
    "graphen": "was ist graphen material",
    "autismus": "was ist autismus spektrum",
    "depression": "was ist depression mentale gesundheit",
    "angst": "was ist angststoerung panik",
    "ewaste": "was ist elektroschrott e-waste",
    "schweiz": "was ist schweiz oesterreich",
    "oesterreich": "was ist schweiz oesterreich",
    "crispr": "was ist crispr gen editing",
    "php": "was ist php programmierung",
    "cpp": "was ist c++ programmierung",
    "csharp": "was ist c# dotnet",
    "agile": "was ist agile scrum",
    "scrum": "was ist agile scrum",
    "figma": "was ist figma ui design",
    "tiktok": "was ist tiktok short video",
    "whatsapp": "was ist whatsapp telegram signal",
    "telegram": "was ist whatsapp telegram signal",
    "signal": "was ist whatsapp telegram signal",
    "discord": "was ist discord community",
    "influencer": "was ist influencer content creator",
    "creator": "was ist influencer content creator",
    "ebook": "was ist ebook hoerbuch",
    "hoerbuch": "was ist ebook hoerbuch",
    "gutenberg": "was ist buchdruck gutenberg",
    "byzanz": "was ist byzantinisches reich",
    "ottoman": "was ist osmanisches reich",
    "china": "was ist china geschichte",
    "usa": "was ist usa geschichte",
    "kanada": "was ist kanada",
    "mexiko": "was ist mexiko",
    "nasa": "was ist nasa esa",
    "esa": "was ist nasa esa",
    "artemis": "was ist artemis mondmission",
    "lithium": "was ist lithium akku",
    "geothermie": "was ist geothermie",
    "biogas": "was ist biogas energie",
    "ccs": "was ist carbon capture",
    "aufforstung": "was ist aufforstung waldschutz",
    "feinstaub": "was ist luftqualitaet feinstaub",
    "smog": "was ist luftqualitaet feinstaub",
    "bienen": "was ist bienensterben",
    "regex": "was ist regex",
    "lua": "was ist lua scripting",
    "gezeiten": "was ist gezeitenenergie",
    "elektrolyse": "was ist elektrolyse wasserstoff",
    "vue": "was ist vue.js framework",
    "angular": "was ist angular framework",
    "flutter": "was ist flutter dart",
    "dart": "was ist flutter dart",
    "tailwind": "was ist tailwind css",
    "graphql": "was ist graphql api",
    "oauth": "was ist oauth jwt",
    "jwt": "was ist oauth jwt",
    "aws": "was ist aws cloud",
    "azure": "was ist azure cloud",
    "terraform": "was ist terraform iac",
    "cicd": "was ist ci cd pipeline",
    "serverless": "was ist serverless lambda",
    "microservices": "was ist microservices architektur",
    "saas": "was ist saas software",
    "websocket": "was ist websocket realtime",
    "vite": "was ist vite build tool",
    "npm": "was ist npm package manager",
    "seo": "was ist seo suchmaschinenoptimierung",
    "cms": "was ist wordpress cms",
    "wordpress": "was ist wordpress cms",
    "copywriting": "was ist copywriting marketing",
    "diabetes": "was ist diabetes blutzucker",
    "allergie": "was ist allergie heuschnupfen",
    "gluten": "was ist gluten zoeliakie",
    "zoeliakie": "was ist gluten zoeliakie",
    "physio": "was ist physiotherapie ergotherapie",
    "longcovid": "was ist long covid",
    "elternzeit": "was ist elternzeit mutterschutz",
    "kita": "was ist kita kinderbetreuung",
    "bundesrat": "was ist bundesrat laender",
    "bverfg": "was ist bundesverfassungsgericht",
    "demografie": "was ist demografie alterung",
    "migration": "was ist migration integration",
    "linux": "was ist linux ubuntu",
    "ubuntu": "was ist linux ubuntu",
    "windows": "was ist windows 11",
    "mac": "was ist macos apple mac",
    "macos": "was ist macos apple mac",
    "svelte": "was ist svelte sveltekit",
    "laravel": "was ist laravel php",
    "spring": "was ist spring boot java",
    "deno": "was ist deno bun runtime",
    "bun": "was ist deno bun runtime",
    "bluetooth": "was ist bluetooth nfc",
    "nfc": "was ist bluetooth nfc",
    "5g": "was ist 5g mobilfunk",
    "starlink": "was ist starlink satelliten internet",
    "rag": "was ist rag retrieval augmented generation",
    "inflation": "was ist inflation teuerung",
    "aktien": "was ist aktien boerse etf",
    "etf": "was ist aktien boerse etf",
    "bafoeg": "was ist bafoeg studienfinanzierung",
    "bafög": "was ist bafoeg studienfinanzierung",
    "blender": "was ist blender 3d modellierung",
    "streaming": "was ist streaming netflix",
    "meme": "was ist meme memes internet",
    "memes": "was ist meme memes internet",
    "erdbeben": "was ist erdbeben seismologie",
    "tornado": "was ist tornado wirbelsturm",
    "atomkraft": "was ist atomkraft kernkraft",
    "schengen": "was ist schengen raum",
    "uno": "was ist uno vereinte nationen",
    "who": "was ist who weltgesundheitsorganisation",
    "einstein": "was ist relativitaetstheorie einstein",
    "immunsystem": "was ist immunsystem abwehr",
    "pflege": "was ist pflegeberuf altenpflege",
    "mindestlohn": "was ist mindestlohn lohn",
    "gewerkschaft": "was ist gewerkschaft tarifvertrag",
    "barrierefreiheit": "was ist barrierefreiheit accessibility",
    "fotografie": "was ist fotografie grundlagen",
    "journalismus": "was ist journalismus pressefreiheit",
    "artensterben": "was ist artensterben biodiversitaet",
    "ozon": "was ist ozonloch ozonschicht",
    "paralympics": "was ist paralympics para sport",
    "speedrun": "was ist speedrunning speedrun gaming",
    "noco": "was ist noco ai",
    "brief": "was ist noco brief",
    "glow": "was ist noco glow",
    "nextjs": "was ist next.js nextjs",
    "next": "was ist next.js nextjs",
    "nuxt": "was ist nuxt vue",
    "prisma": "was ist prisma orm",
    "supabase": "was ist supabase firebase",
    "firebase": "was ist firebase firestore",
    "redis": "was ist redis cache",
    "kafka": "was ist kafka event streaming",
    "ransomware": "was ist ransomware malware",
    "malware": "was ist malware virus",
    "web3": "was ist web3 blockchain",
    "nft": "was ist nft digital",
    "metaverse": "was ist metaverse vr",
    "ev": "was ist e-mobilitaet elektroauto",
    "elektroauto": "was ist e-mobilitaet elektroauto",
    "waermepumpe": "was ist waermepumpe heizung",
    "wärmepumpe": "was ist waermepumpe heizung",
    "kreislauf": "was ist kreislaufwirtschaft",
    "aiact": "was ist eu ai act ki gesetz",
    "copyright": "was ist urheberrecht copyright",
    "mrna": "was ist mrna impfstoff",
    "epigenetik": "was ist epigenetik",
    "stammzellen": "was ist stammzellen therapie",
    "telemedizin": "was ist telemedizin",
    "adhs": "was ist adhs aufmerksamkeit",
    "migräne": "was ist migräne kopfschmerz",
    "migrane": "was ist migräne kopfschmerz",
    "vitamind": "was ist vitamin d",
    "pomodoro": "was ist pomodoro technik",
    "mindmap": "was ist mindmap mind mapping",
    "copilot": "was ist github copilot",
    "midjourney": "was ist midjourney ki bild",
    "alexa": "was ist alexa sprachassistent",
    "drohne": "was ist drohnen regeln",
    "cookie": "was ist cookie banner dsgvo",
    "fairtrade": "was ist fair trade",
    "hyperloop": "was ist hyperloop",
    "journaling": "was ist journaling tagebuch",
    "rhetorik": "was ist öffentliche rede rhetorik",
    "openai": "was ist openai chatgpt",
    "claude": "was ist anthropic claude",
    "gemini": "was ist google gemini",
    "llama": "was ist meta llama",
    "mistral": "was ist mistral ai",
    "embeddings": "was ist embedding vektor",
    "vektor": "was ist vektordatenbank",
    "finetuning": "was ist fine tuning llm",
    "tokens": "was ist context window tokens",
    "halbleiter": "was ist halbleiter chip",
    "chips": "was ist halbleiter chip",
    "buddhismus": "was ist buddhismus",
    "hinduismus": "was ist hinduismus",
    "islam": "was ist islam grundlagen",
    "christentum": "was ist christentum grundlagen",
    "judentum": "was ist judentum grundlagen",
    "taichi": "was ist tai chi",
    "erasmus": "was ist erasmus plus",
    "duolingo": "was ist duolingo sprachen lernen",
    "buergergeld": "was ist buergergeld",
    "bürgergeld": "was ist buergergeld",
    "wohngeld": "was ist wohngeld",
    "zinseszins": "was ist zinseszins",
    "defi": "was ist defi krypto",
    "shopify": "was ist shopify e-commerce",
    "dropshipping": "was ist dropshipping",
    "esg": "was ist esg investing",
    "rente": "was ist altersvorsorge rente",
    "mietpreisbremse": "was ist mietpreisbremse",
    "solidstate": "was ist solid state batterie",
    "perowskit": "was ist perowskit solar",
    "rewilding": "was ist rewilding",
    "mycelium": "was ist mycelium material",
    "neuromorphic": "was ist neuromorphic computing",
    "osint": "was ist osint recherche",
    "zettelkasten": "was ist zettelkasten",
    "notion": "was ist notion app",
    "obsidian": "was ist obsidian notes",
    "gtd": "was ist gtd getting things done",
    "eisenhower": "was ist eisenhower matrix",
    "latex": "was ist latex dokument",
    "plagiat": "was ist plagiat",
    "apa": "was ist apa zitierstil",
    "stable diffusion": "was ist stable diffusion",
    "socialengineering": "was ist social engineering",
    "umzug": "was ist umzug wohnungswechsel",
    "scheidung": "was ist scheidung trennung",
    "heirat": "was ist heirat hochzeit",
    "stromausfall": "was ist stromausfall blackout",
    "putzen": "was ist haushalt putzen",
    "haushalt": "was ist haushalt putzen",
    "versicherung": "was ist versicherung haftpflicht",
    "flughafen": "was ist flughafen fliegen tipps",
    "fliegen": "was ist flughafen fliegen tipps",
    "trinkgeld": "was ist trinkgeld restaurant",
    "deutschlandticket": "was ist deutschland ticket",
    "dticket": "was ist deutschland ticket",
    "tattoo": "was ist tattoo piercing",
    "piercing": "was ist tattoo piercing",
    "brille": "was ist brille sehstaerke",
    "grippe": "was ist grippe erkaeltung",
    "stalking": "was ist stalking belaestigung online",
    "nachbarn": "was ist nachbarn nachbarschaft",
    "zeitumstellung": "was ist zeitumstellung sommerzeit",
    "sommerzeit": "was ist zeitumstellung sommerzeit",
    "lohnsteuer": "was ist lohnsteuer steuerklasse",
    "steuer": "was ist lohnsteuer steuerklasse",
    "kita": "was ist kita kinderbetreuung",
    "kindergarten": "was ist kita kindergarten",
    "lotto": "was ist lotto gluecksspiel",
    "gluecksspiel": "was ist lotto gluecksspiel",
    "horoskop": "was ist horoskop astrologie",
    "astrologie": "was ist horoskop astrologie",
    "impfpass": "was ist impfpass impfungen",
    "stromsparen": "was ist strom sparen",
    "wassersparen": "was ist wasser sparen",
    "hausaufgaben": "was ist hausaufgaben tipps",
    "oepnv": "was ist deutschland ticket oepnv",
    "bahn": "was ist deutschland ticket bahn",
    "kaution": "was ist mietkaution wohnung",
    "mietkaution": "was ist mietkaution wohnung",
    "nebenkosten": "was ist nebenkosten abrechnung",
    "schimmel": "was ist schimmel wohnung",
    "kuendigung": "was ist kuendigung arbeit",
    "kündigung": "was ist kuendigung arbeit",
    "interview": "was ist vorstellungsgespraech",
    "lebenslauf": "was ist lebenslauf bewerbung",
    "cv": "was ist lebenslauf bewerbung",
    "gehalt": "was ist gehaltsverhandlung",
    "homoeopathie": "was ist homoeopathie globuli",
    "homöopathie": "was ist homoeopathie globuli",
    "keto": "was ist keto ketogene diaet",
    "fasten": "was ist intermittierendes fasten",
    "sperrmuell": "was ist sperrmuell entsorgung",
    "geschenke": "was ist geschenke ideen",
    "geschenk": "was ist geschenke ideen",
    "selbstvertrauen": "was ist selbstvertrauen",
    "motivation": "was ist motivation antrieb",
    "perfektionismus": "was ist perfektionismus",
    "entscheidung": "was ist entscheidungen treffen",
    "entscheidungen": "was ist entscheidungen treffen",
    "hoeflichkeit": "was ist hoeflichkeit umgangston",
    "höflichkeit": "was ist hoeflichkeit umgangston",
    "weihnachten": "was ist weihnachten tradition",
    "silvester": "was ist silvester neujahr",
    "neujahr": "was ist silvester neujahr",
    "zeugnis": "was ist arbeitszeugnis",
    "handwerker": "was ist handwerker renovierung",
    "parken": "was ist parken parkverbot",
    "mahnung": "was ist mahnung inkasso",
    "inkasso": "was ist mahnung inkasso",
    "pfand": "was ist pfand pfandflasche",
    "pfandflasche": "was ist pfand pfandflasche",
    "mieterhoehung": "was ist mieterhoehung miete",
    "anmeldung": "was ist meldebescheinigung anmeldung",
    "meldebescheinigung": "was ist meldebescheinigung anmeldung",
    "personalausweis": "was ist personalausweis reisepass",
    "reisepass": "was ist personalausweis reisepass",
    "pass": "was ist personalausweis reisepass",
    "schufa": "was ist schufa bonitaet",
    "dispo": "was ist dispokredit dispo",
    "kredit": "was ist ratenkredit privatkredit",
    "ratenkredit": "was ist ratenkredit privatkredit",
    "hypothek": "was ist baufinanzierung hypothek",
    "baufinanzierung": "was ist baufinanzierung hypothek",
    "nachsendeauftrag": "was ist nachsendeauftrag post",
    "pflegegrad": "was ist pflegegrad pflegeversicherung",
    "visum": "was ist visum aufenthaltstitel",
    "aufenthaltstitel": "was ist visum aufenthaltstitel",
    "fuehrungszeugnis": "was ist fuehrungszeugnis",
    "führungszeugnis": "was ist fuehrungszeugnis",
    "buergeramt": "was ist buergeramt meldeamt",
    "bürgeramt": "was ist buergeramt meldeamt",
    "minijob": "was ist minijob midijob",
    "midijob": "was ist minijob midijob",
    "praktikum": "was ist praktikum pflichtpraktikum",
    "werkstudent": "was ist werkstudent student job",
    "winterreifen": "was ist winterreifen reifen",
    "bussgeld": "was ist bussgeld verkehr",
    "blitzer": "was ist bussgeld verkehr",
    "flensburg": "was ist punkte flensburg",
    "punkte": "was ist punkte flensburg",
    "schulzeugnis": "was ist schulzeugnis noten",
    "mietschulden": "was ist mietschulden mietrueckstand",
    "widerruf": "was ist widerrufsrecht online",
    "gewaehrleistung": "was ist gewaehrleistung garantie",
    "garantie": "was ist gewaehrleistung garantie",
    "paypal": "was ist paypal klarna lastschrift",
    "klarna": "was ist paypal klarna lastschrift",
    "girokonto": "was ist girokonto kontowechsel",
    "konto": "was ist girokonto kontowechsel",
    "sparkonto": "was ist sparkonto tagesgeld",
    "tagesgeld": "was ist sparkonto tagesgeld",
    "festgeld": "was ist sparkonto tagesgeld",
    "urlaub": "was ist urlaubsanspruch urlaubstage",
    "urlaubsanspruch": "was ist urlaubsanspruch",
    "krankmeldung": "was ist krankmeldung krankschreibung",
    "krankschreibung": "was ist krankmeldung krankschreibung",
    "kindergeld": "was ist kindergeld antrag",
    "schwangerschaft": "was ist schwangerschaft trimester",
    "schwanger": "was ist schwangerschaft",
    "sonnenbrand": "was ist sonnenbrand hitzschlag",
    "hitzschlag": "was ist sonnenbrand hitzschlag",
    "zecken": "was ist zeckenbiss borreliose",
    "zeckenbiss": "was ist zeckenbiss",
    "steuererklaerung": "was ist steuererklaerung elster",
    "steuererklärung": "was ist steuererklaerung elster",
    "elster": "was ist steuererklaerung elster",
    "mietminderung": "was ist mietminderung mietrecht",
    "verbraucherzentrale": "was ist verbraucherzentrale",
    "elterngeld": "was ist elterngeld antrag",
    "stillen": "was ist stillen beikost",
    "rentenversicherung": "was ist rentenversicherung",
    "arbeitslosengeld": "was ist arbeitslosengeld alg1",
    "alg1": "was ist arbeitslosengeld alg1",
    "gehaltserhoehung": "was ist gehaltserhoehung lohn",
    "onlineshopping": "was ist online shopping",
    "amazon": "was ist online shopping",
    "2fa": "was ist zwei faktor authentifizierung",
    "esim": "was ist esim prepaid roaming",
    "glasfaser": "was ist glasfaser dsl internet",
    "mesh": "was ist mesh wlan",
    "notgroschen": "was ist notgroschen finanzielle reserve",
    "budget": "was ist haushaltsbudget",
    "depot": "was ist depot etf",
    "nachhilfe": "was ist nachhilfe lernhilfe",
    "pruefungsangst": "was ist pruefungsangst",
    "einsamkeit": "was ist einsamkeit",
    "sozialeangst": "was ist soziale angst",
    "hundeerziehung": "was ist hund erziehung",
    "zimmerpflanzen": "was ist zimmerpflanzen pflege",
    "friseur": "was ist friseur haarschnitt",
    "phishing": "was ist phishing email",
    "passwortmanager": "was ist passwort manager",
    "cloud": "was ist cloud speicher",
    "vinted": "was ist second hand kleinanzeigen",
    "flohmarkt": "was ist second hand flohmarkt",
    "rueckenschmerz": "was ist rueckenschmerz nackenschmerz",
    "rückenschmerz": "was ist rueckenschmerz",
    "muskelkater": "was ist muskelkater dehnen",
    "schnarchen": "was ist schnarchen schlafapnoe",
    "abnehmen": "was ist abnehmen gesund",
    "bmi": "was ist bmi uebergewicht",
    "laktose": "was ist laktoseintoleranz",
    "nussallergie": "was ist nussallergie",
    "bienenstich": "was ist insektenstich",
    "sonnencreme": "was ist sonnencreme hautpflege",
    "akne": "was ist akne pickel",
    "schlaganfall": "was ist schlaganfall erkennen",
    "herzinfarkt": "was ist herzinfarkt erkennen",
    "zahnspange": "was ist zahnspange",
    "bruxismus": "was ist bruxismus zaeheneknirschen",
    "kaffee": "was ist kaffee koffein",
    "alkohol": "was ist alkohol gesundheit",
    "rauchen": "was ist rauchen aufhoeren",
    "trinkwasser": "was ist trinkwasser wie viel",
    "einschlafen": "was ist einschlafen schlafstoerung",
    "escooter": "was ist e-scooter elektroroller",
    "fahrradhelm": "was ist fahrradhelm sicherheit",
    "schwimmen": "was ist schwimmen lernen",
    "zahnseide": "was ist zahnseide mundhygiene",
    "ergonomie": "was ist ergonomie arbeitsplatz",
    "laerm": "was ist laerm wohnung schallschutz",
    "wg": "was ist wg suche wohngemeinschaft",
    "ausbildung": "was ist ausbildungsplatz lehrstelle",
    "betriebsrat": "was ist betriebsrat",
    "nc": "was ist numerus clausus",
    "gehoerschutz": "was ist gehoerschutz",
    "bildschirmzeit": "was ist bildschirmzeit kinder",
    "mediation": "was ist mediation schlichtung",
    "heizen": "was ist heizen sparen",
    "hundekot": "was ist hundekot gassi",
    "tierarzt": "was ist tierarzt impfung",
    "fuehrerschein": "was ist fahrschule fuehrerschein",
    "fahrschule": "was ist fahrschule fuehrerschein",
    "gebrauchtwagen": "was ist gebrauchtwagen auto kaufen",
    "tuev": "was ist tuev hauptuntersuchung",
    "hu": "was ist tuev hauptuntersuchung",
    "autounfall": "was ist autounfall",
    "unfall": "was ist autounfall",
    "kfz": "was ist kfz versicherung",
    "sprit": "was ist tanken sparen",
    "benzin": "was ist tanken sparen",
    "carsharing": "was ist carsharing",
    "blablacar": "was ist mitfahrgelegenheit",
    "schneeketten": "was ist schneeketten",
    "jetlag": "was ist jetlag",
    "packliste": "was ist packliste urlaub",
    "flugverspaetung": "was ist flugverspaetung",
    "reiseversicherung": "was ist reiseversicherung",
    "kulturschock": "was ist kulturschock",
    "ebike": "was ist ebike pedelec",
    "pedelec": "was ist ebike pedelec",
    "hundesteuer": "was ist hund anmelden",
    "katze": "was ist katze haltung",
    "kaninchen": "was ist kaninchen",
    "laerm": "was ist laermbelaestigung",
    "lärm": "was ist laermbelaestigung",
    "eigenbedarf": "was ist eigenbedarf",
    "mietnomade": "was ist mietnomade",
    "ordnungsamt": "was ist ordnungsamt",
    "balkongarten": "was ist balkongarten",
    "motorrad": "was ist motorrad fuehrerschein",
    "babysitter": "was ist babysitter",
    "hausapotheke": "was ist hausapotheke",
    "retoure": "was ist ware retournieren",
    "gehackt": "was ist passwort gehackt"
  };

  function extractQuotedPhrase(text) {
    var m = String(text || "").match(/["'„“‚‘]([^"'„“‚‘]{2,})["'„“‚‘]/);
    if (m && m[1]) return stripQuestionNoise(fixCommonTypos(m[1])).trim();
    return "";
  }

  function extractTopicFromQuestion(text) {
    var core = stripQuestionNoise(fixCommonTypos(String(text || "")));
    var m, topic, quoted;
    if (!core) return "";
    quoted = extractQuotedPhrase(text);
    if (quoted && quoted.length >= 2) return quoted;
    m = core.match(/^(?:ich versteh[e]? nicht|ich checks? nicht|keine ahnung|weiss nicht|weiß nicht)\s+(?:was|wie|warum)\s+(.+?)(?:\s+ist|\s+sind|\s+war)?$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^was soll\s+(.+?)\s+(?:sein|bedeuten|heissen)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^was meint man mit\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^(?:frage mich|ich frag mich)\s+(?:was|wie|warum)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^(?:wie nennt man|was nennt man)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^(?:infos?|informationen|hilfe|erklaerung)\s+(?:zu|zum|zur|ueber|über|von|bei)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^(?:interesse an|interessiert mich)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^(?:der|die|das)\s+unterschied zwischen\s+(.+)\s+und\s+(.+)$/);
    if (m && m[1] && m[2]) return m[1].trim() + " " + m[2].trim();
    m = core.match(/^(?:hast du ahnung (von|bei|über|ueber))\s+(.+)$/);
    if (m && m[2] && m[2].length >= 2) return m[2].trim();
    m = core.match(/^(?:kannste|koenntest) (?:mir )?(?:sagen|erklaeren|erklären) (?:was )?(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].replace(/\s+(ist|sind|war)$/, "").trim();
    m = core.match(/^(.+?)\s+und\s+(?:wie|was)\s+(?:funktioniert|ist|sind)\s+(?:das|es|der rest)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^(?:ich such[e]?|suche) (infos?|informationen|hilfe) (?:zu|zum|zur|ueber|über|von|bei)\s+(.+)$/);
    if (m && m[2] && m[2].length >= 2) return m[2].trim();
    m = core.match(/^(?:wuerde|würde) gern[e]? wissen (?:was |)(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].replace(/\s+(ist|sind)$/, "").trim();
    m = core.match(/^what do you know about\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^tell me something about\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^(.+?)\s+oder\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2 && m[2] && m[2].length >= 2) return m[1].trim();
    m = core.match(/^was bringt\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^lohnt sich\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2 && !/exclusive|noco|flux|premium/.test(m[1])) return m[1].trim();
    m = core.match(/^(?:hab|habe) ne frage (?:zu|zum|zur|ueber|über)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^(?:hab|habe) (?:ich )?gehoert von\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^(?:kurze |eine |ne )?frage[,:]?\s+(?:zu|zum|zur|ueber|über|wegen)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^tipps (?:fuer|für|zu|zum|beim|im|in der)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^(?:ueber|über|about)\s+(?:den|die|das|dem|der)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].replace(/\s+eigentlich\s*$/i, "").trim();
    m = core.match(/(?:ueber|über|zu|von|wegen|zum|zur|betreffend|about)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) {
      topic = m[1].replace(/\s+(erklaeren|erklären|sagen|wissen|eigentlich)\s*$/i, "").trim();
      if (topic.length >= 2) return topic;
    }
    m = core.match(/^(.+),\s*was ist das$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^(.+)\s+eigentlich\s*$/);
    if (m && m[1] && m[1].length >= 2) return m[1].replace(/^was ist\s+/, "").trim();
    m = core.match(/^(?:was ist|was sind|was war|was waren|wie funktioniert|wie ist|warum ist|warum sind|wer ist|wann|wo ist)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^was (hältst|haeltst|denkst) du (von|über|ueber)\s+(.+)$/);
    if (m && m[3] && m[3].length >= 2) return m[3].trim();
    m = core.match(/^(?:was mach ich|was mache ich|was tun|was muss ich tun) (?:bei|wenn|nach|beim|im|in der|in dem)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^ist (.+) (schlimm|schädlich|schaedlich|gefährlich|gefaehrlich|normal)\??$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^was passiert (?:bei|wenn|nach)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^wie sieht (.+) (?:aus|so aus)\??$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^(?:was kostet|wie viel kostet|wie lange dauert)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].replace(/\s+(ungefaehr|ca|etwa)$/i, "").trim();
    m = core.match(/^(?:darf man|darf ich)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^ist (?:das |es )?(.+) erlaubt\??$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^stimmt das (?:das )?(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^(?:erklaer|erklaere|erklaer mir|beschreib|definiere)\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    m = core.match(/^wie (?:mache|mach|kann|soll|sollte) ich(?: (?:ein|eine|einen|einem|der|die|das))?\s+(.+)$/);
    if (m && m[1] && m[1].length >= 2) return m[1].replace(/\s+(machen|tun|anfangen|funktionieren)\s*$/i, "").trim();
    m = core.match(/^how (?:do|can|should) i(?: (?:a|an|the))?\s+(.+)$/i);
    if (m && m[1] && m[1].length >= 2) return m[1].trim();
    return "";
  }

  function interpretCasualQuery(input) {
    var raw = normalizeGeneralQuestion(input);
    if (!raw || raw.charAt(0) === "/") return raw;
    var fixed = fixCommonTypos(raw);
    var core = stripQuestionNoise(fixed);
    core = core.replace(/^(hey|hi|hallo|moin|servus|na|yo)[,.!\s]+/i, "");
    var n = normalize(fixed);
    var words = core.split(/\s+/).filter(Boolean);
    var quoted = extractQuotedPhrase(raw);

    if (quoted) {
      return "was ist " + quoted;
    }
    if (/^(uebrigens|überhaupt|achso|ach so|btw|nachtrag)[,:!\s]+(was|wie|warum|)/i.test(core)) {
      return core.replace(/^(uebrigens|überhaupt|achso|ach so|btw|nachtrag)[,:!\s]+/i, "").replace(/^(was|wie|warum)\s+/, "was ist ").replace(/^was ist was\s+/, "was ist ");
    }
    if (/^kurz gefragt[,:]?\s+/.test(core)) {
      return "was ist " + core.replace(/^kurz gefragt[,:]?\s+/, "");
    }
    if (/^mal (ehrlich|kurz)[,:]?\s+/.test(core)) {
      return "was ist " + core.replace(/^mal (ehrlich|kurz)[,:]?\s+/, "");
    }

    if (/^tipps (fuer|für|zu|zum|beim|im|in der|in dem)\s+/.test(core)) {
      return core.replace(/^tipps (fuer|für|zu|zum|beim|im|in der|in dem)\s+/, "tipps fuer ");
    }
    if (/^(ratschlaege|ratschläge|empfehlungen|vorschlaege|vorschläge) (fuer|für|zu|zum|beim)\s+/.test(core)) {
      return "tipps fuer " + core.replace(/^(ratschlaege|ratschläge|empfehlungen|vorschlaege|vorschläge) (fuer|für|zu|zum|beim)\s+/, "");
    }
    if (/^wie (kann|soll|sollte|muss) ich\s+/.test(core) && !/funktioniert|geht\s+/.test(core)) {
      return "tipps " + core.replace(/^wie (kann|soll|sollte|muss) ich\s+/, "");
    }
    if (/^was (muss|soll|sollte) ich (beim|bei der|bei dem|im|in der|in dem)\s+/.test(core)) {
      return "tipps " + core.replace(/^was (muss|soll|sollte) ich /, "");
    }
    if (/^any tips (for|on|about)\s+/i.test(core)) {
      return "tipps fuer " + core.replace(/^any tips (for|on|about)\s+/i, "");
    }
    if (/^(kurze |eine |ne )?frage[,:]?\s+(zu|zum|zur|ueber|über|wegen)\s+/.test(core)) {
      return "was ist " + core.replace(/^(kurze |eine |ne )?frage[,:]?\s+(zu|zum|zur|ueber|über|wegen)\s+/, "");
    }
    if (/^(haette|hätte) mal (eine |ne )?frage (zu|zum|zur|ueber|über|wegen)\s+/.test(core)) {
      return "was ist " + core.replace(/^(haette|hätte) mal (eine |ne )?frage (zu|zum|zur|ueber|über|wegen)\s+/, "");
    }
    if (/^(hab|habe) (ich )?gehoert von\s+/.test(core)) {
      return "was ist " + core.replace(/^(hab|habe) (ich )?gehoert von\s+/, "");
    }
    if (/^was wisst? (ihr|du) (über|ueber|zu|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^was wisst? (ihr|du) (über|ueber|zu|von)\s+/, "");
    }
    if (/^kennt (ihr|jemand|du) (das thema |)(.+)$/i.test(core)) {
      return "was ist " + core.replace(/^kennt (ihr|jemand|du) (das thema |)/i, "");
    }
    if (/^ist (.+) (gefaehrlich|schlecht|gut|wichtig|gesund)\??$/.test(core)) {
      return "was ist " + core.replace(/^ist (.+) (gefaehrlich|schlecht|gut|wichtig|gesund)\??$/, "$1");
    }
    if (/^was ist los mit\s+/.test(core)) {
      return "was ist " + core.replace(/^was ist los mit\s+/, "");
    }
    if (/^(kannste|koenntest) (mir )?(sagen|erklaeren|erklären) (was )?(über|ueber|zu|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^(kannste|koenntest) (mir )?(sagen|erklaeren|erklären) (was )?(über|ueber|zu|von)\s+/, "");
    }
    if (/^hast du ahnung (von|bei|über|ueber)\s+/.test(core)) {
      return "was ist " + core.replace(/^hast du ahnung (von|bei|über|ueber)\s+/, "");
    }
    if (/^(und zwar|folgendes|naemlich|nämlich)\s+/.test(core)) {
      return "was ist " + core.replace(/^(und zwar|folgendes|naemlich|nämlich)\s+/, "");
    }
    if (/^(ich )?wollt(e)? (mal )?wissen (was |)(.+)$/.test(core)) {
      return core.replace(/^(ich )?wollt(e)? (mal )?wissen (was )?/, "was ist ").replace(/\s+ist$/, "");
    }
    if (/^waere cool wenn du (mir )?(was |)(zu|über|ueber|von)\s+/.test(core) || /^wäre cool wenn du (mir )?(was |)(zu|über|ueber|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^w(ae|ä)re cool wenn du (mir )?(was )?(zu|über|ueber|von)\s+/, "");
    }
    if (/^mal kurz (was ist|wie ist|was sind)\s+/.test(core)) {
      return core.replace(/^mal kurz /, "");
    }
    if (/^jo[,!\s]+(was|wie|warum)\s+/.test(core)) {
      return core.replace(/^jo[,!\s]+/, "");
    }
    if (/^(ich )?such[e]? (infos?|informationen|hilfe) (zu|zum|zur|ueber|über|von|bei)\s+/.test(core)) {
      return "was ist " + core.replace(/^(ich )?such[e]? (infos?|informationen|hilfe) (zu|zum|zur|ueber|über|von|bei)\s+/, "");
    }
    if (/^(wuerde|würde) gern[e]? wissen (was |)/.test(core)) {
      return core.replace(/^(wuerde|würde) gern[e]? wissen (was )?/, "was ist ").replace(/\s+ist$/, "");
    }
    if (/^what do you know about\s+/i.test(core)) {
      return "was ist " + core.replace(/^what do you know about\s+/i, "");
    }
    if (/^tell me something about\s+/i.test(core)) {
      return "was ist " + core.replace(/^tell me something about\s+/i, "");
    }
    if (/^is .+ (good|bad|important|healthy|dangerous)\??$/i.test(core)) {
      return "was ist " + core.replace(/^is (.+) (good|bad|important|healthy|dangerous)\??$/i, "$1");
    }
    if (/^can you (explain|tell me about)\s+/i.test(core)) {
      return "was ist " + core.replace(/^can you (explain|tell me about)\s+/i, "");
    }
    if (/^(erklaer|erklaere|erklär) mal\s+/.test(core)) {
      return "was ist " + core.replace(/^(erklaer|erklaere|erklär) mal\s+/, "");
    }
    if (/^schreib mir (was |)(zu|über|ueber|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^schreib mir (was |)(zu|über|ueber|von)\s+/, "");
    }
    if (/^(in einfachen worten|einfach erklaert|einfach erklärt|fuer anfaenger|für anfänger|fuer dummies|eli5)\s+/.test(core)) {
      return "was ist " + core.replace(/^(in einfachen worten|einfach erklaert|einfach erklärt|fuer anfaenger|für anfänger|fuer dummies|eli5)\s+/, "");
    }
    if (/^was ist (.+) (genau|eigentlich|so genau)\??$/.test(core)) {
      return "was ist " + core.replace(/^was ist (.+) (genau|eigentlich|so genau)\??$/, "$1");
    }
    if (/^was bringt\s+/.test(core)) {
      return "was ist " + core.replace(/^was bringt\s+/, "");
    }
    if (/^lohnt sich\s+/.test(core) && !/exclusive|noco|flux|premium/.test(core)) {
      return "was ist " + core.replace(/^lohnt sich\s+/, "");
    }
    if (/^(hab|habe) ne frage (zu|zum|zur|ueber|über)\s+/.test(core)) {
      return "was ist " + core.replace(/^(hab|habe) ne frage (zu|zum|zur|ueber|über)\s+/, "");
    }
    if (/^(weisst du|weißt du) was\s+(.+)\s+ist\??$/.test(core)) {
      return "was ist " + core.replace(/^(weisst du|weißt du) was\s+/, "").replace(/\s+ist\??$/, "");
    }
    if (/^kann man\s+(.+)\s+(erklaeren|erklären|sagen)\??$/.test(core)) {
      return "was ist " + core.replace(/^kann man\s+/, "").replace(/\s+(erklaeren|erklären|sagen)\??$/, "");
    }
    if (words.length === 1 && ONE_WORD_INTENTS[words[0]]) {
      return ONE_WORD_INTENTS[words[0]];
    }
    if (words.length === 2 && words[0] === "was" && ONE_WORD_INTENTS[words[1]]) {
      return ONE_WORD_INTENTS[words[1]];
    }
    if (words.length === 2 && words[0] === "warum" && ONE_WORD_INTENTS[words[1]]) {
      return "warum " + ONE_WORD_INTENTS[words[1]].replace(/^was ist\s+/, "");
    }
    if (/^what is\s+/i.test(core)) {
      return "was ist " + core.replace(/^what is\s+/i, "");
    }
    if (/^how does\s+/i.test(core)) {
      return "wie funktioniert " + core.replace(/^how does\s+/i, "").replace(/\s+work\s*$/i, "");
    }
    if (/^tell me about\s+/i.test(core)) {
      return "was ist " + core.replace(/^tell me about\s+/i, "");
    }
    if (/^explain\s+/i.test(core)) {
      return "was ist " + core.replace(/^explain\s+/i, "");
    }
    if (/^tipps (fuer|für|zu|zum|beim)\s+/.test(core)) {
      return core.replace(/^tipps (fuer|für|zu|zum|beim)\s+/, "tipps fuer ");
    }
    if (/^wie kann ich (besser )?(lernen|schlafen|sparen|kochen|abnehmen|fit werden)/.test(core)) {
      return core.replace(/^wie kann ich (besser )?/, "tipps ");
    }
    if (/^was kannst du mir (zu|über|ueber|von)\s+(.+)\s+sagen/.test(core)) {
      return "was ist " + core.replace(/^was kannst du mir (zu|über|ueber|von)\s+/, "").replace(/\s+sagen\s*$/, "");
    }
    if (/^(hätte|haette) (gern|gerne) (info|infos) (zu|über|ueber|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^(hätte|haette) (gern|gerne) (info|infos) (zu|über|ueber|von)\s+/, "");
    }
    if (/^(.+),\s*was ist das\??$/.test(core)) {
      return "was ist " + core.replace(/^(.+),\s*was ist das\??$/, "$1");
    }
    if (/^was ist\s+(.+)\s+eigentlich\??$/.test(core)) {
      return "was ist " + core.replace(/^was ist\s+(.+)\s+eigentlich\??$/, "$1");
    }
    if (/^zeichne\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^zeichne\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/, "");
    }
    if (/^render\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^render\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/, "");
    }
    if (/^nur\s+(ein\s+)?(bild|pixel)\s+(von\s+)?/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^nur\s+(ein\s+)?(bild|pixel)\s+(von\s+)?/, "");
    }
    if (/^gib\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^gib\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/, "");
    }
    if (/^bitte\s+(ein\s+)?(bild\s+)?(von\s+)?/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^bitte\s+(ein\s+)?(bild\s+)?(von\s+)?/, "");
    }
    if (/^was\s+kannst\s+du\s+(über|ueber|zu|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^was\s+kannst\s+du\s+(über|ueber|zu|von)\s+/, "");
    }
    if (/^ich (will|moechte|möchte) wissen (was|wie|warum|wer|wann|wo)\s+/.test(core)) {
      return core.replace(/^ich (will|moechte|möchte) wissen /, "");
    }
    if (/^(ich )?hab(e)? (eine |ne )?frage (zu|ueber|über|wegen|zum|zur)\s+/.test(core)) {
      return "was ist " + core.replace(/^(ich )?hab(e)? (eine |ne )?frage (zu|ueber|über|wegen|zum|zur)\s+/, "");
    }
    if (/^was genau (ist|sind|war|waren)\s+/.test(core)) {
      return core.replace(/^was genau /, "was ");
    }
    if (/^wofuer (ist|sind)\s+/.test(core) || /^wofür (ist|sind)\s+/.test(core)) {
      return "was ist " + core.replace(/^wof(ue|ü)r (ist|sind)\s+/, "");
    }
    if (/^wieso\s+/.test(core)) {
      return "warum " + core.replace(/^wieso\s+/, "");
    }
    if (/^weshalb\s+/.test(core)) {
      return "warum " + core.replace(/^weshalb\s+/, "");
    }
    if (/^(weißt du|weisst du) (was|wie|wer)\s+/.test(core)) {
      return core.replace(/^(weißt du|weisst du) /, "");
    }
    if (/^kannst du mir (sagen|erzaehlen|erzählen) (was |etwas )?(ueber|über|zu|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^kannst du mir (sagen|erzaehlen|erzählen) (was |etwas )?(ueber|über|zu|von)\s+/, "");
    }
    if (/^nur mal (kurz|schnell) (erklaeren|erklären|sagen) (was |)(ueber|über|zu|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^nur mal (kurz|schnell) (erklaeren|erklären|sagen) (was |)?(ueber|über|zu|von)\s+/, "");
    }
    if (/^ich frag mich\s+/.test(core)) {
      return "was ist " + core.replace(/^ich frag mich\s+/, "");
    }
    if (/^mir ist (nicht )?klar (was|wie|warum)\s+/.test(core)) {
      return core.replace(/^mir ist (nicht )?klar /, "");
    }
    if (/^stell\s+(mir\s+)?(das\s+|etwas\s+)?(als\s+bild\s+)?dar\s+/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^stell\s+(mir\s+)?(das\s+|etwas\s+)?(als\s+bild\s+)?dar\s+/, "");
    }
    if (/^stell\s+(mir\s+).+\s+dar$/.test(core) && !/video|film|clip|animation/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^stell\s+(mir\s+)?/, "").replace(/\s+dar$/, "");
    }
    if (/^(video|film|clip|animation|motion)\s+(von|vom|mit|über|ueber)\s+/.test(core)) {
      return "erstelle ein video von " + core.replace(/^(video|film|clip|animation|motion)\s+(von|vom|mit|über|ueber)\s+/, "");
    }
    if (/^animier(e)?\s+(mir\s+)?/.test(core)) {
      return "erstelle ein video von " + core.replace(/^animier(e)?\s+(mir\s+)?/, "");
    }
    if (/^wie\s+(?!funktioniert|geht|ist|warum|viel|oft|lange)/.test(core)) {
      return "wie funktioniert " + core.replace(/^wie\s+/, "");
    }
    if (/^erklae?r\s+/.test(core)) {
      return "was ist " + core.replace(/^erklaer[e]?\s+/, "");
    }
    if (/^info\s+(zu|ueber|zum)\s+/.test(core)) {
      return "was ist " + core.replace(/^info\s+(zu|ueber|zum)\s+/, "");
    }
    if (/^thema\s+/.test(core)) {
      return "was ist " + core.replace(/^thema\s+/, "");
    }
    if (/^(bild|pixel)\s+(von|vom)\s+/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^(bild|pixel)\s+(von|vom)\s+/, "");
    }
    if (/^male\s+(ein\s+)?(bild\s+)?(von\s+)?/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^male\s+(ein\s+)?(bild\s+)?(von\s+)?/, "");
    }
    if (/^zeig\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^zeig\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/, "");
    }
    if (/^beschreib\s+/.test(core)) {
      return "was ist " + core.replace(/^beschreib\s+/, "");
    }
    if (/^(was weisst du|was weißt du|kennst du)\s+(ueber|über|zu|vom|von der|von dem|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^(was weisst du|was weißt du|kennst du)\s+(ueber|über|zu|vom|von der|von dem|von)\s+/, "");
    }
    if (/^hilf mir (bei|mit)\s+/.test(core)) {
      return "was ist " + core.replace(/^hilf mir (bei|mit)\s+/, "");
    }
    if (/^erzaehl mir (was|etwas) (ueber|über|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^erzaehl mir (was|etwas) (ueber|über|von)\s+/, "");
    }
    if (/^was bedeutet\s+/.test(core)) {
      return "was ist " + core.replace(/^was bedeutet\s+/, "");
    }
    if (/^definition\s+(von|fuer|für)\s+/.test(core)) {
      return "was ist " + core.replace(/^definition\s+(von|fuer|für)\s+/, "");
    }
    if (/^kurz\s+(zu|ueber|über|zum)\s+/.test(core)) {
      return "briefe mir " + core.replace(/^kurz\s+(zu|ueber|über|zum)\s+/, "");
    }
    if (/^recherchiere\s+(zu|ueber|über)\s+/.test(core)) {
      return "briefe mir " + core.replace(/^recherchiere\s+(zu|ueber|über)\s+/, "");
    }
    if (/^sag mir (was|etwas) (ueber|über|zu|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^sag mir (was|etwas) (ueber|über|zu|von)\s+/, "");
    }
    if (/^ich habe (eine )?frage (zu|ueber|über|wegen|zum)\s+/.test(core)) {
      return "was ist " + core.replace(/^ich habe (eine )?frage (zu|ueber|über|wegen|zum)\s+/, "");
    }
    if (/^(könntest|koenntest) du mir (erklären|erklaeren) (was|etwas) (ueber|über|zu|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^(könntest|koenntest) du mir (erklären|erklaeren) (was|etwas) (ueber|über|zu|von)\s+/, "");
    }
    if (/^was (hältst|haeltst|denkst) du (von|über|ueber)\s+/.test(core)) {
      return "was ist " + core.replace(/^was (hältst|haeltst|denkst) du (von|über|ueber)\s+/, "");
    }
    if (/^kannst du mir (zu|über|ueber) .+ erklären/.test(core) || /^kannst du mir (zu|über|ueber) .+ erklaeren/.test(core)) {
      return "was ist " + core.replace(/^kannst du mir (zu|über|ueber)\s+/, "").replace(/\s+erklaeren$|\s+erklären$/, "");
    }
    if (/^kannst du mir (bei|zu|über|ueber)\s+/.test(core)) {
      return "was ist " + core.replace(/^kannst du mir (bei|zu|über|ueber)\s+/, "");
    }
    if (/^stell mir (eine )?frage (zu|über|ueber)\s+/.test(core)) {
      return "was ist " + core.replace(/^stell mir (eine )?frage (zu|über|ueber)\s+/, "");
    }
    if (/^vergleiche?\s+/.test(core)) {
      return core.replace(/^vergleiche?\s+/, "vergleich ");
    }
    if (/^(ich will|ich moechte|ich möchte)\s+(ein\s+)?(video|film|clip|animation)\s+(von\s+)?/.test(core)) {
      return "erstelle ein video von " + core.replace(/^(ich will|ich moechte|ich möchte)\s+(ein\s+)?(video|film|clip|animation)\s+(von\s+)?/, "");
    }
    if (/^(kannst du|koenntest du|bitte)\s+(mir\s+)?(ein\s+)?(video|film|clip|animation)\s+(von\s+)?/.test(core)) {
      return "erstelle ein video von " + core.replace(/^(kannst du|koenntest du|bitte)\s+(mir\s+)?(ein\s+)?(video|film|clip|animation)\s+(von\s+)?/, "");
    }
    if (/^generier(e)?\s+(mir\s+)?(ein\s+)?(video|film|clip|animation)\s+(von\s+)?/.test(core)) {
      return "erstelle ein video von " + core.replace(/^generier(e)?\s+(mir\s+)?(ein\s+)?(video|film|clip|animation)\s+(von\s+)?/, "");
    }
    if (/^mach\s+(mir\s+)?(ein\s+)?(video|film|clip|animation)\s+(von\s+)?/.test(core)) {
      return "erstelle ein video von " + core.replace(/^mach\s+(mir\s+)?(ein\s+)?(video|film|clip|animation)\s+(von\s+)?/, "");
    }
    if (/^erstelle\s+(mir\s+)?(ein\s+)?(video|film|clip|animation)\s+(von\s+)?/.test(core)) {
      return "erstelle ein video von " + core.replace(/^erstelle\s+(mir\s+)?(ein\s+)?(video|film|clip|animation)\s+(von\s+)?/, "");
    }
    if (/^(ich will|ich moechte|ich möchte)\s+(ein\s+)?(bild\s+)?(von\s+)?/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^(ich will|ich moechte|ich möchte)\s+(ein\s+)?(bild\s+)?(von\s+)?/, "");
    }
    if (/^(kannst du|koenntest du|bitte)\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^(kannst du|koenntest du|bitte)\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/, "");
    }
    if (/^generier(e)?\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^generier(e)?\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/, "");
    }
    if (/^mach\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^mach\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/, "");
    }
    if (/^erstelle\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/.test(core) && !/erstelle ein bild von/.test(core)) {
      return "erstelle ein bild von " + core.replace(/^erstelle\s+(mir\s+)?(ein\s+)?(bild\s+)?(von\s+)?/, "");
    }
    if (/^chat\s*(verlauf|summary|zusammen)/.test(core)) {
      return "was habe ich geschrieben";
    }
    if (/^(ich )?checks?( nicht| nich) (was|wie|warum)\s+/.test(core)) {
      return core.replace(/^(ich )?checks?( nicht| nich) /, "was ist ").replace(/\s+ist$/, "");
    }
    if (/^(ich )?versteh(e)?( nicht| nich) (was|wie|warum)\s+/.test(core)) {
      return core.replace(/^(ich )?versteh(e)?( nicht| nich) /, "was ist ").replace(/\s+ist$/, "");
    }
    if (/^keine ahnung (was|wie|warum)\s+/.test(core)) {
      return core.replace(/^keine ahnung /, "was ist ").replace(/\s+ist$/, "");
    }
    if (/^was soll (.+) (sein|bedeuten|heissen)\??$/.test(core)) {
      return "was ist " + core.replace(/^was soll (.+) (sein|bedeuten|heissen)\??$/, "$1");
    }
    if (/^was meint man mit\s+/.test(core)) {
      return "was ist " + core.replace(/^was meint man mit\s+/, "");
    }
    if (/^(wie|was) nennt man\s+/.test(core)) {
      return "was ist " + core.replace(/^(wie|was) nennt man\s+/, "");
    }
    if (/^(gibt es|gibts) (infos?|informationen) (zu|über|ueber|zum|zur|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^(gibt es|gibts) (infos?|informationen) (zu|über|ueber|zum|zur|von)\s+/, "");
    }
    if (/^brauch(e)? (infos?|informationen|hilfe) (zu|bei|über|ueber|zum|zur|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^brauch(e)? (infos?|informationen|hilfe) (zu|bei|über|ueber|zum|zur|von)\s+/, "");
    }
    if (/^interessiert mich (was |das thema |)(.+)$/.test(core)) {
      return "was ist " + core.replace(/^interessiert mich (was |das thema |)/, "");
    }
    if (/^(hätte|haette) (interesse|lust) (an|auf|zu|bei)\s+/.test(core)) {
      return "was ist " + core.replace(/^(hätte|haette) (interesse|lust) (an|auf|zu|bei)\s+/, "");
    }
    if (/^was ist der unterschied zwischen\s+/.test(core) || /^unterschied zwischen\s+/.test(core)) {
      return core.replace(/^was ist der unterschied zwischen\s+/, "vergleich ").replace(/^unterschied zwischen\s+/, "vergleich ");
    }
    if (/^kann mir jemand (sagen|erklären|erklaeren) (was )?(über|ueber|zu|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^kann mir jemand (sagen|erklären|erklaeren) (was )?(über|ueber|zu|von)\s+/, "");
    }
    if (/^was weiss man (über|ueber|zu|von)\s+/.test(core) || /^was weiß man (über|ueber|zu|von)\s+/.test(core)) {
      return "was ist " + core.replace(/^was weiss man (über|ueber|zu|von)\s+/, "").replace(/^was weiß man (über|ueber|zu|von)\s+/, "");
    }
    if (/^wie würde man\s+(.+)\s+(erklären|erklaeren|beschreiben)/.test(core)) {
      return "was ist " + core.replace(/^wie würde man\s+/, "").replace(/\s+(erklären|erklaeren|beschreiben)$/, "");
    }
    if (/^(mein|der)\s+plan/.test(core)) {
      return "welchen plan habe ich";
    }
    if (/^was (mach|mache) ich (wenn|bei|nach|beim|im|in der)\s+/.test(core)) {
      return "was ist " + core.replace(/^was (mach|mache) ich (wenn|bei|nach|beim|im|in der)\s+/, "");
    }
    if (/^was (muss|soll) ich (bei|beim|nach|im|in der)\s+/.test(core)) {
      return "tipps " + core.replace(/^was (muss|soll) ich /, "");
    }
    if (/^ist (.+) (schlimm|schädlich|schaedlich|gefährlich|gefaehrlich|normal)\??$/.test(core)) {
      return "was ist " + core.replace(/^ist (.+) (schlimm|schädlich|schaedlich|gefährlich|gefaehrlich|normal)\??$/, "$1");
    }
    if (/^wie sieht (.+) (aus|so aus)\??$/.test(core)) {
      return "was ist " + core.replace(/^wie sieht (.+) (aus|so aus)\??$/, "$1");
    }
    if (/^(ich )?brauch(e)? (hilfe|tipps) (bei|für|fuer|zum|zur)\s+/.test(core)) {
      return "tipps " + core.replace(/^(ich )?brauch(e)? (hilfe|tipps) (bei|für|fuer|zum|zur)\s+/, "");
    }
    if (/^was passiert (bei|wenn|nach)\s+/.test(core)) {
      return "was ist " + core.replace(/^was passiert (bei|wenn|nach)\s+/, "");
    }
    if (/^(was kostet|wie viel kostet|wie lange dauert)\s+/.test(core)) {
      return "was ist " + core.replace(/^(was kostet|wie viel kostet|wie lange dauert)\s+/, "");
    }
    if (/^(darf man|darf ich)\s+/.test(core)) {
      return "was ist " + core.replace(/^(darf man|darf ich)\s+/, "");
    }
    if (/^ist (das |es )?(.+) erlaubt\??$/.test(core)) {
      return "was ist " + core.replace(/^ist (?:das |es )?(.+) erlaubt\??$/, "$1");
    }
    if (/^stimmt das (das )?/.test(core)) {
      return "was ist " + core.replace(/^stimmt das (?:das )?/, "");
    }
    if (/^geht das (noch |)(.+)\??$/.test(core)) {
      return "was ist " + core.replace(/^geht das (?:noch )?/, "").replace(/\??$/, "");
    }
    if (/^(was|wie|wer|wann|wo|warum)\s/.test(core)) {
      return fixed;
    }
    if (/^(erstelle|zeichne|male|mach|zeig|generier|animier|stell|gib|render|video|film|bild|pixel|motion|agent|inside|summary|brief|hilfe|help)\b/.test(core)) {
      return fixed;
    }
    if (words.length >= 2 && words.length <= 8 && !/^(hallo|danke|hi|hey|moin|servus|ok|okay|ja|nein|cool|nice|bitte|super|danke)$/.test(words[0])) {
      return "was ist " + core;
    }
    if (words.length === 1 && words[0].length >= 3 && !/^(hallo|danke|hi|hey|moin|servus|ok|okay|ja|nein|cool|nice|bitte|super|ey|yo|hm|na)$/.test(words[0])) {
      return "was ist " + core;
    }
    return fixed;
  }

  function prepareUserMessage(input) {
    return interpretCasualQuery(String(input || "").trim());
  }

  function expandQuery(input) {
    var norm = stripQuestionNoise(fixCommonTypos(input));
    var aliases = [
      ["pixel", "noco render pixel studio bild generieren"],
      ["bild", "noco render erstelle bild"],
      ["male", "erstelle bild noco render"],
      ["mach ein bild", "erstelle ein bild von"],
      ["mach bild", "erstelle ein bild von"],
      ["zeichne", "erstelle bild pixel"],
      ["exclusive lohnt", "noco exclusive premium"],
      ["lohnt sich", "noco exclusive vorteile"],
      ["chat verlauf", "was habe ich geschrieben noco echo"],
      ["mein plan", "welchen plan habe ich noco access"],
      ["welches modell", "noco modell namen flux prism spark"],
      ["zusammenfass", "chat zusammenfassung noco echo"],
      ["recap", "chat zusammenfassung verlauf"],
      ["blur", "noco sheen blur reveal"],
      ["galerie", "noco render galerie"],
      ["neue funktion", "noco ai features flagship"],
      ["gedaechtnis", "noco echo chat gedaechtnis"],
      ["erinnerung", "noco echo was geschrieben"],
      ["pixel pro", "noco render pixel studio"],
      ["wissensbank", "noco vault"],
      ["mindbank", "noco vault"],
      ["priority", "noco rush"],
      ["schnell", "noco rush speed"],
      ["plan leiste", "noco access"],
      ["keyword", "noco lens"],
      ["keywords", "noco lens blaue begriffe"],
      ["prism", "noco prism modell free"],
      ["flux", "noco flux exclusive modell"],
      ["spark", "noco spark modell free"],
      ["was kann ich", "was kann ich fragen themen"],
      ["was geht", "was kann noco ai hub"],
      ["uebersicht", "noco hub funktionen"],
      ["cool", "neue funktionen flagship"],
      ["prog", "programmierung code"],
      ["coding", "programmierung"],
      ["noco", "noco os noco ai"],
      ["chatgpt", "openai vergleich ki"],
      ["gpt", "chatgpt openai"],
      ["krypto", "blockchain bitcoin"],
      ["btc", "blockchain bitcoin"],
      ["fake news", "desinformation medien"],
      ["impfung", "vaccine immun impfung"],
      ["quanten", "quantenphysik quantencomputer"],
      ["nachhaltig", "umweltschutz plastik nachhaltigkeit"],
      ["klima", "klimawandel erneuerbare energie"],
      ["multi chat", "mehrere chats"],
      ["regenerier", "neu generieren"],
      ["vr", "vr und ar virtual reality"],
      ["ar", "vr und ar"],
      ["wifi", "wlan internet"],
      ["wlan", "wlan internet"],
      ["menschenrecht", "menschenrechte"],
      ["menschenrechte", "menschenrechte universal"],
      ["genetik", "genetik dna"],
      ["dna", "genetik dna molekuel"],
      ["vulkan", "vulkan natur"],
      ["robot", "roboter ki"],
      ["roboter", "roboter automatisierung"],
      ["open source", "open source software"],
      ["datenschutz", "privatsphaere datenschutz"],
      ["tos", "nutzungsbedingungen"],
      ["agb", "nutzungsbedingungen tos"],
      ["sparks", "noco sparks schnellfragen"],
      ["schnellfrage", "noco sparks"],
      ["zufall", "random spark frage"],
      ["random", "zufalls frage vault"],
      ["giraffe", "giraffe zebra safari"],
      ["zebra", "giraffe zebra"],
      ["dino", "dinosaurier urzeit"],
      ["dinosaurier", "dinosaurier t-rex"],
      ["motive", "welche bilder render motive"],
      ["bilder", "welche bilder render motive"],
      ["rendern", "noco render welche bilder"],
      ["mathe", "mathematik rechnen"],
      ["geo", "geographie kontinente"],
      ["python", "python programmierung"],
      ["html", "html css webseite"],
      ["css", "html css frontend"],
      ["musik", "musik instrumente"],
      ["ozean", "ozean meeresbiologie"],
      ["feuerwerk", "feuerwerk silvester"],
      ["hubsi", "hubschrauber helicopter"],
      ["hubschrauber", "helicopter flug"],
      ["koala", "koala australien"],
      ["panda", "panda bambus"],
      ["einhorn", "unicorn pony"],
      ["drache", "dragon feuer"],
      ["feuer", "feuer flamme"],
      ["stern", "stern galaxie"],
      ["mond", "mond nacht"],
      ["sonne", "sonne solar"],
      ["regen", "regen wetter"],
      ["schnee", "schnee winter"],
      ["berg", "berg mountain"],
      ["meer", "meer ocean welle"],
      ["fussball", "fussball sport wm"],
      ["sport", "sport training fitness"],
      ["hacker", "cybersecurity phishing"],
      ["passwort", "cybersecurity passwort sicher"],
      ["smartphone", "handy android ios"],
      ["handy", "smartphone apps"],
      ["instagram", "social media tiktok"],
      ["tiktok", "social media influencer"],
      ["einhorn", "unicorn fantasy maerchen"],
      ["minecraft", "gaming videospiel"],
      ["burnout", "stress arbeit ueberlastung"],
      ["einstein", "relativitaet e=mc2"],
      ["griechenland", "antike griechenland athen"],
      ["rom", "roemisches reich caesar"],
      ["eu", "europa union euro"],
      ["muell", "muelltrennung recycling"],
      ["recycling", "muelltrennung nachhaltigkeit"],
      ["garten", "gaertnern pflanzen pflegen"],
      ["wandern", "bergsteigen outdoor camping"],
      ["solar", "solarenergie photovoltaik"],
      ["windrad", "windkraft windenergie"],
      ["drohne", "drone quadcopter"],
      ["3d druck", "3d printing maker"],
      ["algorithmus", "algorithmen informatik"],
      ["javascript", "js web entwicklung"],
      ["js", "javascript programmierung"],
      ["podcast", "hoerbuch hoeren lernen"],
      ["zeichnen", "skizze malen tipps"],
      ["superheld", "marvel batman spiderman"],
      ["ml", "maschinelles lernen deep learning"],
      ["ki ethik", "maschinelles lernen ethik"],
      ["periodensystem", "chemische elemente chemie"],
      ["element", "periodensystem chemie"],
      ["insekt", "insekten biene ameise"],
      ["ameise", "insekten ameise"],
      ["bundesland", "deutschland bundeslaender"],
      ["berlin", "deutschland bundeslaender hauptstadt"],
      ["pomodoro", "zeitmanagement produktivitaet"],
      ["produktiv", "zeitmanagement fokus arbeit"],
      ["fantasy", "einhorn maerchen"],
      ["comic", "superheld marvel"],
      ["nasa", "weltraum raumfahrt iss"],
      ["spacex", "weltraum raumfahrt"],
      ["t-rex", "dinosaurier t-rex"],
      ["trex", "dinosaurier t-rex"],
      ["faultier", "koala exotische tiere"],
      ["lama", "koala lama tier"],
      ["panda", "koala panda bambus"],
      ["wolf", "tier wildlife"],
      ["adler", "vogel adler"],
      ["hai", "wal ozean hai"],
      ["wal", "wal ozean delfin"],
      ["rakete", "weltraum rakete space"],
      ["robot", "roboter ki"],
      ["cyber", "cyberpunk glitch hacker"],
      ["neon", "cyberpunk neon stadt"],
      ["wikinger", "wikinger viking langschiff"],
      ["schach", "schach chess spiel"],
      ["olympia", "olympische spiele olympics"],
      ["112", "notruf 112 erste hilfe"],
      ["erste hilfe", "notfall reanimation"],
      ["wolken", "wolken wetter bewoelkung"],
      ["mondphase", "mondphasen vollmond"],
      ["sternbild", "sternbilder orion"],
      ["esports", "gaming wettkampf twitch"],
      ["rhetorik", "praesentation vortrag"],
      ["bundestag", "politik deutschland wahl"],
      ["studium", "ausbildung uni berufswahl"],
      ["waermepumpe", "energie sparen heizung"],
      ["ritter", "mittelalter ritter burg"],
      ["mozart", "klassische musik beethoven bach"],
      ["jazz", "blues soul musik"],
      ["kpop", "k-pop koreanische musik"],
      ["nationalpark", "yellowstone serengeti welterbe"],
      ["grand canyon", "niagara canyon wasserfall"],
      ["venedig", "paris london new york reise"],
      ["imkerei", "honig biene bienenstock"],
      ["aquarium", "terrarium hamster haustier"],
      ["jahreszeit", "fruehling sommer herbst winter"],
      ["tsunami", "hurrikan orkan naturkatastrophe"],
      ["cpu", "gpu prozessor grafikkarte"],
      ["email", "spam phishing mail"],
      ["qr", "qr code barcode nfc"],
      ["formel 1", "f1 rennwagen motorsport"],
      ["handball", "basketball volleyball teamsport"],
      ["uno", "vereinte nationen rotes kreuz ngos"],
      ["schreiben", "kreatives schreiben roman fantasy"],
      ["1100", "noco render motive anzahl"],
      ["motiv", "welche bilder render motive"],
      ["anime", "anime manga japan"], ["manga", "anime manga"], ["pokemon", "pokemon pikachu"],
      ["pikachu", "pokemon pikachu"], ["vpn", "vpn tor browser"], ["git", "git github version"],
      ["docker", "docker kubernetes devops"], ["ux", "ux ui design usability"],
      ["abi", "abitur pruefung"], ["abitur", "abi pruefungsvorbereitung"],
      ["dsgvo", "gdpr datenschutz eu"], ["halloween", "halloween karneval oktoberfest"],
      ["vegan", "veganismus pflanzlich"], ["meme", "meme viral internet"],
      ["tokio", "tokio japan kultur"], ["alpen", "alpen schwarzwald berg"],
      ["rhein", "rhein donau fluss"], ["nobel", "nobelpreis wissenschaft"],
      ["adhs", "adhs legasthenie dyskalkulie"], ["smart home", "iot alexa"],
      ["wasserstoff", "h2 brennstoffzelle energie"], ["exoplanet", "aliens seti fermi"],
      ["machu picchu", "weltwunder stonehenge taj mahal"], ["karate", "judo kampfsport"],
      ["prokrastination", "aufschieben motivation"], ["zahnpflege", "zahnarzt karies"],
      ["1350", "noco render motive anzahl"], ["1600", "noco render motive anzahl"],
      ["balkonkraftwerk", "e auto elektromobilitaet"],
      ["typescript", "ts javascript typen"], ["arduino", "raspberry pi maker"],
      ["deepfake", "ki bild fake manipulation"], ["kernfusion", "fusion iter energie"],
      ["cern", "teilchenbeschleuniger higgs"], ["triathlon", "ironman ausdauer"],
      ["pilates", "tai chi qigong"], ["homeoffice", "remote work fernarbeit"],
      ["freelancer", "selbststaendig gruender"], ["etf", "aktien investieren sparen"],
      ["mietrecht", "mietvertrag wohnung"], ["grundgesetz", "verfassung artikel 1"],
      ["nato", "verteidigungsbuendnis bundeswehr"], ["hitzewelle", "hitze duerre klima"],
      ["waldbrand", "buschfeuer feuer wald"], ["mikroplastik", "plastik fast fashion"],
      ["minimalismus", "declutter weniger besitzen"], ["van life", "campingbus backpacking"],
      ["cybermobbing", "mobbing online haten"], ["enkeltrick", "betrug senioren scam"],
      ["antibiotika", "resistenz erkaeltung grippe"], ["placebo", "nocebo doppelblind"],
      ["faktencheck", "quellen pruefen medienkompetenz"], ["stoizismus", "stoiker philosophie"],
      ["bauhaus", "typografie design"], ["street art", "graffiti banksy"],
      ["zeitzonen", "utc sommerzeit"],       ["prompt engineering", "prompts ki schreiben"],
      ["rust", "rust programmierung systems"], ["sql", "mysql postgresql datenbank"],
      ["mongodb", "nosql document database"], ["rest api", "http api schnittstelle"],
      ["golang", "go programmierung google"], ["kotlin", "android app entwicklung"],
      ["swift", "ios swiftui apple"], ["kubernetes", "k8s docker container"],
      ["hydroponik", "urban farming pflanzen"], ["permakultur", "nachhaltiger garten"],
      ["kompost", "biomuell humus"], ["korallenbleiche", "korallen riff sterben"],
      ["antarktis", "suedpol pinguin eis"], ["skandinavien", "schweden norwegen hygge"],
      ["afrika", "sahara savanne kontinent"], ["suedamerika", "amazonas brasilien anden"],
      ["australien", "outback koala kontinent"], ["mauerfall", "wiedervereinigung ddr brd"],
      ["kalter krieg", "ost west konflikt nato"], ["industrialisierung", "fabrik dampfmaschine"],
      ["franzoesische revolution", "bastille 1789"], ["nanotechnologie", "nano material"],
      ["bionik", "biomimikry natur technik"], ["graphen", "graphene kohlenstoff"],
      ["autismus", "neurodiversitaet spektrum"], ["depression", "mentale gesundheit"],
      ["angststoerung", "panikattacke phobie"], ["elektroschrott", "e-waste recycling"],
      ["schweiz", "oesterreich alpen nachbar"], ["crispr", "gen editing genetik"],
      ["1850", "noco render motive anzahl"], ["2100", "noco render motive anzahl"],
      ["php", "wordpress laravel web"], ["c++", "cpp programmierung"],
      ["c#", "csharp dotnet unity"], ["agile", "scrum kanban sprint"],
      ["figma", "ui ux design prototyping"], ["tiktok", "reels shorts video"],
      ["whatsapp", "telegram signal messenger"], ["discord", "community chat gaming"],
      ["influencer", "youtuber creator economy"], ["ebook", "kindle hoerbuch audiobook"],
      ["gutenberg", "buchdruck druckerpresse"], ["byzanz", "byzantinisches reich konstantinopel"],
      ["osmanisch", "ottoman sultan istanbul"], ["china", "dynastie seidenstrasse"],
      ["usa", "amerika unabhaengigkeit"], ["kanada", "canada ahorn eishockey"],
      ["mexiko", "maya azteken taco"], ["nasa", "esa weltraumagentur"],
      ["artemis", "mondmission apollo"], ["lithium", "ionen akku batterie"],
      ["geothermie", "erdwaerme energie"], ["biogas", "biomasse methan"],
      ["carbon capture", "ccs co2 speicherung"], ["aufforstung", "reforestation waldschutz"],
      ["luftqualitaet", "feinstaub pm2.5 smog"], ["bienensterben", "insektensterben bestaeuber"],
      ["regex", "regulaere ausdruecke pattern"], ["lua", "roblox scripting"],
      ["gezeitenenergie", "tidal wellenenergie"], ["elektrolyse", "gruener wasserstoff"],
      ["3600", "noco render motive anzahl"],
      ["vue", "vuejs frontend framework"], ["angular", "google angular typescript"],
      ["flutter", "dart cross platform"], ["tailwind", "tailwindcss utility"],
      ["graphql", "graph ql query api"], ["oauth", "jwt token login"],
      ["aws", "amazon web services cloud"], ["azure", "microsoft cloud"],
      ["terraform", "infrastructure as code"], ["ci cd", "github actions jenkins"],
      ["serverless", "lambda faas"], ["microservices", "verteilte architektur"],
      ["saas", "software as a service"], ["websocket", "realtime live chat"],
      ["vite", "frontend bundler build"], ["npm", "yarn pnpm package"],
      ["seo", "suchmaschinenoptimierung ranking"], ["cms", "wordpress content management"],
      ["copywriting", "werbetext marketing"], ["diabetes", "blutzucker insulin"],
      ["allergie", "heuschnupfen pollen"], ["gluten", "zoeliakie celiac"],
      ["physiotherapie", "ergotherapie rehab"], ["long covid", "post covid langzeit"],
      ["elternzeit", "mutterschutz elterngeld"], ["kita", "kindergarten hort"],
      ["bundesrat", "laenderkammer gesetze"], ["bundesverfassungsgericht", "verfassungsgericht karlsruhe"],
      ["demografie", "bevoelkerung alterung"],       ["migration", "integration einwanderung"],
      ["linux", "ubuntu open source betriebssystem"],
      ["windows", "windows 11 microsoft"],
      ["mac", "macos apple betriebssystem"],
      ["react native", "mobile app javascript"],
      ["svelte", "sveltekit frontend"],
      ["laravel", "php framework web"],
      ["spring", "spring boot java backend"],
      ["deno", "bun javascript runtime node"],
      ["bluetooth", "nfc funk kopfhoerer"],
      ["5g", "mobilfunk lte netz"],
      ["starlink", "satelliten internet musk"],
      ["rag", "retrieval augmented generation ki"],
      ["halluzination", "ki erfindet fakten llm"],
      ["inflation", "teuerung preise geld"],
      ["aktien", "boerse etf fonds"],
      ["bafoeg", "studienfinanzierung student"],
      ["blender", "3d modellierung animation"],
      ["streaming", "netflix spotify video"],
      ["meme", "internetkultur humor"],
      ["erdbeben", "seismologie platten"],
      ["tornado", "hurrikan sturm wetter"],
      ["atomkraft", "kernkraft akw energie"],
      ["schengen", "eu grenzen reisen"],
      ["uno", "vereinte nationen frieden"],
      ["who", "weltgesundheit pandemie"],
      ["einstein", "relativitaetstheorie physik"],
      ["immunsystem", "impfung abwehr medizin"],
      ["pflege", "krankenpflege altenpflege"],
      ["gewerkschaft", "tarifvertrag streik"],
      ["barrierefreiheit", "accessibility wcag ux"],
      ["fotografie", "kamera bild komposition"],
      ["journalismus", "pressefreiheit reporter"],
      ["artensterben", "biodiversitaet oekologie"],
      ["ozon", "ozonloch uv schutz"],
      ["paralympics", "inklusion sport"],
      ["speedrun", "gaming twitch rekord"],
      ["brief", "noco brief recherche"],
      ["glow", "noco glow intent"],
      ["vergleich", "unterschied versus vs"],
      ["3600", "noco render motive anzahl"],
      ["nextjs", "next.js react framework"], ["nuxt", "nuxt.js vue"],
      ["prisma", "orm datenbank"], ["supabase", "postgres backend"],
      ["firebase", "firestore auth"], ["redis", "cache datenbank"],
      ["kafka", "event stream"], ["ransomware", "malware erpressung"],
      ["web3", "blockchain dezentral"], ["nft", "token digital"],
      ["metaverse", "vr welt"], ["copilot", "ki code github"],
      ["midjourney", "ki bildgenerator"], ["waermepumpe", "heizung energie"],
      ["emobilitaet", "elektroauto ev"], ["ai act", "eu ki verordnung"],
      ["pomodoro", "lernen fokus"], ["mindmap", "gedankenlandkarte"],
      ["adhs", "aufmerksamkeit"], ["telemedizin", "online arzt"],
      ["3600", "noco render motive anzahl"],
      ["openai", "chatgpt firma gpt"], ["claude", "anthropic ki"],
      ["gemini", "google bard ki"], ["llama", "meta open model"],
      ["mistral", "mixtral eu ki"], ["stable diffusion", "sd bild ki"],
      ["embedding", "vektor semantic search"], ["vektordb", "pinecone weaviate"],
      ["finetuning", "lora llm train"], ["token", "kontextfenster limit"],
      ["halbleiter", "chip silizium"], ["chipkrise", "halbleiter engpass"],
      ["buddhismus", "meditation achtsamkeit"], ["hinduismus", "karma dharma"],
      ["islam", "koran religion"], ["christentum", "bibel jesus"],
      ["judentum", "tora synagoge"], ["taichi", "qigong bewegung"],
      ["erasmus", "auslandssemester eu"], ["duolingo", "sprache lernen"],
      ["buergergeld", "grundsicherung hartz"], ["wohngeld", "miete hilfe"],
      ["zinseszins", "sparplan vermoegen"], ["defi", "decentralized finance"],
      ["shopify", "online shop"], ["dropship", "ohne lager"],
      ["esg", "nachhaltig investieren"], ["co2 digital", "streaming umwelt"],
      ["passiveinkommen", "dividenden miete"], ["rente", "altersvorsorge riester"],
      ["mietpreisbremse", "mietendeckel"], ["solidstate", "festkoerper akku"],
      ["perowskit", "solarzelle neu"], ["verticalfarm", "indoor farm"],
      ["rewilding", "wiederwildung natur"], ["mycelium", "pilz verpackung"],
      ["neuromorphic", "brain chip ki"], ["pqc", "post quantum crypto"],
      ["socialengineering", "phishing psychologie"], ["osint", "recherche quellen"],
      ["zettelkasten", "second brain notizen"], ["notion", "workspace notes"],
      ["obsidian", "markdown pkm"], ["gtd", "getting things done"],
      ["eisenhower", "dringend wichtig matrix"], ["latex", "wissenschaft satz"],
      ["plagiat", "zitieren quellen"], ["apa", "zitierstil"],
      ["philosophie", "ethik moral sinn des lebens"],
      ["psychologie", "gehirn emotion stress angst"],
      ["liebe", "beziehung partnerschaft freundschaft"],
      ["freundschaft", "soziale beziehung freunde"],
      ["karriere", "arbeit bewerbung job beruf"],
      ["arbeit", "karriere beruf bewerbung"],
      ["studium", "uni universitaet bildung"],
      ["universum", "astronomie galaxie schwarzes loch"],
      ["ernaehrung", "essen gesund diaet vegan"],
      ["reisen", "urlaub tourismus fernweh"],
      ["finanzen", "geld sparen investieren budget"],
      ["glueck", "zufriedenheit wohlbefinden"],
      ["wetter", "wettervorhersage regen sonne klima"],
      ["kunst", "kultur literatur museum"],
      ["literatur", "buecher schreiben lesen"],
      ["motion", "noco motion video erstellen"],
      ["locomotion", "noco motion pseudo video"],
      ["localotion", "noco motion"],
      ["video", "erstelle video noco motion"],
      ["agent", "noco agent auftrag automatisierung"],
      ["inside", "noco inside analyse kernpunkte"],
      ["summary", "noco summary stichpunkte"],
      ["erklaer", "was ist erklaer mir"],
      ["erklaere", "was ist erklaer mir"],
      ["alltag", "allgemeine frage thema"],
      ["frage", "was kann ich dich fragen"],
      ["yoga", "meditation achtsamkeit entspannung"],
      ["fitness", "training sport muskelaufbau"],
      ["auto", "verkehr fahrzeug e-auto"],
      ["politik", "demokratie wahl bundestag"],
      ["religion", "glaube christentum islam"],
      ["wohnen", "miete wohnung eigenheim"],
      ["haustier", "hund katze tier"],
      ["erkaeltung", "husten schnupfen grippaler"],
      ["nachhaltigkeit", "umwelt muelltrennung plastik"],
      ["mode", "fashion kleidung stil"],
      ["natur", "wald outdoor camping"],
      ["zeitmanagement", "produktivitaet pomodoro"],
      ["wieso", "warum"],
      ["weshalb", "warum"],
      ["wofuer", "was ist"],
      ["wofür", "was ist"],
      ["kochen", "rezepte kueche essen"],
      ["hobby", "freizeit zeitvertreib"],
      ["eltern", "kinder erziehung familie"],
      ["streaming", "netflix youtube spotify"],
      ["konflikt", "streit kommunikation"],
      ["traum", "traeume schlaf albtraum"],
      ["einkaufen", "supermarkt budget sparen"],
      ["sommer", "urlaub hitze freizeit"],
      ["what is", "was ist"],
      ["how does", "wie funktioniert"],
      ["tell me about", "was ist"],
      ["explain", "was ist erklaer"],
      ["umzug", "wohnungswechsel mietwohnung"],
      ["scheidung", "trennung ehe"],
      ["heirat", "hochzeit standesamt"],
      ["stromausfall", "blackout kein strom"],
      ["putzen", "haushalt reinigen"],
      ["versicherung", "haftpflicht kfz"],
      ["flughafen", "fliegen reise flugzeug"],
      ["trinkgeld", "restaurant service"],
      ["deutschlandticket", "oepnv monatskarte bahn"],
      ["dticket", "deutschland ticket"],
      ["tattoo", "taetowierung piercing"],
      ["brille", "sehstaerke kontaktlinsen"],
      ["grippe", "influenza erkaeltung"],
      ["stalking", "cyberstalking belaestigung"],
      ["nachbarn", "nachbarschaft"],
      ["zeitumstellung", "sommerzeit winterzeit"],
      ["lohnsteuer", "steuerklasse netto brutto"],
      ["kita", "kindergarten hort betreuung"],
      ["lotto", "gluecksspiel casino"],
      ["horoskop", "astrologie sternzeichen"],
      ["impfpass", "impfungen impfausweis"],
      ["stromsparen", "energie sparen haushalt"],
      ["wassersparen", "trinkwasser sparen"],
      ["hausaufgaben", "schulaufgaben lernen"],
      ["checks nicht", "was ist verstehe nicht"],
      ["keine ahnung", "was ist"],
      ["was meint man", "was ist bedeutung"],
      ["mietkaution", "kaution wohnung"],
      ["nebenkosten", "betriebskosten heizkosten"],
      ["schimmel", "feuchtigkeit wohnung"],
      ["kuendigung", "arbeitsvertrag job"],
      ["lebenslauf", "cv bewerbung"],
      ["gehaltsverhandlung", "lohn verhandeln"],
      ["homoeopathie", "globuli alternative medizin"],
      ["keto", "ketogene diaet low carb"],
      ["fasten", "intervallfasten 16 8"],
      ["sperrmuell", "muell entsorgung"],
      ["geschenke", "geschenkideen schenken"],
      ["selbstvertrauen", "selbstbewusstsein"],
      ["perfektionismus", "perfekt sein"],
      ["weihnachten", "advent geschenke"],
      ["silvester", "neujahr feuerwerk"],
      ["handwerker", "renovierung reparatur"],
      ["mahnung", "inkasso schulden"],
      ["gehoert von", "was ist"],
      ["kurze frage", "was ist"],
      ["pfand", "pfandflasche mehrweg"],
      ["mieterhoehung", "miete erhoehen"],
      ["schufa", "bonitaet auskunft"],
      ["dispo", "ueberziehungskredit"],
      ["baufinanzierung", "hypothek immobilie"],
      ["pflegegrad", "pflegeversicherung"],
      ["visum", "aufenthaltstitel einreise"],
      ["buergeramt", "meldeamt anmeldung"],
      ["minijob", "450 euro job"],
      ["werkstudent", "student nebenjob"],
      ["winterreifen", "reifen wechseln"],
      ["flensburg", "punkte verkehr"],
      ["mietschulden", "miete nicht bezahlt"],
      ["kannste", "kannst du erklaer"],
      ["hast du ahnung", "was ist"],
      ["und zwar", "was ist"],
      ["widerruf", "widerrufsrecht online"],
      ["kindergeld", "familienkasse eltern"],
      ["krankmeldung", "krankschreibung au"],
      ["steuererklaerung", "elster steuer"],
      ["zecken", "zeckenbiss borreliose"],
      ["alg1", "arbeitslosengeld"],
      ["such infos", "was ist"],
      ["wuerde gern wissen", "was ist"],
      ["eli5", "was ist einfach"],
      ["fuer anfaenger", "was ist"],
      ["2fa", "zwei faktor authentifizierung"],
      ["glasfaser", "internet zuhause dsl"],
      ["notgroschen", "finanzielle reserve"],
      ["pruefungsangst", "pruefungsstress"],
      ["einsamkeit", "allein sein"],
      ["kleinanzeigen", "second hand vinted"],
      ["rueckenschmerz", "ruecken nacken schmerz"],
      ["schnarchen", "schlafapnoe"],
      ["schlaganfall", "fast test stroke"],
      ["rauchen", "rauchstopp nikotinentzug"],
      ["hab ne frage", "was ist"],
      ["was bringt", "was ist"],
      ["lohnt sich", "was ist"],
      ["escooter", "e-scooter elektroroller"],
      ["wg", "wohngemeinschaft suche"],
      ["nc", "numerus clausus"],
      ["tierarzt", "impfung hund katze"],
      ["uebrigens", "was ist"],
      ["achso", "was ist"]
    ];
    var i, expanded = norm;
    for (i = 0; i < aliases.length; i++) {
      if (expanded.indexOf(aliases[i][0]) !== -1) expanded += " " + aliases[i][1];
    }
    return expanded;
  }

  function scoreMatch(input, keys) {
    var norm = expandQuery(input);
    var raw = normalize(fixCommonTypos(input));
    var core = stripQuestionNoise(raw);
    var best = 0;
    var i, key, words, w, hits, ratio, word, parts, p, fz, part;
    for (i = 0; i < keys.length; i++) {
      key = normalize(keys[i]);
      if (norm === key || raw === key || core === key) { best = Math.max(best, 100); continue; }
      if (core.split(/\s+/).length === 1 && core.length >= 3 && core === key) {
        best = Math.max(best, 88);
        continue;
      }
      if (norm.indexOf(key) !== -1) best = Math.max(best, 58 + Math.min(key.length, 32));
      if (core.indexOf(key) !== -1) best = Math.max(best, 62 + Math.min(key.length, 28));
      if (key.indexOf(norm) !== -1 && norm.length > 2) best = Math.max(best, 48 + norm.length);
      if (key.indexOf(core) !== -1 && core.length > 2) best = Math.max(best, 52 + core.length);
      words = key.split(/\s+/);
      hits = 0;
      for (w = 0; w < words.length; w++) {
        word = words[w];
        if (word.length < 2) continue;
        if (norm.indexOf(word) !== -1) { hits += 1; continue; }
        parts = norm.split(/\s+/);
        for (p = 0; p < parts.length; p++) {
          part = parts[p];
          if (!part) continue;
          fz = fuzzyWordScore(part, word);
          if (fz >= 0.65) { hits += fz; break; }
          if (part.length > 3 && word.length > 3) {
            if (part.indexOf(word) === 0 || word.indexOf(part) === 0) { hits += 0.85; break; }
            if (part.length >= 4 && word.length >= 4 && part.slice(0, 4) === word.slice(0, 4)) { hits += 0.7; break; }
          }
        }
      }
      if (hits > 0) {
        ratio = hits / Math.max(words.length, 1);
        best = Math.max(best, Math.round(hits * 22 + ratio * 34));
        if (ratio >= 0.85 && words.length >= 2) best = Math.max(best, Math.round(52 + ratio * 38));
        if (hits >= words.length && words.length >= 1) best = Math.max(best, 68 + words.length * 4);
      }
    }
    if (core.split(/\s+/).filter(Boolean).length <= 2 && core.length >= 4) {
      for (i = 0; i < keys.length; i++) {
        key = normalize(keys[i]);
        if (key === core || key.indexOf(core) === 0 || core.indexOf(key.split(/\s+/)[0]) === 0) {
          best = Math.max(best, 66);
        }
      }
    }
    return best;
  }

  function formatSuggestion(key) {
    var k = String(key || "").trim();
    if (!k) return "";
    if (/^(was|wie|wer|wann|wo|warum|tipps|welch|erstell|male|zeichn|zeig)/i.test(k)) {
      return k.charAt(0).toUpperCase() + k.slice(1) + (k.indexOf("?") === -1 ? "?" : "");
    }
    return "Was ist " + k + "?";
  }

  var QUICK_WRITE_STARTERS = [
    "Was ist …?",
    "Wie funktioniert …?",
    "Erklaer …",
    "Was habe ich geschrieben?",
    "Welchen Plan habe ich?",
    "Hallo!",
    "Was ist kuenstliche Intelligenz?",
    "Was ist NOCO Echo?",
    "Tipps fuer gesunden Schlaf",
    "Mach ein Bild von Katze",
    "Mach ein Bild von Apfel",
    "Mach ein Bild von Banane",
    "Mach ein Bild von Hund",
    "Mach ein Bild von Wolkenkratzer",
    "Mach ein Bild von Giraffe",
    "Mach ein Bild von Pinguin",
    "Mach ein Bild von Rakete",
    "Welche einfachen Bilder gehen?"
  ];

  function shuffleArray(list) {
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

  function getRandomWriteStarters(limit) {
    limit = limit || 3;
    var pool = [];
    var i, g, item;
    for (i = 0; i < QUICK_WRITE_STARTERS.length; i++) {
      pool.push({ text: QUICK_WRITE_STARTERS[i], type: "starter" });
    }
    for (i = 0; i < KNOWLEDGE.length; i++) {
      if (KNOWLEDGE[i].keys && KNOWLEDGE[i].keys[0]) {
        pool.push({ text: formatSuggestion(KNOWLEDGE[i].keys[0]), type: "topic" });
      }
    }
    for (g = 0; g < PROMPT_GROUPS.length; g++) {
      for (i = 0; i < PROMPT_GROUPS[g].items.length; i++) {
        item = PROMPT_GROUPS[g].items[i];
        if (/^mach ein bild/i.test(item)) continue;
        pool.push({ text: item, type: "spark" });
      }
    }
    return shuffleArray(pool).slice(0, limit);
  }

  function suggestionScore(partial, text) {
    var p = normalize(partial);
    var t = normalize(text);
    if (!p) return 0;
    if (t.indexOf(p) === 0) return 90 + p.length;
    if (t.indexOf(p) !== -1) return 70 + p.length;
    var words = p.split(/\s+/);
    var hits = 0;
    var i, w;
    for (i = 0; i < words.length; i++) {
      w = words[i];
      if (w.length < 2) continue;
      if (t.indexOf(w) !== -1) hits++;
      else if (fuzzyWordScore(w, t.split(/\s+/)[0]) > 0.5) hits += 0.5;
    }
    return hits > 0 ? Math.round(hits * 25) : 0;
  }

  function getWriteSuggestions(partial, limit) {
    limit = limit || 6;
    partial = String(partial || "");
    if (!partial.trim()) {
      return getRandomWriteStarters(limit);
    }
    var pool = [];
    var seen = {};
    var i, k, q, sc, label;
    function push(text, type, score) {
      if (!text || seen[text]) return;
      seen[text] = true;
      pool.push({ text: text, type: type || "topic", score: score || 0 });
    }
    for (i = 0; i < KNOWLEDGE.length; i++) {
      for (k = 0; k < KNOWLEDGE[i].keys.length; k++) {
        sc = suggestionScore(partial, KNOWLEDGE[i].keys[k]);
        if (sc >= 20) push(formatSuggestion(KNOWLEDGE[i].keys[k]), "topic", sc);
      }
    }
    PROMPT_GROUPS.forEach(function (g) {
      g.items.forEach(function (item) {
        sc = suggestionScore(partial, item);
        if (sc >= 18) push(item, "spark", sc);
      });
    });
    pool.sort(function (a, b) { return b.score - a.score; });
    return pool.slice(0, limit);
  }

  function getClosestSuggestions(input, limit) {
    limit = limit || 4;
    var ranked = [];
    var queries = [String(input || "")];
    var topic = applyTopicSynonyms(stripQuestionNoise(fixCommonTypos(normalizeGeneralQuestion(input))));
    var i, q, sc;
    if (topic) {
      queries.push(topic);
      queries.push("was ist " + topic);
    }
    for (i = 0; i < KNOWLEDGE.length; i++) {
      sc = 0;
      for (q = 0; q < queries.length; q++) {
        sc = Math.max(sc, scoreMatch(queries[q], KNOWLEDGE[i].keys));
      }
      if (sc > 0) ranked.push({ score: sc, label: KNOWLEDGE[i].keys[0] });
    }
    ranked.sort(function (a, b) { return b.score - a.score; });
    return ranked.slice(0, limit).map(function (r) { return formatSuggestion(r.label); });
  }

  function isCapabilitiesQuery(input) {
    return /was kann ich (dich )?fragen|was ist neu|was gibts neues|neu in noco|welche fragen|was weisst du|was weiss du|was kannst du|deine funktionen|was kann noco|noco namen|modell namen|was sind die noco|hilfe|help|was bietest du|was machst du|uebersicht|hub|funktionen liste|themen liste|alle themen/.test(normalize(input));
  }

  function getBrandGuide() {
    return "**NOCO Namen — kurz erklaert:**\n\n" +
      "**Modelle:**\n• **NOCO Flux** (Exclusive) — Rush, unbegrenzt\n• **NOCO Prism** (Free 1-10) — Voll-Vault\n• **NOCO Spark** (Free 11+) — kompakt\n\n" +
      "**Funktionen:**\n• **NOCO Vault** — 520+ Themen-Wissens-Engine\n• **Wiki-API 1.1** — Wikipedia-Abstracts live\n• **Nexus-Auto** — Vault + Wiki intelligent\n• **NOCO Brief** — Recherche-Briefings & Vergleiche\n• **NOCO Glow** — Live-Intent-Prism beim Tippen\n• **NOCO Echo** — Chat-Verlauf\n• **NOCO Render** — 3600 Motive Pixel-Kunst\n• **NOCO Sheen** — Blur-Animation\n• **NOCO Lens** — Keywords (Exclusive)\n• **NOCO Rush** — ~90 ms Speed\n• **NOCO Access** — Plan-Leiste\n• **NOCO Sparks** — Schnellfragen";
  }

  function getCapabilitiesAnswer() {
    return "**NOCO AI v5.2 — Was ist neu & was kannst du?**\n\n" +
      "**Neu:** **NOCO AI Automation** — Vault + Wiki-API intelligent gemischt · **Wiki-API 1.0** · 10 Agent-Vorlagen\n\n" +
      getBrandGuide() + "\n\n" +
      "**So startest du:**\n" +
      "• **Fragen** — *Was ist …?* · *Erklaer mir …* · Stichworte (*Hund*, *Mathe*, *KI*)\n" +
      "• **Bild** — *Mach ein Bild von Katze* · Shortcut **Bild**\n" +
      "• **Video** — *Erstelle ein Video von …* · **Video** / Motion\n" +
      "• **Agent** — *Plane …* · *Erstelle Idee …* · *Baue …* — 10 Vorlagen beim Agent-Toggle\n" +
      "• **Inside** — Datei hochladen · **Lens** — Bild erkennen\n" +
      "• **Summary · Brief · Echo · Glow** — Shortcuts unten\n\n" +
      "**Hilfe:** Tippe **Help** oder `/help` · **NOCO Sparks** links · **◎ Hub** fuer alle Features\n\n" +
      "**Vault:** 900+ einfache Themen — Wissenschaft, Alltag, Tech, Gesellschaft, Tiere, Schule\n" +
      "**Wissensquelle** (oben): **NOCO-Wissen** · **Wiki-API 1.0** · **NOCO Automation** (staerkstes Modell, Exclusive)\n" +
      "**Exclusive** (oben rechts) = Flux + Rush + Render + Motion unbegrenzt";
  }

  function hashCode(str) {
    var hash = 0;
    var i;
    for (i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }

  function pickAnswer(entry, input, opts) {
    opts = opts || {};
    var answers = entry.answers || [];
    var pool = answers.slice();
    var i, fresh, v, picked;

    if (!pool.length) return "";

    if (opts.previousAnswers && opts.previousAnswers.length) {
      fresh = [];
      for (i = 0; i < pool.length; i++) {
        if (opts.previousAnswers.indexOf(pool[i]) === -1) fresh.push(pool[i]);
      }
      if (fresh.length > 0) pool = fresh;
    }

    if (opts.regenerate) {
      v = opts.variant || 0;
      picked = pool[v % pool.length];
      return picked;
    }

    return pool[Math.abs(hashCode(input)) % pool.length];
  }

  function applyModelFlavor(text, opts) {
    opts = opts || {};
    var tier = opts.modelTier || "prism";
    if (tier === "flux" || tier === "prism" || tier === "latest") return text;
    if (tier === "standard" || tier === "basic") tier = "spark";
    var plain = text.replace(/\*\*/g, "");
    var parts = plain.split(/[.!?]+/);
    var brief = "";
    if (parts[0]) brief = parts[0].trim() + ".";
    if (parts[1] && brief.length < 200) brief += " " + parts[1].trim() + ".";
    if (!brief) brief = plain.slice(0, 160);
    return brief + "\n\n*(NOCO Spark — Exclusive / NOCO Flux fuer volle Vault-Antworten)*";
  }

  function findBestMatch(input) {
    var best = { score: 0, entry: null };
    var i, score;
    for (i = 0; i < KNOWLEDGE.length; i++) {
      score = scoreMatch(input, KNOWLEDGE[i].keys);
      if (score > best.score) best = { score: score, entry: KNOWLEDGE[i] };
    }
    return best;
  }

  var QUERY_STOPWORDS = {
    "das": 1, "die": 1, "der": 1, "den": 1, "dem": 1, "des": 1,
    "ein": 1, "eine": 1, "einer": 1, "einem": 1, "eines": 1,
    "und": 1, "oder": 1, "mit": 1, "von": 1, "vom": 1, "zum": 1, "zur": 1,
    "fuer": 1, "für": 1, "ueber": 1, "über": 1, "auch": 1, "mal": 1, "bitte": 1,
    "genau": 1, "eigentlich": 1, "noch": 1, "schon": 1, "denn": 1, "doch": 1,
    "aber": 1, "wenn": 1, "dass": 1, "ist": 1, "sind": 1, "war": 1, "waren": 1,
    "wird": 1, "werden": 1, "haben": 1, "hat": 1, "kann": 1, "koennen": 1,
    "können": 1, "muss": 1, "soll": 1, "will": 1, "moechte": 1, "möchte": 1,
    "mir": 1, "mich": 1, "dich": 1, "dir": 1, "sich": 1, "uns": 1, "euch": 1,
    "hier": 1, "dort": 1, "dann": 1, "also": 1, "dabei": 1, "damit": 1,
    "dazu": 1, "darueber": 1, "darüber": 1, "worauf": 1, "wobei": 1,
    "wieso": 1, "weshalb": 1, "warum": 1, "wann": 1, "wo": 1, "wer": 1,
    "was": 1, "wie": 1, "thema": 1, "frage": 1, "infos": 1, "info": 1,
    "informationen": 1, "hilfe": 1, "erklaerung": 1, "erklaeren": 1,
    "bedeutung": 1, "definition": 1, "gibt": 1, "gibts": 1, "brauch": 1,
    "brauche": 1, "interesse": 1, "interessiert": 1, "etwas": 1, "alles": 1
  };

  function fuzzyResolveOneWordIntent(word) {
    var w = normalize(word);
    var keys, i, best = 0, bestKey = "", sc;
    if (!w || w.length < 3) return "";
    if (ONE_WORD_INTENTS[w]) return ONE_WORD_INTENTS[w];
    keys = Object.keys(ONE_WORD_INTENTS);
    for (i = 0; i < keys.length; i++) {
      sc = fuzzyWordScore(w, keys[i]);
      if (sc > best) { best = sc; bestKey = keys[i]; }
    }
    if (best >= 0.68 && bestKey) return ONE_WORD_INTENTS[bestKey];
    return "";
  }

  function fuzzyTopicMatch(input) {
    var core = stripQuestionNoise(fixCommonTypos(String(input || "")));
    var words = core.split(/\s+/).filter(Boolean);
    var topic = extractTopicFromQuestion(input) || extractTopicFromQuestion(prepareUserMessage(input));
    var best = { score: 0, entry: null, query: "" };
    var i, intent, m, parts, phrase;

    function tryQuery(q) {
      m = findBestMatch(q);
      if (m.score > best.score) best = { score: m.score, entry: m.entry, query: q };
    }

    for (i = 0; i < words.length; i++) {
      if (words[i].length < 3 || QUERY_STOPWORDS[words[i]]) continue;
      intent = fuzzyResolveOneWordIntent(words[i]);
      if (intent) tryQuery(intent);
      tryQuery("was ist " + words[i]);
      tryQuery("was ist " + applyTopicSynonyms(words[i]));
    }
    for (i = 0; i < words.length - 1; i++) {
      phrase = [];
      if (words[i].length >= 2 && !QUERY_STOPWORDS[words[i]]) phrase.push(words[i]);
      if (words[i + 1].length >= 2 && !QUERY_STOPWORDS[words[i + 1]]) phrase.push(words[i + 1]);
      if (!phrase.length) continue;
      phrase = phrase.join(" ");
      tryQuery("was ist " + phrase);
      tryQuery("was ist " + applyTopicSynonyms(phrase));
    }
    if (topic) {
      tryQuery("was ist " + topic);
      tryQuery(topic);
      if (topic.indexOf(" und ") !== -1) {
        parts = topic.split(/\s+und\s+/);
        for (i = 0; i < parts.length; i++) {
          if (parts[i].trim().length >= 2) tryQuery("was ist " + parts[i].trim());
        }
      }
    }
    return best;
  }

  function topicOnlyMatch(input) {
    var core = stripQuestionNoise(fixCommonTypos(normalizeGeneralQuestion(input)));
    var words = core.split(/\s+/).filter(Boolean);
    var kept = [];
    var i, phrase, m;
    for (i = 0; i < words.length; i++) {
      if (!QUERY_STOPWORDS[words[i]] && words[i].length >= 2) kept.push(words[i]);
    }
    if (!kept.length) return { score: 0, entry: null, query: "" };
    phrase = kept.join(" ");
    m = findBestMatch("was ist " + phrase);
    if (m.score >= 6 && m.entry) {
      return { score: m.score, entry: m.entry, query: "was ist " + phrase };
    }
    if (kept.length >= 2) {
      m = findBestMatch("was ist " + kept.slice(-2).join(" "));
      if (m.score >= 6 && m.entry) {
        return { score: m.score, entry: m.entry, query: "was ist " + kept.slice(-2).join(" ") };
      }
    }
    m = findBestMatch("was ist " + kept[kept.length - 1]);
    if (m.score >= 6 && m.entry) {
      return { score: m.score, entry: m.entry, query: "was ist " + kept[kept.length - 1] };
    }
    return { score: 0, entry: null, query: "" };
  }

  function relaxedTopicMatch(best, input) {
    var core = stripQuestionNoise(fixCommonTypos(normalizeGeneralQuestion(input)));
    var words = core.split(/\s+/).filter(Boolean);
    var kept = [];
    var i, phrase, m;
    if (!best) best = { score: 0, entry: null, query: "" };
    for (i = 0; i < words.length; i++) {
      if (!QUERY_STOPWORDS[words[i]] && words[i].length >= 3) kept.push(words[i]);
    }
    if (!kept.length || kept.length > 4) return best;
    phrase = kept.join(" ");
    m = findBestMatch("was ist " + phrase);
    if (m.score >= 58 && m.score > best.score && m.entry) {
      return { score: m.score, entry: m.entry, query: "was ist " + phrase };
    }
    if (kept.length === 1) {
      m = findBestMatch("was ist " + applyTopicSynonyms(kept[0]));
      if (m.score >= 55 && m.score > best.score && m.entry) {
        return { score: m.score, entry: m.entry, query: "was ist " + kept[0] };
      }
    }
    return best;
  }

  function wordCascadeMatch(input) {
    var words = stripQuestionNoise(fixCommonTypos(normalizeGeneralQuestion(input))).split(/\s+/).filter(Boolean);
    var best = { score: 0, entry: null, query: "" };
    var i, w, syn, intent, m, phrase, parts;
    for (i = words.length - 1; i >= 0; i--) {
      w = words[i];
      if (QUERY_STOPWORDS[w] || w.length < 3) continue;
      syn = applyTopicSynonyms(w);
      intent = fuzzyResolveOneWordIntent(w) || fuzzyResolveOneWordIntent(syn) || ("was ist " + syn);
      m = findBestMatch(intent);
      if (m.score > best.score) best = { score: m.score, entry: m.entry, query: intent };
    }
    for (i = words.length - 2; i >= 0; i--) {
      parts = [];
      if (words[i].length >= 2 && !QUERY_STOPWORDS[words[i]]) parts.push(words[i]);
      if (words[i + 1].length >= 2 && !QUERY_STOPWORDS[words[i + 1]]) parts.push(words[i + 1]);
      if (!parts.length) continue;
      phrase = applyTopicSynonyms(parts.join(" "));
      intent = "was ist " + phrase;
      m = findBestMatch(intent);
      if (m.score > best.score) best = { score: m.score, entry: m.entry, query: intent };
    }
    return best;
  }

  function resolveQueryCandidates(input) {
    var raw = String(input || "").trim();
    var prepared = prepareUserMessage(raw);
    var seen = {};
    var candidates = [];
    var core, words, topic, i, parts, syn;
    function push(q) {
      q = String(q || "").trim();
      if (!q || seen[q]) return;
      seen[q] = true;
      candidates.push(q);
    }
    push(prepared);
    push(raw);
    push(raw.replace(/[^\w\säöüßaeoeue-]/gi, " ").replace(/\s+/g, " ").trim());
    push(normalizeGeneralQuestion(raw));
    push(stripQuestionNoise(fixCommonTypos(raw)));
    push(expandQuery(prepared));
    push(expandQuery(raw));
    core = stripQuestionNoise(fixCommonTypos(prepared));
    syn = applyTopicSynonyms(core);
    if (syn && syn !== core) {
      push(syn);
      push("was ist " + syn);
      push(expandQuery(syn));
    }
    topic = extractTopicFromQuestion(prepared) || extractTopicFromQuestion(raw);
    if (!topic) topic = extractQuotedPhrase(raw) || extractQuotedPhrase(prepared);
    if (topic) {
      push(topic);
      push("was ist " + topic);
      push(expandQuery(topic));
      syn = applyTopicSynonyms(topic);
      if (syn && syn !== topic) {
        push(syn);
        push("was ist " + syn);
        push(expandQuery(syn));
      }
    }
    if (/^was ist\s+/.test(core)) push(core.replace(/^was ist\s+/, ""));
    if (/^was sind\s+/.test(core)) push(core.replace(/^was sind\s+/, ""));
    if (/^wie funktioniert\s+/.test(core)) push(core.replace(/^wie funktioniert\s+/, ""));
    if (/^warum\s+/.test(core)) push(core.replace(/^warum\s+/, ""));
    if (/^erklaer[e]?\s+/.test(core)) push(core.replace(/^erklaer[e]?\s+/, ""));
    words = core.split(/\s+/).filter(Boolean);
    if (words.length >= 2) {
      push(words.slice(-2).join(" "));
      push(words[words.length - 1] + " " + words[words.length - 2]);
    }
    if (words.length >= 3) push(words.slice(-3).join(" "));
    if (core.indexOf("-") !== -1) {
      push(core.replace(/-/g, " "));
      push(core.replace(/-/g, ""));
    }
    if (words.length >= 1) push(words[words.length - 1]);
    for (i = 0; i < words.length; i++) {
      if (words[i].length >= 3 && !QUERY_STOPWORDS[words[i]]) {
        push("was ist " + words[i]);
        if (ONE_WORD_INTENTS[words[i]]) push(ONE_WORD_INTENTS[words[i]]);
        if (fuzzyResolveOneWordIntent(words[i])) push(fuzzyResolveOneWordIntent(words[i]));
        syn = applyTopicSynonyms(words[i]);
        if (syn && syn !== words[i]) push("was ist " + syn);
      }
    }
    for (i = 0; i < words.length - 1; i++) {
      parts = [];
      if (words[i].length >= 2 && !QUERY_STOPWORDS[words[i]]) parts.push(words[i]);
      if (words[i + 1].length >= 2 && !QUERY_STOPWORDS[words[i + 1]]) parts.push(words[i + 1]);
      if (!parts.length) continue;
      push("was ist " + parts.join(" "));
      syn = applyTopicSynonyms(parts.join(" "));
      if (syn && syn !== parts.join(" ")) push("was ist " + syn);
    }
    if (topic && topic.indexOf(" oder ") !== -1) {
      parts = topic.split(/\s+oder\s+/);
      if (parts[0] && parts[0].trim().length >= 2) push("was ist " + parts[0].trim());
    }
    if (topic && topic.indexOf(" und ") !== -1) {
      parts = topic.split(/\s+und\s+/);
      for (i = 0; i < parts.length; i++) {
        if (parts[i].trim().length >= 2) push("was ist " + parts[i].trim());
      }
    }
    return candidates;
  }

  function findBestFromCandidates(candidates) {
    var best = { score: 0, entry: null, query: "" };
    var i, m;
    for (i = 0; i < candidates.length; i++) {
      m = findBestMatch(candidates[i]);
      if (m.score > best.score) best = { score: m.score, entry: m.entry, query: candidates[i] };
    }
    return best;
  }

  function getTopicLabel(entry) {
    if (!entry || !entry.keys || !entry.keys[0]) return "Allgemein";
    var k = normalize(entry.keys[0]);
    if (/noco|forge|keycard|workspace|exclusive|firstlight|security|nexus|focus|hub|sync|explorer|liquid|widget|pay|shadow|casino|cloud/.test(k)) return "NOCO OS";
    if (/ki|internet|computer|programm|html|smartphone|robot|passwort|cyber|javascript/.test(k)) return "Tech & KI";
    if (/physik|chemie|biologie|sonne|erde|wasser|klima|energie|universum/.test(k)) return "Wissenschaft";
    if (/philosophie|ethik|sinn des leben/.test(k)) return "Philosophie";
    if (/liebe|beziehung|freundschaft|partnerschaft/.test(k)) return "Beziehungen";
    if (/arbeit|karriere|bewerbung|beruf/.test(k)) return "Arbeit & Karriere";
    if (/studium|uni|schule bildung|abitur/.test(k)) return "Bildung";
    if (/universum|astronomie|galaxie|big bang/.test(k)) return "Astronomie";
    if (/ernaehrung|essen gesund|vegan|diaet/.test(k)) return "Ernaehrung";
    if (/reisen|urlaub|tourismus/.test(k)) return "Reisen";
    if (/geld|finanzen|sparen|investieren/.test(k)) return "Finanzen";
    if (/glueck|zufriedenheit|wohlbefinden/.test(k)) return "Alltag";
    if (/angst|depression|mental health/.test(k)) return "Psychologie";
    if (/kunst|literatur|kultur|museum/.test(k)) return "Kultur";
    if (/wetter|wettervorhersage/.test(k)) return "Wetter";
    if (/allgemeine frage|erklaer mir|frag mich/.test(k)) return "System";
    if (/geschichte|deutschland|demokratie|politik|sprache|menschenrecht|diversitaet|fake news|gleichstellung|renaissance/.test(k)) return "Gesellschaft";
    if (/medizin|koerper|impfung|genetik|anatomie|achtsamkeit|meditation/.test(k)) return "Mensch & Medizin";
    if (/blockchain|bitcoin|vr |open source|wlan|quanten|datenbank|chatgpt/.test(k)) return "Tech & Zukunft";
    if (/multi chat|neu generieren|noco sparks|slash|feedback/.test(k)) return "NOCO Tools";
    if (/vulkan|licht|optik|pflanze|botanik|quantenphysik/.test(k)) return "Wissenschaft";
    if (/gesundheit|schlaf|psychologie|sport|lernen|ernaehrung/.test(k)) return "Alltag";
    if (/hallo|witz|danke|smalltalk|wie geht|langweilig|lieblings/.test(k)) return "Smalltalk";
    if (/privat|datenschutz|tos|nutzungs|wer sieht/.test(k)) return "Datenschutz";
    if (/ki bild|bild erkennen|lens detect|echtes bild|ist das ki/.test(k)) return "NOCO Lens Detect";
    if (/pixel|blur|galerie|bild gener|noco render|sheen|mach ein bild|welche bilder|render motive|3600 motive|2100 motive|1850 motive|1600 motive|1350 motive|1100 motive|900 motive|720 motive/.test(k)) return "NOCO Render";
    if (/mathematik|geographie|dinosaurier|photosynthese|evolution|python|html css/.test(k)) return "Wissenschaft";
    if (/chat gedaechtnis|zusammenfass|verlauf|geschrieben|noco echo/.test(k)) return "NOCO Echo";
    if (/noco rush|rush engine|priority/.test(k)) return "NOCO Rush";
    if (/noco lens|keyword|glimpse/.test(k)) return "NOCO Lens";
    if (/noco access|plan leiste|free plan/.test(k)) return "NOCO Access";
    if (/linux|windows|macos|deno|laravel|spring|svelte|react native/.test(k)) return "Tech & Programmierung";
    if (/bluetooth|nfc|5g|starlink|streaming|meme|speedrun/.test(k)) return "Tech & Alltag";
    if (/rag|halluzination|prompt injection|zero trust/.test(k)) return "KI & Sicherheit";
    if (/relativitaet|einstein|immunsystem|antibiotika|organspende|pflege|who/.test(k)) return "Wissenschaft & Medizin";
    if (/inflation|leitzins|aktien|mindestlohn|gewerkschaft|bafoeg/.test(k)) return "Wirtschaft & Gesellschaft";
    if (/montessori|waldorf|barrierefreiheit|blender|fotografie|videobearbeitung/.test(k)) return "Bildung & Kreativ";
    if (/journalismus|satire|pressefreiheit|whistleblower|uno|schengen/.test(k)) return "Gesellschaft";
    if (/erdbeben|tornado|artensterben|ozon|atomkraft/.test(k)) return "Wissenschaft & Umwelt";
    if (/paralympics/.test(k)) return "Sport & Inklusion";
    if (/next\.?js|nuxt|prisma|supabase|firebase|redis|kafka|elasticsearch/.test(k)) return "Tech & Programmierung";
    if (/ransomware|malware|web3|nft|metaverse|copilot|midjourney|ai act/.test(k)) return "KI & Tech";
    if (/e-mobilit|waermepumpe|autonom|hyperloop/.test(k)) return "Tech & Zukunft";
    if (/kreislauf|right to repair|fair trade|lichtverschmutz|urban gardening|imkerei/.test(k)) return "Nachhaltigkeit";
    if (/mrna|epigenetik|stammzell|telemedizin|adhs|migr|vitamin d|placebo/.test(k)) return "Mensch & Medizin";
    if (/pomodoro|mindmap|cornell|journaling|rhetorik|kritisches denken|wissenschaftliche methode|verhandlung/.test(k)) return "Lernen & Skills";
    if (/urheber|creative commons|cookie banner|drohnen/.test(k)) return "Recht & Gesellschaft";
    if (/noco brief|intel brief|kurzueberblick|recherche brief/.test(k)) return "NOCO Brief";
    if (/noco glow|glow prism|live intent/.test(k)) return "NOCO Glow";
    if (/openai|anthropic|claude|gemini|llama|mistral|stable diffusion|embedding|vektordaten|fine tuning|context window/.test(k)) return "KI-Anbieter & Tools";
    if (/buddhismus|hinduismus|islam|christentum|judentum|tai chi|erasmus|duolingo/.test(k)) return "Kultur & Religion";
    if (/buergergeld|wohngeld|zinseszins|defi|shopify|dropship|esg|passives einkommen|altersvorsorge|mietpreisbremse/.test(k)) return "Wirtschaft & Politik";
    if (/solid.state|perowskit|vertical farming|rewilding|mycelium|neuromorphic|post.quantum|social engineering|osint/.test(k)) return "Wissenschaft & Umwelt";
    if (/zettelkasten|notion|obsidian|gtd|eisenhower|latex|plagiat|apa zitier/.test(k)) return "Lernen & Skills";
    if (/halbleiter|chip krise|semiconductor/.test(k)) return "Tech & Zukunft";
    if (/noco vault|wissensbank|mindbank/.test(k)) return "NOCO Vault";
    if (/noco flux|noco prism|noco spark|modell/.test(k)) return "NOCO Modelle";
    if (/lohnt|exclusive vorteil|neue funktion|flagship/.test(k)) return "NOCO Features";
    if (/faehigkeit|vorschlag|einstellung|was kann ich/.test(k)) return "System";
    return "NOCO Vault";
  }

  function getRelatedQuestions(input, topic) {
    var norm = normalize(input);
    var pool = [];
    var topicPool = [];
    var i, g, item, h, start, picked, topicNorm;
    topicNorm = topic ? normalize(topic) : "";
    PROMPT_GROUPS.forEach(function (group) {
      var groupMatch = topicNorm && (
        normalize(group.title).indexOf(topicNorm) !== -1 ||
        topicNorm.indexOf(normalize(group.title)) !== -1
      );
      group.items.forEach(function (q) {
        if (normalize(q) === norm) return;
        if (groupMatch) topicPool.push(q);
        pool.push(q);
      });
    });
    if (!pool.length) return [];
    h = Math.abs(hashCode(norm + (topic || "")));
    start = h % (topicPool.length || pool.length);
    picked = [];
    for (i = 0; i < (topicPool.length || pool.length) && picked.length < 2; i++) {
      item = (topicPool.length ? topicPool : pool)[(start + i) % (topicPool.length || pool.length)];
      if (picked.indexOf(item) === -1) picked.push(item);
    }
    start = (h + 3) % pool.length;
    for (i = 0; i < pool.length && picked.length < 2; i++) {
      item = pool[(start + i) % pool.length];
      if (picked.indexOf(item) === -1) picked.push(item);
    }
    return picked;
  }

  function simplifyText(text) {
    var plain = String(text).replace(/\*\*/g, "").replace(/\n+/g, " ");
    var parts = plain.split(/[.!?]+/);
    var short = "";
    if (parts[0]) short = parts[0].trim();
    if (parts[1] && short.length < 160) short += ". " + parts[1].trim();
    if (short && short.slice(-1) !== ".") short += ".";
    if (!short) short = plain.slice(0, 180);
    return "**Einfach erklaert:** " + short;
  }

  function stripMd(text) {
    return String(text || "").replace(/\*\*/g, "").replace(/^#+\s*/gm, "").replace(/^[-•]\s*/gm, "").trim();
  }

  function splitSentences(plain) {
    return String(plain || "")
      .replace(/([.!?])\s+/g, "$1\n")
      .split("\n")
      .map(function (s) { return s.trim(); })
      .filter(function (s) { return s.length > 6; });
  }

  function detectAnswerAdjust(input) {
    var n = normalize(fixCommonTypos(String(input || "")));
    if (!n || n.length > 80) return null;
    if (/^(bitte\s+)?(laenger|langer|ausfuehrlich|ausfuehrlicher|mehr\s+details?|detailreicher|expand|verlaenger|longer)/.test(n)) return "longer";
    if (/^(bitte\s+)?(kuerzer|kurz|knapper|zusammenfass|fass\s+zusammen|3\s+punkte|drei\s+punkte|kurzfassung|shorter|kompakter)/.test(n)) return "shorter";
    if (/^(bitte\s+)?(thematisch|zum\s+thema|fokussier|fokus|mehr\s+zum\s+thema|on\s*topic|praeziser|praezise)/.test(n)) return "ontopic";
    if (/(mach|macht)\s*(es\s*)?(laenger|langer|kuerzer|kurz)/.test(n)) {
      if (/laenger|langer/.test(n)) return "longer";
      if (/kuerzer|kurz/.test(n)) return "shorter";
    }
    if (/(bitte\s+)?(noch\s+)?(ein\s+)?(bisschen\s+)?(laenger|langer)/.test(n)) return "longer";
    if (/(bitte\s+)?(noch\s+)?(ein\s+)?(bisschen\s+)?(kuerzer|kurz)/.test(n)) return "shorter";
    return null;
  }

  function expandText(text) {
    var plain = stripMd(text);
    var sentences = splitSentences(plain).filter(function (s) { return s.length > 8; });
    var core = sentences.slice(0, 4).join(" ");
    var extra = [
      "Darueber hinaus lohnt sich ein genauerer Blick auf die Zusammenhaenge.",
      "Praktisch bedeutet das: Du kannst die Idee Schritt fuer Schritt anwenden.",
      "Kurz gesagt bleibt das Kernthema gleich — nur mit mehr Kontext und Beispielen.",
      "Wenn du tiefer einsteigen willst, starte mit dem wichtigsten Punkt und arbeite dich nach unten."
    ];
    var i, out = "**Ausfuehrliche Version:**\n\n" + core;
    for (i = 0; i < extra.length && out.length < 900; i++) {
      out += "\n\n" + extra[i];
      if (sentences[i + 1]) out += " " + sentences[i + 1];
    }
    if (sentences.length > 2) {
      out += "\n\n**Zusammenfassung:** " + sentences[0] + " " + (sentences[1] || "");
    }
    return out;
  }

  function shortenToKeyPoints(text) {
    var plain = stripMd(text);
    var sentences = splitSentences(plain);
    var a = sentences[0] || plain.slice(0, 120);
    var b = sentences[Math.floor(sentences.length / 2)] || sentences[1] || "Kernpunkt zwei: Fokus auf das Wichtigste.";
    var c = sentences[sentences.length - 1] || sentences[2] || "Kernpunkt drei: Naechster Schritt klar machen.";
    return "**3 Kernpunkte:**\n\n1. " + a.trim() + "\n2. " + b.trim() + "\n3. " + c.trim();
  }

  function makeMoreOnTopic(text) {
    var plain = stripMd(text);
    var sentences = splitSentences(plain);
    var focus = sentences.slice(0, 3).join(" ");
    return (
      "**Fokus aufs Thema:**\n\n" + focus +
      "\n\n**Praxis-Tipp:** Bleib bei dieser Kernaussage — weniger Abschweifung, mehr Klarheit."
    );
  }

  function adjustAnswerText(text, mode) {
    if (mode === "longer") return expandText(text);
    if (mode === "shorter") return shortenToKeyPoints(text);
    if (mode === "ontopic") return makeMoreOnTopic(text);
    return text;
  }

  function splitSummarySentences(text) {
    return String(text || "")
      .replace(/\r\n/g, "\n")
      .replace(/[•·▪]\s*/g, "\n")
      .replace(/^\s*[-*]\s+/gm, "")
      .replace(/([.!?;:])\s+/g, "$1\n")
      .split("\n")
      .map(function (s) { return s.replace(/\s+/g, " ").trim(); })
      .filter(function (s) { return s.length > 8; });
  }

  function scoreSummarySentence(sentence, index, total, keywords) {
    var score = 0;
    var s = sentence.toLowerCase();
    var wi, w;
    score += Math.min(sentence.length / 32, 4.5);
    if (index === 0) score += 2.2;
    if (index < Math.min(4, total)) score += 1.4;
    if (/\d+[%€$]?|\b(wichtig|kern|haupt|zentral|bedeutet|fazit|zusammenfass|daher|deshalb|erstens|zweitens|schluss)\b/i.test(s)) score += 2.6;
    if (keywords && keywords.length) {
      for (wi = 0; wi < keywords.length; wi++) {
        w = keywords[wi];
        if (s.indexOf(w) >= 0) score += 1.5;
      }
    }
    if (sentence.length > 240) score -= 1.2;
    if (sentence.length < 20) score -= 0.6;
    return score;
  }

  function topSummaryKeywords(text, n) {
    n = n || 8;
    var words = String(text || "").toLowerCase()
      .replace(/[^a-zA-ZäöüÄÖÜß0-9\s-]/g, " ")
      .split(/\s+/)
      .filter(function (w) { return w.length > 3; });
    var stop = { dass: 1, diese: 1, dieser: 1, werden: 1, haben: 1, nach: 1, auch: 1, oder: 1, wenn: 1, weil: 1, sowie: 1, durch: 1, unter: 1, einem: 1, einer: 1, eines: 1 };
    var freq = {}, i, w, list = [];
    for (i = 0; i < words.length; i++) {
      w = words[i];
      if (stop[w]) continue;
      freq[w] = (freq[w] || 0) + 1;
    }
    Object.keys(freq).forEach(function (k) { list.push({ w: k, c: freq[k] }); });
    list.sort(function (a, b) { return b.c - a.c; });
    return list.slice(0, n).map(function (x) { return x.w; });
  }

  function extractSummaryPoints(text, max) {
    max = max || 5;
    var sentences = splitSummarySentences(text);
    if (!sentences.length) {
      var chunk = String(text || "").replace(/\s+/g, " ").trim();
      if (chunk.length > 16) {
        var parts = chunk.match(/.{1,140}(\s|$)/g) || [chunk];
        sentences = parts.map(function (p) { return p.trim(); }).filter(function (p) { return p.length > 12; });
      }
    }
    var keywords = topSummaryKeywords(text, 10);
    var scored = [], i;
    for (i = 0; i < sentences.length; i++) {
      scored.push({
        text: sentences[i],
        score: scoreSummarySentence(sentences[i], i, sentences.length, keywords)
      });
    }
    scored.sort(function (a, b) { return b.score - a.score; });
    var picked = [];
    var seen = {};
    for (i = 0; i < scored.length && picked.length < max; i++) {
      var key = scored[i].text.slice(0, 40);
      if (seen[key]) continue;
      seen[key] = true;
      picked.push(scored[i].text);
    }
    i = 0;
    while (picked.length < max && i < sentences.length) {
      if (!seen[sentences[i].slice(0, 40)]) {
        seen[sentences[i].slice(0, 40)] = true;
        picked.push(sentences[i]);
      }
      i++;
    }
    return picked.slice(0, max);
  }

  function summarizeText(text, opts) {
    opts = opts || {};
    var plain = stripMd(String(text || "").trim());
    if (!plain || plain.length < 12) {
      return { text: "**NOCO Summary**\n\nText zu kurz — bitte mehr Inhalt einfuegen.", topic: "Summary", confidence: 0 };
    }
    var words = plain.split(/\s+/).filter(Boolean);
    var wordCount = words.length;
    var kind = wordCount > 280 ? "Ausfuehrlicher Text" : wordCount > 100 ? "Mittellanger Text" : "Kurzer Text";
    var sentences = splitSummarySentences(plain);
    var points = extractSummaryPoints(plain, 5);
    var i;
    while (points.length < 5) {
      points.push("Weitere Details stehen im Originaltext.");
    }
    var out =
      "**NOCO Summary** — " + kind + " · ~" + wordCount + " Woerter\n\n" +
      "**Aufbau:** " + (sentences.length > 4 ? sentences.length + " Saetze/Abschnitte erkannt" : "kompakte Aussagen") + "\n\n" +
      "**5 Stichpunkte:**\n";
    for (i = 0; i < 5; i++) {
      var line = points[i].trim();
      if (line.length > 280) line = line.slice(0, 277) + "…";
      out += (i + 1) + ". " + line + "\n";
    }
    if (!opts.skipFlavor) out = applyModelFlavor(out, opts);
    return { text: out, topic: "Summary", confidence: 92 };
  }

  function getFeatureHints() {
    var f = NOCO_BRAND.features;
    return {
      agent: "Fuehrt komplexe Auftraege aus — Plane, Idee, Bau: grosse strukturierte Deliverables",
      create: "Zeichnet Pixel-Bilder im Chat aus 3600 Motiven — frei formulieren",
      inside: "Analysiert Dateien & Texte — Dokument, Kernpunkte, Code, Bild",
      motion: "4s Epic Video — 8 Keyframes, Pixel-Morph, Loop-Export · 3600 Motive",
      hub: "Zentrale im Chat — Bild, Motion, Inside, Agent per Buttons",
      image: "Startet Bild-Modus — z. B. Mach ein Bild von …",
      summary: "Fasst langen Text in 5 vollstaendige Stichpunkte zusammen",
      brief: "Erstellt strukturiertes Recherche-Briefing aus der Vault",
      glow: "Live-Intent-Prism — zeigt Kategorie & Chips beim Tippen",
      echo: "Liest & fasst deinen Chat-Verlauf zusammen",
      lens: "KI-Bild erkennen — NOCO Pixel & Stil per Upload pruefen",
      detect: "Oeffnet Bild-Upload fuer NOCO Lens Erkennung",
      file: "Datei fuer NOCO Inside hochladen — Text, Code oder Bild",
      new: "Neuen leeren Chat starten",
      help: "Alle Slash-Befehle & Feature-Hilfe anzeigen",
      brand: {
        agent: f.agent.desc,
        create: f.buildCreate.desc,
        inside: f.insight.desc,
        motion: f.motion.desc,
        summary: f.summary.desc,
        brief: f.brief.desc,
        glow: f.glow.desc,
        render: f.render.desc,
        hub: f.hub.desc,
        file: f.file.desc
      }
    };
  }

  function getSlashHelp() {
    return (
      "**NOCO Hilfe v5.2**\n\n" +
      "**Was ist neu?** 10 Agent-Vorlagen · groessere Vault · Sparks-Sidebar · staerkere Agent-Antworten\n" +
      "**Was kannst du?** Frag *Was kann ich dich fragen?* oder *Was ist neu?*\n\n" +
      "**Chat:** `/help` · `/new` · `/clear` · `/search` · `/topics` · `/saved` · `/random`\n" +
      "**Bild:** `/pixel` — *Mach ein Bild von …*\n" +
      "**Video:** `/motion [Motiv]` — Epic 4s Video\n" +
      "**Agent:** `/agent [Auftrag]` — Plane · Idee · Build · 10 Vorlagen\n" +
      "**Inside:** `/inside` · **Summary** · **Echo** · **Brief** · **Lens** `/detect` · **Hub** `/hub`\n\n" +
      "**Einfache Fragen:** *Was ist Hund?* · *Was ist Mathe?* · *Was ist Sonne?* — 900+ Themen in der Vault"
    );
  }

  function getSystemStats() {
    var topics = 0;
    var prompts = 0;
    PROMPT_GROUPS.forEach(function (g) {
      topics++;
      prompts += g.items.length;
    });
    return {
      version: "3.3",
      topics: KNOWLEDGE.length,
      promptGroups: topics,
      quickPrompts: prompts,
      terms: TERM_KEYS.length
    };
  }

  function isChatRecallQuery(input) {
    var n = normalize(fixCommonTypos(input));
    return /was (habe |sagte |schrieb |schreib |fragte |tippte )?ich|what did i (say|write|ask)|zusammenfass|chat (verlauf|historie|zusammen|uebersicht|recap|summary)|was steht im chat|meine nachrichten|was war meine|erinnerst du dich|was haben wir besprochen|chat recap|verlauf zusammen|was schrieb ich|mein verlauf|mein chat|was war das nochmal|was hab ich|was habe ich im chat|echo|noco echo/.test(n);
  }

  function summarizeChatHistory(history, input, opts) {
    opts = opts || {};
    var userMsgs = [];
    var aiMsgs = [];
    var i, m, lines, brief, themes, includeAi;

    if (!history || !history.length) {
      return {
        text: "**Chat-Zusammenfassung:** In diesem Chat steht noch nichts — schreib die erste Nachricht!",
        confidence: 100,
        topic: "Chat-Verlauf"
      };
    }

    for (i = 0; i < history.length; i++) {
      m = history[i];
      if (m.role === "user") userMsgs.push(m);
      else if (m.role === "ai" && m.type !== "image") aiMsgs.push(m);
    }

    includeAi = /gesamt|alles|komplett|auch noco|mit antworten|full|kompletter/.test(normalize(input));

    if (!userMsgs.length) {
      return {
        text: "**Chat-Zusammenfassung:** Du hast in diesem Chat noch keine eigene Nachricht geschrieben.",
        confidence: 100,
        topic: "Chat-Verlauf"
      };
    }

    lines = [];
    for (i = 0; i < userMsgs.length; i++) {
      lines.push("**Du (#" + (i + 1) + "):** " + userMsgs[i].text.slice(0, 200) + (userMsgs[i].text.length > 200 ? "…" : ""));
    }

    brief = "**NOCO Echo** — Zusammenfassung (" + userMsgs.length + " deine Nachricht" + (userMsgs.length === 1 ? "" : "en");
    if (aiMsgs.length) brief += ", " + aiMsgs.length + " NOCO-Antwort" + (aiMsgs.length === 1 ? "" : "en");
    brief += ")\n\n";
    brief += lines.join("\n\n");

    if (userMsgs.length === 1) {
      brief += "\n\n**Kurz:** Du hast nach *" + userMsgs[0].text.slice(0, 60) + (userMsgs[0].text.length > 60 ? "…" : "") + "* gefragt.";
    } else {
      themes = [];
      for (i = 0; i < userMsgs.length && themes.length < 4; i++) {
        var words = userMsgs[i].text.split(/\s+/).slice(0, 4).join(" ");
        if (words.length > 3) themes.push(words);
      }
      brief += "\n\n**Kurz:** Hauptthemen — " + themes.join(" · ");
    }

    if (includeAi && aiMsgs.length) {
      brief += "\n\n**NOCO AI Antworten:** " + aiMsgs.length + " Stueck in diesem Chat.";
      if (aiMsgs[aiMsgs.length - 1]) {
        brief += " Letzte Antwort: *" + aiMsgs[aiMsgs.length - 1].text.replace(/\*\*/g, "").slice(0, 100) + "…*";
      }
    }

    brief += "\n\n*(Lokal gespeichert — nur dieser Chat, kein Server.)*";
    if (!opts.skipFlavor) brief = applyModelFlavor(brief, opts);
    return { text: brief, confidence: 100, topic: "Chat-Verlauf", variants: 1 };
  }

  function detectAgentIntent(input, opts) {
    opts = opts || {};
    if (opts.agentTaskType === "fitness") return "fitness";
    if (opts.agentTaskType === "learning") return "learning";
    if (opts.agentTaskType === "project") return "project";
    if (opts.agentTaskType === "plan") return "plan";
    if (opts.agentTaskType === "idea") return "idea";
    if (opts.agentTaskType === "build") return "build";
    if (opts.agentTaskType === "marketing") return "marketing";
    if (opts.agentTaskType === "content") return "content";
    if (opts.agentTaskType === "travel") return "travel";
    if (opts.agentTaskType === "meal") return "meal";
    if (opts.agentTaskType === "resume") return "resume";
    if (opts.agentTaskType === "social") return "social";
    if (opts.agentTaskType === "home") return "home";
    var t = String(input || "").toLowerCase();
    if (/fitness|trainingsplan|workout|sport|abnehmen|muskel|trainier/i.test(t)) return "fitness";
    if (/lernplan|lern\s*plan|mathe|pruefung|lernen|klausur|schule|uni|studium/i.test(t)) return "learning";
    if (/youtube|kanal\s*plan|content\s*plan|upload\s*plan/i.test(t)) return "content";
    if (/marketing|kampagne|werbung|ads/i.test(t)) return "marketing";
    if (/reise|urlaub|trip|flug|packliste/i.test(t)) return "travel";
    if (/meal|ernaehrung|essen\s*plan|kochen|rezept|einkauf/i.test(t)) return "meal";
    if (/bewerbung|lebenslauf|cv|interview|karriere/i.test(t)) return "resume";
    if (/social\s*media|instagram|tiktok|reichweite/i.test(t)) return "social";
    if (/einrichtung|wohnung|renovier|moebel|interior/i.test(t)) return "home";
    if (/logo|branding|poster|kanal|gaming|app|startup|projekt|business|unternehmen|website|saas/i.test(t)) return "project";
    if (/plan(e|en)?|roadmap|zeitplan|strategie|konzept|aufbau|struktur/i.test(t)) return "plan";
    if (/idee|brainstorm|kreativ|konzipier|erfind|vision/i.test(t)) return "idea";
    if (/bau(e|en)?|entwickl|programmier|implementier|erstell(e|en)?|mach(e|en)?|design(e|en)?|codier/i.test(t)) return "build";
    if (/analys|bewert|vergleich|recherche|report|audit/i.test(t)) return "analyze";
    if (/marketing|monet|pitch|launch/i.test(t)) return "business";
    return "deliver";
  }

  function extractAgentSubject(input, goal) {
    var t = String(goal || input || "").trim();
    if (!goal) {
      t = t.replace(/^(noco\s*)?agent[:\s]*/i, "");
      t = t.replace(/^(plane|plan|erstelle|erstell|bau|baue|mach|mache|entwickle|entwickeln|generiere|kreiere|designe|konzipiere|analysiere)\s*(mir\s*)?(ein(en)?\s*)?(idee|plan|konzept|projekt|app|video|logo|strategie|bericht)?\s*(fuer|für|von|zu|zum|zur)?\s*/i, "");
    }
    return t.trim().slice(0, 160) || "dein Auftrag";
  }

  function agentBullets(title, items) {
    var i, out = "**" + title + "**\n";
    for (i = 0; i < items.length; i++) out += "• " + items[i] + "\n";
    return out.trim();
  }

  function agentNumbers(title, items) {
    var i, out = "**" + title + "**\n";
    for (i = 0; i < items.length; i++) out += (i + 1) + ". " + items[i] + "\n";
    return out.trim();
  }

  function buildAgentVaultInsight(input, prepared, opts) {
    var best = findBestFromCandidates(resolveQueryCandidates(input));
    if (!shouldAcceptVaultMatch(best, input, prepared) || best.score < 12) return "";
    var vaultText = pickAnswer(best.entry, best.query || prepared, { skipFlavor: true });
    if (!vaultText || vaultText.length < 50) return "";
    var plain = stripMd(vaultText);
    var points = extractSummaryPoints(plain, 4);
    var i, section = "**Vault-Insight** · " + getTopicLabel(best.entry) + "\n";
    if (!points.length) {
      section += "1. " + plain.slice(0, 240) + (plain.length > 240 ? "…" : "");
      return section;
    }
    for (i = 0; i < points.length; i++) {
      var line = points[i].trim();
      if (line.length > 260) line = line.slice(0, 257) + "…";
      section += (i + 1) + ". " + line + "\n";
    }
    return section.trim();
  }

  function buildAgentNextSteps(intent, subject) {
    var steps = [
      "Kernziel in 1 Satz festhalten: " + subject,
      "Ersten Meilenstein mit Deadline setzen (7 Tage)",
      "Optional: NOCO Render fuer Visuals oder NOCO Inside fuer Dateien"
    ];
    if (intent === "build" || intent === "project") {
      steps[1] = "Tech-Stack & MVP-Scope in 3 Bulletpoints schreiben";
      steps[2] = "Erstes Feature lokal prototypen — dann iterieren";
    }
    if (intent === "learning") {
      steps[1] = "Heute 25 Min fokussiert starten (Pomodoro)";
      steps[2] = "Fehlerlog anlegen — wo stockt es?";
    }
    return agentNumbers("Naechste Schritte (sofort)", steps);
  }

  function buildAgentBody(intent, subject, input, opts) {
    var pro = !!(opts && opts.proMode);
    var s = subject;
    var sections = [];

    if (intent === "fitness") {
      sections.push(
        agentBullets("Ziel & Rahmen", [
          "Hauptziel: " + s,
          "Zeitbudget: 3–4 Einheiten/Woche · 35–45 Min",
          "Level: Einsteiger bis Fortgeschritten (anpassbar)"
        ]),
        agentBullets("Woche 1–4 · Grundphase", [
          "**Mo** — Ganzkoerper (Kniebeuge, Liegestuetz, Plank) · 35 Min",
          "**Mi** — Cardio Zone 2 · 30 Min",
          "**Fr** — Oberkoerper + Core · 40 Min",
          "**Sa** — Mobility/Yoga · 25 Min"
        ]),
        agentBullets("Woche 5–8 · Aufbau", [
          "Volumen +10 % pro Woche",
          "Protein ~1.6 g/kg · Schlaf 7–8 h",
          "Deload in Woche 8 (50 % Volumen)"
        ])
      );
      if (pro) {
        sections.push(agentBullets("Ernaehrung & Recovery", [
          "Hydration 2–3 L/Tag · Post-Workout Protein",
          "Dehnen 10 Min nach jeder Einheit",
          "Fortschritt tracken: Wiederholungen + Gewicht"
        ]));
      }
    } else if (intent === "learning") {
      sections.push(
        agentBullets("Lernziel", [
          "Thema: " + s,
          "Zeitrahmen: 5 Wochen · 60–90 Min/Tag",
          "Methode: Pomodoro 25/5 + aktive Wiederholung"
        ]),
        agentBullets("Phase 1 — Grundlagen (Woche 1–2)", [
          "Kernbegriffe & Formeln sammeln",
          "10 Uebungen/Tag · Fehler notieren",
          "Woechentlicher Selbsttest (30 Min)"
        ]),
        agentBullets("Phase 2 — Vertiefung (Woche 3–4)", [
          "Schwachstellen gezielt ueben",
          "Zeitdruck-Tests simulieren",
          "Zusammenhaenge visualisieren (Mindmap)"
        ]),
        agentNumbers("Phase 3 — Pruefung (Woche 5)", [
          "Altklausuren / Musteraufgaben",
          "Letzte Luecken schliessen",
          "Tag vorher: leichte Wiederholung, kein Cramping"
        ])
      );
    } else if (intent === "project") {
      sections.push(
        agentBullets("Vision", [
          "Idee: " + s,
          "Problem → Zielgruppe → Loesung in 3 Saetzen",
          "USP: Was macht es einzigartig?"
        ]),
        agentNumbers("MVP — 3 Kernfeatures", [
          "Feature A: Kernnutzen sofort erlebbar",
          "Feature B: Differenzierung / Wow-Moment",
          "Feature C: Retention oder Sharing"
        ]),
        agentBullets("4-Wochen-Roadmap", [
          "**W1** — Research + Wireframes + Scope",
          "**W2** — MVP Feature A bauen",
          "**W3** — Feature B + erste Tests",
          "**W4** — Polish, Launch, Feedback sammeln"
        ])
      );
      if (/logo|branding|poster|kanal/i.test(String(input || ""))) {
        sections.push(agentBullets("Branding-Hinweis", [
          "3 Varianten skizzieren (Minimal · Bold · Retro)",
          "NOCO Render: *Mach ein Logo fuer " + s + "*",
          "Kontrast & Lesbarkeit auf dunklem Hintergrund pruefen"
        ]));
      }
    } else if (intent === "plan") {
      sections.push(
        agentBullets("Kurzbriefing", [
          "Auftrag: " + s,
          "Output: Strukturierter Mehrphasen-Plan",
          "Fokus: Umsetzbar, messbar, priorisiert"
        ]),
        agentBullets("Phase 1 — Fundament", [
          "Ziel & Scope schriftlich fixieren",
          "Ressourcen, Tools & Zeitbudget klaren",
          "Risiken & Annahmen dokumentieren"
        ]),
        agentBullets("Phase 2 — Umsetzung", [
          "Meilensteine mit Deadlines (2–4 Wochen)",
          "Taegliche/wöchentliche Routinen definieren",
          "Feedback-Schleifen einplanen"
        ]),
        agentBullets("Phase 3 — Optimierung", [
          "KPIs messen & anpassen",
          "Skalierung oder Vereinfachung",
          "Lessons Learned festhalten"
        ])
      );
      if (pro) {
        sections.push(agentBullets("Risiko-Matrix", [
          "Zeitverzug → Puffer 20 % einplanen",
          "Scope Creep → Must-have vs. Nice-to-have",
          "Motivation → kleine Wins woechentlich feiern"
        ]));
      }
    } else if (intent === "idea") {
      sections.push(
        agentBullets("Ideen-Spark", [
          "Thema: " + s,
          "Brainstorm-Modus: Quantitaet vor Perfektion",
          "3 Richtungen unten — eine vertiefen"
        ]),
        agentNumbers("3 Konzept-Richtungen", [
          "**A — Minimal:** Schnell, klar, wenig Aufwand · Fokus auf Kernnutzen",
          "**B — Bold:** Auffaellig, emotional, Social-Wow · hoeheres Risiko, mehr Reach",
          "**C — Nische:** Spezifische Zielgruppe · tiefe Loesung, loyaler Kern"
        ]),
        agentBullets("Vertiefung (gewaehlte Richtung)", [
          "Name + ein Satz Pitch",
          "3 Features die das Problem loesen",
          "Erster Test mit 5 echten Nutzern"
        ])
      );
    } else if (intent === "build") {
      sections.push(
        agentBullets("Build-Brief", [
          "Projekt: " + s,
          "Ziel: Umsetzbares technisches Konzept",
          "Annahme: Web/App/Tool — anpassbar"
        ]),
        agentNumbers("Architektur-Skizze", [
          "**Frontend** — UI, Routing, State (z.B. React/Vanilla)",
          "**Logik** — Kernfunktionen modular",
          "**Daten** — localStorage / API / Dateien je nach Scope"
        ]),
        agentBullets("Implementierungs-Reihenfolge", [
          "1. Skeleton + Navigation",
          "2. Kernfeature end-to-end",
          "3. Polish, Fehlerbehandlung, Export",
          "4. Optional: NOCO Motion / Render fuer Assets"
        ])
      );
      if (pro) {
        sections.push(agentBullets("Qualitaets-Checkliste", [
          "Mobile-first Layout",
          "Ladezustand & leere States",
          "Barrierefreiheit: Kontrast, Fokus, Labels"
        ]));
      }
    } else if (intent === "analyze") {
      sections.push(
        agentBullets("Analyse-Rahmen", [
          "Gegenstand: " + s,
          "Methode: Strukturiert · evidenzbasiert",
          "Output: Erkenntnisse + Empfehlungen"
        ]),
        agentNumbers("Analyse-Schritte", [
          "Kontext & Fragestellung schaerfen",
          "Daten/Quellen sammeln (Vault + eigene Notizen)",
          "Staerken, Schwaechen, Chancen, Risiken",
          "3 priorisierte Empfehlungen ableiten"
        ])
      );
    } else if (intent === "business" || intent === "marketing") {
      sections.push(
        agentBullets("Marketing-Snapshot", [
          "Kampagne: " + s,
          "Zielgruppe + Kernbotschaft definieren",
          "Kanal-Mix: Social · SEO · E-Mail · Events"
        ]),
        agentNumbers("4-Wochen-Kampagne", [
          "**W1** — Research, Personas, Messaging",
          "**W2** — Content erstellen (3 Formate)",
          "**W3** — Launch + Paid/Organic Mix",
          "**W4** — KPIs messen, A/B testen, optimieren"
        ]),
        agentBullets("Budget & KPIs", [
          "Budget: Start klein (Test 50–200 EUR simuliert)",
          "KPIs: Reichweite · Klicks · Conversion",
          "Tools: Analytics, Canva, NOCO Render fuer Visuals"
        ])
      );
    } else if (intent === "content") {
      sections.push(
        agentBullets("Content-Plan", [
          "Kanal/Thema: " + s,
          "Format: Long · Short · Live — Mix waehlen",
          "Ziel: Reichweite + Retention + Community"
        ]),
        agentBullets("Upload-Rhythmus (4 Wochen)", [
          "**W1** — 2 Videos + 3 Shorts · Intro-Serie",
          "**W2** — 2 Videos · Trend-Thema aufgreifen",
          "**W3** — 1 Collab/Live · Community fragen",
          "**W4** — Best-of + Teaser naechste Serie"
        ]),
        agentNumbers("Video-Ideen (Start)", [
          "Tutorial / How-to zum Kernthema",
          "Behind the Scenes / Setup",
          "Top 5 Liste mit starker Hook (erste 3 Sek)"
        ])
      );
    } else if (intent === "travel") {
      sections.push(
        agentBullets("Reise-Ueberblick", [
          "Ziel: " + s,
          "Dauer: 5–7 Tage (anpassbar)",
          "Stil: Kultur · Natur · City — Mix"
        ]),
        agentNumbers("Tagesplan (Beispiel)", [
          "**Tag 1** — Ankunft, Orientierung, leichtes Programm",
          "**Tag 2** — Hauptattraktion + lokales Essen",
          "**Tag 3** — Natur/Ausflug + Pause",
          "**Tag 4** — Museum/Markt + Abendprogramm",
          "**Tag 5** — Freier Tag / Shopping / Strand"
        ]),
        agentBullets("Packliste & Budget", [
          "Dokumente, Adapter, Apotheke, Powerbank",
          "Budget: Transport · Unterkunft · Essen · Puffer 15 %",
          "Tipps: Offline-Karte, Wasser, frueh buchen"
        ])
      );
    } else if (intent === "meal") {
      sections.push(
        agentBullets("Meal-Prep Plan", [
          "Fokus: " + s,
          "5 Tage vorkochen · 2 Portionen/Tag",
          "Balance: Protein · Gemuese · Komplexe Kohlenhydrate"
        ]),
        agentBullets("Wochenplan", [
          "**Mo** — Haehnchen, Reis, Brokkoli",
          "**Di** — Linsen-Curry mit Gemuese",
          "**Mi** — Pasta mit Tomaten & Mozzarella",
          "**Do** — Ofengemuese + Quinoa + Feta",
          "**Fr** — Wraps mit Hack/vegan + Salat"
        ]),
        agentBullets("Einkaufsliste (Kern)", [
          "Protein: Haehnchen, Eier, Linsen, Tofu",
          "Gemuese: Brokkoli, Paprika, Spinat, Tomaten",
          "Basics: Reis, Nudeln, Quinoa, Gewuerze, Olivenoel"
        ])
      );
    } else if (intent === "resume") {
      sections.push(
        agentBullets("Karriere-Ziel", [
          "Position: " + s,
          "Lebenslauf: 1 Seite · klare Struktur",
          "Anschreiben: Problem des Arbeitgebers loesen"
        ]),
        agentNumbers("Lebenslauf-Struktur", [
          "Kopf: Name, Kontakt, LinkedIn/GitHub",
          "Profil: 3 Saetze — Staerken + Ziel",
          "Erfahrung: Ergebnisse mit Zahlen (wenn moeglich)",
          "Skills: Tech + Soft Skills getrennt",
          "Ausbildung + Zertifikate"
        ]),
        agentBullets("Interview-Vorbereitung", [
          "5 STAR-Stories (Situation, Task, Action, Result)",
          "Fragen an den Arbeitgeber vorbereiten",
          "Probe-Interview mit Freund:in"
        ])
      );
    } else if (intent === "social") {
      sections.push(
        agentBullets("Social-Strategie", [
          "Kanal: " + s,
          "Zeitraum: 30 Tage · 4 Posts/Woche",
          "Mix: 40 % Value · 30 % Story · 20 % Promo · 10 % Fun"
        ]),
        agentNumbers("30-Tage-Plan (Auszug)", [
          "**W1** — Intro + 3 Value-Posts + 1 Reel",
          "**W2** — Tutorial + Behind the Scenes",
          "**W3** — User-Frage + Trend-Aufgreifer",
          "**W4** — Recap + Teaser + Community-Shoutout"
        ]),
        agentBullets("Wachstums-Tipps", [
          "Hook in ersten 2 Sekunden · klare CTA",
          "Konsistenz > Perfektion",
          "NOCO Render fuer Thumbnails & Grafiken"
        ])
      );
    } else if (intent === "home") {
      sections.push(
        agentBullets("Einrichtungs-Brief", [
          "Raum: " + s,
          "Stil: Modern · Cozy · Minimal — waehlen",
          "Budget in 3 Stufen: Low · Mid · High"
        ]),
        agentNumbers("Umsetzung in 4 Phasen", [
          "**1** — Moodboard & Mass nehmen",
          "**2** — Farben + Lichtplan (warm/kalt)",
          "**3** — Moebel-Layout (Zonen: Arbeit, Relax, Storage)",
          "**4** — Deko, Pflanzen, finale Details"
        ]),
        agentBullets("Quick Wins", [
          "Licht: 2–3 Lichtquellen statt einer Decke",
          "Textilien: Kissen, Teppich, Vorhaenge",
          "Aufraeumen: 80 % weg → Raum wirkt groesser"
        ])
      );
    } else if (intent === "business") {
      sections.push(
        agentBullets("Business-Snapshot", [
          "Venture: " + s,
          "Zielgruppe + Problem + Loesung",
          "Monetarisierung: Abo · Einmalkauf · Freemium"
        ]),
        agentNumbers("Go-to-Market", [
          "MVP validieren (10 Interviews)",
          "Landing Page + Warteliste",
          "Erster Kanal: Social · Community · SEO",
          "Launch in 4 Wochen — iterieren nach Feedback"
        ])
      );
    } else {
      sections.push(
        agentBullets("Agent-Auftrag", [
          "Thema: " + s,
          "Modus: Vollstaendiges Deliverable — nicht nur Vault-Snippet",
          "Struktur: Briefing → Plan → Umsetzung → Naechste Schritte"
        ]),
        agentNumbers("Umsetzungsplan", [
          "Ziel in einem Satz formulieren",
          "3 konkrete Arbeitspakete definieren",
          "Ersten Schritt heute starten (15 Min)",
          "Woechentlich Fortschritt pruefen"
        ]),
        agentBullets("Ressourcen", [
          "NOCO Vault fuer Hintergrundwissen",
          "NOCO Brief fuer Recherche-Tiefe",
          "NOCO Render / Motion fuer visuelle Assets"
        ])
      );
    }

    return sections.join("\n\n");
  }

  function composeAgentDeliverable(input, opts) {
    opts = opts || {};
    if (!input || !String(input).trim()) {
      return {
        text: "Beschreibe deinen Auftrag — z.B. *Plane eine App-Idee*, *Erstelle einen Lernplan* oder *Baue ein Konzept fuer …*",
        confidence: 0,
        topic: "NOCO Agent",
        variants: 1
      };
    }

    var subject = extractAgentSubject(input, opts.goal);
    var intent = detectAgentIntent(input, opts);
    var prepared = prepareUserMessage(input);
    var intentLabels = {
      plan: "Strategie-Plan",
      idea: "Ideen-Konzept",
      build: "Build-Brief",
      analyze: "Analyse-Report",
      business: "Business-Plan",
      fitness: "Fitness-Plan",
      learning: "Lernplan",
      project: "Projekt-Blueprint",
      marketing: "Marketing-Plan",
      content: "Content-Plan",
      travel: "Reiseplan",
      meal: "Meal-Prep",
      resume: "Karriere-Plan",
      social: "Social-Strategie",
      home: "Einrichtungs-Plan",
      deliver: "Agent-Ergebnis"
    };
    var proTag = opts.proMode ? " · Pro" : "";
    var header = "**NOCO Agent — " + (intentLabels[intent] || "Ergebnis") + "**" + proTag;
    var briefing = "**Auftrag:** " + subject + "\n**Engine:** Multi-Source Synthesis — Struktur + Vault-Zusatz";
    var body = buildAgentBody(intent, subject, input, opts);
    var vault = buildAgentVaultInsight(input, prepared, opts);
    var next = buildAgentNextSteps(intent, subject);
    var parts = [header, "", briefing, "", body];
    if (vault) parts.push("", vault);
    parts.push("", next);
    parts.push("\n---\n*Agent-Modus · lokal synthetisiert · Animation zeigt Ausfuehrung — Ergebnis ist das Deliverable.*");
    var text = parts.join("\n");
    if (opts.proMode) opts.modelTier = "pro";
    else if (!opts.modelTier) opts.modelTier = "flux";
    if (!opts.skipFlavor) text = applyModelFlavor(text, opts);
    return {
      text: text,
      topic: "NOCO Agent",
      confidence: 94,
      variants: 1,
      agentIntent: intent
    };
  }

  function isNocoBrandedQuery(input) {
    return /\bnoco\b|noco os|noco ai|noco flux|noco prism|noco spark|noco exclusive|noco vault|noco render|noco motion|noco lens|noco agent|noco brief|noco echo|noco sparks|noco access|noco rush|noco inside|noco pay|keycard|firstlight|liquid glass/i.test(normalize(input));
  }

  function resolveBestVaultMatch(input) {
    var prepared = prepareUserMessage(input);
    var best = findBestFromCandidates(resolveQueryCandidates(input));

    if (best.score < 6) {
      var fuzzy = fuzzyTopicMatch(input);
      if (fuzzy.score > best.score) best = fuzzy;
      if (best.score < 6) {
        var topicOnly = topicOnlyMatch(input);
        if (topicOnly.score > best.score) best = topicOnly;
      }
      if (best.score < 6) {
        var cascade = wordCascadeMatch(input);
        if (cascade.score > best.score) best = cascade;
      }
      if (best.score < 6) {
        best = relaxedTopicMatch(best, input);
      }
    }

    return {
      best: best,
      prepared: prepared,
      accepted: shouldAcceptVaultMatch(best, input, prepared)
    };
  }

  var SMALLTALK_EXACT = {
    hey: 1, hi: 1, hallo: 1, moin: 1, servus: 1, hello: 1, na: 1, yo: 1,
    danke: 1, thanks: 1, thx: 1, ok: 1, okay: 1, lol: 1, haha: 1, cool: 1,
    nice: 1, super: 1, perfekt: 1, "guten morgen": 1, "guten abend": 1, "guten tag": 1
  };

  var WIKI_STOP_ARTICLES = /^(ein|eine|einer|einem|einen|eines|der|die|das|dem|den|des|the|a|an)$/i;

  function normSmalltalk(s) {
    return normalize(String(s || "").replace(/[!?.…,]+$/g, "").trim());
  }

  function isSmalltalkQuery(input) {
    var raw = String(input || "").trim();
    if (!raw || raw.charAt(0) === "/") return false;
    var core = normSmalltalk(stripQuestionNoise(fixCommonTypos(raw)));
    if (!core) return true;
    if (SMALLTALK_EXACT[core]) return true;
    if (/^(hey|hi|hallo|moin|servus|na|yo)[,.!\s]*$/i.test(core)) return true;
    if (/^(wie geht|wie gehts|was geht|alles klar|wie laeuft|alles fit)/.test(core)) return true;
    if (/^(danke|thanks|thx|super|cool|nice|perfekt|genial|lol|haha)\b/.test(core) && core.split(/\s+/).length <= 4) return true;
    if (/^(erzaehl einen witz|erzähl einen witz|witz|smalltalk|langweilig|langeweile)/.test(core)) return true;
    if (core.split(/\s+/).length <= 2 && !/^(was|wer|wie|warum|wann|wo|welche|erklaer|definiere|tipps)\b/.test(core)) {
      if (isSmalltalkFast(input)) return true;
      var vault = resolveBestVaultMatch(input);
      if (vault.accepted && vault.best.entry) {
        var k = (vault.best.entry.keys || []).join(" ");
        if (/hallo|witz|danke|smalltalk|wie geht|langweilig|lieblings/.test(k)) return true;
      }
    }
    return false;
  }

  function isEncyclopedicQuery(input) {
    var prepared = prepareUserMessage(input);
    var core = stripQuestionNoise(fixCommonTypos(String(prepared || input || "")));
    if (!core) return false;
    if (/^(was ist|was sind|was war|was waren|wer ist|wer war|wer waren|wie funktioniert|wie ist|wie sind|warum ist|warum sind|wo ist|wo liegt|wann war|wann wurde|wann ist|was bedeutet|was heisst|was heißt|was kostet|wie gross|wie groß|wie alt|wie viele|wie viel|erklaer|erklaere|erklär|beschreib|definiere|tell me about|what is|what are|who is|define |welche bedeutung|definition von|bedeutung von)/.test(core)) return true;
    if (/^(tipps|wie (mache|mach|kann|soll) ich)/.test(core)) return true;
    if (/^(fakten|fakt über|fakt ueber|infos? (zu|über|ueber|zum|zur)|informationen (zu|über|ueber)|alles über|alles ueber|erzaehl mir über|erzähl mir über)/.test(core)) return true;
    if (/^(kannst du mir (sagen|erklären|erklaeren)|sag mir|weißt du|weisst du was|kennst du)/.test(core)) return true;
    if (/^(geschichte (von|der|des)|hauptstadt|einwohner|geographie|geografie|biografie)/.test(core)) return true;
    if (extractTopicFromQuestion(prepared) || extractTopicFromQuestion(input)) return true;
    return false;
  }

  function isGeneralKnowledgeQuery(input) {
    if (isEncyclopedicQuery(input)) return true;
    var prepared = prepareUserMessage(input);
    var core = stripQuestionNoise(fixCommonTypos(String(prepared || input || "")));
    if (!core) return false;
    if (/^(welche|wieviel|wie oft|in welchem|aus welchem|typische|beispiele fuer|beispiele für|unterschied zwischen|vergleich zwischen)/.test(core)) return true;
    if (/\b(land|stadt|planet|tier|pflanze|krankheit|chemie|physik|geschichte|krieg|präsident|kanzler|könig|koenig|museum|fluss|berg|ozean|kontinent)\b/.test(core) && core.split(/\s+/).length <= 14) return true;
    var topic = extractTopicFromQuestion(prepared) || extractTopicFromQuestion(input);
    if (topic && topic.length >= 3 && !isNocoBrandedQuery(input)) return true;
    if (/^[a-zäöüß\-]{3,32}$/i.test(core) && !isSmalltalkQuery(input) && !isNocoBrandedQuery(input)) return true;
    if (/^[a-zäöüß\-]{2,24}(,\s*[a-zäöüß\-]{2,24})+$/i.test(core.replace(/\s+/g, ""))) return true;
    if (splitTopicList(input).length >= 2) return true;
    return false;
  }

  function splitTopicList(input) {
    var raw = String(input || "").trim();
    if (!raw) return [];
    return raw.split(/[,;|\/\n]+/).map(function (p) {
      return cleanWikiTopic(stripQuestionNoise(fixCommonTypos(p.trim())));
    }).filter(function (p) { return p && p.length >= 2; });
  }

  function isConfidentVaultOnly(input, vaultMatch) {
    if (isNocoBrandedQuery(input)) return true;
    if (isCapabilitiesQuery(input) || isBriefQuery(input)) return true;
    if (isChatRecallQuery(prepareUserMessage(input))) return true;
    if (isSmalltalkFast(input)) return true;
    if (!vaultMatch || !vaultMatch.accepted || !vaultMatch.best || !vaultMatch.best.entry) return false;
    if (isPracticalVaultQuery(input) && vaultMatch.best.score >= 8) return true;
    var keys = (vaultMatch.best.entry.keys || []).join(" ");
    if (/noco|keycard|exclusive|fake.?virus|liquid glass|firstlight|forge|explorer|noco pay|noco flux|noco os|workspace|noco ai|noco prism|noco spark|pwa|hallo|witz|danke|smalltalk|wie geht|langweilig|lieblings/.test(keys)) {
      if (isStrongNocoVaultMatch(vaultMatch, input)) return true;
      if (/hallo|witz|danke|smalltalk|wie geht|langweilig|lieblings/.test(keys)) {
        return isSmalltalkFast(input) || vaultMatch.best.score >= 9;
      }
    }
    return false;
  }

  function extractNexusWikiQuery(input) {
    if (isSmalltalkQuery(input) || isNocoBrandedQuery(input)) return "";
    var q = extractWikiQuery(input);
    if (q) return q;
    var parts = splitTopicList(input);
    var i, p;
    for (i = 0; i < parts.length; i++) {
      p = parts[i];
      if (p && isValidWikiQuery(p)) return refineWikiSearchQuery(p, input);
    }
    var raw = String(input || "").trim();
    var first = cleanWikiTopic(stripQuestionNoise(fixCommonTypos(raw.split(/[,;\s|\/]+/)[0] || "")));
    if (first && isValidWikiQuery(first)) return refineWikiSearchQuery(first, input);
    return "";
  }

  function isStrongNocoVaultMatch(vaultMatch, input) {
    if (!vaultMatch || !vaultMatch.accepted || !vaultMatch.best || !vaultMatch.best.entry) return false;
    var keys = (vaultMatch.best.entry.keys || []).join(" ");
    if (/noco|keycard|exclusive|fake.?virus|liquid glass|firstlight|forge|explorer|noco pay|noco flux|noco os|workspace|noco ai|noco prism|noco spark|pwa|keycard/.test(keys)) {
      return vaultMatch.best.score >= 5;
    }
    if (/hallo|witz|danke|smalltalk|wie geht|langweilig|lieblings/.test(keys)) return true;
    if (isNocoBrandedQuery(input)) return vaultMatch.best.score >= 5;
    return vaultMatch.best.score >= 12;
  }

  function hasRecentWikiContext(chatHistory) {
    if (!chatHistory || !chatHistory.length) return false;
    var i, m;
    for (i = chatHistory.length - 1; i >= 0 && i >= chatHistory.length - 6; i--) {
      m = chatHistory[i];
      if (m && m.role === "ai" && (m.wikiSource || (m.topic && /wikipedia/i.test(String(m.topic))))) return true;
    }
    return false;
  }

  var WIKI_DISAMBIGUATE = {
    quelle: "Quelle (Begriffsklärung)",
    bank: "Bank (Begriffsklärung)",
    birne: "Birne (Begriffsklärung)",
    hund: "Hund",
    katze: "Katze",
    maus: "Maus (Begriffsklärung)",
    apple: "Apple",
    orange: "Orange (Begriffsklärung)",
    python: "Python (Begriffsklärung)",
    java: "Java (Begriffsklärung)",
    berlin: "Berlin",
    paris: "Paris",
    mars: "Mars (Begriffsklärung)",
    sonne: "Sonne",
    mond: "Mond",
    essen: "Essen (Begriffsklärung)",
    tor: "Tor (Begriffsklärung)",
    arm: "Arm (Begriffsklärung)",
    kind: "Kind",
    see: "See (Begriffsklärung)",
    rock: "Rock (Begriffsklärung)",
    band: "Band (Begriffsklärung)",
    golf: "Golf (Begriffsklärung)",
    match: "Match (Begriffsklärung)",
    star: "Star (Begriffsklärung)",
    batterie: "Batterie (Begriffsklärung)",
    kiefer: "Kiefer (Begriffsklärung)",
    gehen: "Gehen (Begriffsklärung)"
  };

  function refineWikiSearchQuery(query, input) {
    var q = normSmalltalk(cleanWikiTopic(query));
    if (!q) return query;
    if (WIKI_DISAMBIGUATE[q] && isGeneralKnowledgeQuery(input)) {
      return WIKI_DISAMBIGUATE[q];
    }
    return query;
  }

  function isSmalltalkFast(input) {
    var core = normSmalltalk(stripQuestionNoise(fixCommonTypos(String(input || "").trim())));
    if (!core) return true;
    if (SMALLTALK_EXACT[core]) return true;
    if (/^(hey|hi|hallo|moin|servus|na|yo)[,.!\s]*$/i.test(core)) return true;
    if (/^(wie geht|wie gehts|was geht|alles klar|wie laeuft|alles fit)/.test(core)) return true;
    if (/^(danke|thanks|thx|super|cool|nice|perfekt|genial|lol|haha)\b/.test(core) && core.split(/\s+/).length <= 4) return true;
    if (/^(erzaehl einen witz|erzähl einen witz|witz|smalltalk|langweilig|langeweile)/.test(core)) return true;
    return false;
  }

  function isPracticalVaultQuery(input) {
    var prepared = prepareUserMessage(input);
    var core = stripQuestionNoise(fixCommonTypos(String(prepared || input || "")));
    if (/^(tipps|wie (mache|mach|kann|soll) ich|rezept|anleitung|schritt fuer|schritt für|was soll ich)/.test(core)) return true;
    if (/^(empfehlung|empfehl|vergleiche|vergleich )/.test(core)) return true;
    if (isBriefQuery(input) || isBriefQuery(prepared)) return true;
    if (isCompareQuery(prepared) || isCompareQuery(input)) return true;
    return false;
  }

  function isWikiPreferredTopic(input) {
    var prepared = prepareUserMessage(input);
    var blob = normalize(String(prepared || input || ""));
    if (/\b(wikipedia|wiki|nachschlagen|recherchier|faktenbuch|enzyklop)/.test(blob)) return true;
    if (/\b(hauptstadt|einwohner|geographie|geografie|biografie|geburtsdatum|gestorben|nobelpreis|jahre vor christus)\b/.test(blob)) return true;
    if (/\b(planet|galaxie|dinosaurier|mittelalter|antike|renaissance|weltkrieg|kaiser|koenig|königin|präsident|kanzler)\b/.test(blob)) return true;
    if (/\b(element|periodensystem|organismus|bakterie|protein|genom|evolution|photosynthese)\b/.test(blob)) return true;
    if (/\b(einstein|newton|darwin|shakespeare|mozart|beethoven|napoleon|cleopatra)\b/.test(blob)) return true;
    return false;
  }

  function scoreWikiAffinity(input) {
    var s = 0;
    var prepared = prepareUserMessage(input);
    var core = stripQuestionNoise(fixCommonTypos(String(prepared || input || "")));
    if (isGeneralKnowledgeQuery(input)) s += 42;
    if (isWikiPreferredTopic(input)) s += 38;
    if (isEncyclopedicQuery(input)) s += 28;
    if (/^(wer|wann|wo|was ist|was war|was sind|was bedeutet)/.test(core)) s += 22;
    if (/\b(19|20)\d{2}\b/.test(core)) s += 14;
    if (/\b(stadt|land|planet|ozean|fluss|berg|kontinent|insel|hauptstadt)\b/.test(core)) s += 18;
    if (/\b(km|meter|tonnen|prozent|grad celsius|°c)\b/.test(core)) s += 12;
    if (extractTopicFromQuestion(prepared) && !isNocoBrandedQuery(input)) s += 16;
    return s;
  }

  function scoreVaultAffinity(input, vaultMatch) {
    var s = 0;
    if (isPracticalVaultQuery(input)) s += 55;
    if (isNocoBrandedQuery(input)) s += 85;
    if (isCapabilitiesQuery(input) || isBriefQuery(input)) s += 70;
    if (isChatRecallQuery(prepareUserMessage(input))) s += 65;
    if (isSmalltalkFast(input)) s += 48;
    if (!vaultMatch) vaultMatch = resolveBestVaultMatch(input);
    if (vaultMatch.accepted && vaultMatch.best.entry) {
      s += Math.min(45, vaultMatch.best.score);
      if (isStrongNocoVaultMatch(vaultMatch, input)) s += 40;
    }
    return s;
  }

  function classifyKnowledgeIntent(input, chatHistory, routeOpts) {
    routeOpts = routeOpts || {};
    chatHistory = chatHistory || [];
    var wikiQuery, followTopic, vaultMatch, rawWord, wikiScore, vaultScore;

    if (isNocoBrandedQuery(input) || isCapabilitiesQuery(input) || isBriefQuery(input) ||
        isChatRecallQuery(prepareUserMessage(input))) {
      return { route: "vault", reason: "noco-system", wikiQuery: "", intent: "noco", confidence: 96 };
    }

    if (isSmalltalkFast(input) && !routeOpts.vaultDisabled) {
      return { route: "vault", reason: "smalltalk", wikiQuery: "", intent: "smalltalk", confidence: 94 };
    }

    wikiQuery = extractNexusWikiQuery(input);
    vaultMatch = !routeOpts.vaultDisabled ? resolveBestVaultMatch(input) : null;
    wikiScore = scoreWikiAffinity(input);
    vaultScore = scoreVaultAffinity(input, vaultMatch);

    if (isWikiPreferredTopic(input) && wikiQuery && isValidWikiQuery(wikiQuery)) {
      wikiScore += 28;
    }

    if (isFollowUpQuery(input, chatHistory) || hasRecentWikiContext(chatHistory)) {
      followTopic = wikiQuery || extractFollowUpTopic(chatHistory);
      followTopic = refineWikiSearchQuery(cleanWikiTopic(followTopic), input);
      if (isValidWikiQuery(followTopic)) {
        return { route: "wiki", reason: "followup", wikiQuery: followTopic, intent: "wiki", confidence: 91, wikiScore: wikiScore, vaultScore: vaultScore };
      }
    }

    if (!routeOpts.vaultDisabled && vaultMatch && isConfidentVaultOnly(input, vaultMatch)) {
      return { route: "vault", reason: "vault-confident", wikiQuery: wikiQuery, intent: "vault", confidence: 90, wikiScore: wikiScore, vaultScore: vaultScore };
    }

    if (wikiQuery && isValidWikiQuery(wikiQuery)) {
      if (wikiScore >= vaultScore - 8 || vaultScore < 55) {
        return {
          route: "wiki",
          reason: wikiScore >= 40 ? "nexus-wiki-score" : "nexus-wiki-default",
          wikiQuery: wikiQuery,
          intent: "wiki",
          confidence: Math.min(97, 58 + Math.round(wikiScore * 0.45)),
          wikiScore: wikiScore,
          vaultScore: vaultScore
        };
      }
    }

    if (!routeOpts.vaultDisabled && vaultScore >= 72 && vaultMatch && vaultMatch.accepted && isConfidentVaultOnly(input, vaultMatch)) {
      return { route: "vault", reason: "vault-confident", wikiQuery: wikiQuery, intent: "vault", confidence: 88, wikiScore: wikiScore, vaultScore: vaultScore };
    }

    if (!wikiQuery || !isValidWikiQuery(wikiQuery)) {
      wikiQuery = extractNexusWikiQuery(input);
    }

    if (wikiQuery && isValidWikiQuery(wikiQuery)) {
      return { route: "wiki", reason: "nexus-wiki-default", wikiQuery: wikiQuery, intent: "wiki", confidence: 82, wikiScore: wikiScore, vaultScore: vaultScore };
    }

    rawWord = cleanWikiTopic(String(input || "").trim().split(/[,;\s|\/]+/)[0] || "");
    if (rawWord && isValidWikiQuery(rawWord) && !isNocoBrandedQuery(input)) {
      return {
        route: "wiki",
        reason: "nexus-wiki-fallback",
        wikiQuery: refineWikiSearchQuery(rawWord, input),
        intent: "wiki",
        confidence: 76,
        wikiScore: wikiScore,
        vaultScore: vaultScore
      };
    }

    if (!routeOpts.vaultDisabled && vaultMatch && isConfidentVaultOnly(input, vaultMatch)) {
      return { route: "vault", reason: "vault-confident", wikiQuery: "", intent: "vault", confidence: 85, wikiScore: wikiScore, vaultScore: vaultScore };
    }

    if (!routeOpts.vaultDisabled && vaultScore >= 80 && vaultMatch && vaultMatch.accepted) {
      return { route: "vault", reason: "vault-practical", wikiQuery: "", intent: "vault", confidence: 80, wikiScore: wikiScore, vaultScore: vaultScore };
    }

    if (!routeOpts.vaultDisabled) {
      return { route: "vault", reason: "no-wiki-query", wikiQuery: "", intent: "vault", confidence: 45, wikiScore: wikiScore, vaultScore: vaultScore };
    }

    return { route: "wiki", reason: "vault-off", wikiQuery: rawWord, intent: "wiki", confidence: 70, wikiScore: wikiScore, vaultScore: vaultScore };
  }

  function isFollowUpQuery(input, chatHistory) {
    if (!chatHistory || !chatHistory.length) return false;
    var core = stripQuestionNoise(fixCommonTypos(prepareUserMessage(input)));
    if (!core) return false;
    if (/^(und |auch |noch |nochmal |mehr dazu|erzaehl mehr|erzähl mehr|weiter|details|ausfuehrlich|genauer|kannst du das|was meinst du)/.test(core)) return true;
    if (/^(warum|wie|wann|wo|wer)\b/.test(core) && core.split(/\s+/).length <= 8) return true;
    if (/^(das|dies|dieses|der |die |es )\b/.test(core) && core.split(/\s+/).length <= 10) return true;
    return false;
  }

  function extractFollowUpTopic(chatHistory) {
    var i, m, t;
    for (i = chatHistory.length - 1; i >= 0; i--) {
      m = chatHistory[i];
      if (!m) continue;
      if (m.role === "ai" && m.wikiSource && m.wikiSource.title) {
        return String(m.wikiSource.title).trim();
      }
      if (m.role === "user" && m.text) {
        t = extractNexusWikiQuery(m.text) || extractWikiQuery(m.text);
        if (t && t.length >= 2) return t;
      }
    }
    return "";
  }

  function cleanWikiTopic(topic) {
    var t = String(topic || "").trim().replace(/[?!.…]+$/g, "").trim();
    var parts, i;
    if (!t) return "";
    parts = t.split(/\s+/).filter(Boolean);
    while (parts.length && WIKI_STOP_ARTICLES.test(parts[0])) parts.shift();
    t = parts.join(" ").trim();
    t = t.replace(/\s+(eigentlich|bitte|genau|kurz|nochmal)$/i, "").trim();
    t = t.replace(/\s+(machen|tun|anfangen|funktioniert)$/i, "").trim();
    return t;
  }

  function isValidWikiQuery(q) {
    if (!q || q.length < 2) return false;
    if (isSmalltalkQuery(q)) return false;
    var n = normSmalltalk(q);
    if (SMALLTALK_EXACT[n]) return false;
    if (n.length < 3 && !/^(ki|ai|eu|os|dna|rna)$/i.test(n)) return false;
    return true;
  }

  function extractWikiQuery(input) {
    if (isSmalltalkQuery(input)) return "";
    var prepared = prepareUserMessage(input);
    var raw = String(input || "").trim();
    var topic = extractTopicFromQuestion(prepared) || extractTopicFromQuestion(input);
    topic = cleanWikiTopic(topic);
    if (topic && isValidWikiQuery(topic)) return refineWikiSearchQuery(topic, input);
    var core = cleanWikiTopic(stripQuestionNoise(fixCommonTypos(prepared)));
    if (core && isValidWikiQuery(core) && isGeneralKnowledgeQuery(input)) {
      return refineWikiSearchQuery(core, input);
    }
    core = cleanWikiTopic(stripQuestionNoise(fixCommonTypos(raw)));
    if (core && isValidWikiQuery(core) && !isNocoBrandedQuery(input)) {
      if (isGeneralKnowledgeQuery(input) || core.split(/\s+/).length <= 2 || splitTopicList(input).length >= 1) {
        return refineWikiSearchQuery(core.split(/[,;|\/]/)[0] || core, input);
      }
    }
    var parts, i, p;
    parts = splitTopicList(input);
    if (parts.length && isValidWikiQuery(parts[0])) {
      return refineWikiSearchQuery(parts[0], input);
    }
    return "";
  }

  function resolveKnowledgeRoute(input, opts) {
    opts = opts || {};
    var c = classifyKnowledgeIntent(input, opts.chatHistory || [], opts);
    return {
      route: c.route,
      reason: c.reason,
      wikiQuery: c.wikiQuery || "",
      intent: c.intent,
      confidence: c.confidence || 0,
      wikiScore: c.wikiScore,
      vaultScore: c.vaultScore
    };
  }

  function isNexusVaultRoute(routeInfo) {
    if (!routeInfo || routeInfo.route !== "vault") return false;
    return /^(vault-confident|noco-system|smalltalk|vault-practical)$/.test(routeInfo.reason || "");
  }

  function shouldAcceptVaultMatch(best, input, prepared) {
    var topic, topicScore, topicSyn;
    if (!best || !best.entry) return false;
    if (best.score >= 6) return true;
    if (best.score >= 5) {
      topic = extractTopicFromQuestion(prepared) || extractTopicFromQuestion(input);
      if (topic) {
        topicScore = scoreMatch("was ist " + topic, best.entry.keys);
        topicSyn = applyTopicSynonyms(topic);
        if (topicSyn && topicSyn !== topic) {
          topicScore = Math.max(topicScore, scoreMatch("was ist " + topicSyn, best.entry.keys));
        }
        if (topicScore >= 52) return true;
      }
    }
    return false;
  }

  function think(input, opts) {
    opts = opts || {};
    var best, text, fbIdx, fbText, topic, prepared, closest, extracted;

    if (opts.adjustMode && opts.sourceText) {
      return {
        text: adjustAnswerText(opts.sourceText, opts.adjustMode),
        confidence: 100,
        topic: opts.adjustMode === "longer" ? "Ausfuehrlich" : opts.adjustMode === "shorter" ? "Kurz" : "Fokus",
        variants: 1
      };
    }

    if (opts.summaryMode && input && String(input).trim()) {
      return summarizeText(input, opts);
    }

    if (opts.simplify && opts.sourceText) {
      return { text: simplifyText(opts.sourceText), confidence: 100, topic: "Einfach", variants: 1 };
    }

    if (!input || !String(input).trim()) {
      return { text: "Schreib eine Frage — kurz reicht! Oder klick **NOCO Sparks** / **Hub**.", confidence: 0, topic: "System" };
    }

    prepared = prepareUserMessage(input);

    if (opts.agentMode && !opts.adjustMode && !opts.summaryMode && !opts.simplify) {
      return composeAgentDeliverable(input, opts);
    }

    if (opts.agentMode || opts.proMode) {
      opts.modelTier = opts.proMode ? "pro" : (opts.modelTier || "flux");
    }

    if (opts.chatHistory && isChatRecallQuery(prepared)) {
      return summarizeChatHistory(opts.chatHistory, prepared, opts);
    }

    if (isCapabilitiesQuery(prepared) || isCapabilitiesQuery(input)) {
      return { text: getCapabilitiesAnswer(), confidence: 100, topic: "System", variants: 1 };
    }

    if (isBriefQuery(prepared) || isBriefQuery(input)) {
      return buildIntelBrief(input, opts);
    }

    if (isCompareQuery(prepared) || isCompareQuery(input)) {
      var cmp = parseCompareQuery(prepared) || parseCompareQuery(input);
      if (cmp) return buildCompareBrief(cmp.left, cmp.right, opts);
    }

    var vaultMatch = resolveBestVaultMatch(input);
    best = vaultMatch.best;
    prepared = vaultMatch.prepared;

    if (vaultMatch.accepted) {
      text = pickAnswer(best.entry, best.query || prepared, opts);
      if (opts.regenerate && opts.variant >= (best.entry.answers || []).length) {
        text += FALLBACK_EXTEND[opts.variant % FALLBACK_EXTEND.length];
      }
      topic = getTopicLabel(best.entry);
      if (!opts.skipFlavor) text = applyModelFlavor(text, opts);
      return { text: text, confidence: best.score, topic: topic, variants: (best.entry.answers || []).length };
    }

    fbIdx = Math.abs(hashCode(String(prepared) + String(opts.variant || 0))) % FALLBACKS.length;
    fbText = FALLBACKS[fbIdx];
    closest = getClosestSuggestions(prepared, 4);
    if (!closest.length) {
      extracted = extractTopicFromQuestion(prepared) || extractTopicFromQuestion(input);
      if (extracted) closest = getClosestSuggestions(extracted, 4);
    }
    if (closest.length) {
      fbText += "\n\n**Meinst du vielleicht:**\n• " + closest.join("\n• ");
    }
    fbText += "\n\n*Tipp: Kurz reicht — *KI*, *Tipps zum Lernen*, *Was ist Demokratie?* · Schreibhilfe beim Tippen.*";
    if (opts.regenerate && opts.variant > 0) {
      fbText += FALLBACK_EXTEND[opts.variant % FALLBACK_EXTEND.length];
    }
    if (!opts.skipFlavor) fbText = applyModelFlavor(fbText, opts);
    return { text: fbText, confidence: best.score, topic: "Unbekannt", variants: FALLBACKS.length };
  }

  function escapeRegex(str) {
    return String(str).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function termMatchRegex(term) {
    var esc = escapeRegex(term);
    if (term.indexOf(" ") !== -1) {
      return new RegExp(esc, "gi");
    }
    return new RegExp("(^|[^A-Za-z0-9\u00C0-\u024F])(" + esc + ")(?![A-Za-z0-9\u00C0-\u024F])", "gi");
  }

  function linkifyTerms(text) {
    var src = String(text);
    var hits = [];
    var i, term, re, m, j, overlap, filtered, result, idx, start, label;

    for (i = 0; i < TERM_KEYS.length; i++) {
      term = TERM_KEYS[i];
      re = termMatchRegex(term);
      while ((m = re.exec(src)) !== null) {
        if (m[2] !== undefined) {
          start = m.index + m[1].length;
          label = m[2];
        } else {
          start = m.index;
          label = m[0];
        }
        hits.push({ start: start, end: start + label.length, term: term, label: label });
      }
    }

    hits.sort(function (a, b) { return (b.end - b.start) - (a.end - a.start); });
    filtered = [];
    for (i = 0; i < hits.length; i++) {
      overlap = false;
      for (j = 0; j < filtered.length; j++) {
        if (!(hits[i].end <= filtered[j].start || hits[i].start >= filtered[j].end)) {
          overlap = true;
          break;
        }
      }
      if (!overlap) filtered.push(hits[i]);
    }

    filtered.sort(function (a, b) { return b.start - a.start; });
    result = src;
    for (i = 0; i < filtered.length; i++) {
      idx = i;
      result = result.slice(0, filtered[i].start) + "[[T" + idx + "]]" + result.slice(filtered[i].end);
    }

    return {
      text: result,
      markers: filtered.map(function (h) { return { term: h.term, label: h.label }; })
    };
  }

  function parseMarkdown(text, opts) {
    opts = opts || {};
    var src = String(text);
    var linked = opts.linkify ? linkifyTerms(src) : { text: src, markers: [] };
    var html = linked.text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");

    linked.markers.forEach(function (mk, idx) {
      var key = "[[T" + idx + "]]";
      var lockCls = opts.locked ? " term-locked" : "";
      var lockTitle = opts.locked ? " (NOCO Exclusive)" : "";
      var safeTerm = String(mk.term).replace(/"/g, "&quot;");
      var span = '<button type="button" class="term-link' + lockCls + '" data-term="' + safeTerm + '" title="Mehr zu ' + safeTerm + lockTitle + '">' + mk.label + '</button>';
      html = html.split(key).join(span);
    });

    return html;
  }

  function getTermInfo(term) {
    var i, key, best, query;
    if (!term) return null;
    if (TERM_INFO[term]) return TERM_INFO[term];
    for (i = 0; i < TERM_KEYS.length; i++) {
      if (TERM_KEYS[i].toLowerCase() === String(term).toLowerCase()) {
        return TERM_INFO[TERM_KEYS[i]];
      }
    }
    query = "was ist " + term;
    best = findBestMatch(query);
    if (best.score >= 10 && best.entry && best.entry.answers && best.entry.answers.length) {
      return pickAnswer(best.entry, query, { skipFlavor: true });
    }
    return "**" + term + ":** Frag im Chat *Was ist " + term + "?* — NOCO Vault hat dazu meist eine Antwort.";
  }

  function getTermKeys() {
    return TERM_KEYS.slice();
  }

  function stripMarkdown(text) {
    return String(text || "")
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/`/g, "")
      .replace(/\n+/g, " ")
      .trim();
  }

  function capitalizeTopic(str) {
    str = String(str || "").trim();
    if (!str) return "Thema";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function isBriefQuery(input) {
    var n = normalize(input);
    return /^\/brief\b/.test(n) ||
      /^brief\b/.test(n) ||
      /briefe?\s+(?:mir\s+)?(?:zu\s+|ueber\s+|zum\s+|von\s+)?/.test(n) ||
      /kurzueberblick\s+(?:zu\s+|ueber\s+|zum\s+)?/.test(n) ||
      /ueberblick\s+(?:ueber\s+|zu\s+|zum\s+)/.test(n) ||
      /intel\s+(?:brief\s+)?(?:zu\s+|fuer\s+|ueber\s+)/.test(n) ||
      /recherche\s+(?:zu\s+|ueber\s+)/.test(n) ||
      /was muss ich (?:alles )?ueber .+ wissen/.test(n);
  }

  function isCompareQuery(input) {
    var s = String(input || "");
    var n = normalize(s);
    return /(?:unterschied|vergleich)\s+(?:zwischen\s+)?/.test(n) ||
      /\s+vs\.?\s+/i.test(s) ||
      /\s+versus\s+/i.test(s) ||
      /\s+gegen\s+/i.test(s);
  }

  function extractBriefTopic(input) {
    var s = String(input || "").trim();
    s = s.replace(/^\/brief\s*/i, "");
    s = s.replace(/^brief\s+/i, "");
    s = s.replace(/^briefe?\s+(?:mir\s+)?(?:zu\s+|ueber\s+|zum\s+|von\s+)?/i, "");
    s = s.replace(/^kurzueberblick\s+(?:zu\s+|ueber\s+|zum\s+)?/i, "");
    s = s.replace(/^ueberblick\s+(?:ueber\s+|zu\s+|zum\s+)?/i, "");
    s = s.replace(/^intel\s+(?:brief\s+)?(?:zu\s+|fuer\s+|ueber\s+)?/i, "");
    s = s.replace(/^recherche\s+(?:zu\s+|ueber\s+)?/i, "");
    s = s.replace(/^was muss ich (?:alles )?ueber\s+/i, "");
    return s.trim();
  }

  function parseCompareQuery(input) {
    var s = String(input || "").trim();
    var m;
    m = s.match(/(?:unterschied|vergleich)\s+(?:zwischen\s+)?(.+?)\s+(?:und|vs\.?|versus|gegen)\s+(.+)/i);
    if (m && m[1] && m[2]) return { left: m[1].trim(), right: m[2].trim() };
    m = s.match(/(.+?)\s+(?:vs\.?|versus|gegen)\s+(.+)/i);
    if (m && m[1].length > 1 && m[2].length > 1) return { left: m[1].trim(), right: m[2].trim() };
    m = s.match(/^(.+?)\s+oder\s+(.+?)\s*\??$/i);
    if (m && /was|welch|besser|unterschied|vergleich/i.test(s)) {
      return { left: m[1].trim(), right: m[2].trim() };
    }
    return null;
  }

  function extractBulletsFromAnswers(answers, max) {
    max = max || 5;
    var bullets = [];
    var seen = {};
    var i, j, plain, lines, line, parts, p, sent;

    function add(raw) {
      var t = stripMarkdown(raw).replace(/^[-•*]\s*/, "").trim();
      if (t.length < 12 || t.length > 220 || seen[t]) return;
      seen[t] = true;
      bullets.push(t);
    }

    for (i = 0; i < answers.length && bullets.length < max; i++) {
      lines = String(answers[i]).split(/\n/);
      for (j = 0; j < lines.length && bullets.length < max; j++) {
        line = lines[j].trim();
        if (/^[-•*]/.test(line)) add(line);
        else if (line.indexOf(":") > 0 && line.indexOf(":") < 28) add(line);
      }
      parts = stripMarkdown(answers[i]).split(/[.!?]+/);
      for (p = 0; p < parts.length && bullets.length < max; p++) {
        sent = parts[p].trim();
        if (sent.length >= 20 && sent.length <= 180) add(sent);
      }
    }
    return bullets.slice(0, max);
  }

  function findRelatedEntries(primaryEntry, input, limit) {
    limit = limit || 3;
    var category = getTopicLabel(primaryEntry);
    var ranked = [];
    var i, sc, cat;
    for (i = 0; i < KNOWLEDGE.length; i++) {
      if (KNOWLEDGE[i] === primaryEntry) continue;
      sc = scoreMatch(input, KNOWLEDGE[i].keys);
      cat = getTopicLabel(KNOWLEDGE[i]);
      if (cat === category) sc += 12;
      if (sc >= 10) ranked.push({ score: sc, entry: KNOWLEDGE[i] });
    }
    ranked.sort(function (a, b) { return b.score - a.score; });
    return ranked.slice(0, limit);
  }

  function buildSideBrief(topic, opts) {
    var prepared = prepareUserMessage(topic);
    var best = findBestMatch(prepared);
    if (best.score < 8 && best.entry) {
      var rawBest = findBestMatch(topic);
      if (rawBest.score > best.score) best = rawBest;
    }
    if (!best.entry || best.score < 5) {
      return {
        name: capitalizeTopic(topic),
        category: "Unbekannt",
        tldr: "Kein passender Vault-Eintrag — versuche ein kuerzeres Stichwort.",
        bullets: [],
        confidence: best.score || 0
      };
    }
    var answers = best.entry.answers || [];
    var tldr = stripMarkdown(answers[0] || "").split(/[.!?]/)[0];
    return {
      name: capitalizeTopic(best.entry.keys[0]),
      category: getTopicLabel(best.entry),
      tldr: tldr,
      bullets: extractBulletsFromAnswers(answers, 4),
      confidence: best.score,
      entry: best.entry
    };
  }

  function stripSideForBrief(side) {
    return {
      name: side.name,
      category: side.category,
      tldr: side.tldr,
      bullets: side.bullets,
      confidence: side.confidence
    };
  }

  function buildCompareBrief(left, right, opts) {
    opts = opts || {};
    var leftSide = buildSideBrief(left, opts);
    var rightSide = buildSideBrief(right, opts);
    var title = leftSide.name + " vs " + rightSide.name;
    var category = leftSide.category === rightSide.category ? leftSide.category : "Vergleich";
    var nextSteps = [
      formatSuggestion(leftSide.name),
      formatSuggestion(rightSide.name),
      "Was ist der Unterschied zwischen " + left + " und " + right + "?"
    ];
    var text = "**NOCO Brief** · Vergleich · " + category + "\n\n";
    text += "## " + title + "\n\n";
    text += "**" + leftSide.name + "** (" + leftSide.category + ")\n";
    text += "• " + (leftSide.tldr || "—") + ".\n";
    leftSide.bullets.slice(0, 3).forEach(function (b) { text += "• " + b + "\n"; });
    text += "\n**" + rightSide.name + "** (" + rightSide.category + ")\n";
    text += "• " + (rightSide.tldr || "—") + ".\n";
    rightSide.bullets.slice(0, 3).forEach(function (b) { text += "• " + b + "\n"; });
    text += "\n**Fazit:** ";
    if (leftSide.category === rightSide.category) {
      text += "Beide Themen liegen in **" + leftSide.category + "** — Details oben im Brief-Panel.";
    } else {
      text += leftSide.name + " = " + leftSide.category + " · " + rightSide.name + " = " + rightSide.category + ".";
    }
    text += "\n\n**Als Naechstes:**\n• " + nextSteps.join("\n• ");
    if (!opts.skipFlavor) text = applyModelFlavor(text, opts);

    return {
      text: text,
      confidence: Math.max(leftSide.confidence, rightSide.confidence),
      topic: "NOCO Brief",
      variants: 1,
      brief: {
        mode: "compare",
        title: title,
        category: category,
        tldr: leftSide.tldr + " ↔ " + rightSide.tldr,
        bullets: [],
        related: [],
        nextSteps: nextSteps,
        compare: { left: stripSideForBrief(leftSide), right: stripSideForBrief(rightSide) }
      }
    };
  }

  function buildIntelBrief(input, opts) {
    opts = opts || {};
    var raw = extractBriefTopic(input) || String(input).trim();
    if (!raw) {
      return {
        text: "**NOCO Brief** — gib ein Thema an: `/brief Klimawandel` oder *Briefe mir Quantenphysik*.",
        confidence: 0,
        topic: "NOCO Brief",
        variants: 1
      };
    }

    var compare = parseCompareQuery(raw);
    if (compare) return buildCompareBrief(compare.left, compare.right, opts);

    var prepared = prepareUserMessage(raw);
    var best = findBestMatch(prepared);
    if (best.score < 12) {
      var rawBest = findBestMatch(raw);
      if (rawBest.score > best.score) best = rawBest;
    }

    if (!best.entry || best.score < 5) {
      var closest = getClosestSuggestions(prepared, 4);
      var fb = "**NOCO Brief** — zu *" + raw + "* nichts Passendes in der Vault.\n\n";
      if (closest.length) fb += "**Meinst du:**\n• " + closest.join("\n• ");
      else fb += "Versuche ein kuerzeres Stichwort — z.B. *KI*, *Klima*, *Python*.";
      return { text: fb, confidence: 0, topic: "NOCO Brief", variants: 1 };
    }

    var title = capitalizeTopic(best.entry.keys[0]);
    var category = getTopicLabel(best.entry);
    var answers = best.entry.answers || [];
    var tldr = stripMarkdown(answers[0] || "").split(/[.!?]/)[0];
    var bullets = extractBulletsFromAnswers(answers, 5);
    var relatedEntries = findRelatedEntries(best.entry, prepared, 3);
    var related = relatedEntries.map(function (r) {
      return {
        label: capitalizeTopic(r.entry.keys[0]),
        query: formatSuggestion(r.entry.keys[0])
      };
    });
    var nextSteps = getRelatedQuestions(prepared, category).slice(0, 3);
    if (!nextSteps.length) nextSteps = [formatSuggestion(best.entry.keys[0])];

    var text = "**NOCO Brief** · " + category + "\n\n";
    text += "## " + title + "\n\n";
    text += "**TL;DR:** " + tldr + ".\n\n";
    text += "**Kernpunkte:**\n";
    bullets.forEach(function (b) { text += "• " + b + "\n"; });
    if (related.length) {
      text += "\n**Verwandte Bereiche:**\n";
      related.forEach(function (r) { text += "• " + r.label + "\n"; });
    }
    text += "\n**Als Naechstes fragen:**\n";
    nextSteps.forEach(function (q) { text += "• " + q + "\n"; });
    text += "\n*Klick **Brief oeffnen** fuer das Prism-Panel mit allen Details.*";
    if (!opts.skipFlavor) text = applyModelFlavor(text, opts);

    return {
      text: text,
      confidence: best.score,
      topic: category,
      variants: (answers || []).length,
      brief: {
        mode: "single",
        title: title,
        category: category,
        tldr: tldr,
        bullets: bullets,
        related: related,
        nextSteps: nextSteps,
        compare: null
      }
    };
  }

  function getGlowPrism(partial) {
    partial = String(partial || "").trim();
    if (!partial || partial.length < 2 || partial.charAt(0) === "/") return null;

    var prepared = prepareUserMessage(partial);
    var best = findBestMatch(prepared);
    var category = "Allgemein";
    var intent = "Vault durchsucht passende Themen…";
    var confidence = 0;
    var related = [];

    if (best.entry && best.score >= 10) {
      category = getTopicLabel(best.entry);
      var key = best.entry.keys[0];
      intent = "Antwort aus " + (key.length > 36 ? key.slice(0, 34) + "…" : key);
      confidence = Math.min(100, best.score);
      related = getRelatedQuestions(prepared, category);
    } else if (best.entry && best.score > 0) {
      category = getTopicLabel(best.entry);
      intent = "Noch unscharf — weiter tippen oder Formulierung vervollstaendigen";
      confidence = Math.min(60, best.score);
      related = getRelatedQuestions(partial, category);
    } else {
      var sparks = getWriteSuggestions(partial, 2);
      if (sparks.length) {
        intent = "Spark: " + sparks[0].text;
        related = sparks.map(function (s) { return s.text; });
      }
    }

    return {
      category: category,
      intent: intent,
      confidence: confidence,
      related: related.slice(0, 2)
    };
  }

  global.NocoBrain = {
    think: think,
    composeAgentDeliverable: composeAgentDeliverable,
    parseMarkdown: parseMarkdown,
    getTermInfo: getTermInfo,
    getTermKeys: getTermKeys,
    getRelatedQuestions: getRelatedQuestions,
    getSlashHelp: getSlashHelp,
    getSystemStats: getSystemStats,
    simplifyText: simplifyText,
    detectAnswerAdjust: detectAnswerAdjust,
    adjustAnswerText: adjustAnswerText,
    summarizeText: summarizeText,
    getFeatureHints: getFeatureHints,
    expandText: expandText,
    shortenToKeyPoints: shortenToKeyPoints,
    makeMoreOnTopic: makeMoreOnTopic,
    getKnowledgeCount: function () { return KNOWLEDGE.length; },
    getVersion: function () { return "3.3"; },
    prepareUserMessage: prepareUserMessage,
    getWriteSuggestions: getWriteSuggestions,
    getGlowPrism: getGlowPrism,
    buildIntelBrief: buildIntelBrief,
    isBriefQuery: isBriefQuery,
    getRandomWriteStarters: getRandomWriteStarters,
    getClosestSuggestions: getClosestSuggestions,
    getCapabilitiesAnswer: getCapabilitiesAnswer,
    summarizeChatHistory: summarizeChatHistory,
    isChatRecallQuery: isChatRecallQuery,
    getPromptGroups: function () {
      return JSON.parse(JSON.stringify(PROMPT_GROUPS));
    },
    getBrand: function () {
      return JSON.parse(JSON.stringify(NOCO_BRAND));
    },
    getBrandGuide: getBrandGuide,
    resolveBestVaultMatch: resolveBestVaultMatch,
    probeVault: function (input) {
      var m = resolveBestVaultMatch(input);
      return {
        score: m.best.score,
        accepted: m.accepted,
        topic: m.best.entry ? getTopicLabel(m.best.entry) : null
      };
    },
    extractWikiQuery: extractWikiQuery,
    extractNexusWikiQuery: extractNexusWikiQuery,
    cleanWikiTopic: cleanWikiTopic,
    isSmalltalkQuery: isSmalltalkQuery,
    isSmalltalkFast: isSmalltalkFast,
    classifyKnowledgeIntent: classifyKnowledgeIntent,
    isEncyclopedicQuery: isEncyclopedicQuery,
    isFollowUpQuery: isFollowUpQuery,
    resolveKnowledgeRoute: resolveKnowledgeRoute,
    isNexusVaultRoute: isNexusVaultRoute,
    isValidWikiQuery: isValidWikiQuery,
    isNocoBrandedQuery: isNocoBrandedQuery,
    isCapabilitiesQuery: isCapabilitiesQuery
  };
})(typeof window !== "undefined" ? window : this);
