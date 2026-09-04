import { useState } from 'react';
import { ChefifyFooter } from './HomePage';

function RecipeCard({ image, title, time }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative">
        <img src={image || 'https://placehold.co/300x200/fce7f3/E91E8C?text=Recipe'} alt={title}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"/>
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
          </svg>
        </button>
        {time && <span className="absolute bottom-3 left-3 bg-white/90 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">⏱ {time}</span>}
      </div>
      <div className="p-4"><h3 className="font-semibold text-gray-900 text-sm">{title}</h3></div>
    </div>
  );
}

const mockRecipes = Array.from({length:8}, (_,i) => ({
  id: i,
  title: ['Strawberry Shortcake','Lemon Tart','Blueberry Muffins','Mango Sorbet','Chocolate Fondant','Apple Crumble','Panna Cotta','Tiramisu'][i],
  time: ['30 min','45 min','25 min','15 min','20 min','40 min','35 min','50 min'][i],
  image: `https://placehold.co/300x220/fce7f3/E91E8C?text=Recipe+${i+1}`,
}));

export default function RecipeBoxPage({
  user = { name:'Emma Gonzalez', bio:'Passionate home cook sharing simple, wholesome recipes for every occasion. Food brings people together — let\'s cook something amazing!', subscribers:'6.5k', avatar:'https://placehold.co/80x80/E91E8C/ffffff?text=EG' },
  recipes = mockRecipes,
  activeTab: initialTab = 'Saved Recipes',
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentPage, setCurrentPage] = useState(1);
  const tabs = ['Saved Recipes', 'Folders', `Recipes by ${user.name.split(' ')[0]}`];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6">
          <span className="hover:text-pink-500 cursor-pointer">Home</span>
          <span className="mx-2">›</span>
          <span className="text-gray-700 font-medium">Your Recipe Box</span>
        </nav>

        {/* Profile header */}
        <div className="flex items-start gap-6 mb-8">
          <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"/>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{user.name}&apos;s Recipe Box</h1>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg mb-3">{user.bio}</p>
            <div className="flex items-center gap-4">
              <span className="text-pink-500 font-semibold">{user.subscribers} Subscribers</span>
              <button className="border border-pink-500 text-pink-500 rounded-full px-4 py-1.5 text-sm hover:bg-pink-50 transition-colors flex items-center gap-1">
                Share <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex gap-6">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium transition-colors border-b-2 -mb-px ${activeTab===tab ? 'border-pink-500 text-pink-500' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Recipe grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          {recipes.map(r => <RecipeCard key={r.id} {...r}/>)}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1">
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100">‹</button>
          {[1,2,3,4,'...',10,11].map((p,i) => (
            <button key={i} onClick={() => typeof p==='number' && setCurrentPage(p)}
              className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${p===currentPage?'bg-pink-500 text-white':'border border-gray-200 text-gray-600 hover:bg-gray-50'} ${p==='...'?'border-none cursor-default':''}`}>{p}</button>
          ))}
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100">›</button>
        </div>
      </div>

      <ChefifyFooter />
    </div>
  );
}
