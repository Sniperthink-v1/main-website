'use client'

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const header = document.getElementById('main-header');
      const headerHeight = header ? header.offsetHeight : 64;
      
      // Calculate position with header offset
      const yOffset = -headerHeight;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  return (
    <div id="section-hero" className="relative w-full min-h-[500px] md:min-h-[600px] lg:h-[1024px] px-4 md:px-8 lg:px-20 overflow-hidden pt-4">
      <img 
        className="hidden xl:block absolute w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[337px] xl:h-[361px] left-[50%] xl:left-[1100px] top-20 xl:top-auto" 
        src="/img/ellipse-1.svg" 
        alt="Decorative element" 
      />
      
      {/* Background gradients */}
      <div className="absolute w-full h-full lg:w-[1619px] lg:h-[1342px] lg:-top-[521px] lg:-left-[52px] top-0 left-0">
        <div className="relative h-full lg:h-[1342px]">
          <div className="absolute w-full h-full lg:w-[1619px] lg:h-[1342px] top-0 left-0">
            {/* Main gradient */}
            <div className="absolute w-[300px] h-[200px] md:w-[500px] md:h-[400px] lg:w-[800px] lg:h-[600px] xl:w-[1000px] xl:h-[784px] top-[100px] md:top-[150px] lg:top-[228px] left-1/2 transform -translate-x-1/2 lg:left-[261px] lg:transform-none rounded-full lg:rounded-[500px/392px] blur-[50px] md:blur-[100px] lg:blur-[150px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(26,98,98,1)_0%,rgba(52,21,57,0)_100%)]"></div>
            
            
            {/* Ellipse decorations */}
            <img 
              className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[326px] xl:h-[326px] top-[400px] md:top-[500px] lg:top-[749px] left-0" 
              src="/img/ellipse-6.svg" 
              alt="Ellipse" 
            />
            
            <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[461px] xl:h-[461px] top-[600px] md:top-[700px] lg:top-[881px] right-0 lg:left-[1158px] rounded-full lg:rounded-[230.5px] blur-[50px] md:blur-[100px] lg:blur-[173.5px] bg-gradient-to-b from-[rgba(26,98,98,1)] opacity-30"></div>
          </div>
          <div className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[260px] xl:h-[260px] top-[300px] md:top-[350px] lg:top-[467px] -left-[20px] md:-left-[30px] lg:-left-[40px] rounded-full lg:rounded-[130px] blur-[50px] md:blur-[100px] lg:blur-[173.5px] bg-gradient-to-b from-[rgba(26,98,98,1)]"></div>
        </div>
      </div>
      
      {/* Hero graphic */}
      <img 
        className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[416px] xl:h-[431px] top-[150px] md:top-[200px] lg:top-[279px] -left-[40px] md:-left-[60px] lg:-left-[80px] object-fill" 
        src="/img/b7ceabc2-0165-4ca7-9848-81da4af58456-2.svg" 
        alt="Hero graphic" 
      />
      
      {/* Main content */}
      <div className="flex flex-col items-center justify-center pt-20 md:pt-28 lg:pt-36 pb-8 md:pb-12 lg:pb-16 gap-8 md:gap-12 lg:gap-[60px] w-full relative z-10">
        <div className="flex flex-col items-center gap-3 md:gap-4 relative w-full max-w-full">
          {/* Header with icon and title */}
          <div className="inline-flex items-center gap-2 md:gap-[10px] py-2 md:py-4 px-0 relative">
            <img 
              className="relative w-6 h-6 md:w-8 md:h-8 -ml-2 md:-ml-[30px]" 
              src="/img/mdi-magic.svg" 
              alt="Magic icon" 
            />
            <img
              className="relative w-[120px] h-4 md:w-[150px] md:h-5 lg:w-[200px] lg:h-6"
              src="/img/meet-your-growth-partner.svg"
              alt="Meet your growth partner"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="relative w-full max-w-[1200px] font-poppins font-semibold text-white text-2xl md:text-4xl lg:text-5xl xl:text-[62px] text-center md:leading-normal lg:leading-normal mx-auto">
  Your business is growing, but are your systems ready to scale it?
</h1>

          
          {/* Subtitle */}
          <p className="relative w-full bg-gradient-to-r from-[rgba(123,175,127,1)] via-[rgba(255,134,51,1)] to-[rgba(246,204,124,1)] bg-clip-text text-transparent font-poppins font-normal text-lg md:text-xl lg:text-2xl xl:text-[24px] text-center leading-tight md:leading-[28px] px-4">
            Don&apos;t let poor systems hold you back
          </p>
        </div>
        
        {/* Description */}
        <p className="relative w-full max-w-2xl lg:w-[906px] font-poppins font-normal text-white text-sm md:text-base text-center leading-relaxed md:leading-[25.6px] px-4">
          SniperThink turns your business data into growth systems.<br />
          You&apos;re building a great business — SniperThink gives you clarity, speed, and control to scale confidently.<br />
          Most businesses hustle without data.
        </p>
        
        {/* CTA Button */}
        <button 
          onClick={() => scrollToSection('about-us')} 
          className="inline-flex h-12 md:h-[51px] items-center justify-center gap-2 md:gap-[12px] px-6 md:px-[30px] py-3 md:py-[12px] relative rounded-lg md:rounded-[10px] border-none shadow-[inset_0px_6px_18px_rgba(26,98,98,0.7),0px_6px_24px_rgba(26,98,98,0.5)] md:shadow-[inset_0px_10px_30px_rgba(26,98,98,0.7),0px_10px_40px_rgba(26,98,98,0.5)] backdrop-blur-[6px] md:backdrop-blur-[10px] bg-gradient-to-b from-transparent to-[rgba(26,98,98,1)] cursor-pointer hover:shadow-[inset_0px_6px_18px_rgba(26,98,98,0.8),0px_6px_24px_rgba(26,98,98,0.6)] md:hover:shadow-[inset_0px_10px_30px_rgba(26,98,98,0.8),0px_10px_40px_rgba(26,98,98,0.6)] transition-all duration-300"
        >
          <div className="relative w-fit font-inter font-medium text-white text-sm md:text-base text-center leading-tight md:leading-[20px] whitespace-nowrap">Book Your Audit Call</div>
          <img 
            className="relative w-3 h-3 md:w-4 md:h-4" 
            src="/img/Chevron-Right.svg" 
            alt="Arrow" 
          />
        </button>
        
        {/* Stats section */}
        <div className="inline-flex flex-col items-center gap-4 md:gap-[10px] px-4 md:px-8 lg:px-[56px] py-4 md:py-8 lg:py-8 relative w-full max-w-4xl sm:min-h-[100px]">
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-4 md:gap-[49px] relative w-full">
            <div className="flex flex-col w-full md:w-[158px] items-center relative">
              <div className="relative w-fit -mt-px bg-gradient-to-r from-[rgba(255,103,0,1)] to-[rgba(237,186,90,1)] bg-clip-text text-transparent font-poppins font-semibold text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[51px] whitespace-nowrap">200%</div>
              <div className="relative w-fit font-poppins font-normal text-white text-xs md:text-sm leading-tight md:leading-[22px] whitespace-nowrap text-center">Revenue Growth</div>
            </div>
            <div className="flex flex-col w-full md:w-[159px] items-center relative">
              <div className="relative w-fit -mt-px bg-gradient-to-r from-[rgba(255,103,0,1)] to-[rgba(237,186,90,1)] bg-clip-text text-transparent font-poppins font-semibold text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[51px] whitespace-nowrap">3X</div>
              <div className="relative w-fit font-poppins font-normal text-white text-xs md:text-sm leading-tight md:leading-[22px] whitespace-nowrap text-center">Speed to Market</div>
            </div>
            <div className="flex flex-col w-full md:w-[114px] items-center relative">
              <div className="relative w-fit -mt-px bg-gradient-to-r from-[rgba(255,103,0,1)] to-[rgba(237,186,90,1)] bg-clip-text text-transparent font-poppins font-semibold text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[51px] whitespace-nowrap">84%</div>
              <div className="relative w-fit font-poppins font-normal text-white text-xs md:text-sm leading-tight md:leading-[22px] whitespace-nowrap text-center">New Leads</div>
            </div>
            <div className="flex flex-col w-full md:w-[127px] items-center relative">
              <div className="relative w-fit -mt-px bg-gradient-to-r from-[rgba(255,103,0,1)] to-[rgba(237,186,90,1)] bg-clip-text text-transparent font-poppins font-semibold text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[51px] whitespace-nowrap">20K+</div>
              <div className="relative w-fit font-poppins font-normal text-white text-xs md:text-sm leading-tight md:leading-[22px] whitespace-nowrap text-center">Active Users</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
