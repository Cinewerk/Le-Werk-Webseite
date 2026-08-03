# Bild- und Videomaterial

Diese Notiz lag früher als `public/images/README.md` im Projekt und wurde
damit selbst mit ausgeliefert — interne Dokumentation war unter
`/images/README.md` öffentlich abrufbar. Deshalb liegt sie jetzt in `docs/`.

Alle Bilder in `public/images/` werden unter `/images/<pfad>`
ausgeliefert, z. B. `public/images/team/cem-schuch.jpg` →
`<img src="/images/team/cem-schuch.jpg">`.

## Die Ordner

Jede Datei liegt in einem Ordner — lose Bilder gibt es keine mehr. Der
Ordnername sagt, wozu die Bilder gehören:

| Ordner | Inhalt | Wo es erscheint |
|---|---|---|
| `bts/` | sieben Setfotos, sechs davon im Einsatz | Team, Streublock 01 |
| `krafthaus/` | sechs Aufnahmen, alle im Einsatz | Team, Streublock 02 |
| `team/` | vier Porträts, nach Personen benannt | Team, Porträtreihe |
| `work/` | sechs Vorschaubilder der Projekte | Featured Work |
| `street-one/` | Fallstudie samt Video-Standbildern | `/arbeiten/street-one-…` |
| `siemens/`, `allianz/`, `bvb-ea-sports/` | nur Video-Standbilder | die drei Videoseiten |
| `formel-d/`, `revitive/` | die beiden Fotostrecken | die beiden Galerieseiten |
| `services/` | vier Motive der Disziplinen | Startseite und `/services` |
| `kunden/` | der Logostreifen der Trustbar | Startseite |

**Die Team-Dateien heißen nach den Personen**, nicht nach Nummern:
`philipp-maxhofer.jpg`, `cem-schuch.jpg`, `joscha-ortmeier.jpg`,
`tom-beckers.jpg`. Vorher hießen sie `team-01` bis `team-04` und die
Nummern liefen der Reihenfolge auf der Seite nicht parallel — Platz 1
zeigte `team-02`. Diese Stolperfalle ist damit weg.

## Eigenes Bild einsetzen

Datei mit **exakt demselben Pfad und Namen** ablegen, den das Bild
ersetzen soll — im Code muss dann nichts geändert werden. Das alte Bild
wird dabei überschrieben; es liegt in der Git-Historie und ist nicht
verloren.

**Als JPEG, nicht als PNG.** PNG ist für Fotos das falsche Format: Eine
Aufnahme, die als JPEG 139 KB wog, kam als PNG auf 296 KB — bei einem
Viertel der Pixel. Für Fotos JPEG, Qualität 60 bis 62; PNG nur für
Grafiken mit Flächen und Transparenz, wie den Logostreifen.

Die Bühne der Startseite ist ein Video, siehe Abschnitt unten.

### Was noch Platzhalter ist

| Datei | Wo es erscheint | Status |
|---|---|---|
| `services/foto.jpg` | Karte „Foto" | Platzhalter (Unsplash) |
| `services/konzept.jpg` | Karte „Konzept" | Platzhalter (Unsplash) |
| `services/workshops.jpg` | Karte „Workshops", nur auf `/services` | Platzhalter (Unsplash) |
| `services/video.jpg` | Kasten „Video" und Karte auf `/services` | **echt** (aus `social_media.jpeg`) |

Alles andere ist echtes Material. Gelöscht wurden `hero.jpg`, `about.jpg`
und `quote-01.jpg` bis `quote-03.jpg`: Sie gehörten zu Abschnitten, die es
nicht mehr gibt, wurden von nichts mehr referenziert und lagen als rund
460 KB tote Fracht im Deploy. In der Git-Historie sind sie erhalten.

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

Ebenfalls dort: `social_media.jpeg`, das Original für `services/video.jpg`
(1100 × 1375, 174 KB) — den großen Kasten „Video" im Abschnitt „Was wir
machen", der die volle Höhe der beiden rechten Kästen füllt und deshalb
mehr Pixel braucht als eine normale Kachel.

Unter `quellbilder/featured-work/` liegen die gelieferten Projektbilder.
Zwei davon sind für das Web zu schwer und liegen deshalb gerechnet in
`public/images/work/`:

