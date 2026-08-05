/**
 * Entwurf 29 — Acid. Die laufende Seite in einer durchgehenden
 * Farbwelt: grelles Gelbgruen, kompromisslos durchgezogen.
 */
import { bauVariante } from '../einfarbig.js';

export default bauVariante({
  name: 'Acid',
  idee: 'Knall eins: Acidgelb von Kante zu Kante, Bilder im Gelbbad, Tinte fast schwarz.',
  ton: {
    grund: '#d8f000',
    tinte: '#131400',
    gedaempft: '#5c6300',
    linie: 'rgba(19, 20, 0, 0.3)',
    tief: '#131400',
    aufTief: '#d8f000',
  },
});
