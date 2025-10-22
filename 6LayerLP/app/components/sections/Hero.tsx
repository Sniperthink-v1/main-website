
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative py-14 lg:py-14 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1 animate-fadeIn">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h1 className="heading-xl">
                <span className="gradient-text">One System. Six Layers. </span>Infinite Business Clarity.
              </h1>
              <p className="text-lead">
                SniperThink's 6-Layer Intelligence System transforms scattered data into predictive insights, smarter decisions, and faster growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <Link href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09" className="contact-button w-full sm:w-auto text-center animate-glow">
                  See It in Action
                </Link>
                
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-2 animate-float">
            <div className="relative">
                <div className="relative w-full h-[400px] sm:h-[500px]">
                  <Image 
                    src="/6LayerLP/images/product-brief.png"
                    alt="SniperThink Product Brief"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-[#1A6262] opacity-10 blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-[#1A6262] opacity-10 blur-[100px] -z-10"></div>
    </section>
  );
};

export default Hero;
