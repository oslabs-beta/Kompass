import * as types from '../actions/actionTypes';
import { AnyAction } from 'redux';

const initialState = {
  pods: [],
};

const podReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PODS: {
      console.log('made it to the get pods action reducer');

      return { ...state, pods: payload };
    }
    default:
      return state;
  }
};

export default podReducer;
