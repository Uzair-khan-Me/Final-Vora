import { Check, Clock } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import DownloadLink from '@/components/DownloadLink';
import { APK_SIZE } from '@/lib/site';
import {
  AndroidIcon,
  LinuxIcon,
  WindowsIcon,
} from '@/components/BrandIcons';
import { cn } from '@/lib/utils';

export default function Platforms() {
  return (
    <section
      id="platforms"
      aria-labelledby="platforms-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="platforms-heading"
          eyebrow="Platforms"
          title="Get Final Vora on your device."
          description="Android is available today. Windows and Linux are on the way — Final Vora stays a standalone app wherever it runs."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-3">
          {/* Android — available */}
          <Reveal>
            <article className="relative flex h-full flex-col rounded-3xl border border-violet-400/25 bg-gradient-to-b from-violet-500/[0.08] to-ink-850/80 p-6 shadow-glow-sm">
              <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                <Check className="h-3 w-3" aria-hidden="true" />
                Available
              </span>

              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-emerald-300">
                <AndroidIcon className="h-7 w-7" />
              </span>

              <h3 className="mt-5 font-display text-xl font-semibold text-white">
                Download for Android
              </h3>
              <p className="mt-1.5 text-sm text-slate-400">
                APK &middot; {APK_SIZE} &middot; Standalone app
              </p>

              <div className="mt-6 flex flex-1 flex-col justify-end gap-3">
                <DownloadLink className="w-full">
                  Download APK
                </DownloadLink>
                <p className="text-xs leading-relaxed text-slate-500">
                  Direct APK download from GitHub Releases. You install and run
                  Final Vora yourself — no store account required.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Windows — coming soon */}
          <Reveal delay={100}>
            <article className="flex h-full flex-col rounded-3xl border border-white/[0.06] bg-ink-850/60 p-6 opacity-70">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-slate-500">
                <WindowsIcon className="h-7 w-7" />
              </span>

              <h3 className="mt-5 font-display text-xl font-semibold text-white">
                Windows
              </h3>
              <p className="mt-1.5 text-sm text-slate-400">Coming Soon</p>

              <div className="mt-6 flex flex-1 flex-col justify-end">
                <span className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-3 text-sm font-semibold text-slate-500">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  Coming Soon
                </span>
              </div>
            </article>
          </Reveal>

          {/* Linux — coming soon */}
          <Reveal delay={200}>
            <article className="flex h-full flex-col rounded-3xl border border-white/[0.06] bg-ink-850/60 p-6 opacity-70">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-slate-500">
                <LinuxIcon className="h-7 w-7" />
              </span>

              <h3 className="mt-5 font-display text-xl font-semibold text-white">
                Linux
              </h3>
              <p className="mt-1.5 text-sm text-slate-400">Coming Soon</p>

              <div className="mt-6 flex flex-1 flex-col justify-end">
                <span className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-3 text-sm font-semibold text-slate-500">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  Coming Soon
                </span>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-10 max-w-2xl">
          <p
            className={cn(
              'text-center text-xs leading-relaxed text-slate-600',
            )}
          >
            Please respect copyright, platform terms of service, and applicable
            laws when downloading content.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
