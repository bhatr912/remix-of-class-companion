import { useState } from "react";
import { OnboardingData } from "@/pages/Onboarding";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Eye, EyeOff, Mail, User, Phone, Lock, Check, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface OwnerInfoProps {
  data: OnboardingData;
  updateData: (fields: Partial<OnboardingData>) => void;
  onBack: () => void;
  onComplete: () => void;
}

const OwnerInfo = ({ data, updateData, onBack, onComplete }: OwnerInfoProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const getPasswordStrength = (password: string) => {
    if (!password) return { label: "", color: "", width: "0%", textColor: "" };
    if (password.length < 6) return { label: "Weak password", color: "bg-destructive", width: "33%", textColor: "text-destructive" };
    if (password.length < 10) return { label: "Moderate password", color: "bg-yellow-500", width: "66%", textColor: "text-yellow-600" };
    return { label: "Strong password", color: "bg-green-500", width: "100%", textColor: "text-green-600" };
  };

  const passwordStrength = getPasswordStrength(data.password);

  const isFormValid = 
    data.fullName.trim() && 
    data.email.trim() && 
    data.phone.trim() && 
    data.password.length >= 8;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <User className="h-4 w-4" />
          Step 2 of 2
        </div>
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          Owner Information
        </h1>
        <p className="text-lg text-muted-foreground">
          Tell us a bit about yourself to secure your account.
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-base font-medium">Full Name</Label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="fullName"
              placeholder="e.g. Jane Doe"
              value={data.fullName}
              onChange={(e) => updateData({ fullName: e.target.value })}
              required
              className="h-12 pl-12 text-base"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base font-medium">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="name@company.com"
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
              required
              className="h-12 pl-12 text-base"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-base font-medium">Phone Number</Label>
          <div className="flex gap-3">
            <div className="flex h-12 w-24 items-center justify-center rounded-lg border bg-muted/50 px-3 text-sm font-medium text-muted-foreground shrink-0">
              🇮🇳 +91
            </div>
            <div className="relative flex-1">
              <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="phone"
                type="tel"
                placeholder="98765 43210"
                value={data.phone}
                onChange={(e) => updateData({ phone: e.target.value })}
                required
                className="h-12 pl-12 text-base"
              />
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-base font-medium">Create Password</Label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Minimum 8 characters"
              value={data.password}
              onChange={(e) => updateData({ password: e.target.value })}
              required
              minLength={8}
              className="h-12 pl-12 pr-12 text-base"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          
          {/* Password Strength Indicator */}
          {data.password && (
            <div className="space-y-2 pt-1">
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${passwordStrength.color}`}
                  style={{ width: passwordStrength.width }}
                />
              </div>
              <p className={`text-sm font-medium ${passwordStrength.textColor}`}>
                {passwordStrength.label}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4">
        <Button 
          type="button" 
          variant="ghost" 
          onClick={onBack} 
          className="gap-2 text-base hover:bg-muted"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </Button>
        <Button 
          type="submit" 
          size="lg" 
          className="h-12 gap-2 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
          disabled={!isFormValid}
        >
          <Sparkles className="h-5 w-5" />
          Complete Setup
          <Check className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
};

export default OwnerInfo;
