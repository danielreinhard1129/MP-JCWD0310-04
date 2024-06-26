import { createReviewService } from '@/services/review/create-review.service';
import { getReviewService } from '@/services/review/get-review.service';
import { getReviewByEventService } from '@/services/review/get-reviewByEvent.service';
import { getReviewsService } from '@/services/review/get-reviews.service';
import { NextFunction, Request, Response } from 'express';

export class ReviewController {
  async getReviewController(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const result = await getReviewService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getReviewByEventController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const id = req.params.id;
      const result = await getReviewByEventService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getReviewsController(req: Request, res: Response, next: NextFunction) {
    try {
      // const id = req.params.id;
      const result = await getReviewsService();

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async createReviewController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await createReviewService(req.body);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
