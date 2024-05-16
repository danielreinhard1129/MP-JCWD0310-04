import { User } from './user.type';

export interface Reward {
  id: number;
  userId: number;
  percentage: number;
  nominal: Number;
  title: string;
  isUsed: boolean;

  user: User;
}
