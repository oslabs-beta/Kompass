import React from 'react';
import PrometheusAlerts from '../../components/PrometheusAlerts';

const AlertsPage = (): JSX.Element => {
  return (
    <div
      style={{
        background: 'blue',
        color: 'white',
        marginLeft: '250px',
        marginTop: '25px',
        marginRight: '10px',
        height: '1000px',
        // width: 'vw',
      }}
      className='alertsPage'
    >
      hello from alerts
      <PrometheusAlerts />
    </div>
  );
};
export default AlertsPage;
