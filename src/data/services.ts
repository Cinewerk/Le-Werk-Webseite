/**
 * Die vier Services an einer Stelle — genutzt von der Overlay-Navigation,
 * dem Teaser auf der Startseite, der Services-Übersicht und dem Footer.
 * Wer hier etwas ergänzt, ergänzt es überall.
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
    href: '/services/foto',
    label: 'Foto',
    img: '/images/service-foto.jpg',
    text: 'Kampagnen-, Produkt- und Reportagefotografie. Ein Setup, alle Zuschnitte.',
  },
  {
    href: '/services/video',
    label: 'Video',
    img: '/images/service-video.jpg',
    text: 'Vom Brand Film bis zum vertikalen Cut — gedreht, geschnitten, gefinished.',
  },
  {
    href: '/services/konzept',
    label: 'Konzept',
    img: '/images/service-konzept.jpg',
    text: 'Idee, Storyline und Formatstrategie, bevor die erste Klappe fällt.',
  },
  {
    href: '/services/workshops',
    label: 'Workshops',
    img: '/images/service-workshops.jpg',
    text: 'Wir bringen Content-Produktion in eure Teams — praxisnah, an echten Cases.',
  },
];
