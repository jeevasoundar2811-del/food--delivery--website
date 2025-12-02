import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Navbar from "./component/Navbar";

import Delivery from "./component/Delivery";
import Order from "./component/Order";
import Product from "./component/Product";
import Menu from "./component/Menu";
//import Order from "./component/Order.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Product/>
        <Menu/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Delivery" element={<Delivery />} />
          <Route path="/Menu" element={<Menu />} />

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
