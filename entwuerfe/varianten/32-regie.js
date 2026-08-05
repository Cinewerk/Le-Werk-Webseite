/**
 * Entwurf 32 — Regie.
 *
 * Mein Vorschlag für die perfekte Le-Werk-Seite, aus allem gebaut, was
 * diese Sitzung gesammelt hat. Die Idee, die alles zusammenhält:
 *
 *   DIE SEITE IST EIN SUCHER. Le Werk sind Filmemacher — also spricht
 *   die Oberfläche die Sprache ihrer Kameras: laufender Timecode in der
 *   Kopfzeile, blinkender REC-Punkt, Eckklammern auf den Kacheln,
 *   Messrahmen beim Überfahren der Porträts, und der Akzent ist das
 *   Grün des Fokus-Peakings — die Farbe, in der eine Kamera Schärfe
 *   markiert. Was scharf ist, ist wichtig.
 *
 * Der Grund bleibt durchgehend Petrol (Simons Ein-Farb-Regel), die
 * Rollen von Poppins und Bodoni bleiben, Bilder und Video in
 * Originalfarbe.
 *
 * Übernommen aus den Referenzen der Sitzung:
 *   warmnfuzzy     Zellenkopf, Sechseck-Blende vor dem Heldenvideo,
 *                  die Dichte
 *   julienpianetti Zeilenauftritt der Absätze, Geisterwort mit
 *                  Parallaxe hinter den Arbeiten, Cursor-Scheibe
 *   salt&pictures  Geister-Serifenzeilen, Hintergrundwechsel je Zeile
 *   BMS United     angeschnittene Riesenversalien
 *   Bonbon/Fuzzy   Sticker, Laufbänder
 *
 * Platzhalter: Die Reel-Kacheln sind Standbilder — je ein stummer
 * 9:16-Clip pro Projekt macht sie fertig.
 */

