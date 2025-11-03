
import { ArrowRight, FileText, Workflow, BarChart3, Settings, Brain } from "lucide-react";
import { Button } from "../ui/button";

export default function SniperThinkSection() {
  return (
    <section id="why-us" className="pt-3 pb-9">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile: Grid Layout, Desktop: Original Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Top-left: Heading Block - Mobile: Full width, Desktop: Left column */}
          <div className="col-span-2 md:col-span-1 flex flex-col justify-center p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why it matters?</h2>
            <p className="text-gray-300 mb-4">
              From fast deployment to full control, here's why teams choose us over the noise.
            </p>
            <div>
              <a 
                href="https://calendly.com/admin-sniperthink/walk-through-for-demos?month=2025-09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="link" className="text-[#91C499] hover:text-[#1A6262] p-0 pl-0 ml-0 text-left font-medium">
                  Discover how SniperThink works <ArrowRight className="w-4 h-4 ml-1 inline-block" />
                </Button>
              </a>
            </div>
          </div>

          {/* Scale Card */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="w-12 h-12 bg-gradient-to-r from-[#1A6262] to-[#91C499] rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Centralisation</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  One view for everything 
                </p>
              </div>
              <div className="flip-card-back">
                <p className="text-white text-center font-medium">
                  All business data in one place for clear, actionable decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Tone Card */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="w-12 h-12 bg-gradient-to-r from-[#E1A940] to-[#FF6700] rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <Workflow className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Proactivity</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Fix problems before losses 
                </p>
              </div>
              <div className="flip-card-back">
                <p className="text-white text-center font-medium">
                  Alerts and predictions help prevent risks before they happen.
                </p>
              </div>
            </div>
          </div>

          {/* Signals Card */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="w-12 h-12 bg-gradient-to-r from-[#91C499] to-[#1A6262] rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Growth</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Goals you can achieve
                </p>
              </div>
              <div className="flip-card-back">
                <p className="text-white text-center font-medium">
                  Forecasts and simulations turn ambitions into real actions.
                </p>
              </div>
            </div>
          </div>

          {/* Ease Card */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF6700] to-[#E1A940] rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Time</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Reports done in minutes
                </p>
              </div>
              <div className="flip-card-back">
                <p className="text-white text-center font-medium">
                  Automated reporting and dashboards cut hours of manual work. 
                </p>
              </div>
            </div>
          </div>

          {/* Focus Card - Part of grid on mobile, original position on desktop */}
          <div className="flip-card highlighted col-span-2 md:col-span-1">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <Brain className="w-6 h-6 text-[#1A6262]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Affordability</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Built for every business
 
                </p>
              </div>
              <div className="flip-card-back">
                <p className="text-white text-center font-medium">
                  Designed for businesses with no tech expertise required. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
