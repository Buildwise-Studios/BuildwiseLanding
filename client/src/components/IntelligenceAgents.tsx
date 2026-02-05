import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare } from "lucide-react";
import { useLocation } from "wouter";

const agents = [
  {
    title: "CRM Intelligence Agent",
    videoUrl: "#", // Placeholder - will be replaced with actual video URL
    description: "Watches partner update a candidate via WhatsApp, automatically logs the interaction in Salesforce with proper formatting, tags, and next steps—no manual CRM entry required.",
    metric: "Saves 8 hours/week per partner",
    cta: "See Full Demo",
    icon: Calendar,
  },
  {
    title: "Scheduling Intelligence Agent",
    videoUrl: "#", // Placeholder - will be replaced with actual video URL
    description: "Handles interview scheduling via WhatsApp—checks calendars, proposes times, sends confirmations, and syncs with Google Calendar. No back-and-forth emails, no double-bookings.",
    metric: "Saves 5 hours/week per coordinator",
    cta: "See Full Demo",
    icon: Calendar,
  },
  {
    title: "Jason AI Scoping Agent",
    videoUrl: "#", // Placeholder - will be replaced with actual video URL
    description: "Our meta-agent that scopes AI agent use cases for new clients. Watch Jason qualify a prospect, identify pain points, and route them to the right solution—all in under 10 minutes.",
    metric: "Qualifies leads 24/7, zero human effort",
    cta: "Talk to Jason",
    path: "/intel-agent-scoping-v2",
    icon: MessageSquare,
  },
];

export default function IntelligenceAgents() {
  const [, setLocation] = useLocation();

  return (
    <section id="intelligence-agents" className="py-20 bg-[#F8F7F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
            Intelligence Agents in Action
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            See how our AI agents handle real workflows—no editing, no scripts, just agents working.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {agents.map((agent, index) => (
            <Card key={index} className="rounded-3xl border-border/40 shadow-xl shadow-[#D4A574]/5 hover:shadow-[#D4A574]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white">
              <CardContent className="p-6">
                <div className="aspect-video bg-[#F8F7F5] rounded-2xl mb-6 flex items-center justify-center border border-[#D4A574]/10">
                  <div className="text-center">
                    <div className="text-slate-400 text-sm font-medium">Video Showcase</div>
                    <div className="text-[#D4A574] text-xs mt-2 uppercase tracking-widest font-bold font-sans">{agent.title}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 tracking-tight">
                  {agent.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed font-light text-sm">
                  {agent.description}
                </p>
                <div className="mb-6">
                  <span className="inline-block bg-[#D4A574]/10 text-[#D4A574] px-4 py-1 rounded-full text-xs font-bold tracking-tight">
                    {agent.metric}
                  </span>
                </div>
                <Button
                  className="w-full bg-[#D4A574] hover:bg-[#D4A574]/90 text-[#2D1B10] font-bold rounded-xl h-12 transition-all shadow-md shadow-[#D4A574]/10"
                  onClick={() => agent.path ? setLocation(agent.path) : window.open('https://calendly.com/charles-buildwise/30min', '_blank')}
                >
                  <agent.icon className="mr-2 h-4 w-4" />
                  {agent.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-600 mb-8 font-light">
            These agents are live in production, handling real workflows for executive search firms in Hong Kong.
          </p>
          <Button
            size="lg"
            className="bg-[#D4A574] hover:bg-[#D4A574]/90 text-[#2D1B10] font-bold px-10 py-6 rounded-xl text-lg shadow-lg shadow-[#D4A574]/20 transition-all hover:-translate-y-0.5"
            onClick={() => window.open('https://calendly.com/charles-buildwise/30min', '_blank')}
          >
            See How Intelligence Agents Work for Your Firm
          </Button>
        </div>
      </div>
    </section>
  );
}
