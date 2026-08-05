/**
 * Entwurf 07 — Terminal.
 *
 * Schule: die Entwickler-Studios der Awwwards-Jahrgänge (basement.studio,
 * Studio Freight / Darkroom und Verwandte): dunkler Grund, alles in
 * Monoschrift, die Seite gibt sich als Werkzeug — Dateibaum, Statuszeile,
 * blinkender Cursor, ein Grün als einzige Farbe. Die Arbeiten sind ein
 * Verzeichnis, das Team ein "who", die FAQ ein "man lewerk".
 */

const stil = `
:root {
  --grund: #0c0f0c;
  --flaeche: #121612;
  --schrift: #d7e0d4;
  --gedimmt: #7d8a7a;
  --gruen: #47f974;
  --bernstein: #ffc44d;
  --linie: #263026;
  --mono: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
}

body {
  background: var(--grund);
  color: var(--schrift);
  font: 400 14px/1.7 var(--mono);
  padding: clamp(0.75rem, 2vw, 1.5rem);
}

.fenster {
  max-width: 82rem;
  margin: 0 auto;
  border: 1px solid var(--linie);
  background: var(--flaeche);
  border-radius: 8px;
  overflow: hidden;
}

/* ── Fensterleiste ── */
.leiste {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1rem;
  border-bottom: 1px solid var(--linie);
  background: #0e120e;
  font-size: 12px;
  color: var(--gedimmt);
}

.leiste .knopf { width: 11px; height: 11px; border-radius: 50%; background: #2c352c; }
.leiste .titel { margin-inline: auto; }

.innen { padding: clamp(1rem, 3vw, 2.5rem); }

/* ── Prompts ── */
.zeile { margin-bottom: 0.35rem; }
.zeile .p { color: var(--gruen); }
.zeile .pfad { color: var(--bernstein); }
.kommentar { color: var(--gedimmt); }
.kommentar::before { content: '# '; }

.cursor::after {
  content: '▉';
  color: var(--gruen);
  animation: blink 1.1s steps(1) infinite;
}
@keyframes blink { 50% { opacity: 0; } }

/* ── Claim als Banner (figlet-artig über Rahmenzeichen) ── */
.banner {
  margin: 1.25rem 0 0.5rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--linie);
  border-radius: 6px;
  background: var(--grund);
  overflow-x: auto;
}

.banner h1 {
  font-size: clamp(1.25rem, 3.4vw, 2.5rem);
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0.01em;
  color: var(--gruen);
  text-shadow: 0 0 22px rgba(71, 249, 116, 0.35);
  white-space: normal;
}

.banner .sub { color: var(--schrift); font-size: 13px; margin-top: 0.5rem; }

/* ── Abschnitt = ein Befehl + Ausgabe ── */
.block { margin-top: clamp(1.75rem, 4vw, 2.75rem); }

.ausgabe {
  border-left: 2px solid var(--linie);
  margin-top: 0.5rem;
  padding-left: clamp(0.75rem, 2vw, 1.5rem);
}

/* Dateiliste: Arbeiten */
.dateien { width: 100%; border-collapse: collapse; font-size: 13.5px; }
.dateien td { padding: 0.4rem 1.25rem 0.4rem 0; vertical-align: top; white-space: nowrap; }
.dateien td:last-child { white-space: normal; }
.dateien .r { color: var(--gedimmt); }
.dateien .n { color: var(--bernstein); }
.dateien a { color: var(--schrift); text-decoration: none; }
.dateien tr:hover td { background: #182018; }
.dateien tr:hover .n { color: var(--gruen); }

/* Vorschaubild beim Überfahren */
.schau {
  position: fixed;
  z-index: 40;
  width: clamp(11rem, 20vw, 17rem);
  padding: 0.4rem;
  background: var(--flaeche);
  border: 1px solid var(--gruen);
  border-radius: 6px;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, calc(-100% - 14px));
  transition: opacity 120ms linear;
}

.schau.an { opacity: 1; }
.schau img { width: 100%; aspect-ratio: 3 / 2; object-fit: cover; border-radius: 3px; }
.schau figcaption { padding-top: 0.3rem; font-size: 11px; color: var(--gedimmt); }

/* Kundenmatrix */
.kunden { display: grid; grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr)); gap: 0.25rem 1.5rem; font-size: 13.5px; }
.kunden li::before { content: '▪ '; color: var(--gruen); }

/* Disziplinen als Manual-Einträge */
.man dt { color: var(--bernstein); font-size: 15px; margin-top: 1rem; text-transform: uppercase; letter-spacing: 0.08em; }
.man dt::before { content: '$ lewerk --'; color: var(--gedimmt); text-transform: none; letter-spacing: 0; }
.man dd { max-width: 68ch; color: var(--schrift); margin-top: 0.25rem; }

/* Team als Prozessliste */
.wer { width: 100%; border-collapse: collapse; font-size: 13.5px; }
.wer th { text-align: left; color: var(--gedimmt); font-weight: 400; padding: 0.3rem 1.25rem 0.3rem 0; border-bottom: 1px solid var(--linie); }
.wer td { padding: 0.45rem 1.25rem 0.45rem 0; border-bottom: 1px solid var(--linie); vertical-align: middle; }
.wer img { width: 2.6rem; aspect-ratio: 1; object-fit: cover; border-radius: 4px; filter: grayscale(1); }
.wer tr:hover img { filter: none; }
.wer .pid { color: var(--gedimmt); }
.wer .name { color: var(--gruen); }

.hinweis { margin-top: 1rem; max-width: 72ch; }
.hinweis b { color: var(--bernstein); font-weight: 400; }

/* Gründe als Changelog */
.log li { margin-bottom: 1rem; max-width: 74ch; }
.log .tag { color: var(--gruen); }
.log b { color: var(--schrift); font-weight: 700; }
.log p { color: var(--gedimmt); }

/* FAQ */
.faq details { border: 1px solid var(--linie); border-radius: 6px; margin-bottom: 0.6rem; background: var(--grund); }
.faq summary { list-style: none; cursor: pointer; padding: 0.7rem 1rem; font-size: 13.5px; }
.faq summary::-webkit-details-marker { display: none; }
.faq summary::before { content: '? '; color: var(--bernstein); }
.faq details[open] summary { border-bottom: 1px solid var(--linie); color: var(--gruen); }
.faq details p { padding: 0.7rem 1rem; max-width: 72ch; color: var(--schrift); }
.faq details p::before { content: '> '; color: var(--gruen); }

/* Schluss */
.schluss { margin-top: clamp(2rem, 5vw, 3.5rem); padding: 1.25rem; border: 1px dashed var(--gruen); border-radius: 6px; }
.schluss a.mailto {
  display: inline-block;
  margin-top: 0.75rem;
  padding: 0.55em 1.4em;
  background: var(--gruen);
  color: #0c0f0c;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
}
.schluss a.mailto:hover { background: var(--bernstein); }

/* Statuszeile unten */
.status {
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.45rem 1rem;
  background: var(--gruen);
  color: #0c0f0c;
  font-size: 12px;
  font-weight: 700;
}
`;

