import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Profilecarrier from './pages/Profilecarrier'; 
import ShipmentRegistration from './pages/ShipmentRegistration';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import TransporterProfile from './pages/TransporterProfile';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/profilecarrier' element={<Profilecarrier />} />
        <Route path='/shipmentregister' element={<ShipmentRegistration />} />
        <Route path='/signuppage' element={<SignupPage />} />
        <Route path='/signinpage' element={<SigninPage />} />
        <Route path='/transport' element={<TransporterProfile />} />

        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
