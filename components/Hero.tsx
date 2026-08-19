import { Check, Lock, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import DownloadLink from '@/components/DownloadLink';
import {
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
  FacebookIcon,
  AndroidIcon,
} from '@/components/BrandIcons';

function enter(delay: string) {
  return { animationDelay: delay };
}

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-[80%] rounded-full bg-violet-600/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 right-[-6rem] h-80 w-80 rounded-full bg-sky-600/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy */}
        <div className="max-w-xl">
          <p
            className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-200"
            style={enter('0ms')}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Now available for Android
          </p>

          <h1
            className="animate-fade-up mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl"
            style={enter('60ms')}
          >
            Download videos.
            <br />
            <span className="gradient-text">Keep them yours.</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg"
            style={enter('120ms')}
          >
            Final Vora is a fast, private, standalone video downloader for
            Android. It works with YouTube, Facebook, TikTok, and Instagram —
            and it keeps the whole experience on your device.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={enter('180ms')}
          >
            <DownloadLink size="lg">Download for Android</DownloadLink>
            <a
              href="#features"
              className="btn-ghost px-7 py-4 text-base"
            >
              Explore Final Vora
            </a>
          </div>

          <p
            className="animate-fade-up mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500"
            style={enter('240ms')}
          >
            <span className="inline-flex items-center gap-1.5">
              <AndroidIcon className="h-4 w-4 text-slate-400" />
              Android
            </span>
            <span>APK</span>
            <span>160 MB</span>
            <span className="text-slate-600">•</span>
            <span>Windows &amp; Linux coming soon</span>
          </p>

          <ul
            className="animate-fade-up mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400"
            style={enter('300ms')}
          >
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-violet-300" aria-hidden="true" />
              Device-first privacy
            </li>
            <li className="inline-flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-violet-300" aria-hidden="true" />
              On-device processing
            </li>
            <li className="inline-flex items-center gap-2">
              <Zap className="h-4 w-4 text-violet-300" aria-hidden="true" />
              Fast &amp; simple
            </li>
          </ul>
        </div>

        {/* Phone mockup — abstract product visual, not a real screenshot */}
        <div className="relative mx-auto w-full max-w-[340px] animate-fade-up sm:max-w-[360px]">
          <div
            aria-hidden="true"
            className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-violet-600/25 via-indigo-600/10 to-sky-600/20 blur-3xl"
          />

          {/* Frame */}
          <div className="relative rounded-[2.75rem] border border-white/10 bg-gradient-to-b from-ink-700 to-ink-900 p-2 shadow-glow">
            <div className="relative overflow-hidden rounded-[2.25rem] bg-ink-950">
              {/* Notch */}
              <div className="absolute left-1/2 top-2.5 h-6 w-28 -translate-x-1/2 rounded-full bg-ink-950" />

              <div className="px-5 pt-12 pb-6">
                {/* Abstract "video" card */}
                <div className="rounded-2xl border border-white/[0.07] bg-ink-800/80 p-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-slate-600" />
                      Link ready
                    </span>
                    <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                      On device
                    </span>
                  </div>

                  <div className="mt-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/30 via-indigo-600/20 to-ink-700">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
                      <svg
                        viewBox="0 0 24 24"
                        className="ml-0.5 h-5 w-5 text-white"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M8 5.14v13.72c0 .83.9 1.34 1.62.91l10.67-6.86a1.06 1.06 0 0 0 0-1.82L9.62 4.23A1.06 1.06 0 0 0 8 5.14Z" />
                      </svg>
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Processing locally</span>
                      <span className="font-medium text-slate-200">82%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
                    </div>
                  </div>
                </div>

                {/* Saved row */}
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-ink-800/80 p-3.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Saved to your device
                    </p>
                    <p className="text-xs text-slate-500">
                      No upload · No account · No cloud
                    </p>
                  </div>
                </div>

                {/* Platform chips */}
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {[
                    { label: 'YouTube', Icon: YoutubeIcon },
                    { label: 'Facebook', Icon: FacebookIcon },
                    { label: 'TikTok', Icon: TikTokIcon },
                    { label: 'Instagram', Icon: InstagramIcon },
                  ].map(({ label, Icon }) => (
                    <span
                      key={label}
                      className="flex items-center justify-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.02] py-2 text-slate-400"
                      title={label}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <div className="animate-float-slow absolute -left-8 top-16 hidden items-center gap-2 rounded-xl border border-white/10 bg-ink-800/90 px-3.5 py-2.5 shadow-card backdrop-blur sm:flex">
            <Lock className="h-4 w-4 text-violet-300" aria-hidden="true" />
            <span className="text-xs font-medium text-slate-200">
              Private by design
            </span>
          </div>

          <div className="animate-float-slow absolute -right-4 bottom-24 hidden items-center gap-2 rounded-xl border border-white/10 bg-ink-800/90 px-3.5 py-2.5 shadow-card backdrop-blur [animation-delay:1.5s] sm:flex">
            <AndroidIcon className="h-4 w-4 text-emerald-300" />
            <span className="text-xs font-medium text-slate-200">
              Standalone app
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
