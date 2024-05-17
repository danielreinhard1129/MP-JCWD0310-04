import prisma from '@/prisma';
import { Transaction } from '@prisma/client';

interface CreateTransactionBody
  extends Omit<Transaction, 'id' | 'updatedAt' | 'createdAt'> {}
export const createTransactionService = async (body: CreateTransactionBody) => {
  try {
    const { userId, eventId, paymentProof, total, status, qty } = body;

    const transaction = await prisma.transaction.create({
      data: {
        qty: Number(qty),
        userId: Number(userId),
        eventId: Number(eventId),
        total: Number(total),
        status: 'PENDING',
        paymentProof: String(paymentProof),
      },
    });

    return transaction;
  } catch (error) {
    throw error;
  }
};
