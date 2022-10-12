import React from 'react';
import wave from '../assets/footer-wave.png'
import { useLocation } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {

  const location = useLocation()

  return (
    <footer className='footer'>
      <p className='signature'>
        GBN6 @ 2022 <a href='https://github.com/GBN6'><FaGithub /></a>
      </p>
      {location.pathname !== '/shop' && (
        <img className='footer-wave' src={wave} alt='wave' />
      )}
    </footer>
  );
};

export default Footer;