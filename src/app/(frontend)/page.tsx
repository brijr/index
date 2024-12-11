import { Section, Container } from '@/components/craft'
import { ArrowUpRight } from 'lucide-react'

import { projects } from '@/lib/projects'

// export const revalidate = 600

export default function Index() {
  return (
    <Section className="uppercase">
      <Container className="grid gap-20">
        <h4 className="p-6 border group text-muted-foreground sm:text-foreground sm:hover:text-muted-foreground transition-all">
          I&apos;m a{' '}
          <span className="text-foreground sm:text-foreground sm:group-hover:text-foreground">
            designer and software engineer
          </span>{' '}
          specializing in creating intuitive, high-performance software and websites that merge
          visual excellence with practical functionality. I am passionate about{' '}
          <span className="text-foreground sm:text-foreground sm:group-hover:text-foreground">
            user interface design
          </span>{' '}
          and{' '}
          <span className="text-foreground sm:text-foreground sm:group-hover:text-foreground">
            human computer interaction
          </span>
          .
        </h4>

        <div className="sm:grid flex flex-col gap-6 grid-cols-3 divide-y sm:divide-x border">
          {/* Software */}
          <div className="flex flex-col p-6 group">
            <h2 className="text-muted-foreground mb-3 group-hover:text-foreground transition-all">
              Software
            </h2>
            <div className="grid gap-2">
              {projects.software.map((project: string) => (
                <a
                  className="transition-colors group-hover:text-muted-foreground hover:!text-foreground hover:underline underline-offset-2"
                  href={`https://${project}`}
                  key={project}
                >
                  {project}
                  <ArrowUpRight className="inline" size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Open Source  */}
          <div className="flex flex-col p-6 group">
            <h2 className="text-muted-foreground mb-3 group-hover:text-foreground transition-all">
              Open Source
            </h2>
            <div className="grid gap-2">
              {projects.open_source.map((project: string) => (
                <a
                  className="transition-colors group-hover:text-muted-foreground hover:!text-foreground hover:underline underline-offset-2"
                  href={`https://${project}`}
                  key={project}
                >
                  {project}
                  <ArrowUpRight className="inline" size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Other */}
          <div className="flex flex-col p-6 group">
            <h2 className="text-muted-foreground mb-3 group-hover:text-foreground transition-all">
              Other
            </h2>
            <div className="grid gap-2">
              {projects.other.map((project: string) => (
                <a
                  className="transition-colors group-hover:text-muted-foreground hover:!text-foreground hover:underline underline-offset-2"
                  href={`https://${project}`}
                  key={project}
                >
                  {project}
                  <ArrowUpRight className="inline" size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
