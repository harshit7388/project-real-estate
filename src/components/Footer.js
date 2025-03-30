import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import '../styles/components/_footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h4>MyBrokers.in</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-legal">
        <p>© {new Date().getFullYear()} MyBrokers.in. All Rights Reserved.</p>
      	        Built with ❤️ by <span className="highlight">Harshit & Deepanshu</span>
      </div>
    </footer>
  );
};

export default Footer;

