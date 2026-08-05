/**
 * Entwurf 23 — Salz.
 *
 * Nach saltandpictures.de, aus Simons Aufnahme. Die Züge der Vorlage:
 *
 *   RANDLEISTE   Schmale kobaltblaue Leiste am linken Rand, fest, mit
 *                gedrehter Wortmarke oben und den Ankern PROJECTS /
 *                CULTURE / CONTACT untereinander.
 *   HELD         Vollbildvideo, darüber die Projektliste in riesiger
 *                kursiver Serife: geisterhaft durchscheinend, die
 *                überfahrene Zeile wird deckend weiß, rechts treten die
 *                Credits auf, und der Hintergrund wechselt zum Motiv
 *                des Projekts.
 *   CULTURE      Schwarze Fläche, das Riesenwort klebt beim Scrollen
 *                (sticky) und läuft über das Raster; Kacheln mit
 *                Pillen-Etiketten ([Bts], [Story]) und Jahreszahlen,
 *                Titel in Serife.
 *   KONTAKT      Ruhiger Schluss mit Claim in Serife und Mailzeile.
 *
 * Die Vorlage setzt eine elegante Kursivserife — Bodoni Moda steht
 * dafür bereit. Im Held läuft lewerk-hero.mp4; je Projektzeile
 * wechselt der Grund auf das Werkbild, weil eigene Projektvideos noch
 * fehlen (Platzhalter, bis Simon je Projekt einen Clip liefert).
 */

