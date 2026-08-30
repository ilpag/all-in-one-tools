import { Github, Download, Star, WifiOff, ShieldCheck } from 'lucide-react'
import { categories } from '../data'

const chips: { label: string; hex: string; top: string; left: string; tilt: number }[] = [
  { label: 'QR Code', hex: '#8C6BFF', top: '4%', left: '2%', tilt: -8 },
  { label: 'JSON', hex: '#5B4FE0', top: '18%', left: '-6%', tilt: 6 },
  { label: 'BMI', hex: '#FFB100', top: '58%', left: '-4%', tilt: -5 },
  { label: 'Base64', hex: '#34B3F1', top: '78%', left: '4%', tilt: 9 },
  { label: 'Compress', hex: '#2FD8A3', top: '2%', left: '68%', tilt: 7 },
  { label: 'Password', hex: '#FF5D73', top: '22%', left: '88%', tilt: -7 },
  { label: 'Word Count', hex: '#FFB100', top: '62%', left: '90%', tilt: 5 },
  { label: 'Hash', hex: '#5B4FE0', top: '82%', left: '70%', tilt: -6 },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        {/* Left: copy */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
            <WifiOff size={13} /> Works with zero signal
          </span>

          <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            One toolbox.
            <br />
            <span className="relative inline-block">
              30+ tools.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 16"
                fill="none"
                aria-hidden="true"
              >
                <path d="M2 12C60 4 240 4 298 12" stroke="#8C6BFF" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            Zero internet.
          </h1>

          <p className="mt-7 max-w-md font-body text-lg text-ink/70">
            Converters, generators, calculators, image tools and dev utilities —
            all running on your phone, all for free, none of it phoning home.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="flex items-center gap-2 rounded-full bg-violet px-6 py-3.5 font-display font-semibold text-paper shadow-chip transition hover:-translate-y-0.5 hover:shadow-chipHover active:translate-y-1 active:shadow-none"
            >
              <Download size={19} /> Download APK
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3.5 font-display font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
            >
              <Github size={19} /> View source
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-ink/60">
            <span className="flex items-center gap-1.5">
              <Star size={15} className="fill-amber text-amber" /> Free & open source
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} /> No ads, no tracking
            </span>
          </div>
        </div>

        {/* Right: phone mockup + spilled tool chips (signature element) */}
        <div className="relative mx-auto h-[420px] w-full max-w-sm md:h-[520px]">
          {chips.map((chip) => (
            <div
              key={chip.label}
              className="absolute hidden select-none items-center rounded-xl px-3 py-2 font-mono text-xs font-semibold text-paper shadow-chip animate-float sm:flex"
              style={{
                top: chip.top,
                left: chip.left,
                backgroundColor: chip.hex,
                // @ts-expect-error CSS custom property
                '--tilt': `${chip.tilt}deg`,
                transform: `rotate(${chip.tilt}deg)`,
                animationDelay: `${Math.abs(chip.tilt) * 120}ms`,
              }}
            >
              {chip.label}
            </div>
          ))}

          <div className="relative z-10 mx-auto h-full w-[240px] rounded-[2.5rem] border-[10px] border-ink bg-ink shadow-card sm:w-[260px]">
            <div className="absolute left-1/2 top-0 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-ink" />
            <div className="h-full w-full overflow-hidden rounded-[1.8rem] bg-paper p-3">
              <p className="mb-3 text-center font-display text-sm font-semibold text-ink">
                All-in-One Tools
              </p>
              <div className="grid grid-cols-3 gap-2">
                {categories.map((cat) => (
                  <div
                    key={cat.key}
                    className="flex aspect-square flex-col items-center justify-center gap-1 rounded-xl text-center"
                    style={{ backgroundColor: `${cat.hex}22` }}
                  >
                    <span
                      className="h-6 w-6 rounded-lg"
                      style={{ backgroundColor: cat.hex }}
                    />
                    <span className="px-1 text-[9px] font-semibold leading-tight text-ink/80">
                      {cat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
