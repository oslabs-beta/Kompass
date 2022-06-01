import * as types from '../actions/actionTypes';
import { AnyAction } from 'redux';

export interface NodeState {
  nodeList: any;
}

const initialState: NodeState = {
  nodeList: [],
};

const nodeReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  let newNodeList: string[] = [];

  switch (type) {
    case types.GET_NODES: {
      newNodeList.push(payload);
      return { nodeList: newNodeList };
    }
    default:
      return state;
  }
};

export default nodeReducer;
