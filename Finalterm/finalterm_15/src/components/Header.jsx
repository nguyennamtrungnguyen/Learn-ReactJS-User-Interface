import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CartModal from "./CartModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CartModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
      <div className="border-2 border-gray-300 py-4 px-8 flex justify-between items-center">
        <p className="text-green-500 text-3xl font-bold">E-Commerce App</p>
        <nav className="space-x-8">
          <NavLink
            to={""}
            className={({ isActive }) =>
              `text-green-500 hover:text-green-800 ${
                isActive ? "font-bold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              `text-green-500 hover:text-green-800 ${
                isActive ? "font-bold" : ""
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to={"/orders"}
            className={({ isActive }) =>
              `text-green-500 hover:text-green-800 ${
                isActive ? "font-bold" : ""
              }`
            }
          >
            Orders
          </NavLink>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-800 text-white font-bold px-4 py-1 rounded-lg"
          >
            Cart
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
