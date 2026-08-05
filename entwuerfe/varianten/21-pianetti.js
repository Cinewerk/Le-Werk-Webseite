/**
 * Entwurf 21 — Studio.
 *
 * Nach julienpianetti.com, das Simon 1:1 mit seinen Inhalten will. Die
 * Seite wurde im Browser vermessen (1440px) und ihr Werkzeugkasten
 * ausgelesen: GSAP mit ScrollTrigger, SplitText und MorphSVG, Lenis für
 * das weiche Scrollen, Schrift Suisse Int'l. Hier ist alles davon in
 * eigenem, abhängigkeitsfreiem Code nachgebaut:
 *
 *   WEICHES SCROLLEN   Nachlauf-Scroller wie Lenis: fester Rahmen, die
 *                      Seite gleitet per Transform dem Scrollwert nach.
 *   ZEILENAUFTRITT     Absätze werden zur Laufzeit in Zeilen zerlegt
 *                      (SplitText-Ersatz); jede Zeile steigt aus einer
 *                      Maske, gestaffelt, sobald sie ins Bild kommt.
 *   RIESENWORT         "Selected Work" zweizeilig, tritt beim Laden
 *                      buchstabenweise auf und zieht beim Scrollen
 *                      langsamer als die Seite — die Arbeiten schieben
 *                      sich darüber.
 *   CURSOR             Punkt mit Nachlauf; über den Arbeiten wächst er
 *                      zur beschrifteten Scheibe ("View"), über dem
 *                      Riesenwort zu "Discover" — in Differenzmischung,
 *                      damit er sich ins Schwarz frisst wie im Original.
 *   MARKEN             Graue Riesenliste mit Mittelpunkten; beim
 *                      Überfahren wird der Name schwarz und ein
 *                      Vorschaubild hängt sich an den Zeiger.
 *   LAUFBAND           Playground als endlos ziehende Bildspur mit
 *                      gelber Kantenmarke.
 *   FUSS               Vier Spalten mit Punktköpfen; die Werkliste
 *                      zeigt beim Überfahren Miniaturen am Zeiger.
 *   VORHANG            Statt des Preloaders: weißer Vorhang, der nach
 *                      dem Laden nach oben wegzieht.
 *
 * Maße aus der Messung: Einstieg 45px bei x=483 (Spalte 5 von 12),
 * Kacheln 459 × 574 mit 12px Fugen, Markennamen 54px, Tinte #0c0c0c.
 *
 * Suisse Int'l ist eine Kaufschrift und liegt nicht vor — Helvetica
 * Neue steht ein, die nächstliegende vorhandene Groteske.
 *
 * PLATZHALTER, bis Simon Material liefert: Die Kacheln sind Standbilder,
 * im Original laufen dort stumme Videos. About und Playground führen
 * noch nirgendwohin. Instagram/LinkedIn im Fuß sind unverlinkt.
 */

