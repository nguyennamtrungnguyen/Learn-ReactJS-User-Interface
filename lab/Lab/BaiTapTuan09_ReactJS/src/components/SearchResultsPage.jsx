import { useState } from 'react';
import { ChefifyFooter } from './HomePage';

function RecipeCard({ image, title, time }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative">
        <img
          src={image || 'https://placehold.co/300x200/fce7f3/E91E8C?text=Recipe'}
          alt={title}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
          </svg>
        </button>
        {time && (
          <span className="absolute bottom-3 left-3 bg-white/90 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
            ⏱ {time}
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-900 text-sm leading-snug">{title}</h3>
      </div>
    </div>
  );
}

const mockRecipes = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  title: ['Grilled Salmon Salad','Caprese Bowl','Mushroom Risotto','Thai Curry','Pasta Arrabbiata','Berry Smoothie','Avocado Toast','Veggie Stir Fry','Lemon Chicken'][i],
  time: ['15 min','10 min','40 min','30 min','25 min','5 min','8 min','20 min','35 min'][i],
  image: `https://placehold.co/300x200/fce7f3/555555?text=Recipe+${i+1}`,
}));

export default function SearchResultsPage({ query = 'Salad', hasResults = true, results = mockRecipes }) {
  const [selectedTypes, setSelectedTypes] = useState(['Grilled', 'Roasted']);
  const [currentPage, setCurrentPage] = useState(1);
  const types = ['Pan-fried', 'Stir-fried', 'Grilled', 'Roasted', 'Sautéed', 'Baked', 'Steamed', 'Stewed'];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-60 shrink-0 bg-white border-r border-gray-100 p-5 flex flex-col gap-6 sticky top-16 self-start">
        <div className="flex items-center gap-2 font-semibold text-gray-700 uppercase text-xs tracking-widest">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7"/>
          </svg>
          Filters
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-3 text-sm">Type</h4>
          <div className="grid grid-cols-2 gap-2">
            {types.map(t => (
              <label key={t} className="flex items-center gap-1.5 cursor-pointer text-xs text-gray-600">
                <input type="checkbox" checked={selectedTypes.includes(t)} onChange={() => setSelectedTypes(p => p.includes(t) ? p.filter(x=>x!==t) : [...p,t])} className="accent-pink-500 w-3.5 h-3.5"/>
                {t}
              </label>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-3 text-sm">Time (30–60 min)</h4>
          <input type="range" min="0" max="120" defaultValue="30" className="w-full accent-pink-500"/>
          <input type="range" min="0" max="120" defaultValue="60" className="w-full accent-pink-500 mt-1"/>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-3 text-sm">Rating</h4>
          <div className="space-y-2">
            {[5,4,3,2,1].map(n => (
              <label key={n} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-pink-500 w-3.5 h-3.5"/>
                <div className="flex gap-0.5">
                  {Array.from({length:5}).map((_,i) => (
                    <svg key={i} className={`w-3 h-3 ${i<n?'text-yellow-400':'text-gray-200'}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </label>
            ))}
          </div>
        </div>
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full py-2.5 text-sm font-semibold transition-colors">Apply</button>
      </aside>

      <main className="flex-1 p-8">
        {hasResults ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">{query} <span className="text-gray-400 font-normal">(32)</span></h1>
              <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 outline-none">
                <option>A - Z</option><option>Z - A</option><option>Newest</option>
              </select>
            </div>
            <div className="grid grid-cols-3 gap-5 mb-8">
              {results.map(r => <RecipeCard key={r.id} {...r}/>)}
            </div>
            <div className="flex items-center justify-center gap-1">
              <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100">‹</button>
              {[1,2,3,'...',9,10].map((p, i) => (
                <button key={i} onClick={() => typeof p==='number' && setCurrentPage(p)}
                  className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${p===currentPage?'bg-pink-500 text-white':'border border-gray-200 text-gray-600 hover:bg-gray-50'} ${p==='...'?'border-none cursor-default':''}`}>{p}</button>
              ))}
              <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100">›</button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-96 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Sorry, no results were found for &quot;{query}&quot;</h2>
            <svg className="w-32 h-32 mb-6" viewBox="0 0 120 120" fill="none">
              <rect x="20" y="30" width="80" height="70" rx="8" fill="#fce7f3" stroke="#E91E8C" strokeWidth="2"/>
              <circle cx="75" cy="55" r="18" fill="white" stroke="#E91E8C" strokeWidth="2"/>
              <line x1="88" y1="68" x2="100" y2="80" stroke="#E91E8C" strokeWidth="3" strokeLinecap="round"/>
              <line x1="68" y1="48" x2="82" y2="62" stroke="#E91E8C" strokeWidth="2" strokeLinecap="round"/>
              <line x1="82" y1="48" x2="68" y2="62" stroke="#E91E8C" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p className="text-gray-500 mb-6">We have all your Independence Day sweets covered.</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Sweet Cake','Black Cake','Panzle Verde','Healthy food'].map(tag => (
                <span key={tag} className="border border-pink-400 text-pink-500 rounded-full px-4 py-1.5 text-sm cursor-pointer hover:bg-pink-50 transition-colors">{tag}</span>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
