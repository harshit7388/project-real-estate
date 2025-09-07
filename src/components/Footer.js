import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/_footer.scss";

const Footer = () => {
  const message =
    "Hi, I am interested in your property listings. Can you provide more details?";
  const whatsappLink = `https://wa.me/+918302444432?text=${message}`;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href="mailto:support@mybrokers.in">mybrokersinfo@gmail.com</a>
            </li>
            <li>
              <a href="tel:+918302444432">+91 83024 44432</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-legal">
        <p>All rights reserved © 2025 MyBrokers.in</p>
      </div>
    </footer>
  );
};

export default Footer;
