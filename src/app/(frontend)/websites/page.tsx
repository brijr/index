import { Header } from '@/components/site/header'

const content = {
  name: 'Open Source',
  projects: [
    {
      name: 'Router',
      href: 'https://router.so',
      description:
        '210+ Stars, Form backend and lead router for marketing developers and GTM teams. Create an endpoint for leads in seconds. Generate shadcn/ui forms.',
    },
    {
      name: 'Components',
      href: 'https://components.bridger.to',
      description:
        '280+ Stars, Collection of website components (heros, features, CTAs, etc.) built with React, Typescript, Tailwind, and shadcn/ui.',
    },
    {
      name: 'Craft Design System',
      href: 'https://github.com/brijr/craft-ds',
      description:
        '180+ Stars, A lightweight, component-based design system for React, Typescript, Tailwind, and Next.js, optimized for speed and flexibility.',
    },
    {
      name: 'Next-WP',
      href: 'https://wp.9d8.dev',
      description:
        '680+ Stars, Headless Wordpress Starter built with the Next.js App Router and React Server Components. Used in production by hundreds of sites.',
    },
    {
      name: 'Payload Starter',
      href: 'https://github.com/9d8dev/pay',
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
