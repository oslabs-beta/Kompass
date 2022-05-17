import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import { k8sController } from '../Controllers/k8sController';

const metricsRouter = express.Router();

metricsRouter.get(
  '/node',
  k8sController.getAllNodes,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals);
  }
);

metricsRouter.get(
  '/pod',
  k8sController.getAllPods,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.podList);
  }
);

module.exports = metricsRouter;
