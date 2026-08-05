/**
 * Entwurf 01 — nach der Better-Half-Referenz (betterhalf.tv).
 *
 * Was übernommen ist, und woher:
 *
 *   FARBEN      #ECD06F / #000 / #FFF — die drei Werte aus der
 *               Awwwards-Farbtafel in Simons Aufnahme. Petrol kommt in
 *               diesem Entwurf nicht vor; er ist eine andere Welt.
 *   WORTMARKE   Riesige Serife, senkrecht gedehnt, läuft über die ganze
 *               Breite und über die Ränder hinaus. Im Original PP
 *               Editorial-artig; hier Bodoni Moda aus dem Projekt — die
 *               liegt schon lokal und ist dieselbe Gattung: hoher
 *               Strichkontrast, feine Serifen.
 *   SPIELEREI   Die Marke reagiert auf die Maus (Neigung), wie im
 *               zweiten Video der Aufnahme.
 *   KUNDEN      Zeilenliste, beim Überfahren erscheint das Logo und
 *               folgt dem Zeiger — das erste Video der Aufnahme. Hier
 *               auf schwarzer Karte, weil die Kundenlogos des Projekts
 *               weiß angelegt sind und auf hellem Grund verschwänden.
 *   ARBEITEN    Verstreute, überlappende Kacheln auf hellem Grau — das
 *               zweite Foto der Referenz.
 *   KOPFZEILE   Marke oval eingekreist, daneben die Gattung, rechts die
 *               numerierte Navigation.
 *
 * Die Inhalte kommen wortgleich aus ../inhalt.js.
 */

const F = {
  gold: '#ECD06F',
  schwarz: '#0a0a0a',
  weiss: '#ffffff',
  grau: '#e6e5e2',
  tinte: '#111111',
  gedimmt: 'rgba(17, 17, 17, 0.62)',
};

