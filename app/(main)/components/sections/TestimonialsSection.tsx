import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define a dummy variable to avoid errors from existing code
const activeCard = -1; // Value that won't match any index

export default function TestimonialsSection() {
  // CSS for marquee animation
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      .testimonial-marquee {
        --duration: 40s;
        display: flex;
        overflow: hidden;
        position: relative;
        width: 100%;
      }
      
      .testimonial-marquee-track {
        animation: marquee var(--duration) linear infinite;
        display: flex;
        gap: 1.5rem;
        width: fit-content;
        padding: 0;
      }
      
      .testimonial-marquee-track:hover {
        animation-play-state: paused;
      }
      
      .testimonial-card {
        transition: all 0.3s ease-in-out;
        background: hsla(214, 23%, 96%, 0.05);
        opacity: 0.7;
        border-radius: 0.75rem;
      }
      
      .testimonial-card:hover {
        background: linear-gradient(180deg, rgba(252,230,178,0.5) 0%, rgba(210,159,52,0.5) 100%);
        transform: scale(1.05);
        opacity: 1;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      
      .testimonial-card p {
        color: white !important;
      }
      
      .testimonial-card:hover p {
        color: var(--collection-1-colours-accent-light-green-light-green-300) !important;
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  const testimonials = [
    {
      id: 0,
      quote: "Before SniperThink, we had scattered dashboards and missed signals. Now, we act on what matters—fast.",
      name: "Rohit M.",
      title: "Growth Lead",
      quoteIcon: "/img/quote-blue.svg",
      isHighlighted: false
    },
    {
      id: 1,
      quote: "The AI agents segment leads better than any human SDR we've hired. Massive efficiency boost.",
      name: "Divya K",
      title: "SaaS Founder",
      quoteIcon: "/img/quote-blue.svg",
      isHighlighted: true
    },
    {
      id: 2,
      quote: "With the growth engine, we finally see predictive KPIs instead of just historical ones. Total game-changer.",
      name: "Arjun P",
      title: "COO",
      quoteIcon: "/img/quote-blue.svg",
      isHighlighted: false
    }
  ];

  // Navigation functions removed as we're not highlighting based on active card anymore

  return (
    <div
  id="testimonials-section"
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
        
        {/* Navigation buttons removed as we're using continuous marquee instead */}
        <div className="absolute top-20 left-0 w-[100px] h-[150px] sm:top-32 sm:w-[220px] sm:h-[220px] md:top-40 md:w-[300px] md:h-[300px] bg-gradient-to-t from-[#1A6262] to-[#1A6262] blur-[100px] sm:blur-[120px] md:blur-[150px] opacity-50 pointer-events-none z-10"></div>
        <div className="absolute bottom-10 right-5 w-[10px] h-[150px] sm:bottom-auto sm:top-[-10px] sm:right-40 sm:w-[220px] sm:h-[220px] md:right-80 md:w-[300px] md:h-[300px] bg-gradient-to-t from-[#1A6262] to-[#1A6262] blur-[100px] sm:blur-[120px] md:blur-[150px] opacity-50 pointer-events-none z-10"></div>
      </div>

      {/* Desktop View - Marquee Animation */}
      <div className="hidden lg:block relative w-full overflow-hidden">
        <div className="testimonial-marquee">
          <div className="testimonial-marquee-track">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={`orig-${testimonial.id}`} className="w-[350px] flex-shrink-0">
                <div
                  className="testimonial-card flex flex-col w-full items-start justify-center gap-2.5 p-6 relative rounded-xl bg-[hsla(214,23%,96%,0.05)] opacity-70"
                >
                  {/* Quote Icon */}
                  <div className="relative w-8 h-8 mb-2">
                    <Image className="absolute w-[30px] h-[30px] top-0 left-1.5" src={testimonial.quoteIcon} alt="Quote" width={30} height={30} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start justify-center gap-6 w-full">
                    <div className="flex min-h-[120px] items-start justify-center gap-2.5 w-full">
                      <p className={`flex-1 self-stretch -mt-0.5 font-semibold text-base leading-6 ${
                        index === activeCard ? 'text-[var(--collection-1-colours-accent-light-green-light-green-300)]' : 'text-white'
                      }`}>
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-center gap-1 w-full">
                      <div className="w-fit -mt-0.5 font-bold text-white text-sm leading-5 whitespace-nowrap">{testimonial.name}</div>
                      <div className="w-fit opacity-60 font-normal text-white text-xs leading-[18px] whitespace-nowrap">{testimonial.title}</div>
                    </div>
                  </div>

                  <Image className="w-full h-px -mb-px object-cover" src="/img/line.svg" alt="Line" width={352} height={1} />
                </div>
              </div>
            ))}
            
            {/* Duplicate testimonials to create seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`dup-${testimonial.id}`} className="w-[350px] flex-shrink-0">
                <div
                  className="testimonial-card flex flex-col w-full items-start justify-center gap-2.5 p-6 relative rounded-xl bg-[hsla(214,23%,96%,0.05)] opacity-70"
                >
                  {/* Quote Icon */}
                  <div className="relative w-8 h-8 mb-2">
                    <Image className="absolute w-[30px] h-[30px] top-0 left-1.5" src={testimonial.quoteIcon} alt="Quote" width={30} height={30} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start justify-center gap-6 w-full">
                    <div className="flex min-h-[120px] items-start justify-center gap-2.5 w-full">
                      <p className={`flex-1 self-stretch -mt-0.5 font-semibold text-base leading-6 ${
                        index === activeCard ? 'text-[var(--collection-1-colours-accent-light-green-light-green-300)]' : 'text-white'
                      }`}>
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-center gap-1 w-full">
                      <div className="w-fit -mt-0.5 font-bold text-white text-sm leading-5 whitespace-nowrap">{testimonial.name}</div>
                      <div className="w-fit opacity-60 font-normal text-white text-xs leading-[18px] whitespace-nowrap">{testimonial.title}</div>
                    </div>
                  </div>

                  <Image className="w-full h-px -mb-px object-cover" src="/img/line.svg" alt="Line" width={352} height={1} />
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
              <div key={`tablet-orig-${testimonial.id}`} className="w-[450px] flex-shrink-0 px-4">
                <div className="testimonial-card flex flex-col w-full items-start justify-center gap-2.5 p-6 md:p-8 relative">
                  {/* Quote Icon */}
                  <div className="relative w-8 h-8 mb-2">
                    <Image className="absolute w-[30px] h-[30px] top-0 left-1.5" src={testimonial.quoteIcon} alt="Quote" width={30} height={30} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start justify-center gap-6 w-full">
                    <div className="flex min-h-[120px] md:min-h-[160px] items-start justify-center gap-2.5 w-full">
                      <p className={`flex-1 self-stretch -mt-0.5 font-semibold text-base md:text-lg leading-6 md:leading-7 ${
                        index === activeCard ? 'text-[var(--collection-1-colours-accent-light-green-light-green-300)]' : 'text-white'
                      }`}>{testimonial.quote}</p>
                    </div>

                    <div className="flex flex-col items-end justify-center gap-1 w-full">
                      <div className="w-fit -mt-0.5 font-bold text-white text-sm md:text-base leading-5 whitespace-nowrap">{testimonial.name}</div>
                      <div className="w-fit opacity-60 font-normal text-white text-xs md:text-sm leading-[18px] whitespace-nowrap">{testimonial.title}</div>
                    </div>
                  </div>

                  <Image className="w-full h-px -mb-px object-cover" src="/img/line.svg" alt="Line" width={352} height={1} />
                </div>
              </div>
            ))}
            
            {/* Duplicate testimonials for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`tablet-dup-${testimonial.id}`} className="w-[450px] flex-shrink-0 px-4">
                <div className="testimonial-card flex flex-col w-full items-start justify-center gap-2.5 p-6 md:p-8 relative">
                  {/* Quote Icon */}
                  <div className="relative w-8 h-8 mb-2">
                    <Image className="absolute w-[30px] h-[30px] top-0 left-1.5" src={testimonial.quoteIcon} alt="Quote" width={30} height={30} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start justify-center gap-6 w-full">
                    <div className="flex min-h-[120px] md:min-h-[160px] items-start justify-center gap-2.5 w-full">
                      <p className={`flex-1 self-stretch -mt-0.5 font-semibold text-base md:text-lg leading-6 md:leading-7 ${
                        index === activeCard ? 'text-[var(--collection-1-colours-accent-light-green-light-green-300)]' : 'text-white'
                      }`}>{testimonial.quote}</p>
                    </div>

                    <div className="flex flex-col items-end justify-center gap-1 w-full">
                      <div className="w-fit -mt-0.5 font-bold text-white text-sm md:text-base leading-5 whitespace-nowrap">{testimonial.name}</div>
                      <div className="w-fit opacity-60 font-normal text-white text-xs md:text-sm leading-[18px] whitespace-nowrap">{testimonial.title}</div>
                    </div>
                  </div>

                  <Image className="w-full h-px -mb-px object-cover" src="/img/line.svg" alt="Line" width={352} height={1} />
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
              <div key={`mobile-orig-${testimonial.id}`} className="w-[280px] flex-shrink-0 px-2">
                <div className="testimonial-card flex flex-col w-full mx-auto items-start justify-center gap-3 p-5 sm:p-6 relative">
                  <div className="relative w-8 h-8 mb-2">
                    <Image className="absolute w-[28px] h-[28px] top-0 left-1.5" src={testimonial.quoteIcon} alt="Quote" width={30} height={30} />
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 w-full">
                    <div className="flex min-h-[100px] items-start justify-center w-full">
                      <p className={`flex-1 font-medium text-sm sm:text-base leading-6 ${
                        index === activeCard ? 'text-[var(--collection-1-colours-accent-light-green-light-green-300)]' : 'text-white'
                      }`}>
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-1 w-full">
                      <div className="font-bold text-white text-sm sm:text-base leading-5">{testimonial.name}</div>
                      <div className="opacity-60 font-normal text-white text-xs sm:text-sm leading-[18px]">{testimonial.title}</div>
                    </div>
                  </div>

                  <Image className="w-full h-px mt-3 object-cover" src="/img/line.svg" alt="Line" width={352} height={1} />
                </div>
              </div>
            ))}
            
            {/* Duplicate testimonials for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div key={`mobile-dup-${testimonial.id}`} className="w-[280px] flex-shrink-0 px-2">
                <div className="testimonial-card flex flex-col w-full mx-auto items-start justify-center gap-3 p-5 sm:p-6 relative">
                  <div className="relative w-8 h-8 mb-2">
                    <Image className="absolute w-[28px] h-[28px] top-0 left-1.5" src={testimonial.quoteIcon} alt="Quote" width={30} height={30} />
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 w-full">
                    <div className="flex min-h-[100px] items-start justify-center w-full">
                      <p className={`flex-1 font-medium text-sm sm:text-base leading-6 ${
                        index === activeCard ? 'text-[var(--collection-1-colours-accent-light-green-light-green-300)]' : 'text-white'
                      }`}>
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-1 w-full">
                      <div className="font-bold text-white text-sm sm:text-base leading-5">{testimonial.name}</div>
                      <div className="opacity-60 font-normal text-white text-xs sm:text-sm leading-[18px]">{testimonial.title}</div>
                    </div>
                  </div>

                  <Image className="w-full h-px mt-3 object-cover" src="/img/line.svg" alt="Line" width={352} height={1} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
