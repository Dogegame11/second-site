import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "text-blue-600 font-semibold border-b-2 border-blue-600";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">MyCourses</h1>

        <div className="flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hover:text-blue-500 ${isActive ? activeStyle : "text-gray-700"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `hover:text-blue-500 ${isActive ? activeStyle : "text-gray-700"}`
            }
          >
            Courses
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
