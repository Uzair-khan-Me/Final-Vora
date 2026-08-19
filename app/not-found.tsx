import Link from 'next/link';
import Logo from '@/components/Logo';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
      <Logo />
      <p className="mt-8 font-display text-7xl font-semibold tracking-tight text-white">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-white">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="btn-primary mt-8"
      >
        Back to Final Vora
      </Link>
    </div>
  );
}
