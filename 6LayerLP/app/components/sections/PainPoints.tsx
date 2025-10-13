'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, FileText, Clock, TrendingDown, Link, TrendingUp, HelpCircle, DollarSign } from 'lucide-react';

export default function ProductShowcaseSection() {
  const [activeCard, setActiveCard] = useState(0);
  
  const products = [
    {
      id: 0,
      title: "Scattered systems",
      description: "Sales, expenses, and stock are spread out, making the big picture unclear.",
      icon: BarChart3,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 1,
      title: "Manual reporting",
      description: "Hours wasted on spreadsheets that go outdated the moment they’re done.",
      icon: FileText,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 2,
      title: "Delayed decisions",
      description: "Problems are noticed only after money is lost, leaving no chance to act early.",
      icon: Clock,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 3,
      title: "No forecasting ",
      description: "Future growth feels like guesswork without clear, data-backed direction.",
      icon: TrendingDown,
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "Missed opportunities",
      description: "Seamlessly connect all your data sources for a unified view.",
      icon: Link,
      color: "from-teal-500 to-teal-600"
    },
    {
      id: 5,
      title: "Slow reporting",
      description: "Investor and auditor reports take too long, draining energy and time.",
      icon: TrendingUp,
      color: "from-red-500 to-red-600"
    },
    {
      id: 6,
      title: "Lack of clarity",
      description: "Owners drown in numbers but don’t know what’s really driving growth.",
      icon: HelpCircle,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 7,
      title: "Costly mistakes",
      description: "Small data errors grow into big money leaks and bad calls.",
      icon: DollarSign,
      color: "from-gray-500 to-gray-600"
    }
  ];

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % products.length);
  };

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToCard = (index: number) => {
    setActiveCard(index);
  };

  // Calculate visible cards for desktop (show 4 cards at a time)
  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 4; i++) {
      const index = (activeCard + i) % products.length;
      visibleCards.push(products[index]);
    }
    return visibleCards;
  };

  return (
    <section
      id="products"
      className="flex flex-col items-start gap-4 sm:gap-6 md:gap-10 relative w-full max-w-full mx-auto
                 px-[20px] lg:px-[80px] py-10 lg:py-20"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-0 w-[100px] h-[150px] sm:top-32 sm:w-[220px] sm:h-[220px] md:top-40 md:w-[300px] md:h-[300px] bg-gradient-to-t from-[#1A6262] to-[#1A6262] blur-[100px] sm:blur-[120px] md:blur-[150px] opacity-30 pointer-events-none z-10"></div>
      <div className="absolute bottom-10 right-5 w-[100px] h-[150px] sm:bottom-auto sm:top-[-10px] sm:right-40 sm:w-[220px] sm:h-[220px] md:right-80 md:w-[300px] md:h-[300px] bg-gradient-to-t from-[#E1A940] to-[#E1A940] blur-[100px] sm:blur-[120px] md:blur-[150px] opacity-30 pointer-events-none z-10"></div>
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 w-full mb-6 md:mb-8 lg:mb-12">
        {/* Heading */}
        <div className="flex-1 text-center lg:text-left">
          <div className="font-semibold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] leading-normal mb-2">
            SniperThink Solves
          </div>
          <p className="text-white/80 lg:pt-5 text-sm sm:text-base leading-6 max-w-none">
            Business owners struggle with scattered data, slow manual reporting, and lack of real-time insights—leading to delays, missed opportunities, and costly mistakes.
          </p>
        </div>
        
        {/* Desktop Navigation - Chevrons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Left Chevron */}
          <button
            onClick={prevCard}
            className="flex w-10 h-10 items-center justify-center group"
            aria-label="Previous feature"
          >
            <div className="flex w-9 h-9 items-center justify-center bg-white/20 rounded-full backdrop-blur-[10px] shadow-md group-hover:bg-white/30 transition-all duration-300">
              <ChevronLeft className="w-4 h-4 text-white" />
            </div>
          </button>

          {/* Right Chevron */}
          <button
            onClick={nextCard}
            className="flex w-10 h-10 items-center justify-center group"
            aria-label="Next feature"
          >
            <div className="flex w-9 h-9 items-center justify-center bg-white/20 rounded-full backdrop-blur-[10px] shadow-md group-hover:bg-white/30 transition-all duration-300">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Desktop View - 4 Cards Grid */}
      <div className="hidden lg:block relative w-full">
        <div className="grid grid-cols-4 gap-6">
          {getVisibleCards().map((product, index) => {
            const originalIndex = products.findIndex(p => p.id === product.id);
            const isActive = originalIndex === activeCard;
            
            return (
              <div key={product.id} className="w-full">
                <div
                  className={`flex flex-col w-full items-start justify-center gap-4 p-6 relative rounded-xl transition-all duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 ${
                    isActive
                      ? 'bg-gradient-to-b from-[rgba(252,230,178,0.3)] to-[rgba(210,159,52,0.3)] scale-105 shadow-xl border border-[#E1A940]/30'
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:shadow-lg hover:border-white/20'
                  }`}
                  onClick={() => goToCard(originalIndex)}
                  
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1A6262] to-[#91C499] rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  {/* <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center text-2xl transition-transform duration-300 hover:scale-110`}> */}
                    {React.createElement(product.icon, { className: "w-6 h-6 text-white" })}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 w-full">
                    <h3 className="font-semibold text-white text-lg leading-6 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-5 transition-colors duration-300 hover:text-white/90">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tablet View - 2 Cards Grid */}
      <div className="hidden md:block lg:hidden relative w-full">
        <div className="grid grid-cols-2 gap-6">
          {getVisibleCards().slice(0, 2).map((product, index) => {
            const originalIndex = products.findIndex(p => p.id === product.id);
            const isActive = originalIndex === activeCard;
            
            return (
              <div key={product.id} className="w-full">
                <div
                  className={`flex flex-col w-full items-start justify-center gap-4 p-6 relative rounded-xl transition-all duration-500 ease-in-out cursor-pointer transform hover:-translate-y-1 ${
                    isActive
                      ? 'bg-gradient-to-b from-[rgba(252,230,178,0.3)] to-[rgba(210,159,52,0.3)] scale-105 shadow-xl border border-[#E1A940]/30'
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:shadow-lg hover:border-white/20'
                  }`}
                  onClick={() => goToCard(originalIndex)}
                  style={{
                    animation: isActive ? 'pulse 2s infinite' : 'none'
                  }}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center text-2xl transition-transform duration-300 hover:scale-110`}>
                    {React.createElement(product.icon, { className: "w-6 h-6 text-black" })}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3 w-full">
                    <h3 className="font-semibold text-white text-lg leading-6 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-5 transition-colors duration-300 hover:text-white/90">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tablet Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prevCard} className="flex w-12 h-12 items-center justify-center group" aria-label="Previous feature">
            <div className="flex w-10 h-10 items-center justify-center bg-white/20 rounded-full backdrop-blur-[10px] shadow-md group-hover:bg-white/30 transition-all duration-300">
              <ChevronLeft className="w-4 h-4 text-white" />
            </div>
          </button>

          <div className="flex justify-center items-center gap-2">
            {products.map((_, index) => (
              <button 
                key={index} 
                onClick={() => goToCard(index)} 
                className={`rounded-full transition-all duration-300 ${
                  index === activeCard 
                    ? 'bg-white w-3 h-3' 
                    : 'bg-white/40 w-2.5 h-2.5'
                }`}
                aria-label={`Go to feature ${index + 1}`} 
              />
            ))}
          </div>

          <button onClick={nextCard} className="flex w-12 h-12 items-center justify-center group" aria-label="Next feature">
            <div className="flex w-10 h-10 items-center justify-center bg-white/20 rounded-full backdrop-blur-[10px] shadow-md group-hover:bg-white/30 transition-all duration-300">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile View - Single Card */}
      <div className="md:hidden w-full">
        <div className="w-full">
          <div className="flex flex-col w-full items-start justify-center gap-4 p-6 relative rounded-xl transition-all duration-500 ease-in-out bg-gradient-to-b from-[rgba(252,230,178,0.2)] to-[rgba(210,159,52,0.2)] border border-[#E1A940]/20 transform hover:scale-[1.02] hover:shadow-lg">
            {/* Icon */}
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${products[activeCard].color} flex items-center justify-center text-2xl transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
              {React.createElement(products[activeCard].icon, { className: "w-6 h-6 text-black" })}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 w-full">
              <h3 className="font-semibold text-white text-lg leading-6 transition-colors duration-300">
                {products[activeCard].title}
              </h3>
              <p className="text-white/70 text-sm leading-5 transition-colors duration-300">
                {products[activeCard].description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button onClick={prevCard} className="flex w-10 h-10 items-center justify-center group" aria-label="Previous feature">
            <div className="flex w-9 h-9 items-center justify-center bg-white/20 rounded-full backdrop-blur-[10px] shadow-md group-hover:bg-white/30 transition-all duration-300">
              <ChevronLeft className="w-4 h-4 text-white" />
            </div>
          </button>

          <div className="flex justify-center items-center gap-2">
            {products.map((_, index) => (
              <button 
                key={index} 
                onClick={() => goToCard(index)} 
                className={`rounded-full transition-all duration-300 ${
                  index === activeCard 
                    ? 'bg-white w-3 h-3' 
                    : 'bg-white/40 w-2.5 h-2.5'
                }`}
                aria-label={`Go to feature ${index + 1}`} 
              />
            ))}
          </div>

          <button onClick={nextCard} className="flex w-10 h-10 items-center justify-center group" aria-label="Next feature">
            <div className="flex w-9 h-9 items-center justify-center bg-white/20 rounded-full backdrop-blur-[10px] shadow-md group-hover:bg-white/30 transition-all duration-300">
              <ChevronRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}