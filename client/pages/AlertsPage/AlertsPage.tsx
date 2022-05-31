import React from 'react';
import PrometheusAlerts from '../../components/PrometheusAlerts';

const AlertsPage = (): JSX.Element => {
  return (
    <div
      style={{
        background: 'black',
        color: 'white',
        marginLeft: '240px',
        marginTop: '15px',
        // marginRight: '10px',
        height: '1000px',
        // width: 'vw',
      }}
      className='alertsPage'
    >
      <PrometheusAlerts />
    </div>
  );
};
export default AlertsPage;
