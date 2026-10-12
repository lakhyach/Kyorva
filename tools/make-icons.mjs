// Rasterizes the Kyorva SVG assets into the PNG set (favicon sizes,
// apple-touch, maskable manifest icons, OG preview). Run: node tools/make-icons.mjs
// Requires: npm i --no-save @resvg/resvg-js  (kept out of site deps on purpose)
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'public', 'icons');
mkdirSync(OUT, { recursive: true });

const master = readFileSync(path.join(ROOT, 'public', 'favicon.svg'), 'utf8');

// Wrap the master mark onto an opaque dark tile for apple-touch / maskable.
const onTile = (pad) => {
  const inner = master
    .replace(/^<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '');
  const s = 512;
  const scale = (s - pad * 2) / 64;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s}" width="${s}" height="${s}">
  <rect width="${s}" height="${s}" fill="#0B0B0B"/>
  <g transform="translate(${pad},${pad}) scale(${scale})">${inner}</g>
</svg>`;
};

const render = (svg, file, width) => {
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng();
  writeFileSync(path.join(OUT, file), png);
  console.log('wrote public/icons/' + file, `(${(png.length / 1024).toFixed(1)} KB)`);
};

// Simplified two-layer variant: at 16px the third faint stratum smears.
const small = master
  .replace(/\s*<path d="M6 44[^"]*"[^/]*\/?>/s, '')
  .replace('M6 28 32 41 58 28v7L32 48 6 35Z', 'M6 30 32 43 58 30v9L32 52 6 39Z');

render(master, 'favicon-32.png', 32);
render(small, 'favicon-16.png', 16);
render(onTile(0), 'apple-touch-icon.png', 180);      // full-bleed tile
render(onTile(96), 'icon-192.png', 192);             // maskable safe zone
render(onTile(96), 'icon-512.png', 512);
render(readFileSync(path.join(ROOT, 'public', 'og.svg'), 'utf8'), 'og.png', 1200);
