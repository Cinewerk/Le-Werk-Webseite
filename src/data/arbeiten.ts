/**
 * Die Projekte aus "Featured Work" — an einer Stelle, weil sie an zwei
 * Orten gebraucht werden: als Kacheln auf der Startseite und als
 * Unterseiten unter /arbeiten/<slug>.
 *
 * Die Reihenfolge hier ist die Reihenfolge auf der Startseite und folgt
 * zwei Regeln zugleich.
 *
 * ERSTENS: In keiner Reihe stehen zwei Hochformate nebeneinander. Das geht
 * genau auf — es gibt drei 9:16 und drei andere Formate, also bekommt jede
 * der drei Reihen ein Hochformat und ein Querformat.
 *
 * ZWEITENS: Video und Foto wechseln so weit ab, wie es bei vier Filmen und
 * zwei Strecken geht — Video, Foto, Video, Video, Foto, Video. Die beiden
 * Strecken liegen damit auf Platz 2 und 5 und damit so weit auseinander wie
 * überhaupt möglich.
 *
 * Die sechs Plätze in index.astro sind auf die Formate zugeschnitten und so
 * bemessen, dass alle Kacheln ungefähr gleich schwer wiegen — die Flächen
 * liegen zwischen 267.000 und 339.000 Bildpunkten, statt wie vorher zwischen
 * 155.000 und 501.000:
 *
 *   1 hoch links (9:16, 4 Sp.)   2 breit rechts (3:2, 6 Sp.)
 *   3 hoch eingerückt (9:16)     4 groß rechts (4:5, 5 Sp.)
 *   5 breit links (3:2, 6 Sp.)   6 hoch rechts (9:16, 4 Sp.)
 *
 * Wer umsortiert, muss beides mitdenken: die Formatpaare je Reihe und die
 * Spaltenzahl. Ein 3:2 auf einem Vier-Spalten-Platz wäre nur 272px hoch und
 * fiele gegen die Hochformate ab.
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
  ratio: '16:9' | '4:3' | '4:5' | '9:16' | '3:2';
  /**
   * Das Format, in dem die Arbeit entstanden ist — steht als Pille in der
   * Zeile unter der Kachel.
   *
   * Bewusst getrennt von ratio: Das ist der Beschnitt fürs Raster, hier
   * steht die Angabe zur Arbeit. Zurzeit sind beide überall gleich — das
   * ist ein Zustand, keine Regel. Siemens lief eine Weile als 4:3-Arbeit
   * in einer 16:9-Kachel, und sobald ein Projekt in einem Format
   * ausgeliefert wird, das der Kachelplatz nicht tragen kann, gehen sie
   * wieder auseinander. Deshalb bleiben es zwei Felder.
   */
  format: '4:3' | '4:5' | '3:2' | '9:16';
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
    slug: 'bvb-ea-sports-social-ad',
    kunde: 'BVB × EA Sports',
    titel: 'Social Ad',
    bild: '/images/work/bvb-ea-sports.webp',
    breite: 540,
    hoehe: 960,
    ratio: '9:16',
    format: '9:16',
    alt: 'Nahaufnahme eines Mannes mit hellblond gefärbtem Haar im gelben Trikot, leicht zur Kamera geneigt',
    art: 'Video',
    eigeneSeite: true,
  },
  {
    // Auf dem breiten Platz neben dem Hochformat, deshalb hier und nicht
    // Formel D: Das helle Wohnzimmer trägt den Kontrast zur dunklen
    // BVB-Nahaufnahme daneben, die dunkle Werkhalle würde mit ihr
    // verschwimmen.
    slug: 'revitive-fotogalerie',
    kunde: 'Revitive',
    titel: 'Fotogalerie',
    bild: '/images/work/revitive.jpg',
    breite: 1400,
    hoehe: 933,
    ratio: '3:2',
    format: '3:2',
    alt: 'Frau auf einem hellen Sofa im Wohnzimmer, die Füße auf einem Durchblutungsgerät, daneben ein Hund vor der Terrassentür',
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
    format: '9:16',
    alt: 'Model mit schwarzem Strohhut und gestreifter Bluse in einer Industriehalle, im Hochformat aufgenommen',
    art: 'Video',
    eigeneSeite: true,
  },
  {
    // ACHTUNG: Die Datei ist 1920x1080. Der 4:5-Beschnitt behält davon nur
    // die mittleren 45 % der Breite — es passt, weil die Frau fast genau
    // mittig steht, ist aber ein Beschnitt aus einem Beschnitt. Sobald eine
    // echte 4:5-Fassung aus dem Schnitt vorliegt, die hier eintragen.
    slug: 'siemens-social-media-kampagne',
    kunde: 'Siemens',
    titel: 'Social Media Kampagne',
    bild: '/images/work/siemens.webp',
    breite: 1920,
    hoehe: 1080,
    ratio: '4:5',
    format: '4:5',
    alt: 'Frau mit regenbogenbunt gefärbtem Haar und großflächigem Rückentattoo steht von hinten am Ufer eines Sees',
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
    format: '3:2',
    alt: 'Dunkler SUV frontal unter einem aufgeklappten Lichtdach mit Leuchtstoffröhren in einer Werkhalle',
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
    format: '9:16',
    alt: 'Lachende junge Frau vor einer Kletterwand, im Hochformat aufgenommen',
    art: 'Video',
    eigeneSeite: true,
  },
];
