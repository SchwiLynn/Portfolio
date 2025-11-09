import { ABOUT } from "../../data/portfolio";

export default function About() {
  return (
    <section id="about" className="space-y-4">
      <h2 className="text-sm tracking-[0.2em] uppercase text-text-muted">
        About
      </h2>
      <div className="space-y-3 max-w-2xl text-sm text-text-secondary">
        {ABOUT.paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </section>
  );
}
