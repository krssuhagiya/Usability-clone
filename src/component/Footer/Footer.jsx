import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="t-Footer">
        <div className="part-1 part">
            <img src="src/assets/logo.png" alt="" />
        </div>
        <div className="part-2 part">
          <h4>Product</h4>
          <span>Overview</span>
          <span>Pricing</span>
          <span>Usability Hub</span>
          <span>Customers Page</span>
          <span>Status Page</span>
        </div>
        <div className="part-3 part">
        <h4>Methodologies</h4>
          <span>Overview</span>
          <span>Pricing</span>
          <span>Usability Hub</span>
          <span>Customers Page</span>
          <span>Status Page</span>
        </div>
        <div className="part-4 part">
        <h4>Resources</h4>
          <span>Overview</span>
          <span>Pricing</span>
          <span>Usability Hub</span>
          <span>Customers Page</span>
          <span>Status Page</span>
        </div>
      </div>
      <div className="b-Footer">
        <span>Privacy Policy</span><span>Terms and conditions</span><span>Security Informations</span>
      </div>
    </div>
  );
};

export default Footer;
