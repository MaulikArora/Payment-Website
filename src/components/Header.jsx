import React from "react";
import { Link } from "react-router-dom";  // ✅ Import Link

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">PayTron</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#rewards">Rewards</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li className="divider">|</li>
          <li><Link to="/login" className="login-link">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
