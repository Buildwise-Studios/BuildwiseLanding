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
    threshold: 0.5,
    side: "right",
    tag: "Salesforce & LinkedIn API"
  },
  {
    id: "03",
    title: "Delegation",
    description: "Partners text the agent, it executes.",
    threshold: 0.9,
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

      // Calculate progress based on sticky duration (120vh total height - 100vh viewport = 20vh travel distance)
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
      className="relative z-30 w-full bg-[#F8F7F5] border-y border-border/60"
      style={{ height: '120vh' }}
    >
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-start pt-16 md:pt-24">
        <div className="max-w-4xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center">
          <div className="text-center mb-6 shrink-0">
            <h2 className="font-sans text-3xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-2">
              How It Works
            </h2>
            <p className="text-subtle text-base md:text-lg max-w-md mx-auto">
              From setup to delegation in 30 days.
            </p>
          </div>

          <div className="relative w-full max-w-2xl flex-1 flex flex-col justify-start mt-4">
            {/* Background Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/40 -translate-x-1/2"></div>

            {/* Progress Line */}
            <div
              className="absolute left-1/2 top-0 w-px bg-brand -translate-x-1/2 transition-all duration-150 ease-out origin-top"
              style={{ height: `${progress * 100}%` }}
            ></div>

            <div className="space-y-12 md:space-y-16 py-4 md:py-8 relative">
              {steps.map((step) => {
                const isActive = progress >= step.threshold;
                // Focused window relative to timestamps
                const isFocused = progress >= step.threshold - 0.1 && progress <= step.threshold + 0.1;

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
                        <div className="w-[42%] text-right pr-4 md:pr-8">
                          <span className="font-mono text-[10px] text-brand uppercase tracking-wider block mb-1 font-bold">Step {step.id}</span>
                          <h3 className="font-sans text-base md:text-lg font-semibold text-[#1A1A1A]">{step.title}</h3>
                          <p className="hidden md:block text-xs text-subtle mt-1">{step.description}</p>
                        </div>
                        <div className="relative shrink-0 z-10">
                          <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full border transition-colors duration-300 ${isActive ? 'border-brand bg-brand shadow-[0_0_8px_rgba(100,181,181,0.5)]' : 'border-border bg-white'}`}></div>
                        </div>
                        <div className="w-[42%] pl-4 md:pl-8">
                          {step.id === '03' ? (
                            <span className="inline-flex items-center gap-1.5 px-2 py-1 md:px-3 md:py-1.5 rounded bg-[#25D366] text-white text-[10px] md:text-xs font-semibold shadow-lg">
                              <iconify-icon icon="solar:chat-round-linear"></iconify-icon>
                              <span>{step.tag}</span>
                            </span>
                          ) : (
                            <div className="bg-white border border-border px-2 py-1 md:p-3 rounded shadow-sm inline-block">
                              <span className="text-[10px] md:text-xs font-medium text-[#1A1A1A]">{step.tag}</span>
                            </div>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-[42%] text-right pr-4 md:pr-8">
                          <div className="bg-white border border-border px-2 py-1 md:p-3 rounded shadow-sm inline-block">
                            <span className="text-[10px] md:text-xs font-medium text-[#1A1A1A]">{step.tag}</span>
                          </div>
                        </div>
                        <div className="relative shrink-0 z-10">
                          <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full border transition-colors duration-300 ${isActive ? 'border-brand bg-brand shadow-[0_0_8px_rgba(100,181,181,0.5)]' : 'border-border bg-white'}`}></div>
                        </div>
                        <div className="w-[42%] pl-4 md:pl-8">
                          <span className="font-mono text-[10px] text-brand uppercase tracking-wider block mb-1 font-bold">Step {step.id}</span>
                          <h3 className="font-sans text-base md:text-lg font-semibold text-[#1A1A1A]">{step.title}</h3>
                          <p className="hidden md:block text-xs text-subtle mt-1">{step.description}</p>
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
