/**
 * Die Inhalte der Startseite — einmal, für alle Entwürfe.
 *
 * Wortgleich aus der laufenden Seite gezogen. Kein Entwurf schreibt Text
 * selbst: Wenn alle dasselbe sagen, vergleicht man Gestaltung und nicht
 * Formulierung. Wer hier etwas ändert, ändert es in allen Entwürfen.
 *
 * Die Bildpfade zeigen mit ../public/… auf den Bestand des Projekts. Die
 * Entwürfe kopieren nichts; sie liegen daneben und schauen hinüber.
 */

export const inhalt = {
  marke: 'Le Werk',
  gattung: 'Visual Content Studio',

  claim: 'Le Werk is a visual content studio crafting brand content worth watching.',

  position: {
    auftakt: 'Gegründet von Filmemachern.',
    satz: 'Le Werk ist spezialisiert auf Storytelling, Film und Foto für Social und Branded Content.',
    zeile: ['Konzept', 'Produktion', 'Postproduktion', 'Based in Köln, Booked Worldwide'],
  },

  arbeiten: {
    label: 'Featured Work',
    liste: [
      { kunde: 'Siemens', titel: 'Social Media Kampagne', formate: ['4:5'], bild: 'work/siemens.webp', ratio: '4 / 5' },
      { kunde: 'Allianz × Olympia', titel: 'Social Videos', formate: ['9:16', '16:9'], bild: 'work/allianz.webp', ratio: '9 / 16' },
      { kunde: 'Revitive', titel: 'Fotografie und Web Content', formate: ['3:2', '16:9'], bild: 'work/revitive.jpg', ratio: '3 / 2' },
      { kunde: 'Street One', titel: 'Social Content', formate: ['9:16'], bild: 'work/street-one.webp', ratio: '9 / 16' },
      { kunde: 'BVB × EA Sports', titel: 'Social Ad', formate: ['9:16'], bild: 'work/bvb-ea-sports.webp', ratio: '9 / 16' },
      { kunde: 'Formel D', titel: 'Fotografie', formate: ['3:2'], bild: 'work/formel-d.jpg', ratio: '3 / 2' },
    ],
  },

  kunden: {
    label: 'Ausgewählte Kunden',
    liste: [
      { name: 'Siemens', datei: 'kunden/siemens.png' },
      { name: 'Street One', datei: 'kunden/street-one.png' },
      { name: 'Douglas', datei: 'kunden/douglas.png' },
      { name: 'Allianz', datei: 'kunden/allianz.png' },
      { name: 'Olympische Spiele', datei: 'kunden/olympia.png' },
      { name: 'Paralympisches Komitee', datei: 'kunden/paralympics.png' },
      { name: 'EA', datei: 'kunden/ea.png' },
      { name: 'Formel D', datei: 'kunden/formel-d.png' },
      { name: 'Seven.One', datei: 'kunden/sevenone.png' },
      { name: 'Zehnder Group', datei: 'kunden/zehnder.png' },
      { name: 'HUGO BOSS', datei: 'kunden/hugo-boss.png' },
      { name: 'Johnson & Johnson', datei: 'kunden/johnson-johnson.png' },
    ],
  },

  disziplinen: {
    label: 'Was wir machen',
    liste: [
      {
        titel: 'Video',
        text: 'Vertikale und horizontale Formate. Komplett aus einer Hand. Visuell ansprechend, mit inhaltlicher Tiefe und Auge fürs Detail. Für Kampagne und organischen Content.',
        bild: 'services/video.jpg',
      },
      {
        titel: 'Idee & Konzept',
        text: 'Wo wir einsteigen, entscheidet ihr. Entweder setzen wir eure fertigen Ideen um. Oder wir kommen schon früher mit an Board und übernehmen die Ideenentwicklung und Konzeptarbeit. Es muss erst ein Fundament geschaffen werden? Gerne fangen wir bei der Content Strategy an.',
        bild: 'services/konzept.jpg',
      },
      {
        titel: 'Foto',
        text: 'Aus derselben Produktion wie Video oder als eigener Shoot. Fotografie und Nachbearbeitung für Content, Kampagne, Event oder Marke.',
        bild: 'services/foto.jpg',
      },
    ],
  },

  team: {
    label: 'Wer dahintersteht',
    titel: 'Unser Kernteam',
    liste: [
      { name: 'Philipp Maxhofer', rolle: ['Concept', 'Creative Director'], bild: 'team/philipp-maxhofer.jpg' },
      { name: 'Cem-Pierre Schuch', rolle: ['Head of Production', 'Self-Shooting Director'], bild: 'team/cem-schuch.jpg' },
      { name: 'Joscha Ortmeier', rolle: ['Head of Post-Production', 'Photographer'], bild: 'team/joscha-ortmeier.jpg' },
      { name: 'Tom Beckers', rolle: ['Producer', 'Content Creator'], bild: 'team/tom-beckers.jpg' },
    ],
    bloecke: [
      {
        nr: '01',
        auftakt: 'Erfahrung aus hunderten Produktionen:',
        text: 'Wir kombinieren ein schlagkräftiges Kernteam mit kreativen Spezialisten aus verschiedenen Feldern.',
        bilder: ['bts/bts-halle.jpg', 'bts/bts-transporter.jpg', 'bts/bts-loft.jpg', 'bts/bts-schnitt.jpg', 'bts/bts-studio.jpg', 'bts/bts-buero.jpg'],
      },
      {
        nr: '02',
        auftakt: 'Based in Köln, booked worldwide:',
        text: 'Unsere Räumlichkeiten liegen im Krafthaus, im Rheinauhafen. Gedreht wird in Köln, bundesweit oder auch international.',
        bilder: ['krafthaus/haus-01.jpg', 'krafthaus/haus-03.jpg', 'krafthaus/haus-02.jpg', 'krafthaus/haus-05.jpg', 'krafthaus/haus-06.jpg', 'krafthaus/haus-drohne.jpg'],
      },
    ],
  },

  gruende: {
    titel: 'Warum Le Werk',
    liste: [
      {
        nr: '01',
        titel: 'Content darf gut aussehen',
        text: 'Hochwertig produzierte Visuals in Bild und Bewegtbild — mit den Maßstäben an Licht, Bildgestaltung und Postproduktion, wie man es aus der Filmproduktion kennt.',
      },
      {
        nr: '02',
        titel: 'Inhaltliche Substanz',
        text: 'Redaktionelle Tiefe, ehrlich erzählte Geschichten, menschliche Momente. Interviewbasiert und dokumentarisch, mit Blick für Charaktere.',
      },
      {
        nr: '03',
        titel: 'Social First',
        text: 'Marken müssen dort sichtbar sein, wo die Aufmerksamkeit ihrer Kunden liegt. Wir denken social first und produzieren den richtigen Content für die richtigen Kanäle.',
      },
    ],
  },

  faq: {
    label: 'Häufige Fragen',
    titel: 'Kurz beantwortet',
    liste: [
      {
        f: 'Was kostet eine Produktion bei Le Werk?',
        a: 'Das hängt an Drehtagen, Team und Formatumfang. Kompakte Social-Produktionen starten im mittleren vierstelligen Bereich, größere Kampagnen liegen fünfstellig. Nach einem 20-minütigen Gespräch bekommt ihr eine belastbare Spanne — kein Zahlenraten.',
      },
      {
        f: 'Macht ihr auch UGC- oder Handy-Content?',
        a: 'Nein. Das ist ein anderer Markt mit anderen Preisen und anderem Anspruch. Bei uns entstehen Visuals auf Kampagnenniveau — auch dann, wenn sie am Ende vertikal im Feed laufen. Wer schnellen, günstigen Durchsatz sucht, ist bei uns falsch.',
      },
      {
        f: 'Bekommen wir Foto und Video aus einer Produktion?',
        a: 'Ja, das ist der Kern unserer Arbeitsweise. Wir planen Sets so, dass bewegte und stehende Bilder parallel entstehen. Das spart einen kompletten Produktionstag und sorgt dafür, dass Foto und Video wie eine Kampagne aussehen — nicht wie zwei.',
      },
      {
        f: 'Warum denkt ihr vom vertikalen Format aus?',
        a: 'Weil dort die Aufmerksamkeit liegt. Ein Bildaufbau, der als 16:9 entsteht und später hochkant beschnitten wird, verliert immer — Blickführung, Text und Rhythmus stimmen dann nicht mehr. Wir planen umgekehrt: vertikal als Kern, Landscape und Stills als Ableitung derselben Produktion.',
      },
      {
        f: 'Wie lange dauert es von der Anfrage bis zum fertigen Material?',
        a: 'Für eine kompakte Produktion rechnet mit drei bis vier Wochen: eine Woche Konzept, ein bis zwei Drehtage, ein bis zwei Wochen Post. Bei laufenden Content-Paketen verkürzt sich das deutlich, weil Setup und Look bereits stehen.',
      },
    ],
  },

  schluss: {
    auftakt: 'Erzähl uns',
    titel: 'von deinem Projekt',
    knopf: 'Projekt anfragen',
    mail: 'contact@lewerk.de',
  },
};

/** Bildpfad, von einer Entwurfsdatei aus gesehen */
export const bild = (p) => `../public/images/${p}`;

/** Kürzt einen Text auf ganze Wörter */
export const kurz = (t, n) => (t.length <= n ? t : t.slice(0, t.lastIndexOf(' ', n)) + ' …');
