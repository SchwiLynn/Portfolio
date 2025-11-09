import { SKILLS } from "../../data/portfolio";

export default function Skills() {
  const entries = Object.entries(SKILLS);

  return (
    <section id="skills" className="space-y-4">
      <h2 className="text-sm tracking-[0.2em] uppercase text-text-muted">
        Skills
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {entries.map(([group, items]) => (
          <div
            key={group}
            className="rounded-xl bg-background-secondary/60 border border-background-tertiary/80 p-3 space-y-1"
          >
            <h3 className="text-[10px] uppercase tracking-[0.16em] text-text-muted">
              {group}
            </h3>
            <div className="flex flex-wrap gap-1 text-[10px] text-text-secondary">
              {items.map((item) => (
                <span key={item} className="px-2 py-[2px] rounded-full bg-background-tertiary">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
