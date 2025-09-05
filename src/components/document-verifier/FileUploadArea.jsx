
import React from 'react';
import { FaUpload } from "react-icons/fa";

const FileUploadArea = ({ 
  isDragging, 
  handleDragOver, 
  handleDragLeave, 
  handleDrop, 
  handleFileChange, 
  file 
}) => {
  return (
    <div className="form-group">
      <label className="form-label">Upload Document</label>
      <div 
        className={`file-upload-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="upload-icon-container">
          <div className="upload-icon">
            <FaUpload size={40} />
          </div>
          <div className="upload-pulse"></div>
        </div>
        <p className="upload-text">Drag & drop your document here or</p>
        <label className="browse-button">
          Browse Files
          <input 
            type="file" 
            accept=".pdf,.jpg,.jpeg,.png" 
            onChange={handleFileChange} 
            className="hidden-input" 
          />
        </label>
        {file && <p className="file-name">{file.name}</p>}
        <p className="file-formats">Supported: PDF, JPG, PNG</p>
      </div>
    </div>
  );
};

export default FileUploadArea;
