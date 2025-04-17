import React, { useState, useEffect } from "react";
import Filters from "./components/Filters";
import '../src/_app.scss'
import PropertyList from "../src/components/PropertyList";
import Footer from "./components/Footer";
import Popup from './components/Popup';
import WhatsAppButton from "./components/WhatsAppButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import { HamburgerMenu } from "./components/HamburgerMenu";
import Banner from "../src/utils/Banner";

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
  //  const closePopup = () => {
  //   setShowPopup(false);
  //   setTimeout(openPopup, 30000); 
  // };

  // Show popup when site loads ,added 10 secs interval to show popup
  // useEffect(() => {
  //   const initialPopupTimer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 30000); 

  //   return () => clearTimeout(initialPopupTimer);
    
  // }, []);

  // useEffect(() => {
  //   const whenuserleavespage = (event) => {
  //     if (event.clientY < 10) {
  //       setShowExitPopup(true);
  //     }
  //   };

  //   document.addEventListener("mouseleave", whenuserleavespage);
  //   return () => document.removeEventListener("mouseleave", whenuserleavespage);
  // }, []);


  return (
    <Router>
      
      <Routes>
          <Route path="/contact" element={<ContactUs />} />

        <Route path="/" element={
          <div className="app-container">
            <HamburgerMenu />
          {/* {showPopup && <Popup onClose={closePopup}/>} */}
          <div className="heading">
            <h1>My<span className="highlight">Brokers</span><small>.in</small><br /></h1>
            <Banner />
            <Filters onFilterChange={handleFilterChange} />
            <p className="location-notice">Currently available in <span className="location-notice-city">Gurgaon</span> only. Stay tuned for more locations soon. 😊🏡</p>
            <PropertyList filters={filters}></PropertyList>
          </div>
            <Footer></Footer>
            <WhatsAppButton />
        </div>
        }
        />
        </Routes>
    </Router> 
     );
};

export default App;
