import React from "react";
import Navbar from "./Navbar";


export default function HomePage() {
  return (
    <>
      

      <div className="home-container">
      
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
              Fresh, fast, and irresistible meals. Order now and enjoy the taste!
            </p>
            <button className="hero-btn">Order Now</button>
          </div>
        </section>

     
        <section className="category-section">
          <h2 className="section-title">Popular Categories</h2>

          <div className="category-grid">
            {[
              {
                name: "Pizza",
                img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8fDA%3D",
                price:"$50.00",
              

              },
              {
                name: "Chicken Biriyani",
                img: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.webp?a=1&b=1&s=612x612&w=0&k=20&c=a8j_p9BkWtsSX7WkcqeetigH8PYWXGayIGto9GiehNY=",
                price:"$90.00",
                description:"A gourmet burger crafted with tender patties, fresh greens, and rich flavors in every layer.",
                
              },
              {
                name: "Desserts",
                img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGVzc2VydHN8ZW58MHx8MHx8fDA%3D",
              },
              {
                name: "Drinks",
                img: "https://media.istockphoto.com/id/453010753/photo/three-fruit-juice-glasses-surrounded-by-colorful-fruits.webp?a=1&b=1&s=612x612&w=0&k=20&c=3BXu9Y4s7rfWqScGhXqpcqaCJ1kCvq8nc8SB8IKcHxA=",
              },
            ].map((cat, index) => (
              <div key={index} className="category-card">
                <img src={cat.img} alt={cat.name} />
                <p>{cat.name}</p>
                <p>{cat.price}</p>
                <p>{cat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Section */}
        <section className="featured-section">
          <h2 className="section-title">Today's Special</h2>

          <div className="featured-grid">
            <img
              src="https://media.istockphoto.com/id/2165643636/photo/crispy-fried-chicken-with-spicy-french-fries-and-drink.webp?a=1&b=1&s=612x612&w=0&k=20&c=q-aJHZ3HLakJTQbKMsR-r9Z_B2Ou3woUe5WKbHGTjPg="
              alt="Special Dish"
              className="featured-img"
            />

            <div>
              <h3 className="featured-title">Hot & Spicy Chicken Wings</h3>
              <p className="featured-text">
                Crispy, spicy, and full of flavor. Our signature chicken wings
                are prepared fresh and delivered hot!
              </p>
              <button className="featured-btn">Order Now</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
