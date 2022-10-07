import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/NavBar';
import Home from './components/pages/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
    <Nav />;
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default App;
