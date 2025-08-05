import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import GamePage from './pages/GamePage';
import DocumentationPage from './pages/Documentation';
import PdfPage from './pages/PdfPage';

export default function App() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8">
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
