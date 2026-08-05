/**
 * Entwurf 12 — Meilenweit.
 *
 * Nach der BMS-United-Referenz (bms-united auf Awwwards, von
 * Kommigraphics), die Simon als Aufnahme geliefert hat. Übernommen:
 *
 *   FARBEN     Eisblauer Verlauf als Grund, ein sattes Rot für alles
 *              Große, dunkle Bilder als Gegengewicht.
 *   TYPO       Riesige, enge Versalien, die über die volle Breite laufen
 *              und an den Rändern anschneiden. Die Bilder stehen in den
 *              Zeilen — die Schrift läuft über das mittlere hinweg.
 *              Engschrift über Arial Narrow / Impact, beide auf jedem
 *              Rechner vorhanden.
 *   MENÜ       Das Overlay aus dem Video: Vollfläche in Eisblau, Zeilen
 *              mit Linien, beim Überfahren wird die Zeile rot und hinter
 *              ihr steigt ein Bild auf.
 *   SCROLLEN   Geisterwörter mit aufsteigenden Bildsäulen (der
 *              BUNKERS-Moment des Videos), per IntersectionObserver.
 *   KARUSSELL  Die rote Vollfläche mit Pfeilen links und rechts, eine
 *              helle Karte über dem Bild (der LUBRICANTS-Aufbau).
 *   CURSOR     Der kleine Kreis mit Punkt, der dem Zeiger folgt.
 */

