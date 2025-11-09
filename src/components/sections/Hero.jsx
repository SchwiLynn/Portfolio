import { PROFILE, HERO, SOCIALS } from "../../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-10 sm:pt-16 flex flex-col gap-6"
    >
      {/* Badge / Availability */}
      <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-text-muted">
        <span className="px-2 py-1 rounded-full bg-background-secondary/60 text-primary">
          {HERO.badge.join(" • ")}
        </span>
        <span className="text-text-secondary">
          {PROFILE.availability}
        </span>
      </div>

      {/* Big Title */}
      <div className="space-y-2">
        <p className="text-xs text-text-muted tracking-[0.2em] uppercase">
          {PROFILE.role} · {PROFILE.location}
        </p>
        <h1 className="leading-tight text-4xl sm:text-5xl md:text-6xl font-semibold">
          <span className="block text-text-primary">
            {HERO.bigWords[0]}{" "}
            <span className="text-primary">{HERO.bigWords[1]}</span>
          </span>
        </h1>
      </div>

      {/* Subtext */}
      <p className="max-w-2xl text-sm sm:text-base text-text-secondary">
        {HERO.subtext}
      </p>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3 text-xs">
        <a
          href="#projects"
          className="px-4 py-2 rounded-full bg-primary text-text-primary font-semibold tracking-wide hover:bg-primary-dark transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-4 py-2 rounded-full border border-background-tertiary text-text-secondary hover:border-primary hover:text-primary transition-colors"
        >
          Get in touch
        </a>
        <div className="flex gap-3 text-[11px] text-text-muted">
          {SOCIALS.github && (
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              GitHub
            </a>
          )}
          {SOCIALS.linkedin && (
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
