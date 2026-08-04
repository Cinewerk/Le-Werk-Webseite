/**
 * Das Angebot an einer Stelle — genutzt von der Overlay-Navigation,
 * dem Teaser auf der Startseite, der Services-Übersicht und dem Footer.
 *
 * Die Reihenfolge hier bestimmt Menü, Footer und Services-Seite. Auf der
 * Startseite steht eine eigene Reihenfolge (siehe index.astro), weil die
 * Kästen dort anders angeordnet sind.
 *
 * Workshops stehen am Ende — sie sind keine Produktionsdisziplin, sondern
 * ein eigenes Format, in dem wir das Handwerk weitergeben.
 */
export interface Service {
  href: string;
  label: string;
  img: string;
  /** Kurzbeschreibung für Teaser und Übersicht */
  text: string;
  /** Produktionsdisziplin? Steuert, was auf der Startseite erscheint. */
  disziplin: boolean;
  /**
   * Abweichender Name für die Startseite. Im Menü und im Footer braucht es
   * das kurze Wort, im großen Kasten auf der Startseite darf es länger sein.
   */
  titel?: string;
  /**
   * Bildformat für die Startseite. Der große Kasten links füllt die Höhe
   * der beiden rechten und braucht deshalb keines; die beiden rechten
   * stehen quer.
   */
  ratio?: string;
}

export const services: Service[] = [
  {
    href: '/services/video',
    label: 'Video',
    img: '/images/services/video.jpg',
    text: 'Vertikale und horizontale Formate. Komplett aus einer Hand. Visuell ansprechend, mit inhaltlicher Tiefe und Auge fürs Detail. Für Kampagne und organischen Content.',
    disziplin: true,
    /* 4:5 ist das Eigenformat der Aufnahme — so steht sie ungeschnitten.
       Das gilt nur unterhalb von 64rem; darüber füllt der Kasten die Höhe
       der beiden rechten und beschneidet ohnehin. */
    ratio: '3 / 4',
  },
  {
    href: '/services/foto',
    label: 'Foto',
    img: '/images/services/foto.jpg',
    text: 'Aus derselben Produktion wie Video oder als eigener Shoot. Fotografie und Nachbearbeitung für Content, Kampagne, Event oder Marke.',
    disziplin: true,
    ratio: '7 / 5',
  },
  {
    href: '/services/konzept',
    label: 'Konzept',
    titel: 'Idee & Konzept',
    img: '/images/services/konzept.jpg',
    text: 'Wo wir einsteigen, entscheidet ihr. Entweder setzen wir eure fertigen Ideen um. Oder wir kommen schon früher mit an Board und übernehmen die Ideenentwicklung und Konzeptarbeit. Es muss erst ein Fundament geschaffen werden? Gerne fangen wir bei der Content Strategy an.',
    disziplin: true,
    ratio: '9 / 8',
  },
  {
    href: '/services/workshops',
    label: 'Workshops',
    img: '/images/services/workshops.jpg',
    text: 'Auftreten vor der Kamera, Social-Media-Grundlagen und Improtheater fürs Team. Wir geben weiter, was wir können.',
    disziplin: false,
  },
];
