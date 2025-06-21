// src/pages/ListedShipments.jsx
import React from "react";
import ShipmentCard from "../components/Cards/ShipmentCard";
import "../styles/ListedShipments.css";

const dummyShipments = [
  {
    id: 1,
    title: "Electronics Package",
    source: "Delhi",
    destination: "Mumbai",
    weight: 250,
    itemType: "Electronics",
    distance: 1440,
    expectedDelivery: "3 Days"
  },
  {
    id: 2,
    title: "Furniture Delivery",
    source: "Bangalore",
    destination: "Hyderabad",
    weight: 800,
    itemType: "Furniture",
    distance: 570,
    expectedDelivery: "1 Day"
  },
  {
    id: 3,
    title: "Textile Shipment",
    source: "Surat",
    destination: "Kolkata",
    weight: 1200,
    itemType: "Clothing & Fabric",
    distance: 1650,
    expectedDelivery: "4 Days"
  },
  {
    id: 4,
    title: "Pharmaceutical Load",
    source: "Pune",
    destination: "Chennai",
    weight: 400,
    itemType: "Medicines",
    distance: 1150,
    expectedDelivery: "2 Days"
  },
  {
    id: 5,
    title: "FMCG Products",
    source: "Noida",
    destination: "Jaipur",
    weight: 600,
    itemType: "Consumer Goods",
    distance: 280,
    expectedDelivery: "1 Day"
  }
];


const ListedShipments = () => {
  return (
    <div className="listed-shipments-page">
      <h1>Available Shipments</h1>
      <div className="shipment-list">
        {dummyShipments.map((shipment) => (
          <ShipmentCard key={shipment.id} shipment={shipment} />
        ))}
      </div>
    </div>
  );
};

export default ListedShipments;
