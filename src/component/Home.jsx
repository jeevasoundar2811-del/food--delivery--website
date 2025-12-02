import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function HomePage() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [viewItem, setViewItem] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  
  const handleViewMore = (item) => {
    navigate(`/product/${item.name}`, { state: item });
  };

  const categories = [
    {
      name: "Junk Food",
      img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600",
      price: "₹50.00",
      description: "A classic cheesy pizza topped with spicy herbs.",
    },
    {
      name: "Non-Veg",
      img: "https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?q=80&w=765&auto=format&fit=crop",
      price: "₹90.00",
      description: "Authentic biriyani with tender chicken & rich spices.",
    },
    {
      name: "Desserts",
      img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600",
      price: "₹30.00",
      description: "Sweet and delightful desserts to end your meal.",
    },
    {
      name: "Veg Meals",
      img: "https://images.unsplash.com/photo-1742281257707-0c7f7e5ca9c6?w=600&auto=format&fit=crop",
      price: "₹15.00",
      description: "Healthy vegetarian meals for your day.",
    },
    {
      name: "Drinks",
      img: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=600&auto=format&fit=crop",
      price: "₹15.00",
      description: "Refreshing drinks to quench your thirst.",
    },
  ];

  const trending = [
    {
      name: "Cheese Burger",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      price: "₹25.00",
    },
    {
      name: "Hot Wings",
      img: "https://images.unsplash.com/photo-1637273484026-11d51fb64024?w=600&auto=format&fit=crop",
      price: "₹40.00",
    },
    {
      name: "Veggie Taco",
      img: "https://plus.unsplash.com/premium_photo-1678051386853-5623e723745a?w=600&auto=format&fit=crop",
      price: "₹20.00",
    },
  ];

  const testimonials = [
    {
      name: "Arun Kumar",
      text: "Best food delivery service! The food is always fresh and hot. Highly recommend!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Sharma",
      text: "Amazing taste and super fast delivery. Loved the pizzas!",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Rahul Mehta",
      text: "Affordable price and top quality. The biriyani was awesome!",
      img: "https://randomuser.me/api/portraits/men/28.jpg",
    },
  ];

  return (
    <div className={`home-container ${darkMode ? "dark" : ""}`}>

      {/* Hero Section */}
      <section
        className="hero fade-in"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=1200')",
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Delicious Food Delivered To Your Doorstep</h1>
          <p className="hero-sub">
            Fresh, fast, and irresistible meals. Order now and enjoy the taste!
          </p>
          <a href="#menu">
            <button className="hero-btn">Order Now</button>
          </a>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="category-section fade-in" id="menu">
        <h2 className="section-title">Popular Categories</h2>

        <div className="category-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <img src={cat.img} alt={cat.name} />
              <p className="food-name">{cat.name}</p>
              <p className="food-price">{cat.price}</p>
              <p className="food-desc">{cat.description}</p>

              

              {/*  View More Navigate Button */}
              <button
                className="view-btn"
                onClick={() => handleViewMore(cat)}
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Foods */}
      <section className="trending-section fade-in">
        <h2 className="section-title"> Trending Foods</h2>

        <div className="trend-grid">
          {trending.map((food, index) => (
            <div key={index} className="trend-card">
              <img src={food.img} alt={food.name} />
              <h3>{food.name}</h3>
              <p className="star-rating">⭐⭐⭐⭐⭐</p>
              <p className="food-price">{food.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section fade-in">
        <h2 className="section-title">What Our Customers Say </h2>

        <div className="testimonial-grid">
          {testimonials.map((user, index) => (
            <div key={index} className="testimonial-card">
              <img src={user.img} alt={user.name} className="test-img" />
              <h3>{user.name}</h3>
              <p>{user.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popup View (Still Works If Needed) */}
      {viewItem && (
        <div className="popup-overlay" onClick={() => setViewItem(null)}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <img src={viewItem.img} alt={viewItem.name} className="popup-img" />

            <h2>{viewItem.name}</h2>
            <p className="popup-price">{viewItem.price}</p>
            <p className="popup-desc">{viewItem.description}</p>

            <button className="add-btn" onClick={() => handleAddToCart(viewItem)}>
              Add to Cart
            </button>

            <button className="close-btn" onClick={() => setViewItem(null)}>
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
