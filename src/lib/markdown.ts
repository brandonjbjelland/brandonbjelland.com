/**
 * Markdown renderings of site content for agents (llms.txt and per-page .md).
 * Everything is derived from the same sources as the HTML pages, so there is nothing to keep in sync.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE } from '../consts';
import { resume, formatRange } from '../data/resume';
import aboutRaw from '../pages/about.md?raw';
import { lastModified, isoDate } from './lastModified';

export const abs = (path: string) => new URL(path, `https://${new URL(import.meta.env.SITE).host}`).href;

/** Drop frontmatter and HTML comments (e.g. TODO notes) from raw Markdown. */
export function clean(md: string): string {
  return md
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Make site-relative links absolute so the Markdown works out of context. */
function absolutize(md: string): string {
  return md.replace(/\]\((\/[^)\s]*)\)/g, (_, p) => `](${abs(p)})`);
}

/** Markdown twin URL for a page URL ending in '/', per llmstxt.org: append index.md. */
export const mdUrl = (pagePath: string) => `${pagePath}index.md`;

export const md = (response: string) =>
  new Response(response.trim() + '\n', { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });

export const text = (response: string) =>
  new Response(response.trim() + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });

export async function publishedPosts() {
  return (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export async function sortedProjects() {
  return (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
}

export async function homeMarkdown(): Promise<string> {
  const featured = (await sortedProjects()).filter((p) => p.data.featured);
  return [
    `# ${SITE.author}`,
    `> ${resume.headline}. ${SITE.location}.`,
    `Last updated ${isoDate(lastModified('src/pages/index.astro', 'src/content'))}`,
    ...resume.summary,
    '## Start here',
    [
      `- [About](${abs(mdUrl('/about/'))})`,
      `- [Resume](${abs(mdUrl('/resume/'))})`,
      `- [All pages (llms.txt)](${abs('/llms.txt')})`,
    ].join('\n'),
    '## Featured projects',
    featured.map((p) => `- [${p.data.title}](${abs(mdUrl(`/projects/${p.id}/`))}): ${p.data.summary}`).join('\n'),
  ].join('\n\n');
}

export function aboutMarkdown(): string {
  return absolutize(clean(aboutRaw)).replace(
    /^# cat about\.md/m,
    `# About Brandon Bjelland\n\nLast updated ${isoDate(lastModified('src/pages/about.md'))}`,
  );
}

export function postMarkdown(post: CollectionEntry<'blog'>): string {
  const { title, description, pubDate, tags } = post.data;
  return [
    `# ${title}`,
    `> ${description}`,
    `Published ${pubDate.toISOString().slice(0, 10)} by ${SITE.author}${tags.length ? ` · tags: ${tags.join(', ')}` : ''}`,
    `Source: ${abs(`/blog/${post.id}/`)} · last updated ${isoDate(lastModified(post.filePath))}`,
    absolutize(clean(post.body ?? '')),
  ].join('\n\n');
}

export function projectMarkdown(project: CollectionEntry<'projects'>): string {
  const { title, summary, period, role, kind, tags, links } = project.data;
  const kindLabel = { internal: 'internal (not open source)', 'open-source': 'open source', consulting: 'consulting' }[kind];
  const meta = [period, role, kindLabel, tags.length ? `tags: ${tags.join(', ')}` : ''].filter(Boolean).join(' · ');
  const linkLines = links.map((l) => `- [${l.label}](${l.href})`).join('\n');
  return [
    `# ${title}`,
    `> ${summary}`,
    meta,
    linkLines,
    `Source: ${abs(`/projects/${project.id}/`)} · last updated ${isoDate(lastModified(project.filePath))}`,
    absolutize(clean(project.body ?? '')),
  ]
    .filter(Boolean)
    .join('\n\n');
}

export function resumeMarkdown(): string {
  const r = resume;
  const out: string[] = [];
  out.push(`# ${r.name}`, `> ${r.headline}`, `Last updated ${isoDate(lastModified('src/data/resume.ts'))}`);
  out.push([r.location, r.email, ...r.links.map((l) => l.href)].join(' · '));
  out.push('## Summary', ...r.summary);
  out.push(
    'I’m adaptive to the situation but generally biased toward:',
    r.principles.map((p) => `- **${p.label}**: ${p.text}`).join('\n'),
  );
  out.push('## Technical proficiencies', r.skills.map((s) => `- **${s.group}**: ${s.items.join(', ')}`).join('\n'));
  out.push('## Experience');
  for (const pos of r.experience) {
    out.push(`### ${pos.company}`);
    for (const role of pos.roles) {
      out.push(`**${role.title}** (${formatRange(role)}${role.location ? `, ${role.location}` : ''})`);
      if (role.summary) out.push(role.summary);
      if (role.highlights) out.push('Key projects:\n' + role.highlights.map((h) => `- ${h}`).join('\n'));
      if (role.partners) out.push(`Partners: ${role.partners.join(', ')}`);
    }
  }
  out.push('## Open source', r.openSource.map((o) => `- [${o.name}](${o.href}): ${o.text}`).join('\n'));
  out.push(
    '## Earlier experience',
    r.earlier.map((e) => `- ${e.company}, ${e.title} (${e.start === e.end ? e.start : `${e.start}–${e.end}`})`).join('\n'),
  );
  out.push('## Education', r.education.map((e) => `- ${e.school}, ${e.degree}`).join('\n'));
  out.push(`Structured JSON version: ${abs('/resume.json')}`);
  return out.join('\n\n');
}
