# Bild- und Videomaterial

Diese Notiz lag früher als `public/images/README.md` im Projekt und wurde
damit selbst mit ausgeliefert — interne Dokumentation war unter
`/images/README.md` öffentlich abrufbar. Deshalb liegt sie jetzt in `docs/`.

Alle Bilder in `public/images/` werden unter `/images/<dateiname>`
ausgeliefert, z. B. `public/images/hero.jpg` → `<img src="/images/hero.jpg">`.

## Eigenes Bild einsetzen

Datei mit **exakt dem Namen** in `public/images/` ablegen, den das Bild
ersetzen soll — im
Code muss dann nichts geändert werden. Das alte Bild wird dabei überschrieben;
die Platzhalter liegen in der Git-Historie und sind nicht verloren.

Die Bühne der Startseite ist inzwischen ein Video, siehe Abschnitt unten.

| Datei | Wo es erscheint | Format | Status |
|---|---|---|---|
| `hero.jpg` | Team, drittes BTS-Bild | 4:3 beschnitten | **Notbehelf**, siehe unten |
| `about.jpg` | Team, zweites BTS-Bild | 3:4 hoch beschnitten | **Notbehelf**, siehe unten |
| `quote-01.jpg` – `quote-03.jpg` | — | quadratisch | **ungenutzt** (Stimmen-Sektion entfallen) |
| `team-01.jpg` – `team-04.jpg` | Sektion „Unser Team", Porträts | 2:3 hoch | Platzhalter |
| `work-01.jpg` | Arbeiten, großes Tile links | 16:9 | Platzhalter |
| `work-02.jpg` | Arbeiten, Tile rechts oben | 16:9 | Platzhalter |
| `work-03.jpg` | Arbeiten, vertikales Tile | 9:16 | Platzhalter |
| `work-04.jpg` | Arbeiten, Tile rechts unten | 3:2 | Platzhalter |
| `service-foto.jpg` | Karte „Foto" | 4:3 | Platzhalter |
| `service-video.jpg` | Karte „Video" | 4:3 | Platzhalter |
| `service-konzept.jpg` | Karte „Konzept" | 4:3 | Platzhalter |
| `service-workshops.jpg` | Karte „Workshops" auf `/services` **und** erstes BTS-Bild | 4:3 / 3:2 beschnitten | **Notbehelf**, siehe unten |
| `logokarusell.png` | Kundenlogos in der Trustbar | ein durchgehender Streifen, 5000 × 400 | **echt** |

Die Platzhalter stammen von Unsplash und sind nur zur Ansicht gedacht.

## Die drei BTS-Bilder sind dringend zu ersetzen

Die Reihe unter dem Teamtext soll den Blick hinter die Kulissen zeigen —
Kamerateam am Set, Licht, Aufbau. Dafür lag kein Material vor. Eingesetzt
sind deshalb drei vorhandene Dateien, die auf der Startseite sonst nirgends
vorkommen, damit sich kein Bild doppelt:

| Feld | Datei | Was tatsächlich zu sehen ist |
|---|---|---|
| 1, quer, größtes | `service-workshops.jpg` | Besprechung am Whiteboard |
| 2, hoch | `about.jpg` | Person am Schreibtisch |
| 3, quer | `hero.jpg` | Aufnahme im Freien |

Keines davon zeigt eine Filmproduktion. Die Reihenfolge ist nach
Motivqualität sortiert — das schwächste Bild steht im kleinsten Feld.
Sobald echte Set-Fotos vorliegen: als `bts-01.jpg` bis `bts-03.jpg`
ablegen und das `bts`-Array in `src/pages/index.astro` umhängen. Das
Seitenverhältnis steht dort pro Bild und darf zum Motiv passend geändert
werden; gemischt quer und hoch ist Absicht.

## Kundenlogos ersetzen

