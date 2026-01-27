import { OnboardingData } from "@/pages/Onboarding";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Check, Video, BookOpen, Users, CreditCard, MessageSquare, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SetupProps {
  data: OnboardingData;
  updateData: (fields: Partial<OnboardingData>) => void;
  onBack: () => void;
  onComplete: () => void;
}

const preferences = [
  {
    id: "live-classes",
    label: "Live Classes",
    description: "Host live video classes with students",
    icon: Video,
  },
  {
    id: "courses",
    label: "Recorded Courses",
    description: "Upload and sell pre-recorded courses",
    icon: BookOpen,
  },
  {
    id: "student-management",
    label: "Student Management",
    description: "Manage student enrollments and progress",
    icon: Users,
  },
  {
    id: "payments",
    label: "Payment Collection",
    description: "Collect fees online from students",
    icon: CreditCard,
  },
  {
    id: "communication",
    label: "Communication Tools",
    description: "Chat and announcements for students",
    icon: MessageSquare,
  },
  {
    id: "notifications",
    label: "Push Notifications",
    description: "Send updates to students' devices",
    icon: Bell,
  },
];

const Setup = ({ data, updateData, onBack, onComplete }: SetupProps) => {
  const navigate = useNavigate();

  const togglePreference = (preferenceId: string) => {
    const currentPreferences = data.preferences || [];
    const newPreferences = currentPreferences.includes(preferenceId)
      ? currentPreferences.filter((p) => p !== preferenceId)
      : [...currentPreferences, preferenceId];
    updateData({ preferences: newPreferences });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete();
    // Navigate to home or dashboard after completion
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">
          Customize Your Experience
        </h1>
        <p className="mt-2 text-muted-foreground">
          Select the features you'd like to use. You can always change these later.
        </p>
      </div>

      {/* Preferences Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {preferences.map((preference) => {
          const isSelected = data.preferences?.includes(preference.id);
          const Icon = preference.icon;

          return (
            <div
              key={preference.id}
              onClick={() => togglePreference(preference.id)}
              className={`relative cursor-pointer rounded-xl border p-4 transition-all hover:border-primary/50 ${
                isSelected ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`rounded-lg p-2 ${
                    isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <Label className="cursor-pointer font-medium">
                    {preference.label}
                  </Label>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {preference.description}
                  </p>
                </div>
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={() => togglePreference(preference.id)}
                  className="mt-1"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <Button type="button" variant="ghost" onClick={onBack} className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button type="submit" size="lg" className="gap-2">
          Complete Setup
          <Check className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default Setup;
