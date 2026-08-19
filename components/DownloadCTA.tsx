import { AndroidIcon, LinuxIcon, WindowsIcon } from '@/components/BrandIcons';
import DownloadLink from '@/components/DownloadLink';
import Reveal from '@/components/Reveal';
import { APK_SIZE } from '@/lib/site';

export default function DownloadCTA() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-b from-ink-800 to-ink-900 px-6 py-16 text-center shadow-card sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-hero-glow"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-600/15 blur-[120px]"
            />

            <div className="relative">
              <h2
                id="download-heading"
                className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl"
              >
                Ready to take your videos with you?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Get Final Vora for Android now. Windows and Linux are on the
                way.
              </p>

              <div className="mx-auto mt-9 flex max-w-2xl flex-col items-center gap-3">
                <DownloadLink size="lg" className="w-full sm:w-auto">
                  Download APK
                </DownloadLink>
                <p className="inline-flex items-center gap-2 text-sm text-slate-400">
                  <AndroidIcon className="h-4 w-4 text-emerald-300" />
                  Android &middot; {APK_SIZE} &middot; Free APK
                </p>

                <div className="mt-3 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-3 text-sm font-semibold text-slate-500"
                  >
                    <WindowsIcon className="h-4 w-4" />
                    Windows &mdash; Coming Soon
                  </button>
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-3 text-sm font-semibold text-slate-500"
                  >
                    <LinuxIcon className="h-4 w-4" />
                    Linux &mdash; Coming Soon
                  </button>
                </div>
              </div>

              <p className="mx-auto mt-8 max-w-xl text-xs leading-relaxed text-slate-600">
                Downloading takes you to the official GitHub Releases page. Please
                respect copyright, platform terms of service, and applicable laws
                when downloading content.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
