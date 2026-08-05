/**
 * Entwurf 03 — Das Journal.
 *
 * Schule: die editorialen Awwwards-Seiten um Obys und die
 * Readymag-Ästhetik — eine Agenturseite, die sich wie eine Zeitschrift
 * liest: Papierton, Serifen-Fließtext, sichtbare Spaltenlinien,
 * Kapitälchen-Marginalien, Initialen, Fußnoten. Die Arbeiten sind
 * "Ausgaben", das Team ist das "Impressum".
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
  --papier: #f6f3ec;
  --tinte: #1c1a16;
  --linie: #c9c3b4;
  --rot: #a33420;
  --serif: 'Bodoni Moda', Didot, Georgia, serif;
  --klein: 11px;
  --rand: clamp(1rem, 3vw, 2.5rem);
}

body {
  background: var(--papier);
  color: var(--tinte);
  font: 400 17px/1.6 var(--serif);
}

.blatt { max-width: 76rem; margin: 0 auto; border-inline: 1px solid var(--linie); }

/* ── Zeitungskopf ── */
.kopf { text-align: center; padding: 2.5rem var(--rand) 1.25rem; border-bottom: 3px double var(--tinte); }

.kopf .oben {
  display: flex;
  justify-content: space-between;
  font-size: var(--klein);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.kopf h1 {
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 500;
  line-height: 0.9;
  letter-spacing: -0.01em;
}

.kopf .unter {
  margin-top: 1rem;
  font-style: italic;
  font-size: clamp(1rem, 1.6vw, 1.25rem);
}

/* ── Marginalspalten-Raster ── */
.artikel {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  border-bottom: 1px solid var(--linie);
}

.artikel .rand {
  padding: 1.25rem var(--rand);
  font-size: var(--klein);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--rot);
  border-bottom: 1px solid var(--linie);
}

.artikel .haupt { padding: clamp(1.5rem, 4vw, 3rem) var(--rand); }

/* ── Leitartikel ── */
.leit .haupt p:first-child {
  font-size: clamp(1.5rem, 3.2vw, 2.5rem);
  line-height: 1.25;
  text-wrap: pretty;
}

.leit .haupt p:first-child::first-letter {
  float: left;
  font-size: 3.2em;
  line-height: 0.8;
  padding: 0.08em 0.12em 0 0;
  color: var(--rot);
}

.leit .haupt em { font-style: italic; }

.leit .zeile {
  margin-top: 1.5rem;
  font-size: var(--klein);
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #6d675a;
}

/* ── Arbeiten als Ausgaben ── */
.hefte { display: grid; }

.heft {
  display: grid;
  gap: 1.25rem;
  padding: clamp(1.5rem, 4vw, 2.5rem) var(--rand);
  border-bottom: 1px solid var(--linie);
  align-items: start;
}

.heft:last-child { border-bottom: 0; }

.heft img { width: 100%; aspect-ratio: 3 / 2; object-fit: cover; filter: sepia(0.14); }

.heft .nr {
  font-size: var(--klein);
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--rot);
}

