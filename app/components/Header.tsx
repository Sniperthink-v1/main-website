"use client";

import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Home", id: "section-hero" },
    { name: "Why Us?", id: "why-choose" },
    { name: "Our Products", id: "our-products" },
    { name: "About Us", id: "about-us" },
    { name: "Testimonials", id: "testimonials-section" },
    { name: "FAQ", id: "faq-section" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 80;
      
      // Calculate position with header offset
      const yOffset = -headerHeight;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      // Fallback: scroll to approximate position based on section order
      const sections = [
        'section-hero',
        'why-choose', 
        'our-products',
        'about-us',
        'testimonials-section',
        'faq-section'
      ];
      const index = sections.indexOf(sectionId);
      if (index !== -1) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        const scrollPosition = index * window.innerHeight;
        window.scrollTo({ top: scrollPosition - headerHeight, behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMenuOpen(false); // Close mobile menu
  };

  const handleContactClick = () => {
    onContactClick();
    setMenuOpen(false); // Close mobile menu
  };

  return (
    <>
      {/* Floating Header */}
      <header className="fixed top-0 left-0 w-full z-[9999] border-b border-gray-700/50 backdrop-blur-lg bg-[#0F0F11]/80 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <img
            src="img/logo.svg"
            alt="SniperThink Logo"
            className="cursor-pointer"
            onClick={() => scrollToSection('section-hero')}
          />

          {/* Desktop Nav - Centered */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className="text-gray-300 hover:text-[#91C499] transition-all duration-300 hover:scale-105 font-medium cursor-pointer whitespace-nowrap"
              >
                {item.name}
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
              onClick={handleContactClick}
              className="bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-4 py-2 rounded-60px cursor-pointer"
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
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="text-gray-300 hover:text-[#91C499] transition-all duration-300 font-medium text-lg cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <button
                type="button"
                onClick={handleContactClick}
                className="bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-4 py-2 rounded-60px cursor-pointer"
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
