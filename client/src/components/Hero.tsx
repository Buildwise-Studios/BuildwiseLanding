import { Button } from "@/components/ui/button";
import { Calendar, Star } from "lucide-react";




const original_unplash_image = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Launch Your{" "}
              <span className="text-teal-500">MVP</span> in just{" "}
              <span className="text-teal-500">8 Weeks</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Transform your idea into a market-ready product with our low-code, 
              AI-powered development process.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We’re a compact, agile team based in Hong Kong, leveraging AI, 
              automation, 
              and rapid development tools to deliver high-quality MVPs faster and 
              smarter, at a reasonable cost.
            </p>
            <Button 
              size="lg" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Meeting
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern tech team collaboration workspace"
              className="rounded-2xl shadow-2xl w-full"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">It's live!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
