
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
      details: "Pullipalayam, Sankari, Salem, Tamil Nadu, India - 637304"
    },
    {
      icon: "🕒",
      title: "Operating Hours",
      details: "9 AM to 6 PM, Monday to Saturday"
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+91 98765 43210"
    },
    {
      icon: "✉️",
      title: "Email",
      details: "info@aakam360.com"
    }
  ];

  const socialLinks = [
    { icon: "📘", name: "LinkedIn", color: "text-blue-600" },
    { icon: "🐦", name: "Twitter", color: "text-sky-500" },
    { icon: "📸", name: "Instagram", color: "text-pink-500" },
    { icon: "📺", name: "YouTube", color: "text-red-500" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 slide-in-left">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12 slide-in-right leading-relaxed">
            Ready to be part of the innovation ecosystem? Connect with us and let's build the future together.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="glass-card p-8 text-center card-hover border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{info.details}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass-card p-12 card-hover border-0">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Send us a Message
            </h2>
            
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={`h-14 text-lg border-gray-200 focus:border-blue-500 transition-all duration-300 ${
                      focusedField === "name" ? "ring-2 ring-blue-100" : ""
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
                    className={`h-14 text-lg border-gray-200 focus:border-blue-500 transition-all duration-300 ${
                      focusedField === "email" ? "ring-2 ring-blue-100" : ""
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
                  className={`h-14 text-lg border-gray-200 focus:border-blue-500 transition-all duration-300 ${
                    focusedField === "phone" ? "ring-2 ring-blue-100" : ""
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
                  className={`text-lg border-gray-200 focus:border-blue-500 transition-all duration-300 resize-none ${
                    focusedField === "message" ? "ring-2 ring-blue-100" : ""
                  }`}
                />
              </div>
              
              <div className="text-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Connect With Us
          </h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <Card 
                key={index}
                className="glass-card p-6 w-20 h-20 flex items-center justify-center card-hover cursor-pointer border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={`text-3xl ${social.color}`}>{social.icon}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <Card className="glass-card p-12 text-center border-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Visit Our Campus
            </h2>
            <div className="aspect-video bg-gradient-blue rounded-lg flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-white text-xl font-semibold">Interactive Campus Map</p>
                <p className="text-blue-200 mt-2">Pullipalayam, Sankari, Salem, Tamil Nadu, India - 637304</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
