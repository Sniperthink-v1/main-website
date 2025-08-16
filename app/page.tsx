'use client'

import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import WhyChooseSection from './components/WhyChooseSection'
import ProductsSection from './components/ProductsSection'
import StepsSection from './components/StepsSection'
import AboutSection from './components/AboutSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Background texture */}
      <img 
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply z-0" 
        src="/img/bg-texture.svg" 
        alt="Background texture" 
      />

      {/* Background gradient */}
      <img 
        className="absolute top-[375px] left-0 w-full z-0" 
        src="/img/Gradient.svg" 
        alt="Background gradient" 
      />

      {/* Main body content */}
      <div className="relative flex flex-col w-full z-10">
        <HeroSection />
        <WhyChooseSection />
        <ProductsSection />
        <StepsSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </div>

      {/* Header stays above */}
      <Header/>
    </div>
  )
}
