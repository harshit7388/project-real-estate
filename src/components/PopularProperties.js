import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import PropertyCard from "./PropertyCard"; // Reuse your existing card component
import "../styles/components/_popularproperties.scss"; // Style it as you like
import { propertiesData } from "./PropertyList";

const PopularProperties = ({ ids }) => {
  // Filter the popular properties using the given ids
  const popularProps = propertiesData.filter((property) => ids.includes(property.id));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Slick Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          swipeToSlide: true,
        }
      }
    ]
  };

  return (
    <motion.div
      className="popular-properties"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Popular Properties
      </motion.h2>
      <motion.div className="popular-list">
        <Slider {...settings}>
          {popularProps.map((property, index) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <PropertyCard property={property} filters={{}} />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </motion.div>
  );
};

export default PopularProperties;
