import { getCouponService } from '@/services/coupon/get-coupon.service';
import { NextFunction, Request, Response } from 'express';

export class CouponController {
  async getCouponController(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const result = await getCouponService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