| Web | Quelle | Maß | Größe |
|---|---|---|---|
| `work/siemens.webp` | `SIEMENS_Social_Media_Kampagne.webp` | 1920 × 1080 | 40 KB, unverändert |
| `work/allianz.webp` | `Allianz_Instagram_Reel.webp` | 540 × 960 | 40 KB, unverändert |
| `work/street-one.webp` | `StreetOne_Instagram_Reel.webp` | 543 × 960 | 28 KB, unverändert |
| `work/bvb-ea-sports.webp` | `Social_Media_reel_EASports.webp` | 540 × 960 | 39 KB, unverändert |
| `work/formel-d.jpg` | `FormelD_Fotogalerie.jpg` | 1400 × 933 | 224 KB (von 471 KB) |
| `work/revitive.jpg` | `Revitive_Fotogalerie.jpg` | 1400 × 933 | 260 KB (von 561 KB) |

**Siemens braucht eine eigene Fassung.** Die Kachel läuft im ausgelieferten
Format der Arbeit, also 4:5 — die Datei ist aber 1920 × 1080. Der Beschnitt
behält davon nur die mittleren 45 % der Breite. Es geht auf, weil die Frau
fast genau mittig steht, bleibt aber ein Beschnitt aus einem Beschnitt.
Sobald eine echte 4:5-Fassung aus dem Schnitt vorliegt, gehört sie hierher.

**BVB hat zwei verschiedene Standbilder**, beide aus derselben Einstellung:
`work/bvb-ea-sports.webp` zeigt eng nur das Gesicht und ist die Kachel auf
der Startseite, `bvb-ea-sports/poster/880446770.jpg` zeigt weiter — Kopf,
Schulter, tätowierter Arm — und ist das Standbild der Videoseite. Keines
ist ein Vimeo-Thumbnail; die Seite lädt nichts von einem fremden Server,
bevor jemand auf Play drückt.

**Der Dateiname des Posters ist Pflicht**, nicht Geschmack: `Videowand.astro`
sucht das Standbild unter `<posterordner>/<vimeo-id>.jpg`. Ein Poster, das
anders heißt, wird stillschweigend nicht geladen — die Kachel bleibt leer.
Beim Austauschen also den Namen behalten.

**Die gelieferte Fassung des Posters war ein Bildschirmfoto** mit einem
Mauszeiger unten rechts (599 × 1074, Zeiger bei etwa x 504, y 1049). Die
hier liegende Datei ist auf 579 × 1030 beschnitten: unten so weit weg, dass
der Zeiger fehlt, seitlich so weit, dass 9:16 stimmt. Wer das Poster
ersetzt, sollte auf beides achten.

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

### Die Seitenverhältnisse der Streublöcke

Seit dem Austausch im August steht **jedes Stück in beiden Haufen in seinem
eigenen Seitenverhältnis** — 3:2, 3:4, 4:5, 5:4, 2:3, 24:17, 1:1 — statt in
einem für alle vorgegebenen. Nachgemessen wird dadurch an keinem der zwölf
Bilder etwas abgeschnitten; die einzige Rundung ist `haus-04` mit 987 × 1000
als 1:1 und kostet 1,3 Prozent.

Wer ein Bild tauscht, muss deshalb das `ar` in `src/pages/index.astro`
mittauschen. Bleibt der alte Wert stehen, wird die neue Aufnahme beschnitten,
ohne dass es eine Fehlermeldung gibt.

Die Überlappungen sitzen an den Unterkanten, nie über Gesichtern, Kameras
oder Monitoren. Kein Stück ist zu mehr als 18 Prozent verdeckt; das unterste
im Stapel trägt am meisten, das oberste nichts.

**Nicht im Einsatz:** `bts-06.jpg`. Beide Personen stehen mit dem Rücken zur
Kamera, die Datei ist mit 570 × 760 als einzige unter 1000px breit, und
inhaltlich zeigt sie dasselbe wie `bts-07` und `bts-09` — nur ohne Gesichter.

### Die Team-Porträts

Zwei Maße halten die Reihe zusammen, beide nachgemessen an der
Anzeigegröße von 304px:

