import { Search, Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Discovery & Analysis",
    icon: Search,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    features: [
      {
        title: "Market Research",
        description: "We conduct thorough market analysis to understand your competitive landscape and target audience.",
      },
      {
        title: "Requirements Gathering",
        description: "We analyze and document user requirements, identifying opportunities and essential features.",
      },
      {
        title: "Feature Prioritization",
        description: "We select essential functionalities for your MVP implementation while planning future development.",
      },
    ],
  },
  {
    number: 2,
    title: "Design & Planning",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    features: [
      {
        title: "Wireframes & Mockups",
        description: "We create detailed wireframes and interactive mockups to visualize your product's architecture.",
      },
      {
        title: "Technical Architecture",
        description: "We define technologies and architectures adapted to your specific project needs and constraints.",
      },
      {
        title: "Project Timeline",
        description: "We establish development calendar and milestones to guarantee structured delivery and flexibility.",
      },
    ],
  },
  {
    number: 3,
    title: "Development & Iteration",
    icon: Code,
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    features: [
      {
        title: "Agile Development",
        description: "We use agile methodologies with quick iterations to quickly adapt your MVP to feedback.",
      },
      {
        title: "AI-Powered Development",
        description: "We leverage AI tools to accelerate development and maintain code quality and efficiency.",
      },
      {
        title: "Continuous Integration",
        description: "We implement CI/CD pipelines for seamless deployment and quality assurance throughout development.",
      },
    ],
  },
  {
    number: 4,
    title: "Launch & Support",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
    features: [
      {
        title: "Market Launch",
        description: "We support you through the complete launch process to ensure successful market entry.",
      },
      {
        title: "Performance Monitoring",
        description: "We set up analytics and monitoring tools to track user behavior and application performance.",
      },
      {
        title: "Ongoing Support",
        description: "We provide technical support and maintenance to ensure long-term success of your product.",
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
            We don't just provide expertise in creating your software product,
            but much more through our ecosystem of partners.
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
                  className="rounded-xl shadow-lg mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
