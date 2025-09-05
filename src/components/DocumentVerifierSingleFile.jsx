
import React, { useState } from 'react';
import './DocumentVerifier.css';

// Import components
import FormInputs from './document-verifier/FormInputs';
import FileUploadArea from './document-verifier/FileUploadArea';
import SubmitButton from './document-verifier/SubmitButton';
import ResultsDisplay from './document-verifier/ResultsDisplay';

// Import utilities
import { 
  getDocNumberFormat, 
  validateDocNumber, 
  validateFile, 
  validateUsername 
} from './document-verifier/documentUtils';

const DocumentVerifierSingleFile = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [docNumber, setDocNumber] = useState('');
  const [results, setResults] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // File handling functions
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  // Form handling functions
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleDocTypeChange = (e) => {
    setDocumentType(e.target.value);
    // Reset the document number when type changes
    setDocNumber('');
  };

  const handleDocNumberChange = (e) => {
    setDocNumber(e.target.value);
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!username || !documentType || !docNumber || !file) {
      alert("Please fill in all fields and upload a document.");
      return;
    }
    
    setIsVerifying(true);
    
    // Simulate processing time
    setTimeout(() => {
      const fileValid = validateFile(file);
      const numberValid = validateDocNumber(docNumber, documentType);
      const usernameValid = validateUsername(username);
      const verificationStatus = fileValid && numberValid && usernameValid ? 'Valid' : 'Invalid';
      
      setResults({
        filename: file ? file.name : 'No file selected',
        type: file ? file.type : 'N/A',
        username: username,
        documentType: documentType,
        documentNumber: docNumber,
        status: verificationStatus,
        feedback: {
          file: fileValid,
          number: numberValid,
          username: usernameValid,
        },
      });
      
      setIsVerifying(false);
    }, 1500);
  };

  return (
    <div className="document-verifier-container">
      <div className="document-verifier-card">
        <div className="document-header">
          <div className="icon-circle">
            <div>📄</div>
          </div>
          <h2 className="header-title">Document Verification</h2>
        </div>

        <div className="form-container">
          {/* Combined form */}
          <form onSubmit={handleSubmit}>
            <FormInputs 
              username={username}
              documentType={documentType}
              docNumber={docNumber}
              handleUsernameChange={handleUsernameChange}
              handleDocTypeChange={handleDocTypeChange}
              handleDocNumberChange={handleDocNumberChange}
              getDocNumberFormat={getDocNumberFormat}
            />

            <FileUploadArea 
              isDragging={isDragging}
              handleDragOver={handleDragOver}
              handleDragLeave={handleDragLeave}
              handleDrop={handleDrop}
              handleFileChange={handleFileChange}
              file={file}
            />

            <SubmitButton isVerifying={isVerifying} />
          </form>

          {/* Results Display */}
          <ResultsDisplay 
            results={results} 
            getDocNumberFormat={getDocNumberFormat}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentVerifierSingleFile;
