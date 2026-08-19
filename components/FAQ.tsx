import { ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { APK_SIZE } from '@/lib/site';

const FAQS = [
  {
    q: 'What is Final Vora?',
    a: 'Final Vora is a standalone video downloader for Android that lets you save videos from YouTube, Facebook, TikTok, and Instagram. It is built in Kotlin and designed so that video processing happens on your own device.',
  },
  {
    q: 'What is the Final Vora APK?',
    a: 'The Final Vora APK is the Android installation package for the app. It is distributed as a direct download from the official GitHub Releases page, so you download and install it on your device yourself.',
  },
  {
    q: 'How do I download Final Vora for Android?',
    a: `Use the Download APK button on this page. It takes you to the GitHub-hosted APK (about ${APK_SIZE}). Download the file, then open it on your Android device to install it. If prompted, allow installation from your browser or file manager.`,
  },
  {
    q: 'Does Final Vora support YouTube, Facebook, TikTok and Instagram?',
    a: 'Yes. Final Vora is designed to download videos from YouTube, Facebook, TikTok, and Instagram.',
  },
  {
    q: 'Can Final Vora download YouTube videos?',
    a: 'Yes. YouTube is one of the platforms Final Vora supports, alongside Facebook, TikTok, and Instagram.',
  },
  {
    q: 'Is Final Vora a free video downloader?',
    a: 'The Final Vora APK is free to download from the official GitHub Releases page.',
  },
  {
    q: 'Is Final Vora the same as yt-dlp?',
    a: 'No. yt-dlp is a free, open-source command-line video downloader for desktops and servers. Final Vora is a standalone Android app built with Kotlin that gives you a simple, on-device workflow on your phone.',
  },
  {
    q: 'Why choose an app instead of a command-line tool like yt-dlp?',
    a: 'If you want to download videos on your phone without using a terminal, Final Vora offers a tap-to-download experience. Command-line tools like yt-dlp are powerful, but they are built for desktops and scripting.',
  },
  {
    q: 'Is Final Vora available for Windows?',
    a: 'Not yet. A Windows version is coming soon. The Android app is available now.',
  },
  {
    q: 'Is Final Vora available for Linux?',
    a: 'Not yet. A Linux version is coming soon. The Android app is available now.',
  },
  {
    q: 'Where is Final Vora developed?',
    a: 'Final Vora is developed in Kotlin as a native Android application. The APK is distributed through the project\u2019s GitHub Releases page.',
  },
  {
    q: 'Does Final Vora process videos on the device?',
    a: 'Yes. Final Vora is designed as a standalone application, and its workflow is centered around processing on your own device rather than on a remote server.',
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Frequently asked questions."
          description="Straight answers about Final Vora, the APK, and what\u2019s coming next."
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i * 40, 160)}>
              <details className="group rounded-2xl border border-white/[0.07] bg-ink-850/80 shadow-card transition-colors duration-300 hover:border-white/[0.14] open:border-violet-400/25">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 sm:px-6">
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-5 pb-5 sm:px-6">
                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.a}
                  </p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
