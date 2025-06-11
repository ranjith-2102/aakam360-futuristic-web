
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Our5i = () => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const pillars = [
    {
      name: "Industry",
      icon: "🏭",
      bgClass: "section-dark",
      description: "Connecting academia with leading industry partners",
      details: "We bridge the gap between theoretical knowledge and practical application by partnering with top-tier companies across various sectors, ensuring our students gain real-world experience and industry-relevant skills.",
      stats: "50+ Industry Partners",
      features: ["Industry Partnerships", "Real-world Projects", "Expert Mentorship", "Technology Transfer"]
    },
    {
      name: "Institution",
      icon: "🎓",
      bgClass: "section-light",
      description: "Excellence in academic collaboration and research",
      details: "Our institutional framework provides a robust foundation for academic excellence, fostering collaborative research initiatives that advance knowledge and drive innovation across multiple disciplines.",
      stats: "100+ Research Scholars",
      features: ["Academic Excellence", "Research Collaboration", "Knowledge Sharing", "Educational Innovation"]
    },
    {
      name: "Incubation",
      icon: "🚀",
      bgClass: "section-dark",
      description: "Nurturing startups and entrepreneurial ventures",
      details: "State-of-the-art incubation facilities that transform innovative ideas into successful business ventures, providing comprehensive support from ideation to market entry.",
      stats: "200+ Startups Supported",
      features: ["Startup Support", "Funding Assistance", "Business Mentoring", "Market Access"]
    },
    {
      name: "Innovation",
      icon: "💡",
      bgClass: "section-light",
      description: "Fostering cutting-edge research and development",
      details: "Innovation labs equipped with advanced technology to drive breakthrough research and development projects that push the boundaries of what's possible.",
      stats: "15,000 sqft R&D Space",
      features: ["R&D Labs", "Patent Support", "Technology Development", "Research Grants"]
    },
    {
      name: "Internship",
      icon: "💼",
      bgClass: "section-dark",
      description: "Providing hands-on experience and skill development",
      details: "Comprehensive internship programs that provide students with real-world experience and industry exposure, bridging the gap between academic learning and professional practice.",
      stats: "2000+ Student Pool",
      features: ["Skill Development", "Industry Exposure", "Career Guidance", "Professional Network"]
    }
  ];

  const overallStats = [
    { value: "2000+", label: "Student Pool" },
    { value: "100+", label: "Research Scholars" },
    { value: "50+", label: "Industry Partners" },
    { value: "200+", label: "Active Projects" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 section-dark">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold heading-display mb-8 slide-in-left">
            Our <span className="accent-cyan">5i</span> Framework
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 slide-in-right body-large leading-relaxed">
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
              <Card key={index} className="studio-card p-6 text-center">
                <div className="text-4xl font-bold heading-xl accent-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Sections */}
      <div className="space-y-0">
        {pillars.map((pillar, index) => (
          <section 
            key={index} 
            className={`py-20 px-6 ${pillar.bgClass}`}
          >
            <div className="container mx-auto">
              <Card 
                className="max-w-6xl mx-auto studio-card p-12 cursor-pointer"
                onMouseEnter={() => setSelectedPillar(index)}
                onMouseLeave={() => setSelectedPillar(null)}
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'md:grid-flow-col-dense'
                }`}>
                  <div className={index % 2 === 0 ? 'order-1' : 'order-2 md:order-1'}>
                    <div className="flex items-center mb-6">
                      <div className="text-6xl mr-6">{pillar.icon}</div>
                      <div>
                        <h2 className="text-4xl font-bold heading-xl mb-2">
                          {pillar.name}
                        </h2>
                        <div className="text-sm accent-cyan font-medium">
                          {pillar.stats}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-6 body-large leading-relaxed">
                      {pillar.description}
                    </p>
                    
                    <p className="text-foreground mb-8 body-large leading-relaxed">
                      {pillar.details}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {pillar.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="bg-muted/30 p-4 rounded-lg text-center text-foreground hover:bg-accent/20 hover:text-accent transition-all duration-300 font-medium"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={index % 2 === 0 ? 'order-2' : 'order-1 md:order-2'}>
                    <div className={`bg-muted/20 p-12 rounded-xl border border-border/50 transition-transform duration-500 ${
                      selectedPillar === index ? 'scale-105 bg-accent/10' : ''
                    }`}>
                      <div className="text-center">
                        <div className="text-8xl mb-6">{pillar.icon}</div>
                        <h3 className="text-2xl font-bold heading-xl">{pillar.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        ))}
      </div>

      {/* Ecosystem Integration */}
      <section className="py-20 px-6 section-light">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold heading-xl mb-6">
            Integrated Ecosystem
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="studio-card p-8">
              <p className="text-xl text-muted-foreground mb-8 body-large leading-relaxed">
                Our 5i framework creates a synergistic ecosystem where each pillar strengthens and supports the others, 
                creating an environment of continuous innovation and growth.
              </p>
              <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
                {pillars.map((pillar, index) => (
                  <div key={index} className="relative">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-2xl shadow-lg parallax-float border border-accent/30">
                      {pillar.icon}
                    </div>
                    {index < pillars.length - 1 && (
                      <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 accent-cyan text-2xl hidden md:block">
                        →
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Our5i;
