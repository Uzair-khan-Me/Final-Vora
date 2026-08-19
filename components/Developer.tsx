import Image from 'next/image';
import { ExternalLink, Mail } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { GitHubIcon } from '@/components/BrandIcons';
import {
  DEVELOPER_EMAIL,
  DEVELOPER_NAME,
  DEVELOPER_PORTFOLIO,
  DEVELOPER_ROLE,
  GITHUB_REPO,
} from '@/lib/site';

export default function Developer() {
  return (
    <section
      id="developer"
      aria-labelledby="developer-heading"
      className="scroll-mt-24 border-y border-white/[0.06] bg-ink-900/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-[auto_1fr]">
          {/* Portrait */}
          <Reveal className="mx-auto">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-600/30 to-sky-600/20 blur-2xl"
              />
              <Image
                src="/images/uzair-ali.jpg"
                alt={`${DEVELOPER_NAME} — ${DEVELOPER_ROLE}`}
                width={864}
                height={1184}
                sizes="(min-width: 768px) 240px, 200px"
                className="h-56 w-44 rounded-3xl border border-white/10 object-cover shadow-card sm:h-64 sm:w-48"
                priority={false}
              />
            </div>
          </Reveal>

          {/* Details */}
          <Reveal delay={100}>
            <p className="eyebrow">Developer</p>
            <h2
              id="developer-heading"
              className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              {DEVELOPER_NAME}
            </h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider text-violet-300">
              {DEVELOPER_ROLE}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
              Uzair Ali is a developer and SEO specialist who builds practical,
              privacy-conscious software and search-friendly websites. Final
              Vora reflects that focus — useful tools that respect the user and
              keep control where it belongs: with them.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={DEVELOPER_PORTFOLIO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Portfolio
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${DEVELOPER_EMAIL}`}
                className="btn-ghost"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact Developer
              </a>
              <a
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:border-white/20 hover:bg-white/[0.07] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70"
                aria-label="Final Vora on GitHub"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
