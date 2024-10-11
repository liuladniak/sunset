import Home from "./ui/Home";
import Order from "./features/Order/Order";
import Cart from "./features/Cart/Cart";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deals from "./ui/Deals/Deals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="order">
          <Route index element={<Order />} />
        </Route>
        <Route path="deals" element={<Deals />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
