import Backdrop from './sidebar/Backdrop';
import SidebarFooter from './sidebar/SidebarFooter';
import SidebarHeader from './sidebar/SidebarHeader';
import SidebarNav from './sidebar/SidebarNav';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
    return (
        <>
            <Backdrop isOpen={isOpen} setIsOpen={setIsOpen} />
            <nav
                className={`md:hidden bg-black/80 backdrop-blur-2xl border-r border-white/10 shadow-[0_0_0_1px_rgba(124,255,78,0.15),0_8px_40px_-8px_rgba(0,0,0,0.8)] text-white min-h-screen pt-6 pb-5 flex flex-col transition-transform duration-300 ease-in-out fixed inset-y-0 left-0 z-40 w-72
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
                <SidebarHeader setIsOpen={setIsOpen} />
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <SidebarNav setIsOpen={setIsOpen} />
                </div>
                <SidebarFooter />
            </nav>
        </>
    );
}