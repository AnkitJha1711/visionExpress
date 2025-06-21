// src/components/ShipmentCard.jsx
import React from "react";
import "../../styles/ListedShipments.css";

const ShipmentCard = ({ shipment }) => {
  return (
    <div className="shipment-card">
      <h3>{shipment.title}</h3>
      <p><strong>From:</strong> {shipment.source}</p>
      <p><strong>To:</strong> {shipment.destination}</p>
      <p><strong>Weight:</strong> {shipment.weight} kg</p>
      <p><strong>Item Type:</strong> {shipment.itemType}</p>
      <p><strong>Distance:</strong> {shipment.distance} km</p>
      <p><strong>Expected Delivery:</strong> {shipment.expectedDelivery}</p>
      <button className="accept-btn">Accept Shipment</button>
    </div>
  );
};

export default ShipmentCard;
