import type { APIRoute } from 'astro';
import { SITE } from '../consts';
import { abs, publishedPosts, sortedProjects, text } from '../lib/markdown';

// https://llmstxt.org — an index of this site's content as Markdown, for agents.
export const GET: APIRoute = async () => {
  const projects = await sortedProjects();
  const posts = await publishedPosts();
  return text(`
# ${SITE.title}

> ${SITE.description}

Personal site of ${SITE.author}, based in ${SITE.location}. Every page below is available as plain
Markdown. Contact: ${SITE.email}.

## Core pages

- [About](${abs('/about.md')}): Background, how I work, and how to get in touch
- [Resume](${abs('/resume.md')}): Full public resume (also as JSON: ${abs('/resume.json')})

## Projects

${projects.map((p) => `- [${p.data.title}](${abs(`/projects/${p.id}.md`)}) (${p.data.kind}): ${p.data.summary}`).join('\n')}

## Blog

${posts.length ? posts.map((p) => `- [${p.data.title}](${abs(`/blog/${p.id}.md`)}): ${p.data.description}`).join('\n') : '- No posts yet'}

## Optional

- [Everything in one file](${abs('/llms-full.txt')}): All of the above concatenated
- [RSS feed](${abs('/rss.xml')})
- [GitHub](${SITE.links.github})
- [LinkedIn](${SITE.links.linkedin})
`);
};
