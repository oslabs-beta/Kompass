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
      style={{
        background: '#121212',
        display: 'flex',
        width: '100%',
        height: '60%',
      }}
    >
      <div className='nodeOverview'>
        <p>
          <b>Name:</b> {metadata.name}
        </p>
        <p>
          <b>OS:</b> {nodeInfo.operatingSystem}
        </p>
        <p>
          <b>Architecture:</b> {nodeInfo.architecture}
        </p>
        <p>
          <b>Creation Timestamp:</b> {metadata.creationTimestamp}
        </p>
        <p>
          <b>IP Address:</b> {status.addresses[0].address}
        </p>
        <p>
          <b>Container Runtime:</b> {nodeInfo.containerRuntimeVersion}
        </p>
        <p>
          <b>Kernel:</b> {nodeInfo.kernelVersion}
        </p>
        <p>
          <b>Kubelet Version:</b> {nodeInfo.kubeletVersion}
        </p>
      </div>
      <div className='nodeMemStats'>
        <p>
          <b>CPU Allocated:</b> {status.allocatable.cpu}
        </p>
        <p>
          <b>CPU Capacity:</b> {status.capacity.cpu}
        </p>
        <p>
          <b>CPU Cores:</b> {status.allocatable.cpu}
        </p>
        <p>
          <b>Ephemeral Storage:</b> {status.allocatable['ephemeral-storage']}
        </p>
        <p>
          <b>Memory:</b> {status.allocatable.memory}
        </p>
        <p>
          <b>Pods Allocated:</b> {status.allocatable.pods}
        </p>
        <p>
          <b>Pods Capacity:</b> {status.capacity.pods}
        </p>
      </div>
      <div className='nodeConditions' style={{ overflowY: 'auto' }}>
        <div>
          <b>CONDITIONS:</b>{' '}
          {conditions.length &&
            conditions.map((condition?: any, index?: number) => {
              return (
                <div key={`condition${index}`}>
                  <p>
                    <b>Type:</b> {condition.type}
                  </p>
                  <p>
                    <b>Message:</b> {condition.message}
                  </p>
                  <p>
                    <b>Last Heartbeat Time:</b> {condition.lastHeartbeatTime}
                  </p>
                </div>
              );
            })}
        </div>
        <div>
          <strong>
            <u>Node Status:</u>
          </strong>{' '}
          {nodeStatus.length &&
            nodeStatus.map((status: any, index: number) => {
              return (
                <div key={`status${index}`}>
                  <p>
                    <b>Type:</b> {status.metadata.name} | <b>Status:</b>{' '}
                    {status.conditions[0].type}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default NodeStructure;
