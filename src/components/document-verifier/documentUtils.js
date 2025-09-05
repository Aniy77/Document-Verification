
// Document number formatting and validation utilities

// Get the pattern for validating document numbers based on document type
export const getDocNumberPattern = (type) => {
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

// Get the format example for document numbers based on document type
export const getDocNumberFormat = (type) => {
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

// Validate document number based on its type
export const validateDocNumber = (number, type) => {
  const pattern = getDocNumberPattern(type);
  return pattern.test(number);
};

// Validate file type (PDF, PNG, JPEG)
export const validateFile = (file) => {
  const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg'];
  return file && allowedTypes.includes(file.type);
};

// Validate username (at least 3 characters)
export const validateUsername = (name) => {
  return name.trim().length >= 3;
};
