import { EXPERIENCE } from "../../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="space-y-4">
      <h2 className="text-sm tracking-[0.2em] uppercase text-text-muted">
        Experience
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {EXPERIENCE.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-background-secondary/60 border border-background-tertiary/80 p-4 space-y-2"
          >
            <div className="flex justify-between gap-3 text-xs text-text-muted">
              <span className="font-semibold text-text-primary">
                {item.title}
              </span>
              <span>{item.period}</span>
            </div>
            <div className="text-[11px] text-text-secondary">
              {item.org} · {item.location}
            </div>
            <ul className="list-disc list-inside text-[11px] text-text-secondary space-y-1">
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1 mt-1">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-[2px] rounded-full bg-background-tertiary text-[9px] text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
