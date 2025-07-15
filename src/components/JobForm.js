import React, { useState } from "react";
import "../styles/components/_popup.scss"; 
import { FaTimes } from "react-icons/fa"; 

const Jobform = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    jobrole:""
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState({});
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.jobrole.trim()) newErrors.jobrole = "jobrole is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop submission if errors exist
    }
    
    console.log("User Details:", formData);

    const googleForms = "https://docs.google.com/forms/d/1S0s-5c8y9mT5FZRbkV1_qRqkLdLfYtYkIV7eE5DNlBE/formResponse";
    const formDataToSend = new FormData();
    formDataToSend.append("entry.28741682", formData.name);
    formDataToSend.append("entry.1854633370", formData.phone); 
    formDataToSend.append("entry.2068926587", formData.location); 
    formDataToSend.append("entry.8940731", formData.jobrole); 

    await fetch(googleForms, {
      method: "POST",
      body: formDataToSend,
      mode: "no-cors",
    });

    // Hide form, show thank-you message
    setShowForm(false);
    setShowThankYou(true);

    setTimeout(() => {
      setShowThankYou(false); // Hide message after 3 seconds
      onClose(); // Close popup
      setShowForm(true); // Reset form visibility for next time
    }, 90000);

    // Reset form
    setFormData({
      name: "",
      phone: "",
      location: "",
      jobrole: "",        
    });

    setErrors({}); // Clear errors
  };

  return (
   <div className="popup-overlay">
      {showForm && (
        <div className="popup-box">
          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>

          <h2>Get the Best Jobs </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}

            <input
              type="text"
              name="location"
              placeholder="Preferred Location"
              value={formData.location}
              onChange={handleChange}
            />
            {errors.location && <span className="error-message">{errors.location}</span>}

            <input
              type="text"
              name="jobrole"
              placeholder="Your Preferred Job Role"
              value={formData.jobrole}
              onChange={handleChange}
            />
            {errors.jobrole && <span className="error-message">{errors.jobrole}</span>}

            <button type="submit" className="submit-btn">Reach out to us !!</button>
          </form>
        </div>
      )}

      {showThankYou && (
        <div className="thank-you-message">✅ Thanks for reaching out!</div>
      )}
    </div>
  );
};

export default Jobform;
