import { useState } from 'react';
import Sidebar from './components/Sidebar';
import GamePage from './pages/GamePage';
import DocumentationPage from './pages/Documentation';

const pages = {
    game: <GamePage />,
    docs: <DocumentationPage />,
};

type Page = keyof typeof pages;

export default function App() {
    const [currentPage, setCurrentPage] = useState<Page>('game');

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar currentPage={currentPage} setPage={setCurrentPage} />
            <main className="flex-1 overflow-y-auto p-8">
                {pages[currentPage]}
            </main>
        </div>
    );
}