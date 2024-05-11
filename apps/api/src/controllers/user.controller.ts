import { getProfileService } from "@/services/user/profile.service";
import { NextFunction, Request, Response } from "express";

export class UserController{

    async getUserController(req: Request, res: Response, next: NextFunction) {
        try {
          const id = req.params.id;
          const result = await getProfileService(Number(id));
    
          return res.status(200).send(result);
        } catch (error) {
          next(error);
        }
}
}
