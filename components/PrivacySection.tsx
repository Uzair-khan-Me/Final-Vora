import {
  Check,
  HardDrive,
  Lock,
  ShieldCheck,
  Smartphone,
  UserX,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

const POINTS = [
  {
    icon: Smartphone,
    title: 'Standalone by design',
    description:
      'Final Vora runs as a self-contained app — not a cloud video-processing service.',
  },
  {
    icon: ShieldCheck,
    title: 'Processing on your device',
    description:
      'The work happens on your phone. Your videos aren\u2019t uploaded to a remote server to be processed.',
  },
  {
    icon: HardDrive,
    title: 'You keep control',
    description:
      'Downloaded content lives on your device, where you can play, manage, or delete it on your terms.',
  },
  {
    icon: UserX,
    title: 'No account required',
    description:
      'There\u2019s no profile to create and nothing to sign into. The app is the whole product.',
  },
];

export default function PrivacySection() {
  return (
    <section
      id="privacy"
      aria-labelledby="privacy-heading"
      className="scroll-mt-24 border-y border-white/[0.06] bg-ink-900/50 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <Reveal>
          <p className="eyebrow">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Privacy
          </p>
          <h2
            id="privacy-heading"
            className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Built around your privacy.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Final Vora is designed as a standalone application, centered around
            processing on your device. It doesn&apos;t need to present itself as
            a cloud-based video-processing service — because it isn&apos;t one.
          </p>

          <ul className="mt-8 space-y-5">
            {POINTS.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-gradient-to-br from-violet-500/15 to-indigo-500/10 text-violet-300">
                  <point.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-medium text-white">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs leading-relaxed text-slate-600">
            We describe how the app is designed to work. As with any software,
            you can review what Final Vora does on your own device.
          </p>
        </Reveal>

        {/* Visual */}
        <Reveal delay={120}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-violet-600/15 to-sky-600/10 blur-2xl"
            />
            <div className="rounded-3xl border border-white/[0.07] bg-ink-850/80 p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-4">
                <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.1] bg-gradient-to-br from-violet-500/25 to-indigo-500/15">
                  <ShieldCheck className="h-8 w-8 text-violet-300" aria-hidden="true" />
                  <span className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/90 text-ink-950">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-white">
                    Your device does the work
                  </p>
                  <p className="text-sm text-slate-400">
                    Nothing leaves your phone unless you choose to save it.
                  </p>
                </div>
              </div>

              {/* Local-processing flow */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-ink-900/60 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-slate-200">
                    <Smartphone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white">Your device</p>
                    <p className="truncate text-xs text-slate-500">
                      Where the processing happens
                    </p>
                  </div>
                  <Lock className="ml-auto h-4 w-4 shrink-0 text-violet-300" aria-hidden="true" />
                </div>

                <div
                  aria-hidden="true"
                  className="mx-auto h-6 w-px bg-gradient-to-b from-violet-500/50 to-sky-500/50"
                />

                <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-ink-900/60 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-slate-200">
                    <HardDrive className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white">
                      Saved to your device
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      Offline, under your control
                    </p>
                  </div>
                  <Check className="ml-auto h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                </div>
              </div>

              <p className="mt-6 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-xs leading-relaxed text-slate-500">
                Final Vora is a standalone application. The website itself is a
                static page — it doesn&apos;t process, upload, or store your
                videos.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
