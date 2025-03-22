import React, { useState } from "react";
import Filters from "./components/Filters";
import '../src/_app.scss'

const App = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log("Selected Filters:", newFilters);
  };

  return (
    <div className="heading">
      {/* <h1>Real Estate Property Listings</h1> */}
      <h1>Find <span className="highlight">Perfect</span> Place <br /> To Live Life.</h1>
      <Filters onFilterChange={handleFilterChange} />
      <p className="location-notice">Currently available in <span className="location-notice-city">Gurgaon</span> only. Stay tuned for more locations soon. 😊🏡</p>
    </div>
  );
};

export default App;
