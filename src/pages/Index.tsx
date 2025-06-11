import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Zap, Users, Microscope, Factory, GraduationCap, Rocket, Lightbulb, Briefcase, DollarSign, Shield, Settings, FlaskConical, BarChart3, Cloud } from "lucide-react";
const Index = () => {
  const [counters, setCounters] = useState({
    workspace: 0,
    speed: 0,
    students: 0,
    scholars: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const statistics = [{
    value: 15000,
    suffix: "sqft",
    label: "Workspace",
    key: "workspace",
    icon: Building2
  }, {
    value: 320,
    suffix: "Mbps",
    label: "Internet Speed",
    key: "speed",
    icon: Zap
  }, {
    value: 2000,
    suffix: "+",
    label: "Student Pool",
    key: "students",
    icon: Users
  }, {
    value: 100,
    suffix: "+",
    label: "Research Scholars",
    key: "scholars",
    icon: Microscope
  }];
  const pillars = [{
    name: "Industry",
    icon: Factory,
    description: "Bridging academia with leading industry partners",
    highlight: "300+ Corporate Collaborations",
    stat: "50+ Partners"
  }, {
    name: "Institution",
    icon: GraduationCap,
    description: "Excellence in academic research and innovation",
    highlight: "Academic excellence",
    stat: "100+ Scholars"
  }, {
    name: "Incubation",
    icon: Rocket,
    description: "Nurturing startups and entrepreneurial ventures",
    highlight: "Startup ecosystem",
    stat: "200+ Startups"
  }, {
    name: "Innovation",
    icon: Lightbulb,
    description: "Cutting-edge research and development",
    highlight: "Breakthrough research",
    stat: "15k sqft R&D"
  }, {
    name: "Internship",
    icon: Briefcase,
    description: "Hands-on experience and skill development",
    highlight: "Professional growth",
    stat: "2000+ Students"
  }];
  const alliances = [{
    name: "FintechGie",
    icon: DollarSign
  }, {
    name: "K7 Computing",
    icon: Shield
  }, {
    name: "TechCorp",
    icon: Settings
  }, {
    name: "InnovateLab",
    icon: FlaskConical
  }, {
    name: "DataFlow",
    icon: BarChart3
  }, {
    name: "CloudSync",
    icon: Cloud
  }];
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
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section with Building Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-navy">
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/079f9a40-6150-48c3-a07e-384d5bed5764.png" alt="Aakam360 Building" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-navy/70"></div>
        </div>
        
        <ParticleBackground className="opacity-30 z-10" particleCount={80} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-navy z-20 bg-[#225b22]"></div>
        
        <div className="container mx-auto px-6 text-center relative z-30">
          <div className="slide-in-left max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold heading-display mb-6 leading-tight text-white">
              Aakam<span className="accent-gold">360</span>
            </h1>
            <h2 className="text-3xl md:text-4xl heading-xl mb-8 text-white/90 typewriter">
              Innovate and Inspire
            </h2>
          </div>
          
          <div className="slide-in-right max-w-3xl mx-auto">
            <p className="text-xl body-large mb-12 text-white/80 leading-relaxed">
              Bridging the gap between industry and academia through cutting-edge collaboration, 
              innovation, and transformative experiences that shape the future.
            </p>
          </div>

          <div className="fade-in-up">
            <Link to="/our5i">
              <Button className="cta-gold text-lg float-animation will-change-transform">
                Explore 5i Model
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section with Count-up Animation */}
      <section id="stats-section" className="py-20 px-6 section-light">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            return <Card key={index} className="liquid-card p-8 text-center gpu-accelerated" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <IconComponent className="w-8 h-8 mx-auto mb-4 text-accent icon-morph" />
                  <div className={`text-4xl font-bold heading-xl accent-electric mb-2 ${isVisible ? 'count-up' : ''}`}>
                    {counters[stat.key]}{stat.suffix}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* 5i Pillars Section with Interactive Grid */}
      <section className="py-20 px-6 section-navy">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold heading-xl text-center mb-4 text-white">
            Our 5i Framework
          </h2>
          <p className="text-xl text-white/80 text-center mb-16 max-w-3xl mx-auto body-large">
            Five interconnected pillars driving innovation and excellence
          </p>
          
          <div className="pillars-grid">
            {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return <Card key={index} className="liquid-card p-6 text-center group expand-card gpu-accelerated">
                  <IconComponent className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-accent icon-morph" />
                  <h3 className="text-xl font-bold heading-xl mb-3 group-hover:text-gold transition-colors text-foreground">
                    {pillar.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 body-large">
                    {pillar.description}
                  </p>
                  <div className="text-xs accent-gold font-medium mb-2">
                    {pillar.highlight}
                  </div>
                  <div className="text-sm font-bold accent-electric">
                    {pillar.stat}
                  </div>
                </Card>;
          })}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/our5i">
              <Button className="cta-secondary float-animation">
                Learn More →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 section-light">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold heading-xl mb-4">
            Vision for Innovation
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto body-large">
            Watch our leadership's inspiring vision for the future of collaboration
          </p>
          <div className="max-w-4xl mx-auto">
            <Card className="liquid-card p-8">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-navy/20 rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-accent icon-morph" />
                  </div>
                  <p className="text-foreground text-xl font-semibold heading-xl">Udaya Sankar's Vision</p>
                  <p className="text-muted-foreground mt-2 body-large">Leadership in Innovation</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Alliance Partners with Momentum Scrolling */}
      <section className="py-20 px-6 section-accent">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold heading-xl text-center mb-4 text-white">
            Alliance Partners
          </h2>
          <p className="text-xl text-white/80 text-center mb-12 body-large">
            Collaborating with industry leaders to drive innovation
          </p>
          
          <div className="logo-carousel">
            {[...alliances, ...alliances].map((alliance, index) => {
            const IconComponent = alliance.icon;
            return <div key={index} className="logo-item gpu-accelerated">
                  <Card className="liquid-card p-6 text-center min-w-[200px] bg-white/10 border-white/20">
                    <IconComponent className="w-8 h-8 mx-auto mb-3 text-gold icon-morph" />
                    <p className="text-white font-semibold">{alliance.name}</p>
                  </Card>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 section-navy border-t border-gold/20">
        <div className="container mx-auto text-center">
          <div className="liquid-card p-8 rounded-lg bg-white/5 border-white/10">
            <p className="text-white/80 text-lg mb-4 body-large">
              © 2024 Aakam360. Innovating the future through collaboration.
            </p>
            <div className="flex justify-center space-x-6 text-white/60">
              <Link to="/contact" className="hover:text-gold transition-colors body-large">
                Contact Us
              </Link>
              <span>|</span>
              <span className="body-large">Pullipalayam, Sankari, Salem</span>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;