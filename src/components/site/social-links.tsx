import { ArrowUpRight } from 'lucide-react'

export const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-3 uppercase text-muted-foreground">
      <a
        className="hover:text-foreground hover:underline underline-offset-2 transition-all"
        href="https://github.com/brijr"
        target="_blank"
      >
        Github
        <ArrowUpRight className="inline" size={15} />
      </a>
      <a
        className="hover:text-foreground hover:underline underline-offset-2 transition-all"
        href="https://x.com/bridgertower"
        target="_blank"
      >
        X.com
        <ArrowUpRight className="inline" size={15} />
      </a>
      <a
        className="hover:text-foreground hover:underline underline-offset-2 transition-all"
        href="https://linkedin.com/in/brijr"
        target="_blank"
      >
        Linkedin
        <ArrowUpRight className="inline" size={15} />
      </a>
      <a
        className="hover:text-foreground hover:underline underline-offset-2 transition-all"
        href="https://resume.bridger.to"
        target="_blank"
      >
        Resume
        <ArrowUpRight className="inline" size={15} />
      </a>
    </div>
  )
}
