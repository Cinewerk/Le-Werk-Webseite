/**
 * Einfarbige Fassungen der ECHTEN Seite (Entwürfe 24+).
 *
 * Kein Nachbau: Grundlage ist die gebaute Startseite aus dist/ — mit
 * ihren originalen Größen, dem Scroll-Nachlauf, den Streublöcken, dem
 * Laufband und allen Skripten. Je Palette liegt nur eine Farbschicht
 * über den Design-Token aus global.css.
 *
 * Simons Regeln: eine Farbe, die sich durchzieht (keine wechselnden
 * Blöcke — deshalb bekommen --paper, --sand und --petrol-deep denselben
 * Grund), und Bilder wie Video bleiben in Originalfarbe.
 *
 * Wo Schrift AUF Bildern liegt (Held, Kacheln, Porträts), stehen die
 * eingebrannten dunklen Verläufe der Seite dahinter — dort bleibt sie
 * weiß, per neu gesetztem --on-dark im jeweiligen Geltungsbereich.
 *
 * Voraussetzung: dist/ ist gebaut (npx astro build). Die Pfade
 * /Le-Werk/… werden auf ../dist/… umgeschrieben, damit die Dateien
 * neben den anderen Entwürfen laufen.
 */

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const hier = dirname(fileURLToPath(import.meta.url));
const quelle = readFileSync(join(hier, '..', 'dist', 'index.html'), 'utf8')
  .replaceAll('/Le-Werk/', '../dist/');

const kopfTeil = quelle.match(/<head>([\s\S]*?)<\/head>/)[1]
  // Titel und Meta setzt bauen.js selbst; übernommen werden nur
  // Stylesheets, Schriften und Skripte der echten Seite.
  .replace(/<title>[\s\S]*?<\/title>/, '')
  .replace(/<meta[^>]*>/g, '')
  .replace(/<link rel="canonical"[^>]*>/g, '');

const koerperTeil = quelle.match(/<body[^>]*>([\s\S]*)<\/body>/)[1];

const uebersteuerung = (t) => `
:root {
  --paper: ${t.grund};
  --sand: ${t.grund};
  --petrol-deep: ${t.grund};
  --petrol: ${t.tief};
  --petrol-light: ${t.tief};
  --ink: ${t.tinte};
  --ink-muted: ${t.gedaempft};
  --on-dark: ${t.tinte};
  --on-dark-muted: ${t.gedaempft};
  --line: ${t.linie};
  --line-strong: ${t.linie};
  --line-dark: ${t.linie};
}

body { background: ${t.grund}; }

/* Auf Bildern liegen die eingebrannten dunklen Verläufe der Seite —
   dort bleibt die Schrift weiß, egal welche Palette gilt. */
.hero, figure figcaption {
  --on-dark: #ffffff;
  --on-dark-muted: rgba(255, 255, 255, 0.72);
}

/* Knöpfe: dunkle Schwester der Palette statt Petrol. */
.btn { background: ${t.tief}; color: ${t.aufTief}; border-color: ${t.tief}; }
.btn--ghost { background: transparent; color: ${t.tinte}; border-color: ${t.linie}; }
`;

export const bauVariante = ({ name, idee, ton }) => ({
  name,
  idee,
  kopf: kopfTeil,
  stil: uebersteuerung(ton),
  koerper: () => koerperTeil,
});
