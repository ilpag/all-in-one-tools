import { Download, Github, ShieldCheck } from 'lucide-react'

// Bundled directly in the repo — replace public/downloads/all-in-one-tools.apk
// with the real build. Keep the filename in sync with this constant.
const APK_PATH = '/downloads/all-in-one-tools.apk'
const APK_VERSION = 'v1.0.0'
const APK_SIZE = '~14 MB'

export default function DownloadSection() {
  return (
    <section id="download" className="px-5 py-24">
      <div className="mx-auto max-w-3xl rounded-[2.5rem] border-2 border-ink bg-amber/15 p-10 text-center shadow-card sm:p-14">
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Get the toolbox
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ink/65">
          Free, open source, and installs in seconds. Android 8.0 or newer.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={APK_PATH}
            download
            className="flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-display font-semibold text-paper shadow-chip transition hover:-translate-y-0.5 hover:shadow-chipHover active:translate-y-1 active:shadow-none"
          >
            <Download size={20} /> Download APK
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border-2 border-ink px-7 py-4 font-display font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
          >
            <Github size={20} /> Browse the code
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-mono text-xs text-ink/50">
          <span>{APK_VERSION}</span>
          <span>{APK_SIZE}</span>
          <span className="flex items-center gap-1">
            <ShieldCheck size={13} /> No Play Store account needed
          </span>
        </div>

        <p className="mx-auto mt-6 max-w-sm text-xs text-ink/45">
          Installing from outside the Play Store requires enabling
          "install unknown apps" for your browser — Android will prompt you
          the first time.
        </p>
      </div>
    </section>
  )
}