- **Augenlinie 44 Prozent** der Kachelhöhe, bei allen vier.
- **Kopfhöhe 177px**, vom Scheitel bis zum Kinn. Gemessen liegen die vier
  zwischen 173 und 179, also innerhalb von zwei Prozent.

Das zweite Maß ist das jüngere und das wichtigere. Eine gemeinsame
Augenlinie allein reicht nicht: Danach lagen die Augen zwar auf einer Linie,
die Köpfe waren aber 92 bis 174px hoch — Joschas fast doppelt so groß wie
Cems. Die Reihe las sich als vier verschiedene Aufnahmen und nicht als ein
Satz.

| Datei | Kachel | Anzeige | Kopfhöhe | über dem Scheitel |
|---|---|---|---|---|
| `philipp-maxhofer.jpg` | 524 × 524 | 1,7-fach | 173 px | 32 px |
| `cem-schuch.jpg` | 700 × 700 | 2,3-fach | 179 px | 33 px |
| `joscha-ortmeier.jpg` | 700 × 700 | 2,3-fach | 177 px | 33 px |
| `tom-beckers.jpg` | 700 × 700 | 2,3-fach | 178 px | 30 px |

**Warum genau diese Werte.** Die 44 Prozent sind der Kompromiss aus zwei
Grenzen: Nach unten setzt Cem sie — bei ihm liegen zwischen Scheitel und
Augen 59 Prozent der Kopfhöhe, tiefer angesetzt stößt er oben an. Nach oben
setzt Philipp sie, dessen Ausschnitt nicht weiter nach unten wandern kann als
bis an den Rand seiner Webfassung.

Philipp ist auch der Grund für die Kopfhöhe. Sein Bild lässt sich nicht
weiter aufziehen, Joschas nicht weiter zurücknehmen — dessen Quelle ist nur
1086px breit und im vorhandenen Schnitt schon fast ausgereizt. Zwischen
diesen beiden Grenzen liegt genau ein gemeinsamer Wert, und der ist 177.

Philipps Kachel ist deshalb die kleinste: Von ihm gibt es kein Original,
sein Quadrat wird aus der 700er-Webfassung geschnitten und landet bei 524.
Bei 304px Anzeige sind das 1,7-fach — auf einem Bildschirm mit doppelter
Pixeldichte etwas weich. **Ein hochauflösendes Original von Philipp würde
das lösen**; alle anderen sind mit 2,3-fach in Reserve.

**Beim Austauschen den Schnitt mitliefern**: quadratisch, Augen auf 44
Prozent der Höhe, Kopf 58 Prozent der Kachelhöhe. Ohne beides springt die
Reihe wieder.

Die Originale liegen unter `quellbilder/team/` — `Cem_Schuch.jpg` (7008 ×
4672), `Tom_Beckers.jpg` (6229 × 4672) und `Joscha_Team.JPG` (1086 × 1448).
`Joscha6.jpg` liegt dort ebenfalls, zeigt aber eine andere Aufnahme in
anderem Raum und ist als Ersatz nicht brauchbar. Der Ordner ist bewusst
nicht in Git — die vier Dateien wiegen zusammen knapp 39 MB.

### Video-Standbilder

Vier Projektseiten binden Vimeo-Videos ein und haben dafür je einen
Ordner `poster/`, benannt nach der Vimeo-ID:

| Ordner | Videos |
|---|---|
| `street-one/poster/` | 12 |
| `siemens/poster/` | 2 |
| `allianz/poster/` | 1 |
| `bvb-ea-sports/poster/` | 1 |

Die Standbilder stammen einmalig von Vimeo und werden von unserem Server
ausgeliefert — die Seiten binden den Player erst auf Klick ein, vorher
geht keine Anfrage an Vimeo raus. Wer ein Video austauscht, braucht also
auch ein neues Standbild unter der neuen ID: 640 px breit, Qualität 62,
das ergibt rund 40 KB je Datei.

Die Standbilder wählt Vimeo selbst. Bei den Siemens-Porträts ist deshalb
ein Untertitel mit im Bild — auf einer Seite, die genau davon handelt,
passt das; bei anderen Filmen kann es stören. Ein eigenes Standbild
einfach unter derselben ID ablegen, dann gilt das.

## Die Streublöcke im Team-Abschnitt

