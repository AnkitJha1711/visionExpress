import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import ShipmentRegistration from './pages/ShipmentRegistration';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/shipmentregister' element={<ShipmentRegistration />} />
        <Route path='/signuppage' element={<SignupPage />} />
        <Route path='/signinpage' element={<SigninPage />} />

        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
