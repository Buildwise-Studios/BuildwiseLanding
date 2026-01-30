import { Button } from "@/components/ui/button";
import { Calendar, Star } from "lucide-react";
import { useLocation } from "wouter";
import jasonImage from "@assets/jason.png";

export default function Hero() {
  const [, setLocation] = useLocation();

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center w-full">
          <div className="flex flex-col gap-4 mb-8 lg:mb-0 w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 break-words">
              AI Agents That <span className="text-teal-500">Replace</span>{" "}
              Repetitive Work
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              We build vertical-specific AI agents for professional services—executive search, legal, consulting, and beyond.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Built once, deployed forever. No custom dev, no consulting—just plug-and-play intelligence.
            </p>
            <div className="space-y-4 w-full">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 py-5 text-sm sm:text-lg font-semibold w-full flex items-center justify-center gap-3"
                onClick={() => setLocation("/#verticals")}
              >
                <span className="text-center leading-tight">
                  See Agents for Your Industry
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-teal-600 border-teal-600 hover:bg-teal-50 px-6 sm:px-8 py-5 text-sm sm:text-lg font-semibold w-full flex items-center justify-center gap-3"
                onClick={() => setLocation("/ai-product-manager")}
              >
                <span className="text-center leading-tight">
                  Not Sure? Talk to Jason →
                </span>
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-full">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern tech team collaboration workspace"
              className="rounded-2xl shadow-2xl w-full max-w-full h-auto"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-3 sm:p-4 shadow-lg max-w-xs">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                  alt="Client testimonial"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 truncate">It's live!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
