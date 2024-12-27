import { Header } from '@/components/site/header'
import { Projects } from '@/components/site/projects'

const content = {
  name: 'Websites',
  projects: [
    {
      name: 'Design Books',
      href: 'https://designbooks.org',
      description: 'An open source collection of the best books on design curated by me.',
    },
    {
      name: 'Travel Mellow',
      href: 'https://travelmellow.com',
      description: 'A travel publication run by my wife, Rileigh. Built with Next-WP.',
    },
    {
      name: 'ASAP Engineering',
      href: 'https://asap.engineering',
      description: 'A podcast for technical entrepreneurs by Cameron Youngblood and I.',
    },
    {
      name: 'Alpine Codex',
      href: 'https://alpinecodex.com',
      description: 'Homepage for Alpine Codex.',
    },
    {
      name: '9d8',
      href: 'https://9d8.dev',
      description: 'Homepage for 9d8.',
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
