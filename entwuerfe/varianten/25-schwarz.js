/**
 * Entwurf 25 — Kohle. Die laufende Seite in einer durchgehenden
 * Farbwelt: tiefes Schwarz, Bilder in echten Graustufen.
 */
import { bauVariante } from '../einfarbig.js';

export default bauVariante({
  name: 'Kohle',
  idee: 'Die eigene Seite in durchgehendem Schwarz — Graustufenbilder, weisse Tinte, sonst nichts.',
  ton: {
    grund: '#0d0d0d',
    tinte: '#f2f2f0',
    gedaempft: '#8f8f8a',
    linie: 'rgba(242, 242, 240, 0.2)',
    tief: '#f2f2f0',
    aufTief: '#0d0d0d',
  },
});
