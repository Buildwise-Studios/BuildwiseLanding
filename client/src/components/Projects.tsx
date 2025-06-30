import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "VoxAI",
    description: "A text-to-3D asset tool for indie game developers and studios.",
    what: "Leverages the latest open-source diffusion models to generate 3D models and images. Business Model: SaaS with a credit-based system.",
    objective: "Help non-3D-skilled developers prototype faster and create assets effortlessly.",
    highlight: "Incubated at Hong Kong Science Park.",
    category: "AI Startup",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
  },
  {
    title: "Botwise",
    description: "A WhatsApp AI Assistant for booking cars from start to finish.",
    what: "Combines automations and AI agents to handle car bookings 24/7.",
    objective: "Reduce costs, improve efficiency, and eliminate the need for constant human intervention.",
    highlight: "Operational, scalable, and cost-effective.",
    category: "AI Chatbot",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
  },
  {
    title: "LeaguePass",
    description: "An automated esports tournament solution for mobile games.",
    what: "Simplifies tournament management for popular mobile titles by automating the entire process.",
    objective: "Streamline tournament creation and operation.",
    highlight: "Incubated at Cyberport Hong Kong.",
    category: "Esports Startup",
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
                <div className="flex flex-col items-start justify-center text-sm">
                <div>
                  <p className='flex font-semibold'>What it does:</p>
                  <p className="text-gray-600 mb-4">{project.what}</p>
                </div>
                <div>
                  <p className='flex font-semibold'>Objective:</p>
                  <p className="text-gray-600 mb-4">{project.objective}</p>
                </div>
                <div>
                  <p className='flex font-semibold'>Highlight:</p>
                  <p className="text-gray-600 mb-4">{project.highlight}</p>
                </div>
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
