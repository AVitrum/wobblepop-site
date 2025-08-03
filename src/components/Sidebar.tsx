import { useState } from 'react';

type Page = 'game' | 'docs';

interface SidebarProps {
    currentPage: Page;
    setPage: (page: Page) => void;
}

export default function Sidebar({ currentPage, setPage }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const navItems = [
        { id: 'game', label: 'Game' },
        { id: 'docs', label: 'Documentation' },
    ] as const;

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
                {navItems.map(({ id, label }) => (
                    <li
                        key={id}
                        className={`cursor-pointer rounded-lg px-4 py-3 font-semibold transition-all duration-200 flex items-center gap-4
            ${collapsed ? 'justify-center' : ''}
            ${currentPage === id
                            ? 'bg-green-500 shadow-lg text-white'
                            : 'hover:bg-green-800 hover:translate-x-1'
                        }`}
                        onClick={() => setPage(id)}
                        tabIndex={0}
                        role="button"
                        onKeyDown={e => {
                            if (e.key === 'Enter' || e.key === ' ') setPage(id);
                        }}
                    >
                        <span className={collapsed ? 'text-2xl' : 'hidden'}>{label.charAt(0)}</span>
                        <span className={collapsed ? 'hidden' : 'block'}>{label}</span>
                    </li>
                ))}
            </ul>

            <footer className={`mt-auto text-xs text-green-300 select-none ${collapsed ? 'hidden' : ''}`}>
                © 2025 Dropkick Studios
            </footer>
        </nav>
    );
}