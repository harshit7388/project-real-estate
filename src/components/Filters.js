import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/components/_filters.scss";

const Filters = ({ onFilterChange }) => {
  const [alertMessage, setAlertMessage] = useState("");
  const [showContactModal, setShowContactModal] = useState(false);
  const [userContact, setUserContact] = useState({
    name: "",
    contact: "",
  });

  
 const carouselImages = [
    require("../assets/images/headerBgImage1.png"),
    require("../assets/images/headerBgImage2.png"),
    require("../assets/images/headerBgImage3.png"),
    require("../assets/images/headerBgImage4.png"),
    require("../assets/images/headerBgImage5.png"),
    require("../assets/images/headerBgImage6.png"),
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    livingType: "",
    amenities: [],
  });

    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

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

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div 
      className="filters"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <div className="filters-carousel">
        <AnimatePresence>
          <motion.img
            key={currentImage}
            src={carouselImages[currentImage]}
            alt="Background"
            className="filters-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      <motion.div 
        className="filter-message"
        variants={itemVariants}
      >
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 100 }}
        >
          We deal in rental properties only !!
        </motion.p>
        <br />
      </motion.div>

      <AnimatePresence>
        {alertMessage && (
          <motion.div 
            className="custom-alert"
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {alertMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className="filter-options"
        variants={itemVariants}
      >
        <motion.div 
          className="filter-group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <label className="filterselectionheading">Location</label>
          <motion.select
            name="location"
            value={filters.location}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
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
          </motion.select>
        </motion.div>

        <motion.div 
          className="filter-group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <label>Property Type</label>
          <motion.select
            name="propertyType"
            value={filters.propertyType}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
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
          </motion.select>
        </motion.div>

        <motion.div 
          className="filter-group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <label>Price Range</label>
          <motion.select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <option value="" disabled>
              Select Price Range (in ₹)
            </option>
            {filterOptions.priceRange.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </motion.select>
        </motion.div>

        <AnimatePresence>
          {filters.propertyType && (
            <motion.div 
              className="filter-group"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <label>Living Type</label>
              <motion.select
                name="livingType"
                value={filters.livingType}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <option value="" disabled>
                  Select Living Type
                </option>
                {getLivingOptions().map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </motion.select>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="amenities"
          variants={itemVariants}
        >
          {filterOptions.amenities.map((amenity, index) => (
            <motion.label
              key={amenity}
              className={selectedAmenities.includes(amenity) ? "selected" : ""}
              onClick={() => toggleAmenity(amenity)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {amenity}
            </motion.label>
          ))}
        </motion.div>

        <motion.button 
          className="search-button" 
          onClick={handleSearch}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 8px 25px rgba(91, 73, 255, 0.4)",
            y: -2
          }}
          whileTap={{ scale: 0.95, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          🔍 Search
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showContactModal && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="contact-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
            >
              <motion.h3
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                Enter your contact details
              </motion.h3>

              <AnimatePresence>
                {alertMessage && (
                  <motion.div 
                    className="custom-alert"
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {alertMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.input
                type="text"
                placeholder="Your Name"
                value={userContact.name}
                onChange={(e) =>
                  setUserContact({ ...userContact, name: e.target.value })
                }
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                whileFocus={{ scale: 1.02 }}
              />

              <motion.input
                type="text"
                placeholder="Phone Number"
                value={userContact.contact}
                onChange={(e) =>
                  setUserContact({ ...userContact, contact: e.target.value })
                }
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                whileFocus={{ scale: 1.02 }}
              />

              <motion.button
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
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 8px 25px rgba(91, 73, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Submit & Search
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Filters;
