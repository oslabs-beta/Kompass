import React from 'react';

const PrometheusAlerts = (): JSX.Element => {
  return (
    <div
      style={{
        marginLeft: '250px',
        marginTop: '25px',
        marginRight: '10px',
        height: 'vh',
        width: 'vw',
      }}
    >
      <div
        className='boxes'
        style={{
          textAlign: 'center',
          paddingBottom: '30px',
          marginBottom: '10px',
        }}
      >
        <header>
          <h1>Alerts</h1>
        </header>
        <iframe
          src='http://localhost:9090/alerts'
          width='100%'
          height='1500px'
          frameBorder='0'
        ></iframe>
      </div>
    </div>
  );
};
export default PrometheusAlerts;
