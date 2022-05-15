import React from 'react';
import { render } from 'react-dom';
import { JsxElement } from 'typescript';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
         <Route path='/metrics' element={<MetricsPage />} />
         <Route path='/alerts' element={<AlertsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.querySelector('#root'));

export default App;
