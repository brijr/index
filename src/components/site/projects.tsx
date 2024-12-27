import { ArrowUpRight } from 'lucide-react'

interface Props {
  name: string
  projects: {
    name: string
    href: string
    description: string
  }[]
}

export const Projects = ({ content }: { content: Props }) => {
  return (
    <div className="grid gap-6 fade-in-up delay-300">
      {content.projects.map((project: any) => (
        <div className="reset-link space-y-1" key={project.href}>
          <a target="_blank" href={project.href}>
            {project.name}
            <ArrowUpRight className="inline ml-1 text-muted-foreground" size={16} />
          </a>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
      ))}
    </div>
  )
}