Unter den Porträts stehen zwei Blöcke, in denen der Text von seiner Seite
hereinkommt und die Bilder beim Scrollen unterschiedlich schnell wandern:

| Block | Text | Bilder |
|---|---|---|
| 01 | links | sechs Setfotos aus `bts/` |
| 02 | rechts | sechs Aufnahmen aus `krafthaus/` |

**Warum sechs und nicht mehr:** Die Anordnung ist an der Referenz
nachgemessen. Dort überlappen sich sechs Bilder kräftig, die Größen
reichen von 30 bis 45 Prozent der Breite, und die Fläche steht hochkant
(1 : 1,1). Eine erste Fassung mit sieben weiter auseinanderliegenden
Bildern las sich als Collage statt als Stapel.

Die Anordnung steckt in `src/pages/index.astro` bei den Feldern `bts` und
`krafthaus`. Jedes Bild trägt fünf Werte:

- **`x`, `y`, `w`** — Position und Breite in Prozent der Haufenfläche.
  Weil alles in Prozent liegt, skaliert der Haufen mit der Spaltenbreite,
  statt bei jeder Fenstergröße neu zu zerfallen.
- **`ar`** — das Seitenverhältnis des Ausschnitts.
- **`v`** — wie weit das Stück beim Scrollen wandert, in Pixeln über den
  ganzen Durchlauf. Das Vorzeichen bestimmt die Richtung; genau daraus
  entsteht der lose Eindruck.
- **`z`** — die Stapelreihenfolge.

**Beim Umsortieren mitrechnen:** `y` plus die aus `w` und `ar` folgende
Höhe muss unter 100 bleiben, sonst hängt ein Stück unten heraus. Die
Fläche selbst ist über `hoehe` je Block einstellbar — Block 02 steht auf
0.72, weil vier Bilder weniger Platz füllen als sieben.

Unterhalb von 64 rem wird aus dem Haufen ein normales zweispaltiges
Raster: Überlappende, absolut gesetzte Bilder werden auf einem Telefon zu
Briefmarken, die sich gegenseitig verdecken.

## Das frühere BTS-Raster

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

**Sechs davon liegen im Streublock**, siehe oben: `bts-01`, `-02`, `-03`,
`-04`, `-06` und `-08`. Die übrigen drei bleiben liegen — sie kosten
nichts und stehen für einen Austausch bereit.

### Die Auswahl im Krafthaus-Block

Aus 26 gelieferten Aufnahmen sechs ausgewählt, alle unter
`quellbilder/krafthaus/neu/`:

| Web | Quelle | Motiv |
|---|---|---|
| `haus-01.jpg` | `Krafthaus.jpg` | Das Haus im Abendlicht, dahinter das Kranhaus |
| `haus-02.jpg` | `krafthaus-hafenhistorie-3-…` | Arbeitsplatz am Rundbogenfenster |
| `haus-03.jpg` | `IMG_8042 (2).jpg` | Das Schild „Le Werk" am Fenster |
| `haus-04.jpg` | `Das-Krafthaus-Koeln-2.jpg` | Fassade unter bewölktem Himmel |
| `haus-05.jpg` | `office.jpeg` | Giebel vor blauem Himmel |
| `haus-06.jpg` | `Krafthaus_Drohne_bereinigt.jpg` | Luftaufnahme |

`haus-02` ist die einzige Innenaufnahme und stammt noch aus der ersten
Lieferung — die neuen 26 zeigen ausschließlich das Gebäude von außen.

**Nicht verwendet: `IMG_8031 (2).jpg`.** Darauf steht das Schild der
Schwestermarke auf dem Pflanzkübel vor dem Eingang, gut lesbar. Laut
Markenarchitektur wird sie ausschließlich im Impressum genannt. Beim
Nachlegen weiterer Aufnahmen lohnt der Blick auf Schilder und Kübel.

`haus-03` liegt bewusst ganz oben im Stapel, obwohl es mittig sitzt: Der
Schriftzug steht im unteren Drittel der Aufnahme, und genau dort deckte
ihn das Luftbild zu.

## Kundenlogos ersetzen

Die Logos liegen einzeln in `public/images/kunden/` — zehn PNG, zusammen
124 KB. PNG ist hier richtig und sonst fast nirgends im Projekt: Flächen,
harte Kanten, Transparenz.

