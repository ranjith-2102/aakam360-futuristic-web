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
  Puzzle,
  Star,
  Coffee,
  Smile,
  Download,
  Send
} from "lucide-react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Newsletter = () => {
  const [selectedIssue, setSelectedIssue] = useState("113");
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const downloadAsPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const element = document.getElementById('newsletter-content');
      if (!element) return;

      // Higher quality settings for better PDF output
      const canvas = await html2canvas(element, {
        scale: 1.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        height: element.scrollHeight,
        width: element.scrollWidth
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      // A4 dimensions in mm
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = 210;
      const pdfHeight = 297;
      
      // Calculate scaling to fit width
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasHeight / canvasWidth;
      
      // Scale to fit PDF width with margins
      const imgWidth = pdfWidth - 20; // 10mm margin on each side
      const imgHeight = imgWidth * ratio;
      
      let position = 0;
      const pageHeight = pdfHeight - 20; // Account for margins
      
      // Add first page
      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      
      let remainingHeight = imgHeight - pageHeight;
      
      // Add additional pages if needed
      while (remainingHeight > 0) {
        position = remainingHeight - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position + 10, imgWidth, imgHeight);
        remainingHeight -= pageHeight;
      }

      pdf.save(`Echo-360-Newsletter-Issue-${selectedIssue}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const generateEmailHTML = () => {
    const emailHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Echo 360 Newsletter - Issue #${selectedIssue}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f8f9fa; }
        .container { max-width: 600px; margin: 0 auto; background: white; }
        .header { background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #6366f1 100%); color: white; padding: 40px 20px; text-align: center; }
        .content { padding: 30px 20px; }
        .section { margin-bottom: 40px; }
        .section-title { color: #8b5cf6; font-size: 20px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #ec4899; padding-bottom: 10px; }
        .section-content { line-height: 1.6; color: #374151; }
        .highlight-box { background: linear-gradient(135deg, #fce7f3 0%, #f3e8ff 100%); padding: 20px; border-radius: 10px; margin: 15px 0; }
        .footer { background: #374151; color: white; padding: 30px 20px; text-align: center; }
        .btn { background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 10px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 48px;">ECHO 360</h1>
            <p style="margin: 10px 0 0 0; font-size: 18px;">Your Monthly Dose of Inspiration - Issue #${selectedIssue}</p>
        </div>
        <div class="content">
            ${sections.map(section => `
                <div class="section">
                    <h2 class="section-title">${section.title}</h2>
                    <div class="section-content">
                        <p>${section.content}</p>
                        ${section.author ? `
                            <div class="highlight-box">
                                <strong>${section.author}</strong><br>
                                <em>${section.position}</em>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="footer">
            <p>Made with ❤️ by Aakam360 Team</p>
            <p>Block B, Pullipalayam, Sankari, Salem, Tamil Nadu, India – 637304</p>
            <p>📞 +91 843 843 5777 | 📧 info@aakam360.com</p>
        </div>
    </div>
</body>
</html>`;
    
    const blob = new Blob([emailHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Echo-360-Newsletter-Issue-${selectedIssue}-Email.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Navigation />
      
      {/* Action Buttons */}
      <div className="fixed top-20 right-6 z-50 flex flex-col gap-3">
        <Button
          onClick={downloadAsPDF}
          disabled={isGeneratingPDF}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg px-4 py-2 rounded-full"
        >
          <Download className="w-4 h-4 mr-2" />
          {isGeneratingPDF ? 'Generating...' : 'Download PDF'}
        </Button>
        <Button
          onClick={generateEmailHTML}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:from-purple-600 hover:to-indigo-700 shadow-lg px-4 py-2 rounded-full"
        >
          <Send className="w-4 h-4 mr-2" />
          Email Version
        </Button>
      </div>
      
      <div id="newsletter-content">
        {/* Warm Welcome Header */}
        <section className="pt-28 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-100/30 via-purple-100/20 to-indigo-100/30"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              {/* Friendly greeting */}
              <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
                <Coffee className="w-4 h-4 mr-2" />
                Welcome to Issue #{selectedIssue} ✨
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8 heading-display">
                ECHO 360
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <Star className="w-6 h-6 text-pink-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-700 heading-xl">
                  Your Monthly Dose of Inspiration
                </h2>
                <Star className="w-6 h-6 text-purple-500" />
              </div>
              
              <p className="text-xl text-gray-600 body-large max-w-2xl mx-auto leading-relaxed">
                Crafted with love to bring you closer to our community, achievements, and shared dreams ✨
              </p>
            </div>

            {/* Warm Welcome Message */}
            <Card className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white p-10 mb-16 max-w-5xl mx-auto shadow-2xl rounded-3xl">
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 mr-3 text-pink-200" />
                  <h3 className="text-3xl font-bold heading-lg">A Message From Our Hearts</h3>
                  <Heart className="w-8 h-8 ml-3 text-pink-200" />
                </div>
                
                <p className="text-lg mb-6 body-large leading-relaxed">May 2025 Edition</p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                  <div className="text-5xl font-bold mb-6 text-pink-100">25 / 25 / 25</div>
                  <div className="space-y-4 text-lg leading-relaxed">
                    <div className="flex items-center justify-center gap-3">
                      <Smile className="w-5 h-5 text-pink-200" />
                      <p>Every milestone marks progress, not the finish line.</p>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Smile className="w-5 h-5 text-purple-200" />
                      <p>Every challenge brings a new opportunity to grow.</p>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Smile className="w-5 h-5 text-indigo-200" />
                      <p>Together, we're not just building a company — we're shaping a legacy.</p>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-white text-purple-600 hover:bg-pink-50 px-8 py-3 rounded-full font-medium shadow-lg transform hover:scale-105 transition-all duration-300">
                  Let's Begin This Journey Together 💕
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Newsletter Content */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-16">
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <Card 
                    key={section.id} 
                    className={`overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl ${
                      isEven ? 'bg-gradient-to-r from-pink-50 to-purple-50' : 'bg-gradient-to-r from-purple-50 to-indigo-50'
                    }`}
                    id={section.id}
                  >
                    <div className={`${
                      isEven 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600' 
                        : 'bg-gradient-to-r from-purple-500 to-indigo-600'
                    } text-white p-8`}>
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold heading-lg flex-1">{section.title}</h3>
                        <Quote className="w-8 h-8 opacity-60" />
                      </div>
                      {section.subtitle && (
                        <p className="text-white/90 mt-4 text-lg font-medium">{section.subtitle}</p>
                      )}
                    </div>
                    
                    <div className="p-10 bg-white/70 backdrop-blur-sm">
                      <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-8 text-lg">{section.content}</p>
                        
                        {/* CEO/COO Author Info */}
                        {section.author && (
                          <div className="flex items-center justify-end mt-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl">
                            <div className="text-right mr-6">
                              <p className="font-bold text-purple-800 text-lg">{section.author}</p>
                              <p className="text-purple-600">{section.position}</p>
                            </div>
                            <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                              <User className="w-10 h-10 text-white" />
                            </div>
                          </div>
                        )}

                        {/* COO Goals */}
                        {section.goals && (
                          <div className="mt-8 grid gap-4">
                            {section.goals.map((goal, i) => (
                              <div key={i} className="flex items-center p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl">
                                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-2 rounded-full mr-4">
                                  <Target className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-purple-800 font-medium text-lg">{goal}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Digital Marketing Highlights */}
                        {section.highlights && (
                          <div className="mt-8 grid gap-6">
                            {section.highlights.map((highlight, i) => (
                              <div key={i} className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl">
                                <h4 className="font-bold text-purple-800 mb-4 text-xl flex items-center">
                                  <Star className="w-5 h-5 mr-2 text-pink-500" />
                                  {highlight.platform}
                                </h4>
                                <div className="grid gap-2">
                                  {highlight.metrics.map((metric, j) => (
                                    <div key={j} className="flex items-center text-purple-700">
                                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                                      {metric}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                            {section.additional && (
                              <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl">
                                <p className="text-purple-700 font-medium text-lg flex items-center">
                                  <Heart className="w-5 h-5 mr-3 text-pink-500" />
                                  {section.additional}
                                </p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* IT Tasks */}
                        {section.tasks && (
                          <div className="mt-8 space-y-4">
                            {section.tasks.map((task, i) => (
                              <div key={i} className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl">
                                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                <span className="text-gray-700 leading-relaxed">{task}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Incubation Events */}
                        {section.events && (
                          <div className="mt-8 space-y-8">
                            {section.events.map((event, i) => (
                              <div key={i} className="bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 p-8 rounded-3xl border border-purple-100">
                                <h4 className="font-bold text-purple-800 mb-4 text-xl flex items-center">
                                  <Rocket className="w-6 h-6 mr-3 text-pink-500" />
                                  {event.title}
                                </h4>
                                <p className="text-gray-700 leading-relaxed text-lg">{event.description}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Learning Points */}
                        {section.learningPoints && (
                          <div className="mt-8 space-y-6">
                            {section.learningPoints.map((point, i) => (
                              <div key={i} className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl border border-pink-100">
                                <h4 className="font-bold text-purple-800 mb-3 text-lg flex items-center">
                                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                                    <span className="text-white font-bold text-sm">{i + 1}</span>
                                  </div>
                                  {point.title}
                                </h4>
                                <p className="text-gray-700 leading-relaxed ml-11">{point.description}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Sudoku Puzzle */}
                        {section.puzzle && (
                          <div className="mt-8">
                            <h4 className="text-3xl font-bold text-center text-purple-800 mb-8 flex items-center justify-center">
                              <Puzzle className="w-8 h-8 mr-3 text-pink-500" />
                              {section.puzzle.title}
                            </h4>
                            <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-3xl max-w-md mx-auto">
                              <div className="grid grid-cols-9 gap-1 bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-2xl shadow-lg">
                                {section.puzzle.grid.map((row, i) => 
                                  row.map((cell, j) => (
                                    <div 
                                      key={`${i}-${j}`} 
                                      className="w-8 h-8 bg-white flex items-center justify-center text-sm font-bold text-purple-800 border border-purple-200 rounded"
                                    >
                                      {cell}
                                    </div>
                                  ))
                                )}
                              </div>
                              <div className="text-center mt-6 p-4 bg-white/70 rounded-2xl">
                                <p className="text-sm text-purple-700 flex items-center justify-center">
                                  <Mail className="w-4 h-4 mr-2 text-pink-500" />
                                  {section.puzzle.note}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Signature */}
                        {section.signature && (
                          <div className="mt-8 text-right">
                            <p className="text-purple-700 italic text-lg font-medium">{section.signature}</p>
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
        <section className="py-20 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 to-pink-600/90"></div>
          <div className="container mx-auto max-w-5xl relative z-10">
            <Card className="bg-white/10 backdrop-blur-lg text-white p-10 rounded-3xl border border-white/20 shadow-2xl">
              <h3 className="text-4xl font-bold mb-12 heading-lg flex items-center justify-center">
                <Users className="w-10 h-10 mr-4 text-pink-200" />
                OUR LOVELY TEAM
                <Heart className="w-10 h-10 ml-4 text-pink-200" />
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <h4 className="font-bold text-pink-200 mb-3 text-lg">PATRONS</h4>
                  <p className="leading-relaxed">Mr. A. Thirumoorthy & Mr. S. P. Arun Prasad</p>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <h4 className="font-bold text-purple-200 mb-3 text-lg">EDITORS</h4>
                  <p className="leading-relaxed">Mr. M. Manojkumar & Ms. M. Aruna</p>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <h4 className="font-bold text-indigo-200 mb-3 text-lg">DESIGNERS</h4>
                  <p className="leading-relaxed">Mr. JM. Chandru & Mr. M. Satheskumar</p>
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-6 heading-lg flex items-center justify-center">
                  <Coffee className="w-8 h-8 mr-3 text-pink-200" />
                  LET'S STAY CONNECTED
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <p className="text-pink-100 text-lg italic mb-6 leading-relaxed">
                    We'd love to hear from you! ✨
                  </p>
                  <p className="text-white/90 mb-8 leading-relaxed">
                    At Aakam 360, we believe in the power of collaboration and innovation. Whether 
                    you're a student, educator, entrepreneur, or industry leader, we're here to support your journey with warmth and care.
                  </p>
                  
                  <div className="space-y-5">
                    <div className="flex items-start p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <MapPin className="w-6 h-6 mr-4 text-pink-300 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-pink-200 mb-1">Our Home</p>
                        <p className="leading-relaxed">Block B, Pullipalayam, Sankari, Salem, Tamil Nadu, India – 637304</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <Phone className="w-6 h-6 mr-4 text-purple-300 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-purple-200 mb-1">Call Us</p>
                        <p className="leading-relaxed">+91 843 843 5777<br/>+91 843 843 5999</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <Mail className="w-6 h-6 mr-4 text-indigo-300 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-indigo-200 mb-1">Write to Us</p>
                        <p className="leading-relaxed">info@aakam360.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                      <Clock className="w-6 h-6 mr-4 text-pink-300 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-pink-200 mb-1">We're Available</p>
                        <p className="leading-relaxed">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
                  <div className="text-center mb-6">
                    <Heart className="w-12 h-12 mx-auto mb-4 text-pink-300" />
                    <h4 className="font-bold text-2xl mb-4">Let's Create Magic Together</h4>
                  </div>
                  <p className="text-white/90 mb-8 text-center leading-relaxed">
                    Reach out to us to explore opportunities in incubation, internships, research 
                    collaborations, or simply to share your wonderful ideas with our community.
                  </p>
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 w-full py-4 rounded-2xl font-medium shadow-lg transform hover:scale-105 transition-all duration-300">
                    <Mail className="w-5 h-5 mr-2" />
                    Start a Conversation 💕
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Warm Footer */}
        <footer className="py-12 px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <span>🌐</span>
                <span className="font-medium">www.aakam360.com</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 843 843 5777</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Block B, SSEI, Sankari</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-pink-400" />
              <p className="text-gray-300">
                Made with love © 2024 Aakam360. All rights reserved. | Echo 360 Newsletter
              </p>
              <Heart className="w-5 h-5 text-pink-400" />
            </div>
            <p className="text-gray-400 text-sm">
              Thank you for being part of our wonderful community! ✨
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Newsletter;
