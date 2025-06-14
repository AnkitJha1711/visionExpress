// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShipmentRegistration from './pages/ShipmentRegistration';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShipmentRegistration />} />
    </Routes>
  );
};

export default App;
