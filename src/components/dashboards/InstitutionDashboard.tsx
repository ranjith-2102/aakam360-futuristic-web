import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, FileText, BarChart, Calendar } from 'lucide-react';

const InstitutionDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="fade-in-up">
        <h2 className="heading-xl text-3xl text-navy mb-2">Institution Dashboard</h2>
        <p className="body-large text-muted-foreground">
          Manage students, track placements, and monitor institutional performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 fade-in-up">
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Total Students</p>
                <p className="heading-lg text-2xl text-navy">1,248</p>
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
                <p className="heading-lg text-2xl text-navy">24</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <BarChart className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Placement Rate</p>
                <p className="heading-lg text-2xl text-navy">87%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="modern-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-accent-blue" />
              <div>
                <p className="body-small text-muted-foreground">Events This Month</p>
                <p className="heading-lg text-2xl text-navy">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="modern-card fade-in-up">
        <CardHeader>
          <CardTitle className="heading-lg text-xl text-navy">Quick Actions</CardTitle>
          <CardDescription>Manage your institution efficiently</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button className="btn-primary h-16">
            <div className="text-center">
              <Users className="h-5 w-5 mx-auto mb-1" />
              <span>Student Management</span>
            </div>
          </Button>
          <Button variant="outline" className="h-16">
            <div className="text-center">
              <FileText className="h-5 w-5 mx-auto mb-1" />
              <span>MOU Tracker</span>
            </div>
          </Button>
          <Button variant="outline" className="h-16">
            <div className="text-center">
              <BarChart className="h-5 w-5 mx-auto mb-1" />
              <span>Analytics</span>
            </div>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstitutionDashboard;