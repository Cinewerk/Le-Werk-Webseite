/**
 * Entwurf 28 — Flieder. Die laufende Seite in einer durchgehenden
 * Farbwelt: zartes Violett als eine Flaeche.
 */
import { bauVariante } from '../einfarbig.js';

export default bauVariante({
  name: 'Flieder',
  idee: 'Pastell drei: Flieder durchgehend, violette Bildbaeder, Tinte in dunklem Pflaumenton.',
  ton: {
    grund: '#e2dcf0',
    tinte: '#322752',
    gedaempft: '#7f74a3',
    linie: 'rgba(50, 39, 82, 0.24)',
    tief: '#322752',
    aufTief: '#e2dcf0',
  },
});
