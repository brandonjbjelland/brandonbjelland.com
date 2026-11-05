// Validates dist/llms.txt against the llmstxt.org format and checks that every same-site link exists.
// Runs as an Astro integration after each build, so a nonconforming llms.txt fails the deploy.
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const LIST_ITEM = /^- \[[^\]]+\]\(([^)\s]+)\)(?:: .+)?$/;

export function checkLlmsTxt(text, { siteHost, distDir }) {
  const errors = [];
  const lines = text.replace(/^﻿/, '').split('\n');
  let i = 0;
  const skipBlank = () => { while (i < lines.length && lines[i].trim() === '') i++; };

  // 1. Required H1.
  if (!/^# \S/.test(lines[i] ?? '')) errors.push('line 1: must be an H1 ("# Name")');
  i++;
  skipBlank();

  // 2. Optional blockquote summary.
  while (i < lines.length && lines[i].startsWith('>')) i++;
  skipBlank();

  // 3. Detail sections: anything except headings, until the first H2.
  for (; i < lines.length && !lines[i].startsWith('## '); i++) {
    if (/^#{1,6} /.test(lines[i])) errors.push(`line ${i + 1}: headings are not allowed before the first H2`);
  }

  // 4. H2 sections containing only file lists.
  const links = [];
  for (; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === '') continue;
    if (line.startsWith('## ')) continue;
    if (/^#{1,6} /.test(line)) { errors.push(`line ${i + 1}: only H2 headings are allowed ("${line}")`); continue; }
    const m = line.match(LIST_ITEM);
    if (!m) { errors.push(`line ${i + 1}: file-list items must be "- [name](url)" or "- [name](url): notes" ("${line}")`); continue; }
    links.push({ url: m[1], line: i + 1 });
  }

  // 5. Same-site links must resolve to a built file.
  for (const { url, line } of links) {
    let u;
    try { u = new URL(url); } catch { errors.push(`line ${line}: invalid URL ${url}`); continue; }
    if (u.host !== siteHost) continue;
    const path = decodeURIComponent(u.pathname);
    const file = join(distDir, path.endsWith('/') ? `${path}index.html` : path);
    if (!existsSync(file)) errors.push(`line ${line}: ${url} does not exist in the build`);
  }
  return { errors, linkCount: links.length };
}

/** Astro integration. */
export default function llmsTxtCheck() {
  let siteHost;
  return {
    name: 'llms-txt-check',
    hooks: {
      'astro:config:done': ({ config }) => { siteHost = new URL(config.site).host; },
      'astro:build:done': ({ dir, logger }) => {
        const distDir = fileURLToPath(dir);
        const { errors, linkCount } = checkLlmsTxt(readFileSync(join(distDir, 'llms.txt'), 'utf8'), { siteHost, distDir });
        if (errors.length) throw new Error(`llms.txt does not conform to llmstxt.org:\n  ${errors.join('\n  ')}`);
        logger.info(`llms.txt conforms to llmstxt.org (${linkCount} links verified)`);
      },
    },
  };
}
