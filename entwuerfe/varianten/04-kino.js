/**
 * Entwurf 04 — Kinosaal.
 *
 * Schule: die dunklen Filmproduktions-Seiten der Awwwards-Jahrgänge
 * (Bonhomme, Locomotive und ihre Verwandten): fast schwarzer Raum, der
 * Claim als Untertitelzeile, die Arbeiten als querlaufender Filmstreifen,
 * alles Licht kommt aus den Bildern. Für ein Videostudio die
 * naheliegendste Erzählung: Die Seite ist der Saal, die Arbeit die
 * Leinwand.
 */

const stil = `
:root {
  --saal: #0b0d0e;
  --leinwand: #101314;
  --licht: #f2efe9;
  --gedimmt: rgba(242, 239, 233, 0.55);
  --linie: rgba(242, 239, 233, 0.14);
  --akzent: #d3fb51;
  --grotesk: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
  --rand: clamp(1.25rem, 3.5vw, 3rem);
}

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

body {
  background: var(--saal);
  color: var(--licht);
  font: 400 16px/1.6 var(--grotesk);
}

/* ── Kopf: schwebend, minimal ── */
.kopf {
  position: fixed;
  inset: 0 0 auto;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem var(--rand);
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  mix-blend-mode: difference;
}

.kopf a { text-decoration: none; }
.kopf a:hover { color: var(--akzent); }
.kopf nav { display: flex; gap: 1.75rem; }

/* ── Saal: Letterbox-Hero ── */
.saal {
  min-height: 100svh;
  display: grid;
  place-items: center;
  position: relative;
  padding: var(--rand);
}

.saal__kasten {
  width: min(100%, 64rem);
  aspect-ratio: 21 / 9;
  background: var(--leinwand);
  overflow: hidden;
  position: relative;
}

.saal__kasten img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
}

/* Der Claim als Untertitel — mittig unter der Bildmitte, wie eingebrannt */
.saal__untertitel {
  position: absolute;
  left: 50%;
  bottom: 8%;
  transform: translateX(-50%);
  width: min(88%, 46em);
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.45;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.9);
  text-wrap: balance;
}

.saal__zeile {
  position: absolute;
  bottom: calc(var(--rand) * 0.75);
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 var(--rand);
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gedimmt);
}

/* ── Position: eine Texttafel ── */
.tafel {
  padding: clamp(5rem, 12vw, 9rem) var(--rand);
  text-align: center;
}

.tafel .auftakt { color: var(--akzent); font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 1.25rem; }

.tafel .satz {
  max-width: 30ch;
  margin: 0 auto;
  font-size: clamp(1.5rem, 3.6vw, 3rem);
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.01em;
  text-wrap: balance;
}

.tafel .zeile { margin-top: 2rem; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gedimmt); }

/* ── Filmstreifen: Arbeiten quer scrollend ── */
.streifen { border-block: 1px solid var(--linie); padding-block: clamp(2rem, 5vw, 3.5rem); }

.streifen h2 {
  padding: 0 var(--rand) clamp(1.5rem, 3vw, 2.5rem);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gedimmt);
}

.streifen h2 b { color: var(--licht); font-weight: 600; }

.spur {
  display: flex;
  gap: clamp(1rem, 2vw, 2rem);
  overflow-x: auto;
  padding: 0 var(--rand) 1rem;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color: var(--akzent) transparent;
}

.kader {
  flex: none;
  width: clamp(16rem, 32vw, 26rem);
  scroll-snap-align: start;
}

.kader figure { position: relative; overflow: hidden; background: var(--leinwand); }
.kader img { width: 100%; aspect-ratio: var(--r); object-fit: cover; transition: transform 500ms cubic-bezier(0.22,0.61,0.36,1), opacity 300ms; opacity: 0.88; }
.kader:hover img { transform: scale(1.04); opacity: 1; }

/* Lochstreifen oben und unten wie am Filmrand */
.kader figure::before, .kader figure::after {
  content: '';
  position: absolute;
  left: 0; right: 0;
  height: 8px;
  background-image: radial-gradient(circle at 6px 4px, var(--saal) 2.6px, transparent 3px);
  background-size: 16px 8px;
  z-index: 1;
}
.kader figure::before { top: 0; }
.kader figure::after { bottom: 0; }

.kader figcaption { display: flex; justify-content: space-between; gap: 1rem; padding-top: 0.8rem; font-size: 12.5px; }
.kader .wer { font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
.kader .was { color: var(--gedimmt); text-align: right; }

/* ── Kunden: Abspannrolle ── */
.abspann { padding: clamp(4rem, 9vw, 7rem) var(--rand); text-align: center; }
.abspann h2 { font-size: 12px; font-weight: 400; letter-spacing: 0.24em; text-transform: uppercase; color: var(--gedimmt); margin-bottom: 2rem; }
.abspann ul { display: grid; gap: 0.6rem; }
.abspann li { font-size: clamp(1.25rem, 2.6vw, 2rem); font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
.abspann li:hover { color: var(--akzent); }

/* ── Disziplinen: drei Leuchtkästen ── */
.faecher { padding: 0 var(--rand) clamp(4rem, 9vw, 7rem); display: grid; gap: 1px; background: transparent; }

.fach {
  position: relative;
  overflow: hidden;
  background: var(--leinwand);
  border: 1px solid var(--linie);
  padding: clamp(1.5rem, 3.5vw, 2.5rem);
  min-height: 18rem;
  display: grid;
  align-content: end;
  gap: 0.8rem;
}

.fach img {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0.28;
  filter: grayscale(0.6);
  transition: opacity 400ms, filter 400ms;
}

.fach:hover img { opacity: 0.55; filter: none; }
.fach h3 { position: relative; font-size: clamp(1.5rem, 2.6vw, 2.25rem); font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; }
.fach p { position: relative; max-width: 46ch; color: rgba(242, 239, 233, 0.8); font-size: 15px; }

/* ── Team: Setfoto-Reihe ── */
.crew { padding: 0 var(--rand) clamp(4rem, 9vw, 7rem); }
.crew h2 { font-size: 12px; font-weight: 400; letter-spacing: 0.24em; text-transform: uppercase; color: var(--gedimmt); margin-bottom: 2rem; }
.crew h2 b { color: var(--licht); }

.crew ul { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(1rem, 2.4vw, 2rem); }
.crew img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; filter: grayscale(1) brightness(0.92); transition: filter 350ms; }
.crew li:hover img { filter: none; }
.crew .name { margin-top: 0.7rem; font-weight: 600; }
.crew .rolle { font-size: 13px; color: var(--gedimmt); }

.crew .saetze { margin-top: clamp(2.5rem, 5vw, 4rem); display: grid; gap: 1.25rem 4rem; }
.crew .saetze p { max-width: 44ch; color: rgba(242, 239, 233, 0.8); }
.crew .saetze b { color: var(--licht); }

/* ── Gründe: drei Akte ── */
.akte { border-top: 1px solid var(--linie); }

.akt {
  display: grid;
  gap: 0.75rem;
  padding: clamp(1.75rem, 4vw, 3rem) var(--rand);
  border-bottom: 1px solid var(--linie);
}

.akt .nr { color: var(--akzent); font-size: 12px; letter-spacing: 0.24em; text-transform: uppercase; }
.akt h3 { font-size: clamp(1.5rem, 3.2vw, 2.5rem); font-weight: 600; letter-spacing: -0.01em; }
.akt p { max-width: 56ch; color: rgba(242, 239, 233, 0.72); }

/* ── FAQ ── */
.fragen { padding: clamp(4rem, 9vw, 7rem) var(--rand); max-width: 56rem; margin: 0 auto; }
.fragen h2 { font-size: 12px; font-weight: 400; letter-spacing: 0.24em; text-transform: uppercase; color: var(--gedimmt); margin-bottom: 2rem; }
.fragen details { border-top: 1px solid var(--linie); }
.fragen details:last-of-type { border-bottom: 1px solid var(--linie); }
.fragen summary { list-style: none; cursor: pointer; padding: 1.1rem 2rem 1.1rem 0; position: relative; font-weight: 600; font-size: clamp(1rem, 1.7vw, 1.25rem); }
.fragen summary::-webkit-details-marker { display: none; }
.fragen summary::after { content: '›'; position: absolute; right: 0.25rem; top: 50%; transform: translateY(-50%) rotate(90deg); color: var(--akzent); transition: transform 200ms; }
.fragen details[open] summary::after { transform: translateY(-50%) rotate(-90deg); }
.fragen details p { padding-bottom: 1.25rem; max-width: 60ch; color: rgba(242, 239, 233, 0.72); }

/* ── Schluss ── */
.ende { text-align: center; padding: clamp(5rem, 12vw, 10rem) var(--rand); }
.ende .auftakt { font-size: 13px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--gedimmt); }
.ende h2 { font-size: clamp(2rem, 6vw, 4.5rem); font-weight: 600; letter-spacing: -0.01em; text-transform: uppercase; margin: 0.5rem 0 2rem; }
.ende a.knopf {
  display: inline-block;
  padding: 1em 2.4em;
  border-radius: 999px;
  background: var(--akzent);
  color: #0b0d0e;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
}
.ende a.knopf:hover { filter: brightness(1.1); }
.ende .mail { display: block; margin-top: 1.25rem; color: var(--gedimmt); }

@media (min-width: 900px) {
  .faecher { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(1rem, 2vw, 1.5rem); }
  .abspann ul { gap: 0.8rem; }
  .crew ul { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .crew .saetze { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .akt { grid-template-columns: 10rem minmax(0, 1fr); align-items: baseline; }
  .akt h3 { grid-column: 2; }
  .akt p { grid-column: 2; }
  .akt .nr { grid-row: 1 / span 2; }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  return `
