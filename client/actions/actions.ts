import { newClusters } from '@kubernetes/client-node/dist/config_types';
import * as actionTypes from './actionTypes';

export const getPods = (podsList: any | null) => ({
  type: actionTypes.GET_PODS,
  payload: podsList,
});

export const getNodes = (nodesList: any) => ({
  type: actionTypes.GET_NODES,
  payload: nodesList,
});

export const getNamespace = (namespaceList: any) => ({
  type: actionTypes.GET_NAMESPACE,
  payload: namespaceList,
});

export const getDepl = (depl: any) => ({
  type: actionTypes.GET_DEPL,
  payload: depl,
});
