'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0)

  const faqs = [
    {
      question: "1. What exactly is SniperThink?",
      answer: "SniperThink is a growth operating system that helps businesses bring all their scattered data and first-touch sales conversations into one platform. Our six-layer system gives you visibility, alerts, forecasts, and reports, while our AI agents qualify and segment leads 24/7"
    },
    {
      question: "2. How is SniperThink different from a traditional ERP or dashboard?",
      answer: "Most ERPs are complex and built for large enterprises, while dashboards only show you numbers. SniperThink is lightweight, plug-and-play, and built for growth. It not only gives you clarity on your business but also tells you what to do next — and even helps you capture and qualify leads automatically"
    },
    {
      question: "3. Do I need an existing system like a CRM or ERP to use SniperThink?",
      answer: "No. If you already use Tally, Excel, ERPs, or CRMs, SniperThink integrates with them. If not, you can record your data directly inside SniperThink — making it your single source of truth from day one"
    },
    {
      question: "4. Can SniperThink really help me make faster decisions?",
      answer: "Yes. With real-time KPIs, automated alerts, and predictive insights, you get to know what’s happening in your business as it happens — not weeks later in a report. That means you can act on issues or opportunities before they slip away"
    },
    {
      question: "5. How quickly can I get started?",
      answer: "Basic setup (KPIs, alerts, and one agent entry point) can be live in as little as 48 hours. A full rollout across all six layers typically takes 2–3 weeks depending on complexity"
    },
    {
      question: "6. Is my data secure with SniperThink?",
      answer: "Yes. All data is encrypted in transit and at rest. You control access through user roles and permissions, and every critical change is tracked. We follow industry-standard practices to keep your data safe"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index)
  }

  return (
    <div
      id="faq-section"
      className="relative w-full max-w-[100%] pb-5 mb-10 lg:mb-20 mx-auto h-auto py-[20px] px-[20px] pt-10 pb-10 md:py-[20px] lg:py-[80px] xl:px-[80px] z-[10]"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        alignSelf: 'stretch'
      }}
    >
      {/* Background Hexagons */}
      <Image
        src="/img/Hexagons2.png"
        alt="Hexagons decoration"
        width={550}
        height={450}
        className="
          absolute 
          left-0 
          top-[0px]
          md:top-[80px] 
          lg:top-[80px]
          w-[300px] h-[350px]   /* 👈 mobile */
          md:w-[300px] md:h-[350px]  /* 👈 tablet */
          lg:w-[450px] lg:h-[550px]  /* 👈 desktop */
          -z-10
        "
        />

      <div className="relative z-10 w-full">
        {/* Mobile & Tablet */}
        <div className="block lg:hidden">
          {/* Image & Description */}
          <div className="flex flex-col gap-5 p-8 sm:p-12 w-full mx-0 sm:mx-6 mb-8 rounded-[30px] sm:rounded-[60px] overflow-hidden backdrop-blur-[15px] bg-gradient-to-b from-[rgba(26,98,98,0.2)] to-[rgba(189,238,244,0.2)]">
            <h2 className="self-stretch text-[40px] font-poppins font-bold uppercase">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#FF6700] to-[#EDBA5A] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-6 text-left">
              Here's what businesses like yours often ask before switching to SniperThink.
            </p>
          </div>


          {/* Know More Button for Mobile & Tablet */}
          <div className="flex justify-start items-start w-full mb-6">
            <a href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09" 
              target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center justify-center relative cursor-pointer transition-all duration-300" 
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
              <span className="font-medium text-white text-sm leading-5 whitespace-nowrap">
                Ask a Question
              </span>
              <img 
                alt="Arrow" 
                loading="lazy" 
                width="14" 
                height="14" 
                decoding="async" 
                className="w-3.5 h-3.5" 
                style={{color: 'transparent'}} 
                src="/img/Chevron-Right.svg"
              />
            </a>
          </div>

          {/* FAQ Items - Full Width */}
          <div className="flex flex-col gap-4 sm:gap-[18px] w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="relative w-full min-h-[60px] p-4 sm:p-5 cursor-pointer transition-all duration-300 ease-in-out overflow-hidden "
                style={{
                  borderRadius: '9.643px',
                  border: openFAQ === index ? '0.804px solid #EDBA5A' : '',
                  opacity: openFAQ === index ? 1 : 1,
                  background: openFAQ === index ? '#1C1A1A' : 'linear-gradient(127deg, rgba(255, 255, 255, 0.02) 6.63%, rgba(255, 255, 255, 0.06) 91.75%)',
                  backdropFilter: openFAQ === index ? 'none' : 'blur(16.072235107421875px)',
                  boxShadow: openFAQ === index ? '0 0.804px 9.643px 0 rgba(255, 215, 0, 0.10)' : 'none'
                }}
                onClick={() => toggleFAQ(index)}
              >
                <p className="font-semibold text-white text-sm sm:text-base pr-8 sm:pr-10">
                  {faq.question}
                </p>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${openFAQ === index ? 'max-h-40 mt-2 sm:mt-2.5' : 'max-h-0'}`}
                >
                  <p className="font-normal text-white/80 text-xs sm:text-sm leading-5">
                    {faq.answer}
                  </p>
                </div>

                <div
                  className={`absolute right-4 sm:right-5 top-4 sm:top-5 w-5 h-5 flex items-center justify-center text-white text-xl font-bold transition-transform duration-300 ease-in-out ${openFAQ === index ? 'rotate-45' : ''
                    }`}
                >
                  +
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-start gap-6 lg:gap-[60px] xl:gap-[80px] pt-10 lg:pt-20 w-full ">
          {/* Left Side */}
          <div className="max-w-lg basis-auto">
            <div className="flex flex-col gap-3 lg:gap-5 p-6 sm:p-8 lg:p-12 xl:p-[80px_40px] rounded-[30px] lg:rounded-[60px] overflow-hidden backdrop-blur-[15px] bg-gradient-to-b from-[rgba(26,98,98,0.2)] to-[rgba(189,238,244,0.2)] min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] xl:min-h-[546px]">
              <h2 className="self-stretch text-[24px] sm:text-[32px] lg:text-[40px] font-poppins font-semibold uppercase leading-tight">
                <span className="block text-white">Frequently Asked</span>
                <span className="block bg-gradient-to-r from-[#FF6700] to-[#EDBA5A] bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>


              <p className="text-white/80 text-sm sm:text-base leading-5 sm:leading-6">
                Here's what businesses like yours often ask before switching to SniperThink.
              </p>

              {/* Know More Button for Desktop */}
              <div className="flex justify-start items-start w-full mt-6">
                <a href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09" 
                  target="_blank" rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center relative cursor-pointer transition-all duration-300" 
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
                  <span className="font-medium text-white text-sm leading-5 whitespace-nowrap">
                    Ask a Question
                  </span>
                  <img 
                    alt="Arrow" 
                    loading="lazy" 
                    width="14" 
                    height="14" 
                    decoding="async" 
                    className="w-3.5 h-3.5" 
                    style={{color: 'transparent'}} 
                    src="/img/Chevron-Right.svg"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Full Width Stretch */}

          <div className="flex-1 basis-0 w-full min-w-0">
            <div className="flex flex-col gap-[18px] pt-0 w-full">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="relative w-full min-h-[60px] p-5 cursor-pointer transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    borderRadius: '9.643px',
                    border: openFAQ === index ? '0.804px solid #EDBA5A' : '',
                    opacity: openFAQ === index ? 1 : 1,
                    background: openFAQ === index ? '#1C1A1A' : 'linear-gradient(127deg, rgba(255, 255, 255, 0.02) 6.63%, rgba(255, 255, 255, 0.06) 91.75%)',
                    backdropFilter: openFAQ === index ? 'none' : 'blur(16.072235107421875px)',
                    boxShadow: openFAQ === index ? '0 0.804px 9.643px 0 rgba(255, 215, 0, 0.10)' : 'none'
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="font-semibold text-white text-base pr-10 ">
                    {faq.question}
                  </p>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${openFAQ === index ? 'max-h-40 mt-2.5' : 'max-h-0'}`}
                  >
                    <p className="font-normal text-white/80 text-sm leading-5">
                      {faq.answer}
                    </p>
                  </div>

                  <div
                    className={`absolute right-4 sm:right-5 top-4 sm:top-5 w-5 h-5 flex items-center justify-center text-white text-xl font-bold transition-transform duration-300 ease-in-out ${openFAQ === index ? 'rotate-45' : ''
                      }`}
                  >
                    +
                  </div>

                </div>
              ))}
            </div>
            <div className="absolute bottom-5 right-5 w-[160px] h-[160px] sm:top-10 sm:bottom-auto sm:right-0 sm:w-[220px] sm:h-[220px] md:right-[-100px] md:w-[300px] md:h-[300px] bg-gradient-to-t from-[#1A6262] to-[#1A6262] blur-[80px] sm:blur-[120px] md:blur-[150px] opacity-100 pointer-events-none sm:z-10"></div>

          </div>
        </div>
      </div>
    </div>
  )
}
