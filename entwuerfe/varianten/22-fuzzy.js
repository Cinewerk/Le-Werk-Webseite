/**
 * Entwurf 22 — Fellwarm.
 *
 * Nach warmnfuzzy.tv, aus Simons Aufnahme und der Seite selbst. Die
 * Züge der Vorlage, in eigenem Code:
 *
 *   ZELLENKOPF   Kopfzeile aus Zellen mit senkrechten Trennern:
 *                Wortmarke, Einordnungssatz, "Neueste Arbeit", dann
 *                WORK / INFO / CONTACT.
 *   GLITCH-HELD  Dunkler Raum, drei langsam kippende Objekte mit
 *                RGB-Versatz und Messrahmen wie aus einem Tracker,
 *                unten die Firmenzeile in Versalien.
 *   POLYGONMASKE Im Werkraster liegt eine Kachel als Farbfläche; erst
 *                ein gedrehtes Vieleck-Fenster am Zeiger gibt das Motiv
 *                frei.
 *   SENFFLÄCHE   Services auf Senfgelb, Kategorien als Vielecke mit
 *                Zählern, dazu die Grabber-Zeile.
 *   LAUFBAND     Gelbes Band in Versalien quer über die Naht zum Fuß.
 *   KOBALTFUSS   Blauer Fuß mit Mailzeile oben, Riesenwortmarke unten
 *                angeschnitten, Social-Zeile, ein kippender Aufkleber
 *                überlappt die Kanten.
 *
 * Die Wortmarke der Vorlage ist handgezeichnete Blobschrift — Poppins
 * ExtraBold steht ein. Die 3D-Objekte sind dort echte Renderings; hier
 * vertreten geklippte Setfotos mit Farbkanal-Versatz, bis Simon
 * Renderings oder Freisteller liefert.
 */