const stil = `
:root {
  --eis-hell: #d6edf5;
  --eis: #c4e2ee;
  --rot: #e01f1f;
  --dunkel: #101418;
  --grotesk: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --eng: 'Arial Narrow', 'Helvetica Neue Condensed', Impact, sans-serif;
  --rand: clamp(1.25rem, 3.5vw, 3rem);
}

body {
  background: linear-gradient(180deg, var(--eis-hell) 0%, var(--eis) 55%, #e8f4f8 100%);
  color: var(--dunkel);
  font: 400 15.5px/1.6 var(--grotesk);
  cursor: none;
}

a, button, summary { cursor: none; }

@media (hover: none) {
  body, a, button, summary { cursor: auto; }
  .kreis-cursor { display: none; }
}

/* Der Kreis-Cursor mit Punkt */
.kreis-cursor {
  position: fixed;
  z-index: 200;
  width: 34px;
  height: 34px;
  border: 1.5px solid var(--dunkel);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  transition: scale 180ms ease, border-color 180ms ease;
}

.kreis-cursor::after { content: ''; width: 4px; height: 4px; border-radius: 50%; background: var(--dunkel); }
body:has(a:hover, button:hover, summary:hover) .kreis-cursor { scale: 1.5; border-color: var(--rot); }

/* ── Kopf ── */
.kopf {
  position: fixed;
  inset: 0 0 auto;
  z-index: 30;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem var(--rand);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.kopf .marke b { font-weight: 700; }
.kopf .marke span { font-weight: 400; color: #52646d; }

/* Die drei Striche in der Mitte */
.kopf .menueknopf {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 0;
  background: none;
  padding: 0.6rem;
  display: grid;
  gap: 4px;
}

.kopf .menueknopf i { display: block; width: 44px; height: 2.5px; background: var(--dunkel); transition: transform 200ms; }
.kopf .menueknopf:hover i:first-child { transform: translateY(-2px); }
.kopf .menueknopf:hover i:last-child { transform: translateY(2px); }

.kopf .kontakt { text-decoration: none; }
.kopf .kontakt:hover { color: var(--rot); }

/* ── Das Overlay-Menü ── */
.menue {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: linear-gradient(180deg, var(--eis-hell), var(--eis));
  padding: 6rem var(--rand) 3rem;
  overflow-y: auto;
  opacity: 0;
  visibility: hidden;
  transition: opacity 320ms ease, visibility 0s 320ms;
}

.menue.offen { opacity: 1; visibility: visible; transition: opacity 320ms ease; }

.menue .zu {
  position: absolute;
  top: 1.2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 46px;
  height: 46px;
  border: 1.5px solid var(--rot);
  border-radius: 50%;
  background: none;
  color: var(--rot);
  font-size: 20px;
  line-height: 1;
}

.menue .zu:hover { background: var(--rot); color: var(--eis-hell); }

.menue ol { max-width: 46rem; margin: 0 auto; position: relative; z-index: 1; }

.menue .gruppe {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--rot);
  margin: 1.75rem 0 0.4rem;
}

.menue a {
  display: block;
  padding: 0.45rem 0;
  border-bottom: 1.5px solid rgba(16, 20, 24, 0.4);
  text-decoration: none;
  font-family: var(--eng);
  font-weight: 700;
  font-size: clamp(1.5rem, 3.6vw, 2.5rem);
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: color 160ms, padding-left 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
}

.menue a:hover { color: var(--rot); padding-left: 0.75rem; }

/* Das Bild, das hinter dem überfahrenen Punkt aufsteigt */
.menue .bild {
  position: fixed;
  right: clamp(1rem, 8vw, 9rem);
  bottom: 0;
  width: clamp(11rem, 22vw, 18rem);
  pointer-events: none;
  opacity: 0;
  transform: translateY(18%);
  transition: opacity 300ms ease, transform 420ms cubic-bezier(0.22, 0.61, 0.36, 1);
}

.menue .bild.an { opacity: 1; transform: translateY(0); }
.menue .bild img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; }

/* ── Auftakt ── */
.auftakt {
  position: relative;
  min-height: 100svh;
  padding: 7rem var(--rand) 3rem;
  display: grid;
  align-content: start;
  overflow: hidden;
}

.auftakt .ansage {
  text-align: center;
  color: var(--rot);
  text-transform: uppercase;
  margin-bottom: clamp(1.5rem, 4vh, 3rem);
}

.auftakt .ansage b { display: block; font-size: clamp(14px, 1.6vw, 19px); font-weight: 700; letter-spacing: 0.14em; }
.auftakt .ansage span { display: block; font-size: clamp(12px, 1.4vw, 17px); letter-spacing: 0.1em; margin-top: 0.3rem; }

/* Die Bühne: Riesenwort + drei Bilder in Schichten */
.buehne { position: relative; min-height: clamp(20rem, 58vh, 34rem); }

/* 15.5vw statt frei gewählt: "WORTH WATCHING" hat 14 Zeichen, in Arial
   Narrow fett rund 0,47em je Zeichen — 14 × 0,47 × 15,5vw ≈ 102vw. Das
   Wort füllt die Breite und schneidet nur an den Endbuchstaben an, wie
   MILES AHEAD in der Referenz. Bei 24vw stand nur noch RTH WATCH im Bild. */
.riese {
  position: absolute;
  left: 50%;
  top: 12%;
  transform: translateX(-50%);
  z-index: 2;
  margin: 0;
  font-family: var(--eng);
  font-weight: 700;
  font-size: clamp(4.5rem, 15.5vw, 15rem);
  line-height: 0.8;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--rot);
}

/* Die Buchstaben kommen einzeln von unten — der Ladeauftritt des Videos */
.riese span { display: inline-block; transform: translateY(110%); opacity: 0; animation: auftritt 700ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards; animation-delay: calc(var(--n) * 55ms + 200ms); }
@keyframes auftritt { to { transform: translateY(0); opacity: 1; } }

.buehne .foto { position: absolute; overflow: hidden; }
.buehne .foto img { width: 100%; height: 100%; object-fit: cover; }

/* links und rechts unter der Schrift, die Mitte auch — das Wort läuft
   über alle drei, wie in der Referenz */
.foto--links { left: 8%; top: 34%; width: clamp(7rem, 14vw, 12rem); aspect-ratio: 3 / 4; z-index: 1; }
.foto--mitte { left: 50%; top: 0; transform: translateX(-50%); width: clamp(11rem, 22vw, 19rem); aspect-ratio: 3 / 4; z-index: 1; }
.foto--rechts { right: 6%; top: 42%; width: clamp(6.5rem, 12vw, 10.5rem); aspect-ratio: 3 / 4; z-index: 3; }

.auftakt .unten {
  position: absolute;
  bottom: 1.5rem;
  left: var(--rand);
  right: var(--rand);
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #52646d;
}

/* ── Geisterwort-Abschnitte: Wort hinten, Bildsäule steigt ── */
.geist {
  position: relative;
  padding: clamp(5rem, 12vh, 9rem) var(--rand);
  overflow: hidden;
  text-align: center;
}

.geist .ansage { color: var(--rot); font-size: 13px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 1rem; }

.geist .wort {
  font-family: var(--eng);
  font-weight: 700;
  font-size: clamp(4rem, 15vw, 13rem);
  line-height: 0.85;
  letter-spacing: 0;
  text-transform: uppercase;
  color: var(--rot);
  opacity: 0.9;
  position: relative;
  z-index: 0;
}

.geist .saeule {
  position: relative;
  z-index: 1;
  width: clamp(13rem, 26vw, 21rem);
  margin: calc(clamp(2rem, 6vw, 5rem) * -1) auto 0;
  transform: translateY(26%);
  opacity: 0;
  transition: transform 800ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 500ms ease;
}

.geist.wach .saeule { transform: translateY(0); opacity: 1; }
.geist .saeule img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; }

.geist .karte {
  position: absolute;
  inset: auto 0 0 0;
  margin: 0 auto -1.5rem;
  width: min(86%, 17rem);
  background: var(--eis-hell);
  padding: 1.1rem 1.2rem;
  text-align: left;
  font-size: 13px;
  box-shadow: 0 18px 44px rgba(16, 20, 24, 0.22);
}

.geist .karte h3 { font-family: var(--eng); font-weight: 700; font-size: 1.5rem; text-transform: uppercase; margin-bottom: 0.4rem; }

/* ── Rote Vollfläche: das Karussell ── */
.rot {
  background: linear-gradient(160deg, #b81a1a 0%, var(--rot) 45%, #c31c1c 100%);
  color: var(--eis-hell);
  padding: clamp(4rem, 10vh, 7rem) var(--rand);
  position: relative;
}

.rot .ansage { text-align: center; font-size: 13px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: clamp(2rem, 5vh, 3.5rem); }

.rutsche { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: clamp(1.5rem, 4vw, 3.5rem); scrollbar-width: none; }
.rutsche::-webkit-scrollbar { display: none; }

.dia {
  flex: none;
  width: min(100%, 30rem);
  margin: 0 auto;
  scroll-snap-align: center;
  position: relative;
  padding: clamp(1rem, 3vw, 2rem) 0 clamp(1rem, 3vw, 2rem) clamp(1rem, 3vw, 2rem);
}

.dia img { width: 78%; aspect-ratio: 3 / 4; object-fit: cover; display: block; margin-left: auto; }

.dia .karte {
  position: absolute;
  left: 0;
  top: clamp(2.5rem, 7vw, 4.5rem);
  width: 62%;
  background: var(--eis-hell);
  color: var(--dunkel);
  padding: 1.2rem 1.3rem 1.4rem;
  box-shadow: 0 22px 50px rgba(0, 0, 0, 0.3);
}

.dia .karte h3 { font-family: var(--eng); font-weight: 700; font-size: clamp(1.375rem, 2.6vw, 2rem); text-transform: uppercase; line-height: 0.95; }
.dia .karte .was { margin-top: 0.5rem; font-size: 13px; text-transform: uppercase; letter-spacing: 0.06em; }
.dia .karte .fmt { margin-top: 0.9rem; font-size: 11px; font-weight: 700; letter-spacing: 0.14em; color: var(--rot); text-transform: uppercase; }

.rot .pfeile {
  display: flex;
  justify-content: space-between;
  position: absolute;
  inset: 50% var(--rand) auto;
  transform: translateY(-50%);
  pointer-events: none;
}

.rot .pfeile button {
  pointer-events: auto;
  border: 0;
  background: none;
  color: var(--eis-hell);
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1;
  transition: transform 200ms;
}

.rot .pfeile .vor:hover { transform: translateX(0.4rem); }
.rot .pfeile .zurueck:hover { transform: translateX(-0.4rem); }

/* ── Kunden: die Menüliste als Abschnitt ── */
.kunden { padding: clamp(4rem, 10vh, 7rem) var(--rand); }
.kunden .innen { max-width: 46rem; margin: 0 auto; }
.kunden .ansage { color: var(--rot); font-size: 13px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 1.25rem; text-align: center; }

.kunden li { border-bottom: 1.5px solid rgba(16, 20, 24, 0.4); }
.kunden li:first-child { border-top: 1.5px solid rgba(16, 20, 24, 0.4); }

.kunden .zeile {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.45rem 0;
  font-family: var(--eng);
  font-weight: 700;
  font-size: clamp(1.25rem, 3vw, 2.125rem);
  text-transform: uppercase;
  transition: color 160ms, padding-left 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
}

.kunden .zeile:hover { color: var(--rot); padding-left: 0.75rem; }
.kunden .zeile i { font-family: var(--grotesk); font-style: normal; font-size: 11px; letter-spacing: 0.16em; color: #52646d; }

/* ── Team ── */
.team { padding: 0 var(--rand) clamp(4rem, 10vh, 7rem); }
.team ul { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(1.25rem, 3vw, 2.25rem); max-width: 70rem; margin: 0 auto; }
.team img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; filter: grayscale(1) contrast(1.05); transition: filter 320ms; }
.team li:hover img { filter: none; }
.team .name { margin-top: 0.7rem; font-family: var(--eng); font-weight: 700; font-size: clamp(1.125rem, 2vw, 1.5rem); text-transform: uppercase; }
.team li:hover .name { color: var(--rot); }
.team .rolle { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #52646d; }

.team .saetze { max-width: 70rem; margin: clamp(2.5rem, 6vh, 4rem) auto 0; display: grid; gap: 1.25rem 4rem; }
.team .saetze p { max-width: 46ch; }
.team .saetze b { color: var(--rot); text-transform: uppercase; font-size: 14px; letter-spacing: 0.06em; }

/* ── Gründe: rote Fläche, Kreis hinter der Zahl ── */
.gruende { background: linear-gradient(160deg, #b81a1a, var(--rot)); color: var(--eis-hell); padding: clamp(4rem, 10vh, 7rem) var(--rand); }
.gruende .innen { max-width: 62rem; margin: 0 auto; display: grid; gap: clamp(2.5rem, 6vh, 4rem); }

.grund { text-align: center; position: relative; }

.grund .kreis {
  width: clamp(5rem, 10vw, 7.5rem);
  height: clamp(5rem, 10vw, 7.5rem);
  margin: 0 auto 0.75rem;
  border: 1.5px solid var(--eis-hell);
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-family: var(--eng);
  font-weight: 700;
  font-size: clamp(1.75rem, 3.4vw, 2.75rem);
}

.grund h3 { font-family: var(--eng); font-weight: 700; font-size: clamp(1.75rem, 4vw, 3rem); text-transform: uppercase; line-height: 0.95; }
.grund p { max-width: 52ch; margin: 0.75rem auto 0; font-size: 15px; color: rgba(214, 237, 245, 0.85); }

/* ── FAQ ── */
.faq { padding: clamp(4rem, 10vh, 7rem) var(--rand); }
.faq .innen { max-width: 46rem; margin: 0 auto; }
.faq .ansage { color: var(--rot); font-size: 13px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 1.25rem; text-align: center; }

.faq details { border-bottom: 1.5px solid rgba(16, 20, 24, 0.4); }
.faq details:first-of-type { border-top: 1.5px solid rgba(16, 20, 24, 0.4); }
.faq summary { list-style: none; padding: 0.8rem 0; font-family: var(--eng); font-weight: 700; font-size: clamp(1.125rem, 2.2vw, 1.625rem); text-transform: uppercase; transition: color 160ms, padding-left 240ms; }
.faq summary::-webkit-details-marker { display: none; }
.faq summary:hover, .faq details[open] summary { color: var(--rot); padding-left: 0.75rem; }
.faq details p { padding: 0 0 1.2rem; color: #37444c; max-width: 60ch; }

/* ── Schluss: Riesenwort, angeschnitten ── */
.schluss { position: relative; overflow: hidden; padding: clamp(4rem, 10vh, 7rem) 0 0; text-align: center; }

.schluss .ansage { color: var(--rot); font-size: 13px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; }

.schluss a.riese2 {
  display: block;
  margin-top: 1rem;
  text-decoration: none;
  font-family: var(--eng);
  font-weight: 700;
  font-size: clamp(4.5rem, 19vw, 17rem);
  line-height: 0.78;
  text-transform: uppercase;
  color: var(--rot);
  white-space: nowrap;
  transform: translateY(0.08em);
}

.schluss a.riese2:hover { color: #b81a1a; }
.schluss .mail { position: absolute; right: var(--rand); top: 1rem; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }

@media (min-width: 860px) {
  .team ul { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .team .saetze { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  const riese = (wort) => wort.split('').map((z, n) =>
    z === ' ' ? '<span style="--n:' + n + '">&nbsp;</span>' : `<span style="--n:${n}">${z}</span>`).join('');
  return `
