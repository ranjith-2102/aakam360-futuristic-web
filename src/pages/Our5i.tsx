
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Our5i = () => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const pillars = [
    {
      name: "Industry",
      icon: "🏭",
      color: "from-orange-500 to-red-500",
      description: "Connecting academia with leading industry partners",
      details: "We bridge the gap between theoretical knowledge and practical application by partnering with top-tier companies across various sectors.",
      features: ["Industry Partnerships", "Real-world Projects", "Expert Mentorship", "Technology Transfer"]
    },
    {
      name: "Institution",
      icon: "🎓",
      color: "from-blue-500 to-purple-500",
      description: "Excellence in academic collaboration and research",
      details: "Our institutional framework provides a robust foundation for academic excellence and collaborative research initiatives.",
      features: ["Academic Excellence", "Research Collaboration", "Knowledge Sharing", "Educational Innovation"]
    },
    {
      name: "Incubation",
      icon: "🚀",
      color: "from-green-500 to-teal-500",
      description: "Nurturing startups and entrepreneurial ventures",
      details: "State-of-the-art incubation facilities that transform innovative ideas into successful business ventures.",
      features: ["Startup Support", "Funding Assistance", "Business Mentoring", "Market Access"]
    },
    {
      name: "Innovation",
      icon: "💡",
      color: "from-yellow-500 to-orange-500",
      description: "Fostering cutting-edge research and development",
      details: "Innovation labs equipped with advanced technology to drive breakthrough research and development projects.",
      features: ["R&D Labs", "Patent Support", "Technology Development", "Research Grants"]
    },
    {
      name: "Internship",
      icon: "💼",
      color: "from-purple-500 to-pink-500",
      description: "Providing hands-on experience and skill development",
      details: "Comprehensive internship programs that provide students with real-world experience and industry exposure.",
      features: ["Skill Development", "Industry Exposure", "Career Guidance", "Professional Network"]
    }
  ];

  const stats = [
    { value: "2000+", label: "Student Pool" },
    { value: "100+", label: "Research Scholars" },
    { value: "50+", label: "Industry Partners" },
    { value: "200+", label: "Active Projects" }
  ];

  return (
    <div className="min-h-screen bg-cyber-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 neon-text slide-in-left">
            Our 5i Framework
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 slide-in-right">
            A comprehensive ecosystem that transforms ideas into reality through five interconnected pillars 
            of excellence, innovation, and collaboration.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-morphism p-6 text-center card-3d">
                <div className="text-4xl font-bold text-white neon-text mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-300">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="space-y-16">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className={`fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card 
                  className="glass-morphism p-8 card-3d cursor-pointer overflow-hidden relative"
                  onMouseEnter={() => setSelectedPillar(index)}
                  onMouseLeave={() => setSelectedPillar(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${pillar.color} opacity-10 transition-opacity duration-300 ${
                    selectedPillar === index ? 'opacity-20' : ''
                  }`}></div>
                  
                  <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                      <div className="flex items-center mb-6">
                        <div className="text-6xl mr-4 floating">{pillar.icon}</div>
                        <h2 className="text-4xl font-bold text-white neon-text">
                          {pillar.name}
                        </h2>
                      </div>
                      <p className="text-xl text-gray-300 mb-6">
                        {pillar.description}
                      </p>
                      <p className="text-gray-400 mb-8">
                        {pillar.details}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {pillar.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="glass-morphism p-3 rounded-lg text-center text-white hover:bg-white/10 transition-all duration-300"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                      <div className="perspective-1000">
                        <div className={`glass-morphism p-12 rounded-xl transform-3d ${
                          selectedPillar === index ? 'rotate-y-12' : ''
                        } transition-transform duration-500`}>
                          <div className="text-center">
                            <div className="text-8xl mb-6 glowing">{pillar.icon}</div>
                            <div className={`w-full h-2 bg-gradient-to-r ${pillar.color} rounded-full mb-4`}></div>
                            <h3 className="text-2xl font-bold text-white">{pillar.name}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12 neon-text">
            Integrated Ecosystem
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="glass-morphism p-8">
              <p className="text-xl text-gray-300 mb-8">
                Our 5i framework creates a synergistic ecosystem where each pillar strengthens and supports the others, 
                creating an environment of continuous innovation and growth.
              </p>
              <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
                {pillars.map((pillar, index) => (
                  <div key={index} className="relative">
                    <div className="w-16 h-16 glass-morphism rounded-full flex items-center justify-center text-2xl floating">
                      {pillar.icon}
                    </div>
                    {index < pillars.length - 1 && (
                      <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-blue-400 text-2xl">
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
