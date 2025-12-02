import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdThumbsUp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Footer() {
  return (
    <>
      <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h2 className="footer-logo">🍔 Food<span>Express</span></h2>
          <p className="footer-text">
            Fast and fresh food delivered to your doorstep. We bring happiness in every bite!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Delivery</li>
            <li>Order</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p><FaPhoneVolume /> +91 98765 43210</p>
          <p><MdEmail /> support@foodxpress.com</p>
          <p><FaLocationDot /> Chennai, India</p>
        </div>

        {/* Social Icons */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span><IoMdThumbsUp /></span>
            <span><FaSquareInstagram /></span>
            <span><FaTwitter /></span>
            <span><IoLogoWhatsapp /></span>
          </div>
        </div>
      </div>

      <hr className="footer-line"/>

      <p className="footer-bottom">© 2025 FoodExpress | All Rights Reserved</p>
    </footer>

    </>
  )
}
