import React from "react";
import { motion } from "framer-motion";
import '../styles/components/_disclaimer.scss';

const Disclaimer = ({ onAgree }) => {
  return (
    <motion.div
      className="disclaimer-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="disclaimer-box"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <h2 className="disclaimer-title">DISCLAIMER</h2>
        <p className="disclaimer-text">
          The details mentioned in the website and any information enclosed here 
          contains restricted and/or privileged information. It is intended only 
          for authorized screening and/or confidential presentation at the discretion 
          of the company. All details provided are for information purpose only and 
          should not be treated as a sales offer, advertisement or invitation. 
          Reproduction, distribution or plagiarism without written permission is prohibited.
        </p>
        <motion.button
          className="agree-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAgree}
        >
          I Agree
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Disclaimer;
