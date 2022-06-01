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
      console.log('pod', payload);

      console.log('made it to the get pods action reducer');
      newPodList.push(payload);
      console.log('NEWpod', newPodList);

      return { podList: newPodList };
    }
    default:
      return state;
  }
};

export default podReducer;
