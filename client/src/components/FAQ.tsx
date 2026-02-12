import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "faq1",
    question: "What are AI agents and how do they help professional service firms?",
    answer: "AI agents are autonomous software assistants that handle repetitive, time-consuming tasks like monitoring LinkedIn for job changes, tracking market intelligence, updating CRMs, and notifying your team of opportunities. They work 24/7, never take holidays, and can save partners 20+ hours per month while capturing opportunities that would otherwise be missed.",
  },
  {
    id: "faq2",
    question: "What is the setup process for implementing AI agents?",
    answer: "Our implementation follows three phases: 1) Setup Call where we map your workflow and identify ROI opportunities, 2) 30-Day Integration where we build, connect, and train your agents with your tools (Salesforce, LinkedIn, etc.), and 3) Optimization where we fine-tune based on your feedback. Most firms are fully operational within 30 days.",
  },
  {
    id: "faq3",
    question: "What tools and platforms do your AI agents integrate with?",
    answer: "Our agents integrate with professional services tools including Salesforce, LinkedIn Sales Navigator, HubSpot, Slack, Microsoft Teams, email systems, and various data sources like Bloomberg terminals. If your tool has an API, we can integrate with it. We also support custom CRMs and proprietary systems.",
  },
  {
    id: "faq4",
    question: "How do you ensure data security and compliance?",
    answer: "We implement enterprise-grade security including end-to-end encryption, SOC 2 Type II compliance, GDPR adherence, and regular security audits. Our agents operate within your existing security infrastructure and never store sensitive data. We also provide comprehensive audit trails and access controls for regulated industries.",
  },
  {
    id: "faq5",
    question: "What kind of ROI can we expect from AI agents?",
    answer: "Most executive search firms see ROI within 2-3 months. Our Market Intelligence Agent alone saves ~15-20 hours per partner monthly. The Office Automation Agent saves another 10-15 hours, and the Salesforce Intelligence Agent saves 8-12 hours. Combined, that's 40+ hours per partner per month - equivalent to adding a junior assistant without the HR overhead.",
  },
  {
    id: "faq6",
    question: "Can we start with one agent and add more later?",
    answer: "Absolutely. Most firms start with the Market Intelligence Agent (highest ROI at HKD 12k/month), then add Office Automation and Salesforce Intelligence agents as they see results. This modular approach lets you validate value before expanding. We also offer a bundle at HKD 25k/month that includes all three agents plus cross-agent intelligence syncing.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-warm-amber overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 break-words">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            Get answers to the most common questions about our AI agents and how
            they can transform your professional services firm.
          </p>
        </div>

        <div className="space-y-4 w-full">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left p-4 sm:p-6 flex justify-between items-start hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base break-words flex-1">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-gray-500 transition-transform h-5 w-5 flex-shrink-0 mt-0.5 ${
                    openItems.includes(faq.id) ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openItems.includes(faq.id) && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base break-words">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
