
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ThreeScene } from "@/components/ThreeScene";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Zap, Users, Microscope, Factory, GraduationCap, Rocket, Lightbulb, Briefcase, ArrowRight, Play } from "lucide-react";

const Index = () => {
  const scrollProgress = useScrollProgress();
  
  const [counters, setCounters] = useState({
    workspace: 0,
    speed: 0,
    students: 0,
    scholars: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  const statistics = [
    {
      value: 15000,
      suffix: "sqft",
      label: "Workspace",
      key: "workspace",
      icon: Building2
    },
    {
      value: 320,
      suffix: "Mbps",
      label: "Internet Speed",
      key: "speed",
      icon: Zap
    },
    {
      value: 2000,
      suffix: "+",
      label: "Student Pool",
      key: "students",
      icon: Users
    },
    {
      value: 100,
      suffix: "+",
      label: "Research Scholars",
      key: "scholars",
      icon: Microscope
    }
  ];

  const pillars = [
    {
      name: "Industry",
      icon: Factory,
      description: "Bridging academia with leading industry partners",
      highlight: "300+ Corporate Collaborations"
    },
    {
      name: "Institution",
      icon: GraduationCap,
      description: "Excellence in academic research and innovation",
      highlight: "Academic excellence"
    },
    {
      name: "Incubation",
      icon: Rocket,
      description: "Nurturing startups and entrepreneurial ventures",
      highlight: "Startup ecosystem"
    },
    {
      name: "Innovation",
      icon: Lightbulb,
      description: "Cutting-edge research and development",
      highlight: "Breakthrough research"
    },
    {
      name: "Internship",
      icon: Briefcase,
      description: "Hands-on experience and skill development",
      highlight: "Professional growth"
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      statistics.forEach(stat => {
        let current = 0;
        const increment = stat.value / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            setCounters(prev => ({
              ...prev,
              [stat.key]: stat.value
            }));
            clearInterval(timer);
          } else {
            setCounters(prev => ({
              ...prev,
              [stat.key]: Math.floor(current)
            }));
          }
        }, 20);
      });
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      });
    });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* 3D Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ThreeScene scrollProgress={scrollProgress} />
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="text-center text-white" style={{ 
            opacity: Math.max(0, 1 - scrollProgress * 3),
            transform: `translateY(${scrollProgress * 100}px)`
          }}>
            <h1 className="text-4xl md:text-6xl font-bold heading-display mb-4 drop-shadow-lg">
              Innovation Redefined
            </h1>
            <p className="text-xl md:text-2xl heading-lg mb-8 drop-shadow-md">
              Where Industry Meets Academia
            </p>
            <div className="pointer-events-auto">
              <Link to="/our5i">
                <Button className="btn-primary text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700">
                  Explore Our Vision
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections - visible when scrolled */}
      <div style={{ 
        opacity: Math.max(0, scrollProgress * 2 - 0.5),
        transform: `translateY(${Math.max(0, (1 - scrollProgress) * 100)}px)`
      }}>
        {/* Statistics Section */}
        <section id="stats-section" className="py-24 px-6 section-gradient">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold heading-xl mb-6 fade-in-up">
                Powering Innovation
              </h2>
              <p className="text-xl body-large text-muted-foreground max-w-2xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
                Our ecosystem supports thousands of innovators and researchers worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card 
                    key={index} 
                    className="modern-card p-8 text-center scale-in gpu-accelerated" 
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <IconComponent className="w-12 h-12 mx-auto mb-6 text-blue-600" />
                    <div className="text-4xl lg:text-5xl font-bold heading-xl text-primary mb-2">
                      {counters[stat.key]}{stat.suffix}
                    </div>
                    <div className="text-muted-foreground font-medium body-small uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5i Framework Section */}
        <section className="py-24 px-6 section-dark">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold heading-xl mb-6 text-white fade-in-up">
                Our 5i Framework
              </h2>
              <p className="text-xl body-large text-white/80 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
                Five interconnected pillars driving innovation and excellence across industries
              </p>
            </div>
            
            <div className="bento-grid">
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass p-8 group hover:bg-white/20 transition-all duration-500 scale-in gpu-accelerated" 
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <IconComponent className="w-12 h-12 mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold heading-lg mb-4 text-white group-hover:text-blue-300 transition-colors">
                      {pillar.name}
                    </h3>
                    <p className="body-large text-white/80 mb-4 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div className="text-sm text-blue-400 font-medium">
                      {pillar.highlight}
                    </div>
                  </Card>
                );
              })}
            </div>
            
            <div className="text-center mt-16">
              <Link to="/our5i">
                <Button className="btn-secondary text-lg px-8 py-4">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 px-6 section-gradient">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="fade-in-left">
                  <h2 className="text-4xl md:text-5xl font-bold heading-xl mb-6">
                    Vision for Innovation
                  </h2>
                  <p className="text-xl body-large text-muted-foreground mb-8 leading-relaxed">
                    Watch our leadership's inspiring vision for the future of collaboration 
                    and how we're shaping tomorrow's innovators today.
                  </p>
                  <Button className="btn-primary text-lg px-8 py-4">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Story
                  </Button>
                </div>
                
                <div className="scale-in" style={{animationDelay: '0.3s'}}>
                  <Card className="modern-card p-8 aspect-video bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center gentle-float">
                          <Play className="w-10 h-10 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold heading-lg text-primary mb-2">
                          Udaya Sankar's Vision
                        </h3>
                        <p className="body-large text-muted-foreground">
                          Leadership in Innovation
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 section-dark border-t border-white/10">
          <div className="container mx-auto text-center">
            <div className="modern-card glass p-8 border-white/20">
              <p className="text-white/80 text-lg mb-4 body-large">
                © 2024 Aakam360. Innovating the future through collaboration.
              </p>
              <div className="flex justify-center space-x-6 text-white/60">
                <Link to="/contact" className="hover:text-white transition-colors body-large">
                  Contact Us
                </Link>
                <span>|</span>
                <span className="body-large">Pullipalayam, Sankari, Salem</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
