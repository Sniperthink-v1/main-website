import React from "react";

export default function NotFoundPage() {
  return (
    
    <section className="min-h-screen bg-[#0F0F11] text-white flex items-center justify-center px-4 py-16 sm:py-24">
      <div className="max-w-xl w-full text-center relative">
        {/* Decorative Badge */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1A6262]/20 to-[#91C499]/20 rounded-full px-4 py-1.5 mb-6 text-sm sm:text-base border border-[#1A6262]/30">
          <span className="text-[#91C499] font-medium">Oops! Page Not Found</span>
        </div>

        {/* Big 404 */}
        <h1 className="text-7xl sm:text-9xl font-bold mb-4 leading-none bg-gradient-to-r from-[#1A6262] via-[#91C499] to-[#E1A940] bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          We couldn’t find the page you were looking for.
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base mb-8 px-2">
          The link may be broken, or the page may have been removed. Let’s get you back on track.
        </p>


        {/* Floating Bubbles (Decorative) */}
        <div className="absolute -top-6 left-4 w-10 h-10 bg-[#91C499]/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-4 -right-6 w-6 h-6 bg-[#E1A940]/20 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute top-1/2 -left-4 w-4 h-4 bg-[#1A6262]/20 rounded-full animate-ping delay-3000"></div>
      </div>
    </section>
  );
}
