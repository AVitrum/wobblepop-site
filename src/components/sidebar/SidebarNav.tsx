import { NavLink } from 'react-router-dom';

interface SidebarNavProps {
    setIsOpen: (isOpen: boolean) => void;
}

export default function SidebarNav({ setIsOpen }: SidebarNavProps) {
    const navItems = [
        { to: '/game', label: 'Game' },
        // { to: '/docs', label: 'Documentation' },
    ];

    const pdfFile = `${import.meta.env.BASE_URL}PrivacyPolicy_WobblePop_Dropkick.pdf`;

    return (
        <ul className="flex flex-col gap-3">
            {navItems.map(({ to, label }, index) => (
                <li key={to} className="animate-fade-in-up" style={{ animationDelay: `${index * 80}ms` }}>
                    <NavLink
                        to={to}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => `relative cursor-pointer rounded-lg pl-3 pr-5 py-3 font-medium text-sm tracking-wide transition-all duration-300 flex items-center gap-3 focus-accent overflow-hidden group
                        ${isActive ? 'text-white shadow-glow bg-gradient-to-br from-white/10 via-white/5 to-transparent' : 'text-white/60 hover:text-white hover:bg-white/5'}
                        `}
                    >
                        {({ isActive }) => (
                            <>
                                <span className={`absolute left-0 top-0 h-full w-[3px] rounded-r-full bg-gradient-to-b from-neon-lime via-neon-green to-neon-lime transition-opacity duration-300 ${isActive ? 'opacity-90' : 'opacity-0 group-hover:opacity-60'}`}></span>
                                <span className="relative z-10">{label}</span>
                            </>
                        )}
                    </NavLink>
                </li>
            ))}
            <li className="animate-fade-in-up" style={{ animationDelay: `${navItems.length * 80}ms` }}>
                <a
                    href={pdfFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative cursor-pointer rounded-lg pl-3 pr-5 py-3 font-medium text-sm tracking-wide transition-all duration-300 flex items-center gap-3 focus-accent text-white/60 hover:text-white hover:bg-white/5"
                >
                    <span className="absolute left-0 top-0 h-full w-[3px] rounded-r-full bg-gradient-to-b from-neon-lime via-neon-green to-neon-lime opacity-0 group-hover:opacity-60" />
                    <span className="relative z-10">Privacy Policy</span>
                </a>
            </li>
        </ul>
    );
}
