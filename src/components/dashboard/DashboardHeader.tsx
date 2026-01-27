import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  onMenuClick?: () => void;
  userName?: string;
}

const DashboardHeader = ({ onMenuClick, userName = "JD" }: DashboardHeaderProps) => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
      {/* Mobile menu button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="lg:hidden"
        onClick={onMenuClick}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search... (Ctrl + K)" 
            className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
          />
        </div>
      </div>

      {/* Right side - Profile only */}
      <div className="flex items-center ml-auto">
        <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
          <span className="text-sm font-semibold">{userName}</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
