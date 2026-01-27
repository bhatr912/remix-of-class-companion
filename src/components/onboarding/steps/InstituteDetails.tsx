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
import { ArrowRight, Pencil } from "lucide-react";

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

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">
          Tell us about your Institute
        </h1>
        <p className="mt-2 text-muted-foreground">
          Let's get the basics down so students can find you easily.
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Institute Name */}
        <div className="space-y-2">
          <Label htmlFor="instituteName">Institute Name</Label>
          <div className="relative">
            <Input
              id="instituteName"
              placeholder="e.g. Excellence Academy"
              value={data.instituteName}
              onChange={(e) => updateData({ instituteName: e.target.value })}
              required
              className="pr-10"
            />
            <Pencil className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select
            value={data.category}
            onValueChange={(value) => updateData({ category: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Textarea
            id="address"
            placeholder="Full street address, city, and zip code"
            value={data.address}
            onChange={(e) => {
              if (e.target.value.length <= maxAddressLength) {
                updateData({ address: e.target.value });
              }
            }}
            className="min-h-[100px] resize-none"
          />
          <p className="text-right text-xs text-muted-foreground">
            {data.address.length}/{maxAddressLength} characters
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button type="submit" size="lg" className="gap-2">
          Next: Owner Information
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default InstituteDetails;
