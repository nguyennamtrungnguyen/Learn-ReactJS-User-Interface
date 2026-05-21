// src/components/layout/Header.jsx

import React from "react";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
            D
          </div>
          <h1 className="text-2xl font-bold tracking-wide">DailyZone</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <a href="/" className="hover:text-gray-500 transition duration-300">
            Home
          </a>

          <a
            href="/shop"
            className="hover:text-gray-500 transition duration-300"
          >
            Shop
          </a>

          <a
            href="/about"
            className="hover:text-gray-500 transition duration-300"
          >
            About
          </a>

          <a
            href="/contact"
            className="hover:text-gray-500 transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="hover:bg-gray-100 p-2 rounded-full transition">
            <Search size={22} />
          </button>

          {/* Cart */}
          <button className="relative hover:bg-gray-100 p-2 rounded-full transition">
            <ShoppingCart size={22} />

            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* User */}
          <button className="hover:bg-gray-100 p-2 rounded-full transition">
            <User size={22} />
          </button>

          {/* Mobile menu */}
          <button className="md:hidden hover:bg-gray-100 p-2 rounded-full transition">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
