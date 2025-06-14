import React from 'react';
import Navbar from './components/Navbar';
import ShipmentTable from './components/ShipmentTable';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <ShipmentTable />
      </main>
    </div>
  );
};

export default App;
