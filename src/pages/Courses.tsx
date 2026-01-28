import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Pencil, Trash2, Heart, Stethoscope, BookOpen, GraduationCap, Code, Atom } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const sampleCourses = [
  {
    id: 1,
    name: "NEET",
    icon: Heart,
    programs: ["Class 11", "Class 12", "Dropper"],
    color: "bg-rose-50",
    iconColor: "text-rose-500"
  },
  {
    id: 2,
    name: "IIT JEE",
    icon: Stethoscope,
    programs: ["Class 11", "Class 12", "Dropper"],
    color: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    id: 3,
    name: "Pre Foundation",
    icon: BookOpen,
    programs: ["Class 8", "Class 9", "Class 10"],
    color: "bg-blue-50",
    iconColor: "text-blue-500"
  },
  {
    id: 4,
    name: "Board Exams",
    icon: GraduationCap,
    programs: ["Class 10", "Class 12"],
    color: "bg-green-50",
    iconColor: "text-green-500"
  },
  {
    id: 5,
    name: "Programming",
    icon: Code,
    programs: ["Beginner", "Intermediate", "Advanced"],
    color: "bg-purple-50",
    iconColor: "text-purple-500"
  },
  {
    id: 6,
    name: "Science Olympiad",
    icon: Atom,
    programs: ["Class 6-8", "Class 9-10", "Class 11-12"],
    color: "bg-cyan-50",
    iconColor: "text-cyan-500"
  },
];

const Courses = () => {
  const { toast } = useToast();
  const [sectionData, setSectionData] = useState({
    title: "Our Courses",
    description: "Prepare for your dream career with our meticulously crafted course structures.",
  });

  const handleDelete = (courseName: string) => {
    toast({
      title: "Course Deleted",
      description: `"${courseName}" has been deleted.`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Manage Courses</h1>
            <p className="text-muted-foreground mt-1">
              View and manage all courses offered by your institution.
            </p>
          </div>
          <Button asChild>
            <Link to="/dashboard/courses/add">
              <Plus className="h-4 w-4 mr-2" />
              Add Course
            </Link>
          </Button>
        </div>

        {/* Courses Section Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Courses Section</CardTitle>
            <CardDescription>Customize the title and description shown on your courses page</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sectionTitle">Section Title</Label>
                <Input
                  id="sectionTitle"
                  placeholder="e.g., Our Courses"
                  value={sectionData.title}
                  onChange={(e) => setSectionData({ ...sectionData, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sectionDescription">Section Description</Label>
                <Textarea
                  id="sectionDescription"
                  placeholder="Describe your courses section..."
                  value={sectionData.description}
                  onChange={(e) => setSectionData({ ...sectionData, description: e.target.value })}
                  rows={1}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Courses Table */}
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Name</TableHead>
                <TableHead>Programs</TableHead>
                <TableHead className="text-right w-[150px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className={`${course.color} p-2 rounded-full`}>
                        <course.icon className={`h-5 w-5 ${course.iconColor}`} />
                      </div>
                      <span className="font-medium">{course.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-muted-foreground">
                      {course.programs.join(", ")}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Course</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete "{course.name}"? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(course.name)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Courses;
