import { ActionTypes } from '@mui/base';
import { ConstructionRounded } from '@mui/icons-material';
import React, { useEffect, Component, useState } from 'react';
import { connect } from 'react-redux';
import { node } from 'webpack';
import * as actions from '../../actions/actions';
import { RootState } from '../../store';
import NodeComp from '../../components/NodeStructure';
import NodeStructure from '../../components/NodeStructure';
import PodStructure from '../../components/PodStructure';

const mapStateToProps = (state: RootState) => ({
  podList: state.podList,
  nodeList: state.nodeList,
  // deplList: state.deplList,
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
  deplList?: any;
  fetchPodData: () => void;
  fetchNodeData: () => void;
  // NodeStructure: React.ComponentType<NodeProps>;
  // fetchDeplData: () => void;
};

interface NodeProps {
  // [key: string]: any;
  nodeInfo: any;
}

// class StructurePage extends Component<KubeState, NodeProps> {
class StructurePage extends Component<KubeState, NodeProps> {
  // constructor(props: any) {
  //   super(props);
  // }

  componentDidMount(): void {
    this.props.fetchNodeData();
    this.props.fetchPodData();
    // this.props.fetchDeplData();
  }

  render() {
    const node: any = this.props.nodeList.nodeList[0];
    const pod: any = this.props.podList.podList[0];
    // const items = node.items;
    // // const { nodeStatus } = node.nodeList.nodeStatus;
    // if (pod) {
    //   console.log('pod', pod);
    // }
    return (
      <div
        style={{
          color: 'white',
          // background: 'red',
          marginLeft: '250px',
          marginTop: '25px',
          marginRight: '10px',
          height: '1000px',
          // width: 'vw',
        }}
      >
        <div className='boxes'>
          <header>
            <h1>Pod Structure</h1>
          </header>
          {pod && <PodStructure podInfo={pod.body} />}
        </div>
        <hr></hr>

        <div className='boxes'>
          <header>
            <h1>Node Structure</h1>
          </header>
          {node && (
            <NodeStructure
              nodeInfo={node.items}
              nodeStatus={node.nodeStatus.items}
            />
          )}
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StructurePage);
