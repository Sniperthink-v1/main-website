"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  CheckCircle,
  GraduationCap,
  DollarSign,
  Home,
  Heart,
  ShoppingBag,
  Building,
} from "lucide-react";

const cards = [
  {
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: "EdTech",
    subtitle: "Colleges & Universities",
    subtitleColor: "text-[#1A6262]",
    gradient: "from-[#1A6262]/30 via-transparent to-[#91C499]/20",
    iconBg: "from-[#1A6262] to-[#91C499]",
    shadow: "shadow-[0_0_20px_rgba(26,98,98,0.2)]",
    description:
      "Automate admissions, student FAQs, event queries, and campus communications.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    title: "Finance",
    subtitle: "Insurance, Lending & Advisory",
    subtitleColor: "text-[#E1A940]",
    gradient: "from-[#E1A940]/30 via-transparent to-[#FF6700]/20",
    iconBg: "from-[#E1A940] to-[#FF6700]",
    shadow: "shadow-[0_0_20px_rgba(225,169,64,0.2)]",
    description:
      "Speed up quote generation, claims processing, onboarding, and document delivery.",
  },
  {
    icon: <Home className="w-8 h-8 text-white" />,
    title: "Real Estate",
    subtitle: "",
    subtitleColor: "text-[#91C499]",
    gradient: "from-[#91C499]/30 via-transparent to-[#1A6262]/20",
    iconBg: "from-[#91C499] to-[#1A6262]",
    shadow: "shadow-[0_0_20px_rgba(145,196,153,0.2)]",
    description:
      "Handle property inquiries, lead follow-ups, appointment bookings, and status updates.",
  },
  {
    icon: <Heart className="w-8 h-8 text-white" />,
    title: "Clinics & Healthcare",
    subtitle: "",
    subtitleColor: "text-[#FF6700]",
    gradient: "from-[#FF6700]/30 via-transparent to-[#E1A940]/20",
    iconBg: "from-[#FF6700] to-[#E1A940]",
    shadow: "shadow-[0_0_20px_rgba(255,103,0,0.2)]",
    description:
      "Automate appointment booking, test result dispatch, patient reminders, and FAQ handling.",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    title: "D2C Brands",
    subtitle: "",
    subtitleColor: "text-[#1A6262]",
    gradient: "from-[#1A6262]/30 via-[#E1A940]/10 to-[#FF6700]/20",
    iconBg: "from-[#1A6262] to-[#E1A940]",
    shadow: "shadow-[0_0_20px_rgba(26,98,98,0.15)]",
    description:
      "Offer instant product support, return tracking, WhatsApp updates, and customer query resolution.",
  },
  {
    icon: <Building className="w-8 h-8 text-white" />,
    title: "Enterprise",
    subtitle: "Large Organizations",
    subtitleColor: "text-[#91C499]",
    gradient: "from-[#91C499]/30 via-transparent to-[#FF6700]/20",
    iconBg: "from-[#91C499] to-[#FF6700]",
    shadow: "shadow-[0_0_20px_rgba(145,196,153,0.2)]",
    description:
      "Scale customer support, automate internal processes, and enhance team productivity across departments.",
  },
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const mobileCardsRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0.5); // Normalized 0-1

  // Mobile fade-in animation
  useEffect(() => {
    const mobileCards = mobileCardsRef.current;
    if (!mobileCards) return;

    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const cards = mobileCards.querySelectorAll(".mobile-card");

    // Set initial state for all cards with will-change for GPU acceleration
    gsap.set(cards, {
      opacity: 0,
      x: (index) => (index % 2 === 0 ? -60 : 60), // Reduced distance for smoother animation
      force3D: true, // Force GPU acceleration
      willChange: "transform, opacity",
    });

    // Create intersection observer with rootMargin for earlier trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index") || "0");

          if (entry.isIntersecting) {
            // Animate in - smoother and faster
            gsap.to(entry.target, {
              opacity: 1,
              x: 0,
              duration: 0.6, // Faster duration
              delay: (index % 4) * 0.1, // Reduced delay for quicker stagger
              ease: "power2.out", // Smoother easing
              force3D: true,
              clearProps: "willChange", // Clean up after animation
            });
          } else {
            // Reset to initial state when out of view
            gsap.to(entry.target, {
              opacity: 0,
              x: index % 2 === 0 ? -60 : 60,
              duration: 0.3, // Very fast exit
              ease: "power1.in",
              force3D: true,
              willChange: "transform, opacity",
            });
          }
        });
      },
      {
        threshold: 0.15, // Earlier trigger
        rootMargin: "50px" // Start animation 50px before entering viewport
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      gsap.killTweensOf(cards);
    };
  }, []);

  // Desktop cursor animation
  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;

    if (!section || !cardsContainer) return;

    // Check if we're on mobile/tablet
    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
      return;
    }

    const industryCards = cardsContainer.querySelectorAll(".industry-card");

    // Set initial 3D transform properties
    gsap.set(industryCards, {
      transformStyle: "preserve-3d",
      willChange: "transform",
    });

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth; // Normalized 0-1
      setMouseX(x);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animate horizontal scroll based on cursor position
    const updateScroll = () => {
      // Get dimensions
      const containerWidth = cardsContainer.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Calculate how far we need to scroll to show all cards
      const maxScroll = containerWidth - viewportWidth;

      // Add asymmetric padding - less on left, more on right for last card visibility
      const leftPadding = 20;
      const rightPadding = 400;

      // Calculate the full range of movement
      // When mouseX = 0: start at +leftPadding (shows first card with left space)
      // When mouseX = 1: end at -(maxScroll + rightPadding) (shows last card with right space)
      const totalRange = maxScroll + leftPadding + rightPadding;

      // Linear interpolation from leftPadding to -(maxScroll + rightPadding)
      const targetX = leftPadding - (mouseX * totalRange);

      gsap.to(cardsContainer, {
        x: targetX,
        duration: 1.2,
        ease: "power2.out",
      });
    };

    // Update vertical position based on center
    const updateCardPositions = () => {
      const screenCenter = window.innerWidth / 2;

      industryCards.forEach((card) => {
        const element = card as HTMLElement;
        const cardRect = element.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;

        // Calculate distance from screen center (normalized)
        const distanceFromCenter = Math.abs(cardCenter - screenCenter);
        const maxDistance = window.innerWidth / 2;
        const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);

        // Center card goes down, side cards stay on line
        // When normalizedDistance is 0 (center), y should be positive (below)
        // When normalizedDistance is 1 (side), y should be 0 (on line)
        const targetY = 60 * (1 - normalizedDistance); // 60px down for center, 0 for sides

        gsap.to(element, {
          y: targetY,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    };

    // Use RAF for smooth updates
    let rafId: number;
    const animate = () => {
      updateScroll();
      updateCardPositions();
      rafId = requestAnimationFrame(animate);
    };
    animate();

    // Add subtle rotation on hover for each card
    industryCards.forEach((card) => {
      const element = card as HTMLElement;

      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          rotateY: 2,
          rotateX: 1,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
      gsap.killTweensOf(industryCards);
      gsap.killTweensOf(cardsContainer);
    };
  }, [mouseX]);

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="py-8 sm:py-10 md:py-12 lg:py-16 bg-black overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#1A6262]/20 to-[#91C499]/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 border border-[#1A6262]/30">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#91C499]" />
            <span className="text-[#91C499] font-medium text-xs sm:text-sm">
              Industry Solutions
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 leading-tight px-2">
            Built for Industries That Need{" "}
            <span className="bg-gradient-to-r from-[#1A6262] to-[#91C499] bg-clip-text text-transparent">
              Speed, Scale & Smart Support
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#D1D1D1] max-w-2xl mx-auto px-4">
            Automate conversations throughout the entire customer journey.
          </p>
          <p className="hidden lg:block text-xs xl:text-sm text-[#91C499] mt-1.5 font-medium">
            Move your cursor left and right to explore
          </p>
        </div>

        {/* Cursor-Controlled Horizontal Scrolling Cards - Desktop Only */}
        <div className="hidden lg:block relative h-[450px] xl:h-[500px] perspective-[1000px]">
          <div
            ref={cardsContainerRef}
            className="flex gap-6 xl:gap-8 py-8 xl:py-10 absolute left-0 will-change-transform"
            style={{ width: "max-content" }}
          >
            {cards.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className="industry-card w-[300px] xl:w-[340px] h-[360px] xl:h-[400px] bg-[#111] rounded-[20px] p-6 xl:p-8 relative overflow-visible flex-shrink-0 cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-[20px]`}
                ></div>
                <div
                  className={`absolute inset-0 ${card.shadow} rounded-[20px] transition-shadow duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-4 xl:mb-5">
                    <div
                      className={`card-icon w-14 xl:w-16 h-14 xl:h-16 bg-gradient-to-r ${card.iconBg} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      {React.cloneElement(card.icon, {
                        className: "w-7 xl:w-8 h-7 xl:h-8 text-white",
                      })}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-1.5 xl:mb-2">
                    <h3 className="card-title text-xl xl:text-2xl font-bold text-white">
                      {card.title}
                    </h3>
                  </div>

                  {/* Subtitle */}
                  {card.subtitle && (
                    <div className="mb-3 xl:mb-4">
                      <p
                        className={`card-subtitle text-xs xl:text-sm ${card.subtitleColor} font-medium`}
                      >
                        {card.subtitle}
                      </p>
                    </div>
                  )}

                  {/* Description */}
                  <div className="flex-1">
                    <p className="card-description text-[#D1D1D1] text-xs xl:text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Grid Layout */}
        <div
          ref={mobileCardsRef}
          className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
        >
          {cards.map((card, index) => (
            <div
              key={`${card.title}-mobile-${index}`}
              data-index={index}
              className="mobile-card h-[320px] xs:h-[340px] sm:h-[380px] md:h-[400px] bg-[#111] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] p-5 sm:p-6 md:p-8 relative overflow-hidden"
              style={{
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "translateZ(0)",
                WebkitTransform: "translateZ(0)",
              }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-[16px] sm:rounded-[18px] md:rounded-[20px]`}
              ></div>
              <div
                className={`absolute inset-0 ${card.shadow} rounded-[16px] sm:rounded-[18px] md:rounded-[20px]`}
              ></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <div
                  className={`w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${card.iconBg} rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-lg`}
                >
                  {React.cloneElement(card.icon, {
                    className: "w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white",
                  })}
                </div>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p
                    className={`text-xs sm:text-sm ${card.subtitleColor} mb-3 sm:mb-4 font-medium`}
                  >
                    {card.subtitle}
                  </p>
                )}
                <p className="text-[#D1D1D1] text-xs sm:text-sm leading-relaxed flex-1">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
