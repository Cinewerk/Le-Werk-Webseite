/**
 * Entwurf 17 — Rosé.
 *
 * Nach Simons fünftem Referenzbild: die Café-Seite in Altrosa — eine
 * staubige Rosafläche, dunkles Weinrot für die Serifen, mittige ruhige
 * Sätze, und unten eine Reihe kleiner, warm getonter Fotos. Alles wirkt
 * wie bei Kerzenlicht. Animationen: Die Fotoreihe treibt langsam
 * seitwärts, die Sätze blenden weich auf.
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
  --rosa: #d9a1a4;
  --rosa-tief: #cf9295;
  --wein: #571f1d;
  --hell: #f4e3dd;
  --serif: 'Bodoni Moda', Georgia, serif;
  --grotesk: 'Helvetica Neue', Arial, sans-serif;
  --rand: clamp(1.25rem, 4vw, 3.5rem);
}

body {
  background: var(--rosa);
  color: var(--wein);
  font: 400 15px/1.7 var(--grotesk);
}

/* ── Kopf ── */
.kopf {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem var(--rand);
  font-size: 11px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.kopf .marke { font-family: var(--serif); font-size: 19px; letter-spacing: 0.02em; text-transform: none; }
.kopf a { text-decoration: none; }
.kopf a:hover { text-decoration: underline; text-underline-offset: 0.35em; }
.kopf nav { display: flex; gap: 1.5rem; }

/* ── Auftakt: der ruhige Satz ── */
.auftakt { text-align: center; padding: clamp(3rem, 9vh, 6rem) var(--rand) clamp(2rem, 5vh, 3.5rem); }

.auftakt .klein { font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 1.5rem; }

.auftakt h1 {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(1.75rem, 4.2vw, 3.5rem);
  line-height: 1.25;
  max-width: 22ch;
  margin: 0 auto;
  text-wrap: balance;
}

.auftakt .satz { max-width: 42ch; margin: 1.5rem auto 0; font-size: 14px; color: rgba(87, 31, 29, 0.8); }

.weich { opacity: 0; transform: translateY(10px); animation: weich 900ms ease forwards; }
.weich:nth-child(2) { animation-delay: 200ms; }
.weich:nth-child(3) { animation-delay: 400ms; }
@keyframes weich { to { opacity: 1; transform: none; } }

/* ── Die treibende Fotoreihe ── */
.reihe { overflow: hidden; padding-block: clamp(1.5rem, 4vh, 2.5rem); }
.reihe .spur { display: flex; gap: clamp(0.9rem, 2vw, 1.5rem); width: max-content; animation: treiben 46s linear infinite; }
.reihe:hover .spur { animation-play-state: paused; }
@keyframes treiben { to { transform: translateX(-50%); } }

.reihe figure { width: clamp(9rem, 16vw, 13rem); flex: none; }
.reihe img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; filter: sepia(0.28) saturate(0.9) brightness(0.97); border-radius: 3px; }
.reihe figcaption { padding-top: 0.35rem; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; text-align: center; color: rgba(87, 31, 29, 0.75); }

/* ── Speisekarten-Abschnitte ── */
.gang { max-width: 44rem; margin: 0 auto; padding: clamp(2.5rem, 6vh, 4rem) var(--rand); text-align: center; }

.gang .rubrik { font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase; }
.gang .rubrik::before, .gang .rubrik::after { content: ' — '; }

.gang h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(1.5rem, 3.2vw, 2.5rem); margin: 0.5rem 0 1.5rem; }
.gang h2 em { font-style: italic; }

/* Arbeiten als Menüzeilen mit Punktlinien */
.menue { text-align: left; }
.menue li { display: flex; align-items: baseline; gap: 0.6rem; padding: 0.55rem 0; }
.menue .wer { font-family: var(--serif); font-weight: 500; font-size: clamp(1.0625rem, 2vw, 1.375rem); white-space: nowrap; }
.menue .punkte { flex: 1; border-bottom: 1.5px dotted rgba(87, 31, 29, 0.55); transform: translateY(-4px); }
.menue .was { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; text-align: right; color: rgba(87, 31, 29, 0.8); }

