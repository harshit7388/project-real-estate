import React, { useState } from "react";
import "../styles/components/_filters.scss";

const Filters = ({ onFilterChange }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [showContactModal, setShowContactModal] = useState(false);
  const [userContact, setUserContact] = useState({
    name: "",
    contact: "",
  });
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
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
      { label: "Gurgaon", options: ["Sector 45", "Sector 57", "Ardee City","Sector 52"] },
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
    if (name === "propertyType") updatedFilters.livingType = "";
    setFilters(updatedFilters);
  };

  const toggleAmenity = (amenity) => {
    const updated = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((item) => item !== amenity)
      : [...selectedAmenities, amenity];
    setSelectedAmenities(updated);
  };

  const handleSearch = () => {
    const hasFilters =
      filters.location ||
      filters.propertyType ||
      filters.priceRange ||
      filters.livingType ||
      selectedAmenities.length > 0;

    if (!hasFilters) {
      setAlertMessage("Please select at least one filter before searching.");
      setTimeout(() => setAlertMessage(""), 3000);
      return;
    }

    if (!isContactSubmitted) {
      setShowContactModal(true);
      return;
    }

    const updatedFilters = { ...filters, amenities: selectedAmenities };
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filters">
      <div className="filter-message">
        <p>We deal in rental properties only !!</p>
        <br />
      </div>

      {alertMessage && <div className="custom-alert">{alertMessage}</div>}

      <div className="filter-options">
        <div className="filter-group">
          <label className="filterselectionheading">Location</label>
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Location
            </option>
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

        <div className="filter-group">
          <label>Property Type</label>
          <select
            name="propertyType"
            value={filters.propertyType}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Property Type
            </option>
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

        <div className="filter-group">
          <label>Price Range</label>
          <select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Price Range (in ₹)
            </option>
            {filterOptions.priceRange.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {filters.propertyType && (
          <div className="filter-group">
            <label>Living Type</label>
            <select
              name="livingType"
              value={filters.livingType}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Living Type
              </option>
              {getLivingOptions().map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

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

        <button className="search-button" onClick={handleSearch}>
          🔍 Search
        </button>
      </div>

      {showContactModal && (
        <div className="modal-backdrop">
          <div className="contact-modal">
            <h3>Enter your contact details</h3>

            {alertMessage && <div className="custom-alert">{alertMessage}</div>}

            <input
              type="text"
              placeholder="Your Name"
              value={userContact.name}
              onChange={(e) =>
                setUserContact({ ...userContact, name: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={userContact.contact}
              onChange={(e) =>
                setUserContact({ ...userContact, contact: e.target.value })
              }
            />

            <button
              onClick={async () => {
                const { name, contact } = userContact;
                const isPhone = /^[6-9]\d{9}$/.test(contact);
                const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);

                if (!name || (!isPhone && !isEmail)) {
                  setAlertMessage(
                    "Please enter your name and a valid 10-digit phone number."
                  );
                  setTimeout(() => setAlertMessage(""), 3000);
                  return;
                }

                // Submit to Google Form
                const googleFormsURL = "https://docs.google.com/forms/d/1S0s-5c8y9mT5FZRbkV1_qRqkLdLfYtYkIV7eE5DNlBE/formResponse";

                const formDataToSend = new FormData();
                formDataToSend.append("entry.28741682", name); // Name field
                formDataToSend.append("entry.1854633370", contact); // Phone field

                try {
                  await fetch(googleFormsURL, {
                    method: "POST",
                    mode: "no-cors",
                    body: formDataToSend,
                  });
                } catch (err) {
                  console.error("Google Form submission error", err);
                }

                // Apply filter after submission
                setIsContactSubmitted(true);
                setShowContactModal(false);
                setAlertMessage("Thanks! We'll reach out to you shortly.");
                setTimeout(() => setAlertMessage(""), 3000);
                const updatedFilters = {
                  ...filters,
                  amenities: selectedAmenities,
                };
                onFilterChange(updatedFilters);
              }}
            >
              Submit & Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
