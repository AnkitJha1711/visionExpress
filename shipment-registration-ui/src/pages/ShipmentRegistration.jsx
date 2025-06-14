import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ShipmentRegistration.css";

const ShipmentRegistration = () => {
  
  return (
    <div className="shipment-container">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/shipper-profile" className="nav-icon">
          <FaUserCircle size={28} />
        </Link>
        <h1 className="org-name">Vyapargati</h1>
        <div className="nav-links">
          <Link to="/home" className="nav-button">Home</Link>
          <Link to="/logout" className="nav-button logout">Logout</Link>
        </div>
      </nav>

      {/* Main Form */}
      <div className="form-wrapper">
        <h2 className="form-title">Shipper Company: ABC Logistics</h2>
        <form className="shipment-form">
          <div className="form-group">
            <label>Source</label>
            <input type="text" placeholder="Enter source" />
          </div>

          <div className="form-group">
            <label>Destination</label>
            <input type="text" placeholder="Enter destination" />
          </div>

          <div className="form-group">
            <label>Type of Cargo</label>
            <select name="itemType" required>
                  <option value="">Select cargo type</option>
                  <option value="Perishable Goods">Perishable Goods</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Automotive Parts">Automotive Parts</option>
                  <option value="Pharmaceuticals">Pharmaceuticals</option>
                  <option value="Textiles and Clothing">Textiles and Clothing</option>
                  <option value="Construction Material">Construction Material</option>
                  <option value="Heavy Machinery">Heavy Machinery</option>
                  <option value="Chemicals">Chemicals (Non-Hazardous)</option>
                  <option value="Documents & Parcels">Documents & Parcels</option>
                  <option value="Others">Others</option>
            </select>
          </div>

          <div className="form-group">
            <label>Dimensions (in feet)</label>
            <div className="dimension-group">
              <input type="number" placeholder="Length" />
              <input type="number" placeholder="Width" />
              <input type="number" placeholder="Height" />
            </div>
          </div>

          <div className="form-group">
            <label>Weight</label>
            <div className="weight-group">
              <input type="number" placeholder="Enter weight" />
              <select>
                <option>kg</option>
                <option>ton</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Urgency</label>
            <select>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="form-group">
            <label>Expected Date of Delivery</label>
            <input type="date" />
          </div>

          <div className="submit-wrapper">
            <button type="submit">Submit Shipment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShipmentRegistration;
