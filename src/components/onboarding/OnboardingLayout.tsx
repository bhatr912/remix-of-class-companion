import { ReactNode } from "react";
import OnboardingProgress from "./OnboardingProgress";
import { GraduationCap, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface OnboardingLayoutProps {
  children: ReactNode;
  currentStep: number;
}

const OnboardingLayout = ({ children, currentStep }: OnboardingLayoutProps) => {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b bg-background px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-lg bg-primary p-2">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">ClassConnect</span>
          </Link>
          
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <HelpCircle className="h-4 w-4" />
            Need Help?
          </button>
        </div>
      </header>

      {/* Mobile Progress Bar */}
      <div className="border-b bg-background px-6 py-4 lg:hidden">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Step {currentStep + 1} of 3</span>
          <span className="font-medium text-primary">
            {currentStep === 0 && "Institute Details"}
            {currentStep === 1 && "Owner Information"}
            {currentStep === 2 && "Setup"}
          </span>
        </div>
        <div className="mt-3 h-1.5 w-full rounded-full bg-muted">
          <div 
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 lg:py-12">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border bg-background shadow-sm lg:grid lg:grid-cols-[280px_1fr]">
            {/* Desktop Sidebar */}
            <div className="hidden border-r bg-muted/30 p-8 lg:block">
              <OnboardingProgress currentStep={currentStep} />
            </div>

            {/* Form Content */}
            <div className="p-6 md:p-10">
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-background px-6 py-4">
        <div className="container mx-auto flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default OnboardingLayout;
