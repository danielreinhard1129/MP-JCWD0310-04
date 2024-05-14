interface Voucher {
  id: number;
  eventId?: number;
  organizerId?: number;
  voucher: string;
  price: number;
  limit: number;
  isUsed: boolean;
}