const stil = `
@font-face {
  font-family: 'Bodoni Moda';
  font-style: italic;
  font-weight: 400 500;
  font-display: swap;
  src: url('../src/styles/fonts/bodoni-moda-opsz11-italic-latin.woff2') format('woff2');
}
@font-face {
  font-family: 'Bodoni Moda';
  font-style: normal;
  font-weight: 400 500;
  font-display: swap;
  src: url('../src/styles/fonts/bodoni-moda-opsz11-normal-latin.woff2') format('woff2');
}

:root {
  --kobalt: #2743f5;
  --nacht: #0a0a0a;
  --weiss: #f4f2ee;
  --serif: 'Bodoni Moda', Didot, Georgia, serif;
  --grotesk: 'Helvetica Neue', Arial, sans-serif;
  --leiste: 46px;
}

body {
  background: var(--nacht);
  color: var(--weiss);
  font: 400 15px/1.5 var(--grotesk);
  margin-left: var(--leiste);
}

a { color: inherit; text-decoration: none; }

/* ── Die kobaltblaue Randleiste ── */
.leiste {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--leiste);
  z-index: 60;
  background: var(--kobalt);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
}

.leiste a, .leiste b {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 12px;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.leiste b { font-weight: 500; font-family: var(--serif); font-style: italic; font-size: 14px; }
.leiste nav { display: flex; flex-direction: column; gap: 26px; align-items: center; }
.leiste nav a { text-transform: uppercase; font-weight: 500; }
.leiste nav a:hover { opacity: 0.7; }

/* ── Held: Video + Projektliste ── */
.held { position: relative; min-height: 100svh; overflow: hidden; display: grid; align-content: center; }

.held video, .held .wechsel {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.held .wechsel { opacity: 0; transition: opacity 450ms ease; }
.held .wechsel.an { opacity: 1; }

.held::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0) 55%);
  pointer-events: none;
}

.projekte {
  position: relative;
  z-index: 1;
  padding: 90px clamp(1.5rem, 4vw, 4rem);
  display: grid;
  gap: 0.2em;
}

.projekt {
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  width: fit-content;
  font-family: var(--serif);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(2rem, 4.8vw, 4.25rem);
  line-height: 1.06;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: rgba(244, 242, 238, 0.34);
  -webkit-text-stroke: 1px rgba(244, 242, 238, 0.25);
  transition: color 260ms ease, -webkit-text-stroke-color 260ms ease;
}

.projekt:hover { color: var(--weiss); -webkit-text-stroke-color: transparent; }

.projekt .credits {
  font-family: var(--grotesk);
  font-style: normal;
  font-size: 12px;
  letter-spacing: 0.1em;
  line-height: 1.45;
  color: var(--weiss);
  opacity: 0;
  transform: translateX(-8px);
  transition: opacity 260ms ease, transform 320ms ease;
  white-space: nowrap;
}

.projekt:hover .credits { opacity: 1; transform: none; }

/* ── Culture: klebendes Riesenwort über dem Raster ── */
.culture { position: relative; padding: 12vh clamp(1rem, 2.5vw, 2.5rem) 10vh; }

.culture .wort {
  position: sticky;
  top: 4vh;
  z-index: 2;
  pointer-events: none;
  text-align: center;
  font-family: var(--grotesk);
  font-weight: 700;
  font-size: clamp(4.5rem, 15.5vw, 15rem);
  line-height: 0.8;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  mix-blend-mode: difference;
  margin-bottom: -0.35em;
}

.gitter { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: clamp(1rem, 2vw, 1.75rem); }

.kachel { display: grid; gap: 10px; align-content: start; margin-top: var(--rutsch, 0); }
.kachel img { width: 100%; aspect-ratio: var(--r, 3 / 4); object-fit: cover; filter: grayscale(1) contrast(1.08); transition: filter 350ms; }
.kachel:hover img { filter: none; }

.kachel .zeile { display: flex; justify-content: space-between; align-items: center; font-size: 12px; }
.kachel .pille {
  border: 1px solid var(--weiss);
  border-radius: 999px;
  padding: 2px 10px;
  letter-spacing: 0.04em;
}
.kachel .pille--blau { background: var(--kobalt); border-color: var(--kobalt); }
.kachel .jahr { letter-spacing: 0.08em; }
.kachel .titel { font-family: var(--serif); font-weight: 500; font-size: clamp(1rem, 1.6vw, 1.375rem); line-height: 1.2; text-transform: uppercase; letter-spacing: 0.02em; }

.kachel--2 { --rutsch: 14vh; }
.kachel--4 { --rutsch: 7vh; }

/* ── Info in der Sprache der Vorlage ── */
.info { padding: 10vh clamp(1.5rem, 4vw, 4rem); max-width: 74rem; }
.info .satz { font-family: var(--serif); font-style: italic; font-size: clamp(1.5rem, 3.2vw, 2.75rem); line-height: 1.25; max-width: 28ch; margin-bottom: 5vh; }
.info .kunden { display: flex; flex-wrap: wrap; gap: 0.4em 1.4em; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(244, 242, 238, 0.6); margin-bottom: 5vh; }
.info .kunden b { color: var(--weiss); font-weight: 500; }

.info .reihen { display: grid; gap: 0; border-top: 1px solid rgba(244, 242, 238, 0.25); }
.info details { border-bottom: 1px solid rgba(244, 242, 238, 0.25); }
.info summary { list-style: none; cursor: pointer; padding: 14px 0; display: flex; justify-content: space-between; gap: 1rem; }
.info summary::-webkit-details-marker { display: none; }
.info summary .t { font-family: var(--serif); font-weight: 500; text-transform: uppercase; letter-spacing: 0.03em; font-size: clamp(1rem, 1.8vw, 1.375rem); }
.info summary .z { font-size: 12px; letter-spacing: 0.1em; color: rgba(244, 242, 238, 0.55); }
.info details p { padding: 0 0 16px; max-width: 62ch; color: rgba(244, 242, 238, 0.75); }

/* ── Kontakt ── */
.kontakt { padding: 14vh clamp(1.5rem, 4vw, 4rem) 10vh; }
.kontakt .zeile { font-family: var(--serif); font-style: italic; font-weight: 500; font-size: clamp(2rem, 5.4vw, 4.75rem); line-height: 1.1; text-transform: uppercase; max-width: 14em; }
.kontakt a { border-bottom: 2px solid var(--kobalt); }
.kontakt a:hover { color: var(--kobalt); }
.kontakt .unten { margin-top: 8vh; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1rem; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(244, 242, 238, 0.55); }

@media (max-width: 860px) {
  .gitter { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .kachel--2, .kachel--4 { --rutsch: 0; }
  .projekt { font-size: clamp(1.5rem, 7vw, 2.5rem); flex-wrap: wrap; gap: 0.5rem; }
  .projekt .credits { display: none; }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  const jahr = ['2026', '2025', '2026', '2025', '2026', '2025'];
  const kultur = [
    ['bts/bts-halle.jpg', 'Bts', '2025', 'Setlicht in der Halle', '3 / 4'],
    ['bts/bts-loft.jpg', 'Story', '2026', 'Interview-Set im Loft', '3 / 4'],
    ['bts/bts-schnitt.jpg', 'Bts', '2025', 'Nachtschicht im Schnitt', '3 / 4'],
    ['bts/bts-studio.jpg', 'Bts', '2026', 'Studio-Aufbau', '3 / 4'],
    ['bts/bts-transporter.jpg', 'Story', '2025', 'Unterwegs zum Dreh', '3 / 4'],
    ['krafthaus/haus-drohne.jpg', 'Screening', '2026', 'Krafthaus von oben', '4 / 3'],
    ['bts/bts-buero.jpg', 'Story', '2026', 'Office Party', '3 / 4'],
    ['krafthaus/haus-02.jpg', 'Bts', '2025', 'Rheinauhafen', '4 / 3'],
  ];
  return `
