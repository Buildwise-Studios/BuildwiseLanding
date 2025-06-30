import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinanceTracker",
    description: "A comprehensive financial management platform that helps small businesses track expenses, manage invoices, and generate detailed financial reports.",
    category: "Financial Technology",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
  },
  {
    title: "EcoMarket",
    description: "A sustainable marketplace connecting eco-conscious consumers with local sustainable product suppliers through an intuitive mobile experience.",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
  },
  {
    title: "HealthConnect",
    description: "A telemedicine platform that connects patients with healthcare providers, featuring appointment scheduling, video consultations, and health records management.",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover some of our successful MVP implementations across various
            industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={project.image}
                alt={`${project.title} interface`}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{project.category}</span>
                  <button className="text-teal-600 hover:text-teal-700 font-semibold">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
