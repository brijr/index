const content = {
  name: 'Open Source',
  projects: [
    {
      name: 'Router',
      href: 'https://router.so',
      description: 'Open-source form backend and lead router',
    },
    {
      name: 'Website Components',
      href: 'https://components.bridger.to',
      description:
        'Collection of website components built with React, Typescript, Tailwind, and Shadcn',
    },
    {
      name: 'Craft Design System',
      href: 'https://github.com/brijr/craft-ds',
      description: 'WordPress as a headless CMS for Next.js',
    },
    {
      name: 'Next-WP',
      href: 'https://github.com/9d8dev/next-wp',
      description: 'WordPress as a headless CMS for Next.js',
    },
    {
      name: 'Payload Next.js Starter',
      href: 'https://github.com/9d8dev/pay',
      description: 'WordPress as a headless CMS for Next.js',
    },
  ],
}

export default function Page() {
  return (
    <>
      <h1>{content.name}</h1>
      <div className="grid gap-4">
        {content.projects.map((project) => (
          <a className="reset-link cursor-pointer" key={project.href}>
            <h2>{project.name}</h2>
            <p className="text-muted-foreground">{project.description}</p>
          </a>
        ))}
      </div>
    </>
  )
}
