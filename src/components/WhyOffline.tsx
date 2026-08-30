import { WifiOff, EyeOff, Zap } from 'lucide-react'

const points = [
  {
    icon: WifiOff,
    hex: '#34B3F1',
    title: 'No connection needed',
    body: 'Every calculation runs on-device. Use it on a plane, underground, or anywhere signal doesn\u2019t reach.',
  },
  {
    icon: EyeOff,
    hex: '#FF5D73',
    title: 'Nothing leaves your phone',
    body: 'No accounts, no analytics, no ad SDKs. What you type stays on your device, full stop.',
  },
  {
    icon: Zap,
    hex: '#FFB100',
    title: 'Instant, every time',
    body: 'No loading spinners waiting on a server. Tools open and respond immediately.',
  },
]

export default function WhyOffline() {
  return (
    <section id="why" className="bg-ink px-5 py-20 text-paper">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-lg font-display text-2xl font-semibold sm:text-3xl">
          Offline-first isn't a limitation. It's the point.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.title}>
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: p.hex }}
              >
                <p.icon size={20} className="text-ink" strokeWidth={2.5} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
