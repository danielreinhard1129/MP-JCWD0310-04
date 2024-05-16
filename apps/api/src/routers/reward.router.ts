import { RewardController } from '@/controllers/reward.controller';
import { Router } from 'express';

export class RewardRouter {
  private router: Router;
  private rewardController: RewardController;

  constructor() {
    this.rewardController = new RewardController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    // this.router.get('/', this.rewardController.getRewardsController);
    this.router.get('/:id', this.rewardController.getRewardController);
  }

  getRouter(): Router {
    return this.router;
  }
}
