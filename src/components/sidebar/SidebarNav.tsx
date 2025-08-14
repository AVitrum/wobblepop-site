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
        <ul className="flex flex-col gap-4">
            {navItems.map(({ to, label }, index) => (
                <li key={to} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <NavLink
                        to={to}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `cursor-pointer rounded-lg px-4 py-3 font-semibold transition-all duration-200 flex items-center gap-4
                        ${isActive
                                ? 'bg-white/20 shadow-lg text-white'
                                : 'hover:bg-white/10 hover:translate-x-1'
                            }`
                        }
                    >
                        <span>{label}</span>
                    </NavLink>
                </li>
            ))}
            <li className="animate-fade-in-up" style={{ animationDelay: `${navItems.length * 100}ms` }}>
                <a
                    href={pdfFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded-lg px-4 py-3 font-semibold transition-all duration-200 flex items-center gap-4 hover:bg-white/10 hover:translate-x-1"
                >
                    <span>Privacy Policy</span>
                </a>
            </li>
        </ul>
    );
}
