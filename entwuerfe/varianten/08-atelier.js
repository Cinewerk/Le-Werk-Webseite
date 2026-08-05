/**
 * Entwurf 08 — Atelier.
 *
 * Schule: die warmen, luftigen Studio-Seiten skandinavischer Prägung
 * (Hello Monday und Verwandte): Cremeton, viel Leerraum, alles klein
 * geschrieben, weiche Rundungen, ein Pastell als Akzent. Die Seite
 * flüstert — das Gegenteil von Entwurf 05.
 */

const stil = `
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('../src/styles/fonts/poppins-400-normal-latin.woff2') format('woff2');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('../src/styles/fonts/poppins-500-normal-latin.woff2') format('woff2');
}
@font-face {
  font-family: 'Bodoni Moda';
  font-style: italic;
  font-weight: 400 500;
  font-display: swap;
  src: url('../src/styles/fonts/bodoni-moda-opsz11-italic-latin.woff2') format('woff2');
}

:root {
  --creme: #faf6ef;
  --tinte: #3c3833;
  --sanft: #8f887e;
  --salbei: #b9c6ae;
  --rose: #e8cfc0;
  --rund: 22px;
  --grotesk: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
  --serif: 'Bodoni Moda', Georgia, serif;
  --rand: clamp(1.5rem, 5vw, 4.5rem);
}

body {
  background: var(--creme);
  color: var(--tinte);
  font: 400 16.5px/1.75 var(--grotesk);
  letter-spacing: 0.005em;
}

/* ── Kopf ── */
.kopf {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.75rem var(--rand);
  font-size: 14px;
}

.kopf b { font-weight: 500; }
.kopf nav { display: flex; gap: 1.75rem; }
.kopf a { text-decoration: none; color: var(--sanft); }
.kopf a:hover { color: var(--tinte); }

/* ── Auftakt: leise, viel Luft ── */
.auftakt { padding: clamp(4rem, 12vh, 9rem) var(--rand) clamp(4rem, 10vw, 7rem); }

.auftakt h1 {
  max-width: 22ch;
  font-size: clamp(1.875rem, 4.6vw, 4rem);
  font-weight: 400;
  line-height: 1.22;
  letter-spacing: -0.015em;
}

.auftakt h1 em { font-family: var(--serif); font-style: italic; letter-spacing: 0; }

.auftakt .zeile { margin-top: 2.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem 1.75rem; font-size: 13px; color: var(--sanft); }

/* ── ein ruhiges Bildband ── */
.band { padding: 0 var(--rand); }
.band img { width: 100%; aspect-ratio: 21 / 9; object-fit: cover; border-radius: var(--rund); }

/* ── Position ── */
.position { padding: clamp(4rem, 10vw, 8rem) var(--rand); max-width: 56rem; }
.position .klein { font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--sanft); margin-bottom: 1.25rem; }
.position p.gross { font-size: clamp(1.375rem, 2.8vw, 2.25rem); line-height: 1.4; font-weight: 400; }
.position p.gross em { font-family: var(--serif); font-style: italic; }

/* ── Arbeiten: zwei ruhige Spalten ── */
.arbeiten { padding: 0 var(--rand) clamp(4rem, 10vw, 8rem); }
.arbeiten .klein { font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--sanft); margin-bottom: 2rem; }

.arbeiten ul { display: grid; gap: clamp(2rem, 5vw, 4rem); }

.arbeiten li a { display: block; text-decoration: none; }
.arbeiten img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: var(--rund); transition: transform 600ms cubic-bezier(0.22, 0.61, 0.36, 1); }
.arbeiten li:hover img { transform: scale(1.015); }

.arbeiten .zeile { display: flex; justify-content: space-between; gap: 1rem; padding-top: 1rem; }
.arbeiten .wer { font-weight: 500; }
.arbeiten .was { color: var(--sanft); font-size: 14.5px; text-align: right; }

/* ── Kunden: schlichte Zeilen mit Punkt ── */
.kunden { background: #fff; border-radius: var(--rund) var(--rund) 0 0; padding: clamp(4rem, 10vw, 7rem) var(--rand); }
.kunden .klein { font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--sanft); margin-bottom: 2rem; }
.kunden ul { display: flex; flex-wrap: wrap; gap: 0.75rem 0; max-width: 60rem; font-size: clamp(1.25rem, 2.4vw, 1.875rem); font-weight: 400; }
.kunden li::after { content: '·'; margin: 0 0.65em; color: var(--salbei); }
.kunden li:last-child::after { content: ''; }

/* ── Disziplinen: drei weiche Karten ── */
.machen { background: #fff; padding: 0 var(--rand) clamp(4rem, 10vw, 7rem); }
.machen ol { display: grid; gap: 1.25rem; }

.machen li {
  border-radius: var(--rund);
  padding: clamp(1.75rem, 4vw, 2.75rem);
  display: grid;
  gap: 0.75rem;
  align-content: start;
}

.machen li:nth-child(1) { background: var(--salbei); }
.machen li:nth-child(2) { background: var(--creme); }
.machen li:nth-child(3) { background: var(--rose); }

.machen h3 { font-size: clamp(1.375rem, 2.4vw, 1.875rem); font-weight: 500; letter-spacing: -0.01em; }
.machen h3 i { font-family: var(--serif); font-weight: 400; }
.machen p { font-size: 15.5px; }

/* ── Team ── */
.team { padding: clamp(4rem, 10vw, 8rem) var(--rand); }
.team .klein { font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--sanft); }
.team h2 { font-size: clamp(1.75rem, 3.6vw, 3rem); font-weight: 400; margin: 0.5rem 0 2.5rem; }
.team h2 em { font-family: var(--serif); font-style: italic; }

.team ul { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(1.25rem, 3vw, 2.25rem); }
.team img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: calc(var(--rund) * 3); transition: border-radius 400ms cubic-bezier(0.22, 0.61, 0.36, 1); }
.team li:hover img { border-radius: var(--rund); }
.team .name { margin-top: 0.9rem; font-weight: 500; }
.team .rolle { font-size: 14px; color: var(--sanft); }

.team .saetze { margin-top: clamp(2.5rem, 6vw, 4.5rem); display: grid; gap: 1.5rem 4rem; max-width: 74rem; }
.team .saetze p { max-width: 44ch; }
.team .saetze b { font-weight: 500; }

/* ── Gründe: nummeriert mit Serifenziffer ── */
.gruende { background: #fff; border-radius: var(--rund); margin: 0 var(--rand); padding: clamp(2.5rem, 6vw, 4.5rem); }
.gruende h2 { font-size: clamp(1.75rem, 3.6vw, 3rem); font-weight: 400; margin-bottom: 2rem; }
.gruende h2 em { font-family: var(--serif); font-style: italic; }
.gruende ol { display: grid; gap: 2rem; }
.gruende li { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 1.5rem; }
.gruende .nr { font-family: var(--serif); font-style: italic; font-size: clamp(2rem, 4vw, 3rem); line-height: 1; color: var(--salbei); }
.gruende h3 { font-weight: 500; font-size: clamp(1.125rem, 2vw, 1.5rem); margin-bottom: 0.4rem; }
.gruende p { max-width: 56ch; font-size: 15.5px; }

/* ── FAQ ── */
.faq { padding: clamp(4rem, 10vw, 8rem) var(--rand); max-width: 56rem; }
.faq .klein { font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--sanft); margin-bottom: 2rem; }
.faq details { border-bottom: 1px solid #e4ddd1; }
.faq summary { list-style: none; cursor: pointer; padding: 1.2rem 2rem 1.2rem 0; position: relative; font-weight: 500; }
.faq summary::-webkit-details-marker { display: none; }
.faq summary::after { content: '↓'; position: absolute; right: 0; top: 50%; transform: translateY(-50%); color: var(--sanft); transition: transform 250ms; }
.faq details[open] summary::after { transform: translateY(-50%) rotate(180deg); }
.faq details p { padding-bottom: 1.4rem; max-width: 58ch; color: #5d574e; }

/* ── Schluss ── */
.schluss { padding: 0 var(--rand) clamp(4rem, 10vw, 7rem); }

.schluss .karte {
  background: var(--salbei);
  border-radius: var(--rund);
  padding: clamp(3rem, 8vw, 6rem);
  text-align: center;
}

.schluss h2 { font-size: clamp(1.75rem, 4.4vw, 3.5rem); font-weight: 400; line-height: 1.15; }
.schluss h2 em { font-family: var(--serif); font-style: italic; }

.schluss a.knopf {
  display: inline-block;
  margin-top: 2rem;
  background: var(--tinte);
  color: var(--creme);
  border-radius: 999px;
  padding: 0.95em 2.2em;
  font-size: 14.5px;
  font-weight: 500;
  text-decoration: none;
}

.schluss a.knopf:hover { background: #262320; }
.schluss .mail { display: block; margin-top: 1rem; font-size: 14.5px; }

@media (min-width: 860px) {
  .arbeiten ul { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .arbeiten li:nth-child(odd) { transform: translateY(clamp(1.5rem, 4vw, 3.5rem)); }
  .machen ol { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .team ul { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .team .saetze { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  const klein = (t) => t.charAt(0).toLowerCase() + t.slice(1);
  const claim = i.claim.replace('worth watching', '<em>worth watching</em>');
  return `
