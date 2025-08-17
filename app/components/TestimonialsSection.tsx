import React, { useState } from 'react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 0,
      quote: "Before SniperThink, we had scattered dashboards and missed signals. Now, we act on what matters—fast.",
      name: "Rohit M.",
      title: "Growth Lead",
      quoteIcon: "/img/quote-yellow.svg",
      isHighlighted: true
    },
    {
      id: 1,
      quote: "The AI agents segment leads better than any human SDR we've hired. Massive efficiency boost.",
      name: "Divya K",
      title: "SaaS Founder",
      quoteIcon: "/img/quote-blue.svg",
      isHighlighted: false
    },
    {
      id: 2,
      quote: "With the growth engine, we finally see predictive KPIs instead of just historical ones. Total game-changer.",
      name: "Arjun P",
      title: "COO",
      quoteIcon: "/img/quote-blue.svg",
      isHighlighted: false
    },
    {
      id: 3,
      quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      name: "JEET OBERAI",
      title: "(Entrepreneur), PayLoan",
      quoteIcon: "/img/quote-blue.svg",
      isHighlighted: false
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div id="testimonials-section" className="flex flex-col items-start gap-4 sm:gap-6 md:gap-10 p-4 sm:p-6 md:p-10 lg:p-20 relative w-full max-w-6xl mx-auto">
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 w-full mb-6 md:mb-8 lg:mb-12">
        {/* Heading */}
        <div className="flex-1 text-center lg:text-left">
          <div className="font-semibold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] leading-normal mb-2">
            WHAT OUR CLIENTS SAY
          </div>
          <p className="text-white/80 lg:pt-5 text-sm sm:text-base leading-6 max-w-none sm:px-[10px]">
            SniperThink transforms how teams operate, qualify, and scale. But don't take our word for it.
          </p>
        </div>
        
        {/* Desktop Navigation - Chevrons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Left Chevron */}
          <button
            onClick={prevSlide}
            className="flex w-10 h-10 items-center justify-center"
            aria-label="Previous testimonial"
          >
            <div className="flex w-9 h-9 items-center justify-center bg-white/20 rounded-full backdrop-blur-[10px] shadow-md">
              <img className="w-3.5 h-3" src="/img/arrow-left.svg" alt="Previous" />
            </div>
          </button>

          {/* Right Chevron */}
          <button
            onClick={nextSlide}
            className="flex w-10 h-10 items-center justify-center"
            aria-label="Next testimonial"
          >
            <div className="flex w-9 h-9 items-center justify-center bg-white/20 rounded-full backdrop-blur-[10px] shadow-md">
              <img className="w-3.5 h-3" src="/img/arrow-rigth.svg" alt="Next" />
            </div>
          </button>
        </div>
      </div>

      {/* Desktop View - 3 Cards */}
      <div className="hidden lg:block relative w-full">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentSlide * (100/3)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-1/3 flex-shrink-0">
                <div
                  className={`flex flex-col w-full items-start justify-center gap-2.5 p-6 relative rounded-xl ${
                    testimonial.isHighlighted
                      ? 'bg-gradient-to-b from-[rgba(252,230,178,0.5)] to-[rgba(210,159,52,0.5)]'
                      : 'bg-[#bdd5f40d] rounded-[10px]'
                  }`}
                >
                  {/* Quote Icon */}
                  <div className="relative w-8 h-8 mb-2">
                    <img className="absolute w-[30px] h-[30px] top-0 left-1.5" src={testimonial.quoteIcon} alt="Quote" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start justify-center gap-6 w-full">
                    <div className="flex min-h-[120px] items-start justify-center gap-2.5 w-full">
                      <p className={`flex-1 self-stretch -mt-0.5 font-semibold text-base leading-6 ${
                        testimonial.isHighlighted ? 'text-[var(--collection-1-colours-accent-light-green-light-green-300)]' : 'text-white'
                      }`}>
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex flex-col items-end justify-center gap-1 w-full">
                      <div className="w-fit -mt-0.5 font-bold text-white text-sm leading-5 whitespace-nowrap">{testimonial.name}</div>
                      <div className="w-fit opacity-60 font-normal text-white text-xs leading-[18px] whitespace-nowrap">{testimonial.title}</div>
                    </div>
                  </div>

                  <img className="w-full h-px -mb-px object-cover" src="/img/line.svg" alt="Line" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet View */}
      <div className="hidden md:block lg:hidden relative w-full">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-2 md:px-4">
                <div className={`flex flex-col w-full max-w-[600px] mx-auto items-start justify-center gap-2.5 p-6 md:p-8 relative rounded-xl lg:rounded-[20px] ${
                  testimonial.isHighlighted
                    ? 'bg-gradient-to-b from-[rgba(252,230,178,0.5)] to-[rgba(210,159,52,0.5)]'
                    : 'bg-[#bdd5f40d] rounded-[10px]'
                }`}>
                  {/* Quote Icon */}
                  <div className="relative w-8 h-8 mb-2">
                    <img className="absolute w-[30px] h-[30px] top-0 left-1.5" src={testimonial.quoteIcon} alt="Quote" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start justify-center gap-6 w-full">
                    <div className="flex min-h-[120px] md:min-h-[160px] items-start justify-center gap-2.5 w-full">
                      <p className={`flex-1 self-stretch -mt-0.5 font-semibold text-base md:text-lg leading-6 md:leading-7 ${
                        testimonial.isHighlighted ? 'text-[var(--collection-1-colours-accent-light-green-light-green-300)]' : 'text-white'
                      }`}>{testimonial.quote}</p>
                    </div>

                    <div className="flex flex-col items-end justify-center gap-1 w-full">
                      <div className="w-fit -mt-0.5 font-bold text-white text-sm md:text-base leading-5 whitespace-nowrap">{testimonial.name}</div>
                      <div className="w-fit opacity-60 font-normal text-white text-xs md:text-sm leading-[18px] whitespace-nowrap">{testimonial.title}</div>
                    </div>
                  </div>

                  <img className="w-full h-px -mb-px object-cover" src="/img/line.svg" alt="Line" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prevSlide} className="flex flex-col w-10 h-10 md:w-14 md:h-14 items-center justify-center" aria-label="Previous testimonial">
            <div className="flex flex-col w-8 h-8 md:w-10 md:h-10 items-center justify-center relative bg-white/20 rounded-full overflow-hidden shadow-md">
              <img className="w-3.5 h-3" src="/img/arrow-left.svg" alt="Previous" />
            </div>
          </button>

          <div className="flex justify-center items-center gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => goToSlide(index)} 
                className={`testimonial-dot ${index === currentSlide ? 'active' : 'inactive'}`}
                aria-label={`Go to testimonial ${index + 1}`} 
              />
            ))}
          </div>

          <button onClick={nextSlide} className="flex w-10 h-10 md:w-14 md:h-14 items-center justify-center" aria-label="Next testimonial">
            <div className="flex w-8 h-8 md:w-10 md:h-10 items-center justify-center relative bg-white/20 rounded-full overflow-hidden shadow-md">
              <img className="w-3.5 h-3" src="/img/arrow-rigth.svg" alt="Next" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className={`flex flex-col w-full mx-auto items-start justify-center gap-3 p-5 sm:p-6 relative rounded-xl ${
                  testimonial.isHighlighted
                    ? 'bg-gradient-to-b from-[rgba(252,230,178,0.5)] to-[rgba(210,159,52,0.5)]'
                    : 'bg-[#bdd5f40d] rounded-[10px]'
                }`}>
                  <div className="relative w-8 h-8 mb-2">
                    <img className="absolute w-[28px] h-[28px] top-0 left-1.5" src={testimonial.quoteIcon} alt="Quote" />
                  </div>

                  <div className="flex flex-col items-start justify-center gap-4 w-full">
                    <div className="flex min-h-[100px] items-start justify-center w-full">
                      <p className={`flex-1 font-medium text-sm sm:text-base leading-6 ${testimonial.isHighlighted ? 'text-[var(--collection-1-colours-accent-light-green-light-green-300)]' : 'text-white'}`}>
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex flex-col items-start gap-1 w-full">
                      <div className="font-bold text-white text-sm sm:text-base leading-5">{testimonial.name}</div>
                      <div className="opacity-60 font-normal text-white text-xs sm:text-sm leading-[18px]">{testimonial.title}</div>
                    </div>
                  </div>

                  <img className="w-full h-px mt-3 object-cover" src="/img/line.svg" alt="Line" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button onClick={prevSlide} className="flex w-10 h-10 items-center justify-center" aria-label="Previous testimonial">
            <div className="flex w-9 h-9 items-center justify-center bg-white/20 rounded-full backdrop-blur-[10px] shadow-md">
              <img className="w-3.5 h-3" src="/img/arrow-left.svg" alt="Previous" />
            </div>
          </button>

          <div className="flex justify-center items-center gap-2 flex-nowrap">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => goToSlide(index)} 
                className={`testimonial-dot ${index === currentSlide ? 'active' : 'inactive'}`}
                aria-label={`Go to testimonial ${index + 1}`} 
                style={{ minWidth: '8px', minHeight: '8px' }}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="flex w-10 h-10 items-center justify-center" aria-label="Next testimonial">
            <div className="flex w-9 h-9 items-center justify-center bg-white/20 rounded-full backdrop-blur-[10px] shadow-md">
              <img className="w-3.5 h-3" src="/img/arrow-rigth.svg" alt="Next" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
