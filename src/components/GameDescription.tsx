import FeatureCard from './FeatureCard';
import featuresData from '../data/features.json';

interface Feature {
    imageSrc: string;
    title: string;
    description: string;
}

const features = featuresData as Feature[];

export default function GameDescription() {
    return (
        <section className="relative px-6 sm:px-12 py-12 max-w-7xl mx-auto mb-16 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl overflow-hidden shadow-[0_0_0_1px_rgba(124,255,78,0.12),0_24px_80px_-32px_rgba(0,0,0,0.9)]">
            <div className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]">
                <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-[radial-gradient(circle_at_center,rgba(124,255,78,0.2),transparent_60%)]" />
                <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[radial-gradient(circle_at_center,rgba(55,242,110,0.18),transparent_65%)]" />
            </div>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
            <header className="relative mb-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-jetbrains leading-tight">
                    <span className="text-gradient-neon">Dropkick</span>
                    <span className="block text-white/80 text-xl sm:text-2xl font-inter font-medium mt-4 tracking-normal">
                        Precision. Curl. Power. Become a legend on the pitch.
                    </span>
                </h1>
                <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-white/70">
                    Master the physics‑driven slingshot mechanic inspired by free‑kick artistry. Shape impossible
                    trajectories, thread passes through micro‑gaps, and unleash unstoppable screamers under stadium
                    lights. Every shot is a creative canvas—bend it like a pro.
                </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {features.map((feature, i) => (
                    <FeatureCard
                        key={i}
                        imageSrc={feature.imageSrc}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2 font-jetbrains">
                    <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-neon-lime to-neon-green shadow-glow" />
                    Real-time physics sandbox
                </div>
                <div className="flex items-center gap-2 font-jetbrains">
                    <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-neon-lime to-neon-green shadow-glow" />
                    Skill expression over RNG
                </div>
                <div className="flex items-center gap-2 font-jetbrains">
                    <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-neon-lime to-neon-green shadow-glow" />
                    Built for spectators
                </div>
            </div>
        </section>
    );
}