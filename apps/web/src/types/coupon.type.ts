interface Coupon {
  id: number;
  code: string;
  discountAmount: number;
  expirationDate: Date;
  organizerId?: number;
  eventId?: number;
}
