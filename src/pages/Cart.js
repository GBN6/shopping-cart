import React from 'react';
import CartProductCard from '../components/CartProductCard';

const Cart = (props) => {
  const { product, handleRemoveFromCart } = props;

  const cartProducts = product.map((item) => (
    <CartProductCard
      key={item.product.title}
      image={item.product.image}
      title={item.product.title}
      price={item.product.price}
      quantity={item.product.quantity}
      handleRemoveFromCart={handleRemoveFromCart}
    />
  ));

  return (
    <div className='cart-container'>
      <h3 className='cart-title' >My Cart</h3>
      <div className='cart-cards-container'>{cartProducts}</div>
    </div>
  );
};

export default Cart;
