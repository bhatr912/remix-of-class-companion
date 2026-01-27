import { Building2, User, Settings, Check, HelpCircle } from "lucide-react";

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
  {
    id: 2,
    title: "Setup",
    subtitle: "Preferences",
    icon: Settings,
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
                className={`flex items-start gap-4 rounded-lg p-3 transition-colors ${
                  isCurrent ? "bg-primary/5" : ""
                }`}
              >
                {/* Icon */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isCompleted
                      ? "bg-primary text-primary-foreground"
                      : isCurrent
                      ? "bg-primary text-primary-foreground"
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
                <div>
                  <p
                    className={`font-medium ${
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
                <div className="absolute left-[1.4rem] top-[3.25rem] h-8 w-0.5">
                  <div
                    className={`h-full w-full transition-colors ${
                      isCompleted ? "bg-primary" : "bg-muted"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Help Section */}
      <div className="mt-8 flex items-start gap-3 rounded-lg border bg-muted/50 p-4">
        <div className="rounded-full bg-primary/10 p-2">
          <HelpCircle className="h-4 w-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Need help?</p>
          <p className="text-xs text-muted-foreground">Contact our support team</p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingProgress;
