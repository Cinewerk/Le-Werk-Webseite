/**
 * Entwurf 02 — Brutalistischer Index.
 *
 * Schule: die textbasierten Portfolio-Seiten der Awwwards-Jahrgänge
 * (Actual Source, studio.build, unzählige SOTD-Portfolios): weißer Grund,
 * eine einzige Groteske in zwei Größen, alles ist Liste, alles hat eine
 * Linie. Bilder gibt es erst beim Überfahren — die Arbeit ist ein Index,
 * kein Schaufenster. Das Bild folgt dem Zeiger.
 */

const stil = `
:root {
  --tinte: #000;
  --papier: #fff;
  --grau: #757575;
  --grotesk: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --rand: clamp(0.75rem, 2vw, 1.5rem);
}

body {
  background: var(--papier);
  color: var(--tinte);
  font: 400 15px/1.5 var(--grotesk);
}

::selection { background: #000; color: #fff; }

/* ── Kopf: eine Zeile, wie ein Briefkopf ── */
.kopf {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: var(--rand);
  border-bottom: 2px solid var(--tinte);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.kopf b { font-weight: 700; }
.kopf a { text-decoration: none; }
.kopf a:hover { text-decoration: underline; }
.kopf nav { display: flex; gap: 1.5rem; }

/* ── Claim: so groß wie die Seite ── */
.claim {
  padding: var(--rand);
  border-bottom: 2px solid var(--tinte);
}

.claim h1 {
  font-size: clamp(2rem, 7.2vw, 7rem);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  text-wrap: balance;
}

.claim .unten {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 2rem;
  margin-top: clamp(1.5rem, 4vw, 3rem);
  font-size: 13px;
  text-transform: uppercase;
  color: var(--grau);
}

/* ── Abschnittsköpfe: Nummer + Titel, immer gleich ── */
.abschnitt { border-bottom: 2px solid var(--tinte); }

.abschnitt > h2 {
  display: flex;
  gap: 1rem;
  padding: 0.6rem var(--rand);
  border-bottom: 1px solid var(--tinte);
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.abschnitt > h2 .nr { color: var(--grau); font-variant-numeric: tabular-nums; }

/* ── Der Index: Arbeiten als Zeilen, Bild folgt dem Zeiger ── */
.index li { border-bottom: 1px solid var(--tinte); }
.index li:last-child { border-bottom: 0; }

.index .zeile {
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: baseline;
  padding: 1rem var(--rand);
  cursor: default;
  transition: background 120ms linear, color 120ms linear;
}

.index .zeile:hover { background: var(--tinte); color: var(--papier); }

.index .nr { font-size: 12px; color: var(--grau); font-variant-numeric: tabular-nums; }
.index .zeile:hover .nr { color: rgba(255, 255, 255, 0.6); }

.index .wer {
  font-size: clamp(1.5rem, 4.2vw, 3.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  line-height: 1;
}

.index .was { font-size: 13px; text-transform: uppercase; text-align: right; }

/* Das wandernde Bild */
.zeigerbild {
  position: fixed;
  z-index: 30;
  width: clamp(12rem, 22vw, 20rem);
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -50%) rotate(2deg);
  transition: opacity 140ms linear;
}

.zeigerbild.an { opacity: 1; }
.zeigerbild img { width: 100%; aspect-ratio: var(--r, 4 / 5); object-fit: cover; }

/* ── Kunden: dichte Tabelle ── */
.kunden ol {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.kunden li {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.7rem var(--rand);
  border-bottom: 1px solid var(--tinte);
  border-right: 1px solid var(--tinte);
  font-size: clamp(1rem, 1.8vw, 1.5rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.01em;
}

.kunden li::after { content: '↗'; font-weight: 400; color: var(--grau); }
.kunden li:hover { background: #f0f0f0; }

/* ── Disziplinen: drei Spalten mit Linien ── */
.machen ol { display: grid; }

.machen li { padding: var(--rand); border-bottom: 1px solid var(--tinte); }
.machen li:last-child { border-bottom: 0; }

.machen h3 {
  font-size: clamp(1.75rem, 3.6vw, 3rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
}

.machen p { max-width: 44ch; color: #333; }

/* ── Team: Tabelle mit kleinen Bildern ── */
.team li {
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  padding: 0.6rem var(--rand);
  border-bottom: 1px solid var(--tinte);
}

.team li:last-of-type { border-bottom: 0; }

.team img {
  width: 4.5rem;
  aspect-ratio: 1;
  object-fit: cover;
  filter: grayscale(1) contrast(1.1);
}

.team li:hover img { filter: none; }

.team .name { font-size: clamp(1.125rem, 2.4vw, 2rem); font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em; }
.team .rolle { font-size: 13px; text-transform: uppercase; color: var(--grau); text-align: right; }

.team .saetze { border-top: 1px solid var(--tinte); }
.team .saetze p { padding: 1rem var(--rand); max-width: 64ch; }
.team .saetze p + p { border-top: 1px solid var(--tinte); }
.team .saetze b { text-transform: uppercase; }

/* ── Gründe: nummerierte Riesen ── */
.gruende li { padding: var(--rand); border-bottom: 1px solid var(--tinte); display: grid; gap: 0.75rem; }
.gruende li:last-child { border-bottom: 0; }

.gruende h3 {
  font-size: clamp(1.75rem, 4.8vw, 4rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
}

.gruende h3 .nr { color: var(--grau); margin-right: 0.4em; }
.gruende p { max-width: 58ch; color: #333; }

/* ── FAQ ── */
.faq details { border-bottom: 1px solid var(--tinte); }
.faq details:last-of-type { border-bottom: 0; }

.faq summary {
  list-style: none;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem var(--rand);
  font-size: clamp(1.0625rem, 2vw, 1.5rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  cursor: pointer;
}

.faq summary::-webkit-details-marker { display: none; }
.faq summary::after { content: '+'; }
.faq details[open] summary::after { content: '–'; }
.faq details p { padding: 0 var(--rand) 1.25rem; max-width: 64ch; color: #333; }

/* ── Schluss ── */
.schluss { padding: var(--rand); }

.schluss a.riese {
  display: block;
  text-decoration: none;
  font-size: clamp(2.5rem, 11.5vw, 11rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.045em;
  text-transform: uppercase;
  padding: clamp(2rem, 6vw, 5rem) 0;
}

.schluss a.riese:hover { -webkit-text-stroke: 2px #000; color: #fff; }

.schluss .fuss {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 2rem;
  border-top: 2px solid var(--tinte);
  padding-top: 0.75rem;
  font-size: 13px;
  text-transform: uppercase;
  color: var(--grau);
}

.schluss .fuss a { color: var(--tinte); }

@media (min-width: 900px) {
  .kunden ol { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .machen ol { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .machen li { border-bottom: 0; border-right: 1px solid var(--tinte); }
  .machen li:last-child { border-right: 0; }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  return `
