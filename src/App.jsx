
import { BrowserRouter } from 'react-router';
import './App.css';
import Home from './screens/Home';
import Signup_shipper from './screens/Signup_shipper';
import Signup_carrier from './screens/Signup_carrier';
import Signin from './screens/Signin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup-shipper' element={<Signup_shipper/>}/>
      <Route path='/signup-carrier' element={<Signup_carrier/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
