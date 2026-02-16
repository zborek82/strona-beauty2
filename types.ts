import React from 'react';

export interface ServiceItem {
  name: string;
  price: string;
  duration: string;
  description?: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}