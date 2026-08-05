/**
 * Entwurf 15 — Haus.
 *
 * Nach Simons drittem Referenzbild: die Karte in Ecru und Tintenblau —
 * eine Zeile aus Roman und Kursive gemischt, ein Schwarzweißfoto, und
 * quer darüber ein riesiges Schreibschrift-Wort. Kleine, gedrehte
 * Marginalien an den Rändern. Animationen: Das Schriftwort gleitet beim
 * Laden über das Foto, die Marginalien wandern beim Scrollen mit.
 */

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
  --ecru: #ebe7da;
  --tinte: #2e3f92;
  --grau: #6f6d64;
  --serif: 'Bodoni Moda', Georgia, serif;
  --schreib: 'Snell Roundhand', 'Savoye LET', 'Brush Script MT', cursive;
  --grotesk: 'Helvetica Neue', Arial, sans-serif;
  --rand: clamp(1.25rem, 4vw, 3.5rem);
}

body {
  background: var(--ecru);
  color: var(--tinte);
  font: 400 15.5px/1.7 var(--grotesk);
}

/* ── Marginalien: klein, gedreht, an den Kanten ── */
.marginal {
  position: fixed;
  z-index: 5;
  font-size: 10px;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--tinte);
  writing-mode: vertical-rl;
}

.marginal--links { left: 0.9rem; top: 50%; transform: translateY(-50%) rotate(180deg); }
.marginal--rechts { right: 0.9rem; top: 50%; transform: translateY(-50%); }

/* ── Kopf ── */
.kopf {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem var(--rand);
  font-size: 11.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.kopf a { text-decoration: none; }
.kopf a:hover { font-style: italic; }

/* ── Auftakt: die Karte ── */
.karte {
  max-width: 40rem;
  margin: 0 auto;
  padding: clamp(1.5rem, 5vh, 3.5rem) var(--rand) clamp(4rem, 9vh, 6.5rem);
  text-align: center;
}

.karte .vorstellen {
  font-family: var(--serif);
  font-size: clamp(1.5rem, 3.4vw, 2.5rem);
  line-height: 1.2;
  text-align: left;
}

.karte .vorstellen em { font-style: italic; }
.karte .vorstellen .rechts { display: block; text-align: right; }

.karte figure { position: relative; margin: 1.25rem auto 0; width: min(100%, 22rem); }
.karte img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; filter: grayscale(1) contrast(1.05); }

/* Das Schreibschrift-Wort quer über dem Foto */
.karte .zug {
  position: absolute;
  left: -8%;
  bottom: 4%;
  width: 116%;
  font-family: var(--schreib);
  font-size: clamp(3.5rem, 11vw, 7.5rem);
  line-height: 1;
  color: var(--tinte);
  text-align: center;
  rotate: -9deg;
  pointer-events: none;
  opacity: 0;
  transform: translateX(-6%);
  animation: gleiten 1100ms cubic-bezier(0.22, 0.61, 0.36, 1) 400ms forwards;
}

@keyframes gleiten { to { opacity: 1; transform: none; } }

.karte .davor {
  position: absolute;
  left: -6%;
  bottom: 26%;
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(1.75rem, 4.4vw, 3rem);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  pointer-events: none;
}

.karte .satz { margin-top: 2rem; font-size: 14px; color: var(--grau); max-width: 40ch; margin-inline: auto; }

/* ── Abschnitte: schmale Mittelspalte, Serifentitel ── */
.teil { max-width: 46rem; margin: 0 auto; padding: clamp(2.5rem, 6vh, 4.5rem) var(--rand); }

.teil > h2 {
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  text-align: center;
  margin-bottom: clamp(1.5rem, 4vh, 2.5rem);
}

.teil > h2 em { font-style: italic; }
.teil > h2 .schreib { font-family: var(--schreib); font-size: 1.35em; }

/* Arbeiten: Schwarzweiß mit Schriftzug beim Überfahren */
.galerie { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(1rem, 2.6vw, 1.75rem); }

.blattfoto { position: relative; }
.blattfoto img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; filter: grayscale(1); transition: filter 400ms; }
.blattfoto:hover img { filter: none; }

.blattfoto .zug2 {
  position: absolute;
  inset: auto -4% 6%;
  font-family: var(--schreib);
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  color: var(--ecru);
  text-shadow: 0 1px 14px rgba(46, 63, 146, 0.6);
  text-align: center;
  rotate: -7deg;
  pointer-events: none;
}

.blattfoto figcaption { padding-top: 0.5rem; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; text-align: center; color: var(--grau); }

/* Kunden */
.kunden p { text-align: center; font-family: var(--serif); font-size: clamp(1.125rem, 2.2vw, 1.625rem); line-height: 1.9; }
.kunden p i { font-family: var(--schreib); font-style: normal; color: var(--tinte); padding: 0 0.35em; }

/* Disziplinen */
.faecher { display: grid; gap: 1.5rem; }
.fach { border-top: 1px solid rgba(46, 63, 146, 0.4); padding-top: 1.1rem; }
.fach h3 { font-family: var(--serif); font-size: clamp(1.25rem, 2.4vw, 1.75rem); margin-bottom: 0.4rem; }
.fach h3 .schreib { font-family: var(--schreib); font-size: 1.25em; margin-right: 0.15em; }
.fach p { font-size: 14px; color: var(--grau); }

/* Team */
.leute { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(1rem, 2.6vw, 1.75rem); }
.leute img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; filter: grayscale(1); transition: filter 350ms; }
.leute figure:hover img { filter: none; }
.leute figcaption { padding-top: 0.5rem; text-align: center; }
.leute .name { font-family: var(--serif); font-size: 16px; }
.leute .rolle { font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--grau); }

