/**
 * Die Projekte aus "Featured Work" — an einer Stelle, weil sie an zwei
 * Orten gebraucht werden: als Kacheln auf der Startseite und als
 * Unterseiten unter /arbeiten/<slug>.
 *
 * Die Reihenfolge ist ein Reißverschluss aus drei Paaren. Jedes Paar hat
 * eine linke und eine rechte Kachel, und die beiden greifen ineinander
 * statt nebeneinanderzustehen — keine zwei Kacheln teilen sich eine
 * Oberkante, eine Unterkante oder eine Höhe.
 *
 *   PAAR 1   Siemens links, breit und als einziges 4:5. Es eröffnet.
 *            Allianz rechts daneben, tiefer angesetzt.
 *
 *   PAAR 2   Revitive links unter Siemens, quer und über die Mitte
 *            hinausragend. Street One rechts daneben, die kleinste Kachel.
 *
 *   PAAR 3   BVB links unten, hochkant. Formel D rechts daneben, quer
 *            und bis an den rechten Rand.
 *
 * Zwei Regeln halten das zusammen:
 *
 *   GATTUNG  Die beiden Fotostrecken liegen über Kreuz — Revitive links
 *            in der Mitte, Formel D rechts unten. Dadurch steht in
 *            jedem der unteren Paare ein Film neben einer Fotostrecke.
 *            Vorher lagen beide Strecken in der unteren Hälfte, und die
 *            Seite zerfiel in einen Film- und einen Fototeil.
 *
 *   FORMAT   Kein 9:16 steht neben einem 9:16. Allianz, Street One und
 *            BVB sind so gesetzt, dass sich ihre Höhenbereiche kaum
 *            überschneiden; nebeneinander lesen sich zwei Hochformate
 *            als ein Motiv in zwei Anläufen. Was neben ihnen steht, ist
 *            entweder quer oder — bei Siemens — 4:5.
 *
 * Die Spaltenzahl und die Versätze je Platz stehen in index.astro und
 * sind auf die Formate gerechnet. Wer umsortiert, muss beides mitdenken.
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
    // Steht vorn und ist die breiteste Kachel. Das ist keine Rangfolge,
    // sondern Statik: 4:5 ist das einzige Format, das weder quer noch
    // hochkant ist, und als Auftakt setzt es den Maßstab, gegen den die
    // drei Hochformate danach gelesen werden.
    //
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
    // Rechts neben Siemens, tiefer angesetzt. Von den drei Hochformaten
    // steht dieses am höchsten, weil es das hellste ist — die Kletterwand
    // trägt den oberen Rand, an dem der Abschnitt aus dem Dunkel kommt.
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
  {
    // Die Fotostrecke direkt unter Siemens. Von den beiden ist es die
    // hellere, und sie steht deshalb hier und nicht unten: Formel D wäre
    // an dieser Stelle ein zweites schweres Bild unter einem ohnehin
    // dunklen Auftakt.
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
    //
    // Die kleinste Kachel der Seite. Klein, weil sie zwischen zwei großen
    // Nachbarn sitzt und in voller Breite nur eine zweite Reelspur unter
    // Allianz wäre.
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
    // Links unten, und damit an der Stelle, an der die Seite endet. Die
    // Kachel reicht als einzige unter alles andere — das gelbe Trikot ist
    // der letzte Farbwert vor dem Abschnittsende.
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
    // Die zweite Fotostrecke, über Kreuz zu Revitive gesetzt. Die dunkle
    // Werkhalle trägt das Gewicht der unteren rechten Ecke und schließt
    // den Abschnitt zum Rasterrand hin ab.
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
];
