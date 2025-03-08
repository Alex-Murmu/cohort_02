import React from 'react';
import '../style/Header.css'
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://zerodha.com/static/images/logo.svg" alt="ZeroDah Logo" />
      </div>
      <nav className="navbar">
        <ul className="nav-menu">
         <li className="nav-item"><a href="#home">Home</a></li>
         <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#services">Services</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