<header class="kopf">
  <b>${klein(i.marke)}</b>
  <nav>
    <a href="#arbeiten">arbeiten</a>
    <a href="#team">team</a>
    <a href="#kontakt">kontakt</a>
  </nav>
</header>

<section class="auftakt">
  <h1>${claim}</h1>
  <p class="zeile">${i.position.zeile.map(klein).join('  —  ')}</p>
</section>

<div class="band">
  <img src="${b('krafthaus/haus-drohne.jpg')}" alt="Das Krafthaus im Kölner Rheinauhafen aus der Luft">
</div>

<section class="position">
  <p class="klein">${klein(i.gattung)}</p>
  <p class="gross">${i.position.auftakt} <em>${i.position.satz}</em></p>
</section>

<section class="arbeiten" id="arbeiten">
  <p class="klein">${klein(i.arbeiten.label)}</p>
  <ul>
    ${i.arbeiten.liste.map((a) => `
    <li>
      <a href="#" onclick="return false">
        <img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" loading="lazy">
        <span class="zeile"><span class="wer">${a.kunde}</span>
        <span class="was">${a.titel} · ${a.formate.join(' · ')}</span></span>
      </a>
    </li>`).join('')}
  </ul>
</section>

<section class="kunden" id="kunden">
  <p class="klein">${klein(i.kunden.label)}</p>
  <ul>${i.kunden.liste.map((k) => `<li>${k.name}</li>`).join('')}</ul>
