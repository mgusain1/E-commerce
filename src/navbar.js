import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="li">Home</Link>
      <br />
      <Link to="/set" className="li">Shop</Link>
      <br />
      <Link to="/mycart" className="li">Sign in</Link>
    </nav>
  );
};

export default Navbar;