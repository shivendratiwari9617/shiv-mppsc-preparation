import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/mock', label: 'Mock Test' },
  { to: '/review/wrong', label: 'Wrong Answers' },
  { to: '/review/due', label: 'Revision Due' },
  { to: '/bookmarks', label: 'Bookmarks' },
  { to: '/search', label: 'Search' },
  { to: '/stats', label: 'Stats' },
  { to: '/settings', label: 'Settings' },
];

export default function Layout() {
  const [dark, toggleDark] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center gap-2 font-extrabold text-brand-700 dark:text-brand-300 text-lg shrink-0">
            <span className="h-8 w-8 rounded-lg bg-brand-600 text-white flex items-center justify-center">📘</span>
            MPPSC Prep Tracker
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'bg-brand-600 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={toggleDark} className="btn-secondary !px-3" title="Toggle dark mode">
              {dark ? '☀️' : '🌙'}
            </button>
            <button className="md:hidden btn-secondary !px-3" onClick={() => setMenuOpen((v) => !v)}>
              ☰
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-slate-200 dark:border-slate-800 px-4 py-2 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive ? 'bg-brand-600 text-white' : 'text-slate-600 dark:text-slate-300'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-4 text-center text-xs text-slate-400">
        MPPSC Prep Tracker — built for focused practice
      </footer>
    </div>
  );
}
