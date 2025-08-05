interface SidebarHeaderProps {
    setIsOpen: (isOpen: boolean) => void;
}

export default function SidebarHeader({ setIsOpen }: SidebarHeaderProps) {
    return (
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
    );
}
