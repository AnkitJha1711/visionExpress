import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Profile from './components/Profile/Profile';
import ShipmentRegistration from './pages/ShipmentRegistration';
import AvailableTransporters from './pages/AvailableTransporters';
import ShipperDashboard from './pages/ShipperDashboard';
import ListedShipments from './pages/ListedShipments';
import ShipperProfile from './pages/ShipperProfile';



function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/shipmentregister' element={<ShipmentRegistration />} />
        <Route path='/availabletransporters' element={<AvailableTransporters />} />
        <Route path='/shipperdashboard' element={<ShipperDashboard />} />
        <Route path='/listedshipments' element={<ListedShipments />} />
        <Route path='/shipperprofile' element={<ShipperProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
