import { Header } from '@/components/site/header'

const content = {
  name: 'Open Source',
  projects: [
    {
      name: 'WaveFinder',
      href: 'https://wavefinder.io',
      description:
        '280+ Stars, Collection of website components (heros, features, CTAs, etc.) built with React, Typescript, Tailwind, and shadcn/ui.',
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
        '680+ Stars, Headless Wordpress Starter built with the Next.js App Router and React Server Components. Used in production by hundreds of sites.',
    },
    {
      name: 'Router',
      href: 'https://router.so',
      description:
        '210+ Stars, Form backend and lead router for marketing developers and GTM teams. Create an endpoint for leads in seconds. Generate shadcn/ui forms.',
    },
    {
      name: 'Abstract',
      href: 'https://abstract.ac',
      description:
        '20+ Stars, A modern full-stack starter template powered by PayloadCMS and Next.js. Built with performance and developer experience in mind.',
    },
  ],
}

export default function Page() {
  return (
    <>
      <Header page={content.name} />
      <div className="grid gap-8">
        {content.projects.map((project) => (
          <div className="reset-link cursor-pointer space-y-2" key={project.href}>
            <a target="_blank" href={project.href}>
              {project.name}
            </a>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}
