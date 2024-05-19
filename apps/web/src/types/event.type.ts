import { User } from './user.type';
import { Voucher } from './voucher.type';

export interface Event {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  location: string;
  address: string;
  isAvailable: boolean;
  availableSeats: number;
  startDate: Date;
  endDate: Date;
  price: number;
  booked: number;
  createdAt: Date;
  updatedAt: Date;
  organizerId: number;

  organizer: User;
  voucher: Voucher;
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
  startDate: Date;
  endDate: Date;
  voucherCode: string | null;
  voucherAmount: number | null;
  voucherLimit: number | null;
  voucherExpDate: Date | null;
}
