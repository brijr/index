import { Section, Container } from '@/components/craft'
import { ArrowUpRight } from 'lucide-react'

import { projects, ProjectProps } from '@/lib/projects'

// export const revalidate = 600

export default function Index() {
  return (
    <Section>
      <Container className="grid gap-20">
        <p>
          I&apos;m a designer and software engineer specializing in creating intuitive,
          high-performance software and websites that merge visual excellence with practical
          functionality. I am passionate about user interface design and human computer interaction.
        </p>

        <div id="projects" className="grid gap-2">
          <h2 className="uppercase text-muted-foreground">Software</h2>
          {projects
            .filter((project) => project.tag === 'software')
            .map((project, index) => (
              <Project key={project.name || index} project={project} />
            ))}
        </div>
      </Container>
    </Section>
  )
}

const Project = ({ project }: { project: ProjectProps }) => {
  return (
    <a
      href={project.href}
      target="_blank"
      className="hover:bg-accent/30 grid grid-cols-[1fr_2fr] py-4 items-start"
    >
      <h3 className="uppercase">
        {project.name}
        <ArrowUpRight className="inline" size={15} />
      </h3>
      <p className="text-muted-foreground">{project.desc}</p>
    </a>
  )
}
