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
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We’re a compact, agile team with diverse expertise and a shared passion for building innovative, AI-powered MVPs. 
            Here’s how we help you succeed:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                width={300}
                height={300}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-teal-600 font-semibold mb-4">{member.role}</p>
              {/* <button className="text-gray-400 hover:text-teal-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
