import { Button } from "@/components/ui/button";
import { Calendar, Star, Bot } from "lucide-react";
import { useLocation } from "wouter";

export default function Hero() {
  const [, setLocation] = useLocation();

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-4 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Launch Your <span className="text-teal-500">MVP</span> in just{" "}
              <span className="text-teal-500">4 Weeks</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Transform your idea into a market-ready product with our
              AI-powered development process.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a compact and agile team based in Hong Kong, leveraging AI,
              automation, and rapid development tools to deliver high-quality
              MVPs faster and smarter.
            </p>
            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold w-full"
                onClick={() => setLocation("/ai-product-manager")}
              >
                <Bot className="mr-2 h-5 w-5" />
                Scope your project with AI
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Get your project requirements doc and UI Mock up in 24h!
              </p>
            </div>
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
