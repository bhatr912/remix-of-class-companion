import { Check, Sparkles } from "lucide-react";

const features = [
  "Android App",
  "Website",
  "Admin Portal",
  "Unlimited Recorded Courses",
  "Unlimited Live Classes",
  "Unlimited Student Enrolments",
  "Unlimited Storage",
  "A.I. Powered Leads",
  "24/7 Support"
];

const Pricing = () => {
  return (
    <section id="pricing" className="hero-gradient py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Best <span className="text-gradient">pricing</span> designed for you
          </h2>
          <p className="mt-4 text-muted-foreground">
            Get started for free, no credit card required
          </p>
        </div>

        {/* Single Free Plan Card */}
        <div className="mx-auto max-w-lg">
          <div className="relative overflow-hidden rounded-3xl border-2 border-primary/50 bg-card p-8 shadow-xl shadow-primary/10">
            {/* Free Badge */}
            <div className="absolute -right-8 top-6 rotate-45 bg-primary px-10 py-1 text-xs font-semibold text-primary-foreground">
              FREE
            </div>

            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                ClassConnect Free
              </h3>
            </div>
            
            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-foreground">₹0</span>
              <span className="text-muted-foreground">/ forever</span>
            </div>
            
            <p className="mb-8 text-muted-foreground">
              Everything you need to start teaching online
            </p>

            <ul className="mb-8 space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full rounded-xl button-gradient py-4 font-semibold text-primary-foreground button-shadow transition-all hover:opacity-90">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
