import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
      <motion.nav 
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="navbar-container">
          <motion.div 
            className="navbar-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to="/" onClick={closeMenu}>
              {/* MyBrokers.in */}
            </NavLink>
          </motion.div>

          <motion.div 
            className="menu-icon" 
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.ul 
            className={`navbar-menu ${menuOpen ? "active" : ""}`}
            initial={false}
            animate={menuOpen ? "open" : "closed"}
            variants={{
              open: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.1,
                  delayChildren: 0.1
                }
              },
              closed: { 
                opacity: 0,
                transition: { 
                  staggerChildren: 0.05,
                  staggerDirection: -1
                }
              }
            }}
          >
            <motion.li
              variants={{
                open: { y: 0, opacity: 1 },
                closed: { y: -20, opacity: 0 }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <NavLink to="/" onClick={closeMenu} end>
                Home
              </NavLink>
            </motion.li>
            <motion.li
              variants={{
                open: { y: 0, opacity: 1 },
                closed: { y: -20, opacity: 0 }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <NavLink to="/contact" onClick={closeMenu}>
                Contact Us
              </NavLink>
            </motion.li>
            <motion.li
              variants={{
                open: { y: 0, opacity: 1 },
                closed: { y: -20, opacity: 0 }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <NavLink to="/privacy-policy" onClick={closeMenu}>
                Privacy Policy
              </NavLink>
            </motion.li>

            {/* Attention-grabbing buttons */}
            <motion.li
              variants={{
                open: { y: 0, opacity: 1 },
                closed: { y: -20, opacity: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                className="nav-btn job-btn animated-highlight"
                onClick={() => openForm("job")}
                whileHover={{ 
                  boxShadow: "0 8px 25px rgba(255, 126, 95, 0.4)",
                  y: -2
                }}
                whileTap={{ y: 0 }}
              >
                Find Job
              </motion.button>
            </motion.li>
            <motion.li
              variants={{
                open: { y: 0, opacity: 1 },
                closed: { y: -20, opacity: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                className="nav-btn pg-btn animated-highlight"
                onClick={() => openForm("rental")}
                whileHover={{ 
                  boxShadow: "0 8px 25px rgba(67, 206, 162, 0.4)",
                  y: -2
                }}
                whileTap={{ y: 0 }}
              >
                Find PG
              </motion.button>
            </motion.li>
            <motion.li
              variants={{
                open: { y: 0, opacity: 1 },
                closed: { y: -20, opacity: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button
                className="nav-btn list-btn animated-highlight"
                onClick={() => openForm("owner")}
                whileHover={{ 
                  boxShadow: "0 8px 25px rgba(142, 45, 226, 0.4)",
                  y: -2
                }}
                whileTap={{ y: 0 }}
              >
                List Your Property
              </motion.button>
            </motion.li>
          </motion.ul>
        </div>
      </motion.nav>

      {/* Popup Forms */}
      <AnimatePresence>
        <div className="form-container">
          {activeForm === "job" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <JobForm onClose={closeForm} />
            </motion.div>
          )}
          {activeForm === "owner" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <OwnerForm onClose={closeForm} />
            </motion.div>
          )}
          {activeForm === "rental" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <RentalForm onClose={closeForm} />
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
