import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img className="profile-avatar" src="https://i.pravatar.cc/100" alt="Avatar" />
        <div>
          <h2>Acme Logistics</h2>
          <p>GST No: 27AABCU9603R1Z2</p>
        </div>
      </div>
      <div className="profile-details">
        <div>
          <strong>Delivery Types:</strong> Express, Bulk
        </div>
        <div>
          <strong>Operating Cities:</strong> Mumbai, Delhi
        </div>
        <div>
          <strong>Vehicles:</strong> 10
        </div>
      </div>
      <button className="profile-shipment-btn">Get New Shipment</button>
      <h3 className="profile-shipments-title">My Shipments</h3>
      <table className="profile-shipments-table">
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
          <tr>
            <td>1</td>
            <td>Mumbai</td>
            <td>Delhi</td>
            <td>Truck</td>
            <td>In Transit</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Chennai</td>
            <td>Bangalore</td>
            <td>Van</td>
            <td>Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
