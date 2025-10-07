import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Filters from "./components/Filters";
import '../src/_app.scss'
import PropertyList from "../src/components/PropertyList";
import Footer from "./components/Footer";
import Popup from './components/Popup';
import WhatsAppButton from "./components/WhatsAppButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import { HamburgerMenu } from "./components/HamburgerMenu";
import Banner from '../src/utils/Banner'
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Navbar from "./components/Navbar";
import NotifyOwnerButton from "./styles/components/NotifyOwnerButton";
import PropertyDetails from "./components/PropertyDetails";
import PopularProperties from "./components/PopularProperties";
import propertiesData from './components/PropertyList';
import Disclaimer from "./components/Disclaimer";
import Maintenance from "./components/Maintenance";

const App = () => {
  const isMaintenanceMode = true; // Set to true to enable maintenance mode
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
    // console.log("Selected Filters:", newFilters);
  };
    const [showDisclaimer, setShowDisclaimer] = useState(true);

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


  // Animation variants for page transitions
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

const handleAgree = () => {
    setShowDisclaimer(false);
  };

  if (isMaintenanceMode) {
    return <Maintenance />;
  }

  return (
    <Router>
      {/* <HamburgerMenu /> */}
          <Navbar />
          
          {showDisclaimer && <Disclaimer onAgree={handleAgree} />}

          {/* <NotifyOwnerButton/> */}
      
      <Routes>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/" element={
          <motion.div 
            className="app-container"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
          {/* {showPopup && <Popup onClose={closePopup}/>} */}
          <motion.div 
            className="heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 100 }}
            >
              My<span className="highlight">Brokers</span><small>.in</small><br />
            </motion.h1>
            {/* <Banner/> */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Filters onFilterChange={handleFilterChange} />
            </motion.div>
            <motion.p 
              className="location-notice"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Currently available in <span className="location-notice-city">Gurugram</span> only. Stay tuned for more locations soon. 😊🏡
            </motion.p>
            <PopularProperties ids={["#004", "#006", "#001"]}/>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <PropertyList filters={filters}></PropertyList>
            </motion.div>
          </motion.div>
            <Footer></Footer>
            <WhatsAppButton />
        </motion.div>
        }
        />
          {/* <Route path="/property/:id" element={<PropertyDetails />} /> */}
        </Routes>
    </Router> 
     );
};

export default App;