Die Reihenfolge steht im `kunden`-Array in `src/pages/index.astro`. Bis
Anfang August 2026 war es stattdessen **ein** Streifenbild; wer in der
Git-Historie sucht, findet `kunden/logostreifen.png`.

### Drei Bedingungen an eine neue Datei

1. **Freigestellt.** Das PNG darf keinen durchsichtigen Rand mitbringen,
   sonst steht das Logo kleiner in seinem Kasten als die Nachbarn. Die
   Lieferung war darin sehr uneinheitlich — Siemens kam als 2400er
   Quadrat, in dem die Wortmarke nur 364px hoch war.
2. **Schwarz.** Die Trustbar liegt auf Weiß und nimmt sich über die
   Deckkraft zurück; ein farbiges Logo springt heraus. Formel D kam
   türkis und wurde umgefärbt — Farbe auf Null, Alphakanal erhalten.
   Nachgemessen liegt die Deckfarbe jetzt bei allen zehn zwischen 0 und
   32 von 255. Ein CSS-Filter wäre der schlechtere Weg: Aus Türkis würde
   damit ein mittleres Grau und kein Schwarz.
3. **Rund dreimal so groß wie die Anzeige.** Breite Wortmarken laufen mit
   111px, also 330px Datei; hohe Bildmarken mit 54px Höhe.

### Wie die Größe zustande kommt

Jedes Logo steht in einem Kasten von 142 × 44px mit je 19px Polsterung,
also 104px für das Logo selbst. Darin wächst es so weit, wie sein
Seitenverhältnis zulässt: Breite Marken stoßen an die Breite, hohe an die
Höhe.

| Logo | Verhältnis | Anzeige | gebunden durch | früher |
|---|---|---|---|---|
| Siemens | 6,4 : 1 | 104 × 16 | Breite | 80 × 15 |
| Street One | 6,9 : 1 | 104 × 15 | Breite | 118 × 19 |
| Douglas | 5,4 : 1 | 104 × 19 | Breite | 90 × 16 |
| Allianz | 3,8 : 1 | 104 × 27 | Breite | — |
| Seven.One | 4,5 : 1 | 104 × 23 | Breite | 118 × 27 |
| Olympische Spiele | 2,1 : 1 | 94 × 44 | Höhe | — |
| Paralympisches Komitee | 1,4 : 1 | 60 × 44 | Höhe | — |
| Formel D | 1,3 : 1 | 58 × 44 | Höhe | — |
| Zehnder Group | 1,1 : 1 | 49 × 44 | Höhe | 63 × 54 |
| EA | 1,0 : 1 | 44 × 44 | Höhe | — |

Auf gleiche Höhe gebracht wären die Wortmarken dreimal so schwer wie die
Bildmarken, auf gleiche Fläche gebracht verschwänden sie.

Die Spalte „früher" ist am Streifenbild aus der Git-Historie abgemessen und
der Grund für die Maße. Der Kasten war zuerst 148 × 54 und damit zu groß —
nicht so sehr wegen der Wortmarken, die kamen auf 111 statt 80 bis 118,
sondern weil vier Bildmarken auf voller Höhe standen, wo der frühere
Streifen nur eine hatte.

### Was bei der Schleife zu beachten ist

Die Liste steht zweimal im Markup und der Track wandert um 50 Prozent
seiner Breite. Das geht nur auf, solange der Abstand **im Kasten** steckt
und nicht als `gap` am Track: Ein `gap` läge auch zwischen den beiden
Kopien und verschöbe die Rechnung um genau einen Abstand — die Schleife
spränge sichtbar.

Kommt ein Logo dazu, wird die Runde länger und die Leiste läuft schneller.
Die Geschwindigkeit steht als Dauer in `.marquee__track` und ist auf 40px
in der Sekunde gerechnet: zehn Kästen zu 142px sind 1420px, also 36s.

### Die Logos sind verlinkt

Jedes Logo führt auf die Seite des Unternehmens; die Adressen stehen im
`kunden`-Array. Drei Dinge hängen daran:

- **Kein `nofollow`.** Der Zweck der Links ist, auf belegbare Adressen zu
  zeigen; ein `nofollow` nähme ihnen genau das. Sie tragen `target="_blank"`
  und `rel="noopener"`.
