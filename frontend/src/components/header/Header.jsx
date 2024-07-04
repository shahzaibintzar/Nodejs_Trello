import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">My Website</div>
        <nav className="hidden md:flex space-x-4">
          <NavLink
            to="/"
            exact
            className="hover:text-gray-200"
            activeClassName="underline"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-gray-200"
            activeClassName="underline"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-gray-200"
            activeClassName="underline"
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className="hover:text-gray-200"
            onClick={toggleMenu}
            activeClassName="underline"
          >
            Login
          </NavLink>
          <NavLink
            to="/signUp"
            className="hover:text-gray-200"
            onClick={toggleMenu}
            activeClassName="underline"
          >
            SignUp
          </NavLink>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-blue-600">
          <NavLink
            to="/"
            exact
            className="block py-2 px-4 hover:bg-blue-700"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block py-2 px-4 hover:bg-blue-700"
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-2 px-4 hover:bg-blue-700"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className="block py-2 px-4 hover:bg-blue-700"
            onClick={toggleMenu}
          >
            Login
          </NavLink>
          <NavLink
            to="/signUp"
            className="block py-2 px-4 hover:bg-blue-700"
            onClick={toggleMenu}
          >
            SignUp
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
