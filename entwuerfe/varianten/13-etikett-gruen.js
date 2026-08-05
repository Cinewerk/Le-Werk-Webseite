/**
 * Entwurf 13 — Etikett Grün.
 *
 * Nach Simons erstem Referenzbild: das flaschengrüne Magazin-Cover —
 * fette weiße Kleinbuchstaben-Marke, darunter ein dichtes Raster kleiner
 * Fotos mit winzigen Bildzeilen, alles auf einer tiefen Grünfläche. Die
 * ganze Seite ist eine Zeitschrift: Titelseite, Bildstrecken, Rubriken.
 * Animation: Die Coverbilder blättern beim Laden nacheinander auf.
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
  --gruen: #21473a;
  --gruen-tief: #1a3a30;
  --weiss: #f4f1e8;
  --gold: #d9b96a;
  --grotesk: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
  --serif: 'Bodoni Moda', Georgia, serif;
  --rand: clamp(1.25rem, 3.5vw, 3rem);
}

body {
  background: var(--gruen);
  color: var(--weiss);
  font: 400 15px/1.6 'Helvetica Neue', Arial, sans-serif;
}

/* ── Titelkopf wie ein Zeitschriftenlogo ── */
.titelkopf { text-align: center; padding: clamp(2.5rem, 7vh, 5rem) var(--rand) 0; }

.titelkopf h1 {
  font-family: var(--grotesk);
  font-weight: 800;
  font-size: clamp(3.5rem, 13vw, 11rem);
  line-height: 0.9;
  letter-spacing: -0.05em;
  text-transform: lowercase;
}

.titelkopf .unterzeile {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 0.75rem;
  font-size: 10.5px;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: rgba(244, 241, 232, 0.75);
}

.titelkopf .nummer {
  display: flex;
  justify-content: space-between;
  max-width: 60rem;
  margin: 1.5rem auto 0;
  padding-top: 0.6rem;
  border-top: 1px solid rgba(244, 241, 232, 0.4);
  font-size: 10.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.titelkopf .nummer i { font-family: var(--serif); font-size: 14px; letter-spacing: 0; }

/* ── Das Coverraster ── */
.cover { padding: clamp(1.5rem, 4vh, 3rem) var(--rand) clamp(3rem, 7vh, 5rem); }

.cover .gitter {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(0.6rem, 1.4vw, 1.1rem);
  max-width: 60rem;
  margin: 0 auto;
}

.cover figure { opacity: 0; transform: translateY(12px); animation: blatt 600ms ease forwards; animation-delay: calc(var(--n) * 110ms + 200ms); }
@keyframes blatt { to { opacity: 1; transform: none; } }

.cover img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; filter: saturate(0.9); transition: filter 300ms; }
.cover figure:hover img { filter: saturate(1.15); }

.cover figcaption { padding-top: 0.4rem; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(244, 241, 232, 0.8); }
.cover figcaption b { color: var(--weiss); }

/* Schlagzeilen links im Raster, wie die Themenzeilen des Covers */
.cover .zeilen { display: grid; align-content: end; gap: 0.9rem; padding: 0.5rem; }
.cover .zeilen p { font-size: 11.5px; letter-spacing: 0.08em; text-transform: uppercase; line-height: 1.5; border-left: 2px solid var(--gold); padding-left: 0.7rem; }

/* ── Rubrikkopf ── */
.rubrik { max-width: 60rem; margin: 0 auto; padding: clamp(2.5rem, 6vh, 4rem) var(--rand) 0; }
.rubrik .kopf { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; border-top: 1px solid rgba(244, 241, 232, 0.4); padding-top: 0.6rem; }
.rubrik .kopf h2 { font-family: var(--grotesk); font-weight: 800; font-size: clamp(1.375rem, 3vw, 2.25rem); letter-spacing: -0.02em; text-transform: lowercase; }
.rubrik .kopf i { font-family: var(--serif); font-style: italic; font-size: 13px; color: var(--gold); }

