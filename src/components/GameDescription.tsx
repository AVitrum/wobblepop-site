import FeatureCard from './FeatureCard';

const features = [
    {
        image: (
            <div className="h-48 bg-gradient-to-tr from-indigo-300 to-indigo-500 flex items-center justify-center text-white text-3xl font-bold select-none">
                Image 1
            </div>
        ),
        title: 'Feature 1',
        description: 'Description of feature 1 with some interesting details to attract players.',
    },
    {
        image: (
            <div className="h-48 bg-gradient-to-tr from-indigo-300 to-indigo-500 flex items-center justify-center text-white text-3xl font-bold select-none">
                Image 2
            </div>
        ),
        title: 'Feature 2',
        description: 'Description of feature 2 with some interesting details to attract players.',
    },
    {
        image: (
            <div className="h-48 bg-gradient-to-tr from-indigo-300 to-indigo-500 flex items-center justify-center text-white text-3xl font-bold select-none">
                Image 3
            </div>
        ),
        title: 'Feature 3',
        description: 'Description of feature 3 with some interesting details to attract players.',
    },
];

export default function GameDescription() {
    return (
        <section className="p-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-6 text-indigo-900 tracking-tight drop-shadow-lg">
                Welcome to <span className="text-indigo-600">WobblePop Studios</span>!
            </h1>
            <p className="text-lg mb-8 leading-relaxed text-gray-700">
                Dive into an exciting world of challenges, strategies, and fun. Our game is designed to keep you
                entertained for hours with stunning visuals and smooth gameplay.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, i) => (
                    <FeatureCard
                        key={i}
                        image={feature.image}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    );
}