const stil = `
@font-face {
  font-family: 'Bodoni Moda';
  font-style: normal;
  font-weight: 400 500;
  font-display: swap;
  src: url('../src/styles/fonts/bodoni-moda-opsz11-normal-latin.woff2') format('woff2');
}
@font-face {
  font-family: 'Bodoni Moda';
  font-style: italic;
  font-weight: 400 500;
  font-display: swap;
  src: url('../src/styles/fonts/bodoni-moda-opsz11-italic-latin.woff2') format('woff2');
}

:root {
  --gold: ${F.gold};
  --schwarz: ${F.schwarz};
  --grau: ${F.grau};
  --tinte: ${F.tinte};
  --gedimmt: ${F.gedimmt};
  --serif: 'Bodoni Moda', Didot, 'Times New Roman', serif;
  --grotesk: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --rand: clamp(1.25rem, 3.5vw, 3rem);
}

body {
  background: #fff;
  color: var(--tinte);
  font: 400 16px/1.55 var(--grotesk);
  letter-spacing: 0.01em;
}

/* ── Kopfzeile ── */
.kopf {
  position: fixed;
  inset: 0 0 auto;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.1rem var(--rand);
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  mix-blend-mode: darken;
}

.kopf__marke {
  position: relative;
  padding: 0.3em 0.9em;
  white-space: nowrap;
  font-weight: 500;
}

/* Die Ellipse um die Marke — als SVG im Hintergrund, damit die Linie eine
   echte Ellipse ist und keine gerundete Box */
.kopf__marke svg {
  position: absolute;
  inset: -12% -4%;
  width: 108%;
  height: 124%;
}

.kopf__gattung { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.kopf__nav { display: flex; gap: 1.75rem; }
.kopf__nav a { text-decoration: none; }
.kopf__nav a:hover { text-decoration: underline; text-underline-offset: 0.3em; }
.kopf__nav .nr { color: var(--gedimmt); margin-right: 0.35em; }

/* ── Auftakt ── */
.buehne {
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  background: linear-gradient(175deg, var(--gold) 0%, var(--gold) 38%, #fff 96%);
  display: grid;
  place-items: center;
}

.buehne__foto {
  position: relative;
  z-index: 1;
  width: min(38vw, 24rem);
  margin-top: -4vh;
}

.buehne__foto img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
}

/* Die Wortmarke: eine Zeile, viel breiter als das Fenster, senkrecht
   gedehnt. Zwei Lagen — eine hinter dem Foto, eine davor —, damit die
   Buchstaben durch das Bild laufen wie in der Referenz. */
.marke {
  position: absolute;
  left: 50%;
  bottom: -0.06em;
  transform: translateX(-50%);
  z-index: 0;
  margin: 0;
  font-family: var(--serif);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(9rem, 32vw, 34rem);
  line-height: 0.82;
  letter-spacing: -0.04em;
  white-space: nowrap;
  color: var(--schwarz);
  pointer-events: none;
  will-change: transform;
}

.marke--vorn {
  z-index: 2;
  clip-path: inset(38% 0 0 0);
}

/* Senkrechte Dehnung sitzt auf einem inneren Element, damit die
   Mausneigung außen dazukommen kann, ohne sie zu überschreiben */
.marke span {
  display: inline-block;
  transform: scaleY(1.75);
  transform-origin: bottom center;
}

.buehne__claim {
  position: absolute;
  z-index: 3;
  left: var(--rand);
  top: 16vh;
  max-width: 17em;
  font-size: clamp(0.9375rem, 1.4vw, 1.125rem);
  line-height: 1.45;
  text-wrap: balance;
}

.buehne__hinweis {
  position: absolute;
  z-index: 3;
  right: var(--rand);
  bottom: 2rem;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gedimmt);
}

/* ── Position ── */
.position {
  padding: clamp(5rem, 12vw, 10rem) var(--rand);
  background: #fff;
  text-align: center;
}

.position p:first-child {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(1.375rem, 2.6vw, 2rem);
  margin-bottom: 1rem;
}

.position .satz {
  max-width: 34ch;
  margin: 0 auto;
  font-size: clamp(1.5rem, 3.4vw, 2.75rem);
  line-height: 1.2;
  letter-spacing: -0.015em;
  font-weight: 500;
  text-wrap: balance;
}

.position .zeile {
  margin-top: clamp(2rem, 4vw, 3rem);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gedimmt);
}

/* ── Arbeiten: die Streuung ── */
.arbeiten {
  background: var(--grau);
  padding: clamp(4rem, 9vw, 7rem) var(--rand) clamp(5rem, 11vw, 9rem);
}

.arbeiten h2 {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.streu {
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  max-width: 74rem;
  margin: 0 auto;
}

.streu a {
  display: block;
  text-decoration: none;
  transition: transform 320ms cubic-bezier(0.22, 0.61, 0.36, 1);
}

.streu a:hover { transform: translateY(-0.5rem); z-index: 5; position: relative; }

.streu img {
  width: 100%;
  aspect-ratio: var(--r);
  object-fit: cover;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
}

.streu figcaption {
  display: flex;
  gap: 0.6em;
  align-items: baseline;
  padding-top: 0.6rem;
  font-size: 12.5px;
  letter-spacing: 0.04em;
}

.streu figcaption .wer { font-weight: 500; text-transform: uppercase; }
.streu figcaption .was { color: var(--gedimmt); }

/* Sechs Plätze, gestreut und überlappend wie im zweiten Referenzfoto.
   Die Überlappung entsteht aus negativen oberen Abständen.

   Die Plätze sind bewusst klein — drei bis vier von zwölf Spalten. Ein
   erster Wurf gab Siemens fünf, und die 4:5-Kachel wurde 650px hoch; der
   Abschnitt wuchs auf 2000px und die Streuung las sich als Galerie mit
   Unordnung statt als ein Haufen auf einem Tisch. */
.streu .p1 { grid-column: 4 / span 4; }
.streu .p2 { grid-column: 1 / span 3; margin-top: -10%; }
.streu .p3 { grid-column: 8 / span 3; margin-top: -26%; }
.streu .p4 { grid-column: 3 / span 2; margin-top: -4%; }
.streu .p5 { grid-column: 6 / span 2; margin-top: -12%; z-index: 1; }
.streu .p6 { grid-column: 9 / span 3; margin-top: 2%; }

/* ── Kunden: die Liste mit dem wandernden Logo ── */
.kunden {
  background: #fff;
  padding: clamp(4rem, 9vw, 7rem) var(--rand);
}

.kunden__innen {
  display: grid;
  gap: 2rem;
  max-width: 74rem;
  margin: 0 auto;
  grid-template-columns: minmax(0, 1fr);
}

.kunden h2 {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.kunden ol { counter-reset: k; }

.kunden li {
  counter-increment: k;
  border-top: 1px solid var(--schwarz);
}

.kunden li:last-child { border-bottom: 1px solid var(--schwarz); }

.kunden .zeile {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 0.55rem 0.25rem;
  cursor: default;
}

.kunden .zeile::before {
  content: counter(k, decimal-leading-zero);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--gedimmt);
  font-family: ui-monospace, Menlo, monospace;
}

.kunden .name {
  font-family: var(--serif);
  font-size: clamp(1.375rem, 2.6vw, 2rem);
  line-height: 1.25;
}

/* Die Karte, die dem Zeiger folgt. Schwarz, weil die Logos des Projekts
   weiß angelegt sind — auf der Seite laufen sie auf Petrol. */
.logokarte {
  position: fixed;
  z-index: 20;
  width: 15rem;
  aspect-ratio: 5 / 3;
  display: grid;
  place-items: center;
  background: var(--schwarz);
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.9);
  transition: opacity 160ms ease, transform 160ms ease;
}

.logokarte.an { opacity: 1; transform: translate(-50%, -50%) scale(1); }
.logokarte img { max-width: 62%; max-height: 46%; object-fit: contain; }

/* ── Disziplinen ── */
.machen {
  background: var(--gold);
  padding: clamp(4rem, 9vw, 7rem) var(--rand);
}

.machen__innen { max-width: 74rem; margin: 0 auto; }

.machen h2 {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: clamp(2rem, 4vw, 3.5rem);
}

.machen ol { display: grid; gap: 0; }

.machen li {
  display: grid;
  gap: 0.75rem 3rem;
  padding: clamp(1.5rem, 3vw, 2.5rem) 0;
  border-top: 1px solid rgba(10, 10, 10, 0.55);
}

.machen li:last-child { border-bottom: 1px solid rgba(10, 10, 10, 0.55); }

.machen h3 {
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(2.25rem, 6vw, 4.5rem);
  line-height: 0.95;
  letter-spacing: -0.02em;
}

.machen p { max-width: 44ch; color: rgba(17, 17, 17, 0.78); }

/* ── Team ── */
.team {
  background: #fff;
  padding: clamp(4rem, 9vw, 7rem) var(--rand);
}

.team__innen { max-width: 74rem; margin: 0 auto; }

.team .ueber {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: clamp(2rem, 4vw, 3.5rem);
}

.team .label {
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.team h2 {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(2rem, 5vw, 3.5rem);
  letter-spacing: -0.01em;
}

.team ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.25rem, 3vw, 2.5rem);
}

.team img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  filter: grayscale(1);
  transition: filter 320ms ease;
}

.team li:hover img { filter: none; }

.team .name {
  margin-top: 0.7rem;
  font-family: var(--serif);
  font-size: clamp(1.125rem, 1.9vw, 1.5rem);
}

.team .rolle { font-size: 13px; color: var(--gedimmt); letter-spacing: 0.03em; }

.team .saetze {
  margin-top: clamp(3rem, 6vw, 5rem);
  display: grid;
  gap: 1.5rem 4rem;
}

.team .saetze p { max-width: 40ch; }
.team .saetze strong { font-weight: 500; }

/* ── Gründe ── */
.gruende {
  background: var(--schwarz);
  color: #fff;
  padding: clamp(4rem, 9vw, 7rem) var(--rand);
}

.gruende__innen { max-width: 74rem; margin: 0 auto; }

.gruende h2 {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.gruende ol { display: grid; gap: clamp(2rem, 4vw, 3rem); }

.gruende li {
  display: grid;
  grid-template-columns: 3.5rem minmax(0, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.gruende .nr {
  font-family: ui-monospace, Menlo, monospace;
  font-size: 13px;
  color: var(--gold);
  padding-top: 0.5em;
}

.gruende h3 {
  font-size: clamp(1.375rem, 2.6vw, 2rem);
  font-weight: 500;
  letter-spacing: -0.01em;
  margin-bottom: 0.5rem;
}

.gruende p { max-width: 52ch; color: rgba(255, 255, 255, 0.66); }

/* ── FAQ ── */
.faq {
  background: #fff;
  padding: clamp(4rem, 9vw, 7rem) var(--rand);
}

.faq__innen { max-width: 54rem; margin: 0 auto; }

.faq .label {
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.faq h2 {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.faq details { border-top: 1px solid var(--schwarz); }
.faq details:last-of-type { border-bottom: 1px solid var(--schwarz); }

.faq summary {
  padding: 1.1rem 2.5rem 1.1rem 0.25rem;
  cursor: pointer;
  list-style: none;
  position: relative;
  font-size: clamp(1.0625rem, 1.8vw, 1.375rem);
  font-weight: 500;
}

.faq summary::-webkit-details-marker { display: none; }

.faq summary::after {
  content: '+';
  position: absolute;
  right: 0.25rem;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--serif);
  font-size: 1.6em;
  font-weight: 400;
}

.faq details[open] summary::after { content: '−'; }

.faq details p {
  padding: 0 0.25rem 1.4rem;
  max-width: 60ch;
  color: var(--gedimmt);
}

/* ── Schluss ── */
.schluss {
  position: relative;
  overflow: hidden;
  background: linear-gradient(5deg, var(--gold) 0%, var(--gold) 30%, #fff 92%);
  padding: clamp(6rem, 14vw, 12rem) var(--rand) clamp(9rem, 20vw, 16rem);
  text-align: center;
}

.schluss .auftakt {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
}

.schluss h2 {
  font-size: clamp(2rem, 6vw, 4.5rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin: 0.25rem 0 2rem;
}

.schluss .aktion {
  display: inline-block;
  padding: 0.9em 2em;
  border: 1.5px solid var(--schwarz);
  border-radius: 999px;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: background 200ms ease, color 200ms ease;
}

.schluss .aktion:hover { background: var(--schwarz); color: #fff; }

.schluss .mail {
  display: block;
  margin-top: 1.25rem;
  font-size: 14px;
  color: var(--gedimmt);
}

.schluss .marke { font-size: clamp(7rem, 26vw, 28rem); }

/* ── Breite Bildschirme ── */
@media (min-width: 900px) {
  .kunden__innen { grid-template-columns: 16rem minmax(0, 1fr); }
  .machen li { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); align-items: end; }
  .team ul { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .team .saetze { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .faq summary { padding-right: 4rem; }
}

/* Auf schmalen Fenstern rückt die Streuung zusammen */
@media (max-width: 700px) {
  .streu { display: grid; gap: 1.5rem; grid-template-columns: minmax(0, 1fr); }
  .streu [class^='p'], .streu [class*=' p'] { grid-column: 1; margin-top: 0; }
  .buehne__foto { width: min(64vw, 20rem); }
  .buehne__claim { top: 12vh; }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  const ratio = (r) => r.replace(' / ', ' / ');

  return `