<aside class="leiste">
  <b>${i.marke.toLowerCase().replace(' ', '&')}</b>
  <nav>
    <a href="#projekte">Projects</a>
    <a href="#culture">Culture</a>
    <a href="#kontakt">Contact</a>
  </nav>
</aside>

<section class="held" id="projekte">
  <video src="../public/videos/lewerk-hero.mp4" autoplay muted loop playsinline aria-hidden="true"></video>
  ${i.arbeiten.liste.map((a) => `<img class="wechsel" src="${b(a.bild)}" alt="" aria-hidden="true">`).join('')}
  <div class="projekte">
    ${i.arbeiten.liste.map((a, n) => `
    <a class="projekt" href="#" onclick="return false" data-nr="${n}">
      ${a.kunde}
      <span class="credits">${a.titel.toUpperCase()}<br>${a.formate.join(' · ')} — ${jahr[n]}</span>
    </a>`).join('')}
  </div>
</section>

<section class="culture" id="culture">
  <h2 class="wort">Culture</h2>
  <div class="gitter">
    ${kultur.map(([bild, pille, jahrK, titel, r], n) => `
    <figure class="kachel kachel--${(n % 4) + 1}" style="--r: ${r}">
      <img src="${b(bild)}" alt="${titel}" loading="lazy">
      <span class="zeile"><span class="pille ${pille === 'Bts' ? 'pille--blau' : ''}">${pille}</span><span class="jahr">[${jahrK}]</span></span>
      <p class="titel">${titel}</p>
    </figure>`).join('')}
  </div>
</section>

<section class="info">
  <p class="satz">${i.claim} — ${i.position.auftakt} ${i.position.satz}</p>
  <p class="kunden">${i.kunden.liste.map((k) => `<b>${k.name}</b>`).join('<span>·</span>')}</p>
  <div class="reihen">
    ${i.disziplinen.liste.map((d) => `
    <details><summary><span class="t">${d.titel}</span><span class="z">Service</span></summary><p>${d.text}</p></details>`).join('')}
    ${i.gruende.liste.map((g) => `
    <details><summary><span class="t">${g.titel}</span><span class="z">[${g.nr}]</span></summary><p>${g.text}</p></details>`).join('')}
    ${i.team.liste.map((m) => `
    <details><summary><span class="t">${m.name}</span><span class="z">Team</span></summary><p>${m.rolle.join(' · ')}</p></details>`).join('')}
    ${i.faq.liste.map((f) => `
    <details><summary><span class="t">${f.f}</span><span class="z">FAQ</span></summary><p>${f.a}</p></details>`).join('')}
  </div>
</section>

<section class="kontakt" id="kontakt">
  <p class="zeile">${i.schluss.auftakt} ${i.schluss.titel} — <a href="mailto:${i.schluss.mail}">${i.schluss.mail}</a></p>
  <p class="unten">
    <span>${i.marke} — ${i.gattung}, Köln</span>
    <span>${i.team.bloecke[1].auftakt}</span>
    <span>${i.position.zeile.slice(0, 3).join(' · ')}</span>
  </p>
</section>

<script>
(function () {
  /* Der Grund wechselt zur überfahrenen Projektzeile. Platzhalter mit
     Standbildern — die Vorlage blendet je Projekt ein eigenes Video um. */
  var wechsel = document.querySelectorAll('.wechsel');
  document.querySelectorAll('[data-nr]').forEach(function (p) {
    p.addEventListener('pointerenter', function () {
      wechsel.forEach(function (w, n) { w.classList.toggle('an', String(n) === p.dataset.nr); });
    });
    p.addEventListener('pointerleave', function () {
      wechsel.forEach(function (w) { w.classList.remove('an'); });
    });
  });
})();
</script>
`;
};

export default {
  name: 'Salz',
  idee: 'Nach saltandpictures.de: kobaltblaue Randleiste, Projektliste in Geister-Serife über dem Video, klebendes CULTURE-Wort.',
  stil,
  koerper,
};
