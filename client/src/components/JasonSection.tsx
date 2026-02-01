import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { useLocation } from "wouter";

export default function JasonSection() {
  const [, setLocation] = useLocation();

  return (
    <section id="jason" className="py-16 bg-gradient-to-r from-teal-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Not Sure Which Agents Fit Your Business?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100">
              <div className="flex justify-center mb-6">
                <div className="bg-teal-100 rounded-lg p-4">
                  <Bot className="h-8 w-8 text-teal-600" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Talk to Jason, our AI scoping agent.
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Jason will ask about your industry, identify repetitive workflows, and either:<br/>
                • Route you to our existing agents (if we've already built for your industry)<br/>
                • Send your use case to our team for custom scoping (24-hour turnaround with ROI breakdown)
              </p>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  ✓ 10-minute conversation, zero commitment<br/>
                  ✓ 24-hour turnaround with scoped proposal<br/>
                  ✓ Identifies 20+ hours/month of automation opportunities
                </p>
              </div>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-5 text-sm sm:text-base font-semibold w-full sm:w-auto inline-flex items-center justify-center gap-3"
                  onClick={() => setLocation("/ai-product-manager")}
                >
                  <span className="text-center leading-tight">
                    Start Scoping with Jason
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