Die Trustbar zeigt **einen** Streifen, nicht einzelne Dateien. Für die
Endlosschleife läuft er zweimal hintereinander und wandert um genau eine
Streifenbreite. Damit der Übergang unsichtbar bleibt, muss ein neuer Streifen
zwei Bedingungen erfüllen:

1. **Links und rechts gleich viel Rand** — zusammengenommen ungefähr so viel
   wie der Abstand zwischen zwei Logos im Streifen. Sonst entsteht beim
   Rundenwechsel eine Lücke oder die Logos stoßen aneinander.
2. **Transparenter Hintergrund**, Logos in Schwarz. Die Trustbar liegt auf
   Weiß und regelt die Zurückhaltung über die Deckkraft.

Die Höhe im Layout steuert `.marquee__strip` in `src/pages/index.astro`;
die Breite folgt automatisch dem Seitenverhältnis.

## Team-Porträts

`team-01.jpg` bis `team-04.jpg` sind **Platzhalter von Unsplash und zeigen
nicht das Team**. Unter den Bildern steht derzeit „Name folgt / Rolle folgt".

Zum Ersetzen: vier Porträts im Verhältnis 2:3 (etwa 800 × 1200) unter
denselben Namen ablegen, dann Namen und Rollen im `team`-Array in
`src/pages/index.astro` eintragen. Die Darstellung entsättigt die Bilder,
damit die Reihe auch bei unterschiedlichen Lichtstimmungen ruhig bleibt.

## Bühnenvideo

Die Startseite zeigt `public/videos/lewerk-hero.mp4` formatfüllend in
Endlosschleife. Die Datei hieß ursprünglich
`cinewerk_filmproduktion_koeln_header_klein.mp4` und wurde umbenannt: Der
Dateiname steht im Quelltext jeder Seite, und laut Markenarchitektur wird
Cinewerk ausschließlich im Impressum genannt.

- **Stumm und ohne Tonspur.** Beides ist Bedingung: Mobile Browser starten
  ein Video nur selbstständig, wenn es stummgeschaltet ist.
- **`playsinline`** verhindert, dass iOS in den Vollbildmodus springt.
- **Bei `prefers-reduced-motion`** hält ein Skript in `index.astro` das Video
  an und zeigt ein Standbild. CSS allein kann das nicht.
- **Dateigröße im Blick behalten.** Die aktuelle Datei ist 11 MB groß und
  wird beim Seitenaufruf vollständig geladen. Für ein Hintergrundvideo, das
  ohnehin abgedunkelt und beschnitten läuft, genügt in der Regel eine
  deutlich kleinere Fassung (etwa 1280 px breit, 2–3 MB).

Ein Austausch braucht nur denselben Dateinamen (`lewerk-hero.mp4`). Danach den Kontrast des
Ecktexts prüfen: Bei Video wechselt der Hintergrund ständig, deshalb muss
über mehrere Frames gemessen werden, nicht über einen.

## Worauf beim Bühnenbild zu achten ist

Über dem Bild steht weiße Schrift am **linken unteren Rand**. Motive mit
ruhiger, dunkler Fläche links funktionieren am besten. Die Seite legt
zusätzlich einen Graustufen-Filter, eine Petrol-Einfärbung und zwei dunkle
Verläufe darüber (siehe `.hero__media` in `src/pages/index.astro`) — helle
Motive werden dadurch abgedunkelt, aber nicht beliebig weit.

Nach dem Tausch gehören zwei Dinge geprüft:

1. **Kontrast** der weißen Headline gegen das Bild an dieser Stelle
   (Ziel: mindestens 4,5:1).
2. **`width` und `height`** am `<img>` in `src/pages/index.astro` auf die
   echten Pixelmaße setzen — sonst reserviert der Browser den falschen
   Platz und das Layout springt beim Laden.

## Hinweis zu den Kundenlogos

Der Streifen enthält echte Fremdmarken. Deren Verwendung als Referenz setzt
voraus, dass die Zusammenarbeit belegbar ist und die jeweiligen Marken einer
Nennung nicht widersprochen haben.
