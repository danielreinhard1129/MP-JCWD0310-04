import { UserController } from '@/controllers/user.controller';
import { Router } from 'express';

export class UserRouter {
    private router: Router;
    private userController: UserController;

    constructor() {
        this.userController = new UserController();
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {

        this.router.get('/', this.userController.getUsersController);
        this.router.get('/:id', this.userController.getUserController);


        // review
        this.router.get('/reviews', this.userController.getReviewsController);
        this.router.get('/review/:id', this.userController.getReviewController);
        this.router.post('/reviews', this.userController.createReviewController);
    }

    getRouter(): Router {
        return this.router;
    }
}
