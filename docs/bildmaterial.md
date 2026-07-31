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
| `bts/bts-01.jpg` – `bts-09.jpg` | Team, Raster hinter den Kulissen | 3:2 quer / 2:3 hoch | **echt** |
| `team-02.jpg` | Team, Porträt 1 | quer, hochkant beschnitten | **echt** |
| `team-01.jpg` | Team, Porträt 2 | quer, hochkant beschnitten | **echt** |
| `team-03.jpg`, `team-04.jpg` | Team, Porträt 3 und 4 | 2:3 hoch | Platzhalter |
| `hero.jpg` | — | quer | **ungenutzt** |
| `about.jpg` | — | quer | **ungenutzt** (Über-uns-Sektion entfallen) |
| `quote-01.jpg` – `quote-03.jpg` | — | quadratisch | **ungenutzt** (Stimmen-Sektion entfallen) |
| `work/siemens.webp` | Featured Work, breite Kachel links oben | 16:9 | **echt** |
| `work/allianz.webp` | Featured Work, Hochformat rechts oben | 9:16 | **echt** |
| `work/street-one.webp` | Featured Work, Hochformat Reihe zwei | 9:16 | **echt** |
| `work/formel-d.jpg` | Featured Work, Querformat Reihe zwei | 3:2 | **echt** |
| `work/revitive.jpg` | Featured Work, Querformat Schluss | 3:2 | **echt** |
| `service-foto.jpg` | Karte „Foto" | 4:3 | Platzhalter |
| `service-video.jpg` | Kasten „Video" (Startseite) und Karte auf `/services` | 4:5 | **echt** (aus `social_media.jpeg`) |
| `service-konzept.jpg` | Karte „Konzept" | 4:3 | Platzhalter |
| `service-workshops.jpg` | Karte „Workshops", nur auf `/services` | 4:3 | Platzhalter |
| `logokarusell.png` | Kundenlogos in der Trustbar | ein durchgehender Streifen, 5000 × 400 | **echt** |

Die verbliebenen Platzhalter stammen von Unsplash und sind nur zur Ansicht
gedacht.

## Originale und Webfassungen

Unter `quellbilder/` liegen die gelieferten Originaldateien. Der Ordner ist
in `.gitignore` eingetragen und damit **nicht Teil des Repos** — die
BTS-Originale wiegen zusammen 136 MB, im Web-Verzeichnis wären sie bei
jedem Deploy mit ausgeliefert worden. Er liegt außerdem außerhalb von
`public/`, weil Astro alles unterhalb von `public/` unverändert in den
Build kopiert.

Für die Seite gerechnete Fassungen liegen in `public/images/`. Maßstab:
Querformate 1100 px breit, Hochformate 760 px hoch, JPEG-Qualität 72 —
das reicht für die tatsächlichen Anzeigegrößen samt Retina und hält die
neun BTS-Bilder zusammen bei rund 1 MB.

Ebenfalls dort: `social_media.jpeg`, das Original für `service-video.jpg`
(1100 × 1375, 174 KB) — den großen Kasten „Video" im Abschnitt „Was wir
machen", der die volle Höhe der beiden rechten Kästen füllt und deshalb
mehr Pixel braucht als eine normale Kachel.

Unter `quellbilder/featured-work/` liegen die fünf gelieferten
Projektbilder. Zwei davon sind für das Web zu schwer und liegen deshalb
gerechnet in `public/images/work/`:

| Web | Quelle | Maß | Größe |
|---|---|---|---|
| `work/siemens.webp` | `SIEMENS_Social_Media_Kampagne.webp` | 1920 × 1080 | 40 KB, unverändert |
| `work/allianz.webp` | `Allianz_Instagram_Reel.webp` | 540 × 960 | 40 KB, unverändert |
| `work/street-one.webp` | `StreetOne_Instagram_Reel.webp` | 543 × 960 | 28 KB, unverändert |
| `work/formel-d.jpg` | `FormelD_Fotogalerie.jpg` | 1400 × 933 | 224 KB (von 471 KB) |
| `work/revitive.jpg` | `Revitive_Fotogalerie.jpg` | 1400 × 933 | 260 KB (von 561 KB) |

**Die beiden Reel-Standbilder sind knapp bemessen.** Sie sind nur 540 px
breit, die Kachel steht auf großen Schirmen 408 px breit — das reicht für
normale Displays, auf Retina fehlt Auflösung. Falls es die Standbilder in
größer gibt, sind sie hier eine Verbesserung.