/* Position */
.leitsatz p { font-family: var(--serif); font-style: italic; font-size: clamp(1.375rem, 2.8vw, 2.125rem); line-height: 1.35; max-width: 30ch; margin-top: 1.25rem; }
.leitsatz .zeile { margin-top: 1rem; font-size: 10.5px; letter-spacing: 0.28em; text-transform: uppercase; color: rgba(244, 241, 232, 0.7); }

/* Kunden als Namensliste mit Punkten */
.kundschaft p { margin-top: 1.25rem; font-size: clamp(1.0625rem, 2vw, 1.5rem); line-height: 1.8; }
.kundschaft b { font-family: var(--grotesk); font-weight: 800; letter-spacing: -0.01em; }
.kundschaft i { font-family: var(--serif); font-style: italic; color: var(--gold); padding: 0 0.4em; }

/* Disziplinen: drei Rubrikkästen */
.machen .drei { display: grid; gap: 1rem; margin-top: 1.25rem; }
.machen .kasten { border: 1px solid rgba(244, 241, 232, 0.4); padding: 1.4rem; }
.machen h3 { font-family: var(--grotesk); font-weight: 800; text-transform: lowercase; font-size: clamp(1.375rem, 2.6vw, 2rem); letter-spacing: -0.02em; margin-bottom: 0.5rem; }
.machen p { font-size: 14px; color: rgba(244, 241, 232, 0.85); }

/* Team wie eine Modestrecke */
.moden { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(0.6rem, 1.4vw, 1.1rem); margin-top: 1.25rem; }
.moden img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; filter: grayscale(1) contrast(1.06); transition: filter 300ms; }
.moden figure:hover img { filter: none; }
.moden figcaption { padding-top: 0.4rem; font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; }
.moden figcaption b { display: block; font-size: 11.5px; }

.notizen { margin-top: 1.5rem; display: grid; gap: 0.9rem; }
.notizen p { max-width: 66ch; font-size: 14px; }
.notizen b { color: var(--gold); }

/* Gründe als Zitatkästen */
.gruende .drei { display: grid; gap: 1rem; margin-top: 1.25rem; }
.gruende .kasten { background: var(--gruen-tief); padding: 1.5rem; }
.gruende .nr { font-family: var(--serif); font-style: italic; color: var(--gold); }
.gruende h3 { font-family: var(--grotesk); font-weight: 800; font-size: clamp(1.125rem, 2vw, 1.5rem); letter-spacing: -0.01em; margin: 0.3rem 0 0.5rem; }
.gruende p { font-size: 14px; color: rgba(244, 241, 232, 0.85); }

/* FAQ */
.faq details { border-bottom: 1px solid rgba(244, 241, 232, 0.35); }
.faq details:first-of-type { margin-top: 1.25rem; border-top: 1px solid rgba(244, 241, 232, 0.35); }
.faq summary { list-style: none; cursor: pointer; padding: 0.9rem 0; font-family: var(--grotesk); font-weight: 800; font-size: 15px; letter-spacing: 0.01em; }
.faq summary::-webkit-details-marker { display: none; }
.faq summary::before { content: '→ '; color: var(--gold); }
.faq details[open] summary::before { content: '↓ '; }
.faq details p { padding-bottom: 1.1rem; max-width: 62ch; font-size: 14px; color: rgba(244, 241, 232, 0.85); }

/* Rückseite */
.ruecken { text-align: center; padding: clamp(3rem, 8vh, 6rem) var(--rand) clamp(4rem, 9vh, 7rem); }
.ruecken .oben { font-family: var(--serif); font-style: italic; font-size: clamp(1.25rem, 2.4vw, 1.875rem); color: var(--gold); }
.ruecken h2 { font-family: var(--grotesk); font-weight: 800; font-size: clamp(2rem, 6vw, 4.5rem); letter-spacing: -0.03em; text-transform: lowercase; line-height: 1; margin: 0.4rem 0 1.75rem; }
.ruecken a.knopf { display: inline-block; border: 1.5px solid var(--weiss); padding: 0.85em 2em; text-decoration: none; font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase; }
.ruecken a.knopf:hover { background: var(--weiss); color: var(--gruen); }
.ruecken .mail { display: block; margin-top: 1rem; font-family: var(--serif); font-style: italic; }

