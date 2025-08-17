export default function AboutSniperThink() {
  return (
      <section className="relative flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 gap-6 lg:gap-20 w-full min-h-auto isolate overflow-hidden">

      
      {/* Decorative Shape */}
      <div className="absolute w-[650px] h-[650px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 lg:block hidden">
        {/* Top Layer */}
        
      </div>

      {/* Content Section */}
      
      <div className="relative flex flex-col items-start justify-center p-6 sm:p-8 lg:p-20 gap-4 sm:gap-5 w-full lg:max-w-[1280px] min-h-[700px] sm:min-h-[600px] lg:min-h-[750px] bg-[linear-gradient(180deg,rgba(255,134,51,0.2)_0%,rgba(246,204,124,0.2)_100%)] backdrop-blur-[5px] rounded-[60px] sm:rounded-[40px] lg:rounded-[80px] z-10">
      <div className="absolute inset-0 z-5 pointer-events-none flex items-center justify-center bg-transparent">
          <img
            src="/img/69-1@3x.png"
            alt="Spherical design background"
            className="w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] object-contain opacity-30 select-none"
            style={{ 
              filter: 'brightness(1.5) contrast(1.2) saturate(1.3)',
              mixBlendMode: 'screen',
              border: '0',
              outline: '0',
              boxShadow: 'none',
              WebkitAppearance: 'none',
              WebkitBorderRadius: '0',
              borderRadius: '0',
              display: 'block'
            }}
          />
        </div>
        {/* Layered Rectangles */}
        
        <div className="absolute inset-[12px] sm:inset-[20px] bg-[linear-gradient(180deg,rgba(26,98,98,0.2)_0%,rgba(19,63,63,0.2)_100%)] backdrop-blur-[146.5px] rounded-[60px] sm:rounded-[20px] lg:rounded-[80px] z-0" />
        
        <div className="absolute inset-[24px] sm:inset-[40px] bg-[linear-gradient(180deg,rgba(26,98,98,0.2)_0%,rgba(167,206,206,0.2)_100%)] back rounded-[60px] sm:rounded-[20px] lg:rounded-[60px] z-1" />
        
        <div className="absolute inset-[36px] sm:inset-[60px] bg-[linear-gradient(180deg,rgba(76,109,79,0.06)_0%,rgba(0,0,0,0.04)_100%)] backdrop-blur-[35px] rounded-[60px] sm:rounded-[20px] lg:rounded-[40px] z-2" />

        {/* Content wrapper for vertical centering */}
        <div className="relative z-10 flex flex-col items-start gap-4 sm:gap-5 w-full px-10 sm:px-12 lg:px-20">
          {/* Title */}
          <h2 className="text-white font-poppins font-semibold text-xl sm:text-2xl lg:text-4xl leading-tight sm:leading-snug uppercase mb-2 sm:mb-0">
            About SniperThink
          </h2>

          {/* Description */}
          <div className="text-white font-poppins text-sm sm:text-base lg:text-lg leading-relaxed w-full max-w-full sm:max-w-[90%] lg:max-w-[80%] space-y-3 sm:space-y-4">
            <p className="m-0">
              We built SniperThink because we lived the chaos. The dashboards that didn't talk. 
              The leads that slipped through. The analysis that came too late. We believe clarity 
              shouldn't be a luxury. So we created a system that listens, thinks, and acts—for 
              people building fast and leading hard.
            </p>
            
            <blockquote className="m-0 p-0">
              <p className="m-0 text-[#e1a940] font-medium">
                "Our mission is simple: Bring clarity to every business decision—before it's too late."
              </p>
            </blockquote>
            
            <p className="m-0">
              SniperThink is for business owners, ops heads, sales leaders—anyone tired of reacting. 
              We're here to help you lead with confidence, not guesswork.
            </p>
          </div>

          {/* CTA Button */}
          <button className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 w-fit bg-gradient-to-b from-[#FF670000] to-[#FF6700] shadow-inner shadow-[#FF8633] drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-md rounded-[80px] text-white font-inter text-sm sm:text-base font-medium mt-4 sm:mt-0">
            Know More
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      

        <div className="absolute bottom-0 right-0 z-30 pointer-events-none">
        <img 
          src="/img/circles.svg" 
          alt="Decorative circles" 
          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] opacity-60"
        />
      </div>
      </div>
    </section>
  );
}
