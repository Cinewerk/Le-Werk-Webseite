/**
 * Entwurf 31 — Ultramarin. Die laufende Seite in einer durchgehenden
 * Farbwelt: leuchtendes Kobaltblau ohne Ausweichflaechen.
 */
import { bauVariante } from '../einfarbig.js';

export default bauVariante({
  name: 'Ultramarin',
  idee: 'Knall drei: Kobaltblau durchgehend, blaue Bildbaeder, Weiss als Tinte.',
  ton: {
    grund: '#2438e0',
    tinte: '#f2f4ff',
    gedaempft: '#9aa6f2',
    linie: 'rgba(242, 244, 255, 0.3)',
    tief: '#f2f4ff',
    aufTief: '#2438e0',
  },
});
