import React, { useState } from 'react';
import { Truck, Package, ArrowRight, CheckCircle } from 'lucide-react';
import '../styles/SignupPage.css';

const SignupPage = () => {
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    password: '',
    confirmPassword: '',
    // Shipper specific
    shippingVolume: '',
    industryType: '',
    // Carrier specific
    fleetSize: '',
    serviceArea: '',
    vehicleTypes: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleVehicleTypeChange = (vehicleType) => {
    setFormData(prev => ({
      ...prev,
      vehicleTypes: prev.vehicleTypes.includes(vehicleType)
        ? prev.vehicleTypes.filter(type => type !== vehicleType)
        : [...prev.vehicleTypes, vehicleType]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup data:', { userType, ...formData });
    alert(`${userType} signup submitted successfully!`);
  };

  const resetForm = () => {
    setUserType('');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      password: '',
      confirmPassword: '',
      shippingVolume: '',
      industryType: '',
      fleetSize: '',
      serviceArea: '',
      vehicleTypes: []
    });
  };

  if (!userType) {
    return (
      <div className="signup-container">
        <div className="signup-wrapper">
          <div className="header-section">
            <h1 className="main-title">Join TransportHub</h1>
            <p className="main-subtitle">
              Connect shippers and carriers for seamless B2B transportation
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
                <h2 className="card-title">I'm a Shipper</h2>
                <p className="card-description">
                  I need to transport goods and am looking for reliable carriers
                </p>
                <ul className="feature-list">
                  <li className="feature-item">
                    <CheckCircle className="check-icon" />
                    <span>Access vetted carriers</span>
                  </li>
                  <li className="feature-item">
                    <CheckCircle className="check-icon" />
                    <span>Real-time tracking</span>
                  </li>
                  <li className="feature-item">
                    <CheckCircle className="check-icon" />
                    <span>Competitive pricing</span>
                  </li>
                </ul>
                <button className="signup-btn shipper-btn">
                  Sign up as Shipper
                  <ArrowRight className="arrow-icon" />
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
                <h2 className="card-title">I'm a Carrier</h2>
                <p className="card-description">
                  I provide transportation services and want to find more loads
                </p>
                <ul className="feature-list">
                  <li className="feature-item">
                    <CheckCircle className="check-icon" />
                    <span>Find profitable loads</span>
                  </li>
                  <li className="feature-item">
                    <CheckCircle className="check-icon" />
                    <span>Secure payments</span>
                  </li>
                  <li className="feature-item">
                    <CheckCircle className="check-icon" />
                    <span>Route optimization</span>
                  </li>
                </ul>
                <button className="signup-btn carrier-btn">
                  Sign up as Carrier
                  <ArrowRight className="arrow-icon" />
                </button>
              </div>
            </div>
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
              {userType === 'shipper' ? 'Shipper' : 'Carrier'} Registration
            </h1>
            <p className="form-subtitle">Create your account to get started</p>
            <button 
              onClick={resetForm}
              className="back-btn"
            >
              ← Back to selection
            </button>
          </div>

          <div className="form-content">
            {/* Personal Information */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Company Name *</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>

            {/* User Type Specific Fields */}
            {userType === 'shipper' && (
              <>
                <div className="form-group">
                  <label className="form-label">Monthly Shipping Volume</label>
                  <select
                    name="shippingVolume"
                    value={formData.shippingVolume}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select volume</option>
                    <option value="1-10">1-10 shipments</option>
                    <option value="11-50">11-50 shipments</option>
                    <option value="51-100">51-100 shipments</option>
                    <option value="100+">100+ shipments</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Industry Type</label>
                  <select
                    name="industryType"
                    value={formData.industryType}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="automotive">Automotive</option>
                    <option value="food-beverage">Food & Beverage</option>
                    <option value="construction">Construction</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </>
            )}

            {userType === 'carrier' && (
              <>
                <div className="form-group">
                  <label className="form-label">Fleet Size</label>
                  <select
                    name="fleetSize"
                    value={formData.fleetSize}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select fleet size</option>
                    <option value="1-5">1-5 vehicles</option>
                    <option value="6-20">6-20 vehicles</option>
                    <option value="21-50">21-50 vehicles</option>
                    <option value="50+">50+ vehicles</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Service Area</label>
                  <input
                    type="text"
                    name="serviceArea"
                    value={formData.serviceArea}
                    onChange={handleInputChange}
                    placeholder="e.g., California, West Coast, Nationwide"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Vehicle Types (Select all that apply)</label>
                  <div className="checkbox-grid">
                    {['Dry Van', 'Refrigerated', 'Flatbed', 'Step Deck', 'Heavy Haul', 'Tanker'].map((type) => (
                      <label key={type} className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={formData.vehicleTypes.includes(type)}
                          onChange={() => handleVehicleTypeChange(type)}
                          className="checkbox-input"
                        />
                        <span className="checkbox-text">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Password Fields */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Password *</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Confirm Password *</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className={`submit-btn ${userType}-submit-btn`}
            >
              Create {userType === 'shipper' ? 'Shipper' : 'Carrier'} Account
            </button>
          </div>

          <p className="signin-link">
            Already have an account?{' '}
            <a href="#" className="signin-link-text">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;