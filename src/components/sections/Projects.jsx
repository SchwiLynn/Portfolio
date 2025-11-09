import { PROJECTS } from "../../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="space-y-4">
      <h2 className="text-sm tracking-[0.2em] uppercase text-text-muted">
        Projects
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-background-secondary/60 border border-background-tertiary/80 p-4 space-y-2"
          >
            <h3 className="text-sm font-semibold text-text-primary">
              {project.name}
            </h3>
            <p className="text-[11px] text-text-secondary">
              {project.description}
            </p>
            {project.highlight && (
              <p className="text-[10px] text-primary">
                {project.highlight}
              </p>
            )}
            <div className="flex flex-wrap gap-1 mt-1">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-[2px] rounded-full bg-background-tertiary text-[9px] text-text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2 text-[10px] mt-1">
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary hover:underline"
                >
                  Live demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
