"use client"

import Header from "@/app/components/sections/Header"
import Hero from "@/app/components/sections/Hero"
import PainPoints from "@/app/components/sections/PainPoints"
import Layers from "@/app/components/sections/Layers"
import WhyUs from "@/app/components/sections/WhyUs"
import { TestimonialSection } from "@/app/components/sections/Testimonials"
import { Footer } from "@/app/components/sections/Footer"
import FAQSection from "@/app/components/sections/FAQ"
import "@/app/css/globals.css"
import "@/app/css/styles.css"
import "@/app/css/bi-styles.css"

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

