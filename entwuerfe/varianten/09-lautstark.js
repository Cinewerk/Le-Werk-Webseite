/**
 * Entwurf 09 — Lautstark.
 *
 * Schule: die kinetisch-typografischen Awwwards-Seiten (Antinomy-artige
 * Studios): Schrift ist die einzige Textur. Laufbänder zwischen den
 * Abschnitten, Konturschrift gegen gefüllte, alles versal, eine
 * Säureakzentfarbe auf Schwarz. Keine Kästen, keine Rundungen — Größe
 * ist das Layout.
 */

const stil = `
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('../src/styles/fonts/poppins-800-normal-latin.woff2') format('woff2');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('../src/styles/fonts/poppins-400-normal-latin.woff2') format('woff2');
}

:root {
  --nacht: #0d0d0f;
  --saeure: #ccff00;
  --weiss: #f4f4f0;
  --gedimmt: rgba(244, 244, 240, 0.5);
  --grotesk: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
  --rand: clamp(1rem, 3vw, 2.5rem);
}

body {
  background: var(--nacht);
  color: var(--weiss);
  font: 400 16px/1.6 var(--grotesk);
  overflow-x: clip;
}

::selection { background: var(--saeure); color: var(--nacht); }

/* ── Kopf ── */
.kopf {
  position: fixed;
  inset: 0 0 auto;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding: 1.1rem var(--rand);
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  mix-blend-mode: difference;
}

.kopf a { text-decoration: none; }
.kopf a:hover { color: var(--saeure); }
.kopf nav { display: flex; gap: 1.5rem; }

/* ── Auftakt: der Claim als Wand ── */
.wand {
  min-height: 100svh;
  display: grid;
  align-content: center;
  padding: 6rem var(--rand) 4rem;
}

.wand h1 {
  font-size: clamp(2.5rem, 9.4vw, 9rem);
  font-weight: 800;
  line-height: 0.94;
  letter-spacing: -0.045em;
  text-transform: uppercase;
}

.wand h1 .kontur {
  color: transparent;
  -webkit-text-stroke: 2px var(--weiss);
}

.wand h1 .acid { color: var(--saeure); }

.wand .unter {
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem 2rem;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gedimmt);
}

/* ── Laufband: der Taktgeber zwischen allen Abschnitten ── */
.lauf {
  border-block: 1px solid rgba(244, 244, 240, 0.18);
  overflow: hidden;
  padding: 0.7rem 0;
  white-space: nowrap;
}

.lauf__spur { display: inline-flex; gap: 2.5rem; padding-right: 2.5rem; animation: ziehen var(--takt, 22s) linear infinite; }

.lauf span {
  font-weight: 800;
  font-size: clamp(1.5rem, 3.4vw, 3rem);
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.lauf span:nth-child(even) { color: transparent; -webkit-text-stroke: 1.5px var(--weiss); }
.lauf--acid { background: var(--saeure); border: 0; }
.lauf--acid span { color: var(--nacht); }
.lauf--acid span:nth-child(even) { color: transparent; -webkit-text-stroke: 1.5px var(--nacht); }

@keyframes ziehen { to { transform: translateX(-50%); } }

/* ── Arbeiten: volle Breite, ein Projekt = eine Zeile + Bild ── */
.werke { padding: clamp(3rem, 8vw, 6rem) 0; }

.werk { position: relative; padding: 0 var(--rand); margin-bottom: clamp(3rem, 7vw, 5.5rem); }

.werk .zeile {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.werk h3 {
  font-size: clamp(2rem, 6.4vw, 6rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  line-height: 0.95;
}

.werk:nth-child(even) h3 { color: transparent; -webkit-text-stroke: 2px var(--weiss); }
.werk:hover h3 { color: var(--saeure); -webkit-text-stroke: 0; }

.werk .meta { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gedimmt); text-align: right; flex: none; }

.werk img {
  width: min(100%, 56rem);
  aspect-ratio: 16 / 9;
  object-fit: cover;
  margin-left: auto;
  display: block;
  filter: grayscale(0.9) contrast(1.06);
  transition: filter 380ms;
}

.werk:nth-child(even) img { margin-left: 0; }
.werk:hover img { filter: none; }

/* ── Disziplinen: drei Wörter, riesig ── */
.machen { padding: clamp(3rem, 8vw, 6rem) var(--rand); }

.machen details { border-bottom: 1px solid rgba(244, 244, 240, 0.18); }
.machen details:first-of-type { border-top: 1px solid rgba(244, 244, 240, 0.18); }

.machen summary {
  list-style: none;
  cursor: pointer;
  padding: 1.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.machen summary::-webkit-details-marker { display: none; }

.machen summary h3 {
  font-size: clamp(2.25rem, 8vw, 7rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  line-height: 0.95;
  color: transparent;
  -webkit-text-stroke: 2px var(--weiss);
}

.machen details[open] summary h3, .machen summary:hover h3 { color: var(--saeure); -webkit-text-stroke: 0; }
.machen summary .plus { font-weight: 800; font-size: 2rem; color: var(--gedimmt); }
.machen details p { max-width: 56ch; padding: 0 0 1.75rem; color: rgba(244, 244, 240, 0.75); }

/* ── Team: Namen als Plakat ── */
.crew { padding: clamp(3rem, 8vw, 6rem) var(--rand); }

.crew .titel { font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gedimmt); margin-bottom: 2rem; }

.crew ul { display: grid; gap: 0.4rem; }

.crew .name {
  font-size: clamp(1.75rem, 5.4vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  line-height: 1;
  position: relative;
  width: fit-content;
  cursor: default;
}

.crew .name:hover { color: var(--saeure); }
.crew .rolle { font-size: 12.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gedimmt); margin: 0.15rem 0 0.9rem; }

/* Porträt folgt dem Zeiger über der Namensliste */
.portraet {
  position: fixed;
  z-index: 30;
  width: clamp(9rem, 16vw, 13rem);
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -50%) rotate(-3deg);
  transition: opacity 140ms linear;
}

.portraet.an { opacity: 1; }
.portraet img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; }

.crew .saetze { margin-top: clamp(2rem, 5vw, 3.5rem); display: grid; gap: 1.25rem 4rem; }
.crew .saetze p { max-width: 46ch; color: rgba(244, 244, 240, 0.75); }
.crew .saetze b { color: var(--weiss); }

/* ── Gründe: Konturziffern ── */
.gruende { padding: clamp(3rem, 8vw, 6rem) var(--rand); }

.gruende li { display: grid; gap: 0.5rem; padding: clamp(1.5rem, 3.5vw, 2.5rem) 0; border-bottom: 1px solid rgba(244, 244, 240, 0.18); }
.gruende li:first-child { border-top: 1px solid rgba(244, 244, 240, 0.18); }

.gruende .nr {
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 800;
  line-height: 0.8;
  color: transparent;
  -webkit-text-stroke: 2px var(--saeure);
}

.gruende h3 { font-size: clamp(1.5rem, 3.2vw, 2.5rem); font-weight: 800; letter-spacing: -0.02em; text-transform: uppercase; }
.gruende p { max-width: 56ch; color: rgba(244, 244, 240, 0.72); }

/* ── FAQ ── */
.faq { padding: clamp(3rem, 8vw, 6rem) var(--rand); max-width: 58rem; }
.faq .titel { font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gedimmt); margin-bottom: 1.5rem; }
.faq details { border-bottom: 1px solid rgba(244, 244, 240, 0.18); }
.faq summary { list-style: none; cursor: pointer; padding: 1.1rem 0; font-weight: 800; text-transform: uppercase; letter-spacing: -0.01em; font-size: clamp(1rem, 1.9vw, 1.375rem); }
.faq summary::-webkit-details-marker { display: none; }
.faq summary:hover { color: var(--saeure); }
.faq details p { padding-bottom: 1.4rem; max-width: 60ch; color: rgba(244, 244, 240, 0.72); }

/* ── Schluss ── */
.schluss { padding: clamp(4rem, 10vw, 8rem) var(--rand) clamp(2rem, 5vw, 3rem); }

.schluss a.riese {
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  font-size: clamp(3rem, 13.4vw, 13rem);
  line-height: 0.92;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 2px var(--weiss);
}

.schluss a.riese:hover { color: var(--saeure); -webkit-text-stroke: 0; }

.schluss .fuss {
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 2rem;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gedimmt);
}

.schluss .fuss a { color: var(--weiss); }

@media (min-width: 860px) {
  .crew .saetze { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .gruende li { grid-template-columns: 12rem minmax(0, 1fr); align-items: start; }
  .gruende .nr { grid-row: 1 / span 2; }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  const band = (woerter, klasse = '', takt = '22s') => `
  <div class="lauf ${klasse}" aria-hidden="true">
    <div class="lauf__spur" style="--takt: ${takt}">
      ${[...woerter, ...woerter].map((w) => `<span>${w}</span>`).join('')}
    </div>
  </div>`;
  return `
