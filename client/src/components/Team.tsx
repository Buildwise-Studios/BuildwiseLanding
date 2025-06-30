import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "James Wilson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "Michael Chen",
    role: "CTO & Technical Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
  {
    name: "David Rodriguez",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Buildwise team brings together three high-level professionals
            whose complementary skills ensure the success of each project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-teal-600 font-semibold mb-4">{member.role}</p>
              <button className="text-gray-400 hover:text-teal-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        <Card>
          <CardContent className="p-8 lg:p-12">
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              <strong>Michael Chen</strong>, CTO and Founder, technical architect
              and seasoned expert in numerous languages, multithreading, and
              database infrastructures, he pilots complex integrations for
              Fortune 500 companies including Netflix, Airbnb, and Stripe.
              <br />
              <br />
              <strong>James Wilson</strong>, expert in venture capital and
              financial structuring, has worked for Goldman Sachs, Coinbase, and
              currently manages Relentless Venture Partners.
              <br />
              <br />
              <strong>David Rodriguez</strong>, commercial leader at SaaS
              companies with exceptional performance in Salesforce, Microsoft,
              and SAP, optimizes every phase of the go-to-market journey.
              Together, they drive value chain optimization, financing,
              technical design, and commercial strategy. Thanks to this unique
              synergy, Buildwise advises, develops, and brings to market your
              MVP in less than 90 days. In short, we guarantee a successful
              launch and rapid validation of your first users.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
