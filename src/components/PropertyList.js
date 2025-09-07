import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropertyCard from "./PropertyCard";
import "../styles/components/_propertyList.scss";
import pg1 from "../assets/images/PG52i/pg1.jpg"
import pg2 from "../assets/images/PG52i/pg2.png"
import pg3 from "../assets/images/PG52i/pg3.png"  
import pg4 from "../assets/images/PG52i/pg4.png"
import pg5 from "../assets/images/PG52ii/pg5.jpg"
import pg6 from "../assets/images/PG52ii/pg6.png"
import pg7 from "../assets/images/PG52ii/pg7.png"
import pg8 from "../assets/images/PG52iii/pg8.png"
import pg9 from "../assets/images/PG52iii/pg9.png"
import pg10 from "../assets/images/PG52iii/pg10.png"

import rki1 from "../assets/images/rk52i/rki1.png"
import rki2 from "../assets/images/rk52i/rki2.png"
import rki3 from "../assets/images/rk52i/rki3.png"

import rkii1 from "../assets/images/rk52ii/rkii1.png"
import rkii2 from "../assets/images/rk52ii/rkii2.png"

import rkiii1 from "../assets/images/rk52iii/rkiii1.png"
import rkiii2 from "../assets/images/rk52iii/rkiii2.png"

import rkiv1 from "../assets/images/rk52iv/rkiv1.png"
import rkiv2 from "../assets/images/rk52iv/rkiv2.png"
import rkiv3 from "../assets/images/rk52iv/rkiv3.png"

import rkv1 from "../assets/images/rk52v/rkv1.png"
import rkv2 from "../assets/images/rk52v/rkv2.png"
import rkv3 from "../assets/images/rk52v/rkv3.png"

import rkvi1 from "../assets/images/rk52vi/rkvi1.png"
import rkvi2 from "../assets/images/rk52vi/rkvi2.png"
import rkvi3 from "../assets/images/rk52vi/rkvi3.png"



export const propertiesData = [
  {
    id: "#001",
    title: "Best PG in Sector 52",
    location: "Sector 52",
    price: "12000",
    propertyType: "PG",
    livingType: "Co-living",
    amenities: ["WiFi", "Parking"],
    images: [pg1, pg2, pg3, pg4],
    // video: require("../assets/videos/video1.mp4"),
    // ownerName: "Rahul Sharma",
    ownerPhone: "7011955137",
  },
  {
    id: "#002",
    title: "PG for Boys & Girls in Sector 52",
    location: "Sector 52",
    price: "18000",
    propertyType: "PG",
    livingType: "Co-living",
    amenities: ["WiFi", "Parking"],
    images: [pg5, pg6, pg7],
    // video: require("../assets/videos/video1.mp4"),
    ownerName: "Rohit Singh",
    ownerPhone: "7011955137",
  },
  {
    id: "#003",
    title: "Budget PGs in Sector 52",
    location: "Sector 52",
    price: "15000",
    propertyType: "PG",
    livingType: "Co-living",
    amenities: ["Parking", "WiFi"],
    // image: "https://picsum.photos/seed/picsum/200/300",
    images: [pg8, pg9, pg10],
    // video: require("../assets/videos/video1.mp4"),
    ownerName: "Rajesh Kumar",
    ownerPhone: "7011955137",
  },
  {
    id: "#004",
    title: "Affordable Flats in Sector 52",
    location: "Sector 52",
    price: "10000",
    propertyType: "1 RK",
    livingType: "Furnished",
    amenities: ["WiFi", "Furnished"],
    images: [rki1, rki2, rki3],
    // video: require("../assets/videos/video1.mp4"),
    ownerName: "Rajat Verma",
    ownerPhone: "7011955137",
  },
  {
    id: "#005",
    title: "Luxury Flats on Rent",
    location: "Sector 52",
    price: "20000",
    propertyType: "1 RK",
    livingType: "Furnished",
    amenities: ["WiFi", "Parking", "Furnished"],
    images: [rkii1, rkii2], 
    // video: require("../assets/videos/video1.mp4"),
    ownerName: "Rakesh Tiwari",
    ownerPhone: "7011955137",
  },
  {
    id: "#006",
    title: "1 RK Apartment",
    location: "Sector 52",
    price: "11000",
    propertyType: "1 RK",
    livingType: "Furnished",
    amenities: ["WiFi", "Parking"],
    images: [rkiii1, rkiii2],
    // video: require("../assets/videos/video1.mp4"),
    ownerName: "Shivam Kumar",
    ownerPhone: "7011955137",
  },
  {
    id: "#007",
    title: "Low Budget 1 RK",
    location: "Sector 52",
    price: "11000",
    propertyType: "1 RK",
    livingType: "Furnished",
    amenities: ["WiFi", "Parking"],
    images: [rkiv1, rkiv2, rkiv3],
    // video: require("../assets/videos/video1.mp4"),
    ownerName: "Shivam Kumar",
    ownerPhone: "7011955137",
  },
  {
    id: "#008",
    title: "Afforadable Flats in Gurgaon",
    location: "Sector 52",
    price: "11000",
    propertyType: "1 RK",
    livingType: "Furnished",
    amenities: ["WiFi", "Parking"],
    images: [rkv1, rkv2, rkv3],
    // video: require("../assets/videos/video1.mp4"),
    ownerName: "Shivam Kumar",
    ownerPhone: "7011955137",
  },
  {
    id: "#009",
    title: "1 RK at best price",
    location: "Sector 52",
    price: "11000",
    propertyType: "1 RK",
    livingType: "Furnished",
    amenities: ["WiFi", "Parking"],
    images: [rkvi1, rkvi2, rkvi3],
    // video: require("../assets/videos/video1.mp4"),
    ownerName: "Shivam Kumar",
    ownerPhone: "7011955137",
  },
];

const PropertyList = ({ filters }) => {
  const filteredProperties = propertiesData.filter((property) => {
    const matchLocation =
      !filters.location || property.location === filters.location;

    const matchPropertyType =
      !filters.propertyType || property.propertyType === filters.propertyType;

    const matchLivingType =
      !filters.livingType || property.livingType === filters.livingType;

    return matchLocation && matchPropertyType && matchLivingType;
  });

  // Slick Carousel Settings (Mobile Only)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="property-list"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence mode="wait">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((x, index) => (
            <motion.div
              key={x.id}
              variants={itemVariants}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <PropertyCard property={x} filters={filters} />
            </motion.div>
          ))
        ) : (
          <motion.div
            className="no-results-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          >
            <motion.p 
              className="no-results"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              🔍 No properties match your filters.
            </motion.p>
            <motion.p 
              className="no-results-subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Try adjusting your search criteria or contact us for more options!
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default PropertyList;
