import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Seamless Payments for the Modern World</h1>
        <p className="hero-text">
          Experience lightning-fast, secure transactions with our cutting-edge payment platform.
        </p>
        <p className="hero-text">Join millions of satisfied users worldwide.</p>
        <a href="login.html">
          <button className="cta-button">
            Get Started <span className="arrow">→</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
