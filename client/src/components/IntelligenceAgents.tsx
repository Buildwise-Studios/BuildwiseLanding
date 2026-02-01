import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const agents = [
  {
    title: "CRM Intelligence Agent",
    videoUrl: "#", // Placeholder - will be replaced with actual video URL
    description: "Watches partner update a candidate via WhatsApp, automatically logs the interaction in Salesforce with proper formatting, tags, and next steps—no manual CRM entry required.",
    metric: "Saves 8 hours/week per partner",
    cta: "See Full Demo",
  },
  {
    title: "Scheduling Intelligence Agent",
    videoUrl: "#", // Placeholder - will be replaced with actual video URL
    description: "Handles interview scheduling via WhatsApp—checks calendars, proposes times, sends confirmations, and syncs with Google Calendar. No back-and-forth emails, no double-bookings.",
    metric: "Saves 5 hours/week per coordinator",
    cta: "See Full Demo",
  },
  {
    title: "Jason AI Scoping Agent",
    videoUrl: "#", // Placeholder - will be replaced with actual video URL
    description: "Our meta-agent that scopes AI agent use cases for new clients. Watch Jason qualify a prospect, identify pain points, and route them to the right solution—all in under 10 minutes.",
    metric: "Qualifies leads 24/7, zero human effort",
    cta: "Talk to Jason",
  },
];

export default function IntelligenceAgents() {
  return (
    <section id="intelligence-agents" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Intelligence Agents in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our AI agents handle real workflows—no editing, no scripts, just agents working.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {agents.map((agent, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-400 text-sm">Video Placeholder</div>
                    <div className="text-gray-500 text-xs mt-2">{agent.title}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {agent.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {agent.description}
                </p>
                <div className="mb-4">
                  <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    {agent.metric}
                  </span>
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  {agent.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-8">
            These agents are live in production, handling real workflows for executive search firms in Hong Kong.
          </p>
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg">
            See How Intelligence Agents Work for Your Firm
          </Button>
        </div>
      </div>
    </section>
  );
}
