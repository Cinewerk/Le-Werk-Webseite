/**
 * Entwurf 16 — Festival.
 *
 * Nach Simons viertem Referenzbild: das Filmfestival-Plakat — warmgrauer
 * Grund, ein einziges hartes Schwarzweißmotiv, enge Versalien in kleinen
 * Blöcken, die über die Fläche verteilt sind, viel Leere dazwischen.
 * Jede Sektion ist ein Plakat. Animation: Die Textblöcke treten versetzt
 * auf, das Motiv wechselt beim Überfahren der Werkliste.
 */

const stil = `
:root {
  --staub: #d8d4c8;
  --tinte: #17150f;
  --grau: #6f6a5c;
  --eng: 'Arial Narrow', 'Helvetica Neue Condensed', Impact, sans-serif;
  --grotesk: 'Helvetica Neue', Arial, sans-serif;
  --rand: clamp(1.25rem, 4vw, 3.5rem);
}

body {
  background: var(--staub);
  color: var(--tinte);
  font: 400 13.5px/1.6 var(--grotesk);
}

/* ── Kopf ── */
.kopf {
  display: flex;
  justify-content: space-between;
  padding: 1.25rem var(--rand);
  font-family: var(--eng);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.kopf a { text-decoration: none; }
.kopf a:hover { color: var(--grau); }

/* ── Plakat eins: das Hauptmotiv ── */
.plakat {
  position: relative;
  min-height: 92svh;
  padding: clamp(2rem, 6vh, 4rem) var(--rand);
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1rem;
}

.plakat .motiv { grid-column: 3 / span 6; align-self: center; }
.plakat .motiv img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; filter: grayscale(1) contrast(1.15); }

.plakat .block { font-family: var(--eng); font-weight: 700; text-transform: uppercase; line-height: 1.05; }
.plakat .block.oben-rechts { grid-column: 10 / span 3; grid-row: 1; font-size: clamp(1.125rem, 2vw, 1.625rem); }
.plakat .block.mitte-rechts { grid-column: 10 / span 3; grid-row: 2; align-self: center; font-size: 11.5px; letter-spacing: 0.06em; }
.plakat .block.mitte-rechts .liste { margin-top: 0.5rem; color: var(--grau); font-family: var(--grotesk); font-weight: 400; text-transform: none; letter-spacing: 0; line-height: 1.7; }

.plakat .titelblock { grid-column: 2 / span 8; grid-row: 3; align-self: end; }
.plakat .titelblock .klein { font-family: var(--eng); font-weight: 700; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; }
.plakat .titelblock h1 { font-family: var(--eng); font-weight: 700; font-size: clamp(2rem, 5.4vw, 4.5rem); line-height: 0.92; letter-spacing: 0.01em; text-transform: uppercase; }
.plakat .titelblock .daten { margin-top: 0.6rem; font-size: 11.5px; letter-spacing: 0.14em; text-transform: uppercase; }

.plakat .block, .plakat .titelblock, .plakat .motiv { opacity: 0; transform: translateY(10px); animation: auf 640ms ease forwards; }
.plakat .motiv { animation-delay: 120ms; }
.plakat .oben-rechts { animation-delay: 300ms; }
.plakat .mitte-rechts { animation-delay: 440ms; }
.plakat .titelblock { animation-delay: 580ms; }
@keyframes auf { to { opacity: 1; transform: none; } }

/* ── Sektionen als Plakattafeln ── */
.tafel { padding: clamp(3rem, 8vh, 5.5rem) var(--rand); border-top: 1px solid rgba(23, 21, 15, 0.25); display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 1rem; }

.tafel .rubrik { grid-column: 1 / span 3; font-family: var(--eng); font-weight: 700; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; }
.tafel .inhalt { grid-column: 4 / span 9; }

/* Werkliste: Zeilen, Motiv wechselt daneben */
.werke { display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: 2rem; align-items: start; }

.werke ol { border-top: 1px solid var(--tinte); }
.werke li { border-bottom: 1px solid var(--tinte); }
.werke .zeile { display: flex; justify-content: space-between; gap: 1rem; align-items: baseline; padding: 0.55rem 0.2rem; cursor: default; }
.werke .zeile:hover { background: rgba(23, 21, 15, 0.06); }
.werke .wer { font-family: var(--eng); font-weight: 700; font-size: clamp(1.25rem, 2.4vw, 2rem); text-transform: uppercase; }
.werke .was { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--grau); text-align: right; }

.werke .schau { position: sticky; top: 5rem; }
.werke .schau img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; filter: grayscale(1) contrast(1.12); }
.werke .schau figcaption { padding-top: 0.4rem; font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--grau); }

/* Kunden: zwei enge Spalten wie die Länderliste */
.kunden .inhalt { columns: 2; gap: 3rem; font-family: var(--eng); font-weight: 700; font-size: clamp(1rem, 1.8vw, 1.375rem); text-transform: uppercase; line-height: 1.8; }

/* Disziplinen */
.machen .satz { display: grid; gap: 1.75rem; }
.machen h3 { font-family: var(--eng); font-weight: 700; font-size: clamp(1.5rem, 3vw, 2.5rem); text-transform: uppercase; line-height: 0.95; }
.machen p { max-width: 52ch; color: #3c382c; margin-top: 0.4rem; }

/* Team */
.team .reihe { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.team img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; filter: grayscale(1) contrast(1.12); }
.team figcaption { padding-top: 0.35rem; }
.team .name { font-family: var(--eng); font-weight: 700; font-size: 15px; text-transform: uppercase; }
.team .rolle { font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--grau); }
.team .saetze { margin-top: 1.5rem; display: grid; gap: 0.8rem; max-width: 64ch; }
.team .saetze b { font-family: var(--eng); text-transform: uppercase; letter-spacing: 0.04em; }

/* Gründe */
.gruende .inhalt > div { border-top: 1px solid var(--tinte); padding: 1rem 0; display: grid; grid-template-columns: 3rem minmax(0, 1fr); gap: 1rem; }
.gruende .nr { font-family: var(--eng); font-weight: 700; font-size: 1.5rem; }
.gruende h3 { font-family: var(--eng); font-weight: 700; font-size: clamp(1.125rem, 2vw, 1.5rem); text-transform: uppercase; margin-bottom: 0.25rem; }
.gruende p { max-width: 58ch; color: #3c382c; }

/* FAQ */
.faq details { border-top: 1px solid var(--tinte); }
.faq details:last-of-type { border-bottom: 1px solid var(--tinte); }
.faq summary { list-style: none; cursor: pointer; padding: 0.8rem 0.2rem; font-family: var(--eng); font-weight: 700; font-size: 15.5px; text-transform: uppercase; letter-spacing: 0.03em; }
.faq summary::-webkit-details-marker { display: none; }
.faq details p { padding: 0 0.2rem 1rem; max-width: 62ch; color: #3c382c; }

/* Schluss */
.schluss { border-top: 1px solid rgba(23, 21, 15, 0.25); text-align: center; padding: clamp(3.5rem, 9vh, 6rem) var(--rand); }
.schluss .klein { font-family: var(--eng); font-weight: 700; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; }
.schluss h2 { font-family: var(--eng); font-weight: 700; font-size: clamp(2.25rem, 7vw, 6rem); line-height: 0.9; text-transform: uppercase; margin: 0.5rem 0 1.5rem; }
.schluss a.knopf { display: inline-block; background: var(--tinte); color: var(--staub); padding: 0.8em 2em; text-decoration: none; font-family: var(--eng); font-weight: 700; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; }
.schluss a.knopf:hover { background: #000; }
.schluss .mail { display: block; margin-top: 1rem; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--grau); }

@media (max-width: 780px) {
  .plakat { grid-template-columns: minmax(0, 1fr); min-height: 0; }
  .plakat .motiv, .plakat .block, .plakat .titelblock { grid-column: 1; grid-row: auto; }
  .tafel { grid-template-columns: minmax(0, 1fr); }
  .tafel .rubrik, .tafel .inhalt { grid-column: 1; }
  .werke { grid-template-columns: minmax(0, 1fr); }
  .werke .schau { display: none; }
  .kunden .inhalt { columns: 1; }
}

@media (min-width: 781px) { .team .reihe { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  return `
<header class="kopf">
  <a href="#oben">${i.marke}</a>
  <a href="#kontakt">Kontakt</a>