<div class="kreis-cursor" aria-hidden="true"></div>

<header class="kopf">
  <span class="marke"><b>${i.marke}</b> <span>${i.gattung}</span></span>
  <button class="menueknopf" type="button" aria-label="Menü öffnen" data-menue-auf>
    <i></i><i></i><i></i>
  </button>
  <a class="kontakt" href="#kontakt">Kontakt</a>
</header>

<nav class="menue" aria-label="Übersicht">
  <button class="zu" type="button" aria-label="Menü schließen" data-menue-zu>×</button>
  <ol>
    <li class="gruppe">Start</li>
    <li><a href="#oben" data-bild="${b('work/siemens.webp')}">Home</a></li>
    <li class="gruppe">${i.arbeiten.label}</li>
    ${i.arbeiten.liste.slice(0, 4).map((a) => `
    <li><a href="#arbeiten" data-bild="${b(a.bild)}">${a.kunde}</a></li>`).join('')}
    <li class="gruppe">Studio</li>
    <li><a href="#machen" data-bild="${b('services/video.jpg')}">${i.disziplinen.label}</a></li>
    <li><a href="#team" data-bild="${b('bts/bts-studio.jpg')}">${i.team.titel}</a></li>
    <li><a href="#kontakt" data-bild="${b('krafthaus/haus-drohne.jpg')}">Kontakt</a></li>
  </ol>
  <figure class="bild" aria-hidden="true"><img alt=""></figure>
