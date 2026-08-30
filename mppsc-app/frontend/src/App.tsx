import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import BookmarksPage from './pages/BookmarksPage';
import DuePage from './pages/DuePage';
import HomePage from './pages/HomePage';
import MockSetupPage from './pages/MockSetupPage';
import PracticeSessionPage from './pages/PracticeSessionPage';
import ResultsPage from './pages/ResultsPage';
import SearchPage from './pages/SearchPage';
import SettingsPage from './pages/SettingsPage';
import StatsPage from './pages/StatsPage';
import UnitPage from './pages/UnitPage';
import WrongDeckPage from './pages/WrongDeckPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/units/:id" element={<UnitPage />} />
        <Route path="/mock" element={<MockSetupPage />} />
        <Route path="/practice/:sessionId" element={<PracticeSessionPage />} />
        <Route path="/results/:sessionId" element={<ResultsPage />} />
        <Route path="/review/wrong" element={<WrongDeckPage />} />
        <Route path="/review/due" element={<DuePage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<div className="text-center py-20 text-slate-500">Page not found.</div>} />
      </Route>
    </Routes>
  );
}
