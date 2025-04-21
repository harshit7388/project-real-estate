// AnimatedHeaderBanner.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; 

import '../styles/utils/_banner.scss'; 

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          className="header-banner"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="banner-content">
            <span role="img" aria-label="staff">💼</span>Want job<strong></strong>.
            Contact us.
          </div>
          <button className="banner-close" onClick={() => setShowBanner(false)}>
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Banner;
