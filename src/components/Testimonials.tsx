import { Play, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Vijay Kumar Pooniya",
    organization: "Vijay Education",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    quote: "ClassConnect transformed how I deliver content to my students. The platform is intuitive and powerful."
  },
  {
    name: "Mohit Goenka",
    organization: "Eduniti",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    quote: "Our student engagement increased by 40% after switching to ClassConnect. Highly recommended!"
  },
  {
    name: "Baljinder Singh",
    organization: "Positive Vibes",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    quote: "The best decision I made for my coaching business. Simple, effective, and professional."
  }
];

const Testimonials = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Trusted by our{" "}
            <span className="text-gradient">Educators & Creators</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                
                {/* Quote Text */}
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.organization}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
