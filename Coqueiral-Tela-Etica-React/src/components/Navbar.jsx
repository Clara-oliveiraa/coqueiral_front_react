import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../imagens/logo.png';
import Help from '../imagens/ajudaazul 1.png';
import Profile from '../imagens/Group 159.png';
import Notification from '../imagens/Group 173.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <img src={Logo} alt="logo coqueiral" className="logo" />
      <div className="nav-icon-container">
        <img src={Help} alt="ajuda" className="ajuda" />
        <img src={Profile} alt="perfil" className="perfil" />
        <img src={Notification} alt="notificação" className="notificacao" />
      <button id="menuBtn" className="menu-button" onClick={toggleMenu}>
      <i className="fas fa-bars"></i>
      </button></div>

      <div className={`header-inner-content ${menuOpen ? 'show-menu' : ''}`}>
        <nav>
          <ul>
            <li>INÍCIO</li> 
            <li> - </li>
            <li>SOBRE</li> 
            <li> - </li>
            <li>ÉTICA</li> 
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;