import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Institution from "./pages/Institution";
import Courses from "./pages/Courses";
import AddCourse from "./pages/AddCourse";
import Programs from "./pages/Programs";
import Batches from "./pages/Batches";
import Centers from "./pages/Centers";
import Admins from "./pages/Admins";
import Faculty from "./pages/Faculty";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/institution" element={<Institution />} />
          <Route path="/dashboard/courses" element={<Courses />} />
          <Route path="/dashboard/courses/add" element={<AddCourse />} />
          <Route path="/dashboard/programs" element={<Programs />} />
          <Route path="/dashboard/batches" element={<Batches />} />
          <Route path="/dashboard/centers" element={<Centers />} />
          <Route path="/dashboard/admins" element={<Admins />} />
          <Route path="/dashboard/faculty" element={<Faculty />} />
          <Route path="/dashboard/results" element={<Results />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
