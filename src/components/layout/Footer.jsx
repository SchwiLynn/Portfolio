import { PROFILE } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-background-tertiary/80 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-[10px] text-text-muted flex justify-between items-center">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span>Built with React · Vite · Tailwind</span>
      </div>
    </footer>
  );
}
