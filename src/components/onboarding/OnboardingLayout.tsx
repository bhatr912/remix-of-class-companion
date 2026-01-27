import { ReactNode } from "react";
import OnboardingProgress from "./OnboardingProgress";
import { GraduationCap, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface OnboardingLayoutProps {
  children: ReactNode;
  currentStep: number;
}

const stepLabels = ["Institute Details", "Owner Information"];

const OnboardingLayout = ({ children, currentStep }: OnboardingLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm px-6 py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="rounded-xl bg-primary p-2 transition-transform group-hover:scale-105">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">ClassConnect</span>
          </Link>
          
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg px-3 py-2 hover:bg-primary/5">
            <HelpCircle className="h-4 w-4" />
            Need Help?
          </button>
        </div>
      </header>

      {/* Mobile Progress Bar */}
      <div className="border-b bg-background/80 backdrop-blur-sm px-6 py-4 lg:hidden">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-medium">Step {currentStep + 1} of 2</span>
          <span className="font-semibold text-primary">
            {stepLabels[currentStep]}
          </span>
        </div>
        <div className="mt-3 h-2 w-full rounded-full bg-muted overflow-hidden">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 ease-out"
            style={{ width: `${((currentStep + 1) / 2) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 lg:py-12">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border bg-background shadow-xl lg:grid lg:grid-cols-[300px_1fr]">
            {/* Desktop Sidebar */}
            <div className="hidden border-r bg-gradient-to-b from-muted/50 to-muted/20 p-8 lg:block">
              <OnboardingProgress currentStep={currentStep} />
            </div>

            {/* Form Content */}
            <div className="p-8 md:p-12">
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-background/80 backdrop-blur-sm px-6 py-4 mt-auto">
        <div className="container mx-auto flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <span className="text-muted">•</span>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default OnboardingLayout;
