import Link from 'next/link';
import Logo from '@/components/Logo';
import { APK_URL, DEVELOPER_NAME, DEVELOPER_PORTFOLIO, GITHUB_REPO } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div><Link href="/" className="inline-block"><Logo /></Link><p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">A clean, private video downloader for the web. Save only content you own or have permission to download.</p></div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            <a href={APK_URL} className="transition hover:text-white">Android app</a>
            <a href={GITHUB_REPO} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
            <a href="/privacy" className="transition hover:text-white">Privacy</a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-xs text-slate-600 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Final Vora. Built by <a href={DEVELOPER_PORTFOLIO} className="hover:text-slate-400">{DEVELOPER_NAME}</a>.</p>
          <p>Respect copyright and each platform’s terms.</p>
        </div>
      </div>
    </footer>
  );
}