const stil = `
@font-face { font-family: 'Poppins'; font-style: normal; font-weight: 400; font-display: swap; src: url('../src/styles/fonts/poppins-400-normal-latin.woff2') format('woff2'); }
@font-face { font-family: 'Poppins'; font-style: normal; font-weight: 600; font-display: swap; src: url('../src/styles/fonts/poppins-600-normal-latin.woff2') format('woff2'); }
@font-face { font-family: 'Poppins'; font-style: normal; font-weight: 800; font-display: swap; src: url('../src/styles/fonts/poppins-800-normal-latin.woff2') format('woff2'); }
@font-face { font-family: 'Bodoni Moda'; font-style: italic; font-weight: 400 500; font-display: swap; src: url('../src/styles/fonts/bodoni-moda-opsz11-italic-latin.woff2') format('woff2'); }

:root {
  --petrol: #04252c;
  --petrol-hell: #0a3641;
  --schnee: #f2f5f4;
  --gedimmt: rgba(242, 245, 244, 0.6);
  --peak: #c6f52b;
  --linie: rgba(242, 245, 244, 0.18);
  --grotesk: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
  --serif: 'Bodoni Moda', Georgia, serif;
  --mono: ui-monospace, 'SF Mono', Menlo, monospace;
  --rand: clamp(1.25rem, 3.5vw, 3rem);
}

body { background: var(--petrol); color: var(--schnee); font: 400 16px/1.6 var(--grotesk); overflow-x: clip; }
a { color: inherit; text-decoration: none; }
::selection { background: var(--peak); color: var(--petrol); }

/* ── Cursor: Punkt + beschriftete Scheibe ── */
@media (hover: hover) {
  body, a, button, summary { cursor: none; }
  .zeiger { position: fixed; z-index: 200; width: 10px; height: 10px; border-radius: 50%; background: var(--peak); pointer-events: none; transform: translate(-50%, -50%); display: grid; place-items: center; transition: width 280ms cubic-bezier(0.22,0.61,0.36,1), height 280ms cubic-bezier(0.22,0.61,0.36,1); }
  .zeiger span { font-size: 12px; font-weight: 600; color: var(--petrol); opacity: 0; transition: opacity 180ms; white-space: nowrap; }
  .zeiger.gross { width: 84px; height: 84px; }
  .zeiger.gross span { opacity: 1; }
}
@media (hover: none) { .zeiger { display: none; } }

/* ── Vorhang mit Count-in ── */
.vorhang { position: fixed; inset: 0; z-index: 300; background: var(--petrol); display: grid; place-items: center; transition: transform 800ms cubic-bezier(0.76, 0, 0.24, 1) 250ms; }
.vorhang .tc { font-family: var(--mono); font-size: clamp(2rem, 6vw, 4rem); color: var(--peak); }
body.bereit .vorhang { transform: translateY(-100%); }

/* ── Zellenkopf mit Timecode und REC ── */
.kopf { position: fixed; inset: 0 0 auto; z-index: 50; display: grid; grid-template-columns: auto 1fr auto auto auto; align-items: stretch; background: rgba(4, 37, 44, 0.88); backdrop-filter: blur(8px); border-bottom: 1px solid var(--linie); font-size: 13px; }
.kopf > * { display: flex; align-items: center; gap: 8px; padding: 13px 16px; border-right: 1px solid var(--linie); white-space: nowrap; }
.kopf > :last-child { border-right: 0; }
.kopf .marke { font-weight: 800; letter-spacing: -0.01em; font-size: 15px; }
.kopf .tc { font-family: var(--mono); color: var(--gedimmt); overflow: hidden; }
.kopf .rec::before { content: ''; width: 9px; height: 9px; border-radius: 50%; background: #ff3b30; animation: blinken 1.2s steps(1) infinite; }
@keyframes blinken { 50% { opacity: 0.15; } }
.kopf a:hover { background: var(--peak); color: var(--petrol); }

/* ── Held: Sechseck-Blende, Sucherecken, Claim ── */
.held { position: relative; min-height: 100svh; display: grid; align-content: end; padding: 0 var(--rand) clamp(3.5rem, 9vh, 6rem); overflow: hidden; }
.held video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; clip-path: polygon(50% 32%, 61% 42%, 61% 58%, 50% 68%, 39% 58%, 39% 42%); animation: blende 1600ms cubic-bezier(0.65, 0, 0.2, 1) 600ms forwards; }
@keyframes blende { to { clip-path: polygon(50% -80%, 160% 10%, 160% 90%, 50% 180%, -60% 90%, -60% 10%); } }
.held::before { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(4, 37, 44, 0.88) 0%, rgba(4, 37, 44, 0.35) 22%, transparent 45%); z-index: 1; }

/* Sucherecken am Bildrand */
.ecke { position: absolute; width: 26px; height: 26px; border: 2px solid var(--peak); z-index: 2; opacity: 0; animation: da 400ms ease 2100ms forwards; }
.ecke--a { left: 18px; top: 74px; border-right: 0; border-bottom: 0; }
.ecke--b { right: 18px; top: 74px; border-left: 0; border-bottom: 0; }
.ecke--c { left: 18px; bottom: 18px; border-right: 0; border-top: 0; }
.ecke--d { right: 18px; bottom: 18px; border-left: 0; border-top: 0; }
@keyframes da { to { opacity: 1; } }

.held .sucherzeile { position: absolute; top: 84px; left: 50%; transform: translateX(-50%); z-index: 2; font-family: var(--mono); font-size: 11px; letter-spacing: 0.18em; color: var(--peak); opacity: 0; animation: da 400ms ease 2200ms forwards; }

.held h1 { position: relative; z-index: 2; max-width: 16em; font-weight: 800; font-size: clamp(1.75rem, 4.4vw, 3.75rem); line-height: 1.1; letter-spacing: -0.025em; text-transform: uppercase; }
.held h1 .kicker { font-family: var(--serif); font-style: italic; font-weight: 500; text-transform: none; letter-spacing: 0; color: var(--peak); }
.held .unter { position: relative; z-index: 2; margin-top: 1.25rem; display: flex; flex-wrap: wrap; gap: 0.5rem 2rem; font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gedimmt); }

/* Sticker (Bonbon-Erbe, sparsam) */
.sticker { position: absolute; z-index: 3; right: clamp(1rem, 6vw, 5rem); bottom: clamp(7rem, 18vh, 12rem); background: var(--peak); color: var(--petrol); font-weight: 800; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.7em 1.2em; border-radius: 999px; rotate: -6deg; animation: taumeln 7s ease-in-out infinite; }
@keyframes taumeln { 50% { rotate: 4deg; translate: 0 -6px; } }

/* ── Zeilenauftritt ── */
.zeilenmaske { display: block; overflow: hidden; }
.zeilenmaske > span { display: block; transform: translateY(112%); transition: transform 850ms cubic-bezier(0.22,0.61,0.36,1); transition-delay: calc(var(--z) * 80ms); }
.wach .zeilenmaske > span { transform: none; }

/* ── Laufband ── */
.band { border-block: 1px solid var(--linie); overflow: hidden; padding: 0.7rem 0; }
.band .spur { display: flex; gap: 2.2rem; width: max-content; animation: ziehen var(--takt, 28s) linear infinite; }
.band span { font-weight: 800; font-size: clamp(1.25rem, 2.6vw, 2rem); letter-spacing: -0.01em; text-transform: uppercase; white-space: nowrap; }
.band span:nth-child(even) { color: transparent; -webkit-text-stroke: 1.2px var(--schnee); }
.band i { font-family: var(--serif); font-style: italic; color: var(--peak); }
.band--peak { background: var(--peak); border: 0; }
.band--peak span { color: var(--petrol); }
.band--peak span:nth-child(even) { color: transparent; -webkit-text-stroke: 1.2px var(--petrol); }
@keyframes ziehen { to { transform: translateX(-50%); } }

/* ── Arbeiten: Geisterwort + Reel-Reihe ── */
/* clip, weil das Geisterwort breiter ist als das Fenster — es soll an
   den Kanten anschneiden (BMS-Erbe), nicht die Seite aufziehen. */
.werkteil { position: relative; padding: clamp(4rem, 10vh, 7rem) var(--rand); overflow-x: clip; }
.geist { position: absolute; left: 50%; top: 6%; transform: translateX(-50%); font-weight: 800; font-size: clamp(5rem, 17vw, 16rem); letter-spacing: -0.04em; text-transform: uppercase; white-space: nowrap; color: transparent; -webkit-text-stroke: 1.5px rgba(242, 245, 244, 0.22); pointer-events: none; will-change: transform; }

.werkteil .kopfzeile { position: relative; display: flex; justify-content: space-between; align-items: baseline; margin-bottom: clamp(2rem, 5vh, 3.5rem); }
.werkteil h2 { font-weight: 800; font-size: clamp(1.875rem, 4.4vw, 3.5rem); letter-spacing: -0.03em; text-transform: uppercase; }
.werkteil h2 .kicker { font-family: var(--serif); font-style: italic; font-weight: 500; text-transform: none; color: var(--peak); }
.werkteil .zaehler { font-family: var(--mono); font-size: 12px; color: var(--gedimmt); }

/* Reels: 9:16 zuerst — das Kernformat als Form der Kacheln */
.reels { position: relative; display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: clamp(0.9rem, 1.8vw, 1.5rem); }
.reel { position: relative; display: block; }
.reel .kasten { position: relative; overflow: hidden; border-radius: 12px; aspect-ratio: 9 / 16; background: var(--petrol-hell); }
.reel img { width: 100%; height: 100%; object-fit: cover; transition: transform 650ms cubic-bezier(0.22,0.61,0.36,1); }
.reel:hover img { transform: scale(1.06); }
.reel .kasten::after { content: ''; position: absolute; inset: 0; background: linear-gradient(0deg, rgba(4, 37, 44, 0.82), transparent 45%); }
.reel .klammer { position: absolute; inset: 8px; z-index: 2; opacity: 0; transition: opacity 200ms; pointer-events: none; }
.reel .klammer::before, .reel .klammer::after { content: ''; position: absolute; width: 16px; height: 16px; border: 2px solid var(--peak); }
.reel .klammer::before { left: 0; top: 0; border-right: 0; border-bottom: 0; }
.reel .klammer::after { right: 0; bottom: 0; border-left: 0; border-top: 0; }
.reel:hover .klammer { opacity: 1; }
.reel .wer { position: absolute; left: 10px; right: 10px; bottom: 10px; z-index: 2; font-weight: 800; font-size: clamp(0.8125rem, 1.15vw, 1.0625rem); line-height: 1.2; text-transform: uppercase; letter-spacing: -0.01em; }
.reel .was { display: flex; justify-content: space-between; gap: 0.5rem; padding-top: 8px; font-size: 11.5px; color: var(--gedimmt); }
.reel .fmt { font-family: var(--mono); color: var(--peak); white-space: nowrap; }
.reel:nth-child(even) { transform: translateY(clamp(1rem, 2.6vw, 2.25rem)); }

/* ── Disziplinen: Geister-Serifenzeilen mit Bildwechsel (salt-Erbe) ── */
.machen { position: relative; padding: clamp(4rem, 10vh, 7rem) var(--rand); min-height: 88svh; display: grid; align-content: center; overflow: hidden; }
.machen .wechsel { position: absolute; inset: 0; opacity: 0; transition: opacity 400ms ease; }
.machen .wechsel img { width: 100%; height: 100%; object-fit: cover; }
.machen .wechsel::after { content: ''; position: absolute; inset: 0; background: rgba(4, 37, 44, 0.72); }
.machen .wechsel.an { opacity: 1; }
.machen .label { position: relative; font-size: 12px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gedimmt); margin-bottom: 1.5rem; }
.machen .zeilen { position: relative; display: grid; gap: 0.1em; }
.machen .zeile { width: fit-content; font-family: var(--serif); font-style: italic; font-weight: 500; font-size: clamp(2.5rem, 7.4vw, 6.5rem); line-height: 1.05; text-transform: uppercase; letter-spacing: 0.01em; color: rgba(242, 245, 244, 0.3); -webkit-text-stroke: 1px rgba(242, 245, 244, 0.25); transition: color 240ms, -webkit-text-stroke-color 240ms; }
.machen .zeile:hover { color: var(--schnee); -webkit-text-stroke-color: transparent; }
.machen .text { position: relative; max-width: 52ch; margin-top: 1.5rem; color: var(--gedimmt); min-height: 4.5em; }
.machen .text p { position: absolute; inset: 0; opacity: 0; transition: opacity 300ms; }
.machen .text p.an { opacity: 1; }

/* ── Team: Messrahmen beim Überfahren ── */
.crew { padding: clamp(4rem, 10vh, 7rem) var(--rand); }
.crew h2 { font-weight: 800; font-size: clamp(1.875rem, 4.4vw, 3.5rem); letter-spacing: -0.03em; text-transform: uppercase; margin-bottom: clamp(2rem, 5vh, 3.5rem); }
.crew h2 .kicker { font-family: var(--serif); font-style: italic; font-weight: 500; text-transform: none; color: var(--peak); }
.crew .reihe { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: clamp(1rem, 2.2vw, 2rem); }
.person { position: relative; }
.person .kasten { position: relative; overflow: hidden; border-radius: 12px; aspect-ratio: 4 / 5; }
.person img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(1) contrast(1.05); transition: filter 350ms; }
.person:hover img { filter: none; }
.person .messung { position: absolute; left: 14%; top: 10%; width: 72%; height: 58%; border: 1.5px solid var(--peak); z-index: 2; opacity: 0; transition: opacity 200ms; }
.person .messung::after { content: 'AF·LOCK'; position: absolute; left: 0; top: -1.5em; font-family: var(--mono); font-size: 9.5px; letter-spacing: 0.14em; color: var(--peak); }
.person:hover .messung { opacity: 1; }
.person .name { margin-top: 0.7rem; font-weight: 600; }
.person .rolle { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gedimmt); }

.crew .saetze { margin-top: clamp(2.5rem, 6vh, 4rem); display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem 4rem; }
.crew .saetze p { max-width: 46ch; color: var(--gedimmt); }
.crew .saetze b { color: var(--schnee); }

/* ── Setband: BTS als ziehende Spur ── */
.setband { overflow: hidden; border-block: 1px solid var(--linie); padding: clamp(1.5rem, 4vh, 2.5rem) 0; }
.setband .spur { display: flex; gap: 1rem; width: max-content; animation: ziehen 42s linear infinite; }
.setband:hover .spur { animation-play-state: paused; }
.setband figure { width: clamp(11rem, 18vw, 16rem); flex: none; }
.setband img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 10px; }
.setband figcaption { padding-top: 6px; font-family: var(--mono); font-size: 10.5px; letter-spacing: 0.1em; color: var(--gedimmt); }

/* ── Gründe: Konturziffern ── */
.gruende { padding: clamp(4rem, 10vh, 7rem) var(--rand); max-width: 74rem; }
.gruende li { display: grid; grid-template-columns: clamp(5rem, 9vw, 8rem) minmax(0, 1fr); gap: 1.5rem; padding: clamp(1.5rem, 3.5vh, 2.5rem) 0; border-top: 1px solid var(--linie); }
.gruende li:last-child { border-bottom: 1px solid var(--linie); }
.gruende .nr { font-weight: 800; font-size: clamp(2.5rem, 6vw, 5rem); line-height: 0.9; color: transparent; -webkit-text-stroke: 1.5px var(--peak); }
.gruende h3 { font-weight: 800; font-size: clamp(1.25rem, 2.4vw, 1.875rem); letter-spacing: -0.01em; margin-bottom: 0.4rem; text-transform: uppercase; }
.gruende p { color: var(--gedimmt); max-width: 58ch; }

/* ── FAQ ── */
.faq { padding: 0 var(--rand) clamp(4rem, 10vh, 7rem); max-width: 60rem; }
.faq h2 { font-weight: 800; font-size: clamp(1.875rem, 4.4vw, 3.5rem); letter-spacing: -0.03em; text-transform: uppercase; margin-bottom: 1.5rem; }
.faq h2 .kicker { font-family: var(--serif); font-style: italic; font-weight: 500; text-transform: none; color: var(--peak); }
.faq details { border-top: 1px solid var(--linie); }
.faq details:last-of-type { border-bottom: 1px solid var(--linie); }
.faq summary { list-style: none; padding: 1.05rem 0; font-weight: 600; font-size: clamp(1rem, 1.7vw, 1.1875rem); display: flex; justify-content: space-between; gap: 1rem; }
.faq summary::-webkit-details-marker { display: none; }
.faq summary::after { content: '+'; font-family: var(--mono); color: var(--peak); }
.faq details[open] summary::after { content: '–'; }
.faq details p { padding-bottom: 1.2rem; max-width: 62ch; color: var(--gedimmt); }

/* ── Schluss ── */
.schluss { padding: clamp(4rem, 10vh, 7rem) var(--rand) clamp(2rem, 5vh, 3rem); }
.schluss a.riese { display: block; width: fit-content; font-weight: 800; font-size: clamp(3rem, 12.4vw, 12rem); line-height: 0.9; letter-spacing: -0.045em; text-transform: uppercase; color: transparent; -webkit-text-stroke: 2px var(--schnee); }
.schluss a.riese:hover { color: var(--peak); -webkit-text-stroke: 0; }
.schluss .zeile { margin-top: 2rem; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.75rem 2rem; font-size: 12.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gedimmt); }
.schluss .zeile a { color: var(--schnee); }

.fuss { padding: 0 var(--rand) 1.5rem; }
.fuss .zeile { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; border-top: 1px solid var(--linie); padding-top: 0.8rem; font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; color: var(--gedimmt); }

@media (max-width: 900px) {
  .kopf { grid-template-columns: auto 1fr auto; }
  .kopf .tc, .kopf .rec { display: none; }
  .reels { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .reel:nth-child(even) { transform: none; }
  .crew .reihe { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .crew .saetze { grid-template-columns: minmax(0, 1fr); }
  .machen { min-height: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .held video { clip-path: none; animation: none; }
  .ecke, .held .sucherzeile { opacity: 1; animation: none; }
  .zeilenmaske > span { transform: none; transition: none; }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  const set = [
    ['bts/bts-halle.jpg', 'SET_01 — HALLE'],
    ['bts/bts-transporter.jpg', 'SET_02 — ROAD'],
    ['bts/bts-loft.jpg', 'SET_03 — LOFT'],
    ['bts/bts-schnitt.jpg', 'POST_01 — EDIT'],
    ['bts/bts-studio.jpg', 'SET_04 — STUDIO'],
    ['krafthaus/haus-drohne.jpg', 'HQ_01 — KRAFTHAUS'],
    ['bts/bts-buero.jpg', 'HQ_02 — OFFICE'],
    ['krafthaus/haus-02.jpg', 'HQ_03 — RHEINAUHAFEN'],
  ];
  return `
