import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import StudentDashboard from '@/components/dashboards/StudentDashboard';
import InstitutionDashboard from '@/components/dashboards/InstitutionDashboard';
import IndustryDashboard from '@/components/dashboards/IndustryDashboard';
import MentorDashboard from '@/components/dashboards/MentorDashboard';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out successfully",
      description: "See you next time!",
    });
  };

  const renderDashboard = () => {
    switch (user.role) {
      case 'student':
        return <StudentDashboard />;
      case 'institution':
        return <InstitutionDashboard />;
      case 'industry':
        return <IndustryDashboard />;
      case 'mentor':
        return <MentorDashboard />;
      default:
        return <div>Invalid role</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="heading-lg text-xl text-navy">Aakam360</h1>
            <span className="body-small text-muted-foreground capitalize">
              {user.role} Dashboard
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="body-small text-foreground">
              Welcome, {user.name}
            </span>
            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-6 py-8">
        {renderDashboard()}
      </main>
    </div>
  );
};

export default Dashboard;