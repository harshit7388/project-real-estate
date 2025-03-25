
import React, { useState ,useEffect} from 'react';
import PropertyCard from './PropertyCard';
import '../styles/components/_propertyList.scss';
import Slider from "react-slick"; // Import Slick Carousel
import "slick-carousel/slick/slick.css"; // Import Slick Styles
import "slick-carousel/slick/slick-theme.css";

const propertiesData = [
  {
    id: 1,
    title: "Luxury PG with Food",
    location: "Sector 45",
    price: "12000",
    propertyType: "PG with Food",
    livingType: "For Girls Only",
    amenities: ["WiFi", "Parking"],
    images: [
      "https://picsum.photos/id/1018/300/200",
      "https://picsum.photos/id/1015/300/200",
      "https://picsum.photos/id/1020/300/200",
    ],
    ownerName: "Rahul Sharma",
    ownerPhone: "9876543210",
  },
  {
    id: 2,
    title: "1 BHK in Ardee City",
    location: "Ardee City",
    price: "18000",
    propertyType: "1 BHK",
    livingType: "Co-living",
    amenities: ["WiFi", "Furnished"],
    images: [
      "https://picsum.photos/id/1018/300/200",
      "https://picsum.photos/id/1015/300/200",
      "https://picsum.photos/id/1020/300/200",
    ],
    ownerName: "Rohit Singh",
    ownerPhone: "9876543211",
  },
  {
    id: 3,
    title: "2 RK in Sector 57",
    location: "Sector 57",
    price: "15000",
    propertyType: "2 RK",
    livingType: "For Boys Only",
    amenities: ["Parking", "Furnished"],
    // image: "https://picsum.photos/seed/picsum/200/300",
    images: [
      "https://picsum.photos/id/1018/300/200",
      "https://picsum.photos/id/1015/300/200",
      "https://picsum.photos/id/1020/300/200",
    ],
    ownerName: "Rajesh Kumar",
    ownerPhone: "9876543212",
  },
  {
    id: 4,
    title: "PG without Food",
    location: "Sector 45",
    price: "10000",
    propertyType: "PG without Food",
    livingType: "For Girls Only",
    amenities: ["WiFi", "Furnished"],
    images: [
      "https://picsum.photos/id/1018/300/200",
      "https://picsum.photos/id/1015/300/200",
      "https://picsum.photos/id/1020/300/200",
    ],
    ownerName: "Rajat Verma",
    ownerPhone: "9876543213",
  },
  {
    id: 5,
    title: "2 BHK Apartment",
    location: "Sector 57",
    price: "20000",

    propertyType: "2 BHK",
    livingType: "Co-living",
    amenities: ["WiFi", "Parking", "Furnished"],
    images: [
      "https://picsum.photos/id/1018/300/200",
      "https://picsum.photos/id/1015/300/200",
      "https://picsum.photos/id/1020/300/200",
    ],
    ownerName: "Rakesh Tiwari",
    ownerPhone: "9876543214",
  },
]

const PropertyList = ({filters}) => {

    const filteredProperties = propertiesData.filter((x)=>{
        return(
            (!filters.location || x.location === filters.location)
            &&
            (!filters.priceRange || parseInt(x.price.replace(/[^\d]/g, '')) >= parseInt(filters.priceRange.split('-')[0]) && parseInt(x.price.replace(/[^\d]/g, '')) <= parseInt(filters.priceRange.split('-')[1]))

            &&
            (!filters.propertyType || x.propertyType === filters.propertyType)
            &&
            (!filters.livingType || x.livingType === filters.livingType)

        )
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

      return (
        <div className="property-list-container">
          {/* Desktop View: Normal List */}
          <div className="property-list desktop-view">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((x) => (
                <PropertyCard key={x.id} property={x} filters={filters} />
              ))
            ) : (
              <p className="no-results">No properties match your filters.</p>
            )}
          </div>
    
          {/* Mobile View: Carousel */}
          <div className="mobile-view">
            <Slider {...settings}>
              {filteredProperties.length > 0 ? (
                filteredProperties.map((x) => (
                  <PropertyCard key={x.id} property={x} filters={filters} />
                ))
              ) : (
                <p className="no-results">No properties match your filters.</p>
              )}
            </Slider>
          </div>
        </div>
      );
}
export default PropertyList;
