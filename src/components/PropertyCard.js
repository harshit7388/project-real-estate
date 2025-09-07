import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Import Slick Styles
import "slick-carousel/slick/slick-theme.css";
import { FaCar, FaUserCircle, FaHeart, FaShare } from "react-icons/fa";
import { FaWifi } from "react-icons/fa"; // Import icons
import { FaWhatsapp } from "react-icons/fa";
import "../styles/components/_propertyCard.scss";

const PropertyCard = ({ property }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showShare, setShowShare] = useState(false);
  
  const message = encodeURIComponent(`Hi, I am interested in your property: ${property.id},${property.title}. My preferrences are: - ${property.location} , ${property.propertyType} , ${property.livingType}`); ;
  const whatsappLink = `https://wa.me/+917011955137?text=${message}`;
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remove next/prev buttons for a clean UI
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="property-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      layout
    >
      {/* Image Carousel */}
      <motion.div 
        className="property-image"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Action buttons overlay */}
        <div className="property-actions">
          <motion.button
            className={`action-btn like-btn ${isLiked ? 'liked' : ''}`}
            onClick={() => setIsLiked(!isLiked)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              color: isLiked ? '#ff4757' : '#666',
              scale: isLiked ? 1.1 : 1
            }}
            transition={{ duration: 0.2 }}
          >
            <FaHeart />
          </motion.button>
          
          <motion.button
            className="action-btn share-btn"
            onClick={() => setShowShare(!showShare)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaShare />
          </motion.button>
        </div>

        <Slider {...settings}>
        {property.images && property.images.length > 0 ? (
          property.images.map((img, index) => (
            <motion.img 
              key={index} 
              src={img} 
              alt={`Property ${index + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          ))
        ) : (
          <img src="https://via.placeholder.com/300x200?text=No+Image" alt="Default Property" />
        )}
        
         {/* Render Video if available */}
            {property.video && (
              <div className="video-container">
                <video controls width="100%" height="auto">
                  <source src={property.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
      </Slider>
      </motion.div>

      {/* Property Details */}
      <motion.div 
        className="property-details"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {property.title}
        </motion.h3>
        
        <motion.div 
          className="location"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          📍 {property.location}
        </motion.div>
        
        <motion.div 
          className="price priceHidden"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          ₹ Contact for the price
        </motion.div>

        {/* Property Type & Living Type */}
        <motion.div 
          className="property-meta"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <motion.span 
            className="propertyType"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {property.propertyType}
          </motion.span> 
          <motion.span 
            className="livingType"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {property.livingType}
          </motion.span>
        </motion.div>

        {/* Amenities Icons */}
        <motion.div 
          className="amenities"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <motion.span 
            className="wifi"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {property.amenities.includes("WiFi") && <FaWifi />}
          </motion.span>
          <motion.span 
            className="parking"
            whileHover={{ scale: 1.2, rotate: -5 }}
            transition={{ duration: 0.2 }}
          >
            {property.amenities.includes("Parking") && <FaCar />}
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Footer (Owner Info & Contact Buttons) */}
      <motion.div 
        className="property-footer"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        <div className="contact-icons">
          <motion.a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.2, 
              rotate: 5,
              boxShadow: "0 4px 15px rgba(37, 211, 102, 0.4)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <FaWhatsapp className="whatsapp-icon" />
          </motion.a>
          <motion.span 
            className="reachout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Reach out to us
          </motion.span>
        </div>
      </motion.div>

      {/* Share Modal */}
      <AnimatePresence>
        {showShare && (
          <motion.div
            className="share-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="share-content">
              <h4>Share this property</h4>
              <div className="share-buttons">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    navigator.share({
                      title: property.title,
                      text: `Check out this property: ${property.title}`,
                      url: window.location.href
                    });
                    setShowShare(false);
                  }}
                >
                  Share
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowShare(false)}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PropertyCard;
