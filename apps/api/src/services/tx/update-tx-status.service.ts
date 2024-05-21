import prisma from '@/prisma';
import { Transaction } from '@prisma/client';

export const updateTransactionStatusService = async (
  id: number,
  body: Pick<Transaction, 'status'>,
) => {
  try {
    const { status } = body;

    const tx = await prisma.transaction.findFirst({
      where: { id },
    });

    if (!tx) {
      throw new Error('Transaction not found');
    }

    return await prisma.transaction.update({
      where: { id },
      data: { status },
    });
  } catch (error) {
    throw error;
  }
};
