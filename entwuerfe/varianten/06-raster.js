/**
 * Entwurf 06 — Raster.
 *
 * Schule: Schweizer Internationale Typografie, wie sie die strengeren
 * Awwwards-Studios pflegen (2xA und Verwandte): sichtbares Raster, eine
 * Groteske, ein Rot, alles linksbündig, alles ist Tabelle. Information
 * vor Geste — die Seite liest sich wie ein Datenblatt des Studios.
 */

const stil = `
:root {
  --papier: #f2f2f0;
  --tinte: #111;
  --rot: #e63311;
  --linie: #bdbdb8;
  --grotesk: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --mono: ui-monospace, 'SF Mono', Menlo, monospace;
  --rand: clamp(0.75rem, 2vw, 1.25rem);
}

body {
  background: var(--papier);
  color: var(--tinte);
  font: 400 15px/1.5 var(--grotesk);
}

.rahmen { max-width: 90rem; margin: 0 auto; padding: 0 var(--rand); }

/* ── Kopf: technische Kopfzeile ── */
.kopf {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--rand);
  padding: 0.9rem 0;
  border-bottom: 2px solid var(--tinte);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.kopf b { grid-column: 1 / span 3; font-weight: 700; }
.kopf .was { grid-column: 4 / span 4; color: #666; }
.kopf nav { grid-column: 9 / span 4; display: flex; gap: 1.25rem; justify-content: end; }
.kopf a { text-decoration: none; }
.kopf a:hover { color: var(--rot); }

/* ── Kennziffernzeile ── */
.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 2rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--linie);
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  color: #666;
}

.meta b { color: var(--rot); font-weight: 400; }

/* ── Claim: groß, aber nüchtern ── */
.claim { padding: clamp(2.5rem, 7vw, 6rem) 0; border-bottom: 2px solid var(--tinte); }

.claim h1 {
  max-width: 18ch;
  font-size: clamp(2rem, 6vw, 5.5rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.03em;
}

.claim h1 .rot { color: var(--rot); }

.claim .satz { max-width: 44ch; margin-top: 1.5rem; font-size: clamp(1rem, 1.5vw, 1.25rem); line-height: 1.5; }

/* ── Abschnittskopf: Nummer, Titel, Linie ── */
.teil { padding: clamp(2rem, 5vw, 3.5rem) 0; border-bottom: 1px solid var(--linie); }

.teil > header {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--rand);
  margin-bottom: clamp(1.25rem, 3vw, 2rem);
}

.teil > header .nr { grid-column: 1 / span 2; font-family: var(--mono); font-size: 11px; color: var(--rot); }
.teil > header h2 { grid-column: 3 / span 10; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }

/* ── Arbeiten: Tabelle mit Bildspalte ── */
.werke { display: grid; border-top: 1px solid var(--linie); }

.werk {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--rand);
  align-items: center;
  padding: 0.9rem 0;
  border-bottom: 1px solid var(--linie);
}

.werk img { grid-column: 1 / span 3; width: 100%; max-width: 11rem; aspect-ratio: 3 / 2; object-fit: cover; }
.werk .wer { grid-column: 4 / span 4; font-size: clamp(1.125rem, 2.2vw, 1.75rem); font-weight: 700; letter-spacing: -0.02em; }
.werk .was { grid-column: 8 / span 3; font-size: 13px; color: #555; }
.werk .fmt { grid-column: 11 / span 2; font-family: var(--mono); font-size: 11px; text-align: right; color: var(--rot); }

.werk:hover { background: #fff; }

/* ── Kunden: dichte Matrix ── */
.matrix {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--linie);
  border-left: 1px solid var(--linie);
}

.matrix li {
  padding: 0.8rem;
  border-right: 1px solid var(--linie);
  border-bottom: 1px solid var(--linie);
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.matrix li i { font-style: normal; font-family: var(--mono); font-size: 10px; color: #999; }
.matrix li:hover { background: var(--rot); color: #fff; }
.matrix li:hover i { color: rgba(255, 255, 255, 0.7); }

/* ── Disziplinen: Spezifikation ── */
.spez { display: grid; gap: 0; border-top: 1px solid var(--linie); }

.spez > div {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--rand);
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--linie);
}

.spez h3 { grid-column: 1 / span 4; font-size: clamp(1.25rem, 2.6vw, 2rem); font-weight: 700; letter-spacing: -0.02em; }
.spez p { grid-column: 5 / span 7; font-size: 14.5px; max-width: 62ch; }

/* ── Team: Personalliste ── */
.leute { border-top: 1px solid var(--linie); }

.leute li {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--rand);
  align-items: center;
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--linie);
}

.leute img { grid-column: 1 / span 1; width: 3.4rem; aspect-ratio: 1; object-fit: cover; filter: grayscale(1); }
.leute li:hover img { filter: none; }
.leute .name { grid-column: 2 / span 5; font-weight: 700; font-size: clamp(1rem, 1.8vw, 1.375rem); }
.leute .rolle { grid-column: 7 / span 6; font-size: 13px; color: #555; text-align: right; }

.notiz { margin-top: 1.5rem; display: grid; gap: 1rem; }
.notiz p { max-width: 68ch; font-size: 14.5px; }
.notiz b { font-weight: 700; }

/* ── Gründe: drei Punkte, rot nummeriert ── */
.punkte { border-top: 1px solid var(--linie); }

.punkte li {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--rand);
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--linie);
}

.punkte .nr { grid-column: 1 / span 2; font-family: var(--mono); font-size: 12px; color: var(--rot); }
.punkte h3 { grid-column: 3 / span 4; font-size: clamp(1.125rem, 2.2vw, 1.625rem); font-weight: 700; letter-spacing: -0.02em; }
.punkte p { grid-column: 7 / span 6; font-size: 14.5px; }

/* ── FAQ ── */
.fragen details { border-bottom: 1px solid var(--linie); }
.fragen details:first-of-type { border-top: 1px solid var(--linie); }
.fragen summary { list-style: none; display: grid; grid-template-columns: repeat(12, minmax(0,1fr)); gap: var(--rand); padding: 0.9rem 0; cursor: pointer; }
.fragen summary::-webkit-details-marker { display: none; }
.fragen summary .m { grid-column: 1 / span 2; font-family: var(--mono); font-size: 11px; color: var(--rot); }
.fragen summary .f { grid-column: 3 / span 10; font-weight: 700; font-size: 15px; }
.fragen details p { padding: 0 0 1.1rem; margin-left: calc(100% / 6); max-width: 62ch; font-size: 14.5px; }

/* ── Schluss ── */
.schluss { padding: clamp(3rem, 8vw, 6rem) 0 clamp(2rem, 5vw, 3rem); }

.schluss a.gross {
  display: block;
  font-size: clamp(2rem, 7.4vw, 7rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
  text-decoration: none;
}

.schluss a.gross:hover { color: var(--rot); }
.schluss a.gross .pfeil { font-weight: 400; }

.schluss .fuss {
  margin-top: clamp(2rem, 5vw, 3.5rem);
  padding-top: 0.6rem;
  border-top: 2px solid var(--tinte);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.4rem 2rem;
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  color: #666;
}

@media (min-width: 860px) { .matrix { grid-template-columns: repeat(4, minmax(0, 1fr)); } }

@media (max-width: 700px) {
  .werk img { grid-column: 1 / span 4; }
  .werk .wer { grid-column: 5 / span 8; }
  .werk .was { grid-column: 5 / span 8; }
  .werk .fmt { grid-column: 5 / span 8; text-align: left; }
  .spez h3 { grid-column: 1 / span 12; }
  .spez p { grid-column: 1 / span 12; }
  .punkte h3 { grid-column: 3 / span 10; }
  .punkte p { grid-column: 3 / span 10; }
  .leute .rolle { grid-column: 2 / span 11; text-align: left; }
  .leute .name { grid-column: 2 / span 11; }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  const claim = i.claim.replace('worth watching', '<span class="rot">worth watching</span>');
  return `
