"use client";

import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import ContactUs from "./ContactUs";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleContactClick = () => {
    setContactModalOpen(true);
  };

  const navItems = [
    { name: "Home", href: "#section-hero" },
    { name: "About Us", href: "#about-us" },
    { name: "Why Us", href: "#why-choose" },
    { name: "Testimonials", href: "#testimonials-section" },
    { name: "FAQ", href: "#faq-section" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[1000] border-b border-gray-700/50 backdrop-blur-lg"
      style={{
        width: "100%",
        height: "64px",
        opacity: 1,
        paddingTop: "8px",
        paddingRight: "clamp(16px, 4vw, 80px)",
        paddingBottom: "8px",
        paddingLeft: "clamp(16px, 4vw, 80px)",
        background: "rgba(10, 10, 10, 0.6)",
        backdropFilter: "blur(56px)",
        boxShadow:
          "0px 6.65px 5.32px 0px #00000007, 0px 22.34px 17.87px 0px #0000000B, 0px 100px 80px 0px #00000012",
      }}
    >
      <div className="max-w-full mx-auto flex items-stretch justify-between relative">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer pl-0 sm:pl-2 md:pl-4 lg:pl-6 xl:pl-8">
          <img
            src="/img/logo.svg"
            alt="SniperThink Logo"
            className="h-7 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center space-x-8 py-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-gray-300 hover:text-[#91C499] transition-all duration-300 hover:scale-105 font-medium py-1"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center lg:pr-[80px]">
          <a
            href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center relative cursor-pointer transition-all duration-300"
            style={{
              width: "135px",
              height: "44px",
              gap: "12px",
              paddingTop: "12px",
              paddingRight: "30px",
              paddingBottom: "12px",
              paddingLeft: "30px",
              borderRadius: "24px",
              border: "1px solid #E1A940C4",
              borderImageSource:
                "linear-gradient(180deg, #E1A940 0%, #E1A940 77%, #FFFFFF 20%, linear-gradient 30%, #FF6700 0%, #FF8633 70%)",
              borderImageSlice: "1",
              background:
                "linear-gradient(180deg, rgba(255, 103, 0, 0) 0%, rgba(255, 103, 0, 1) 100%)",
              boxShadow:
                "inset 0 10px 30px 0 rgba(255, 103, 0, 0.7), 0 10px 27.6px 0 rgba(0, 0, 0, 0.22)",
              backdropFilter: "blur(20px)",
            }}
          >
            <span className="font-medium text-white text-sm leading-5 whitespace-nowrap">
              Contact Us
            </span>
          </a>
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
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0F0F11]/95 backdrop-blur-lg border-b border-gray-700/50 shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  handleSmoothScroll(e, item.href);
                  setMenuOpen(false);
                }}
                className="text-gray-300 hover:text-[#91C499] transition-all duration-300 font-medium text-lg"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center relative cursor-pointer transition-all duration-300"
              style={{
                width: "135px",
                height: "44px",
                gap: "12px",
                paddingTop: "12px",
                paddingRight: "30px",
                paddingBottom: "12px",
                paddingLeft: "30px",
                borderRadius: "24px",
                border: "1px solid #E1A940C4",
                borderImageSource:
                  "linear-gradient(180deg, #E1A940 0%, #E1A940 77%, #FFFFFF 20%, linear-gradient 30%, #FF6700 0%, #FF8633 70%)",
                borderImageSlice: "1",
                background:
                  "linear-gradient(180deg, rgba(255, 103, 0, 0) 0%, rgba(255, 103, 0, 1) 100%)",
                boxShadow:
                  "inset 0 10px 30px 0 rgba(255, 103, 0, 0.7), 0 10px 27.6px 0 rgba(0, 0, 0, 0.22)",
                backdropFilter: "blur(20px)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-medium text-white text-sm leading-5 whitespace-nowrap">
                Contact Us
              </span>
            </a>
          </nav>
        </div>
      </div>

      {/* Contact Us Modal */}
      <ContactUs
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </header>
  );
}
