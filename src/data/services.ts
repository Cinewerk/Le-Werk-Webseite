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
    img: '/images/service-video.jpg',
    text: 'Vertikale und horizontale Formate. Visuell ansprechend, mit inhaltlicher Tiefe.',
    disziplin: true,
    ratio: '3 / 4',
  },
  {
    href: '/services/foto',
    label: 'Foto',
    img: '/images/service-foto.jpg',
    text: 'Aus derselben Produktion oder als eigener Shoot. Für Content, Kampagne und Marken-Bildwelten.',
    disziplin: true,
    ratio: '3 / 2',
  },
  {
    href: '/services/konzept',
    label: 'Konzept',
    titel: 'Idee & Konzept',
    img: '/images/service-konzept.jpg',
    text: 'Wenn die Richtung noch offen ist, entwickeln wir sie mit euch.',
    disziplin: true,
    ratio: '3 / 2',
  },
  {
    href: '/services/workshops',
    label: 'Workshops',
    img: '/images/service-workshops.jpg',
    text: 'Auftreten vor der Kamera, Social-Media-Grundlagen und Improtheater fürs Team. Wir geben weiter, was wir können.',
    disziplin: false,
  },
];
