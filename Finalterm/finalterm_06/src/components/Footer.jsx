import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-2">MyApp</h4>
          <p className="text-sm">© 2025 MyApp. All rights reserved.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Liên kết</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `py-1 hover:text-indigo-600 transition font-medium ${
                    isActive ? "text-indigo-600" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `py-1 hover:text-indigo-600 transition font-medium ${
                    isActive ? "text-indigo-600" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
