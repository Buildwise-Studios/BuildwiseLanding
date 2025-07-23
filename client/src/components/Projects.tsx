import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";
// images
import leaguePass from '@/assets/leaguepass.png';
import voxai from '@/assets/voxaisq.png';
import botwise from '@/assets/botwise.jpeg';

const projects = [
  {
    title: "VoxAI",
    description: "A text-to-3D asset tool for indie game developers and studios.",
    what: "Leverages the latest open-source diffusion models to generate 3D models and images. Business Model: SaaS with a credit-based system.",
    objective: "Help non-3D-skilled developers prototype faster and create assets effortlessly.",
    highlight: "Incubated at Hong Kong Science Park.",
    category: "AI Startup",
    image: voxai,
  },
  {
    title: "Botwise",
    description: "A WhatsApp AI Assistant for booking cars from start to finish.",
    what: "Combines automations and AI agents to handle car bookings 24/7.",
    objective: "Reduce costs, improve efficiency, and eliminate the need for constant human intervention.",
    highlight: "Operational, scalable, and cost-effective.",
    category: "AI Chatbot",
    image: botwise,
  },
  {
    title: "LeaguePass",
    description: "An automated esports tournament solution for mobile games.",
    what: "Simplifies tournament management for popular mobile titles by automating the entire process.",
    objective: "Streamline tournament creation and operation.",
    highlight: "Incubated at Cyberport Hong Kong.",
    category: "Esports Startup",
    image: leaguePass,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 break-words">
            Our Recent Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Discover some of our successful MVP implementations across various
            industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow w-full">
              <img
                src={project.image}
                alt={`${project.title} interface`}
                className="w-full p-4 sm:p-5 h-40 sm:h-48 object-cover"
              />
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-col items-start justify-center text-xs sm:text-sm space-y-3">
                <div className="w-full">
                  <p className='font-semibold break-words'>What it does:</p>
                  <p className="text-gray-600 mb-2 leading-relaxed">{project.what}</p>
                </div>
                <div className="w-full">
                  <p className='font-semibold break-words'>Objective:</p>
                  <p className="text-gray-600 mb-2 leading-relaxed">{project.objective}</p>
                </div>
                <div className="w-full">
                  <p className='font-semibold break-words'>Highlight:</p>
                  <p className="text-gray-600 mb-2 leading-relaxed">{project.highlight}</p>
                </div>
                  <span className="text-xs sm:text-sm text-gray-500 break-words">{project.category}</span>
                  {/* <button className="text-teal-600 hover:text-teal-700 font-semibold">
                    <ExternalLink className="h-4 w-4" />
                  </button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 w-full">
        <a href="https://calendly.com/charles-buildwise/30min" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600 w-full sm:w-auto">
            <Calendar className="mr-2 h-5 w-5 flex-shrink-0" />
            <span className="truncate">Schedule a Meeting</span>
          </Button>
        </a>
        </div>
      </div>
    </section>
  );
}
