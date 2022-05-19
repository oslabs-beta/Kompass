import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
// KUBERNETES API IMPORT
const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

//define type
type k8sControllerType = {
  getAllPods: (req: Request, res: Response, next: NextFunction) => void;
  getAllNodes: (req: Request, res: Response, next: NextFunction) => void;
};

export const k8sController: k8sControllerType = {
  getAllPods: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const podsResult = await k8sApi.listNamespacedPod('default');
      res.locals.podList = podsResult.body;
      return next();
    } catch (err) {
      console.log('Error in k8Controller getAllPods', err);
      return next(err);
    }

    // k8sApi.listNamespacedPod('def  ault').then((res: Response) => {
    //   //     console.log(res.body);
    //   });
  },

  getAllNodes: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const nodeResult = await k8sApi.listNode('default');
      res.locals.nodeList = nodeResult.body;

      const nodeStatus = await k8sApi.listComponentStatus();
      res.locals.nodeStatus = nodeStatus;

      return next();
    } catch (err) {
      console.log('Error in k8Controller getAllNodes', err);
      return next(err);
    }
  },
};

//
// module.exports = k8sController;

// REFERENCE
// const data = (await k8sApi.listPodForAllNamespaces()).response.body.items;
