import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-orange-600">WarehousePro</h1>
        <nav className="space-x-6 hidden md:flex">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `hover:text-orange-800 ${isActive ? "text-orange-600" : ""}`
            }
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/warehouse"
            className={({ isActive }) =>
              `hover:text-orange-800 ${isActive ? "text-orange-600" : ""}`
            }
          >
            Quản lý
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
