import { useState } from 'react';
import Sidebar from './components/Sidebar';
import GamePage from './pages/GamePage';
import DocumentationPage from './pages/Documentation';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'game' | 'docs'>('game');

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-indigo-50 to-indigo-100">
      <Sidebar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-1 overflow-y-auto">
        {currentPage === 'game' && <GamePage />}
        {currentPage === 'docs' && <DocumentationPage />}
      </main>
    </div>
  );
}
