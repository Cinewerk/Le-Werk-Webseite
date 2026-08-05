/**
 * Entwurf 10 — Pinnwand.
 *
 * Schule: die Collage-Seiten der Awwwards-Jahrgänge — die Ästhetik der
 * Moodboards und Ateliers: Fotos wie mit Klebeband an die Wand geheftet,
 * gedreht und überlappend, dazu getippte Etiketten und ein handschriftlich
 * wirkender Marker. Nichts sitzt gerade, alles wirkt angefasst — das
 * Gegenteil des Rasters aus Entwurf 06.
 */

const stil = `
@font-face {
  font-family: 'Bodoni Moda';
  font-style: italic;
  font-weight: 400 500;
  font-display: swap;
  src: url('../src/styles/fonts/bodoni-moda-opsz11-italic-latin.woff2') format('woff2');
}

:root {
  --kork: #efe9dd;
  --karton: #fbf8f2;
  --tinte: #26221c;
  --stift: #2b4ea2;
  --band: rgba(255, 236, 160, 0.85);
  --schreib: 'Bodoni Moda', Georgia, serif;
  --tipp: ui-monospace, 'Courier New', Courier, monospace;
  --grotesk: 'Helvetica Neue', Arial, sans-serif;
  --rand: clamp(1rem, 3.5vw, 3rem);
}

body {
  background:
    radial-gradient(circle at 18% 12%, rgba(0,0,0,0.045), transparent 46%),
    radial-gradient(circle at 84% 64%, rgba(0,0,0,0.05), transparent 42%),
    var(--kork);
  color: var(--tinte);
  font: 400 15.5px/1.6 var(--tipp);
}

/* ── Kopf: Etikett oben links, Navigation als Zettel ── */
.kopf {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
  padding: var(--rand);
}

.etikett {
  background: var(--karton);
  border: 1px solid #d8d1c2;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.09);
  padding: 0.8rem 1.2rem;
  rotate: -1.5deg;
}

.etikett b { display: block; font-size: 19px; letter-spacing: 0.06em; text-transform: uppercase; }
.etikett i { font-family: var(--schreib); font-style: italic; color: var(--stift); }

.kopf nav { display: flex; gap: 0.75rem; flex-wrap: wrap; }

.kopf nav a {
  background: var(--karton);
  border: 1px solid #d8d1c2;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.08);
  padding: 0.45rem 0.9rem;
  text-decoration: none;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  rotate: var(--kipp, 1deg);
}

.kopf nav a:nth-child(2) { --kipp: -1.4deg; }
.kopf nav a:nth-child(3) { --kipp: 0.8deg; }
.kopf nav a:hover { background: var(--band); }

/* ── Klebebandstreifen als Bauteil ── */
.tape {
  position: absolute;
  top: -0.7rem;
  left: 50%;
  width: 5.5rem;
  height: 1.5rem;
  background: var(--band);
  transform: translateX(-50%) rotate(-2deg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  opacity: 0.9;
}

/* ── Auftakt: großer Marker-Satz + gepinntes Foto ── */
.auftakt {
  position: relative;
  padding: clamp(2rem, 6vw, 5rem) var(--rand) clamp(4rem, 9vw, 7rem);
  display: grid;
  gap: 2.5rem;
}

.auftakt h1 {
  max-width: 16ch;
  font-family: var(--schreib);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(2.25rem, 6.4vw, 5.5rem);
  line-height: 1.05;
  letter-spacing: -0.01em;
}

.auftakt h1 mark {
  background: linear-gradient(transparent 55%, var(--band) 55%, var(--band) 92%, transparent 92%);
  color: inherit;
}

.polaroid {
  position: relative;
  width: clamp(15rem, 30vw, 23rem);
  background: var(--karton);
  padding: 0.8rem 0.8rem 2.6rem;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.16);
  rotate: 2.4deg;
  justify-self: end;
}

.polaroid img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; }
.polaroid figcaption { position: absolute; bottom: 0.7rem; left: 0; right: 0; text-align: center; font-family: var(--schreib); font-style: italic; font-size: 15px; color: var(--stift); }

.auftakt .zettel {
  max-width: 34ch;
  background: var(--karton);
  border: 1px solid #d8d1c2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.2rem 1.4rem;
  rotate: -1.2deg;
  position: relative;
}

.auftakt .zettel p + p { margin-top: 0.6rem; font-size: 13px; color: #6c6558; }

/* ── Arbeiten: die Wand ── */
.wand { padding: 0 var(--rand) clamp(4rem, 9vw, 7rem); }

.wand h2 {
  font-family: var(--schreib);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(1.75rem, 3.6vw, 3rem);
  margin-bottom: clamp(2rem, 4vw, 3rem);
  rotate: -1deg;
  width: fit-content;
}

.wand h2::after { content: ' ↓'; color: var(--stift); }

.haufen {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  max-width: 78rem;
  margin: 0 auto;
}

.stueck {
  position: relative;
  background: var(--karton);
  padding: 0.6rem 0.6rem 2.2rem;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
  rotate: var(--kipp, -2deg);
  transition: rotate 240ms cubic-bezier(0.34, 1.56, 0.64, 1), scale 240ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.stueck:hover { rotate: 0deg; scale: 1.03; z-index: 5; }
.stueck img { width: 100%; aspect-ratio: var(--r, 4 / 5); object-fit: cover; }

.stueck figcaption {
  position: absolute;
  bottom: 0.45rem;
  left: 0.6rem;
  right: 0.6rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 11.5px;
}

.stueck .wer { text-transform: uppercase; letter-spacing: 0.05em; }
.stueck .fmt { color: var(--stift); }

.stueck.s1 { grid-column: 1 / span 4; --kipp: -2.6deg; }
.stueck.s2 { grid-column: 6 / span 3; --kipp: 1.8deg; margin-top: 9%; }
.stueck.s3 { grid-column: 9 / span 4; --kipp: -1.2deg; margin-top: -3%; }
.stueck.s4 { grid-column: 2 / span 3; --kipp: 2.8deg; margin-top: -6%; }
.stueck.s5 { grid-column: 5 / span 4; --kipp: -1.8deg; margin-top: 6%; z-index: 1; }
.stueck.s6 { grid-column: 9 / span 3; --kipp: 2.2deg; margin-top: 4%; }

/* ── Kunden: getippte Liste auf einem Blatt ── */
.blatt {
  max-width: 44rem;
  margin: 0 auto clamp(4rem, 9vw, 7rem);
  background: var(--karton);
  border: 1px solid #d8d1c2;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.12);
  padding: clamp(1.75rem, 4vw, 3rem);
  position: relative;
  rotate: 0.8deg;
}

.blatt h2 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.14em; margin-bottom: 1.25rem; }
.blatt h2::before { content: '— '; color: var(--stift); }
.blatt ul { columns: 2; gap: 2.5rem; }
.blatt li { padding: 0.25rem 0; font-size: 15px; break-inside: avoid; }
.blatt li::before { content: '☒ '; color: var(--stift); }

/* ── Disziplinen: drei Karteikarten ── */
.karten { padding: 0 var(--rand) clamp(4rem, 9vw, 7rem); display: grid; gap: clamp(1.5rem, 3vw, 2.5rem); max-width: 78rem; margin: 0 auto; }

.karteikarte {
  position: relative;
  background: repeating-linear-gradient(var(--karton) 0 1.9em, #e6dfd0 1.9em calc(1.9em + 1px));
  border: 1px solid #d8d1c2;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.11);
  padding: 1.5rem 1.6rem;
  rotate: var(--kipp, -1.4deg);
}

.karteikarte:nth-child(2) { --kipp: 1.2deg; }
.karteikarte:nth-child(3) { --kipp: -0.6deg; }

.karteikarte h3 {
  font-family: var(--schreib);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(1.5rem, 2.8vw, 2.25rem);
  color: var(--stift);
  margin-bottom: 0.7rem;
}

.karteikarte p { line-height: 1.9em; font-size: 14px; }

/* ── Team: Passfotos mit Büroklammer-Gefühl ── */
.leute { padding: 0 var(--rand) clamp(4rem, 9vw, 7rem); max-width: 78rem; margin: 0 auto; }
.leute h2 { font-family: var(--schreib); font-style: italic; font-weight: 400; font-size: clamp(1.75rem, 3.6vw, 3rem); margin-bottom: 2rem; rotate: -0.8deg; width: fit-content; }

.leute ul { display: flex; flex-wrap: wrap; gap: clamp(1.5rem, 3vw, 2.5rem); }

.leute li {
  position: relative;
  width: clamp(10rem, 18vw, 13rem);
  background: var(--karton);
  padding: 0.6rem 0.6rem 0.9rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.13);
  rotate: var(--kipp, -2deg);
}

.leute li:nth-child(even) { --kipp: 1.8deg; margin-top: 1.25rem; }
.leute img { width: 100%; aspect-ratio: 1; object-fit: cover; filter: grayscale(0.35) sepia(0.12); }
.leute .name { margin-top: 0.6rem; font-size: 13.5px; text-transform: uppercase; letter-spacing: 0.04em; }
.leute .rolle { font-family: var(--schreib); font-style: italic; font-size: 14px; color: var(--stift); }

.leute .notizen { margin-top: 2rem; display: grid; gap: 1rem; max-width: 62ch; }
.leute .notizen b { color: var(--stift); font-weight: 400; }

/* ── Gründe: drei Haftnotizen ── */
.notizzettel { padding: 0 var(--rand) clamp(4rem, 9vw, 7rem); display: grid; gap: clamp(1.5rem, 3vw, 2.5rem); max-width: 78rem; margin: 0 auto; }

.haft {
  background: #fff9c9;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.13);
  padding: 1.5rem 1.6rem;
  rotate: var(--kipp, -1.8deg);
  font-size: 14px;
}

.haft:nth-child(2) { --kipp: 1.5deg; background: #d9f2d0; }
.haft:nth-child(3) { --kipp: -0.7deg; background: #fadfd2; }

.haft .nr { font-size: 12px; letter-spacing: 0.14em; }
.haft h3 { font-family: var(--schreib); font-style: italic; font-weight: 500; font-size: clamp(1.375rem, 2.4vw, 1.875rem); margin: 0.3rem 0 0.6rem; }

/* ── FAQ: Zettelstapel ── */
.fragen { padding: 0 var(--rand) clamp(4rem, 9vw, 7rem); max-width: 52rem; margin: 0 auto; }
.fragen h2 { font-family: var(--schreib); font-style: italic; font-weight: 400; font-size: clamp(1.75rem, 3.6vw, 3rem); margin-bottom: 1.75rem; rotate: -1deg; width: fit-content; }

.fragen details {
  position: relative;
  background: var(--karton);
  border: 1px solid #d8d1c2;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.09);
  margin-bottom: 0.9rem;
  rotate: var(--kipp, 0.6deg);
}

.fragen details:nth-child(even) { --kipp: -0.8deg; }
.fragen summary { list-style: none; cursor: pointer; padding: 0.95rem 1.2rem; font-size: 14.5px; }
.fragen summary::-webkit-details-marker { display: none; }
.fragen summary::before { content: '→ '; color: var(--stift); }
.fragen details[open] summary::before { content: '↓ '; }
.fragen details p { padding: 0 1.2rem 1.1rem; font-size: 14px; color: #55503f; }

/* ── Schluss: ein Zettel mit Klebeband ── */
.schluss { padding: 0 var(--rand) clamp(5rem, 12vw, 9rem); display: grid; place-items: center; }

.schluss .zettel {
  position: relative;
  background: var(--karton);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.16);
  padding: clamp(2.5rem, 6vw, 4.5rem) clamp(2.5rem, 7vw, 5.5rem);
  text-align: center;
  rotate: -1.2deg;
}

.schluss h2 { font-family: var(--schreib); font-style: italic; font-weight: 400; font-size: clamp(2rem, 5vw, 3.75rem); line-height: 1.1; }
.schluss h2 mark { background: linear-gradient(transparent 55%, var(--band) 55%, var(--band) 92%, transparent 92%); color: inherit; }

.schluss a.knopf {
  display: inline-block;
  margin-top: 1.75rem;
  border: 2px solid var(--tinte);
  padding: 0.8em 1.8em;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.schluss a.knopf:hover { background: var(--band); }
.schluss .mail { display: block; margin-top: 1rem; font-family: var(--schreib); font-style: italic; color: var(--stift); }

@media (min-width: 860px) {
  .auftakt { grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); align-items: start; }
  .auftakt .zettel { margin-top: 2rem; }
  .karten { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .notizzettel { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 700px) {
  .haufen { display: grid; gap: 1.5rem; grid-template-columns: minmax(0, 1fr); }
  .haufen .stueck { grid-column: 1 !important; margin-top: 0 !important; }
  .blatt ul { columns: 1; }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  return `
