'use client'

import Image from "next/image";
import { motion } from 'framer-motion';

export default function BusinessSteps() {
  return (
    <div id='about-us' className="flex flex-col bg-black lg:flex-row w-full gap-5 lg:gap-20 py-[20px] px-[20px] pt-10 pb-10 md:py-[20px] lg:py-[80px] xl:px-[80px]">
      
      {/* Left Section */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full lg:w-[560px] flex flex-col items-start gap-2"
      >
        <div className="absolute top-[-60px] left-[-40px] w-[150px] h-[150px] sm:top-[-80px] sm:left-[-60px] sm:w-[200px] sm:h-[200px] md:top-[-100px] md:left-[-70px] md:w-[250px] md:h-[250px] bg-gradient-to-t from-[#1A6262] to-[#1A6262] blur-[100px] sm:blur-[120px] md:blur-[150px] opacity-100 pointer-events-none z-10"></div>
        {/* Background Abstract Image */}
        <div className="absolute w-[450px] h-[350px] sm:w-[500px] sm:h-[400px] md:w-[550px] md:h-[450px] lg:w-[600px] lg:h-[650px] lg:aspect-square top-15 sm:top-8 md:top-8 lg:top-[-3px] left-[-280px] sm:left-[-350px] md:left-[-380px] lg:left-[-400px]">
           <div className="absolute h-full left-[50%]"> 
            <Image src="/img/abstract-image.svg" 
            alt="Abstract decoration" 
            width={550} 
            height={550} 
            className="w-full h-full object-contain opacity-100" /> 
          </div>
        </div>

        {/* Content Card */}
        <div className="flex flex-col items-start gap-5 p-6 sm:p-10 md:p-12 rounded-[40px] sm:rounded-[60px] backdrop-blur-[15px] bg-gradient-to-b from-[rgba(26,98,98,0.2)] to-[rgba(189,238,244,0.2)] w-full lg:min-h-[650px] sm:min-h-[700px] relative z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/img/our-work.svg"
              alt="Our work"
              width={500}
              height={500}
              className="w-full h-auto pt-20 sm:pt-36 lg:pt-40"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white/80 text-sm sm:text-base leading-6 font-normal line-clamp-4"
          >
            SniperThink helps you scale smarter—not harder. In just three steps,
            we take your business from scattered systems to streamlined
            growth—so you can analyse, automate, and accelerate your outcomes.
          </motion.p>
        </div>
      </motion.div>

      {/* Steps Section */}
      <div className="flex-1 flex items-center bg-transparent relative z-10">
        <div className="absolute bottom-[-120px] right-[-40px] w-[180px] h-[180px] sm:bottom-[-200px] sm:right-[-60px] sm:w-[260px] sm:h-[260px] md:bottom-[-250px] md:right-[-70px] md:w-[350px] md:h-[350px] bg-gradient-to-t from-[#1A6262] to-[#1A6262] blur-[120px] sm:blur-[160px] md:blur-[200px] opacity-100 pointer-events-none z-10"></div>
        <div className="flex flex-col justify-center gap-8 sm:gap-10 py-5 flex-1 order-1 lg:order-2">
          

          {/* Step 01 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-start gap-6 sm:gap-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gradient-to-tr from-[#ff6700] to-[#e1a940] bg-clip-text text-transparent opacity-60 font-semibold text-3xl sm:text-4xl"
            >
              01
            </motion.div>
            <div className="flex flex-col gap-3 sm:gap-4 flex-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-white text-base sm:text-lg font-semibold"
              >
                Analyze
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-white/80 text-sm sm:text-base leading-6 font-normal line-clamp-3"
              >
                Connect your tools and uncover insights. From KPIs to lead flows,
                SniperThink shows you where you are—and where you're stuck.
              </motion.p>
            </div>
          </motion.div>

          {/* Step 02 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-start gap-6 sm:gap-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gradient-to-tr from-[#ff6700] to-[#e1a940] bg-clip-text text-transparent opacity-60 font-semibold text-3xl sm:text-4xl"
            >
              02
            </motion.div>
            <div className="flex flex-col gap-3 sm:gap-4 flex-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-white text-base sm:text-lg font-semibold"
              >
                Automate
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-white/80 text-sm sm:text-base leading-6 font-normal line-clamp-3"
              >
                Let the system do the work. Automate alerts, reports, responses,
                and lead qualification without sacrificing control.
              </motion.p>
            </div>
          </motion.div>

          {/* Step 03 */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-start gap-6 sm:gap-10"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gradient-to-tr from-[#ff6700] to-[#e1a940] bg-clip-text text-transparent opacity-60 font-semibold text-3xl sm:text-4xl"
            >
              03
            </motion.div>
            <div className="flex flex-col gap-3 sm:gap-4 flex-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-white text-base sm:text-lg font-semibold"
              >
                Accelerate
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-white/80 text-sm sm:text-base leading-6 font-normal line-clamp-3"
              >
                Act faster, scale smoother. With smart signals and agent-driven
                outreach, your team focuses only where it counts.
              </motion.p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
