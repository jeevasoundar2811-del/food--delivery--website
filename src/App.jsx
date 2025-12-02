import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Delivery from "./component/Delivery";
import Order from "./component/Order";
import Product from "./component/Product";
import Menu from "./component/Menu";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/" element={<Order />} />
          <Route path="/" element={<Delivery />} />
          <Route path="/Product" element={<Product />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
