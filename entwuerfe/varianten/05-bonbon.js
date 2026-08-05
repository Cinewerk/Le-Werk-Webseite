/**
 * Entwurf 05 — Bonbon.
 *
 * Schule: die verspielten Studio-Seiten der Awwwards-Jahrgänge (Buck,
 * gross.studio und Verwandte): satte Farbflächen im Wechsel, runde
 * Formen, gekippte Karten, Sticker-Abzeichen, ein Punkt, der dem Zeiger
 * hinterherläuft. Laut, freundlich, nichts ist gerade.
 */

const stil = `
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('../src/styles/fonts/poppins-600-normal-latin.woff2') format('woff2');
}
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
  --himbeer: #ff4d6d;
  --limette: #d8f24b;
  --himmel: #6cc7ff;
  --flieder: #c9b6ff;
  --vanille: #fff6e9;
  --tinte: #201a1e;
  --rund: 26px;
  --grotesk: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
  --rand: clamp(1.25rem, 4vw, 3.5rem);
}

body {
  background: var(--vanille);
  color: var(--tinte);
  font: 400 16.5px/1.6 var(--grotesk);
  cursor: none;
}

a, summary, button { cursor: none; }

/* Der Zeigerpunkt */
.punkt {
  position: fixed;
  z-index: 99;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--himbeer);
  pointer-events: none;
  transform: translate(-50%, -50%);
  mix-blend-mode: multiply;
  transition: width 160ms, height 160ms, background 160ms;
}

body:has(a:hover, summary:hover, button:hover) .punkt { width: 44px; height: 44px; background: var(--himmel); }

@media (hover: none) {
  body { cursor: auto; }
  .punkt { display: none; }
}

/* ── Kopf ── */
.kopf {
  position: sticky;
  top: 1rem;
  z-index: 20;
  margin: 1rem var(--rand) 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background: #fff;
  border: 3px solid var(--tinte);
  border-radius: 999px;
  padding: 0.7rem 1.4rem;
  box-shadow: 0.35rem 0.35rem 0 var(--tinte);
  font-weight: 600;
  font-size: 14px;
}

.kopf b { font-weight: 800; letter-spacing: -0.02em; text-transform: uppercase; }
.kopf nav { display: flex; gap: 1.25rem; }
.kopf a { text-decoration: none; }
.kopf a:hover { color: var(--himbeer); }

/* ── Auftakt ── */
.auftakt {
  padding: clamp(4rem, 10vw, 8rem) var(--rand) clamp(3rem, 8vw, 6rem);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.auftakt h1 {
  max-width: 15ch;
  margin: 0 auto;
  font-size: clamp(2.25rem, 7.5vw, 6.5rem);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

.auftakt h1 .w1 { color: var(--himbeer); }
.auftakt h1 .w2 { color: var(--himmel); }

/* Sticker, leicht gedreht */
.sticker {
  position: absolute;
  padding: 0.5em 1.1em;
  border: 3px solid var(--tinte);
  border-radius: 999px;
  background: var(--limette);
  font-weight: 800;
  font-size: clamp(11px, 1.4vw, 14px);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  box-shadow: 0.3rem 0.3rem 0 var(--tinte);
  rotate: -7deg;
}

.sticker--2 { background: var(--flieder); rotate: 5deg; }
.sticker--a { left: 8%; top: 18%; }
.sticker--b { right: 7%; top: 30%; }
.sticker--c { left: 14%; bottom: 12%; rotate: 4deg; background: var(--himmel); }

.auftakt .satz { max-width: 52ch; margin: 2rem auto 0; }
.auftakt .zeile { margin-top: 1.25rem; font-weight: 600; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: #8a7f86; }

/* ── Arbeiten: gekippte Karten ── */
.arbeiten { background: var(--himbeer); border-block: 3px solid var(--tinte); padding: clamp(3rem, 8vw, 6rem) var(--rand); }

.arbeiten h2 {
  text-align: center;
  color: #fff;
  font-size: clamp(2rem, 5vw, 3.75rem);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  margin-bottom: clamp(2.5rem, 6vw, 4.5rem);
  -webkit-text-stroke: 2px var(--tinte);
  text-shadow: 0.3rem 0.3rem 0 var(--tinte);
}

.karten {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr));
  gap: clamp(1.5rem, 3.5vw, 2.75rem);
  max-width: 74rem;
  margin: 0 auto;
}

.karte {
  background: #fff;
  border: 3px solid var(--tinte);
  border-radius: var(--rund);
  padding: 0.9rem 0.9rem 1.1rem;
  box-shadow: 0.45rem 0.45rem 0 var(--tinte);
  rotate: var(--kipp, -2deg);
  transition: rotate 220ms cubic-bezier(0.34, 1.56, 0.64, 1), translate 220ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.karte:nth-child(even) { --kipp: 2.2deg; }
.karte:hover { rotate: 0deg; translate: 0 -0.5rem; }

.karte img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: calc(var(--rund) - 10px); border: 2px solid var(--tinte); }
.karte .wer { margin-top: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: -0.01em; }
.karte .was { font-size: 13.5px; color: #6d6269; }
.karte .fmt { display: inline-block; margin-top: 0.5rem; font-size: 11px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; background: var(--limette); border: 2px solid var(--tinte); border-radius: 999px; padding: 0.25em 0.8em; }

/* ── Kunden: Laufband ── */
.band { border-bottom: 3px solid var(--tinte); background: var(--limette); overflow: hidden; padding: 1rem 0; }
.band .lauf { display: flex; gap: 3rem; width: max-content; animation: lauf 26s linear infinite; }
.band span { font-weight: 800; font-size: clamp(1.25rem, 2.6vw, 2rem); text-transform: uppercase; letter-spacing: -0.01em; white-space: nowrap; }
.band span::after { content: ' ✺'; color: var(--himbeer); }
@keyframes lauf { to { transform: translateX(-50%); } }

/* ── Disziplinen: drei Farbblöcke ── */
.machen { padding: clamp(3rem, 8vw, 6rem) var(--rand); }
.machen h2 { text-align: center; font-size: clamp(2rem, 5vw, 3.75rem); font-weight: 800; text-transform: uppercase; letter-spacing: -0.03em; margin-bottom: clamp(2rem, 5vw, 4rem); }

.machen ol { display: grid; gap: clamp(1.5rem, 3vw, 2.5rem); max-width: 74rem; margin: 0 auto; }

.machen li {
  border: 3px solid var(--tinte);
  border-radius: var(--rund);
  padding: clamp(1.5rem, 3.5vw, 2.5rem);
  box-shadow: 0.45rem 0.45rem 0 var(--tinte);
}

.machen li:nth-child(1) { background: var(--himmel); }
.machen li:nth-child(2) { background: var(--flieder); }
.machen li:nth-child(3) { background: var(--limette); }

.machen h3 { font-size: clamp(1.5rem, 3vw, 2.5rem); font-weight: 800; text-transform: uppercase; letter-spacing: -0.02em; margin-bottom: 0.6rem; }
.machen p { max-width: 46ch; }

/* ── Team: Polaroids ── */
.team { background: var(--himmel); border-block: 3px solid var(--tinte); padding: clamp(3rem, 8vw, 6rem) var(--rand); }
.team h2 { text-align: center; font-size: clamp(2rem, 5vw, 3.75rem); font-weight: 800; text-transform: uppercase; letter-spacing: -0.03em; margin-bottom: clamp(2.5rem, 6vw, 4.5rem); }
.team h2 small { display: block; font-size: 0.32em; letter-spacing: 0.2em; }

.team ul { display: flex; flex-wrap: wrap; justify-content: center; gap: clamp(1.5rem, 3vw, 2.5rem); max-width: 74rem; margin: 0 auto; }

.team li {
  width: clamp(11rem, 20vw, 15rem);
  background: #fff;
  border: 3px solid var(--tinte);
  padding: 0.7rem 0.7rem 1rem;
  box-shadow: 0.4rem 0.4rem 0 var(--tinte);
  rotate: var(--kipp, -3deg);
  transition: rotate 220ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.team li:nth-child(even) { --kipp: 2.5deg; }
.team li:hover { rotate: 0deg; }
.team img { width: 100%; aspect-ratio: 1; object-fit: cover; border: 2px solid var(--tinte); }
.team .name { margin-top: 0.6rem; font-weight: 800; font-size: 15px; }
.team .rolle { font-size: 12.5px; color: #6d6269; }

.team .saetze { max-width: 46rem; margin: clamp(2.5rem, 6vw, 4rem) auto 0; display: grid; gap: 1rem; text-align: center; }
.team .saetze b { font-weight: 800; }

/* ── Gründe ── */
.gruende { padding: clamp(3rem, 8vw, 6rem) var(--rand); max-width: 74rem; margin: 0 auto; }
.gruende h2 { font-size: clamp(2rem, 5vw, 3.75rem); font-weight: 800; text-transform: uppercase; letter-spacing: -0.03em; margin-bottom: clamp(2rem, 5vw, 3.5rem); text-align: center; }
.gruende ol { display: grid; gap: 1.25rem; }
.gruende li { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 1.25rem; align-items: start; }
.gruende .nr {
  width: 3.2em; height: 3.2em;
  display: grid; place-items: center;
  background: var(--himbeer); color: #fff;
  border: 3px solid var(--tinte); border-radius: 50%;
  font-weight: 800;
  box-shadow: 0.25rem 0.25rem 0 var(--tinte);
}
.gruende li:nth-child(2) .nr { background: var(--himmel); color: var(--tinte); }
.gruende li:nth-child(3) .nr { background: var(--limette); color: var(--tinte); }
.gruende h3 { font-weight: 800; font-size: clamp(1.25rem, 2.4vw, 1.75rem); margin-bottom: 0.3rem; }
.gruende p { max-width: 58ch; }

/* ── FAQ ── */
.faq { background: var(--flieder); border-block: 3px solid var(--tinte); padding: clamp(3rem, 8vw, 6rem) var(--rand); }
.faq .innen { max-width: 52rem; margin: 0 auto; }
.faq h2 { text-align: center; font-size: clamp(2rem, 5vw, 3.75rem); font-weight: 800; text-transform: uppercase; letter-spacing: -0.03em; margin-bottom: clamp(2rem, 5vw, 3.5rem); }
.faq details { background: #fff; border: 3px solid var(--tinte); border-radius: 18px; box-shadow: 0.35rem 0.35rem 0 var(--tinte); margin-bottom: 1rem; }
.faq summary { list-style: none; padding: 1rem 1.4rem; font-weight: 800; display: flex; justify-content: space-between; gap: 1rem; }
.faq summary::-webkit-details-marker { display: none; }
.faq summary::after { content: '+'; color: var(--himbeer); font-size: 1.4em; line-height: 1; }
.faq details[open] summary::after { content: '–'; }
.faq details p { padding: 0 1.4rem 1.2rem; }

/* ── Schluss ── */
.schluss { text-align: center; padding: clamp(4rem, 10vw, 8rem) var(--rand); }
.schluss .auftakt { font-weight: 600; }
.schluss h2 { font-size: clamp(2.25rem, 7vw, 6rem); font-weight: 800; text-transform: uppercase; letter-spacing: -0.04em; line-height: 1; margin: 0.4rem 0 2rem; }
.schluss h2 span { color: var(--himbeer); }
.schluss a.knopf {
  display: inline-block;
  background: var(--tinte); color: #fff;
  border: 3px solid var(--tinte); border-radius: 999px;
  padding: 1em 2.4em;
  font-weight: 800; font-size: 15px; letter-spacing: 0.06em; text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0.4rem 0.4rem 0 var(--himbeer);
  transition: translate 160ms, box-shadow 160ms;
}
.schluss a.knopf:hover { translate: 0.2rem 0.2rem; box-shadow: 0.15rem 0.15rem 0 var(--himbeer); }
.schluss .mail { display: block; margin-top: 1.25rem; font-weight: 600; }
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  const claim = i.claim
    .replace('visual content studio', '<span class="w1">visual content studio</span>')
    .replace('worth watching', '<span class="w2">worth watching</span>');
  return `
