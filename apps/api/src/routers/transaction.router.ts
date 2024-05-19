import { Router } from 'express';
import { uploader } from '@/lib/uploader';
import { TransactionController } from '@/controllers/transaction.controller';

export class TransactionRouter {
  private router: Router;
  private transactionController: TransactionController;

  constructor() {
    this.router = Router();
    this.transactionController = new TransactionController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // Endpoint untuk mendapatkan transaksi oleh organizer
    this.router.get(
      '/organizer',
      this.transactionController.getTransactionsController,
    );

    // Endpoint untuk membuat transaksi baru
    this.router.post(
      '/',
      uploader('IMG', '/txProof').array('paymentProof', 1),
      this.transactionController.createTransaction,
    );

    // Endpoint untuk mendapatkan detail transaksi berdasarkan ID
    this.router.get(
      '/:id',
      this.transactionController.getTransactionController,
    );

    // Endpoint untuk memperbarui transaksi berdasarkan ID
    this.router.patch(
      '/:id',
      uploader('IMG', '/txProof').array('paymentProof', 1),
      this.transactionController.updateTransactionController,
    );

    // Endpoint untuk memperbarui status transaksi berdasarkan ID
    this.router.patch(
      '/:id/status',
      this.transactionController.updateTransactionStatusController,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
