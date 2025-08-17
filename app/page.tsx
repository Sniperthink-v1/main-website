'use client'

import { useState, lazy, Suspense } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

// Lazy load components for better performance
const Header = dynamic(() => import('./components/Header'), {
  loading: () => <div className="h-16 bg-black" />,
  ssr: true
})

const HeroSection = dynamic(() => import('./components/HeroSection'), {
  loading: () => <div className="h-[500px] bg-black" />,
  ssr: true
})

const WhyChooseSection = dynamic(() => import('./components/WhyChooseSection'), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true
})

const ProductsSection = dynamic(() => import('./components/ProductsSection'), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true
})

const StepsSection = dynamic(() => import('./components/StepsSection'), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true
})

const AboutSection = dynamic(() => import('./components/AboutSection'), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true
})

const TestimonialsSection = dynamic(() => import('./components/TestimonialsSection'), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true
})

const FAQSection = dynamic(() => import('./components/FAQSection'), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true
})

const ContactUs = dynamic(() => import('./components/ContactUs'), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true
})

const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => <div className="h-64 bg-black" />,
  ssr: true
})

export default function Home() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* Optimized background texture */}
      <Image 
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply z-0" 
        src="/img/bg-texture.svg" 
        alt="Background texture"
        fill
        priority
        sizes="100vw"
        quality={85}
      />

      {/* Optimized background gradient */}
      <Image 
        className="absolute top-[375px] left-0 w-full z-0" 
        src="/img/Gradient.svg" 
        alt="Background gradient"
        width={1920}
        height={1080}
        priority
        sizes="100vw"
        quality={85}
      />

      {/* Main body content */}
      <div className="relative flex flex-col w-full z-10">
        <Suspense fallback={<div className="h-[500px] bg-black" />}>
          <HeroSection />
        </Suspense>
        
        <div className="w-full h-16 sm:h-20 lg:h-24"></div>
        
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <WhyChooseSection />
        </Suspense>
        
        <div className="w-full h-16 sm:h-20 lg:h-24"></div>
        
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <ProductsSection />
        </Suspense>
        
        <div className="w-full h-16 sm:h-20 lg:h-24"></div>
        
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <StepsSection />
        </Suspense>
        
        <div className="w-full h-16 sm:h-20 lg:h-24"></div>
        
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <AboutSection />
        </Suspense>
        
        <div className="w-full h-16 sm:h-20 lg:h-24"></div>
        
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <TestimonialsSection />
        </Suspense>
        
        <div className="w-full h-16 sm:h-20 lg:h-24"></div>
        
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <FAQSection />
        </Suspense>
        
        <div className="w-full h-16 sm:h-20 lg:h-24"></div>
        
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <ContactUs />
        </Suspense>
        
        <div className="w-full h-16 sm:h-20 lg:h-24"></div>
        
        <Suspense fallback={<div className="h-64 bg-black" />}>
          <Footer />
        </Suspense>
      </div>

      {/* Header stays above */}
      <Suspense fallback={<div className="h-16 bg-black" />}>
        <Header onContactClick={handleContactClick}/>
      </Suspense>
    </div>
  )
}
