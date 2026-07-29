/**
 * Die Disziplinen an einer Stelle — genutzt von der Overlay-Navigation,
 * dem Teaser auf der Startseite, der Services-Übersicht und dem Footer.
 *
 * Reihenfolge ist nicht beliebig: Video ist laut Positionierung die
 * Hauptdisziplin, Fotografie die klare Zweitdisziplin, Konzept läuft
 * vorgeschaltet. Diese Rangfolge soll auch die Darstellung abbilden.
 */
export interface Service {
  href: string;
  label: string;
  img: string;
  /** Kurzbeschreibung für Teaser und Übersicht */
  text: string;
}

export const services: Service[] = [
  {
    href: '/services/video',
    label: 'Video',
    img: '/images/service-video.jpg',
    text: 'Hauptdisziplin. Social Content und vertikale Formate, interviewbasiert und dokumentarisch erzählt.',
  },
  {
    href: '/services/foto',
    label: 'Foto',
    img: '/images/service-foto.jpg',
    text: 'Klare Zweitdisziplin. Für Content, Kampagne und Marken-Bildwelten.',
  },
  {
    href: '/services/konzept',
    label: 'Konzept',
    img: '/images/service-konzept.jpg',
    text: 'Vorgeschaltet, bei Bedarf mit Content-Strategie. Vorbau der Produktion, kein Selbstzweck.',
  },
];
