import { APK_SIZE, APK_URL } from '@/lib/site';
import { cn } from '@/lib/utils';

type DownloadLinkProps = {
  /** Button label. */
  children: React.ReactNode;
  className?: string;
  /** When true, renders a large hero-style button. */
  size?: 'md' | 'lg';
  withMeta?: boolean;
};

/**
 * The single source of truth for the Android APK download. Every primary
 * download CTA on the site links straight to the GitHub-hosted APK — never
 * to an internal or fake path.
 */
export default function DownloadLink({
  children,
  className,
  size = 'md',
  withMeta = false,
}: DownloadLinkProps) {
  return (
    <a
      href={APK_URL}
      rel="noopener"
      className={cn(
        'btn-primary',
        size === 'lg' ? 'px-7 py-4 text-base' : 'px-5 py-3 text-sm',
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className={cn(size === 'lg' ? 'h-5 w-5' : 'h-4 w-4')}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v11" />
        <path d="m7.5 9.5 4.5 4.5 4.5-4.5" />
        <path d="M5 20h14" />
      </svg>
      {children}
      {withMeta ? (
        <span className="hidden font-medium text-white/70 sm:inline">
          · {APK_SIZE}
        </span>
      ) : null}
    </a>
  );
}
