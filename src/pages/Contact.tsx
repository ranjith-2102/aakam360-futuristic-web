
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
      details: "Pullipalayam, Sankari, Salem",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: "🕒",
      title: "Operating Hours",
      details: "9 AM to 6 PM, Monday to Saturday",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+91 98765 43210",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: "✉️",
      title: "Email",
      details: "info@aakam360.com",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const socialLinks = [
    { icon: "📘", name: "LinkedIn", color: "text-blue-400" },
    { icon: "🐦", name: "Twitter", color: "text-sky-400" },
    { icon: "📸", name: "Instagram", color: "text-pink-400" },
    { icon: "📺", name: "YouTube", color: "text-red-400" },
  ];

  return (
    <div className="min-h-screen bg-cyber-gradient">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 neon-text slide-in-left">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 slide-in-right">
            Ready to be part of the innovation ecosystem? Connect with us and let's build the future together.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="glass-morphism p-6 text-center card-3d rotating-slow relative overflow-hidden"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-10`}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 floating">{info.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 neon-text">
                    {info.title}
                  </h3>
                  <p className="text-gray-300">{info.details}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-morphism p-8 card-3d">
            <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">
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
                    className={`glass-morphism border-0 text-white placeholder-gray-400 transition-all duration-300 ${
                      focusedField === "name" ? "glowing scale-105" : ""
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
                    className={`glass-morphism border-0 text-white placeholder-gray-400 transition-all duration-300 ${
                      focusedField === "email" ? "glowing scale-105" : ""
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
                  className={`glass-morphism border-0 text-white placeholder-gray-400 transition-all duration-300 ${
                    focusedField === "phone" ? "glowing scale-105" : ""
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
                  className={`glass-morphism border-0 text-white placeholder-gray-400 transition-all duration-300 resize-none ${
                    focusedField === "message" ? "glowing scale-105" : ""
                  }`}
                />
              </div>
              
              <div className="text-center">
                <Button className="glass-morphism text-white border-blue-400 hover:bg-blue-500/20 px-12 py-4 text-lg rounded-full glowing transform transition-all duration-300 hover:scale-110">
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Connect With Us
          </h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <Card 
                key={index}
                className="glass-morphism p-4 w-16 h-16 flex items-center justify-center card-3d cursor-pointer floating"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className={`text-2xl ${social.color}`}>{social.icon}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Card className="glass-morphism p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8 neon-text">
              Visit Our Campus
            </h2>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center glowing">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-white text-xl">Interactive Campus Map</p>
                <p className="text-gray-300 mt-2">Pullipalayam, Sankari, Salem</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
