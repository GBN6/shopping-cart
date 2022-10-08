import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const productsResponse = await fetch('https://fakestoreapi.com/products');
    let data = await productsResponse.json();
    console.log(data);
    setProducts(data);
  };
  const category = [...new Set(products.map((x) => x.category.toUpperCase()))];

  const productCards = products.map((product) => (
    <ProductCard key={product.id} image={product.image} price={product.price} title={products.title} />
  ));

  return (
    <div className='products-container'>
      <h1>STORE PAGE</h1>
      <div className='category-container'>
        <ul>
          {category.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className='product-card-container'>{productCards}</div>
    </div>
  );
};

export default Shop;
