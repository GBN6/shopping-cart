import React from 'react';

const ProductCard = (props) => {
  const { image, title, price } = props;

  return (
    <div className='product-card'>
      <div className='product-image-container'>
        <img className='product-image' src={image} alt={title} />
      </div>
      <div className='product-details'>
        <div className='product-info'>
          <div className='product-name'>{title}</div>
          <div className='product-price'>${price}</div>
        </div>
        <button type='button'>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
