import React from 'react';

const NodeComp = (): JSX.Element => {
  return (
    <div
      style={{
        background: 'black  ',
        marginLeft: '190px',
        marginTop: '-90px',
        marginRight: '10px',
        height: 'vh',
        width: 'vw',
      }}
    >
      {' '}
      <iframe
        src='http://localhost:3000/goto/KzGBetrnz?orgId=1'
        width='100%'
        height='1500px'
        frameBorder='0'
      ></iframe>
    </div>
  );
};
export default NodeComp;
