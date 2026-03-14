import React from "react";
import "../Css/Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="Header">
      <img src="../src/assets/logo-blue-trans.png"/>
      <ul className="nav-links">
        <li > <NavLink to ="/">Home</NavLink></li>
        <li><NavLink to ="/AboutUs"> About Us </NavLink></li>
        <li><NavLink to ="/Services">Services</NavLink></li>
        <li><NavLink to ="/Products">Products</NavLink></li>
        <li><NavLink to ="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Header;