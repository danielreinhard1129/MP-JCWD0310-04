import { User } from './user.type';

export interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  thumbnail: string;
  category: string;
  organizerId: number;
  availableSeats: number;
  booked: number;
  price: number;
  time: string;
  updatedAt: Date;
  user: User;
  isFree: Boolean;
  startDate: Date;
  endDate: Date;
}

export interface IFormCreateEvent {
  title: string;
  description: string;
  location: string;
  thumbnail: File[];
  category: string;
  organizerId?: number;
  availableSeats: number;
  booked: number;
  price: number;
  time: string;
  isFree: Boolean;
  startDate: Date;
  endDate: Date;
}
