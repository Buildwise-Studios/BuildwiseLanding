import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "faq1",
    question: "What are the advantages of developing an MVP with your agency?",
    answer: "Developing an MVP (Minimum Viable Product) with our agency allows you to quickly test your idea in the market with minimal initial investment. This approach helps you validate core hypotheses, gather user feedback effectively, and iterate before committing to a full product development cycle.",
  },
  {
    id: "faq2",
    question: "What is the development process you follow for an MVP?",
    answer: "Our development process follows four key phases: Discovery & Analysis (market research and requirements gathering), Design & Planning (wireframes and technical architecture), Development & Iteration (agile development with AI-powered tools), and Launch & Support (market launch with ongoing support and monitoring).",
  },
  {
    id: "faq3",
    question: "What types of technologies do you use for MVP development?",
    answer: "We use modern, scalable technologies including React, Next.js, Node.js, Python, AWS cloud infrastructure, MongoDB, Supabase, TypeScript, PydanticAI, LangGraph and other AI tools. Our tech stack is carefully selected based on your specific project requirements to ensure optimal performance and future scalability.",
  },
  {
    id: "faq4",
    question: "How do you handle user feedback after MVP launch?",
    answer: "We implement comprehensive analytics and feedback collection systems from day one. We help you analyze user behavior, gather qualitative feedback, and prioritize feature improvements. Our ongoing support includes regular performance reviews and strategic guidance for product evolution based on real user data.",
  },
  {
    id: "faq5",
    question: "Do you offer support services after MVP launch?",
    answer: "Yes, we provide comprehensive post-launch support including technical maintenance, performance monitoring, security updates, feature enhancements, and strategic consultation. We also offer growth hacking services, fundraising support, and B2B sales optimization to help scale your MVP into a successful business.",
  },
  {
    id: "faq6",
    question: "What is the average cost to develop an MVP with your agency?",
    answer: "MVP development costs vary significantly based on complexity, features, and specific requirements. We offer flexible pricing models including fixed-price packages for standard MVPs and custom quotes for complex projects. Contact us for a detailed estimate based on your specific needs and budget constraints.",
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
    <section id="faq" className="py-20 bg-teal-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-teal-100 max-w-3xl mx-auto">
            Get answers to the most common questions about our MVP development
            process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-gray-500 transition-transform h-5 w-5 flex-shrink-0 ${
                    openItems.includes(faq.id) ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openItems.includes(faq.id) && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
