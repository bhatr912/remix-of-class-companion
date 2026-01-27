import { Play } from "lucide-react";

const testimonials = [
  {
    name: "Vijay Kumar Pooniya",
    organization: "Vijay Education",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Mohit Goenka",
    organization: "Eduniti",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
  },
  {
    name: "Baljinder Singh",
    organization: "Positive Vibes",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
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
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                
                {/* Play Button */}
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-sky-500/80 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-sky-500">
                  <Play className="h-6 w-6 text-primary-foreground ml-1" fill="currentColor" />
                </button>
                
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-semibold text-foreground">
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
