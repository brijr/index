import { ArrowUpRight } from 'lucide-react'

export default function Index() {
  return (
    <>
      <Intro />
      <Links />
    </>
  )
}

const Intro = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-muted-foreground">Intro</h2>
      <h3>
        Designer and software engineer exploring user interface design, applied artificial
        intelligence, and human computer interaction.
      </h3>
      <h4>
        I currently work at <a href="https://9d8.dev">9d8</a> and{' '}
        <a className="link" href="https://ampry.com">
          Ampry
        </a>{' '}
        designing and developing marketing and sales software.
      </h4>
    </div>
  )
}

const Links = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-muted-foreground">Links</h2>
      <div className="space-x-4">
        <a href="https://github.com/brijr" target="_blank">
          Github
          <ArrowUpRight className="inline" size={15} />
        </a>
        <a href="https://x.com/bridgertower" target="_blank">
          X.com
          <ArrowUpRight className="inline" size={15} />
        </a>
        <a href="https://linkedin.com/in/brijr" target="_blank">
          Linkedin
          <ArrowUpRight className="inline" size={15} />
        </a>
        <a href="https://resume.bridger.to" target="_blank">
          Resume
          <ArrowUpRight className="inline" size={15} />
        </a>
      </div>
    </div>
  )
}
