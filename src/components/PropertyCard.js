import React from "react";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Import Slick Styles
import "slick-carousel/slick/slick-theme.css";
import { FaCar, FaUserCircle } from "react-icons/fa";
import { FaWifi } from "react-icons/fa"; // Import icons
import { FaWhatsapp } from "react-icons/fa";
import "../styles/components/_propertyCard.scss";

const PropertyCard = ({ property }) => {
  const message = encodeURIComponent(`Hi, I am interested in your property: ${property.title}. My preferrences are: - ${property.location} , ${property.price} , ${property.propertyType} , ${property.livingType}`); ;
  const whatsappLink = `https://wa.me/+917388670069?text=${message}`;
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

  return (
    <div className="property-card">
      {/* Image Carousel */}
      <div className="property-image">
      <Slider {...settings}>
      {property.images && property.images.length > 0 ? (
        property.images.map((img, index) => (
          <img key={index} src={img} alt={`Property ${index + 1}`} />
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
      </div>

      {/* Property Details */}
      <div className="property-details">
        <h3>{property.title}</h3>
        <div className="location">📍 {property.location}</div>
        <div className="price">₹ {property.price}</div>

        {/* Property Type & Living Type */}
        <div className="property-meta">
          <span className="propertyType">{property.propertyType}</span> 
          <span className="livingType">{property.livingType}</span>
        </div>

        {/* Amenities Icons */}
        <div className="amenities">
          <span className="wifi">{property.amenities.includes("WiFi") && <FaWifi />}</span>
          <span className="parking">{property.amenities.includes("Parking") && <FaCar />}</span>
        </div>
      </div>

      {/* Footer (Owner Info & Contact Buttons) */}
      <div className="property-footer">
        <div className="owner-info">
          <FaUserCircle className="owner-icon" />
          <span className="owner-name">{property.ownerName || "Owner"}</span>
        </div>
        <div className="contact-icons">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="whatsapp-icon" />
          </a>
          {/* <a href={`tel:${phone}`}>
            <FaPhone className="phone-icon" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
