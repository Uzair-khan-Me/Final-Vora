import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  markClassName?: string;
};

/**
 * Final Vora wordmark. A simple geometric mark (a rounded square with a
 * downward "download" arrow) paired with the brand name.
 */
export default function Logo({ className, markClassName }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'relative inline-flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br from-violet-500 to-indigo-600 shadow-glow-sm',
          markClassName,
        )}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px] text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v11" />
          <path d="m7.5 9.5 4.5 4.5 4.5-4.5" />
          <path d="M5 20h14" />
        </svg>
      </span>
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
