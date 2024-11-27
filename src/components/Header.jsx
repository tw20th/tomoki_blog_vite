import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#282c34', padding: '1rem', color: 'white' }}>
      <h1>Tomoki Blog</h1>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
          <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
          <li><Link to="/pages" style={{ color: 'white', textDecoration: 'none' }}>Pages</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
