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

        <div id="projects" className="grid grid-cols-[1fr_1fr_3fr] gap-6">
          <p className="text-muted-foreground">Project</p>
          <p className="text-muted-foreground">Category</p>
          <p className="text-muted-foreground">Description</p>
          {projects.map((project, index) => (
            <Project key={project.name || index} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

const Project = ({ project }: { project: ProjectProps }) => {
  return (
    <>
      <a
        href={project.href}
        target="_blank"
        className="hover:underline underline-offset-2 w-full h-full"
      >
        <h3 className="uppercase">
          {project.name}
          <ArrowUpRight className="inline" size={15} />
        </h3>
      </a>
      <p className="text-muted-foreground">{project.tag}</p>
      <p>{project.desc} </p>
    </>
  )
}
