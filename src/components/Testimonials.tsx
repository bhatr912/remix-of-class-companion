import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vijay Kumar Pooniya",
    organization: "Vijay Education",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    quote: "ClassConnect transformed how I teach. My student engagement increased by 300% within months!"
  },
  {
    name: "Mohit Goenka",
    organization: "Eduniti",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    quote: "The branded app feature helped me establish credibility and grow my coaching institute exponentially."
  },
  {
    name: "Baljinder Singh",
    organization: "Positive Vibes",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    quote: "From 50 students to 5000+ in one year. ClassConnect made scaling my teaching business effortless."
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
            <div
              key={index}
              className="glass-card rounded-2xl p-8 transition-all duration-300 hover:border-primary/50 hover:scale-[1.02]"
            >
              {/* Quote Icon */}
              <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-3">
                <Quote className="h-6 w-6 text-primary" />
              </div>
              
              {/* Quote Text */}
              <p className="mb-6 text-muted-foreground leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
