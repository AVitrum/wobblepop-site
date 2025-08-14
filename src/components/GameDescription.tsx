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
        <section className="p-10 max-w-6xl mx-auto bg-black/50 rounded-xl backdrop-blur-md border border-white/10">
            <h1 className="text-5xl font-extrabold mb-6 text-white tracking-tight">
                Welcome to <span className="text-green-400">Dropkick</span>!
            </h1>
            <p className="text-lg mb-8 leading-relaxed text-white">
                Experience football like never before! With our unique slingshot mechanic, you can bend, curve, and
                power your shots with incredible precision. Aim, pull back, and release to score unbelievable goals.
                Are you ready to become a legend?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, i) => (
                    <FeatureCard
                        key={i}
                        imageSrc={feature.imageSrc}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
}