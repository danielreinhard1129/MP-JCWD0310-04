import { Event } from './event.type';
import { User } from './user.type';

export interface Transaction {
  id: number;
  status: string;
  qty: number;
  total: number;
  paymentProof: string | null;
  eventId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  event: Event;
  user: User;
}

export interface IFormCreateTransaction {
  qty: number;
  totalAmount: number;
  eventId?: number | undefined;
  userId?: number | undefined;
  // paymentProof: File[];
}
