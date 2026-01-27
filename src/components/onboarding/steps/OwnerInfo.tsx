import { useState } from "react";
import { OnboardingData } from "@/pages/Onboarding";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Eye, EyeOff, Mail } from "lucide-react";

interface OwnerInfoProps {
  data: OnboardingData;
  updateData: (fields: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const OwnerInfo = ({ data, updateData, onNext, onBack }: OwnerInfoProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const getPasswordStrength = (password: string) => {
    if (!password) return { label: "", color: "", width: "0%" };
    if (password.length < 6) return { label: "Weak password", color: "bg-destructive", width: "33%" };
    if (password.length < 10) return { label: "Moderate password", color: "bg-yellow-500", width: "66%" };
    return { label: "Strong password", color: "bg-green-500", width: "100%" };
  };

  const passwordStrength = getPasswordStrength(data.password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">
          Owner Information
        </h1>
        <p className="mt-2 text-muted-foreground">
          Tell us a bit about yourself to secure your account.
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            placeholder="e.g. Jane Doe"
            value={data.fullName}
            onChange={(e) => updateData({ fullName: e.target.value })}
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="name@company.com"
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
              required
              className="pl-10"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <div className="flex gap-2">
            <div className="flex h-10 w-24 items-center justify-center rounded-md border bg-muted px-3 text-sm text-muted-foreground">
              IN +91
            </div>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 000-0000"
              value={data.phone}
              onChange={(e) => updateData({ phone: e.target.value })}
              required
              className="flex-1"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Create Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Minimum 8 characters"
              value={data.password}
              onChange={(e) => updateData({ password: e.target.value })}
              required
              minLength={8}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          
          {/* Password Strength Indicator */}
          {data.password && (
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-muted">
                <div
                  className={`h-full rounded-full transition-all ${passwordStrength.color}`}
                  style={{ width: passwordStrength.width }}
                />
              </div>
              <p className={`text-xs ${
                passwordStrength.color === "bg-destructive" 
                  ? "text-destructive" 
                  : passwordStrength.color === "bg-yellow-500"
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}>
                {passwordStrength.label}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <Button type="button" variant="ghost" onClick={onBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button type="submit" size="lg" className="gap-2">
          Next: Final Setup
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default OwnerInfo;
