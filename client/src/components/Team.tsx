import { Card, CardContent } from "@/components/ui/card";
//import { Linkedin } from "lucide-react";

import thomas from '@/assets/thomas.jpeg';
import charles from '@/assets/charles.jpeg';
import nemo from '@/assets/nemo.jpg';

const teamMembers = [
  {
    name: "Charles Fauchet",
    role: "Project Lead & Fullstack Developer",
    image: charles,
  },
  {
    name: "Nemo Yu",
    role: "Technical Architect & Fullstack Developer",
    image: nemo,
  },
  {
    name: "Thomas Bade",
    role: "Growth Strategist - Advisor",
    image: thomas,
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 break-words">
            Meet the Team
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We're a compact, agile team with diverse expertise and a shared passion for building AI agents that transform professional services.
            Here's how we help you succeed:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 w-full">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center w-full">
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-6 object-cover"
                width={300}
                height={300}
              />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words px-2">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base text-warm-amber font-semibold mb-4 break-words px-2">{member.role}</p>
              {/* <button className="text-gray-400 hover:text-warm-amber transition-colors">
                <Linkedin className="h-5 w-5" />
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}