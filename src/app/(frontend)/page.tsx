import { Section, Container } from '@/components/craft'
import { ArrowUpRight } from 'lucide-react'

import { projects } from '@/lib/projects'

const about =
  "I'm a designer and software engineer exploring user interface design, applied artificial intelligence, and human computer interaction."

// export const revalidate = 600

export default function Index() {
  return (
    <Section className="uppercase">
      <Container className="grid gap-20">
        <div className="p-6 border">
          <h3>{about}</h3>
          <h4>
            I currently work at <a href="https://9d8.dev">9d8</a> and{' '}
            <a href="https://ampry.com">Ampry</a> designing and developing marketing and sales
            software.
          </h4>
        </div>

        <div className="sm:grid flex flex-col gap-6 grid-cols-3 divide-y sm:divide-x border">
          {/* Software */}
          <div className="flex flex-col p-6 group">
            <h2 className="text-muted-foreground mb-3 sm:group-hover:text-foreground transition-all">
              Software
            </h2>
            <div className="grid gap-2">
              {projects.software.map((project: string) => (
                <a
                  className="transition-colors sm:group-hover:text-muted-foreground sm:hover:!text-foreground sm:hover:underline underline-offset-2"
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
            <h2 className="text-muted-foreground mb-3 sm:group-hover:text-foreground transition-all">
              Open Source
            </h2>
            <div className="grid gap-2">
              {projects.open_source.map((project: string) => (
                <a
                  className="transition-colors sm:group-hover:text-muted-foreground sm:hover:!text-foreground sm:hover:underline underline-offset-2"
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
            <h2 className="text-muted-foreground mb-3 sm:group-hover:text-foreground transition-all">
              Other
            </h2>
            <div className="grid gap-2">
              {projects.other.map((project: string) => (
                <a
                  className="transition-colors sm:group-hover:text-muted-foreground sm:hover:!text-foreground sm:hover:underline underline-offset-2"
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
