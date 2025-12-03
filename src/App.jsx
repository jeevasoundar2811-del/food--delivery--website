import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Delivery from "./component/Delivery";
import Order from "./component/Order";
import Product from "./component/Product";
import Menu from "./component/Menu";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import About from "./component/About ";
import Cart from "./component/Cart";   // ⬅ NEW

import { useState } from "react";

function App() {
  // GLOBAL CART STATE
  const [cart, setCart] = useState([]);

  // ADD ITEM TO CART
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // CHANGE QUANTITY
  const updateQty = (id, type) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "increase"
                ? item.qty + 1
                : item.qty > 1
                ? item.qty - 1
                : 1,
            }
          : item
      )
    );
  };

  // REMOVE ITEM
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <BrowserRouter>
        <Navbar cart={cart} />   {/* ⬅ PASS CART TO NAVBAR */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/delivery" element={<Delivery />} />

          {/* PRODUCT PAGE */}
          <Route
            path="/product"
            element={<Product addToCart={addToCart} />}
          />

          <Route
            path="/product/:name"
            element={<Product addToCart={addToCart} />}
          />

          {/* CART PAGE */}
          <Route
            path="/cart"
            element={
              <Cart cart={cart} updateQty={updateQty} removeItem={removeItem} />
            }
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
