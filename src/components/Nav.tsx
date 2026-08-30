import { Github, Wrench } from 'lucide-react'

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet text-paper shadow-chip">
            <Wrench size={18} strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            All-in-One Tools
          </span>
        </a>

        <nav className="hidden items-center gap-7 font-body text-sm font-medium text-ink/70 md:flex">
          <a href="#tools" className="transition hover:text-ink">Tools</a>
          <a href="#screenshots" className="transition hover:text-ink">Screenshots</a>
          <a href="#why" className="transition hover:text-ink">Why offline</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-full border-2 border-ink px-3.5 py-1.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-paper sm:flex"
          >
            <Github size={16} /> Source
          </a>
          <a
            href="#download"
            className="rounded-full bg-ink px-4 py-1.5 text-sm font-semibold text-paper shadow-chip transition hover:-translate-y-0.5 hover:shadow-chipHover"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  )
}
