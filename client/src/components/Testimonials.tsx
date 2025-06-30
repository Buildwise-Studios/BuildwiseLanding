import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Martin",
    title: "CEO, TechStart",
    content: "Buildwise has been a key partner in making our idea a reality. Their project management approach is impeccable, and they guided us through every stage of development. They became an indispensable tool for our recruitment needs, largely thanks to their precision and expertise of their team.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5,
  },
  {
    name: "Alex Thompson",
    title: "Founder, FinanceFlow",
    content: "Working with Buildwise transformed our startup journey. They delivered our MVP in just 10 weeks, and the quality exceeded our expectations. Their AI-powered development approach saved us months of traditional development time.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    title: "Co-founder, EcoMarket",
    content: "The team at Buildwise didn't just build our product—they became strategic partners in our success. Their insights on market positioning and growth hacking were invaluable to our launch strategy.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5,
  },
  {
    name: "Robert Kim",
    title: "CEO, HealthConnect",
    content: "Exceptional service from start to finish. Buildwise helped us pivot our initial concept into a market-ready product. Their technical expertise and business acumen are second to none.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear what our clients say about working with Buildwise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 text-xl mr-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-500">5.0</span>
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - ${testimonial.title}`}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
