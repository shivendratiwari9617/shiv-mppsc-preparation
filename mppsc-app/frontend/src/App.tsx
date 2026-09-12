import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import BookmarksPage from './pages/BookmarksPage';
import ChecklistFilePage from './pages/ChecklistFilePage';
import ChecklistPage from './pages/ChecklistPage';
import ChecklistUnitPage from './pages/ChecklistUnitPage';
import DuePage from './pages/DuePage';
import HomePage from './pages/HomePage';
import MockSetupPage from './pages/MockSetupPage';
import NoteCategoryPage from './pages/NoteCategoryPage';
import NoteFilePage from './pages/NoteFilePage';
import NotesPage from './pages/NotesPage';
import PracticeSessionPage from './pages/PracticeSessionPage';
import PrelimsNoteFilePage from './pages/PrelimsNoteFilePage';
import PrelimsNotesPage from './pages/PrelimsNotesPage';
import PrelimsNoteTopicPage from './pages/PrelimsNoteTopicPage';
import PrelimsNoteUnitPage from './pages/PrelimsNoteUnitPage';
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
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/notes/categories/:id" element={<NoteCategoryPage />} />
        <Route path="/notes/files/:id" element={<NoteFilePage />} />
        <Route path="/checklist" element={<ChecklistPage />} />
        <Route path="/checklist/units/:id" element={<ChecklistUnitPage />} />
        <Route path="/checklist/files/:id" element={<ChecklistFilePage />} />
        <Route path="/prelims-notes" element={<PrelimsNotesPage />} />
        <Route path="/prelims-notes/units/:id" element={<PrelimsNoteUnitPage />} />
        <Route path="/prelims-notes/topics/:id" element={<PrelimsNoteTopicPage />} />
        <Route path="/prelims-notes/files/:id" element={<PrelimsNoteFilePage />} />
        <Route path="*" element={<div className="text-center py-20 text-slate-500">Page not found.</div>} />
      </Route>
    </Routes>
  );
}
