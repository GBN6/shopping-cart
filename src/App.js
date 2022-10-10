import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Shop from './pages/Shop';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    console.log(cart);
    let isInCart = false;
    if (cart.length > 0) {
      cart.forEach((item) => {
        if (item.product.title === product.title) {
          item.product.quantity += 1;
          isInCart = true;
        }
      });
    }
    if (!isInCart) {
      setCart((prevState) => [...prevState, { product }]);
      isInCart = true;
    }
  };

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/shop'
          element={<Shop handleAddToCart={handleAddToCart} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
