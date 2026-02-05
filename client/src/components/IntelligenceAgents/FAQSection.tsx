import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, Calendar } from 'lucide-react';
import { trackWTPDiscovery } from "@/lib/analytics";

const faqs = [
  {
    question: "How is this different from hiring a junior assistant?",
    answer: "A junior assistant works 9-5, takes holidays, and handles one task at a time requiring training and supervision. Our AI agents work 24/7 globally, handle multiple tasks simultaneously, and don't require ongoing training or vacation time. Plus, they're purpose-built for executive search intelligence work."
  },
  {
    question: "What if we don't use Salesforce?",
    answer: "No problem. We integrate with any CRM that has API access (custom solutions, HubSpot, Zoho, etc.)."
  },
  {
    question: "How long does setup take?",
    answer: "30 days from kickoff to full deployment. Includes integration, customization, training, and optimization."
  },
  {
    question: "Can we start with one agent and add others later?",
    answer: "Absolutely. Most firms start with Market Intelligence Agent (highest ROI), then add Office and Salesforce agents as they see results."
  },
  {
    question: "What's included in the agent onboarding process?",
    answer: "Full value discovery session, agent customization for your firm's workflow, onboarding to your preferences, and ongoing optimization. We start with understanding your partner time value, then build everything around maximizing that discovered value."
  },
  {
    question: "How do you calculate what partner time liberation is worth?",
    answer: "We start with a strategic assessment of your current workflow - where partners spend time, what those hours could generate in placements, and what redirecting them to relationships means for your firm. Every firm has different economics, so we build your specific value framework first."
  },
  {
    question: "What if we're not sure about our partner time allocation?",
    answer: "That's exactly why we start with discovery. Most firms don't track this precisely - we'll help you audit where time currently goes versus where it should go, then calculate what liberation means for your placement capacity."
  },
  {
    question: "How does pricing work after we understand the value?",
    answer: "We design investment levels around the value you discover - typically a setup investment plus monthly value that's meaningfully less than what you save. You set the value framework, we design pricing to fit it."
  },
  {
    question: "Are the agents really like hiring a senior team member?",
    answer: "Exactly. Our agents arrive with deep executive search capability - like hiring a senior researcher who already knows the industry. The 30-day onboarding is about teaching them your firm's specific preferences, workflows, and culture - not basic training."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 bg-[#F8F7F5] overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4A57410_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-sans text-3xl md:text-5xl font-semibold text-[#1A1A1A] tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-subtle text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our Intelligence Agents. Can't find the answer you're looking for? Reach out to our team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border/60 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-[#1A1A1A] tracking-tight pr-8">
                  {faq.question}
                </h3>
                <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-border/60 transition-colors duration-300 ${openIndex === index ? 'bg-[#D4A574] border-[#D4A574] text-[#2D1B10]' : 'text-subtle group-hover:text-[#1A1A1A] group-hover:border-border'}`}>
                  {openIndex === index ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-subtle font-light leading-relaxed border-t border-border/40 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 md:mt-24 rounded-3xl border border-[#D4A574]/20 bg-white p-8 md:p-12 text-center shadow-xl shadow-[#D4A574]/5">
          <h3 className="text-2xl font-semibold text-[#1A1A1A] tracking-tight">Still have questions?</h3>
          <p className="mt-4 text-subtle font-light leading-relaxed">
            Can't find the answer you're looking for? Please chat with our friendly team or schedule a personalized walkthrough.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button onClick={() => {
              trackWTPDiscovery('faq', 'partnership');
              window.open('/intel-agent-scoping-v2', '_blank', 'noopener,noreferrer');
            }} className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4A574] text-[#2D1B10] px-8 py-4 text-sm font-bold transition shadow-lg shadow-[#D4A574]/20">
              <div className="shimmer-layer absolute inset-0 transform -translateX-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer z-10 transition-transform"></div>
              <MessageCircle className="h-4 w-4 relative z-20" />
              <span className="relative z-20 font-bold">Get in touch</span>
            </button>
            <button onClick={() => {
              trackWTPDiscovery('faq', 'assessment');
              window.open('https://calendly.com/charles-buildwise/30min', '_blank', 'noopener,noreferrer');
            }} className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white text-[#1A1A1A] px-8 py-4 text-sm font-semibold hover:bg-slate-50 transition">
              <Calendar className="h-4 w-4" />
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
