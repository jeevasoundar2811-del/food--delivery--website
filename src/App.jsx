import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Delivery from "./component/Delivery";
import Order from "./component/Order";
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
          <Route path="/About" element={<About/>}/>
          < Route path="/Order" element={<Order />} />
          <Route path="/Delivery" element={<Delivery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
