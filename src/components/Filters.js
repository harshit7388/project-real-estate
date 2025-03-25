import React, { useState } from "react";
import "../styles/components/_filters.scss";

const Filters = ({onFilterChange}) => {
  const [activeTab, setActiveTab] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    livingType: "",
    amenities: [],
  });

  // Filter options stored in an object for better maintainability
  const filterOptions = {
    location: [
      { label: "Gurgaon", options: ["Sector 45", "Sector 57", "Ardee City"] },
    ],
    propertyType: [
      { label: "PG", options: ["PG with Food", "PG without Food"] },
      { label: "Room Kitchen Set", options: ["1 RK", "2 RK"] },
      { label: "BHK", options: ["1 BHK", "2 BHK"] },
    ],
    priceRange: ["5000-10000", "10000-15000", "15000-20000", "20000+"],

    livingType: ["For Girls Only", "For Boys Only", "Co-living"],
    amenities: ["WiFi", "Parking", "Furnished"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Function to toggle amenity selection
  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };
  const handleSearch = () => {
    const updatedFilters = { ...filters, amenities: selectedAmenities }; 
    onFilterChange(updatedFilters); 
  };

  return (
    <div className="filters">
      {/* Tab Section */}
      {/* <div className="filter-tabs" style={{display:"none"}}>
        {["Buy", "Sell", "Rent"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div> */}

       {/* Message instead of Tabs */}
       <div className="filter-message">
        <p>We deal in rental properties only !!</p>
      </div>

      {/* Filter Options Section */}
      <div className="filter-options">
        {/* Location Filter */}
        <div className="filter-group">
          <label>Location</label>
          <select name="location" value={filters.location} onChange={handleChange}>
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
            {filterOptions.priceRange.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Living Type Filter */}
        <div className="filter-group">
          <label>Living Type</label>
          <select name="livingType" value={filters.livingType} onChange={handleChange}>
            {filterOptions.livingType.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

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
