import Link from 'next/link'

import { Header } from '@/components/site/header'

export default function Index() {
  return (
    <>
      <Header />
      <Intro />
      <Work />
    </>
  )
}

const Intro = () => {
  return (
    <div className="space-y-2">
      <h2 className="sr-only">Intro</h2>
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
      <h2 className="sr-only">Work</h2>
      <Link href="/open-source">Open Source</Link>
      <Link href="/software">Software</Link>
      <Link href="/websites">Websites</Link>
    </div>
  )
}
