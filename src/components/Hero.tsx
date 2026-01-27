import { ChevronRight } from "lucide-react";
import heroEducator from "@/assets/hero-educator.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-24">
      <div className="container relative mx-auto flex min-h-[calc(100vh-6rem)] items-center px-6 py-16 lg:px-12">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 animate-fade-in">
            <h1 className="text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-4xl">
              Build your online brand{" "}
              <span className="text-gradient">identity</span> with ClassConnect
            </h1>
            
            <p className="max-w-lg text-base text-muted-foreground md:text-lg">
              Get your own brand's teaching app, create your own website & sell courses
            </p>

            {/* CTA Button */}
            <div>
              <button className="button-gradient group flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-primary-foreground transition-all button-shadow hover:opacity-90">
                Get Started
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
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
