// Copie les fichiers du site dans le dossier "www" utilisé par l'appli iOS (Capacitor).
import { cpSync, rmSync, mkdirSync } from 'node:fs';

const FILES = ['index.html', 'content.js', 'manifest.webmanifest', 'confidentialite.html', 'icons'];

rmSync('www', { recursive: true, force: true });
mkdirSync('www');
for (const f of FILES) cpSync(f, `www/${f}`, { recursive: true });
console.log('Dossier www prêt :', FILES.join(', '));
