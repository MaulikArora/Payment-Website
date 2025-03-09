import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Ensure styles are included
import { useState } from "react";

const MainPage = () => {
  const [popupContent, setPopupContent] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const openPopup = (content, event) => {
    setPopupContent(content);
    setPopupVisible(true);

    // Get button position for placing the popup correctly
    const buttonRect = event.target.getBoundingClientRect();
    setPopupPosition({
      top: buttonRect.top + window.scrollY,
      left: buttonRect.right + 20, // Adjust the left value for spacing
    });
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <>
      <header>
        <nav>
          <div className="logo">PayTron</div>
          <ul className="nav-links">
            <li><a href="#transactions">Features</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#rewards">Rewards</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li className="divider">|</li>
            <div className="profile-container">
              <li>
                <img src="images/profile.png" width="20" alt="Profile" />
                <div className="menu">
                  <Link to="/profile">Profile</Link>
                  <a href="#">2</a>
                  <Link to="/" className="logout-link">Logout</Link>
                </div>
              </li>
            </div>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero2">
          <div className="payment-grid"> 
            <button className="payment-option" onClick={(e) => handleButtonClick("Option1", e)}>
              <div className="icon">💳</div>
              <h2>Credit Card</h2>
            </button>
            <button className="payment-option" onClick={(e) => handleButtonClick("Option2", e)}>
              <div className="icon">📱</div>
              <h2>Digital Wallet</h2>
            </button>
            <button className="payment-option" onClick={(e) => handleButtonClick("Option3", e)}>
              <div className="icon">🏦</div>
              <h2>Bank Transfer</h2>
            </button>
          </div>
          {popupVisible && (
        <div
          className="popup"
          style={{
            position: "absolute",
            top: `${popupPosition.top}px`,
            left: `${popupPosition.left}px`,
            background: "rgba(255, 255, 255, 0.8)",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            height: "600px",
            zIndex: 1000,
          }}
        >
          <h2>{popupContent}</h2>
          <button
            style={{ background: "red", color: "white", padding: "5px", border: "none"}}
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      )}
        </section>

        <section id="features" className="features">
          <h2>Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Transactions</h3>
              <p>Bank-grade encryption protecting your payments with state-of-the-art security measures.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌎</div>
              <h3>Global Reach</h3>
              <p>Send and receive payments anywhere in the world with competitive exchange rates.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎧</div>
              <h3>24/7 Support</h3>
              <p>Our dedicated team is here to assist you anytime, anywhere with expert guidance.</p>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="about-content">
            <h2>About Us</h2>
            <p>PayTron is committed to revolutionizing the way you handle payments. We combine cutting-edge technology with user-friendly design to create the most efficient payment experience possible.</p>
            <p>Our goal is to make payments easy, quick, and rewarding - anytime, anywhere. Join us in shaping the future of digital transactions.</p>
          </div>
        </section>

        <footer id="contact" className="contact">
          <div className="footer-grid">
            <div className="footer-links">
              <ul className="foot-links">
                <li>About</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="contact-info">
              <p>EMAIL: paytron.help@gmail.com</p>
              <p>PHONE: +91 91119111</p>
            </div>
            <div>
              <div className="social-icons">
                <a href="#"><img src="images/facebook-icon.png" alt="Facebook" width="30" /></a>
                <a href="#"><img src="images/twitter-icon.png" alt="Twitter" width="30" /></a>
                <a href="#"><img src="images/instagram-icon.png" alt="Instagram" width="30" /></a>
              </div>
              <div className="payment-icons">
                <img src="images/visa.png" alt="Visa" width="30" />
                <img src="images/mastercard.png" alt="Mastercard" width="30" />
                <img src="images/amex.png" alt="American Express" width="30" height="17" />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default MainPage;
