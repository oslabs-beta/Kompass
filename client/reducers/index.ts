import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import type { RootState, AppDispatch } from '../store';
import podReducer from './podReducer';
import nodeReducer from './nodeReducer';
// import clusterReducer from './clusterReducer';

const reducers = combineReducers({
  pods: podReducer,
  nodes: nodeReducer,
  // cluster: clusterReducer,
});

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default reducers;
