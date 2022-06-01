import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import { k8sController } from '../Controllers/k8sController';

const structureRouter = express.Router();

structureRouter.get(
  '/node/:name',
  k8sController.getAllNodes,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.nodeList);
  }
);

structureRouter.get(
  '/pod/:name',
  k8sController.getAllPods,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.podList);
  }
);

structureRouter.get(
  '/namespace',
  k8sController.getAllNamespaces,
  (req: Request, res: Response) => {
    console.log('back to namespace router');
    res.status(200).json(res.locals.namespace);
  }
);

// structureRouter.get(
//   '/pod',
//   k8sController.getAllPods,
//   (req: Request, res: Response) => {
//     res.status(200).json(res.locals.podList);
//   }
// );

// structureRouter.get(
//   '/depl',
//   k8sController.getAllPods,
//   (req: Request, res: Response) => {
//     res.status(200).json(res.locals.deplList);
//   }
// );

// structureRouter.get(
//   '/topPod',
//   k8sController.getTopPod,
//   (req: Request, res: Response) => {
//     res.status(200).json(res.locals.podList);
//   }
// );

module.exports = structureRouter;
