import React from 'react';

const NamespaceComp = (): JSX.Element => {
  return (
    <div
      style={{
        // background: 'black  ',
        marginLeft: '250px',
        marginTop: '25px',
        marginRight: '10px',
        height: 'vh',
        width: 'vw',
      }}
    >
      {' '}
      <div
        className='boxes'
        style={{
          textAlign: 'center',
          paddingBottom: '30px',
          marginBottom: '10px',
        }}
      >
        <header>
          <h1>Namespace Metrics </h1>
        </header>
        <iframe
          src='http://localhost:3000/d/K0MPA5512/kubernetes-namespace-overview?orgId=1'
          width='100%'
          height='1500px'
          frameBorder='0'
        ></iframe>
      </div>
    </div>
  );
};
export default NamespaceComp;
