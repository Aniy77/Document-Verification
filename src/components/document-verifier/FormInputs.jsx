
import React from 'react';
import { FaUser, FaFileAlt, FaFileContract } from "react-icons/fa";

const FormInputs = ({ 
  username, 
  documentType, 
  docNumber, 
  handleUsernameChange, 
  handleDocTypeChange, 
  handleDocNumberChange,
  getDocNumberFormat
}) => {
  return (
    <div className="form-row">
      {/* Username Field */}
      <div className="form-group">
        <label className="form-label">
          <FaUser size={16} className="icon-blue" /> 
          Username
        </label>
        <input 
          type="text" 
          value={username} 
          onChange={handleUsernameChange} 
          placeholder="Enter your username" 
          className="form-input"
        />
        <p className="form-help-text">Must be at least 3 characters</p>
      </div>
      
      {/* Document Type Dropdown */}
      <div className="form-group">
        <label className="form-label">
          <FaFileAlt size={16} className="icon-blue" />
          Document Type
        </label>
        <select 
          value={documentType} 
          onChange={handleDocTypeChange}
          className="form-select"
        >
          <option value="">Select document type</option>
          <option value="passport">Passport</option>
          <option value="driver_license">Driver's License</option>
          <option value="id_card">ID Card</option>
          <option value="aadhar">Aadhar Card</option>
          <option value="light_bill">Light Bill</option>
          <option value="birth_certificate">Birth Certificate</option>
          <option value="voting_card">Voting Card</option>
          <option value="pancard">PAN Card</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Document Number Field */}
      <div className="form-group">
        <label className="form-label">
          <FaFileContract size={16} className="icon-blue" />
          Document Number
        </label>
        <input 
          type="text" 
          value={docNumber} 
          onChange={handleDocNumberChange} 
          placeholder={documentType ? `Format: ${getDocNumberFormat(documentType)}` : "Select document type first"} 
          className="form-input"
        />
        <p className="form-help-text">
          {documentType ? `Please enter in format: ${getDocNumberFormat(documentType)}` : "Select document type first"}
        </p>
      </div>
    </div>
  );
};

export default FormInputs;
