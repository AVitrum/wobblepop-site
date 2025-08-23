type Mode = 'simple' | 'swipe';

function ModeCard({
  mode,
  title,
  subtitle,
  bullets,
}: {
  mode: Mode;
  title: string;
  subtitle: string;
  bullets: string[];
}) {
  return (
    <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-transparent backdrop-blur-sm p-5 flex flex-col gap-3 transition-all duration-400 hover:shadow-glow">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_70%_30%,rgba(124,255,78,0.14),transparent_70%)]" />
      <div className="relative flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg grid place-items-center bg-black/40 border border-white/10 shadow-inner">
          {mode === 'simple' ? <DragIcon /> : <SwipeIcon />}
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white tracking-wide">{title}</h3>
          <p className="text-white/70 text-sm">{subtitle}</p>
        </div>
      </div>
      <ul className="relative list-disc list-inside text-white/75 text-sm space-y-1 pl-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function MobileControls() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ModeCard
        mode="simple"
        title="Simple Mode"
        subtitle="Launch the ball like Angry Birds."
        bullets={[
          'Press and hold on the ball, drag to aim and set power, then release to shoot.',
          'Longer drag = more power; the arrow preview shows angle and strength.',
          'Curve slightly by arcing your drag before release.',
          'Best for quick shots and casual control.',
        ]}
      />
      <ModeCard
        mode="swipe"
        title="Swipe Mode"
        subtitle="Draw trajectory lines; the ball follows with momentum."
        bullets={[
          'Tap and hold, then draw a smooth path; release to execute.',
          'Use gentle curves for bend shots; tight curves slow the ball.',
          'Short, multi-segment paths give responsive jukes and feints.',
          'Best for precise dribbles and stylish curve finishes.',
        ]}
      />
    </div>
  );
}

function DragIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-white/80">
      <circle cx="7" cy="17" r="3" className="opacity-70" />
      <path d="M9 15l6-6" />
      <path d="M13 7h6v6" />
      <path d="M19 7l-7 7" className="opacity-70" />
    </svg>
  );
}

function SwipeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-white/80">
      <path d="M3 16c4-6 10-8 18-8" className="opacity-70" />
      <path d="M8 18c2-3 5-5 10-6" />
      <circle cx="6" cy="19" r="1" />
      <circle cx="18" cy="9" r="1" />
    </svg>
  );
}

