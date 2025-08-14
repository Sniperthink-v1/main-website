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

  const goToSlide = (index : number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full">
      <div className="w-full">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full mb-8 lg:mb-12">
  <div className="flex-1 text-center">
    <div className="font-semibold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] leading-normal mb-2">
      WHAT OUR CLIENTS SAY
    </div>
    <p className="text-white/80 lg:pt-5 text-sm sm:text-base leading-6 max-w-none sm:px-[10px]">
      SniperThink transforms how teams operate, qualify, and scale. But don't take our word for it.
    </p>
  </div>
</div>


        {/* Desktop View - Grid Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className={`flex flex-col w-full max-w-[400px] mx-auto items-start justify-center gap-2.5 p-6 relative rounded-xl lg:rounded-[20px] ${
                  testimonial.isHighlighted
                    ? 'bg-gradient-to-b from-[rgba(252,230,178,0.5)] to-[rgba(210,159,52,0.5)]'
                    : 'bg-[#bdd5f40d] rounded-[10px]'
                }`}
              >
                {/* Quote Icon */}
                <div className="relative w-8 h-8 mb-2">
                  <img 
                    className="absolute w-[30px] h-[30px] top-0 left-1.5" 
                    src={testimonial.quoteIcon} 
                    alt="Quote" 
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start justify-center gap-6 w-full">
                  {/* Quote Text */}
                  <div className="flex h-48 items-start justify-center gap-2.5 w-full">
                    <p className={`flex-1 self-stretch -mt-0.5 font-semibold text-base leading-6 overflow-hidden text-ellipsis line-clamp-8 ${
                      testimonial.isHighlighted ? 'text-[var(--collection-1-colours-accent-light-green-light-green-300)]' : 'text-white'
                    }`}>
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex flex-col items-end justify-center gap-1 w-full">
                    <div className="w-fit -mt-0.5 font-bold text-white text-sm leading-5 whitespace-nowrap">
                      {testimonial.name}
                    </div>
                    <div className="w-fit opacity-60 font-normal text-white text-xs leading-[18px] whitespace-nowrap">
                      {testimonial.title}
                    </div>
                  </div>
                </div>

                {/* Line Separator */}
                <img className="w-full h-px -mb-px object-cover" src="/img/line.svg" alt="Line" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div
                    className={`flex flex-col w-full max-w-[400px] mx-auto items-start justify-center gap-2.5 p-6 relative rounded-xl ${
                      testimonial.isHighlighted
                        ? 'bg-gradient-to-b from-[rgba(252,230,178,0.5)] to-[rgba(210,159,52,0.5)]'
                        : 'bg-[#bdd5f40d] rounded-[10px]'
                    }`}
                  >
                    {/* Quote Icon */}
                    <div className="relative w-8 h-8 mb-2">
                      <img 
                        className="absolute w-[30px] h-[30px] top-0 left-1.5" 
                        src={testimonial.quoteIcon} 
                        alt="Quote" 
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-start justify-center gap-6 w-full">
                      {/* Quote Text */}
                      <div className="flex min-h-[120px] items-start justify-center gap-2.5 w-full">
                        <p className={`flex-1 self-stretch -mt-0.5 font-semibold text-base leading-6 ${
                          testimonial.isHighlighted ? 'text-[var(--collection-1-colours-accent-light-green-light-green-300)]' : 'text-white'
                        }`}>
                          {testimonial.quote}
                        </p>
                      </div>

                      {/* Author Info */}
                      <div className="flex flex-col items-end justify-center gap-1 w-full">
                        <div className="w-fit -mt-0.5 font-bold text-white text-sm leading-5 whitespace-nowrap">
                          {testimonial.name}
                        </div>
                        <div className="w-fit opacity-60 font-normal text-white text-xs leading-[18px] whitespace-nowrap">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>

                    {/* Line Separator */}
                    <img className="w-full h-px -mb-px object-cover" src="/img/line.svg" alt="Line" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation - Chevrons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="flex flex-col w-14 h-14 items-center justify-center"
              aria-label="Previous testimonial"
            >
              <div className="flex flex-col w-10 h-10 items-center justify-center relative bg-white/20 rounded-full overflow-hidden shadow-[0px_2.77px_2.21px_rgba(0,0,0,0.02),0px_6.65px_5.32px_rgba(0,0,0,0.03),0px_12.52px_10.02px_rgba(0,0,0,0.04),0px_22.34px_17.87px_rgba(0,0,0,0.04),0px_41.78px_33.42px_rgba(0,0,0,0.05),0px_100px_80px_rgba(0,0,0,0.07)] backdrop-blur-[10px]">
                <div className="relative w-[18px] h-[18px]">
                  <img className="absolute w-3.5 h-3 top-[3px] left-0.5" src="/img/arrow-left.svg" alt="Previous" />
                </div>
              </div>
            </button>

            <button
              onClick={nextSlide}
              className="flex w-14 h-14 items-center justify-center gap-2.5"
              aria-label="Next testimonial"
            >
              <div className="gap-2.5 p-[19px] flex w-10 h-10 items-center justify-center relative bg-white/20 rounded-full overflow-hidden shadow-[0px_2.77px_2.21px_rgba(0,0,0,0.02),0px_6.65px_5.32px_rgba(0,0,0,0.03),0px_12.52px_10.02px_rgba(0,0,0,0.04),0px_22.34px_17.87px_rgba(0,0,0,0.04),0px_41.78px_33.42px_rgba(0,0,0,0.05),0px_100px_80px_rgba(0,0,0,0.07)] backdrop-blur-[10px]">
                <div className="-mt-2 -mb-2 -ml-2 -mr-2 relative w-[18px] h-[18px]">
                  <img className="absolute w-[13px] h-3 top-[3px] left-[3px]" src="/img/arrow-rigth.svg" alt="Next" />
                </div>
              </div>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-white w-6' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}