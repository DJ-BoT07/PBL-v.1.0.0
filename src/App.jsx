import "./App.css";
import HomePage from "./component/HomePage";
import Login from "./component/Login";
import Register from "./component/Register";
import Navbar from "./component/Amartya/Navbar";
import { Routes, Route } from "react-router-dom";
import UniqueSection from "./component/Amartya/UniqueSection";
import FacilitiesSection from "./component/Amartya/FacilitiesSection";
import HeroSection from "./component/Amartya/HeroSection";
import Footer from "./component/Amartya/Footer";
import FreeTestSection from "./component/Amartya/FreeTestSection";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/logined" element={<div>
          <HeroSection />
          <UniqueSection />
          <FacilitiesSection />
        </div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={< FreeTestSection/>} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;
