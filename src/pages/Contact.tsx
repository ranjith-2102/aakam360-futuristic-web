
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
      icon: "📍",
      title: "Location",
      details: "Pullipalayam, Sankari, Salem\nTamil Nadu, India - 637304",
      accent: "accent-cyan"
    },
    {
      icon: "🕒",
      title: "Operating Hours",
      details: "9 AM to 6 PM\nMonday to Saturday",
      accent: "accent-orange"
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+91 98765 43210\n+91 98765 43211",
      accent: "accent-cyan"
    },
    {
      icon: "✉️",
      title: "Email",
      details: "info@aakam360.com\nsupport@aakam360.com",
      accent: "accent-orange"
    }
  ];

  const socialLinks = [
    { icon: "📘", name: "LinkedIn", handle: "@aakam360" },
    { icon: "🐦", name: "Twitter", handle: "@aakam360" },
    { icon: "📸", name: "Instagram", handle: "@aakam360" },
    { icon: "📺", name: "YouTube", handle: "Aakam360" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 section-dark">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold heading-display mb-8 slide-in-left">
            Get In <span className="accent-cyan">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 slide-in-right body-large leading-relaxed">
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
              <Card className="studio-card p-8">
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
                        className={`h-14 text-lg bg-background border-border focus:border-accent transition-all duration-300 ${
                          focusedField === "name" ? "ring-2 ring-accent/20" : ""
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
                        className={`h-14 text-lg bg-background border-border focus:border-accent transition-all duration-300 ${
                          focusedField === "email" ? "ring-2 ring-accent/20" : ""
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
                      className={`h-14 text-lg bg-background border-border focus:border-accent transition-all duration-300 ${
                        focusedField === "phone" ? "ring-2 ring-accent/20" : ""
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
                      className={`text-lg bg-background border-border focus:border-accent transition-all duration-300 resize-none ${
                        focusedField === "message" ? "ring-2 ring-accent/20" : ""
                      }`}
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button className="cta-primary w-full md:w-auto">
                      Send Message
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    className="studio-card p-6 text-center"
                  >
                    <div className="text-4xl mb-4">{info.icon}</div>
                    <h3 className={`text-xl font-bold heading-xl mb-3 ${info.accent}`}>
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground body-large whitespace-pre-line leading-relaxed">
                      {info.details}
                    </p>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <Card className="studio-card p-8">
                <h3 className="text-2xl font-bold heading-xl mb-6 text-center">
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {socialLinks.map((social, index) => (
                    <div 
                      key={index}
                      className="bg-muted/30 p-4 rounded-lg text-center hover:bg-accent/20 hover:text-accent transition-all duration-300 cursor-pointer group"
                    >
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <div className="text-sm font-medium">{social.name}</div>
                      <div className="text-xs text-muted-foreground">{social.handle}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 section-dark">
        <div className="container mx-auto">
          <Card className="studio-card p-12 text-center">
            <h2 className="text-3xl font-bold heading-xl mb-12">
              Visit Our Campus
            </h2>
            <div className="aspect-video bg-gradient-to-br from-muted/50 to-background rounded-lg flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-foreground text-xl font-semibold heading-xl">Interactive Campus Map</p>
                <p className="text-muted-foreground mt-2 body-large">
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
