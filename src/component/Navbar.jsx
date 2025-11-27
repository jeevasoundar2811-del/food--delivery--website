import React, { useState } from 'react'
import { Link} from "react-router-dom";


export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="navbar">

        <div className="logo">
          Food<span>Express</span>
        </div>

        <input type="text" className="search-box" placeholder="Search food..." />

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/offer">Offer</Link>
          <Link to="/contact">Contact</Link>
        </ul>

        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </div>
      </nav>
    </>
  );
}