const stil = `
:root {
  --tinte: #0c0c0c;
  --papier: #ffffff;
  --grau: #b9b9b9;
  --grau-text: #9a9a9a;
  --gelb: #ffd84d;
  --grotesk: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --fuge: 12px;
  --einstieg: clamp(1.5rem, 3.13vw, 2.82rem);
}

html { scrollbar-width: thin; }

body {
  background: var(--papier);
  color: var(--tinte);
  font: 500 16px/1.4 var(--grotesk);
  letter-spacing: -0.01em;
  overflow-x: clip;
}

a { text-decoration: none; }

/* ── Vorhang beim Laden ── */
.vorhang {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: var(--papier);
  display: grid;
  place-items: center;
  transition: transform 900ms cubic-bezier(0.76, 0, 0.24, 1) 350ms;
}

.vorhang b { font-size: 20px; letter-spacing: -0.02em; opacity: 0; animation: puls 900ms ease 100ms forwards; }
@keyframes puls { to { opacity: 1; } }
body.bereit .vorhang { transform: translateY(-100%); }

/* ── Weiches Scrollen: fester Rahmen + Höhenhalter ── */
.glatt { position: fixed; inset: 0 0 auto; will-change: transform; }
.halter { pointer-events: none; }

@media (prefers-reduced-motion: reduce) {
  .glatt { position: static; }
  .halter { display: none; }
}

/* ── Kopfzeile ── */
.kopf {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 18px var(--fuge);
  font-size: 14px;
  mix-blend-mode: difference;
  color: #fff;
}

.kopf .marke { font-weight: 500; }
.kopf nav { display: flex; gap: 0.4em; }
.kopf nav a { color: inherit; }
.kopf nav .hier { color: rgba(255, 255, 255, 0.45); }
.kopf nav a:not(.hier):hover { opacity: 0.6; }
.kopf .mail { text-align: right; }

/* ── Held ── */
.held { position: relative; min-height: 100svh; padding: 120px var(--fuge) 0; }

.held .einstieg {
  margin-left: calc(4 * (100% - 11 * var(--fuge)) / 12 + 4 * var(--fuge));
  max-width: 19em;
  font-size: var(--einstieg);
  line-height: 1;
  letter-spacing: -0.0125em;
  font-weight: 500;
}

/* Das Riesenwort: zwei Zeilen, unten links, zieht per Parallaxe */
.riese {
  position: absolute;
  left: var(--fuge);
  bottom: -0.08em;
  margin: 0;
  font-size: clamp(5rem, 12.9vw, 13rem);
  font-weight: 500;
  line-height: 0.98;
  letter-spacing: -0.045em;
  white-space: nowrap;
  will-change: transform;
}

.riese .zeile { display: block; overflow: hidden; }
.riese .buchstabe { display: inline-block; transform: translateY(115%); }
body.bereit .riese .buchstabe { animation: steigen 900ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards; animation-delay: calc(var(--n) * 28ms + 500ms); }
@keyframes steigen { to { transform: translateY(0); } }

/* ── Arbeiten: drei Spalten, 4:5, Fugen 12px ── */
.werke {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 56px var(--fuge);
  padding: 48px var(--fuge) 80px;
  background: transparent;
}

.werk { display: block; color: inherit; }

.werk figure { overflow: hidden; background: #f2f2f2; }
.werk img {
  width: 100%;
  aspect-ratio: 459 / 574;
  object-fit: cover;
  transition: transform 800ms cubic-bezier(0.22, 0.61, 0.36, 1);
}
.werk:hover img { transform: scale(1.045); }

.werk .zeile { padding-top: 10px; font-size: 16px; line-height: 1.25; }
.werk .rolle { color: var(--grau-text); }

/* ── Aussage in voller Breite ── */
.aussage { padding: 200px var(--fuge) 200px; }
.aussage p {
  max-width: 32em;
  font-size: var(--einstieg);
  line-height: 1;
  letter-spacing: -0.0125em;
}

/* Zeilenmasken des Auftritts */
.zeilenmaske { display: block; overflow: hidden; }
.zeilenmaske > span { display: block; transform: translateY(110%); transition: transform 900ms cubic-bezier(0.22, 0.61, 0.36, 1); transition-delay: calc(var(--z) * 90ms); }
.wach .zeilenmaske > span { transform: translateY(0); }

/* ── Marken ── */
.marken { padding: 0 var(--fuge) 160px; }

.marken h2 {
  font-size: var(--einstieg);
  line-height: 1;
  letter-spacing: -0.0125em;
  font-weight: 500;
  margin-bottom: 60px;
}

.marken ul { display: flex; flex-wrap: wrap; align-items: baseline; column-gap: 0.35em; }

.marken a {
  color: var(--grau);
  font-size: clamp(2rem, 3.75vw, 3.375rem);
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.18;
  transition: color 220ms ease;
}

.marken a:hover { color: var(--tinte); }
.marken .punkt { color: var(--grau); font-size: clamp(2rem, 3.75vw, 3.375rem); line-height: 1.18; }

/* Das Vorschaubild am Zeiger (Marken und Fußliste teilen es) */
.zeigerbild {
  position: fixed;
  z-index: 90;
  width: 230px;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.92);
  transition: opacity 180ms ease, transform 260ms cubic-bezier(0.22, 0.61, 0.36, 1);
  will-change: left, top;
}

.zeigerbild.an { opacity: 1; transform: translate(-50%, -50%) scale(1); }
.zeigerbild img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; }
.zeigerbild.flach img { aspect-ratio: 16 / 10; }

/* ── Playground-Laufband ── */
.spielwiese { padding: 0 0 140px; }

.spielwiese .titelzeile {
  padding: 0 var(--fuge) 28px;
  font-size: var(--einstieg);
  font-weight: 500;
  letter-spacing: -0.0125em;
}

.band { overflow: hidden; position: relative; }
.band::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background: var(--gelb);
  z-index: 2;
}

.band .spur { display: flex; gap: var(--fuge); width: max-content; animation: ziehen 38s linear infinite; }
.band:hover .spur { animation-play-state: paused; }
@keyframes ziehen { to { transform: translateX(-50%); } }

.band figure { width: clamp(15rem, 24vw, 22rem); flex: none; }
.band img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }
.band figcaption { padding-top: 8px; font-size: 14px; }

/* ── Kontakt + Fuß ── */
.kontakt { padding: 60px var(--fuge) 120px; }

.kontakt p {
  font-size: clamp(2.5rem, 6.5vw, 6rem);
  font-weight: 500;
  line-height: 1.02;
  letter-spacing: -0.03em;
  max-width: 12em;
}

.kontakt a { color: inherit; }
.kontakt a:hover { color: var(--grau-text); }

.fuss {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid #e3e3e3;
  border-left: 1px solid #e3e3e3;
  margin: 0 var(--fuge) 24px;
}

.fuss .spalte {
  border-right: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  min-height: 176px;
  padding: 14px;
  display: grid;
  align-content: space-between;
  gap: 40px;
  font-size: 13.5px;
}

.fuss .kopfzeile { display: flex; align-items: center; gap: 6px; font-weight: 500; }
.fuss .kopfzeile::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--tinte); }
.fuss ul { display: grid; gap: 2px; }
.fuss a { color: inherit; }
.fuss a:hover { color: var(--grau-text); }

.schriftzeile { padding: 0 var(--fuge) 20px; font-size: 12px; color: var(--grau-text); }

/* ── Cursor ── */
@media (hover: hover) {
  body { cursor: none; }
  a, button { cursor: none; }

  .zeiger {
    position: fixed;
    z-index: 200;
    left: 0;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    mix-blend-mode: difference;
    pointer-events: none;
    display: grid;
    place-items: center;
    transform: translate(-50%, -50%);
    transition: width 300ms cubic-bezier(0.22, 0.61, 0.36, 1), height 300ms cubic-bezier(0.22, 0.61, 0.36, 1);
    will-change: left, top;
  }

  .zeiger span {
    font-size: 13px;
    font-weight: 500;
    color: #000;
    opacity: 0;
    transition: opacity 200ms ease;
    white-space: nowrap;
  }

  .zeiger.gross { width: 92px; height: 92px; }
  .zeiger.gross span { opacity: 1; }
}

@media (hover: none) { .zeiger { display: none; } }

@media (max-width: 780px) {
  .held .einstieg { margin-left: 0; }
  .werke { grid-template-columns: minmax(0, 1fr); }
  .fuss { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .kopf nav { display: none; }
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;

  // Die Marken samt Vorschaubild am Zeiger. Wo eine Arbeit existiert,
  // zeigt sie ihr Werkbild; für die übrigen stehen Set- und Hausbilder
  // als Platzhalter, bis Simon je Marke ein Motiv benennt.
  const marken = [
    ['Siemens', 'work/siemens.webp'],
    ['Street One', 'work/street-one.webp'],
    ['Douglas', 'bts/bts-studio.jpg'],
    ['Allianz', 'work/allianz.webp'],
    ['Olympische Spiele', 'bts/bts-halle.jpg'],
    ['Paralympisches Komitee', 'bts/bts-transporter.jpg'],
    ['EA', 'work/bvb-ea-sports.webp'],
    ['Formel D', 'work/formel-d.jpg'],
    ['Seven.One', 'bts/bts-schnitt.jpg'],
    ['Zehnder Group', 'krafthaus/haus-02.jpg'],
    ['HUGO BOSS', 'bts/bts-loft.jpg'],
    ['Johnson & Johnson', 'work/revitive.jpg'],
  ];

  const spielwiese = [
    ['bts/bts-halle.jpg', 'Setlicht, Halle'],
    ['bts/bts-transporter.jpg', 'Unterwegs'],
    ['bts/bts-loft.jpg', 'Interview-Set'],
    ['bts/bts-schnitt.jpg', 'Im Schnitt'],
    ['bts/bts-studio.jpg', 'Studio'],
    ['krafthaus/haus-drohne.jpg', 'Krafthaus von oben'],
    ['bts/bts-buero.jpg', 'Büro'],
    ['krafthaus/haus-02.jpg', 'Rheinauhafen'],
  ];

  const riese = (wort) => {
    let n = 0;
    return wort.split('\n').map((zeile) =>
      `<span class="zeile">${zeile.split('').map((z) =>
        z === ' ' ? `<span class="buchstabe" style="--n:${n++}">&nbsp;</span>`
                  : `<span class="buchstabe" style="--n:${n++}">${z}</span>`).join('')}</span>`).join('');
  };

  return `