## Die Street-One-Projektseite

Originale in `quellbilder/street-one/`, Webfassungen in
`public/images/street-one/`. Die Zuordnung steckt teils im Dateinamen,
teils in `src/data/street-one.ts`:

| Web | Quelle | Wo |
|---|---|---|
| `buehne.jpg` | `DSC6574` | Kopf der Seite, neben dem Titel |
| `brand-01.jpg` | `DSC6706` | Abschnitt Brand |
| `brand-02.jpg` | `DSC8159` | Abschnitt Challenge |
| `action-01.jpg` | `STREETONE_May_BTS19` | Etappe 01 Work |
| `action-02.jpg` | `STREETONE_May_BTS9` | Etappe 02 Kreation |
| `action-03.jpg` | `STREETONE_May_BTS31` | Etappe 03 Produce, quer |
| `ergebnis.jpg` | `StreetOne_SocialMedia_CampaignContent_Spring_1` | Abschnitt Result |
| `galerie-01` … `galerie-09` | siehe unten | Fotostrecke |

Die Strecke läuft in dieser Reihenfolge und mischt Location und Studio:
`DSC6519`, `DSC6021`, `DSC6337`, `DSC6527`, `DSC6277`, `DSC6643`,
`DSC6150`, `DSC8733`, `DSC6351`.

**Neun Bilder, nicht zehn.** Bei drei Spalten füllen neun genau drei
Reihen; ein zehntes stünde allein in einer vierten. `DSC6300` ist deshalb
nicht in der Strecke.

## Die Formel-D- und die Revitive-Seite

Originale in `quellbilder/formel-d/` (82 Aufnahmen im Ordner `set`,
36 Porträts in `portraits`) und `quellbilder/revitive/` (47 Aufnahmen).
Zusammen rund 1 GB — sie lagen zuerst unter `public/images/` und wären in
voller Größe mit ausgeliefert worden.

In `public/images/formel-d/` und `public/images/revitive/` liegen die
Webfassungen. Die Dateinamen benennen das Kapitel, in dem sie stehen:

| Formel D | | Revitive | |
|---|---|---|---|
| `flaeche-01` … `-07` | Luftbilder, Lager, Transporter | `draussen-01` … `-08` | Park, Spaziergang, Hund |
| `halle-01` … `-06` | Werkhallen, Lichttunnel | `anlass-01` … `-03` | Detailaufnahmen, hochkant |
| `arbeit-01` … `-06` | Menschen bei der Arbeit | `drinnen-01` … `-06` | Anwendung im Wohnzimmer |
| `detail-01` … `-04` | Werkzeug, Anzeige, Lack | `produkt-01` … `-06` | Gerät, App, Porträts |
| `portraet-01` … `-03` | Porträts in der Halle | | |

**Die Reihenfolge trägt das Raster.** Bei Formel D läuft ein Rhythmus über
sechs Plätze (breit · schmal · eingerückt · breit · halb · halb), der sich
wiederholt. Platz 2 ist der schmale — dort steht deshalb `arbeit-06`, das
einzige Hochformat im Set. Wer umsortiert, muss das mitdenken.

Die Bilder sind **nicht beschnitten**: Jede Aufnahme behält ihr Format,
der Zuschnitt ist Teil der fotografischen Arbeit. Maßstab: 1280 px für
große Plätze, 1000 px für kleine, Qualität 55 bis 58. Die Nacht-Luftbilder
sind mit rund 250 KB die schwersten Dateien im Projekt — tausende kleine
Fahrzeuge lassen sich kaum komprimieren.

### Video-Standbilder

Drei Projektseiten binden Vimeo-Videos ein und haben dafür je einen
Ordner `poster/`, benannt nach der Vimeo-ID:

| Ordner | Videos |
|---|---|
| `street-one/poster/` | 12 |
| `siemens/poster/` | 2 |
| `allianz/poster/` | 1 |

Die Standbilder stammen einmalig von Vimeo und werden von unserem Server
ausgeliefert — die Seiten binden den Player erst auf Klick ein, vorher
geht keine Anfrage an Vimeo raus. Wer ein Video austauscht, braucht also
auch ein neues Standbild unter der neuen ID: 640 px breit, Qualität 62,
das ergibt rund 40 KB je Datei.

Die Standbilder wählt Vimeo selbst. Bei den Siemens-Porträts ist deshalb
ein Untertitel mit im Bild — auf einer Seite, die genau davon handelt,
passt das; bei anderen Filmen kann es stören. Ein eigenes Standbild
einfach unter derselben ID ablegen, dann gilt das.

