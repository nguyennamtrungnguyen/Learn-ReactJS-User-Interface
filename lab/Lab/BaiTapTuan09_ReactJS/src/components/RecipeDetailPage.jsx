import { useState } from 'react';
import { ChefifyFooter } from './HomePage';

const ingredients = [
  { id:1, name:'All-purpose flour', amount:'2 cups' },
  { id:2, name:'Fresh strawberries', amount:'500g' },
  { id:3, name:'Heavy cream', amount:'1 cup' },
  { id:4, name:'Sugar', amount:'¼ cup' },
  { id:5, name:'Butter, softened', amount:'¼ cup' },
  { id:6, name:'Vanilla extract', amount:'1 tsp' },
];

const steps = [
  { n:1, text:'Preheat oven to 200°C (400°F). In a large bowl, combine flour, 2 tablespoons sugar, baking powder, and salt.', image:'https://placehold.co/400x280/fff7ed/ea580c?text=Step+1' },
  { n:2, text:'Cut in the cold butter until mixture resembles coarse crumbs. Stir in cream until just combined.', image:null },
  { n:3, text:'Turn dough onto floured surface; gently knead 5-6 times. Pat to ¾-inch thickness and cut with biscuit cutter.', image:'https://placehold.co/400x280/f0fdf4/16a34a?text=Step+3' },
  { n:4, text:'Bake 12-15 minutes until golden. Cool slightly. Whip cream with sugar and vanilla until soft peaks form.', image:null },
  { n:5, text:'Slice shortcakes; layer with strawberries and whipped cream. Top with the other half and serve immediately.', image:'https://placehold.co/400x280/fce7f3/E91E8C?text=Final+Step' },
];

const comments = [
  { id:1, user:'Alex Johnson', date:'2 days ago', avatar:'https://placehold.co/40x40/6366f1/white?text=AJ', text:'This recipe is absolutely amazing! The strawberries were perfectly sweet and the cake was so light and fluffy.' },
  { id:2, user:'Maria Chen', date:'5 days ago', avatar:'https://placehold.co/40x40/f59e0b/white?text=MC', text:'Made this for a birthday party and everyone loved it! I added a touch of lemon zest to the cream — highly recommend.' },
  { id:3, user:'Tom Williams', date:'1 week ago', avatar:'https://placehold.co/40x40/10b981/white?text=TW', text:'Simple, elegant, and delicious. Perfect summer dessert. Will be making this every weekend!' },
];

export default function RecipeDetailPage() {
  const [activeTab, setActiveTab] = useState('Ingredients');
  const [servings, setServings] = useState(2);
  const [checked, setChecked] = useState([]);
  const [comment, setComment] = useState('');

  const toggleChecked = (id) => setChecked(p => p.includes(id) ? p.filter(x=>x!==id) : [...p,id]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* ── Top 2-col ── */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Left */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              How to make a Strawberry Shortcake
            </h1>
            {/* Author */}
            <div className="flex items-center gap-3 mb-6">
              <img src="https://placehold.co/40x40/E91E8C/white?text=GK" alt="Author" className="w-10 h-10 rounded-full"/>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Genevieve Kim</p>
                <p className="text-xs text-gray-400">Executive Chef</p>
              </div>
              <button className="ml-auto border border-pink-500 text-pink-500 rounded-full px-4 py-1.5 text-xs hover:bg-pink-50 transition-colors">Follow</button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-5">
              {['Ingredients','Tools','Steps'].map(t => (
                <button key={t} onClick={() => setActiveTab(t)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab===t?'bg-pink-500 text-white':'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{t}</button>
              ))}
            </div>

            {/* Ingredients card */}
            <div className="border border-gray-100 rounded-xl p-5 bg-white shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-800">Ingredients</h3>
                <div className="flex items-center gap-2">
                  <button onClick={() => setServings(s => Math.max(1,s-1))} className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600">−</button>
                  <span className="font-semibold w-5 text-center">{servings}</span>
                  <button onClick={() => setServings(s => s+1)} className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600">+</button>
                </div>
              </div>
              <ul className="space-y-3">
                {ingredients.map(ing => (
                  <li key={ing.id} className="flex items-center gap-3">
                    <input type="checkbox" checked={checked.includes(ing.id)} onChange={() => toggleChecked(ing.id)} className="accent-pink-500 w-4 h-4"/>
                    <span className={`flex-1 text-sm ${checked.includes(ing.id)?'line-through text-gray-300':'text-gray-700'}`}>{ing.name}</span>
                    <span className="text-sm text-gray-400 font-medium">{ing.amount}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-5 bg-pink-500 hover:bg-pink-600 text-white rounded-full py-3 text-sm font-semibold transition-colors">
                🛒 Add all to cart
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div>
            <img src="https://placehold.co/520x400/fce7f3/E91E8C?text=🍓+Shortcake" alt="Strawberry Shortcake" className="w-full rounded-xl object-cover shadow-md"/>
          </div>
        </div>

        {/* ── Steps ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Steps</h2>
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={step.n}>
                <div className={`flex gap-6 ${idx%2===1?'flex-row-reverse':''}`}>
                  <div className="flex-1">
                    <span className="inline-block bg-pink-100 text-pink-600 font-bold text-xs px-3 py-1 rounded-full mb-3">Step {step.n}</span>
                    <p className="text-gray-600 leading-relaxed">{step.text}</p>
                  </div>
                  {step.image && (
                    <img src={step.image} alt={`Step ${step.n}`} className="w-48 h-32 object-cover rounded-xl shadow-sm"/>
                  )}
                </div>
                {idx < steps.length-1 && <hr className="border-gray-100 mt-6"/>}
              </div>
            ))}
          </div>
        </section>

        {/* ── Comments ── */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Looking more</h2>
          <div className="flex gap-4 border-b border-gray-200 mb-6">
            <button className="pb-3 text-sm font-medium border-b-2 border-pink-500 text-pink-500 -mb-px">Comments</button>
            <button className="pb-3 text-sm font-medium text-gray-400 hover:text-gray-600 border-b-2 border-transparent -mb-px">Related</button>
          </div>

          {/* New comment */}
          <div className="flex gap-3 mb-8">
            <img src="https://placehold.co/40x40/6366f1/white?text=Me" alt="Me" className="w-10 h-10 rounded-full shrink-0"/>
            <div className="flex-1">
              <textarea
                value={comment} onChange={e => setComment(e.target.value)}
                placeholder="Share your thoughts or tips..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-pink-300 resize-none h-20"
              />
              <div className="flex justify-end mt-2">
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">Send</button>
              </div>
            </div>
          </div>

          {/* Comment list */}
          <div className="space-y-6">
            {comments.map(c => (
              <div key={c.id} className="flex gap-3">
                <img src={c.avatar} alt={c.user} className="w-10 h-10 rounded-full shrink-0"/>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-800 text-sm">{c.user}</span>
                    <span className="text-xs text-gray-400">{c.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ChefifyFooter />
    </div>
  );
}
