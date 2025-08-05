interface BackdropProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function Backdrop({ isOpen, setIsOpen }: BackdropProps) {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
}
