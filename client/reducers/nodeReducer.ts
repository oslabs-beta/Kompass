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
  let nodeList: string[];

  switch (type) {
    case types.GET_NODES: {
      console.log('made it to the get node action reducer');

      nodeList = state.nodeList.slice();
      nodeList.push(payload);
      // console.log('NODE DATA', nodeList);

      return { ...state, nodeList: nodeList };
    }
    default:
      return state;
  }
};

export default nodeReducer;
