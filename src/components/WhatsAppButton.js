import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import "../styles/components/_whatsappButton.scss"; // Import SCSS for styling

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = "+917011955137"; // Replace with the owner's WhatsApp number (include country code)
  const message = "Hello! I'm interested in your property listings. Can you provide more details?";

  return (
    <>
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          delay: 1, 
          duration: 0.6, 
          type: "spring", 
          stiffness: 100 
        }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 5,
          boxShadow: "0 8px 25px rgba(37, 211, 102, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaWhatsapp className="whatsapp-icon" />
        </motion.div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="whatsapp-tooltip"
              initial={{ opacity: 0, x: -10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <span>Chat with us!</span>
              <motion.div
                className="tooltip-arrow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </>
  );
};

export default WhatsAppButton;
