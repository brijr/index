import { work } from "@/lib/work";

export const Work = () => {
  return (
    <section className="fade-in-up delay-work">
      <h3 className="sr-only">Work</h3>
      <ul className="space-y-3 text-sm">
        {work.map((project) => (
          <li key={project.name} className="group">
            <a
              className="p-3 sm:py-1 sm:px-0 border sm:border-dotted sm:border-x-0 sm:border-t-0 sm:border-b border-accent/20 flex items-center justify-between hover:border-accent/50 transition-all bg-accent/5 sm:bg-transparent rounded-md sm:rounded-none"
              href={project.href}
            >
              <h4 className="transition-all flex gap-1 items-center">
                {project.name}
                <span className="sr-only -ml-6 sm:not-sr-only opacity-0 group-hover:opacity-70 transition-all">
                  •
                </span>
              </h4>
              <p className="text-accent sm:text-sm text-xs">
                {project.description}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