const stil = `
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('../src/styles/fonts/poppins-800-normal-latin.woff2') format('woff2');
}

:root {
  --nacht: #101014;
  --papier: #f2f0eb;
  --senf: #d9b832;
  --kobalt: #2b2fd6;
  --marker: #b8e34d;
  --grotesk: 'Helvetica Neue', Arial, sans-serif;
  --fett: 'Poppins', 'Helvetica Neue', sans-serif;
}

body {
  background: var(--nacht);
  color: var(--papier);
  font: 500 15px/1.5 var(--grotesk);
}

a { color: inherit; text-decoration: none; }

/* ── Zellenkopf ── */
.kopf {
  position: sticky;
  top: 0;
  z-index: 40;
  display: grid;
  grid-template-columns: auto 1fr auto auto auto auto;
  align-items: stretch;
  background: var(--nacht);
  border-bottom: 1px solid rgba(242, 240, 235, 0.25);
  font-size: 13px;
}

.kopf > * {
  display: flex;
  align-items: center;
  padding: 14px 18px;
  border-right: 1px solid rgba(242, 240, 235, 0.25);
  white-space: nowrap;
}

.kopf > :last-child { border-right: 0; }
.kopf .marke { font-family: var(--fett); font-weight: 800; font-size: 17px; letter-spacing: 0.01em; }
.kopf .satz { color: rgba(242, 240, 235, 0.7); overflow: hidden; text-overflow: ellipsis; }
.kopf .satz u { color: var(--papier); text-underline-offset: 3px; }
.kopf .neu img { width: 26px; height: 26px; object-fit: cover; margin-right: 8px; }
.kopf a.punkt:hover { background: var(--papier); color: var(--nacht); }

/* ── Video-Held mit Vieleck-Auftritt ──
   Der Ladeauftritt der Vorlage, aus Simons Aufnahme abgelesen: Beim
   Ankommen steht eine kobaltblaue Fläche, in der Mitte öffnet sich ein
   kleines Vieleck-Fenster mit dem bereits laufenden Video und wächst,
   bis es den ganzen Held füllt. Erst danach tritt die Firmenzeile auf.

   Als clip-path-Animation zwischen zwei Sechsecken mit gleicher
   Punktzahl — nur so rechnet der Browser den Übergang weich. Das große
   Sechseck ragt weit über die Kanten hinaus, damit am Ende keine
   Schräge mehr im Bild steht. */
.held {
  position: relative;
  min-height: calc(100svh - 49px);
  display: grid;
  align-content: end;
  overflow: hidden;
  padding: 0 24px 20px;
  background: var(--kobalt);
}

.held video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(50% 30%, 62% 42%, 62% 58%, 50% 70%, 38% 58%, 38% 42%);
  animation: fenster-auf 1700ms cubic-bezier(0.65, 0, 0.2, 1) 500ms forwards;
}

@keyframes fenster-auf {
  to { clip-path: polygon(50% -80%, 160% 10%, 160% 90%, 50% 180%, -60% 90%, -60% 10%); }
}

.held .firmenzeile {
  position: relative;
  z-index: 1;
  font-family: var(--fett);
  font-weight: 800;
  font-size: clamp(1.5rem, 3.8vw, 3.4rem);
  letter-spacing: 0.005em;
  text-transform: uppercase;
  line-height: 1;
  text-shadow: 0 2px 26px rgba(0, 0, 0, 0.55);
  opacity: 0;
  transform: translateY(0.4em);
  animation: zeile-auf 700ms cubic-bezier(0.22, 0.61, 0.36, 1) 1900ms forwards;
}

@keyframes zeile-auf { to { opacity: 1; transform: none; } }

@media (prefers-reduced-motion: reduce) {
  .held video { clip-path: none; animation: none; }
  .held .firmenzeile { opacity: 1; transform: none; animation: none; }
}

/* ── WORK ── */
.werkteil { padding: 8vh 24px 10vh; }

.werkteil .kopfzeile { display: flex; justify-content: space-between; align-items: end; margin-bottom: 20px; }
.werkteil h2 {
  font-family: var(--fett);
  font-weight: 800;
  font-size: clamp(4rem, 12vw, 11rem);
  line-height: 0.8;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}
.werkteil .mehr { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: underline; text-underline-offset: 4px; }

.raster { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 24px; }

.stueck { position: relative; }
.stueck img, .stueck .flaeche { width: 100%; object-fit: cover; display: block; }
.stueck figcaption { display: flex; justify-content: space-between; padding-top: 8px; font-size: 12.5px; letter-spacing: 0.06em; text-transform: uppercase; }
.stueck .jahr { color: rgba(242, 240, 235, 0.55); }

.stueck--a { grid-column: 1 / span 3; }
.stueck--a img { aspect-ratio: 1 / 1; }
.stueck--b { grid-column: 4 / span 4; align-self: start; }
.stueck--b img { aspect-ratio: 16 / 10; }
.stueck--c { grid-column: 8 / span 5; }

/* Die Farbfläche mit dem Vieleck-Fenster am Zeiger */
.fensterkachel { position: relative; aspect-ratio: 5 / 4; background: #21c55d; overflow: hidden; cursor: none; }

.fensterkachel img {
  position: absolute;
  left: 0;
  top: 0;
  width: 68%;
  aspect-ratio: 4 / 3;
  clip-path: polygon(50% 0%, 93% 25%, 84% 78%, 38% 98%, 4% 60%, 12% 16%);
  transform: translate(-50%, -50%) rotate(12deg);
  opacity: 0;
  transition: opacity 160ms linear;
  will-change: left, top, transform;
}

.fensterkachel:hover img { opacity: 1; }

.raster + .zweite { margin-top: 24px; }
.zweite { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: 24px; }
.stueck--d { grid-column: 1 / span 5; }
.stueck--d img { aspect-ratio: 16 / 10; }
.stueck--e { grid-column: 6 / span 3; }
.stueck--e img { aspect-ratio: 4 / 5; }
.stueck--f { grid-column: 9 / span 4; }
.stueck--f img { aspect-ratio: 1 / 1; }

/* ── Senffläche ── */
.senf { background: var(--senf); color: var(--nacht); padding: 10vh 24px; }

.senf .gross {
  font-family: var(--fett);
  font-weight: 800;
  font-size: clamp(1.75rem, 4.6vw, 4rem);
  line-height: 1.02;
  letter-spacing: -0.01em;
  text-align: center;
  max-width: 22ch;
  margin: 0 auto;
}

.senf .tiefer { display: block; width: fit-content; margin: 4vh auto 8vh; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: underline; text-underline-offset: 4px; }

.senf .grabber { font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 14px; }

.kategorien { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }

.kategorie { border: 1px solid rgba(16, 16, 20, 0.35); padding: 20px; display: grid; gap: 16px; }

.kategorie .form {
  width: 70%;
  margin: 0 auto;
  aspect-ratio: 1;
  object-fit: cover;
  clip-path: polygon(48% 2%, 92% 20%, 98% 64%, 62% 98%, 12% 84%, 4% 30%);
  transition: transform 600ms cubic-bezier(0.22, 0.61, 0.36, 1);
}

.kategorie:hover .form { transform: rotate(-8deg) scale(1.05); }

.kategorie .zeile { display: flex; justify-content: space-between; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; font-weight: 700; }
.kategorie .anzahl { color: rgba(16, 16, 20, 0.55); }
.kategorie p.text { font-size: 13.5px; line-height: 1.5; text-transform: none; letter-spacing: 0; }

/* ── Weitere Stimmen der Vorlage: Gründe + FAQ, dunkel dazwischen ── */
.zwischen { padding: 9vh 24px; max-width: 74rem; margin: 0 auto; }
.zwischen h2 { font-family: var(--fett); font-weight: 800; text-transform: uppercase; font-size: clamp(1.75rem, 4vw, 3.25rem); line-height: 1; margin-bottom: 3vh; }
.zwischen .gruende { display: grid; gap: 18px; }
.zwischen .grund { border-top: 1px solid rgba(242, 240, 235, 0.3); padding-top: 12px; }
.zwischen .grund b { display: block; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
.zwischen .grund p { color: rgba(242, 240, 235, 0.7); max-width: 60ch; }

.zwischen details { border-top: 1px solid rgba(242, 240, 235, 0.3); }
.zwischen details:last-of-type { border-bottom: 1px solid rgba(242, 240, 235, 0.3); }
.zwischen summary { list-style: none; cursor: pointer; padding: 12px 0; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; font-size: 14px; }
.zwischen summary::-webkit-details-marker { display: none; }
.zwischen summary::before { content: '+ '; color: var(--senf); }
.zwischen details[open] summary::before { content: '– '; }
.zwischen details p { padding-bottom: 14px; color: rgba(242, 240, 235, 0.7); max-width: 64ch; }

/* Kundenzeile im Zellenstil */
.kundenzeile { display: flex; flex-wrap: wrap; border: 1px solid rgba(242, 240, 235, 0.3); border-right: 0; }
.kundenzeile li { flex: 1 1 auto; padding: 12px 16px; border-right: 1px solid rgba(242, 240, 235, 0.3); border-bottom: 1px solid rgba(242, 240, 235, 0.3); font-size: 12.5px; letter-spacing: 0.06em; text-transform: uppercase; text-align: center; }
.kundenzeile li:hover { background: var(--senf); color: var(--nacht); }

/* ── Laufband ── */
.band { background: var(--senf); color: var(--nacht); overflow: hidden; padding: 10px 0; }
.band .spur { display: flex; gap: 0.6em; width: max-content; animation: ziehen 16s linear infinite; }
.band span {
  font-family: var(--fett);
  font-weight: 800;
  font-size: clamp(2.25rem, 6vw, 5rem);
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  white-space: nowrap;
}
@keyframes ziehen { to { transform: translateX(-50%); } }

/* ── Kobaltfuß ── */
.fuss { background: var(--kobalt); position: relative; overflow: hidden; }

.fuss .oben {
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  border-bottom: 1px solid rgba(242, 240, 235, 0.35);
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.fuss .oben > * { padding: 14px 18px; border-right: 1px solid rgba(242, 240, 235, 0.35); }
.fuss .oben > :last-child { border-right: 0; }
.fuss .oben a:hover { background: var(--papier); color: var(--kobalt); }

.fuss .riesenmarke {
  display: block;
  text-align: center;
  font-family: var(--fett);
  font-weight: 800;
  font-size: clamp(4rem, 15.5vw, 15rem);
  line-height: 0.72;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  padding-top: 14vh;
  transform: translateY(0.12em);
  white-space: nowrap;
}

.fuss .aufkleber {
  position: absolute;
  left: 6%;
  bottom: 4%;
  width: clamp(6rem, 11vw, 9.5rem);
  aspect-ratio: 1;
  object-fit: cover;
  clip-path: polygon(50% 0%, 90% 22%, 100% 62%, 68% 98%, 18% 88%, 0% 40%);
  animation: taumeln 12s ease-in-out infinite;
  z-index: 2;
}
@keyframes taumeln { 50% { transform: rotate(14deg); } }

.fuss .unten {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  border-top: 1px solid rgba(242, 240, 235, 0.35);
  padding: 12px 18px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.fuss .unten nav { display: flex; gap: 20px; }
.fuss .unten a:hover { text-decoration: underline; text-underline-offset: 3px; }

@media (max-width: 860px) {
  .kopf { grid-template-columns: auto 1fr; }
  .kopf .satz, .kopf .neu { display: none; }
  .objekte { grid-template-columns: minmax(0, 1fr); }
  .raster > *, .zweite > * { grid-column: 1 / -1 !important; }
  .kategorien { grid-template-columns: minmax(0, 1fr); }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  const a = i.arbeiten.liste;
  const jahr = ['2026', '2025', '2026', '2025', '2026', '2025'];
  return `
