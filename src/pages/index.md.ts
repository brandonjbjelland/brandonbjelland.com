import type { APIRoute } from 'astro';
import { homeMarkdown, md } from '../lib/markdown';
export const GET: APIRoute = async () => md(await homeMarkdown());
