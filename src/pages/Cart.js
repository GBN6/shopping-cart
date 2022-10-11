import React from 'react';
import CartProductCard from '../components/CartProductCard';

const Cart = (props) => {
  const {
    product,
    handleRemoveFromCart,
    handleAddQuantity,
    handleMinusQuantity,
  } = props;

  const totalPrice = product.reduce((total, item) => { return total += item.product.price * item.product.quantity}, 0)

  const cartProducts = product.map((item) => (
    <CartProductCard
      key={item.product.title}
      image={item.product.image}
      title={item.product.title}
      price={item.product.price}
      quantity={item.product.quantity}
      handleRemoveFromCart={handleRemoveFromCart}
      handleAddQuantity={handleAddQuantity}
      handleMinusQuantity={handleMinusQuantity}
    />
  ));

  return (
    <div className='cart-container'>
      <h3 className='cart-title'>My Cart</h3>
      <div className='cart-cards-container'>{cartProducts}</div>
      {totalPrice}
    </div>
  );
};

export default Cart;
