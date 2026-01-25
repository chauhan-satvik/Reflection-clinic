import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface DoctorProfile {
  name: string;
  specialty: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  stars: number;
}