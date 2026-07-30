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
}

export const services: Service[] = [
  {
    href: '/services/video',
    label: 'Video',
    img: '/images/service-video.jpg',
    text: 'Hauptdisziplin. Social Content und vertikale Formate, interviewbasiert und dokumentarisch erzählt.',
    disziplin: true,
  },
  {
    href: '/services/foto',
    label: 'Foto',
    img: '/images/service-foto.jpg',
    text: 'Klare Zweitdisziplin. Für Content, Kampagne und Marken-Bildwelten.',
    disziplin: true,
  },
  {
    href: '/services/konzept',
    label: 'Konzept',
    img: '/images/service-konzept.jpg',
    text: 'Vorgeschaltet, bei Bedarf mit Content-Strategie. Vorbau der Produktion, kein Selbstzweck.',
    disziplin: true,
  },
  {
    href: '/services/workshops',
    label: 'Workshops',
    img: '/images/service-workshops.jpg',
    text: 'Auftreten vor der Kamera, Social-Media-Grundlagen und Improtheater fürs Team. Wir geben weiter, was wir können.',
    disziplin: false,
  },
];
