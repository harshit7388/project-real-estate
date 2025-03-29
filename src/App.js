import React, { useState, useEffect } from "react";
import Filters from "./components/Filters";
import '../src/_app.scss'
import PropertyList from "../src/components/PropertyList";
import Footer from "./components/Footer";
import Popup from './components/Popup';
// import Navbar from "./components/Navbar";

const App = () => {
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    livingType: "",
    amenities: [],
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log("Selected Filters:", newFilters);
  };
   // Function to open the popup
   const openPopup = () => {
    setShowPopup(true);
  };
  
  // Function to close the popup and set it to reappear after 10 seconds
   const closePopup = () => {
    setShowPopup(false);
    setTimeout(openPopup, 10000); // Reopen popup after 10 sec
  };

  // Show popup when site loads ,added 10 secs interval to show popup
  useEffect(() => {
    const initialPopupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 30000); 

    return () => clearTimeout(initialPopupTimer);
  }, []);

  return (
    <div className="app-container">
          {/* <Navbar /> */}
      {showPopup && <Popup onClose={closePopup}/>}
      <div className="heading">
        {/* <h1>Real Estate Property Listings</h1> */}
        <h1>Find <span className="highlight">Perfect</span> Place <br /> To Live Life.</h1>
        <Filters onFilterChange={handleFilterChange} />
        <p className="location-notice">Currently available in <span className="location-notice-city">Gurgaon</span> only. Stay tuned for more locations soon. 😊🏡</p>
        <PropertyList filters={filters}></PropertyList>
      </div>
        <Footer></Footer>
    </div>
  );
};

export default App;
