import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Trophy, Target, Lightbulb, Rocket, Globe, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { value: "8+", label: "Years of Excellence", icon: Trophy },
    { value: "2000+", label: "Students Empowered", icon: Users },
    { value: "100+", label: "Startups Launched", icon: Rocket },
    { value: "50+", label: "Awards & Recognitions", icon: Target }
  ];

  const leadership = [
    {
      name: "Thirumoorthy Aarumugam",
      role: "Founder & CEO",
      description: "Visionary leader driving the 5i ecosystem transformation"
    },
    {
      name: "Priya Sharma", 
      role: "Chief Operating Officer",
      description: "Operational excellence and strategic partnerships"
    },
    {
      name: "Rohan Kumar",
      role: "Chief Technology Officer",
      description: "Technology innovation and digital transformation"
    },
    {
      name: "Anjali Gupta",
      role: "Head of Incubation",
      description: "Startup mentoring and incubation programs"
    }
  ];

  const journeyPhases = [
    {
      phase: "Foundation",
      year: "2015",
      icon: Building2,
      title: "Building the Vision",
      description: "Started with a revolutionary idea to bridge academia and industry gaps",
      color: "bg-blue-500"
    },
    {
      phase: "Innovation", 
      year: "2017",
      icon: Lightbulb,
      title: "5i Framework Birth",
      description: "Pioneered the groundbreaking 5i ecosystem model",
      color: "bg-purple-500"
    },
    {
      phase: "Expansion",
      year: "2019", 
      icon: Globe,
      title: "Scaling Impact",
      description: "Extended reach across states with strategic partnerships",
      color: "bg-green-500"
    },
    {
      phase: "Transformation",
      year: "2021",
      icon: Zap,
      title: "Digital Evolution",
      description: "Embraced AI-powered solutions and virtual collaboration",
      color: "bg-orange-500"
    },
    {
      phase: "Excellence",
      year: "2024",
      icon: Rocket,
      title: "Ecosystem Mastery",
      description: "Achieved full integration with 10,000+ students and 500+ partners",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <div className="fade-in-up">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary">
                About Aakam360
              </Badge>
              <h1 className="heading-display text-5xl md:text-6xl mb-6">
                Architects of <span className="text-primary">Innovation</span>
              </h1>
              <p className="body-large text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                We are architects of a self-sustaining ecosystem, bridging the critical gaps between industry, innovation, and academia through our revolutionary 5i model.
              </p>
              <Button className="btn-primary mb-12">
                Explore Our Impact <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-in-up max-w-4xl mx-auto" style={{ animationDelay: "0.2s" }}>
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={stat.label} className="modern-card text-center hover-scale">
                    <CardContent className="pt-6">
                      <IconComponent className="h-8 w-8 mx-auto mb-3 text-primary" />
                      <div className="heading-xl text-3xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <p className="body-small text-muted-foreground">
                        {stat.label}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="heading-xl text-4xl mb-4">Our Foundation</h2>
            <p className="body-large text-muted-foreground">
              The principles that drive our ecosystem forward
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="modern-card fade-in-left">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="heading-lg text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="body-large text-muted-foreground">
                  To create a globally recognized, self-reliant ecosystem that seamlessly integrates education with entrepreneurship, fostering a generation of innovators and leaders who can solve real-world challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="modern-card fade-in-left" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="heading-lg text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="body-large text-muted-foreground">
                  Through our 5i model (Industry, Institution, Incubation, Innovation, Internship), we empower students, support startups, and partner with institutions to build a dynamic and sustainable talent pipeline for the future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="fade-in-up">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              From the Neural Core
            </Badge>
            <blockquote className="text-3xl md:text-4xl italic text-white/90 mb-8 leading-relaxed">
              "We didn't just build a company; we engineered an ecosystem where potential meets opportunity."
            </blockquote>
            
            <p className="body-large text-white/80 max-w-3xl mx-auto mb-8">
              At Aakam360, we believe that true innovation happens at the intersection of learning and doing. Our 5i model is more than a framework—it's a promise to every student, startup, and partner.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Thirumoorthy Aarumugam</p>
                <p className="text-white/70">Founder & CEO, Aakam360</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section - Responsive Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary">
              Our Evolution
            </Badge>
            <h2 className="heading-xl text-4xl mb-4">Journey Through Time</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Experience our transformation through an interactive timeline showcasing key milestones in our ecosystem development.
            </p>
          </div>
          
          {/* Desktop Orbital Journey */}
          <div className="hidden lg:block relative">
            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary rounded-full flex items-center justify-center z-20 shadow-2xl">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            
            {/* Orbital Rings */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {journeyPhases.map((phase, index) => {
                const IconComponent = phase.icon;
                const angle = (index * 72) - 90; // 360/5 = 72 degrees between each
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={phase.year}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 fade-in-up hover-scale group cursor-pointer"
                    style={{ 
                      left: `calc(50% + ${x}px)`, 
                      top: `calc(50% + ${y}px)`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {/* Orbit Line */}
                    <div 
                      className="absolute w-px bg-border/30 origin-bottom"
                      style={{
                        height: `${radius}px`,
                        transform: `rotate(${angle + 90}deg)`,
                        left: '50%',
                        bottom: '50%'
                      }}
                    />
                    
                    {/* Phase Node */}
                    <div className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    {/* Phase Info Card */}
                    <Card className="absolute top-20 left-1/2 transform -translate-x-1/2 w-72 modern-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none group-hover:pointer-events-auto">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-primary border-primary text-xs">
                            {phase.year}
                          </Badge>
                          <Badge className="bg-primary/10 text-primary text-xs">
                            {phase.phase}
                          </Badge>
                        </div>
                        <CardTitle className="heading-lg text-base">{phase.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="body-small text-muted-foreground text-sm">{phase.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile & Tablet Vertical Timeline */}
          <div className="block lg:hidden">
            <div className="relative max-w-2xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                {journeyPhases.map((phase, index) => {
                  const IconComponent = phase.icon;
                  return (
                    <div key={phase.year} className="relative flex items-start fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      {/* Timeline Node */}
                      <div className={`relative z-10 w-16 h-16 ${phase.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <Card className="ml-6 modern-card flex-1 hover-scale">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-primary border-primary">
                              {phase.year}
                            </Badge>
                            <Badge className="bg-primary/10 text-primary">
                              {phase.phase}
                            </Badge>
                          </div>
                          <CardTitle className="heading-lg text-lg">{phase.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="body-large text-muted-foreground">{phase.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Journey Stats */}
          <div className="mt-16 text-center fade-in-up">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
              {journeyPhases.map((phase, index) => (
                <div key={phase.year} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{phase.year}</div>
                  <div className="body-small text-muted-foreground">{phase.phase}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary">
              Neural Leadership Network
            </Badge>
            <h2 className="heading-xl text-4xl mb-4">Meet Our Visionaries</h2>
            <p className="body-large text-muted-foreground">
              The quantum minds steering Aakam360 towards a post-digital future
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={leader.name} className="modern-card fade-in-up hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-semibold text-primary">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="heading-lg text-xl mb-2">{leader.name}</h3>
                      <Badge variant="secondary" className="mb-3">
                        {leader.role}
                      </Badge>
                      <p className="body-large text-muted-foreground">
                        {leader.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-purple-600"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="fade-in-up">
            <h2 className="heading-xl text-4xl mb-6 text-white">Ready to Join Our Ecosystem?</h2>
            <p className="body-large text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you're a student seeking opportunities, an institution looking to collaborate, or an industry partner ready to innovate—let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                Explore 5i Model
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;