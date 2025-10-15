import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../UI/Menu";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow p-6 bg-gray-50">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        © {new Date().getFullYear()} My Courses App
      </footer>
    </div>
  );
};

export default MainLayout;
