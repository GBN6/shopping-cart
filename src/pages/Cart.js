import React from 'react';
import CartProductCard from '../components/CartProductCard';
import creditIcons from '../assets/credit-card-logos.png' 


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
      <div className='checkout'>
        <h3>Total</h3>
        <div className='sub-price'>
          <p>Sub-price</p>
          <div>{totalPrice}</div>
        </div>
        <div className='shipping'>
          <p>Shipping</p>
          <div>FREE</div>
        </div>
        <div className='total'>
          <p>Total(VAT incl.)</p>
          <div>${totalPrice}</div>
        </div>
        <button className='order' type='button'>ORDER</button>
      </div>
      <div className='payment-method'>
        <h3>We accept</h3>
        <div className='icons'>
          <img src={creditIcons} alt='credit icons'></img>
        </div>
      </div>
    </div>
  );
};

export default Cart;
