interface FeatureCardProps {
    image: React.ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({ image, title, description }: FeatureCardProps) {
    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer transform hover:-translate-y-2">
            {image}
            <div className="p-4 bg-white">
                <h3 className="font-semibold text-xl mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
}