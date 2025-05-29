
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const statistics = [
    { value: "15,000", label: "sqft Workspace", icon: "🏢" },
    { value: "320", label: "Mbps Speed", icon: "⚡" },
    { value: "2000+", label: "Student Pool", icon: "👥" },
    { value: "100+", label: "Research Scholars", icon: "🔬" },
  ];

  const pillars = [
    { name: "Industry", icon: "🏭", description: "Connect with leading companies" },
    { name: "Institution", icon: "🎓", description: "Academic excellence" },
    { name: "Incubation", icon: "🚀", description: "Startup ecosystem" },
    { name: "Innovation", icon: "💡", description: "Cutting-edge research" },
    { name: "Internship", icon: "💼", description: "Real-world experience" },
  ];

  const alliances = [
    { name: "FintechGie", logo: "💰" },
    { name: "K7 Computing", logo: "🔒" },
    { name: "TechCorp", logo: "⚙️" },
    { name: "InnovateLab", logo: "🧪" },
  ];

  return (
    <div className="min-h-screen bg-cyber-gradient overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="slide-in-left">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 neon-text">
              aakam<span className="text-gradient">360</span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-300 mb-8 floating">
              innovate and inspire
            </p>
          </div>
          
          <div className="slide-in-right">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Bridging the gap between industry and academia through cutting-edge collaboration, 
              innovation, and transformative experiences that shape the future.
            </p>
          </div>

          {/* Floating CTA Button */}
          <div className="floating">
            <Button className="glass-morphism text-white border-blue-400 hover:bg-blue-500/20 px-8 py-4 text-lg rounded-full glowing transform transition-all duration-300 hover:scale-110">
              Apply Internship
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <Card
                key={index}
                className="glass-morphism p-6 text-center card-3d cursor-pointer"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className={`text-3xl font-bold text-white mb-2 ${hoveredStat === index ? 'neon-text' : ''}`}>
                  {stat.value}
                </div>
                <div className="text-blue-300">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5i Pillars Preview */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12 neon-text">
            Our 5i Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {pillars.map((pillar, index) => (
              <Card key={index} className="glass-morphism p-6 text-center card-3d group cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {pillar.name}
                </h3>
                <p className="text-gray-300 text-sm">{pillar.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/our5i">
              <Button variant="outline" className="glass-morphism text-blue-400 border-blue-400 hover:bg-blue-500/20">
                Explore Our 5i →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8 neon-text">
            Inspiring Leadership
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="glass-morphism p-8 card-3d">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center glowing">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-white text-xl">Udaya Sankar's Inspiring Speech</p>
                  <p className="text-gray-300 mt-2">Vision for the Future</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Alliance Carousel */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12 neon-text">
            Our Alliance Partners
          </h2>
          <div className="flex justify-center items-center space-x-8 overflow-hidden">
            {alliances.map((alliance, index) => (
              <Card key={index} className="glass-morphism p-6 text-center rotating card-3d">
                <div className="text-4xl mb-2">{alliance.logo}</div>
                <p className="text-white font-semibold">{alliance.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="glass-morphism p-6 rounded-lg floating">
            <p className="text-gray-300">
              © 2024 Aakam360. Innovating the future through collaboration.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
                Contact Us
              </Link>
              <span className="text-gray-500">|</span>
              <span className="text-gray-300">Pullipalayam, Sankari, Salem</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
