import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/ShipmentRegistration.css";

const ShipmentRegistration = () => {

  const [cargoType, setCargoType] = useState("");
  const [customCargo, setCustomCargo] = useState("");
  
  return (
    <div className="shipment-container">

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
            <select
              name="itemType"
              required
              value={cargoType}
              onChange={(e) => setCargoType(e.target.value)}
            >
              <option value="">Material type</option>
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
            
            {cargoType === "Others" && (
              <input
                type="text"
                placeholder="Specify other material"
                value={customCargo}
                onChange={(e) => setCustomCargo(e.target.value)}
                style={{ marginTop: "8px" }}
              />
            )}
          </div>

          <div className="form-group">
            <label>Dimensions</label>
            <div className="dimension-group">
              <input type="number" placeholder="Length (in feet)" />
              <input type="number" placeholder="Width (in feet)" />
              <input type="number" placeholder="Height (in feet)" />
            </div>
          </div>

          <div className="form-group">
            <label>Weight</label>
            <div className="weight-group">
              <input type="number" placeholder="Enter weight (in Kg)" />
            </div>
          </div>

          <div className="form-group">
            <label>Urgency</label>
            <select>
              <option>True</option>
              <option>False</option>
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
