import React, { useState } from "react";
import "../styles/components/_popup.scss";
import { FaTimes } from "react-icons/fa";

const Ownerform = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    propertytype: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.propertytype.trim())
      newErrors.propertytype = "propertytype is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("User Details:", formData);

    const googleForms =
      "https://docs.google.com/forms/d/1S0s-5c8y9mT5FZRbkV1_qRqkLdLfYtYkIV7eE5DNlBE/formResponse";
    const formDataToSend = new FormData();
    formDataToSend.append("entry.28741682", formData.name);
    formDataToSend.append("entry.1854633370", formData.phone);
    formDataToSend.append("entry.2068926587", formData.location);
    formDataToSend.append("entry.847784037", formData.propertytype);

    await fetch(googleForms, {
      method: "POST",
      body: formDataToSend,
      mode: "no-cors",
    });

    setShowForm(false);
    setShowThankYou(true);

    setTimeout(() => {
      setShowThankYou(false);
      onClose();
      setShowForm(true);
    }, 3000);

    setFormData({
      name: "",
      phone: "",
      location: "",
      propertytype: "",
    });

    setErrors({});
  };

  return (
    <div className="popup-overlay">
      {showForm && (
        <div className="popup-box">
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>

          <h2>List your property</h2>
          <p>Fill out the form below and we will get back to you shortly.</p>

          <form onSubmit={handleSubmit}>
            <input
              Enter
              your
              contact
              details
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}

            <input
              type="text"
              name="location"
              placeholder="Preferred Location"
              value={formData.location}
              onChange={handleChange}
            />
            {errors.location && (
              <span className="error-message">{errors.location}</span>
            )}

            <input
              type="text"
              name="propertytype"
              placeholder="Your Property Type"
              value={formData.propertytype}
              onChange={handleChange}
            />
            {errors.propertytype && (
              <span className="error-message">{errors.propertytype}</span>
            )}

            <button type="submit" className="submit-btn">
              Reach out to us !!
            </button>
          </form>
        </div>
      )}

      {showThankYou && (
        <div className="thank-you-message">✅ Thanks for reaching out!</div>
      )}
    </div>
  );
};

export default Ownerform;
