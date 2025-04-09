import React, { useState } from "react";
import "../styles/components/_filters.scss";

const Filters = ({onFilterChange}) => {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    livingType: "",
    amenities: [],
  });

  const filterOptions = {
    location: [
      { label: "Gurgaon", options: ["Sector 45", "Sector 57", "Ardee City"] },
    ],
    propertyType: [
      { label: "PG", options: ["PG"] },
      { label: "Room Kitchen Set", options: ["1 RK", "2 RK"] },
      { label: "BHK", options: ["1 BHK", "2 BHK"] },
    ],
    priceRange: ["5000-10000", "10000-15000", "15000-20000", "20000+"],
    amenities: ["WiFi", "Parking", "Furnished"],
  };

  const livingTypes = {
    pg: ["Co-living", "Couples", "For Boys Only", "For Girls Only"],
    flat: ["Furnished", "Semi-Furnished", "Non-Furnished"],
  };

  const getLivingOptions = () => {
    const type = filters.propertyType?.toLowerCase();
    if (type?.includes("pg")) return livingTypes.pg;
    if (type?.includes("bhk") || type?.includes("rk")) return livingTypes.flat;
    return [];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };

    // Reset living type if property type changes
    if (name === "propertyType") {
      updatedFilters.livingType = "";
    }

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  // Function to toggle amenity selection
  const toggleAmenity = (amenity) => {
    const updated = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((item) => item !== amenity)
      : [...selectedAmenities, amenity];
    setSelectedAmenities(updated);
  };
  const handleSearch = () => {
    const updatedFilters = { ...filters, amenities: selectedAmenities }; 
    onFilterChange(updatedFilters); 
  };

  return (
    <div className="filters">

       {/* Message instead of Tabs */}
       <div className="filter-message">
        <p>We deal in rental properties only !!</p>
        <br></br>
      </div>
      

      {/* Filter Options Section */}
      <div className="filter-options">
        {/* Location Filter */}
        <div className="filter-group">
          <label class name="filterselectionheading">Location</label>
          <select name="location" value={filters.location} onChange={handleChange}>
            <option value="" disabled>Select Location</option> 
            {filterOptions.location.map((group, index) => (
              <optgroup key={index} label={group.label}>
                {group.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {/* Property Type Filter */}
        <div className="filter-group">
          <label>Property Type</label>
          <select name="propertyType" value={filters.propertyType} onChange={handleChange}>
            <option value="" disabled>Select Property Type</option> 
            {filterOptions.propertyType.map((group, index) => (
              <optgroup key={index} label={group.label}>
                {group.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="filter-group">
          <label>Price Range</label>
          <select name="priceRange" value={filters.priceRange} onChange={handleChange}>
            <option value="" disabled>Select Price Range <span>(in ₹)</span></option>
            {filterOptions.priceRange.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Conditional Living Type */}
        {filters.propertyType && (
          <div className="filter-group">
            <label>Living Type</label>
            <select name="livingType" value={filters.livingType} onChange={handleChange}>
              <option value="" disabled>Select Living Type</option>
              {getLivingOptions().map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        )}

        {/* Amenities Section */}
        <div className="amenities">
          {filterOptions.amenities.map((amenity) => (
            <label
              key={amenity}
              className={selectedAmenities.includes(amenity) ? "selected" : ""}
              onClick={() => toggleAmenity(amenity)}
            >
              {amenity}
            </label>
          ))}
        </div>

        {/* Search Button */}
        <button className="search-button" onClick={handleSearch}>&#128269;Search</button>
      </div>
    </div>
  );
};

export default Filters;
