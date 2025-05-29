
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/our5i", label: "Our 5i" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/079f9a40-6150-48c3-a07e-384d5bed5764.png" 
              alt="Aakam360 Logo" 
              className="h-12 w-auto floating"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-blue-400 neon-text"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full glowing"></div>
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
