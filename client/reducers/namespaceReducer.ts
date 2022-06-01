import * as types from '../actions/actionTypes';
import { AnyAction } from 'redux';

const initialState = {
  namespaceList: [],
};

const namespaceReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_NAMESPACE:
      return { ...state, namespaceList: action.payload };
    default:
      return state;
  }
};

export default namespaceReducer;
