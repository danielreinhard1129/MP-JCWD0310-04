import { Event } from './event.type';
import { Review } from './review.type';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  referralCode?: string;
  point: number;
  role?: string;
  userReward?: boolean;

  event?: Event;
  Review?: Review[];
}
