import React, { useEffect, useState, useRef } from 'react';

const steps = [
  {
    id: "01",
    title: "Setup Call",
    description: "We map your workflow and identify ROI.",
    threshold: 0.1,
    side: "left",
    tag: "Custom Configuration"
  },
  {
    id: "02",
    title: "30-Day Integration",
    description: "We build, connect, and train your agents.",
    threshold: 0.45,
    side: "right",
    tag: "Salesforce & LinkedIn API"
  },
  {
    id: "03",
    title: "Delegation",
    description: "Partners text the agent, it executes.",
    threshold: 0.8,
    side: "left",
    tag: "WhatsApp Command Center"
  }
];

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;

      // Calculate progress based on sticky duration (140vh total height - 100vh viewport = 40vh travel)
      const totalScrollable = rect.height - viewH;
      const scrolled = -rect.top;

      let p = scrolled / totalScrollable;
      p = Math.max(0, Math.min(1, p));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative z-30 w-full bg-slate-50 border-y border-border/60"
      style={{ height: '140vh' }}
    >
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-start pt-24">
        <div className="max-w-4xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center">
          <div className="text-center mb-8 shrink-0">
            <h2 className="font-sans text-3xl md:text-5xl font-semibold text-obsidian tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-subtle text-lg max-w-md mx-auto">
              From setup to delegation in 30 days.
            </p>
          </div>

          <div className="relative w-full max-w-2xl flex-1 flex flex-col justify-start mt-8">
            {/* Background Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/40 -translate-x-1/2"></div>

            {/* Progress Line */}
            <div
              className="absolute left-1/2 top-0 w-px bg-brand -translate-x-1/2 transition-all duration-150 ease-out origin-top"
              style={{ height: `${progress * 100}%` }}
            ></div>

            <div className="space-y-16 py-8 relative">
              {steps.map((step) => {
                const isActive = progress >= step.threshold;
                // Focus window relative to thresholds
                const isFocused = progress >= step.threshold - 0.15 && progress <= step.threshold + 0.15;

                let opacityClass = 'opacity-40';
                let scale = 'scale(1)';

                if (isActive) {
                  opacityClass = 'opacity-70';
                }
                if (isFocused) {
                  opacityClass = 'opacity-100';
                  scale = 'scale(1.05)';
                }

                return (
                  <div
                    key={step.id}
                    className={`flex items-center justify-between w-full transition-all duration-500 ${opacityClass}`}
                    style={{ transform: scale }}
                  >
                    {step.side === 'left' ? (
                      <>
                        <div className="w-[42%] text-right pr-8">
                          <span className="font-mono text-[10px] text-brand uppercase tracking-wider block mb-1">Step {step.id}</span>
                          <h3 className="font-sans text-lg font-semibold text-obsidian">{step.title}</h3>
                          <p className="text-xs text-subtle mt-1">{step.description}</p>
                        </div>
                        <div className="relative shrink-0 z-10">
                          <div className={`w-4 h-4 rounded-full border transition-colors duration-300 ${isActive ? 'border-brand bg-brand' : 'border-border bg-white'}`}></div>
                        </div>
                        <div className="w-[42%] pl-8">
                          {step.id === '03' ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#25D366] text-white text-xs font-semibold shadow-lg">
                              <iconify-icon icon="solar:chat-round-linear"></iconify-icon>
                              <span>{step.tag}</span>
                            </span>
                          ) : (
                            <div className="bg-white border border-border p-3 rounded shadow-sm inline-block">
                              <span className="text-xs font-medium text-obsidian">{step.tag}</span>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-[42%] text-right pr-8">
                          <div className="bg-white border border-border p-3 rounded shadow-sm inline-block">
                            <span className="text-xs font-medium text-obsidian">{step.tag}</span>
                          </div>
                        </div>
                        <div className="relative shrink-0 z-10">
                          <div className={`w-4 h-4 rounded-full border transition-colors duration-300 ${isActive ? 'border-brand bg-brand' : 'border-border bg-white'}`}></div>
                        </div>
                        <div className="w-[42%] pl-8">
                          <span className="font-mono text-[10px] text-brand uppercase tracking-wider block mb-1">Step {step.id}</span>
                          <h3 className="font-sans text-lg font-semibold text-obsidian">{step.title}</h3>
                          <p className="text-xs text-subtle mt-1">{step.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
