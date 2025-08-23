import type { ReactNode } from 'react';

type Variant = 'info' | 'tip' | 'warning';

const variantStyles: Record<Variant, { ring: string; badge: string; icon: ReactNode; label: string }> = {
  info: {
    ring: 'from-sky-400/40 via-sky-400/20 to-transparent',
    badge: 'bg-sky-400/20 text-sky-200 border-sky-300/30',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
    ),
    label: 'Info',
  },
  tip: {
    ring: 'from-neon-lime/40 via-neon-green/20 to-transparent',
    badge: 'bg-neon-green/20 text-white border-neon-green/40',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m20 6-11 11-5-5"/></svg>
    ),
    label: 'Tip',
  },
  warning: {
    ring: 'from-amber-400/40 via-amber-400/20 to-transparent',
    badge: 'bg-amber-400/20 text-amber-100 border-amber-300/30',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
    ),
    label: 'Warning',
  },
};

export default function Callout({ variant = 'info', children }: { variant?: Variant; children: ReactNode }) {
  const styles = variantStyles[variant];
  return (
    <div className="relative rounded-lg border border-white/10 bg-white/[0.04] p-4 overflow-hidden">
      <div className={`pointer-events-none absolute -inset-[1px] rounded-lg bg-gradient-to-br ${styles.ring} opacity-30`} />
      <div className="relative flex items-start gap-3">
        <span className={`inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs border ${styles.badge}`}>
          {styles.icon}
          <span className="font-medium tracking-wide">{styles.label}</span>
        </span>
        <div className="text-white/80 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
