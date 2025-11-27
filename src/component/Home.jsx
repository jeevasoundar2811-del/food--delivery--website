import React, { useState } from "react";
import Navbar from "./Navbar";

export default function HomePage() {
  const [cart, setCart] = useState([]);
  const [viewItem, setViewItem] = useState(null); // For popup

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    console.log("Added to Cart:", item);
  };

  // Food categories
  const categories = [
    {
      name: "Pizza",
      img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop&q=60",
      price: "$50.00",
      description: "A classic cheesy pizza topped with spicy herbs.",
    },
    {
      name: "Chicken Biriyani",
      img: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.webp?a=1&b=1&s=612x612&w=0&k=20&c=a8j_p9BkWtsSX7WkcqeetigH8PYWXGayIGto9GiehNY=",
      price: "$90.00",
      description: "Authentic biriyani cooked with tender chicken and spices.",
    },
    {
      name: "Desserts",
      img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=60",
      price: "$30.00",
      description: "Sweet and delightful desserts to end your meal.",
    },
    {
      name: "Drinks",
      img: "https://media.istockphoto.com/id/453010753/photo/three-fruit-juice-glasses-surrounded-by-colorful-fruits.webp?a=1&b=1&s=612x612&w=0&k=20&c=3BXu9Y4s7rfWqScGhXqpcqaCJ1kCvq8nc8SB8IKcHxA=",
      price: "$15.00",
      description: "Refreshing fruit drinks to quench your thirst.",
    },
  ];

  return (
    <>
      <div className="home-container">
        {/* Hero Section */}
        <section
          className="hero"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="hero-content">
            <h1 className="hero-title">
              Delicious Food Delivered To Your Doorstep
            </h1>
            <p className="hero-sub">
              Fresh, fast, and irresistible meals. Order now and enjoy the
              taste!
            </p>
            <button className="hero-btn">Order Now</button>
          </div>
        </section>

        {/* Category Section */}
        <section className="category-section">
          <h2 className="section-title">Popular Categories</h2>

          <div className="category-grid">
            {categories.map((cat, index) => (
              <div key={index} className="category-card">
                <img src={cat.img} alt={cat.name} />
                <p className="food-name">{cat.name}</p>
                <p className="food-price">{cat.price}</p>
                <p className="food-desc">{cat.description}</p>

                {/* Add to Cart Button */}
                <button
                  className="add-btn"
                  onClick={() => handleAddToCart(cat)}
                >
                  Add to Cart
                </button>

                {/* View More Button */}
                <button className="view-btn" onClick={() => setViewItem(cat)}>
                  View More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* View More Popup */}
        {viewItem && (
          <div className="popup-overlay" onClick={() => setViewItem(null)}>
            <div className="popup-card" onClick={(e) => e.stopPropagation()}>
              <img
                src={viewItem.img}
                alt={viewItem.name}
                className="popup-img"
              />
              <h2>{viewItem.name}</h2>
              <p className="popup-price">{viewItem.price}</p>
              <p className="popup-desc">{viewItem.description}</p>

              <button
                className="add-btn"
                onClick={() => handleAddToCart(viewItem)}
              >
                Add to Cart
              </button>

              <button className="close-btn" onClick={() => setViewItem(null)}>
                Close
              </button>

              {/* hello world */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
