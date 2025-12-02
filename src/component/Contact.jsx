import React, { useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdThumbsUp } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTruckMoving } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully! We will contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">

      {/* Heading */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions or need help? Reach out to us anytime!</p>
      </div>

      <div className="contact-flex">
        
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Your Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>

        {/* Contact Details Section */}
        <div className="contact-info">
          <h2><FaPhoneVolume /> Contact Information</h2>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> support@foodexpress.com</p>
          <p><strong>Address:</strong> Anna Nagar, Chennai, Tamil Nadu</p>

          <h3><FaClock /> Working Hours</h3>
          <p>Mon - Fri : 9:00 AM – 10:00 PM</p>
          <p>Sat - Sun : 8:00 AM – 11:00 PM</p>

          <h3><FaTruckMoving /> Delivery Areas</h3>
          <p>Chennai | Coimbatore | Madurai | Trichy</p>

          <h3>Follow Us</h3>
          <div className="contact-social">
            <span><IoMdThumbsUp /></span>
            <span><FaSquareInstagram /></span>
            <span><FaTwitter /></span>
            <span><IoLogoWhatsapp /></span>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="map-section">
        <h2><FaLocationDot /> Our Location</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.662428270659!2d80.21698247473633!3d13.085042513425085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d44257d0a5%3A0xaea2a02fa8d2e2a!2sAnna%20Nagar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
