import { ArrowRight, ChevronDown, HelpCircle } from "lucide-react";
import { Button } from "../ui/button";
import { faqs } from "@6LayerLP/data/faqs";
import { useState, useEffect } from "react";

interface FAQSectionProps {
    defaultOpenIndex?: number; // Optional prop to specify which FAQ should be open by default
}

export const FAQSection: React.FC<FAQSectionProps> = ({ defaultOpenIndex = 0 }) => {
    // Initialize with the specified FAQ open by default (or the first one if not specified)
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(defaultOpenIndex)
    const toggleFAQ = (index: number) => {
        setExpandedFAQ(expandedFAQ === index ? null : index)
    }
    return (
        <section id="faq" className="pt-20 pb-24">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:items-stretch">
                    {/* Left Column - Still Have Questions Card */}
                    <div className="lg:col-span-1 flex">
                        <div className="bg-white/2 border border-white/8 p-8 rounded-[20px] flex flex-col items-center text-center w-full h-full py-24">
                            {/* Icon Box */}
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#1A6262] to-[#91C499] flex items-center justify-center mb-6">
                                <HelpCircle className="w-6 h-6 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-white mb-4">Still Curious?</h3>

                            {/* Description */}
                            <p className="text-sm text-[#A1A1AA] mb-10">
                                {"Got questions? Our team’s listening."}
                            </p>

                            {/* CTA Button */}
                            <a 
                                href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="bg-[#1C1C1E] text-white font-medium px-5 py-3 rounded-lg hover:bg-gray-700 transition-colors mt-6">
                                    Ask A Question <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - FAQ Accordion */}
                    <div className="lg:col-span-2">
                        <div className="flex flex-col gap-3">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`bg-white/2 border border-white/8 rounded-xl p-5 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/4 ${expandedFAQ === index ? "bg-white/4" : ""}`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="flex justify-between items-center w-full text-left"
                                        aria-expanded={expandedFAQ === index}
                                    >
                                        <span className="text-base font-medium text-white pr-4">{faq.question}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${expandedFAQ === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Answer with smooth height transition */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="mt-3 text-sm text-[#A1A1AA] leading-relaxed">{faq.answer}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
