import { User } from './user.type';

export interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  availableSeats: number;
  booked: number;
  image: string;
  startDate: Date;
  endDate: Date;
  price: number;
  time: Date;
  isFree: Boolean;
  category: string;
  organizerId: number;
  updatedAt: Date;

  user: User;
}

export interface IFormCreateEvent {
  title: string;
  description: string;
  location: string;
  availableSeats: number;
  booked: number;
  image: string;
  startDate: Date;
  endDate: Date;
  price: number;
  time: Date;
  isFree: Boolean;
  category: string;
  organizerId: number;
}
