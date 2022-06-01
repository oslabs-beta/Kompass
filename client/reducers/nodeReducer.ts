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
      console.log('made it to the get node action reducer');

      newNodeList.push(payload);
      // console.log('NODE DATA', nodeList);

      return { nodeList: newNodeList };
    }
    default:
      return state;
  }
};

export default nodeReducer;
