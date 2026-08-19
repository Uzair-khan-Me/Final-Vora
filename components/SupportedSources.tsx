import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YoutubeIcon,
} from '@/components/BrandIcons';

const SOURCES = [
  { name: 'YouTube', Icon: YoutubeIcon },
  { name: 'Facebook', Icon: FacebookIcon },
  { name: 'TikTok', Icon: TikTokIcon },
  { name: 'Instagram', Icon: InstagramIcon },
];

export default function SupportedSources() {
  return (
    <section
      aria-labelledby="sources-heading"
      className="scroll-mt-24 border-y border-white/[0.06] bg-ink-900/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="sources-heading"
          eyebrow="Supported sources"
          title="Your favorite platforms, one simple downloader."
          description="Copy a link from any of these services and let Final Vora handle the rest — right on your device."
        />

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {SOURCES.map((source, i) => (
            <Reveal key={source.name} delay={i * 80}>
              <div className="group flex flex-col items-center gap-3 rounded-2xl border border-white/[0.07] bg-ink-850/70 px-4 py-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-ink-800/80 hover:shadow-glow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-200 transition-colors duration-300 group-hover:text-white">
                  <source.Icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium text-slate-200">
                  {source.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-xs leading-relaxed text-slate-600">
            Platform names and logos belong to their respective owners. Final
            Vora is not affiliated with, endorsed by, or sponsored by any of
            these platforms.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