<header class="kopf">
  <a href="#oben">${i.marke}</a>
  <nav>
    <a href="#arbeiten">Work</a>
    <a href="#team">Team</a>
    <a href="#kontakt">Kontakt</a>
  </nav>
</header>

<section class="wand" id="oben">
  <h1>${i.marke} is a <span class="kontur">visual content studio</span> crafting brand content <span class="acid">worth watching.</span></h1>
  <p class="unter">
    <span>${i.position.auftakt}</span>
    <span>${i.gattung} — Köln</span>
    <span>${i.position.zeile.slice(0, 3).join(' / ')}</span>
  </p>
</section>

${band([i.arbeiten.label, '✕', i.arbeiten.label, '✕'], 'lauf--acid', '18s')}

<section class="werke" id="arbeiten">
  ${i.arbeiten.liste.map((a) => `
  <div class="werk">
    <div class="zeile">
      <h3>${a.kunde}</h3>
      <span class="meta">${a.titel}<br>${a.formate.length > 1 ? 'Formate' : 'Format'} ${a.formate.join(' · ')}</span>
    </div>
    <img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" loading="lazy">
  </div>`).join('')}
</section>

${band(i.kunden.liste.map((k) => k.name), '', '34s')}

<section class="machen">
  ${i.disziplinen.liste.map((d) => `
  <details>
    <summary><h3>${d.titel}</h3><span class="plus">+</span></summary>
    <p>${d.text}</p>
  </details>`).join('')}
