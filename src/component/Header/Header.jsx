import React from "react";
import "./Headre.css";
import logo from "../../assets/logo.png";
import headerMain from "../../assets/header-main.jpeg";
const Header = () => {
  return (
    <div className="header">
      <div className="banner">
        <div className="banner-text">
          📣 Interviews is now in beta! Read more →
        </div>
      </div>
      <div className="nav container">
        <img src={logo} alt="" />
        <ul>
          <li>Products</li>
          <li>Customers</li>
          <li>Pricing</li>
          <li>Resource</li>
          <li>
            <button className="btn">Sign in</button>
          </li>
          <li>
            <button
              className="blue-btn"
               
            >
              Sign up
            </button>
          </li>
        </ul>
      </div>
      <div className="main container">
        <div className="top-h">
          <div className="left-h">
            <h1 className="heading">Design Confidently.</h1>
            <p className="caption">
              UsabilityHub is a remote user research platform that takes the
              guesswork out of design decisions by validating them with real
              users.
            </p>
            <button
              className="blue-btn"
               
            >
              Get Started
            </button>
          </div>
          <div className="right-h">
            <img src={headerMain} alt="" />
          </div>
        </div>
        <div className="btm-h">
          <div className="btm-heading-caption">
            The world's best companies rely on UsabilityHub to make better
            design decisions.
          </div>
          <div className="companies">
            <img src="src/assets/google.png" alt="" className="logo" />
            <img src="src/assets/amazon.png" alt="" className="logo" />
            <img src="src/assets/airtable.png" alt="" className="logo" />
            <img src="src/assets/godaddy.svg" alt="" className="logo" />
            <img src="src/assets/asana.png" alt="" className="logo" />
            <img src="src/assets/box.png" alt="" className="logo" />
            <img src="src/assets/tastrabbit.png" alt="" className="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