<header class="kopf">
  <span class="marke">${i.marke}</span>
  <span class="satz">${i.marke} ist ein ${i.gattung}: <u>mehr dazu</u></span>
  <span class="neu"><img src="${b(a[0].bild)}" alt="">Neueste Arbeit: ${a[0].kunde}</span>
  <a class="punkt" href="#werk">Work</a>
  <a class="punkt" href="#info">Info</a>
  <a class="punkt" href="#kontakt">Contact</a>
</header>

<section class="held">
  <!-- muted und playsinline sind Bedingung dafür, dass mobile Browser
       selbst starten — dieselbe Datei wie im Held der laufenden Seite. -->
  <video src="../public/videos/lewerk-hero.mp4" autoplay muted loop playsinline aria-hidden="true"></video>
  <p class="firmenzeile">Brand Content worth watching — ${i.gattung}, Köln</p>
</section>

<section class="werkteil" id="werk">
  <div class="kopfzeile">
    <h2>Work</h2>
    <a class="mehr" href="#werk">See more work</a>
  </div>
  <div class="raster">
    <figure class="stueck stueck--a">
      <img src="${b(a[3].bild)}" alt="${a[3].kunde} — ${a[3].titel}">
      <figcaption><span>${a[3].kunde}</span><span class="jahr">${jahr[3]}</span></figcaption>
    </figure>
    <figure class="stueck stueck--b">
      <img src="${b(a[5].bild)}" alt="${a[5].kunde} — ${a[5].titel}">
      <figcaption><span>${a[5].kunde}</span><span class="jahr">${jahr[5]}</span></figcaption>
    </figure>
    <figure class="stueck stueck--c">
      <div class="fensterkachel" data-fenster>
        <img src="${b(a[0].bild)}" alt="${a[0].kunde} — ${a[0].titel}">
      </div>
      <figcaption><span>${a[0].kunde}</span><span class="jahr">${jahr[0]}</span></figcaption>
    </figure>
  </div>
  <div class="zweite">
    <figure class="stueck stueck--d">
      <img src="${b(a[2].bild)}" alt="${a[2].kunde} — ${a[2].titel}">
      <figcaption><span>${a[2].kunde}</span><span class="jahr">${jahr[2]}</span></figcaption>
    </figure>
    <figure class="stueck stueck--e">
      <img src="${b(a[1].bild)}" alt="${a[1].kunde} — ${a[1].titel}">
      <figcaption><span>${a[1].kunde}</span><span class="jahr">${jahr[1]}</span></figcaption>
    </figure>
    <figure class="stueck stueck--f">
      <img src="${b(a[4].bild)}" alt="${a[4].kunde} — ${a[4].titel}">
      <figcaption><span>${a[4].kunde}</span><span class="jahr">${jahr[4]}</span></figcaption>
    </figure>
  </div>
