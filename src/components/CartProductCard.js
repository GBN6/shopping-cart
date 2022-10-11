import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

const CartProductCard = (props) => {
  const {
    image,
    title,
    price,
    quantity,
    handleRemoveFromCart,
    handleAddQuantity,
    handleMinusQuantity,
  } = props;
  const product = { image, title, price, quantity };

  return (
    <div className='cart-product-card'>
      <div class='cart-image-container'>
        <img className='cart-image' src={image} alt={title} />
      </div>
      <div className='detail'>
        {title}
        <button
          onClick={() => handleRemoveFromCart(product)}
          className='remove-button'
          type='button'
        >
          <FaTrashAlt />
          Remove
        </button>
      </div>
      <div className='cart-price'>${price}</div>
      <div className='add-and-remove'>
        <button className='add-button' type='button' onClick={() => handleMinusQuantity(product)} >
          <FaMinus />
        </button>
        <div className='quant-in-cart'>{quantity}</div>
        <button className='minus-button' type='button' onClick={() => handleAddQuantity(product)} >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