<div class="vorhang" aria-hidden="true"><b>${i.marke}</b></div>

<header class="kopf">
  <span class="marke">${i.marke}</span>
  <nav>
    <a class="hier" href="#werk">Work,</a>
    <a href="#" onclick="return false">About,</a>
    <a href="#" onclick="return false">Playground</a>
  </nav>
  <a class="mail" href="mailto:${i.schluss.mail}">${i.schluss.mail}</a>
</header>

<div class="glatt" data-glatt>
  <main>
    <section class="held">
      <p class="einstieg" data-zeilen>${i.gattung} aus Köln. ${i.position.auftakt} ${i.position.satz}</p>
      <h1 class="riese" data-parallaxe aria-label="Selected Work">${riese('Selected\nWork')}</h1>
    </section>

    <section class="werke" id="werk">
      ${i.arbeiten.liste.map((a) => `
      <a class="werk" href="#" onclick="return false" data-schau>
        <figure><img src="${b(a.bild)}" alt="${a.kunde} — ${a.titel}"></figure>
        <p class="zeile">${a.kunde}<br><span class="rolle">${a.titel} · ${a.formate.join(' · ')}</span></p>
      </a>`).join('')}
    </section>

    <section class="aussage">
      <p data-zeilen>${i.team.bloecke[0].auftakt} ${i.team.bloecke[0].text} ${i.position.zeile.join(' · ')}.</p>
    </section>

    <section class="marken">
      <h2 data-zeilen>I've had the chance to work with these brands</h2>
      <ul>
        ${marken.map(([name, bild], n) => `
        <li><a href="#" onclick="return false" data-marke="${b(bild)}">${name}</a>${n < marken.length - 1 ? '<span class="punkt"> · </span>' : ''}</li>`).join('')}
      </ul>
    </section>

    <section class="spielwiese">
      <p class="titelzeile" data-zeilen>Playground — ${i.disziplinen.label}: ${i.disziplinen.liste.map((d) => d.titel).join(', ')}</p>
      <div class="band">
        <div class="spur">
          ${[...spielwiese, ...spielwiese].map(([bild, zeile]) => `
          <figure><img src="${b(bild)}" alt="${zeile}" loading="lazy"><figcaption>${zeile}</figcaption></figure>`).join('')}
        </div>
      </div>
    </section>

    <section class="kontakt" id="kontakt">
      <p data-zeilen>${i.schluss.auftakt} ${i.schluss.titel}. <a href="mailto:${i.schluss.mail}">${i.schluss.mail}</a></p>
    </section>

    <footer>
      <div class="fuss">
        <div class="spalte">
          <p class="kopfzeile">Contact</p>
          <ul>
            <li><a href="#" onclick="return false">Instagram</a></li>
            <li><a href="#" onclick="return false">LinkedIn</a></li>
            <li><a href="mailto:${i.schluss.mail}">Email</a></li>
          </ul>
        </div>
        <div class="spalte">
          <p class="kopfzeile">Selected works</p>
          <ul>
            ${i.arbeiten.liste.map((a) => `
            <li><a href="#" onclick="return false" data-mini="${b(a.bild)}">${a.kunde}</a></li>`).join('')}
          </ul>
        </div>
        <div class="spalte">
          <p class="kopfzeile">${i.team.titel}</p>
          <ul>
            ${i.team.liste.map((m) => `<li><a href="#" onclick="return false" data-mini="${b(m.bild)}">${m.name}</a></li>`).join('')}
          </ul>
        </div>
        <div class="spalte">
          <p class="kopfzeile">Infos</p>
          <ul>
            <li><a href="#" onclick="return false">About</a></li>
            <li><a href="#" onclick="return false">Playground</a></li>
            <li>${i.position.zeile[3]}</li>
          </ul>
        </div>
      </div>
      <p class="schriftzeile">${i.marke} — ${i.gattung} · Schrift: Helvetica Neue (Platzhalter für Suisse Int'l)</p>
    </footer>
  </main>
</div>
<div class="halter" data-halter aria-hidden="true"></div>

<div class="zeiger" aria-hidden="true"><span></span></div>
<figure class="zeigerbild" aria-hidden="true"><img alt=""></figure>

<script>
(function () {
  var ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Vorhang ── */
  addEventListener('load', function () { document.body.classList.add('bereit'); });
  setTimeout(function () { document.body.classList.add('bereit'); }, 1200);

  /* ── Zeilenzerlegung (SplitText-Ersatz) ──
     Woerter in Kaesten packen, nach ihrer Oberkante zu Zeilen buendeln,
     jede Zeile in eine Maske heben. Links bleiben als Ganzes ein Kasten.

     Drei Absicherungen, gelernt am ersten Anlauf, bei dem jede Zeile nur
     ein Wort trug:

       SPAETER   Erst zum load-Ereignis zerlegen, wenn das Layout endgueltig
                 steht — beim sofortigen Skriptlauf lagen die Kaesten noch
                 uebereinander, und jede Oberkante war eine eigene. Der
                 Vorhang verdeckt die Seite bis dahin, es flackert nichts.
                 Zeitgeber statt requestAnimationFrame, damit es auch in
                 einem Hintergrund-Tab laeuft — rAF pausiert dort.
       TOLERANT  Neue Zeile erst, wenn die Oberkante um mehr als eine
                 halbe Zeilenhoehe waechst — nicht bei jeder Abweichung.
       RUECKZUG  Kommt trotzdem Unsinn heraus (so viele Zeilen wie
                 Woerter), wird der Absatz unzerteilt in eine einzige
                 Maske gelegt. Dann faehrt er als Ganzes hoch — weniger
                 fein, aber nie kaputt. */
  var zerlegen = function () {
    document.querySelectorAll('[data-zeilen]').forEach(function (el) {
      var stuecke = [];
      el.childNodes.forEach(function (kn) {
        if (kn.nodeType === 3) {
          kn.textContent.split(/\\s+/).filter(Boolean).forEach(function (w) { stuecke.push(w); });
        } else if (kn.nodeType === 1) {
          stuecke.push(kn.cloneNode(true));
        }
      });
      el.textContent = '';
      var kaesten = stuecke.map(function (s) {
        var k = document.createElement('span');
        k.style.display = 'inline-block';
        if (typeof s === 'string') { k.textContent = s; } else { k.appendChild(s); }
        el.appendChild(k);
        el.appendChild(document.createTextNode(' '));
        return k;
      });
      var halbeZeile = parseFloat(getComputedStyle(el).fontSize) * 0.5;
      var zeilen = [];
      var letzteOben = null;
      kaesten.forEach(function (k) {
        var oben = k.offsetTop;
        if (letzteOben === null || oben - letzteOben > halbeZeile) {
          zeilen.push([]);
          letzteOben = oben;
        }
        zeilen[zeilen.length - 1].push(k);
      });
      if (zeilen.length >= kaesten.length && kaesten.length > 2) {
        zeilen = [kaesten];
      }
      el.textContent = '';
      zeilen.forEach(function (zeile, n) {
        var maske = document.createElement('span');
        maske.className = 'zeilenmaske';
        maske.style.setProperty('--z', n);
        var innen = document.createElement('span');
        zeile.forEach(function (k, j) {
          k.style.display = 'inline';
          innen.appendChild(k);
          if (j < zeile.length - 1) innen.appendChild(document.createTextNode(' '));
        });
        maske.appendChild(innen);
        el.appendChild(maske);
      });
      if (ruhig) { el.classList.add('wach'); }
    });

    if (!ruhig) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('wach'); io.unobserve(e.target); }
        });
      }, { threshold: 0.4 });
      document.querySelectorAll('[data-zeilen]').forEach(function (el) { io.observe(el); });
    }
  };
  var zerlegt = false;
  var einmalZerlegen = function () {
    if (zerlegt) return;
    zerlegt = true;
    zerlegen();
  };
  if (document.readyState === 'complete') { setTimeout(einmalZerlegen, 0); }
  else { addEventListener('load', einmalZerlegen); }
  setTimeout(einmalZerlegen, 1100);

  /* ── Weiches Scrollen: Nachlauf per Transform ── */
  var glatt = document.querySelector('[data-glatt]');
  var halter = document.querySelector('[data-halter]');
  var ist = 0;
  if (!ruhig && glatt) {
    var messen = function () { halter.style.height = glatt.scrollHeight + 'px'; };
    messen();
    addEventListener('resize', messen);
    setTimeout(messen, 400);
    var laufen = function () {
      ist += (scrollY - ist) * 0.09;
      if (Math.abs(scrollY - ist) < 0.05) ist = scrollY;
      glatt.style.transform = 'translateY(' + (-ist).toFixed(2) + 'px)';
      requestAnimationFrame(laufen);
    };
    requestAnimationFrame(laufen);
  }

  /* ── Parallaxe des Riesenworts ── */
  var wort = document.querySelector('[data-parallaxe]');
  if (!ruhig && wort) {
    var ziehen = function () {
      wort.style.transform = 'translateY(' + (ist * 0.42).toFixed(2) + 'px)';
      requestAnimationFrame(ziehen);
    };
    requestAnimationFrame(ziehen);
  }

  /* ── Zeiger ── */
  var zeiger = document.querySelector('.zeiger');
  var zText = zeiger.querySelector('span');
  var zx = innerWidth / 2, zy = innerHeight / 2, x = zx, y = zy;
  addEventListener('pointermove', function (e) { zx = e.clientX; zy = e.clientY; });
  (function tick() {
    x += (zx - x) * 0.28;
    y += (zy - y) * 0.28;
    zeiger.style.left = x + 'px';
    zeiger.style.top = y + 'px';
    requestAnimationFrame(tick);
  })();

  var beschriften = function (elemente, wortlaut) {
    elemente.forEach(function (el) {
      el.addEventListener('pointerenter', function () { zText.textContent = wortlaut; zeiger.classList.add('gross'); });
      el.addEventListener('pointerleave', function () { zeiger.classList.remove('gross'); });
    });
  };
  beschriften(document.querySelectorAll('[data-schau]'), 'View');
  beschriften(document.querySelectorAll('[data-parallaxe]'), 'Discover');

  /* ── Vorschaubild am Zeiger: Marken gross, Fussliste klein ── */
  var schau = document.querySelector('.zeigerbild');
  var schauBild = schau.querySelector('img');
  var anhaengen = function (wahl, attribut, flach, breite) {
    document.querySelectorAll(wahl).forEach(function (el) {
      el.addEventListener('pointerenter', function () {
        schauBild.src = el.getAttribute(attribut);
        schau.classList.toggle('flach', flach);
        schau.style.width = breite;
        schau.classList.add('an');
      });
      el.addEventListener('pointerleave', function () { schau.classList.remove('an'); });
      el.addEventListener('pointermove', function (e) {
        schau.style.left = e.clientX + 'px';
        schau.style.top = e.clientY + 'px';
      });
    });
  };
  anhaengen('[data-marke]', 'data-marke', false, '230px');
  anhaengen('[data-mini]', 'data-mini', true, '150px');
})();
</script>
`;
};

export default {
  name: 'Studio',
  idee: 'Nach julienpianetti.com: weiches Scrollen, Riesenwort mit Parallaxe, Zeilenauftritt, Cursor-Scheibe, Markenliste mit Zeigerbild.',
  stil,
  koerper,
};
