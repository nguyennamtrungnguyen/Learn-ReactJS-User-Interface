import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-2 border-gray-500 flex flex-row justify-between items-center px-8 py-6">
      <h1 className="text-3xl font-bold text-blue-500">TASK TRACER APP</h1>
      <nav className="space-x-8">
        <NavLink
          to={""}
          className={({ isActive }) =>
            `text-lg text-blue-300 hover:text-blue-600 cursor-pointer ${
              isActive ? "font-bold text-blue-600" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/tasks"}
          className={({ isActive }) =>
            `text-lg text-blue-300 hover:text-blue-600 cursor-pointer ${
              isActive ? "font-bold text-blue-600" : ""
            }`
          }
        >
          Tasks
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