<header class="kopf">
  <span class="kopf__marke">
    <svg viewBox="0 0 120 40" preserveAspectRatio="none" aria-hidden="true">
      <ellipse cx="60" cy="20" rx="57" ry="17" fill="none" stroke="currentColor" stroke-width="1.6"/>
    </svg>
    ${i.marke}
  </span>
  <span class="kopf__gattung">${i.gattung}, Köln</span>
  <nav class="kopf__nav" aria-label="Navigation">
    <a href="#arbeiten"><span class="nr">1.</span>Arbeiten</a>
    <a href="#kunden"><span class="nr">2.</span>Kunden</a>
    <a href="#team"><span class="nr">3.</span>Team</a>
    <a href="#kontakt"><span class="nr">4.</span>Kontakt</a>
  </nav>
</header>

<section class="buehne" id="oben">
  <p class="buehne__claim">${i.claim}</p>

  <h1 class="marke marke--hinten" aria-hidden="true"><span>LeWerk</span></h1>

  <figure class="buehne__foto">
    <img src="${b('work/siemens.webp')}" alt="Frau mit regenbogenbunt gefärbtem Haar am Ufer eines Sees">
  </figure>

  <p class="marke marke--vorn" aria-hidden="true"><span>LeWerk</span></p>

  <p class="buehne__hinweis">Scroll ↓</p>
