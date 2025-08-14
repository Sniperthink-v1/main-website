"use client";

import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    "Home",
    "Why Us?",
    "Our Products",
    "About Us",
    "Testimonials",
    "FAQ",
  ];

  return (
    <>
      {/* Floating Header */}
      <header className="fixed top-0 left-0 w-full z-[9999] border-b border-gray-700/50 backdrop-blur-lg bg-[#0F0F11]/80 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <img
                src="img/logo.svg"
                alt="SniperThink Logo"
              />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-[#91C499] transition-all duration-300 hover:scale-105 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              type="button"
              className="text-gray-300 hover:text-[#91C499] hover:bg-[#1A6262]/10 px-4 py-2 rounded transition-all duration-300"
            >
      
            </button>
            <button
              type="button"
              className="bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-4 py-2 rounded-60px"
            >
              Contact Us
            </button>
          </div>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden flex items-center justify-center p-2 rounded focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-7 h-7 text-gray-300" />
            ) : (
              <Menu className="w-7 h-7 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu with Transition */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out  ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0F0F11]/95 backdrop-blur-lg border-b border-gray-700/50 shadow-lg">
            <nav className="flex flex-col items-center space-y-4 py-6 border-gray-700/50 backdrop-blur-lg bg-[#0F0F11]/80">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-[#91C499] transition-all duration-300 font-medium text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                type="button"
                className=" bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-4 py-2 rounded-60px"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Push page content down so it's not hidden under fixed header */}
      <div className="pt-[80px]"></div>
    </>
  );
}
