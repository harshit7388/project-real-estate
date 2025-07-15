import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "../styles/components/_footer.scss";
import { Link } from "react-router-dom";
import footerimg from "../assets/images/footerimg.png";

const Footer = () => {
  const message = "Hi,I am interested in your property listings. Can you provide more details?";
  const whatsappLink = `https://wa.me/+918302444432?text=${message}`;

  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${footerimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="footer-container">
        <div className="footer-info">
          <h4>MyBrokers.in</h4>
          <ul>
            {/* <li>
              <a href="#">About Us</a>
            </li> */}
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" >
                Contact Us
              </a>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            {/* <li>Email: <a href="mailto:support@mybrokers.in">support@mybrokers.in</a></li>
            <li>Phone: <a href="tel:+919876543210">+91 98765 43210</a></li> */}
          </ul>
        </div>

        <div className="footer-map">
          <h4>Our Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.0397571527296!2d77.06752857416043!3d28.448217892429252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d190c9bd49cb3%3A0x11412137dfe398be!2sParadise%20PG%20for%20Boys%20and%20Girls!5e0!3m2!1sen!2sin!4v1750505847784!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>

        <div className="footer-social">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="footer-legal">
        <p>© {new Date().getFullYear()} MyBrokers.in. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
