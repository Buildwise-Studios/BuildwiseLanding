import { Search, Lightbulb, Code, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import jasonImage from "@assets/jason.png";

// images
import mvp from "@/assets/mvp.png";
import rapidDev from "@/assets/rapid-dev.png";
import roadmap from "@/assets/roadmap.png";
import traffic from "@/assets/traffic.png";

const steps = [
  {
    number: 1,
    title: "Test your idea Fast",
    icon: Search,
    image: mvp,
    features: [
      {
        title: "Test Your Idea Fast",
        description:
          "The goal is to find the quickest way to confront your idea with the market.",
      },
      {
        title: "Audience First",
        description:
          "Who are your first users, and where can you find them? We answer these questions before building anything.",
      },
      {
        title: "The MVP of your MVP",
        description:
          "We identify the ONE feature that makes the difference. Your MVP should do ONE thing and do it really well.",
      },
    ],
  },
  {
    number: 2,
    title: "Roadmap",
    icon: Lightbulb,
    image: roadmap,
    features: [
      {
        title: "We agree on a launch date",
        description:
          "This drives the project timeline and keeps the focus on your MVP's core value. No endless development or unnecessary features.",
      },
      {
        title: "We define the User Journey",
        description: "This is validated before development begins.",
      },
      {
        title: "What You See Is What You Get",
        description:
          "We finalize the design so you know exactly what to expect, no surprises.",
      },
    ],
  },
  {
    number: 3,
    title: "Rapid Development",
    icon: Code,
    image: rapidDev,
    features: [
      {
        title: "Light Architecture",
        description:
          "We use automation tools and efficient frameworks to integrate APIs seamlessly.",
      },
      {
        title: "AI-Assisted Development",
        description:
          "Our tools use AI in various forms to speed up development and streamline content creation.",
      },
      {
        title: "Minimalist Frontend Approach",
        description:
          "Focus on chat interfaces and clean, simple designs for a faster build and better user experience.",
      },
    ],
  },
  {
    number: 4,
    title: "Launch & Iterate",
    icon: Rocket,
    image: traffic,
    features: [
      {
        title: "Launch as Soon as Possible",
        description:
          "The goal is to get your MVP in front of users and start collecting valuable feedback.",
      },
      {
        title: "Measure & Learn",
        description:
          "Track user behavior, collect feedback, and identify what works.",
      },
      {
        title: "Iterate Based on Real Data",
        description:
          "Use insights from actual users to guide the next development cycle.",
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
            Our Approach
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We follow a proven 4-step process to turn your idea into a
            market-ready MVP.
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
              Ready to Start Your MVP Journey?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto px-4 break-words">
              Let our AI Product Manager help you define your project scope and get started with a clear roadmap.
            </p>
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 sm:px-8 py-4 text-sm sm:text-lg font-semibold w-full sm:w-auto flex items-center justify-center"
              onClick={() => window.location.href = '/ai-product-manager'}
            >
              <img 
                src={jasonImage} 
                alt="Jason AI Agent" 
                className="mr-2 h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover flex-shrink-0" 
              />
              <span className="text-center leading-tight">Scope your project with Jason, our AI agent</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}