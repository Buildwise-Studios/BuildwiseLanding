import React from "react";

const ShowcaseSection: React.FC = () => {
  const demoData = [
    {
      id: "market",
      name: "Market Intelligence",
      icon: "solar:radar-2-linear",
      hook: "Watch a partner discover an executive movement and get instant org chart updates",
      steps: [
        {
          type: "pain",
          label: "Current Problem",
          content: "Partner spends 15 hours monthly tracking news and LinkedIn for executive moves - missing opportunities while focused on research"
        },
        {
          type: "value",
          label: "Value Liberated",
          content: "3 hours weekly redirected to high-talent interviews and deal-making. Never miss an executive movement again.",
          success: true
        }
      ]
    },
    {
      id: "office",
      name: "Office Assistant",
      icon: "solar:document-linear",
      hook: "See admin work disappear while partners focus on client relationships",
      steps: [
        {
          type: "pain",
          label: "Current Problem",
          content: "Partner spends 10 hours monthly formatting presentations and entering candidate data - evenings lost to admin work"
        },
        {
          type: "value",
          label: "Value Liberated",
          content: "Evenings reclaimed for strategic planning and rest. Professional presentations ready in under a minute.",
          success: true
        }
      ]
    },
    {
      id: "crm",
      name: "CRM Intelligence",
      icon: "fa6-brands:salesforce",
      hook: "Watch CRM updates happen automatically after client meetings",
      steps: [
        {
          type: "pain",
          label: "Current Problem",
          content: "CRM records incomplete; partner spends 8 hours monthly logging notes from memory - missing follow-up opportunities"
        },
        {
          type: "value",
          label: "Value Liberated",
          content: "100% data fidelity, identifying 2-3 extra placement opportunities per year. Never lose track of client relationships.",
          success: true
        }
      ]
    }
  ];

  return (
    <section id="showcase" className="relative z-30 py-24 md:py-32 bg-[#F8F7F5] overflow-hidden border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-sans text-3xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight mb-4 uppercase">
            See Your Pain Points Disappear
          </h2>
          <p className="font-sans text-xl text-subtle font-light max-w-3xl mx-auto leading-relaxed">
            Watch the exact work that's stealing partner time get delegated and completed in real-time.
            Every demo proves the value framework we discover together.
          </p>
        </div>

        {/* Master Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {demoData.map(demo => (
            <div key={demo.id} className="bg-white rounded-3xl shadow-xl shadow-[#D4A574]/5 border border-border/40 overflow-hidden flex flex-col">
              {/* Header */}
              <div className="p-6 md:p-8 pb-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#D4A574]/10 flex items-center justify-center border border-[#D4A574]/20 text-[#D4A574]">
                    <iconify-icon icon={demo.icon} className="text-xl" />
                  </div>
                  <h3 className="font-sans text-xl font-bold text-[#1A1A1A] uppercase tracking-tight">{demo.name}</h3>
                </div>

                {/* Hook */}
                <p className="font-sans text-sm text-subtle min-h-[3rem] mb-6">
                  {demo.hook}
                </p>

                {/* Video Placeholder */}
                <div className="bg-slate-50 rounded-xl p-3 font-mono text-sm border border-slate-100 mb-8">
                  <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 relative group/video cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-[#1A1A1A]/5 group-hover/video:bg-[#1A1A1A]/0 transition-colors duration-300"></div>
                    <iconify-icon icon="solar:play-circle-bold" className="text-4xl text-white drop-shadow-lg opacity-80 group-hover/video:scale-110 group-hover/video:opacity-100 transition-all duration-300 z-10" />
                    <span className="absolute bottom-2 left-2 text-[9px] uppercase font-bold tracking-widest text-slate-500 bg-white/80 px-2 py-0.5 rounded">Live Agent Demo</span>
                  </div>
                </div>

                {/* Steps Container */}
                <div className="space-y-8 relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-100 hidden md:block"></div>

                  {/* Pain Point */}
                  <DemoStep {...demo.steps[0]} />

                  {/* Value Libereated */}
                  <DemoStep {...demo.steps[1]} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Focus CTA */}
        <div className="text-center pt-16">
          <p className="font-sans text-lg text-subtle mb-10 max-w-2xl mx-auto">
            Every result proves the machine efficiency we discovered together. <br className="hidden md:block" /> Ready to calculate what time liberation means for your firm?
          </p>

          <a
            href="/intel-agent-scoping-v2"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#D4A574] text-[#2D1B10] px-10 py-4 rounded-xl text-sm font-bold transition shadow-lg shadow-[#D4A574]/20 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <div className="shimmer-layer absolute inset-0 transform -translateX-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer z-10 transition-transform"></div>
            <span className="relative z-20">Reclaim Admin Hours</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 relative z-20">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>

          <p className="text-[10px] text-subtle font-mono uppercase tracking-widest mt-6 opacity-60">
            Global Executive Search • Value Discovery Framework
          </p>
        </div>
      </div>
    </section>
  );
};

/* Helper Component for the Results Flow */
const DemoStep = ({ type, label, content, highlight = false, success = false }: { type: string, label: string, content: string, highlight?: boolean, success?: boolean }) => {
  const getIcon = () => {
    if (type === 'pain') return 'solar:close-circle-bold';
    if (type === 'delegate') return 'solar:chat-line-linear';
    if (type === 'agent') return 'solar:bolt-bold';
    if (type === 'value') return 'solar:check-circle-bold';
    return '';
  };

  const getColors = () => {
    if (highlight) return 'text-[#D4A574] border-[#D4A574]';
    if (success) return 'text-[#25D366] border-[#25D366]/20 bg-[#25D366]/5';
    if (type === 'pain') return 'text-[#EF4444]/60 border-[#EF4444]/20';
    return 'text-slate-400';
  };

  return (
    <div className="relative z-10 flex gap-4 text-left h-full">
      <div className={`shrink-0 w-8 h-8 rounded-full border bg-white flex items-center justify-center z-20 ${getColors()}`}>
        <iconify-icon icon={getIcon()} className={type === 'agent' ? 'text-lg' : 'text-base'} />
      </div>
      <div className="flex flex-col">
        <span className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${highlight ? 'text-[#D4A574]' : success ? 'text-[#25D366]' : 'text-slate-400'}`}>
          {label}
        </span>
        <p className={`text-sm leading-relaxed ${highlight || success ? 'font-semibold text-[#1A1A1A]' : 'text-subtle font-light italic'}`}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default ShowcaseSection;
