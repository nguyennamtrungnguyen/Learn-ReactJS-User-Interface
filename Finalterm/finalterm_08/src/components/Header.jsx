import { Link, NavLink } from "react-router-dom";
import CartModal from "./CartModal";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const amount = useSelector((state) => state.cart.totalItems);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-3xl font-bold text-indigo-600">MyApp</div>
        <nav className="flex space-x-8 text-gray-700">
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
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `py-1 hover:text-indigo-600 transition font-medium ${
                isActive ? "text-indigo-600" : ""
              }`
            }
          >
            Products
          </NavLink>

          <button
            onClick={() => setIsOpen(true)}
            className="py-1 bg-amber-300 hover:bg-amber-500 font-medium text-white px-1 rounded-lg"
          >
            Giỏ hàng <span>{amount ? `x ${amount}` : ""}</span>
          </button>
        </nav>
      </div>

      <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