## Das BTS-Raster

Neun von zwanzig gelieferten Aufnahmen. Die Auswahl folgt dem Ablauf einer
Produktion, nicht der Reihenfolge im Ordner:

| Feld | Datei | Motiv |
|---|---|---|
| 1 quer | `bts-01.jpg` | Fünf aus dem Team mit Kameras |
| 2 quer | `bts-02.jpg` | Interviewset mit Angel und Monitoren |
| 3 quer | `bts-03.jpg` | Kameramann mit Easyrig im Wohnraum |
| 4 hoch | `bts-04.jpg` | Aufgebautes Set mit Softboxen |
| 5 hoch | `bts-05.jpg` | Person mit Brezel vor der Kamera |
| 6 hoch | `bts-06.jpg` | Zwei richten im Studio die Kamera ein |
| 7 quer | `bts-07.jpg` | Dreh in einer Küche, Kamera auf dem Slider |
| 8 quer | `bts-08.jpg` | Kamera mit Monitoren, Hände am Stativkopf |
| 9 quer | `bts-09.jpg` | Zwei am Schnittplatz unter Flächenlicht |

Aussortiert wurden Motive ohne Produktionsbezug (Straßen-, Reise- und
Architekturaufnahmen) sowie Situationen, die eine andere Aufnahme bereits
besser zeigte.

**Die Reihenfolge trägt das Layout:** Ab 64 rem stehen drei Spalten, die
Bilder 4 bis 6 bilden die hohe Mittelreihe. Wer die Reihenfolge im
`bts`-Array in `src/pages/index.astro` ändert, verschiebt damit auch, welche
Bilder hochkant beschnitten werden. Darunter sind es zwei Spalten mit
quadratischem Beschnitt, das neunte Bild läuft über beide.

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

Vier Plätze, davon zwei echt:

- **Platz 1 und 2** (`team-02.jpg`, `team-01.jpg`) sind echte Aufnahmen. Sie
  liegen im Querformat und werden hochkant beschnitten — beide Personen
  sitzen im mittigen 2:3-Ausschnitt sauber, das wurde nachgesehen.
- **Platz 3 und 4** (`team-03.jpg`, `team-04.jpg`) sind noch Unsplash und
  zeigen nicht das Team.

Unter allen vier steht „Name folgt / Rolle folgt" — die Namen fehlen also
noch komplett.

Zum Ersetzen: Porträts im Verhältnis 2:3 (etwa 800 × 1200) unter denselben
Namen ablegen, dann Namen und Rollen im `team`-Array in
`src/pages/index.astro` eintragen. Die Reihenfolge im Array bestimmt die
Reihenfolge auf der Seite.

Porträts und BTS-Raster stehen in Farbe. Ein Graustufenfilter lag zwischen‑
zeitlich auf beiden und hielt die Reihe zusammen, solange echte neben
fremden Aufnahmen standen — er kostet aber Wärme, und die zählt bei
Gesichtern und Setfotos mehr als eine glatte Reihe.

Für Platz 3 und 4 heißt das: Die beiden Unsplash-Bilder fallen jetzt
deutlicher auf. Das ist gewollt, es macht die Lücke sichtbar.

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

## Worauf beim Bühnenmotiv zu achten ist

Über dem Video steht weiße Schrift am **linken unteren Rand**. Motive mit
ruhiger, dunkler Fläche links funktionieren am besten. Die Seite legt zwei
neutral schwarze Verläufe darüber und dunkelt leicht ab (siehe
`.hero__media` in `src/pages/index.astro`) — helle Motive werden dadurch
abgedunkelt, aber nicht beliebig weit.

Graustufen-Filter und Petrol-Einfärbung, die hier früher standen, gibt es
nicht mehr: Ein farbiger Verlauf legt sich als Stich über das ganze Material
und verfälscht die Aufnahme.

Nach einem Tausch gehört der **Kontrast** der weißen Schrift gegen das
Motiv an dieser Stelle geprüft, Ziel mindestens 4,5:1. Bei Video wechselt
der Hintergrund ständig, deshalb über mehrere Frames messen.

## Hinweis zu den Kundenlogos

Der Streifen enthält echte Fremdmarken. Deren Verwendung als Referenz setzt
voraus, dass die Zusammenarbeit belegbar ist und die jeweiligen Marken einer
Nennung nicht widersprochen haben.
