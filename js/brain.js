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
      flux:  { name: "NOCO Flux",  tagline: "Rush-Engine · Unbegrenzt · Immer Prism+" },
      prism: { name: "NOCO Prism", tagline: "Voll-Vault · 520+ Themen" },
      spark: { name: "NOCO Spark", tagline: "Kompakt-Antworten · Schnell & kurz" }
    },
    features: {
      vault:  { name: "NOCO Vault",  desc: "Lokale Wissens-Engine (520+ Themen)" },
      echo:   { name: "NOCO Echo",   desc: "Chat-Verlauf & Zusammenfassung" },
      render: { name: "NOCO Render", desc: "Bilder im Chat · 3600 Motive · 1 zur Zeit" },
      lensDetect: { name: "NOCO Lens Detect", desc: "KI-Bild erkennen — eigene NOCO Pixel pruefen" },
      lens:   { name: "NOCO Lens",   desc: "Blaue Begriffe anklicken" },
      rush:   { name: "NOCO Rush",   desc: "Priority-Antworten ~90 ms" },
      access: { name: "NOCO Access", desc: "Plan & Modell live sichtbar" },
      sparks: { name: "NOCO Sparks", desc: "Schnellfragen nach Kategorie" },
      sheen:  { name: "NOCO Sheen",  desc: "Blur-Reveal Pixel-Animation" },
      brief:  { name: "NOCO Brief",  desc: "Strukturierte Recherche-Briefings aus der Vault" },
      glow:   { name: "NOCO Glow",   desc: "Live-Intent-Prism beim Tippen" }
    },
    plans: {
      free:      { name: "NOCO Access Free", short: "Access Free" },
      exclusive: { name: "NOCO Exclusive",   short: "Exclusive" }
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
        "**NOCO Flagship-Stack:**\n1. **NOCO Echo** — Chat-Verlauf & Zusammenfassung\n2. **NOCO Render** + **NOCO Sheen** — 3600 Motive, einfache Woerter\n3. **NOCO Access** — Plan & Modell (Prism/Spark/Flux) live\n4. **NOCO Vault** — 520+ Themen-Wissens-Engine",
        "**Exclusive:** **NOCO Flux**, **NOCO Rush**, **NOCO Lens**, **NOCO Render** unbegrenzt.\n**Access Free:** 20/Tag, Echo + Vault, Prism dann Spark.",
        "Schau **Features-Tab** oben — Hero-Karten zeigen die grossen Features. **System-Tab** = Stats & Slash-Befehle.",
        "Frag *Was kann ich dich fragen?* fuer die komplette Themenliste mit Kategorien.",
        "Alles **offline** nach dem ersten Laden — kein Server, kein Tracking."
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
    "Gute Frage! **NOCO:** Was ist NOCO OS? · Keycard · Security\n**Vault:** KI · Internet · Klimawandel?",
    "Da bin ich unsicher. Probier: **NOCO Vault** · **NOCO Echo** · **NOCO Render** · **NOCO Exclusive**",
    "Thema unklar — frag: *Was sind die NOCO Modell-Namen?* oder *Was ist NOCO Vault?*",
    "**NOCO Vault** kennt 520+ Themen. Frag: *Was kann ich dich fragen?* oder *Was ist Genetik?*",
    "Tipp: **NOCO Sparks** links — Kategorien nach Thema. **Was geht hier?** fuer Uebersicht.",
    "Frag spezifischer oder **Neu generieren**. Mit **NOCO Flux** (Exclusive) volle Antworten."
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
        "Was ist Luftqualität?",
        "Was ist Bienensterben?",
        "Was ist Diabetes?",
        "Was ist Long COVID?",
        "Was ist der Bundesrat?",
        "Was ist Kita?",
        "Was ist Demografie?"
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

  function stripQuestionNoise(text) {
    return normalize(text)
      .replace(/^(ey |yo |hm |na |lol |okay |ok |also |bitte |mal |kurz |einfach |schnell )+/g, "")
      .replace(/^(hey |hallo |hi |moin |servus |guten tag )+/g, "")
      .replace(/^(kannst du mir |kannst du |kann ich |koenntest du |wuerdest du |sag mir |sag mal |erzaehl mir |erklaer mir |erklaere mir |ich wollte fragen |ich frag mich |ich will wissen |ich moechte wissen )+/g, "")
      .replace(/^(was ist|was sind|was bedeutet|was macht|was weiss|was weiß|wie funktioniert|wie geht|wie ist|erklare|erklaere|erklaer|beschreibe|definiere|tell me about|what is)\s+/g, "")
      .replace(/^(kannst du mir erklaeren|kannst du erklaeren|ich moechte wissen|ich will wissen|sag mir was|nochmal)\s+/g, "")
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
      [/apa zitier|apa style/gi, "apa zitierstil"]
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
    "socialengineering": "was ist social engineering"
  };

  function interpretCasualQuery(input) {
    var raw = String(input || "").trim();
    if (!raw || raw.charAt(0) === "/") return raw;
    var fixed = fixCommonTypos(raw);
    var core = stripQuestionNoise(fixed);
    var n = normalize(fixed);
    var words = core.split(/\s+/).filter(Boolean);

    if (words.length === 1 && ONE_WORD_INTENTS[words[0]]) {
      return ONE_WORD_INTENTS[words[0]];
    }
    if (words.length === 2 && words[0] === "was" && ONE_WORD_INTENTS[words[1]]) {
      return ONE_WORD_INTENTS[words[1]];
    }
    if (words.length === 2 && words[0] === "wie" && ONE_WORD_INTENTS[words[1]]) {
      return "wie funktioniert " + ONE_WORD_INTENTS[words[1]].replace(/^was ist\s+/, "");
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
    if (/^(mein|der)\s+plan/.test(core)) {
      return "welchen plan habe ich";
    }
    if (words.length >= 2 && words.length <= 4 && !/^(was|wie|wer|wann|wo|warum|hallo|danke|hi|hey|moin|servus|ok|okay|ja|nein|cool|nice|bitte)$/.test(words[0])) {
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
      ["plagiat", "zitieren quellen"], ["apa", "zitierstil"]
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
    var i, sc;
    for (i = 0; i < KNOWLEDGE.length; i++) {
      sc = scoreMatch(input, KNOWLEDGE[i].keys);
      if (sc > 0) ranked.push({ score: sc, label: KNOWLEDGE[i].keys[0] });
    }
    ranked.sort(function (a, b) { return b.score - a.score; });
    return ranked.slice(0, limit).map(function (r) { return formatSuggestion(r.label); });
  }

  function isCapabilitiesQuery(input) {
    return /was kann ich (dich )?fragen|welche fragen|was weisst du|was weiss du|was kannst du|deine funktionen|was kann noco|noco namen|modell namen|was sind die noco|hilfe|help|was bietest du|was machst du|uebersicht|hub|funktionen liste|themen liste|alle themen/.test(normalize(input));
  }

  function getBrandGuide() {
    return "**NOCO Namen — kurz erklaert:**\n\n" +
      "**Modelle:**\n• **NOCO Flux** (Exclusive) — Rush, unbegrenzt\n• **NOCO Prism** (Free 1-10) — Voll-Vault\n• **NOCO Spark** (Free 11+) — kompakt\n\n" +
      "**Funktionen:**\n• **NOCO Vault** — 520+ Themen-Wissens-Engine\n• **NOCO Brief** — Recherche-Briefings & Vergleiche\n• **NOCO Glow** — Live-Intent-Prism beim Tippen\n• **NOCO Echo** — Chat-Verlauf\n• **NOCO Render** — 3600 Motive Pixel-Kunst\n• **NOCO Sheen** — Blur-Animation\n• **NOCO Lens** — Keywords (Exclusive)\n• **NOCO Rush** — ~90 ms Speed\n• **NOCO Access** — Plan-Leiste\n• **NOCO Sparks** — Schnellfragen";
  }

  function getCapabilitiesAnswer() {
    return "**NOCO AI — Das kannst du fragen:**\n\n" +
      getBrandGuide() + "\n\n" +
      "**◎ So startest du:**\n" +
      "• **NOCO Brief** — `/brief Thema` oder *Briefe mir Klimawandel* · Vergleich *Python vs JavaScript*\n" +
      "• **NOCO Echo** — *Was habe ich geschrieben?* / `/summary`\n" +
      "• **NOCO Render** — *Mach ein Bild von…* im Chat / `/pixel` (Exclusive, 1 Bild zur Zeit)\n" +
      "• **NOCO Lens Detect** — KI-Bild pruefen / `/detect` (+ Button)\n" +
      "• **NOCO Vault** — 520+ Themen: NOCO OS, Wissenschaft, Tech\n\n" +
      "**✦ NOCO OS:** Workspace, Keycard, Forge, Security\n" +
      "**⬡ Wissenschaft:** Physik, Chemie, Genetik, Quanten, Vulkan\n" +
      "**♡ Mensch:** Medizin, Koerper, Psychologie, Achtsamkeit\n" +
      "**◇ Tech:** Blockchain, VR, WLAN, Open Source, Roboter\n" +
      "**◉ Gesellschaft:** Menschenrechte, Demokratie, Fake News\n\n" +
      "Links: **NOCO Sparks** (17 Kategorien) · **Hub**\n**Schreibhilfe:** Kurz tippen reicht — z.B. nur *KI* oder *Plan*\n**NOCO Exclusive** = Flux + Rush + Lens + Render";
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

  function getTopicLabel(entry) {
    if (!entry || !entry.keys || !entry.keys[0]) return "Allgemein";
    var k = normalize(entry.keys[0]);
    if (/noco|forge|keycard|workspace|exclusive|firstlight|security|nexus|focus|hub|sync|explorer|liquid|widget|pay|shadow|casino|cloud/.test(k)) return "NOCO OS";
    if (/ki|internet|computer|programm|html|smartphone|robot|passwort|cyber|javascript/.test(k)) return "Tech & KI";
    if (/physik|chemie|biologie|sonne|erde|wasser|klima|energie|universum/.test(k)) return "Wissenschaft";
    if (/geschichte|deutschland|demokratie|politik|geld|sprache|menschenrecht|diversitaet|fake news|gleichstellung|renaissance/.test(k)) return "Gesellschaft";
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

  function getSlashHelp() {
    return "**NOCO Befehle (mit / im Chat):**\n• `/help` — diese Liste\n• `/new` — neuer Chat\n• `/clear` — Chat leeren\n• `/model` — NOCO Access & Modell (Flux/Prism/Spark)\n• `/brief Thema` — **NOCO Brief** Recherche-Briefing\n• `/summary` — **NOCO Echo** Zusammenfassung\n• `/pixel` — Bild im Chat erstellen\n• `/detect` — **KI-Bild erkennen** (Datei)\n• `/search Wort` — im Chat suchen\n• `/topics` — System-Ansicht\n• `/saved` — gespeicherte Antworten\n• `/random` — Zufalls-Frage aus NOCO Sparks\n• `/hub` — **NOCO Hub** Uebersicht oeffnen";
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

  function think(input, opts) {
    opts = opts || {};
    var best, text, fbIdx, fbText, topic, prepared, closest, rawBest;

    if (!input || !String(input).trim()) {
      return { text: "Schreib eine Frage — kurz reicht! Oder klick **NOCO Sparks** / **Hub**.", confidence: 0, topic: "System" };
    }

    if (opts.simplify && opts.sourceText) {
      return { text: simplifyText(opts.sourceText), confidence: 100, topic: "Einfach", variants: 1 };
    }

    prepared = prepareUserMessage(input);

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

    best = findBestMatch(prepared);
    if (best.score < 15) {
      rawBest = findBestMatch(input);
      if (rawBest.score > best.score) best = rawBest;
    }

    if (best.score >= 8 && best.entry) {
      text = pickAnswer(best.entry, prepared, opts);
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
    if (closest.length) {
      fbText += "\n\n**Meinst du vielleicht:**\n• " + closest.join("\n• ");
    }
    fbText += "\n\n*Tipp: Kurz schreiben reicht — z.B. nur \"KI\" oder \"Plan\". Schreibhilfe erscheint beim Tippen.*";
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
    parseMarkdown: parseMarkdown,
    getTermInfo: getTermInfo,
    getTermKeys: getTermKeys,
    getRelatedQuestions: getRelatedQuestions,
    getSlashHelp: getSlashHelp,
    getSystemStats: getSystemStats,
    simplifyText: simplifyText,
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
    getBrandGuide: getBrandGuide
  };
})(typeof window !== "undefined" ? window : this);
