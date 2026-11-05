// Renders /resume/ to private/resume.pdf (gitignored, never published) using local Chrome.
// Usage: npm run build && npm run resume:pdf
import { spawn, execFileSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const candidates = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const chrome = candidates.find((p) => existsSync(p));
if (!chrome) {
  console.error('Chrome not found. Set CHROME_PATH.');
  process.exit(1);
}

const port = 4329;
const server = spawn('npx', ['astro', 'preview', '--port', String(port)], { stdio: 'ignore' });
const url = `http://localhost:${port}/resume/`;

for (let i = 0; i < 50; i++) {
  try {
    if ((await fetch(url)).ok) break;
  } catch {}
  await new Promise((r) => setTimeout(r, 200));
}

mkdirSync('private', { recursive: true });
const out = resolve('private/resume.pdf');
try {
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${out}`,
    url,
  ], { stdio: 'inherit' });
  console.log(`Wrote ${out}`);
} finally {
  server.kill();
}
