import React from 'react';

const ValueDiscoverySection: React.FC = () => {
  return (
    <section id="value-discovery" className="sm:px-6 lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll z-10 max-w-7xl mx-auto pt-20 pr-4 pb-16 pl-4 relative">
      <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-[#1A1A1A] backdrop-blur">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D4A574]/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#D4A574]/5 blur-3xl"></div>

        <div className="text-center py-16 px-6">
          <h2 className="sm:text-5xl md:text-5xl text-4xl font-semibold text-white tracking-tight mt-4">
            Discover Your Partner Time
            <span className="block text-[#D4A574]">Liberation Value</span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-zinc-300/90 max-w-2xl mx-auto">
            Every executive search firm is different. Let's explore your specific challenges and calculate what redirecting partner time could mean for your placement capacity.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ai-product-manager"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#D4A574] text-[#2D1B10] text-sm font-bold px-8 py-3.5 rounded shadow-lg shadow-[#D4A574]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl flex items-center gap-2"
            >
              <span>Discuss Partnership Strategy</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>

            <a
              href="https://calendly.com/charles-buildwise/value-assessment-scoping"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/10 text-white text-sm font-bold px-8 py-3.5 rounded ring-1 ring-white/20 transition-all hover:bg-white/20 flex items-center gap-2"
            >
              <span>Schedule Value Assessment</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div className="mt-8">
            <p className="text-xs text-zinc-400 font-medium">
              <span className="inline-flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"></path>
                  <path d="M2 17L12 22L22 17"></path>
                  <path d="M2 12L12 17L22 12"></path>
                </svg>
                No pricing discussion - pure value discovery
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueDiscoverySection;
