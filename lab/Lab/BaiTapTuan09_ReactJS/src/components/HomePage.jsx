import { useState } from 'react';

// ─── Shared Footer ────────────────────────────────────────────────────────────
export function ChefifyFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">Chefify</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Easy and delicious cooking instructions for everyone.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800 rounded-lg px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Send
              </button>
            </div>
          </div>

          {['Learn More', 'Shop', 'Recipes'].map((col) => (
            <div key={col}>
              <h3 className="font-semibold text-white mb-4">{col}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {['Link One', 'Link Two', 'Link Three', 'Link Four'].map((l) => (
                  <li key={l}><a href="#" className="hover:text-pink-400 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bold text-white">Chefify</span>
          <p className="text-sm text-gray-500">© 2024 Chefify. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-pink-400">Terms</a>
            <a href="#" className="hover:text-pink-400">Privacy</a>
            <a href="#" className="hover:text-pink-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Recipe Card ──────────────────────────────────────────────────────────────
function RecipeCard({ image, title, time, hasPlay, authorName, authorAvatar }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative">
        <img
          src={image || 'https://placehold.co/300x200/fce7f3/E91E8C?text=🍽️'}
          alt={title}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {hasPlay && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-pink-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        )}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-pink-50 transition-colors">
          <svg className="w-4 h-4 text-gray-400 hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
          </svg>
        </button>
        {time && (
          <span className="absolute bottom-3 left-3 bg-white/90 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
            ⏱ {time}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm leading-snug">{title}</h3>
        {authorName && (
          <div className="flex items-center gap-2 mt-2">
            <img src={authorAvatar || 'https://placehold.co/24x24/E91E8C/ffffff?text=A'} alt={authorName} className="w-6 h-6 rounded-full" />
            <span className="text-xs text-gray-500">{authorName}</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
function Section({ heading, subtitle, children }) {
  return (
    <section className="py-14">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
        <p className="text-gray-500 mt-2 text-sm">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

const summerRecipes = [
  { title: 'Tropical Mango Salad', time: '10 min', image: 'https://placehold.co/300x200/fef3c7/d97706?text=🥭+Salad' },
  { title: 'Berry Lemonade Cake', time: '45 min', image: 'https://placehold.co/300x200/ede9fe/7c3aed?text=🍋+Cake' },
  { title: 'Grilled Corn Tacos', time: '20 min', image: 'https://placehold.co/300x200/dcfce7/16a34a?text=🌽+Tacos' },
  { title: 'Watermelon Feta Bowl', time: '5 min', image: 'https://placehold.co/300x200/fce7f3/be185d?text=🍉+Bowl' },
];

const videoRecipes = [
  { title: 'Perfect Pasta Carbonara', time: '30 min', image: 'https://placehold.co/300x200/fef9c3/ca8a04?text=🍝+Pasta', hasPlay: true },
  { title: 'Crispy Fried Chicken', time: '50 min', image: 'https://placehold.co/300x200/ffedd5/ea580c?text=🍗+Chicken', hasPlay: true },
  { title: 'Homemade Ramen Bowl', time: '60 min', image: 'https://placehold.co/300x200/e0f2fe/0284c7?text=🍜+Ramen', hasPlay: true },
  { title: 'Chocolate Lava Cake', time: '25 min', image: 'https://placehold.co/300x200/fce7f3/9d174d?text=🍫+Cake', hasPlay: true },
];

const editorsPick = [
  { title: 'Caprese Stuffed Avocado', image: 'https://placehold.co/300x200/f0fdf4/15803d?text=🥑+Caprese', authorName: 'Sophie Laurent', authorAvatar: 'https://placehold.co/24x24/E91E8C/white?text=S' },
  { title: 'Thai Green Curry', image: 'https://placehold.co/300x200/fef3c7/b45309?text=🍛+Curry', authorName: 'David Chen', authorAvatar: 'https://placehold.co/24x24/6366f1/white?text=D' },
  { title: 'Shakshuka Delight', image: 'https://placehold.co/300x200/fef2f2/dc2626?text=🍳+Shakshuka', authorName: 'Maria Romano', authorAvatar: 'https://placehold.co/24x24/f59e0b/white?text=M' },
  { title: 'Mushroom Risotto', image: 'https://placehold.co/300x200/f5f3ff/7c3aed?text=🍄+Risotto', authorName: 'James Park', authorAvatar: 'https://placehold.co/24x24/10b981/white?text=J' },
];

export default function HomePage({ onLoginClick }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://placehold.co/1400x500/1a1a2e/ffffff?text=🍳+Kitchen+Hero"
          alt="Kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Floating card */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-6 w-72">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            🌟 Recipe of the day
          </span>
          <h2 className="text-xl font-bold text-pink-500 mb-2">Salad Caprese</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            Fresh tomatoes, mozzarella, and basil drizzled with olive oil — a classic Italian starter.
          </p>
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[1,2,3,4].map(i => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
            <svg className="w-4 h-4 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full py-2 text-sm font-semibold transition-colors">
            Create recipe
          </button>
          <div className="mt-3 text-center">
            <span className="text-xs bg-pink-50 text-pink-600 px-3 py-1 rounded-full">🥗 Salad</span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* ── Summer Recipes ── */}
        <Section
          heading="🌞 This Summer Recipes"
          subtitle="We have all your Independence Day sweets covered"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {summerRecipes.map((r) => <RecipeCard key={r.title} {...r} />)}
          </div>
        </Section>

        {/* ── Video Recipes ── */}
        <Section
          heading="🎬 Recipes With Videos"
          subtitle="Cooking up Culinary Creations with Step-by-Step Videos"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {videoRecipes.map((r) => <RecipeCard key={r.title} {...r} />)}
          </div>
        </Section>

        {/* ── Editor's Pick ── */}
        <Section
          heading="✨ Editor's Pick"
          subtitle="Curated Culinary Delights: Hand-picked food titles by our finest editors"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {editorsPick.map((r) => <RecipeCard key={r.title} {...r} />)}
          </div>
        </Section>
      </div>

      <ChefifyFooter />
    </div>
  );
}