</section>

<section class="senf">
  <p class="gross">${i.disziplinen.liste.map((d) => d.titel).join(' & ')} — ${i.position.satz}</p>
  <a class="tiefer" href="#info">Dig deeper</a>
  <p class="grabber">${i.gruende.liste[0].titel}.</p>
  <div class="kategorien">
    ${i.disziplinen.liste.map((d, n) => `
    <div class="kategorie">
      <img class="form" src="${b(d.bild)}" alt="${d.titel}" loading="lazy">
      <p class="zeile"><span>${d.titel}</span><span class="anzahl">(${[6, 3, 2][n]})</span></p>
      <p class="text">${d.text}</p>
    </div>`).join('')}
  </div>
</section>

<section class="zwischen" id="info">
  <h2>${i.gruende.titel}</h2>
  <div class="gruende">
    ${i.gruende.liste.map((g) => `<div class="grund"><b>${g.nr} — ${g.titel}</b><p>${g.text}</p></div>`).join('')}
  </div>
  <h2 style="margin-top:8vh">${i.kunden.label}</h2>
  <ul class="kundenzeile">${i.kunden.liste.map((k) => `<li>${k.name}</li>`).join('')}</ul>
  <h2 style="margin-top:8vh">${i.team.titel} + ${i.faq.titel}</h2>
  <div class="gruende" style="margin-bottom:3vh">
    ${i.team.liste.map((m) => `<div class="grund"><b>${m.name}</b><p>${m.rolle.join(' · ')}</p></div>`).join('')}
    ${i.team.bloecke.map((x) => `<div class="grund"><b>${x.auftakt}</b><p>${x.text}</p></div>`).join('')}
  </div>
  ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
