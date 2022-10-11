import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

const CartProductCard = (props) => {
  const { image, title, price, quantity } = props;

  return (
    <div className='cart-product-card'>
      <div class='cart-image-container'>
        <img  className='cart-image' src={image} alt={title} />
      </div>
      <div className='detail'>
        {title}
        <button className='remove-button' type='button'><FaTrashAlt />Remove</button>
      </div>
      {price}
      <div className='add-and-remove'>
        <button className='add-button' type='button'>
          <FaMinus />
        </button>
        <div className='quant-in-cart'>{quantity}</div>
        <button className='remove-button' type='button'>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
