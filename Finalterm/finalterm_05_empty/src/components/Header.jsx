export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-3xl font-bold text-indigo-600">MyApp</div>
        <nav className="flex space-x-8 text-gray-700">
          <a
            to="/"
            className="py-1 hover:text-indigo-600 transition font-medium"
          >
            Home
          </a>
          <a
            to="/about"
            className="py-1 hover:text-indigo-600 transition font-medium"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
