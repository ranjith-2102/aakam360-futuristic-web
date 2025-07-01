import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, BookOpen, Lightbulb, Users } from 'lucide-react';

const StudentDashboard = () => {
  const [activeBookings] = useState([
    {
      id: '1',
      mentorName: 'Dr. Sarah Johnson',
      topic: 'Career Guidance',
      date: '2024-01-15',
      time: '2:00 PM'
    }
  ]);

  const [availableInternships] = useState([
    {
      id: '1',
      title: 'Software Development Intern',
      company: 'TechCorp',
      location: 'Bangalore',
      domain: 'Technology',
      stipend: 25000
    },
    {
      id: '2',
      title: 'Marketing Intern',
      company: 'StartupXYZ',
      location: 'Mumbai',
      domain: 'Marketing',
      stipend: 15000
    }
  ]);

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="fade-in-up">
        <h2 className="heading-xl text-3xl text-navy mb-2">Student Dashboard</h2>
        <p className="body-large text-muted-foreground">
          Explore internships, book mentorship sessions, and showcase your innovations
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 fade-in-up">
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Active Applications</p>
                <p className="heading-lg text-2xl text-navy">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Upcoming Sessions</p>
                <p className="heading-lg text-2xl text-navy">{activeBookings.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Innovation Projects</p>
                <p className="heading-lg text-2xl text-navy">2</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Network Connections</p>
                <p className="heading-lg text-2xl text-navy">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="internships" className="fade-in-up">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="internships">Internships</TabsTrigger>
          <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
          <TabsTrigger value="innovation">Innovation Hub</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        
        <TabsContent value="internships" className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <h3 className="heading-lg text-xl text-navy">Available Internships</h3>
            <Button variant="outline">Filter & Sort</Button>
          </div>
          
          <div className="grid gap-4">
            {availableInternships.map((internship) => (
              <Card key={internship.id} className="modern-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="heading-lg text-lg text-navy mb-2">{internship.title}</h4>
                      <p className="body-large text-foreground mb-2">{internship.company}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">{internship.location}</Badge>
                        <Badge variant="secondary">{internship.domain}</Badge>
                        <Badge variant="outline">₹{internship.stipend}/month</Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Save</Button>
                      <Button size="sm" className="btn-primary">Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="mentorship" className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <h3 className="heading-lg text-xl text-navy">Mentorship Sessions</h3>
            <Button>Book New Session</Button>
          </div>
          
          {activeBookings.map((booking) => (
            <Card key={booking.id} className="modern-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="heading-lg text-lg text-navy">{booking.mentorName}</h4>
                    <p className="body-large text-muted-foreground">{booking.topic}</p>
                    <p className="body-small text-foreground">{booking.date} at {booking.time}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Reschedule</Button>
                    <Button size="sm">Join Session</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="innovation" className="space-y-4 mt-6">
          <div className="flex justify-between items-center">
            <h3 className="heading-lg text-xl text-navy">Innovation Hub</h3>
            <Button>Submit New Project</Button>
          </div>
          
          <Card className="modern-card">
            <CardContent className="p-6 text-center">
              <Lightbulb className="h-12 w-12 text-accent-blue mx-auto mb-4" />
              <h4 className="heading-lg text-lg text-navy mb-2">Share Your Innovation</h4>
              <p className="body-large text-muted-foreground mb-4">
                Submit your innovative ideas and get feedback from industry experts
              </p>
              <Button>Get Started</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="profile" className="space-y-4 mt-6">
          <Card className="modern-card">
            <CardHeader>
              <CardTitle className="heading-lg text-xl text-navy">Profile Settings</CardTitle>
              <CardDescription>Manage your account and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">Edit Profile</Button>
              <Button variant="outline" className="w-full">Resume Upload</Button>
              <Button variant="outline" className="w-full">Skill Assessment</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentDashboard;