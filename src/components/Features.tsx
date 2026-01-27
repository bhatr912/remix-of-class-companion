import { 
  Smartphone, 
  Globe, 
  ShoppingCart, 
  Video, 
  FileCheck, 
  Shield,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Own Branded App",
    description: "Launch your teaching app with your branding and reach students on mobile"
  },
  {
    icon: Globe,
    title: "Own Branded Website",
    description: "Get a professional website for your coaching institute"
  },
  {
    icon: ShoppingCart,
    title: "Sell Your Courses",
    description: "Monetize your content and courses with integrated payments"
  },
  {
    icon: Video,
    title: "Take Live Classes",
    description: "Conduct unlimited live sessions with HD video quality"
  },
  {
    icon: FileCheck,
    title: "Create Online Tests",
    description: "Build assessments to track and improve student progress"
  },
  {
    icon: Shield,
    title: "100% Content Security",
    description: "Your content stays protected with advanced DRM security"
  }
];

const Features = () => {
  return (
    <section className="hero-gradient py-20 lg:py-28 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Powerful Features
          </span>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl mb-4">
            Simplify your teaching with our{" "}
            <span className="text-gradient">best features</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to build, grow, and scale your online teaching business
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon with gradient background */}
              <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-4 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {feature.description}
              </p>
              
              {/* Learn more link */}
              <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
