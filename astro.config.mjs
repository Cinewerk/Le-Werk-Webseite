// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Testadresse bei GitHub Pages. Sobald die echte Domain steht:
  // site auf die Domain setzen und base entfernen — die Pfade im Code
  // laufen über withBase() und passen sich dann von selbst an.
  site: 'https://heutelaune.github.io',
  base: '/Le-Werk',
});
