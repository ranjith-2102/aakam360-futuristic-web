import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Clock, Star } from 'lucide-react';

const MentorDashboard = () => {
  const upcomingSessions = [
    { id: '1', student: 'Anjali Sharma', topic: 'Career Guidance', time: '2:00 PM', date: 'Today' },
    { id: '2', student: 'Vikram Patel', topic: 'Technical Interview Prep', time: '4:00 PM', date: 'Tomorrow' },
  ];

  const pendingRequests = [
    { id: '1', student: 'Rohan Kumar', topic: 'Project Review', requestedTime: '3:00 PM, Jan 20' },
    { id: '2', student: 'Sneha Reddy', topic: 'Skill Development', requestedTime: '11:00 AM, Jan 22' },
  ];

  return (
    <div className="space-y-6">
      <div className="fade-in-up">
        <h2 className="heading-xl text-3xl text-navy mb-2">Mentor Dashboard</h2>
        <p className="body-large text-muted-foreground">
          Manage your mentoring sessions and help students grow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 fade-in-up">
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Sessions This Week</p>
                <p className="heading-lg text-2xl text-navy">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Active Mentees</p>
                <p className="heading-lg text-2xl text-navy">24</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Hours This Month</p>
                <p className="heading-lg text-2xl text-navy">42</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Average Rating</p>
                <p className="heading-lg text-2xl text-navy">4.8</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 fade-in-up">
        <Card className="modern-card">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="heading-lg text-xl text-navy">Upcoming Sessions</CardTitle>
              <Button variant="outline" size="sm">View Calendar</Button>
            </div>
            <CardDescription>Your scheduled mentoring sessions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="flex justify-between items-center p-4 border border-border rounded-lg">
                <div>
                  <h4 className="heading-lg text-base text-navy">{session.student}</h4>
                  <p className="body-small text-muted-foreground">{session.topic}</p>
                  <p className="body-small text-foreground">{session.date} at {session.time}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Reschedule</Button>
                  <Button size="sm">Join Session</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="modern-card">
          <CardHeader>
            <CardTitle className="heading-lg text-xl text-navy">Pending Requests</CardTitle>
            <CardDescription>Students waiting for your approval</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingRequests.map((request) => (
              <div key={request.id} className="flex justify-between items-center p-4 border border-border rounded-lg">
                <div>
                  <h4 className="heading-lg text-base text-navy">{request.student}</h4>
                  <p className="body-small text-muted-foreground">{request.topic}</p>
                  <p className="body-small text-foreground">Requested: {request.requestedTime}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Decline</Button>
                  <Button size="sm" className="btn-primary">Approve</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="modern-card fade-in-up">
        <CardHeader>
          <CardTitle className="heading-lg text-xl text-navy">Mentor Tools</CardTitle>
          <CardDescription>Manage your mentoring activities</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Button className="btn-primary h-16">
            <div className="text-center">
              <Calendar className="h-5 w-5 mx-auto mb-1" />
              <span>Set Availability</span>
            </div>
          </Button>
          <Button variant="outline" className="h-16">
            <div className="text-center">
              <Users className="h-5 w-5 mx-auto mb-1" />
              <span>View Mentees</span>
            </div>
          </Button>
          <Button variant="outline" className="h-16">
            <div className="text-center">
              <Clock className="h-5 w-5 mx-auto mb-1" />
              <span>Session History</span>
            </div>
          </Button>
          <Button variant="outline" className="h-16">
            <div className="text-center">
              <Star className="h-5 w-5 mx-auto mb-1" />
              <span>Feedback</span>
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MentorDashboard;