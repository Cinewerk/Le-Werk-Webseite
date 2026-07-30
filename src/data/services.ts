/**
 * Das Angebot an einer Stelle — genutzt von der Overlay-Navigation,
 * dem Teaser auf der Startseite, der Services-Übersicht und dem Footer.
 *
 * Reihenfolge ist nicht beliebig: Video ist laut Positionierung die
 * Hauptdisziplin, Fotografie die klare Zweitdisziplin, Konzept läuft
 * vorgeschaltet. Workshops stehen bewusst am Ende — sie sind keine
 * Produktionsdisziplin, sondern ein eigenes Format, in dem wir das
 * Handwerk weitergeben.
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
   * Bildformat für die Startseite. Jede Disziplin wird in dem Format
   * beschnitten, in dem sie arbeitet — Video hochkant, Foto im
   * Landschaftsformat, Konzept quadratisch. Die unterschiedlichen Formen
   * machen die Formatlogik sichtbar, statt sie nur zu behaupten.
   */
  ratio?: string;
}

export const services: Service[] = [
  {
    href: '/services/video',
    label: 'Video',
    img: '/images/service-video.jpg',
    text: 'Hauptdisziplin. Social Content und vertikale Formate, interviewbasiert und dokumentarisch erzählt.',
    disziplin: true,
    ratio: '4 / 5',
  },
  {
    href: '/services/foto',
    label: 'Foto',
    img: '/images/service-foto.jpg',
    text: 'Klare Zweitdisziplin. Für Content, Kampagne und Marken-Bildwelten.',
    disziplin: true,
    ratio: '3 / 2',
  },
  {
    href: '/services/konzept',
    label: 'Konzept',
    img: '/images/service-konzept.jpg',
    text: 'Vorgeschaltet, bei Bedarf mit Content-Strategie. Vorbau der Produktion, kein Selbstzweck.',
    disziplin: true,
    ratio: '1 / 1',
  },
  {
    href: '/services/workshops',
    label: 'Workshops',
    img: '/images/service-workshops.jpg',
    text: 'Auftreten vor der Kamera, Social-Media-Grundlagen und Improtheater fürs Team. Wir geben weiter, was wir können.',
    disziplin: false,
  },
];
