import React from 'react';
import { render } from 'react-dom';
import { JsxElement } from 'typescript';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlertsPage from './pages/AlertsPage/AlertsPage';
import MetricsPage from './pages/MetricsPage/MetricsPage'; 
import StructurePage from './pages/StructurePage/StructurePage';
import PodComp from './components/PodComp';
import NodeComp from './components/NodeComp';
import ClusterComp from './components/ClusterComp';
// import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = (): JSX.Element => {
  return (
    <>
    {/* <Navbar/> */}
    <Sidebar/>
    <BrowserRouter>
      <Routes>
        <Route path='/metrics' element={<MetricsPage />}/> 
          <Route path='/pod' element={<PodComp />}/> 
          <Route path='/node' element={<NodeComp />}/> 
          <Route path='/cluster' element={<ClusterComp />}/> 
        <Route path='/structure' element={<StructurePage />} />
        <Route path='/alerts' element={<AlertsPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};


export default App;
