import prisma from '@/prisma';
import { Transaction } from '@prisma/client';

interface CreateTransactionBody
  extends Omit<
    Transaction,
    'status' | 'paymentProof' | 'updatedAt' | 'createdAt'
  > {}
export const createTransactionService = async (
  body: CreateTransactionBody,
  // file: Express.Multer.File,
) => {
  try {
    const {
      invoice,
      // status,
      total,
      userId,
      eventId,
      userCouponId,
      userVoucherId,
      qty,
      isUsePoint,
      isUseCoupon,
      isUseVoucher,
    } = body;

    const transaction = await prisma.transaction.create({
      data: {
        invoice: String(invoice),
        status: 'PENDING',
        total: Number(total),
        userId: Number(userId),
        eventId: Number(eventId),
        userCouponId: Number(userCouponId),
        userVoucherId: Number(userVoucherId),
        qty: Number(qty),
        isUsePoint: Boolean(isUsePoint),
        isUseCoupon: Boolean(isUseCoupon),
        isUseVoucher: Boolean(isUseVoucher),
      },
    });

    return transaction;
  } catch (error) {
    throw error;
  }
};
