"use client";

import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar sticky top-0 z-50 flex justify-between items-center px-5 py-2.5 mt-2.5 font-sans ${darkMode ? 'dark-mode' : 'light-mode'}`}
    >
      {/* Navbar Name */}
      <div className="font-bold text-xl ml-2.5">Navneeth</div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden text-xl cursor-pointer">
        <button
          onClick={handleToggleMenu}
          aria-label="Toggle Menu"
          className={`${darkMode ? 'text-white' : 'text-black'}`}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu and Toggle Dropdown for Mobile */}
      <div
        className={`md:hidden absolute top-12 right-5 w-48 bg-white dark:bg-black shadow-md rounded-lg p-4 transition-all duration-300 ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col list-none gap-3">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section} className="relative">
              <button
                onClick={() => scrollToSection(section)}
                className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-black'} hover:text-inherit transition-colors duration-300 w-full text-left`}
                aria-label={`Go to ${section}`}
              >
                {section}
              </button>
              <span
                className={`block h-0.75 w-0 bg-transparent absolute bottom-[-5px] left-0 transition-all duration-500 ${
                  darkMode ? 'hover:bg-white' : 'hover:bg-black'
                }`}
                style={{ width: '0' }}
              >
                &nbsp;
              </span>
              <style jsx>{`
                li:hover span {
                  width: 100%;
                }
              `}</style>
            </li>
          ))}
        </ul>
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`mt-3 flex items-center justify-center p-2 rounded-full w-full ${
            darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
          } hover:${darkMode ? 'bg-gray-600' : 'bg-gray-300'} transition-colors duration-200`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      {/* Desktop Menu and Toggle */}
      <div className="hidden md:flex md:items-center">
        <ul className="flex items-center list-none gap-5">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section} className="relative">
              <button
                onClick={() => scrollToSection(section)}
                className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-black'} hover:text-inherit transition-colors duration-300`}
                aria-label={`Go to ${section}`}
              >
                {section}
              </button>
              <span
                className={`block h-0.75 w-0 bg-transparent absolute bottom-[-5px] left-0 transition-all duration-500 ${
                  darkMode ? 'hover:bg-white' : 'hover:bg-black'
                }`}
                style={{ width: '0' }}
              >
                &nbsp;
              </span>
              <style jsx>{`
                li:hover span {
                  width: 100%;
                }
              `}</style>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleDarkMode}
          className={`ml-5 flex items-center justify-center p-2 rounded-full ${
            darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
          } hover:${darkMode ? 'bg-gray-600' : 'bg-gray-300'} transition-colors duration-200`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;