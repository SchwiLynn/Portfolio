import { PROFILE } from "../../data/portfolio";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-primary/90 backdrop-blur border-b border-background-tertiary/60">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="font-semibold tracking-[0.18em] text-xs text-text-secondary uppercase">
          {PROFILE.name}
        </a>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-6 text-[11px] text-text-muted tracking-[0.15em] uppercase">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
}
