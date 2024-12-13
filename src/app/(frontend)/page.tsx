import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.svg'

export default function Index() {
  return (
    <>
      <Nav />
      <Intro />
      <Work />
    </>
  )
}

const Nav = () => {
  return (
    <div className="sm:flex gap-4 justify-between items-start">
      <Link className="reset-link" href="/">
        <Image
          className="invert dark:invert-0 mb-8"
          src={Logo}
          alt="Bridger Tower Logo"
          width={48}
          height={39.09}
        />
      </Link>{' '}
      <div className="flex gap-2 text-muted-foreground text-sm">
        <a className="reset-link hover:text-foreground" href="https://github.com/brijr">
          GitHub
        </a>
        <a className="reset-link hover:text-foreground" href="https://x.com/bridgertower">
          Twitter
        </a>
      </div>
    </div>
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
