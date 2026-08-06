/**
 * Stellt internen Pfaden das konfigurierte Basisverzeichnis voran.
 *
 * Nötig, weil die Seite unter GitHub Pages nicht im Wurzelverzeichnis liegt,
 * sondern unter /Le-Werk-Webseite/. Ein hart geschriebenes href="/kontakt" zeigte dort
 * ins Leere. Astro schreibt solche Pfade nicht selbst um — deshalb läuft
 * jeder interne Link und jeder Verweis auf public/ durch diese Funktion.
 *
 * Zieht die Seite später auf eine eigene Domain um, genügt es, `base` in
 * astro.config.mjs zu entfernen; hier ist dann nichts anzupassen.
 *
 *   withBase('/kontakt')          → '/Le-Werk-Webseite/kontakt'
 *   withBase('/images/hero.jpg')  → '/Le-Werk-Webseite/images/hero.jpg'
 *   withBase('mailto:…')          → unverändert
 */
const BASE = import.meta.env.BASE_URL;

/** Pfade, die nicht zur Seite selbst gehören und unverändert bleiben müssen */
const EXTERN = /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i;

export function withBase(path: string): string {
  if (EXTERN.test(path)) return path;
  return `${BASE.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
}
