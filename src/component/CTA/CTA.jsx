import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="CTA">
      <section class="cta-section">
        <div class="container flex cta-section-container">
          <h2>Start testing Today</h2>
          <p>Take the guess work out of the design decisions</p>
          <button
            className="blue-btn"  
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default CTA;
