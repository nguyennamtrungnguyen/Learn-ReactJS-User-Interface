import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between mx-20 py-10">
      <h1 className="font-bold text-3xl text-blue-500">My Website</h1>
      <nav className="space-x-3 mt-2">
        <NavLink className="text-xl hover:text-red-500" to="/">
          Trang chủ
        </NavLink>
        <NavLink className="text-xl hover:text-red-500" to="/task">
          Nhiệm vụ
        </NavLink>
      </nav>
      
    </div>
  );
};

export default Header;
