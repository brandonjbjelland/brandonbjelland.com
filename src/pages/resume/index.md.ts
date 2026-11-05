import type { APIRoute } from 'astro';
import { md, resumeMarkdown } from '../../lib/markdown';
export const GET: APIRoute = () => md(resumeMarkdown());