<div class="vorhang" aria-hidden="true"><span class="tc" data-countin>00:00:00:00</span></div>
<div class="zeiger" aria-hidden="true"><span></span></div>

<header class="kopf">
  <span class="marke">${i.marke}</span>
  <span class="tc" data-timecode>00:00:00:00</span>
  <span class="rec">REC</span>
  <a href="#arbeiten">Work</a>
  <a href="#kontakt">Kontakt</a>
</header>

<section class="held">
  <video src="../public/videos/lewerk-hero.mp4" autoplay muted loop playsinline aria-hidden="true"></video>
  <span class="ecke ecke--a"></span><span class="ecke ecke--b"></span>
  <span class="ecke ecke--c"></span><span class="ecke ecke--d"></span>
  <p class="sucherzeile">4K · 25P · KÖLN 50.93°N</p>
  <span class="sticker">Booked worldwide</span>
  <h1 data-zeilen>${i.marke} is a visual content studio crafting brand content <span class="kicker">worth watching.</span></h1>
  <p class="unter">
    <span>${i.position.auftakt}</span>
    <span>${i.position.zeile.slice(0, 3).join(' · ')}</span>
  </p>
</section>

<div class="band" aria-label="${i.kunden.label}">
  <div class="spur" style="--takt: 34s">
    ${[...i.kunden.liste, ...i.kunden.liste].map((k) => `<span>${k.name} <i>·</i></span>`).join('')}
  </div>