</section>

<section class="machen">
  <ol>
    ${i.disziplinen.liste.map((d) => `
    <li><h3><i>${klein(d.titel)}</i></h3><p>${d.text}</p></li>`).join('')}
  </ol>
</section>

<section class="team" id="team">
  <p class="klein">${klein(i.team.label)}</p>
  <h2>unser <em>Kernteam</em></h2>
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
  <h2>warum <em>${klein(i.marke)}</em></h2>
  <ol>
    ${i.gruende.liste.map((g) => `
    <li><span class="nr">${g.nr}</span><div><h3>${g.titel}</h3><p>${g.text}</p></div></li>`).join('')}
  </ol>
</section>

<section class="faq">
  <p class="klein">${klein(i.faq.label)} — ${klein(i.faq.titel)}</p>
  ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
</section>

<section class="schluss" id="kontakt">
  <div class="karte">
    <h2>${klein(i.schluss.auftakt)} <em>${i.schluss.titel}</em></h2>
    <a class="knopf" href="mailto:${i.schluss.mail}">${i.schluss.knopf}</a>
    <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
  </div>
</section>
`;
};

export default {
  name: 'Atelier',
  idee: 'Warm und leise: Creme, Kleinschreibung, weiche Rundungen, Salbei und Rosé — die Seite flüstert.',
  stil,
  koerper,
};
