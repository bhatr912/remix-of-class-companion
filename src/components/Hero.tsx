import { ChevronRight } from "lucide-react";
import heroEducator from "@/assets/hero-educator.png";

const stats = [
  { value: "3,300+", label: "Cities" },
  { value: "1 Lakh+", label: "Teachers" },
  { value: "5 Crore+", label: "Students" }
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      
      <div className="container relative mx-auto flex min-h-screen items-center px-6 py-20 lg:px-12">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-in mt-8 lg:mt-12">
            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Build your online brand{" "}
              <span className="text-gradient">identity</span> with ClassConnect
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
            {/* Background decorative elements */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-sm" />
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 h-[380px] w-[380px] rounded-full border border-primary/10" />
            <div className="absolute right-8 top-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full border border-primary/5" />
            
            <img 
              src={heroEducator} 
              alt="Educator" 
              className="relative z-10 max-h-[500px] w-auto object-contain animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
