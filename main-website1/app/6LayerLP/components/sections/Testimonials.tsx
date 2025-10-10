import { CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { testimonials } from "@6LayerLP/data/testimonials";
import React, { useState, useEffect } from "react";

export const TestimonialSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTestimonialClick = (index: number) => {
    if (isMobile) {
      setActiveTestimonial((prev) => (prev === index ? -1 : index));
    } else {
      setActiveTestimonial(index);
    }
  };

  return (
    <section id="testimonials" className="py-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-xl text-gray-300">Explore how we've transformed business experiences</p>
        </div>

        <div className="flex flex-row gap-4 md:gap-4 items-stretch overflow-x-auto md:overflow-x-visible scrollbar-hide pb-4 md:pb-0">
          {testimonials.map((testimonial, index) => {
            const isActive = activeTestimonial === index;

            return (
              <div
                key={index}
                onClick={() => handleTestimonialClick(index)}
                className={`bg-[#1C1C1E] rounded-xl p-4 transition-all duration-500 ease-in-out cursor-pointer
                  hover:scale-105
                  ${!isMobile && isActive ? "md:flex-[2] opacity-100 scale-100 z-10 shadow-lg" : ""}
                  ${!isMobile && !isActive ? "md:flex-1 opacity-50 scale-95 md:hover:opacity-80" : ""}
                  ${isMobile ? "flex-shrink-0 w-[280px] opacity-100" : "w-full"}
                  min-h-0
                `}
              >
                {/* Logo */}
                <div className="mb-4 flex justify-center">
                  <img
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={testimonial.company}
                    className="h-12 w-auto opacity-80 transition-opacity duration-300"
                  />
                </div>

                {/* Quote preview - always visible on mobile, hidden when expanded on desktop */}
                <p className={`text-gray-300 mb-2 leading-relaxed transition-opacity duration-300 ${
                  isMobile ? "opacity-100" : (isActive ? "opacity-0" : "opacity-100")
                }`}>
                  {isMobile 
                    ? (testimonial.quote.length > 120 ? `${testimonial.quote.substring(0, 120)}...` : testimonial.quote)
                    : (testimonial.quote.length > 80 ? `${testimonial.quote.substring(0, 80)}...` : testimonial.quote)
                  }
                </p>

                {/* Expandable Content - only on desktop */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    !isMobile && isActive ? "max-h-[1000px] opacity-100 -mt-2.5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {testimonial.quote.length > 80 ? testimonial.quote : ""}
                  </p>



                  <div className="border-t border-gray-700 pt-4">
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role} • {testimonial.company}</p>
                  </div>

                  {/* <div className="mt-4">
                    <Button variant="ghost" className="text-[#91C499] hover:text-white hover:bg-[#91C499]/20 p-0">
                      Read case study <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div> */}
                </div>

                {/* Author info - always visible on mobile */}
                <div className={`${isMobile ? "border-t border-gray-700 pt-4 mt-4" : "hidden"}`}>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role} • {testimonial.company}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
