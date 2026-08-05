/**
 * Entwurf 11 — Strom.
 *
 * Schule: die experimentellen Awwwards-Seiten mit WebGL-Atmosphäre
 * (Active Theory, Noomo und Verwandte) — hier in reines CSS übersetzt:
 * Die Seite ist ein einziger dunkler Raum, durch den große, weiche
 * Farbkörper treiben und sich beim Scrollen verschieben. Jeder Abschnitt
 * ist ein Bildschirm, der Inhalt schwebt. Der abstrakteste der Reihe —
 * und der einzige, der das Petrol der Marke behält und ins Extrem zieht.
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
  font-weight: 600;
  font-display: swap;
  src: url('../src/styles/fonts/poppins-600-normal-latin.woff2') format('woff2');
}
@font-face {
  font-family: 'Bodoni Moda';
  font-style: italic;
  font-weight: 400 500;
  font-display: swap;
  src: url('../src/styles/fonts/bodoni-moda-opsz11-italic-latin.woff2') format('woff2');
}

:root {
  --tiefe: #021418;
  --petrol: #0b4f5c;
  --tuerkis: #19b3a6;
  --glut: #ff7a4d;
  --schnee: #eef7f6;
  --gedimmt: rgba(238, 247, 246, 0.55);
  --grotesk: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
  --serif: 'Bodoni Moda', Georgia, serif;
  --rand: clamp(1.25rem, 4vw, 3.5rem);
}

html { scroll-behavior: smooth; }

body {
  background: var(--tiefe);
  color: var(--schnee);
  font: 400 16px/1.65 var(--grotesk);
}

/* ── Die treibenden Farbkörper: fixiert, hinter allem ── */
.himmel { position: fixed; inset: 0; z-index: -1; overflow: hidden; filter: blur(70px) saturate(1.2); }

.kugel { position: absolute; border-radius: 50%; opacity: 0.55; will-change: transform; }

.kugel--a { width: 55vmax; height: 55vmax; left: -12vmax; top: -18vmax; background: radial-gradient(circle, var(--petrol), transparent 65%); }
.kugel--b { width: 42vmax; height: 42vmax; right: -10vmax; top: 24vh; background: radial-gradient(circle, var(--tuerkis), transparent 62%); opacity: 0.4; }
.kugel--c { width: 34vmax; height: 34vmax; left: 26vw; bottom: -16vmax; background: radial-gradient(circle, var(--glut), transparent 60%); opacity: 0.34; }

/* Sanftes Treiben auch ohne Scrollen */
@keyframes treiben-a { 50% { transform: translate(4vw, 3vh) scale(1.06); } }
@keyframes treiben-b { 50% { transform: translate(-3vw, -4vh) scale(0.95); } }
@keyframes treiben-c { 50% { transform: translate(-2vw, -2vh) scale(1.1); } }
.kugel--a { animation: treiben-a 26s ease-in-out infinite; }
.kugel--b { animation: treiben-b 22s ease-in-out infinite; }
.kugel--c { animation: treiben-c 30s ease-in-out infinite; }

/* Feines Korn über allem, gegen die glatte VerlaufFläche */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 50;
  pointer-events: none;
  opacity: 0.05;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* ── Kopf ── */
.kopf {
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem var(--rand);
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.kopf a { text-decoration: none; color: var(--gedimmt); }
.kopf a:first-child, .kopf a:hover { color: var(--schnee); }
.kopf nav { display: flex; gap: 1.5rem; }

/* ── Jeder Abschnitt ein Bildschirm ── */
.schirm {
  min-height: 100svh;
  display: grid;
  place-content: center;
  padding: clamp(5rem, 12vh, 8rem) var(--rand);
  text-align: center;
}

.schirm .klein {
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gedimmt);
  margin-bottom: 1.5rem;
}

/* Auftakt */
.eins h1 {
  max-width: 18ch;
  font-size: clamp(2rem, 5.8vw, 5rem);
  font-weight: 600;
  line-height: 1.12;
  letter-spacing: -0.02em;
}

.eins h1 em {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 400;
  color: var(--tuerkis);
  letter-spacing: 0;
}

.eins .zeile { margin-top: 2.5rem; font-size: 12px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--gedimmt); }
.eins .pfeil { margin-top: 4rem; color: var(--gedimmt); animation: nicken 2.4s ease-in-out infinite; }
@keyframes nicken { 50% { transform: translateY(0.5rem); } }

/* Position */
.zwei p.gross {
  max-width: 36ch;
  font-size: clamp(1.375rem, 3vw, 2.5rem);
  line-height: 1.35;
  font-weight: 400;
}

.zwei p.gross em { font-family: var(--serif); font-style: italic; color: var(--glut); }

/* ── Arbeiten: schwebende Karten, versetzt ── */
.arbeiten { padding: clamp(5rem, 12vh, 8rem) var(--rand); }

.arbeiten .klein { text-align: center; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gedimmt); margin-bottom: clamp(2.5rem, 6vw, 4.5rem); }

