import type { APIRoute, GetStaticPaths } from 'astro';
import type { CollectionEntry } from 'astro:content';
import { md, postMarkdown, publishedPosts } from '../../lib/markdown';

export const getStaticPaths = (async () =>
  (await publishedPosts()).map((post) => ({ params: { slug: post.id }, props: { post } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => md(postMarkdown(props.post as CollectionEntry<'blog'>));
