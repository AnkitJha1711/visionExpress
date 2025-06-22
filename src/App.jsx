import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Profilecarrier from './pages/Profilecarrier'; 
import ShipmentRegistration from './pages/ShipmentRegistration';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import TransporterProfile from './pages/TransporterProfile';
import Navbar from './components/Navbar'; 
import AvailableTransporters from './pages/AvailableTransporters';
import ShipperDashboard from './pages/ShipperDashboard';
import ListedShipments from './pages/ListedShipments';
import ShipperProfile from './pages/ShipperProfile';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/profilecarrier' element={<Profilecarrier />} />
        <Route path='/shipmentregister' element={<ShipmentRegistration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
