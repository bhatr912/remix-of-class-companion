import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Stethoscope, BookOpen, GraduationCap, Code, Atom } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const sampleCourses = [
  {
    id: 1,
    name: "NEET",
    description: "Medical entrance preparation",
    icon: Heart,
    tags: ["Class 11", "Class 12", "Dropper"],
    color: "bg-rose-50",
    iconColor: "text-rose-500"
  },
  {
    id: 2,
    name: "IIT JEE",
    description: "Engineering entrance preparation",
    icon: Stethoscope,
    tags: ["Class 11", "Class 12", "Dropper"],
    color: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    id: 3,
    name: "Pre Foundation",
    description: "Foundation courses for younger students",
    icon: BookOpen,
    tags: ["Class 8", "Class 9", "Class 10"],
    color: "bg-blue-50",
    iconColor: "text-blue-500"
  },
  {
    id: 4,
    name: "Board Exams",
    description: "CBSE and State board preparation",
    icon: GraduationCap,
    tags: ["Class 10", "Class 12"],
    color: "bg-green-50",
    iconColor: "text-green-500"
  },
  {
    id: 5,
    name: "Programming",
    description: "Coding and development courses",
    icon: Code,
    tags: ["Beginner", "Intermediate", "Advanced"],
    color: "bg-purple-50",
    iconColor: "text-purple-500"
  },
  {
    id: 6,
    name: "Science Olympiad",
    description: "Competitive science exams",
    icon: Atom,
    tags: ["Class 6-8", "Class 9-10", "Class 11-12"],
    color: "bg-cyan-50",
    iconColor: "text-cyan-500"
  },
];

const Courses = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Our Courses</h1>
            <p className="text-muted-foreground mt-1">
              Prepare for your dream career with our meticulously crafted course structures.
            </p>
          </div>
          <Button asChild>
            <Link to="/dashboard/courses/add">
              <Plus className="h-4 w-4 mr-2" />
              Add Course
            </Link>
          </Button>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{course.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="p-0 h-auto font-medium">
                      Explore <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                  <div className={`${course.color} p-4 rounded-full`}>
                    <course.icon className={`h-8 w-8 ${course.iconColor}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Courses;
