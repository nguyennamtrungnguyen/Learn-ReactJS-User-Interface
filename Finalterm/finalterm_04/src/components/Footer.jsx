// src/components/layout/Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold mb-4">DailyZone</h1>

          <p className="text-gray-400 leading-relaxed">
            Modern fashion store with premium quality products and fast delivery
            service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>

            <li>
              <a href="/shop" className="hover:text-white transition">
                Shop
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>

          <div className="space-y-4 text-gray-400">
            <div className="flex items-center gap-3">
              <span>+84 123 456 789</span>
            </div>

            <div className="flex items-center gap-3">
              <span>support@dailyzone.com</span>
            </div>

            <div className="flex items-start gap-3">
              <span>Ho Chi Minh City, Vietnam</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>

          <div className="flex gap-4">
            <button className="p-3 bg-gray-800 rounded-full hover:bg-white hover:text-black transition"></button>

            <button className="p-3 bg-gray-800 rounded-full hover:bg-white hover:text-black transition"></button>

            <button className="p-3 bg-gray-800 rounded-full hover:bg-white hover:text-black transition"></button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-5 text-center text-gray-500 text-sm">
        © 2026 DailyZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