<header class="kopf">
  <div class="etikett">
    <b>${i.marke}</b>
    <i>${i.gattung}, Köln</i>
  </div>
  <nav>
    <a href="#arbeiten">Arbeiten</a>
    <a href="#team">Team</a>
    <a href="#kontakt">Kontakt</a>
  </nav>
</header>

<section class="auftakt">
  <div>
    <h1>${i.claim.replace('worth watching', '<mark>worth watching</mark>')}</h1>
    <div class="zettel" style="margin-top: 2rem">
      <span class="tape" aria-hidden="true"></span>
      <p>${i.position.auftakt} ${i.position.satz}</p>
      <p>${i.position.zeile.join(' / ')}</p>
    </div>
  </div>
  <figure class="polaroid">
    <span class="tape" aria-hidden="true"></span>
    <img src="${b('bts/bts-transporter.jpg')}" alt="Setfoto: Team am Transporter">
    <figcaption>hinter den Kulissen, irgendwo bei Köln</figcaption>
  </figure>
</section>

<section class="wand" id="arbeiten">
  <h2>${i.arbeiten.label}</h2>
  <div class="haufen">
    ${i.arbeiten.liste.map((a, n) => `
    <figure class="stueck s${n + 1}" style="--r: ${a.ratio}">
      <span class="tape" aria-hidden="true"></span>
      <img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" loading="lazy">
      <figcaption>
        <span class="wer">${a.kunde} — ${a.titel}</span>
        <span class="fmt">${a.formate.join(' · ')}</span>
      </figcaption>
    </figure>`).join('')}
  </div>
