import React from 'react';
import CTA from './CTA';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Badreddine Alloul</h1>
        <h5 className="text-light">Developer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
