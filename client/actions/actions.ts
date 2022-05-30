import { newClusters } from '@kubernetes/client-node/dist/config_types';
import * as actionTypes from './actionTypes';

// export const addCardActionCreator = (marketId) => ({
//   type: types.ADD_CARD,
//   payload: marketId,
// });

export const getPods = (podsList: any | null) => ({
  type: actionTypes.GET_PODS,
  payload: podsList,
});

export const getNodes = (nodesList: any) => ({
  type: actionTypes.GET_NODES,
  payload: nodesList,
});

// export const getCluster = (cluster: any) => ({
//   type: actionTypes.GET_CLUSTER,
//   payload: cluster,
// });

export const getDepl = (depl: any) => ({
  type: actionTypes.GET_DEPL,
  payload: depl,
});
