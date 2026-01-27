import { Check } from "lucide-react";

const plans = [
  {
    name: "Classplus Plan - 1 Year",
    originalPrice: "₹34,999",
    price: "₹29,999",
    description: "Recommended for educators & content creators",
    features: [
      "Android App",
      "Website",
      "Admin Portal",
      "Unlimited Recorded Courses",
      "Unlimited Live Classes",
      "Unlimited Student Enrolments",
      "Unlimited Storage",
      "A.I. Powered Leads",
      "And Much More"
    ]
  },
  {
    name: "Classplus Plan - 2 Years",
    originalPrice: "₹44,999",
    price: "₹39,999",
    description: "Recommended for medium & large coaching centres",
    features: [
      "Android App",
      "Website", 
      "Admin Portal",
      "Unlimited Recorded Courses",
      "Unlimited Live Classes",
      "Unlimited Student Enrolments",
      "Unlimited Storage",
      "A.I. Powered Leads",
      "And Much More"
    ],
    popular: true
  }
];

const Pricing = () => {
  return (
    <section className="hero-gradient py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Best <span className="text-gradient">pricing</span> designed for you
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl p-8 ${
                plan.popular
                  ? "border-2 border-sky-400 bg-dark-800"
                  : "border border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -right-8 top-6 rotate-45 bg-sky-500 px-10 py-1 text-xs font-semibold text-primary-foreground">
                  POPULAR
                </div>
              )}

              <h3 className="mb-2 text-xl font-bold text-foreground">
                {plan.name}
              </h3>
              
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground line-through">
                  {plan.originalPrice}/-
                </span>
                <span className="text-3xl font-bold text-foreground">
                  {plan.price}/-
                </span>
              </div>
              
              <p className="mb-6 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20">
                      <Check className="h-3 w-3 text-sky-400" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full rounded-xl py-4 font-semibold transition-all ${
                plan.popular
                  ? "button-gradient text-primary-foreground button-shadow hover:opacity-90"
                  : "border border-sky-500 text-sky-400 hover:bg-sky-500/10"
              }`}>
                Pay now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
