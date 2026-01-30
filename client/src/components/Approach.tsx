import { Search, Lightbulb, Code, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

// images
import mvp from "@/assets/mvp.png";
import rapidDev from "@/assets/rapid-dev.png";
import roadmap from "@/assets/roadmap.png";
import traffic from "@/assets/traffic.png";

const steps = [
  {
    number: 1,
    title: "We Identify High-Value Workflows",
    icon: Search,
    image: mvp,
    features: [
      {
        title: "Workflow Analysis",
        description:
          "We study industries with repetitive, high-value workflows—like executive search partners spending 20 hours/week on LinkedIn tracking, or lawyers spending 15 hours/week on contract review.",
      },
      {
        title: "ROI Assessment",
        description:
          "We prioritize workflows where AI saves 20+ hours/month per user based on time savings, cost reduction, and strategic value to your organization.",
      },
      {
        title: "Integration Ready",
        description:
          "Our agents are designed to integrate seamlessly with your existing tools and systems from day one.",
      },
    ],
  },
  {
    number: 2,
    title: "We Build Vertical-Specific Agents",
    icon: Lightbulb,
    image: roadmap,
    features: [
      {
        title: "Domain Expertise",
        description:
          "No generic chatbots. Our Intelligence Agents for executive search are trained on finance sector org charts, Bloomberg alerts, and CRM workflows. Our Legal Agents (coming Q2) are trained on contract clauses, case law, and client communication patterns.",
      },
      {
        title: "Multi-Agent Orchestration",
        description: "Complex workflows are handled by coordinated teams of specialized agents working together.",
      },
      {
        title: "Human-in-the-Loop",
        description:
          "Agents escalate to human experts when needed, ensuring quality and maintaining control over critical decisions.",
      },
    ],
  },
  {
    number: 3,
    title: "You Deploy in 30 Days",
    icon: Code,
    image: rapidDev,
    features: [
      {
        title: "Rapid Implementation",
        description:
          "Setup, integration, training, optimization—done in 30 days. Your team starts delegating tasks via WhatsApp (no new tools to learn). Agents integrate with your existing CRM, email, and workflows from day one.",
      },
      {
        title: "Continuous Learning",
        description:
          "Agents improve over time by learning from interactions and feedback, becoming more efficient and accurate.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Built to grow with your business, easily adding new capabilities and handling increased workload.",
      },
    ],
  },

];

export default function Approach() {
  return (
    <section id="approach" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 break-words">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We follow a proven 3-step process to deploy AI agents that transform your business workflows.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 w-full">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center w-full ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div
                className={`mb-8 lg:mb-0 w-full ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="flex items-center mb-6">
                  <div className="bg-teal-500 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold mr-4 flex-shrink-0">
                    {step.number}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 break-words flex-1">
                    {step.title}
                  </h3>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="w-full">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base break-words">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed break-words">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`text-center w-full ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
              >
                <img
                  src={step.image}
                  alt={`${step.title} process illustration`}
                  className="rounded-xl mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none h-auto"
                  width={250}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action after Rapid Development */}
        <div className="text-center mt-16 w-full">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 w-full">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 break-words">
              Ready to Save 20+ Hours Per Month?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto px-4 break-words">
              Book a 30-minute call to see how AI agents fit your workflows—or scope your use case with Jason in 10 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 py-5 text-sm sm:text-lg font-semibold w-full sm:w-auto flex items-center justify-center gap-3"
                onClick={() => window.location.href = 'https://calendly.com/charles-buildwise/30min'}
              >
                <Rocket className="hidden min-[390px]:block h-7 w-7 sm:h-9 sm:w-9 rounded-full object-cover flex-shrink-0" />
                <span className="text-center leading-tight">Book Setup Call</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-teal-600 border-teal-600 hover:bg-teal-50 px-6 sm:px-8 py-5 text-sm sm:text-lg font-semibold w-full sm:w-auto flex items-center justify-center gap-3"
                onClick={() => window.location.href = '/ai-product-manager'}
              >
                <span className="text-center leading-tight">Talk to Jason</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
