
import React, { useState } from "react";
import "../Css/Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="Header">
      <img src="../src/assets/logo-blue-trans.png" alt="logo" />

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/AboutUs">About Us</NavLink></li>
        <li><NavLink to="/Services">Services</NavLink></li>
        <li><NavLink to="/Products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Header;