@media (min-width: 820px) {
  .cover .gitter { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .machen .drei, .gruende .drei { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .moden { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  return `
<header class="titelkopf">
  <h1>le werk</h1>
  <p class="unterzeile"><span>Der Führer für sehenswerten Markenauftritt</span></p>
  <p class="nummer">
    <span>Nº <i>Eins</i></span>
    <span>${i.gattung} — Köln</span>
    <span>${i.position.auftakt}</span>
  </p>
</header>

<section class="cover" id="arbeiten">
  <div class="gitter">
    <div class="zeilen" style="--n:0">
      <p>${i.claim}</p>
      ${i.position.zeile.slice(0, 3).map((z) => `<p>${z}</p>`).join('')}
    </div>
    ${i.arbeiten.liste.map((a, n) => `
    <figure style="--n:${n + 1}">
      <img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}">
      <figcaption><b>${a.kunde}</b> — ${a.titel} · ${a.formate.join(' · ')}</figcaption>
    </figure>`).join('')}
    <div class="zeilen" style="--n:7">
      <p>${i.arbeiten.label}: sechs Produktionen</p>
      <p>${i.team.label}: vier Köpfe</p>
      <p>${i.faq.titel}: fünf Antworten</p>
    </div>
  </div>
</section>

<section class="rubrik leitsatz">
  <div class="kopf"><h2>worum es geht</h2><i>Leitartikel</i></div>
  <p>${i.position.satz}</p>
  <p class="zeile">${i.position.zeile.join(' · ')}</p>
</section>

<section class="rubrik kundschaft" id="kunden">
  <div class="kopf"><h2>${i.kunden.label.toLowerCase()}</h2><i>Register</i></div>
  <p>${i.kunden.liste.map((k) => `<b>${k.name}</b>`).join('<i>·</i>')}</p>
</section>

<section class="rubrik machen">
  <div class="kopf"><h2>${i.disziplinen.label.toLowerCase()}</h2><i>Rubriken</i></div>
  <div class="drei">
    ${i.disziplinen.liste.map((d) => `<div class="kasten"><h3>${d.titel.toLowerCase()}</h3><p>${d.text}</p></div>`).join('')}
  </div>
</section>

<section class="rubrik" id="team">
  <div class="kopf"><h2>${i.team.titel.toLowerCase()}</h2><i>${i.team.label}</i></div>
  <div class="moden">
    ${i.team.liste.map((m) => `
    <figure>
      <img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy">
      <figcaption><b>${m.name}</b>${m.rolle.join(' · ')}</figcaption>
    </figure>`).join('')}
  </div>
  <div class="notizen">
    ${i.team.bloecke.map((x) => `<p><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
  </div>
</section>

<section class="rubrik gruende">
  <div class="kopf"><h2>${i.gruende.titel.toLowerCase()}</h2><i>Drei Gründe</i></div>
  <div class="drei">
    ${i.gruende.liste.map((g) => `
    <div class="kasten"><span class="nr">Nº ${g.nr}</span><h3>${g.titel}</h3><p>${g.text}</p></div>`).join('')}
  </div>
</section>

<section class="rubrik faq">
  <div class="kopf"><h2>${i.faq.titel.toLowerCase()}</h2><i>${i.faq.label}</i></div>
  ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
</section>

<section class="ruecken" id="kontakt">
  <p class="oben">${i.schluss.auftakt}</p>
  <h2>${i.schluss.titel.toLowerCase()}</h2>
  <a class="knopf" href="mailto:${i.schluss.mail}">${i.schluss.knopf}</a>
  <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
</section>
`;
};

export default {
  name: 'Etikett Grün',
  idee: 'Das flaschengrüne Magazin-Cover: fette Kleinbuchstaben-Marke, dichtes Fotoraster, goldene Serifen-Akzente.',
  stil,
  koerper,
};
