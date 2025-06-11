
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { Card } from "@/components/ui/card";
import { Factory, GraduationCap, Rocket, Lightbulb, Briefcase } from "lucide-react";

const Our5i = () => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const pillars = [
    {
      name: "Industry",
      icon: Factory,
      bgClass: "section-navy",
      description: "Connecting academia with leading industry partners",
      details: "We bridge the gap between theoretical knowledge and practical application by partnering with top-tier companies across various sectors, ensuring our students gain real-world experience and industry-relevant skills.",
      stats: "300+ Corporate Collaborations",
      expandedStats: "50+ Industry Partners",
      features: ["Industry Partnerships", "Real-world Projects", "Expert Mentorship", "Technology Transfer"]
    },
    {
      name: "Institution",
      icon: GraduationCap,
      bgClass: "section-light",
      description: "Excellence in academic collaboration and research",
      details: "Our institutional framework provides a robust foundation for academic excellence, fostering collaborative research initiatives that advance knowledge and drive innovation across multiple disciplines.",
      stats: "Academic Excellence Network",
      expandedStats: "100+ Research Scholars",
      features: ["Academic Excellence", "Research Collaboration", "Knowledge Sharing", "Educational Innovation"]
    },
    {
      name: "Incubation",
      icon: Rocket,
      bgClass: "section-accent",
      description: "Nurturing startups and entrepreneurial ventures",
      details: "State-of-the-art incubation facilities that transform innovative ideas into successful business ventures, providing comprehensive support from ideation to market entry.",
      stats: "Startup Success Stories",
      expandedStats: "200+ Startups Supported",
      features: ["Startup Support", "Funding Assistance", "Business Mentoring", "Market Access"]
    },
    {
      name: "Innovation",
      icon: Lightbulb,
      bgClass: "section-light",
      description: "Fostering cutting-edge research and development",
      details: "Innovation labs equipped with advanced technology to drive breakthrough research and development projects that push the boundaries of what's possible.",
      stats: "Research & Development Hub",
      expandedStats: "15,000 sqft R&D Space",
      features: ["R&D Labs", "Patent Support", "Technology Development", "Research Grants"]
    },
    {
      name: "Internship",
      icon: Briefcase,
      bgClass: "section-navy",
      description: "Providing hands-on experience and skill development",
      details: "Comprehensive internship programs that provide students with real-world experience and industry exposure, bridging the gap between academic learning and professional practice.",
      stats: "Professional Development",
      expandedStats: "2000+ Student Pool",
      features: ["Skill Development", "Industry Exposure", "Career Guidance", "Professional Network"]
    }
  ];

  const overallStats = [
    { value: "2000+", label: "Student Pool", color: "accent-gold" },
    { value: "100+", label: "Research Scholars", color: "accent-electric" },
    { value: "50+", label: "Industry Partners", color: "accent-gold" },
    { value: "200+", label: "Active Projects", color: "accent-electric" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 section-navy relative overflow-hidden">
        <ParticleBackground className="opacity-30" particleCount={60} />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold heading-display mb-8 slide-in-left text-white">
            Our <span className="accent-gold">5i</span> Framework
          </h1>
          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-12 slide-in-right body-large leading-relaxed">
            A comprehensive ecosystem that transforms ideas into reality through five interconnected pillars 
            of excellence, innovation, and collaboration.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 px-6 section-light">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {overallStats.map((stat, index) => (
              <Card key={index} className="liquid-card p-6 text-center expand-card gpu-accelerated">
                <div className={`text-4xl font-bold heading-xl mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Sections with Enhanced Liquid Interactions */}
      <div className="space-y-0">
        {pillars.map((pillar, index) => {
          const IconComponent = pillar.icon;
          const isExpanded = expandedCard === index;
          return (
            <section 
              key={index} 
              className={`py-20 px-6 ${pillar.bgClass} ${pillar.bgClass === 'section-navy' || pillar.bgClass === 'section-accent' ? 'text-white' : ''}`}
            >
              <div className="container mx-auto">
                <Card 
                  className={`max-w-6xl mx-auto liquid-card p-12 cursor-pointer transition-all duration-500 gpu-accelerated ${
                    isExpanded ? 'scale-105 shadow-2xl' : ''
                  } ${pillar.bgClass === 'section-navy' || pillar.bgClass === 'section-accent' ? 'bg-white/10 border-white/20' : ''}`}
                  onMouseEnter={() => setSelectedPillar(index)}
                  onMouseLeave={() => setSelectedPillar(null)}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                >
                  <div className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 0 ? '' : 'md:grid-flow-col-dense'
                  }`}>
                    <div className={index % 2 === 0 ? 'order-1' : 'order-2 md:order-1'}>
                      <div className="flex items-center mb-6">
                        <div className="mr-6">
                          <IconComponent className="w-12 h-12 text-accent icon-morph" />
                        </div>
                        <div>
                          <h2 className="text-4xl font-bold heading-xl mb-2">
                            {pillar.name}
                          </h2>
                          <div className="text-sm accent-gold font-medium transition-all duration-300">
                            {isExpanded ? pillar.expandedStats : pillar.stats}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-xl text-muted-foreground mb-6 body-large leading-relaxed">
                        {pillar.description}
                      </p>
                      
                      <div className={`transition-all duration-500 overflow-hidden ${
                        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-foreground mb-8 body-large leading-relaxed">
                          {pillar.details}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {pillar.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className={`bg-muted/30 p-4 rounded-xl text-center font-medium transition-all duration-300 expand-card ${
                              pillar.bgClass === 'section-navy' || pillar.bgClass === 'section-accent' 
                                ? 'bg-white/10 text-white hover:bg-gold/20 hover:text-gold' 
                                : 'text-foreground hover:bg-accent/20 hover:text-accent'
                            }`}
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={index % 2 === 0 ? 'order-2' : 'order-1 md:order-2'}>
                      <div className={`bg-muted/20 p-12 rounded-xl border border-border/50 transition-all duration-500 gpu-accelerated ${
                        selectedPillar === index ? 'scale-105 bg-accent/10' : ''
                      } ${
                        pillar.bgClass === 'section-navy' || pillar.bgClass === 'section-accent' 
                          ? 'bg-white/5 border-white/20' 
                          : ''
                      }`}>
                        <div className="text-center">
                          <IconComponent className="w-20 h-20 mx-auto mb-6 text-accent particle-float" />
                          <h3 className="text-2xl font-bold heading-xl">{pillar.name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </section>
          );
        })}
      </div>

      {/* Ecosystem Integration */}
      <section className="py-20 px-6 section-light">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold heading-xl mb-6">
            Integrated Ecosystem
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="liquid-card p-8">
              <p className="text-xl text-muted-foreground mb-8 body-large leading-relaxed">
                Our 5i framework creates a synergistic ecosystem where each pillar strengthens and supports the others, 
                creating an environment of continuous innovation and growth.
              </p>
              <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
                {pillars.map((pillar, index) => {
                  const IconComponent = pillar.icon;
                  return (
                    <div key={index} className="relative">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center shadow-lg particle-float border border-accent/30 gpu-accelerated">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                      {index < pillars.length - 1 && (
                        <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 accent-gold text-2xl hidden md:block">
                          →
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Our5i;

