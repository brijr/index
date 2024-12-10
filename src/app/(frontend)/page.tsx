import { Section, Container } from '@/components/craft'
import { pay } from 'site.config'

// export const revalidate = 600

export default function Index() {
  return (
    <Section>
      <Container className="grid gap-12 font-light">
        <p>{pay.desc}</p>
        <SocialLinks />
      </Container>
    </Section>
  )
}

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-4 uppercase text-muted-foreground">
      <a className="hover:text-foreground transition-all" href="https://resume.bridger.to">
        # Resume
      </a>
      <a className="hover:text-foreground transition-all" href="https://github.com/brijr">
        # Github
      </a>
      <a className="hover:text-foreground transition-all" href="https://x.com/bridgertower">
        # X.com
      </a>
      <a className="hover:text-foreground transition-all" href="https://linkedin.com/in/brijr">
        # Linkedin
      </a>
    </div>
  )
}
