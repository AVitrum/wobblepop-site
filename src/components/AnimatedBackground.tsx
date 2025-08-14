export default function AnimatedBackground() {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute bg-green-400/50 rounded-full w-[50rem] h-[50rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 filter blur-[150px] opacity-70 animate-blob"></div>
        </div>
    );
}
