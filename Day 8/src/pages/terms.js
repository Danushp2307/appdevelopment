import React from 'react';
import '../assets/css/terms.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <div className="terms-content">
        <section className="terms-section">
          <h2 className="terms-section-title">1. Introduction</h2>
          <p className="terms-section-text">
            Welcome to our website. These terms and conditions outline the rules and regulations for the use of our website.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="terms-section-title">2. Acceptance of Terms</h2>
          <p className="terms-section-text">
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use our website if you do not accept all of the terms and conditions stated on this page.
          </p>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default TermsAndConditions;
