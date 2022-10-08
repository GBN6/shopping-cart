import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className='header'>
      <div className="nav-container">
          <div className='logo'>
            <Link className='text-link' to='/'>
              <h1>Logo</h1>
            </Link>
          </div>
          <nav className='nav-links'>
            <Link className='text-link' to='/'>Home</Link>
            <Link className='text-link' to='/shop'>Shop</Link>
            <Link className='text-link' to='/'>Contact</Link>
            <Link className='text-link' to='/'>Cart</Link>
          </nav>
      </div>
    </header>
  );
};

export default Nav;
