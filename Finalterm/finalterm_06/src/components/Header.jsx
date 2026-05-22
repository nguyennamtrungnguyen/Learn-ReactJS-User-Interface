import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-2 border-gray-500 flex flex-row justify-between items-center px-8 py-2">
      <h1 className="font-bold text-3xl text-blue-500">Task App</h1>
      <nav className="flex flex-row space-x-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg text-white bg-blue-300 cursor-pointer font-bold px-3 py-1 rounded-2xl  hover:text-blue-500 hover:bg-white
          ${isActive ? "bg-blue-800" : ""}`
          }
        >
          Trang chủ
        </NavLink>
        <NavLink
          to="/task"
          className={({ isActive }) =>
            `text-lg text-white bg-blue-300 cursor-pointer font-bold px-3 py-1 rounded-2xl  hover:text-blue-500 hover:bg-white
          ${isActive ? "bg-blue-800" : ""}`
          }
        >
          Nhiệm vụ
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
