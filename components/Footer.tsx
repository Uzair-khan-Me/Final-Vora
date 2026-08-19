import Link from 'next/link';
import Logo from '@/components/Logo';
import {
  DEVELOPER_NAME,
  DEVELOPER_PORTFOLIO,
  NAV_LINKS,
} from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Final Vora — home"
              className="inline-block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70"
            >
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              A standalone video downloader for Android — your videos, your
              device, your control.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Developer */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Developer
            </h3>
            <p className="mt-4 text-sm text-slate-400">
              Developed by{' '}
              <a
                href={DEVELOPER_PORTFOLIO}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70"
              >
                {DEVELOPER_NAME}
              </a>
            </p>
            <p className="mt-2 text-sm text-slate-500">
              <a
                href="/privacy"
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70"
              >
                Privacy
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {''}Final Vora. All rights reserved.
          </p>
          <p>
            Respect copyright and platform terms when downloading content.
          </p>
        </div>
      </div>
    </footer>
  );
}
