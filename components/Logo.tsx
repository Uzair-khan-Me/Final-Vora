import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  markClassName?: string;
};

/**
 * Final Vora wordmark — the official Vora logo mark alongside the brand name.
 */
export default function Logo({ className, markClassName }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img
        src="/images/vora-logo.png"
        alt=""
        width={34}
        height={36}
        aria-hidden="true"
        className={cn(
          'h-9 w-auto object-contain drop-shadow-[0_0_14px_rgba(139,92,246,0.35)]',
          markClassName,
        )}
      />
      <span className="font-display text-[1.05rem] font-semibold tracking-tight text-white">
        Final&nbsp;Vora
      </span>
    </span>
  );
}

export function LogoLink({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Final Vora — home"
      className={cn(
        'rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950',
        className,
      )}
    >
      <Logo />
    </Link>
  );
}
