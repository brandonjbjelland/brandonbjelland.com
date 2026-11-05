import type { APIRoute } from 'astro';
import { SITE } from '../consts';
import { abs, mdUrl, publishedPosts, sortedProjects, text } from '../lib/markdown';

const KIND = { internal: 'Internal (not open source)', 'open-source': 'Open source', consulting: 'Consulting' } as const;

/**
 * /llms.txt per https://llmstxt.org: H1, blockquote summary, detail paragraphs (no headings),
 * then H2 sections of "- [name](url): notes" file lists. "Optional" holds skippable links.
 * Conformance is checked at build time (see llmsTxtCheck in astro.config.mjs).
 */
export const GET: APIRoute = async () => {
  const projects = await sortedProjects();
  const posts = await publishedPosts();
  const sections: string[] = [];

  sections.push(`# ${SITE.title}`);
  sections.push(`> ${SITE.description}`);
  sections.push(
    `Personal site of ${SITE.author}, based in ${SITE.location}. Contact: ${SITE.email}.`,
    `Every page on this site has a Markdown version at the page URL plus \`index.md\` (for example ` +
      `${abs('/about/index.md')}), and the links below point to those. Project notes start with whether ` +
      `the work is internal to an employer (described, not linked to code) or open source.`,
  );

  sections.push(
    '## Core pages',
    [
      `- [Home](${abs('/index.md')}): Short introduction and featured work`,
      `- [About](${abs(mdUrl('/about/'))}): Background, how I work, life outside work, and contact`,
      `- [Resume](${abs(mdUrl('/resume/'))}): Full public resume; structured JSON at ${abs('/resume.json')}`,
    ].join('\n'),
  );

  sections.push(
    '## Projects',
    projects
      .map((p) => `- [${p.data.title}](${abs(mdUrl(`/projects/${p.id}/`))}): ${KIND[p.data.kind]}. ${p.data.summary}`)
      .join('\n'),
  );

  if (posts.length) {
    sections.push(
      '## Blog',
      posts.map((p) => `- [${p.data.title}](${abs(mdUrl(`/blog/${p.id}/`))}): ${p.data.description}`).join('\n'),
    );
  }

  sections.push(
    '## Optional',
    [
      `- [Full site content](${abs('/llms-full.txt')}): Every page above concatenated into one file`,
      `- [Resume JSON](${abs('/resume.json')}): Machine-readable resume`,
      `- [RSS feed](${abs('/rss.xml')})`,
      `- [GitHub profile](${SITE.links.github})`,
    ].join('\n'),
  );

  return text(sections.join('\n\n'));
};
