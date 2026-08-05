/**
 * Winziger statischer Server für die Entwürfe — ohne Abhängigkeiten.
 *
 * Aufruf:  node entwuerfe/server.js   →  http://localhost:4400/entwuerfe/
 *
 * Er liefert das ganze Projektverzeichnis aus, damit die relativen Pfade
 * der Entwürfe (../public/images, ../src/styles/fonts) genau so
 * funktionieren wie beim Öffnen per Doppelklick. Nur lesen, nur GET.
 */

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const wurzel = dirname(dirname(fileURLToPath(import.meta.url)));
const PORT = 4400;

const typen = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.woff2': 'font/woff2',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.json': 'application/json',
};

createServer(async (req, res) => {
  try {
    let pfad = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (pfad.endsWith('/')) pfad += 'index.html';
    const datei = normalize(join(wurzel, pfad));
    if (!datei.startsWith(wurzel)) { res.writeHead(403).end(); return; }
    const inhalt = await readFile(datei);
    res.writeHead(200, { 'content-type': typen[extname(datei)] ?? 'application/octet-stream' });
    res.end(inhalt);
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    res.end('nicht gefunden');
  }
}).listen(PORT, () => console.log(`Entwürfe: http://localhost:${PORT}/entwuerfe/`));
