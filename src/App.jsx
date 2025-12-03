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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/product/:name" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;