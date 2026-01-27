import { OnboardingData } from "@/pages/Onboarding";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Building2, MapPin, Tag } from "lucide-react";

interface InstituteDetailsProps {
  data: OnboardingData;
  updateData: (fields: Partial<OnboardingData>) => void;
  onNext: () => void;
}

const categories = [
  "Coaching Institute",
  "School",
  "College",
  "Tuition Center",
  "Skill Training",
  "Test Preparation",
  "Other",
];

const InstituteDetails = ({ data, updateData, onNext }: InstituteDetailsProps) => {
  const maxAddressLength = 200;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const isFormValid = data.instituteName.trim() && data.category;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <Building2 className="h-4 w-4" />
          Step 1 of 2
        </div>
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          Tell us about your Institute
        </h1>
        <p className="text-lg text-muted-foreground">
          Let's get the basics down so students can find you easily.
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Institute Name */}
        <div className="space-y-2">
          <Label htmlFor="instituteName" className="text-base font-medium">
            Institute Name
          </Label>
          <div className="relative">
            <Building2 className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="instituteName"
              placeholder="e.g. Excellence Academy"
              value={data.instituteName}
              onChange={(e) => updateData({ instituteName: e.target.value })}
              required
              className="h-12 pl-12 text-base"
            />
          </div>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label htmlFor="category" className="text-base font-medium">
            Category
          </Label>
          <div className="relative">
            <Tag className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none" />
            <Select
              value={data.category}
              onValueChange={(value) => updateData({ category: value })}
              required
            >
              <SelectTrigger className="h-12 pl-12 text-base">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="text-base">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label htmlFor="address" className="text-base font-medium">
            Address <span className="text-muted-foreground font-normal">(Optional)</span>
          </Label>
          <div className="relative">
            <MapPin className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
            <Textarea
              id="address"
              placeholder="Full street address, city, and zip code"
              value={data.address}
              onChange={(e) => {
                if (e.target.value.length <= maxAddressLength) {
                  updateData({ address: e.target.value });
                }
              }}
              className="min-h-[120px] resize-none pl-12 pt-3 text-base"
            />
          </div>
          <p className="text-right text-sm text-muted-foreground">
            {data.address.length}/{maxAddressLength} characters
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end pt-4">
        <Button 
          type="submit" 
          size="lg" 
          className="h-12 gap-2 px-8 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
          disabled={!isFormValid}
        >
          Continue
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
};

export default InstituteDetails;
