import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

const App = () => {
  const [cart, setCart] = useState([]);
  const [cartAmount, setCartAmount] = useState(0)

  const handleAddToCart = (product) => {
    console.log(cart);
    let isInCart = false;
    if (cart.length > 0) {
      cart.forEach((item) => {
        if (item.product.title === product.title) {
          item.product.quantity += 1;
          setCartAmount(cartAmount + 1)
          isInCart = true;
        }
      });
    }
    if (!isInCart) {
      setCart((prevState) => [...prevState, { product }]);
      isInCart = true;
      setCartAmount(cartAmount + 1)
    }
  };

  return (
    <BrowserRouter className='app' >
      <Nav cartAmount={cartAmount}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/shop'
          element={<Shop handleAddToCart={handleAddToCart} />}
        />
        <Route path='/cart' element={<Cart product={cart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
