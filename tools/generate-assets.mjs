#!/usr/bin/env node
/**
 * Kyorva asset generator — style-locked image/video generation.
 *
 * Every prompt is prefixed with the brand's visual DNA (extracted from
 * src/assets/hero.png and public/favicon.svg) so generated material matches
 * the original design system instead of drifting into generic AI looks.
 *
 * Backends, tried in order:
 *   1. higgsfield CLI  — FLUX / GPT Image 2 / Nano Banana (images),
 *                        Veo / Seedance (video). Requires plan credits.
 *                        Passes src/assets/hero.png as a style reference.
 *   2. pollinations.ai — free, keyless image API. Video: not supported.
 *
 * Usage:
 *   node tools/generate-assets.mjs image  <name> "<subject prompt>" [--w 1280 --h 800]
 *   node tools/generate-assets.mjs video  <name> "<scene prompt>"   [--duration 8]
 *   node tools/generate-assets.mjs status
 *
 * Output lands in public/generated/<name>.png|mp4 — reference it as
 * "/generated/<name>.png" from the app. Re-run overwrites by name.
 */
import { spawnSync } from 'node:child_process';
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'generated');
const STYLE_REF = path.join(ROOT, 'src', 'assets', 'hero.png');

/* Resolve the higgsfield CLI without shell:true (Node 24 rejects bare .cmd
   spawns and shell mode is an injection surface). On Windows the npm shim
   is a .cmd wrapper around a real JS entry — find and run it via node. */
function resolveHf() {
  if (process.platform === 'win32') {
    const w = spawnSync('where.exe', ['higgsfield.cmd'], { encoding: 'utf8', windowsHide: true });
    const cmdPath = (w.stdout || '').split(/\r?\n/).find(Boolean);
    if (cmdPath && existsSync(cmdPath)) {
      const m = readFileSync(cmdPath, 'utf8').match(/"([^"]+?[\\/]higgsfield\.js)"/);
      if (m) {
        // the shim stores the entry as "%dp0%\node_modules\..." — expand %dp0%
        const jsPath = m[1].replace(/^%dp0%/i, path.dirname(cmdPath));
        if (existsSync(jsPath)) return { cmd: process.execPath, pre: [jsPath] };
      }
    }
  }
  return { cmd: 'higgsfield', pre: [] };
}
const HF = resolveHf();
function runHf(subArgs, opts = {}) {
  return spawnSync(HF.cmd, [...HF.pre, ...subArgs], { encoding: 'utf8', windowsHide: true, ...opts });
}

/* Brand visual DNA — keep in sync with index.css @theme tokens */
const STYLE = {
  palette: ['#863bff', '#47bfff', '#a78bfa', '#111111', '#ffffff'],
  prefix:
    'Premium fintech product art, Kyorva brand style: violet #863bff to azure #47bfff ' +
    'metallic gradients, frosted glass rounded-square panels in exploded isometric ' +
    'layers, clean white background, soft long shadows, minimal Swiss composition, ' +
    'no text, no logos, no people.',
  negative: 'avoid: neon cyberpunk, dark backgrounds, photoreal humans, watermarks, text',
};

const log = (msg) => console.error(msg);

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) args[argv[i].slice(2)] = argv[i + 1], i++;
    else args._.push(argv[i]);
  }
  return args;
}

