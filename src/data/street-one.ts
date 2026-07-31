/**
 * Inhalte der Projektseite /arbeiten/street-one-instagram-reel.
 *
 * Die Videos liegen bei Vimeo. Eingebunden werden sie erst auf Klick
 * (siehe .clip in der Seite): Bis dahin steht nur ein Standbild von
 * unserem eigenen Server, es geht keine Verbindung zu Vimeo raus. Die
 * Standbilder unter poster/ sind einmalig von Vimeo geholt und liegen
 * jetzt im Projekt.
 *
 * Reihenfolge: Die Zeilen sind nach Format sortiert — erst vier
 * Hochkantvideos, dann vier im Verhältnis 3:4, dann wieder vier hochkant.
 * Bei vier Spalten steht damit jede Reihe auf einer Höhe; gemischt hätte
 * jede Reihe eine ausgefranste Unterkante.
 */
export interface Clip {
  /** Vimeo-ID */
  id: string;
  /** Hash für nicht gelistete Videos, sonst leer */
  hash?: string;
  /** Name des Content-Formats, so wie es in der Produktion hieß */
  titel: string;
  /** Zusatz, wo das Format es braucht */
  zusatz?: string;
  laenge: string;
  ratio: '9 / 16' | '3 / 4';
}

export const clips: Clip[] = [
  { id: '747283026', titel: 'Cowgirl', zusatz: 'Spot', laenge: '0:31', ratio: '9 / 16' },
  { id: '706558501', hash: 'd69048f147', titel: 'Denim 3 Looks', laenge: '0:36', ratio: '9 / 16' },
  { id: '716794778', titel: 'Ocean Dress-Up', laenge: '0:34', ratio: '9 / 16' },
  { id: '711646446', hash: '7e857f1b7d', titel: 'Denim Tips & Tricks', laenge: '0:36', ratio: '9 / 16' },

  { id: '719077947', hash: 'dae0215b7c', titel: 'Jerseys Fashion Wiki', laenge: '0:24', ratio: '3 / 4' },
  { id: '719079705', hash: '56c3cfb961', titel: 'Muster Magic Rotation', laenge: '0:17', ratio: '3 / 4' },
  { id: '721010353', hash: '9d5262feea', titel: 'Corals Shirt', zusatz: 'Animation', laenge: '0:15', ratio: '3 / 4' },
  { id: '721359629', hash: 'bf5d38dfb6', titel: 'Shells Shirt', zusatz: 'Animation', laenge: '0:15', ratio: '3 / 4' },

  { id: '718257039', titel: 'Jerseys Magic Rotation', laenge: '0:16', ratio: '9 / 16' },
  { id: '707019873', titel: 'White Blue Silent Sit', laenge: '0:14', ratio: '9 / 16' },
  { id: '711980836', hash: '59a2c7d681', titel: 'Denim Fashion Wiki', laenge: '0:28', ratio: '9 / 16' },
  { id: '711270457', hash: 'ce6d5937ab', titel: 'Stripes Shirt', zusatz: 'Animation', laenge: '0:10', ratio: '9 / 16' },
];

/**
 * Die Fotostrecke. Studio und Location wechseln sich bewusst ab.
 *
 * Neun Bilder, nicht zehn: Bei drei Spalten füllen neun genau drei Reihen.
 * Das zehnte hätte allein in einer vierten Reihe gestanden und wie ein
 * Versehen ausgesehen.
 */
export const galerie = [
  { bild: '/images/street-one/galerie-01.jpg', alt: 'Model mit schwarzem Strohhut und blau gestreifter Bluse vor einem Sprossenfenster' },
  { bild: '/images/street-one/galerie-02.jpg', alt: 'Model im hellen Sweatkleid, stehend vor weißem Studiohintergrund' },
  { bild: '/images/street-one/galerie-03.jpg', alt: 'Zwei Models nebeneinander im Studio, eine im Sweatkleid, eine in Bluse und Jeans' },
  { bild: '/images/street-one/galerie-04.jpg', alt: 'Porträt eines Models im hellen Hoodie mit Print, vor einer Ziegelwand' },
  { bild: '/images/street-one/galerie-05.jpg', alt: 'Model in Bluse und Jeans, sitzend auf einem Holzstuhl im Studio' },
  { bild: '/images/street-one/galerie-06.jpg', alt: 'Model auf einem Stuhl in der Industriehalle, Sonnenlicht vom Fenster' },
  { bild: '/images/street-one/galerie-07.jpg', alt: 'Model im Sweatkleid auf einem Holzstuhl, weißer Studiohintergrund' },
  { bild: '/images/street-one/galerie-08.jpg', alt: 'Model in weißem Shirt und gemusterten Shorts im Studio' },
  { bild: '/images/street-one/galerie-09.jpg', alt: 'Zwei Models gehen lachend nebeneinander durchs Studio' },
];
