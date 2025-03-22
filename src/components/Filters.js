// src/components/Filters.js
import React, { useState } from "react";
import "../styles/components/_filters.scss";
import {
  budgetOptions,
  locationOptions,
  amenitiesOptions,
  propertyTypeOptions,
  livingTypeOptions,
} from "../data/filterOptions";

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    budget: "",
    location: "",
    amenities: [],
    propertyType: "",
    livingType: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setFilters((prev) => ({
        ...prev,
        amenities: checked
          ? [...prev.amenities, value]
          : prev.amenities.filter((item) => item !== value),
      }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
    
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="filters">
      <h3>Filter Properties</h3>

      <label>Budget:</label>
      <select name="budget" value={filters.budget} onChange={handleChange}>
        <option value="">Select Budget</option>
        {budgetOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <label>Location:</label>
      <select name="location" value={filters.location} onChange={handleChange}>
        <option value="">Select Location</option>
        {locationOptions.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <label>Property Type:</label>
      <select name="propertyType" value={filters.propertyType} onChange={handleChange}>
        <option value="">Select Type</option>
        {propertyTypeOptions.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>

      <label>Living Type:</label>
      <select name="livingType" value={filters.livingType} onChange={handleChange}>
        <option value="">Select Living Type</option>
        {livingTypeOptions.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <label>Amenities:</label>
      <div className="amenities">
        {amenitiesOptions.map((amenity) => (
          <label key={amenity}>
            <input
              type="checkbox"
              name="amenities"
              value={amenity}
              checked={filters.amenities.includes(amenity)}
              onChange={handleChange}
            />
            {amenity}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
