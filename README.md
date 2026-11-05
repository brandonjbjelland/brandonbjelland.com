# brandonbjelland.com

Personal site: resume, about, projects, and a blog. Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
```

## Writing

| What | Where |
| --- | --- |
| Blog post | `src/content/blog/<slug>.md` (or `.mdx` to embed components) |
| Project | `src/content/projects/<slug>.md` |
| About page | `src/pages/about.md` |
| Resume | `src/data/resume.ts` (single source of truth) |
| Site name, links, nav, comments config | `src/consts.ts` |

Blog frontmatter:

```yaml
---
title: My post
description: One-line summary for lists, RSS, and link previews.
pubDate: 2026-11-04
tags: [platform, ai]
draft: true       # hidden from production builds, visible in dev
comments: true    # giscus comments/reactions
---
```

## Resume

`src/data/resume.ts` renders `/resume/` and is published as `/resume.json`. It is the **public**
version: no client names or other details meant to be shared only privately. The full resume is
sent on request.

A PDF of the public version can be generated locally (written to the gitignored `private/` dir):

```sh
npm run build && npm run resume:pdf
```

## For agents (llms.txt)

Generated at build time from the same content as the HTML, so there is nothing extra to maintain:

- `/llms.txt`: index of every page, following the [llmstxt.org](https://llmstxt.org) spec
- `/llms-full.txt`: all content in one file
- `<page>/index.md`: Markdown twin of each page, per the spec's rule for URLs ending in `/`
  (`/index.md`, `/about/index.md`, `/resume/index.md`, `/projects/<slug>/index.md`, `/blog/<slug>/index.md`)
- Every HTML page links to its twin (`rel="alternate" type="text/markdown"`) and to llms.txt (`rel="describedby"`)

The build fails if `llms.txt` stops conforming to the spec or links to a page that doesn't exist.

New posts and projects appear automatically. HTML comments (e.g. `<!-- TODO -->`) are stripped.
Code lives in `src/lib/markdown.ts`.

## Comments and likes (giscus)

Comments and emoji reactions are stored in this repo's GitHub Discussions.

1. Repo **Settings → General → Features**: enable **Discussions**.
2. Create a discussion category named **Blog comments** (type: Announcement, so only giscus creates threads).
3. Install the [giscus app](https://github.com/apps/giscus) on this repo.
4. On [giscus.app](https://giscus.app), enter the repo and category, then copy `data-repo-id` and `data-category-id` into `GISCUS` in `src/consts.ts`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`.

1. Repo **Settings → Pages → Source**: **GitHub Actions**.
2. Custom domain is set by `public/CNAME` (`brandonbjelland.com`). At your DNS provider:
   - `A` records for the apex → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` `www` → `brandonjbjelland.github.io`
3. After DNS resolves, enable **Enforce HTTPS** in Settings → Pages.

## Extending

Astro ships zero JS by default but supports interactive "islands" (React, Svelte, Vue, etc.)
on any page. The planned job-matcher can live at `src/pages/match/` and read `/resume.json`; the
LLM call itself needs a small serverless function (e.g. Cloudflare Worker) since Pages is static.
