import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, BookOpen, Calendar, Settings, PanelLeftClose, PanelLeft, Building } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Building, label: "Institution", path: "/dashboard/institution" },
  { icon: Users, label: "Students", path: "/dashboard/students" },
  { icon: BookOpen, label: "Courses", path: "/dashboard/courses" },
  { icon: Calendar, label: "Schedule", path: "/dashboard/schedule" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

interface DashboardSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const DashboardSidebar = ({ collapsed, onToggle }: DashboardSidebarProps) => {
  const location = useLocation();

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 h-screen border-r bg-card flex flex-col transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Logo Header - matches main header height */}
      <div className={cn(
        "flex items-center h-16 border-b px-4",
        collapsed ? "justify-center" : "gap-2"
      )}>
        <svg 
          viewBox="0 0 24 24" 
          className="h-8 w-8 text-primary shrink-0"
          fill="currentColor"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none"
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        {!collapsed && (
          <span className="text-xl font-bold text-foreground">ClassConnect</span>
        )}
      </div>

      {/* Navigation */}
      <nav className={cn(
        "flex-1 py-4 space-y-1",
        collapsed ? "px-2" : "px-3"
      )}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path === "/dashboard" && location.pathname === "/dashboard");
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 py-3 rounded-lg text-sm font-medium transition-all",
                collapsed ? "justify-center px-0" : "px-3",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!collapsed && item.label}
            </Link>
          );
        })}
      </nav>

      {/* Collapse Toggle Button */}
      <div className="border-t p-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className={cn(
            "w-full justify-center",
            !collapsed && "justify-start"
          )}
        >
          {collapsed ? (
            <PanelLeft className="h-5 w-5" />
          ) : (
            <>
              <PanelLeftClose className="h-5 w-5 mr-2" />
              <span>Collapse</span>
            </>
          )}
        </Button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