</section>

${band([i.team.label, '✕', i.team.titel, '✕'], 'lauf--acid', '20s')}

<section class="crew" id="team">
  <p class="titel">${i.team.titel}</p>
  <ul>
    ${i.team.liste.map((m) => `
    <li>
      <p class="name" data-bild="${b(m.bild)}">${m.name}</p>
      <p class="rolle">${m.rolle.join(' / ')}</p>
    </li>`).join('')}
  </ul>
  <div class="saetze">
    ${i.team.bloecke.map((x) => `<p><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
  </div>
</section>
<figure class="portraet" aria-hidden="true"><img alt=""></figure>

<section class="gruende">
  <ol>
    ${i.gruende.liste.map((g) => `
    <li><span class="nr">${g.nr}</span><h3>${g.titel}</h3><p>${g.text}</p></li>`).join('')}
  </ol>
</section>

<section class="faq">
  <p class="titel">${i.faq.label} — ${i.faq.titel}</p>
  ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
</section>

${band(['Erzähl uns von deinem Projekt', '→'], '', '16s')}

<section class="schluss" id="kontakt">
  <a class="riese" href="mailto:${i.schluss.mail}">Let's&nbsp;talk</a>
  <p class="fuss">
    <span>${i.schluss.auftakt} ${i.schluss.titel} — ${i.schluss.knopf}</span>
    <a href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
  </p>
</section>

<script>
(() => {
  const karte = document.querySelector('.portraet');
  const bild = karte.querySelector('img');
  document.querySelectorAll('[data-bild]').forEach((n) => {
    n.addEventListener('pointerenter', () => { bild.src = n.dataset.bild; karte.classList.add('an'); });
    n.addEventListener('pointerleave', () => karte.classList.remove('an'));
    n.addEventListener('pointermove', (e) => {
      karte.style.left = e.clientX + 'px';
      karte.style.top = e.clientY + 'px';
    });
  });
})();
</script>
`;
};

export default {
  name: 'Lautstark',
  idee: 'Typografie als Textur: Laufbänder, Kontur gegen Füllung, Säuregelb auf Schwarz — Größe ist das Layout.',
  stil,
  koerper,
};
