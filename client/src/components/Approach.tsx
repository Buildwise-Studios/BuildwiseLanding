import { Search, Lightbulb, Code, Rocket } from "lucide-react";

// images
import mvp from '@/assets/mvp.png';
import rapidDev from '@/assets/rapid-dev.png';
import roadmap from '@/assets/roadmap.png';
import traffic from '@/assets/mvp.png';

const original_urls = ["https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400", "https://images.unsplash.com/photo-1590103514966-5e2a11c13e21?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400", 

  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400", "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
 ]
const steps = [
  {
    number: 1,
    title: "How Do We Test Your Product Idea Fast?",
    icon: Search,
    image: mvp,
    features: [
      {
        title: "Stop Overthinking. Test Your Idea Fast",
        description: "The goal is to find the quickest way to confront your idea with the market.",
      },
      {
        title: "Audience First",
        description: "Who are your first users, and where can you find them? We answer these questions before building anything.",
      },
      {
        title: "The MVP of your MVP",
        description: "We identify the ONE feature that makes the difference. Your MVP should do ONE thing and do it really well.",
      },

    ],
  },
  {
    number: 2,
    title: "When Do We Launch It?",
    icon: Lightbulb,
    image: roadmap,
    features: [
      {
        title: "Commit to Launch",
        description: "We set a launch date. This drives the project timeline and keeps the focus on your MVP’s core value. No endless development or unnecessary features.",
      },
      {
        title: "User Journey",
        description: "We validate the user journey before development begins.",
      },
      {
        title: "What You See Is What You Get",
        description: "We finalize the design so you know exactly what to expect, no surprises.",
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
        description: "We use automation tools and efficient frameworks to integrate APIs seamlessly.",
      },
      {
        title: "AI-Powered Development",
        description: "Our AI tools speed up development and streamline content creation.",
      },
      {
        title: "Minimalist Frontend Approach",
        description: "Focus on chat interfaces and clean, simple designs for a faster build and better user experience.",
      },
    ],
  },
  {
    number: 4,
    title: "The Launch",
    icon: Rocket,
    image: traffic,
    features: [
      {
        title: "Market Launch",
        description: "We guide you through the entire launch process to ensure success.",
      },
      {
        title: "Learn from Your Users",
        description: "We set up analytics and gather user feedback to learn and iterate quickly.",
      },
      {
        title: "Beyond MVP",
        description: "We’ll support you beyond the MVP, helping you scale and evolve your product.",
      },
    ],
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We’ve streamlined the MVP development process to help you bring your ideas to life quickly and cost-effectively. 
          Here’s how we do it:
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={`mb-8 lg:mb-0 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center mb-6">
                  <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`text-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <img
                  src={step.image}
                  alt={`${step.title} process illustration`}
                  className="rounded-xl mx-auto"
                  width={250}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
