import { useState } from 'react';

const navItems = [
  { icon: '📊', label: 'Dashboard', id: 'dashboard' },
  { icon: '📁', label: 'Projects', id: 'projects' },
  { icon: '👥', label: 'Teams', id: 'teams' },
  { icon: '📈', label: 'Analytics', id: 'analytics' },
  { icon: '💬', label: 'Messages', id: 'messages' },
  { icon: '🔌', label: 'Integrations', id: 'integrations' },
];

const tableData = [
  { id: 1, name: 'Olivia Martin', initials: 'OM', color: '#6366f1', company: 'Stripe Inc.', order: '$1,200', date: '2024-03-10', status: 'Completed' },
  { id: 2, name: 'James Wilson', initials: 'JW', color: '#f59e0b', company: 'Shopify Ltd.', order: '$850', date: '2024-03-11', status: 'In-progress' },
  { id: 3, name: 'Sophia Lee', initials: 'SL', color: '#10b981', company: 'Vercel Co.', order: '$3,400', date: '2024-03-12', status: 'New' },
  { id: 4, name: 'Lucas Brown', initials: 'LB', color: '#E91E8C', company: 'Notion HQ', order: '$720', date: '2024-03-13', status: 'Completed' },
  { id: 5, name: 'Emma Davis', initials: 'ED', color: '#0ea5e9', company: 'Linear Inc.', order: '$2,150', date: '2024-03-14', status: 'In-progress' },
  { id: 6, name: 'Noah Chen', initials: 'NC', color: '#8b5cf6', company: 'Figma Corp.', order: '$990', date: '2024-03-15', status: 'New' },
];

const statusStyles = {
  'New': 'bg-blue-100 text-blue-600',
  'In-progress': 'bg-amber-100 text-amber-600',
  'Completed': 'bg-green-100 text-green-600',
};

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState('');

  const toggleSelect = (id) =>
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">

      {/* ── Sidebar ── */}
      <aside className="w-60 shrink-0 bg-white border-r border-gray-100 flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-2 px-5 py-5 border-b border-gray-100">
          <div className="flex gap-1">
            <span className="w-3 h-3 rounded-full bg-pink-500" />
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
          </div>
          <span className="font-bold text-gray-800 text-lg">Logo</span>
        </div>

        {/* Nav items */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeNav === item.id
                  ? 'bg-pink-500 text-white shadow-sm shadow-pink-200'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom promo card */}
        <div className="m-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-4 text-center border border-pink-100">
          <div className="text-3xl mb-2">🚀</div>
          <h4 className="font-bold text-gray-800 text-sm mb-1">V2.0 is available</h4>
          <p className="text-xs text-gray-400 mb-3">Get the latest features now</p>
          <button className="w-full border border-pink-400 text-pink-500 rounded-lg py-1.5 text-xs font-semibold hover:bg-pink-50 transition-colors">
            Try now
          </button>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className="flex-1 overflow-y-auto">

        {/* Top bar */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-4 flex items-center gap-4 z-10">
          <h1 className="text-2xl font-bold shrink-0" style={{ color: '#E91E8C' }}>Dashboard</h1>

          <div className="flex-1 relative max-w-sm mx-auto">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full bg-gray-100 rounded-full pl-9 pr-4 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors relative">
              <span className="text-lg">🔔</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full" />
            </button>
            <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <span className="text-lg">❓</span>
            </button>
            <img
              src="https://placehold.co/36x36/E91E8C/ffffff?text=AD"
              alt="Avatar"
              className="w-9 h-9 rounded-full cursor-pointer border-2 border-pink-200"
            />
          </div>
        </div>

        <div className="p-8 space-y-8">

          {/* ── Overview Stats ── */}
          <section>
            <div className="flex items-center gap-2 mb-5">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
              </svg>
              <h2 className="text-lg font-bold text-gray-800">Overview</h2>
            </div>

            <div className="grid grid-cols-3 gap-5">
              {/* Turnover */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Turnover</p>
                    <p className="text-2xl font-bold text-gray-900">$92,405</p>
                  </div>
                  <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🛒</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-500 text-sm font-semibold">↑ +5.39%</span>
                  <span className="text-gray-400 text-xs">vs last month</span>
                </div>
              </div>

              {/* Profit */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Profit</p>
                    <p className="text-2xl font-bold text-gray-900">$32,218</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <span className="text-xl">💵</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-500 text-sm font-semibold">↑ +5.39%</span>
                  <span className="text-gray-400 text-xs">vs last month</span>
                </div>
              </div>

              {/* New customers */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">New Customers</p>
                    <p className="text-2xl font-bold text-gray-900">298</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <span className="text-xl">👤</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-500 text-sm font-semibold">↑ +6.84%</span>
                  <span className="text-gray-400 text-xs">vs last month</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Detailed Report Table ── */}
          <section>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <h2 className="text-lg font-bold text-gray-800">Detailed Report</h2>
              </div>
              <div className="flex gap-2">
                <button className="border border-pink-400 text-pink-500 rounded-lg px-4 py-2 text-sm font-medium hover:bg-pink-50 transition-colors flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                  </svg>
                  Import
                </button>
                <button className="border border-pink-400 text-pink-500 rounded-lg px-4 py-2 text-sm font-medium hover:bg-pink-50 transition-colors flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Export
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <th className="w-10 py-3 pl-5">
                      <input type="checkbox" className="accent-pink-500 w-4 h-4"/>
                    </th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer Name</th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Company</th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Order Value</th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Order Date</th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="py-3 px-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {tableData.map(row => (
                    <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 pl-5">
                        <input
                          type="checkbox"
                          checked={selected.includes(row.id)}
                          onChange={() => toggleSelect(row.id)}
                          className="accent-pink-500 w-4 h-4"
                        />
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                            style={{ backgroundColor: row.color }}
                          >
                            {row.initials}
                          </div>
                          <span className="text-sm font-medium text-gray-800">{row.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-500">{row.company}</td>
                      <td className="py-4 px-4 text-sm font-semibold text-gray-800">{row.order}</td>
                      <td className="py-4 px-4 text-sm text-gray-400">{row.date}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[row.status]}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button className="text-gray-300 hover:text-gray-500 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Table footer */}
              <div className="border-t border-gray-100 px-5 py-4 flex items-center justify-between">
                <span className="text-sm text-gray-400">63 results</span>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-100 text-xs">‹</button>
                  {[1,2,3,'...',8,9].map((p, i) => (
                    <button key={i}
                      className={`w-8 h-8 rounded-lg text-xs font-medium transition-colors ${
                        p === 1 ? 'bg-pink-500 text-white' : 'border border-gray-200 text-gray-500 hover:bg-gray-50'
                      } ${p === '...' ? 'border-none cursor-default' : ''}`}>
                      {p}
                    </button>
                  ))}
                  <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-100 text-xs">›</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
