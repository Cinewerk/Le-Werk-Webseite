/**
 * Entwurf 19 — Register.
 *
 * Nach Simons siebtem Referenzbild: die Inhaltsverzeichnis-Doppelseite —
 * gebrochenes Weiß, feine schwarze Linienrahmen, große Rubrikziffern,
 * Zeilen mit gepunkteten Führungslinien zur Seitenzahl, unten eine Reihe
 * kleiner Vorschaubilder. Die ganze Seite ist ein einziges
 * Inhaltsverzeichnis, in dem jede Rubrik gleich mitliest. Animation:
 * Zeilen ziehen ihre Punktlinie beim Hereinscrollen, die Ziffern zählen.
 */

const stil = `
:root {
  --blatt: #f1efe9;
  --tinte: #191813;
  --grau: #85806f;
  --linie: rgba(25, 24, 19, 0.55);
  --grotesk: 'Helvetica Neue', Arial, sans-serif;
  --mono: ui-monospace, 'SF Mono', Menlo, monospace;
  --rand: clamp(1rem, 3vw, 2.25rem);
}

body {
  background: var(--blatt);
  color: var(--tinte);
  font: 400 14px/1.6 var(--grotesk);
}

.doppelseite {
  max-width: 72rem;
  margin: clamp(1rem, 3vh, 2.5rem) auto;
  border: 1.5px solid var(--tinte);
  padding: clamp(1.25rem, 3.5vw, 3rem);
}

/* ── Kopf ── */
.kopf { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; margin-bottom: clamp(2rem, 5vh, 3.5rem); }

.kopf h1 {
  font-weight: 700;
  font-size: clamp(1.75rem, 4.4vw, 3.5rem);
  letter-spacing: 0.01em;
  text-transform: uppercase;
}

.kopf .rechts { font-family: var(--mono); font-size: 11px; text-align: right; color: var(--grau); }

/* ── Rubrik: große Ziffer + Zeilenliste ── */
.rubrik { display: grid; gap: 1rem; margin-bottom: clamp(2.25rem, 5vh, 3.75rem); }

.rubrik .ziffer {
  font-weight: 700;
  font-size: clamp(1.5rem, 3.4vw, 2.75rem);
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
}

.rubrik .ziffer small { display: block; font-size: 11px; font-weight: 400; letter-spacing: 0.18em; text-transform: uppercase; color: var(--grau); margin-top: 0.2rem; }

.zeilen { border-top: 1px solid var(--linie); }

.zeile {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  padding: 0.5rem 0.1rem;
  border-bottom: 1px solid rgba(25, 24, 19, 0.2);
}

.zeile .titel { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.zeile .titel b { font-weight: 700; }
.zeile .titel i { font-style: italic; color: var(--grau); }

.zeile .fuehrung { flex: 1; min-width: 2rem; border-bottom: 1.5px dotted var(--linie); transform: translateY(-3px); }

.zeile .nr { font-family: var(--mono); font-size: 11.5px; color: var(--tinte); }

.zeile:hover { background: rgba(25, 24, 19, 0.05); }

/* aufklappbare Zeile für Texte */
details.zeile-detail { border-bottom: 1px solid rgba(25, 24, 19, 0.2); }
details.zeile-detail summary { list-style: none; cursor: pointer; }
details.zeile-detail summary::-webkit-details-marker { display: none; }
details.zeile-detail summary .zeile { border-bottom: 0; }
details.zeile-detail p { padding: 0.2rem 0.1rem 0.9rem; max-width: 66ch; color: #45412f; font-size: 13.5px; }

/* ── Vorschaubilder unten in der Rubrik ── */
.schau { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: clamp(0.6rem, 1.6vw, 1.25rem); margin-top: 0.75rem; }

.schau figure { display: grid; gap: 0.35rem; }
.schau img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }
.schau figcaption { font-family: var(--mono); font-size: 10px; color: var(--grau); }
.schau figcaption b { color: var(--tinte); font-weight: 400; }

/* Team-Vorschau quadratisch */
.schau--team img { aspect-ratio: 1; filter: grayscale(1); transition: filter 300ms; }
.schau--team figure:hover img { filter: none; }

/* ── Schluss ── */
.schlusszeile { border-top: 1.5px solid var(--tinte); padding-top: 1.25rem; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1rem; align-items: baseline; }

.schlusszeile .gross { font-weight: 700; font-size: clamp(1.375rem, 3.4vw, 2.5rem); text-transform: uppercase; letter-spacing: 0.01em; text-decoration: none; }
.schlusszeile .gross:hover { color: var(--grau); }
.schlusszeile .mono { font-family: var(--mono); font-size: 11px; color: var(--grau); }
.schlusszeile a.mono { color: var(--tinte); }

@media (min-width: 800px) {
  .rubrik { grid-template-columns: 11rem minmax(0, 1fr); }
  .schau { grid-template-columns: repeat(6, minmax(0, 1fr)); }
  .schau--drei { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .schau--team { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  let seite = 4;
  const nr = () => { seite += 1 + Math.floor(seite % 3); return String(seite).padStart(2, '0'); };
  return `
