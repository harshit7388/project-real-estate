import React, { useState } from "react";
import "../styles/components/_filters.scss";

const Filters = () => {
  const [activeTab, setActiveTab] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);

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
    priceRange: ["₹ 5k - ₹ 10k", "₹ 10k - ₹ 15k", "₹ 15k - ₹ 20k", "₹ 20k +"],
    livingType: ["For Girls Only", "For Boys Only", "Co-living"],
    amenities: ["WiFi", "Parking", "Furnished"],
  };

  // Function to toggle amenity selection
  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div className="filters">
      {/* Tab Section */}
      <div className="filter-tabs" style={{display:"none"}}>
        {["Buy", "Sell", "Rent"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

       {/* Message instead of Tabs */}
       <div className="filter-message">
        <p>We deal in rental properties only !!</p>
      </div>

      {/* Filter Options Section */}
      <div className="filter-options">
        {/* Location Filter */}
        <div className="filter-group">
          <label>Location</label>
          <select>
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
          <select>
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
          <select>
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
          <select>
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
        <button className="search-button">&#128269;Search</button>
      </div>
    </div>
  );
};

export default Filters;
