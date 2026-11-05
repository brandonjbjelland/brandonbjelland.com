import type { APIRoute } from 'astro';
import { aboutMarkdown, md } from '../../lib/markdown';
export const GET: APIRoute = () => md(aboutMarkdown());
