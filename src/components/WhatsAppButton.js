import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/components/_whatsappButton.scss"; // Import SCSS for styling

const WhatsAppButton = () => {
  const phoneNumber = "917388670069"; // Replace with the owner's WhatsApp number (include country code)
  const message = "Hello! I'm interested in your property listings. Can you provide more details?";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
