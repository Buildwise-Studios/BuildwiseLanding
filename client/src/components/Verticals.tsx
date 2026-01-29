import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Scale, ChefHat, Calendar } from "lucide-react";

const verticals = [
  {
    icon: Users,
    title: "Executive Search Firms",
    description: "Intelligence Agents that track market movements, update CRMs, and handle admin—so your partners can focus on placements.",
    status: "released",
  },
  {
    icon: Scale,
    title: "Law Firms (Coming Q2 2025)",
    description: "Legal Agents that review contracts, monitor case law, and manage client communications—so your lawyers can focus on strategy.",
    status: "upcoming",
  },
  {
    icon: ChefHat,
    title: "Restaurants (Coming Q3 2025)",
    description: "Operations Agents that manage inventory, scheduling, and customer data—so your team can focus on hospitality.",
    status: "upcoming",
  },
];

export default function Verticals() {
  return (
    <section id="verticals" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 break-words">
            We Build AI Agents For
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Tailored AI solutions designed to automate routine tasks and amplify human expertise across key industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 w-full">
          {verticals.map((vertical, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-all duration-300 w-full ${
                vertical.status === "upcoming" ? "opacity-80" : ""
              }`}
            >
              <CardContent className="p-6 sm:p-8">
                <div className={`rounded-lg p-3 w-fit mb-6 ${
                  vertical.status === "upcoming" ? "bg-gray-200" : "bg-teal-100"
                }`}>
                  <vertical.icon className={`h-6 w-6 ${
                    vertical.status === "upcoming" ? "text-gray-500" : "text-teal-600"
                  }`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 break-words">
                  {vertical.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                  {vertical.description}
                </p>

                {vertical.status === "released" ? (
                  <a
                    href="https://calendly.com/charles-buildwise/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Demo
                    </Button>
                  </a>
                ) : (
                  <div className="text-center">
                    <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed">
                      Join Waitlist
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      Notify me when available
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}