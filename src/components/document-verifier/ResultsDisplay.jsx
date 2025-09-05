
import React from 'react';

const ResultsDisplay = ({ results, getDocNumberFormat }) => {
  if (!results) return null;
  
  return (
    <div className="results-container">
      <h3 className="results-title">Verification Results</h3>
      
      <div className="results-grid">
        <div className="result-item">
          <p className="result-label">Username</p>
          <p className="result-value">{results.username}</p>
        </div>
        
        <div className="result-item">
          <p className="result-label">Document Type</p>
          <p className="result-value">{results.documentType.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
        </div>
        
        <div className="result-item">
          <p className="result-label">Document Number</p>
          <p className="result-value">{results.documentNumber}</p>
        </div>
        
        <div className="result-item">
          <p className="result-label">File Name</p>
          <p className="result-value">{results.filename}</p>
        </div>
        
        <div className="result-item">
          <p className="result-label">File Type</p>
          <p className="result-value">{results.type}</p>
        </div>
        
        <div className="result-item">
          <p className="result-label">Status</p>
          <div className={`status-badge ${results.status === 'Valid' ? 'status-valid' : 'status-invalid'}`}>
            {results.status}
          </div>
        </div>
      </div>
      
      <div className="feedback-list">
        <div className={`feedback-item ${results.feedback.username ? 'valid' : 'invalid'}`}>
          <span>{results.feedback.username ? '✓' : '✗'}</span> 
          <span>{results.feedback.username ? 'Username is valid' : 'Username must be at least 3 characters'}</span>
        </div>
        
        <div className={`feedback-item ${results.feedback.file ? 'valid' : 'invalid'}`}>
          <span>{results.feedback.file ? '✓' : '✗'}</span> 
          <span>{results.feedback.file ? 'File format is valid' : 'Unsupported file type (PDF, JPG, PNG only)'}</span>
        </div>
        
        <div className={`feedback-item ${results.feedback.number ? 'valid' : 'invalid'}`}>
          <span>{results.feedback.number ? '✓' : '✗'}</span> 
          <span>
            {results.feedback.number 
              ? 'Document number format is valid' 
              : `Format must be ${getDocNumberFormat(results.documentType)}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;
