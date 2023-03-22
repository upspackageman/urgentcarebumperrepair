import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { HashRouter as Router} from "react-router-dom";
import './styles.css';
import Header from './Header';
import { CssBaseline } from '@mui/material';
import { Container } from '@mui/material';
import Home from '../../features/home/Home';
import './App.css';

import Service from '../../features/service/Service';
import Bumperrepair from '../../features/bumperrepair/Bumperrepair';
import Bumperreplacement from '../../features/bumperreplacement/Bumperreplacement';

import Insurance from '../../features/insurance/Insurance';
import Process from '../../features/process/Process';
import Leasereturn from '../../features/leasereturn/Leasereturn';
import About from '../../features/about/About';
import Footer from './Footer';
import Estimate from '../../features/estimate/Estimate';






function App() {

  const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  
  return (
    <>
    <CssBaseline />
    <Header />
    <Container id="main"  sx={{ mt: 5, pl:0,pr:0 }}>
    <ScrollToTop />
      <Routes >
     
          <Route path='*' element={<Home/>} />
          <Route path='/urgentcarebumperrepair/' element={<Home/>} />
          <Route path='/urgentcarebumperrepair/about' element={<About/>} />
          <Route path='/urgentcarebumperrepair/service' element={<Service/>} />
          <Route path='/urgentcarebumperrepair/estimate' element={<Estimate/>} />
          <Route path='/urgentcarebumperrepair/bumperrepair' element={<Bumperrepair/>} />
          <Route path='/urgentcarebumperrepair/bumperreplacement' element={<Bumperreplacement/>} />
          <Route path='/urgentcarebumperrepair/insurance' element={<Insurance/>} />
          <Route path='/urgentcarebumperrepair/leasereturn' element={<Leasereturn/>} />
          <Route path='/urgentcarebumperrepair/process' element={<Process/>} />
 
      </Routes>
    </Container>
    <Footer />
    
    
    </>
  );
}

export default App;
