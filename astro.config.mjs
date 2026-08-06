// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Testadresse bei GitHub Pages. Beide Werte hängen am Repo: Die Seite
  // liegt unter <organisation>.github.io/<reponame>/, also cinewerk und
  // Le-Werk-Webseite. Stimmt base nicht, zeigen alle Stylesheets, Bilder
  // und Schriften auf einen Pfad, den es nicht gibt — die Seite lädt
  // dann als reines HTML ohne Gestaltung.
  //
  // Sobald die echte Domain steht: site auf die Domain setzen und base
  // entfernen — die Pfade im Code laufen über withBase() und passen sich
  // dann von selbst an.
  site: 'https://cinewerk.github.io',
  base: '/Le-Werk-Webseite',
});
