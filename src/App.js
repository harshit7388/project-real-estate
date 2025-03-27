import React, { useState } from "react";
import Filters from "./components/Filters";
import '../src/_app.scss'
import PropertyList from "../src/components/PropertyList";
import Footer from "./components/Footer";
const App = () => {
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    livingType: "",
    amenities: [],
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log("Selected Filters:", newFilters);
  };

  return (
    <div>
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
