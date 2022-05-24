import * as types from '../actions/actionTypes';
import { AnyAction } from 'redux';

const initialState = {
  pods: [],
};

const podReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PODS:
      console.log('made it to the get pods action reducer');
      const allPods: any[] = [];

      const fetchPodData = async () => {
        const data = await fetch('api/structure/pod');
        const json = await data.json();
        console.log(json);

        allPods.push(json);

        // console.log('data HERE', JSON.parse(data));
      };
      fetchPodData();

      return { ...state, pods: allPods };

    default:
      return state;
  }
};

export default podReducer;
