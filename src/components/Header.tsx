import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <svg 
              viewBox="0 0 24 24" 
              className="h-8 w-8 text-sky-500"
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
            <span className="ml-2 text-xl font-bold text-foreground">Classplus</span>
          </div>
        </Link>

        {/* CTA Button */}
        <button className="button-gradient rounded-lg px-6 py-2.5 font-medium text-primary-foreground transition-all hover:opacity-90 button-shadow">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