.heft h3 { font-size: clamp(1.75rem, 3.4vw, 2.75rem); font-weight: 500; line-height: 1.05; margin: 0.35rem 0; }
.heft .was { font-style: italic; }
.heft .fmt { margin-top: 0.5rem; font-size: 13px; color: #6d675a; }

/* ── Kunden als Fließtext-Zeile, mit Kommas wie in einem Impressum ── */
.kundenzeile { padding: clamp(1.5rem, 4vw, 2.5rem) var(--rand); font-size: clamp(1.25rem, 2.6vw, 2rem); line-height: 1.5; font-style: italic; }
.kundenzeile b { font-style: normal; font-weight: 500; }

/* ── Disziplinen: drei Spalten wie Zeitungsspalten ── */
.spalten { display: grid; }
.spalten > div { padding: clamp(1.25rem, 3vw, 2rem) var(--rand); border-bottom: 1px solid var(--linie); }
.spalten > div:last-child { border-bottom: 0; }

.spalten h3 {
  font-size: clamp(1.5rem, 2.6vw, 2.25rem);
  font-weight: 500;
  margin-bottom: 0.6rem;
}

.spalten h3 .zaehler { color: var(--rot); font-style: italic; margin-right: 0.3em; }
.spalten p { font-size: 15.5px; line-height: 1.65; }

/* ── Team als Impressum ── */
.impressum { display: grid; gap: 0; }

.person {
  display: grid;
  grid-template-columns: 5.5rem minmax(0, 1fr);
  gap: 1.25rem;
  align-items: center;
  padding: 1rem var(--rand);
  border-bottom: 1px solid var(--linie);
}

.person img { width: 5.5rem; aspect-ratio: 1; object-fit: cover; border-radius: 50%; filter: grayscale(1); }
.person:hover img { filter: none; }
.person .name { font-size: clamp(1.25rem, 2.2vw, 1.75rem); font-weight: 500; }
.person .rolle { font-style: italic; font-size: 15px; color: #6d675a; }

.notizen { padding: clamp(1.25rem, 3vw, 2rem) var(--rand); }
.notizen p { max-width: 58ch; margin-bottom: 1rem; font-size: 16px; }
.notizen b { font-weight: 500; }

/* ── Gründe als nummerierte Thesen ── */
.thesen li { padding: clamp(1.25rem, 3vw, 2rem) var(--rand); border-bottom: 1px solid var(--linie); }
.thesen li:last-child { border-bottom: 0; }

.thesen h3 { font-size: clamp(1.75rem, 3.6vw, 3rem); font-weight: 500; line-height: 1.1; }
.thesen h3 i { color: var(--rot); }
.thesen p { max-width: 56ch; margin-top: 0.6rem; font-size: 16px; }

/* ── FAQ als Leserfragen ── */
.faq details { border-bottom: 1px solid var(--linie); }
.faq details:last-of-type { border-bottom: 0; }

.faq summary {
  list-style: none;
  padding: 1.1rem var(--rand);
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-style: italic;
  cursor: pointer;
  position: relative;
}

.faq summary::-webkit-details-marker { display: none; }
.faq summary::before { content: 'F.'; color: var(--rot); font-style: normal; margin-right: 0.5em; }
.faq details p { padding: 0 var(--rand) 1.25rem; max-width: 62ch; font-size: 16px; }
.faq details p::before { content: 'A.'; color: var(--rot); margin-right: 0.5em; font-weight: 500; }

/* ── Schluss als Kleinanzeige ── */
.schluss { text-align: center; padding: clamp(3rem, 8vw, 6rem) var(--rand); }

.schluss .rahmen {
  display: inline-block;
  border: 3px double var(--tinte);
  padding: clamp(2rem, 5vw, 3.5rem) clamp(2.5rem, 7vw, 6rem);
}

.schluss .auftakt { font-style: italic; font-size: clamp(1.25rem, 2.4vw, 1.75rem); }
.schluss h2 { font-size: clamp(2rem, 5.5vw, 4rem); font-weight: 500; line-height: 1; margin: 0.4rem 0 1.5rem; }

.schluss a.knopf {
  display: inline-block;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid var(--tinte);
  padding: 0.9em 2.2em;
}

.schluss a.knopf:hover { background: var(--tinte); color: var(--papier); }
.schluss .mail { display: block; margin-top: 1.25rem; font-style: italic; }

@media (min-width: 860px) {
  .artikel { grid-template-columns: 14rem minmax(0, 1fr); }
  .artikel .rand { border-bottom: 0; border-right: 1px solid var(--linie); }
  .heft { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); }
  .heft:nth-child(even) .bildzelle { order: 2; }
  .spalten { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .spalten > div { border-bottom: 0; border-right: 1px solid var(--linie); }
  .spalten > div:last-child { border-right: 0; }
  .impressum { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .person:nth-child(odd) { border-right: 1px solid var(--linie); }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  const heute = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
  return `
<div class="blatt">
  <header class="kopf">
    <p class="oben"><span>Ausgabe Köln</span><span>${heute}</span><span>Gegründet von Filmemachern</span></p>
    <h1>${i.marke}</h1>
    <p class="unter">${i.claim}</p>
  </header>

  <section class="artikel leit" id="oben">
    <p class="rand">Leitartikel</p>
    <div class="haupt">
      <p>${i.position.auftakt} <em>${i.position.satz}</em></p>
      <p class="zeile">${i.position.zeile.join(' · ')}</p>
    </div>
  </section>

  <section class="artikel" id="arbeiten">
    <p class="rand">${i.arbeiten.label}</p>
    <div class="hefte">
      ${i.arbeiten.liste.map((a, n) => `
      <article class="heft">
        <div class="bildzelle"><img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" loading="lazy"></div>
        <div>
          <p class="nr">Nº ${String(n + 1).padStart(2, '0')}</p>
          <h3>${a.kunde}</h3>
          <p class="was">${a.titel}</p>
          <p class="fmt">${a.formate.length > 1 ? 'Formate' : 'Format'} ${a.formate.join(' · ')}</p>
        </div>
      </article>`).join('')}
    </div>
  </section>

  <section class="artikel" id="kunden">
    <p class="rand">${i.kunden.label}</p>
    <p class="kundenzeile">${i.kunden.liste.map((k) => `<b>${k.name}</b>`).join(', ')}.</p>
  </section>

  <section class="artikel">
    <p class="rand">${i.disziplinen.label}</p>
    <div class="spalten">
      ${i.disziplinen.liste.map((d, n) => `
      <div><h3><span class="zaehler">${['I', 'II', 'III'][n]}.</span>${d.titel}</h3><p>${d.text}</p></div>`).join('')}
    </div>
  </section>

  <section class="artikel" id="team">
    <p class="rand">${i.team.label}</p>
    <div>
      <div class="impressum">
        ${i.team.liste.map((m) => `
        <div class="person">
          <img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy">
          <div><p class="name">${m.name}</p><p class="rolle">${m.rolle.join(' · ')}</p></div>
        </div>`).join('')}
      </div>
      <div class="notizen">
        ${i.team.bloecke.map((x) => `<p><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
      </div>
    </div>
  </section>

  <section class="artikel">
    <p class="rand">${i.gruende.titel}</p>
    <ol class="thesen">
      ${i.gruende.liste.map((g) => `<li><h3><i>These ${g.nr}.</i> ${g.titel}</h3><p>${g.text}</p></li>`).join('')}
    </ol>
  </section>

  <section class="artikel faq">
    <p class="rand">${i.faq.label}</p>
    <div>
      ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
    </div>
  </section>

  <section class="schluss" id="kontakt">
    <div class="rahmen">
      <p class="auftakt">${i.schluss.auftakt}</p>
      <h2>${i.schluss.titel}</h2>
      <a class="knopf" href="mailto:${i.schluss.mail}">${i.schluss.knopf}</a>
      <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
    </div>
  </section>
</div>
`;
};

export default {
  name: 'Journal',
  idee: 'Editorial wie eine Zeitschrift: Papierton, Serifen, Doppellinien, Initialen — die Arbeiten sind Ausgaben.',
  stil,
  koerper,
};
