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
  createdAt: Date;
  updatedAt: Date;
  isFree: Boolean;
  startDate: Date;
  endDate: Date;

  organizer: User;
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

export interface Promotion {
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
  createdAt: Date;
  updatedAt: Date;
  isFree: Boolean;
  startDate: Date;
  endDate: Date;
  voucher: string;

  organizer: User;
}

export interface IFormCreatePromotion {
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
  voucher: string;
}
