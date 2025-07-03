import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "BelkMaster",
    title: "VoxAI user (in Discord)",
    content: "This is a hidden gem!",
    image: "https://images.unsplash.com/photo-1633471905984-3a4bf834e4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5,
  },
  {
    name: "Bosco Wang.",
    title: "Early Stage Startup Founder",
    content: "Technical co-founder backed out 3 weeks before my Cyberport incubation application was due. Buildwise delivered a working MVP that made me confident for the pitch. And I got in!!!",
    image: "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5,
  },
  {
    name: "Jennifer F.",
    title: "Business Owner",
    content: "I honestly couldn’t ask for a better collaborators. From the start, they have been incredibly accommodating with my schedule and always willing to put in the extra time to make sure everything was working perfectly. They really goes above and beyond—not just in doing the work, but in making sure I understand what’s happening along the way.",
    image: "https://images.unsplash.com/photo-1744880034087-b570c77c762e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    rating: 5,
  },
  {
    name: "Maria T",
    title: "Startup Founder",
    content: "Buildwise has exceeded all expectations, not only I have found out there are experts in automations, but also the fact that their approach to building unconventional logic flows has made the whole project possible when a lot of people couldn't even cope with the basics. I am truly excited to continue our work on innovative AI flows and highly recommend Buildwise if you are looking for a multi talented team.",
    image: "https://images.unsplash.com/photo-1580483046931-aaba29b81601?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
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
