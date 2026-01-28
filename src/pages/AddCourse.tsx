import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Heart, BookOpen, GraduationCap, Code, Atom, Stethoscope, Calculator, Beaker, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const iconOptions = [
  { value: "heart", label: "Heart", icon: Heart },
  { value: "book", label: "Book", icon: BookOpen },
  { value: "graduation", label: "Graduation", icon: GraduationCap },
  { value: "code", label: "Code", icon: Code },
  { value: "atom", label: "Atom", icon: Atom },
  { value: "stethoscope", label: "Stethoscope", icon: Stethoscope },
  { value: "calculator", label: "Calculator", icon: Calculator },
  { value: "beaker", label: "Beaker", icon: Beaker },
  { value: "globe", label: "Globe", icon: Globe },
];

const colorOptions = [
  { value: "rose", label: "Rose", bg: "bg-rose-50", text: "text-rose-500" },
  { value: "amber", label: "Amber", bg: "bg-amber-50", text: "text-amber-600" },
  { value: "blue", label: "Blue", bg: "bg-blue-50", text: "text-blue-500" },
  { value: "green", label: "Green", bg: "bg-green-50", text: "text-green-500" },
  { value: "purple", label: "Purple", bg: "bg-purple-50", text: "text-purple-500" },
  { value: "cyan", label: "Cyan", bg: "bg-cyan-50", text: "text-cyan-500" },
];

const AddCourse = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    icon: "",
    color: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.icon || !formData.color) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Course Created",
      description: `"${formData.name}" has been added successfully.`,
    });
    
    navigate("/dashboard/courses");
  };

  const selectedIcon = iconOptions.find((opt) => opt.value === formData.icon);
  const selectedColor = colorOptions.find((opt) => opt.value === formData.color);

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/dashboard/courses">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Add New Course</h1>
            <p className="text-muted-foreground">Create a new course for your institution</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle>Course Details</CardTitle>
              <CardDescription>Enter the basic information about the course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Course Name *</Label>
                <Input
                  id="name"
                  placeholder="e.g., NEET, IIT JEE, Pre Foundation"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Icon *</Label>
                  <Select
                    value={formData.icon}
                    onValueChange={(value) => setFormData({ ...formData, icon: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an icon" />
                    </SelectTrigger>
                    <SelectContent>
                      {iconOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center gap-2">
                            <option.icon className="h-4 w-4" />
                            {option.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Color *</Label>
                  <Select
                    value={formData.color}
                    onValueChange={(value) => setFormData({ ...formData, color: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a color" />
                    </SelectTrigger>
                    <SelectContent>
                      {colorOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center gap-2">
                            <div className={`h-4 w-4 rounded ${option.bg} border`} />
                            {option.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Preview */}
              {selectedIcon && selectedColor && (
                <div className="pt-4 border-t">
                  <Label className="mb-3 block">Preview</Label>
                  <div className="flex items-center gap-4 p-4 border rounded-lg bg-card">
                    <div className={`${selectedColor.bg} p-3 rounded-full`}>
                      <selectedIcon.icon className={`h-6 w-6 ${selectedColor.text}`} />
                    </div>
                    <h3 className="font-bold">{formData.name || "Course Name"}</h3>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" asChild>
              <Link to="/dashboard/courses">Cancel</Link>
            </Button>
            <Button type="submit">Create Course</Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddCourse;
