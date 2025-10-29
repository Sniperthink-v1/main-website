"use client"

import Header from "./sections/Header"
import Hero from "./sections/Hero"
import PainPoints from "./sections/PainPoints"
import Layers from "./sections/Layers"
import WhyUs from "./sections/WhyUs"
import { TestimonialSection } from "./sections/Testimonials"
import { Footer } from "./sections/Footer"
import FAQSection from "./sections/FAQ"
import "../css/globals.css"
import "../css/styles.css"
import "../css/bi-styles.css"

export default function AdvancedLandingPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden pt-[64px]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1A6262]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#E1A940]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-[#91C499]/20 rounded-full blur-3xl animate-bounce delay-2000"></div>
      </div>

      <Header />
      <Hero />
      <PainPoints/>
      <Layers />
      <WhyUs />
  <TestimonialSection />
  <FAQSection />
  <div className="mb-12" />
  <Footer />
    </div>
  )
}

