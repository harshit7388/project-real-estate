import React from "react";
import PropertyCard from "./PropertyCard"; // Reuse your existing card component
import "../styles/components/_popularproperties.scss"; // Style it as you like
import { propertiesData } from "./PropertyList";

const PopularProperties = ({ ids }) => {
  // Filter the popular properties using the given ids
  const popularProps = propertiesData.filter((property) => ids.includes(property.id));

  return (
    <div className="popular-properties">
      <h2>🔥 Popular / Budget Picks</h2>
      <div className="popular-list">
        {popularProps.map((property) => (
          <PropertyCard key={property.id} property={property} filters={{}} />
        ))}
      </div>
    </div>
  );
};

export default PopularProperties;
