import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import GamePage from './pages/GamePage';
import DocumentationPage from './pages/Documentation';
import PdfPage from './pages/PdfPage';

export default function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
            <main className="flex-1 overflow-y-auto p-4 sm:p-8 relative">
                <button
                    className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 absolute top-4 left-4 z-10"
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Open sidebar"
                >
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <Routes>
                    <Route path="/" element={<Navigate to="/game" replace />} />
                    <Route path="/game" element={<GamePage />} />
                    <Route path="/docs" element={<DocumentationPage />} />
                    <Route path="/policy" element={<PdfPage />} />
                </Routes>
            </main>
        </div>
    );
}
