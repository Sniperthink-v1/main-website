import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#080C0D] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Section - Logo, Tagline, Legal Links, Contact */}
          <div className="lg:col-span-5 space-y-8">
            {/* Logo and Tagline */}
            <div className="space-y-6">
              <a href="#section-hero" className="inline-block cursor-pointer">
                <img
                  src="/img/LogoTeal.svg"
                  alt="SniperThink Logo"
                  className="h-8 w-auto"
                />
              </a>
              <p className="text-gray-300 text-base leading-relaxed max-w-md font-light">
                SniperThink delivers clarity, automation, and AI-driven execution for fast-moving teams. Your edge starts here.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="/terms" 
                className="text-gray-400 hover:text-[#1A6262] transition-colors duration-300 hover:underline decoration-[#1A6262]"
              >
                Terms & Conditions
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="/privacy" 
                className="text-gray-400 hover:text-[#1A6262] transition-colors duration-300 hover:underline decoration-[#1A6262]"
              >
                Privacy Policy
              </a>
            </div>

            {/* Contact Information */}
            <div className="flex items-center gap-8">
              {/* Phone */}
              <div className="flex items-center gap-2 group">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#1A6262] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <a 
                  href="tel:+919873587694" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-bold"
                >
                  +91 9873587694
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 group">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#1A6262] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <a 
                  href="mailto:hello@snipethink.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-bold"
                >
                  hello@snipethink.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="lg:col-span-7">
            {/*<h3 className="text-white font-semibold text-lg mb-8 tracking-wide">Quick Links</h3>*/}

            {/* Desktop Layout - 2 Column Grid */}
            <div className="hidden md:grid grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-6">
                <a 
                  href="#section-hero" 
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 ">Home</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                <a 
                  href="#about-us" 
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              <div className="space-y-6">
                <a 
                  href="#our-products" 
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Products</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
                <a 
                  href="#faq-section" 
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">FAQs</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Mobile Layout - Single Column Stack */}
            <div className="md:hidden space-y-4">
              <a 
                href="#section-hero" 
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <a 
                href="#about-us" 
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <a 
                href="#our-products" 
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Products</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <a 
                href="#faq-section" 
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">FAQs</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/60 my-10"></div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-4">
          
          {/* Copyright - Left Aligned */}
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-gray-500 text-xs md:text-sm font-light tracking-wide">
              Copyright © 2025 | SniperThink, All Rights Reserved
            </p>
          </div>

          {/* Social Media - Right Aligned */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-1 md:order-2">
            <span className="text-gray-400 text-sm font-light whitespace-nowrap">Connect with us:</span>
            
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/sniperthink"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="group flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none"
              >
                <img 
                  src="/img/facebook.svg" 
                  alt="Facebook" 
                  className="w-5 h-5 text-gray-400 group-hover:text-[#1A6262] transition-colors duration-300"
                />
              </a>
              
              <a
                href="https://www.instagram.com/sniperthink/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="group flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none"
              >
                <img 
                  src="/img/insta.svg" 
                  alt="Instagram" 
                  className="w-5 h-5 text-gray-400 group-hover:text-[#1A6262] transition-colors duration-300"
                />
              </a>
              
              <a
                href="https://www.linkedin.com/company/sniperthink/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="group flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none"
              >
                <img 
                  src="/img/linkedin.svg" 
                  alt="LinkedIn" 
                  className="w-5 h-5 text-gray-400 group-hover:text-[#1A6262] transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
