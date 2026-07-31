/**
 * Die Projekte aus "Featured Work" — an einer Stelle, weil sie an zwei
 * Orten gebraucht werden: als Kacheln auf der Startseite und als
 * Unterseiten unter /arbeiten/<slug>.
 *
 * Die Reihenfolge hier ist die Reihenfolge auf der Startseite. Sie wechselt
 * bewusst zwischen Video und Foto ab — Video, Foto, Video, Foto, Video —
 * damit die Fotostrecken nicht als Block am Ende hängen.
 *
 * Sie trägt außerdem das Raster, denn die Plätze sind auf Bildformate
 * zugeschnitten: 1 breit, 2 klein rechts, 3 hoch, 4 breit rechts, 5 hoch
 * rechts. Wer umsortiert, muss die Formate mitdenken — ein Hochformat auf
 * Platz 4 würde 1500px hoch.
 */
export interface Arbeit {
  /** Adresse der Unterseite: /arbeiten/<slug> */
  slug: string;
  /** Kunde — steht groß im Bild */
  kunde: string;
  /** Was für das Projekt entstanden ist — steht in der Zeile darunter */
  titel: string;
  bild: string;
  breite: number;
  hoehe: number;
  /** Beschnitt der Kachel */
  ratio: '16:9' | '9:16' | '3:2';
  alt: string;
  /** Videoprojekt oder Fotostrecke — bestimmt später den Aufbau der Unterseite */
  art: 'Video' | 'Foto';
  /**
   * Hat das Projekt eine ausgebaute eigene Seite? Dann übernimmt die
   * Sammelroute /arbeiten/[slug] es nicht mehr, sonst gäbe es zwei Seiten
   * unter derselben Adresse.
   */
  eigeneSeite?: boolean;
}

export const arbeiten: Arbeit[] = [
  {
    slug: 'siemens-social-media-kampagne',
    kunde: 'Siemens',
    titel: 'Social Media Kampagne',
    bild: '/images/work/siemens.webp',
    breite: 1920,
    hoehe: 1080,
    ratio: '16:9',
    alt: 'Frau mit regenbogenbunt gefärbtem Haar und großflächigem Rückentattoo steht von hinten am Ufer eines Sees',
    art: 'Video',
    eigeneSeite: true,
  },
  {
    // Auf dem kleinsten Platz, deshalb hier und nicht Formel D: Das helle
    // Wohnzimmer bleibt auch klein lesbar, die dunkle Werkhalle nicht.
    slug: 'revitive-fotogalerie',
    kunde: 'Revitive',
    titel: 'Fotogalerie',
    bild: '/images/work/revitive.jpg',
    breite: 1400,
    hoehe: 933,
    ratio: '3:2',
    alt: 'Frau auf einem hellen Sofa im Wohnzimmer, die Füße auf einem Durchblutungsgerät, daneben ein Hund vor der Terrassentür',
    art: 'Foto',
    eigeneSeite: true,
  },
  {
    slug: 'allianz-instagram-reel',
    kunde: 'Allianz',
    titel: 'Instagram Reel',
    bild: '/images/work/allianz.webp',
    breite: 540,
    hoehe: 960,
    ratio: '9:16',
    alt: 'Lachende junge Frau vor einer Kletterwand, im Hochformat aufgenommen',
    art: 'Video',
    eigeneSeite: true,
  },
  {
    slug: 'formel-d-fotogalerie',
    kunde: 'Formel D',
    titel: 'Fotogalerie',
    bild: '/images/work/formel-d.jpg',
    breite: 1400,
    hoehe: 933,
    ratio: '3:2',
    alt: 'Dunkler SUV frontal unter einem aufgeklappten Lichtdach mit Leuchtstoffröhren in einer Werkhalle',
    art: 'Foto',
    eigeneSeite: true,
  },
  {
    // Der Slug heißt weiter …-instagram-reel: Die Adresse ist vergeben,
    // eine Umbenennung würde bestehende Links ins Leere laufen lassen.
    slug: 'street-one-instagram-reel',
    kunde: 'Street One',
    titel: 'Social Media Kampagne',
    bild: '/images/work/street-one.webp',
    breite: 543,
    hoehe: 960,
    ratio: '9:16',
    alt: 'Model mit schwarzem Strohhut und gestreifter Bluse in einer Industriehalle, im Hochformat aufgenommen',
    art: 'Video',
    eigeneSeite: true,
  },
];
