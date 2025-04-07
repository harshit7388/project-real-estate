
import React from 'react';
import PropertyCard from './PropertyCard';
import '../styles/components/_propertyList.scss';
const propertiesData = [
    {
      id: 1,
      title: "Luxury PG",
      location: "Sector 45",
      price: "12000",
      propertyType: "PG",
      livingType: "For Girls Only",
      amenities: ["WiFi", "Parking"],
      images:[require("../assets/images/img1.jpg"),require("../assets/images/img2.jpg"),require("../assets/images/img3.jpg")],
      video: require("../assets/videos/video1.mp4"),
      ownerName: "Rahul Sharma",
      ownerPhone: "7388670069",
    },
    {
      id: 2,
      title: "1 BHK in Ardee City",
      location: "Ardee City",
      price: "18000",
      propertyType: "1 BHK",
      livingType: "Furnished",
      amenities: ["WiFi", "Furnished"],
      images:[require("../assets/images/img1.jpg"),require("../assets/images/img2.jpg"),require("../assets/images/img3.jpg")],
      video: require("../assets/videos/video1.mp4"),
      ownerName: "Rohit Singh",
      ownerPhone: "7388670069",
    },
    {
      id: 3,
      title: "2 RK in Sector 57",
      location: "Sector 57",
      price: "15000",
      propertyType: "2 RK",
      livingType: "Semi-Furnished",
      amenities: ["Parking", "Furnished"],
      // image: "https://picsum.photos/seed/picsum/200/300",
      images:[require("../assets/images/img1.jpg"),require("../assets/images/img2.jpg"),require("../assets/images/img3.jpg")],
      video: require("../assets/videos/video1.mp4"),
      ownerName: "Rajesh Kumar",
      ownerPhone: "7388670069",
    },
    {
      id: 4,
      title: "PG 1",
      location: "Sector 45",
      price: "10000",
      propertyType: "PG",
      livingType: "Co-living",
      amenities: ["WiFi", "Furnished"],
      images:[require("../assets/images/img1.jpg"),require("../assets/images/img2.jpg"),require("../assets/images/img3.jpg")],
      video: require("../assets/videos/video1.mp4"),
      ownerName: "Rajat Verma",
      ownerPhone: "7388670069",
    },
    {
      id: 5,
      title: "2 BHK Apartment",
      location: "Sector 57",
      price: "20000",
      propertyType: "2 BHK",
      livingType: "Non-Furnished",
      amenities: ["WiFi", "Parking", "Furnished"],
      images:[require("../assets/images/img1.jpg"),require("../assets/images/img2.jpg"),require("../assets/images/img3.jpg")],
      video: require("../assets/videos/video1.mp4"),
      ownerName: "Rakesh Tiwari",
      ownerPhone: "7388670069",
    },
    {
      id: 6,
      title: "1 RK Studio",
      location: "Ardee City",
      price: "11000",
      propertyType: "1 RK",
      livingType: "Furnished",
      amenities: ["WiFi", "Parking"],
      images: [require("../assets/images/img1.jpg"), require("../assets/images/img2.jpg"), require("../assets/images/img3.jpg")],
      video: require("../assets/videos/video1.mp4"),
      ownerName: "Shivam Kumar",
      ownerPhone: "7388670069",
    },
]

const PropertyList = ({filters}) => {

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

    return(
        <div className="property-list">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((x) => (
            <PropertyCard key={x.id} property={x} filters={filters} />
          ))
        ) : (
          <p className="no-results">No properties match your filters.</p>
        )}
      </div>
    );
}
export default PropertyList;
