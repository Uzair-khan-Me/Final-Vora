import { cn } from '@/lib/utils';
import Reveal from '@/components/Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'center' | 'left';
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  id,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'mx-auto max-w-2xl',
        align === 'center' ? 'text-center' : 'text-left sm:mx-0',
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={id}
        className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
