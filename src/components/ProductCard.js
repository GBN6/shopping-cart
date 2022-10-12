import React from 'react';

const ProductCard = (props) => {
  const { image, title, price, handleAddToCart } = props;
  const product = {image, title, price, quantity: 1}

  return (
    <div className='product-card'>
      <div className='product-image-container'>
        <img className='product-image' src={image} alt={title} />
      </div>
      <div className='product-details'>
        <div className='product-info'>
          <div className='product-name'>{title}</div>
          <div className='product-price'>${price.toFixed(2)}</div>
        </div>
        <button type='button' onClick={() => handleAddToCart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
