import React, { useState } from 'react';
import { FaUserCircle, FaTruck, FaBell, FaBuilding, FaFileUpload, FaCogs, FaCheck } from 'react-icons/fa';
import '../styles/ShipperDashboard.css';

const ShipperProfile = () => {
  const [shipperType, setShipperType] = useState('Business');
  const [location, setLocation] = useState('Delhi');
  const [mode, setMode] = useState('Road');
  const [weight, setWeight] = useState('500 kg - Standard');

  const handleShipperTypeChange = (e) => {
    setShipperType(e.target.value);
    window.location.reload();
  };

  return (
    <div className="shipper-profile">
      <header className="navbar">
        <h2 className="logo">logix<span>junction</span></h2>
        <div className="nav-buttons">
          <button className="nav-btn">Home</button>
          <button className="nav-btn">Logout</button>
        </div>
      </header>

      <div className="card-container">
        {/* Basic Info */}
        <div className="card">
          <h3><FaUserCircle /> Basic Info</h3>
          <div className="basic-info">
            <div className="profile-pic" />
            <div className="info">
              <p><strong>Full Name / Company Name:</strong> Pradeep Shippers</p>
              <p><strong>Email:</strong> prodeep@example.com <FaCheck className="icon-status" /></p>
              <p><strong>Phone Number:</strong> +91 9876543210 <FaCheck className="icon-status" /></p>
              <p><strong>Address:</strong> 123 Logistics Lane, Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Business Details */}
        <div className="card">
          <h3><FaBuilding /> Business Details</h3>
          <p><strong>Type of Shipper:</strong> 
            <select value={shipperType} onChange={handleShipperTypeChange}>
              <option>Business</option>
              <option>Individual</option>
              <option>Enterprise</option>
            </select>
          </p>
          <p><strong>GST Number:</strong> 22AAAAA0000A1Z5</p>
          <p><strong>PAN Number:</strong> AAAAA0000</p>
        </div>

        {/* Shipping Preferences */}
        <div className="card">
          <h3><FaTruck /> Shipping Preferences</h3>
          <p><strong>Frequent Pickup Location(s):</strong> 
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
            </select>
          </p>
          <p><strong>Preferred Mode:</strong> 
            <select value={mode} onChange={(e) => setMode(e.target.value)}>
              <option>Road</option>
              <option>Rail</option>
              <option>Air</option>
              <option>Sea</option>
            </select>
          </p>
          <p><strong>Average Shipment Weight:</strong> 
            <select value={weight} onChange={(e) => setWeight(e.target.value)}>
              <option>500 kg - Standard</option>
              <option>1000 kg - Heavy</option>
              <option>200 kg - Light</option>
            </select>
          </p>
        </div>

        {/* Pickup Facilities */}
        <div className="card">
          <h3><FaCogs /> Pickup Facilities</h3>
          <p><strong>Loading/Unloading Help:</strong> <FaCheck className="icon-status" /></p>
          <p><strong>Availability of Forklift/Crane:</strong> <FaCheck className="icon-status disabled" /></p>
          <p><strong>Operating Hours:</strong> 8:00 AM - 6:00 PM</p>
          <p><strong>Weekly Off:</strong> Sunday</p>
        </div>

        {/* Notification Settings */}
        <div className="card">
          <h3><FaBell /> Notification Settings</h3>
          <p><strong>Notify via:</strong> Email</p>
          <p><strong>Daily Summary Report:</strong> <FaCheck className="icon-status" /></p>
        </div>

        {/* Transporter Preferences */}
        <div className="card">
          <h3><FaTruck /> Transporter Preferences</h3>
          <p><strong>Preference:</strong> Fast Delivery</p>
          <p><strong>Fast Delivery:</strong> 4.0+</p>
        </div>

        {/* Document Upload & KYC */}
        <div className="card">
          <h3><FaFileUpload /> Document Upload & KYC</h3>
          <p><strong>KYC Verified:</strong> <FaCheck className="icon-status" /></p>
          <p><strong>Last Updated On:</strong> April 24, 2024</p>
          <div className="uploads">
            <button>Upload ID Proof</button>
            <button>Upload GST Certificate</button>
            <button>Upload Authorization Letter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipperProfile;