<div class="punkt" aria-hidden="true"></div>

<header class="kopf">
  <b>${i.marke} ✺</b>
  <nav>
    <a href="#arbeiten">Arbeiten</a>
    <a href="#team">Team</a>
    <a href="#kontakt">Kontakt</a>
  </nav>
</header>

<section class="auftakt">
  <span class="sticker sticker--a" aria-hidden="true">Köln ✕ Worldwide</span>
  <span class="sticker sticker--2 sticker--b" aria-hidden="true">${i.gattung}</span>
  <span class="sticker sticker--c" aria-hidden="true">Est. by Filmemacher</span>
  <h1>${claim}</h1>
  <p class="satz">${i.position.auftakt} ${i.position.satz}</p>
  <p class="zeile">${i.position.zeile.join(' ✺ ')}</p>
</section>

<section class="arbeiten" id="arbeiten">
  <h2>${i.arbeiten.label}</h2>
  <div class="karten">
    ${i.arbeiten.liste.map((a) => `
    <div class="karte">
      <img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" loading="lazy">
      <p class="wer">${a.kunde}</p>
      <p class="was">${a.titel}</p>
      <span class="fmt">${a.formate.length > 1 ? 'Formate' : 'Format'} ${a.formate.join(' · ')}</span>
    </div>`).join('')}
  </div>
