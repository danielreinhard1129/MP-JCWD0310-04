import { getRewardService } from '@/services/reward/get-reward.service';
import { NextFunction, Request, Response } from 'express';

export class RewardController {
  async getRewardController(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const result = await getRewardService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
