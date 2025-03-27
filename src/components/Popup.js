import React, { useState, useEffect } from "react";
import "../styles/components/_popup.scss"; 
import { FaTimes } from "react-icons/fa"; 
import WhatsAppSender from "./WhatsAppButton";

const Popup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details:", formData);
    onClose(); // Close popup after submission
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <h2>Get the Best Property Deals</h2>
        <p>Enter your details to receive exclusive listings.</p>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Preferred Location"
            value={formData.location}
            onChange={handleChange}
          />
          <input
            type="text"
            name="budget"
            placeholder="Your Budget (₹)"
            value={formData.budget}
            onChange={handleChange}
          />

          {/* Submit Button */}
          <button type="submit" className="submit-btn">Reach out to us !!</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
