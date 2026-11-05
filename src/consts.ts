export const SITE = {
  title: 'Brandon Bjelland',
  description:
    'Platform and agentic engineering leader. Notes on software factories, agentic development, and platform engineering.',
  author: 'Brandon Bjelland',
  email: 'brandonjbjelland@gmail.com',
  location: 'St Paul, Minnesota',
  links: {
    github: 'https://github.com/brandonjbjelland',
    linkedin: 'https://www.linkedin.com/in/brandonjbjelland/',
  },
};

export const NAV = [
  { href: '/about/', label: 'About' },
  { href: '/resume/', label: 'Resume' },
  { href: '/projects/', label: 'Projects' },
  { href: '/blog/', label: 'Blog' },
];

/**
 * Blog comments + reactions via giscus (GitHub Discussions).
 * Fill these in from https://giscus.app after enabling Discussions on the repo.
 * Comments render only when repoId and categoryId are set.
 */
export const GISCUS = {
  repo: 'brandonjbjelland/brandonbjelland.com',
  repoId: 'R_kgDOVjg7Vg',
  category: 'Blog comments',
  categoryId: 'DIC_kwDOVjg7Vs4DKbTU',
};
