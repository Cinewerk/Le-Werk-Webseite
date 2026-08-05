/**
 * Baut aus jedem Entwurf unter varianten/ eine eigenständige HTML-Datei
 * und dazu eine Übersicht.
 *
 * Aufruf:  node entwuerfe/bauen.js
 *
 * Jede Ausgabedatei ist für sich allein lauffähig — alles Gestaltung liegt
 * eingebettet drin, nur die Bilder kommen aus ../public/images. Damit lässt
 * sich jede Datei per Doppelklick öffnen, ohne Server, ohne Build.
 *
 * Ein Entwurf exportiert:
 *   name    Titel in der Übersicht
 *   idee    Ein Satz, worum es geht
 *   stil    CSS als Zeichenkette
 *   koerper (inhalt) => HTML als Zeichenkette
 *   kopf    optional: zusätzliche Angaben für den <head>
 */

import { readdir, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { inhalt } from './inhalt.js';

const hier = dirname(fileURLToPath(import.meta.url));

const seite = ({ titel, stil, koerper, kopf = '' }) => `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${titel} — Le Werk Entwurf</title>
${kopf}
<style>
*, *::before, *::after { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; }
body { margin: 0; }
img, video { max-width: 100%; display: block; }
button { font: inherit; color: inherit; }
a { color: inherit; }
:where(h1,h2,h3,h4,p,figure,ul,ol,dl,dd,blockquote) { margin: 0; padding: 0; }
:where(ul,ol) { list-style: none; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
${stil}
</style>
</head>
<body>
${koerper}
</body>
</html>
`;

const uebersicht = (liste) => `<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Le Werk — Entwürfe</title>
<style>
*, *::before, *::after { box-sizing: border-box; }
body {
  margin: 0; padding: clamp(2rem, 6vw, 5rem);
  background: #101214; color: #f2f0ec;
  font: 400 17px/1.6 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
h1 { margin: 0 0 0.5rem; font-size: clamp(2rem, 6vw, 3.5rem); letter-spacing: -0.03em; font-weight: 700; }
.vor { max-width: 46rem; color: #9aa0a6; margin-bottom: clamp(2.5rem, 6vw, 4rem); }
.gitter { display: grid; gap: 1px; background: #26292d; border: 1px solid #26292d;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr)); }
.karte { display: block; padding: 1.75rem; background: #101214; text-decoration: none; color: inherit;
         transition: background 180ms ease; }
.karte:hover { background: #191c1f; }
.nr { font-size: 12px; letter-spacing: 0.2em; color: #6b7176; font-family: ui-monospace, Menlo, monospace; }
.name { margin: 0.75rem 0 0.4rem; font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em; }
.idee { margin: 0; color: #9aa0a6; font-size: 15px; }
.leer { color: #6b7176; }
</style>
</head>
<body>
<h1>Entwürfe</h1>
<p class="vor">Gleiche Inhalte, gleiche Texte — nur die Gestaltung ändert sich.
Die laufende Seite bleibt davon unberührt; hier liegt nur, was daneben entsteht.</p>
<div class="gitter">
${liste.map((v, i) => `  <a class="karte" href="${v.datei}">
    <span class="nr">${String(i + 1).padStart(2, '0')}</span>
    <p class="name">${v.name}</p>
    <p class="idee">${v.idee}</p>
  </a>`).join('\n')}
</div>
</body>
</html>
`;

const lauf = async () => {
  const ordner = join(hier, 'varianten');
  await mkdir(ordner, { recursive: true });
  const dateien = (await readdir(ordner)).filter((f) => f.endsWith('.js')).sort();

  const gebaut = [];
  for (const d of dateien) {
    const mod = await import(pathToFileURL(join(ordner, d)).href);
    const v = mod.default ?? mod;
    const ziel = d.replace(/\.js$/, '.html');
    await writeFile(
      join(hier, ziel),
      seite({ titel: v.name, stil: v.stil, koerper: v.koerper(inhalt), kopf: v.kopf }),
      'utf8',
    );
    gebaut.push({ ...v, datei: ziel });
    console.log('  ', ziel.padEnd(30), v.name);
  }

  await writeFile(join(hier, 'index.html'), uebersicht(gebaut), 'utf8');
  console.log('  ', 'index.html'.padEnd(30), `Übersicht über ${gebaut.length}`);
};

lauf();
