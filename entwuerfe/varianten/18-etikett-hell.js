/**
 * Entwurf 18 — Etikett Hell.
 *
 * Nach Simons sechstem Referenzbild: das helle Magazin-Cover — weißer
 * Grund, schwerer schwarzer Kleinbuchstaben-Titelkopf, eine dichte
 * Collage aus Modefotos in ungleich großen Feldern, ein roter Textblock
 * als einziger Farbklecks. Animation: Die Collage baut sich beim Laden
 * Feld für Feld auf, beim Überfahren wachsen die Felder leicht.
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
  font-family: 'Bodoni Moda';
  font-style: italic;
  font-weight: 400 500;
  font-display: swap;
  src: url('../src/styles/fonts/bodoni-moda-opsz11-italic-latin.woff2') format('woff2');
}

:root {
  --weiss: #fbfbf9;
  --tinte: #101010;
  --rot: #e33224;
  --grotesk: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
  --serif: 'Bodoni Moda', Georgia, serif;
  --rand: clamp(1rem, 3vw, 2.5rem);
}

body {
  background: var(--weiss);
  color: var(--tinte);
  font: 400 14.5px/1.6 'Helvetica Neue', Arial, sans-serif;
}

/* ── Titelkopf ── */
.titel { padding: clamp(1.5rem, 4vh, 3rem) var(--rand) 0; max-width: 68rem; margin: 0 auto; }

.titel h1 {
  font-family: var(--grotesk);
  font-weight: 800;
  font-size: clamp(3rem, 11vw, 9rem);
  line-height: 0.85;
  letter-spacing: -0.05em;
  text-transform: lowercase;
}

.titel h1 sup { font-size: 0.22em; letter-spacing: 0.1em; text-transform: uppercase; vertical-align: super; }

.titel .zeile { display: flex; justify-content: space-between; gap: 1rem; padding: 0.6rem 0.1rem; font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase; border-bottom: 2px solid var(--tinte); }

/* ── Die Covercollage ── */
.collage {
  max-width: 68rem;
  margin: 0 auto;
  padding: clamp(1rem, 2.5vh, 1.75rem) var(--rand) clamp(3rem, 7vh, 5rem);
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-auto-rows: clamp(4.5rem, 10vw, 8.5rem);
  gap: clamp(0.5rem, 1.2vw, 0.9rem);
}

.feld { position: relative; overflow: hidden; opacity: 0; transform: scale(0.97); animation: feld 500ms ease forwards; animation-delay: calc(var(--n) * 90ms + 150ms); }
@keyframes feld { to { opacity: 1; transform: none; } }

.feld img { width: 100%; height: 100%; object-fit: cover; transition: transform 500ms cubic-bezier(0.22, 0.61, 0.36, 1); }
.feld:hover img { transform: scale(1.05); }