<header class="kopf">
  <a href="#oben"><b>${i.marke}</b></a>
  <nav>
    <a href="#arbeiten">Arbeiten</a>
    <a href="#kunden">Kunden</a>
    <a href="#team">Team</a>
    <a href="#kontakt">Kontakt</a>
  </nav>
</header>

<section class="saal" id="oben">
  <div class="saal__kasten">
    <img src="${b('bts/bts-halle.jpg')}" alt="Setfoto: Produktionshalle im Gegenlicht">
    <p class="saal__untertitel">${i.claim}</p>
  </div>
  <p class="saal__zeile"><span>${i.gattung}</span><span>Köln</span><span>Scroll</span></p>
</section>

<section class="tafel">
  <p class="auftakt">${i.position.auftakt}</p>
  <p class="satz">${i.position.satz}</p>
  <p class="zeile">${i.position.zeile.join(' — ')}</p>
</section>

<section class="streifen" id="arbeiten">
  <h2><b>${i.arbeiten.label}</b> — seitwärts scrollen</h2>
  <div class="spur">
    ${i.arbeiten.liste.map((a) => `
    <div class="kader">
      <figure><img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" style="--r: ${a.ratio}" loading="lazy"></figure>
      <figcaption>
        <span class="wer">${a.kunde}</span>
        <span class="was">${a.titel}<br>${a.formate.length > 1 ? 'Formate' : 'Format'} ${a.formate.join(' · ')}</span>
      </figcaption>
    </div>`).join('')}
  </div>
