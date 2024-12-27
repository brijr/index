import { Header } from '@/components/site/header'
import { Projects } from '@/components/site/projects'

const content = {
  name: 'Software',
  projects: [
    {
      name: 'WaveFinder',
      href: 'https://wavefinder.io',
      description:
        'Advertising message testing at scale powered by AI. Use the latest LLMs to generate headlines, copy, images, and deploy directly to Facebook.',
    },
    {
      name: 'Outr',
      href: 'https://outr.ai',
      description:
        'Platform for personalized cold outread with AI. Train AI agents on your business, send from multiple domains, and track performance.',
    },
    {
      name: 'SwyftFin',
      href: 'https://swyftfin.com',
      description:
        'Sales software and PWA to help home improvement sales reps get personalized loans for their customers in seconds.',
    },
    {
      name: 'Router',
      href: 'https://router.so',
      description:
        'Form backend and lead router for marketing developers and GTM teams. Create an endpoint for leads in seconds. Generate shadcn/ui forms.',
    },
    {
      name: 'Abstract',
      href: 'https://abstract.ac',
      description:
        'Portfolios for Designers, Photographers, and Artists. Create your personal website and present your work. Coming Early 2025.',
    },
  ],
}

export default function Page() {
  return (
    <>
      <Header page={content.name} />
      <Projects content={content} />
    </>
  )
}
