import { Header } from '@/components/site/header'

const content = {
  name: 'Work',
  projects: [
    {
      name: 'router.so',
      description:
        '220+ Stars, Form backend and lead router for marketing developers and GTM teams. Create an endpoint for leads in seconds. Generate shadcn/ui forms.',
    },
    {
      name: 'components.bridger.to',
      href: 'https://components.bridger.to',
      description:
        '300+ Stars, Collection of website components (heros, features, CTAs, etc.) built with React, Typescript, Tailwind, and shadcn/ui.',
    },
    {
      name: 'craft-ds.com',
      href: 'https://craft-ds.com',
      description:
        '200+ Stars, A lightweight, component-based design system for React, Typescript, Tailwind, and Next.js, optimized for speed and flexibility.',
    },
    {
      name: 'wp.9d8.dev',
      href: 'https://wp.9d8.dev',
      description:
        '700+ Stars, Headless Wordpress Starter built with the Next.js App Router and React Server Components. Used in production by hundreds of sites.',
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
    </>
  )
}
