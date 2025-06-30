import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Palette, TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "MVP Development",
    description: "This is our core business: we put all our energy and know-how into it. Our developers have significant experience in creating comprehensive solutions ranging from startups to corporate worlds.",
  },
  {
    icon: Palette,
    title: "UI/UX Prototyping",
    description: "We create stunning user interfaces and experiences that convert. Our design process focuses on user-centered design principles to ensure maximum engagement and usability.",
  },
  {
    icon: TrendingUp,
    title: "Growth Hacking",
    description: "We implement data-driven growth strategies to help your MVP gain traction quickly. From user acquisition to retention optimization, we've got you covered.",
  },
  {
    icon: Users,
    title: "B2B Sales Optimization",
    description: "We optimize your B2B sales funnel with proven strategies and tools. From lead generation to conversion optimization, we help you scale efficiently.",
  },
  {
    icon: DollarSign,
    title: "Fundraising Support",
    description: "We help you prepare for fundraising with investor-ready documentation, pitch decks, and financial projections that tell your story compellingly.",
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
            We don't just provide expertise in creating your software product,
            but much more through our ecosystem of partners.
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
                <button className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
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
                into it. Our developers have significant experience in creating
                comprehensive solutions ranging from startups to corporate
                worlds.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Started
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Development team collaborating in modern office"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
