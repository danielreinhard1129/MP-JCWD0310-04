export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  referral?: string;
  points: number;
  role?: string;

  userReward?: boolean;
  event?: Event;
}