- **`tabindex="-1"` an der zweiten Runde.** Ein Element mit `aria-hidden`
  darf nicht fokussierbar sein, sonst landet die Tabulatortaste in etwas,
  das für Screenreader nicht existiert. Ohne die Angabe stünden zehn stumme
  Links in der Tabreihenfolge.
- **Die Leiste hält beim Überfahren und beim Fokus an.** Ein Ziel von
  104 × 44px ist knapp, und es bewegt sich. Die Regel dafür stand schon
  vorher da, ist mit den Links aber keine Nettigkeit mehr, sondern
  Bedingung.

Beim Prüfen neuer Adressen: `douglas.de` antwortet einem Abruf ohne Browser
mit 400 und `olympics.com` bricht ab — beides ist Bot-Schutz und keine tote
Adresse. Und `douglas.com` wäre falsch, das führt zu einer gleichnamigen
Firma in Kanada.

## Team-Porträts

Vier Plätze, **alle vier echt**. Die Originale liegen in
`quellbilder/team/`:

| Platz | Person | Web | Original |
|---|---|---|---|
| 1 | Philipp Maxhofer | `team/philipp-maxhofer.jpg` | **fehlt** — nur die Webfassung |
| 2 | Cem Schuch | `team/cem-schuch.jpg` | `Cem_Schuch.jpg` |
| 3 | Joscha Ortmeier | `team/joscha-ortmeier.jpg` | `Joscha_Team.JPG` |
| 4 | Tom Beckers | `team/tom-beckers.jpg` | `Tom_Beckers.jpg` |

Maßgeblich für die Reihenfolge auf der Seite ist das `team`-Feld in
`src/pages/index.astro`, nicht die alphabetische Ordnung der Dateien.

Platz 2 und 4 sind in derselben Sitzecke im Studio entstanden. Im engen
Schnitt ist davon nur noch das Fenster im Rücken zu sehen — das ist der
Rest, der die beiden verbindet.

**Graustufen, Farbe erst bei Hover.** Die Aufnahmen stammen aus
verschiedenen Situationen — Studio, Sofa, Loft — und haben jede einen
eigenen Farbstich; grau bindet sie zu einer Reihe. Ohne Zeigegerät
(`hover: none`) stehen sie von vornherein farbig, sonst gäbe es die Farbe
auf dem Handy nie zu sehen.

Namen und Rollen stehen vollständig im `team`-Array. Die Rollen sind
Doppelnennungen mit Schrägstrich („Head of Production / Self-Shooting
Director") und laufen bei zwei von vieren über die Kachelbreite hinaus;
den Umbruch regelt `text-wrap: balance` an `.team__role`. Ohne die Angabe
füllt die erste Zeile sich bis zum Rand und lässt ein einzelnes Wort
darunter stehen.

**Alle vier liegen als fertiges Quadrat vor**, in unterschiedlicher
Kantenlänge — die Maße und der Grund dafür stehen oben unter „Die
Team-Porträts". Der Zuschnitt steckt in der Datei und nicht im CSS: Die
Aufnahmen sind quer und zeigen die Personen klein im Raum, ein Beschnitt
per `object-fit` hätte sie nur verschoben statt näher herangeholt. Die
ursprünglichen Querformate (1400 × 933) liegen in der Git-Historie.

Zum Ersetzen: Quadrat unter demselben Namen ablegen — Augen auf 44 Prozent
der Höhe, Kopf auf 58 Prozent, siehe oben — dann Name und Rolle im
`team`-Array in `src/pages/index.astro` eintragen. Die Reihenfolge im Array bestimmt die
Reihenfolge auf der Seite. Wer eine Aufnahme im Hochformat liefert,
schneidet sie besser selbst quadratisch zu — ein Beschnitt per CSS würde
die Person nur verschieben, nicht näher heranholen.

Die Setfotos im Streublock stehen in Farbe, die Porträts in Graustufen —
siehe oben. Der Filter lag zwischenzeitlich auf beiden und war einmal
komplett entfernt; bei den Porträts ist er zurück, weil vier Aufnahmen aus
vier Situationen sonst vier Farbstiche in eine Reihe bringen.

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
