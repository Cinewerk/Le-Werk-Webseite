/**
 * Entwurf 30 — Signal. Die laufende Seite in einer durchgehenden
 * Farbwelt: sattes Signalrot als einzige Flaeche.
 */
import { bauVariante } from '../einfarbig.js';

export default bauVariante({
  name: 'Signal',
  idee: 'Knall zwei: Signalrot durchgehend, rote Bildbaeder, Cremeweiss als Tinte.',
  ton: {
    grund: '#df2718',
    tinte: '#fdf3ec',
    gedaempft: '#f5b5a9',
    linie: 'rgba(253, 243, 236, 0.32)',
    tief: '#fdf3ec',
    aufTief: '#df2718',
  },
});
