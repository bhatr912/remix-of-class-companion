import { ChevronRight } from "lucide-react";
import heroEducator from "@/assets/hero-educator.png";

const stats = [
  { value: "3,300+", label: "Cities" },
  { value: "1 Lakh+", label: "Teachers" },
  { value: "5 Crore+", label: "Students" }
];

const Hero = () => {
  return (
    <section className="hero-gradient relative min-h-screen overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-sky-600/10 blur-2xl" />
      
      <div className="container relative mx-auto flex min-h-screen items-center px-6 py-20 lg:px-12">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-in">
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Build your online brand{" "}
              <span className="text-gradient">identity</span> with Classplus
            </h1>
            
            <p className="max-w-lg text-lg text-muted-foreground md:text-xl">
              Get your own brand's teaching app, create your own website & sell courses
            </p>

            {/* CTA Button */}
            <div>
              <button className="button-gradient group flex items-center gap-2 rounded-xl px-8 py-4 font-semibold text-primary-foreground transition-all button-shadow hover:opacity-90">
                Get Started
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4 md:gap-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-2xl font-bold text-foreground md:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground md:text-base">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <img 
              src={heroEducator} 
              alt="Educator" 
              className="max-h-[500px] w-auto object-contain animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
