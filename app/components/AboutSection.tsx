export default function AboutSection() {
  return (
    <div className="flex flex-col items-start gap-2.5 py-14 w-full max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-0">
      <div id="about-us" className="w-full flex flex-col items-start gap-2.5">
        {/* Frame Container */}
        <div className="relative w-full">
          {/* Frame Image - Now with enlarged vertical dimensions */}
          <div className="relative w-full aspect-[16/12] sm:aspect-[16/11] lg:aspect-[16/10]">
            <img
              src="/img/About us.png"
              alt="About Us Frame"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content Overlay - Now properly responsive */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white font-[Segoe_UI] p-[4%] sm:p-[6%] lg:p-[8%]">
              {/* Title */}
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-5">
                ABOUT SNIPERTHINK
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm lg:text-base leading-[1.5] sm:leading-[1.6] lg:leading-[1.7] mb-3 sm:mb-4 lg:mb-5">
                We built SniperThink because we lived the chaos. The dashboards
                that didn&apos;t talk. The leads that slipped through. The
                analysis that came too late.
                <br />
                <br />
                We believe clarity shouldn&apos;t be a luxury. So we created a
                system that listens, thinks, and acts—for people building fast
                and leading hard.
                <br />
                <br />
                <span className="not-italic font-medium text-[#E1A940]">
                  &quot;Our mission is simple: Bring clarity to every business
                  decision—before it&apos;s too late.&quot;
                </span>
                <br />
                <br />
                SniperThink is for business owners, ops heads, sales
                leaders—anyone tired of reacting. We&apos;re here to help you
                lead with confidence, not guesswork.
              </p>

              {/* CTA - Now responsive */}
              <div className="w-auto">
                <img 
                  src="/img/CTA.svg" 
                  alt="CTA" 
                  className="w-auto h-6 sm:h-8 lg:h-auto max-w-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
