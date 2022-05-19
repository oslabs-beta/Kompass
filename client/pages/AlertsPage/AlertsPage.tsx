import React from 'react';
import PrometheusAlerts from '../../components/PrometheusAlerts'

const AlertsPage = (): JSX.Element => {
  return (
    <div className='alertsPage'>
      <PrometheusAlerts />
    </div>
  )
};
export default AlertsPage;