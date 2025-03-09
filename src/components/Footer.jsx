import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
