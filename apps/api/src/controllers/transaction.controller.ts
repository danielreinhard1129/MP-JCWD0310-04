import { createTransactionService } from '@/services/transaction/create-transaction.service';
import { getTransactionService } from '@/services/transaction/get-transaction.service';
import { getTransactionsService } from '@/services/transaction/get-transactions.service';
import { updateTransactionStatusService } from '@/services/transaction/update-transaction-status.service';
import { updateTransactionService } from '@/services/transaction/update-transaction.service';
import { TransactionStatus } from '@/types/transactionStatus.type';
import { NextFunction, Request, Response } from 'express';

export class TransactionController {
  async createTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const files = req.files as Express.Multer.File[];

      const result = await createTransactionService(req.body);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getTransactionController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const id = req.params.id;
      const result = await getTransactionService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async updateTransactionController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const files = req.files as Express.Multer.File[];

      const result = await updateTransactionService(
        Number(req.params.id),
        req.body,
        files[0],
      );

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async updateTransactionStatusController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await updateTransactionStatusService(
        Number(req.params.id),
        req.body,
      );

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  // GET TRANSACTIONS
  async getTransactionsController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const query = {
        id: parseInt(req.query.id as string),
        take: parseInt(req.query.take as string) || 8,
        page: parseInt(req.query.page as string) || 1,
        sortBy: parseInt(req.query.sortBy as string) || 'createdAt',
        sortOrder: parseInt(req.query.sortOrder as string) || 'desc',
        search: req.query.search as string,
        status: req.query.status as TransactionStatus,
      };
      const result = await getTransactionsService(query);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
