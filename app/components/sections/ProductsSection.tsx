'use client'

import { useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Define types first
type ProductData = {
  id: 'product1' | 'product2'
  title: string
  desc: string
  gradient: string
  badge: string
  img: string
  background: string
}

// Move static data outside component to prevent recreation on every render
const PRODUCTS_DATA: ProductData[] = [
  {
    id: 'product1',
    title: 'Intelligence Growth Engine',
    desc: 'A 6-layer intelligence system that turns scattered data into structured, strategic insights. From KPIs to predictions, alerts to reporting—this is your all-in-one growth command centre.',
    gradient: 'from-[rgba(187,222,193,1)] via-[rgba(108,145,111,1)] to-[rgba(46,73,49,1)]',
    badge: 'from-[rgb(108, 145, 111, 1.0)] to-[rgba(108, 145, 111, 1.0)]',
    img: '/img/Pattern.svg',
    background: 'linear-gradient(0deg, #4C6D4F 1.52%, #6C916F 101.52%)'
  },
  {
    id: 'product2',
    title: 'AI Chat + Voice Agents',
    desc: 'Our agents are your first-touch sales team—qualifying leads in real time, detecting urgency and intent, and flagging the hottest opportunities for precision outreach.',
    gradient: 'from-[rgba(250,216,145,0.6)] via-[rgba(210,159,52,0.6)] to-[rgba(154,115,31,0.6)]',
    badge: 'from-[rgba(225,169,64,0.6)] to-[rgba(225,169,64,0.8)]',
    img: '/img/Hexagons.png',
    background: 'linear-gradient(0deg, #9A731F 1.52%, #BA8C27 101.52%)'
  }
]

const FEATURES_DATA: Record<'product1' | 'product2', Array<{ title: string, content: string }>> = {
  product1: [
    { title: "Live KPI Intelligence", content: "Track critical metrics in real-time—from AOV to churn—without hunting across platforms or building complex dashboards." },
    { title: "Predictive Growth Signals", content: "Identify trends and opportunities before they become obvious, giving you the competitive edge in your market." },
    { title: "Smart Alert System", content: "Get notified about significant changes and anomalies that require your attention, before they impact your bottom line." },
    { title: "Auto-Generated Reports", content: "Save hours with AI-generated reports that highlight key insights and actionable recommendations." }
  ],
  product2: [
    { title: "Real Conversations, Real Leads", content: "AI agents that talk, listen, and learn. They answer queries, guide users, and surface real intent—not just forms filled." },
    { title: "Lead Segmentation Engine", content: "Automatically categorize and prioritize leads based on behavior, intent, and engagement signals." },
    { title: "Instant CRM Sync- CRM integration", content: "Seamlessly connect with your existing CRM systems for unified data flow and management." },
    { title: "First Response in Seconds", content: "Immediate engagement with prospects when interest is highest, dramatically increasing conversion rates." }
  ]
}

const IMAGES: Record<'product1' | 'product2', string> = {
  product1: '/img/product-brief-image.png',
  product2: '/img/product-brief-image-2.png'
}

const START_SCALING_LINKS: Record<'product1' | 'product2', string> = {
  product1: 'https://intelligencesystem.sniperthink.com',
  product2: 'https://aiagent.sniperthink.com'
}

// Desktop Product Card (without Framer Motion)
const DesktopProductCard = ({
  product,
  isActive,
  onSelect
}: {
  product: ProductData,
  isActive: boolean,
  onSelect: (id: 'product1' | 'product2') => void
}) => {
  const handleClick = useCallback(() => {
    onSelect(product.id)
    
    // If clicking on Intelligence Growth Engine, scroll to the 6-layer details
    if (product.id === 'product1') {
      setTimeout(() => {
        const featuresSection = document.querySelector('#intelligence-growth-features')
        if (featuresSection) {
          featuresSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          })
        }
      }, 300) // Small delay to allow card selection animation
    }
    
    // If clicking on AI Chat + Voice Agents, scroll to the agent analytics details
    if (product.id === 'product2') {
      setTimeout(() => {
        const featuresSection = document.querySelector('#ai-agents-features')
        if (featuresSection) {
          featuresSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          })
        }
      }, 300) // Small delay to allow card selection animation
    }
  }, [product.id, onSelect])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect(product.id)
    }
  }, [product.id, onSelect])

  return (
    <div
      id={product.id}
      className={`flex flex-col gap-4 overflow-hidden bg-gradient-to-b ${product.gradient} relative transition-all duration-500 ease-in-out cursor-pointer
        ${isActive ? 'shadow-xl' : ''} w-full lg:w-1/2`}
      style={{
        minHeight: '240px',
        height: 'auto',
        gap: '16px',
        borderRadius: '12px',
        paddingTop: 'clamp(80px, 8vw, 112px)',
        paddingRight: 'clamp(16px, 2vw, 20px)',
        paddingBottom: 'clamp(24px, 3vw, 32px)',
        paddingLeft: 'clamp(16px, 2vw, 20px)',
        opacity: 1
      }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Background overlay for unselected cards */}
      <div
        className={`absolute inset-0 bg-black/40 rounded-[12px] pointer-events-none transition-all duration-500 ease-in-out ${!isActive ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ zIndex: 1 }}
      />

      <div
        className="absolute top-4 lg:top-6 left-4 lg:left-5 flex items-center justify-center"
        style={{
          width: 'clamp(80px, 8vw, 97px)',
          height: 'clamp(28px, 3vw, 32px)',
          opacity: 1,
          gap: '10px',
          paddingTop: '2px',
          paddingRight: 'clamp(12px, 1.5vw, 16px)',
          paddingBottom: '2px',
          paddingLeft: 'clamp(12px, 1.5vw, 16px)',
          borderRadius: '50px',
          borderWidth: '1px',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          background: product.background
        }}
      >
        <span className="text-white text-[9px] lg:text-[10px] font-poppins">Our Products</span>
      </div>

      <Image
        className="absolute top-4 lg:top-6 right-4 lg:right-5 w-12 sm:w-16 lg:w-[169px] opacity-60"
        src={product.img}
        alt={`${product.title} pattern`}
        width={169}
        height={169}
        loading="lazy"
      />

      <div className="font-sora font-semibold text-white text-base sm:text-lg lg:text-xl relative z-10">
        {product.title}
      </div>

      <p className="text-white text-sm sm:text-base leading-relaxed max-w-md relative z-10">
        {product.desc}
      </p>
    </div>
  )
}

// Mobile Product Card (with Framer Motion)
// Mobile Product Card (with Framer Motion)
const MobileProductCard = ({
  product,
  isActive,
  onSelect
}: {
  product: ProductData,
  isActive: boolean,
  onSelect: (id: 'product1' | 'product2') => void
}) => {
  const handleClick = useCallback(() => {
    onSelect(product.id)
    
    // If clicking on Intelligence Growth Engine, scroll to the 6-layer details
    if (product.id === 'product1') {
      setTimeout(() => {
        const featuresSection = document.querySelector('#intelligence-growth-features')
        if (featuresSection) {
          featuresSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          })
        }
      }, 300) // Small delay to allow card selection animation
    }
    
    // If clicking on AI Chat + Voice Agents, scroll to the agent analytics details
    if (product.id === 'product2') {
      setTimeout(() => {
        const featuresSection = document.querySelector('#ai-agents-features')
        if (featuresSection) {
          featuresSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          })
        }
      }, 300) // Small delay to allow card selection animation
    }
  }, [product.id, onSelect])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect(product.id)
    }
  }, [product.id, onSelect])

  return (
    <motion.div
      id={product.id}
      className={`flex flex-col overflow-hidden bg-gradient-to-b ${product.gradient} relative cursor-pointer w-full`}
      style={{
        borderRadius: '12px',
        paddingTop: 'clamp(80px, 8vw, 112px)',
        paddingRight: 'clamp(16px, 2vw, 20px)',
        paddingBottom: 'clamp(24px, 3vw, 32px)',
        paddingLeft: 'clamp(16px, 2vw, 20px)',
      }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      initial={{ height: 'auto', minHeight: '140px' }}
      animate={{
        height: 'auto',
        minHeight: isActive ? '240px' : '140px',
        boxShadow: isActive ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
      transition={{
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
        boxShadow: { duration: 0.3 }
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="absolute top-4 lg:top-6 left-4 lg:left-5 flex items-center justify-center"
        style={{
          width: 'clamp(80px, 8vw, 97px)',
          height: 'clamp(28px, 3vw, 32px)',
          opacity: 1,
          gap: '10px',
          paddingTop: '2px',
          paddingRight: 'clamp(12px, 1.5vw, 16px)',
          paddingBottom: '2px',
          paddingLeft: 'clamp(12px, 1.5vw, 16px)',
          borderRadius: '50px',
          borderWidth: '1px',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          background: product.background
        }}
      >
        <span className="text-white text-[9px] lg:text-[10px] font-poppins">Our Products</span>
      </div>

      <motion.div
        className="absolute items-center justify-center top-4 left-[240px] flex"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <Image
          className="w-20 h-auto opacity-60 z-50"
          src={product.img}
          alt={`${product.title} pattern`}
          width={400}
          height={400}
          priority
        />
      </motion.div>

      {/* Title with Chevron */}
      <motion.div
        className="flex items-center justify-between relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="font-sora font-semibold text-white text-base sm:text-lg lg:text-xl pr-4">
          {product.title}
        </div>

        {/* Chevron Icon */}
        <motion.div
          className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex-shrink-0"
          animate={{
            rotate: isActive ? 180 : 0,
            backgroundColor: isActive ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'
          }}
          transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
          whileHover={{
            scale: 1.1,
            backgroundColor: 'rgba(255, 255, 255, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            width="10"
            height="6"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.p
            className="text-white text-sm sm:text-base leading-relaxed max-w-md relative z-10"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
              height: { duration: 0.4 }
            }}
            style={{ marginTop: '16px' }}
          >
            {product.desc}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}


// Desktop Feature Item (without Framer Motion)
const DesktopFeatureItem = ({
  feature,
  index,
  isActive,
  onToggle
}: {
  feature: { title: string, content: string },
  index: number,
  isActive: boolean,
  onToggle: (index: number) => void
}) => {
  const handleClick = useCallback(() => {
    onToggle(index)
  }, [index, onToggle])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onToggle(index)
    }
  }, [index, onToggle])

  return (
    <div
      className="w-full"
      style={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      <div
        className="flex justify-between items-center py-4 lg:py-6 px-3 sm:px-4 cursor-pointer hover:bg-white/5 transition-colors duration-200"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <h3 className="font-sora font-medium text-white text-sm sm:text-base lg:text-lg pr-4">
          {feature.title}
        </h3>
        <span
          className={`inline-block transition-transform duration-300 ${isActive ? "rotate-90" : ""
            }`}
        >
          <Image src="/img/Chevron-Right.svg" alt="Expand" width={10} height={16} />
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${isActive
            ? "max-h-[200px] pb-4 px-3 sm:px-4 bg-[#e1a940]/8 opacity-100"
            : "max-h-0 py-0 px-3 sm:px-4 opacity-0"
          }`}
      >
        <p className="text-white/80 text-xs sm:text-sm lg:text-base pt-2 leading-relaxed">
          {feature.content}
        </p>
      </div>
    </div>
  )
}