</section>

<section class="position">
  <p>${i.position.auftakt}</p>
  <p class="satz">${i.position.satz}</p>
  <p class="zeile">${i.position.zeile.join(' · ')}</p>
</section>

<section class="arbeiten" id="arbeiten">
  <h2>${i.arbeiten.label}</h2>
  <div class="streu">
    ${i.arbeiten.liste.map((a, n) => `
    <a class="p${n + 1}" href="#" onclick="return false">
      <figure>
        <img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" style="--r: ${ratio(a.ratio)}" loading="lazy">
        <figcaption>
          <span class="wer">${a.kunde}</span>
          <span class="was">${a.titel} · ${a.formate.length > 1 ? 'Formate' : 'Format'} ${a.formate.join(' ')}</span>
        </figcaption>
      </figure>
    </a>`).join('')}
  </div>
</section>

<section class="kunden" id="kunden">
  <div class="kunden__innen">
    <h2>${i.kunden.label}</h2>
    <ol data-logoliste>
      ${i.kunden.liste.map((k) => `
      <li>
        <span class="zeile" data-logo="${b(k.datei)}">
          <span class="name">${k.name}</span>
        </span>
      </li>`).join('')}
    </ol>
  </div>
  <div class="logokarte" aria-hidden="true"><img alt=""></div>
