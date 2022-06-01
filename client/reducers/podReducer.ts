import * as types from '../actions/actionTypes';
import { AnyAction } from 'redux';

export interface PodState {
  podList: any;
}

const initialState: PodState = {
  podList: [],
};

const podReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  let newPodList: string[] = [];

  switch (type) {
    case types.GET_PODS: {
      newPodList.push(payload);

      return { podList: newPodList };
    }
    default:
      return state;
  }
};

export default podReducer;
