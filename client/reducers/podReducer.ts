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
  let podList: string[];

  switch (type) {
    case types.GET_PODS: {
      console.log('made it to the get pods action reducer');
      podList = state.podList.slice();
      podList.push(payload);

      return { ...state, podList: podList };
    }
    default:
      return state;
  }
};

export default podReducer;
