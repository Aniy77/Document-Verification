
import React, { useState } from 'react';
import DocumentForm from './DocumentForm';
import VerificationResults, { VerificationResult } from './VerificationResults';
import './DocumentVerifier.css';

const DocumentVerifier = () => {
  const [file, setFile] = useState<File | null>(null);
  const [username, setUsername] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [docNumber, setDocNumber] = useState('');
  const [results, setResults] = useState<VerificationResult | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleDocTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDocumentType(e.target.value);
    // Reset the document number when type changes
    setDocNumber('');
  };

  const handleDocNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocNumber(e.target.value);
  };

  const validateFile = (file: File | null) => {
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg'];
    return file && allowedTypes.includes(file.type);
  };

  const getDocNumberPattern = (type: string) => {
    switch (type) {
      case 'passport':
        return /^[A-Z]{3}-\d{4}$/; // Format: ABC-1234
      case 'driver_license':
        return /^[A-Z]{2}\d{6}$/; // Format: AB123456
      case 'id_card':
        return /^ID-\d{6}$/; // Format: ID-123456
      case 'aadhar':
        return /^\d{4}\s\d{4}\s\d{4}$/; // Format: 1234 5678 9012
      case 'light_bill':
        return /^[A-Z]{2}-\d{6}-\d{2}$/; // Format: AB-123456-12
      case 'birth_certificate':
        return /^BC-\d{8}$/; // Format: BC-12345678
      case 'voting_card':
        return /^[A-Z]{3}\d{7}$/; // Format: ABC1234567
      case 'pancard':
        return /^[A-Z]{5}\d{4}[A-Z]$/; // Format: ABCDE1234F
      default:
        return /^.{6,}$/; // At least 6 characters for other document types
    }
  };

  const getDocNumberFormat = (type: string) => {
    switch (type) {
      case 'passport':
        return 'ABC-1234';
      case 'driver_license':
        return 'AB123456';
      case 'id_card':
        return 'ID-123456';
      case 'aadhar':
        return '1234 5678 9012';
      case 'light_bill':
        return 'AB-123456-12';
      case 'birth_certificate':
        return 'BC-12345678';
      case 'voting_card':
        return 'ABC1234567';
      case 'pancard':
        return 'ABCDE1234F';
      default:
        return 'At least 6 characters';
    }
  };

  const validateDocNumber = (number: string, type: string) => {
    const pattern = getDocNumberPattern(type);
    return pattern.test(number);
  };

  const validateUsername = (name: string) => {
    return name.trim().length >= 3;
  };

  const handleSubmit = (e: React.FormEvent) => {
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
          <DocumentForm
            username={username}
            documentType={documentType}
            docNumber={docNumber}
            file={file}
            isVerifying={isVerifying}
            onUsernameChange={handleUsernameChange}
            onDocTypeChange={handleDocTypeChange}
            onDocNumberChange={handleDocNumberChange}
            setFile={setFile}
            onSubmit={handleSubmit}
            getDocNumberFormat={getDocNumberFormat}
          />

          <VerificationResults 
            results={results} 
            getDocNumberFormat={getDocNumberFormat} 
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentVerifier;
