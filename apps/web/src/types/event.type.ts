import { Category } from './category.type';
import { User } from './user.type';

export interface Event {
  id: number;
  organizerId: number;
  title: string;
  description: string;
  location: string;
  venue: string;
  thumbnail: string;
  availableSeats: number;
  price: number;
  time: string;
  isFree: boolean;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
  booked: number;
  categoryId: number;

  category: Category;
  organizer: User;
}

export interface IFormCreateEvent {
  title: string;
  description: string;
  thumbnail: File[];
  categoryId?: number;
  organizerId?: number;
  availableSeats: number;
  location: string;
  venue: string;
  booked: number;
  price: number;
  time: string;
  isFree: boolean;
  startDate: Date;
  endDate: Date;

  ticketTypes: TicketType[];
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
