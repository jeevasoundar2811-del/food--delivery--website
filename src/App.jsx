import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Delivery from "./component/Delivery";
import Order from "./component/Order";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Product/>
        <Menu/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Order />} />
          <Route path="/" element={<Delivery />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