</section>

<section class="abspann" id="kunden">
  <h2>${i.kunden.label}</h2>
  <ul>${i.kunden.liste.map((k) => `<li>${k.name}</li>`).join('')}</ul>
</section>

<section>
  <h2 class="crew" style="padding-bottom:0"><b>${i.disziplinen.label}</b></h2>
  <div class="faecher" style="margin-top:1.5rem">
    ${i.disziplinen.liste.map((d) => `
    <div class="fach">
      <img src="${b(d.bild)}" alt="" aria-hidden="true" loading="lazy">
      <h3>${d.titel}</h3>
      <p>${d.text}</p>
    </div>`).join('')}
  </div>
</section>

<section class="crew" id="team">
  <h2>${i.team.label} — <b>${i.team.titel}</b></h2>
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

<section class="akte">
  ${i.gruende.liste.map((g) => `
  <div class="akt">
    <span class="nr">Akt ${g.nr} — ${i.gruende.titel}</span>
    <h3>${g.titel}</h3>
    <p>${g.text}</p>
  </div>`).join('')}
</section>

<section class="fragen">
  <h2>${i.faq.label} — ${i.faq.titel}</h2>
  ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
</section>

<section class="ende" id="kontakt">
  <p class="auftakt">${i.schluss.auftakt}</p>
  <h2>${i.schluss.titel}</h2>
  <a class="knopf" href="mailto:${i.schluss.mail}">${i.schluss.knopf} →</a>
  <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
</section>
`;
};

export default {
  name: 'Kinosaal',
  idee: 'Dunkler Saal: Letterbox-Hero mit dem Claim als Untertitel, Arbeiten als Filmstreifen, Kunden als Abspann.',
  stil,
  koerper,
};
