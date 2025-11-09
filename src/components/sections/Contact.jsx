import { CONTACT, SOCIALS } from "../../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="space-y-4">
      <h2 className="text-sm tracking-[0.2em] uppercase text-text-muted">
        Contact
      </h2>
      <p className="max-w-xl text-sm text-text-secondary">
        {CONTACT.intro}
      </p>
      <p className="max-w-xl text-xs text-text-muted">
        {CONTACT.note}
      </p>
      <div className="flex flex-wrap gap-3 text-xs mt-2">
        {SOCIALS.email && (
          <a
            href={`mailto:${SOCIALS.email}`}
            className="px-4 py-2 rounded-full bg-primary text-text-primary font-semibold hover:bg-primary-dark transition-colors"
          >
            Email
          </a>
        )}
        {SOCIALS.linkedin && (
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full border border-background-tertiary text-text-secondary hover:border-primary hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        )}
        {SOCIALS.github && (
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full border border-background-tertiary text-text-secondary hover:border-primary hover:text-primary transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </section>
  );
}
