import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>
          About <span>FoodExpress</span>
        </h1>
        <p>Fast • Fresh • Delivered with Love ❤️</p>
      </div>

      <div className="about-content">
        <div className="about-left">
          <h2>Who We Are</h2>
          <p>
            FoodExpress is your trusted food delivery partner. We aim to bring
            the best restaurants and home kitchens right to your doorstep. With
            fast delivery, real-time tracking, and top-quality service, we make
            your everyday meals delightful and convenient.
          </p>

          <h2>Our Mission</h2>
          <p>
            We want to deliver happiness through food. Our focus is fresh
            ingredients, hygienic packaging, and timely delivery. Whether it's
            your breakfast, lunch, dinner, or midnight cravings — we are here
            for you 24/7!
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ Fast and reliable delivery</li>
            <li>✔ Premium and hygienic food</li>
            <li>✔ Live order tracking</li>
            <li>✔ Amazing offers and discounts</li>
            <li>✔ 24/7 customer support</li>
          </ul>
        </div>

        <div className="about-right">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Food Delivery"
          />
        </div>
      </div>
    </div>
  );
}
