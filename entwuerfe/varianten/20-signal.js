/**
 * Entwurf 20 — Signal.
 *
 * Nach Simons achtem Referenzbild: der Buchdeckel — eine satte blaue
 * Fläche, ein einziges riesiges rotes Wort, diagonal gestellt und an den
 * Kanten beschnitten, sonst fast nichts. Jede Sektion der Seite ist so
 * ein Deckel: ein Wort, eine Diagonale, wenige Zeilen. Animation: Die
 * Wörter drehen sich beim Hereinscrollen in ihre Schräge und wandern
 * langsam mit dem Scrollen weiter.
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
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('../src/styles/fonts/poppins-400-normal-latin.woff2') format('woff2');
}

:root {
  --blau: #2f5bd7;
  --blau-tief: #2748ab;
  --rot: #e8391f;
  --weiss: #f4f2ec;
  --grotesk: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
  --rand: clamp(1.25rem, 4vw, 3rem);
}

body {
  background: var(--blau);
  color: var(--weiss);
  font: 400 15px/1.65 var(--grotesk);
}

/* ── Kopf wie ein Verlagsimpressum ── */
.kopf {
  position: fixed;
  inset: 0 0 auto;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem var(--rand);
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  mix-blend-mode: luminosity;
}

.kopf a { text-decoration: none; }

/* ── Deckel: eine Sektion = ein Buchcover ── */
.deckel {
  position: relative;
  min-height: 92svh;
  display: grid;
  align-content: end;
  padding: clamp(4rem, 10vh, 7rem) var(--rand) clamp(2.5rem, 6vh, 4rem);
  overflow: hidden;
  border-bottom: 1px solid rgba(244, 242, 236, 0.25);
}

.deckel--flach { min-height: 64svh; }

/* Das diagonale Riesenwort */
.wort {
  position: absolute;
  left: 50%;
  top: 42%;
  margin: 0;
  font-weight: 800;
  font-size: clamp(5rem, 22vw, 20rem);
  line-height: 0.8;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  color: var(--rot);
  white-space: nowrap;
  pointer-events: none;
  transform: translate(-50%, -50%) rotate(-24deg) scale(1.06);
  opacity: 0;
  transition: transform 900ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 500ms ease;
  will-change: transform;
}

.deckel.wach .wort { transform: translate(-50%, -50%) rotate(var(--dreh, 32deg)); opacity: 1; }

.deckel:nth-of-type(even) .wort { --dreh: -28deg; }
.deckel:nth-of-type(odd) .wort { --dreh: 32deg; }

/* Inhaltszeilen am Fuß, wie der Verlagsname auf dem Rücken */
.fussblock { position: relative; z-index: 1; display: grid; gap: 0.75rem; max-width: 34rem; }

.fussblock .klein { font-size: 11px; font-weight: 800; letter-spacing: 0.26em; text-transform: uppercase; opacity: 0.8; }
.fussblock .satz { font-size: clamp(0.9375rem, 1.6vw, 1.125rem); }
.fussblock .satz b { font-weight: 800; }

/* Listen im Fußblock */
.fussblock ul.knapp { display: flex; flex-wrap: wrap; gap: 0.4rem 1.2rem; font-size: 13px; }
.fussblock ul.knapp li { white-space: nowrap; }
.fussblock ul.knapp li::before { content: '— '; color: var(--rot); }

/* kleine Bildleiste, wo Bilder gebraucht werden */
.leiste { position: relative; z-index: 1; display: flex; gap: 0.7rem; flex-wrap: wrap; }
.leiste figure { width: clamp(5.5rem, 11vw, 8.5rem); }
.leiste img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; }
.leiste figcaption { font-size: 9.5px; letter-spacing: 0.1em; text-transform: uppercase; padding-top: 0.3rem; opacity: 0.8; }

/* aufklappbare Kurztexte */
.deckel details { max-width: 34rem; position: relative; z-index: 1; border-top: 1px solid rgba(244, 242, 236, 0.35); }
.deckel details:last-of-type { border-bottom: 1px solid rgba(244, 242, 236, 0.35); }
.deckel summary { list-style: none; cursor: pointer; padding: 0.6rem 0; font-weight: 800; font-size: 14px; }
.deckel summary::-webkit-details-marker { display: none; }
.deckel summary::before { content: '+ '; color: var(--rot); }
.deckel details[open] summary::before { content: '– '; }
.deckel details p { padding-bottom: 0.9rem; font-size: 13.5px; opacity: 0.9; max-width: 58ch; }

