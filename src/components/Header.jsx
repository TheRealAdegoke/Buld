import React, { useState } from "react";
import Logo from "../../public/logo.svg";
import barIcon from "../../public/barIcon.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto pr-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="block mt-2 md:hidden ml-2"
          >
            <img src={Logo} alt="Company's logo" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-[#060C3C] font-semibold">
            <Link to="/" className="block mt-2">
              <img src={Logo} alt="Company's logo" />
            </Link>
            <div className="hidden md:flex items-center space-x-6 text-[#060C3C] font-semibold mt-2 ml-4">
              <Link to="/" className="">
                Pricing
              </Link>
              <Link to="/" className="">
                Resource Center
              </Link>
              <Link to="/" className="">
                About
              </Link>
              <Link to="/" className="">
                Contact
              </Link>
            </div>
          </nav>

          {/* CTA & Auth */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-[#060C3C] font-semibold md:mt-2 block">
              Login
            </Link>
            <Link
              to="/"
              className="px-4 py-2 bg-[#6241D4] text-white rounded-md"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={barIcon} alt="bar icon" className="block select-none" />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 space-y-4 text-[#060C3C] font-semibold">
            <Link to="/" className="block">
              Home
            </Link>
            <Link to="/" className="block">
              Courses
            </Link>
            <Link to="/" className="block">
              Community
            </Link>
            <Link to="/" className="block">
              Login
            </Link>
            <Link
              to="/"
              className="block px-4 py-2 bg-[#6241D4] text-white rounded-md text-center"
            >
              Sign Up
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;