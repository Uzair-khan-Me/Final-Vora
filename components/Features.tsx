import {
  Code2,
  Globe,
  MousePointerClick,
  ShieldCheck,
  Smartphone,
  Zap,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Device-first privacy',
    description:
      'Your videos are processed on your phone, not on someone else\u2019s server. What you download stays with you.',
  },
  {
    icon: Zap,
    title: 'Fast downloads',
    description:
      'A straightforward pipeline that saves videos quickly — no remote queues, no waiting for a website to finish.',
  },
  {
    icon: MousePointerClick,
    title: 'Simple workflow',
    description:
      'Copy a link, open Final Vora, save. Three short steps between you and the video you want.',
  },
  {
    icon: Smartphone,
    title: 'Standalone experience',
    description:
      'One self-contained app. No browser uploads, no cloud account, no dependency on a website to work.',
  },
  {
    icon: Globe,
    title: 'Multi-platform support',
    description:
      'Download from YouTube, Facebook, TikTok, and Instagram through a single, consistent flow.',
  },
  {
    icon: Code2,
    title: 'Built with Kotlin',
    description:
      'A native Android experience written in Kotlin and designed around a seamless, on-device workflow.',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="features-heading"
          eyebrow="Why Final Vora"
          title={
            <>
              Everything you need.
              <br className="hidden sm:block" /> Nothing you don&apos;t.
            </>
          }
          description="Final Vora keeps video downloading simple and keeps the work on your device. No accounts, no cloud processing, no clutter."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 90}>
              <article className="group h-full rounded-2xl border border-white/[0.07] bg-ink-850/80 p-6 shadow-card transition-colors duration-300 hover:border-white/[0.14] hover:bg-ink-800/80">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-gradient-to-br from-violet-500/15 to-indigo-500/10 text-violet-300 transition-transform duration-300 group-hover:scale-105">
                  <feature.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
