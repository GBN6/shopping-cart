import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Nav = (props) => {
  const { cartAmount } = props;
  return (
    <header className='header'>
      <div className='nav-container'>
        <div className='logo'>
          <Link className='text-link' to='/shopping-cart'>
            <h1>FakeStore</h1>
          </Link>
        </div>
        <nav className='nav-links'>
          <Link className='text-link' to='/shopping-cart'>
            Home
          </Link>
          <Link className='text-link' to='/shop'>
            Shop
          </Link>
          <Link className='text-link' to='/contact'>
            Contact
          </Link>
          <Link className='text-link-icon' to='/cart'>
            <FaShoppingCart />
            {cartAmount > 0 ? <div className='cart-amount'>{cartAmount}</div> : ''}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
