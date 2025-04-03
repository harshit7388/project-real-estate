// import React, { useState, useEffect } from "react";
// import "../styles/components/_popup.scss"; 
// import { FaTimes } from "react-icons/fa";

// const ExitPopup = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     location: "",
//     budget: "",
//   });

//   const [showThankYou, setShowThankYou] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const googleFormsURL = "https://docs.google.com/forms/d/e/1FAIpQLSexfK_7IoNixG13kIBiRv47cYyQxd5I7oATSfTIAwAr7AJpug/formResponse";

//     const formDataToSend = new FormData();
//     formDataToSend.append("entry.568754796", formData.name);
//     formDataToSend.append("entry.1640362865", formData.phone);
//     formDataToSend.append("entry.1163558768", formData.location);
//     formDataToSend.append("entry.88614705", formData.budget);

//     await fetch(googleFormsURL, {
//       method: "POST",
//       body: formDataToSend,
//       mode: "no-cors",
//     });

//     setShowThankYou(true);
//     setTimeout(() => {
//       setShowThankYou(false);
//       onClose();
//     }, 3000);

//     setFormData({ name: "", phone: "", location: "", budget: "" });
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-box">
//         <button className="close-btn" onClick={onClose}>
//           <FaTimes />
//         </button>

//         <h2>Don't Leave Without Finding Your Perfect Home!</h2>
//         <p>Submit your details & we'll send you the best property options.</p>

//         <form onSubmit={handleSubmit}>
//           <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
//           <input type="tel" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} required />
//           <input type="text" name="location" placeholder="Preferred Location" value={formData.location} onChange={handleChange} required />
//           <input type="text" name="budget" placeholder="Your Budget (₹)" value={formData.budget} onChange={handleChange} required />

//           <button type="submit" className="submit-btn">Submit Details</button>
//         </form>
//       </div>

//       {showThankYou && <div className="thank-you-message">✅ Thanks for reaching out!</div>}
//     </div>
//   );
// };

// export default ExitPopup;
