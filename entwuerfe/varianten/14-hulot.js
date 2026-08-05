/**
 * Entwurf 14 — Ferien.
 *
 * Nach Simons zweitem Referenzbild: das französische Filmplakat der
 * Fünfziger — kobaltblaue Fläche, weiße Serifen mittig gestapelt, genau
 * ein roter Kasten, unten eine handgezogene Wellenlinie. Die ganze Seite
 * ist ein Plakat in Akten. Animationen: Die Wellen ziehen langsam, die
 * Stapel treten von unten auf, der rote Kasten kippt beim Überfahren.
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
  --kobalt: #2c50a7;
  --kobalt-tief: #24438f;
  --kreide: #f3efe4;
  --rot: #d92a1c;
  --serif: 'Bodoni Moda', Georgia, serif;
  --grotesk: 'Helvetica Neue', Arial, sans-serif;
  --rand: clamp(1.25rem, 4vw, 3rem);
}

body {
  background: var(--kobalt);
  color: var(--kreide);
  font: 400 15.5px/1.65 var(--grotesk);
  text-align: center;
}

/* ── Kopf ── */
.kopf {
  display: flex;
  justify-content: space-between;
  padding: 1.25rem var(--rand);
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.kopf a { text-decoration: none; }
.kopf a:hover { text-decoration: underline; text-underline-offset: 0.4em; }

/* ── Der Plakatstapel ── */
.plakat { padding: clamp(2rem, 6vh, 4rem) var(--rand) 0; }

.plakat .klein {
  font-size: clamp(11px, 1.3vw, 14px);
  letter-spacing: 0.32em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.plakat h1 {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(2.25rem, 7vw, 6rem);
  line-height: 1.08;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  max-width: 14ch;
  margin: 0 auto;
}

.stapel > * { opacity: 0; transform: translateY(16px); animation: auftritt 700ms ease forwards; }
.stapel > *:nth-child(1) { animation-delay: 150ms; }
.stapel > *:nth-child(2) { animation-delay: 350ms; }
.stapel > *:nth-child(3) { animation-delay: 550ms; }
.stapel > *:nth-child(4) { animation-delay: 750ms; }
@keyframes auftritt { to { opacity: 1; transform: none; } }

.plakat .von { margin: 1.75rem 0 1rem; font-size: clamp(11px, 1.3vw, 14px); letter-spacing: 0.32em; text-transform: uppercase; }

/* Der eine rote Kasten */
.rotkasten {
  display: inline-block;
  background: var(--kreide);
  color: var(--rot);
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(1.5rem, 3.6vw, 3rem);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.15em 0.5em;
  rotate: -1deg;
  transition: rotate 260ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.rotkasten:hover { rotate: 1.2deg; }

.plakat .unterzeile { margin-top: 1.25rem; font-family: var(--serif); font-style: italic; font-size: clamp(1rem, 1.8vw, 1.375rem); }

/* ── Die Welle ── */
.welle { overflow: hidden; line-height: 0; margin-top: clamp(2rem, 6vh, 4rem); }
.welle svg { width: 200%; height: clamp(2rem, 5vw, 3.5rem); animation: wellen 14s linear infinite; }
@keyframes wellen { to { transform: translateX(-50%); } }
.welle--still svg { animation: none; }

/* ── Akte ── */
.akt { padding: clamp(3rem, 8vh, 5.5rem) var(--rand); }

.akt .nummer { font-size: 11px; letter-spacing: 0.32em; text-transform: uppercase; margin-bottom: 1.25rem; }
.akt .nummer i { font-family: var(--serif); font-style: italic; letter-spacing: 0.05em; font-size: 15px; }

.akt h2 {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(1.75rem, 4.4vw, 3.5rem);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  line-height: 1.1;
  max-width: 18ch;
  margin: 0 auto 1.5rem;
}

/* Arbeiten: Filmkarten mit Kreiderahmen */
.filme { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(1rem, 2.6vw, 2rem); max-width: 62rem; margin: 0 auto; }

.film { border: 2px solid var(--kreide); padding: 0.7rem 0.7rem 1rem; transition: background 240ms, translate 240ms; }
.film:hover { background: var(--kobalt-tief); translate: 0 -0.3rem; }
.film img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; }
.film .wer { margin-top: 0.8rem; font-family: var(--serif); font-weight: 500; font-size: clamp(1.125rem, 2vw, 1.5rem); text-transform: uppercase; letter-spacing: 0.04em; }
.film .was { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(243, 239, 228, 0.75); margin-top: 0.2rem; }

/* Kunden: die Besetzungsliste */
.besetzung { max-width: 40rem; margin: 0 auto; font-family: var(--serif); font-size: clamp(1.125rem, 2.2vw, 1.625rem); line-height: 2; }
.besetzung b { font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; }
.besetzung i { color: rgba(243, 239, 228, 0.6); padding: 0 0.5em; font-style: normal; }

/* Disziplinen: drei Tafeln */
.tafeln { display: grid; gap: 1rem; max-width: 62rem; margin: 0 auto; text-align: center; }
.tafel { border: 2px solid var(--kreide); padding: 1.6rem 1.4rem; }
.tafel h3 { font-family: var(--serif); font-weight: 500; font-size: clamp(1.375rem, 2.6vw, 2rem); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.6rem; }
.tafel p { font-size: 14px; color: rgba(243, 239, 228, 0.88); max-width: 44ch; margin: 0 auto; }

/* Team: Silhouettenkarten */
.truppe { display: flex; flex-wrap: wrap; justify-content: center; gap: clamp(1rem, 2.6vw, 2rem); max-width: 62rem; margin: 0 auto; }
.kopfbild { width: clamp(9rem, 17vw, 12.5rem); }
.kopfbild img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border: 2px solid var(--kreide); filter: grayscale(1) contrast(1.1); transition: filter 300ms; }
.kopfbild:hover img { filter: none; }
.kopfbild .name { margin-top: 0.6rem; font-family: var(--serif); font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; font-size: 14px; }
.kopfbild .rolle { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(243, 239, 228, 0.7); }

.akt .saetze { max-width: 46rem; margin: 1.75rem auto 0; display: grid; gap: 0.9rem; font-size: 14.5px; }
.akt .saetze b { font-family: var(--serif); text-transform: uppercase; letter-spacing: 0.04em; font-weight: 500; }

/* Gründe: drei Sterne des Programms */
.programm { max-width: 46rem; margin: 0 auto; display: grid; gap: 1.5rem; }
.programm .stern { border-top: 1px solid rgba(243, 239, 228, 0.5); padding-top: 1.25rem; }
.programm .nr { font-family: var(--serif); font-style: italic; font-size: 15px; }
.programm h3 { font-family: var(--serif); font-weight: 500; font-size: clamp(1.25rem, 2.6vw, 2rem); text-transform: uppercase; letter-spacing: 0.04em; margin: 0.25rem 0 0.5rem; }
.programm p { font-size: 14.5px; color: rgba(243, 239, 228, 0.88); max-width: 52ch; margin: 0 auto; }

/* FAQ */
.faq { max-width: 44rem; margin: 0 auto; text-align: left; }
.faq details { border-bottom: 1px solid rgba(243, 239, 228, 0.5); }
.faq details:first-of-type { border-top: 1px solid rgba(243, 239, 228, 0.5); }
.faq summary { list-style: none; cursor: pointer; padding: 0.95rem 0; font-family: var(--serif); font-weight: 500; font-size: clamp(1rem, 1.8vw, 1.25rem); }
.faq summary::-webkit-details-marker { display: none; }
.faq summary::before { content: '❋ '; color: var(--kreide); }
.faq details[open] summary::before { color: var(--rot); }
.faq details p { padding-bottom: 1.1rem; font-size: 14px; color: rgba(243, 239, 228, 0.85); }

/* Schluss */
.schluss { padding: clamp(3rem, 8vh, 5.5rem) var(--rand) clamp(4rem, 9vh, 6rem); }
.schluss .klein { font-size: 11px; letter-spacing: 0.32em; text-transform: uppercase; margin-bottom: 1rem; }
.schluss h2 { font-family: var(--serif); font-weight: 500; font-size: clamp(1.75rem, 4.6vw, 3.75rem); text-transform: uppercase; letter-spacing: 0.03em; max-width: 16ch; margin: 0 auto 1.75rem; line-height: 1.12; }
.schluss .mail { display: block; margin-top: 1.25rem; font-family: var(--serif); font-style: italic; font-size: 15px; }

.fuss { padding: 0 var(--rand) 2rem; font-size: 10.5px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(243, 239, 228, 0.65); }

@media (min-width: 820px) {
  .filme { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .tafeln { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
`;

const welle = (still = '') => `
<div class="welle ${still}" aria-hidden="true">
  <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
    <path d="M0 30 Q 37.5 10, 75 30 T 150 30 T 225 30 T 300 30 T 375 30 T 450 30 T 525 30 T 600 30 T 675 30 T 750 30 T 825 30 T 900 30 T 975 30 T 1050 30 T 1125 30 T 1200 30"
      fill="none" stroke="#f3efe4" stroke-width="3"/>
  </svg>
</div>`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  return `
<header class="kopf">
  <a href="#oben">${i.marke}</a>
  <a href="#kontakt">Kontakt</a>
</header>

<section class="plakat" id="oben">
  <div class="stapel">
    <p class="klein">${i.gattung} — Köln zeigt</p>
    <h1>${i.claim.replace('Le Werk is a visual content studio crafting ', 'Brand Content worth watching').replace('brand content worth watching.', '')}</h1>
    <p class="von">Ein Studio von<br><span class="rotkasten">Filmemachern</span></p>
    <p class="unterzeile">${i.claim}</p>
  </div>
</section>

${welle()}

<section class="akt" id="arbeiten">
  <p class="nummer">Erster Akt · <i>${i.arbeiten.label}</i></p>
  <div class="filme">
    ${i.arbeiten.liste.map((a) => `
    <div class="film">
      <img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" loading="lazy">
      <p class="wer">${a.kunde}</p>
      <p class="was">${a.titel} · ${a.formate.join(' · ')}</p>
    </div>`).join('')}
  </div>
</section>

${welle('welle--still')}

<section class="akt" id="kunden">
  <p class="nummer">Zweiter Akt · <i>${i.kunden.label}</i></p>
  <p class="besetzung">${i.kunden.liste.map((k) => `<b>${k.name}</b>`).join('<i>·</i>')}</p>
</section>

${welle()}

<section class="akt">
  <p class="nummer">Dritter Akt · <i>${i.disziplinen.label}</i></p>
  <div class="tafeln">
    ${i.disziplinen.liste.map((d) => `<div class="tafel"><h3>${d.titel}</h3><p>${d.text}</p></div>`).join('')}
  </div>
  <p class="saetze" style="margin-top:1.5rem"><em style="font-family:var(--serif)">${i.position.auftakt}</em> ${i.position.satz}<br>
  <span style="font-size:11px;letter-spacing:0.24em;text-transform:uppercase">${i.position.zeile.join(' · ')}</span></p>
</section>

${welle('welle--still')}

<section class="akt" id="team">
  <p class="nummer">Vierter Akt · <i>${i.team.label}</i></p>
  <h2>${i.team.titel}</h2>
  <div class="truppe">
    ${i.team.liste.map((m) => `
    <div class="kopfbild">
      <img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy">
      <p class="name">${m.name}</p>
      <p class="rolle">${m.rolle.join(' · ')}</p>
    </div>`).join('')}
  </div>
  <div class="saetze">
    ${i.team.bloecke.map((x) => `<p><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
  </div>
</section>

${welle()}

<section class="akt">
  <p class="nummer">Fünfter Akt · <i>${i.gruende.titel}</i></p>
  <div class="programm">
    ${i.gruende.liste.map((g) => `
    <div class="stern"><span class="nr">Nº ${g.nr}</span><h3>${g.titel}</h3><p>${g.text}</p></div>`).join('')}
  </div>
</section>

${welle('welle--still')}

<section class="akt faq">
  <p class="nummer">Sechster Akt · <i>${i.faq.label}: ${i.faq.titel}</i></p>
  ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
</section>

${welle()}

<section class="schluss" id="kontakt">
  <p class="klein">Finale</p>
  <h2>${i.schluss.auftakt} ${i.schluss.titel}</h2>
  <a class="rotkasten" href="mailto:${i.schluss.mail}" style="text-decoration:none">${i.schluss.knopf}</a>
  <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
</section>

<p class="fuss">${i.marke} — ${i.gattung} · ${i.position.zeile.join(' · ')}</p>
`;
};

export default {
  name: 'Ferien',
  idee: 'Das Filmplakat der Fünfziger: Kobaltblau, weiße Serifen mittig, genau ein roter Kasten, ziehende Wellen.',
  stil,
  koerper,
};
