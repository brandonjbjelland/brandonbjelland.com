import type { APIRoute, GetStaticPaths } from 'astro';
import type { CollectionEntry } from 'astro:content';
import { md, projectMarkdown, sortedProjects } from '../../../lib/markdown';

export const getStaticPaths = (async () =>
  (await sortedProjects()).map((project) => ({ params: { slug: project.id }, props: { project } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => md(projectMarkdown(props.project as CollectionEntry<'projects'>));