</header>

<section class="plakat" id="oben">
  <figure class="motiv"><img src="${b('bts/bts-halle.jpg')}" alt="Setfoto: die Produktionshalle"></figure>

  <p class="block oben-rechts">Content<br>worth<br>watching</p>

  <div class="block mitte-rechts">
    Gedreht für
    <p class="liste">${i.kunden.liste.slice(0, 6).map((k) => k.name).join('<br>')}</p>
  </div>

  <div class="titelblock">
    <p class="klein">${i.position.auftakt}</p>
    <h1>${i.marke} — ${i.gattung}</h1>
    <p class="daten">${i.position.zeile.join(' — ')}</p>
  </div>
</section>

<section class="tafel werke-tafel" id="arbeiten">
  <p class="rubrik">${i.arbeiten.label}</p>
  <div class="inhalt werke">
    <ol data-liste>
      ${i.arbeiten.liste.map((a, n) => `
      <li>
        <span class="zeile" data-bild="${b(a.bild)}" data-t="${a.kunde} — ${a.titel}">
          <span class="wer">${a.kunde}</span>
          <span class="was">${a.titel}<br>${a.formate.join(' · ')}</span>
        </span>
      </li>`).join('')}
    </ol>
    <figure class="schau">
      <img src="${b(i.arbeiten.liste[0].bild)}" alt="" data-schau>
      <figcaption data-schau-zeile>${i.arbeiten.liste[0].kunde} — ${i.arbeiten.liste[0].titel}</figcaption>
    </figure>
  </div>
