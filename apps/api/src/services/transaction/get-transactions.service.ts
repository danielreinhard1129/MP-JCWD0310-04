import prisma from '@/prisma';
import { PaginationQueryParams } from '@/types/pagination.type';
import { TransactionStatus } from '@/types/transactionStatus.type';
import { Prisma } from '@prisma/client';

interface GetTransactionsQuery extends PaginationQueryParams {
  id: number;
  search: string;
  status: TransactionStatus;
}

export const getTransactionsService = async (query: GetTransactionsQuery) => {
  try {
    const { page, search, sortBy, sortOrder, take, id, status } = query;

    const whereClause: Prisma.TransactionWhereInput = {
      invoice: { contains: search },
      event: { organizer: { id } },
      status: status,
    };

    const transactions = await prisma.transaction.findMany({
      where: whereClause,
      // include: { user: true },
      skip: (page - 1) * take,
      take: take,
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: { event: { include: { organizer: true } }, user: true },
    });

    const count = await prisma.transaction.count({ where: whereClause });

    return {
      data: transactions,
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