// Mobile Feature Item (with Framer Motion)
const MobileFeatureItem = ({
  feature,
  index,
  isActive,
  onToggle
}: {
  feature: { title: string, content: string },
  index: number,
  isActive: boolean,
  onToggle: (index: number) => void
}) => {
  const handleClick = useCallback(() => {
    onToggle(index)
  }, [index, onToggle])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onToggle(index)
    }
  }, [index, onToggle])

  return (
    <motion.div
      className="w-full"
      style={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <motion.div
        className="flex justify-between items-center py-4 lg:py-6 px-3 sm:px-4 cursor-pointer"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="font-sora font-medium text-white text-sm sm:text-base lg:text-lg pr-4">
          {feature.title}
        </h3>
        <motion.span
          className="inline-block"
          animate={{ rotate: isActive ? 90 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <Image src="/img/Chevron-Right.svg" alt="Expand" width={10} height={16} />
        </motion.span>
      </motion.div>

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0.0, 0.2, 1]
            }}
            className="overflow-hidden px-3 sm:px-4 bg-[#e1a940]/8"
          >
            <motion.p
              className="text-white/80 text-xs sm:text-sm lg:text-base pt-2 pb-4 leading-relaxed"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {feature.content}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Mobile Feature Section Component (with Framer Motion)
const MobileFeatureSection = ({
  activeProduct,
  currentFeatures,
  currentImage,
  activeFeature,
  toggleFeature
}: {
  activeProduct: 'product1' | 'product2',
  currentFeatures: Array<{ title: string, content: string }>,
  currentImage: string,
  activeFeature: number,
  toggleFeature: (index: number) => void
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`mobile-${activeProduct}`}
        className="sm:hidden w-full"
        initial={{ opacity: 0, height: 0, y: -20 }}
        animate={{ opacity: 1, height: 'auto', y: 0 }}
        exit={{ opacity: 0, height: 0, y: -20 }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0.0, 0.2, 1],
          height: { duration: 0.5 }
        }}
        style={{ marginTop: '16px' }}
      >
        <motion.div
          className="flex flex-col gap-4 p-4 shadow-lg relative backdrop-blur-[30px] overflow-hidden"
          style={{
            width: '100%',
            minHeight: '400px',
            height: 'auto',
            borderRadius: '20px',
            opacity: 1,
            background: 'linear-gradient(0deg, rgba(26, 98, 98, 0.16), rgba(26, 98, 98, 0.16)), linear-gradient(180deg, rgba(26, 98, 98, 0.2) 0%, rgba(189, 239, 244, 0.2) 100%)'
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >

          {/* Circles Inverted Background */}
          <Image
            className="absolute bottom-0 left-0 w-32 h-auto opacity-80 z-0"
            src="/img/circles-inverted.svg"
            alt="Circles decoration"
            width={226}
            height={226}
            loading="lazy"
          />

          {/* Product Image */}
          <motion.div
            className="relative mb-6 mr-[-15px] z-10 pl-[-50px]"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Image
              className="w-full "
              src={currentImage}
              alt="Product Overview"
              width={400}
              height={400}
              style={{ opacity: 1 }}
              priority
            />
          </motion.div>

          {/* Features List */}
          <motion.div
            className="flex flex-col relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            {currentFeatures.map((feature, index) => (
              <MobileFeatureItem
                key={`${activeProduct}-${index}`}
                feature={feature}
                index={index}
                isActive={activeFeature === index}
                onToggle={toggleFeature}
              />
            ))}

            <motion.div
              className="mt-4 pt-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <motion.a
                href={START_SCALING_LINKS[activeProduct]} target="_blank" rel="noopener noreferrer"
                className="inline-block transition-all ml-[-20px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/img/start-scaling.png"
                  alt="START SCALING"
                  width={200}
                  height={100}

                  loading="lazy"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState<'product1' | 'product2'>('product1')
  const [activeFeature, setActiveFeature] = useState(0)

  const toggleFeature = useCallback((index: number) => {
    setActiveFeature(prev => prev === index ? -1 : index)
  }, [])

  const switchProduct = useCallback((productId: 'product1' | 'product2') => {
    setActiveProduct(productId)
    setActiveFeature(0)
  }, [])

  // Mobile version uses null state, desktop uses default state
  const [mobileActiveProduct, setMobileActiveProduct] = useState<'product1' | 'product2' | null>(null)
  const [mobileActiveFeature, setMobileActiveFeature] = useState(0)

  const mobileToggleFeature = useCallback((index: number) => {
    setMobileActiveFeature(prev => prev === index ? -1 : index)
  }, [])

  const mobileSwitchProduct = useCallback((productId: 'product1' | 'product2') => {
    if (mobileActiveProduct === productId) {
      setMobileActiveProduct(null) // Close if clicking the same card
    } else {
      setMobileActiveProduct(productId)
      setMobileActiveFeature(0)
      
      // If selecting Intelligence Growth Engine, scroll to its features
      if (productId === 'product1') {
        setTimeout(() => {
          const activeCard = document.querySelector(`#${productId}`)
          if (activeCard) {
            activeCard.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            })
          }
        }, 400) // Delay to allow card expansion animation
      }
      
      // If selecting AI Chat + Voice Agents, scroll to its features
      if (productId === 'product2') {
        setTimeout(() => {
          const activeCard = document.querySelector(`#${productId}`)
          if (activeCard) {
            activeCard.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            })
          }
        }, 400) // Delay to allow card expansion animation
      }
    }
  }, [mobileActiveProduct])

  // Memoize computed values
  const currentFeatures = useMemo(() => FEATURES_DATA[activeProduct], [activeProduct])
  const currentImage = useMemo(() => IMAGES[activeProduct], [activeProduct])

  const mobileCurrentFeatures = useMemo(() =>
    mobileActiveProduct ? FEATURES_DATA[mobileActiveProduct] : [],
    [mobileActiveProduct]
  )
  const mobileCurrentImage = useMemo(() =>
    mobileActiveProduct ? IMAGES[mobileActiveProduct] : '',
    [mobileActiveProduct]
  )

  return (
    <div
      id="our-products"
      className="relative w-full flex flex-col lg:flex-row items-start justify-start py-[20px] px-[20px] pt-10 pb-10 md:py-[20px] lg:py-[80px] xl:px-[80px]"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
        alignSelf: 'stretch'
      }}
    >
      {/* Decorative gradient */}
      <div className="absolute top-[0] right-[700px] w-[200px] h-[300px] rotate-0 opacity-100 bg-gradient-to-t from-[#1A6262] to-[#1A6262] blur-[200px] pointer-events-none z-10 hidden sm:flex"></div>

      <div className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-poppins font-semibold text-white leading-snug tracking-[-1px] lg:tracking-[-2px] text-left lg:text-left">
        OUR PRODUCTS
      </div>

      {/* Description */}
      <p className="font-poppins font-normal text-white/80 text-sm sm:text-base leading-[24px] max-w-full lg:max-w-[40%] text-left pb-12">
        SniperThink offers two powerful growth products. Whether you&apos;re looking to unify your business data or
        automate and segment customer interactions, our tools are designed to replace chaos with clarity and
        help you move faster with intelligence.
      </p>

      {/* Main content */}
      <div className="w-full flex lg:flex-col flex-col-reverse slg:flex-col items-start text-left gap-8 lg:gap-10 relative">

        {/* Mobile Version - with Framer Motion */}
        <div className="flex flex-col items-stretch justify-start w-full gap-4 sm:hidden">
          {PRODUCTS_DATA.map((product) => (
            <div key={product.id} className="w-full">
              <MobileProductCard
                product={product}
                isActive={mobileActiveProduct === product.id}
                onSelect={mobileSwitchProduct}
              />

              {/* Mobile Feature Section - Only show for active product */}
              {mobileActiveProduct === product.id && (
                <MobileFeatureSection
                  activeProduct={mobileActiveProduct}
                  currentFeatures={mobileCurrentFeatures}
                  currentImage={mobileCurrentImage}
                  activeFeature={mobileActiveFeature}
                  toggleFeature={mobileToggleFeature}
                />
              )}
            </div>
          ))}
        </div>

        {/* Desktop Version - without Framer Motion */}
        <div className="hidden sm:flex flex-col lg:flex-col items-start text-left gap-8 lg:gap-10 w-full">
          <div className="flex flex-col lg:flex-row items-stretch justify-start w-full gap-4 lg:gap-6">
            {PRODUCTS_DATA.map(product => (
              <DesktopProductCard
                key={product.id}
                product={product}
                isActive={activeProduct === product.id}
                onSelect={switchProduct}
              />
            ))}
          </div>

          {/* Desktop Feature Section */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full" id={activeProduct === 'product1' ? 'intelligence-growth-features' : 'ai-agents-features'}>
            <div className="flex flex-col-reverse md:flex-row gap-6 p-4 sm:p-6 md:p-8 shadow-lg relative backdrop-blur-[30px] overflow-hidden"
              style={{
                width: '100%',
                minHeight: 'clamp(400px, 60vh, 588px)',
                height: 'auto',
                borderRadius: 'clamp(20px, 4vw, 60px)',
                opacity: 1,
                background: 'linear-gradient(0deg, rgba(26, 98, 98, 0.16), rgba(26, 98, 98, 0.16)), linear-gradient(180deg, rgba(26, 98, 98, 0.2) 0%, rgba(189, 239, 244, 0.2) 100%)'
              }}>
              {/* Circles Inverted Background */}
              <Image
                className="absolute bottom-0 left-0 w-32 sm:w-40 md:w-48 lg:w-56 h-auto opacity-80 z-0"
                src="/img/circles-inverted.svg"
                alt="Circles decoration"
                width={226}
                height={226}
                loading="lazy"
              />

              {/* Features List */}
              <div className="flex flex-col flex-1 min-h-[400px] lg:h-[600px] overflow-y-auto pt-[40px] lg:pt-[60px] scrollbar-hide">
                {currentFeatures.map((feature, index) => (
                  <DesktopFeatureItem
                    key={`${activeProduct}-${index}`}
                    feature={feature}
                    index={index}
                    isActive={activeFeature === index}
                    onToggle={toggleFeature}
                  />
                ))}


                <a href={START_SCALING_LINKS[activeProduct]}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center relative cursor-pointer transition-all duration-300 mt-4 sm:mt-6"
                  style={{
                    width: '180.5791778564453px',
                    height: '45.16551971435547px',
                    gap: '12.08px',

                    paddingTop: '12.08px',
                    paddingRight: '30.21px',
                    paddingBottom: '12.08px',
                    paddingLeft: '30.21px',
                    borderRadius: '10.07px',
                    border: '1px solid #E1A940C4',
                    borderImageSource: 'linear-gradient(180deg, #E1A940 0%, #E1A940 77%, #FFFFFF 20%, linear-gradient 30%, #FF6700 0%, #FF8633 70%)',
                    borderImageSlice: '1',
                    background: 'linear-gradient(180deg, rgba(255, 103, 0, 0) 0%, rgba(255, 103, 0, 1) 100%)',
                    boxShadow: 'inset 0 10px 30px 0 rgba(255, 103, 0, 0.7), 0 10px 27.6px 0 rgba(0, 0, 0, 0.22)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <span className="font-poppins font-medium text-white text-sm leading-[20px] whitespace-nowrap">
                    START SCALING
                  </span>
                  <img
                    alt="Arrow"
                    loading="lazy"
                    width="14"
                    height="14"
                    decoding="async"
                    className="w-3.5 h-3.5"
                    style={{ color: 'transparent' }}
                    src="/img/Chevron-Right.svg"
                  />
                </a>
              </div>

              {/* Product Image */}
              <div className="flex-1 relative block md:block">
                <Image
                  className="object-contain w-full md:w-auto md:absolute md:bottom-[-30px] md:right-[-100px]"
                  src={currentImage}
                  alt="Product Overview"
                  width={567}
                  height={588}
                  style={{ opacity: 1 }}
                  loading="lazy"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
