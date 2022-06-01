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
import GetNamespaceComp from '../../components/GetNamespaceComp';

const mapStateToProps = (state: RootState) => ({
  podList: state.podList,
  nodeList: state.nodeList,
  namespaceList: state.namespaceList,
  // deplList: state.deplList,
});

const mapDispatchToProps = (dispatch: any) => ({
  // create functions that will dispatch action creators
  fetchNamespaceData: (): void => {
    fetch('api/structure/namespace', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((namespaceList) => {
        // console.log('pods HERE:', podList);
        dispatch(actions.getNamespace(namespaceList));
      })
      .catch((err) => console.log('Error in the fetchPodData:', err));
  },

  fetchPodData: (query?: string): void => {
    // console.log('query', query);
    if (!query) {
      query = 'default';
    }
    // console.log(query);
    fetch(`api/structure/pod/${query}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((podList) => {
        // console.log('pods HERE:', podList);
        dispatch(actions.getPods(podList));
      })
      .catch((err) => console.log('Error in the fetchPodData:', err));
  },

  fetchNodeData: (query?: string): void => {
    if (!query) {
      query = 'default';
    }
    fetch(`api/structure/node/${query}`, {
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
  namespaceList?: any;
  fetchNamespaceData: () => void;
  fetchPodData: () => void;
  fetchNodeData: () => void;
  // NodeStructure: React.ComponentType<NodeProps>;
  // fetchDeplData: () => void;
};

interface NodeProps {
  // [key: string]: any;
  // nodeInfo: any;
  // namespaceInfo: any;
}

// const [namespace, setNamespace] = React.useState('default');

// class StructurePage extends Component<KubeState, NodeProps> {
class StructurePage extends Component<KubeState, NodeProps> {
  // constructor(props: any) {
  //   super(props);
  // }

  // handleNamespaceChange = (e: any): void => {
  //   // console.log('getcomp ns', e.target.value);
  //   // setNs(e.target.value as string);
  //   this.props.fetchPodData(e.target.value);
  //   // props.fetchNodeData(ns)
  // };

  componentDidMount(): void {
    this.props.fetchNamespaceData();
    this.props.fetchNodeData();
    this.props.fetchPodData();
    // this.props.fetchDeplData();
  }

  // componentDidUpdate(): void {
  //   this.props.podList;
  // }

  render() {
    const node: any = this.props.nodeList.nodeList[0];
    // const pod: any = this.props.podList.podList[0];
    const namespace: any = this.props.namespaceList.namespaceList;

    console.log('rendering', this.props.podList);
    // const { items } = namespace;

    // console.log('pod', pod);
    // console.log('namespace', namespace);

    return (
      <div
        style={{
          color: 'white',
          marginLeft: '250px',
          marginTop: '25px',
          marginRight: '10px',
          height: '900px',
        }}
      >
        <div className='boxes'>
          <header>
            <h1>Select a Namespace</h1>
          </header>
          <div
            className='namespaceContainer'
            style={{
              background: '#121212',
              display: 'flex',
              height: '5em',
            }}
          >
            {namespace && (
              <GetNamespaceComp
                namespaceInfo={namespace.body}
                fetchPodData={this.props.fetchPodData}
                fetchNodeData={this.props.fetchNodeData}
              />
            )}
          </div>
        </div>
        <hr></hr>
        <div className='boxes'>
          <header>
            <h1>Pod Structure</h1>
          </header>
          {/* {pod && <PodStructure podInfo={pod.body} />} */}
          <PodStructure podInfo={this.props.podList} />
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
