interface SidebarHeaderProps {
    setIsOpen: (isOpen: boolean) => void;
}

export default function SidebarHeader({ setIsOpen }: SidebarHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl tracking-wider select-none [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]">Dropkick</h2>
            <button
                className="p-2 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 md:hidden"
                onClick={() => setIsOpen(false)}
                aria-label="Close sidebar"
            >
                <span className="text-2xl [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]">&times;</span>
            </button>
        </div>
    );
}
