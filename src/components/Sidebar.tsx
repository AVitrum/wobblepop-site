import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const navItems = [
        { to: '/game', label: 'Game' },
        { to: '/docs', label: 'Documentation' },
        { to: '/policy', label: 'Privacy Policy' },
    ];

    return (
        <nav
            className={`bg-gradient-to-b from-green-700 to-green-900 text-white min-h-screen p-4 flex flex-col transition-all duration-300 ease-in-out
      ${collapsed ? 'w-20' : 'w-64'}`}
        >
            <div className="flex items-center justify-between mb-10">
                {!collapsed && (
                    <h2 className="text-2xl font-bold tracking-wider select-none">Dropkick</h2>
                )}
                <button
                    className="p-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                    onClick={() => setCollapsed(c => !c)}
                    aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                >
                    <span className="text-2xl">{collapsed ? '>' : '<'}</span>
                </button>
            </div>

            <ul className="flex flex-col gap-4">
                {navItems.map(({ to, label }) => (
                    <li key={to}>
                        <NavLink
                            to={to}
                            className={({ isActive }) =>
                                `cursor-pointer rounded-lg px-4 py-3 font-semibold transition-all duration-200 flex items-center gap-4
                                ${collapsed ? 'justify-center' : ''}
                                ${isActive
                                    ? 'bg-green-500 shadow-lg text-white'
                                    : 'hover:bg-green-800 hover:translate-x-1'
                                }`
                            }
                        >
                            <span className={collapsed ? 'text-2xl' : 'hidden'}>{label.charAt(0)}</span>
                            <span className={collapsed ? 'hidden' : 'block'}>{label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>

            <footer className={`mt-auto text-xs text-green-300 select-none ${collapsed ? 'hidden' : ''}`}>
                © 2025 Dropkick Studios
            </footer>
        </nav>
    );
}