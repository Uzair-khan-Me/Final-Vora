import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  FileText,
  HardDrive,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import DownloadLink from '@/components/DownloadLink';
import {
  DEVELOPER_EMAIL,
  DEVELOPER_NAME,
  SITE_NAME,
  getSiteUrl,
} from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy',
  description: `${SITE_NAME} is a standalone video downloader for Android, designed around device-first processing. Learn how the app and this website work.`,
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: `Privacy | ${SITE_NAME}`,
    description: `${SITE_NAME} is a standalone video downloader designed around device-first processing.`,
    url: '/privacy',
  },
};

const SECTIONS = [
  {
    icon: Smartphone,
    title: 'A standalone application',
    body: (
      <>
        {SITE_NAME} is designed as a standalone application for Android. It is
        not a web-based service: the app runs on your device and is distributed
        as an APK from the project&apos;s GitHub Releases page. You download it,
        install it, and it works without requiring this website to function.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: 'Processing on your device',
    body: (
      <>
        The {SITE_NAME} experience is centered around processing on your own
        device. It does not present itself as a cloud-based video-processing
        service. Because the workflow is device-first, the videos you work with
        are handled locally by the app.
      </>
    ),
  },
  {
    icon: HardDrive,
    title: 'You keep control',
    body: (
      <>
        Downloaded content is saved on your device, where you can play, manage,
        or delete it on your own terms. {SITE_NAME} is designed around the idea
        that you keep control of your content.
      </>
    ),
  },
  {
    icon: FileText,
    title: 'About this website',
    body: (
      <>
        This website is a static page. It does not collect personal
        information, require an account, use analytics, or process, upload, or
        store your videos. The only external destinations are the official
        GitHub-hosted APK and the developer&apos;s portfolio.
      </>
    ),
  },
];

export default function PrivacyPage() {
  const siteUrl = getSiteUrl();

  return (
    <div className="pt-32 pb-20 sm:pt-40">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>

        <p className="eyebrow mt-8">
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          Privacy
        </p>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Built around your privacy.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
          {SITE_NAME} is built around a simple idea: your videos stay on your
          device. This page explains how the app and this website are designed
          to work — without inventing policies for things the product
          doesn&apos;t do.
        </p>

        <div className="mt-12 space-y-6">
          {SECTIONS.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-white/[0.07] bg-ink-850/80 p-6 shadow-card sm:p-7"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-gradient-to-br from-violet-500/15 to-indigo-500/10 text-violet-300">
                  <section.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold text-white">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {section.body}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:p-7">
          <h2 className="font-display text-lg font-semibold text-white">
            Downloading responsibly
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Please respect copyright, platform terms of service, and applicable
            laws when downloading content. {SITE_NAME} is a tool — how you use
            it is your responsibility.
          </p>
        </section>

        <section className="mt-10 flex flex-col items-start gap-5 rounded-2xl border border-violet-400/20 bg-gradient-to-b from-violet-500/[0.07] to-ink-850/80 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <h2 className="font-display text-lg font-semibold text-white">
              Questions about {SITE_NAME}?
            </h2>
            <p className="mt-1.5 text-sm text-slate-400">
              Contact the developer, {DEVELOPER_NAME}, at{' '}
              <a
                href={`mailto:${DEVELOPER_EMAIL}`}
                className="text-violet-300 transition-colors hover:text-violet-200"
              >
                {DEVELOPER_EMAIL}
              </a>
              .
            </p>
          </div>
          <DownloadLink className="shrink-0">Download APK</DownloadLink>
        </section>

        <p className="mt-10 text-xs leading-relaxed text-slate-600">
          Last reviewed: {new Date().getFullYear()} &middot; This page describes
          how {SITE_NAME} is designed. For the latest release information, see
          the project&apos;s GitHub page at{' '}
          <a
            href="https://github.com/Uzair-khan-Me/Final-Vora"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 underline decoration-slate-700 underline-offset-2 transition-colors hover:text-slate-300"
          >
            {siteUrl.replace(/^https?:\/\//, '')}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
