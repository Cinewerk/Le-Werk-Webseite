# Bilder

Alle Bilder in diesem Ordner werden unter `/images/<dateiname>` ausgeliefert,
z. B. `public/images/hero.jpg` → `<img src="/images/hero.jpg">`.

## Eigenes Bild einsetzen

Datei mit **exakt dem Namen** hier ablegen, den das Bild ersetzen soll — im
Code muss dann nichts geändert werden. Das alte Bild wird dabei überschrieben;
die Platzhalter liegen in der Git-Historie und sind nicht verloren.

| Datei | Wo es erscheint | Format | Status |
|---|---|---|---|
| `hero.jpg` | Bühne der Startseite, formatfüllend | quer, ab 2000 px breit | Platzhalter |
| `work-01.jpg` | Arbeiten, großes Tile links | 16:9 | Platzhalter |
| `work-02.jpg` | Arbeiten, Tile rechts oben | 16:9 | Platzhalter |
| `work-03.jpg` | Arbeiten, vertikales Tile | 9:16 | Platzhalter |
| `work-04.jpg` | Arbeiten, Tile rechts unten | 3:2 | Platzhalter |
| `service-foto.jpg` | Karte „Foto" | 4:3 | Platzhalter |
| `service-video.jpg` | Karte „Video" | 4:3 | Platzhalter |
| `service-konzept.jpg` | Karte „Konzept" | 4:3 | Platzhalter |
| `service-workshops.jpg` | Karte „Workshops" | 4:3 | Platzhalter |
| `about.jpg` | Über uns | 4:3, auf Desktop 3:4 beschnitten | Platzhalter |
| `quote-01.jpg` – `quote-03.jpg` | Porträts bei den Stimmen | quadratisch | Platzhalter |

Die Platzhalter stammen von Unsplash und sind nur zur Ansicht gedacht.

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

## Nicht hier ablegen

Kundenlogos gehören nach `public/logos/`. Die dort liegenden SVGs sind
erfundene Platzhalter-Marken; echte Fremdlogos erst einsetzen, wenn die
Freigaben vorliegen.
