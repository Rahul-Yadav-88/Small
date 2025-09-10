import React from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "../assets/logo.png"; // import your logo

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 w-48 h-screen p-6">
      {/* Logo */}
      <div className="mb-8 flex justify-center">
        <img src={LogoImg} alt="Logo" className="w-40" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
          }
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
          }
        >
          Contact Us
        </NavLink>
      </nav>
    </aside>
  );
}
