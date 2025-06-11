import { Link, useLocation } from "react-router-dom";
const Navigation = () => {
  const location = useLocation();
  const navItems = [{
    path: "/",
    label: "Home"
  }, {
    path: "/our5i",
    label: "Our 5i"
  }, {
    path: "/contact",
    label: "Contact"
  }];
  return <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/lovable-uploads/4e05b345-ae74-4eb4-b538-84069c5f2573.png" alt="Aakam360 Logo" className="h-10 w-auto" />
              
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.path} to={item.path} className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium ${location.pathname === item.path ? "text-accent bg-accent/10" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}>
                {item.label}
                {location.pathname === item.path && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></div>}
              </Link>)}
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;