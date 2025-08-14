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
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="main-website-final">
      <div className="overlap">
        <img className="BG-texture" src="/img/bg-texture.svg" alt="Background texture" />
        <img className="BG-gradient-elements" src="/img/Gradient.svg" alt="Background gradient" />
        <div className="body">
          <div className="frame">
            <HeroSection />
          </div>
          <WhyChooseSection />
          <ProductsSection />
          <StepsSection />
          <AboutSection />
          <TestimonialsSection />
          <FAQSection />
          <Footer />
        </div>
        <Header/>
      </div>
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  )
}
