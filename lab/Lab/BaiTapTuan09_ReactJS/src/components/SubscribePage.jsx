import { useState } from 'react';
import { ChefifyFooter } from './HomePage';

const features = [
  '20,000+ recipes to suit all tastes and skill levels',
  'Filter for diets, cook times, and more',
  'Personal Recipe Box for favorites',
  'Gain exclusive access to our subscriber-only mobile app',
];

const includes = [
  { icon:'🍳', title:'Cooking', desc:'Thousands of recipes from top chefs worldwide.' },
  { icon:'🔧', title:'Wirecutter', desc:'Expert product picks for your kitchen.' },
  { icon:'🎮', title:'Games', desc:'Fun culinary trivia and food puzzles.' },
  { icon:'⚽', title:'The Athletic', desc:'Fuel your game with pro-athlete recipes.' },
];

export default function SubscribePage() {
  const [plan, setPlan] = useState('monthly');

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <span className="hover:text-pink-500 cursor-pointer">Recipes</span>
          <span className="mx-2">›</span>
          <span className="text-gray-700 font-medium">Subscribe</span>
        </nav>

        {/* ── Top 2-col ── */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">This recipe is exclusively available to subscribers</p>
            <h1 className="text-2xl font-bold mb-6" style={{color:'#E91E8C'}}>
              Join now to access effortless, hassle-free recipes
            </h1>
            <ul className="space-y-3 mb-6">
              {features.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-600 text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mb-2">
              <span className="text-xl font-bold text-gray-900">0.25USD </span>
              <span className="text-gray-500 text-sm">/ Week</span>
            </div>
            <p className="text-xs text-gray-400 mb-5">Billed as $1 every 4 weeks for the first year</p>
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full py-3 font-semibold transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
              </svg>
              Subscribe Now
            </button>
            <p className="text-center text-sm text-gray-400 mt-3 cursor-pointer hover:text-gray-600">Cancel or Pause anytime</p>
          </div>

          {/* Right */}
          <div>
            <img src="https://placehold.co/520x380/fce7f3/E91E8C?text=🍓+Premium+Recipes" alt="Subscribe" className="w-full rounded-xl shadow-md object-cover"/>
          </div>
        </div>

        {/* ── Includes ── */}
        <section className="bg-gray-100 rounded-2xl py-10 px-8 mb-16">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">An All Access subscription includes:</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {includes.map(item => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Plan selector ── */}
        <section className="text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Subscribe to Chefify Cooking only</h2>
          <p className="text-gray-500 text-sm mb-8">Choose a billing plan that works for you.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {[
              { id:'monthly', label:'$2/month', sub:'Billed every 4 weeks' },
              { id:'yearly', label:'$20/year', sub:'Billed annually — save 17%' },
            ].map(opt => (
              <button key={opt.id} onClick={() => setPlan(opt.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl border-2 transition-all ${plan===opt.id?'border-pink-500 bg-pink-50':'border-gray-200 bg-white hover:border-pink-300'}`}>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${plan===opt.id?'border-pink-500':'border-gray-300'}`}>
                  {plan===opt.id && <div className="w-2.5 h-2.5 rounded-full bg-pink-500"/>}
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">{opt.label}</p>
                  <p className="text-xs text-gray-400">{opt.sub}</p>
                </div>
              </button>
            ))}
          </div>

          <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-12 py-3 font-semibold transition-colors">
            Subscribe Now
          </button>
          <p className="text-sm text-gray-400 mt-3 cursor-pointer hover:text-gray-600">Cancel or Pause anytime</p>
        </section>
      </div>

      <ChefifyFooter />
    </div>
  );
}