</div>

<section class="werkteil" id="arbeiten">
  <p class="geist" data-parallaxe aria-hidden="true">Featured Work</p>
  <div class="kopfzeile">
    <h2><span class="kicker">Featured</span> Work</h2>
    <span class="zaehler">[ ${String(i.arbeiten.liste.length).padStart(2, '0')} Projekte · 9:16 first ]</span>
  </div>
  <div class="reels">
    ${i.arbeiten.liste.map((a) => `
    <a class="reel" href="#" onclick="return false" data-schau>
      <span class="kasten">
        <img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" loading="lazy">
        <span class="klammer"></span>
        <span class="wer">${a.kunde}</span>
      </span>
      <span class="was"><span>${a.titel}</span><span class="fmt">${a.formate.join('+')}</span></span>
    </a>`).join('')}
  </div>
</section>

<section class="machen" id="machen">
  ${i.disziplinen.liste.map((d, n) => `<span class="wechsel" data-hintergrund="${n}"><img src="${b(d.bild)}" alt="" aria-hidden="true"></span>`).join('')}
  <p class="label">${i.disziplinen.label} — überfahren zeigt das Feld</p>
  <div class="zeilen">
    ${i.disziplinen.liste.map((d, n) => `<span class="zeile" data-nr="${n}">${d.titel}</span>`).join('')}
  </div>
  <div class="text">
    ${i.disziplinen.liste.map((d, n) => `<p data-text="${n}">${d.text}</p>`).join('')}
  </div>
