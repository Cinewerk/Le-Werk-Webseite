/**
 * Scrollgebundener Fortschritt mit Nachlauf.
 *
 * Setzt an jedem übergebenen Element die Custom Property `--q`: 0, solange
 * es von unten hereinkommt, 1, sobald es steht. Was daraus wird, entscheidet
 * das CSS — hier wird nur gerechnet.
 *
 * `--q` folgt der Scrollposition nicht sofort, sondern zieht ihr nach: Je
 * Bild rückt der Ist-Wert nur um einen Bruchteil an den Ziel-Wert heran.
 * Dadurch bewegt sich etwas nach dem Loslassen noch kurz weiter und kommt
 * weich zur Ruhe. Wer schnell scrollt, reißt eine größere Lücke zwischen
 * Ist und Ziel auf — der Nachlauf dauert dann länger, ganz von selbst.
 *
 * Die Zeitkonstante ist nicht geschätzt, sondern aus der Referenz gemessen:
 * Bildfolge im Abstand von 0,04 s, je Bild die mittlere Helligkeitsänderung
 * gegenüber dem vorherigen. Nach jedem Scroll-Stoß klingt diese Bewegung
 * über 0,7 bis 0,9 s exponentiell ab; an drei Stellen ergibt das
 * übereinstimmend rund 215 ms.
 *
 * Das Modul ist aus Streublock.astro herausgelöst, damit die Kacheln in
 * "Featured Work" nicht nur ähnlich, sondern nach derselben Rechnung
 * laufen. Zwei Abschnitte mit zwei Zeitkonstanten wären zwei Bewegungen,
 * die sich gegenseitig falsch aussehen lassen.
 *
 * Gerechnet wird nur, solange ein Element sichtbar und noch in Bewegung
 * ist. Geschrieben wird ausschließlich eine Custom Property: kein Layout,
 * kein Repaint, nur Compositing.
 */

/** Zeitkonstante des Nachlaufs in Millisekunden, an der Referenz gemessen. */
export const TAU = 215;

/** Ab dieser Restdifferenz gilt ein Element als angekommen. */
const RUHE = 0.001;

interface Einstellungen {
  /**
   * Über welchen Anteil der Fensterhöhe der Weg von 0 auf 1 läuft. 0.8
   * heißt: 0, wenn die Oberkante unten hereinkommt, 1, sobald sie bei 20 %
   * der Fensterhöhe steht.
   */
  fenster?: number;
  /** Klasse, die gesetzt wird, sobald `--q` einen Wert hat. */
  klasse?: string;
}

/**
 * Bindet `--q` an die Scrollposition. Gibt nichts zurück — die Beobachter
 * laufen, solange die Seite steht.
 */
export function nachlaufBinden(
  elemente: ArrayLike<HTMLElement>,
  { fenster = 0.8, klasse = 'is-aktiv' }: Einstellungen = {}
) {
  const liste = Array.from(elemente);
  if (!liste.length) return;

  const ruhig = matchMedia('(prefers-reduced-motion: reduce)');
  const sichtbar = new Set<HTMLElement>();
  const ist = new Map<HTMLElement, number>();

  let laeuft = false;
  let letzterTakt = 0;

  const ziel = (el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    const H = window.innerHeight;
    return Math.min(1, Math.max(0, (H - r.top) / (H * fenster)));
  };

  const takt = (jetzt: number) => {
    // Erstes Bild und Sprünge nach einem Tab-Wechsel abfangen: Ohne die
    // Deckelung würde ein einzelnes großes dt den Nachlauf überspringen.
    const dt = letzterTakt ? Math.min(64, jetzt - letzterTakt) : 16;
    letzterTakt = jetzt;

    // Anteil, um den der Ist-Wert dem Ziel näherkommt — über die Zeit
    // gerechnet und nicht je Bild. Sonst liefe der Nachlauf auf einem
    // 120-Hz-Schirm doppelt so schnell ab wie auf einem mit 60.
    const anteil = 1 - Math.exp(-dt / TAU);

    let offen = false;
    sichtbar.forEach((el) => {
      const z = ziel(el);
      const i = ist.get(el) ?? z;
      const neu = i + (z - i) * anteil;
      ist.set(el, neu);
      el.style.setProperty('--q', neu.toFixed(4));
      if (Math.abs(z - neu) > RUHE) offen = true;
    });

    if (offen) requestAnimationFrame(takt);
    else {
      laeuft = false;
      letzterTakt = 0;
    }
  };

  const anstossen = () => {
    if (laeuft) return;
    laeuft = true;
    letzterTakt = 0;
    requestAnimationFrame(takt);
  };

  // Die Klasse wird gesetzt, bevor der erste Wert steht — deshalb direkt
  // danach einmal synchron rechnen, sonst blitzt ein Element, das beim
  // Laden schon im Bild steht, kurz im Ausgangszustand auf. Der Ist-Wert
  // startet dabei auf dem Ziel-Wert: Beim Laden soll nichts nachlaufen,
  // das wäre ein Ruckler ohne Anlass.
  liste.forEach((el) => {
    el.classList.add(klasse);
    if (ruhig.matches) {
      el.style.setProperty('--q', '1');
    } else {
      const z = ziel(el);
      ist.set(el, z);
      el.style.setProperty('--q', z.toFixed(4));
    }
  });

  if (ruhig.matches) return;

  const beobachter = new IntersectionObserver(
    (eintraege) => {
      for (const e of eintraege) {
        const el = e.target as HTMLElement;
        if (e.isIntersecting) sichtbar.add(el);
        else {
          sichtbar.delete(el);

          // Außerhalb des Fensters wird nicht mehr gerechnet — deshalb hier
          // den Ist-Wert auf das Ziel setzen, statt ihn stehen zu lassen.
          //
          // Ohne das lief ein Element beim Wiedereintritt kurz in die
          // falsche Richtung: Wer nach unten scrollt und sofort wieder nach
          // oben, schiebt es unten aus dem Bild, während sein Ist-Wert noch
          // hoch steht. Beim nächsten Eintritt von unten ist das Ziel aber
          // wieder klein — es lief also erst zurück, obwohl nach unten
          // gescrollt wurde, und drehte erst um, wenn das Ziel den Ist-Wert
          // eingeholt hatte.
          //
          // ziel() deckt beide Seiten ab: oberhalb des Fensters ist der Wert
          // auf 1 begrenzt, unterhalb auf 0. Der Sprung ist nicht zu sehen,
          // weil der Beobachter erst 15 % der Fensterhöhe jenseits der Kante
          // abschaltet.
          const z = ziel(el);
          ist.set(el, z);
          el.style.setProperty('--q', z.toFixed(4));
        }
      }
      anstossen();
    },
    { rootMargin: '15% 0px' }
  );

  liste.forEach((el) => beobachter.observe(el));
  addEventListener('scroll', anstossen, { passive: true });
  addEventListener('resize', anstossen, { passive: true });
}
