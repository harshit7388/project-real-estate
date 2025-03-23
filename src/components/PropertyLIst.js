
import React, { useState ,useEffect} from 'react';
import PropertyCard from './PropertyCard';
import '../styles/components/_propertyList.scss';
const propertiesData = [
  {
    id: 1,
    title: "Luxury PG with Food",
    location: "Sector 45",
    price: "12000",
    propertyType: "PG with Food",
    livingType: "For Girls Only",
    amenities: ["WiFi", "Parking"],
    image: "https://source.unsplash.com/300x200/?apartment,room",
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
    image: "https://source.unsplash.com/300x200/?house,flat",
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
    image: "https://source.unsplash.com/300x200/?room,interior",
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
    image: "https://source.unsplash.com/300x200/?pg,accommodation",
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
    image: "https://source.unsplash.com/300x200/?apartment,building",
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
