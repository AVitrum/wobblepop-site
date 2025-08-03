interface FeatureCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

export default function FeatureCard({ imageSrc, title, description }: FeatureCardProps) {
    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer transform hover:-translate-y-2 bg-white">
            <img src={imageSrc} alt={title} className="w-full h-64 object-contain bg-gray-100" />
            <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-gray-800">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}