import React from "react";
import { motion } from "framer-motion";
import '../styles/components/_maintenance.scss';

const Maintenance = () => {
  return (
    <motion.div
      className="maintenance-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="maintenance-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* <motion.div
          className="maintenance-icon"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          🔧
        </motion.div> */}
        <h1 className="maintenance-title">Under Maintenance</h1>
        <p className="maintenance-message">
          We're currently under maintenance to improve our services.
          <br></br>
          Please check back soon!
        </p>
        <div className="maintenance-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Maintenance;
