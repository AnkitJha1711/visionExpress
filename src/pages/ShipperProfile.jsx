import React from 'react';
import '../styles/ShipperProfile.css';
import { FaUserCircle, FaCheckCircle, FaUpload } from 'react-icons/fa';

const ShipperProfile = () => {
  return (
    <div className="profile-page">

      <div className="profile-container">
        <h2>Shipper-Profile</h2>

        <section className="section">
          <h3>Basic Info & Business Details</h3>
          <div className="info-grid">
            <div className="avatar"><FaUserCircle size={80} /></div>
            <div>
              <label>Company Name</label>
              <input value="Acme Logistics" readOnly />
            </div>
            <div>
              <label>Email</label>
              <input value="acme@logistics.com" readOnly />
            </div>
            <div>
              <label>Phone Number</label>
              <input value="+91 9876543210" readOnly />
            </div>
            <div>
              <label>Address</label>
              <input value="123 Logistics Park, Delhi, India" readOnly />
            </div>
            <div>
              <label>Type of Shipper</label>
              <input value="Business" readOnly />
            </div>
            <div>
              <label>GST Number</label>
              <input value="27AABCU9603R1Z2" readOnly />
            </div>
            <div>
              <label>PAN Number</label>
              <input value="AAAAA0000A" readOnly />
            </div>
          </div>
        </section>

        <section className="section">
          <h3>Shipping Preferences</h3>
          <div className="info-grid">
            <div>
              <label>Frequent Pickup Location</label>
              <input value="Delhi" readOnly />
            </div>
            <div>
              <label>Preferred Transport Mode</label>
              <input value="Road" readOnly />
            </div>
            <div>
              <label>Average Shipment Weight</label>
              <input value="500 kg" readOnly />
            </div>
          </div>
        </section>

        <section className="section">
          <h3>Pickup Facilities & Transporter Preferences</h3>
          <div className="info-grid">
            <div>
              <label>Loading/Unloading Help</label>
              <input value="Available" readOnly />
            </div>
            <div>
              <label>Forklift/Crane</label>
              <input value="Available" readOnly />
            </div>
            <div>
              <label>Operating Hours</label>
              <input value="8:00 AM - 6:00 PM" readOnly />
            </div>
            <div>
              <label>Weekly Off</label>
              <input value="Sunday" readOnly />
            </div>
            <div>
              <label>Transporter Preference</label>
              <input value="Fast Delivery" readOnly />
            </div>
          </div>
        </section>

        <section className="section">
          <h3>Notification Settings</h3>
          <div className="info-grid">
            <div>
              <label>Notification Via</label>
              <input value="Email" readOnly />
            </div>
            <div>
              <label>Report Type</label>
              <input value="Daily Summary" readOnly />
            </div>
          </div>
        </section>

        <section className="section">
          <h3>Document Upload & KYC</h3>
          <p className="kyc-status">
            <FaCheckCircle className="verified" /> 18 KYC Verified (Last updated: April 24, 2024)
          </p>
          <div className="upload-buttons">
            <button><FaUpload /> Upload ID Proof</button>
            <button><FaUpload /> Upload GST Certificate</button>
            <button><FaUpload /> Upload Authorization Letter</button>
          </div>
        </section>
      </div>

      <footer className="footer">© 2025 LogiXjunction. All rights reserved.</footer>
    </div>
  );
};

export default ShipperProfile;
