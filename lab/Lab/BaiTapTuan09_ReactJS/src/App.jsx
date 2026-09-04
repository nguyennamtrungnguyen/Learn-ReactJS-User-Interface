import { useState } from 'react';
import './index.css';

import OnboardingModal from './components/OnboardingModal';
import LoginModal from './components/LoginModal';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SearchResultsPage from './components/SearchResultsPage';
import RecipeBoxPage from './components/RecipeBoxPage';
import RecipeDetailPage from './components/RecipeDetailPage';
import SubscribePage from './components/SubscribePage';
import AdminDashboard from './components/AdminDashboard';

const PAGES = ['Home', 'Search (has results)', 'Search (no results)', 'Recipe Box', 'Recipe Detail', 'Subscribe', 'Admin Dashboard'];

export default function App() {
  const [activePage, setActivePage] = useState('Home');
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const handleLogin = () => { setShowLogin(true); };
  const handleLoginClose = () => { setShowLogin(false); setIsLoggedIn(true); };

  const renderPage = () => {
    switch (activePage) {
      case 'Home':               return <HomePage onLoginClick={handleLogin} />;
      case 'Search (has results)': return <SearchResultsPage query="Salad" hasResults={true} />;
      case 'Search (no results)':  return <SearchResultsPage query="Xyz123" hasResults={false} />;
      case 'Recipe Box':         return <RecipeBoxPage />;
      case 'Recipe Detail':      return <RecipeDetailPage />;
      case 'Subscribe':          return <SubscribePage />;
      case 'Admin Dashboard':    return <AdminDashboard />;
      default:                   return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Demo Navigation Bar ── */}
      <div className="bg-gray-900 text-white px-4 py-2 flex items-center gap-3 flex-wrap text-xs z-50 sticky top-0">
        <span className="font-bold text-pink-400 shrink-0">📚 Week 9 Demo:</span>
        {PAGES.map(page => (
          <button
            key={page}
            onClick={() => setActivePage(page)}
            className={`px-3 py-1 rounded-full transition-colors whitespace-nowrap ${
              activePage === page
                ? 'bg-pink-500 text-white font-semibold'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {page}
          </button>
        ))}
        <div className="ml-auto flex gap-2">
          <button
            onClick={() => setShowOnboarding(true)}
            className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
          >
            Onboarding ↗
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
          >
            Login ↗
          </button>
        </div>
      </div>

      {/* ── Sticky Navbar (shown on Chefify pages) ── */}
      {activePage !== 'Admin Dashboard' && (
        <Navbar
          isLoggedIn={isLoggedIn}
          onLoginClick={handleLogin}
          onSubscribeClick={() => setActivePage('Subscribe')}
        />
      )}

      {/* ── Page Content ── */}
      {renderPage()}

      {/* ── Modals ── */}
      {showOnboarding && (
        <OnboardingModal onClose={() => setShowOnboarding(false)} />
      )}
      {showLogin && (
        <LoginModal onClose={handleLoginClose} />
      )}
    </div>
  );
}
