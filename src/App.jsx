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
import Profile from './pages/Profilecarrier';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />    
        <Route path='/profilecarrier' element={<Profilecarrier />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/shipmentregister' element={<ShipmentRegistration />} />
        <Route path='/availabletransporters' element={<AvailableTransporters />} />
        <Route path='/transport' element={<TransporterProfile />} />
        <Route path='/shipperdashboard' element={<ShipperDashboard />} />
        <Route path='/listedshipments' element={<ListedShipments />} />
        <Route path='/shipperprofile' element={<ShipperProfile />} />
        <Route path='/signuppage' element={<SignupPage />} />     
         <Route path='/signinpage' element={<SigninPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