.schwarm {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.5rem, 4vw, 3.5rem);
  max-width: 66rem;
  margin: 0 auto;
}

.schwebe {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  background: rgba(238, 247, 246, 0.05);
  border: 1px solid rgba(238, 247, 246, 0.14);
  backdrop-filter: blur(6px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
  transition: translate 400ms cubic-bezier(0.22, 0.61, 0.36, 1), box-shadow 400ms;
}

.schwebe:nth-child(even) { translate: 0 clamp(2rem, 6vw, 4.5rem); }
.schwebe:hover { translate: 0 -0.4rem; box-shadow: 0 34px 80px rgba(0, 0, 0, 0.55); }
.schwebe:nth-child(even):hover { translate: 0 calc(clamp(2rem, 6vw, 4.5rem) - 0.4rem); }

.schwebe img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; display: block; opacity: 0.92; }

.schwebe figcaption {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1.1rem;
  font-size: 13px;
}

.schwebe .wer { font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
.schwebe .was { color: var(--gedimmt); text-align: right; }

/* ── Kunden: ein ruhiger Ring aus Namen ── */
.drei ul {
  max-width: 56rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem 2rem;
  font-size: clamp(1rem, 1.9vw, 1.375rem);
  color: var(--gedimmt);
}

.drei li:hover { color: var(--tuerkis); }

/* ── Disziplinen: drei Gläser ── */
.vier .reihe { display: grid; gap: 1.25rem; max-width: 70rem; }

.glas {
  border-radius: 18px;
  border: 1px solid rgba(238, 247, 246, 0.14);
  background: rgba(238, 247, 246, 0.05);
  backdrop-filter: blur(6px);
  padding: clamp(1.5rem, 3.5vw, 2.5rem);
  text-align: left;
}

.glas h3 { font-family: var(--serif); font-style: italic; font-weight: 400; font-size: clamp(1.5rem, 2.8vw, 2.25rem); color: var(--tuerkis); margin-bottom: 0.6rem; }
.glas p { font-size: 15px; color: rgba(238, 247, 246, 0.82); }

/* ── Team ── */
.fuenf ul { display: flex; flex-wrap: wrap; justify-content: center; gap: clamp(1.5rem, 3.5vw, 2.5rem); }

.fuenf li { width: clamp(9.5rem, 17vw, 12.5rem); }

.fuenf img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid rgba(238, 247, 246, 0.25);
  filter: grayscale(0.5);
  transition: filter 350ms, transform 350ms;
}

.fuenf li:hover img { filter: none; transform: scale(1.04); }
.fuenf .name { margin-top: 0.8rem; font-weight: 600; font-size: 15px; }
.fuenf .rolle { font-size: 12.5px; color: var(--gedimmt); }

.fuenf .saetze { max-width: 46rem; margin-top: clamp(2rem, 5vh, 3.5rem); display: grid; gap: 1rem; font-size: 15px; color: rgba(238, 247, 246, 0.82); }
.fuenf .saetze b { color: var(--schnee); }

/* ── Gründe: drei Sterne im Raum ── */
.sechs .reihe { display: grid; gap: clamp(2rem, 5vh, 3rem); max-width: 62rem; }

.stern { text-align: left; display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 1.25rem; align-items: start; }

.stern .kreis {
  width: 3rem; height: 3rem;
  border-radius: 50%;
  display: grid; place-items: center;
  border: 1px solid var(--tuerkis);
  color: var(--tuerkis);
  font-weight: 600;
  font-size: 13px;
  box-shadow: 0 0 22px rgba(25, 179, 166, 0.4);
}

.stern h3 { font-size: clamp(1.25rem, 2.4vw, 1.75rem); font-weight: 600; margin-bottom: 0.35rem; }
.stern p { font-size: 15px; color: rgba(238, 247, 246, 0.78); max-width: 56ch; }

/* ── FAQ ── */
.sieben .stapel { max-width: 46rem; text-align: left; display: grid; gap: 0.8rem; }

.sieben details {
  border-radius: 14px;
  border: 1px solid rgba(238, 247, 246, 0.14);
  background: rgba(238, 247, 246, 0.05);
  backdrop-filter: blur(6px);
}

.sieben summary { list-style: none; cursor: pointer; padding: 1rem 1.3rem; font-weight: 600; font-size: 15px; }
.sieben summary::-webkit-details-marker { display: none; }
.sieben details[open] summary { color: var(--tuerkis); }
.sieben details p { padding: 0 1.3rem 1.1rem; font-size: 14.5px; color: rgba(238, 247, 246, 0.78); }

/* ── Schluss ── */
.acht h2 { font-size: clamp(2rem, 5.4vw, 4.5rem); font-weight: 600; line-height: 1.05; letter-spacing: -0.02em; max-width: 16ch; }
.acht h2 em { font-family: var(--serif); font-style: italic; font-weight: 400; color: var(--glut); }

