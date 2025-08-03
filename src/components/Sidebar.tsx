import { useState } from 'react';

type Page = 'game' | 'docs';

interface SidebarProps {
    currentPage: Page;
    setPage: (page: Page) => void;
}

export default function Sidebar({ currentPage, setPage }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <nav
            className={`bg-gradient-to-b from-indigo-700 via-indigo-900 to-indigo-800 text-white min-h-screen p-6 flex flex-col transition-all duration-300
      ${collapsed ? 'w-20' : 'w-60'}`}
        >
            <button
                className="mb-6 self-end text-xl focus:outline-none"
                onClick={() => setCollapsed(c => !c)}
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
                {collapsed ? '➡️' : '⬅️'}
            </button>
            {!collapsed && (
                <>
                    <h2 className="text-3xl font-extrabold mb-10 tracking-wide select-none">WobblePop Studios</h2>
                    <ul className="flex flex-col gap-4">
                        {([
                            { id: 'game', label: '🎮 Game' },
                            { id: 'docs', label: '📚 Documentation' },
                        ] as const).map(({ id, label }) => (
                            <li
                                key={id}
                                className={`cursor-pointer rounded-lg px-4 py-3 text-lg font-semibold transition-colors duration-300
                ${currentPage === id
                                    ? 'bg-indigo-400 shadow-lg shadow-indigo-500/50 text-indigo-900'
                                    : 'hover:bg-indigo-600 hover:scale-105'
                                }`}
                                onClick={() => setPage(id)}
                                tabIndex={0}
                                role="button"
                                onKeyDown={e => {
                                    if (e.key === 'Enter' || e.key === ' ') setPage(id);
                                }}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </>
            )}
            <footer className={`mt-auto text-xs opacity-70 select-none ${collapsed ? 'hidden' : ''}`}>
                © 2025 GameZone Inc.
            </footer>
        </nav>
    );
}