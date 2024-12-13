import Link from 'next/link'

import { Link2 } from 'lucide-react'

export default function Index() {
  return (
    <>
      <Intro />
      <Work />
      <Links />
    </>
  )
}

const Intro = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-muted-foreground">Intro</h2>
      <h3>
        Designer and software engineer exploring <b>user interface design</b>,{' '}
        <b>applied artificial intelligence</b>, and <b>human computer interaction</b>.
      </h3>
      <h4>
        I currently work at <a href="https://9d8.dev">9d8</a> and{' '}
        <a className="link" href="https://ampry.com">
          Ampry
        </a>{' '}
        designing and developing marketing and sales software. I build tools for designers at{' '}
        <a href="https://wipdes.com">WIP</a>.
      </h4>
    </div>
  )
}

const Work = () => {
  return (
    <div className="grid gap-2">
      <h2 className="text-muted-foreground">Work</h2>
      <Link href="/open-source">Open Source</Link>
      <Link href="/software">Software</Link>
      <Link href="/websites">Websites</Link>
    </div>
  )
}

const Links = () => {
  return (
    <div className="grid gap-2">
      <h2 className="text-muted-foreground">Links</h2>
      <a href="https://github.com/brijr" target="_blank">
        github.com/brijr
      </a>
      <a href="https://x.com/bridgertower" target="_blank">
        x.com/brijr
      </a>
      <a href="https://linkedin.com/in/brijr" target="_blank">
        linkedin.com/in/brijr
      </a>
      <a href="https://resume.bridger.to" target="_blank">
        resume.bridger.to
      </a>
    </div>
  )
}