/* Kunden als Weinkarte */
.weinkarte { font-family: var(--serif); font-size: clamp(1.0625rem, 2vw, 1.5rem); line-height: 2; }
.weinkarte i { font-style: italic; color: rgba(87, 31, 29, 0.55); padding: 0 0.4em; }

/* Disziplinen als drei Gänge */
.gaenge { display: grid; gap: 1.5rem; text-align: center; }
.gaenge h3 { font-family: var(--serif); font-weight: 500; font-style: italic; font-size: clamp(1.25rem, 2.4vw, 1.75rem); }
.gaenge h3::after { content: ''; display: block; width: 2.5rem; height: 1px; background: var(--wein); margin: 0.6rem auto; }
.gaenge p { font-size: 13.5px; color: rgba(87, 31, 29, 0.85); max-width: 46ch; margin: 0 auto; }

/* Team wie das Hauspersonal */
.haus { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(1rem, 2.4vw, 1.75rem); }
.haus img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; filter: sepia(0.28) saturate(0.85); border-radius: 3px; transition: filter 350ms; }
.haus figure:hover img { filter: none; }
.haus figcaption { padding-top: 0.45rem; }
.haus .name { font-family: var(--serif); font-weight: 500; font-size: 15.5px; }
.haus .rolle { font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(87, 31, 29, 0.75); }

.gang .saetze { margin-top: 1.5rem; display: grid; gap: 0.8rem; font-size: 13.5px; color: rgba(87, 31, 29, 0.85); }
.gang .saetze b { font-family: var(--serif); font-weight: 500; color: var(--wein); }

/* Gründe */
.gruende { display: grid; gap: 1.25rem; }
.gruende > div { background: var(--rosa-tief); border-radius: 4px; padding: 1.4rem 1.5rem; }
.gruende .nr { font-family: var(--serif); font-style: italic; }
.gruende h3 { font-family: var(--serif); font-weight: 500; font-size: clamp(1.125rem, 2vw, 1.5rem); margin: 0.2rem 0 0.4rem; }
.gruende p { font-size: 13.5px; color: rgba(87, 31, 29, 0.88); }

/* FAQ */
.faq { text-align: left; }
.faq details { border-bottom: 1px solid rgba(87, 31, 29, 0.4); }
.faq details:first-of-type { border-top: 1px solid rgba(87, 31, 29, 0.4); }
.faq summary { list-style: none; cursor: pointer; padding: 0.9rem 0; font-family: var(--serif); font-weight: 500; font-size: 15.5px; }
.faq summary::-webkit-details-marker { display: none; }
.faq details[open] summary { font-style: italic; }
.faq details p { padding-bottom: 1rem; font-size: 13.5px; color: rgba(87, 31, 29, 0.85); }

