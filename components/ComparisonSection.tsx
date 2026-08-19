import { Check, Minus, Smartphone, Terminal } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { AndroidIcon } from '@/components/BrandIcons';

const APP_POINTS = [
  'Tap-to-download on your phone',
  'No terminal, flags, or setup',
  'Runs fully on your device',
  'Built with Kotlin for Android',
];

const CLI_POINTS = [
  'Runs in a terminal on desktop or server',
  'Powerful, but text-based',
  'Great for scripts and power users',
  'Not designed as a phone app',
];

export default function ComparisonSection() {
  return (
    <section
      id="compare"
      aria-labelledby="compare-heading"
      className="scroll-mt-24 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="compare-heading"
          eyebrow="Video downloader, simplified"
          title={
            <>
              An app-first alternative to the command line.
            </>
          }
          description="You don't need a terminal to save a video. Final Vora brings a free video downloader to your phone — with the same simple goal, none of the setup."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {/* Final Vora */}
          <Reveal>
            <article className="relative h-full rounded-3xl border border-violet-400/25 bg-gradient-to-b from-violet-500/[0.08] to-ink-850/80 p-7 shadow-glow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-emerald-300">
                  <AndroidIcon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-semibold text-white">
                  Final Vora
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                A standalone video downloader for Android. Copy a link, open
                the app, and save the video to your device.
              </p>
              <ul className="mt-6 space-y-3">
                {APP_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Command-line tools */}
          <Reveal delay={120}>
            <article className="relative h-full rounded-3xl border border-white/[0.07] bg-ink-850/70 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-slate-400">
                  <Terminal className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-semibold text-white">
                  Command-line tools
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Tools like yt-dlp are free, open-source programs for
                downloading videos from YouTube and many other sites — driven
                entirely from a terminal.
              </p>
              <ul className="mt-6 space-y-3">
                {CLI_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-slate-500">
                      <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <p className="text-center text-sm leading-relaxed text-slate-500">
            yt-dlp is a free, open-source command-line program for downloading
            videos from YouTube and other sites — excellent for desktops and
            automation. Final Vora takes the same core idea, a{' '}
            <span className="text-slate-300">free video downloader</span>, and
            wraps it in a simple Android app that keeps everything on your
            device. If you want a YouTube video downloader you can use without
            a terminal, that&apos;s what Final Vora is built for.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-4 py-2 text-xs text-slate-400">
            <Smartphone className="h-3.5 w-3.5 text-violet-300" aria-hidden="true" />
            No desktop needed — Final Vora runs where your videos are: on your
            phone.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