.acht a.knopf {
  display: inline-block;
  margin-top: 2.5rem;
  padding: 1em 2.6em;
  border-radius: 999px;
  border: 1px solid var(--tuerkis);
  color: var(--schnee);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 0 34px rgba(25, 179, 166, 0.35), inset 0 0 18px rgba(25, 179, 166, 0.12);
  transition: box-shadow 300ms, background 300ms;
}

.acht a.knopf:hover { background: rgba(25, 179, 166, 0.16); box-shadow: 0 0 54px rgba(25, 179, 166, 0.6), inset 0 0 24px rgba(25, 179, 166, 0.2); }
.acht .mail { display: block; margin-top: 1.25rem; color: var(--gedimmt); }

@media (min-width: 860px) {
  .vier .reihe { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 700px) {
  .schwarm { grid-template-columns: minmax(0, 1fr); }
  .schwebe:nth-child(even) { translate: 0; }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  return `
<div class="himmel" aria-hidden="true">
  <div class="kugel kugel--a"></div>
  <div class="kugel kugel--b"></div>
  <div class="kugel kugel--c"></div>
</div>

<header class="kopf">
  <a href="#oben">${i.marke}</a>
  <nav>
    <a href="#arbeiten">Arbeiten</a>
    <a href="#team">Team</a>
    <a href="#kontakt">Kontakt</a>
  </nav>
</header>

<section class="schirm eins" id="oben">
  <p class="klein">${i.gattung} — Köln</p>
  <h1>${i.claim.replace('worth watching', '<em>worth watching</em>')}</h1>
  <p class="zeile">${i.position.zeile.join(' — ')}</p>
  <p class="pfeil" aria-hidden="true">↓</p>
</section>

<section class="schirm zwei">
  <p class="klein">${i.position.auftakt}</p>
  <p class="gross">${i.position.satz.replace('Storytelling', '<em>Storytelling</em>')}</p>
</section>

<section class="arbeiten" id="arbeiten">
  <p class="klein">${i.arbeiten.label}</p>
  <div class="schwarm">
    ${i.arbeiten.liste.map((a) => `
    <figure class="schwebe">
      <img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" loading="lazy">
      <figcaption>
        <span class="wer">${a.kunde}</span>
        <span class="was">${a.titel} · ${a.formate.join(' · ')}</span>
      </figcaption>
    </figure>`).join('')}
  </div>
</section>

<section class="schirm drei" id="kunden">
  <p class="klein">${i.kunden.label}</p>
  <ul>${i.kunden.liste.map((k) => `<li>${k.name}</li>`).join('')}</ul>
</section>

<section class="schirm vier">
  <p class="klein">${i.disziplinen.label}</p>
  <div class="reihe">
    ${i.disziplinen.liste.map((d) => `<div class="glas"><h3>${d.titel}</h3><p>${d.text}</p></div>`).join('')}
  </div>
</section>

<section class="schirm fuenf" id="team">
  <p class="klein">${i.team.label} — ${i.team.titel}</p>
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

<section class="schirm sechs">
  <p class="klein">${i.gruende.titel}</p>
  <div class="reihe">
    ${i.gruende.liste.map((g) => `
    <div class="stern">
      <span class="kreis">${g.nr}</span>
      <div><h3>${g.titel}</h3><p>${g.text}</p></div>
    </div>`).join('')}
  </div>
</section>

<section class="schirm sieben">
  <p class="klein">${i.faq.label} — ${i.faq.titel}</p>
  <div class="stapel">
    ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
  </div>
</section>

<section class="schirm acht" id="kontakt">
  <h2>${i.schluss.auftakt} <em>${i.schluss.titel}</em></h2>
  <a class="knopf" href="mailto:${i.schluss.mail}">${i.schluss.knopf}</a>
  <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
</section>

<script>
(() => {
  // Die Farbkörper reagieren träge auf das Scrollen — mehr Tiefe als
  // Effekt. Bei reduzierter Bewegung stehen sie still (die Animationen
  // stoppt der globale Schalter, hier fällt auch die Scrollkopplung weg).
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const a = document.querySelector('.kugel--a');
  const b = document.querySelector('.kugel--b');
  const c = document.querySelector('.kugel--c');
  let ziel = 0, ist = 0, laeuft = false;
  addEventListener('scroll', () => {
    ziel = scrollY;
    if (!laeuft) { laeuft = true; requestAnimationFrame(tick); }
  }, { passive: true });
  const tick = () => {
    ist += (ziel - ist) * 0.06;
    a.style.translate = '0 ' + (ist * -0.06) + 'px';
    b.style.translate = '0 ' + (ist * 0.045) + 'px';
    c.style.translate = '0 ' + (ist * -0.03) + 'px';
    if (Math.abs(ziel - ist) > 0.5) requestAnimationFrame(tick);
    else laeuft = false;
  };
})();
</script>
`;
};

export default {
  name: 'Strom',
  idee: 'Abstrakter dunkler Raum: treibende Farbkörper, Glaskarten, Korn — jeder Abschnitt ein Bildschirm.',
  stil,
  koerper,
};
