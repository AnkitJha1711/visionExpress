import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TransporterProfile.css';
import { 
  User, 
  Truck, 
  Bell, 
  FileText, 
  MapPin, 
  Clock, 
  Star,
  Upload,
  ChevronDown,
  Check,
  Phone,
  Mail
} from 'lucide-react';


const TransporterProfile = () => {
  const [formData, setFormData] = useState({
    companyName: 'Rajesh Transport Services',
    email: 'rajesh@transportservices.com',
    phone: '+91 9876543210',
    address: '456 Transport Hub, Mumbai, India',
    transporterType: 'Fleet Owner',
    gstNumber: '27AAAAA0000A1Z5',
    panNumber: 'AAAAA0000',
    frequentRoutes: ['Delhi-Mumbai', 'Mumbai-Bangalore'],
    preferredMode: 'Road',
    fleetSize: '25',
    avgCapacity: '1000 kg',
    operatingHours: '24/7',
    weeklyOff: 'None',
    gpsTracking: true,
    insurance: true,
    loadingHelp: true,
    rating: '4.5',
    preference: 'High Volume',
    notifyVia: 'Email',
    dailySummary: true,
    kycVerified: true,
    lastUpdated: 'June 15, 2025'
  });

  const [activeSection, setActiveSection] = useState('basic');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleSwitch = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="transporter-profile">
      <div className="profile-header">
        <h1>Transporter Profile</h1>
        <div className="profile-brand">logixjunction</div>
      </div>

      <div className="profile-content">
        {/* Basic Info Section */}
        <div className="profile-section">
          <div className="section-header">
            <User className="section-icon" />
            <h2>Basic Info</h2>
          </div>
          
          <div className="section-content">
            <div className="profile-avatar">
              <div className="avatar-circle">
                <Truck className="avatar-icon" />
              </div>
            </div>
            
            <div className="basic-info-grid">
              <div className="info-group">
                <div className="form-group">
                  <label>Full Name / Company Name</label>
                  <input 
                    type="text" 
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                  />
                </div>
                
                <div className="form-group">
                  <label>Email</label>
                  <div className="input-with-icon">
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    <Check className="verify-icon verified" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <div className="input-with-icon">
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                    <Check className="verify-icon verified" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Address</label>
                  <input 
                    type="text" 
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="business-details">
                <h3>Business Details</h3>
                
                <div className="form-group">
                  <label>Type of Transporter</label>
                  <select 
                    value={formData.transporterType}
                    onChange={(e) => handleInputChange('transporterType', e.target.value)}
                  >
                    <option>Fleet Owner</option>
                    <option>Individual Driver</option>
                    <option>Logistics Company</option>
                    <option>Freight Broker</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>GST Number</label>
                  <input 
                    type="text" 
                    value={formData.gstNumber}
                    onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                  />
                </div>
                
                <div className="form-group">
                  <label>PAN Number</label>
                  <input 
                    type="text" 
                    value={formData.panNumber}
                    onChange={(e) => handleInputChange('panNumber', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation Preferences */}
        <div className="profile-section">
          <div className="section-header">
            <Truck className="section-icon" />
            <h2>Transportation Preferences</h2>
          </div>
          
          <div className="section-content">
            <div className="preferences-grid">
              <div className="preference-group">
                <div className="form-group">
                  <label>Frequent Routes</label>
                  <div className="route-tags">
                    {formData.frequentRoutes.map((route, index) => (
                      <span key={index} className="route-tag">{route}</span>
                    ))}
                    <button className="add-route-btn">+ Add Route</button>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Preferred Mode</label>
                  <select 
                    value={formData.preferredMode}
                    onChange={(e) => handleInputChange('preferredMode', e.target.value)}
                  >
                    <option>Road</option>
                    <option>Rail</option>
                    <option>Air</option>
                    <option>Sea</option>
                    <option>Multi-modal</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Fleet Size</label>
                  <select 
                    value={formData.fleetSize}
                    onChange={(e) => handleInputChange('fleetSize', e.target.value)}
                  >
                    <option>1-5 Vehicles</option>
                    <option>6-15 Vehicles</option>
                    <option>16-25 Vehicles</option>
                    <option>25+ Vehicles</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Average Load Capacity</label>
                  <input 
                    type="text" 
                    value={formData.avgCapacity}
                    onChange={(e) => handleInputChange('avgCapacity', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="facilities-group">
                <h3><User className="facilities-icon" /> Service Facilities</h3>
                
                <div className="facility-item">
                  <label>GPS Tracking Available</label>
                  <div 
                    className={`toggle-switch ${formData.gpsTracking ? 'active' : ''}`}
                    onClick={() => toggleSwitch('gpsTracking')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
                
                <div className="facility-item">
                  <label>Insurance Coverage</label>
                  <div 
                    className={`toggle-switch ${formData.insurance ? 'active' : ''}`}
                    onClick={() => toggleSwitch('insurance')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
                
                <div className="facility-item">
                  <label>Loading/Unloading Help</label>
                  <div 
                    className={`toggle-switch ${formData.loadingHelp ? 'active' : ''}`}
                    onClick={() => toggleSwitch('loadingHelp')}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </div>
                
                <div className="info-row">
                  <span className="info-label">Operating Hours</span>
                  <span className="info-value">{formData.operatingHours}</span>
                </div>
                
                <div className="info-row">
                  <span className="info-label">Weekly Off</span>
                  <span className="info-value">{formData.weeklyOff}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Preferences */}
        <div className="profile-section">
          <div className="section-header">
            <Star className="section-icon" />
            <h2>Service Preferences</h2>
          </div>
          
          <div className="section-content">
            <div className="service-preferences">
              <div className="form-group">
                <label>Service Preference</label>
                <select 
                  value={formData.preference}
                  onChange={(e) => handleInputChange('preference', e.target.value)}
                >
                  <option>High Volume</option>
                  <option>Express Delivery</option>
                  <option>Cost Effective</option>
                  <option>Specialized Cargo</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Current Rating</label>
                <div className="rating-display">
                  <Star className="star-icon filled" />
                  <span className="rating-value">{formData.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="profile-section">
          <div className="section-header">
            <Bell className="section-icon" />
            <h2>Notification Settings</h2>
          </div>
          
          <div className="section-content">
            <div className="notification-settings">
              <div className="notification-item">
                <span className="notification-label">Notify via</span>
                <div className="notification-value">
                  {formData.notifyVia} <ChevronDown className="dropdown-icon" />
                </div>
              </div>
              
              <div className="notification-item">
                <span className="notification-label">Daily Summary Report</span>
                <div 
                  className={`toggle-switch ${formData.dailySummary ? 'active' : ''}`}
                  onClick={() => toggleSwitch('dailySummary')}
                >
                  <div className="toggle-slider"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Document Upload & KYC */}
        <div className="profile-section">
          <div className="section-header">
            <FileText className="section-icon" />
            <h2>Document Upload & KYC</h2>
          </div>
          
          <div className="section-content">
            <div className="kyc-status">
              <div className="kyc-verified">
                <Check className="kyc-icon" />
                <span>KYC Verified</span>
              </div>
              <div className="last-updated">
                <span>Last Updated On</span>
                <span className="update-date">{formData.lastUpdated}</span>
              </div>
            </div>
            
            <div className="document-uploads">
              <div className="document-item">
                <span className="doc-label">Transport License</span>
                <button className="upload-btn">
                  <Upload className="upload-icon" />
                  Upload
                </button>
              </div>
              
              <div className="document-item">
                <span className="doc-label">Vehicle Registration</span>
                <button className="upload-btn">
                  <Upload className="upload-icon" />
                  Upload
                </button>
              </div>
              
              <div className="document-item">
                <span className="doc-label">Insurance Certificate</span>
                <button className="upload-btn">
                  <Upload className="upload-icon" />
                  Upload
                </button>
              </div>
              
              <div className="document-item">
                <span className="doc-label">PUC Certificate</span>
                <button className="upload-btn">
                  <Upload className="upload-icon" />
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransporterProfile;