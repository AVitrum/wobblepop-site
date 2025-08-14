interface BackdropProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function Backdrop({ isOpen, setIsOpen }: BackdropProps) {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
}
