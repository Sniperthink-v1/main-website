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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Fallback active section detection
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      })).filter(section => section.element);

      let currentSection = sections[0]?.id || "section-hero";
      
      for (const section of sections) {
        const rect = section.element!.getBoundingClientRect();
        const headerHeight = 64; // Header height
        
        if (rect.top <= headerHeight + 100 && rect.bottom > headerHeight + 100) {
          currentSection = section.id;
          break;
        }
      }
      
      setActive(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // ScrollSpy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActive(entry.target.id);
          }
        });
      },
      { 
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-80px 0px -50% 0px'
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navItems]);

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
        className={`fixed top-0 left-0 z-[9999] w-full h-[64px] transition-all duration-300 px-[clamp(16px,4vw,80px)] ${scrolled
          ? "bg-[#0F0F11]/80 border-b border-gray-700/50 backdrop-blur-lg shadow-md"
          : "bg-[#0F0F11]/80 border-b border-gray-700/50 backdrop-blur-lg"
          }`}
      >
        <div className="max-w-full mx-auto flex items-center justify-between relative h-full">
          {/* Left - Logo */}
          <div className="flex items-center lg:pl-[80px]">
            <a href="#section-hero" className="cursor-pointer flex-shrink-0">
              <img
                src="/img/logo.svg"
                alt="SniperThink Logo"
                className="h-7 w-auto"
              />
            </a>
          </div>

          {/* Center - Desktop Nav */}
          <nav className="hidden lg:flex pt-[7px] items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <a
                  href={`#${item.id}`}
                  className={`transition-all duration-300 hover:scale-105 font-medium cursor-pointer whitespace-nowrap pb-2 border-b-[3px] ${active === item.id
                    ? "border-[#004A65] text-white"
                    : "border-transparent text-gray-300 hover:text-white"
                    }`}
                >
                  {item.label}
                </a>

                {/* Dropdown for Our Products */}
                {item.id === "our-products" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-transparent backdrop-blur-lg border border-gray-700/50 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-3">
                      <a
                        href="#our-products"
                        onClick={(e) => {
                          e.preventDefault();
                          // First scroll to products section
                          document.getElementById('our-products')?.scrollIntoView({ behavior: 'smooth' });
                          // Then activate product1 after a short delay
                          setTimeout(() => {
                            const product1Element = document.getElementById('product1');
                            if (product1Element) {
                              product1Element.click();
                            }
                          }, 500);
                        }}
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/30 transition-colors duration-200 border-b border-gray-700/30"
                      >
                        <div className="font-medium text-sm">Intelligence Growth Engine</div>

                      </a>
                      <a
                        href="#our-products"
                        onClick={(e) => {
                          e.preventDefault();
                          // First scroll to products section
                          document.getElementById('our-products')?.scrollIntoView({ behavior: 'smooth' });
                          // Then activate product2 after a short delay
                          setTimeout(() => {
                            const product2Element = document.getElementById('product2');
                            if (product2Element) {
                              product2Element.click();
                            }
                          }, 500);
                        }}
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/30 transition-colors duration-200"
                      >
                        <div className="font-medium text-sm">AI Chat + Voice Agents</div>

                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right - Contact Button */}
          <div className="hidden lg:flex items-center lg:pr-[80px]">
            <a
              href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center relative cursor-pointer transition-all duration-300"
              style={{
                width: '135px',
                height: '44px',
                gap: '12px',
                paddingTop: '12px',
                paddingRight: '30px',
                paddingBottom: '12px',
                paddingLeft: '30px',
                borderRadius: '24px',
                border: '1px solid #E1A940C4',
                borderImageSource: 'linear-gradient(180deg, #E1A940 0%, #E1A940 77%, #FFFFFF 20%, linear-gradient 30%, #FF6700 0%, #FF8633 70%)',
                borderImageSlice: '1',
                background: 'linear-gradient(180deg, rgba(255, 103, 0, 0) 0%, rgba(255, 103, 0, 1) 100%)',
                boxShadow: 'inset 0 10px 30px 0 rgba(255, 103, 0, 0.7), 0 10px 27.6px 0 rgba(0, 0, 0, 0.22)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <span className="font-medium text-white text-sm leading-5 whitespace-nowrap">
                Contact Us
              </span>
            </a>
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
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out absolute inset-x-0 top-full rounded-b-lg ${menuOpen
            ? "max-h-[600px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
            }`}
        >


          <div className="bg-[#0F0F11]/95 backdrop-blur-lg border-b border-gray-700/50 shadow-lg">
            <nav className="flex flex-col items-center space-y-6 py-8 bg-[#0F0F11]/80">
              {navItems.map((item) => (
                <div key={item.id} className="w-full">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`transition-all duration-300 font-medium text-xl cursor-pointer w-full text-center py-2 block ${active === item.id
                      ? "text-white"
                      : "text-gray-300 hover:text-[#91C499]"
                      }`}
                  >
                    {item.label}
                  </a>

                  {/* Mobile Dropdown for Our Products */}
                  {item.id === "our-products" && (
                    <div className="mt-2 space-y-2">
                      <a
                        href="#our-products"
                        onClick={(e) => {
                          e.preventDefault();
                          setMenuOpen(false);
                          // First scroll to products section
                          document.getElementById('our-products')?.scrollIntoView({ behavior: 'smooth' });
                          // Then activate product1 after a short delay
                          setTimeout(() => {
                            const product1Element = document.getElementById('product1');
                            if (product1Element) {
                              product1Element.click();
                            }
                          }, 500);
                        }}
                        className="block text-center py-2 text-gray-400 hover:text-white transition-colors duration-200 text-base font-normal"
                      >
                        Intelligence Growth Engine
                      </a>
                      <a
                        href="#our-products"
                        onClick={(e) => {
                          e.preventDefault();
                          setMenuOpen(false);
                          // First scroll to products section
                          document.getElementById('our-products')?.scrollIntoView({ behavior: 'smooth' });
                          // Then activate product2 after a short delay
                          setTimeout(() => {
                            const product2Element = document.getElementById('product2');
                            if (product2Element) {
                              product2Element.click();
                            }
                          }, 500);
                        }}
                        className="block text-center py-2 text-gray-400 hover:text-white transition-colors duration-200 text-base font-normal"
                      >
                        AI Chat + Voice Agents
                      </a>
                    </div>
                  )}
                </div>
              ))}
              <a
                href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#E1A940] to-[#FF6700] hover:from-[#FF6700] hover:to-[#E1A940] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 py-3 rounded-[60px] cursor-pointer text-lg font-medium w-full max-w-xs inline-block text-center"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
