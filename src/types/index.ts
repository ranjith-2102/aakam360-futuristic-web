export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'institution' | 'industry' | 'mentor';
  avatar?: string;
  createdAt: Date;
}

export interface Internship {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  domain: string;
  duration: string;
  deadline: Date;
  requirements: string[];
  stipend?: number;
  postedBy: string;
  createdAt: Date;
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  avatar?: string;
  rating: number;
  availableSlots: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  startTime: Date;
  endTime: Date;
  isAvailable: boolean;
}

export interface Innovation {
  id: string;
  title: string;
  description: string;
  category: string;
  submittedBy: string;
  attachments: string[];
  votes: number;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

export interface Booking {
  id: string;
  studentId: string;
  mentorId: string;
  slot: TimeSlot;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: Date;
}