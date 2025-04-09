import React, { useState } from "react";
import "../styles/pages/_contactUs.scss";

const ContactUs = () => {
  // State to store user input
   const [formData, setFormData] = useState({
      name: "",
      phone: "",
      location: "",
      message: "",
    });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   // Form Validation
   const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.message.trim()) newErrors.message = "Your message is required";
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
    

    const googleForms = "https://docs.google.com/forms/d/e/1FAIpQLSexfK_7IoNixG13kIBiRv47cYyQxd5I7oATSfTIAwAr7AJpug/formResponse";
    const formDataToSend = new FormData();
    formDataToSend.append("entry.568754796", formData.name);
    formDataToSend.append("entry.1640362865", formData.phone); 
    formDataToSend.append("entry.1163558768", formData.location); 
    formDataToSend.append("entry.1497005571", formData.message); 

    await fetch(googleForms, {
      method: "POST",
      body: formDataToSend,
      mode: "no-cors",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      location: "",
      message: "",        
    });

    setErrors({}); // Clear errors
  };

   

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Reach out for any inquiries.</p>

        {/* Contact Form */}
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
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
           {errors.location && (
            <span className="error-message">{errors.message}</span>
          )}
          <button type="submit" className="sbmtbtn">Send Message</button>
        </form>
        <div><small className="contactus">MyBrokers.in</small></div>
      </div>
    </div>
  );
};

export default ContactUs;
