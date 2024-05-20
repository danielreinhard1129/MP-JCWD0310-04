import { getUserService } from '@/services/user/get-user.service';
import { getUsersService } from '@/services/user/get-users.service';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  // user controller

  async getUserController(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const result = await getUserService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getUsersController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getUsersService();

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
