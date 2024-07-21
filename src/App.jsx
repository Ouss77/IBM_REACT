import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import Cart from "./Pages/Cart";
import ShopingCart from "./Pages/ShopingCart";

function App() {
  return (
    
      <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shoping" element={<ShopingCart />} />
        </Routes>
      </Router>
  );
}

export default App;
