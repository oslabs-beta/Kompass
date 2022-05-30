import React from 'react';

const PrometheusAlerts = (): JSX.Element => {
  <div
    style={{
      background: 'black',
      marginLeft: '190px',
      marginTop: '-90px',
      marginRight: '10px',
      height: 'vh',
      width: 'vw',
    }}
  >
    <iframe
      src='http://localhost:9090/alerts'
      width='100%'
      height='1500px'
      frameBorder='0'
    ></iframe>
  </div>
};
export default PrometheusAlerts;