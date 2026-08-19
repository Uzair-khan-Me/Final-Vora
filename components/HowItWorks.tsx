import { ArrowRight, Copy, FolderDown, Smartphone } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const STEPS = [
  {
    icon: Copy,
    step: '01',
    title: 'Copy or share a video',
    description:
      'Open YouTube, Facebook, TikTok, or Instagram and copy the link to the video you want to keep.',
  },
  {
    icon: Smartphone,
    step: '02',
    title: 'Open Final Vora',
    description:
      'Paste the link in Final Vora and let it process the video directly on your device — not on a remote server.',
  },
  {
    icon: FolderDown,
    step: '03',
    title: 'Save it to your device',
    description:
      'Keep the video in your own library — offline, on your phone, and under your control.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="how-heading"
          eyebrow="How it works"
          title="From link to saved video in three steps."
          description="No sign-ups, no complicated settings. Final Vora is designed to get out of your way."
        />

        <div className="relative mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-12 hidden h-px bg-gradient-to-r from-violet-500/40 via-indigo-500/40 to-sky-500/40 md:block"
          />

          {STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 120}>
              <article className="relative h-full rounded-2xl border border-white/[0.07] bg-ink-850/80 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-glow-sm">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-gradient-to-br from-violet-500/15 to-indigo-500/10 text-violet-300">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-4xl font-semibold text-white/[0.08]">
                    {step.step}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>

                {i < STEPS.length - 1 ? (
                  <ArrowRight
                    className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-slate-600 md:block"
                    aria-hidden="true"
                  />
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
