import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Package, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import '../styles/SigninPage.css'; 

const SigninPage = () => {
  const [userType, setUserType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signin data:', { userType, ...formData });
    alert(`${userType} signin successful!`);
  };

  const resetForm = () => {
    setUserType('');
    setFormData({
      email: '',
      password: '',
      rememberMe: false
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (!userType) {
    return (
      <div className="signin-container">
        <div className="signin-wrapper">
          <div className="header-section">
            <h1 className="main-title">Welcome Back to TransportHub</h1>
            <p className="main-subtitle">
              Sign in to manage your transportation business
            </p>
          </div>

          <div className="user-type-grid">
            {/* Shipper Card */}
            <div 
              onClick={() => setUserType('shipper')}
              className="user-type-card shipper-card"
            >
              <div className="card-content">
                <div className="icon-container shipper-icon">
                  <Package className="icon" />
                </div>
                <h2 className="card-title">Shipper Portal</h2>
                <p className="card-description">
                  Access your shipments, track deliveries, and manage carriers
                </p>
                <div className="feature-highlight">
                  <div className="highlight-item">
                    <span className="highlight-number">24/7</span>
                    <span className="highlight-text">Tracking</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">500+</span>
                    <span className="highlight-text">Verified Carriers</span>
                  </div>
                </div>
                <button className="signin-btn shipper-btn">
                  Sign in as Shipper
                </button>
              </div>
            </div>

            {/* Carrier Card */}
            <div 
              onClick={() => setUserType('carrier')}
              className="user-type-card carrier-card"
            >
              <div className="card-content">
                <div className="icon-container carrier-icon">
                  <Truck className="icon" />
                </div>
                <h2 className="card-title">Carrier Portal</h2>
                <p className="card-description">
                  Find loads, manage routes, and track your earnings
                </p>
                <div className="feature-highlight">
                  <div className="highlight-item">
                    <span className="highlight-number">1000+</span>
                    <span className="highlight-text">Active Loads</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">$2M+</span>
                    <span className="highlight-text">Paid Weekly</span>
                  </div>
                </div>
                <button className="signin-btn carrier-btn">
                  Sign in as Carrier
                </button>
              </div>
            </div>
          </div>

          <div className="signup-prompt">
            <p>Don't have an account? <a href="#" className="signup-link">Create one here</a></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-card">
          <div className="form-header">
            <div className={`form-icon ${userType}-form-icon`}>
              {userType === 'shipper' ? 
                <Package className="form-icon-svg" /> :
                <Truck className="form-icon-svg" />
              }
            </div>
            <h1 className="form-title">
              {userType === 'shipper' ? 'Shipper' : 'Carrier'} Sign In
            </h1>
            <p className="form-subtitle">Welcome back! Please sign in to your account</p>
            <button 
              onClick={resetForm}
              className="back-btn"
            >
              ← Back to selection
            </button>
          </div>

          <div className="form-content">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input with-icon"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <Lock className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="form-input with-icon with-toggle"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="password-toggle"
                >
                  {showPassword ? <EyeOff className="toggle-icon" /> : <Eye className="toggle-icon" />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="checkbox-input"
                />
                <span className="checkbox-text">Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button
              type="button"
              onClick={(e) => {
                handleSubmit(e);
                if (userType === 'shipper') {
                  navigate('/shipper/profile');
                } else if (userType === 'carrier') {
                  navigate('/profilecarrier');
                }
              }}

              className={`submit-btn ${userType}-submit-btn`}
            >
              Sign In
            </button>

            <div className="divider">
              <span className="divider-text">or</span>
            </div>

            <div className="alternative-signin">
              <button className="google-btn">
                <svg className="google-icon" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
              
              <button className="microsoft-btn">
                <svg className="microsoft-icon" viewBox="0 0 24 24">
                  <path fill="#F25022" d="M1 1h10v10H1z"/>
                  <path fill="#00A4EF" d="M13 1h10v10H13z"/>
                  <path fill="#7FBA00" d="M1 13h10v10H1z"/>
                  <path fill="#FFB900" d="M13 13h10v10H13z"/>
                </svg>
                Continue with Microsoft
              </button>
            </div>
          </div>

          <div className="signup-prompt-bottom">
            <p>Don't have an account? <a href="#" className="signup-link-text">Sign up here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;