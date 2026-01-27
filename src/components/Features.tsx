import { 
  Smartphone, 
  Globe, 
  ShoppingCart, 
  Video, 
  FileCheck, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Own Branded App",
    description: "Launch your teaching app with your branding"
  },
  {
    icon: Globe,
    title: "Own Branded Website",
    description: "Get a professional website for your coaching"
  },
  {
    icon: ShoppingCart,
    title: "Sell Your Courses",
    description: "Monetize your content and courses easily"
  },
  {
    icon: Video,
    title: "Take Live Classes",
    description: "Conduct unlimited live sessions with students"
  },
  {
    icon: FileCheck,
    title: "Create Online Tests",
    description: "Build assessments to track student progress"
  },
  {
    icon: Shield,
    title: "100% Content Security",
    description: "Your content stays protected and secure"
  }
];

const Features = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Simplify your teaching with our{" "}
            <span className="text-gradient">best features</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-8 transition-all duration-300 hover:border-sky-400/50 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 inline-flex rounded-xl bg-sky-500/10 p-4">
                <feature.icon className="h-8 w-8 text-sky-400" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
