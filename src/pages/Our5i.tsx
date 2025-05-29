
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Our5i = () => {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const pillars = [
    {
      name: "Industry",
      icon: "🏭",
      color: "bg-orange-50 border-orange-200",
      description: "Connecting academia with leading industry partners",
      details: "We bridge the gap between theoretical knowledge and practical application by partnering with top-tier companies across various sectors.",
      features: ["Industry Partnerships", "Real-world Projects", "Expert Mentorship", "Technology Transfer"]
    },
    {
      name: "Institution",
      icon: "🎓",
      color: "bg-blue-50 border-blue-200",
      description: "Excellence in academic collaboration and research",
      details: "Our institutional framework provides a robust foundation for academic excellence and collaborative research initiatives.",
      features: ["Academic Excellence", "Research Collaboration", "Knowledge Sharing", "Educational Innovation"]
    },
    {
      name: "Incubation",
      icon: "🚀",
      color: "bg-green-50 border-green-200",
      description: "Nurturing startups and entrepreneurial ventures",
      details: "State-of-the-art incubation facilities that transform innovative ideas into successful business ventures.",
      features: ["Startup Support", "Funding Assistance", "Business Mentoring", "Market Access"]
    },
    {
      name: "Innovation",
      icon: "💡",
      color: "bg-yellow-50 border-yellow-200",
      description: "Fostering cutting-edge research and development",
      details: "Innovation labs equipped with advanced technology to drive breakthrough research and development projects.",
      features: ["R&D Labs", "Patent Support", "Technology Development", "Research Grants"]
    },
    {
      name: "Internship",
      icon: "💼",
      color: "bg-purple-50 border-purple-200",
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 slide-in-left">
            Our 5i Framework
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 slide-in-right leading-relaxed">
            A comprehensive ecosystem that transforms ideas into reality through five interconnected pillars 
            of excellence, innovation, and collaboration.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card p-6 text-center card-hover border-0">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="space-y-20">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className={`fade-in-up ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} py-16 -mx-6 px-6`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card 
                  className="max-w-6xl mx-auto glass-card p-12 card-hover cursor-pointer border-0"
                  onMouseEnter={() => setSelectedPillar(index)}
                  onMouseLeave={() => setSelectedPillar(null)}
                >
                  <div className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 0 ? '' : 'md:grid-flow-col-dense'
                  }`}>
                    <div className={index % 2 === 0 ? 'order-1' : 'order-2 md:order-1'}>
                      <div className="flex items-center mb-6">
                        <div className="text-6xl mr-6">{pillar.icon}</div>
                        <h2 className="text-4xl font-bold text-gray-900">
                          {pillar.name}
                        </h2>
                      </div>
                      <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                        {pillar.description}
                      </p>
                      <p className="text-gray-600 mb-8 leading-relaxed">
                        {pillar.details}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {pillar.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="bg-gray-50 p-4 rounded-lg text-center text-gray-800 hover:bg-blue-50 transition-colors duration-300 font-medium"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className={index % 2 === 0 ? 'order-2' : 'order-1 md:order-2'}>
                      <div className={`${pillar.color} p-12 rounded-xl border-2 transition-transform duration-500 ${
                        selectedPillar === index ? 'scale-105' : ''
                      }`}>
                        <div className="text-center">
                          <div className="text-8xl mb-6">{pillar.icon}</div>
                          <h3 className="text-2xl font-bold text-gray-900">{pillar.name}</h3>
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
      <section className="py-20 px-6 bg-gradient-blue">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Integrated Ecosystem
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card p-8 border-0">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Our 5i framework creates a synergistic ecosystem where each pillar strengthens and supports the others, 
                creating an environment of continuous innovation and growth.
              </p>
              <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
                {pillars.map((pillar, index) => (
                  <div key={index} className="relative">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg gentle-float">
                      {pillar.icon}
                    </div>
                    {index < pillars.length - 1 && (
                      <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-blue-600 text-2xl hidden md:block">
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
