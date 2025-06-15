import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Profile from './components/Profile/Profile';
import ShipmentRegistration from './pages/ShipmentRegistration';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/shipmentregister' element={<ShipmentRegistration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
