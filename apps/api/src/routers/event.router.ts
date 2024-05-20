import { EventController } from '@/controllers/event.controller';
import { verifyToken } from '@/lib/jwt';
import { uploader } from '@/lib/uploader';
import { Router } from 'express';

export class EventRouter {
  private router: Router;
  private eventController: EventController;
 

  constructor() {
    this.eventController = new EventController()
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/',
      verifyToken,
      uploader('IMG', '/images').array('thumbnail', 1),
      this.eventController.createEventController,
    );
    this.router.patch(
      '/:id',
      uploader('IMG', '/images').array('thumbnail', 1),
      this.eventController.updateEventController,
    );
    this.router.get('/', this.eventController.getEventsController);
    this.router.get('/:id', this.eventController.getEventController);
    this.router.get('/category', this.eventController.getCategoryController);
    this.router.get('/location', this.eventController.getLocationController);
  }

  getRouter(): Router {
    return this.router;
  }
}
