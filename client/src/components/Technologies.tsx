import { 
  SiAmazonwebservices, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiDocker, 
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiKubernetes,
  SiStripe
} from "react-icons/si";
import { Brain } from "lucide-react";

const technologies = [
  { name: "AWS", icon: SiAmazonwebservices, color: "text-orange-500", bgColor: "hover:bg-orange-50" },
  { name: "React", icon: SiReact, color: "text-blue-500", bgColor: "hover:bg-blue-50" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", bgColor: "hover:bg-green-50" },
  { name: "Python", icon: SiPython, color: "text-yellow-500", bgColor: "hover:bg-yellow-50" },
  { name: "Docker", icon: SiDocker, color: "text-blue-600", bgColor: "hover:bg-blue-50" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600", bgColor: "hover:bg-green-50" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-gray-700", bgColor: "hover:bg-gray-100" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", bgColor: "hover:bg-blue-50" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-500", bgColor: "hover:bg-pink-50" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-700", bgColor: "hover:bg-blue-50" },
  { name: "AI/ML", icon: Brain, color: "text-purple-500", bgColor: "hover:bg-purple-50" },
  { name: "Stripe", icon: SiStripe, color: "text-indigo-500", bgColor: "hover:bg-indigo-50" },
];

export default function Technologies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Technologies We Use
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to build
            scalable, efficient MVPs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {technologies.map((tech, index) => (
            <div key={index} className="text-center group">
              <div className={`bg-gray-50 rounded-xl p-6 ${tech.bgColor} transition-colors group-hover:shadow-md`}>
                <tech.icon className={`text-4xl ${tech.color} mb-2 mx-auto`} />
                <p className="text-sm font-medium text-gray-700">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