</nav>

<section class="auftakt" id="oben">
  <div class="ansage">
    <b>Wir sind ${i.marke} — ${i.gattung}, Köln</b>
    <span>${i.claim}</span>
  </div>

  <div class="buehne">
    <figure class="foto foto--links"><img src="${b('bts/bts-transporter.jpg')}" alt="Setfoto am Transporter"></figure>
    <figure class="foto foto--mitte"><img src="${b('work/bvb-ea-sports.webp')}" alt="BVB × EA Sports — Social Ad"></figure>
    <h1 class="riese" aria-label="Worth Watching">${riese('WORTH WATCHING')}</h1>
    <figure class="foto foto--rechts"><img src="${b('work/street-one.webp')}" alt="Street One — Social Content"></figure>
  </div>

  <p class="unten">
    <span>${i.position.auftakt}</span>
    <span>${i.position.zeile.join(' — ')}</span>
  </p>
</section>

<section class="geist" data-wach>
  <p class="ansage">${i.position.zeile.slice(0, 3).join(' · ')}</p>
  <p class="wort">Storytelling</p>
  <figure class="saeule">
    <img src="${b('work/siemens.webp')}" alt="Siemens — Social Media Kampagne">
    <span class="karte"><h3>${i.marke}</h3>${i.position.satz}</span>
  </figure>