<header class="kopf">
  <b>${i.marke}®</b>
  <span>${i.gattung} — Köln</span>
  <nav>
    <a href="#arbeiten">Arbeiten</a>
    <a href="#kunden">Kunden</a>
    <a href="#team">Team</a>
    <a href="#kontakt">Kontakt</a>
  </nav>
</header>

<section class="claim">
  <h1>${i.claim}</h1>
  <p class="unten">
    <span>${i.position.auftakt} ${i.position.satz}</span>
    <span>${i.position.zeile.join(' / ')}</span>
  </p>
</section>

<section class="abschnitt index" id="arbeiten">
  <h2><span class="nr">01</span>${i.arbeiten.label}</h2>
  <ol>
    ${i.arbeiten.liste.map((a, n) => `
    <li>
      <span class="zeile" data-bild="${b(a.bild)}" data-r="${a.ratio}">
        <span class="nr">${String(n + 1).padStart(2, '0')}</span>
        <span class="wer">${a.kunde}</span>
        <span class="was">${a.titel}<br>${a.formate.length > 1 ? 'Formate' : 'Format'} ${a.formate.join(' · ')}</span>
      </span>
    </li>`).join('')}
  </ol>
</section>
<div class="zeigerbild" aria-hidden="true"><img alt=""></div>

<section class="abschnitt kunden" id="kunden">
  <h2><span class="nr">02</span>${i.kunden.label}</h2>
  <ol>${i.kunden.liste.map((k) => `<li>${k.name}</li>`).join('')}</ol>
</section>

<section class="abschnitt machen">
  <h2><span class="nr">03</span>${i.disziplinen.label}</h2>
  <ol>
    ${i.disziplinen.liste.map((d) => `<li><h3>${d.titel}</h3><p>${d.text}</p></li>`).join('')}
  </ol>
</section>

<section class="abschnitt team" id="team">
  <h2><span class="nr">04</span>${i.team.label} — ${i.team.titel}</h2>
  <ol>
    ${i.team.liste.map((m) => `
    <li>
      <img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy">
      <span class="name">${m.name}</span>
      <span class="rolle">${m.rolle.join(' / ')}</span>
    </li>`).join('')}
  </ol>
  <div class="saetze">
    ${i.team.bloecke.map((x) => `<p><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
  </div>
</section>

<section class="abschnitt gruende">
  <h2><span class="nr">05</span>${i.gruende.titel}</h2>
  <ol>
    ${i.gruende.liste.map((g) => `
    <li><h3><span class="nr">${g.nr}</span>${g.titel}</h3><p>${g.text}</p></li>`).join('')}
  </ol>
</section>

<section class="abschnitt faq">
  <h2><span class="nr">06</span>${i.faq.label} — ${i.faq.titel}</h2>
  ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
</section>

<section class="schluss" id="kontakt">
  <a class="riese" href="mailto:${i.schluss.mail}">${i.schluss.auftakt} ${i.schluss.titel} →</a>
  <p class="fuss">
    <span>${i.marke} — ${i.gattung}</span>
    <a href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
    <span>${i.schluss.knopf}: einfach schreiben</span>
  </p>
</section>

<script>
(() => {
  const karte = document.querySelector('.zeigerbild');
  const bild = karte.querySelector('img');
  document.querySelectorAll('[data-bild]').forEach((z) => {
    z.addEventListener('pointerenter', () => {
      bild.src = z.dataset.bild;
      karte.style.setProperty('--r', z.dataset.r);
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
  name: 'Index',
  idee: 'Brutalistisch: weißer Grund, eine Groteske, alles ist Liste — Bilder erst beim Überfahren, unter dem Zeiger.',
  stil,
  koerper,
};
