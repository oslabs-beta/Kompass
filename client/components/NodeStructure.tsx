import React from 'react';

/*
nodeInfo:
Creation Timestamp: nodeInfo[0].metadata.creationTimestamp // => "2022-05-17T19:10:09.000Z"
Architecture: nodeInfo[0].metadata.kubernetes.io/arch // arm64
OS: nodeInfo[0].metadata.kubernetes.io/os // linux
Name: nodeInfo[0].metadata.name // minikube

Node Internal IP Address: nodeInfo[0].status.addresses[0].address // => "192.168.49.2"
CPU Allocated: nodeInfo[0].status.allocatable.cpu // => "4"
CPU Capacity: nodeInfo[0].status.capacity.cpu  // => "4"
Pods Allocated: nodeInfo[0].status.allocatable.pods // => "110"
Pods Capacity: nodeInfo[0].status.capacity.pods // => "110"

Conditions: nodeInfo[0].conditions // ARRAY 
  // lastHeartbeatTime, Type, Message // => "kubelet has sufficient memory available"

nodeInfo: 
ContainerRuntime: nodeInfo[0].status.nodeInfo.containerRuntimeVersion => docker
Kernel: nodeInfo[0].status.nodeInfo.kernelVersion // 5.10.104
KubeletVersion: nodeInfo[0].status.nodeInfo.kubeletVersion 
*/

const NodeStructure = (props: any): JSX.Element => {
  // console.log('nodeInfo', props.nodeInfo);
  // console.log('nodeStatus', props.nodeStatus);

  const { metadata, status } = props.nodeInfo[0];
  const { nodeInfo, conditions } = status;
  const nodeStatus = props.nodeStatus;

  // console.log('nodeInfo', nodeInfo);

  return (
    <div
      className='nodeContainer'
      style={{ background: 'purple', display: 'flex', width: '100%' }}
    >
      <div className='nodeOverview' style={{ width: '33%' }}>
        <p>Name: {metadata.name}</p>
        <p>OS: {nodeInfo.operatingSystem}</p>
        <p>Architecture: {nodeInfo.architecture}</p>
        <p>Creation Timestamp: {metadata.creationTimestamp}</p>
        <p>IP Address: {status.addresses[0].address}</p>
        <p>Container Runtime: {nodeInfo.containerRuntimeVersion}</p>
        <p>Kernel: {nodeInfo.kernelVersion}</p>
        <p>Kubelet Version: {nodeInfo.kubeletVersion}</p>
      </div>
      <div className='nodeMemStats' style={{ width: '33%' }}>
        <p>CPU Allocated: {status.allocatable.cpu}</p>
        <p>CPU Capacity: {status.capacity.cpu}</p>
        <p>CPU Cores: {status.allocatable.cpu}</p>
        <p>Ephemeral Storage: {status.allocatable['ephemeral-storage']}</p>
        <p>Memory: {status.allocatable.memory}</p>
        <p>Pods Allocated: {status.allocatable.pods}</p>
        <p>Pods Capacity: {status.capacity.pods}</p>
      </div>
      <div className='nodeConditions' style={{ width: '33%' }}>
        <div>
          Conditions:{' '}
          {conditions.length &&
            conditions.map((condition?: any, index?: number) => {
              return (
                <div key={`condition${index}`}>
                  <p>Type: {condition.type}</p>
                  <p>Message: {condition.message}</p>
                  <p>Last Heartbeat Time: {condition.lastHeartbeatTime}</p>
                </div>
              );
            })}
        </div>
        <div>
          <strong>Node Status:</strong>{' '}
          {nodeStatus.length &&
            nodeStatus.map((status: any, index: number) => {
              return (
                <div key={`status${index}`}>
                  <p>Type: {status.metadata.name}</p>
                  <p>Status: {status.conditions[0].type}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default NodeStructure;
