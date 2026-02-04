import React from "react";
import { Button } from "@/components/ui/button";
import { Egg } from "lucide-react";
import KnowledgeGraph3D from "@/components/IntelligenceAgents/KnowledgeGraph3D";
import { trackWTPDiscovery } from "@/lib/analytics";
// import Background3D from "@/components/IntelligenceAgents/Background3D";
import HeroAnimation from "@/components/IntelligenceAgents/HeroAnimation";
import HowItWorks from "@/components/IntelligenceAgents/HowItWorks";
// Background3D disabled for performance optimization
// Note: KnowledgeGraph3D provides the 3D background effect
// import Background3D from "@/components/IntelligenceAgents/Background3D";

import ValueDiscoverySection from "@/components/IntelligenceAgents/ValueDiscoverySection";
import TestimonialsSection from "@/components/IntelligenceAgents/TestimonialsSection";
import FAQSection from "@/components/IntelligenceAgents/FAQSection";
import IntegrationsLogos from "@/components/IntelligenceAgents/IntegrationsLogos";

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, any>) => void;
  }
}

const IntelligenceAgentsLanding: React.FC = () => {
  return (
    <div className="w-full relative bg-[#F8F7F5] font-sans selection:bg-[#D4A574]/20 selection:text-[#2D1B10] overflow-x-hidden">
      {/* Backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle warm radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#D4A57410,transparent_70%)] opacity-50"></div>
        {/* Noise/Paper texture */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
      </div>
      <KnowledgeGraph3D />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 md:px-12 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="text-[#D4A574] flex items-center justify-center">
            <Egg className="h-6 w-6" />
          </div>
          <span className="font-sans text-sm font-bold tracking-tight text-[#1A1A1A] uppercase">
            Intelligence Agents
            <span className="ml-2 text-[10px] text-subtle font-medium lowercase">
              by Buildwise Studios
            </span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#intelligence-agents"
            className="text-[14px] font-medium text-subtle hover:text-[#1A1A1A] transition-colors"
          >
            Intelligence
          </a>
          <a
            href="#process"
            className="text-[14px] font-medium text-subtle hover:text-[#1A1A1A] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#value-discovery"
            className="text-[14px] font-medium text-subtle hover:text-[#1A1A1A] transition-colors"
          >
            Value Discovery
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              trackWTPDiscovery('navigation', 'jason_wtp');
              window.open('/ai-product-manager', '_blank', 'noopener,noreferrer');
            }}
            className="group relative overflow-hidden bg-[#D4A574] text-[#2D1B10] text-xs font-bold px-5 py-2 rounded shadow-sm ring-1 ring-white/10 transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98]">
            <div className="shimmer-layer absolute inset-0 transform -translateX-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer z-10 transition-transform"></div>
            <span className="relative z-20">Book Setup Call</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col w-full">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-16">
          <div className="max-w-2xl space-y-8 relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574] animate-pulse"></span>
              <span className="font-sans text-[10px] font-medium text-slate-500 tracking-tight uppercase">
                24/7 Intelligence Operations
              </span>
            </div>

            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-[#1A1A1A] leading-[1.05]">
              Your Partners Are Wasting 20+ Hours Per Month on Work Intelligence Agents 
              Should Handle
            </h1>

            <p className="max-w-xl font-sans text-lg text-slate-600 font-light leading-relaxed">
              Executive search is about relationships and judgment calls—not
              updating org charts, monitoring LinkedIn, or logging notes into
              Salesforce from a taxi.
              <br />
              <br />
              <span className="text-[#1A1A1A] font-medium">
                What if your partners could offload all of that to AI agents
                that work 24/7, never take holidays, and cost less than a junior
                assistant?
              </span>
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="discuss-partnership"
                onClick={() => {
                  trackWTPDiscovery('hero', 'jason_wtp');
                  window.open('/ai-product-manager', '_blank', 'noopener,noreferrer');
                }}
                className="group relative overflow-hidden bg-[#D4A574] text-[#2D1B10] text-sm font-bold px-8 py-3.5 rounded shadow-lg shadow-[#D4A574]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl flex items-center gap-2"
              >
                <div className="shimmer-layer absolute inset-0 transform -translateX-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer z-10 transition-transform"></div>
                <span className="relative z-20">Discuss Partnership Opportunity</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 relative z-20">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <div className="text-xs text-subtle font-medium px-4 text-left">
                <span className="block">Global Executive Search</span>
                <span className="text-[#D4A574]">Partnership Discovery</span>
              </div>
            </div>
          </div>

          <HeroAnimation />
        </section>

        <IntegrationsLogos />

        {/* PAIN POINT SECTION */}
        <section
          id="problem"
          className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#F8F7F5]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20 md:mb-24">
              <h2 className="font-sans text-3xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight leading-tight">
                Your Partners Are Drowning in <br className="hidden lg:block" />{" "}
                Intelligence Work That{" "}
                <span className="text-danger relative inline-block">
                  Doesn't Close Deals
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-danger/20"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                    ></path>
                  </svg>
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Left: The Daily Struggle */}
              <div className="text-left">
                <p className="text-base font-medium text-subtle mb-8 uppercase tracking-wide">
                  The Daily Struggle
                </p>
                <p className="text-xl md:text-2xl font-medium text-[#1A1A1A] mb-10 leading-snug">
                  Partners waste <span className="text-[#D4A574]">25+ hours per partner monthly</span> on admin tasks that generate zero relationship value:
                </p>

                <ul className="space-y-8">
                  {[
                    {
                      title: "Tracking executive movements",
                      desc: "across LinkedIn, Bloomberg, and industry news.",
                    },
                    {
                      title: "Updating org charts",
                      desc: "manually when someone moves firms.",
                    },
                    {
                      title: "Logging CRM notes",
                      desc: "after client meetings (usually days later, from memory).",
                    },
                    {
                      title: "Formatting PowerPoint decks",
                      desc: "and Excel candidate trackers.",
                    },
                    {
                      title: "Monitoring market intelligence",
                      desc: "to spot placement opportunities before competitors.",
                    },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-4 group text-left"
                    >
                      <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-danger/10 text-danger flex items-center justify-center group-hover:bg-danger group-hover:text-white transition-colors duration-300">
                        <iconify-icon
                          icon="solar:close-circle-linear"
                          className="text-lg"
                        ></iconify-icon>
                      </div>
                      <span className="text-lg text-subtle font-light leading-relaxed group-hover:text-[#1A1A1A] transition-colors">
                        <strong className="font-semibold text-[#1A1A1A]">
                          {item.title}
                        </strong>{" "}
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: The Reality Check */}
              <div className="flex flex-col gap-12 lg:pt-12 text-left">
                <div className="relative pl-8 border-l-2 border-danger/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-danger border-4 border-white"></div>
                  <h3 className="text-xs font-bold tracking-widest text-danger uppercase mb-6">
                    The Real Cost
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <div className="text-4xl md:text-5xl font-mono font-medium text-[#1A1A1A] tracking-tighter mb-2">
                        25+ hours
                      </div>
                      <p className="text-subtle font-medium">
                        Available for redirection to high-value work
                      </p>
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-mono font-medium text-[#1A1A1A] tracking-tighter mb-2">
                        2-3 placements
                      </div>
                      <p className="text-subtle font-medium">
                        Additional annual capacity from time liberation
                      </p>
                    </div>
                    <div className="pt-4">
                      <p className="text-lg font-semibold text-danger">
                        → 2-3 lost placements per year
                      </p>
                      <p className="text-sm text-subtle mt-1">
                        Because they're doing admin instead of relationships.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-border">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-subtle border-4 border-white"></div>
                  <h3 className="text-xs font-bold tracking-widest text-subtle uppercase mb-6">
                    And hiring a junior assistant?
                  </h3>
                  <ul className="space-y-4 text-subtle">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]"></span>
                      <span>Overhead of training, management, and retention</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]"></span>
                      <span>Works 9-5, takes holidays</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]"></span>
                      <span>Handles one task at a time</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]"></span>
                      <span>Requires partner oversight & training</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <button
                type="button"
                className="group relative inline-flex items-center gap-2 bg-[#D4A574] text-[#2D1B10] px-6 py-3 rounded-lg text-sm font-bold hover:bg-[#D4A574]/90 transition"
                onClick={() => {
                  trackWTPDiscovery('problem', 'jason_wtp');
                  window.open('/ai-product-manager', '_blank', 'noopener,noreferrer');
                }}
              >
                <span>Calculate Your Partner Time Liberation</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>

        <ValueDiscoverySection />

        <HowItWorks />

        {/* WHO THIS IS FOR */}
        <section className="relative z-20  py-24 bg-[#1A1A1A] text-white overflow-hidden border-t border-white/10 text-left">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(#D4A574 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          ></div>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                  Who This Is For
                </h2>
                <p className="text-subtle text-lg font-light leading-relaxed">
                  We don't work with everyone. Buildwise is designed for
                  high-performance firms ready to automate the mundane and focus
                  on the deal.
                </p>
                <div className="mt-8">
                  <a
                    href="#value-discovery"
                    onClick={() => trackWTPDiscovery('problem', 'partnership')}
                    className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4A574] text-[#2D1B10] px-6 py-3 text-sm font-bold transition-all shadow-[0_0_20px_rgba(212,165,116,0.2)]"
                  >
                    <div className="shimmer-layer absolute inset-0 transform -translateX-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer z-10 transition-transform"></div>
                    <span className="relative z-20 font-bold">Discuss Partnership</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-6">
                  {[
                    {
                      title: "Executive search firms",
                      desc: "Finance sector focus, typically 11-50 employees.",
                    },
                    {
                      title: "Partners spending 20+ hours/month",
                      desc: "On low-leverage intelligence gathering and admin work.",
                    },
                    {
                      title: "Firms using Salesforce or Custom CRMs",
                      desc: "Must have API access for agents to read/write data.",
                    },
                    {
                      title: "Teams ready for strategic AI",
                      desc: "Viewing automation as a competitive advantage, not just a cost saver.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#D4A574]/30 transition-colors duration-300"
                    >
                      <div className="shrink-0 mt-1">
                        <iconify-icon
                          icon="solar:check-circle-bold"
                          className="text-xl text-[#D4A574]"
                        ></iconify-icon>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-subtle mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TestimonialsSection hidden until real testimonials are available */}
        {false && <TestimonialsSection />}

        <FAQSection />

        {/* FOOTER */}
        <footer className="bg-white py-20 px-6 md:px-12 lg:px-20 border-t border-border text-left">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
            <div className="max-w-xs space-y-6">
              <div className="flex items-center gap-2">
                <div className="text-[#D4A574] flex items-center justify-center">
                  <Egg className="h-5 w-5" />
                </div>
                <span className="font-bold text-sm tracking-tight text-[#1A1A1A] uppercase">
                  Intelligence Agents
                  <span className="ml-2 text-[10px] text-subtle font-medium lowercase">
                    by Buildwise Studios
                  </span>
                </span>
              </div>
              <p className="text-xs text-subtle leading-relaxed">
                Building the digital workforce for the modern executive search
                firm.
              </p>
              <div className="text-[10px] text-border">
                © 2024 Buildwise Studios. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default IntelligenceAgentsLanding;
