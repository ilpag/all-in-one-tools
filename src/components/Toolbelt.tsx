import { tools, categoryColorMap } from '../data'

// Deterministic pseudo-random tilt per index so chips look scattered but stable
function tiltFor(i: number) {
  const seq = [-6, 4, -3, 7, -8, 2, 5, -4, 8, -2, 3, -7, 6, -5]
  return seq[i % seq.length]
}

export default function Toolbelt() {
  return (
    <section id="tools" className="border-y-2 border-ink/10 bg-night py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">
            Everything in the drawer
          </h2>
          <span className="hidden font-mono text-xs text-paper/50 sm:block">
            {tools.length} tools and counting →
          </span>
        </div>
      </div>

      <div className="scrollbar-none flex gap-3 overflow-x-auto px-5 pb-4 pt-6 [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
        {tools.map((tool, i) => {
          const cat = categoryColorMap[tool.category]
          const tilt = tiltFor(i)
          return (
            <div
              key={tool.name}
              className="group flex shrink-0 cursor-default items-center gap-2 rounded-2xl px-4 py-3 shadow-chip transition-transform duration-200 hover:-translate-y-1 hover:animate-wiggle"
              style={{
                backgroundColor: cat.hex,
                transform: `rotate(${tilt}deg)`,
                // @ts-expect-error CSS custom property used by wiggle keyframes
                '--tilt': `${tilt}deg`,
              }}
            >
              <span className="whitespace-nowrap font-mono text-sm font-semibold text-paper">
                {tool.name}
              </span>
            </div>
          )
        })}
      </div>

      <p className="mt-2 px-5 text-center font-mono text-xs text-paper/40">
        ← scroll for more →
      </p>
    </section>
  )
}
