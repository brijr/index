export interface ProjectProps {
  name: string
  role?: string
  href: string
  desc: string
  tag: 'software' | 'open source' | 'ventures'
}

export const projects: ProjectProps[] = [
  {
    name: 'Outr',
    role: 'Design Engineer, AI Developer',
    href: 'https://outr.ai',
    desc: 'Outr is am AI-native platform for personalize cold outreach and email domain managemet. Built using the latest technology using agentic workflows and durable objects.',
    tag: 'software',
  },
  {
    name: 'Router.so',
    role: 'Design Engineer',
    href: 'https://router.so',
    desc: 'Router.so is an open-source form backend for developers and technical marketing agencies. Capture leads, create endpoints, and generate forms from a central dashboard. ',
    tag: 'software',
  },
  {
    name: 'WaveFinder',
    role: 'Design Engineer, AI Developer',
    href: 'https://wavefinder.io',
    desc: 'WaveFinder provides technical marketers with a platform to run message testing at scale. Use AI agents to generate Facebook ads and creative and post directly to Facebook ads through direct integration. Monitor results and select winners.',
    tag: 'software',
  },
  {
    name: 'Swyftfin',
    role: 'Design Engineer',
    href: 'https://swyftfin.com',
    desc: 'Financing for home services',
    tag: 'software',
  },
  {
    name: '9d8/next-wp',
    href: 'https://wp.9d8.dev',
    desc: 'Next.js WordPress starter',
    tag: 'open source',
  },
  {
    name: 'brijr/components',
    href: 'https://components.bridger.to',
    desc: 'Next.js / shadcn/ui components for websites',
    tag: 'open source',
  },
  {
    name: 'brijr/craft',
    href: 'https://craft-ds.com',
    desc: 'React design system for websites',
    tag: 'open source',
  },
  {
    name: '9d8',
    href: 'https://9d8.dev',
    desc: 'Software Design and Development Studio',
    tag: 'ventures',
  },
  {
    name: 'Alpine Codex',
    href: 'https://alpinecodex.com',
    desc: 'Marketing Software and Applied AI',
    tag: 'ventures',
  },
  {
    name: 'WIP Design',
    href: 'https://wip-design.com',
    desc: 'Tools and resources for designers',
    tag: 'ventures',
  },
]
