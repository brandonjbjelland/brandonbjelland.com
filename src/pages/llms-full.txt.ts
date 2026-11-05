import type { APIRoute } from 'astro';
import {
  aboutMarkdown, postMarkdown, projectMarkdown, publishedPosts, resumeMarkdown, sortedProjects, text,
} from '../lib/markdown';

export const GET: APIRoute = async () => {
  const sections = [
    aboutMarkdown(),
    resumeMarkdown(),
    ...(await sortedProjects()).map(projectMarkdown),
    ...(await publishedPosts()).map(postMarkdown),
  ];
  return text(sections.join('\n\n---\n\n'));
};
