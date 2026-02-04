import React from "react";

const ShowcaseSection: React.FC = () => (
  <section id="showcase" className="py-24 md:py-32 bg-[#F8F7F5] overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
      {/* Header */}
      <div className="text-center mb-16 md:mb-20">
        <h2 className="font-sans text-3xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-4">
          See Your Agents in Action
        </h2>
        <p className="font-sans text-xl text-subtle font-light max-w-3xl mx-auto">
          Watch how partners delegate work and get results in real-time.
          Every demo shows actual agent capabilities - no mockups, no scripts.
        </p>
      </div>

      {/* Demo Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Market Intelligence Demo */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/60">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#D4A574]/10 flex items-center justify-center">
              <iconify-icon icon="solar:chart-line-linear" className="text-[#D4A574] text-xl" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-[#1A1A1A]">Market Intelligence</h3>
          </div>

          <p className="font-sans text-subtle mb-6">
            Watch a partner discover an executive movement and get instant org chart updates
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6 font-mono text-sm">
            <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
              <span>Live Demo: Market Intelligence Agent</span>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D4A574] rounded-full" />
              <span className="text-subtle">LinkedIn monitoring in real-time</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D4A574] rounded-full" />
              <span className="text-subtle">Automatic org chart updates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D4A574] rounded-full" />
              <span className="text-subtle">Executive movement alerts</span>
            </div>
          </div>
        </div>

        {/* Office Intelligence Demo */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/60">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#D4A574]/10 flex items-center justify-center">
              <iconify-icon icon="solar:document-linear" className="text-[#D4A574] text-xl" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-[#1A1A1A]">Office Intelligence</h3>
          </div>

          <p className="font-sans text-subtle mb-6">
            See admin work disappear while partners focus on client relationships
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6 font-mono text-sm">
            <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
              <span>Live Demo: Office Intelligence Agent</span>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D4A574] rounded-full" />
              <span className="text-subtle">PowerPoint formatting automation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D4A574] rounded-full" />
              <span className="text-subtle">Excel tracker updates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D4A574] rounded-full" />
              <span className="text-subtle">Document preparation</span>
            </div>
          </div>
        </div>

        {/* Salesforce Intelligence Demo */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/60">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#D4A574]/10 flex items-center justify-center">
              <iconify-icon icon="fa6-brands:salesforce" className="text-[#D4A574] text-xl" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-[#1A1A1A]">Salesforce Intelligence</h3>
          </div>

          <p className="font-sans text-subtle mb-6">
            Watch CRM updates happen automatically after client meetings
          </p>

          <div className="bg-slate-50 rounded-xl p-6 mb-6 font-mono text-sm">
            <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
              <span>Live Demo: Salesforce Intelligence Agent</span>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D4A574] rounded-full" />
              <span className="text-subtle">Automatic meeting notes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D4A574] rounded-full" />
              <span className="text-subtle">Contact record updates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D4A574] rounded-full" />
              <span className="text-subtle">Pipeline stage automation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Value Focus CTA */}
      <div className="text-center">
        <p className="font-sans text-lg text-subtle mb-8 max-w-2xl mx-auto">
          Every demo shows real agent capabilities. Ready to see what partner time liberation looks like for your firm?
        </p>

        <a
          href="/ai-product-manager"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 bg-[#D4A574] text-[#2D1B10] px-8 py-4 rounded-xl text-sm font-bold transition shadow-lg shadow-[#D4A574]/20 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <span>Calculate Your Partner Time Value</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>

        <p className="text-xs text-subtle mt-4">
          No pricing discussion - pure value discovery
        </p>
      </div>
    </div>
  </section>
);

export default ShowcaseSection;
