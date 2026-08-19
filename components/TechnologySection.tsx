import { Code2, Cpu, Layers } from 'lucide-react';
import Reveal from '@/components/Reveal';

const POINTS = [
  {
    icon: Code2,
    label: 'Built with Kotlin',
    description: 'Developed in Kotlin as a native Android application.',
  },
  {
    icon: Cpu,
    label: 'Native & standalone',
    description: 'A self-contained Android experience — no website required.',
  },
  {
    icon: Layers,
    label: 'On-device workflow',
    description: 'Designed for a seamless workflow that runs on your device.',
  },
];

export default function TechnologySection() {
  return (
    <section
      id="technology"
      aria-labelledby="technology-heading"
      className="scroll-mt-24 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-violet-500/[0.06] via-ink-850/70 to-ink-850/70 p-8 shadow-card sm:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-xl">
                <p className="eyebrow">Technology</p>
                <h2
                  id="technology-heading"
                  className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                >
                  Built with Kotlin.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-400">
                  Final Vora is developed in Kotlin as a native, standalone
                  Android application — designed for a seamless on-device
                  workflow.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className="font-display flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.1] bg-gradient-to-br from-violet-500 to-indigo-600 text-2xl font-bold text-white shadow-glow-sm"
                  aria-hidden="true"
                >
                  K
                </span>
                <div className="text-sm text-slate-500">
                  <p className="font-medium text-slate-300">Kotlin</p>
                  <p>Native Android</p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {POINTS.map((point) => (
                <div
                  key={point.label}
                  className="rounded-2xl border border-white/[0.06] bg-ink-900/50 p-5"
                >
                  <point.icon className="h-5 w-5 text-violet-300" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    {point.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
