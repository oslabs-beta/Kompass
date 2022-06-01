import React from 'react';
import { render } from 'react-dom';
import { JsxElement } from 'typescript';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlertsPage from './pages/AlertsPage/AlertsPage';
import StructurePage from './pages/StructurePage/StructurePage';
import PodComp from './components/PodComp';
import NamespaceComp from './components/NamespaceComp';
import ClusterComp from './components/ClusterComp';
import Sidebar from './components/Sidebar';

const App = (): JSX.Element => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path='/pod' element={<PodComp />} />
            <Route path='/namespace' element={<NamespaceComp />} />
            <Route path='/cluster' element={<ClusterComp />} />
            <Route path='/' element={<StructurePage />} />
            <Route path='/alerts' element={<AlertsPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