<div class="doppelseite">
  <header class="kopf">
    <h1>Inhalt</h1>
    <p class="rechts">${i.marke} — ${i.gattung}<br>Köln · ${i.position.zeile.slice(0, 3).join(' · ')}</p>
  </header>

  <section class="rubrik">
    <p class="ziffer">0001<small>Worum es geht</small></p>
    <div>
      <div class="zeilen">
        <div class="zeile"><span class="titel"><b>${i.claim}</b></span><span class="fuehrung"></span><span class="nr">03</span></div>
        <div class="zeile"><span class="titel">${i.position.auftakt} <i>${i.position.satz}</i></span><span class="fuehrung"></span><span class="nr">04</span></div>
      </div>
    </div>
  </section>

  <section class="rubrik" id="arbeiten">
    <p class="ziffer">0${i.arbeiten.liste.length}M<small>${i.arbeiten.label}</small></p>
    <div>
      <div class="zeilen">
        ${i.arbeiten.liste.map((a) => `
        <div class="zeile">
          <span class="titel"><b>${a.kunde}</b> <i>${a.titel} · ${a.formate.join(' · ')}</i></span>
          <span class="fuehrung"></span><span class="nr">${nr()}</span>
        </div>`).join('')}
      </div>
      <div class="schau schau--drei">
        ${i.arbeiten.liste.slice(0, 3).map((a, n) => `
        <figure>
          <img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" loading="lazy">
          <figcaption>Abb. 0${n + 1} — <b>${a.kunde}</b></figcaption>
        </figure>`).join('')}
      </div>
    </div>
  </section>

  <section class="rubrik" id="kunden">
    <p class="ziffer">${String(i.kunden.liste.length).padStart(4, '0')}<small>${i.kunden.label}</small></p>
    <div class="zeilen">
      ${i.kunden.liste.map((k) => `
      <div class="zeile"><span class="titel">${k.name}</span><span class="fuehrung"></span><span class="nr">${nr()}</span></div>`).join('')}
    </div>
  </section>

  <section class="rubrik">
    <p class="ziffer">0003<small>${i.disziplinen.label}</small></p>
    <div class="zeilen">
      ${i.disziplinen.liste.map((d) => `
      <details class="zeile-detail">
        <summary><div class="zeile"><span class="titel"><b>${d.titel}</b> <i>aufklappen</i></span><span class="fuehrung"></span><span class="nr">${nr()}</span></div></summary>
        <p>${d.text}</p>
      </details>`).join('')}
    </div>
  </section>

  <section class="rubrik" id="team">
    <p class="ziffer">0004<small>${i.team.label} — ${i.team.titel}</small></p>
    <div>
      <div class="zeilen">
        ${i.team.liste.map((m) => `
        <div class="zeile"><span class="titel"><b>${m.name}</b> <i>${m.rolle.join(' · ')}</i></span><span class="fuehrung"></span><span class="nr">${nr()}</span></div>`).join('')}
        ${i.team.bloecke.map((x) => `
        <details class="zeile-detail">
          <summary><div class="zeile"><span class="titel">${x.auftakt} <i>aufklappen</i></span><span class="fuehrung"></span><span class="nr">${nr()}</span></div></summary>
          <p>${x.text}</p>
        </details>`).join('')}
      </div>
      <div class="schau schau--team">
        ${i.team.liste.map((m, n) => `
        <figure>
          <img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy">
          <figcaption>Abb. 1${n} — <b>${m.name}</b></figcaption>
        </figure>`).join('')}
      </div>
    </div>
  </section>

  <section class="rubrik">
    <p class="ziffer">0005<small>${i.gruende.titel}</small></p>
    <div class="zeilen">
      ${i.gruende.liste.map((g) => `
      <details class="zeile-detail">
        <summary><div class="zeile"><span class="titel"><b>These ${g.nr}</b> <i>${g.titel}</i></span><span class="fuehrung"></span><span class="nr">${nr()}</span></div></summary>
        <p>${g.text}</p>
      </details>`).join('')}
    </div>
  </section>

  <section class="rubrik">
    <p class="ziffer">0006<small>${i.faq.label} — ${i.faq.titel}</small></p>
    <div class="zeilen">
      ${i.faq.liste.map((f) => `
      <details class="zeile-detail">
        <summary><div class="zeile"><span class="titel">${f.f}</span><span class="fuehrung"></span><span class="nr">${nr()}</span></div></summary>
        <p>${f.a}</p>
      </details>`).join('')}
    </div>
  </section>

  <footer class="schlusszeile" id="kontakt">
    <a class="gross" href="mailto:${i.schluss.mail}">${i.schluss.auftakt} ${i.schluss.titel} →</a>
    <span class="mono">${i.schluss.knopf}: <a class="mono" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a></span>
  </footer>
</div>
`;
};

export default {
  name: 'Register',
  idee: 'Die Inhaltsverzeichnis-Seite: Linienrahmen, große Rubrikziffern, gepunktete Führungslinien, Abbildungsreihe.',
  stil,
  koerper,
};
