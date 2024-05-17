import { User } from './user.type';

export interface Event {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  location: string;
  address: string;
  availableSeats: number;
  startDate: Date;
  endDate: Date;
  price: number;
  isFree: boolean;
  booked: number;
  createdAt: Date;
  updatedAt: Date;
  organizerId: number;

  organizer: User;
}

export interface IFormCreateEvent {
  title: string;
  description: string;
  thumbnail: File[];
  location: string;
  organizerId?: number;
  availableSeats: number;
  category: string;
  price: number;
  booked: number;
  address: string;
  isFree: boolean;
  startDate: Date;
  endDate: Date;
}