</section>

<section class="rot" id="arbeiten">
  <p class="ansage">${i.arbeiten.label} — mit den Pfeilen blättern</p>
  <div class="rutsche" data-rutsche>
    ${i.arbeiten.liste.map((a) => `
    <div class="dia">
      <img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" loading="lazy">
      <div class="karte">
        <h3>${a.kunde}</h3>
        <p class="was">${a.titel}</p>
        <p class="fmt">${a.formate.length > 1 ? 'Formate' : 'Format'} ${a.formate.join(' · ')}</p>
      </div>
    </div>`).join('')}
  </div>
  <div class="pfeile">
    <button class="zurueck" type="button" aria-label="Zurück" data-zurueck>←</button>
    <button class="vor" type="button" aria-label="Weiter" data-vor>→</button>
  </div>
</section>

<section class="kunden" id="kunden">
  <div class="innen">
    <p class="ansage">${i.kunden.label}</p>
    <ul>
      ${i.kunden.liste.map((k, n) => `
      <li><span class="zeile">${k.name}<i>${String(n + 1).padStart(2, '0')}</i></span></li>`).join('')}
    </ul>
  </div>
</section>

<div id="machen">
  ${i.disziplinen.liste.map((d, n) => `
  <section class="geist" data-wach>
    <p class="ansage">${i.disziplinen.label} — ${String(n + 1).padStart(2, '0')}</p>
    <p class="wort">${d.titel}</p>
    <figure class="saeule">
      <img src="${b(d.bild)}" alt="${d.titel}" loading="lazy">
      <span class="karte"><h3>${d.titel}</h3>${d.text}</span>
    </figure>
  </section>`).join('')}
