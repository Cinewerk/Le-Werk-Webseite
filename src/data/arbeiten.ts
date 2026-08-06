/**
 * Die Projekte aus "Featured Work" — an einer Stelle, weil sie an zwei
 * Orten gebraucht werden: als Kacheln auf der Startseite und als
 * Unterseiten unter /arbeiten/<slug>.
 *
 * DIE REIHENFOLGE ist zugleich der Platz im Raster: drei Spalten, zwei
 * Reihen, und die mittlere Spalte hängt tiefer als die beiden äußeren.
 * Beide Reihen laufen deshalb nach demselben Muster
 *
 *      Video          Foto           Video
 *      oben           tief           halbhoch
 *
 * und das ist keine Sortierung nach Geschmack, sondern nach Höhe: Die
 * beiden Fotostrecken stehen quer und sind damit die kürzesten Kacheln
 * (4:3 gegen 3:4). In der hängenden Mitte nimmt der Versatz genau das
 * auf — die Lücke, die eine kurze Kachel in ihrer Reihe sonst unter sich
 * ließe, steht dann über ihr und ist der Versatz selbst.
 *
 * Daraus folgt für jede Umsortierung: Was auf Platz 2 und 5 steht, sollte
 * quer sein. Steht dort ein Hochformat, hängt die höchste Kachel der
 * Reihe auch noch am tiefsten, und die beiden äußeren stehen auf halber
 * Höhe in der Luft.
 *
 * Siemens eröffnet. Es ist als einziges 4:5 aufgenommen — weder quer noch
 * hochkant — und setzt damit den Maßstab, gegen den die drei Reels
 * gelesen werden.
 *
 * Der Versatz je Spalte steht in index.astro bei .werk.
 *
 * Bis zum 6. August 2026 lag hier ein Reißverschluss aus drei Paaren im
 * Zwölfspaltigen, mit eigenen Spaltenbreiten und Versätzen je Kachel. Er
 * ist mit dem Umbau auf das Rasterfeld entfallen; seine Maße und seine
 * Begründung stehen in der Git-Historie.
 */
/** Ausgabeformate, wie sie in den Pillen stehen */
export type Format = '16:9' | '4:3' | '4:5' | '3:2' | '9:16';

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
   * Die Formate, in denen die Arbeit entstanden ist — stehen als Pillen in
   * der Zeile unter der Kachel.
   *
   * Bewusst getrennt von ratio: Das ist der Beschnitt fürs Raster, hier
   * steht die Angabe zur Arbeit. Siemens lief eine Weile als 4:3-Arbeit in
   * einer 16:9-Kachel, und sobald ein Projekt in einem Format ausgeliefert
   * wird, das der Kachelplatz nicht tragen kann, gehen sie auseinander.
   * Deshalb bleiben es zwei Felder.
   *
   * Eine Liste, weil drei der Projekte in zwei Formaten ausgeliefert
   * wurden. Die Reihenfolge ist die Anzeigereihenfolge: zuerst das
   * Format, in dem die Kachel steht, dann das zweite.
   */
  formate: Format[];
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
    // Der Auftakt, siehe Kopf der Datei.
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
    formate: ['4:5'],
    alt: 'Frau mit regenbogenbunt gefärbtem Haar und großflächigem Rückentattoo steht von hinten am Ufer eines Sees',
    art: 'Video',
    eigeneSeite: true,
  },
  {
    // Die hängende Mitte der oberen Reihe. Von den beiden Fotostrecken
    // die hellere, und sie steht deshalb oben: Formel D wäre an dieser
    // Stelle ein zweites schweres Bild neben einem ohnehin dunklen
    // Auftakt.
    slug: 'revitive-fotogalerie',
    kunde: 'Revitive',
    titel: 'Fotografie und Web Content',
    bild: '/images/work/revitive.jpg',
    breite: 1400,
    hoehe: 933,
    ratio: '3:2',
    formate: ['3:2', '16:9'],
    alt: 'Frau auf einem hellen Sofa im Wohnzimmer, die Füße auf einem Durchblutungsgerät, daneben ein Hund vor der Terrassentür',
    art: 'Foto',
    eigeneSeite: true,
  },
  {
    // Schließt die obere Reihe rechts ab. Von den drei Reels das
    // hellste — die Kletterwand trägt die Kante, an der der Abschnitt
    // aus dem Dunkel kommt.
    slug: 'allianz-instagram-reel',
    kunde: 'Allianz × Olympia',
    titel: 'Social Videos',
    bild: '/images/work/allianz.webp',
    breite: 540,
    hoehe: 960,
    ratio: '9:16',
    formate: ['9:16', '16:9'],
    alt: 'Lachende junge Frau vor einer Kletterwand, im Hochformat aufgenommen',
    art: 'Video',
    eigeneSeite: true,
  },
  {
    // Der Slug heißt weiter …-instagram-reel: Die Adresse ist vergeben,
    // eine Umbenennung würde bestehende Links ins Leere laufen lassen.
    //
    // Eröffnet die untere Reihe, unter Siemens.
    slug: 'street-one-instagram-reel',
    kunde: 'Street One',
    titel: 'Social Content',
    bild: '/images/work/street-one.webp',
    breite: 543,
    hoehe: 960,
    ratio: '9:16',
    formate: ['9:16'],
    alt: 'Model mit schwarzem Strohhut und gestreifter Bluse in einer Industriehalle, im Hochformat aufgenommen',
    art: 'Video',
    eigeneSeite: true,
  },
  {
    // Die hängende Mitte der unteren Reihe — dieselbe Rolle wie Revitive
    // darüber. Die dunkle Werkhalle trägt das Gewicht der Reihe von
    // innen.
    slug: 'formel-d-fotogalerie',
    kunde: 'Formel D',
    titel: 'Fotografie',
    bild: '/images/work/formel-d.jpg',
    breite: 1400,
    hoehe: 933,
    ratio: '3:2',
    formate: ['3:2'],
    alt: 'Dunkler SUV frontal unter einem aufgeklappten Lichtdach mit Leuchtstoffröhren in einer Werkhalle',
    art: 'Foto',
    eigeneSeite: true,
  },
  {
    // Schließt die untere Reihe rechts ab und damit den Abschnitt — das
    // gelbe Trikot ist der letzte Farbwert vor dem Schnitt zur
    // Kundenleiste.
    slug: 'bvb-ea-sports-social-ad',
    kunde: 'BVB × EA Sports',
    titel: 'Social Ad',
    bild: '/images/work/bvb-ea-sports.webp',
    breite: 1080,
    hoehe: 1920,
    ratio: '9:16',
    formate: ['9:16'],
    alt: 'Nahaufnahme von Marco Reus im gelben BVB-Trikot, hellblond gefärbtes Haar, leicht zur Kamera geneigt',
    art: 'Video',
    eigeneSeite: true,
  },
];
