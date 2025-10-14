import { processSteps } from "@aiagents/data/processSteps";
import { Brain, CheckCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Process = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [hoveredPanelPart, setHoveredPanelPart] = useState<string | null>(null);
    const [isProcessInView, setIsProcessInView] = useState(false);

    // Create refs for each step section and process section
    const stepRefs = useRef<Array<{ ref: any; inView: boolean }>>([]);
    const processSectionRef = useRef<HTMLElement>(null);
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const processContainerRef = useRef<HTMLDivElement>(null);

    // Initialize intersection observers for each step
    const [step0Ref, step0InView] = useInView({ threshold: 0.5 });
    const [step1Ref, step1InView] = useInView({ threshold: 0.5 });
    const [step2Ref, step2InView] = useInView({ threshold: 0.5 });
    const [step3Ref, step3InView] = useInView({ threshold: 0.5 });

    // Update active step based on which section is in view
    useEffect(() => {
        if (step3InView) setActiveStep(3);
        else if (step2InView) setActiveStep(2);
        else if (step1InView) setActiveStep(1);
        else if (step0InView) setActiveStep(0);
    }, [step0InView, step1InView, step2InView, step3InView]);

    // Handle scroll-based visibility for left panel - restricted between Step 1 and Step 4 (Desktop only)
    useEffect(() => {
        // Only enable sticky scroll behavior on desktop (lg and above)
        const isDesktop = window.innerWidth >= 1024;

        if (!isDesktop) return;

        const handleScroll = () => {
            if (!processContainerRef.current || !leftPanelRef.current) return;

            const leftPanel = leftPanelRef.current;
            const processContainer = processContainerRef.current;

            // Get all step elements from the scrolling right panel
            const stepElements = processContainer.querySelectorAll('[data-step]');

            if (!stepElements || stepElements.length < 4) return;

            const step1 = stepElements[0]; // First step (data-step="1")
            const step4 = stepElements[3]; // Fourth step (data-step="4")

            if (!step1 || !step4) return;

            // Get precise boundaries
            const step1Rect = step1.getBoundingClientRect();
            const step4Rect = step4.getBoundingClientRect();
            const viewportMiddle = window.innerHeight / 2;

            // Show panel ONLY when between Step 1 and Step 4
            const step1Entered = step1Rect.top <= viewportMiddle;
            const step4StillVisible = step4Rect.bottom >= viewportMiddle;
            const shouldShow = step1Entered && step4StillVisible;

            // Toggle active class for immediate transitions
            if (shouldShow) {
                leftPanel.classList.add('active');
                if (isProcessInView !== true) {
                    setIsProcessInView(true);
                }
            } else {
                // Hide immediately - slides back to left
                leftPanel.classList.remove('active');
                if (isProcessInView !== false) {
                    setIsProcessInView(false);
                }
            }
        };

        // Throttled scroll handler for performance
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });

        // Initial check after a short delay to ensure DOM is ready
        const timer = setTimeout(handleScroll, 100);

        return () => {
            window.removeEventListener('scroll', throttledScroll);
            clearTimeout(timer);
        };
    }, [isProcessInView]);

    const refs = [step0Ref, step1Ref, step2Ref, step3Ref];

    const renderStepVisual = (visual: string) => {
        switch (visual) {
            case "greeting":
                return (
                    <motion.div 
                        className="space-y-4 w-full max-w-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div 
                            className="bg-gradient-to-r from-[#1A6262] to-[#91C499] rounded-xl p-4 xs:p-5 border border-green-500/30 shadow-lg"
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p className="text-white text-sm xs:text-base font-semibold flex items-center gap-2">
                                <span className="text-lg">👋</span> Welcome to SniperThink!
                            </p>
                        </motion.div>
                        <motion.div 
                            className="bg-gradient-to-r from-[#E1A940] to-[#FF6700] rounded-xl p-4 xs:p-5 ml-8 border-2 border-[#FF6700] shadow-xl"
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <p className="text-white text-sm xs:text-base font-semibold">How can I help you today?</p>
                        </motion.div>
                    </motion.div>
                )
            case "intent":
                return (
                    <motion.div 
                        className="relative text-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div 
                            className="w-32 h-32 xs:w-36 xs:h-36 border-4 border-[#91C499] bg-gradient-to-br from-[#1A6262] to-[#91C499] rounded-full flex items-center justify-center mx-auto shadow-2xl"
                            animate={{ 
                                boxShadow: ["0 0 20px rgba(145, 196, 153, 0.5)", "0 0 40px rgba(145, 196, 153, 0.8)", "0 0 20px rgba(145, 196, 153, 0.5)"]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Brain className="w-16 h-16 xs:w-18 xs:h-18 text-white" />
                        </motion.div>
                        <motion.div 
                            className="mt-6 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <p className="text-base xs:text-lg font-bold text-[#91C499] mb-2">Analyzing Intent</p>
                            <div className="flex justify-center space-x-1">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-2 h-2 bg-[#91C499] rounded-full"
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ 
                                            duration: 1.5, 
                                            repeat: Infinity,
                                            delay: i * 0.2 
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )
            case "qualify":
                return (
                    <motion.div 
                        className="space-y-3 w-full max-w-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-center mb-4">
                            <h3 className="text-lg font-bold text-[#91C499] mb-1">Lead Qualification</h3>
                            <p className="text-xs text-gray-300">Assessment Complete</p>
                        </div>
                        {[
                            { label: "Lead Score", value: "85%", color: "text-[#E1A940]", bg: "from-[#E1A940]/30 to-[#E1A940]/10", border: "border-[#E1A940]/60" },
                            { label: "Budget Range", value: "$10K+", color: "text-[#91C499]", bg: "from-[#91C499]/30 to-[#91C499]/10", border: "border-[#91C499]/60" },
                            { label: "Timeline", value: "Q1 2024", color: "text-[#FF6700]", bg: "from-[#FF6700]/30 to-[#FF6700]/10", border: "border-[#FF6700]/60" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className={`flex items-center justify-between p-4 bg-gradient-to-r ${item.bg} rounded-xl border-2 ${item.border} shadow-lg`}
                                initial={{ x: -30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <span className="text-white text-sm xs:text-base font-semibold">{item.label}</span>
                                <span className={`${item.color} font-bold text-base xs:text-lg`}>{item.value}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                )
            case "action":
                return (
                    <motion.div 
                        className="text-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Success circle */}
                        <motion.div 
                            className="w-32 h-32 xs:w-36 xs:h-36 bg-gradient-to-br from-[#E1A940] to-[#FF6700] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl border-4 border-[#E1A940]"
                            animate={{ 
                                boxShadow: [
                                    "0 0 20px rgba(225, 169, 64, 0.6)",
                                    "0 0 40px rgba(255, 103, 0, 0.8)",
                                    "0 0 20px rgba(225, 169, 64, 0.6)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <CheckCircle className="w-16 h-16 xs:w-18 xs:h-18 text-white" />
                        </motion.div>
                        
                        {/* Success text */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <h3 className="text-xl xs:text-2xl font-bold text-white mb-3">Demo Scheduled!</h3>
                            
                            <motion.div
                                className="bg-gradient-to-r from-[#91C499]/60 to-[#E1A940]/60 rounded-xl p-4 border-2 border-[#91C499] mx-auto max-w-xs"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <p className="text-white text-sm xs:text-base font-semibold">
                                    ✉️ Calendar invite sent
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )
            default:
                return null
        }
    }

    // Animation variants
    const headerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
            }
        }
    };

    const stickyCardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1
        }
    };

    return (
        <section 
            ref={processSectionRef}
            id="process" 
            className="process-section py-8 xs:py-10 sm:py-12 lg:py-16 xl:py-20 bg-black"
        >
            {/* Framer-style stack container */}
            <div className="max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-6 lg:px-16">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-8 sm:mb-12 lg:mb-96 xl:mb-[28rem]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={headerVariants}
                >
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-3 xs:mb-4 leading-tight">
                        Our Simple & <span className="italic text-[#91C499]">Smart</span> Process
                    </h2>
                    <p className="text-sm xs:text-base lg:text-lg text-gray-400 text-center px-4 xs:px-2 sm:px-0 max-w-2xl mx-auto">
                        Everything you need to engage, qualify, and convert leads, all in one flow.
                    </p>
                </motion.div>

                {/* Process Sticky Stack Container */}
                <div ref={processContainerRef} className="process-container">
                    {/* LEFT SIDE - STICKY DASHBOARD PANEL (Stacked for Process Section) - Hidden on mobile */}
                    <div ref={leftPanelRef} className="sticky-left-panel hidden lg:block">
                        <div className="left-panel-stack-wrapper w-full">
                            {/* Framer-style animated card - position relative within stack container */}
                            <motion.div
                                className="w-full max-w-md mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={stickyCardVariants}
                            transition={{ duration: 0.8 }}
                            style={{
                                position: 'relative', // Relative within sticky container
                                willChange: 'transform',
                                contain: 'layout style paint'
                            }}
                        >
                        <motion.div
                            className="bg-gradient-to-br from-[#1C1C1E] to-[#0F0F11] rounded-xl lg:rounded-2xl shadow-lg border border-green-500/30 w-full aspect-square flex items-center justify-center"
                            animate={{
                                scale: 1,
                                boxShadow: `0 10px 20px rgba(34, 197, 94, 0.05)`
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.4, 0, 0.2, 1],
                                type: "tween"
                            }}
                            style={{
                                position: 'relative',
                                borderRadius: '1rem',
                                minHeight: '400px',
                                minWidth: '400px'
                            }}
                        >

                            {/* Dynamic Visualization Content */}
                            <div
                                className="w-full h-full flex items-center justify-center relative p-6"
                                onClick={() => console.log('User interacting with: Visualization Content', {
                                    activeStep,
                                    visual: processSteps[activeStep]?.visual
                                })}
                            >
                                {/* Only render the active step visualization */}
                                <motion.div
                                    key={`step-visual-${activeStep}`}
                                    className="w-full h-full flex items-center justify-center"
                                    initial={{ 
                                        opacity: 0,
                                        scale: 0.95
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeOut"
                                    }}
                                >
                                    {renderStepVisual(processSteps[activeStep]?.visual)}
                                </motion.div>
                            </div>
                        </motion.div>
                        </motion.div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - SCROLLING CONTENT */}
                    <div className="scrolling-right-panel space-y-12 lg:space-y-12">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                ref={refs[index]}
                                data-step={index + 1}
                                className="min-h-[40vh] lg:min-h-[60vh] flex flex-col justify-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                {/* Mobile Visual Card - Shows on mobile, hidden on desktop */}
                                <motion.div
                                    className="lg:hidden mb-6 bg-gradient-to-br from-[#1C1C1E] to-[#0F0F11] rounded-xl shadow-lg border border-green-500/30 p-8 min-h-[300px] flex items-center justify-center"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {renderStepVisual(step.visual)}
                                </motion.div>

                                {/* Step Number Badge */}
                                <motion.div
                                    className="inline-flex items-center gap-2 mb-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#1A6262] via-[#91C499] to-[#E1A940] flex items-center justify-center font-bold text-white shadow-lg border border-[#1A6262]/20">
                                        {step.number}
                                    </div>
                                    <span className="text-xs sm:text-sm lg:text-base text-[#91C499] uppercase tracking-wider font-semibold">
                                        Step {step.number}
                                    </span>
                                </motion.div>

                                {/* Step Title */}
                                <motion.h3
                                    className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    {step.title}
                                </motion.h3>

                                {/* Step Description */}
                                <motion.p
                                    className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    {step.description}
                                </motion.p>

                                {/* Process highlights */}
                                <motion.div
                                    className="mt-6 space-y-3"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    {[
                                        index === 0 ? "Instant engagement" : 
                                        index === 1 ? "Smart analysis" :
                                        index === 2 ? "Lead scoring" : "Action automation"
                                    ].map((highlight, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-start gap-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                                        >
                                            <CheckCircle className="w-5 h-5 text-[#91C499] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300 text-sm lg:text-base">
                                                {highlight}
                                            </span>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Progress Indicator */}
                                <motion.div
                                    className="mt-8 lg:mt-12"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="text-xs text-gray-500">
                                            {index + 1} of {processSteps.length}
                                        </div>
                                        {index < processSteps.length - 1 && (
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <span>Scroll to continue</span>
                                                <motion.svg 
                                                    className="w-4 h-4"
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                    animate={{ y: [0, 5, 0] }}
                                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                                </motion.svg>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}