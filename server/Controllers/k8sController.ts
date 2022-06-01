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
const k8sApi2 = kc.makeApiClient(k8s.AppsV1Api);

const metricsClient = new k8s.Metrics(kc);

//define type
type k8sControllerType = {
  getAllPods: (req: Request, res: Response, next: NextFunction) => void;
  getAllNodes: (req: Request, res: Response, next: NextFunction) => void;
  getAllNamespaces: (req: Request, res: Response, next: NextFunction) => void;
};

export const k8sController: k8sControllerType = {
  getAllPods: async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;

    try {
      const podsResult = await k8sApi.listNamespacedPod(name);

      res.locals.podList = podsResult;
      return next();
    } catch (err) {
      return next(err);
    }
  },

  getAllNodes: async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.params;

    try {
      const nodeResult = await k8sApi.listNode(name);
      res.locals.nodeList = nodeResult.body;

      const nodeStatus = await k8sApi.listComponentStatus();
      res.locals.nodeList.nodeStatus = nodeStatus.body;

      return next();
    } catch (err) {
      return next(err);
    }
  },

  getAllNamespaces: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const namespaceResult = await k8sApi.listNamespace();

      res.locals.namespace = namespaceResult;
      return next();
    } catch (err) {
      return next(err);
    }
  },
};
