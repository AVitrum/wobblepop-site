interface FeatureCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

export default function FeatureCard({ imageSrc, title, description }: FeatureCardProps) {
    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 bg-black/30 backdrop-blur-sm border border-white/10">
            <img src={imageSrc} alt={title} className="w-full h-64 object-contain bg-black/20" />
            <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-white">{title}</h3>
                <p className="text-white">{description}</p>
            </div>
        </div>
    );
}