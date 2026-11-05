/**
 * "Last updated" dates from git history: the most recent commit touching any of the given paths.
 * Falls back to the build time when git history is unavailable.
 */
import { execFileSync } from 'node:child_process';

const cache = new Map<string, Date>();

export function lastModified(...paths: (string | undefined)[]): Date {
  const files = paths.filter((p): p is string => Boolean(p));
  const key = files.join('|');
  const hit = cache.get(key);
  if (hit) return hit;
  let date = new Date();
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...files], { encoding: 'utf8' }).trim();
    if (out) date = new Date(out);
  } catch {}
  cache.set(key, date);
  return date;
}

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
