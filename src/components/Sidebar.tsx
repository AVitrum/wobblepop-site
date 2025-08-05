import { NavLink } from 'react-router-dom';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
    const navItems = [
        { to: '/game', label: 'Game' },
        { to: '/docs', label: 'Documentation' },
        { to: '/policy', label: 'Privacy Policy' },
    ];

    return (
        <>
            {/* Backdrop for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
            <nav
                className={`bg-gradient-to-b from-green-700 to-green-900 text-white min-h-screen p-4 flex flex-col transition-transform duration-300 ease-in-out
        fixed md:relative inset-y-0 left-0 z-30
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-64`}
            >
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-bold tracking-wider select-none">Dropkick</h2>
                    <button
                        className="p-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 md:hidden"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close sidebar"
                    >
                        <span className="text-2xl">&times;</span>
                    </button>
                </div>

                <ul className="flex flex-col gap-4">
                    {navItems.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `cursor-pointer rounded-lg px-4 py-3 font-semibold transition-all duration-200 flex items-center gap-4
                                ${isActive
                                        ? 'bg-green-500 shadow-lg text-white'
                                        : 'hover:bg-green-800 hover:translate-x-1'
                                    }`
                                }
                            >
                                <span>{label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <footer className="mt-auto text-xs text-green-300 select-none">
                    © 2025 Dropkick Studios
                </footer>
            </nav>
        </>
    );
}