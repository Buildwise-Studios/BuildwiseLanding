import React, { useState } from 'react';

type PlanId = 'market' | 'office' | 'salesforce' | 'bundle';

interface Plan {
  id: PlanId;
  name: string;
  shortDesc: string;
  tagline: string;
  price: string;
  roi: string;
  features: string[];
}

const plans: Record<PlanId, Plan> = {
  market: {
    id: 'market',
    name: 'Market Intelligence',
    shortDesc: 'LinkedIn & News Monitoring',
    tagline: 'Replaces manual LinkedIn monitoring & news tracking.',
    price: 'HKD 12k',
    roi: 'Saves ~15-20 hrs/partner/mo',
    features: [
      'Monitors LinkedIn job changes',
      'Tracks Bloomberg terminal alerts',
      'Flags placement opportunities',
      'Daily WhatsApp briefings',
      'Auto-updates org charts'
    ]
  },
  office: {
    id: 'office',
    name: 'Office Intelligence',
    shortDesc: 'Admin & Formatting Agent',
    tagline: 'Your 24/7 executive assistant.',
    price: 'HKD 10k',
    roi: 'Saves ~10-15 hrs/partner/mo',
    features: [
      'WhatsApp voice commands',
      'Formats PowerPoints & Excel',
      'Email & calendar coordination',
      'Document retrieval',
      'Works 24/7 globally'
    ]
  },
  salesforce: {
    id: 'salesforce',
    name: 'Salesforce Intelligence',
    shortDesc: 'CRM Automation Agent',
    tagline: 'No more "I\'ll update it later".',
    price: 'HKD 8k',
    roi: 'Saves ~8-12 hrs/partner/mo',
    features: [
      'Updates CRM via WhatsApp',
      'Syncs market intelligence',
      'Logs meeting outcomes',
      'Pulls pipeline reports',
      'Real-time data hygiene'
    ]
  },
  bundle: {
    id: 'bundle',
    name: 'Complete Suite',
    shortDesc: 'All 3 Agents Integrated',
    tagline: 'Full cross-agent data intelligence.',
    price: 'HKD 25k',
    roi: 'Saves ~40 hrs/mo + Revenue Growth',
    features: [
      'All Market, Office, & CRM Agents',
      'Cross-agent intelligence syncing',
      'Unified ROI Analysis Dashboard',
      'Priority 24/7 Support',
      'Save HKD 60k/yr vs Individual'
    ]
  }
};

const PricingSection: React.FC = () => {
  const [mode, setMode] = useState<'individual' | 'bundle'>('individual');
  const [selectedId, setSelectedId] = useState<PlanId>('market');

  const keysToShow: PlanId[] = mode === 'individual' ? ['market', 'office', 'salesforce'] : ['bundle'];

  const currentPlan = plans[mode === 'bundle' ? 'bundle' : (selectedId === 'bundle' ? 'market' : selectedId)];

  return (
    <section className="sm:px-6 lg:px-8 animate-fadeSlideIn z-10 max-w-7xl mx-auto pt-20 px-4 pb-16 relative" id="pricing">
      <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-obsidian backdrop-blur">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-brand/5 blur-3xl"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* LEFT: Copy + Plan list */}
          <div className="p-6 sm:p-10 flex flex-col">
            <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mt-4">
              Choose your
              <span className="block text-brand">intelligence team</span>
            </h2>

            <p className="mt-4 text-base md:text-lg text-zinc-300/90 max-w-2xl">
              Start with specialized agents or deploy the full workforce. Scale your capacity instantly.
            </p>

            {/* Segmented control */}
            <div className="mt-6">
              <div className="inline-flex items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.05] p-1 ring-1 ring-white/10">
                <button
                  onClick={() => { setMode('individual'); if (selectedId === 'bundle') setSelectedId('market'); }}
                  className={`px-3 py-1.5 text-[11px] rounded-lg uppercase tracking-tight transition ${mode === 'individual' ? 'text-white ring-1 ring-white/20 bg-white/[0.08]' : 'text-zinc-300 hover:text-white'}`}
                >
                  INDIVIDUAL
                </button>
                <button
                  onClick={() => { setMode('bundle'); setSelectedId('bundle'); }}
                  className={`px-3 py-1.5 text-[11px] rounded-lg uppercase tracking-tight transition flex items-center gap-1.5 ${mode === 'bundle' ? 'text-white ring-1 ring-white/20 bg-white/[0.08]' : 'text-zinc-300 hover:text-white'}`}
                >
                  BUNDLE <span className="text-[9px] bg-brand text-obsidian px-1 rounded font-bold">SAVE 20%</span>
                </button>
              </div>
            </div>

            {/* Plan list */}
            <div className="mt-10 space-y-3">
              {keysToShow.map((key) => {
                const plan = plans[key];
                const isActive = (mode === 'bundle' && key === 'bundle') || (mode === 'individual' && selectedId === key);
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedId(key)}
                    className={`group transition flex text-left w-full rounded-2xl p-5 items-center justify-between ${isActive ? 'bg-white/[0.08] ring-1 ring-white/20' : 'bg-gradient-to-br from-white/5 to-white/0 hover:bg-white/[0.05]'}`}
                  >
                    <div>
                      <p className="text-white text-lg tracking-tight font-semibold">{plan.name}</p>
                      <p className="text-[12px] tracking-tight text-zinc-300 mt-1 uppercase">{plan.shortDesc}</p>
                    </div>
                    <span className={`inline-flex items-center justify-center h-9 w-9 rounded-full transition ${isActive ? 'bg-brand text-obsidian' : 'bg-white/5 ring-1 ring-white/10 text-zinc-300 group-hover:bg-white/10'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Plan detail */}
          <div className="flex flex-col p-6 sm:p-8 bg-gradient-to-br from-white/0 via-white/5 to-white/0 rounded-2xl m-6 sm:m-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] gap-6">
            <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ background: 'radial-gradient(900px 360px at 20% -10%, rgba(100,181,181,0.12) 15%, transparent 60%)' }}></div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-2xl text-white font-semibold tracking-tight text-center sm:text-left">
                {currentPlan.name}
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
              <div className="flex items-end gap-2 justify-center sm:justify-start">
                <span className="text-4xl lg:text-5xl text-white tracking-tight font-medium">{currentPlan.price}</span>
                <span className="text-zinc-300 mb-1.5 text-sm">/month</span>
              </div>
            </div>

            <div className="text-xs text-brand/80 font-mono mt-[-10px] text-center sm:text-left">
              + HKD 50k Setup Fee
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <p className="text-[12px] tracking-tight text-zinc-200 uppercase text-center sm:text-left font-medium">
                {currentPlan.tagline}
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-6 border border-white/5">
              <ul className="space-y-3 text-sm text-zinc-100">
                {currentPlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <iconify-icon icon="solar:check-circle-linear" className="text-lg text-brand mt-0.5"></iconify-icon>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-white/10 text-[12px] text-zinc-300/90 text-center sm:text-left flex items-center justify-between">
                <span>{currentPlan.roi}</span>
                <a href="#" className="underline decoration-white/30 hover:decoration-brand hover:text-brand transition-colors">Setup Details</a>
              </div>

              <div className="mt-6">
                <a href="#join" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand text-obsidian hover:bg-white h-11 px-5 text-sm font-semibold transition shadow-[0_8px_24px_-8px_rgba(100,181,181,0.25)]">
                  Book Setup Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
