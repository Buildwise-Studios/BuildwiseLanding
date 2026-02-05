import React, { useEffect, useState, useRef } from 'react';

const steps = [
  {
    id: "01",
    title: "Strategic Assessment & Agent Selection",
    description:
      "We start by understanding your current partner workflow - where time goes, what it's worth, and what liberated hours could mean for placement capacity. Like strategic planning before any hire.",
    threshold: 0.1,
    side: "left",
    tag: "Strategic Value Assessment"
  },
  {
    id: "02",
    title: "Agent Onboarding & Training",
    description:
      "Our agents arrive highly capable - like hiring a senior researcher who already knows the industry. We onboard them to your team culture, preferences, and workflows.",
    threshold: 0.4,
    side: "right",
    tag: "Custom Training Program"
  },
  {
    id: "03",
    title: "Team Integration & Delegation",
    description:
      "Now your agents are integrated team members. Partners delegate naturally while focusing on relationships. Success measured against the value framework from Step 1.",
    threshold: 0.7,
    side: "left",
    tag: "Seamless Team Integration"
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

      // Calculate progress based on sticky duration (200vh total height - 100vh viewport = 100vh travel distance)
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
      className="relative z-20 w-full bg-[#F8F7F5] border-y border-border/60"
      style={{ height: '200vh' }}
    >
      <div className="sticky top-0 left-0 w-full h-[100dvh] flex flex-col items-center justify-start pt-[15vh] md:pt-[20vh] pb-12">
        <div className="max-w-4xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center">
          <div className="text-center mb-6 shrink-0">
            <h2 className="font-sans text-3xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-2">
              How It Works
            </h2>
            <p className="text-subtle text-base md:text-lg max-w-xl mx-auto font-light">
              Think of our agents as experienced hires who already understand executive search.
              Like any new team member, they need onboarding to your firm's specific way of working.
            </p>
          </div>

          <div className="relative w-full max-w-2xl flex-1 flex flex-col justify-start mt-4">
            {/* Background Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/40 -translate-x-1/2"></div>

            {/* Progress Line */}
            <div
              className="absolute left-1/2 top-0 w-px bg-[#D4A574] -translate-x-1/2 transition-all duration-150 ease-out origin-top"
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
                          <span className="font-mono text-[10px] text-[#D4A574] uppercase tracking-wider block mb-1 font-bold">Step {step.id}</span>
                          <h3 className="font-sans text-base md:text-lg font-semibold text-[#1A1A1A]">{step.title}</h3>
                          <p className="hidden md:block text-xs md:text-sm text-subtle mt-1 leading-relaxed max-w-[90%]">{step.description}</p>
                        </div>
                        <div className="relative shrink-0 z-10">
                          <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full border transition-colors duration-300 ${isActive ? 'border-[#D4A574] bg-[#D4A574] shadow-[0_0_8px_rgba(212,165,116,0.5)]' : 'border-border bg-white'}`}></div>
                        </div>
                        <div className="w-[42%] pl-4 md:pl-8">
                          {step.id === '03' ? (
                            <div className="inline-flex items-center gap-2 md:gap-3 bg-[#25D366]/10 p-2 md:p-2.5 rounded-xl border border-[#25D366]/20">
                              <iconify-icon icon="fa6-brands:whatsapp" className="text-lg md:text-xl text-[#25D366]"></iconify-icon>
                              <iconify-icon icon="fa6-brands:slack" className="text-lg md:text-xl text-[#4A154B]"></iconify-icon>
                              <iconify-icon icon="fa6-brands:telegram" className="text-lg md:text-xl text-[#24A1DE]"></iconify-icon>
                            </div>
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
                          {step.id === '02' ? (
                            <div className="inline-flex items-center justify-end gap-2 md:gap-3 bg-[#D4A574]/10 p-2 md:p-2.5 rounded-xl border border-[#D4A574]/20">
                              <iconify-icon
                                icon="fa6-brands:linkedin-in"
                                className="text-lg md:text-xl text-[#0077B5]"
                              ></iconify-icon>
                              <iconify-icon
                                icon="simple-icons:salesforce"
                                className="text-lg md:text-xl text-[#00A1E0]"
                              ></iconify-icon>
                              <iconify-icon
                                icon="fa6-brands:google-drive"
                                className="text-lg md:text-xl text-[#34A853]"
                              ></iconify-icon>
                              <iconify-icon
                                icon="simple-icons:microsoftonedrive"
                                className="text-lg md:text-xl text-[#0364B8]"
                              ></iconify-icon>
                            </div>
                          ) : (
                            <div className="bg-white border border-border px-2 py-1 md:p-3 rounded shadow-sm inline-block">
                              <span className="text-[10px] md:text-xs font-medium text-[#1A1A1A]">{step.tag}</span>
                            </div>
                          )}
                        </div>
                        <div className="relative shrink-0 z-10">
                          <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full border transition-colors duration-300 ${isActive ? 'border-[#D4A574] bg-[#D4A574] shadow-[0_0_8px_rgba(212,165,116,0.5)]' : 'border-border bg-white'}`}></div>
                        </div>
                        <div className="w-[42%] pl-4 md:pl-8">
                          <span className="font-mono text-[10px] text-[#D4A574] uppercase tracking-wider block mb-1 font-bold">Step {step.id}</span>
                          <h3 className="font-sans text-base md:text-lg font-semibold text-[#1A1A1A]">{step.title}</h3>
                          <p className="hidden md:block text-xs md:text-sm text-subtle mt-1 leading-relaxed max-w-[90%]">{step.description}</p>
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
