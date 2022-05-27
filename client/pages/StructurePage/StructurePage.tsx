import { ActionTypes } from '@mui/base';
import { ConstructionRounded } from '@mui/icons-material';
import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import { node } from 'webpack';
import * as actions from '../../actions/actions';
// import { nodeState } from '../../reducers/nodeReducer';
import { RootState } from '../../store';

const mapStateToProps = (state: RootState) => ({
  podList: state.podList,
  nodeList: state.nodeList,
});

const mapDispatchToProps = (dispatch: any) => ({
  // create functions that will dispatch action creators

  fetchPodData: (): void => {
    fetch('api/structure/pod', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((podList) => {
        // console.log('pods HERE:', podList);
        dispatch(actions.getPods(podList));
      })
      .catch((err) => console.log('Error in the fetchPodData:', err));
  },

  fetchNodeData: (): void => {
    fetch('api/structure/node', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((nodeList) => {
        // console.log('node HERE:', nodeList);
        dispatch(actions.getNodes(nodeList));
      })
      .catch((err) => console.log('Error in the fetchNodeData:', err));
  },
});

type KubeState = {
  nodeList?: any;
  podList?: any;
  fetchPodData: () => void;
  fetchNodeData: () => void;
};

class StructurePage extends Component<KubeState> {
  // constructor(props: any) {
  //   super(props);
  // }

  componentDidMount(): void {
    this.props.fetchNodeData();
    this.props.fetchPodData();
  }

  render() {
    console.log('CHECK STATE POD', this.props.podList);
    console.log('CHECK STATE NODE', this.props.nodeList);

    return (
      <div
        style={{
          background: 'lightblue',
          color: 'white',
          marginLeft: '250px',
          marginTop: '25px',
          marginRight: '10px',
          height: '1000px',
          // width: 'vw',
        }}
      >
        Hello from Structure Page
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StructurePage);
