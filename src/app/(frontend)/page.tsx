import Link from 'next/link'

import { Header } from '@/components/site/header''
import { ThemeToggle } from '@/components/theme/theme-toggle'

export default function Index() {
  return (
    <>
      <Header />
      <Intro />
      <Work />
      <Other />
      <Footer />
    </>
  )
}

const Intro = () => {
  return (
    <div className="space-y-2 fade-in-up delay-300">
      <h2 className="sr-only">Intro</h2>
      <h3>
        Product designer and software engineer exploring <b>user interface design</b>,{' '}
        <b>applied artificial intelligence</b>, and <b>human computer interaction</b>.
      </h3>
      <h4>
        Currently I work at <a href="https://9d8.dev">9d8</a> and{' '}
        <a className="link" href="https://ampry.com">
          Ampry
        </a>{' '}
        building marketing and sales software. I build tools for designers at{' '}
        <a href="https://wipdes.com">WIP</a>. Previously I worked at{' '}
        <a href="https://www.tackle.io">Tackle</a> and <a href="https://zion.surf">Zion</a>.
      </h4>
    </div>
  )
}

const Work = () => {
  return (
    <div className="grid gap-2 fade-in-up delay-500">
      <h2 className="sr-only">Work</h2>
      <Link href="/open-source">Open Source</Link>
      <Link href="/software">Software</Link>
      <Link href="/websites">Websites</Link>
    </div>
  )
}

const Other = () => {
  return (
    <div className="grid gap-2 fade-in-up delay-500">
      <h2 className="sr-only">Other</h2>
      {/* <Link href="/posts">Posts</Link> */}
    </div>
  )
}

const Footer = () => {
  return (
    <div className="mt-auto fade-in-up delay-700 sm:pt-24">
      <footer className="text-muted-foreground text-sm flex gap-2 justify-between items-center">
        <Links />
        <ThemeToggle />
      </footer>
    </div>
  )
}

const Links = () => {
  return (
    <div className="flex lowercase gap-2">
      <p>bridger.to</p>
      <p>/</p>
      <a href="https://youtube.com/@bridgertower" target="_blank">
        YouTube
      </a>
      <a href="https://linkedin.com/in/brijr" target="_blank">
        LinkedIn
      </a>
      <a href="https://resume.bridger.to" target="_blank">
        Resume
      </a>
      <a href="mailto:bridgertower@gmail.com">Email</a>
    </div>
  )
}
