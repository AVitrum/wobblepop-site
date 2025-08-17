interface FeatureCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

export default function FeatureCard({ imageSrc, title, description }: FeatureCardProps) {
    return (
        <div className="group relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-transparent backdrop-blur-sm p-4 flex flex-col gap-4 transition-all duration-400 hover:shadow-glow hover-glow">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_70%_30%,rgba(124,255,78,0.18),transparent_70%)]" />
            <div className="relative flex-1 flex items-center justify-center bg-black/30 rounded-lg border border-white/5 shadow-inner overflow-hidden">
                <img src={imageSrc} alt={title} className="w-full h-48 object-contain mix-blend-screen" />
                <div className="absolute inset-x-4 bottom-2 h-px bg-gradient-to-r from-transparent via-neon-green/40 to-transparent" />
            </div>
            <div className="relative z-10">
                <h3 className="font-semibold text-lg mb-1 text-white tracking-wide font-jetbrains flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-neon-lime to-neon-green shadow-glow" /> {title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70 group-hover:text-white/85 transition-colors duration-300">
                    {description}
                </p>
            </div>
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-neon-lime via-neon-green to-neon-lime opacity-60" />
        </div>
    );
}