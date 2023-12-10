import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/nav/Nav";
import Smartphones from "./components/Home/smartphones";
import Laptop from "./components/Home/laptops";
import Fragrances from "./components/Home/fragrances";
import Cart from "./components/cart/Cart";
import Viewproduct from "./components/viewproduct/Viewproduct";
import LoginSection from "./Login/Login";
import Register from "./Register/Register";

function App() {
  return (
    <>
      {" "}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smartphones" element={<Smartphones />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/fragrances" element={<Fragrances />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Viewproduct />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
