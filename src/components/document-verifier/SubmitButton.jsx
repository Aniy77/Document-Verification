
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const SubmitButton = ({ isVerifying }) => {
  return (
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
          <FaArrowRight size={20} />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
