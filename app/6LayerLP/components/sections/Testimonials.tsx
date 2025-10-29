import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { testimonials } from "@/data/testimonials";
import './testimonials.css';

// Define a dummy variable to avoid errors from existing code
const activeCard = -1; // Value that won't match any index

export const TestimonialSection: React.FC = () => {
  return (
    <div
      id="testimonials"
      className="flex flex-col items-start gap-4 sm:gap-6 md:gap-10 relative w-full max-w-full mx-auto
                 px-[20px] lg:px-[80px] py-10 lg:py-10"
    >
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 w-full mb-6 md:mb-8 lg:mb-12">
        {/* Heading */}
        <div className="flex-1 text-center lg:text-left">
          <div className="font-semibold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] leading-normal mb-2">
            WHAT OUR CLIENTS SAY
          </div>
          <p className="text-white/80 lg:pt-5 text-sm sm:text-base leading-6 max-w-none">
            SniperThink transforms how teams operate, qualify, and scale. But don't take our word for it.
          </p>
        </div>
        
        {/* Background gradients */}
        <div className="absolute top-20 left-0 w-[100px] h-[150px] sm:top-32 sm:w-[220px] sm:h-[220px] md:top-40 md:w-[300px] md:h-[300px] bg-gradient-to-t from-[#1A6262] to-[#1A6262] blur-[100px] sm:blur-[120px] md:blur-[150px] opacity-50 pointer-events-none z-10"></div>
        <div className="absolute bottom-10 right-5 w-[10px] h-[150px] sm:bottom-auto sm:top-[-10px] sm:right-40 sm:w-[220px] sm:h-[220px] md:right-80 md:w-[300px] md:h-[300px] bg-gradient-to-t from-[#1A6262] to-[#1A6262] blur-[100px] sm:blur-[120px] md:blur-[150px] opacity-50 pointer-events-none z-10"></div>
      </div>

      {/* Desktop View - Marquee Animation */}
      <div className="hidden lg:block relative w-full overflow-hidden">
        <div className="testimonial-marquee">
          <div className="testimonial-marquee-track">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={`orig-${index}`} className="w-[350px] flex-shrink-0">
                <div
                  className="testimonial-card flex flex-col w-full items-start justify-center gap-2.5 p-6 relative rounded-xl bg-[hsla(214,23%,96%,0.05)] opacity-70"
                >
                  {/* Quote Icon */}
                  <div className="relative w-8 h-8 mb-2">
                    {/* Replaced with a suitable available SVG */}
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[30px] h-[30px] top-0 left-1.5">
                      <path d="M10 11L7 15H10V19H4V15L7 11V7H10V11ZM20 11L17 15H20V19H14V15L17 11V7H20V11Z" fill="#1A6262"/>
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start justify-center gap-6 w-full">
                    <div className="flex min-h-[120px] items-start justify-center gap-2.5 w-full">
                      <p className="flex-1 self-stretch -mt-0.5 font-semibold text-base leading-6 text-white">
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-center gap-1 w-full">
                      <div className="w-fit -mt-0.5 font-bold text-white text-sm leading-5 whitespace-nowrap">{testimonial.author}</div>
                      <div className="w-fit opacity-60 font-normal text-white text-xs leading-[18px] whitespace-nowrap">{testimonial.role}</div>
                    </div>
                  </div>

                  {/* Line separator - using border instead of image */}
                  <div className="w-full h-px -mb-px bg-gray-700"></div>
                </div>
              </div>
            ))}
            
            {/* Duplicate testimonials to create seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`dup-${index}`} className="w-[350px] flex-shrink-0">
                <div
                  className="testimonial-card flex flex-col w-full items-start justify-center gap-2.5 p-6 relative rounded-xl bg-[hsla(214,23%,96%,0.05)] opacity-70"
                >
                  {/* Quote Icon */}
                  <div className="relative w-8 h-8 mb-2">
                    {/* Replaced with a suitable available SVG */}
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[30px] h-[30px] top-0 left-1.5">
                      <path d="M10 11L7 15H10V19H4V15L7 11V7H10V11ZM20 11L17 15H20V19H14V15L17 11V7H20V11Z" fill="#1A6262"/>
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start justify-center gap-6 w-full">
                    <div className="flex min-h-[120px] items-start justify-center gap-2.5 w-full">
                      <p className="flex-1 self-stretch -mt-0.5 font-semibold text-base leading-6 text-white">
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-center gap-1 w-full">
                      <div className="w-fit -mt-0.5 font-bold text-white text-sm leading-5 whitespace-nowrap">{testimonial.author}</div>
                      <div className="w-fit opacity-60 font-normal text-white text-xs leading-[18px] whitespace-nowrap">{testimonial.role}</div>
                    </div>
                  </div>

                  {/* Line separator - using border instead of image */}
                  <div className="w-full h-px -mb-px bg-gray-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet View - Marquee Animation */}
      <div className="hidden md:block lg:hidden relative w-full overflow-hidden">
        <div className="testimonial-marquee" style={{"--duration": "35s"} as React.CSSProperties}>
          <div className="testimonial-marquee-track">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={`tablet-orig-${index}`} className="w-[450px] flex-shrink-0 px-4">
                <div className="testimonial-card flex flex-col w-full items-start justify-center gap-2.5 p-6 md:p-8 relative">
                  {/* Quote Icon */}
                  <div className="relative w-8 h-8 mb-2">
                    {/* Replaced with a suitable available SVG */}
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[30px] h-[30px] top-0 left-1.5">
                      <path d="M10 11L7 15H10V19H4V15L7 11V7H10V11ZM20 11L17 15H20V19H14V15L17 11V7H20V11Z" fill="#1A6262"/>
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start justify-center gap-6 w-full">
                    <div className="flex min-h-[120px] md:min-h-[160px] items-start justify-center gap-2.5 w-full">
                      <p className="flex-1 self-stretch -mt-0.5 font-semibold text-base md:text-lg leading-6 md:leading-7 text-white">
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-center gap-1 w-full">
                      <div className="w-fit -mt-0.5 font-bold text-white text-sm md:text-base leading-5 whitespace-nowrap">{testimonial.author}</div>
                      <div className="w-fit opacity-60 font-normal text-white text-xs md:text-sm leading-[18px] whitespace-nowrap">{testimonial.role}</div>
                    </div>
                  </div>

                  {/* Line separator - using border instead of image */}
                  <div className="w-full h-px -mb-px bg-gray-700"></div>
                </div>
              </div>
            ))}
            
            {/* Duplicate testimonials for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`tablet-dup-${index}`} className="w-[450px] flex-shrink-0 px-4">
                <div className="testimonial-card flex flex-col w-full items-start justify-center gap-2.5 p-6 md:p-8 relative">
                  {/* Quote Icon */}
                  <div className="relative w-8 h-8 mb-2">
                    {/* Replaced with a suitable available SVG */}
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[30px] h-[30px] top-0 left-1.5">
                      <path d="M10 11L7 15H10V19H4V15L7 11V7H10V11ZM20 11L17 15H20V19H14V15L17 11V7H20V11Z" fill="#1A6262"/>
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start justify-center gap-6 w-full">
                    <div className="flex min-h-[120px] md:min-h-[160px] items-start justify-center gap-2.5 w-full">
                      <p className="flex-1 self-stretch -mt-0.5 font-semibold text-base md:text-lg leading-6 md:leading-7 text-white">
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-center gap-1 w-full">
                      <div className="w-fit -mt-0.5 font-bold text-white text-sm md:text-base leading-5 whitespace-nowrap">{testimonial.author}</div>
                      <div className="w-fit opacity-60 font-normal text-white text-xs md:text-sm leading-[18px] whitespace-nowrap">{testimonial.role}</div>
                    </div>
                  </div>

                  {/* Line separator - using border instead of image */}
                  <div className="w-full h-px -mb-px bg-gray-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View - Marquee Animation */}
      <div className="md:hidden w-full overflow-hidden">
        <div className="testimonial-marquee" style={{"--duration": "30s"} as React.CSSProperties}>
          <div className="testimonial-marquee-track">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={`mobile-orig-${index}`} className="w-[280px] flex-shrink-0 px-2">
                <div className="testimonial-card flex flex-col w-full mx-auto items-start justify-center gap-3 p-5 sm:p-6 relative">
                  <div className="relative w-8 h-8 mb-2">
                    {/* Replaced with a suitable available SVG */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[28px] h-[28px] top-0 left-1.5">
                      <path d="M10 11L7 15H10V19H4V15L7 11V7H10V11ZM20 11L17 15H20V19H14V15L17 11V7H20V11Z" fill="#1A6262"/>
                    </svg>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 w-full">
                    <div className="flex min-h-[100px] items-start justify-center w-full">
                      <p className="flex-1 font-medium text-sm sm:text-base leading-6 text-white">
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-1 w-full">
                      <div className="font-bold text-white text-sm sm:text-base leading-5">{testimonial.author}</div>
                      <div className="opacity-60 font-normal text-white text-xs sm:text-sm leading-[18px]">{testimonial.role}</div>
                    </div>
                  </div>

                  {/* Line separator - using border instead of image */}
                  <div className="w-full h-px mt-3 bg-gray-700"></div>
                </div>
              </div>
            ))}
            
            {/* Duplicate testimonials for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`mobile-dup-${index}`} className="w-[280px] flex-shrink-0 px-2">
                <div className="testimonial-card flex flex-col w-full mx-auto items-start justify-center gap-3 p-5 sm:p-6 relative">
                  <div className="relative w-8 h-8 mb-2">
                    {/* Replaced with a suitable available SVG */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-[28px] h-[28px] top-0 left-1.5">
                      <path d="M10 11L7 15H10V19H4V15L7 11V7H10V11ZM20 11L17 15H20V19H14V15L17 11V7H20V11Z" fill="#1A6262"/>
                    </svg>
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 w-full">
                    <div className="flex min-h-[100px] items-start justify-center w-full">
                      <p className="flex-1 font-medium text-sm sm:text-base leading-6 text-white">
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-1 w-full">
                      <div className="font-bold text-white text-sm sm:text-base leading-5">{testimonial.author}</div>
                      <div className="opacity-60 font-normal text-white text-xs sm:text-sm leading-[18px]">{testimonial.role}</div>
                    </div>
                  </div>

                  {/* Line separator - using border instead of image */}
                  <div className="w-full h-px mt-3 bg-gray-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
