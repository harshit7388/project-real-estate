import React, { useState } from "react";
import Filters from "./components/Filters";

const App = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log("Selected Filters:", newFilters);
  };

  return (
    <div>
      <h1>Real Estate Property Listings</h1>
      <Filters onFilterChange={handleFilterChange} />
    </div>
  );
};

export default App;
