'use client'

export default function WhyChooseSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
  id="why-choose"
  className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 pt-8 pb-10 lg:pt-8 lg:pb-20 relative w-full"
>

      {/* Decorative shape */}
      <div className="hidden lg:block absolute w-[373px] h-[434px] top-[467px] left-[1121px] rotate-[-133deg] blur-sm opacity-70">
        <div className="relative w-[792px] h-[793px] top-[-181px] left-[-215px]">
          <img
            className="absolute w-[550px] h-[546px] top-[127px] left-[124px] rotate-[133deg]"
            src="/img/vector-vector.svg"
            alt="Vector decoration"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8 lg:gap-10 relative max-w-[90%] lg:max-w-[584px]">
        {/* Heading */}
        <div className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-poppins font-semibold text-white leading-snug tracking-[-1px] lg:tracking-[-2px]">
          Why Choose SniperThink?
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-8 w-full">
          {/* Section 1 */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <p className="font-inter font-medium text-white text-base sm:text-lg leading-[27px]">
              Built for the Pace of Real Life
            </p>
            <p className="font-poppins font-normal text-white/80 text-sm sm:text-base leading-[24px] max-w-[90%] lg:max-w-full">
              We know what growth chaos feels like—10 dashboards, delayed decisions, missed leads. SniperThink is
              designed to keep up with real teams, real moments, and real urgency.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <p className="font-inter font-medium text-white text-base sm:text-lg leading-[27px]">
              Precision Where It Counts
            </p>
            <p className="font-poppins font-normal text-white/80 text-sm sm:text-base leading-[24px] max-w-[90%] lg:max-w-full">
              You don&apos;t need more data. You need direction. SniperThink filters the noise and sharpens your next
              move—so you spend less time reacting and more time leading.
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('why-choose')}
            className="inline-flex items-center justify-center gap-3 w-auto sm:w-auto lg:w-[160px] px-5 py-2 sm:px-6 sm:py-2 rounded-[8px] shadow-[inset_0px_10px_30px_rgba(26,98,98,0.7),0px_10px_40px_rgba(26,98,98,0.5)] backdrop-blur-[10px] bg-gradient-to-b from-transparent to-[rgba(26,98,98,1)] hover:shadow-[inset_0px_10px_30px_rgba(26,98,98,0.8),0px_10px_40px_rgba(26,98,98,0.6)] transition-all duration-300 mt-4"
          >
            <span className="font-inter font-medium text-white text-sm leading-[20px] whitespace-nowrap">
              Get My Demo
            </span>
            <img className="w-3.5 h-3.5" src="/img/Chevron-Right.svg" alt="Arrow" />
          </button>
        </div>
      </div>

      {/* Image */}
      <img
        className="w-[80%] max-w-[400px] sm:max-w-[450px] lg:w-[567px] lg:h-[473px] mt-10 lg:mt-0"
        src="/img/right-image.svg"
        alt="Why choose illustration"
      />

      {/* Gradient */}
      <img className="hidden lg:block absolute" src="/img/Gradient.svg" alt="Gradient" />
    </div>
  )
}