/* Der letzte Deckel: Kontakt */
.deckel--ende { align-content: center; text-align: center; border-bottom: 0; }
.deckel--ende .fussblock { max-width: none; justify-items: center; }
.deckel--ende a.knopf {
  display: inline-block;
  background: var(--weiss);
  color: var(--blau);
  padding: 0.9em 2.4em;
  text-decoration: none;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.deckel--ende a.knopf:hover { background: var(--rot); color: var(--weiss); }

/* Verlagszeile ganz unten */
.verlag { text-align: center; padding: 1.5rem var(--rand) 2rem; font-size: 11px; font-weight: 800; letter-spacing: 0.3em; text-transform: uppercase; opacity: 0.75; }
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  return `
<header class="kopf">
  <a href="#oben">${i.marke}</a>
  <a href="#kontakt">Kontakt</a>
</header>

<section class="deckel" id="oben" data-wach>
  <h1 class="wort" data-zieh>Le Werk</h1>
  <div class="fussblock">
    <p class="klein">${i.gattung} — Köln</p>
    <p class="satz"><b>${i.claim}</b></p>
    <p class="satz">${i.position.auftakt} ${i.position.satz}<br><span style="font-size:11px;letter-spacing:0.2em;text-transform:uppercase;opacity:0.8">${i.position.zeile.join(' · ')}</span></p>
  </div>
</section>

<section class="deckel" id="arbeiten" data-wach>
  <p class="wort" data-zieh>Work</p>
  <div class="fussblock">
    <p class="klein">${i.arbeiten.label}</p>
    <ul class="knapp">
      ${i.arbeiten.liste.map((a) => `<li>${a.kunde} — ${a.titel} · ${a.formate.join(' · ')}</li>`).join('')}
    </ul>
  </div>
  <div class="leiste" style="margin-top:1.25rem">
    ${i.arbeiten.liste.map((a) => `
    <figure><img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}" loading="lazy"><figcaption>${a.kunde}</figcaption></figure>`).join('')}
  </div>
</section>

<section class="deckel deckel--flach" id="kunden" data-wach>
  <p class="wort" data-zieh>Kunden</p>
  <div class="fussblock">
    <p class="klein">${i.kunden.label}</p>
    <ul class="knapp">${i.kunden.liste.map((k) => `<li>${k.name}</li>`).join('')}</ul>
  </div>
</section>

<section class="deckel deckel--flach" data-wach>
  <p class="wort" data-zieh>Machen</p>
  <div class="fussblock" style="margin-bottom:0.9rem">
    <p class="klein">${i.disziplinen.label}</p>
  </div>
  ${i.disziplinen.liste.map((d) => `<details><summary>${d.titel}</summary><p>${d.text}</p></details>`).join('')}
</section>

<section class="deckel" id="team" data-wach>
  <p class="wort" data-zieh>Team</p>
  <div class="fussblock">
    <p class="klein">${i.team.label} — ${i.team.titel}</p>
    <ul class="knapp">${i.team.liste.map((m) => `<li>${m.name} · ${m.rolle.join(' / ')}</li>`).join('')}</ul>
    ${i.team.bloecke.map((x) => `<p class="satz"><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
  </div>
  <div class="leiste" style="margin-top:1.25rem">
    ${i.team.liste.map((m) => `
    <figure><img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy"><figcaption>${m.name}</figcaption></figure>`).join('')}
  </div>
</section>

<section class="deckel deckel--flach" data-wach>
  <p class="wort" data-zieh>Warum</p>
  <div class="fussblock" style="margin-bottom:0.9rem">
    <p class="klein">${i.gruende.titel}</p>
  </div>
  ${i.gruende.liste.map((g) => `<details><summary>${g.nr} — ${g.titel}</summary><p>${g.text}</p></details>`).join('')}
</section>

<section class="deckel deckel--flach" data-wach>
  <p class="wort" data-zieh>Fragen</p>
  <div class="fussblock" style="margin-bottom:0.9rem">
    <p class="klein">${i.faq.label} — ${i.faq.titel}</p>
  </div>
  ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
</section>

<section class="deckel deckel--ende" id="kontakt" data-wach>
  <p class="wort" data-zieh>Hallo</p>
  <div class="fussblock">
    <p class="klein">${i.schluss.auftakt} ${i.schluss.titel}</p>
    <a class="knopf" href="mailto:${i.schluss.mail}">${i.schluss.knopf}</a>
    <a href="mailto:${i.schluss.mail}" style="font-size:13px">${i.schluss.mail}</a>
  </div>
</section>

<p class="verlag">${i.marke} — ${i.gattung}</p>

<script>
(() => {
  const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const deckel = document.querySelectorAll('[data-wach]');
  if (ruhig) { deckel.forEach((d) => d.classList.add('wach')); return; }

  const io = new IntersectionObserver((es) => {
    es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('wach'); io.unobserve(e.target); } });
  }, { threshold: 0.3 });
  deckel.forEach((d) => io.observe(d));

  // Die Woerter ziehen traege mit dem Scrollen weiter — je Deckel ein
  // kleiner Versatz um die Grundschraege herum.
  const woerter = [...document.querySelectorAll('[data-zieh]')];
  let laeuft = false;
  addEventListener('scroll', () => {
    if (!laeuft) { laeuft = true; requestAnimationFrame(tick); }
  }, { passive: true });
  const tick = () => {
    woerter.forEach((w) => {
      const el = w.closest('.deckel');
      if (!el.classList.contains('wach')) return;
      const r = el.getBoundingClientRect();
      const t = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
      const basis = getComputedStyle(el).getPropertyValue('--dreh') || '32deg';
      w.style.transform = 'translate(-50%, -50%) rotate(calc(' + basis + ' + ' + (t * 6).toFixed(2) + 'deg))';
    });
    laeuft = false;
  };
})();
</script>
`;
};

export default {
  name: 'Signal',
  idee: 'Der Buchdeckel: satte blaue Fläche, ein riesiges rotes Wort diagonal und angeschnitten — jede Sektion ein Cover.',
  stil,
  koerper,
};
