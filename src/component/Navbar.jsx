import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">🍔Food<span>Express</span></div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/product">Products</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/Delivery">Delivery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      <FaShoppingCart size={25} />
      </ul>
    </nav>
  );
}
