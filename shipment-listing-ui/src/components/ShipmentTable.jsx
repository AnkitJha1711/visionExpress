import React, { useState } from 'react';
import './ShipmentTable.css';

const initialShipments = [
  {
    org: 'E Corp',
    source: 'Mumbai',
    destination: 'Delhi',
    distance: 1400,
    weight: '12 tons',
    item: 'Electronics',
    cargo: 'Fragile',
  },
  {
    org: 'F Corp',
    source: 'Pune',
    destination: 'Chennai',
    distance: 1200,
    weight: '8 tons',
    item: 'Textiles',
    cargo: 'Non-hazardous',
  },
  {
    org: 'G Corp',
    source: 'Kolkata',
    destination: 'Bangalore',
    distance: 1800,
    weight: '15 tons',
    item: 'Machinery',
    cargo: 'Heavy Equipment',
  },
];

const ShipmentTable = () => {
  const [shipments, setShipments] = useState(initialShipments);
  const [filterType, setFilterType] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (type) => {
    setFilterType(type);
    setFilterValue('');
  };

  const handleValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  let filteredShipments = [...shipments];

  if (filterType === 'org') {
    filteredShipments = shipments.filter((s) =>
      s.org.toLowerCase().includes(filterValue.toLowerCase())
    );
  } else if (filterType === 'destination') {
    filteredShipments = shipments.filter((s) =>
      s.destination.toLowerCase().includes(filterValue.toLowerCase())
    );
  } else if (filterType === 'distance') {
    filteredShipments = shipments.sort((a, b) => a.distance - b.distance);
  }

  return (
    <div className="shipment-table-wrapper">
      <h2 className="shipment-heading">Available Shipments</h2>

      <div className="filter-bar">
        <select value={filterType} onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="">-- Filter by --</option>
          <option value="distance">Ascending Distance</option>
          <option value="org">Organization Name</option>
          <option value="destination">Destination</option>
        </select>

        {(filterType === 'org' || filterType === 'destination') && (
          <input
            type="text"
            placeholder={`Enter ${filterType}`}
            value={filterValue}
            onChange={handleValueChange}
          />
        )}
      </div>

      <div className="shipment-table-container">
        <table className="shipment-table">
          <thead>
            <tr>
              <th>Organization</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Distance</th>
              <th>Weight</th>
              <th>Item Type</th>
              <th>Type of Cargo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredShipments.map((ship, idx) => (
              <tr key={idx} className="hoverable-row">
                <td>{ship.org}</td>
                <td>{ship.source}</td>
                <td>{ship.destination}</td>
                <td>{ship.distance} km</td>
                <td>{ship.weight}</td>
                <td>{ship.item}</td>
                <td>{ship.cargo}</td>
                <td>
                  <button className="accept-btn">Accept</button>
                  <button className="hold-btn">Hold</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipmentTable;
