import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Users, Lightbulb, FileText } from 'lucide-react';

const IndustryDashboard = () => {
  const recentInternshipPostings = [
    { id: '1', title: 'Data Science Intern', applications: 45, status: 'active' },
    { id: '2', title: 'UI/UX Designer', applications: 28, status: 'closed' },
  ];

  const innovationSubmissions = [
    { id: '1', title: 'AI-Powered Supply Chain', student: 'Rajesh Kumar', votes: 24 },
    { id: '2', title: 'Green Energy Solution', student: 'Priya Singh', votes: 18 },
  ];

  return (
    <div className="space-y-6">
      <div className="fade-in-up">
        <h2 className="heading-xl text-3xl text-navy mb-2">Industry Dashboard</h2>
        <p className="body-large text-muted-foreground">
          Post internships, review innovations, and connect with talent
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 fade-in-up">
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Building className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Active Postings</p>
                <p className="heading-lg text-2xl text-navy">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Applications Received</p>
                <p className="heading-lg text-2xl text-navy">342</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Innovation Reviews</p>
                <p className="heading-lg text-2xl text-navy">18</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Active MOUs</p>
                <p className="heading-lg text-2xl text-navy">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 fade-in-up">
        <Card className="modern-card">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="heading-lg text-xl text-navy">Internship Postings</CardTitle>
              <Button>Post New Internship</Button>
            </div>
            <CardDescription>Manage your internship opportunities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentInternshipPostings.map((posting) => (
              <div key={posting.id} className="flex justify-between items-center p-4 border border-border rounded-lg">
                <div>
                  <h4 className="heading-lg text-base text-navy">{posting.title}</h4>
                  <p className="body-small text-muted-foreground">{posting.applications} applications</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={posting.status === 'active' ? 'default' : 'secondary'}>
                    {posting.status}
                  </Badge>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="modern-card">
          <CardHeader>
            <CardTitle className="heading-lg text-xl text-navy">Innovation Submissions</CardTitle>
            <CardDescription>Review and vote on student innovations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {innovationSubmissions.map((submission) => (
              <div key={submission.id} className="flex justify-between items-center p-4 border border-border rounded-lg">
                <div>
                  <h4 className="heading-lg text-base text-navy">{submission.title}</h4>
                  <p className="body-small text-muted-foreground">by {submission.student}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{submission.votes} votes</Badge>
                  <Button variant="outline" size="sm">Review</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="modern-card fade-in-up">
        <CardHeader>
          <CardTitle className="heading-lg text-xl text-navy">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Button className="btn-primary h-16">
            <div className="text-center">
              <Building className="h-5 w-5 mx-auto mb-1" />
              <span>Post Internship</span>
            </div>
          </Button>
          <Button variant="outline" className="h-16">
            <div className="text-center">
              <Users className="h-5 w-5 mx-auto mb-1" />
              <span>Review Applications</span>
            </div>
          </Button>
          <Button variant="outline" className="h-16">
            <div className="text-center">
              <Lightbulb className="h-5 w-5 mx-auto mb-1" />
              <span>Innovation Hub</span>
            </div>
          </Button>
          <Button variant="outline" className="h-16">
            <div className="text-center">
              <FileText className="h-5 w-5 mx-auto mb-1" />
              <span>MOU Management</span>
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndustryDashboard;