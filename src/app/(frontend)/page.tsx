import { Section, Container } from '@/components/craft'
import { ArrowUpRight } from 'lucide-react'

// export const revalidate = 600

export default function Index() {
  return (
    <Section>
      <Container className="grid gap-12 font-light">
        <p>
          I&apos;m a designer and software engineer specializing in creating intuitive,
          high-performance software and websites that merge visual excellence with practical
          functionality. I am passionate about user interface design and human computer interaction.
        </p>
        <SocialLinks />
      </Container>
    </Section>
  )
}

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-4 uppercase text-muted-foreground">
      <a
        className="hover:text-foreground hover:underline underline-offset-2 transition-all"
        href="https://resume.bridger.to"
      >
        Resume
        <ArrowUpRight className="inline" size={15} />
      </a>
      <a
        className="hover:text-foreground hover:underline underline-offset-2 transition-all"
        href="https://github.com/brijr"
      >
        Github
        <ArrowUpRight className="inline" size={15} />
      </a>
      <a
        className="hover:text-foreground hover:underline underline-offset-2 transition-all"
        href="https://x.com/bridgertower"
      >
        X.com
        <ArrowUpRight className="inline" size={15} />
      </a>
      <a
        className="hover:text-foreground hover:underline underline-offset-2 transition-all"
        href="https://linkedin.com/in/brijr"
      >
        Linkedin
        <ArrowUpRight className="inline" size={15} />
      </a>
    </div>
  )
}
