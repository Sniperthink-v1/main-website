"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ContactUs from "./ContactUs";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [active, setActive] = useState("section-hero");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", id: "section-hero" },
    { label: "Why Us?", id: "why-choose" },
    { label: "Our Products", id: "our-products" },
    { label: "About Us", id: "about-us" },
    { label: "Testimonials", id: "testimonials-section" },
    { label: "FAQ", id: "faq-section" },
  ];

  // Detect scroll for header background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ScrollSpy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleContactClick = () => {
    setContactModalOpen(true);
    setMenuOpen(false);
  };

  return (
    <>
      <ContactUs
        isOpen={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <header
        className={`fixed top-0 left-0 z-[9999] w-full h-[64px] transition-all duration-300 px-[clamp(16px,4vw,80px)] ${
          scrolled
            ? "bg-[#0F0F11]/80 border-b border-gray-700/50 backdrop-blur-lg shadow-md"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-full mx-auto flex items-center justify-between relative h-full">
          {/* Left - Logo */}
          <div className="flex items-center lg:pl-[80px]">
            <img
              src="/img/logo.svg"
              alt="SniperThink Logo"
              className="cursor-pointer flex-shrink-0 lg:w-auto h-auto"
            />
          </div>

          {/* Center - Desktop Nav */}
          <nav className="hidden lg:flex pt-[7px] items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-all duration-300 hover:scale-105 font-medium cursor-pointer whitespace-nowrap pb-2 border-b-[3px] ${
                  active === item.id
                    ? "border-[#004A65] text-white"
                    : "border-transparent text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right - Contact Button */}
          <div className="hidden lg:flex items-center lg:pr-[80px]">
            <button
              type="button"
              onClick={handleContactClick}
              className="bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-5 py-2 rounded-[60px] cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex-shrink-0 w-12 h-12 flex items-center justify-center">
            <button
              className="flex items-center justify-center w-full h-full rounded focus:outline-none bg-transparent border-none cursor-pointer"
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
        </div>

        {/* Mobile Menu */}
        <div
  className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out absolute inset-x-0 top-full rounded-b-lg ${
    menuOpen
      ? "max-h-[600px] opacity-100 visible"
      : "max-h-0 opacity-0 invisible"
  }`}
>


          <div className="bg-[#0F0F11]/95 backdrop-blur-lg border-b border-gray-700/50 shadow-lg">
            <nav className="flex flex-col items-center space-y-6 py-8 bg-[#0F0F11]/80">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-all duration-300 font-medium text-xl cursor-pointer w-full text-center py-2 ${
                    active === item.id
                      ? "text-white"
                      : "text-gray-300 hover:text-[#91C499]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={handleContactClick}
                className="bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 py-3 rounded-[60px] cursor-pointer text-lg font-medium w-full max-w-xs"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
