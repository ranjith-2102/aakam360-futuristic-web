
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-subtle">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="slide-in-left">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              aakam<span className="text-gradient">360</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
              Innovate and Inspire
            </p>
          </div>
          
          <div className="slide-in-right">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              Bridging the gap between industry and academia through cutting-edge collaboration, 
              innovation, and transformative experiences that shape the future.
            </p>
          </div>

          <div className="fade-in">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Apply for Internship
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <Card
                key={index}
                className="glass-card p-8 text-center card-hover cursor-pointer border-0"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className={`text-3xl font-bold text-gray-900 mb-2 transition-colors duration-300 ${
                  hoveredStat === index ? 'text-blue-600' : ''
                }`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5i Pillars Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Our 5i Framework
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Five interconnected pillars driving innovation and excellence
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {pillars.map((pillar, index) => (
              <Card key={index} className="glass-card p-6 text-center card-hover group cursor-pointer border-0">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {pillar.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/our5i">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg">
                Explore Our 5i →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Inspiring Leadership
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Watch our vision for the future of innovation and collaboration
          </p>
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card p-8 card-hover border-0">
              <div className="aspect-video bg-gradient-blue rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-white text-xl font-semibold">Udaya Sankar's Inspiring Speech</p>
                  <p className="text-blue-200 mt-2">Vision for the Future</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Alliance Partners */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Our Alliance Partners
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Collaborating with industry leaders to drive innovation
          </p>
          <div className="flex justify-center items-center space-x-8 overflow-hidden">
            {alliances.map((alliance, index) => (
              <Card key={index} className="glass-card p-6 text-center card-hover border-0" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-4xl mb-3">{alliance.logo}</div>
                <p className="text-gray-900 font-semibold">{alliance.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient-blue">
        <div className="container mx-auto text-center">
          <div className="glass-card p-8 rounded-lg">
            <p className="text-gray-700 text-lg mb-4">
              © 2024 Aakam360. Innovating the future through collaboration.
            </p>
            <div className="flex justify-center space-x-6 text-gray-600">
              <Link to="/contact" className="hover:text-blue-600 transition-colors">
                Contact Us
              </Link>
              <span>|</span>
              <span>Pullipalayam, Sankari, Salem</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
