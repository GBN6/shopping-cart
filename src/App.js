import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Shop from './pages/Shop';

const App = () => {
  return (
    <BrowserRouter>
    <Nav />;
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default App;
