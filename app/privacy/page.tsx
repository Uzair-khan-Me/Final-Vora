import type { Metadata } from 'next';
import { Database, EyeOff, Link2, Server } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How Final Vora Web handles links and downloads.',
};

export default function PrivacyPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="eyebrow">Privacy</p>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">Clear, honest data handling.</h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-400">Final Vora Web has no user accounts and no application database. It still needs to process your link on the server to make a web download possible.</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {[
            [Link2, 'Submitted links', 'The link you enter is sent to this server and passed to yt-dlp to retrieve media information.'],
            [Server, 'Download relay', 'When you download, this server retrieves the selected public media stream and relays it to your browser.'],
            [Database, 'No app history', 'The application does not save links or download history in a database. Hosting access logs may still exist.'],
            [EyeOff, 'No ad tracking', 'The project does not include advertising pixels, analytics SDKs, or cross-site tracking code.'],
          ].map(([Icon, title, copy]) => {
            const ItemIcon = Icon as typeof Link2;
            return <article key={title as string} className="card p-6"><ItemIcon className="h-5 w-5 text-violet-300" /><h2 className="mt-5 font-display text-lg font-semibold text-white">{title as string}</h2><p className="mt-2 text-sm leading-relaxed text-slate-500">{copy as string}</p></article>;
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-amber-300/15 bg-amber-300/[0.05] p-6">
          <h2 className="font-display text-lg font-semibold text-white">For site operators</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">Reverse proxies and container platforms commonly log request URLs and IP addresses. Configure redaction and retention at the infrastructure layer. Keep yt-dlp updated and do not add analytics without updating this notice.</p>
        </div>

        <p className="mt-8 text-sm text-slate-600">Last updated: August 19, 2026.</p>
      </div>
    </section>
  );
}