.teil .saetze { margin-top: 1.75rem; display: grid; gap: 0.9rem; font-size: 14px; color: var(--grau); text-align: center; }
.teil .saetze b { font-family: var(--serif); font-weight: 500; color: var(--tinte); }

/* Gründe */
.gruende { display: grid; gap: 1.5rem; text-align: center; }
.grund .nr { font-family: var(--schreib); font-size: clamp(1.75rem, 3.4vw, 2.5rem); }
.grund h3 { font-family: var(--serif); font-size: clamp(1.25rem, 2.4vw, 1.75rem); margin: 0.2rem 0 0.4rem; }
.grund p { font-size: 14px; color: var(--grau); max-width: 52ch; margin: 0 auto; }

/* FAQ */
.faq details { border-bottom: 1px solid rgba(46, 63, 146, 0.4); }
.faq details:first-of-type { border-top: 1px solid rgba(46, 63, 146, 0.4); }
.faq summary { list-style: none; cursor: pointer; padding: 0.95rem 0; font-family: var(--serif); font-size: clamp(1rem, 1.9vw, 1.3125rem); }
.faq summary::-webkit-details-marker { display: none; }
.faq details[open] summary { font-style: italic; }
.faq details p { padding-bottom: 1.1rem; font-size: 14px; color: var(--grau); }

/* Schluss */
.schluss { text-align: center; padding: clamp(3rem, 8vh, 5.5rem) var(--rand) clamp(5rem, 11vh, 8rem); }
.schluss .zeile { font-family: var(--serif); font-size: clamp(1.5rem, 3.4vw, 2.5rem); line-height: 1.25; }
.schluss .zeile em { font-style: italic; }
.schluss .gross { font-family: var(--schreib); font-size: clamp(3rem, 9vw, 6.5rem); line-height: 1.1; rotate: -4deg; display: block; margin: 0.5rem 0 1.5rem; }
.schluss a.knopf { display: inline-block; border: 1px solid var(--tinte); padding: 0.85em 2.2em; text-decoration: none; font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase; }
.schluss a.knopf:hover { background: var(--tinte); color: var(--ecru); }
.schluss .mail { display: block; margin-top: 1.1rem; font-family: var(--serif); font-style: italic; font-size: 15px; }

@media (min-width: 820px) {
  .galerie { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .leute { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  return `
<span class="marginal marginal--links" aria-hidden="true">Wir sind — ${i.gattung}</span>
<span class="marginal marginal--rechts" aria-hidden="true">Wir sind — Köln</span>

<header class="kopf">
  <a href="#oben">${i.marke}</a>
  <a href="#kontakt">Kontakt</a>
</header>

<section class="karte" id="oben">
  <p class="vorstellen">Dürfen wir <em>vorstellen</em><span class="rechts">— unser Studio.</span></p>
  <figure>
    <img src="${b('team/tom-beckers.jpg')}" alt="Porträt aus dem Studio">
    <span class="davor" aria-hidden="true">Le</span>
    <span class="zug" aria-hidden="true">Werk</span>
  </figure>
  <p class="satz">${i.claim} — ${i.position.auftakt} ${i.position.satz}</p>
</section>

<section class="teil" id="arbeiten">
  <h2><em>${i.arbeiten.label}</em> — <span class="schreib">sechs</span> Produktionen</h2>
  <div class="galerie">
    ${i.arbeiten.liste.map((a) => `
    <figure class="blattfoto">
      <img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" loading="lazy">
      <span class="zug2" aria-hidden="true">${a.kunde.split(' ')[0].split('×')[0]}</span>
      <figcaption>${a.kunde} · ${a.titel} · ${a.formate.join(' · ')}</figcaption>
    </figure>`).join('')}
  </div>
</section>

<section class="teil kunden" id="kunden">
  <h2>${i.kunden.label}</h2>
  <p>${i.kunden.liste.map((k) => k.name).join('<i>&amp;</i>')}</p>
</section>

<section class="teil">
  <h2><span class="schreib">Was</span> wir machen</h2>
  <div class="faecher">
    ${i.disziplinen.liste.map((d) => `
    <div class="fach"><h3><span class="schreib">${d.titel.charAt(0)}</span>${d.titel.slice(1)}</h3><p>${d.text}</p></div>`).join('')}
  </div>
</section>

<section class="teil" id="team">
  <h2>${i.team.label} — <em>${i.team.titel}</em></h2>
  <div class="leute">
    ${i.team.liste.map((m) => `
    <figure>
      <img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy">
      <figcaption><p class="name">${m.name}</p><p class="rolle">${m.rolle.join(' · ')}</p></figcaption>
    </figure>`).join('')}
  </div>
  <div class="saetze">
    ${i.team.bloecke.map((x) => `<p><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
  </div>
</section>

<section class="teil">
  <h2><em>${i.gruende.titel}</em></h2>
  <div class="gruende">
    ${i.gruende.liste.map((g) => `
    <div class="grund"><span class="nr">${['eins', 'zwei', 'drei'][Number(g.nr) - 1]}</span><h3>${g.titel}</h3><p>${g.text}</p></div>`).join('')}
  </div>
</section>

<section class="teil faq">
  <h2>${i.faq.label} — <em>${i.faq.titel.toLowerCase()}</em></h2>
  ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
</section>

<section class="schluss" id="kontakt">
  <p class="zeile">${i.schluss.auftakt} <em>von deinem</em></p>
  <span class="gross">Projekt</span>
  <a class="knopf" href="mailto:${i.schluss.mail}">${i.schluss.knopf}</a>
  <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
</section>
`;
};

export default {
  name: 'Haus',
  idee: 'Ecru und Tintenblau: Roman-Kursiv-Zeile, Schwarzweißfoto, ein Schreibschrift-Wort gleitet quer darüber.',
  stil,
  koerper,
};