</section>

<div class="band band--peak" aria-hidden="true">
  <div class="spur" style="--takt: 20s">
    ${Array(6).fill(`<span>${i.position.satz.split(' ').slice(0, 6).join(' ')} <i>✺</i></span>`).join('')}
  </div>
</div>

<section class="crew" id="team">
  <h2><span class="kicker">Unser</span> Kernteam</h2>
  <div class="reihe">
    ${i.team.liste.map((m) => `
    <div class="person">
      <span class="kasten">
        <img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy">
        <span class="messung"></span>
      </span>
      <p class="name">${m.name}</p>
      <p class="rolle">${m.rolle.join(' · ')}</p>
    </div>`).join('')}
  </div>
  <div class="saetze">
    ${i.team.bloecke.map((x) => `<p data-zeilen><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
  </div>
</section>

<div class="setband" aria-label="Hinter den Kulissen">
  <div class="spur">
    ${[...set, ...set].map(([bild, zeile]) => `
    <figure><img src="${b(bild)}" alt="${zeile}" loading="lazy"><figcaption>${zeile}</figcaption></figure>`).join('')}
  </div>
</div>

<section class="gruende">
  <ol>
    ${i.gruende.liste.map((g) => `
    <li><span class="nr">${g.nr}</span><div><h3>${g.titel}</h3><p>${g.text}</p></div></li>`).join('')}
  </ol>
</section>

<section class="faq">
  <h2><span class="kicker">Kurz</span> beantwortet</h2>
  ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
</section>

<section class="schluss" id="kontakt">
  <a class="riese" href="mailto:${i.schluss.mail}">Let's talk</a>
  <p class="zeile">
    <span>${i.schluss.auftakt} ${i.schluss.titel} — ${i.schluss.knopf}</span>
    <a href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
  </p>
</section>

<footer class="fuss">
  <p class="zeile"><span>© 2026 ${i.marke} — ${i.gattung}</span><span>TC OUT — CUT.</span></p>
</footer>

<script>
(function () {
  var ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Vorhang + Count-in wie ein Vorspannband */
  var countin = document.querySelector('[data-countin]');
  var start = performance.now();
  var countTimer = setInterval(function () {
    var t = (performance.now() - start) / 1000;
    countin.textContent = '00:00:0' + Math.min(9, Math.floor(t)) + ':' + String(Math.floor((t % 1) * 25)).padStart(2, '0');
  }, 40);
  var fertig = function () { document.body.classList.add('bereit'); clearInterval(countTimer); };
  addEventListener('load', fertig);
  setTimeout(fertig, 1400);

  /* Laufender Timecode in der Kopfzeile — 25 Bilder je Sekunde */
  var tc = document.querySelector('[data-timecode]');
  setInterval(function () {
    var t = (performance.now() - start) / 1000;
    var h = String(Math.floor(t / 3600)).padStart(2, '0');
    var m = String(Math.floor(t / 60) % 60).padStart(2, '0');
    var s = String(Math.floor(t) % 60).padStart(2, '0');
    var f = String(Math.floor((t % 1) * 25)).padStart(2, '0');
    tc.textContent = h + ':' + m + ':' + s + ':' + f;
  }, 40);

  /* Zeilenauftritt — Zerlegung erst zum load-Ereignis, tolerant, mit
     Rueckzug (die Lehren aus Entwurf 21) */
  var zerlegen = function () {
    document.querySelectorAll('[data-zeilen]').forEach(function (el) {
      var stuecke = [];
      el.childNodes.forEach(function (kn) {
        if (kn.nodeType === 3) { kn.textContent.split(/\\s+/).filter(Boolean).forEach(function (w) { stuecke.push(w); }); }
        else if (kn.nodeType === 1) { stuecke.push(kn.cloneNode(true)); }
      });
      el.textContent = '';
      var kaesten = stuecke.map(function (s) {
        var k = document.createElement('span');
        k.style.display = 'inline-block';
        if (typeof s === 'string') { k.textContent = s; } else { k.appendChild(s); }
        el.appendChild(k); el.appendChild(document.createTextNode(' '));
        return k;
      });
      var halb = parseFloat(getComputedStyle(el).fontSize) * 0.5;
      var zeilen = [], letzte = null;
      kaesten.forEach(function (k) {
        if (letzte === null || k.offsetTop - letzte > halb) { zeilen.push([]); letzte = k.offsetTop; }
        zeilen[zeilen.length - 1].push(k);
      });
      if (zeilen.length >= kaesten.length && kaesten.length > 2) { zeilen = [kaesten]; }
      el.textContent = '';
      zeilen.forEach(function (zeile, n) {
        var maske = document.createElement('span');
        maske.className = 'zeilenmaske';
        maske.style.setProperty('--z', n);
        var innen = document.createElement('span');
        zeile.forEach(function (k, j) { k.style.display = 'inline'; innen.appendChild(k); if (j < zeile.length - 1) innen.appendChild(document.createTextNode(' ')); });
        maske.appendChild(innen);
        el.appendChild(maske);
      });
      if (ruhig) { el.classList.add('wach'); }
    });
    if (!ruhig) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('wach'); io.unobserve(e.target); } });
      }, { threshold: 0.35 });
      document.querySelectorAll('[data-zeilen]').forEach(function (el) { io.observe(el); });
    }
  };
  var einmal = false;
  var los = function () { if (!einmal) { einmal = true; zerlegen(); } };
  if (document.readyState === 'complete') { setTimeout(los, 0); } else { addEventListener('load', los); }
  setTimeout(los, 1500);

  /* Geisterwort-Parallaxe */
  var geist = document.querySelector('[data-parallaxe]');
  if (!ruhig && geist) {
    addEventListener('scroll', function () {
      var r = geist.parentElement.getBoundingClientRect();
      geist.style.transform = 'translateX(-50%) translateY(' + ((r.top) * -0.25).toFixed(1) + 'px)';
    }, { passive: true });
  }

  /* Cursor */
  var zeiger = document.querySelector('.zeiger');
  var zText = zeiger.querySelector('span');
  if (!matchMedia('(hover: none)').matches) {
    var zx = innerWidth / 2, zy = innerHeight / 2, x = zx, y = zy, laeuft = false;
    addEventListener('pointermove', function (e) {
      zx = e.clientX; zy = e.clientY;
      if (!laeuft) { laeuft = true; requestAnimationFrame(tick); }
    });
    var tick = function () {
      x += (zx - x) * 0.3; y += (zy - y) * 0.3;
      zeiger.style.left = x + 'px'; zeiger.style.top = y + 'px';
      if (Math.abs(zx - x) > 0.3 || Math.abs(zy - y) > 0.3) { requestAnimationFrame(tick); } else { laeuft = false; }
    };
    document.querySelectorAll('[data-schau]').forEach(function (el) {
      el.addEventListener('pointerenter', function () { zText.textContent = 'View'; zeiger.classList.add('gross'); });
      el.addEventListener('pointerleave', function () { zeiger.classList.remove('gross'); });
    });
  }

  /* Disziplinen: Zeile weckt Grund und Text */
  var wechsel = document.querySelectorAll('[data-hintergrund]');
  var texte = document.querySelectorAll('[data-text]');
  document.querySelectorAll('.machen .zeile').forEach(function (z) {
    z.addEventListener('pointerenter', function () {
      wechsel.forEach(function (w) { w.classList.toggle('an', w.dataset.hintergrund === z.dataset.nr); });
      texte.forEach(function (t) { t.classList.toggle('an', t.dataset.text === z.dataset.nr); });
    });
    z.addEventListener('pointerleave', function () {
      wechsel.forEach(function (w) { w.classList.remove('an'); });
      texte.forEach(function (t) { t.classList.remove('an'); });
    });
  });
})();
</script>
`;
};

export default {
  name: 'Regie',
  idee: 'Mein Vorschlag: die Seite als Kamerasucher — Timecode, REC, Fokus-Peaking-Grün, Reels in 9:16, dicht wie Fuzzy.',
  stil,
  koerper,
};
