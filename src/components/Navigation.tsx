
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    {
      path: "/",
      label: "Home"
    },
    {
      path: "/about",
      label: "About"
    },
    {
      path: "/our5i",
      label: "Our 5i"
    },
    {
      path: "/newsletter",
      label: "Newsletter"
    },
    {
      path: "/contact",
      label: "Contact"
    }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/a7a46f46-b6a7-4c05-9388-d99ba5823d85.png" 
                alt="Aakam360 Logo" 
                className="h-12 w-auto object-contain" 
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(item => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`relative px-6 py-3 rounded-xl transition-all duration-300 font-medium body-large ${
                  location.pathname === item.path 
                    ? "text-primary bg-primary/10" 
                    : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
