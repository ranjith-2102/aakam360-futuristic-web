
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Phone, Mail, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Pullipalayam, Sankari, Salem\nTamil Nadu, India - 637304",
      accent: "accent-gold"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: "9 AM to 6 PM\nMonday to Saturday",
      accent: "accent-electric"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 98765 43210\n+91 98765 43211",
      accent: "accent-gold"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@aakam360.com\nsupport@aakam360.com",
      accent: "accent-electric"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", handle: "@aakam360" },
    { icon: Twitter, name: "Twitter", handle: "@aakam360" },
    { icon: Instagram, name: "Instagram", handle: "@aakam360" },
    { icon: Youtube, name: "YouTube", handle: "Aakam360" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 section-navy relative overflow-hidden">
        <ParticleBackground className="opacity-20" particleCount={40} />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold heading-display mb-8 slide-in-left text-white">
            Get In <span className="accent-gold">Touch</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 slide-in-right body-large leading-relaxed">
            Ready to be part of the innovation ecosystem? Connect with us and let's build the future together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 section-light">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <Card className="liquid-card p-8">
                <h2 className="text-3xl font-bold heading-xl mb-8">
                  Send us a Message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={`h-16 text-lg bg-background/50 border-2 border-border focus:border-accent transition-all duration-300 rounded-xl ${
                          focusedField === "name" ? "ring-2 ring-accent/20 shadow-lg" : ""
                        }`}
                      />
                    </div>
                    
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`h-16 text-lg bg-background/50 border-2 border-border focus:border-accent transition-all duration-300 rounded-xl ${
                          focusedField === "email" ? "ring-2 ring-accent/20 shadow-lg" : ""
                        }`}
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Input
                      type="tel"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className={`h-16 text-lg bg-background/50 border-2 border-border focus:border-accent transition-all duration-300 rounded-xl ${
                        focusedField === "phone" ? "ring-2 ring-accent/20 shadow-lg" : ""
                      }`}
                    />
                  </div>
                  
                  <div className="relative">
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows={6}
                      className={`text-lg bg-background/50 border-2 border-border focus:border-accent transition-all duration-300 resize-none rounded-xl ${
                        focusedField === "message" ? "ring-2 ring-accent/20 shadow-lg" : ""
                      }`}
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button className="cta-gold w-full md:w-auto text-lg px-12 py-4">
                      Send Message
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card 
                      key={index} 
                      className="liquid-card p-6 text-center expand-card"
                    >
                      <IconComponent className="w-8 h-8 mx-auto mb-4 text-accent icon-morph" />
                      <h3 className={`text-xl font-bold heading-xl mb-3 ${info.accent}`}>
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground body-large whitespace-pre-line leading-relaxed">
                        {info.details}
                      </p>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <Card className="liquid-card p-8">
                <h3 className="text-2xl font-bold heading-xl mb-6 text-center">
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-muted/30 p-4 rounded-xl text-center hover:bg-accent/20 hover:text-accent transition-all duration-300 cursor-pointer group expand-card"
                      >
                        <IconComponent className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform icon-morph" />
                        <div className="text-sm font-medium">{social.name}</div>
                        <div className="text-xs text-muted-foreground">{social.handle}</div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with CSS-only pin animation */}
      <section className="py-20 px-6 section-navy">
        <div className="container mx-auto">
          <Card className="liquid-card p-12 text-center bg-white/5 border-white/10">
            <h2 className="text-3xl font-bold heading-xl mb-12 text-white">
              Visit Our Campus
            </h2>
            <div className="aspect-video bg-gradient-to-br from-accent/20 to-navy/40 rounded-xl flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center float-animation">
                  <MapPin className="w-8 h-8 text-gold" />
                </div>
                <p className="text-white text-xl font-semibold heading-xl">Interactive Campus Map</p>
                <p className="text-white/80 mt-2 body-large">
                  Pullipalayam, Sankari, Salem, Tamil Nadu, India - 637304
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;

