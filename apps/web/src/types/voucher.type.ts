interface Voucher {
  id: number;
  eventId?: number;
  organizerId?: number;
  voucher: string;
  percentage: number;
  limit: number;
  isUsed: boolean;
}
