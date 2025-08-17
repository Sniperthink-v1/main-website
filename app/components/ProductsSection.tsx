'use client'

import { useState } from 'react'

export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState('product2')
  const [activeFeature, setActiveFeature] = useState(0)

  const toggleFeature = (index: number) => {
    setActiveFeature(activeFeature === index ? -1 : index)
  }

  const switchProduct = (productId: string) => {
    setActiveProduct(productId)
    setActiveFeature(0)
  }

  const product1Features = [
    { title: "Real Conversations, Real Leads", content: "AI agents that talk, listen, and learn. They answer queries, guide users, and surface real intent—not just forms filled." },
    { title: "Lead Segmentation Engine", content: "Automatically categorize and prioritize leads based on behavior, intent, and engagement signals." },
    { title: "Instant CRM Sync- CRM integration", content: "Seamlessly connect with your existing CRM systems for unified data flow and management." },
    { title: "First Response in Seconds", content: "Immediate engagement with prospects when interest is highest, dramatically increasing conversion rates." }
  ]

  const product2Features = [
    { title: "Live KPI Intelligence", content: "Track critical metrics in real-time—from AOV to churn—without hunting across platforms or building complex dashboards." },
    { title: "Predictive Growth Signals", content: "Identify trends and opportunities before they become obvious, giving you the competitive edge in your market." },
    { title: "Smart Alert System", content: "Get notified about significant changes and anomalies that require your attention, before they impact your bottom line." },
    { title: "Auto-Generated Reports", content: "Save hours with AI-generated reports that highlight key insights and actionable recommendations." }
  ]

  const currentFeatures = activeProduct === 'product1' ? product1Features : product2Features
  const currentImage = activeProduct === 'product1' ? '/img/product-brief-image-2.svg' : '/img/products-brief-image.svg'

  const products = [
    {
      id: 'product1',
      title: 'Intelligence Growth Engine',
      desc: 'A 6-layer intelligence system that turns scattered data into structured, strategic insights...',
      gradient: 'from-[rgba(187,222,209,0.45)] to-[rgba(108,145,111,0.95)]',
      badge: 'from-[#4c6d4f] to-[#6c916f]',
      img: '/img/Pattern.svg'
    },
    {
      id: 'product2',
      title: 'AI Chat + Voice Agents',
      desc: 'Our agents are your first-touch sales team—qualifying leads in real time...',
      gradient: 'from-[rgba(225,169,64,0.2)] via-[rgba(225,169,64,0.5)] to-[rgba(225,169,64,0.8)]',
      badge: 'from-[rgba(225,169,64,0.6)] to-[rgba(225,169,64,0.8)]',
      img: '/img/Hexagons.svg'
    }
  ]

  return (
    <div className="flex flex-col items-start gap-4 sm:gap-6 md:gap-10 p-4 sm:p-8 lg:p-20 relative w-full max-w-6xl mx-auto">
      <img 
        className="absolute top-[-40px] sm:top-[-78px] left-1/2 sm:left-[400px] transform -translate-x-1/2 sm:translate-x-0 w-48 sm:w-[445px] h-48 sm:h-[445px]" 
        src="/img/Gradient-3.svg" 
        alt="Gradient" 
      />
      


      {/* Heading Section */}
      <div className="flex flex-col items-center md:items-start justify-center gap-3 sm:gap-4 w-full">
        <div id="our-products" className="font-poppins font-semibold text-white text-xl sm:text-3xl md:text-[40px] text-center md:text-left">
          OUR PRODUCTS
        </div>
        <p className="max-w-full md:max-w-[760px] text-white/80 text-sm sm:text-base leading-6 text-center md:text-left">
          SniperThink offers two powerful growth products. Whether you&apos;re looking to unify your business data or
          automate and segment customer interactions, our tools are designed to replace chaos with clarity and
          help you move faster with intelligence.
        </p>
      </div>

      {/* Product Cards */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full pt-4 sm:pt-6 md:pt-8">
        {products.map(product => (
          <div
            key={product.id}
            id={product.id}
            className={`flex flex-col gap-4 pt-20 px-5 pb-8 rounded-xl overflow-hidden bg-gradient-to-b ${product.gradient} relative transition-all duration-300 cursor-pointer
              ${activeProduct === product.id ? '-translate-y-1 shadow-xl' : ''} hover:-translate-y-1 hover:shadow-xl
              w-full md:flex-1`}
            onClick={() => switchProduct(product.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                switchProduct(product.id)
              }
            }}
          >
            <div className={`absolute top-6 left-5 px-4 py-0.5 rounded-full border border-white/10 bg-gradient-to-b ${product.badge}`}>
              <span className="text-white text-[10px] font-poppins">Our Products</span>
            </div>
            <img 
              className="absolute top-6 right-5 w-16 sm:w-[169px] opacity-30" 
              src={product.img} 
              alt={`${product.title} pattern`} 
            />
            <div className="font-sora font-semibold text-white text-lg sm:text-xl">
              {product.title}
            </div>
            <p className="text-white text-sm sm:text-base">
              {product.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Feature Section */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 pt-4 pb-6 sm:pt-6 sm:pb-10 lg:pb-10 w-full">
        {currentFeatures && (
          <div className="flex flex-col-reverse md:flex-row gap-6 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-[40px] shadow-lg w-full max-w-5xl relative backdrop-blur-[30px] min-h-[400px]"
            style={{
              background: 'linear-gradient(0deg, rgba(26, 98, 98, 0.16), rgba(26, 98, 98, 0.16)), linear-gradient(180deg, rgba(26, 98, 98, 0.2) 0%, rgba(189, 239, 244, 0.2) 100%)'
            }}>
            {/* Circles Inverted Background */}
            <img 
              className="absolute bottom-0 left-0 w-32 sm:w-40 md:w-48 lg:w-56 h-auto opacity-80 z-0" 
              src="/img/circles-inverted.svg" 
              alt="Circles decoration" 
            />

            {/* Features List */}
            <div className="flex flex-col flex-1 h-[400px] overflow-y-auto">
              {currentFeatures.map((feature, index) => (
                <div key={index} className="mb-4 overflow-hidden w-full">
                  <div
                    className="flex justify-between items-center py-2 px-3 sm:px-4 cursor-pointer"
                    style={{
                      borderBottom: index < currentFeatures.length - 1 ? '0.6px solid rgba(26, 98, 90, 1)' : 'none'
                    }}
                    onClick={() => toggleFeature(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        toggleFeature(index)
                      }
                    }}
                  >
                    <h3 className="font-sora font-medium text-white text-sm sm:text-lg">
                      {feature.title}
                    </h3>
                    <span className={`inline-block transition-transform duration-300 ${activeFeature === index ? 'rotate-90' : ''}`}>
                      <img src="/img/Chevron-Right.svg" alt="Expand" />
                    </span>
                  </div>
                                      <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeFeature === index
                          ? 'max-h-[200px] py-2 px-3 sm:px-4 bg-[#e1a940]/8 opacity-100 border-t border-[#e1a940]/20'
                          : 'max-h-0 py-0 px-3 sm:px-4 opacity-0'
                      }`}
                    >
                    <p className="text-white/80 text-xs sm:text-sm">
                      {feature.content}
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex justify-center md:justify-start pt-9">
                <a
                  href="#"
                  className="inline-block transition-all hover:opacity-90"
                >
                  <img src="/img/start-scaling.svg" alt="START SCALING" className="h-[80px]" />
                </a>
              </div>
            </div>

            {/* Product Image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                className="w-full h-auto max-w-[800px] sm:max-w-md md:max-w-lg max-h-[280px] sm:max-h-[320px] object-contain"
                src={currentImage}
                alt="Product Overview"
              />
            </div>
          </div>
        )}
      </div>
      
    </div>
  )
}
