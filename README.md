# Le Werk — Webseite

Website des Kölner Studios **Le Werk**: Bewegtbild, Fotografie, Konzept und Workshops.
Statisch gebaut mit [Astro](https://astro.build), ausgeliefert über GitHub Pages.

Entwicklung und Pflege: **Simon Liebermann**

**Live:** https://heutelaune.github.io/Le-Werk

---

## Starten

Voraussetzung ist Node ≥ 22.12 — Astro 7 setzt das.

```bash
npm install
npm run dev
```

| Befehl | Wirkung |
| :-- | :-- |
| `npm run dev` | Entwicklungsserver auf `localhost:4321` |
| `npm run build` | Baut nach `dist/` und räumt anschließend `.DS_Store` weg |
| `npm run preview` | Den fertigen Build lokal ansehen |

Das Aufräumen im Build ist kein Beiwerk: Astro kopiert `public/` unverändert,
macOS legt dort immer wieder `.DS_Store` an, und die Dateien landeten so im Deploy.

## Aufbau

```text
src/
├── pages/          eine Datei = eine Route
│   ├── index.astro         Startseite
│   ├── arbeiten/           fünf Projektseiten
│   ├── services/           vier Leistungsseiten
│   ├── kontakt.astro
│   ├── impressum.astro
│   └── datenschutz.astro
├── components/     Streublock, Videowand, Bildkasten, ProjektAbschluss
├── layouts/        BaseLayout mit Kopf, Fuß und Metadaten
├── data/           Projekt- und Leistungsdaten, getrennt vom Markup
├── lib/paths.ts    withBase() für alle internen Pfade
└── styles/         global.css, fonts.css und die Schriftdateien
public/images/      nach Projekt sortiert: team, krafthaus, street-one, …
docs/bildmaterial.md  welches Bild wo liegt, welche Formate gelten
```

Die drei eigenen Bausteine, kurz erklärt:

- **`Streublock.astro`** — der scrollgesteuerte Bildhaufen im Team-Abschnitt.
  Ein `IntersectionObserver` schreibt eine Größe `--q` von 0 bis 1, das CSS macht
  daraus die Bewegung. Die Streurichtung jedes Bildes wird aus seiner Position
  im Haufen berechnet, nicht von Hand gesetzt.
- **`Videowand.astro`** — Vimeo-Einbindung in zwei Schritten. Erst liegt nur ein
  lokales Standbild, der Player wird erst auf Klick geladen. Das Video öffnet
  groß in der Bildschirmmitte.
- **`Bildkasten.astro`** — dieselbe Geste für Fotos in den Bildstrecken.

## Schriften und Farbe

Poppins trägt die Identität, Bodoni Moda das Redaktionelle. Beide liegen als
`.woff2` im Repo, nichts wird von einem fremden Server nachgeladen. Das Petrol
der Marke ist `#006377`.

## Pfade

Die Seite läuft unter `/Le-Werk`, nicht an der Wurzel. Deshalb geht **jeder**
interne Pfad über `withBase()` aus `src/lib/paths.ts`. Ein hart geschriebenes
`/images/…` funktioniert im Entwicklungsserver und bricht im Deploy.

Sobald die eigene Domain steht: in `astro.config.mjs` `site` auf die Domain
setzen und `base` entfernen — die Pfade ziehen dann von selbst nach.

## Bilder

Originale liegen lokal in `quellbilder/` und sind bewusst nicht im Repo
(rund 1 GB). Ins Web kommen ausschließlich beschnittene, komprimierte JPEGs.
Welches Bild wo hingehört, steht in [`docs/bildmaterial.md`](docs/bildmaterial.md).

## Veröffentlichen

Jeder Push auf `main` startet
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): bauen, Artefakt
hochladen, GitHub Pages ausliefern. Ein manueller Start geht über den
Actions-Tab.

## Offen

- Die Rollen der vier Teammitglieder stehen noch auf „Rolle folgt“.
- Die Texte auf vier Projektseiten sind Entwürfe (Siemens, Allianz, Formel D,
  Revitive); nur Street One hat Kundentext. Im Code als Entwurf markiert.
- Drei Platzhalterbilder von Unsplash in `public/images/services/`.
- Die Datenschutzerklärung beschreibt noch die alte WordPress-Seite,
  dem Impressum fehlen Handelsregister und USt-IdNr.
- Das Hero-Video ist mit rund 11 MB zu schwer und sollte neu kodiert werden.
