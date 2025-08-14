export default function Documentation() {
    return (
        <section className="p-10 max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg animate-fadeIn">
            <h1 className="text-4xl font-bold mb-6 text-gray-100 tracking-wide">📚 Documentation</h1>
            <p className="mb-4 text-gray-300 leading-relaxed">
                Find all the information you need to get started and master the game mechanics. From controls to
                advanced strategies, this guide has you covered.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 text-lg">
                <li>
                    <strong>Getting Started:</strong> Learn how to install and launch the game.
                </li>
                <li>
                    <strong>Controls:</strong> Understand the game controls and shortcuts.
                </li>
                <li>
                    <strong>Game Mechanics:</strong> Dive deep into how the game works.
                </li>
                <li>
                    <strong>Tips and Tricks:</strong> Improve your gameplay with expert advice.
                </li>
            </ul>
        </section>
    );
}
