import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Palette, ArrowRight, Bot, Rabbit, Calendar } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "MVP Development",
    description:
      "Our bread and butter: We build market-ready MVPs using efficient frameworks, automation tools, and the latest AI models. From startups to enterprises, we deliver products that are scalable, functional, and ready to make an impact.",
  },
  {
    icon: Palette,
    title: "UI/UX Prototyping",
    description:
      "Simple, intuitive designs that prioritize user experience. We focus on clean interfaces that convert and engage your audience.",
  },
  {
    icon: Rabbit,
    title: "Rapid Market Testing",
    description:
      "Use Google Ads, Facebook Ads, and other tools to validate your idea in real time. We help you identify your audience, refine your messaging, and test key hypotheses before scaling.",
  },
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    description:
      "Build intelligent AI agents and chatbots tailored to your business needs. Automate customer interactions, boost engagement, and streamline operations.Perfect for startups in e-commerce, SaaS, and customer service industries.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in building MVPs fast and effectively, but we also go
            beyond development to help you test, validate, and grow your
            product. Here's what we offer:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="bg-teal-100 rounded-lg p-3 w-fit mb-6">
                  <service.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href="https://calendly.com/charles-buildwise/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-teal-500 rounded-2xl p-8 lg:p-12 text-white">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-8 lg:mb-0">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                MVP Development
              </h3>
              <p className="text-teal-100 mb-6 leading-relaxed">
                This is our core business: we put all our energy and know-how
                into it. We have hands on experience building prototypes, MVPs
                and scalable products.
              </p>
              <a
                href="https://calendly.com/charles-buildwise/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Meeting
                </Button>
              </a>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Development team collaborating in modern office"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