.feld figcaption {
  position: absolute;
  left: 0.5rem;
  bottom: 0.4rem;
  background: var(--weiss);
  padding: 0.2rem 0.45rem;
  font-size: 9.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.feld--gross { grid-column: span 3; grid-row: span 3; }
.feld--hoch { grid-column: span 2; grid-row: span 2; }
.feld--quer { grid-column: span 3; grid-row: span 2; }
.feld--klein { grid-column: span 2; grid-row: span 2; }

/* Der rote Block */
.rotblock {
  grid-column: span 3;
  grid-row: span 2;
  background: var(--rot);
  color: #fff;
  padding: clamp(0.9rem, 2vw, 1.4rem);
  display: grid;
  align-content: center;
  gap: 0.4rem;
  opacity: 0;
  animation: feld 500ms ease forwards;
  animation-delay: 600ms;
}

.rotblock .klein { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; }
.rotblock p { font-family: var(--grotesk); font-weight: 800; font-size: clamp(0.9375rem, 1.9vw, 1.375rem); line-height: 1.2; letter-spacing: -0.01em; text-transform: uppercase; }

/* ── Rubriken darunter ── */
.rubrik { max-width: 68rem; margin: 0 auto; padding: clamp(2rem, 5vh, 3.5rem) var(--rand); border-top: 2px solid var(--tinte); }

.rubrik .kopf { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; margin-bottom: 1.5rem; }
.rubrik .kopf h2 { font-family: var(--grotesk); font-weight: 800; font-size: clamp(1.5rem, 3.4vw, 2.75rem); letter-spacing: -0.03em; text-transform: lowercase; }
.rubrik .kopf i { font-family: var(--serif); font-style: italic; font-size: 14px; color: var(--rot); }

/* Position */
.leit p { font-family: var(--serif); font-style: italic; font-size: clamp(1.25rem, 2.6vw, 2rem); line-height: 1.35; max-width: 34ch; }
.leit .klein { margin-top: 1rem; font-size: 10.5px; letter-spacing: 0.2em; text-transform: uppercase; color: #777; }

/* Kunden: rote Kästchenzeile */
.kunden ul { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.kunden li { border: 1.5px solid var(--tinte); padding: 0.4rem 0.9rem; font-size: 11.5px; letter-spacing: 0.12em; text-transform: uppercase; transition: background 160ms, color 160ms, border-color 160ms; }
.kunden li:hover { background: var(--rot); border-color: var(--rot); color: #fff; }

/* Disziplinen */
.machen .drei { display: grid; gap: 1.25rem; }
.machen h3 { font-family: var(--grotesk); font-weight: 800; font-size: clamp(1.375rem, 2.8vw, 2.125rem); letter-spacing: -0.02em; text-transform: lowercase; }
.machen h3::after { content: ' →'; color: var(--rot); }
.machen p { margin-top: 0.4rem; max-width: 46ch; color: #444; }

/* Team */
.team .reihe { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(0.6rem, 1.4vw, 1rem); }
.team img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; }
.team figcaption { padding-top: 0.4rem; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
.team figcaption b { display: block; font-size: 12px; }
.team .saetze { margin-top: 1.5rem; display: grid; gap: 0.8rem; max-width: 64ch; color: #444; }
.team .saetze b { color: var(--tinte); }

/* Gründe: das Themenregister */
.gruende ol { display: grid; gap: 1rem; }
.gruende li { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 1rem; align-items: baseline; border-bottom: 1px solid #ddd; padding-bottom: 1rem; }
.gruende .nr { font-family: var(--serif); font-style: italic; color: var(--rot); font-size: 1.25rem; }
.gruende h3 { font-family: var(--grotesk); font-weight: 800; font-size: clamp(1.125rem, 2.2vw, 1.625rem); letter-spacing: -0.01em; }
.gruende p { color: #444; max-width: 60ch; margin-top: 0.25rem; }

/* FAQ */
.faq details { border-bottom: 1px solid #ddd; }
.faq summary { list-style: none; cursor: pointer; padding: 0.85rem 0; font-family: var(--grotesk); font-weight: 800; font-size: 14.5px; letter-spacing: 0; }
.faq summary::-webkit-details-marker { display: none; }
.faq summary::before { content: '◆ '; color: var(--rot); font-size: 0.7em; vertical-align: 0.15em; }
.faq details p { padding-bottom: 1rem; max-width: 62ch; color: #444; }

/* Schluss */
.schluss { max-width: 68rem; margin: 0 auto; padding: clamp(2.5rem, 6vh, 4rem) var(--rand) clamp(4rem, 9vh, 6rem); border-top: 2px solid var(--tinte); text-align: center; }
.schluss .klein { font-family: var(--serif); font-style: italic; font-size: clamp(1.125rem, 2.2vw, 1.625rem); color: var(--rot); }
.schluss h2 { font-family: var(--grotesk); font-weight: 800; font-size: clamp(2rem, 6.4vw, 5rem); letter-spacing: -0.04em; text-transform: lowercase; line-height: 0.95; margin: 0.4rem 0 1.5rem; }
.schluss a.knopf { display: inline-block; background: var(--rot); color: #fff; padding: 0.9em 2.2em; text-decoration: none; font-family: var(--grotesk); font-weight: 800; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; }
.schluss a.knopf:hover { background: var(--tinte); }
.schluss .mail { display: block; margin-top: 1rem; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: #777; }

@media (min-width: 780px) {
  .machen .drei { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .team .reihe { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

@media (max-width: 640px) {
  .collage { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-rows: clamp(7rem, 30vw, 11rem); }
  .feld--gross, .feld--hoch, .feld--quer, .feld--klein, .rotblock { grid-column: span 2; grid-row: span 2; }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  const a = i.arbeiten.liste;
  return `
<header class="titel">
  <h1>le werk<sup> Studio</sup></h1>
  <p class="zeile">
    <span>Nº Eins</span>
    <span>${i.gattung} — Köln</span>
    <span>${i.position.auftakt}</span>
  </p>
</header>

<section class="collage" id="arbeiten">
  <figure class="feld feld--gross" style="--n:0">
    <img src="${b(a[0].bild)}" alt="${a[0].kunde} — ${a[0].titel}">
    <figcaption>${a[0].kunde} · ${a[0].titel}</figcaption>
  </figure>
  <figure class="feld feld--hoch" style="--n:1">
    <img src="${b(a[1].bild)}" alt="${a[1].kunde} — ${a[1].titel}">
    <figcaption>${a[1].kunde}</figcaption>
  </figure>
  <div class="rotblock">
    <p class="klein">${i.arbeiten.label} — in dieser Ausgabe</p>
    <p>${i.claim.replace('Le Werk is a ', '').replace('.', '')}</p>
  </div>
  <figure class="feld feld--klein" style="--n:2">
    <img src="${b(a[3].bild)}" alt="${a[3].kunde} — ${a[3].titel}">
    <figcaption>${a[3].kunde}</figcaption>
  </figure>
  <figure class="feld feld--hoch" style="--n:3">
    <img src="${b(a[4].bild)}" alt="${a[4].kunde} — ${a[4].titel}">
    <figcaption>${a[4].kunde}</figcaption>
  </figure>
  <figure class="feld feld--quer" style="--n:4">
    <img src="${b(a[2].bild)}" alt="${a[2].kunde} — ${a[2].titel}">
    <figcaption>${a[2].kunde} · ${a[2].titel}</figcaption>
  </figure>
  <figure class="feld feld--quer" style="--n:5">
    <img src="${b(a[5].bild)}" alt="${a[5].kunde} — ${a[5].titel}">
    <figcaption>${a[5].kunde} · ${a[5].titel}</figcaption>
  </figure>
</section>

<section class="rubrik leit">
  <div class="kopf"><h2>worum es geht</h2><i>Leitartikel</i></div>
  <p>${i.position.satz}</p>
  <p class="klein">${i.position.zeile.join(' · ')}</p>
</section>

<section class="rubrik kunden" id="kunden">
  <div class="kopf"><h2>${i.kunden.label.toLowerCase()}</h2><i>Register</i></div>
  <ul>${i.kunden.liste.map((k) => `<li>${k.name}</li>`).join('')}</ul>
</section>

<section class="rubrik machen">
  <div class="kopf"><h2>${i.disziplinen.label.toLowerCase()}</h2><i>Rubriken</i></div>
  <div class="drei">
    ${i.disziplinen.liste.map((d) => `<div><h3>${d.titel.toLowerCase()}</h3><p>${d.text}</p></div>`).join('')}
  </div>
</section>

<section class="rubrik team" id="team">
  <div class="kopf"><h2>${i.team.titel.toLowerCase()}</h2><i>${i.team.label}</i></div>
  <div class="reihe">
    ${i.team.liste.map((m) => `
    <figure>
      <img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy">
      <figcaption><b>${m.name}</b>${m.rolle.join(' · ')}</figcaption>
    </figure>`).join('')}
  </div>
  <div class="saetze">
    ${i.team.bloecke.map((x) => `<p><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
  </div>
</section>

<section class="rubrik gruende">
  <div class="kopf"><h2>${i.gruende.titel.toLowerCase()}</h2><i>Drei Thesen</i></div>
  <ol>
    ${i.gruende.liste.map((g) => `
    <li><span class="nr">${g.nr}</span><div><h3>${g.titel}</h3><p>${g.text}</p></div></li>`).join('')}
  </ol>
</section>

<section class="rubrik faq">
  <div class="kopf"><h2>${i.faq.titel.toLowerCase()}</h2><i>${i.faq.label}</i></div>
  ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
</section>

<section class="schluss" id="kontakt">
  <p class="klein">${i.schluss.auftakt} …</p>
  <h2>${i.schluss.titel.toLowerCase()}</h2>
  <a class="knopf" href="mailto:${i.schluss.mail}">${i.schluss.knopf}</a>
  <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
</section>
`;
};

export default {
  name: 'Etikett Hell',
  idee: 'Das helle Magazin-Cover: schwerer Kleinbuchstaben-Titelkopf, dichte Fotocollage, ein roter Block als Farbklecks.',
  stil,
  koerper,
};
