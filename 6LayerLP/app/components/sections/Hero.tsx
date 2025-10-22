"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animations after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5, // Start after image animation
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.0, // Start after heading animation
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.5, // Start after text animation
      },
    },
  };

  return (
    <section id="home" className="relative py-14 lg:py-14 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <motion.h1
                className="heading-xl"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={headingVariants}
              >
                <span className="gradient-text">One System. Six Layers. </span>
                Infinite Business Clarity.
              </motion.h1>
              <motion.p
                className="text-lead"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={textVariants}
              >
                SniperThink's 6-Layer Intelligence System transforms scattered
                data into predictive insights, smarter decisions, and faster
                growth.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row items-center gap-4 mt-6"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={buttonVariants}
              >
                <Link
                  href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09"
                  className="contact-button w-full sm:w-auto text-center"
                >
                  See It in Action
                </Link>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="order-2 lg:order-2"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={imageVariants}
          >
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
          </motion.div>
        </div>
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-[#1A6262] opacity-10 blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-[#1A6262] opacity-10 blur-[100px] -z-10"></div>
    </section>
  );
};

export default Hero;
