import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/_navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";

import JobForm from "../components/JobForm";
import OwnerForm from "../components/OwnerForm";
import RentalForm from "../components/RentalForm";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeForm, setActiveForm] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const openForm = (formType) => {
    setActiveForm(formType);
    closeMenu();
  };
  const closeForm = () => setActiveForm(null);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <NavLink to="/" onClick={closeMenu}>
              {/* MyBrokers.in */}
            </NavLink>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <NavLink to="/" onClick={closeMenu} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy" onClick={closeMenu}>
                Privacy Policy
              </NavLink>
            </li>

            {/* Attention-grabbing buttons */}
            <li>
              <button
                className="nav-btn job-btn animated-highlight"
                onClick={() => openForm("job")}
              >
                Find Job
              </button>
            </li>
            <li>
              <button
                className="nav-btn pg-btn animated-highlight"
                onClick={() => openForm("rental")}
              >
                Find PG
              </button>
            </li>
            <li>
              <button
                className="nav-btn list-btn animated-highlight"
                onClick={() => openForm("owner")}
              >
                List Your Property
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Popup Forms */}
      <div className="form-container">
        {activeForm === "job" && <JobForm onClose={closeForm} />}
        {activeForm === "owner" && <OwnerForm onClose={closeForm} />}
        {activeForm === "rental" && <RentalForm onClose={closeForm} />}
      </div>
    </>
  );
};

export default Navbar;
