import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Rewards from "./components/Rewards";
import Footer from "./components/Footer";
import Login from "./components/Login";
import MainPage from "./components/MainPage";  // ✅ Import MainPage

import "./styles.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<MainPage />} />  {/* ✅ Add MainPage Route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
