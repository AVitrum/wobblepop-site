interface ControlItem {
  action: string;
  keys: string[];
}

const DEFAULT_CONTROLS: ControlItem[] = [
  { action: 'Move', keys: ['W', 'A', 'S', 'D'] },
  { action: 'Kick / Interact', keys: ['Space'] },
  { action: 'Sprint', keys: ['Shift'] },
  { action: 'Pause', keys: ['Esc'] },
];

export default function ControlsGrid({ items = DEFAULT_CONTROLS }: { items?: ControlItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {items.map((it) => (
        <div key={it.action} className="relative rounded-lg border border-white/10 bg-white/[0.04] p-4 group hover:shadow-glow transition">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_70%_30%,rgba(124,255,78,0.14),transparent_70%)]" />
          <div className="relative">
            <div className="text-xs uppercase tracking-wide text-white/50">{it.action}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {it.keys.map((k) => (
                <kbd key={k} className="px-2 py-1 rounded-md bg-black/50 border border-white/10 text-white/90 text-xs shadow-inner">
                  {k}
                </kbd>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

