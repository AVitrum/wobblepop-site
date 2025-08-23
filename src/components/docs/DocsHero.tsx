export default function DocsHero() {
  const PLAY_URL = (import.meta as any).env?.VITE_PLAY_URL || 'https://play.google.com/store/apps/details?id=com.WobblePop.DropKick&hl=en-US&ah=8dsXu7cwRpmfEwX8112gwGaq_kU';
  return (
    <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-transparent p-8 sm:p-10 shadow-lg animate-fadeIn">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(124,255,78,0.12),transparent_60%)]" />
      <div className="relative">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient-neon">
          WobblePop Docs
        </h1>
        <p className="mt-3 text-base sm:text-lg text-white/80 max-w-2xl">
          Mobile-only arcade football. Download from Play Market and choose your control style: Simple (drag & release like Angry Birds) or Swipe (draw a path the ball will follow).
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-neon-green/20 hover:bg-neon-green/30 border border-neon-green/40 text-white focus-accent hover-glow transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="m10 8 6 4-6 4V8z"/></svg>
            <span>Get it on Google Play</span>
            <span className="border-beam" />
          </a>
          {/*<a*/}
          {/*  href="#getting-started"*/}
          {/*  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 focus-accent transition-colors"*/}
          {/*>*/}
          {/*  Start reading*/}
          {/*</a>*/}
        </div>
      </div>
    </header>
  );
}
