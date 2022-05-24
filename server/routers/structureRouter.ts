import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import { k8sController } from '../Controllers/k8sController';

const structureRouter = express.Router();

structureRouter.get(
  '/node',
  k8sController.getAllNodes,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals);
  }
);

structureRouter.get(
  '/pod',
  k8sController.getAllPods,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.podList);
  }
);

// structureRouter.get(
//   '/topPod',
//   k8sController.getTopPod,
//   (req: Request, res: Response) => {
//     res.status(200).json(res.locals.podList);
//   }
// );

module.exports = structureRouter;
