import React from 'react';

const integrations = [
  { name: 'LinkedIn', icon: 'fa6-brands:linkedin-in', color: '#0077B5' },
  { name: 'Salesforce', icon: 'fa6-brands:salesforce', color: '#00A1E0' },
  { name: 'WhatsApp', icon: 'fa6-brands:whatsapp', color: '#25D366' },
  { name: 'Slack', icon: 'fa6-brands:slack', color: '#4A154B' },
  { name: 'Bloomberg', icon: 'solar:graph-up-linear', color: '#1A1A1A' }, // Retained Solar icon
  { name: 'Outlook', icon: 'fa6-brands:microsoft', color: '#0078D4' },
];

const IntegrationsLogos: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 bg-transparent overflow-hidden">
      {/*
          "Cloud-Point Mask": This creates a smooth "fog" transition.
          The background 3D stardust will fade out as it enters this section
          and fade back in as it exits, keeping the UI clean and legible.
      */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F7F5]/0 via-[#F8F7F5]/60 to-[#F8F7F5]/0"></div>
        <div className="absolute inset-0 backdrop-blur-[4px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center gap-8 md:gap-10">
          <p className="text-[10px] font-bold text-[#1A1A1A]/40 tracking-[0.4em] uppercase text-center">
            Agents Operating Within Your Ecosystem
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {integrations.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/70 border border-white/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:bg-white hover:scale-105 hover:shadow-2xl hover:border-[#D4A574]/40"
              >
                <div
                  className="text-2xl md:text-3xl text-slate-400 transition-all duration-300 group-hover:text-[var(--hover-color)] group-hover:drop-shadow-[0_0_8px_var(--hover-color)]"
                  style={{ '--hover-color': item.color } as React.CSSProperties}
                >
                  <iconify-icon icon={item.icon}></iconify-icon>
                </div>
                <span className="text-sm md:text-base font-semibold text-slate-600 transition-colors duration-300 group-hover:text-[#1A1A1A]">
                  {item.name}
                </span>

                {/* Subtle internal glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-[#D4A574]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle borders to define the section transition */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/20 to-transparent"></div>
    </section>
  );
};

export default IntegrationsLogos;
