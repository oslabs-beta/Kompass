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

// console.log(k8sApi);
// console.log(metricsClient);

//define type
type k8sControllerType = {
  getAllPods: (req: Request, res: Response, next: NextFunction) => void;
  getAllNodes: (req: Request, res: Response, next: NextFunction) => void;
  // getDeployments: (req: Request, res: Response, next: NextFunction) => void;

  // getTopPod: (req: Request, res: Response, next: NextFunction) => void;
};

export const k8sController: k8sControllerType = {
  getAllPods: async (req: Request, res: Response, next: NextFunction) => {
    console.log('In the getAllPods controller yay!');
    // const podList: (string | number)[] = [];
    try {
      const podsResult = await k8sApi.listNamespacedPod('default');
      // console.log(podsResult);

      // podsResult.forEach((pod: any) => [

      // ])

      res.locals.podList = podsResult;
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
    console.log('In the getAllNodes controller yay!');
    try {
      const nodeResult = await k8sApi.listNode('default');
      // console.log('contrl', nodeResult.body);
      res.locals.nodeList = nodeResult.body;

      const nodeStatus = await k8sApi.listComponentStatus();
      res.locals.nodeList.nodeStatus = nodeStatus.body;

      return next();
    } catch (err) {
      console.log('Error in k8Controller getAllNodes', err);
      return next(err);
    }
  },

  // getDeployments: async (req: Request, res: Response, next: NextFunction) => {
  //   console.log('In the getDeployments controller yay!');
  //   try {
  //     const deplResult = await k8sApi2.listNamespacedDeployment('default');
  //     res.locals.deplList = deplResult;

  //     return next();
  //   } catch (err) {
  //     console.log('Error in k8Controller getAllNodes', err);
  //     return next(err);
  //   }
  // },

  // getTopPod: async (req: Request, res: Response, next: NextFunction) => {
  //   console.log('In the getTopPod controller yay!');

  //   const grabPod = await k8s.topPods(k8sApi, metricsClient, 'monitoring');
  // console.log('COREY TOP POD', grabPod.body);

  // const podsColumns = await grabPod.map((pod: any) => {
  //   console.log(pod);
  //   // return {
  //   //   POD: pod.Pod.metadata.name,
  //   //   'CPU(cores)': pod.CPU.CurrentUsage,
  //   //   'MEMORY(bytes)': pod.Memory.CurrentUsage,
  //   // };
  // });
  // console.log('TOP PODS');
  // console.table(podsColumns);

  // k8s.topPods(k8sApi, metricsClient, 'kube-system').then((pods: any) => {
  //   const podsAndContainersColumns = pods.flatMap((pod: any) => {
  //     return pod.Containers.map((containerUsage: any) => {
  //       return {
  //         POD: pod.Pod.metadata.name,
  //         NAME: containerUsage.Container,
  //         'CPU(cores)': containerUsage.CPUUsage.CurrentUsage,
  //         'MEMORY(bytes)': containerUsage.MemoryUsage.CurrentUsage,
  //       };
  //     });
  //   });

  //   console.log('TOP CONTAINERS');
  //   console.table(podsAndContainersColumns);
  // });
  //   return next();
  // },
};

/*
const k8s = require('../dist/index');

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const metricsClient = new k8s.Metrics(kc);

k8s.topPods(k8sApi, metricsClient, "kube-system")
.then((pods) => {

    const podsColumns = pods.map((pod) => {
        return {
            "POD": pod.Pod.metadata.name,
            "CPU(cores)": pod.CPU.CurrentUsage,
            "MEMORY(bytes)": pod.Memory.CurrentUsage,
        }
    });
    console.log("TOP PODS")
    console.table(podsColumns)
});

k8s.topPods(k8sApi, metricsClient, "kube-system")
.then((pods) => {

    const podsAndContainersColumns = pods.flatMap((pod) => {
        return pod.Containers.map(containerUsage => {
            return {
                "POD": pod.Pod.metadata.name,
                "NAME": containerUsage.Container,
                "CPU(cores)": containerUsage.CPUUsage.CurrentUsage,
                "MEMORY(bytes)": containerUsage.MemoryUsage.CurrentUsage,
            };
        })
    });

    console.log("TOP CONTAINERS")
    console.table(podsAndContainersColumns)
});

*/
//
// module.exports = k8sController;

// REFERENCE
// const data = (await k8sApi.listPodForAllNamespaces()).response.body.items;