/* Schluss */
.schluss { text-align: center; padding: clamp(3rem, 8vh, 5rem) var(--rand) clamp(4rem, 10vh, 7rem); }
.schluss .oben { font-size: 10.5px; letter-spacing: 0.3em; text-transform: uppercase; }
.schluss h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(1.875rem, 4.6vw, 3.75rem); line-height: 1.15; margin: 0.6rem 0 1.75rem; }
.schluss h2 em { font-style: italic; }
.schluss a.knopf { display: inline-block; background: var(--wein); color: var(--hell); border-radius: 999px; padding: 0.9em 2.4em; text-decoration: none; font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; }
.schluss a.knopf:hover { background: #431715; }
.schluss .mail { display: block; margin-top: 1.1rem; font-family: var(--serif); font-style: italic; }

@media (min-width: 780px) {
  .gaenge { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .haus { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  const fotos = [
    ...i.arbeiten.liste.map((a) => ({ bild: a.bild, zeile: a.kunde })),
    { bild: 'bts/bts-loft.jpg', zeile: 'Hinter den Kulissen' },
    { bild: 'krafthaus/haus-02.jpg', zeile: 'Im Krafthaus' },
  ];
  return `
<header class="kopf">
  <span class="marke">${i.marke}</span>
  <nav>
    <a href="#arbeiten">Arbeiten</a>
    <a href="#team">Team</a>
    <a href="#kontakt">Kontakt</a>
  </nav>
</header>

<section class="auftakt">
  <p class="klein weich">${i.gattung} — im Herzen von Köln</p>
  <h1 class="weich">${i.claim}</h1>
  <p class="satz weich">${i.position.auftakt} ${i.position.satz} — ${i.position.zeile.join(' · ')}</p>
</section>

<div class="reihe" aria-label="Einblicke">
  <div class="spur">
    ${[...fotos, ...fotos].map((f) => `
    <figure>
      <img src="${b(f.bild)}" alt="${f.zeile}" loading="lazy">
      <figcaption>${f.zeile}</figcaption>
    </figure>`).join('')}
  </div>
</div>

<section class="gang" id="arbeiten">
  <p class="rubrik">${i.arbeiten.label}</p>
  <h2>Unsere <em>Auswahl</em></h2>
  <ol class="menue">
    ${i.arbeiten.liste.map((a) => `
    <li>
      <span class="wer">${a.kunde}</span>
      <span class="punkte"></span>
      <span class="was">${a.titel} · ${a.formate.join(' · ')}</span>
    </li>`).join('')}
  </ol>
</section>

<section class="gang" id="kunden">
  <p class="rubrik">${i.kunden.label}</p>
  <h2>Das <em>Haus</em> empfiehlt</h2>
  <p class="weinkarte">${i.kunden.liste.map((k) => k.name).join('<i>·</i>')}</p>
</section>

<section class="gang">
  <p class="rubrik">${i.disziplinen.label}</p>
  <h2>Drei <em>Gänge</em></h2>
  <div class="gaenge">
    ${i.disziplinen.liste.map((d) => `<div><h3>${d.titel}</h3><p>${d.text}</p></div>`).join('')}
  </div>
</section>

<section class="gang" id="team">
  <p class="rubrik">${i.team.label}</p>
  <h2>${i.team.titel.replace('Unser ', 'Unser <em>')}</em></h2>
  <div class="haus">
    ${i.team.liste.map((m) => `
    <figure>
      <img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy">
      <figcaption><p class="name">${m.name}</p><p class="rolle">${m.rolle.join(' · ')}</p></figcaption>
    </figure>`).join('')}
  </div>
  <div class="saetze">
    ${i.team.bloecke.map((x) => `<p><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
  </div>
</section>

<section class="gang">
  <p class="rubrik">${i.gruende.titel}</p>
  <h2>Drei gute <em>Gründe</em></h2>
  <div class="gruende">
    ${i.gruende.liste.map((g) => `
    <div><span class="nr">Nº ${g.nr}</span><h3>${g.titel}</h3><p>${g.text}</p></div>`).join('')}
  </div>
</section>

<section class="gang faq">
  <p class="rubrik">${i.faq.label}</p>
  <h2>${i.faq.titel.replace('Kurz', 'Kurz <em>')}</em></h2>
  ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
</section>

<section class="schluss" id="kontakt">
  <p class="oben">La riserva — der Tisch ist frei</p>
  <h2>${i.schluss.auftakt} <em>${i.schluss.titel}</em></h2>
  <a class="knopf" href="mailto:${i.schluss.mail}">${i.schluss.knopf}</a>
  <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
</section>
`;
};

export default {
  name: 'Rosé',
  idee: 'Altrosa und Weinrot wie im Café: mittige Serifensätze, Punktlinien-Menü, eine warm getonte Fotoreihe treibt.',
  stil,
  koerper,
};
