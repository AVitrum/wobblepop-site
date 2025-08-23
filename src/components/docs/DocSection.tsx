import type { ReactNode } from 'react';

interface DocSectionProps {
  id?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function DocSection({ id, title, description, children }: DocSectionProps) {
  return (
    <section id={id} className="relative rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8 shadow-lg animate-fadeIn">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(124,255,78,0.08),transparent_60%)]" />
      <div className="relative">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-white flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-neon-lime to-neon-green shadow-glow" />
          {title}
        </h2>
        {description ? (
          <p className="mt-2 text-white/75 max-w-2xl">{description}</p>
        ) : null}
        <div className="mt-5">
          {children}
        </div>
      </div>
    </section>
  );
}

