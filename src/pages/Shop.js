import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Shop = (props) => {
  const { handleAddToCart } = props;

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const productsResponse = await fetch('https://fakestoreapi.com/products');
    let data = await productsResponse.json();
    setProducts(data);
    const category = [...new Set(data.map((x) => x.category.toUpperCase()))];
    setCategories(category);
    setFiltered(data);
  };

  const handleFilterCategory = (category) => {
    const productsCopy = [...products];
    console.log(productsCopy);
    if (!category) {
      setFiltered(productsCopy);
    } else if (category === 'jewelery') {
      setFiltered(productsCopy.filter((item) => item.category === category));
    } else if (category === 'electronics') {
      setFiltered(productsCopy.filter((item) => item.category === category));
    } else if (category === "women's clothing") {
      setFiltered(productsCopy.filter((item) => item.category === category));
    } else if (category === "men's clothing") {
      setFiltered(productsCopy.filter((item) => item.category === category));
    }
  };

  const handleCategory = (e) => {
    const categoryTitle = document.querySelector('.product-category-name');
    const category = e.target.textContent.toLowerCase();
    categoryTitle.textContent = category.toUpperCase();
    handleFilterCategory(category);
  };

  const productCards = filtered.map((product) => (
    <ProductCard
      key={product.id}
      image={product.image}
      price={product.price}
      title={product.title}
      handleAddToCart={handleAddToCart}
    />
  ));
  return (
    <div className='products-container'>
      <div className='category-container'>
        <h2 className='product-category-name'>All products</h2>
        <ul>
          {categories.map((item) => (
            <li onClick={handleCategory} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className='product-card-container'>{productCards}</div>
    </div>
  );
};

export default Shop;
