import React from 'react';
import '../styles/ShipperDashboard.css';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate  } from "react-router-dom";


const ShipperDashboard = () => {
  const pastShipments = [
    { id: 1, pickup: 'Mumbai', drop: 'Delhi', vehicle: 'Truck', status: 'In Transit' },
    { id: 2, pickup: 'Chennai', drop: 'Bangalore', vehicle: 'Van', status: 'Delivered' },
  ];
  const navigate= useNavigate();

  const handleShipment= ()=>{
    navigate("/shipmentregister")
  }

  const handleShipperProfile= ()=>{
    navigate("/shipperprofile")
  }

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="logo">LogiXjunction</div>
        <div className="nav-links">
          <a href="/">About</a>
          <a href="/">Help</a>
          <a href="/">Contact Us</a>
          <button className="signin-btn">Sign In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      <div className="profile-section">
        <div className="avatar"><FaUserCircle size={80} /></div>
        <div className="company-info">
          <h2>Acme Logistics</h2>
          <p className="gst">GST No: 27AABCU9603R1Z2</p>
          <p>Delivery Types: Express, Bulk</p>
          <p>Operating Cities: Mumbai, Delhi</p>
          <p>Vehicles: 10</p>
          <div className="action-buttons">
            <button className="btn-primary" onClick={handleShipment}>Make New Shipment</button>
            <br />
            <button className="btn-secondary" onClick={handleShipperProfile}>View Profile</button>
          </div>
        </div>
      </div>

      <div className="shipments-section">
        <h3>My Shipments</h3>
        <table className="shipment-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Pickup</th>
              <th>Drop</th>
              <th>Vehicle</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pastShipments.map((shipment) => (
              <tr key={shipment.id}>
                <td>{shipment.id}</td>
                <td>{shipment.pickup}</td>
                <td>{shipment.drop}</td>
                <td>{shipment.vehicle}</td>
                <td>{shipment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer className="footer">© 2025 Your Company Name. All rights reserved.</footer>
    </div>
  );
};

export default ShipperDashboard;
