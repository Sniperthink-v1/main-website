'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(-1)

  const faqs = [
    {
      question: "1. How is SniperThink different from other chatbots or call bots?",
      answer: "Our AI agents sound real, speak fluent Hinglish, follow Indian sales flows, and can be trained on your own tone, script, and follow-up strategy."
    },
    {
      question: "2. What are SniperThink's Agents?",
      answer: "Answer to question 2 goes here."
    },
    {
      question: "3. Can I customize the agent for my industry or scripts?",
      answer: "Answer to question 3 goes here."
    },
    {
      question: "4. What platforms does SniperThink support?",
      answer: "Answer to question 4 goes here."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index)
  }

  return (
    <div id="faq-section" className="relative w-full max-w-5xl pt-20 mx-auto">

      {/* Background Hexagons */}
      <img
        className="absolute w-[400px] h-[450px] sm:w-[500px] sm:h-[550px] lg:w-[626px] lg:h-[661px] top sm:pt-150 -left-8 sm:-left-10 z-0"
        src="/img/Hexagons2.svg"
        alt="Hexagons decoration"
      />

      <div className="relative z-10 pt-10">
        {/* Mobile & Tablet */}
        <div className="block lg:hidden">
          {/* Image & Description */}
          <div className="flex flex-col gap-5 p-8 sm:p-12 mx-4 sm:mx-6 mb-8 rounded-[30px] sm:rounded-[60px] overflow-hidden backdrop-blur-[15px] bg-gradient-to-b from-[rgba(26,98,98,0.2)] to-[rgba(189,238,244,0.2)]">
            <img
              className="w-full max-w-md mx-auto"
              src="/img/frequently-asked-questions.svg"
              alt="FAQ"
            />
            <p className="text-white/80 text-sm sm:text-base leading-6 text-center">
              Here's what businesses like yours often ask before switching to SniperThink.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="flex flex-col gap-4 sm:gap-[18px] px-4 sm:px-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`relative w-full min-h-[60px] rounded-[9.64px] shadow-[0px_0.8px_9.64px_rgba(255,215,0,0.1)] p-4 sm:p-5 cursor-pointer transition-all duration-300 ease-in-out overflow-hidden ${openFAQ === index
                    ? 'bg-gradient-to-r from-[rgba(237,186,90,0.6)] to-[rgba(255,134,51,0.6)]'
                    : 'bg-[#1c1a1a]'
                  }`}
                style={{
                  borderBottom: index < faqs.length - 1 ? '0.6px solid rgba(26, 98, 90, 1)' : 'none'
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

                <div className={`absolute right-4 sm:right-5 top-4 sm:top-5 w-5 h-5 transition-transform duration-300 ease-in-out ${openFAQ === index ? 'rotate-45' : ''
                  }`}>
                  <img className="w-full h-full" src="/img/plus.svg" alt="Toggle" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex lg:gap-8 xl:gap-12 pt-20">
          {/* Left Side */}
          <div className="flex-1 max-w-lg">
            <div className="flex flex-col gap-5 xl:p-[120px_40px] rounded-[60px] overflow-hidden backdrop-blur-[15px] bg-gradient-to-b from-[rgba(26,98,98,0.2)] to-[rgba(189,238,244,0.2)] min-h-[600px]">
              <img
                className="w-full"
                src="/img/frequently-asked-questions.svg"
                alt="FAQ"
              />
              <p className="text-white/80 text-base leading-6">
                Here's what businesses like yours often ask before switching to SniperThink.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 max-w-2xl">
            <div className="flex flex-col gap-[18px] py-12 xl:py-[140px]">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`relative w-full min-h-[60px] rounded-[9.64px] shadow-[0px_0.8px_9.64px_rgba(255,215,0,0.1)] p-5 cursor-pointer transition-all duration-300 ease-in-out overflow-hidden hover:shadow-[0px_0.8px_9.64px_rgba(255,215,0,0.2)] ${openFAQ === index
                      ? 'bg-gradient-to-r from-[rgba(237,186,90,0.6)] to-[rgba(255,134,51,0.6)]'
                      : 'bg-[#1c1a1a] hover:bg-[#252323]'
                    }`}
                  style={{
                    borderBottom: index < faqs.length - 1 ? '0.6px solid rgba(26, 98, 90, 1)' : 'none'
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="font-semibold text-white text-base pr-10">
                    {faq.question}
                  </p>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${openFAQ === index ? 'max-h-40 mt-2.5' : 'max-h-0'}`}
                  >
                    <p className="font-normal text-white/80 text-sm leading-5">
                      {faq.answer}
                    </p>
                  </div>

                  <div className={`absolute right-5 top-5 w-5 h-5 transition-transform duration-300 ease-in-out ${openFAQ === index ? 'rotate-45' : ''
                    }`}>
                    <img className="w-full h-full" src="/img/plus.svg" alt="Toggle" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
