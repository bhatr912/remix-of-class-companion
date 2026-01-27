import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="hero-gradient py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Are you ready to start your growth journey?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Join thousands of educators who are already growing with Classplus
              </p>
            </div>
            
            <Link 
              to="/onboarding"
              className="button-gradient group inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold text-primary-foreground transition-all button-shadow hover:opacity-90"
            >
              Start now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
