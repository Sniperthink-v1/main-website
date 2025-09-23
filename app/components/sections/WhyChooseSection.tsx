'use client'

import Image from "next/image";

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
      className="
    relative flex flex-col lg:flex-row 
    items-start justify-between
    bg-transparent
    px-5 lg:px-20
    py-10 lg:py-20
    w-full
  "
    >

      {/* Decorative shape */}
      <div className="hidden lg:block absolute top-[250px] right-1 pt-20">
        <Image
          src="/img/vector-vector.svg"
          alt="Background pattern"
          width={400}
          height={450}
          style={{
            position: 'relative',
            bottom: '-50px',
            right: '-50px',
            width: '450.00561879846913px',
            height: '600.8271270413015px',
            opacity: 0.7,
            mixBlendMode: 'plus-lighter',
            transform: 'rotate(0deg)',
            backdropFilter: 'blur(4px)'
          }}
        />
      </div>

      {/* Left content */}
      <div className="flex-1 flex flex-col items-start text-left gap-6 sm:gap-8 lg:gap-10 relative max-w-full lg:max-w-[600px] z-10">
        {/* Heading */}
        <div className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-poppins font-semibold text-white leading-snug tracking-[-1px] lg:tracking-[-2px]">
          Why Choose
          <br />
          SniperThink?
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          {/* Section 1 */}
          <div className="flex flex-col items-start gap-2">
            <p className="font-poppins font-medium text-white text-base sm:text-lg leading-[27px]">
              Built for the Pace of Real Life
            </p>
            <p className="font-poppins font-normal text-white/80 text-sm sm:text-base leading-[24px] max-w-full lg:max-w-[600px]">
              We know what growth chaos feels like—10 dashboards, delayed decisions, missed leads. SniperThink is
              designed to keep up with real teams, real moments, and real urgency.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col items-start gap-2">
            <p className="font-poppins font-medium text-white text-base sm:text-lg leading-[27px]">
              Precision Where It Counts
            </p>
            <p className="font-poppins font-normal text-white/80 text-sm sm:text-base leading-[24px] max-w-full lg:max-w-[600px]">
              You don't need more data. You need direction. SniperThink filters the noise and sharpens your next
              move—so you spend less time reacting and more time leading.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start items-start w-full">
            <a href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center relative cursor-pointer transition-all duration-300 mt-4 lg:mt-0"
              style={{
                width: '180.5791778564453px',
                height: '45.16551971435547px',
                gap: '12.08px',
                opacity: 1,
                paddingTop: '12.08px',
                paddingRight: '30.21px',
                paddingBottom: '12.08px',
                paddingLeft: '30.21px',
                borderRadius: '10.07px',
                border: '0.5px transparent',
                borderImageSource:
                  'linear-gradient(180deg, rgba(26, 98, 98, 0.4) 17.19%, rgba(26, 98, 98, 0.77) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(180deg, rgba(26, 98, 98, 0) -4.69%, rgba(189, 252, 254, 0.3) 100%)',
                borderImageSlice: '1',
                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) -40.91%, #1A6262 132.95%)',
                boxShadow:
                  '0px 10.07px 30.21px 0px #1A6262B2 inset, 0px 10.07px 40.28px 0px #1A626280',
                backdropFilter: 'blur(20.13793182373047px)',
              }}
            >
              <span className="font-poppins font-medium text-white text-sm leading-[20px] whitespace-nowrap sm:items-start">
                Get My Demo
              </span>
              <Image
                className="w-3.5 h-3.5"
                src="/img/Chevron-Right.svg"
                alt="Arrow"
                width={14}
                height={14}
              />
            </a>
          </div>

        </div>
      </div>

      {/* Right image */}
      <div className="flex-1 flex justify-center lg:justify-end items-center mt-8 lg:mt-0 z-10">
        <Image
          className="w-[90%] sm:w-[85%] lg:w-[600px] h-auto max-w-full"
          src="/img/right-image.png"
          alt="Why choose illustration"
          width={567}
          height={473}
        />
      </div>
       <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[250px] md:top-[-150px] md:left-[70%] md:translate-x-0 bg-gradient-to-t from-[#1A6262] to-[#1A6262] blur-[80px] sm:blur-[120px] md:blur-[150px] opacity-100 pointer-events-none -z-1"></div>
       <div className="absolute bottom-[-100px] left-[20px] w-[120px] h-[120px] sm:top-[-30px] sm:bottom-auto sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] bg-gradient-to-t from-[#1A6262] to-[#1A6262] blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-100 pointer-events-none -z-1"></div>
    </div>
  )
}
