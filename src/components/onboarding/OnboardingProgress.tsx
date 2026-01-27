import { Building2, User, Check, HelpCircle } from "lucide-react";

interface OnboardingProgressProps {
  currentStep: number;
}

const steps = [
  {
    id: 0,
    title: "Institute Details",
    subtitle: "Basic information",
    icon: Building2,
  },
  {
    id: 1,
    title: "Owner Info",
    subtitle: "Contact details",
    icon: User,
  },
];

const OnboardingProgress = ({ currentStep }: OnboardingProgressProps) => {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-8">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Registration Progress
        </h3>
      </div>

      <div className="flex-1 space-y-1">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          const Icon = step.icon;

          return (
            <div key={step.id} className="relative">
              <div
                className={`flex items-start gap-4 rounded-xl p-4 transition-all duration-300 ${
                  isCurrent ? "bg-primary/10 shadow-sm" : ""
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isCompleted
                      ? "bg-primary text-primary-foreground shadow-md"
                      : isCurrent
                      ? "bg-primary text-primary-foreground shadow-md ring-4 ring-primary/20"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </div>

                {/* Text */}
                <div className="pt-1">
                  <p
                    className={`font-semibold transition-colors ${
                      isCurrent ? "text-primary" : isCompleted ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[1.65rem] top-[3.75rem] h-6 w-0.5">
                  <div
                    className={`h-full w-full rounded-full transition-colors duration-300 ${
                      isCompleted ? "bg-primary" : "bg-border"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Help Section */}
      <div className="mt-8 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
        <div className="rounded-full bg-primary/10 p-2.5">
          <HelpCircle className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Need help?</p>
          <p className="text-xs text-muted-foreground">Contact our support team</p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingProgress;
