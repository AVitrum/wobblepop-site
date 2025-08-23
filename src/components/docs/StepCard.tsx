import type { ReactNode } from 'react';

interface StepCardProps {
  step: number;
  title: string;
  children?: ReactNode;
}

export default function StepCard({ step, title, children }: StepCardProps) {
  return (
    <div className="group relative rounded-lg border border-white/10 bg-white/[0.04] p-4 sm:p-5 transition-all hover:shadow-glow">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_70%_30%,rgba(124,255,78,0.14),transparent_70%)]" />
      <div className="relative flex items-start gap-4">
        <div className="shrink-0 mt-1 h-8 w-8 rounded-md bg-gradient-to-br from-neon-lime to-neon-green text-black font-bold grid place-items-center shadow-glow">
          {step}
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-white tracking-wide">{title}</h3>
          {children ? (
            <div className="mt-1 text-white/75 text-sm leading-relaxed">{children}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

