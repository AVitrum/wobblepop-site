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
                className={`bg-gradient-to-b from-green-700 to-green-900 text-white min-h-screen p-4 flex flex-col transition-transform duration-300 ease-in-out
        fixed md:relative inset-y-0 left-0 z-30
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-64`}
            >
                <SidebarHeader setIsOpen={setIsOpen} />
                <SidebarNav setIsOpen={setIsOpen} />
                <SidebarFooter />
            </nav>
        </>
    );
}