</section>

<div class="band" id="kunden" aria-label="${i.kunden.label}">
  <div class="lauf">
    ${[...i.kunden.liste, ...i.kunden.liste].map((k) => `<span>${k.name}</span>`).join('')}
  </div>
</div>

<section class="machen">
  <h2>${i.disziplinen.label}</h2>
  <ol>
    ${i.disziplinen.liste.map((d) => `<li><h3>${d.titel}</h3><p>${d.text}</p></li>`).join('')}
  </ol>
</section>

<section class="team" id="team">
  <h2><small>${i.team.label}</small>${i.team.titel}</h2>
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
  <h2>${i.gruende.titel} ✺</h2>
  <ol>
    ${i.gruende.liste.map((g) => `
    <li><span class="nr">${g.nr}</span><div><h3>${g.titel}</h3><p>${g.text}</p></div></li>`).join('')}
  </ol>
</section>

<section class="faq">
  <div class="innen">
    <h2>${i.faq.titel}</h2>
    ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
  </div>
</section>

<section class="schluss" id="kontakt">
  <p class="auftakt">${i.schluss.auftakt} …</p>
  <h2><span>${i.schluss.titel}</span> !</h2>
  <a class="knopf" href="mailto:${i.schluss.mail}">${i.schluss.knopf}</a>
  <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
</section>

<script>
(() => {
  const p = document.querySelector('.punkt');
  if (matchMedia('(hover: none)').matches) return;
  let zx = innerWidth / 2, zy = innerHeight / 2, x = zx, y = zy, laeuft = false;
  addEventListener('pointermove', (e) => {
    zx = e.clientX; zy = e.clientY;
    if (!laeuft) { laeuft = true; requestAnimationFrame(tick); }
  });
  const tick = () => {
    x += (zx - x) * 0.22; y += (zy - y) * 0.22;
    p.style.left = x + 'px'; p.style.top = y + 'px';
    if (Math.abs(zx - x) > 0.3 || Math.abs(zy - y) > 0.3) requestAnimationFrame(tick);
    else laeuft = false;
  };
})();
</script>
`;
};

export default {
  name: 'Bonbon',
  idee: 'Laut und freundlich: Farbblöcke, gekippte Karten, Sticker, harte Schlagschatten, ein Punkt folgt dem Zeiger.',
  stil,
  koerper,
};
