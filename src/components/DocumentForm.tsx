
import React from 'react';
import { User, FileType, FileText, ArrowRight } from "lucide-react";
import FileUpload from './FileUpload';

interface DocumentFormProps {
  username: string;
  documentType: string;
  docNumber: string;
  file: File | null;
  isVerifying: boolean;
  onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDocTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onDocNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFile: (file: File | null) => void;
  onSubmit: (e: React.FormEvent) => void;
  getDocNumberFormat: (type: string) => string;
}

const DocumentForm: React.FC<DocumentFormProps> = ({
  username,
  documentType,
  docNumber,
  file,
  isVerifying,
  onUsernameChange,
  onDocTypeChange,
  onDocNumberChange,
  setFile,
  onSubmit,
  getDocNumberFormat
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-row">
        {/* Username Field */}
        <div className="form-group">
          <label className="form-label">
            <User size={16} className="icon-blue" /> 
            Username
          </label>
          <input 
            type="text" 
            value={username} 
            onChange={onUsernameChange} 
            placeholder="Enter your username" 
            className="form-input"
          />
          <p className="form-help-text">Must be at least 3 characters</p>
        </div>
        
        {/* Document Type Dropdown */}
        <div className="form-group">
          <label className="form-label">
            <FileType size={16} className="icon-blue" />
            Document Type
          </label>
          <select 
            value={documentType} 
            onChange={onDocTypeChange}
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
            <FileText size={16} className="icon-blue" />
            Document Number
          </label>
          <input 
            type="text" 
            value={docNumber} 
            onChange={onDocNumberChange} 
            placeholder={documentType ? `Format: ${getDocNumberFormat(documentType)}` : "Select document type first"} 
            className="form-input"
          />
          <p className="form-help-text">
            {documentType ? `Please enter in format: ${getDocNumberFormat(documentType)}` : "Select document type first"}
          </p>
        </div>
      </div>

      {/* File Upload Area */}
      <FileUpload file={file} setFile={setFile} />

      <button 
        type="submit" 
        className="submit-button"
        disabled={isVerifying}
      >
        {isVerifying ? (
          <>
            <span>Verifying</span>
            <span className="loading-dots">
              <span className="loading-dot">•</span>
              <span className="loading-dot">•</span>
              <span className="loading-dot">•</span>
            </span>
          </>
        ) : (
          <>
            <span>Verify Document</span>
            <ArrowRight size={20} />
          </>
        )}
      </button>
    </form>
  );
};

export default DocumentForm;