</div>

<section class="geist" data-wach id="team" style="padding-bottom: 2rem">
  <p class="ansage">${i.team.label}</p>
  <p class="wort">${i.team.titel.replace('Unser ', '')}</p>
</section>

<section class="team">
  <ul>
    ${i.team.liste.map((m) => `
    <li>
      <img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy">
      <p class="name">${m.name}</p>
      <p class="rolle">${m.rolle.join(' · ')}</p>
    </li>`).join('')}
  </ul>
  <div class="saetze">
    ${i.team.bloecke.map((x) => `<p><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
  </div>
</section>

<section class="gruende">
  <div class="innen">
    <p class="ansage" style="text-align:center; font-size:13px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase">${i.gruende.titel}</p>
    ${i.gruende.liste.map((g) => `
    <div class="grund">
      <span class="kreis">${g.nr}</span>
      <h3>${g.titel}</h3>
      <p>${g.text}</p>
    </div>`).join('')}
  </div>
</section>

<section class="faq">
  <div class="innen">
    <p class="ansage">${i.faq.label} — ${i.faq.titel}</p>
    ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
  </div>
</section>

<section class="schluss" id="kontakt">
  <p class="ansage">${i.schluss.auftakt} ${i.schluss.titel} — ${i.schluss.knopf}</p>
  <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
  <a class="riese2" href="mailto:${i.schluss.mail}">Let's talk</a>
</section>

<script>
(() => {
  const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Kreis-Cursor mit Nachlauf
  const kreis = document.querySelector('.kreis-cursor');
  if (!matchMedia('(hover: none)').matches) {
    let zx = innerWidth / 2, zy = innerHeight / 2, x = zx, y = zy, laeuft = false;
    addEventListener('pointermove', (e) => {
      zx = e.clientX; zy = e.clientY;
      if (!laeuft) { laeuft = true; requestAnimationFrame(tick); }
    });
    const tick = () => {
      x += (zx - x) * 0.3; y += (zy - y) * 0.3;
      kreis.style.left = x + 'px'; kreis.style.top = y + 'px';
      if (Math.abs(zx - x) > 0.3 || Math.abs(zy - y) > 0.3) requestAnimationFrame(tick);
      else laeuft = false;
    };
  }

  // Overlay-Menü
  const menue = document.querySelector('.menue');
  document.querySelector('[data-menue-auf]').addEventListener('click', () => {
    menue.classList.add('offen');
    document.body.style.overflow = 'hidden';
  });
  const zu = () => { menue.classList.remove('offen'); document.body.style.overflow = ''; };
  document.querySelector('[data-menue-zu]').addEventListener('click', zu);
  menue.querySelectorAll('a').forEach((a) => a.addEventListener('click', zu));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') zu(); });

  // Menü-Hover: Bild steigt auf
  const mb = menue.querySelector('.bild');
  const mbi = mb.querySelector('img');
  menue.querySelectorAll('[data-bild]').forEach((a) => {
    a.addEventListener('pointerenter', () => { mbi.src = a.dataset.bild; mb.classList.add('an'); });
    a.addEventListener('pointerleave', () => mb.classList.remove('an'));
  });

  // Geisterabschnitte wachen beim Hereinscrollen auf
  if (ruhig) {
    document.querySelectorAll('[data-wach]').forEach((s) => s.classList.add('wach'));
  } else {
    const io = new IntersectionObserver((eintraege) => {
      eintraege.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('wach'); io.unobserve(e.target); } });
    }, { threshold: 0.35 });
    document.querySelectorAll('[data-wach]').forEach((s) => io.observe(s));
  }

  // Karussell
  const spur = document.querySelector('[data-rutsche]');
  const breite = () => spur.querySelector('.dia').getBoundingClientRect().width + 24;
  document.querySelector('[data-vor]').addEventListener('click', () => spur.scrollBy({ left: breite(), behavior: ruhig ? 'auto' : 'smooth' }));
  document.querySelector('[data-zurueck]').addEventListener('click', () => spur.scrollBy({ left: -breite(), behavior: ruhig ? 'auto' : 'smooth' }));
})();
</script>
`;
};

export default {
  name: 'Meilenweit',
  idee: 'Nach der BMS-United-Referenz: Eisblau, rote Engschrift-Riesen quer durch die Bilder, Overlay-Menü, Karussell.',
  stil,
  koerper,
};
