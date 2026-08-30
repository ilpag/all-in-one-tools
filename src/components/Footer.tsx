import { Github, Wrench } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink/10 bg-night px-5 py-10 text-paper/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 font-display text-sm font-semibold text-paper">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet">
            <Wrench size={14} />
          </span>
          All-in-One Tools
        </div>

        <p className="text-xs">
          Built with React, TypeScript &amp; Tailwind. Free and open source.
        </p>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium transition hover:text-paper"
        >
          <Github size={16} /> GitHub
        </a>
      </div>
    </footer>
  )
}
