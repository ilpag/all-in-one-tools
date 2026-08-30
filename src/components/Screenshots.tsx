import { categories } from '../data'

function PhoneFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="h-[380px] w-[190px] rounded-[2rem] border-[8px] border-ink bg-ink shadow-card sm:h-[420px] sm:w-[210px]">
        <div className="h-full w-full overflow-hidden rounded-[1.5rem] bg-paper">{children}</div>
      </div>
      <span className="font-mono text-xs font-medium text-ink/50">{label}</span>
    </div>
  )
}

export default function Screenshots() {
  return (
    <section id="screenshots" className="mx-auto max-w-6xl px-5 py-20">
      <div className="mb-10 max-w-xl">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          A peek inside
        </h2>
        <p className="mt-3 text-ink/65">
          Placeholder previews below — swap in real screenshots at{' '}
          <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[13px]">
            /public/screenshots
          </code>
          .
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 sm:justify-between">
        <PhoneFrame label="Home screen">
          <div className="p-3">
            <p className="mb-3 text-center font-display text-sm font-semibold">All-in-One Tools</p>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <div
                  key={cat.key}
                  className="flex h-16 flex-col items-center justify-center gap-1 rounded-xl"
                  style={{ backgroundColor: `${cat.hex}22` }}
                >
                  <span className="h-5 w-5 rounded-md" style={{ backgroundColor: cat.hex }} />
                  <span className="text-[9px] font-semibold text-ink/70">{cat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </PhoneFrame>

        <PhoneFrame label="Unit converter">
          <div className="p-3">
            <p className="mb-3 text-center font-display text-sm font-semibold">Unit Converter</p>
            <div className="space-y-2">
              <div className="rounded-xl border-2 border-sky/40 bg-sky/10 p-3">
                <p className="font-mono text-[10px] text-ink/50">From</p>
                <p className="font-display text-lg font-semibold text-ink">12 km</p>
              </div>
              <div className="flex justify-center text-sky">↓</div>
              <div className="rounded-xl border-2 border-sky bg-sky/20 p-3">
                <p className="font-mono text-[10px] text-ink/50">To</p>
                <p className="font-display text-lg font-semibold text-ink">7.46 mi</p>
              </div>
            </div>
          </div>
        </PhoneFrame>

        <PhoneFrame label="Password generator">
          <div className="p-3">
            <p className="mb-3 text-center font-display text-sm font-semibold">Password Gen</p>
            <div className="rounded-xl bg-violet/10 p-3 text-center">
              <p className="break-all font-mono text-xs font-semibold text-violet">
                k9!Rt2$mLq7@Zx
              </p>
            </div>
            <div className="mt-3 space-y-2">
              {['Length: 14', 'Symbols on', 'Numbers on'].map((s) => (
                <div key={s} className="rounded-lg bg-ink/5 px-2 py-1.5 text-[10px] font-medium text-ink/60">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </PhoneFrame>
      </div>
    </section>
  )
}
