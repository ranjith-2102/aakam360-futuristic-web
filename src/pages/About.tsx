import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const leadership = [
    {
      name: "Thirumoorthy Aarumugam",
      role: "Founder & CEO"
    },
    {
      name: "Priya Sharma", 
      role: "Chief Operating Officer"
    },
    {
      name: "Rohan Kumar",
      role: "Chief Technology Officer"
    },
    {
      name: "Anjali Gupta",
      role: "Head of Incubation"
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Foundation & Vision",
      description: "Aakam360 was born from a revolutionary vision to bridge the gap between academia and industry.",
      milestone: "First Campus Established"
    },
    {
      year: "2017", 
      title: "5i Model Innovation",
      description: "Launched our revolutionary 5i ecosystem model integrating Industry, Institution, Incubation, Innovation, and Internship.",
      milestone: "5i Framework Launched"
    },
    {
      year: "2019",
      title: "Global Expansion", 
      description: "Extended our reach across multiple states and established strategic industry partnerships.",
      milestone: "Multi-State Presence"
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Embraced digital-first approach with AI-powered matching and virtual collaboration tools.",
      milestone: "Platform Digitization"
    },
    {
      year: "2024",
      title: "Ecosystem Maturity",
      description: "Achieved full ecosystem integration with over 10,000+ students and 500+ industry partners.",
      milestone: "Ecosystem Scale"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="fade-in-up">
            <h1 className="heading-display text-5xl md:text-7xl mb-6">
              About <span className="text-primary">Aakam360</span>
            </h1>
            <p className="body-large text-xl text-muted-foreground max-w-3xl mx-auto">
              We are architects of a self-sustaining ecosystem, bridging the critical gaps between industry, innovation, and academia.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-6 section-gradient">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="modern-card fade-in-left">
              <CardHeader>
                <CardTitle className="heading-lg text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-large text-muted-foreground">
                  To create a globally recognized, self-reliant ecosystem that seamlessly integrates education with entrepreneurship, fostering a generation of innovators and leaders who can solve real-world challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="modern-card fade-in-left" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="heading-lg text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-large text-muted-foreground">
                  Through our 5i model (Industry, Institution, Incubation, Innovation, Internship), we empower students, support startups, and partner with institutions to build a dynamic and sustainable talent pipeline for the future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-16 px-6 section-dark">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="fade-in-up">
            <h2 className="heading-xl text-3xl mb-8 text-white">Neural Leadership Network</h2>
            <p className="body-large mb-6 text-white/80">
              The quantum minds steering Aakam360 towards a post-digital future.
            </p>
            
            <blockquote className="text-2xl italic text-white/90 mb-8 leading-relaxed">
              "We didn't just build a company; we engineered an ecosystem where potential meets opportunity."
            </blockquote>
            
            <p className="body-large text-white/80 max-w-3xl mx-auto mb-6">
              At Aakam360, we believe that true innovation happens at the intersection of learning and doing. Our 5i model is more than a framework—it's a promise to every student, startup, and partner that we will provide the tools, environment, and network to not just succeed, but to thrive and redefine the future.
            </p>
            
            <div className="text-right max-w-3xl mx-auto">
              <p className="font-semibold text-white">Thirumoorthy Aarumugam</p>
              <p className="text-white/70">Founder & CEO, Aakam360</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="heading-xl text-4xl mb-4">Leadership Team</h2>
            <p className="body-large text-muted-foreground">
              Meet the visionaries driving our ecosystem forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={leader.name} className="modern-card text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-semibold text-primary">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="heading-lg text-lg mb-2">{leader.name}</h3>
                  <Badge variant="secondary" className="text-sm">
                    {leader.role}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 section-gradient">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="heading-xl text-4xl mb-4">Quantum Journey</h2>
            <p className="body-large text-muted-foreground">
              Navigating through spacetime—discover the key moments that shaped our reality.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="modern-card">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-primary border-primary">
                            {item.year}
                          </Badge>
                          <Badge className="bg-primary/10 text-primary">
                            {item.milestone}
                          </Badge>
                        </div>
                        <CardTitle className="heading-lg text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="body-large text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:block relative">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 section-accent">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="fade-in-up">
            <h2 className="heading-xl text-4xl mb-6 text-white">Ready to Join Our Ecosystem?</h2>
            <p className="body-large text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're a student seeking opportunities, an institution looking to collaborate, or an industry partner ready to innovate—let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary hover:bg-white/90">
                Get Started Today
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/10">
                Learn More About 5i
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;