"use client"
import Header from "@/app/components/sections/Header"
import { Footer } from "@/app/components/sections/Footer"
import HeroSection from "./sections/HeroSection"
import WhyChooseSection from "./sections/WhyChooseSection"
import ProductsSection from "./sections/ProductsSection"
import BusinessSteps from "./sections/StepsSection"
import AboutSniperThink from "./sections/AboutSection"
import TestimonialsSection from "./sections/TestimonialsSection"
import FAQSection from "./sections/FAQSection"

export default function AdvancedLandingPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
      </div>
      
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <ProductsSection />
      <BusinessSteps />
      <AboutSniperThink />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

