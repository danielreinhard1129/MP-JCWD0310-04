import { TransactionController } from '@/controllers/transaction.controller';
import { Router } from 'express';

export class TransactionRouter {
  private router: Router;
  private transactionController: TransactionController;

  constructor() {
    this.transactionController = new TransactionController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.transactionController.getTransactionController);
    this.router.post(
      '/',
      this.transactionController.createTransactionController,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
