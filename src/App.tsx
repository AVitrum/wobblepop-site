import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import GamePage from './pages/GamePage';
import DocumentationPage from './pages/Documentation';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';

export default function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="relative min-h-screen bg-pitch text-white flex flex-col selection:bg-neon-green/30 selection:text-white">
            <AnimatedBackground />
            <Navbar setSidebarOpen={setSidebarOpen} />
            <div className="flex-1 flex relative">
                <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
                <main className="flex-1 overflow-y-auto px-4 sm:px-10 pb-20 pt-24 md:pt-12 relative">
                    <button
                        className="md:hidden p-2 rounded-md text-white/60 hover:text-white hover:bg-white/10 focus-accent absolute top-4 left-4 z-10"
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Open sidebar"
                    >
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="max-w-7xl mx-auto">
                        <Routes>
                            <Route path="/" element={<Navigate to="/game" replace />} />
                            <Route path="/game" element={<GamePage />} />
                            <Route path="/docs" element={<DocumentationPage />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    );
}
