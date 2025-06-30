// // components/PropertyDetails.js
// import React from "react";
// import { useParams } from "react-router-dom";
// import PropertyList from "./PropertyList";

// const PropertyDetails = () => {
//   const { id } = useParams(); 
//   const property = PropertyList.find((p) => String(p.id) === id); 

//   if (!property) {
//     return <div>Property not found!</div>;
//   }

//   return (
//     <div className="property-details-page">
//       <h1>{property.title}</h1>
//       <p><strong>Location:</strong> {property.location}</p>
//       <p><strong>Price:</strong> ₹ {property.price}</p>
//       <p><strong>Owner:</strong> {property.ownerName}</p>
//       <p><strong>Facilities:</strong> {property.amenities?.join(", ")}</p>
//       <p><strong>Description:</strong> {property.description || "No description available."}</p>

//       {/* Show property images */}
//       <div className="property-images">
//         {property.images && property.images.map((img, index) => (
//           <img key={index} src={img} alt={`Property ${index + 1}`} width="300" style={{ marginRight: "10px" }} />
//         ))}
//       </div>

//       {/* Show property video if available */}
//       {property.video && (
//         <div style={{ marginTop: "20px" }}>
//           <video controls width="600">
//             <source src={property.video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertyDetails;
