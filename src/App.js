import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/nav/Nav";

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

        <Route path="/products/:id" element={<Viewproduct />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
