
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Quote, 
  Users, 
  Smartphone, 
  Target, 
  Settings, 
  HeadphonesIcon, 
  Building2, 
  Rocket, 
  Heart, 
  GraduationCap, 
  Award,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Clock,
  GamepadIcon,
  Puzzle
} from "lucide-react";

const Newsletter = () => {
  const [selectedIssue, setSelectedIssue] = useState("113");

  const sections = [
    {
      id: "ceo-desk",
      title: "FROM CEO'S DESK",
      icon: User,
      content: "Today, relying on one income stream leaves little room for long-term growth. To stay steady and grow stronger, we need to think beyond the usual. With that in mind, we're starting a new venture within our incubation space. This is a chance to build something useful, shaped by teamwork and clear purpose. Your ideas and energy matter. Let's shape the next chapter together.",
      author: "Mr. A. Thirumoorthy",
      position: "Founder & CEO",
      image: "/lovable-uploads/a7a46f46-b6a7-4c05-9388-d99ba5823d85.png"
    },
    {
      id: "coo-desk",
      title: "FROM COO'S DESK",
      icon: Target,
      content: "To achieve our 25/25/25 goal, we must commit to working harder, smarter, and with greater focus than ever before. These targets won't reach themselves — they demand discipline, determination, and a relentless drive for excellence. Every extra effort we put in today brings us closer to those milestones. Let's raise the bar, stay aligned, and give our best — because better results only come from greater commitment.",
      goals: [
        "25 Million Revenue",
        "25 MoU's Signed-up",
        "25 New Recruits"
      ],
      author: "Mr. S.P. Arun Prasad",
      position: "Chief Operational Officer"
    },
    {
      id: "human-resources",
      title: "HUMAN RESOURCES",
      icon: Users,
      content: "HRApp biometric review was implemented, resolving 95% of attendance discrepancies. The onboarding process welcomed 13 new faculty and staff with orientations on policies and systems. March payroll was processed on time under the updated policy. Over 12 student certificates were issued within 24 hours. A recruitment needs assessment was completed for Q2 2025. Billing and timely payments for 7 external vendors were completed within 7 working days. TDS processing for faculty and vendors was finalized to support FY 2024-25 Form 16 generation. Salary processing for 22 employees was successfully migrated to HRApp. The Incubation Cell team was formed with new hires to foster innovation. Provident fund settlements were completed for 6 staff members. Strategic leadership appointments were made for the Principal of Allied Health Sciences and the Director of Research & Development to drive institutional growth."
    },
    {
      id: "digital-marketing",
      title: "DIGITAL MARKETING",
      icon: Smartphone,
      content: "Social Media Highlights – Performance Boost Across Platforms!",
      highlights: [
        {
          platform: "Instagram",
          metrics: [
            "Views: 1,048,899 (+158.9%)",
            "Reach: 438,545 (+244.7%)"
          ]
        },
        {
          platform: "Facebook", 
          metrics: [
            "Views: 556,110 (+68.9%)",
            "Reach: 43,734 (+932.7%)"
          ]
        },
        {
          platform: "YouTube",
          metrics: [
            "Views: 9.4K",
            "Watch Time: 84.6 hours (+61%)"
          ]
        }
      ],
      additional: "End-to-end photo & video coverage for 8+ campus events"
    },
    {
      id: "accounts-operations", 
      title: "ACCOUNTS - OPERATIONS",
      icon: Settings,
      content: "Fee collection was effectively streamlined through organized mentor-wise follow-ups and daily progress tracking, ensuring timely payments. The no dues clearance process was smoothly executed in close coordination with the Pharmacy, AHS, and Nursing departments. Significant progress was made in the Career Book ERP migration, with 90% of financial data successfully transitioned, enhancing operational efficiency. Through consistent engagement, 85% of bus fees were collected. Event-related finances, including Iyarkai fee allocations, were managed with precision, and the Grey Quest dues list was regularly reviewed. Student fee-related concerns were addressed promptly, ensuring clear and supportive communication throughout."
    },
    {
      id: "it-help-desk",
      title: "IT HELP DESK", 
      icon: HeadphonesIcon,
      content: "Technical support and maintenance across campus infrastructure:",
      tasks: [
        "Shine Auditorium CCTV installation was completed successfully, including setup and testing.",
        "Pharmacy NAAC support was provided with all documentation submitted and departmental coordination ensured.",
        "Engineering Anna University inspection arrangements were completed with files and labs prepared as per guidelines.",
        "All tasks were executed on time with proper team coordination.",
        "Final inspections and reviews were conducted as scheduled."
      ]
    },
    {
      id: "front-office",
      title: "FRONT OFFICE",
      icon: Building2,
      content: "Campus operations were efficiently supported through the timely processing of student certificates, education loan documents, and verification requests. Coordination with the Accounts department ensured smooth handling of fee receipts, exam payments, and student concessions. Day-to-day services such as issuing out passes, distributing food tokens, and managing courier requirements for both students and departments were handled with precision. No dues clearance was successfully facilitated for outgoing students from AHS, SIMSAR, and Nursing."
    },
    {
      id: "incubation",
      title: "INCUBATION",
      icon: Rocket,
      events: [
        {
          title: "Grand Launch of Shine Healthcare Hackathon 2025",
          description: "On June 2, 2025, the Shine Healthcare Hackathon 2025 was officially launched with 450 participants. The event was organized by The Tamil Nadu Dr. M.G.R. Medical University and StartupTN, in collaboration with Aakam Shine. The launch was graced by The Honourable Minister for Health and Family Welfare, Thiru Ma. Subramanian; The Honourable Vice Chancellor of The Tamil Nadu Dr. M.G.R. Medical University, Dr. K Narayanasamy; The Registrar, Ms. Sivasangeetha; The Vice President of StartupTN, Mr. Sivakumar Palaniswamy; and Mr. Thirumoorthy Arumugam, Founder of Aakam360. This grand event marked the beginning of an exciting journey to foster innovation and solutions in healthcare through the hackathon."
        },
        {
          title: "Shine Student Venture Meet",
          description: "On June 7, 2025, Aakam Shine held the Shine Student Venture Meet with 45 participants. Mr. Mohan R, Incubation Manager, interacted with the students, sharing valuable insights and connections related to their startup ideas. The session also included planning for various next-step activities to support and nurture these student ventures. This meet provided a great platform for students to refine their ideas and prepare for future growth."
        }
      ]
    },
    {
      id: "digital-wishes",
      title: "DIGITAL WISHES",
      icon: Heart,
      content: "Over the past year, we shared birthday wishes for students and faculty, and acknowledged the work anniversaries of our dedicated staff through digital signage across the SSEI campus. These messages were a small way of showing appreciation for everyone who adds meaning to the everyday life of our institution, those who learn, teach, and work together. It has been a year of celebrations that brought warmth to our community."
    },
    {
      id: "gratitude",
      title: "GRATITUDE FROM STUDENTS AND STAFFS",
      icon: Award,
      content: "We're thankful for the kind words and encouraging feedback from students and staff for the birthday and work anniversary wishes displayed on our college signage boards throughout the year. This thoughtful response has strengthened the sense of togetherness we aim to keep alive at our Sri Shanmugha Educational Institutions. Your support made each greeting more meaningful, and we truly appreciate it.",
      signature: "– With sincere appreciation, Students of SSEI"
    },
    {
      id: "learning-spot",
      title: "LEARNING SPOT",
      icon: GraduationCap,
      subtitle: "The Power of Teamwork in a Changing World",
      content: "No matter the field or role, the ability to work well with others has become more important than ever. In today's fast-paced and interconnected world, teamwork is no longer just a soft skill — it's a success skill.",
      learningPoints: [
        {
          title: "Communicate Clearly and Respectfully",
          description: "Open, honest, and respectful communication sets the tone for healthy collaboration. Listening actively and expressing ideas clearly helps avoid confusion and builds trust."
        },
        {
          title: "Understand Roles and Share Responsibility", 
          description: "Great teams value every member's role. Sharing tasks and owning responsibilities ensure balance and reduce friction."
        },
        {
          title: "Be Open to Feedback",
          description: "Constructive feedback helps teams grow. Accepting and giving feedback with a positive mindset strengthens performance and relationships."
        },
        {
          title: "Support and Uplift Each Other",
          description: "Encouragement and empathy go a long way. Helping teammates through challenges fosters a strong and positive work culture."
        },
        {
          title: "Celebrate Team Wins",
          description: "Recognizing collective achievements builds morale and unity. Every milestone is a reminder of what's possible when we work together."
        }
      ]
    },
    {
      id: "game-point",
      title: "GAME POINT",
      icon: GamepadIcon,
      subtitle: "Let the Fun Begin! 🎯",
      content: "We're adding a splash of excitement to this edition with some fun games and brain teasers just for you! Whether you're taking a quick study break or looking to challenge your friends, these lighthearted activities are the perfect way to refresh your mind and spark some laughter. Dive in, test your skills, and don't forget to share your scores – because learning is even better with a little fun along the way!",
      puzzle: {
        title: "SUDOKU PUZZLE",
        grid: [
          [5, 3, '', 7, '', '', '', '', ''],
          [6, '', '', 1, 9, 5, '', '', ''],
          ['', 9, 8, '', '', '', '', 6, ''],
          [8, '', '', '', 6, '', '', '', 3],
          [4, '', '', 8, '', 3, '', '', 1],
          [7, '', '', '', 2, '', '', '', 6],
          ['', 6, '', '', '', '', 2, 8, ''],
          ['', '', '', 4, 1, 9, '', '', 5],
          ['', '', '', '', 8, '', '', 7, 9]
        ],
        note: "Don't forget to email your Sudoku answers to fo@aakam360.com for a chance to win exciting prizes in our next event!"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              ISSUE NO: {selectedIssue}<sup>rd</sup>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-green-700 mb-6 heading-display">
              ECHO 360
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 heading-xl">
              BUSINESS NEWSLETTER
            </h2>
            <p className="text-xl text-green-600 body-large">
              Innovate and Inspire - Your Monthly Business Update
            </p>
          </div>

          {/* Featured Quote */}
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 heading-lg">ECHO 360</h3>
              <p className="text-lg mb-4 body-large">May, 2025</p>
              <div className="text-4xl font-bold mb-6 text-green-100">25 / 25 / 25</div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>Every milestone marks progress, not the finish line.</p>
                <p>Every challenge brings a new opportunity to grow.</p>
                <p>Together, we're not just building a company — we're shaping a legacy.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Newsletter Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              
              return (
                <Card 
                  key={section.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300"
                  id={section.id}
                >
                  <div className="bg-green-600 text-white p-6">
                    <div className="flex items-center space-x-4">
                      <IconComponent className="w-8 h-8" />
                      <h3 className="text-2xl font-bold heading-lg">{section.title}</h3>
                      <Quote className="w-8 h-8 ml-auto" />
                    </div>
                    {section.subtitle && (
                      <p className="text-green-100 mt-2 text-lg">{section.subtitle}</p>
                    )}
                  </div>
                  
                  <div className="p-8 bg-white">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-6">{section.content}</p>
                      
                      {/* CEO/COO Author Info */}
                      {section.author && (
                        <div className="flex items-center justify-end mt-6 p-4 bg-green-50 rounded-lg">
                          <div className="text-right mr-4">
                            <p className="font-bold text-green-800">{section.author}</p>
                            <p className="text-green-600 text-sm">{section.position}</p>
                          </div>
                          <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center">
                            <User className="w-8 h-8 text-green-600" />
                          </div>
                        </div>
                      )}

                      {/* COO Goals */}
                      {section.goals && (
                        <div className="mt-6">
                          <ul className="space-y-2">
                            {section.goals.map((goal, i) => (
                              <li key={i} className="flex items-center text-green-700 font-medium">
                                <Target className="w-5 h-5 mr-3 text-green-600" />
                                {goal}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Digital Marketing Highlights */}
                      {section.highlights && (
                        <div className="mt-6 space-y-4">
                          {section.highlights.map((highlight, i) => (
                            <div key={i} className="bg-green-50 p-4 rounded-lg">
                              <h4 className="font-bold text-green-800 mb-2">{highlight.platform}</h4>
                              <ul className="space-y-1">
                                {highlight.metrics.map((metric, j) => (
                                  <li key={j} className="text-green-700">• {metric}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {section.additional && (
                            <p className="text-green-700 font-medium mt-4">✨ {section.additional}</p>
                          )}
                        </div>
                      )}

                      {/* IT Tasks */}
                      {section.tasks && (
                        <div className="mt-6">
                          <ul className="space-y-3">
                            {section.tasks.map((task, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700">{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Incubation Events */}
                      {section.events && (
                        <div className="mt-6 space-y-6">
                          {section.events.map((event, i) => (
                            <div key={i} className="bg-green-50 p-6 rounded-lg">
                              <h4 className="font-bold text-green-800 mb-3 text-lg">{event.title}</h4>
                              <p className="text-gray-700 leading-relaxed">{event.description}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Learning Points */}
                      {section.learningPoints && (
                        <div className="mt-6 space-y-6">
                          {section.learningPoints.map((point, i) => (
                            <div key={i} className="bg-green-50 p-4 rounded-lg">
                              <h4 className="font-bold text-green-800 mb-2">{point.title}</h4>
                              <p className="text-gray-700">{point.description}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Sudoku Puzzle */}
                      {section.puzzle && (
                        <div className="mt-6">
                          <h4 className="text-2xl font-bold text-center text-green-800 mb-6">{section.puzzle.title}</h4>
                          <div className="bg-green-100 p-6 rounded-lg max-w-md mx-auto">
                            <div className="grid grid-cols-9 gap-1 bg-green-800 p-2 rounded">
                              {section.puzzle.grid.map((row, i) => 
                                row.map((cell, j) => (
                                  <div 
                                    key={`${i}-${j}`} 
                                    className="w-8 h-8 bg-white flex items-center justify-center text-sm font-bold text-green-800 border border-green-300"
                                  >
                                    {cell}
                                  </div>
                                ))
                              )}
                            </div>
                            <p className="text-sm text-green-700 mt-4 text-center">
                              📧 {section.puzzle.note}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Signature */}
                      {section.signature && (
                        <div className="mt-6 text-right">
                          <p className="text-green-700 italic">{section.signature}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Board & Contact Section */}
      <section className="py-16 px-6 bg-green-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-green-700 text-white p-8">
            <h3 className="text-3xl font-bold mb-8 heading-lg flex items-center">
              <Users className="w-8 h-8 mr-4" />
              EDITORIAL BOARD
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-green-200 mb-2">PATRONS</h4>
                <p>Mr. A. Thirumoorthy & Mr. S. P. Arun Prasad</p>
              </div>
              <div>
                <h4 className="font-bold text-green-200 mb-2">EDITORS</h4>
                <p>Mr. M. Manojkumar & Ms. M. Aruna</p>
              </div>
              <div>
                <h4 className="font-bold text-green-200 mb-2">DESIGNERS</h4>
                <p>Mr. JM. Chandru & Mr. M. Satheskumar</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 heading-lg">CONTACT US</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-green-100 text-lg italic mb-4">Connecting to the Right People</p>
                <p className="text-green-100 mb-6">
                  At Aakam 360, we believe in the power of collaboration and innovation. Whether 
                  you're a student, educator, entrepreneur, or industry leader, we're here to support your journey.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-green-300" />
                    <div>
                      <p className="font-bold text-green-200">Address</p>
                      <p>Block B, Pullipalayam, Sankari, Salem, Tamil Nadu, India – 637304</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-green-300" />
                    <div>
                      <p className="font-bold text-green-200">Phone</p>
                      <p>+91 843 843 5777<br/>+91 843 843 5999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-green-300" />
                    <div>
                      <p className="font-bold text-green-200">Email</p>
                      <p>info@aakam360.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-green-300" />
                    <div>
                      <p className="font-bold text-green-200">Office Hours</p>
                      <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-600 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-4">Let's Collaborate</h4>
                <p className="text-green-100 mb-6">
                  Reach out to us to explore opportunities in incubation, internships, research 
                  collaborations, or to learn more about our initiatives.
                </p>
                <Button className="bg-white text-green-600 hover:bg-green-50 w-full">
                  Get In Touch
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-green-800 text-white">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-6 mb-4">
            <div className="flex items-center space-x-2">
              <span>🌐</span>
              <span>www.aakam360.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 843 843 5777</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Block B, SSEI, Sankari</span>
            </div>
          </div>
          <p className="text-green-200">
            © 2024 Aakam360. All rights reserved. | Echo 360 Newsletter
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Newsletter;
