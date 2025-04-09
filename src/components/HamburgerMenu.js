import React, { useState } from "react";
import JobForm from '../components/JobForm' 
import RentalForm from '../components/RentalForm' 
import OwnerForm from '../components/OwnerForm' 
import '../styles/components/_hamburger.scss';

export const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeForm, setActiveForm] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleSelectForm = (formName) => {
    setActiveForm(formName);
    setMenuOpen(false); // optional: close menu after selection
  };
  const handleCloseForm = () => {
    setActiveForm(null);
  };
  

  return (
    <div className="hamburger-container">
      <div className="hamburger-icon" onClick={toggleMenu}>
        ☰
      </div>

      {menuOpen && (
        <div className="dropdown-menu">
          <div onClick={() => handleSelectForm("job")}>Looking for a job?</div>
          <div onClick={() => handleSelectForm("owner")}>Want to list property?</div>
          <div onClick={() => handleSelectForm("rental")}>Looking for PG/Room?</div>
        </div>
      )}

      <div className="form-container">
        {activeForm === "job" && <JobForm onClose={handleCloseForm}/>}
        {activeForm === "owner" && <OwnerForm onClose={handleCloseForm}/>}
        {activeForm === "rental" && <RentalForm onClose={handleCloseForm}/>}
      </div>
    </div>
  );
};
