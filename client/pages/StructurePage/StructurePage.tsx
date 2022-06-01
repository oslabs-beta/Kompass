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
});

const mapDispatchToProps = (dispatch: any) => ({
  // create functions that will dispatch action creators
  fetchNamespaceData: (): void => {
    fetch('api/structure/namespace', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((namespaceList) => {
        dispatch(actions.getNamespace(namespaceList));
      })
      .catch((err) => console.log('Error in the fetchPodData:', err));
  },

  fetchPodData: (query?: string): void => {
    if (!query) {
      query = 'default';
    }
    fetch(`api/structure/pod/${query}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((podList) => {
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
};

class StructurePage extends Component<KubeState> {
  componentDidMount(): void {
    this.props.fetchNamespaceData();
    this.props.fetchNodeData();
    this.props.fetchPodData();
  }

  render() {
    const node: any = this.props.nodeList.nodeList[0];
    const namespace: any = this.props.namespaceList.namespaceList;

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