const koerper = (i) => {
  const b = (p) => `../public/images/${p}`;
  const datei = (a) => a.bild.split('/').pop();
  return `
<div class="fenster">
  <div class="leiste">
    <span class="knopf"></span><span class="knopf"></span><span class="knopf"></span>
    <span class="titel">simon@lewerk — ~/studio — 80×24</span>
  </div>

  <div class="innen">
    <p class="zeile"><span class="p">➜</span> <span class="pfad">~/studio</span> cat manifest.txt</p>
    <div class="banner">
      <h1>${i.claim}<span class="cursor"></span></h1>
      <p class="sub">${i.position.auftakt} ${i.position.satz}<br>${i.position.zeile.join(' · ')} — ${i.gattung}</p>
    </div>

    <div class="block" id="arbeiten">
      <p class="zeile"><span class="p">➜</span> <span class="pfad">~/studio</span> ls -la ./${i.arbeiten.label.toLowerCase().replace(' ', '-')}</p>
      <div class="ausgabe">
        <table class="dateien">
          ${i.arbeiten.liste.map((a) => `
          <tr data-bild="${b(a.bild)}" data-t="${a.kunde} — ${a.titel}">
            <td class="r">-rw-r--r--</td>
            <td class="r">${a.formate.join('+')}</td>
            <td class="n">${datei(a)}</td>
            <td>${a.kunde} — ${a.titel}</td>
          </tr>`).join('')}
        </table>
        <p class="kommentar">Zeiger auf eine Zeile halten öffnet die Vorschau</p>
      </div>
    </div>

    <div class="block" id="kunden">
      <p class="zeile"><span class="p">➜</span> <span class="pfad">~/studio</span> cat kunden.list <span class="kommentar">${i.kunden.label}</span></p>
      <div class="ausgabe">
        <ul class="kunden">${i.kunden.liste.map((k) => `<li>${k.name}</li>`).join('')}</ul>
      </div>
    </div>

    <div class="block">
      <p class="zeile"><span class="p">➜</span> <span class="pfad">~/studio</span> man lewerk <span class="kommentar">${i.disziplinen.label}</span></p>
      <div class="ausgabe">
        <dl class="man">
          ${i.disziplinen.liste.map((d) => `
          <dt>${d.titel.toLowerCase().replace(/[^a-z&]+/g, '-').replace('&', 'und')}</dt>
          <dd>${d.text}</dd>`).join('')}
        </dl>
      </div>
    </div>

    <div class="block" id="team">
      <p class="zeile"><span class="p">➜</span> <span class="pfad">~/studio</span> who <span class="kommentar">${i.team.label} — ${i.team.titel}</span></p>
      <div class="ausgabe">
        <table class="wer">
          <tr><th></th><th>PID</th><th>USER</th><th>ROLE</th></tr>
          ${i.team.liste.map((m, n) => `
          <tr>
            <td><img src="${b(m.bild)}" alt="Porträt von ${m.name}" loading="lazy"></td>
            <td class="pid">${1001 + n}</td>
            <td class="name">${m.name}</td>
            <td>${m.rolle.join(' / ')}</td>
          </tr>`).join('')}
        </table>
        ${i.team.bloecke.map((x) => `<p class="hinweis"><b>${x.auftakt}</b> ${x.text}</p>`).join('')}
      </div>
    </div>

    <div class="block">
      <p class="zeile"><span class="p">➜</span> <span class="pfad">~/studio</span> git log --oneline <span class="kommentar">${i.gruende.titel}</span></p>
      <div class="ausgabe">
        <ol class="log">
          ${i.gruende.liste.map((g) => `
          <li><span class="tag">[${g.nr}]</span> <b>${g.titel}</b><p>${g.text}</p></li>`).join('')}
        </ol>
      </div>
    </div>

    <div class="block faq">
      <p class="zeile"><span class="p">➜</span> <span class="pfad">~/studio</span> lewerk --help <span class="kommentar">${i.faq.label} — ${i.faq.titel}</span></p>
      <div class="ausgabe">
        ${i.faq.liste.map((f) => `<details><summary>${f.f}</summary><p>${f.a}</p></details>`).join('')}
      </div>
    </div>

    <div class="schluss" id="kontakt">
      <p><span class="p">➜</span> ${i.schluss.auftakt} ${i.schluss.titel}:</p>
      <a class="mailto" href="mailto:${i.schluss.mail}">$ mail ${i.schluss.mail}</a>
    </div>
  </div>

  <div class="status">
    <span>NORMAL — ${i.marke}</span>
    <span>Köln · UTF-8 · ${i.schluss.knopf}: ${i.schluss.mail}</span>
  </div>
</div>

<figure class="schau" aria-hidden="true"><img alt=""><figcaption></figcaption></figure>

<script>
(() => {
  const karte = document.querySelector('.schau');
  const bild = karte.querySelector('img');
  const zeile = karte.querySelector('figcaption');
  document.querySelectorAll('[data-bild]').forEach((tr) => {
    tr.addEventListener('pointerenter', () => {
      bild.src = tr.dataset.bild;
      zeile.textContent = tr.dataset.t;
      karte.classList.add('an');
    });
    tr.addEventListener('pointerleave', () => karte.classList.remove('an'));
    tr.addEventListener('pointermove', (e) => {
      karte.style.left = e.clientX + 'px';
      karte.style.top = e.clientY + 'px';
    });
  });
})();
</script>
`;
};

export default {
  name: 'Terminal',
  idee: 'Die Seite als Werkzeug: Monoschrift, Prompts, Dateibaum, Statuszeile — Arbeiten sind ein Verzeichnis.',
  stil,
  koerper,
};
