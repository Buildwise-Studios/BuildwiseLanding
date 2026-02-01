import React from 'react';

const testimonials = [
  {
    name: "James Henderson",
    role: "Managing Partner, Beacon Hill Associates",
    content: "The Buildwise agents transformed our research process. We used to spend days on org charts; now they're updated in real-time. It's like having a 24/7 research team for the cost of a lunch.",
    avatar: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg",
    rating: "5.0",
    rotation: "-rotate-[10deg]",
    zIndex: "z-10",
    glassOpacity: "bg-white/10"
  },
  {
    name: "Sarah Chen",
    role: "Director of Talent, Vertex Global",
    content: "Integration with our Salesforce was seamless. Our partners actually spend time talking to candidates now instead of logging notes. The ROI was clear within the first 30 days.",
    avatar: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e7074207-4b47-49d2-b86b-6ca1abd5d849_320w.jpg",
    rating: "5.0",
    rotation: "-rotate-[6deg]",
    zIndex: "z-20",
    glassOpacity: "bg-white/90"
  },
  {
    name: "Robert Sterling",
    role: "Senior Partner, Sterling & Co.",
    content: "In the high-stakes world of finance search, speed is everything. Buildwise agents alert us to executive movements before they even hit the news. A true competitive advantage.",
    avatar: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_320w.jpg",
    rating: "5.0",
    rotation: "rotate-0",
    zIndex: "z-30",
    glassOpacity: "bg-white/80"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#F8F7F5] overflow-hidden border-t border-border/60">
      <div className="absolute inset-0 bg-[radial-gradient(#D4A57410_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase text-[#D4A574] tracking-widest mb-3 font-semibold">
            Featured Reviews
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1A1A1A]">
            Client Highlights
          </h2>
        </div>

        <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 min-h-[500px]">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-12 lg:gap-0">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`glass w-[340px] h-[340px] shrink-0 p-6 flex items-center justify-center rounded-2xl transition-all duration-500 hover:scale-105 hover:z-50 lg:-mx-10 ${t.rotation} ${t.zIndex}`}
                style={{
                  background: 'linear-gradient(rgba(255, 255, 255, 0.1), transparent)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 25px 25px',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className={`absolute inset-4 rounded-xl shadow-2xl ring-1 ring-neutral-200 overflow-hidden flex flex-col p-6 text-left ${t.glassOpacity === 'bg-white/10' ? 'bg-white' : t.glassOpacity}`}>
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-neutral-200 mb-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      className="h-4 w-4 text-neutral-700">
                      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                    </svg>
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-900 mb-4 font-sans flex-grow italic">
                    "{t.content}"
                  </p>

                  <div className="pt-3 border-t border-neutral-200 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <img src={t.avatar} alt={t.name} className="h-8 w-8 rounded-full object-cover border border-neutral-200" />
                      <div>
                        <div className="text-[11px] font-bold text-neutral-900 leading-tight">
                          {t.name}
                        </div>
                        <div className="text-[10px] text-neutral-500 font-medium">
                          {t.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"
                        className="text-amber-400">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <span className="text-[10px] font-bold">{t.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