</section>

<section class="machen">
  <div class="machen__innen">
    <h2>${i.disziplinen.label}</h2>
    <ol>
      ${i.disziplinen.liste.map((d) => `
      <li>
        <h3>${d.titel}</h3>
        <p>${d.text}</p>
      </li>`).join('')}
    </ol>
  </div>
</section>

<section class="team" id="team">
  <div class="team__innen">
    <div class="ueber">
      <span class="label">${i.team.label}</span>
      <h2>${i.team.titel}</h2>
    </div>
    <ul>
      ${i.team.liste.map((m) => `
      <li>
        <img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy">
        <p class="name">${m.name}</p>
        <p class="rolle">${m.rolle.join(' · ')}</p>
      </li>`).join('')}
    </ul>
    <div class="saetze">
      ${i.team.bloecke.map((bl) => `
      <p><strong>${bl.auftakt}</strong> ${bl.text}</p>`).join('')}
    </div>
  </div>
</section>

<section class="gruende">
  <div class="gruende__innen">
    <h2>${i.gruende.titel}</h2>
    <ol>
      ${i.gruende.liste.map((g) => `
      <li>
        <span class="nr">${g.nr}</span>
        <div>
          <h3>${g.titel}</h3>
          <p>${g.text}</p>
        </div>
      </li>`).join('')}
    </ol>
  </div>
</section>

<section class="faq">
  <div class="faq__innen">
    <p class="label">${i.faq.label}</p>
    <h2>${i.faq.titel}</h2>
    ${i.faq.liste.map((f) => `
    <details>
      <summary>${f.f}</summary>
      <p>${f.a}</p>
    </details>`).join('')}
  </div>
</section>

<section class="schluss" id="kontakt">
  <p class="auftakt">${i.schluss.auftakt}</p>
  <h2>${i.schluss.titel}</h2>
  <a class="aktion" href="mailto:${i.schluss.mail}">${i.schluss.knopf} →</a>
  <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
  <p class="marke" aria-hidden="true"><span>LeWerk</span></p>
</section>

<script>
(() => {
  // Die Wortmarke neigt sich zur Maus — die Spielerei aus dem zweiten
  // Referenzvideo. Nachlauf über einen Tiefpass, damit sie schwingt statt
  // zu springen. Bei reduzierter Bewegung bleibt sie still.
  const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const marken = document.querySelectorAll('.buehne .marke');
  if (!ruhig && marken.length) {
    let ziel = 0, ist = 0, laeuft = false;
    const buehne = document.querySelector('.buehne');
    buehne.addEventListener('pointermove', (e) => {
      const r = buehne.getBoundingClientRect();
      ziel = ((e.clientX - r.left) / r.width - 0.5) * 14;
      if (!laeuft) { laeuft = true; requestAnimationFrame(tick); }
    });
    buehne.addEventListener('pointerleave', () => { ziel = 0; });
    const tick = () => {
      ist += (ziel - ist) * 0.07;
      const t = 'translateX(-50%) skewX(' + ist.toFixed(2) + 'deg)';
      marken.forEach((m) => { m.style.transform = t; });
      if (Math.abs(ziel - ist) > 0.01 || Math.abs(ziel) > 0.01) requestAnimationFrame(tick);
      else laeuft = false;
    };
  }

  // Kundenliste: Das Logo folgt dem Zeiger — das erste Referenzvideo.
  const karte = document.querySelector('.logokarte');
  const kbild = karte.querySelector('img');
  document.querySelectorAll('[data-logo]').forEach((z) => {
    z.addEventListener('pointerenter', () => {
      kbild.src = z.dataset.logo;
      karte.classList.add('an');
    });
    z.addEventListener('pointerleave', () => karte.classList.remove('an'));
    z.addEventListener('pointermove', (e) => {
      karte.style.left = e.clientX + 'px';
      karte.style.top = e.clientY + 'px';
    });
  });
})();
</script>
`;
};

export default {
  name: 'Goldrand',
  idee: 'Nach der Better-Half-Referenz: Gold, riesige gedehnte Serife, wanderndes Kundenlogo, gestreute Stills.',
  stil,
  koerper,
};