</section>

<div class="band" aria-hidden="true">
  <div class="spur">
    ${Array(6).fill(`<span>${i.schluss.auftakt} ${i.schluss.titel} —</span>`).join('')}
  </div>
</div>

<footer class="fuss" id="kontakt">
  <div class="oben">
    <a href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
    <a href="#werk">Work</a>
    <a href="#info">Info</a>
    <a href="#kontakt">Contact</a>
  </div>
  <span class="riesenmarke">${i.marke}</span>
  <img class="aufkleber" src="${b('bts/bts-transporter.jpg')}" alt="" aria-hidden="true">
  <div class="unten">
    <nav>
      <a href="#" onclick="return false">Instagram</a>
      <a href="#" onclick="return false">LinkedIn</a>
    </nav>
    <span>© ${i.marke} — ${i.gattung}, Köln</span>
  </div>
</footer>

<script>
(function () {
  /* Das Vieleck-Fenster folgt dem Zeiger und dreht sich leicht mit der
     Bewegung — der Kern der Werkkachel aus der Vorlage. */
  var kachel = document.querySelector('[data-fenster]');
  var bild = kachel.querySelector('img');
  var winkel = 12;
  kachel.addEventListener('pointermove', function (e) {
    var r = kachel.getBoundingClientRect();
    var x = e.clientX - r.left;
    var y = e.clientY - r.top;
    winkel += (e.movementX || 0) * 0.15;
    winkel = Math.max(-30, Math.min(40, winkel));
    bild.style.left = x + 'px';
    bild.style.top = y + 'px';
    bild.style.transform = 'translate(-50%, -50%) rotate(' + winkel.toFixed(1) + 'deg)';
  });
})();
</script>
`;
};

export default {
  name: 'Fellwarm',
  idee: 'Nach warmnfuzzy.tv: Zellenkopf, Glitch-Objekte mit Messrahmen, Vieleck-Fenster am Zeiger, Senffläche, Kobaltfuß.',
  stil,
  koerper,
};
