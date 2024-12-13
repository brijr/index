import { Header } from '@/components/site/header'

const content = {
  name: 'Open Source',
  projects: [
    {
      name: 'WaveFinder',
      href: 'https://wavefinder.io',
      description:
        'Create and test messages on Facebook with an AI advertising companion. Optimize your marketing campaigns using real data and machine learning. Find outliers in hours, not months.',
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
          <div className="reset-link space-y-2" key={project.href}>
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
