import { NavLink, useLocation } from 'react-router-dom';

interface NavbarProps {
  setSidebarOpen: (open: boolean) => void;
}

export default function Navbar({ setSidebarOpen }: NavbarProps) {
  const location = useLocation();
  const navItems = [
    { to: '/game', label: 'Game' },
    { to: '/docs', label: 'Documentation' },
  ];
  const pdfFile = `${import.meta.env.BASE_URL}PrivacyPolicy_WobblePop_Dropkick.pdf`;
  return (
    <header className="hidden md:flex items-center justify-between gap-10 px-12 h-20 bg-black/70 backdrop-blur-2xl border-b border-white/10 relative z-30 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-neon-green/40 after:to-transparent">
      <div className="flex items-center gap-10">
        <span className="relative inline-flex items-center gap-2 select-none font-jetbrains text-xl font-semibold tracking-widest">
          <span className="text-gradient-neon drop-shadow-[0_0_6px_rgba(124,255,78,0.6)]">DROPKICK</span>
          <span className="hidden lg:inline-block px-2 py-0.5 text-[10px] rounded bg-white/5 border border-white/10 uppercase tracking-[0.2em] font-medium text-white/60">beta</span>
        </span>
        <nav className="flex items-center gap-1">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `relative px-5 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-300 outline-none focus-accent group
                ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}
              `}
            >
              <span className="relative z-10">{label}</span>
              <span className={`absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 via-white/5 to-transparent`} />
              {/* Active underline */}
              <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-neon-lime via-neon-green to-neon-lime shadow-glow transition-all duration-500 ${location.pathname === to ? 'w-10' : 'group-hover:w-5'}`}></span>
            </NavLink>
          ))}
          <a
            href={pdfFile}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-5 py-2 rounded-md text-sm font-medium tracking-wide text-white/60 hover:text-white transition-all duration-300 focus-accent"
          >
            <span className="relative z-10">Privacy Policy</span>
            <span className="absolute inset-0 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden p-2 rounded-md text-white/60 hover:text-white hover:bg-white/10 focus-accent"
          aria-label="Open menu"
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
