import { useState } from 'react';

export default function Navbar({ isLoggedIn, onLoginClick, onSubscribeClick }) {
  const [search, setSearch] = useState('');

  return (
    <header className="sticky top-0 bg-white border-b border-gray-100 shadow-sm z-50 h-16 px-6 flex items-center justify-between gap-4">
      {/* Logo */}
      <div className="flex items-center gap-2 shrink-0">
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M16 4C10 4 6 8 6 13c0 2.5 1 4.5 2.5 6L8 26h16l-.5-7C25 17.5 26 15.5 26 13c0-5-4-9-10-9z" fill="#E91E8C" opacity="0.2"/>
          <path d="M12 10c0-1 1-2 4-2s4 1 4 2" stroke="#E91E8C" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 26h16M9 22h14" stroke="#E91E8C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M13 14v8M16 12v10M19 14v8" stroke="#E91E8C" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span className="text-xl font-bold" style={{ color: '#E91E8C' }}>Chefify</span>
      </div>

      {/* Search */}
      <div className="relative hidden sm:flex items-center">
        <svg className="absolute left-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="What would you like to cook?"
          className="bg-gray-100 rounded-full pl-9 pr-4 py-2 w-64 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      {/* Nav links */}
      <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-600">
        {['What to cook', 'Recipes', 'Ingredients', 'Occasions', 'About Us'].map((link) => (
          <a key={link} href="#" className="hover:text-pink-500 transition-colors whitespace-nowrap">{link}</a>
        ))}
      </nav>

      {/* Right actions */}
      <div className="flex items-center gap-3 shrink-0">
        {isLoggedIn ? (
          <>
            <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-pink-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
              </svg>
              <span className="hidden md:inline">Your Recipe Box</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center overflow-hidden">
              <img src="https://placehold.co/32x32/E91E8C/ffffff?text=U" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </>
        ) : (
          <>
            <button
              onClick={onLoginClick}
              className="border border-pink-500 text-pink-500 rounded-full px-4 py-2 text-sm font-medium hover:bg-pink-50 transition-colors"
            >
              Login
            </button>
            <button
              onClick={onSubscribeClick}
              className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-4 py-2 text-sm font-medium transition-colors"
            >
              Subscribe
            </button>
          </>
        )}
      </div>
    </header>
  );
}
