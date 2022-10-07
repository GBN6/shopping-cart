import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Nav from './components/NavBar';
import Home from './components/pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Nav />;
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
