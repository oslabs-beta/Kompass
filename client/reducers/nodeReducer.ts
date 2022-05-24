import * as types from '../actions/actionTypes';
import { AnyAction } from 'redux';

const initialState = {
  nodes: [],
  // currentNode: {},
};

const nodeReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_NODES:
      return {
        ...state,
        nodes: action.payload,
        // currentNode: action.payload[0],
      };

    default:
      return state;
  }
};

export default nodeReducer;
