/**
 * Single source of truth for the resume.
 * PUBLIC resume data (no client names). Renders /resume/ and is exported
 * at /resume.json so future tools (e.g. a job-matching app) can consume it.
 */

export interface Role {
  title: string; // use "A → B" for a promotion within one stint
  start: string; // YYYY-MM or YYYY
  end?: string; // YYYY-MM or YYYY, omit for present
  location?: string;
  summary?: string;
  highlights?: string[]; // rendered as "Key projects"
  partners?: string[];
}

export interface Position {
  company: string;
  url?: string;
  roles: Role[];
}

export interface Resume {
  name: string;
  headline: string;
  location: string;
  email: string;
  links: { label: string; href: string }[];
  summary: string[];
  principles: { label: string; text: string }[];
  skills: { group: string; items: string[] }[];
  experience: Position[];
  openSource: { name: string; href: string; text: string }[];
  earlier: { company: string; title: string; start: string; end: string }[];
  education: { school: string; degree: string }[];
  certifications: string[];
  languages: string[];
}

export const resume: Resume = {
  name: 'Brandon J. Bjelland',
  headline: 'Platform & Agentic Engineering Leader',
  location: 'St Paul, Minnesota',
  email: 'brandonjbjelland@gmail.com',
  links: [
    { label: 'github.com/brandonjbjelland', href: 'https://github.com/brandonjbjelland' },
    { label: 'linkedin.com/in/brandonjbjelland', href: 'https://www.linkedin.com/in/brandonjbjelland/' },
    { label: 'brandonbjelland.com', href: 'https://brandonbjelland.com' },
  ],
  summary: [
    'Over the past 3 years my workflow has shifted toward agentic development, and that shift shapes what I want to build next: software factories, where agents and people share one path from idea to production. I’m most interested in designing and building the interfaces that make this work, both for product developers and ambitious builders in the enterprise.',
    'I bring over a decade of cloud infrastructure and platform engineering, and employ many boring but effective methods of yesteryear. These are the foundations keeping teams and agents safe.',
  ],
  principles: [
    { label: 'Doing over analyzing', text: 'Production-quality deliverables are the goal. I analyze the problem space but dive in quickly to gain better domain understanding.' },
    { label: 'Showing over telling', text: 'If a picture is worth a thousand words, a demo speaks volumes.' },
    { label: 'Communicating in multiple mediums', text: 'Code, talks, docs, diagrams, decision trees, and slide decks. Ideas are only as useful as one’s ability to communicate them effectively.' },
  ],
  skills: [
    { group: 'Agentic development', items: ['Claude Code', 'pi', 'Agent-driven CI/CD for code review and issue resolution'] },
    { group: 'Platform & GitOps', items: ['Kubernetes resource model (incl. Config Connector)', 'ArgoCD', 'Helm', 'CUE', 'Terraform / OpenTofu', 'Spacelift'] },
    { group: 'Cloud infrastructure', items: ['Google Cloud Platform', 'Amazon Web Services'] },
    { group: 'Languages', items: ['Go', 'TypeScript', 'Rust', 'Python', 'Shell'] },
    { group: 'CI/CD', items: ['GitHub Actions', 'GitLab CI', 'Google Cloud Build', 'Cloud Deploy', 'Spinnaker', 'Harness'] },
  ],
  experience: [
    {
      company: 'Palo Alto Networks',
      url: 'https://www.paloaltonetworks.com',
      roles: [
        {
          title: 'Senior Principal Architect, Prisma AIRS',
          start: '2025-07',
          end: '2026-11',
          summary:
            'Joined through the Protect AI acquisition as architect and technical owner of the platform infrastructure under every Prisma AIRS product. When I left, it supported 12+ teams across 10+ regulated regions on AWS and GCP, with all products deployed under a common framework. Set the team’s multi-year technical direction and grew the core team from four to seven engineers.',
          highlights: [
            'Architected CELLARS, a cellular infrastructure model where each geo-bound cell inherits its compliance controls from the platform, cutting a new sovereign region from months of bespoke work to weeks.',
            'Architected HERBS, a GitOps deployment framework (ArgoCD, CUE, Helm, Go) that turns a declaration of intent into workloads placed across every cell: 700+ version rollouts after its December 2025 launch, with zero production outages caused by the deployment system.',
            'Built internal network-provisioning OpenTofu/Terraform providers, letting AIRS (and other PANW) teams self-serve corporate networking, firewall, and load balancer changes as code instead of through manual provisioning.',
            'Led platform architecture for FedRAMP Moderate readiness, and ran the Prisma AIRS GPU capacity program, reserving scarce GPU capacity ahead of regional expansion.',
            'Built group-wide Claude Code CI/CD components for automated merge request review, conflict resolution, MR-comment-driven Claude interactions, CI failure resolution, changelog updates, and plan and blast-radius analysis.',
          ],
        },
      ],
    },
    {
      company: 'Protect AI',
      url: 'https://protectai.com',
      roles: [
        {
          title: 'Staff Solutions Architect (FDE) → Staff Platform Engineer',
          start: '2024-05',
          end: '2025-07',
          summary:
            'Hired as a forward-deployed solutions architect, then moved to platform engineering to lead Protect AI’s SaaS build-out. Took product deployments from proof of value to Replicated installs in customer environments, leading directly to signed customers.',
          highlights: [
            'PASTA (Protect AI Single Tenant Automation) to provision dedicated single-tenant infrastructure in AWS, the precursor to CELLARS and HERBS at Palo Alto Networks.',
            'Built sauce on PASTA’s foundation for tenant-level provisioning on shared clusters with ArgoCD and Spacelift/OpenTofu, supporting 100+ customers across trials and production and letting the forward-deployed team provision tenants on their own.',
          ],
        },
      ],
    },
    {
      company: 'Onix Networking',
      roles: [
        {
          title: 'Principal Enterprise Architect → Director, Field Engineering',
          start: '2023-08',
          end: '2024-03',
          summary:
            'Delivery lead for large GCP customers, then directed field engineering: hiring, staffing engagements, mentoring, and serving as the top technical escalation point. Led foundational infrastructure, networking, and data platform delivery for an EV manufacturer, and led an AI-enabled UX/UI engagement for a major airline.',
        },
      ],
    },
    {
      company: 'Run at Scale',
      roles: [
        {
          title: 'Founder, Principal Consultant',
          start: '2017',
          end: '2023',
          summary:
            'Self-employed. Spent 5 years embedded in Google Professional Services on large GCP deployments carrying billions of dollars in spend commitments, for clients ranging from Fortune 100 enterprises to state government and higher education.',
          partners: ['Google', 'Atmospheric', 'Data Piper', 'Globant', 'Container Heroes', 'New Context'],
        },
      ],
    },
  ],
  openSource: [
    { name: 'terraform-aws-eks', href: 'https://github.com/terraform-aws-modules/terraform-aws-eks', text: 'Original author and maintainer (2018–2019); ~193M registry downloads to date.' },
    { name: 'terraform-aws-alb', href: 'https://github.com/terraform-aws-modules/terraform-aws-alb', text: 'Original author and maintainer (2017–2018); ~61M registry downloads to date.' },
  ],
  earlier: [
    { company: 'Tableau Software', title: 'Senior WebOps Systems Engineer', start: '2015', end: '2017' },
    { company: 'Salesforce', title: 'Senior Member of Technical Staff', start: '2015', end: '2015' },
    { company: 'DreamBox Learning', title: 'Operations Engineer → Senior Operations Engineer', start: '2013', end: '2015' },
    { company: 'Big Fish Games', title: 'NOC Administrator → Senior NOC Engineer', start: '2010', end: '2013' },
    { company: 'NBC Olympics', title: 'IT Systems Operations Support', start: '2010', end: '2010' },
  ],
  education: [{ school: 'University of Wisconsin–La Crosse', degree: 'B.S., Sociology & Mathematics' }],
  certifications: ['Technician class amateur radio (HAM) operator license'],
  languages: ['English (native)', 'Spanish (elementary)'],
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatMonth(ym?: string): string {
  if (!ym) return 'Present';
  const [y, m] = ym.split('-').map(Number);
  return m ? `${MONTHS[m - 1]} ${y}` : String(y);
}

export function formatRange(role: Role): string {
  return `${formatMonth(role.start)} – ${formatMonth(role.end)}`;
}
