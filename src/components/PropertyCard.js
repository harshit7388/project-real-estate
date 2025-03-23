import React from "react";
import "../styles/components/_propertyCard.scss";

const PropertyCard = ({ property, filters }) => {
  // Generate a WhatsApp message with property details and user-selected filters
  const generateWhatsAppMessage = () => {
    const message = `Hello, I'm interested in the property "${property.title}".\n\nProperty Details:\n- Location: ${property.location}\n- Price: ${property.price}\n- Living Type: ${property.livingType}\n- Property Type: ${property.propertyType}\n- Amenities: ${property.amenities.join(", ")}\n\nMy Selected Filters:\n- Location: ${filters.location || "Any"}\n- Price Range: ${filters.priceRange || "Any"}\n- Living Type: ${filters.livingType || "Any"}\n- Property Type: ${filters.propertyType || "Any"}\n- Amenities: ${
      filters.amenities.length > 0 ? filters.amenities.join(", ") : "Any"
    }`;

    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/${property.ownerPhone}?text=${generateWhatsAppMessage()}`;

  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <div className="property-info">
        <h3>{property.title}</h3>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Price:</strong> {property.price}</p>
        <p><strong>Living Type:</strong> {property.livingType}</p>
        <p><strong>Property Type:</strong> {property.propertyType}</p>
        <p><strong>Amenities:</strong> {property.amenities.join(", ")}</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
          📲 Contact via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
