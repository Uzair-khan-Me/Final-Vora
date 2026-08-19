'use client';

import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LogoLink } from '@/components/Logo';

const links = [
  { label: 'Downloader', href: '#download' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Privacy', href: '#privacy' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 border-b transition duration-300', scrolled || open ? 'border-white/[0.06] bg-ink-950/85 backdrop-blur-xl' : 'border-transparent bg-transparent')}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <LogoLink />
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => <li key={link.href}><a href={link.href} className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/[0.04] hover:text-white">{link.label}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#download" className="btn-primary hidden py-2.5 sm:inline-flex"><Download className="h-4 w-4" /> Start downloading</a>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-200 md:hidden">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </nav>
      {open && <div className="border-t border-white/[0.06] bg-ink-950/95 px-5 py-4 md:hidden">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/[0.05]">{link.label}</a>)}</div>}
    </header>
  );
}
