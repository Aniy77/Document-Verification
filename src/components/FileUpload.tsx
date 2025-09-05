
import React, { useState } from 'react';
import { Upload } from "lucide-react";

interface FileUploadProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ file, setFile }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

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
            <Upload size={40} />
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

export default FileUpload;
