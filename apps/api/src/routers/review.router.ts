import { ReviewController } from '@/controllers/review.controller';
import { Router } from 'express';

export class ReviewRouter {
  private router: Router;
  private reviewController: ReviewController;

  constructor() {
    this.reviewController = new ReviewController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.reviewController.getReviewsController);
    this.router.get('/:id', this.reviewController.getReviewController);
    this.router.get('/events/:id', this.reviewController.getReviewByEventController);
    this.router.post('/', this.reviewController.createReviewController);
  }

  getRouter(): Router {
    return this.router;
  }
}