function httpsGet(url, redirects = 5) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects > 0) {
        res.resume();
        return resolve(httpsGet(new URL(res.headers.location, url).href, redirects - 1));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

/* ---------- Backend 1: Higgsfield CLI ---------- */

function hfgAvailable() {
  const probe = runHf(['account', 'status'], { encoding: 'utf8' });
  const out = (probe.stdout || '') + (probe.stderr || '');
  const credits = Number(out.match(/([\d.]+)\s+credits/)?.[1] ?? NaN);
  return { ok: probe.status === 0 && credits > 0, credits, out: out.trim() };
}

function hfgGenerate(kind, name, prompt, args) {
  const model = kind === 'image' ? 'gpt_image_2' : 'veo3_1_lite';
  const ext = kind === 'image' ? 'png' : 'mp4';
  const out = path.join(OUT_DIR, `${name}.${ext}`);
  const createArgs = ['--json', 'generate', 'create', model, '--prompt', prompt];
  if (kind === 'image' && existsSync(STYLE_REF)) createArgs.push('--image', STYLE_REF);
  if (kind === 'video' && args.duration) createArgs.push('--duration', String(args.duration));
  createArgs.push('--wait', '--wait-timeout', kind === 'video' ? '20m' : '8m');

  log(`[higgsfield] ${model} → ${path.relative(ROOT, out)}`);
  const res = runHf(createArgs, { maxBuffer: 64 * 1024 * 1024 });
  if (res.status !== 0) {
    log(`[higgsfield] failed: ${(res.stderr || res.stdout || '').slice(0, 300)}`);
    return Promise.resolve(null);
  }
  // --wait prints result URL(s); pick the first media-looking https link
  const urls = String(res.stdout || '').match(/https:\/\/[^\s"'\]]+/g) || [];
  const media = urls.find((u) => new RegExp(`\\.(png|jpe?g|webp|mp4|webm)`, 'i').test(u)) || urls[0];
  if (!media) {
    log('[higgsfield] job finished but no result URL found in output');
    return Promise.resolve(null);
  }
  return httpsGet(media).then((buf) => {
    writeFileSync(out, buf);
    log(`[higgsfield] saved ${path.relative(ROOT, out)} (${(buf.length / 1024).toFixed(0)} KB)`);
    return out;
  });
}

/* ---------- Backend 2: Pollinations (free, images only) ---------- */

async function pollinationsGenerate(name, prompt, args) {
  const w = Number(args.w ?? 1280), h = Number(args.h ?? 800);
  const full = `${STYLE.prefix} ${prompt}. ${STYLE.negative}`;
  const url =
    `https://image.pollinations.ai/prompt/${encodeURIComponent(full)}` +
    `?width=${w}&height=${h}&model=flux&nologo=true&enhance=true&seed=${Math.floor(Math.random() * 1e6)}`;
  log('[pollinations] requesting (free tier, may take ~30s)…');
  const buf = await httpsGet(url);
  if (buf.length < 10_000) throw new Error('response too small to be a real image');
  const out = path.join(OUT_DIR, `${name}.png`);
  writeFileSync(out, buf);
  log(`[pollinations] saved ${path.relative(ROOT, out)} (${(buf.length / 1024).toFixed(0)} KB)`);
  return out;
}

/* ---------- CLI ---------- */

async function main() {
  const [kind, name, prompt, ...rest] = process.argv.slice(2);
  const args = parseArgs(rest);

  mkdirSync(OUT_DIR, { recursive: true });

  if (kind === 'status') {
    const hf = hfgAvailable();
    console.log(JSON.stringify({ higgsfield: hf, pollinations: 'available (images only)' }, null, 2));
    return;
  }
  if (!kind || !name || !prompt) {
    console.error('usage: node tools/generate-assets.mjs <image|video|status> <name> "<prompt>" [--w 1280 --h 800] [--duration 8]');
    process.exit(1);
  }

  const style = process.env.KYORVA_STYLE_UNLOCKED === '1' ? prompt : `${STYLE.prefix} ${prompt}. ${STYLE.negative}`;
  let file = null;

  const hf = hfgAvailable();
  if (hf.ok) {
    file = await hfgGenerate(kind, name, style, args);
    if (file) {
      log(`done via higgsfield (${hf.credits} credits available).`);
      console.log(file);
      return;
    }
    log('higgsfield failed; falling back…');
  } else {
    log(`higgsfield unavailable (${hf.out || 'no token'}); falling back…`);
  }

  if (kind === 'video') {
    console.error('video needs Higgsfield credits — top up at https://higgsfield.ai, then re-run. No free video fallback exists.');
    process.exit(2);
  }

  file = await pollinationsGenerate(name, prompt, args);
  log('done via pollinations free tier. For brand-exact style refs + higher fidelity, add Higgsfield credits.');
  console.log(file);
}

main().catch((err) => { console.error(String(err.message || err)); process.exit(1); });
