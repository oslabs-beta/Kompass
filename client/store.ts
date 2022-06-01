import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import reducers from './reducers/index';
import podReducer from './reducers/podReducer';
import nodeReducer from './reducers/nodeReducer';
import namespaceReducer from './reducers/namespaceReducer';

// import clusterReducer from './reducers/clusterReducer';
// import deplReducer from './reducers/deplReducer';

export const store = configureStore({
  reducer: {
    podList: podReducer,
    nodeList: nodeReducer,
    namespaceList: namespaceReducer,
    // cluster: clusterReducer,
    // deplList: deplReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
