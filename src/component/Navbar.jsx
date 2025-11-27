import React, { useState } from 'react'


export default function Navbar() {
  const [open,setOpen]=useState(false)
  return (
    <>

   <nav className="navbar">

      <div className="logo">
        Food<span>Express</span>
      </div>
      
      <input type="text" className="search-box" placeholder="Search food..." />

      
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>Home</li>
        <li>Menu</li>
        <li>Offers</li>
        <li>Contact</li>
       
      </ul>



      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </div>
    </nav>
    </>
  );
}