</section>

<section class="blatt" id="kunden">
  <span class="tape" aria-hidden="true"></span>
  <h2>${i.kunden.label}</h2>
  <ul>${i.kunden.liste.map((k) => `<li>${k.name}</li>`).join('')}</ul>
</section>

<section class="karten">
  ${i.disziplinen.liste.map((d) => `
  <div class="karteikarte">
    <span class="tape" aria-hidden="true"></span>
    <h3>${d.titel}</h3>
    <p>${d.text}</p>
  </div>`).join('')}
</section>

<section class="leute" id="team">
  <h2>${i.team.label}: ${i.team.titel}</h2>
  <ul>
    ${i.team.liste.map((m) => `
    <li>
      <span class="tape" aria-hidden="true"></span>
      <img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy">
      <p class="name">${m.name}</p>
      <p class="rolle">${m.rolle.join(' · ')}</p>
    </li>`).join('')}
  </ul>
  <div class="notizen">
    ${i.team.bloecke.map((x) => `<p><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
  </div>
</section>

<section class="notizzettel">
  ${i.gruende.liste.map((g) => `
  <div class="haft">
    <span class="nr">Merken! Nº ${g.nr}</span>
    <h3>${g.titel}</h3>
    <p>${g.text}</p>
  </div>`).join('')}
</section>

<section class="fragen">
  <h2>${i.faq.label} — ${i.faq.titel}</h2>
  ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
</section>

<section class="schluss" id="kontakt">
  <div class="zettel">
    <span class="tape" aria-hidden="true"></span>
    <h2>${i.schluss.auftakt} <mark>${i.schluss.titel}</mark></h2>
    <a class="knopf" href="mailto:${i.schluss.mail}">${i.schluss.knopf}</a>
    <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
  </div>
</section>
`;
};

export default {
  name: 'Pinnwand',
  idee: 'Collage wie im Atelier: geheftete Fotos, Klebeband, Karteikarten, Haftnotizen — nichts sitzt gerade.',
  stil,
  koerper,
};
