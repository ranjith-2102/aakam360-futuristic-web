
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [counters, setCounters] = useState({ workspace: 0, speed: 0, students: 0, scholars: 0 });

  const statistics = [
    { value: 15000, suffix: "sqft", label: "Workspace", key: "workspace", icon: "🏢" },
    { value: 320, suffix: "Mbps", label: "Internet Speed", key: "speed", icon: "⚡" },
    { value: 2000, suffix: "+", label: "Student Pool", key: "students", icon: "👥" },
    { value: 100, suffix: "+", label: "Research Scholars", key: "scholars", icon: "🔬" },
  ];

  const pillars = [
    { 
      name: "Industry", 
      icon: "🏭", 
      description: "Bridging academia with leading industry partners",
      highlight: "Real-world collaboration"
    },
    { 
      name: "Institution", 
      icon: "🎓", 
      description: "Excellence in academic research and innovation",
      highlight: "Academic excellence"
    },
    { 
      name: "Incubation", 
      icon: "🚀", 
      description: "Nurturing startups and entrepreneurial ventures",
      highlight: "Startup ecosystem"
    },
    { 
      name: "Innovation", 
      icon: "💡", 
      description: "Cutting-edge research and development",
      highlight: "Breakthrough research"
    },
    { 
      name: "Internship", 
      icon: "💼", 
      description: "Hands-on experience and skill development",
      highlight: "Professional growth"
    },
  ];

  const alliances = [
    { name: "FintechGie", logo: "💰" },
    { name: "K7 Computing", logo: "🔒" },
    { name: "TechCorp", logo: "⚙️" },
    { name: "InnovateLab", logo: "🧪" },
    { name: "DataFlow", logo: "📊" },
    { name: "CloudSync", logo: "☁️" },
  ];

  useEffect(() => {
    const animateCounters = () => {
      statistics.forEach((stat) => {
        let current = 0;
        const increment = stat.value / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            setCounters(prev => ({ ...prev, [stat.key]: stat.value }));
            clearInterval(timer);
          } else {
            setCounters(prev => ({ ...prev, [stat.key]: Math.floor(current) }));
          }
        }, 20);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-10"></div>
        
        <div className="container mx-auto px-6 text-center relative z-20">
          <div className="slide-in-left max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold heading-display mb-6 leading-tight">
              Aakam<span className="accent-cyan">360</span>
            </h1>
            <h2 className="text-3xl md:text-4xl heading-xl mb-8 text-muted-foreground">
              Innovate and Inspire
            </h2>
          </div>
          
          <div className="slide-in-right max-w-3xl mx-auto">
            <p className="text-xl body-large mb-12 text-muted-foreground leading-relaxed">
              Bridging the gap between industry and academia through cutting-edge collaboration, 
              innovation, and transformative experiences that shape the future.
            </p>
          </div>

          <div className="fade-in-up">
            <Link to="/our5i">
              <Button className="cta-primary text-lg">
                Explore 5i Model
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats-section" className="py-20 px-6 section-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <Card
                key={index}
                className="studio-card p-8 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold heading-xl accent-cyan mb-2">
                  {counters[stat.key]}{stat.suffix}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5i Pillars Section */}
      <section className="py-20 px-6 section-light">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold heading-xl text-center mb-4">
            Our 5i Framework
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto body-large">
            Five interconnected pillars driving innovation and excellence
          </p>
          
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <Card key={index} className="studio-card p-6 text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold heading-xl mb-3 group-hover:text-accent transition-colors">
                  {pillar.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 body-large">
                  {pillar.description}
                </p>
                <div className="text-xs accent-cyan font-medium">
                  {pillar.highlight}
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/our5i">
              <Button className="cta-secondary">
                Learn More →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 section-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold heading-xl mb-4">
            Vision for Innovation
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto body-large">
            Watch our leadership's inspiring vision for the future of collaboration
          </p>
          <div className="max-w-4xl mx-auto">
            <Card className="studio-card p-8">
              <div className="aspect-video bg-gradient-to-br from-muted/50 to-background rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎥</div>
                  <p className="text-foreground text-xl font-semibold heading-xl">Udaya Sankar's Vision</p>
                  <p className="text-muted-foreground mt-2 body-large">Leadership in Innovation</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Alliance Partners */}
      <section className="py-20 px-6 section-light">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold heading-xl text-center mb-4">
            Alliance Partners
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 body-large">
            Collaborating with industry leaders to drive innovation
          </p>
          
          <div className="logo-carousel">
            {[...alliances, ...alliances].map((alliance, index) => (
              <div key={index} className="logo-item">
                <Card className="studio-card p-6 text-center min-w-[200px]">
                  <div className="text-4xl mb-3">{alliance.logo}</div>
                  <p className="text-foreground font-semibold">{alliance.name}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-background border-t border-border/50">
        <div className="container mx-auto text-center">
          <div className="studio-card p-8 rounded-lg">
            <p className="text-muted-foreground text-lg mb-4 body-large">
              © 2024 Aakam360. Innovating the future through collaboration.
            </p>
            <div className="flex justify-center space-x-6 text-muted-foreground">
              <Link to="/contact" className="hover:text-accent transition-colors body-large">
                Contact Us
              </Link>
              <span>|</span>
              <span className="body-large">Pullipalayam, Sankari, Salem</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