<div class="rahmen">
  <header class="kopf">
    <b>${i.marke}</b>
    <span class="was">${i.gattung}</span>
    <nav>
      <a href="#a1">Arbeiten</a>
      <a href="#a2">Kunden</a>
      <a href="#a4">Team</a>
      <a href="#a7">Kontakt</a>
    </nav>
  </header>

  <p class="meta">
    <span>Standort <b>50.93° N, 6.96° O — Köln</b></span>
    <span>Gegründet <b>von Filmemachern</b></span>
    <span>Reichweite <b>Worldwide</b></span>
    <span>Kernformat <b>9:16</b></span>
  </p>

  <section class="claim">
    <h1>${claim}</h1>
    <p class="satz">${i.position.auftakt} ${i.position.satz}<br>${i.position.zeile.join(' — ')}</p>
  </section>

  <section class="teil" id="a1">
    <header><span class="nr">1.0</span><h2>${i.arbeiten.label}</h2></header>
    <div class="werke">
      ${i.arbeiten.liste.map((a, n) => `
      <div class="werk">
        <img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" loading="lazy">
        <span class="wer">${a.kunde}</span>
        <span class="was">${a.titel}</span>
        <span class="fmt">1.${n + 1} / ${a.formate.join(' + ')}</span>
      </div>`).join('')}
    </div>
  </section>

  <section class="teil" id="a2">
    <header><span class="nr">2.0</span><h2>${i.kunden.label}</h2></header>
    <ul class="matrix">
      ${i.kunden.liste.map((k, n) => `<li>${k.name}<i>2.${n + 1}</i></li>`).join('')}
    </ul>
  </section>

  <section class="teil" id="a3">
    <header><span class="nr">3.0</span><h2>${i.disziplinen.label}</h2></header>
    <div class="spez">
      ${i.disziplinen.liste.map((d) => `<div><h3>${d.titel}</h3><p>${d.text}</p></div>`).join('')}
    </div>
  </section>

  <section class="teil" id="a4">
    <header><span class="nr">4.0</span><h2>${i.team.label} — ${i.team.titel}</h2></header>
    <ul class="leute">
      ${i.team.liste.map((m) => `
      <li>
        <img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy">
        <span class="name">${m.name}</span>
        <span class="rolle">${m.rolle.join(' / ')}</span>
      </li>`).join('')}
    </ul>
    <div class="notiz">
      ${i.team.bloecke.map((x) => `<p><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
    </div>
  </section>

  <section class="teil" id="a5">
    <header><span class="nr">5.0</span><h2>${i.gruende.titel}</h2></header>
    <ol class="punkte">
      ${i.gruende.liste.map((g) => `
      <li><span class="nr">5.${Number(g.nr)}</span><h3>${g.titel}</h3><p>${g.text}</p></li>`).join('')}
    </ol>
  </section>

  <section class="teil fragen" id="a6">
    <header><span class="nr">6.0</span><h2>${i.faq.label} — ${i.faq.titel}</h2></header>
    ${i.faq.liste.map((f, n) => `
    <details>
      <summary><span class="m">6.${n + 1}</span><span class="f">${f.f}</span></summary>
      <p>${f.a}</p>
    </details>`).join('')}
  </section>

  <section class="schluss" id="a7">
    <a class="gross" href="mailto:${i.schluss.mail}">${i.schluss.auftakt} ${i.schluss.titel} <span class="pfeil">→</span></a>
    <p class="fuss">
      <span>${i.marke} — ${i.gattung}, Köln</span>
      <span>${i.schluss.knopf}: ${i.schluss.mail}</span>
    </p>
  </section>
</div>
`;
};

export default {
  name: 'Raster',
  idee: 'Schweizer Strenge: sichtbares Raster, Helvetica, ein Rot, alles Tabelle — die Seite als Datenblatt.',
  stil,
  koerper,
};