</section>

<section class="tafel kunden" id="kunden">
  <p class="rubrik">${i.kunden.label}</p>
  <div class="inhalt">${i.kunden.liste.map((k) => `${k.name}<br>`).join('')}</div>
</section>

<section class="tafel machen">
  <p class="rubrik">${i.disziplinen.label}</p>
  <div class="inhalt satz">
    ${i.disziplinen.liste.map((d) => `<div><h3>${d.titel}</h3><p>${d.text}</p></div>`).join('')}
  </div>
</section>

<section class="tafel team" id="team">
  <p class="rubrik">${i.team.label}<br>${i.team.titel}</p>
  <div class="inhalt">
    <div class="reihe">
      ${i.team.liste.map((m) => `
      <figure>
        <img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy">
        <figcaption><p class="name">${m.name}</p><p class="rolle">${m.rolle.join(' · ')}</p></figcaption>
      </figure>`).join('')}
    </div>
    <div class="saetze">
      ${i.team.bloecke.map((x) => `<p><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
    </div>
  </div>
</section>

<section class="tafel gruende">
  <p class="rubrik">${i.gruende.titel}</p>
  <div class="inhalt">
    ${i.gruende.liste.map((g) => `
    <div><span class="nr">${g.nr}</span><div><h3>${g.titel}</h3><p>${g.text}</p></div></div>`).join('')}
  </div>
</section>

<section class="tafel faq">
  <p class="rubrik">${i.faq.label}<br>${i.faq.titel}</p>
  <div class="inhalt">
    ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
  </div>
</section>

<section class="schluss" id="kontakt">
  <p class="klein">${i.schluss.auftakt}</p>
  <h2>${i.schluss.titel}</h2>
  <a class="knopf" href="mailto:${i.schluss.mail}">${i.schluss.knopf}</a>
  <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
</section>

<script>
(() => {
  const bild = document.querySelector('[data-schau]');
  const zeile = document.querySelector('[data-schau-zeile]');
  document.querySelectorAll('[data-bild]').forEach((z) => {
    z.addEventListener('pointerenter', () => {
      bild.src = z.dataset.bild;
      zeile.textContent = z.dataset.t;
    });
  });
})();
</script>
`;
};

export default {
  name: 'Festival',
  idee: 'Das Plakat: warmes Grau, hartes Schwarzweiß, enge Versalien in verstreuten Blöcken, viel Leere.',
  stil,
  koerper,
};
