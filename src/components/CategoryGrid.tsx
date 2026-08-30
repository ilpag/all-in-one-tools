import {
  ArrowLeftRight,
  Sparkles,
  Type,
  Calculator,
  ImageIcon,
  Code2,
  type LucideIcon,
} from 'lucide-react'
import { categories, tools, type CategoryKey } from '../data'

const icons: Record<CategoryKey, LucideIcon> = {
  converters: ArrowLeftRight,
  generators: Sparkles,
  text: Type,
  calculators: Calculator,
  image: ImageIcon,
  dev: Code2,
}

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10 max-w-xl">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Six categories, one app
        </h2>
        <p className="mt-3 text-ink/65">
          Every tool lives on your device. Nothing you type or convert ever
          leaves your phone.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const Icon = icons[cat.key]
          const count = tools.filter((t) => t.category === cat.key).length
          return (
            <div
              key={cat.key}
              className="group rounded-3xl border-2 border-ink/10 bg-white/60 p-6 shadow-card transition hover:-translate-y-1 hover:border-ink"
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-paper transition group-hover:rotate-6"
                  style={{ backgroundColor: cat.hex }}
                >
                  <Icon size={22} strokeWidth={2.4} />
                </span>
                <span className="font-mono text-xs font-semibold text-ink/40">
                  {count} tools
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {cat.label}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                {cat.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
